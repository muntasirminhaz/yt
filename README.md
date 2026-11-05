# Commander for YouTube: Safari Web Extension (macOS + iOS)

A Safari Web Extension that adds playback and interface controls to youtube.com, packaged inside an iOS app and a macOS app for App Store distribution. The product is "Commander"; the App Store listing name is "Commander for YouTube" (YouTube brand rules allow "<Name> for YouTube" and forbid "YouTube" or "YT" inside the name itself).

Status (2026-11-05): feature complete for a first release and passing the live Safari suites on Mac, iPhone and iPad simulators (`tests/live/`). Waiting on the product name, icons and a Developer Program team; see `.atlas/runbooks/rename-checklist.md` and `.atlas/reports/2026-11-03-feature-status.md`.

## Layout

| Path | What |
|---|---|
| `extension/` | The WebExtension exactly as Safari loads it: `manifest.json` (MV3), `background.js`, `content.js`, `popup.*`, `_locales/`, `images/`. Everything here ships. |
| `Commander.xcodeproj` | Xcode 27.2 project (JSON5 `project.xcproj`). Targets: `Commander (iOS)`, `Commander (macOS)`, `Commander Extension (iOS)`, `Commander Extension (macOS)`. |
| `Shared (App)/`, `iOS (App)/`, `macOS (App)/` | Container app (the thing users install from the App Store). |
| `Shared (Extension)/`, `iOS (Extension)/`, `macOS (Extension)/` | Extension targets: `SafariWebExtensionHandler.swift` (native messaging) plus Info.plists. |
| `tests/` | JavaScript tests (`node --test`). |
| `scripts/` | Headless build, run, test and lint wrappers (they set `DEVELOPER_DIR` and filter logs). |
| `.claude/` | Claude Code settings, guard hook, path-scoped rules and skills (see `.claude/skills/OVERVIEW.md`). |
| `.atlas/` | Agent workspace: plans, reports, research, knowledge, runbooks; `tmp/` is ignored scratch. |

## Requirements

macOS with Xcode 27.2 at `/Applications/Xcode.app` (the scripts work even when `xcode-select` points at Command Line Tools), Node 20.19+ or 22.13+, Homebrew (`xcbeautify`, `gh` optional). Schemes are Xcode's auto-created ones until a CI or test target needs shared schemes; the names live in `scripts/env.sh`. No Apple Developer team is needed to build or to test in macOS Safari and the iOS Simulator.

## Quick start

```sh
npm install                 # ESLint only; the extension has no runtime dependencies
scripts/build.sh macos      # or: scripts/build.sh ios
scripts/test.sh             # JS tests now, Swift tests once a test target exists
scripts/lint.sh             # ESLint + swift-format (add --fix to apply)
scripts/run-mac.sh          # build ad-hoc signed, launch once, then enable in Safari
scripts/run-ios-sim.sh      # boot a simulator, install, open m.youtube.com
```

Enable the extension in macOS Safari: Settings > Advanced > "Show features for web developers", then Settings > Developer > "Allow unsigned extensions" (resets when Safari quits), then Settings > Extensions. In the iOS Simulator: Settings > Apps > Safari > Extensions. Full runbook: `.atlas/runbooks/build-run-debug.md`.

## Conventions

- Minimum OS: iOS 17.0 and macOS 14.0 for app and extension alike; `manifest.json` declares `strict_min_version` 17.0.
- Host access is limited to `*://*.youtube.com/*`; no other permissions until a feature needs them.
- Work through the scripts, not raw `xcodebuild`; logs land in `.atlas/tmp/build/`.
- Edit the project file with `xcrun xcodeproj` where possible and run `xcrun xcprojformatter --update Commander.xcodeproj` after hand edits; new subfolders under `extension/` must be listed in `opaque-folders`.
- Conventional Commits; `main` always builds; no force pushes.
