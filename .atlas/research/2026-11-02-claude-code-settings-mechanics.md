# Claude Code 2.1.269 mechanics (from official docs, fetched 2026-11-02)

## 1. Permission rules
- Syntax: `"permissions": {"allow": [...], "ask": [...], "deny": [...]}`. Bash rules are `Bash(prefix *)`. Examples to adapt: `"Bash(git push --force *)"`, `"Bash(sudo *)"`, `"Bash(rm -rf /*)"`. The `*` matches any text, so `Bash(rm -rf /*)` also matches `rm -rf /tmp/x`. Shell-wrapped and path-qualified forms (`/bin/rm`, `sh -c 'rm ...'`) are NOT matched (docs say so). Source: https://code.claude.com/docs/en/permissions.md
- Precedence: "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome." A project deny therefore beats the global bare `Bash` allow. Lists from user, project and local scopes merge rather than override. Source: https://code.claude.com/docs/en/permissions.md and https://code.claude.com/docs/en/settings.md#lists-merge-instead-of-overriding
- `ask` exists (`permissions.ask`, "Always prompt before listed tool uses"). Source: https://code.claude.com/docs/en/settings-reference.md
- `permissions.additionalDirectories` grants file access to extra directories. In project settings it applies only after the user accepts the workspace trust dialog; it grants file access only and does not load CLAUDE.md or config from them (only `--add-dir` does). Source: https://code.claude.com/docs/en/permissions.md#working-directories
- Read path rules are valid: `//` = absolute from filesystem root, `~/` = home, `./` or bare = relative to cwd. `Read(//Users/name/Library/Developer/Xcode/DerivedData/**)` matches the documented `//path` form. A Read deny also blocks Edit/Write on that path. Source: https://code.claude.com/docs/en/permissions.md#read-and-edit
- `defaultMode: "auto"`: a classifier reviews actions instead of prompting you. It is NOT honored from `.claude/settings.json` or `.claude/settings.local.json`; it must be in user or managed settings. Built-in default for interactive terminal and VS Code sessions is auto from v2.1.283. Source: https://code.claude.com/docs/en/permission-modes.md and https://code.claude.com/docs/en/settings.md#a-value-you-set-is-ignored

## 2. Hooks
- SessionStart with matcher (exact-match list): `{"hooks": {"SessionStart": [{"matcher": "startup|resume|clear|compact", "hooks": [{"type": "command", "command": "/path/to/script.sh"}]}]}}`. Docs note `fork` is a fifth value not in this matcher. Stdin schema not confirmed in the page section I read. Source: https://code.claude.com/docs/en/hooks.md
- PreToolUse blocking Bash: matcher `"Bash"`, command `${CLAUDE_PROJECT_DIR}/.claude/hooks/block.sh`.
  - Exit 2: blocking error, tool call prevented, stderr is the reason.
  - Or exit 0 with stdout `{"hookSpecificOutput": {"hookEventName": "PreToolUse", "permissionDecision": "deny", "permissionDecisionReason": "..."}}`. Pick one approach per hook.
  - Hook decisions do not bypass permission rules: a deny rule still blocks, and an ask rule still prompts even if the hook returns "allow". Source: https://code.claude.com/docs/en/hooks.md and https://code.claude.com/docs/en/permissions.md
- Merging: yes. User, project, and local hook entries add up; managed hooks are never removed by lower levels. An identical handler defined in two files runs once. Source: https://code.claude.com/docs/en/hooks.md#settings-merging-and-precedence

## 3. Plugins
- Non-interactive install: `claude plugin install swift-lsp@claude-plugins-official --scope project` (default scope is user; `--scope project` writes to `.claude/settings.json`). Prints `Successfully installed plugin: ...`. Source: https://code.claude.com/docs/en/plugins/install.md#install-from-your-shell
- Recorded in `enabledPlugins`: `~/.claude/settings.json` (user), `.claude/settings.json` (project), `.claude/settings.local.json` (local). The on-disk install record (e.g. installed_plugins.json) is not documented in the pages I read.
- Project `.claude/settings.json` can declare `enabledPlugins` and `extraKnownMarketplaces`. A teammate still runs `claude plugin install ... --scope project` once to download it. Marketplace declarations wait for folder trust. Source: https://code.claude.com/docs/en/plugins/install.md#choose-an-install-scope and https://code.claude.com/docs/en/settings.md#a-committed-key-doesnt-reach-teammates
- `swift-lsp` requires the `sourcekit-lsp` binary on the PATH of the shell that starts `claude`. The plugin does not ship the binary. Verify with `which sourcekit-lsp`. No toolchain path or env var is documented. Source: https://code.claude.com/docs/en/plugins/code-intelligence.md#install-a-code-intelligence-plugin
- README: sourcekit-lsp ships with the Swift toolchain; on macOS install Xcode or `brew install swift`. Source: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/swift-lsp
- `apple-skills`: not listed in the official docs or the code-intelligence table. Several third-party repos use that name (for example `apple-skills@apple-skills`), so verify the marketplace source before installing. Source (search only): https://github.com/Prisma-Labs-Dev/apple-skills

