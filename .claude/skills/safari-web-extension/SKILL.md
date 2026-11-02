---
name: safari-web-extension
description: Safari Web Extension workflow for anything under extension/ (manifest, content scripts, background, popup, storage, permissions, i18n, API support, debugging) on iOS 17+/macOS 14+; use before adding a feature, editing the manifest, picking an API, or debugging code that does not run in Safari.
---

# Safari Web Extension (`extension/`)

`.claude/rules/extension.md` carries the always-on facts; this skill is the procedure and the depth behind them. Siblings: `apple-host-app` (Swift handler, App Groups, xcproj), `xcode-headless-build` (raw `xcodebuild`/`simctl`), `app-store-compliance` (review beyond 4.4.2).

## Where code goes

| Change | Edit | Context limits |
| --- | --- | --- |
| Page behaviour on YouTube | `extension/content.js` (plus a CSS file listed in `content_scripts.css`) | Isolated world, DOM only; `browser.runtime` messaging, `storage`, `i18n` available; no native messaging; starts only after the site grant, possibly mid-page |
| Cross-tab state, alarms, DNR rules, native messaging | `extension/background.js` | Non-persistent page: `references/ios-behaviour.md` |
| Toolbar UI | `extension/popup.html`, `popup.js`, `popup.css` | Sheet on iPhone, popover on iPad and Mac; MV3 CSP: no inline script, no `eval` |
| User-facing text | `extension/_locales/<locale>/messages.json` | `__MSG_key__` in manifest and CSS, `browser.i18n.getMessage()` in JS |
| Icons | `extension/images/` | Sizes in `references/manifest-checklist.md` |
| Capabilities | `extension/manifest.json` | Walk `references/manifest-checklist.md` first |
| Native side | `Shared (Extension)/SafariWebExtensionHandler.swift` | `apple-host-app` skill |
| New subfolder under `extension/` | `yt.xcodeproj/project.xcproj`, `opaque-folders` on the `extension` entry | Otherwise Xcode flattens it into the bundle `Resources/` |

## Feature workflow

1. Classify the feature: DOM-only (content script) / state across loads (`storage.local`) / scheduling (`alarms`) / network rules (`declarativeNetRequest`, host access) / needs the app (background + `sendNativeMessage`) / new host or permission (`references/permissions-and-hosts.md`, App Review 4.4.2).
2. Check every API and manifest key against `references/api-support.md` and the floor table below. Unsupported in Safari: redesign, do not polyfill.
3. Manifest change: run `references/manifest-checklist.md`; `tests/manifest.test.js` enforces the invariants (MV3, `strict_min_version`, YouTube-only matches, minimal permissions, files exist).
4. Write the code for Safari's injection model (navigation table below): idempotent setup, works when injected mid-page, works on both DOMs.
5. Test: `scripts/test.sh js`, `scripts/lint.sh`, then build and verify in Safari (verification table below).
6. Done when: grant → content runs; SPA navigation → feature re-applies; background unload → state intact; popup readable at large Dynamic Type; no new host or permission without a feature that needs it.

## API floor

| Floor | Safari versions users will have | Rule |
| --- | --- | --- |
| iOS 17.0 (`IPHONEOS_DEPLOYMENT_TARGET`) | 17.x only: on iOS the Safari version equals the iOS version | APIs marked 17 or lower in `api-support.md`: use directly |
| macOS 14.0 (`MACOSX_DEPLOYMENT_TARGET`) | 17.0 through 26.x (Sonoma does not receive Safari 27) | APIs marked 18, 18.4, 26 or 27: `typeof browser.x?.y === "function"` guard plus a fallback, or leave out |
| `strict_min_version` | `"17.0"` in `manifest.json`, pinned by `tests/manifest.test.js` | Change together with both deployment targets, never below them |

Prefer, in order: web platform inside the content script; `browser.storage.local`; `browser.alarms`; `declarativeNetRequest` with YouTube-only host access; native messaging last.

## YouTube navigation and DOM variants

| Concern | Do |
| --- | --- |
| Single-page navigation | Safari has no `webNavigation.onHistoryStateUpdated`: watch from the content script (`MutationObserver` on `<title>` or the player container, plus `popstate`); treat YouTube's `yt-navigate-finish` event as an optional accelerator with the observer as fallback; the Navigation API `navigate` event is Safari 26.2+, above the floor |
| Injected late | Content scripts start only after the site grant (`run_at` applies to later loads) and arrived late on cold launch before Safari 27.2: initialise from the current DOM, mark `document.documentElement.dataset` to prevent double setup, re-run the apply step on navigation |
| iPhone | `m.youtube.com` mobile markup; branch on `location.hostname`; never reuse desktop selectors |
| iPad | Desktop `www.youtube.com` markup (iPad presents itself as a Mac); narrow windows may receive the mobile site |
| Desktop mode on iPhone | The user can request the desktop site; which DOM YouTube serves then is unverified, so both branches must fail soft (no throw, no half-applied UI) |
| Embeds and CDNs | `youtube-nocookie.com`, `googlevideo.com`, `ytimg.com` are separate hosts: no match today; add one only with the feature that needs it and a 4.4.2 justification |
| Selectors | Keep them in one module under `extension/` so `node --test` covers the parsing logic with HTML fixtures; a `youtube-page-model` skill is planned for the full DOM model |

## Test and verify

| Step | Command or action | Looks for |
| --- | --- | --- |
| Unit and manifest tests | `scripts/test.sh js -- --test-name-pattern <name>` | `node:test`, no DOM; stub `globalThis.browser` inside the test; invariants in `tests/manifest.test.js` |
| Lint | `scripts/lint.sh` | ESLint with `webextensions` globals over `extension/` and `tests/` |
| macOS build and register | `scripts/run-mac.sh` | Ad-hoc build, launches the app once, prints `pluginkit` state and the Safari steps |
| JS-only iteration (macOS) | Safari > Settings > Developer > Add Temporary Extension… → `extension/`; Reload in Settings > Extensions | No rebuild; gone when Safari quits or after 24 h; no containing app, so skip native-messaging checks here |
| iPhone | `scripts/run-ios-sim.sh`, then Settings > Apps > Safari > Extensions > Allow | `m.youtube.com` DOM, popup as a sheet, several Dynamic Type sizes |
| iPad | `scripts/run-ios-sim.sh Debug iPad` | Desktop DOM, popup as a popover |
| Inspect content script | Web Inspector on the YouTube tab > Sources > Extension Scripts; console execution context = the extension | Errors, DOM state after SPA navigation |
| Inspect background | Develop > Web Extension Background Content > (extension, profile); simulator: Develop > Simulator > Extension Background Page | Opening it loads an unloaded page |
| Inspect popup | Control-click inside the popup > Inspect Element; simulator: Develop > Simulator > Extension Popup Page | Layout at sheet width |

## Read next

| Reference | Open when |
| --- | --- |
| `references/api-support.md` | Choosing any `browser.*` API or manifest key; you need the Safari/iOS minimum or a known gap |
| `references/permissions-and-hosts.md` | Adding a host, permission, `activeTab` or optional permission; writing the copy that explains access; App Review 4.4.2 |
| `references/ios-behaviour.md` | Anything the user sees on iPhone or iPad: DOM variant, popup sheet, background unload, windows, profiles, Dynamic Type |
| `references/debugging.md` | Code does not run, extension missing from Safari, which Web Inspector to open, failure signatures and fixes |
| `references/manifest-checklist.md` | Before every edit of `extension/manifest.json` or a new file or folder under `extension/` |
