# Native messaging: JS <-> SafariWebExtensionHandler

Legend: `(local)` = (local, verified on this Mac 2026-11-02); `(unverified)` = not confirmed in an official source.
MSG = https://developer.apple.com/documentation/safariservices/messaging-between-the-app-and-javascript-in-a-safari-web-extension

## Transport facts

| Fact | Source |
| --- | --- |
| Three sandboxed parts: containing app, web files in Safari, native app extension between them; App Groups share data. | MSG |
| `"nativeMessaging"` must be in `permissions`; `extension/manifest.json` currently has an empty `permissions` array. | MSG; `(local)` manifest |
| `browser.runtime.sendNativeMessage("application.id", msg)` works from background and extension pages, not content scripts; Safari ignores the id and routes to the containing app's extension. | MSG |
| Promise form `await browser.runtime.sendNativeMessage(...)` is what Apple's sample uses. | https://developer.apple.com/videos/play/wwdc2026/216/ |
| App -> JS exists on macOS only (`SFSafariApplication.dispatchMessage`, received via `browser.runtime.connectNative()` + `port.onMessage`); the iOS app cannot message the extension. | MSG |
| Handler = `NSObject, NSExtensionRequestHandling`; request under `SFExtensionMessageKey` (iOS 15/macOS 11), profile under `SFExtensionProfileKey` (iOS 17/macOS 14); reply via `context.completeRequest(returningItems:completionHandler:)`. | Xcode 27.2 template `(local)` |
| Each Safari 17+ profile is a separate extension instance (own background page and storage); native messages carry the profile key; per-site permissions are shared across profiles. | https://developer.apple.com/videos/play/wwdc2023/10119/ |
| Extension Info.plist: `NSExtensionPointIdentifier = com.apple.Safari.web-extension`, `NSExtensionPrincipalClass = $(PRODUCT_MODULE_NAME).SafariWebExtensionHandler`. | `(local)` |
| Thread on which Safari calls `beginRequest`: not documented. | `(unverified)`; code as if any thread |
| A request that is never completed leaves the JS promise pending. | `(unverified)` |
| `cancelRequest(withError:)` rejects the JS promise instead of resolving it. | `(unverified)`; prefer `ok:false` replies |
| Value types that survive the round trip: strings, numbers, booleans, arrays, dictionaries, null. | `(unverified)` beyond the template's `[String: Any]` echo |

## Message schema (repo convention, not a platform rule)

| Field | Request | Reply |
| --- | --- | --- |
| `type` | `"<area>.<verb>"`: `settings.get`, `settings.set`, `diagnostics.ping` | echoed |
| `v` | integer schema version, starts at `1` | same |
| `payload` | optional object | - |
| `ok` | - | `true` / `false` |
| `result` | - | present when `ok` |
| `error` | - | `{ "code": "unknown_type" \| "bad_payload" \| "store_unavailable", "message": "..." }` |

Rules: one reply per request; never throw out of `beginRequest`; unknown `type` -> `ok:false`; add fields, never rename them; bump `v` only for incompatible changes; keep one constants list per side (`extension/` and Swift).

## Origins and routing

| From | Reaches handler? | Route |
| --- | --- | --- |
| Background page | yes | `sendNativeMessage` |
| Popup / options page | yes | `sendNativeMessage` |
| Content script on youtube.com | no | `browser.runtime.sendMessage` -> background `onMessage` -> `sendNativeMessage` -> reply chain |
| Container app, macOS | push to JS | `SFSafariApplication.dispatchMessage` -> `connectNative` port |
| Container app, iOS | none | write the App Group store; JS asks on popup open, background start or a `browser.alarms` tick |

## JavaScript side (background.js)

```js
export async function native(type, payload = {}) {
  const reply = await browser.runtime.sendNativeMessage("cyberm3.yt.Extension", { type, v: 1, payload });
  if (!reply?.ok) throw new Error(reply?.error?.message ?? "native call failed");
  return reply.result;
}
browser.runtime.onMessage.addListener((msg) => {
  if (msg?.type?.startsWith("settings.")) return native(msg.type, msg.payload);
});
```

## Swift side (typechecks in language modes 5 and 6 with the project's flags, `(local)`)

```swift
import SafariServices
import os

nonisolated enum SharedSettings {
    static let suite = "group.cyberm3.yt"
    static func snapshot() -> [String: Any] {
        guard let defaults = UserDefaults(suiteName: suite) else { return [:] }
        return ["autoplay": defaults.bool(forKey: "autoplay"), "speed": defaults.double(forKey: "speed")]
    }
}

nonisolated final class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {
    private let log = Logger(subsystem: "cyberm3.yt.Extension", category: "native-messaging")

    func beginRequest(with context: NSExtensionContext) {
        let item = context.inputItems.first as? NSExtensionItem
        let message = item?.userInfo?[SFExtensionMessageKey] as? [String: Any] ?? [:]
        let profile = item?.userInfo?[SFExtensionProfileKey] as? UUID
        let type = message["type"] as? String ?? "?"
        log.debug("type=\(type, privacy: .public) profile=\(profile?.uuidString ?? "default", privacy: .public)")
        let reply: [String: Any]
        switch type {
        case "settings.get": reply = ["ok": true, "result": SharedSettings.snapshot()]
        default: reply = ["ok": false, "error": ["code": "unknown_type", "message": "unknown type \(type)"]]
        }
        let response = NSExtensionItem()
        response.userInfo = [SFExtensionMessageKey: reply]
        context.completeRequest(returningItems: [response], completionHandler: nil)
    }
}
```

Removed from the template on purpose: the `#available` fallbacks (deployment targets 17.0/14.0 make them dead, `(local)`) and `os_log` in favour of `Logger`.

## Profile handling

| Case | Do | Source |
| --- | --- | --- |
| `SFExtensionProfileKey` present | namespace per-profile state with the UUID string only when behaviour must differ per profile; shared settings stay global | https://developer.apple.com/videos/play/wwdc2023/10119/ |
| Key absent (`nil`) | treat as the default profile; whether the default profile sends a UUID | `(unverified)` |
| Per-site permissions | shared across profiles, no profile logic needed | https://developer.apple.com/videos/play/wwdc2023/10119/ |

## Debugging

| Where | How | Source |
| --- | --- | --- |
| Handler logs, macOS | `/usr/bin/log stream --predicate 'subsystem == "cyberm3.yt.Extension"' --level debug` (full path: `log` is a zsh builtin) | `(local)` |
| Handler logs, simulator | `xcrun simctl spawn <udid> log stream --predicate 'subsystem == "cyberm3.yt.Extension"' --level debug` | adapted from https://github.com/patrickserrano/skills (MIT); `(unverified)` here |
| JS side | Develop > Web Extension Background Content (macOS); Develop > Simulator > Extension Background Page (iOS) | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension |
| Registration | `pluginkit -mAvvv -p com.apple.Safari.web-extension` after launching the app once | same URL; `(local)` |
| Unit tests | XCTest cannot test the JS APIs; extract `reply(for:)` into a pure function and test it from a Swift test target | https://developer.apple.com/documentation/safariservices/creating-a-safari-web-extension |
