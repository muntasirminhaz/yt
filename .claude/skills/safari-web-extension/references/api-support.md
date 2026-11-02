# Safari API and manifest support

Floor: Safari 17 (iOS 17 / macOS 14). "Safari" below is the macOS Safari version, "iOS" the iOS/iPadOS version; on iOS the Safari version equals the iOS version (https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari). macOS 14 users run Safari 17.0 to 26.x, iOS 17 users run 17.x only, so everything above 17 needs a `typeof` guard and a fallback. Version data: MDN browser-compat-data 8.1.8 (https://github.com/mdn/browser-compat-data) via https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs and https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json unless an Apple page is cited.

## Safari to OS map

| Safari | Ships with | Unlocks | Source |
| --- | --- | --- | --- |
| 15.4 | macOS 12.3, iOS 15.4 | MV3, `scripting`, `action`, DNR dynamic/session rules, `externally_connectable.matches` | https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/ |
| 16.0 | macOS 13, iOS 16 | `unlimitedStorage` truly unlimited, `declarativeNetRequestWithHostAccess`, `action.openPopup` | https://developer.apple.com/videos/play/wwdc2022/10099/ , https://github.com/mdn/browser-compat-data |
| 16.4 | macOS 13.3, iOS 16.4 | `storage.session`, `scripting.registerContentScripts`, SVG icons, `background.type`, DNR `modifyHeaders` | https://webkit.org/blog/13966/webkit-features-in-safari-16-4/ |
| 17.0 (floor) | macOS 14, iOS 17 | Profiles (`SFExtensionProfileKey`), Private Browsing toggle | https://webkit.org/blog/14445/webkit-features-in-safari-17-0/ , https://developer.apple.com/videos/play/wwdc2023/10119/ |
| 18.0 | macOS 15, iOS 18 | `content_scripts.world`, `css_origin` | https://webkit.org/blog/15865/webkit-features-in-safari-18-0/ , https://github.com/mdn/browser-compat-data |
| 18.4 | macOS 15.4, iOS 18.4 | `storage.getKeys`, `match_about_blank`, Developer ID-signed extensions on macOS | https://webkit.org/blog/16574/webkit-features-in-safari-18-4/ |
| 26.0 | macOS 26, iOS 26 (also Sequoia, Sonoma) | `commands` in the menubar, SafariDriver loads extensions, `dom.openOrClosedShadowRoot` | https://webkit.org/blog/17333/webkit-features-in-safari-26-0/ , https://github.com/mdn/browser-compat-data |
| 27.0 / 27.2 | macOS 27, iOS 27 (also Tahoe, Sequoia; not Sonoma) | `runtime.getDocumentId`, exception reporting; 27.2 fixes the cold-launch injection delay | https://webkit.org/blog/18325/webkit-features-for-safari-27-0/ , https://webkit.org/blog/18515/webkit-features-for-safari-27-2/ |

## Manifest keys

| Key | Safari | iOS | Limits | Source |
| --- | --- | --- | --- | --- |
| `manifest_version: 3` | 15.4 | 15.4 | MV2 still supported; no end date announced (unverified) | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `background.scripts` + `"persistent": false` | 14 | 15 | iOS requires non-persistent; the Xcode 27.2 packager warns when an MV3 manifest omits `persistent: false` (local run) | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| `background.service_worker` | 15.4 | 15.4 | Same capabilities as the page; Apple recommends it for cross-browser compatibility; the page keeps DOM access | https://developer.apple.com/videos/play/wwdc2026/216/ |
| `background.type: "module"` | 16.4 | 16.4 | Xcode 27.2 packager still warns "unsupported" although Xcode's own template uses it (local run; which is right is unverified) | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json , https://developer.apple.com/documentation/safariservices/packaging-a-web-extension-for-safari |
| `background.preferred_environment` | 18 | 18 | Above the floor | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| `content_scripts` | 14 | 15 | Not applied until the user grants the site; `run_at` honoured only on later loads; `include_globs`/`exclude_globs` unsupported; `world`, `css_origin` 18; `match_about_blank`, `match_origin_as_fallback` 18.4 | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json, https://webkit.org/blog/16574/webkit-features-in-safari-18-4/ |
| `action` | 15.4 | 15.4 | `browser_action` is MV2 only; SVG `default_icon` 16.4; grayscale icon rendered as a tinted template icon 16.4 | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json, https://webkit.org/blog/13966/webkit-features-in-safari-16-4/ |
| `icons` | 14 | 15 | PNG 48/64/96/128/256/512; toolbar 16/19/32/38 PNG or one SVG (16.4) | https://developer.apple.com/documentation/safariservices/creating-a-safari-web-extension |
| `options_ui` / `options_page` | 14 | 15 | Always opens in a separate tab; `open_in_tab` ignored | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| `commands` | 14 (API) | 15 | iOS: shortcut not user-changeable; Safari 26 lists commands in the macOS and iPadOS menubar and lets macOS users customise them; BCD dates the manifest key at 26 on desktop (discrepancy, unverified) | https://webkit.org/blog/17333/webkit-features-in-safari-26-0/ , https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| `content_security_policy.extension_pages` | 15.4 | 15.4 | No remote scripts, no inline script, no `eval`; `sandbox` key unsupported | https://developer.apple.com/videos/play/wwdc2022/10099/ , https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| `web_accessible_resources` | 15.4 | 15.4 | MV3 object form scoped per `matches`; the extension base URL is already dynamic (`use_dynamic_url` moot) | https://developer.apple.com/videos/play/wwdc2022/10099/ |
| `externally_connectable.matches` | 15.4 | 15.4 | `ids` unsupported | https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/ |
| `declarative_net_request.rule_resources` | 15 | 15 | Up to 50 static rulesets declared, 10 enabled at once | https://developer.apple.com/videos/play/wwdc2022/10099/ , https://developer.apple.com/videos/play/wwdc2023/10119/ |
| `default_locale` + `_locales/<locale>/messages.json` | 14 | 15 | `__MSG_key__` in manifest and CSS; locale folders use underscores (`en_US`); fallback region → script → language → default; named placeholders in `getMessage` fixed in Safari 27 | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization , https://webkit.org/blog/18325/webkit-features-for-safari-27-0/ |
| `browser_specific_settings.safari.strict_min_version` | — | — | Set to `"17.0"` here and pinned by `tests/manifest.test.js`; whether Safari refuses to load below it is not confirmed in the sources (unverified) | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |

## Scripting

| API | Safari | iOS | Limits | Source |
| --- | --- | --- | --- | --- |
| `scripting.executeScript` / `insertCSS` / `removeCSS` | 15.4 | 15.4 | `injectImmediately` unsupported; CSS `origin`, `allFrames`, `frameIds` unsupported; needs host or `activeTab` access; `tabs.executeScript` is MV2 only | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `scripting.registerContentScripts` family | 16.4 | 16.4 | Inside the floor; `rules/extension.md` still lists it for a guard, keep the one-line `typeof` check | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |
| `dom.openOrClosedShadowRoot` | 26 | 26 | Above the floor | https://github.com/mdn/browser-compat-data |
| `runtime.getDocumentId` | 27 | 27 | Above the floor | https://webkit.org/blog/18325/webkit-features-for-safari-27-0/ |

## Network

| API | Safari | iOS | Limits | Source |
| --- | --- | --- | --- | --- |
| `declarativeNetRequest` | 15 | 15 | `updateDynamicRules`/`updateSessionRules` 15.4; `redirect` and `modifyHeaders` need `declarativeNetRequestWithHostAccess` (16) plus the per-site grant; `modifyHeaders` 16.4; `setExtensionActionOptions` accepts only `displayActionCountAsBadgeText`; blocking needs no page access, redirecting does | https://webkit.org/blog/13966/webkit-features-in-safari-16-4/ , https://developer.apple.com/videos/play/wwdc2023/10119/ , https://developer.apple.com/videos/play/wwdc2026/216/ |
| `webRequest` | 14, observe only | Not supported per Apple | No `BlockingResponse`; `webRequestBlocking` and `opt_extraInfoSpec` unsupported; Apple wants a persistent macOS page for it (impossible in MV3); BCD lists iOS 18 with `onBeforeRequest` 18.4 (conflict, unverified) | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility , https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| `cookies` | 14 | 15 | `onChanged` unsupported | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |

## Storage

| API | Safari | iOS | Limits | Source |
| --- | --- | --- | --- | --- |
| `storage.local` | 14 | 15 | 5 MB; `unlimitedStorage` lifts it to 10 MB in Safari 15 and unlimited in 16+ (users can clear it) | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `storage.sync` | 14 | 15 | Does not sync; behaves like `local` (Safari 15/15.1 even stored it in `local`) | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `storage.session` | 16.4 | 16.4 | In memory, cleared on quit; inside the floor, keep the guard | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |
| `storage.<area>.getKeys()` | 18.4 | 18.4 | Above the floor | https://webkit.org/blog/16574/webkit-features-in-safari-18-4/ |

## Tabs, windows, navigation, timers

| API | Safari | iOS | Limits | Source |
| --- | --- | --- | --- | --- |
| `tabs` (`query`, `sendMessage`, `onUpdated`) | 14 | 15 | The `tabs` permission does not grant page access, a host permission is still needed; `move`, `highlighted`, zoom APIs unsupported | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `windows` | 14 | 15 partial | iOS: `create`/`remove`/`update` unsupported; two windows per scene; `onRemoved` may not fire | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility, https://developer.apple.com/videos/play/wwdc2021/10104/ |
| `webNavigation` | 14 | 15 | `onHistoryStateUpdated`, `onCreatedNavigationTarget`, `onReferenceFragmentUpdated`, `onTabReplaced`, `transitionType`/`transitionQualifiers` unsupported | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `alarms` | 14 | 15 | The timer for non-persistent backgrounds | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs, https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |

## UI, messaging, misc

| API | Safari | iOS | Limits | Source |
| --- | --- | --- | --- | --- |
| `action.setBadgeText` / `setIcon` | 15.4 | 15.4 | | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |
| `action.openPopup` | 16 | 16 | | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |
| `contextMenus` / `menus` | 14 | Not supported | Feature-detect | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |
| `runtime.sendNativeMessage` / `connectNative` | 14 | 15 | Needs `nativeMessaging`; background and extension pages only; Safari ignores the application id argument; app → JS push (`connectNative`, `SFSafariApplication.dispatchMessage`) macOS only | https://developer.apple.com/documentation/safariservices/messaging-between-the-app-and-javascript-in-a-safari-web-extension |
| `permissions.request` | 14 | 15 | Prompts only for origin patterns; API permissions are granted silently; `optional_host_permissions` 15.5 | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |
| `i18n.getMessage` | 14 | 15 | Named-placeholder bugs fixed in Safari 27; use positional `$1` before | https://webkit.org/blog/18325/webkit-features-for-safari-27-0/ |
| `runtime.getBrowserInfo` | No | No | Feature-detect instead | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs |
| Namespaces | — | — | `browser.*` and `chrome.*`, callbacks and Promises | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility |

## Not supported

`notifications`, `bookmarks`, `history`, `downloads`, `management`, `sidebarAction`, `sidePanel`, `userScripts`, `identity` (start OAuth in a tab instead), `devtools` on iOS (`devtools_page` macOS 16 only), `update_url` (updates ship through the App Store), `externally_connectable.ids`, `content_security_policy.sandbox`, `file:` URL permissions (ignored), `webRequestBlocking`. Sources: https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility and the MDN API and manifest tables above.

iOS-only gaps: `windows.create/remove/update`, `contextMenus`, `webRequest` (per Apple), `devtools`, shortcut customisation, app → JS native push, persistent background pages. https://developer.apple.com/videos/play/wwdc2021/10104/ , https://developer.apple.com/documentation/safariservices/messaging-between-the-app-and-javascript-in-a-safari-web-extension
