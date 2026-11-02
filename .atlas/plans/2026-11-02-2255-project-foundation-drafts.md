# Project foundation: proposed file drafts

Companion to `2026-11-02-2255-project-foundation-plan.md`. These are proposals for review; none of them exist in the repo yet. Paths assume the recommended layout (repo root = `yt_control_extention/`, Xcode project in `apple/`, extension in `extension/`). Names containing `yt` are placeholders until the product name is decided.

## A. `CLAUDE.md`

```markdown
Output Style:

- All conversational filler, pleasantries, apologies, and phrases like "Here is the code" are banned.
- Be concise. Solutions only. One sentence per thought. No "here's my thought process" preamble.
- Avoid comments in code; make code readable and self-explanatory. Lone exception: a single `// note:` marker when you intentionally cap scope; name the known limit and upgrade path.
- No post-task summaries or recaps unless asked. Don't echo file contents back after writing or editing.
- Answer only what's asked. Lead with the answer; default to <=4 lines unless the task needs more.
- Prefer a short table or bullet list over prose.
- Save plans with a timestamp to `.atlas/plans/` before non-trivial work.

Search & Read (token discipline):

- Use Grep/Glob to locate code; never read a whole file to find one thing.
- On large files (xcproj, build logs, big plans) read targeted line ranges.
- Delegate broad or multi-file searches to a subagent; return the answer, not file dumps.

Subagent delegation (token discipline):

