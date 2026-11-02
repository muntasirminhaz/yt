# Permissions and hosts in Safari

## Declaring access

| Key | Use for | Safari behaviour | Source |
| --- | --- | --- | --- |
| `permissions` | API permissions (`storage`, `alarms`, `declarativeNetRequest`, `nativeMessaging`, `scripting`), `activeTab`, `<all_urls>` | API permissions never prompt; only origin patterns do | https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions , https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |
| `host_permissions` | MV3 host patterns needed without a user action | Per-site state Ask / Allow / Deny; scripts wait for the grant | https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions |
| `content_scripts[].matches` | Where static content scripts run | Same per-site grant; `run_at` only honoured on loads after it | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| `optional_permissions` / `optional_host_permissions` (Safari 15.5) | Features the user opts into later | `browser.permissions.request({ origins: ["*://host/*", "*://*.host/*"] })` prompts for the pattern; Chrome requires a user gesture for the call, Safari not confirmed (unverified) | https://developer.apple.com/videos/play/wwdc2026/216/ , https://developer.chrome.com/docs/extensions/reference/api/permissions |
| `activeTab` | One-off actions on the current tab | Access to the current site in the current tab only, no prompt, revoked on navigation | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| `tabs` | Reading tab URL or title | Does not grant page access, a host permission is still needed; `tests/manifest.test.js` rejects it until a feature needs it | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |

Apple's order of preference: `activeTab`, then narrow host permissions, then optional permissions; `<all_urls>` only when unavoidable. https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions

## What the user sees

| Platform | Flow | Source |
| --- | --- | --- |
| macOS | Toolbar item is badged while access is missing; clicking it offers "Allow for One Day" or "Always Allow" (earlier wording: single use, the day, all websites) or deny; the icon is tinted after a grant; per-site state lives in Safari > Settings > Extensions > (extension) > Websites | https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions , https://developer.apple.com/videos/play/wwdc2026/216/ , https://support.apple.com/guide/safari/use-safari-extensions-sfri32508/mac |
| iOS / iPadOS | The user opens the extension from the page menu (Aa) or More menu > Extensions and taps "Allow For One Day" or Always; later per-site changes via Page Menu > Manage Extensions; enabling itself is Settings > Apps > Safari > Extensions > (extension) > Allow Extension (iOS 27 paths) | https://developer.apple.com/videos/play/tech-talks/110148/ , https://support.apple.com/guide/iphone/get-extensions-iphab0432bf6/ios , https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| iOS, privacy-sensitive API without permission | Safari holds the completion handler and shows a non-disruptive banner at the top; the user has about a minute to respond | https://developer.apple.com/videos/play/wwdc2021/10104/ , https://developer.apple.com/videos/play/tech-talks/110148/ |
| Profiles (Safari 17+) | One grant applies across all profiles, Private Browsing and non-profile browsing; each profile still runs its own extension instance with its own storage | https://developer.apple.com/videos/play/wwdc2023/10119/ |
| Private Browsing (Safari 17+) | Extensions that inject scripts or read pages are off by default; the user can switch them on | https://developer.apple.com/videos/play/wwdc2023/10119/ |
| Domain scope | A grant covers the whole domain (Apple's example: no extra prompt for another apple.com page) | https://developer.apple.com/videos/play/tech-talks/110148/ |

## Match patterns for the YouTube hosts

| Pattern | Matches | Status here | Source |
| --- | --- | --- | --- |
| `*://*.youtube.com/*` | `youtube.com` and every subdomain (`www.`, `m.`, `music.`, `studio.`) over http and https | The only entry in `content_scripts.matches` | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns |
| `*://youtube.com/*` | The bare host only, not `www.` | Not needed; covered by the wildcard | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns |
| `*://www.youtube-nocookie.com/*` | Privacy-enhanced embeds (`/embed/...`) on third-party pages | Separate host, not granted; add only for an embed feature | https://support.google.com/youtube/answer/171780 , https://support.google.com/a/answer/9012184 |
| `*://*.googlevideo.com/*`, `*://*.ytimg.com/*` | Media and thumbnail CDNs | Separate hosts; only DNR rules could need them | https://support.google.com/a/answer/9012184 |
| `youtu.be` | Share links; on iOS they open the YouTube app via Universal Links | No match; the redirect happens before any script could run (unverified) | https://support.google.com/youtube/answer/7174035 |
| `<all_urls>`, `*://*/*` | Everything | Rejected by `tests/manifest.test.js`; fails 4.4.2 | https://developer.apple.com/app-store/review/guidelines/ |

Pattern rules: the host wildcard may only lead (`*.youtube.com`, never `youtube.*`); the path part also matches the query string; Apple's troubleshooting page points to the same MDN rules. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns , https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension . Which host Safari keys the grant on when a script runs inside an embed on a third-party page is not documented (unverified).

## App Review 4.4.2

| Expectation | Practice here | Source |
| --- | --- | --- |
| "Safari extensions should not claim access to more websites than strictly necessary to function" | `permissions: []` and one host pattern today; a new host or permission lands in the same change as the feature that needs it, with the reason recorded in the plan under `.atlas/plans/` | https://developer.apple.com/app-store/review/guidelines/ |
| 4.4: the app should include help screens and settings; extensions may not include marketing, advertising or in-app purchases | Explanations and settings live in the container app and App Store copy, not in the popup | https://developer.apple.com/app-store/review/guidelines/ |
| 4.4.2: must run on the current Safari and never interfere with System or Safari UI | Verify on the installed Safari (27.2 on this Mac) before any release-facing change | https://developer.apple.com/app-store/review/guidelines/ |
| 5.1.1 and the privacy label | On-device-only processing is not data collection; anything collected needs consent and a privacy policy link | https://developer.apple.com/app-store/app-privacy-details/ , https://developer.apple.com/app-store/review/guidelines/ |

## Copy for permission explanations

Safari writes the prompt itself; the extension name and icon are what identifies us inside it (unverified beyond the WWDC demo). https://developer.apple.com/videos/play/wwdc2026/216/

| Place | Say | Avoid | Source |
| --- | --- | --- | --- |
| `_locales/<locale>/messages.json`, `extension_description` | What it does on which site, e.g. "Playback and interface controls for YouTube in Safari." | "YouTube" or "YT" inside the product name; YouTube logo or trade dress in the icon | https://developers.google.com/youtube/terms/branding-guidelines |
| Container app help screen | One line per host: why `youtube.com`, what is read, what is stored (`browser.storage.local`, on device); enable steps per platform (Mac: Settings > Extensions; iPhone: Settings > Apps > Safari > Extensions) | Promising cross-device sync (`storage.sync` does not sync) | https://developer.apple.com/app-store/review/guidelines/ , https://support.apple.com/guide/iphone/get-extensions-iphab0432bf6/ios , https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| Popup when access is missing | One sentence, one action: allow the extension on youtube.com from the toolbar icon (Mac) or the Aa menu (iPhone) | Marketing, upsells, purchase links (4.4) | https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions , https://developer.apple.com/videos/play/tech-talks/110148/ |
| App Store description and review notes | Name the single host and each permission with the feature that uses it | Requesting hosts "for future features" | https://developer.apple.com/app-store/review/guidelines/ |
