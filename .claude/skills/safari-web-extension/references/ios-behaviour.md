# iOS and iPadOS behaviour

## Which YouTube the device gets

| Device | Site served | Notes | Source |
| --- | --- | --- | --- |
| iPhone, iPod touch | `m.youtube.com` (mobile web) | Google routes iPhone traffic to the mobile site; no editing or uploading on the mobile web | https://support.google.com/youtube/answer/7174035 , https://support.google.com/youtube/answer/3008060 |
| iPad | `youtube.com` desktop site | iPad presents itself to websites as a Mac since iPadOS 13; narrow windows (Split View, iPad mini) may get mobile sites, Safari decides; desktop pages are scaled to the display | https://developer.apple.com/videos/play/wwdc2019/203/ , https://support.apple.com/guide/ipad/browse-the-web-ipad999d68f9/14.0/ipados/14.0 |
| Switching modes | iPhone: Page Menu > "Request Desktop Website (if available)"; iPad: "Request Mobile Website" / "Request Desktop Website" | Whether YouTube then serves the desktop DOM to an iPhone is not documented (unverified): both code paths must fail soft | https://support.apple.com/guide/iphone/customize-your-safari-settings-iphb3100d149/ios , https://support.apple.com/guide/ipad/customize-your-safari-settings-ipad54f3cde6/ipados |
| Links | `youtube.com`, `m.youtube.com` and `youtu.be` links open the YouTube app via Universal Links on iOS 9+ when it is installed | The simulator has no YouTube app, so pages stay in Safari (unverified) | https://support.google.com/youtube/answer/7174035 |
| Branching | `location.hostname === "m.youtube.com"` means the mobile DOM; any other `youtube.com` host means the desktop DOM | Branch once at startup, keep one selector set per DOM | https://support.google.com/youtube/answer/7174035 |

## Popup as a sheet

| Rule | Why | Source |
| --- | --- | --- |
| Full-width sheet on iPhone, popover on iPad and Mac | Safari displays the popup page "as a sheet" on iPhone; it "may be laid out taller than the content expects", in landscape too | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| Background colour on `body`, padding on the content | The sheet shows body background beyond the content | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| No fixed widths (`popup.css` uses `min-width: 240px`, `max-width: 100vw`) | The sheet is full width; the popover sizes to content | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| `font: -apple-system-body` (also `-apple-system-headline`, `-subheadline`, `-footnote`, `-caption1`, `-caption2`) | System text styles follow the user's Dynamic Type size; test several sizes | https://webkit.org/blog/3709/using-the-system-font-in-web-content/ , https://developer.apple.com/videos/play/wwdc2021/10104/ |
| `:root { color-scheme: light dark; }` | Dark Mode without custom colours | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| Pointer Events, not mouse events | Touch and pencil input | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| Controls 44x44 pt (28x28 minimum); text contrast 4.5:1 (3:1 at 18 pt or bold); text usable at 200%; every control labelled for VoiceOver; a button alternative to any gesture | Human Interface Guidelines, accessibility | https://developer.apple.com/design/human-interface-guidelines/accessibility |
| `@media (prefers-reduced-motion: reduce)` removes automatic and repetitive animation | Reduce Motion (Safari 10.1 / iOS 10.3) | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion , https://developer.apple.com/design/human-interface-guidelines/accessibility |
| Opened from the page menu (Aa) on iOS | There is no persistent toolbar button on iPhone | https://developer.apple.com/videos/play/tech-talks/110148/ |

## Background page on iOS

| Fact | Consequence | Source |
| --- | --- | --- |
| Must be non-persistent (`"persistent": false` or a service worker) | Safari unloads it when the user is not interacting with the extension | https://developer.apple.com/videos/play/wwdc2021/10104/ , https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| Unloading drops globals | Keep state in `browser.storage.local`, re-read on wake | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| `setTimeout` / `setInterval` die with the page | Use `browser.alarms` | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| Listeners register at top level | Otherwise an event can arrive before the listener exists | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| Inspecting an unloaded page loads it | Debugging changes the lifecycle you are observing | https://developer.apple.com/videos/play/wwdc2021/10027/ |
| The app cannot push messages to the extension JS; content scripts cannot call `sendNativeMessage` | Route settings through `storage` (or an App Group read by the handler); the background pulls from the app with `sendNativeMessage` | https://developer.apple.com/documentation/safariservices/messaging-between-the-app-and-javascript-in-a-safari-web-extension |
| Feature-detect iOS gaps: `typeof browser.contextMenus !== "undefined"` | `contextMenus`, `windows.create/remove/update`, `webRequest`, `devtools` are missing on iOS | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari , https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |

## Windows, profiles, sync

| Quirk | Detail | Source |
| --- | --- | --- |
| Windows | Placement is user-controlled; each Safari scene reports two windows (regular and private); Split View doubles that; `windows.onRemoved` may not fire | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| Profiles (Safari 17+) | Each profile runs its own extension instance with its own UUID, background page and storage; native messages carry `SFExtensionProfileKey`; per-site permissions are shared across profiles | https://developer.apple.com/videos/play/wwdc2023/10119/ |
| Private Browsing | Off by default for script-injecting extensions; user toggle | https://developer.apple.com/videos/play/wwdc2023/10119/ |
| Enabled-state sync (Safari 16+) | Enabling on one device syncs to the user's others because app and extension bundle IDs are identical on macOS and iOS | https://developer.apple.com/documentation/safariservices/syncing-safari-web-extensions-across-devices-and-platforms |
| iPadOS menubar | `commands` appear in the Safari menubar on iPadOS since Safari 26 | https://webkit.org/blog/17333/webkit-features-in-safari-26-0/ |
| visionOS | The iOS app and extension also run as a compatible app on Apple Vision Pro | https://developer.apple.com/documentation/safariservices/packaging-and-distributing-safari-web-extensions-with-app-store-connect |

## Debug-only details

| Fact | Source |
| --- | --- |
| Extension details appear in Settings only for debug builds from Xcode, not for App Store or TestFlight copies | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| Unsigned builds run only in the simulator; a physical device needs the Developer Program (no team is configured here) | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension , https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension |
| Before Safari 27.2 content injection was delayed on cold launch; older iOS still shows it | https://webkit.org/blog/18515/webkit-features-for-safari-27-2/ |
| `scripts/run-ios-sim.sh [Debug] [iPhone or iPad]` boots the newest matching simulator, builds, installs, launches the app and opens `m.youtube.com` | `scripts/run-ios-sim.sh` |
