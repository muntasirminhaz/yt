# Debugging in Safari

## macOS: get the extension into Safari

| Step | Action | Source |
| --- | --- | --- |
| 1 | `scripts/run-mac.sh` builds ad-hoc signed, launches the app once (Safari registers the extension only after the containing app has run) and prints the `pluginkit` state | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension , `scripts/run-mac.sh` |
| 2 | Safari > Settings > Advanced > "Show features for web developers" (once; Safari 17+, earlier "Show Develop menu in menu bar") | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| 3 | Safari > Settings > Developer > "Allow unsigned extensions" (resets every time Safari quits) | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| 4 | Safari > Settings > Extensions > tick the extension, then grant youtube.com from the toolbar item | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension , https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions |
| Check | `pluginkit -mAvvv -p com.apple.Safari.web-extension` lists the `.appex` path | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension |

## Temporary extension loop (macOS, no rebuild)

| Step | Action | Source |
| --- | --- | --- |
| Add | Safari > Settings > Developer > "Add Temporary Extension…" and pick `extension/` (or a zip of it) | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| Iterate | Edit files, then Settings > Extensions > Temporary list > Reload | https://developer.apple.com/documentation/safariservices/building-and-testing-a-safari-web-extension |
| Limits | Removed when Safari quits or after 24 hours; there is no containing app, so `sendNativeMessage` has no handler (unverified); iOS has no equivalent | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| Installed copy | JS edits reach the installed extension only after `scripts/build.sh macos` and relaunching the app: resources are copied into the `.appex` | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |

## iOS simulator

| Step | Action | Source |
| --- | --- | --- |
| Build and install | `scripts/run-ios-sim.sh [Debug] [iPhone or iPad]` boots, builds, installs, launches and opens `m.youtube.com` | `scripts/run-ios-sim.sh` |
| Enable | Settings > Apps > Safari > Extensions > (extension) > Allow Extension, or Safari More menu > Extensions | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension , https://support.apple.com/guide/iphone/get-extensions-iphab0432bf6/ios |
| Grant | Page menu (Aa) > extension > "Allow For One Day" or Always | https://developer.apple.com/videos/play/tech-talks/110148/ |
| Signing | Unsigned extensions run in simulators without a membership; devices need the Developer Program | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension , https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension |
| Settings entry missing | Extension details show only for debug builds from Xcode | https://developer.apple.com/videos/play/wwdc2021/10104/ |

## Web Inspector contexts

| Context | macOS | iOS simulator or device | Source |
| --- | --- | --- | --- |
| Content script | Web Inspector on the YouTube tab > Sources > "Extension Scripts"; switch the console's execution context to the extension | Develop > (Simulator or device) > the page, same Sources group; a device needs Settings > Safari > Advanced > Web Inspector | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension |
| Background | Develop > "Web Extension Background Content" (Safari 17+; "Web Extension Background Pages" earlier), grouped by extension and profile; opening it loads an unloaded page | Develop > (Simulator or device) > "Extension Background Page" | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension , https://developer.apple.com/videos/play/wwdc2023/10119/ , https://developer.apple.com/videos/play/wwdc2021/10027/ |
| Popup | Control-click inside the popup > Inspect Element | Develop > (Simulator or device) > "Extension Popup Page" | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension |
| Uncaught errors | Safari 27 reports uncaught exceptions and unhandled promise rejections from extension scripts; older Safari needs an attached inspector | same on iOS 27 | https://webkit.org/blog/18325/webkit-features-for-safari-27-0/ |
| Automation | Safari 26 SafariDriver loads web extensions (`POST /session/$sessionId/webextension`); run `safaridriver --enable` once | not covered | https://webkit.org/blog/17333/webkit-features-in-safari-26-0/ , https://developer.apple.com/documentation/webkit/testing-with-webdriver-in-safari |

## Failure signatures

| Symptom | Cause | Fix | Source |
| --- | --- | --- | --- |
| Content script never runs on youtube.com | Site not granted (toolbar item badged) | Grant it; the script must also cope with injection after load because `run_at` applies to later loads only | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json , https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions |
| Runs after a reload but not on the first page after launch | Cold-launch injection delay before Safari 27.2 | Initialise from the current DOM state, not from load events | https://webkit.org/blog/18515/webkit-features-for-safari-27-2/ |
| Extension absent from Safari > Settings > Extensions | App never launched, "Allow unsigned extensions" reset on quit, or not registered | `scripts/run-mac.sh`; re-tick the toggle; check `pluginkit` | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension , https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension |
| Edited JS, Safari runs the old code | Resources were copied into the `.appex` at build time | Rebuild, or use the temporary extension Reload | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| `webNavigation.onHistoryStateUpdated` never fires | Unsupported in Safari | Detect navigation in the content script | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `setTimeout` callback in the background never fires | Non-persistent page was unloaded | `browser.alarms` | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| `storage.sync` values differ between devices | Safari never syncs it | Use `local`; design for per-device state | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `storage.local.set` rejects | 5 MB quota | Trim, or add `unlimitedStorage` | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `sendNativeMessage` undefined or rejecting in a content script | Only background and extension pages may call it; needs `nativeMessaging` | Message the background, which calls the app | https://developer.apple.com/documentation/safariservices/messaging-between-the-app-and-javascript-in-a-safari-web-extension |
| `browser.contextMenus` or `windows.create` undefined on iOS | Unsupported there | Feature-detect and skip | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| iOS: completion never returns, banner at the top of Safari | Privacy-sensitive API called without permission; the user has about a minute | Request access from a user action first | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| Popup clipped or oddly tall on iPhone | Sheet layout | `body` background, padding, no fixed width | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| `i18n.getMessage` named placeholders come back empty | Bug fixed in Safari 27 | Positional `$1` placeholders | https://webkit.org/blog/18325/webkit-features-for-safari-27-0/ |
| New folder under `extension/` lands in the bundle root | Not listed in `opaque-folders` | Add it to the `extension` entry in `Commander.xcodeproj/project.xcproj`, run `xcrun xcprojformatter --update Commander.xcodeproj` | `.atlas/research/2026-11-02-xcode27-xcproj-format-notes.md` |
| Packager warns `background.type` unsupported or "persistent background pages" | Xcode 27.2 packager disagrees with BCD; the manifest already has `persistent: false` | Ignore the `type` warning (unverified); keep `persistent: false` | https://developer.apple.com/documentation/safariservices/packaging-a-web-extension-for-safari |
| `xcodebuild` says it requires Xcode | `xcode-select` points at the Command Line Tools | Use `scripts/*`, which set `DEVELOPER_DIR` | `.claude/rules/swift.md` |