- Default search/exploration to the `Explore` agent (read-only); use general-purpose only when it must also edit.
- Use Haiku for mechanical/bulk work; reserve the default model for reasoning.
- Every delegation prompt must (1) state the exact deliverable shape, (2) say "return only the answer, no file dumps or narration", (3) name any relevant skill to read (skills don't auto-load into subagents), (4) name the exact output path under `.atlas/tmp/`.
- Batch independent subagents in one message so they run concurrently.

Tool Use:

- Batch independent tool calls in one message. Never re-read a file just to confirm an edit succeeded.
- Filter command output at the source (`head`, `grep`, `jq`, `-quiet`); never dump a full xcodebuild log.

Write Less (Decision Ladder):

- Before writing code, understand the flow, then climb this ladder and stop at the first rung that holds:
  1. Does this need to exist at all? (YAGNI) Skip it.
  2. Already in this codebase? Reuse a module in `extension/`, the Swift folders (`Shared (App)`, `Shared (Extension)`, platform folders), `scripts/`, or a pattern in `.claude/skills/`.
  3. Does the WebExtension API, the web platform (HTML/CSS/DOM), Foundation, or the Swift standard library do it? Use it.
  4. Native platform feature (Safari permission UI, `browser.storage`, `browser.alarms`, App Groups, `color-scheme`, system fonts and Dynamic Type)? Use it.
  5. Already-installed dev dependency (`package.json`)? Use it. The shipped extension has no runtime dependencies; new deps need approval.
  6. Can it be one line? Make it one line.
  7. Only then: write the minimum that works.
- No unrequested abstractions, boilerplate, or files. Favor deletion; shortest working diff wins.
- Never trade away validation, security, privacy, accessibility, or App Review compliance for brevity.
- Full rung-by-rung guidance: `.claude/skills/minimal-code-ladder/SKILL.md`.

Work Scope:

- For destructive or >5-file operations, state the plan in one line and act; don't ask per-file.
- Run only the minimal test set (`node --test tests/<file>.test.js`; `xcodebuild test -only-testing:<Target>/<Class>` via `scripts/test.sh`).
- No git commits or pushes without an explicit go-ahead in the current conversation.

Scratch & Temp Files (no littering):

- All throwaway files go under `.atlas/tmp/` (gitignored): build logs, DerivedData, captured output, one-off scripts, downloads, vendor clones.
- Never write scratch to the repo root, `extension/`, the Xcode source folders, `tests/`, or system paths (`/tmp`, `~`). Never redirect into a bare filename.
- Canonical artifacts keep their homes: `.atlas/plans/`, `.atlas/reports/`, `.atlas/research/`, `.atlas/knowledge/`, `.atlas/runbooks/`.
- Delete your scratch when done; `.atlas/tmp/` is safe to wipe anytime.

Build & Run:

- Use the scripts: `scripts/build.sh macos|ios [Debug|Release]`, `scripts/run-mac.sh`, `scripts/run-ios-sim.sh`, `scripts/test.sh`, `scripts/lint.sh`. They set `DEVELOPER_DIR`, pass `-quiet`, write logs to `.atlas/tmp/build/`, and print only the result and errors.
- Anything the scripts don't cover: prefix with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`, add `-quiet`, redirect to `.atlas/tmp/build/<name>.log`, then grep.
- JavaScript changes reach Safari only after a rebuild (resources are copied into the `.appex`), or through Safari's "Add Temporary Extension" loop on macOS.

Project Gotchas (non-obvious; verify before relying):

- Layout: the Xcode project and its source folders sit at the repo root; `extension/` is the WebExtension exactly as shipped and the xcproj references it as a sibling folder; `tests/` and `scripts/` stay outside both so nothing extra ships.
- Project file is Xcode 27.2's JSON5 `project.xcproj`. Prefer `xcrun xcodeproj` for adding folders or memberships; after any hand edit run `xcrun xcprojformatter --update <Name>.xcodeproj` (it drops comments and unknown keys silently) and `xcodebuild -list`. Every subfolder inside `extension/` must be listed under `opaque-folders` or Xcode flattens it into the bundle's `Resources/`.
- `xcode-select` points at Command Line Tools and `sudo` is unavailable: always use `DEVELOPER_DIR`.
- "Allow unsigned extensions" in Safari resets every time Safari quits; content scripts do not run until the user grants site access.
- Path-scoped gotchas live in `.claude/rules/extension.md` and `.claude/rules/swift.md` and load automatically when those files are touched; do not duplicate them here.
- Naming: never put "YouTube" or "YT" in the public app name or icon; "<Name> for YouTube" is permitted by YouTube's brand rules.
- App Review: no ads, marketing, or in-app purchase inside the extension (4.4); the container app must do real work (4.2); request only the hosts needed (4.4.2).

Skills routing:

- Index: `.claude/skills/OVERVIEW.md`. Activate `safari-web-extension` for anything under `extension/`; `apple-host-app` for Swift, xcproj, entitlements and messaging; `xcode-headless-build` for build/run/test/archive; `app-store-compliance` before any release-facing change.
```

## B. `.claude/settings.json`

```json
{
  "permissions": {
    "allow": [
      "Bash",
      "Read",
      "Edit",
      "Write",
      "Glob",
      "Grep",
      "WebFetch",
      "WebSearch",
      "Read(//Users/muntasir/Library/Developer/Xcode/DerivedData/**)",
      "Read(//Users/muntasir/Library/Developer/CoreSimulator/Devices/**)",
      "Read(//Users/muntasir/Library/Logs/DiagnosticReports/**)",
      "Read(//Applications/Xcode.app/Contents/Developer/Library/Xcode/Templates/**)",
      "Read(//private/tmp/**)"
    ],
    "deny": [
      "Bash(git push --force*)",
      "Bash(git push -f*)",
      "Bash(git push * --force*)",
      "Bash(git reset --hard*)",
      "Bash(git clean -fd*)",
      "Bash(git branch -D *)",
      "Bash(rm -rf ~*)",
      "Bash(rm -rf $HOME*)",
      "Bash(sudo *)",
      "Bash(xcrun simctl erase *)",
      "Bash(xcrun simctl delete *)",
      "Bash(security delete-*)",
      "Bash(defaults delete *)",
      "Bash(curl * | sh*)",
      "Bash(curl * | bash*)"
    ],
    "additionalDirectories": [
      "/Users/muntasir/Library/Developer/Xcode/DerivedData",
      "/Users/muntasir/Library/Developer/CoreSimulator/Devices"
    ]
  },
  "enabledPlugins": {
    "swift-lsp@claude-plugins-official": true
  },
  "env": {
    "BASH_MAX_OUTPUT_LENGTH": "16000"
  },
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/guard.sh"
          }
        ]
      }
    ],
    "SessionStart": [
      {
        "matcher": "startup|resume|clear|compact",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Minimal-code ladder is active: 1 YAGNI 2 reuse existing code/skills 3 WebExtension API, web platform, Foundation or Swift stdlib 4 native Safari/Apple feature 5 installed dev dep (new deps need approval) 6 one line 7 minimum that works. Never cut validation, security, privacy, accessibility or App Review compliance. Build only through scripts/ (they set DEVELOPER_DIR and filter logs). No commits without an explicit go-ahead. Full guidance: .claude/skills/minimal-code-ladder/SKILL.md'"
          }
        ]
      }
    ]
  }
}
```

Notes, confirmed against the Claude Code 2.1 docs (archived in `.atlas/research/2026-11-02-claude-code-settings-mechanics.md`):
- Rules are evaluated deny, then ask, then allow, and lists merge across user, project and local scopes, so these denies beat the global bare `Bash` allow. An `"ask"` list exists; add `"Bash(git push *)"` there if you want a prompt before every push.
- The `*` in a Bash rule matches any trailing text, and path-qualified or shell-wrapped forms (`/bin/rm`, `sh -c '…'`) are not matched. A prefix rule like `Bash(rm -rf /*)` would also block legitimate absolute-path deletes inside the repo, so recursive deletes are policed by the small PreToolUse hook below instead: it reads the command from stdin and exits 2 (with the reason on stderr) when `rm -rf` targets anything outside the repo or outside `.atlas/tmp/`.
- `additionalDirectories` in project settings takes effect after you accept the workspace trust dialog and grants file access only.
- `defaultMode` is ignored in project settings; your user-level `auto` mode (a classifier reviews actions instead of prompting) stays in charge.
- `enabledPlugins` here is written by `claude plugin install swift-lsp@claude-plugins-official --scope project`; `sourcekit-lsp` is already on PATH at `/usr/bin/sourcekit-lsp`, which is all the plugin needs.
- `BASH_MAX_OUTPUT_LENGTH` caps what a shell result can inject into context (default 30,000 characters); the scripts filter logs anyway, so 16,000 is a safety net.
- Hooks merge across scopes; the SessionStart matcher values are `startup`, `resume`, `clear`, `compact`.

## B2. `.claude/hooks/guard.sh`

```bash
#!/usr/bin/env bash
# PreToolUse guard for Bash: block recursive deletes outside the repo or outside .atlas/tmp.
set -euo pipefail
cmd="$(jq -r '.tool_input.command // empty' 2>/dev/null || true)"
[ -z "$cmd" ] && exit 0
if printf '%s' "$cmd" | grep -Eq '(^|[;&| ])rm[[:space:]]+(-[a-zA-Z]*r[a-zA-Z]*|--recursive)'; then
  if printf '%s' "$cmd" | grep -Eq 'rm[^;&|]*[[:space:]](/|~|\$HOME|\.\.)'; then
    echo "guard: recursive delete outside the repo is blocked; delete inside .atlas/tmp/ or ask the user" >&2
    exit 2
  fi
fi
exit 0
```

## B3. `.claude/rules/` (path-scoped rules, loaded only when matching files are touched)

`.claude/rules/extension.md` (frontmatter `paths: ["extension/**", "tests/**"]`): Safari-specific WebExtension gotchas (per-site permission before content scripts run, non-persistent background on iOS, `storage.sync` does not sync, no `webNavigation.onHistoryStateUpdated`, `webRequest` cannot block and is absent on iOS, iPhone loads m.youtube.com, popup is a sheet on iPhone, subfolders need `opaque-folders`), plus the rule that nothing non-shippable goes in `extension/`.

`.claude/rules/swift.md` (frontmatter `paths: ["**/*.swift", "*.xcodeproj/**", "**/*.plist", "**/*.entitlements"]`): xcproj editing rules (`xcrun xcodeproj`, `xcprojformatter --update`, JSON5), bundle ID and deployment-target rules, Swift 6.2 isolation defaults in this project, App Group conventions, `DEVELOPER_DIR` reminder.

This keeps `CLAUDE.md` short (always loaded) while the long gotchas load only when relevant; the docs confirm `paths:` rules load on first read or edit of a matching file.

## C. `.gitignore`

```gitignore
# macOS
.DS_Store

# Xcode
xcuserdata/
*.xcuserstate
*.xcscmblueprint
*.xccheckout
*.moved-aside
DerivedData/
build/
*.xcarchive
*.ipa
*.dSYM
*.dSYM.zip
*.hmap
timeline.xctimeline
playground.xcworkspace

# Swift Package Manager
.build/
.swiftpm/
Packages/

# Node (dev tooling only)
node_modules/
npm-debug.log*

# Signing and secrets (never commit)
*.p12
*.cer
*.mobileprovision
*.provisionprofile
*.p8
AuthKey_*.p8
.env
.env.*

# Claude Code: share settings and skills, keep personal state local
/.claude/*
!/.claude/settings.json
!/.claude/skills/
!/.claude/agents/
!/.claude/commands/
/.claude/worktrees/

# Agent workspace scratch
/.atlas/tmp/*
!/.atlas/tmp/.gitkeep
!/.atlas/tmp/README.md

# Editors
/.idea
/.fleet
```

`.vscode/` is committed on purpose (recommendations, tasks, Swift toolchain path).

## D. `.claude/skills/OVERVIEW.md` skeleton

```markdown
# Agent Skills Overview

Skill stack for the Safari Web Extension for YouTube (macOS + iOS). Stack: WebExtension MV3 (JS/CSS/HTML) in `extension/`, Swift wrapper app + extension targets in the Xcode folders at the repo root, Xcode 27 headless builds, App Store distribution.

## Layer 1: Agent Foundation (always on)
minimal-code-ladder | context-engineering | planning-and-task-breakdown | incremental-implementation | debugging-and-error-recovery | token-efficiency-patterns | code-review-and-quality

## Layer 2: Safari extension (anything under extension/)
safari-web-extension (authored) | safari-web-extensions (masih-0x3) | safari-extension-control-workflow (gaelic-ghost)

## Layer 3: Apple wrapper (Swift folders, xcproj, entitlements)
apple-host-app (authored) | app-extension-architecture-workflow | diagnose-apple-entitlements | macos-capabilities | app-extensions templates | swift-concurrency-expert | swift-unit-testing

## Layer 4: Build, run, debug, release tooling
xcode-headless-build (authored) | run-simulator | run-device | ios-debugger-agent | asc-xcode-build

## Layer 5: App Store, privacy, design, accessibility
app-store-compliance (authored) | privacy-manifests | rejection-handler | app-store-preflight | axiom-shipping | axiom-design | accessibility-audit

## Layer 6 (next stage): YouTube page model
youtube-page-model (authored when features are designed)

## Activation
Tier 1 always: Layer 1. Tier 2 by path: extension/ -> Layer 2; Swift files or the xcproj -> Layer 3; build/run/test/archive -> Layer 4; anything user-facing or release-facing -> Layer 5.
```

## E. `.claude/skills/VENDORED.md` format

| Skill folder | Upstream | Commit | License | Trimmed |
|---|---|---|---|---|
| `safari-web-extensions` | github.com/masih-0x3/agent-skills `skills/safari-web-extensions` | 9d38a2c (2026-09-28) | MIT | removed dark-mode product section and references to non-existent `build-*-apps` skills |
| ... | ... | ... | ... | ... |

Commit hashes for every cloned pack are recorded in `.atlas/tmp/vendor-clones/SOURCES.txt` and will be copied into this ledger.

## F. `scripts/build.sh` (shape; the other scripts follow the same pattern)

```bash
#!/usr/bin/env bash
# Usage: scripts/build.sh macos|ios [Debug|Release]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export DEVELOPER_DIR="${DEVELOPER_DIR:-/Applications/Xcode.app/Contents/Developer}"
PLATFORM="${1:-macos}"; CONFIG="${2:-Debug}"
PROJECT="$ROOT/yt.xcodeproj"                  # updated when the product is renamed
LOGDIR="$ROOT/.atlas/tmp/build"; mkdir -p "$LOGDIR"
case "$PLATFORM" in
  macos) SCHEME="yt (macOS)"; DEST="platform=macOS,arch=arm64" ;;
  ios)   SCHEME="yt (iOS)";   DEST="generic/platform=iOS Simulator" ;;
  *) echo "usage: $0 macos|ios [Debug|Release]" >&2; exit 2 ;;
esac
LOG="$LOGDIR/build-$PLATFORM-$CONFIG.log"
if xcodebuild -project "$PROJECT" -scheme "$SCHEME" -configuration "$CONFIG" -destination "$DEST" \
     -derivedDataPath "$LOGDIR/DerivedData" CODE_SIGNING_ALLOWED=NO -quiet build >"$LOG" 2>&1; then
  echo "BUILD OK: $PLATFORM $CONFIG (log: ${LOG#$ROOT/})"
else
  echo "BUILD FAILED: $PLATFORM $CONFIG (log: ${LOG#$ROOT/})"; grep -E 'error:' "$LOG" | sort -u | head -20; exit 1
fi
```

`run-mac.sh` builds, then launches the app once (`open`), prints the Safari steps and checks registration with `pluginkit -mAvvv -p com.apple.Safari.web-extension`. `run-ios-sim.sh` picks a UDID from `simctl list`, boots, installs, launches, and opens `https://m.youtube.com`. `test.sh` runs `node --test tests/` and, when Swift test targets exist, `xcodebuild test`. `lint.sh` runs `eslint extension/` and `swift-format lint` over the Swift folders. The signing mode for local macOS runs (unsigned versus ad-hoc "Sign to Run Locally") is finalised in phase 6 when we see what Safari 27.2 accepts.

## G. `.vscode/extensions.json`

```json
{
  "recommendations": [
    "sswg.swift-lang",
    "sweetpad.sweetpad",
    "dbaeumer.vscode-eslint",
    "editorconfig.editorconfig"
  ]
}
```

## H. `.atlas/tmp/README.md`

```markdown
Throwaway scratch only. Build logs, DerivedData, vendor clones, captured output. Safe to wipe at any time. Nothing here is committed.
```
