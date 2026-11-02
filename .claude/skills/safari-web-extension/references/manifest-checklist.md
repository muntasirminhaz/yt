# Manifest checklist

Run before editing `extension/manifest.json` or adding files under `extension/`. Current state: MV3, `default_locale: "en"`, background page with `type: "module"` and `persistent: false`, one content script on `*://*.youtube.com/*`, `action` with `popup.html` and an SVG toolbar icon, `permissions: []`, `strict_min_version: "17.0"`; `tests/manifest.test.js` pins these.

## 1. Is the key supported?

| Check | Detail | Source |
| --- | --- | --- |
| Key appears in `api-support.md` with Safari 17 or lower | Otherwise guard it at runtime or leave it out | `references/api-support.md` |
| Key is not on the ignored list | `update_url`, `webRequestBlocking`, `externally_connectable.ids`, `file:` patterns, `devtools_page` (iOS), `notifications`, `sidebar_action` / `side_panel`, `options_ui.open_in_tab` (always a tab), `content_security_policy.sandbox`, `include_globs` / `exclude_globs`, `background.persistent: true` (MV2 only, macOS 14.1) | https://developer.apple.com/documentation/safariservices/assessing-your-safari-web-extension-s-browser-compatibility , https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| Safari's own warning pass | `xcrun safari-web-extension-packager extension --project-location .atlas/tmp/packager-check --no-open --no-prompt --macos-only` prints unsupported-key warnings; discard the generated project. Known noise on Xcode 27.2: `background.type` and the persistent-page warning (local run, unverified) | https://developer.apple.com/documentation/safariservices/packaging-a-web-extension-for-safari |

## 2. Version floor

| Check | Detail | Source |
| --- | --- | --- |
| `browser_specific_settings.safari.strict_min_version` stays `"17.0"` | Matches `IPHONEOS_DEPLOYMENT_TARGET` 17.0 and `MACOSX_DEPLOYMENT_TARGET` 14.0 (Safari 17); the test asserts the value | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json , `.claude/rules/swift.md` |
| Raising it | Change both deployment targets in `yt.xcodeproj/project.xcproj` (app and extension targets must stay equal) and the test in the same diff | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension |

## 3. Files and folders

| Check | Detail | Source |
| --- | --- | --- |
| Every referenced file exists under `extension/` | `js`, `css`, `default_popup`, `default_icon`, `icons`, `_locales/<default_locale>/messages.json`; the test checks presence | `tests/manifest.test.js` |
| New subfolder | Add it to `opaque-folders` on the `extension` folder entry in `yt.xcodeproj/project.xcproj` (currently `_locales`, `images`), then `xcrun xcprojformatter --update yt.xcodeproj` and `xcodebuild -list`; without it Xcode flattens the folder into the bundle `Resources/` | `.atlas/research/2026-11-02-xcode27-xcproj-format-notes.md` |
| Only shipped files inside `extension/` | Tests, fixtures and notes stay outside; everything inside is copied into the `.appex` | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |

## 4. Background

| Check | Detail | Source |
| --- | --- | --- |
| Keep `"persistent": false` | iOS requires a non-persistent page | https://developer.apple.com/documentation/safariservices/optimizing-your-web-extension-for-safari |
| `type: "module"` | Supported since 16.4; the packager warns anyway (unverified); switching to `service_worker` is Apple's cross-browser recommendation but removes DOM access from the background | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json , https://developer.apple.com/videos/play/wwdc2026/216/ |

## 5. Content scripts

| Check | Detail | Source |
| --- | --- | --- |
| `matches` lists YouTube hosts only | `*://*.youtube.com/*` today; other hosts per `references/permissions-and-hosts.md` | https://developer.apple.com/app-store/review/guidelines/ |
| `run_at` | Default `document_idle`; only honoured on loads after the grant, so the script must also work when injected mid-page | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| `world`, `css_origin` | Safari 18, above the floor; `match_about_blank` / `match_origin_as_fallback` 18.4 | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json , https://webkit.org/blog/16574/webkit-features-in-safari-18-4/ |
| `all_frames` | Only if embeds become a feature; frames on other sites need their own host grant (how Safari keys it is unverified) | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns |

## 6. Permissions

| Check | Detail | Source |
| --- | --- | --- |
| `permissions` minimal | API permissions never prompt, host patterns do; the test rejects `<all_urls>`, `*://*/*`, `webRequest`, `webRequestBlocking`, `tabs` | https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions |
| `host_permissions` vs `optional_host_permissions` | Needed on every page: `host_permissions`; user-triggered feature: optional plus `browser.permissions.request` from the popup | https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions , https://developer.apple.com/videos/play/wwdc2026/216/ |
| `declarativeNetRequest` | Add `declarativeNetRequestWithHostAccess` only when a rule redirects or modifies headers | https://webkit.org/blog/13966/webkit-features-in-safari-16-4/ |
| `nativeMessaging` | Required before any `sendNativeMessage` call; background and extension pages only | https://developer.apple.com/documentation/safariservices/messaging-between-the-app-and-javascript-in-a-safari-web-extension |

## 7. Icons

| Check | Detail | Source |
| --- | --- | --- |
| `icons` | PNG 48, 64, 96, 128, 256, 512 (`images/icon-*.png`) | https://developer.apple.com/documentation/safariservices/creating-a-safari-web-extension |
| `action.default_icon` | One SVG (Safari 16.4+) or PNG 16/19/32/38; a grayscale icon is rendered as a tinted template icon | https://developer.apple.com/documentation/safariservices/creating-a-safari-web-extension , https://webkit.org/blog/13966/webkit-features-in-safari-16-4/ |
| Icon content | No YouTube logo, colours or trade dress | https://developers.google.com/youtube/terms/branding-guidelines |

## 8. CSP

| Check | Detail | Source |
| --- | --- | --- |
| `content_security_policy.extension_pages` only when needed | MV3 default already forbids remote scripts, inline scripts and `eval`; object form; `sandbox` unsupported | https://developer.apple.com/videos/play/wwdc2022/10099/ , https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json |
| Popup markup | `<script type="module" src="popup.js">`, no inline handlers or `javascript:` URLs | https://developer.apple.com/videos/play/wwdc2022/10099/ |
| `web_accessible_resources` | Object form with `matches` limited to the YouTube hosts | https://developer.apple.com/videos/play/wwdc2022/10099/ |

## 9. i18n

| Check | Detail | Source |
| --- | --- | --- |
| `default_locale` present whenever `_locales/` exists | `"en"` | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization |
| Every `__MSG_key__` exists in `_locales/en/messages.json` | `extension_name`, `extension_description` today; the test asserts both | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization |
| New locale | Folder `_locales/<lang>` or `<lang_REGION>` with an underscore; fallback region → script → language → `default_locale` | https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization |
| Placeholders | Positional `$1` until Safari 27 fixed named placeholders in `getMessage` | https://webkit.org/blog/18325/webkit-features-for-safari-27-0/ |
| Name | Never "YouTube" or "YT" inside the product name; "<Name> for YouTube" is allowed in the description | https://developers.google.com/youtube/terms/branding-guidelines |

## 10. After the edit

`scripts/test.sh js`, `scripts/lint.sh`, `scripts/build.sh macos` (or the temporary-extension Reload), re-grant the site if `matches` changed (new patterns are expected to start in the Ask state, unverified), then `scripts/run-ios-sim.sh` when the change is visible on iOS.
