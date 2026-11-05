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
- On large files (xcproj, build logs, vendored references, big plans) read targeted line ranges.
- Delegate broad or multi-file searches to a subagent; return the answer, not file dumps.

Subagent delegation (token discipline):

- Default search/exploration to the `Explore` agent (read-only); use general-purpose only when it must also edit.
- Use Haiku for mechanical/bulk work; reserve the default model for reasoning.
- Every delegation prompt must (1) state the exact deliverable shape, (2) say "return only the answer, no file dumps or narration", (3) name any relevant skill or rule file to read (skills and rules don't auto-load into subagents), (4) name the exact output path under `.atlas/tmp/`.
- Batch independent subagents in one message so they run concurrently.

Tool Use:

- Batch independent tool calls in one message. Never re-read a file just to confirm an edit succeeded.
- Filter command output at the source (`head`, `grep`, `jq`, `-quiet`); never dump a full xcodebuild log.

Write Less (Decision Ladder):

- Before writing code, understand the flow, then climb this ladder and stop at the first rung that holds:
  1. Does this need to exist at all? (YAGNI) Skip it.
  2. Already in this codebase? Reuse a module in `extension/`, the Swift folders, `scripts/`, or a pattern in `.claude/skills/`.
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
- Run only the minimal test set (`scripts/test.sh js -- --test-name-pattern <name>`; `scripts/test.sh swift -- -only-testing:<Target>/<Class>`).
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

- Layout: the Xcode project and its source folders sit at the repo root; `extension/` is the WebExtension exactly as shipped and the xcproj references it as a sibling folder; `tests/` and `scripts/` stay outside both so nothing extra ships. Project names (scheme, bundle IDs) live in `scripts/env.sh`.
- `xcode-select` points at Command Line Tools and `sudo` is unavailable: always use `DEVELOPER_DIR` (the scripts do).
- "Allow unsigned extensions" in Safari resets every time Safari quits; no Apple Developer team is configured yet, so local builds are unsigned or ad-hoc signed.
- Naming: never put "YouTube" or "YT" in the public app name or icon; "<Name> for YouTube" is permitted. The product is "Commander" (App Store listing "Commander for YouTube"); the rename record is `.atlas/runbooks/rename-checklist.md`.
- Everything else that is path-specific (Safari API limits, xcproj editing, entitlements, App Review rules) lives in `.claude/rules/extension.md` and `.claude/rules/swift.md`, which load automatically when those files are touched.

Skills routing:

- Index: `.claude/skills/OVERVIEW.md`. Activate `safari-web-extension` for anything under `extension/`; `apple-host-app` for Swift, xcproj, entitlements and messaging; `xcode-headless-build` for build/run/test/archive; `app-store-compliance` before any release-facing change.
