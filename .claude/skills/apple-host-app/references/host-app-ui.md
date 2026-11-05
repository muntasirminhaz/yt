# What the container app must do

Sources: App Store Review Guidelines https://developer.apple.com/app-store/review/guidelines/ (4.2, 4.4, 4.4.2), Apple's template behaviour (local, `Shared (App)/ViewController.swift`), https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension.

## Review expectations

- 4.4: apps hosting extensions "should include some functionality, such as help screens and settings interfaces where possible"; the extension itself may not include marketing, advertising or in-app purchases.
- 4.2: the app must be more than a repackaged website; a bare "the extension is on/off" screen is the minimum Apple's own template ships and is a known weak point. Plan: settings that the extension reads (via App Group or `browser.storage` synced through native messaging), a help page explaining how to enable the extension, and an about page with the privacy policy link (5.1.1 requires the policy inside the app too).
- 4.4.2: never request more website access than the features need; the host app should explain why youtube.com access is requested.

## What the template already does

- `Shared (App)/ViewController.swift`: a `WKWebView` that loads `Resources/Base.lproj/Main.html` with `Script.js` and `Style.css`, shows "platform-mac" or "platform-ios" copy.
- macOS only: `SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier:)` reports whether the extension is enabled, and the "Quit and Open Safari Settings…" button calls `SFSafariApplication.showPreferencesForExtension(withIdentifier:)` then terminates the app. macOS 13+ wording says "Safari Settings" instead of "Preferences".
- iOS: no API to query or open the extension state; the page can only explain Settings > Apps > Safari > Extensions.
- `extensionBundleIdentifier = "com.cyberm3.commander.Extension"` is hard-coded in the view controller; update it when the product is renamed.

## Choosing a UI approach when settings arrive

| Option | Pros | Cons |
|---|---|---|
| Keep the WKWebView page and extend `Main.html` | One HTML/CSS/JS skill set shared with the popup, tiny Swift surface, same look on both platforms | Native feel limited; needs a JS bridge (`webkit.messageHandlers`) for every setting; Dynamic Type and VoiceOver must be handled in HTML |
| SwiftUI settings screens | Native controls, accessibility and Dynamic Type for free, HIG-aligned on both platforms | More Swift to write and review; separate from the popup UI |

Decision ladder: start with the WKWebView page (already there) and move to SwiftUI only if the settings grow beyond a handful of toggles. Either way, settings must be shared with the extension through an App Group (`references/app-groups-and-entitlements.md`) or pushed via native messaging (`references/native-messaging.md`).

## Strings and localisation

Swift-side user-facing text goes through a String Catalog (`Localizable.xcstrings`; add with the project tool or Xcode); the extension's text stays in `extension/_locales`. The public product name must not contain "YouTube" or "YT" variants; "<Name> for YouTube" is allowed (see the `app-store-compliance` skill).

## Checklist before shipping the host app

- Help screen explains enabling the extension on the current OS version (macOS: Settings > Extensions; iOS: Settings > Apps > Safari > Extensions).
- Settings screen exists and the extension reads those settings.
- Privacy policy link and the "no data collected" statement match the privacy manifest and the App Privacy answers.
- App icon sets complete for both platforms; launch screen on iOS; window size sensible on macOS.
- VoiceOver labels and Dynamic Type verified in both the web page and any native views.