## 4. Skills
- Location: `.claude/skills/<skill-name>/SKILL.md` (committed to repo). Also loaded from parent directories up to repo root; nested `.claude/skills/` load when Claude works on files there. Source: https://code.claude.com/docs/en/skills.md
- Frontmatter (unknown fields are ignored without error): `name`, `description`, `when_to_use`, `argument-hint`, `arguments`, `disable-model-invocation`, `user-invocable`, `allowed-tools`, `disallowed-tools`, `model`, `effort`, `context` (`fork`), `agent`, `background`, `hooks`, `paths`, `shell`, plus `metadata`, `license`, `compatibility` (accepted, not acted on). Source: https://code.claude.com/docs/en/skills.md#frontmatter-fields
- Limits: keep SKILL.md under 500 lines. `description` + `when_to_use` truncated at 1,536 characters in the listing. Source: https://code.claude.com/docs/en/skills.md#size-guidance
- Progressive disclosure: link supporting files from SKILL.md and say when to load them. The docs name no `references/` folder; any folder works. `scripts/` are executed, not loaded. Source: https://code.claude.com/docs/en/skills.md#progressive-disclosure
- Live detection: yes. Edits to skills in `~/.claude/skills/`, project `.claude/skills/`, and `--add-dir` skill dirs apply without restart. A newly created top-level skills dir needs `/reload-skills`. Source: https://code.claude.com/docs/en/skills.md#live-detection

## 5. Output limits
- `BASH_MAX_OUTPUT_LENGTH`: default 30000 characters, max 150000. Caps bash output read back into the result. Overridden if the `bashOutputMaxChars` setting is set. Source: https://code.claude.com/docs/en/env-vars.md
- `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS`: default 25,000 tokens for file reads. Source: https://code.claude.com/docs/en/env-vars.md
- `MAX_MCP_OUTPUT_TOKENS`: default 25,000 tokens; warning fixed at 10,000 tokens; successful text results over 50,000 characters are saved to a file unless the server raises the tool's limit. Source: https://code.claude.com/docs/en/mcp.md (tips section; full "MCP output limits and warnings" section not read)
- `CLAUDE_CODE_MAX_OUTPUT_TOKENS` limits model output, not tool output. Source: https://code.claude.com/docs/en/env-vars.md
- Guidance for long command output (redirect to file, read by range): not documented in the sections I read.

## 6. CLAUDE.md
- Load order, broadest first (concatenated, not overridden): managed policy CLAUDE.md, then `~/.claude/CLAUDE.md`, then project `./CLAUDE.md` or `./.claude/CLAUDE.md`, then `./CLAUDE.local.md`. Ancestor directories load from filesystem root down to cwd; within each directory CLAUDE.local.md is appended after CLAUDE.md. Source: https://code.claude.com/docs/en/memory.md#how-claude-md-files-load
- Relative order of `./CLAUDE.md` vs `./.claude/CLAUDE.md` when both exist: not documented.
- Subdirectory CLAUDE.md files load on demand when Claude reads or edits files there. Source: https://code.claude.com/docs/en/memory.md#how-claude-md-files-load
- `@` imports: relative to the importing file, max depth 4 hops, skipped inside code spans and fenced blocks, external (outside cwd) imports need approval. Source: https://code.claude.com/docs/en/memory.md#import-additional-files
- `.claude/rules/`: exists. Recursive `*.md`. Rules without `paths` load at launch with same priority as `.claude/CLAUDE.md`. Rules with `paths:` frontmatter (YAML list of globs) load only when a matching file is read or edited. `~/.claude/rules/` loads before project rules. Source: https://code.claude.com/docs/en/memory.md#organize-rules-with-claude/rules/
- Docs say CLAUDE.md is context, not enforcement; use a PreToolUse hook to block actions. Target under 200 lines per file. Source: https://code.claude.com/docs/en/memory.md
