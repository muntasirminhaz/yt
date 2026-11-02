---
paths:
  - "**/*.swift"
  - "*.xcodeproj/**"
  - "**/*.plist"
  - "**/*.entitlements"
  - "**/*.xcprivacy"
  - "**/*.storyboard"
---

# Rules for the Apple wrapper (Swift, project file, plists)

- Toolchain: `xcode-select` points at Command Line Tools and `sudo` is unavailable. Every `xcodebuild`, `xcrun`, `simctl` call needs `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`; the scripts in `scripts/` set it.
- Project file `yt.xcodeproj/project.xcproj` is Xcode 27.2's JSON5 format. Prefer `xcrun xcodeproj` (`group add`, `group include`, `target`, `setting`) for structural changes; after any hand edit run `xcrun xcprojformatter --update yt.xcodeproj` (it silently drops comments, unknown keys and duplicate keys) and `xcodebuild -list`. Folder entries sync with disk: new files in a folder with `target-membership` are picked up automatically; folders using `inclusions` need each new file listed.
- Targets: `yt (iOS)`, `yt (macOS)`, `yt Extension (iOS)`, `yt Extension (macOS)`. Bundle IDs are `cyberm3.yt` and `cyberm3.yt.Extension`; the extension ID must stay `<app id>.Extension` and both platforms share the app ID (this is what makes Safari sync the enabled state across devices). Renaming the product happens once, before the App Store Connect record exists.
- Deployment targets are iOS 17.0 and macOS 14.0 for app and extension alike; keep them identical when changing.
- Swift: language mode 5 with `SWIFT_APPROACHABLE_CONCURRENCY` on all four targets; the two app targets also set `SWIFT_DEFAULT_ACTOR_ISOLATION = MainActor`, the two extension targets do not (their code is nonisolated by default). `SafariWebExtensionHandler.beginRequest` runs on the extension's request queue: keep it free of UI, reply once via `context.completeRequest`, read `SFExtensionMessageKey` and `SFExtensionProfileKey` as the template does, and keep message payloads JSON-serialisable.
- Shared settings between app and extension go through an App Group (`group.<app id>`), `UserDefaults(suiteName:)`; the entitlement must exist on all four targets and the group must be registered in the developer account before signed builds. Reading UserDefaults needs a `NSPrivacyAccessedAPITypes` entry (category `NSPrivacyAccessedAPICategoryUserDefaults`, reason `CA92.1`) in `PrivacyInfo.xcprivacy` once used.
- Signing: no team is configured. Local builds use `CODE_SIGNING_ALLOWED=NO` (simulator, CI-style) or ad-hoc "Sign to Run Locally"; device, TestFlight and App Store builds wait for a Developer Program team.
- Host app: the container must do real work for App Review 4.2 (settings, help) and the extension may not contain ads, marketing or purchases (4.4). On macOS the app can open Safari's extension preferences; on iOS it can only explain how to enable the extension.
- Strings: the Swift app localises with String Catalogs (`Localizable.xcstrings`), the extension with `_locales`; never hard-code user-facing text in Swift.
