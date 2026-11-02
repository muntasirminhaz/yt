# Prompting Guide: working with Claude Code on this project

How to get fast, low-token, correct work out of Claude Code on the Safari extension. Read once; skim the cheat-sheet after.

## What the setup already does for you

| Piece | What it does | Where |
|---|---|---|
| `CLAUDE.md` | Always-loaded house rules: terse output, token discipline, decision ladder, build-through-scripts, no commits without go-ahead | repo root |
| `.claude/rules/` | Safari and Swift gotchas that load only when matching files are touched | `extension.md`, `swift.md` |
| `.claude/settings.json` | Guardrail deny list, extra readable dirs, SessionStart ladder reminder, PreToolUse delete guard | project settings |
| `.claude/skills/` | Project-authored and vendored skills; `OVERVIEW.md` is the routing table | per-skill folders |
| `scripts/` | Build, run, test, lint wrappers that hide `DEVELOPER_DIR` and filter logs | `build.sh`, `run-mac.sh`, `run-ios-sim.sh`, `test.sh`, `lint.sh` |

You rarely manage these; they fire on their own.

## Before you prompt (30 seconds)

1. New convention or gotcha discovered while testing in Safari? Add one line to the Project Gotchas in `CLAUDE.md` (always-on) or to the matching file in `.claude/rules/` (path-scoped). It is your durable note to every future session.
2. Changed the product name, bundle ID or minimum OS? Say so in the prompt; those live in several files.
3. Want a commit? Say "commit" explicitly; nothing is committed otherwise.

## How to prompt the main session

Good prompts are specific, scoped, and verifiable:

```
<what you want, concretely>
Scope: <which files/areas; what NOT to touch>
Acceptance: <how we'll know it's done: a passing test, a visible behaviour in Safari>
Notes: <gotchas, links, constraints>
```

Tips that pay off here:

- Point at the file: "the speed control lives in `extension/content.js`" beats making it search.
- Name the skill when the task has one: `use safari-web-extension`, `follow app-store-compliance`. The routing table is in `.claude/skills/OVERVIEW.md`.
- Ask for a plan first on anything non-trivial: "Plan only, don't write code yet."
- State scope limits: "Only touch `extension/`; don't change the Swift wrapper."
- Give an acceptance test: "Done = `scripts/test.sh js` green and the control appears on a watch page in macOS Safari."
- Mention the platform: iPhone (mobile site), iPad (desktop site) and Mac differ.
- Batch related asks into one prompt so tool calls run in parallel.

Example, good:
```
Add a playback-speed control (0.25 to 3.0 in 0.05 steps) under the player on watch pages.
Scope: extension/ only; persist the chosen speed in browser.storage.local.
Acceptance: scripts/test.sh js green; speed survives a YouTube in-page navigation; works on m.youtube.com and www.youtube.com.
Notes: no new permissions; see .claude/rules/extension.md for navigation detection.
```

Too vague: "make the speed thing work".

## Prompts for subagents

Skills, rules and `CLAUDE.md` do not auto-load into agents the main session spawns. A delegation prompt must carry its own context: name the skill or rule file to read, give the deliverable shape, say "return only the answer, no file dumps", and name the output path under `.atlas/tmp/`.

## Cheat-sheet

- `scripts/build.sh macos` or `ios`: headless build, one result line.
- `scripts/run-mac.sh`: build, launch once, then enable the extension in Safari (unsigned toggle resets on quit).
- `scripts/run-ios-sim.sh`: boot a simulator, install, open m.youtube.com, enable in Settings.
- `scripts/test.sh`, `scripts/lint.sh`: tests and lint; add `--fix` to lint to apply formatting.
- Plans: `.atlas/plans/`; reports: `.atlas/reports/`; scratch: `.atlas/tmp/` (wipe freely).
