---
name: apple-host-app
description: Swift wrapper for the Safari extension - container app code, SafariWebExtensionHandler native messaging, App Groups, entitlements, bundle IDs, Info.plist, PrivacyInfo.xcprivacy and edits to yt.xcodeproj/project.xcproj. Use for any Swift, plist, entitlement, xcprivacy or project-file work.
---

# Apple host app (container app + extension handler)

Complements `.claude/rules/swift.md` (auto-loaded for Swift/plist/xcproj paths) with contracts and procedures. Building and running belong to `xcode-headless-build`; JavaScript belongs to `safari-web-extension`.

## Layout

| Piece | Target(s) | Source | Runs as | Talks to |
| --- | --- | --- | --- | --- |
| Container app | `yt (iOS)`, `yt (macOS)` | `Shared (App)`, `iOS (App)`, `macOS (App)` | app process, bundle `cyberm3.yt` | App Group store; Safari preferences (macOS only) |
| Native handler | `yt Extension (iOS)`, `yt Extension (macOS)` | `Shared (Extension)/SafariWebExtensionHandler.swift` | `.appex` process started by Safari, bundle `cyberm3.yt.Extension` | JS via native messages; App Group store |
| WebExtension | both extension targets | `extension/` (synced folder; subfolders listed in `opaque-folders`) | Safari | handler via `browser.runtime.sendNativeMessage` |
| Per-platform plists | each target | `iOS (App)/Info.plist`, `iOS (Extension)/Info.plist`, `macOS (Extension)/Info.plist` | merged by `GENERATE_INFOPLIST_FILE=YES` + `INFOPLIST_KEY_*` settings | - |

- Built layout: macOS `yt.app/Contents/PlugIns/yt Extension.appex/Contents/Resources/manifest.json`; iOS `yt.app/PlugIns/yt Extension.appex/`.
- `Shared (App)` lists files per target with `inclusions`: a new file there must be added to both app targets (`xcrun xcodeproj group include File.swift --group "/Shared (App)" --target "yt (iOS)" --project yt.xcodeproj`, repeat for macOS). `Shared (Extension)` and `extension` use `target-membership`, so new files are picked up automatically.
- Concurrency settings differ: the two app targets set `SWIFT_DEFAULT_ACTOR_ISOLATION=MainActor`; the two extension targets do not (approachable concurrency only). All four are language mode 5.

## Native-messaging contract

| Rule | Detail |
| --- | --- |
| Who may send | Background page, popup, options page. Content scripts cannot; they `browser.runtime.sendMessage` to the background, which relays. |
| JS call | `await browser.runtime.sendNativeMessage("cyberm3.yt.Extension", request)`; Safari ignores the first argument and always targets the containing app's extension. |
| Request shape | `{ "type": "<area>.<verb>", "v": 1, "payload": { ... } }` - `type` is the switch key, `v` the schema version, `payload` optional. |
| Reply shape | `{ "ok": true, "result": ... }` or `{ "ok": false, "error": { "code": "snake_case", "message": "text" } }`. Unknown `type` -> `ok:false`, `code:"unknown_type"`. |
| Payload types | JSON/plist-safe only: `String`, `Bool`, `Int`/`Double`, arrays, `[String: Any]`. Convert `Date`/`UUID`/`URL`/`Data` to strings. |
| Native side | `beginRequest(with:)` reads `context.inputItems.first as? NSExtensionItem`, `userInfo[SFExtensionMessageKey]` (request) and `userInfo[SFExtensionProfileKey] as? UUID` (Safari 17 profile); replies once with an `NSExtensionItem` whose `userInfo = [SFExtensionMessageKey: reply]` through `context.completeRequest(returningItems:completionHandler:)`. |
| Profile | Each Safari 17+ profile is a separate extension instance with its own storage; key per-profile state on the UUID string, treat `nil` as the default profile. |
| App -> extension | macOS only: `SFSafariApplication.dispatchMessage(withName:toExtensionWithIdentifier:userInfo:completionHandler:)` received by `browser.runtime.connectNative()` in the background page. iOS has no such channel: the app writes to the App Group and the extension asks via a native message. |
| Logging | `Logger(subsystem: "cyberm3.yt.Extension", category: "native-messaging")`; `privacy: .public` only for non-user data. |
| Availability guards | Deployment targets are iOS 17.0 / macOS 14.0, so the template's `#available(iOS 15, macOS 11)` and `#available(iOS 17, macOS 14)` fallbacks are dead code; remove them. |

## App Group setup (all four targets)

