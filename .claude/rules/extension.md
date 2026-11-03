---
paths:
  - "extension/**"
  - "tests/**"
---

# Rules for the WebExtension (`extension/`)

- Everything inside `extension/` ships inside the `.appex`; tests, tooling, notes and fixtures stay outside it. Any new subfolder must be added to `opaque-folders` on the `extension` entry in `yt.xcodeproj/project.xcproj`, or Xcode flattens it into the bundle's `Resources/`.
- Use the `browser.*` namespace with Promises; feature-detect anything newer than iOS 17 / macOS 14 (`storage.session`, `registerContentScripts`, `content_scripts.world`, `runtime.getDocumentId`).
- Content scripts do not run until the user grants site access, and `run_at` is honoured only on later loads: every content script must work when injected mid-page.
- YouTube is a single-page app and Safari lacks `webNavigation.onHistoryStateUpdated`: detect navigation in the content script (MutationObserver on the player/title, `popstate`, or YouTube's `yt-navigate-finish` event, which is community lore, so keep a fallback).
- Background on iOS is non-persistent: register listeners at top level, keep state in `browser.storage.local`, use `browser.alarms` instead of long timers. `storage.sync` does not sync in Safari; `storage.local` is 5 MB unless `unlimitedStorage`.
- `webRequest` cannot block in Safari and is unsupported on iOS; use `declarativeNetRequest` only if a feature truly needs network rules, and only with host access limited to YouTube.
- Hosts: `*://*.youtube.com/*` covers `www.` and `m.`; `youtube-nocookie.com` and `googlevideo.com` are separate hosts and are added only when a feature needs them (App Review 4.4.2 wants minimal access).
- iPhone serves `m.youtube.com` (different DOM); iPad serves the desktop site. Code for both, and never assume desktop selectors on iOS.
- Popup is a full-width sheet on iPhone and a popover on iPad and Mac: no fixed widths, background on `body`, `color-scheme: light dark`, system font via `font: -apple-system-body` so Dynamic Type applies, respect `prefers-reduced-motion`.
- Native messaging (`browser.runtime.sendNativeMessage`) works only from background or extension pages, never from content scripts; on iOS the app cannot push to the extension.
- No remote code, no `eval`, no inline scripts in extension pages (MV3 CSP). No ads, marketing or purchases inside the extension (App Review 4.4).
- Localised strings go through `_locales/<locale>/messages.json` and `browser.i18n.getMessage`; user-facing copy never says "YouTube" as part of our product name.
- After editing JavaScript, Safari only sees it after `scripts/build.sh` (resources are copied into the bundle) or via Safari's "Add Temporary Extension" pointing at `extension/` on macOS.
- Verified in Safari 27 on YouTube (2026-11-03): the page CSP (`strict-dynamic` + `require-trusted-types-for 'script'`) blocks injected `<script src=extension-url>`; page-world code must be a `content_scripts` entry with `world: "MAIN"` (Safari 18+, ignored below, so `page.js` bails when `browser.runtime` exists). Never use `innerHTML` in content scripts (Trusted Types).
- WebKit's `MediaElementAudioSourceNode` does not process MSE-backed media, so a Web Audio volume booster is silent on YouTube (verified from both worlds, see `.atlas/knowledge/safari-youtube-limits.md`); the feature is dropped and must not be reintroduced without a WebKit change.
- Ctrl+scroll never reaches the page on macOS Safari; use Option (⌥)+scroll for modifier-wheel gestures. Ctrl+click is the system right-click; use Option+click.

