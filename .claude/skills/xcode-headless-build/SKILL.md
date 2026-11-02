---
name: xcode-headless-build
description: Build, run, test, archive and export the Safari extension app from the command line without the Xcode GUI - scripts/ first, then xcodebuild, simctl and devicectl with DEVELOPER_DIR; destinations, product paths, signing modes, enabling the extension, log filtering. Use for any build, run, simulator, device, archive, signing or xcodebuild question.
---

# Xcode headless build, run and release

Everything here was verified on this Mac on 2026-11-02 with Xcode 27.2 unless marked otherwise. The developer never opens the Xcode GUI; `xcode-select` points at Command Line Tools, so every Apple tool call carries `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`. The scripts set it for you.

## Workflow

1. Use a script. They set `DEVELOPER_DIR`, pass `-quiet`, write the full log to `.atlas/tmp/build/`, and print one result line plus errors.
2. Only when a script does not cover the case, run the raw command from `references/commands.md` with the same prefix, redirect to `.atlas/tmp/build/<name>.log`, and grep the log.
3. After any change to `yt.xcodeproj/project.xcproj`, run `xcrun xcprojformatter --update yt.xcodeproj` and `xcodebuild -list` before building.
4. Never read a whole xcodebuild log into context; `grep -E 'error:|warning:|BUILD'` or `xcbeautify --quiet < log`.

| Task | Command | Output |
|---|---|---|
| Build macOS | `scripts/build.sh macos [Debug\|Release]` | `.atlas/tmp/build/DerivedData/Build/Products/<Config>/yt.app` |
| Build macOS ad-hoc signed | `SIGN=adhoc scripts/build.sh macos` | same path, entitlements applied, `Signature=adhoc` |
| Build iOS Simulator | `scripts/build.sh ios` | `.../Products/<Config>-iphonesimulator/yt.app` |
| Run in macOS Safari | `scripts/run-mac.sh` | builds ad-hoc, launches once, prints Safari steps |
| Run in iOS Simulator | `scripts/run-ios-sim.sh [Debug] [name-substring]` | boots, installs, launches, opens m.youtube.com |
| Tests | `scripts/test.sh [js\|swift\|all]` | node:test now; `xcodebuild test` once a test target exists |
| Lint | `scripts/lint.sh [--fix]` | ESLint + swift-format (repo `.swift-format`, 4 spaces) |

Project facts the commands depend on: project `yt.xcodeproj`; schemes `yt (iOS)` and `yt (macOS)` (auto-created, not shared); targets `yt (iOS)`, `yt (macOS)`, `yt Extension (iOS)`, `yt Extension (macOS)`; bundle IDs `cyberm3.yt` and `cyberm3.yt.Extension`; deployment targets iOS 17.0 and macOS 14.0.

## Destinations

- macOS: `-destination 'platform=macOS,arch=arm64'`.
- iOS Simulator, generic (build only): `-destination 'generic/platform=iOS Simulator'`.
- iOS Simulator, specific (build, install, launch): `-destination "platform=iOS Simulator,id=<UDID>"`. Device names differ per runtime (the 27.2 runtime has iPhone 18 Pro, the 26.5 runtime has iPhone 17 Pro), so look up the UDID with `xcrun simctl list devices available` or `xcodebuild -showdestinations -scheme "yt (iOS)"` instead of guessing a name.
- Physical device: `-destination 'generic/platform=iOS'` for an archive; install with `xcrun devicectl` (needs a signing team, see `references/signing-and-archive.md`).

## Signing modes

| Mode | When | How |
|---|---|---|
| none (`CODE_SIGNING_ALLOWED=NO`) | Simulator builds, CI-style compile checks | default in `scripts/build.sh` |
| ad-hoc ("Sign to Run Locally") | Running the macOS app so the sandbox and App Group entitlements apply | `SIGN=adhoc`, sets `CODE_SIGN_IDENTITY=-` with manual style and no team |
| team (automatic signing) | Real devices, TestFlight, App Store | needs Developer Program enrolment, `DEVELOPMENT_TEAM=<ID>` and `-allowProvisioningUpdates` |

No signing identity exists on this Mac yet (`security find-identity -v -p codesigning` lists none), so team mode fails until enrolment.

## Enabling the extension after a build

- macOS: launch the app once (`open <yt.app>`), then in Safari: Settings > Advanced > "Show features for web developers"; Settings > Developer > "Allow unsigned extensions" (resets every time Safari quits); Settings > Extensions > tick it; grant youtube.com when the toolbar item asks. Check registration with `pluginkit -mAvvv -p com.apple.Safari.web-extension`.
- iOS Simulator: after `simctl install` and `launch`, Settings > Apps > Safari > Extensions > yt Extension > Allow Extension, then allow youtube.com in Safari.
- JavaScript edits need a rebuild (resources are copied into the `.appex`); on macOS, Safari's Settings > Developer > "Add Temporary Extension…" pointed at `extension/` gives a Reload button without rebuilding.

## Read next

| Need | Reference |
|---|---|
| Every raw command with the prefix, flags and this repo's names | `references/commands.md` |
| Simulator selection, boot, install, launch, logs, screenshots | `references/simulator-workflow.md` |
| Ad-hoc versus team signing, archive, export plist, upload path | `references/signing-and-archive.md` |
| Build or run failures and their fixes | `references/troubleshooting.md` |
| Runbook with the manual Safari clicks and what is verified | `.atlas/runbooks/build-run-debug.md` |