1. Identifier `group.cyberm3.yt` (must start with `group.`; identical string everywhere).
2. One entitlements file per target beside its Info.plist: `iOS (App)/yt.entitlements`, `macOS (App)/yt.entitlements`, `iOS (Extension)/yt Extension.entitlements`, `macOS (Extension)/yt Extension.entitlements`; each holds `com.apple.security.application-groups` = `[group.cyberm3.yt]` only.
3. Wire each: `xcrun xcodeproj setting set CODE_SIGN_ENTITLEMENTS "iOS (App)/yt.entitlements" --target "yt (iOS)" --project yt.xcodeproj` (four times), then keep the file out of the bundle: `xcrun xcodeproj group exclude yt.entitlements --group "/iOS (App)" --target "yt (iOS)" --project yt.xcodeproj` (four times).
4. Leave the macOS sandbox/hardened-runtime build settings in place; Xcode merges them with the file.
5. Access from both sides with the same keys: `UserDefaults(suiteName: "group.cyberm3.yt")` for settings, `FileManager.default.containerURL(forSecurityApplicationGroupIdentifier:)` for files. Define keys once in a `nonisolated enum` in `Shared (Extension)` and include that file in both app targets.
6. Add `NSPrivacyAccessedAPICategoryUserDefaults` with reason `CA92.1` to both `PrivacyInfo.xcprivacy` files as soon as the group store is read.
7. Before the first signed device/TestFlight/App Store build: register the group in the developer account and enable it on App IDs `cyberm3.yt` and `cyberm3.yt.Extension`.
8. Test with `SIGN=adhoc` builds (entitlements embedded); `SIGN=none` embeds none. Verify with `codesign -d --entitlements :- <bundle>` on `yt.app` and on the nested `.appex`; on the simulator `xcrun simctl get_app_container <udid> cyberm3.yt groups`.

## What the host app must do for App Review

| Guideline | Requirement | Minimum implementation |
| --- | --- | --- |
| 4.2 minimum functionality | more than a launcher for the extension | settings screen writing the App Group store, help/onboarding, what's new |
| 4.4 extensions | help and settings live in the container; no ads, marketing or purchases inside the extension | purchases or marketing, if ever, only in the app |
| 4.4.2 | request only the hosts the extension needs | `*://*.youtube.com/*` |
| 5.1.1 privacy | privacy policy link in the app and in App Store Connect; no collection without consent | static policy link; nutrition label "Data Not Collected" if true |
| macOS | can read the enabled state and open Safari's extension settings | keep `SFSafariExtensionManager.getStateOfSafariExtension` and `SFSafariApplication.showPreferencesForExtension` (`#if os(macOS)`) |
| iOS | no API to open Safari's extension settings | show the path Settings > Apps > Safari > Extensions > yt Extension > Allow Extension |
| naming | "YouTube"/"YT" never in the public name or icon; "<Name> for YouTube" allowed | rename the `yt` placeholder once, before the App Store Connect record exists |

## Swift 6.2 isolation rules for the handler

- `nonisolated final class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling`; constants only, no mutable stored properties; reply exactly once; never touch UI or main-actor state. Typechecks in language modes 5 and 6 with the project's flags.
- Shared state goes through `UserDefaults(suiteName:)` (thread-safe) or an `actor`, never module-level `var`s.
- Do not add `SWIFT_DEFAULT_ACTOR_ISOLATION=MainActor` to the extension targets; with it, a `nonisolated` method touching a main-actor property is a warning in mode 5 and an error in mode 6.
- App targets: view controllers are main-actor by default; SafariServices completion handlers arrive on arbitrary threads, so hop with `DispatchQueue.main.async` or `Task { @MainActor in ... }` before touching views.
- Stay in language mode 5 until the mode-6 typecheck in the reference is clean, then set `SWIFT_VERSION` to `6.0`.

## Workflow

1. Plan under `.atlas/plans/`; smallest diff that works (`minimal-code-ladder`).
2. Edit Swift/plists/xcprivacy. Project structure: `xcrun xcodeproj ...`, then `xcrun xcprojformatter --update yt.xcodeproj` and `xcodebuild -list -project yt.xcodeproj` (all need `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`).
3. `scripts/lint.sh`, `scripts/build.sh macos`, `scripts/build.sh ios`; `scripts/run-mac.sh` to exercise the handler through Safari.
4. Prove entitlements with `codesign`, never by inspection of the source alone.

## Read next

| Need | File |
| --- | --- |
| Message schema, JS and Swift examples, profile handling, debugging | `references/native-messaging.md` |
| Entitlements files, group registration, privacy manifest, signing interplay, five-state diagnosis | `references/app-groups-and-entitlements.md` |
| `xcrun xcodeproj` / `xcprojformatter` commands for this repo, opaque-folders, conversion, pitfalls | `references/xcproj-editing.md` |
| Container app UI today, per-platform abilities, screens App Review expects, localization | `references/host-app-ui.md` |
| Concurrency flags actually passed, rules, diagnostics, mode-6 typecheck command | `references/swift-concurrency-rules.md` |
| Build, run, sign, archive | `../xcode-headless-build/SKILL.md` |
| Manifest, background, content scripts | `../safari-web-extension/SKILL.md` |
