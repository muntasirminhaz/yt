# Plan: Enhancer-for-YouTube feature parity, Apple-style, Safari macOS + iOS

Date: 2026-11-03 02:13 (+06)
Status: DRAFT for review. No code written.
Inputs: `.atlas/research/Enhancer for YouTube chrome/*.png` (7 screenshots), `.atlas/research/2026-11-03-competitor-feature-lists.md` (store pages, 10 products, matrix), `.atlas/research/2026-11-02-safari-web-extension-platform-notes.md`, `.claude/rules/extension.md`, `.claude/skills/safari-web-extension/`.
Scope: one-to-one feature copy of Enhancer for YouTube (v1); Safari macOS is the test target; iPhone layout verified through Safari Responsive Design Mode (iPhone user agent serves `m.youtube.com`), not the simulator.

## 0. Decisions needed from you

| # | Decision | Recommendation | Why |
|---|---|---|---|
| 1 | Custom script (user-pasted JavaScript run on YouTube) | Drop from v1; keep Custom CSS | YouTube's CSP blocks injected inline scripts in Safari; App Review 2.5.2 (executing downloaded code) is a rejection risk; the other 9 products do not offer it |
| 2 | Pop-up player (separate resizable window) | Map to native Picture in Picture (`video.webkitSetPresentationMode`) on both platforms | `windows.create` does not exist on iOS; PiP is the Apple-native equivalent, already draggable, resizable and always-on-top; no `youtube-nocookie.com` host needed |
| 3 | Themes | Ship one own dark variant (accent colour + custom CSS field) instead of porting 50 DeepDark variants | DeepDark is GPL and large; YouTube's own dark theme exists; Custom CSS covers power users |
| 4 | Settings surface | Popup = quick controls; options page (HTML/CSS, opens in a tab) = all settings; no SwiftUI settings in the container app for v1 | Same code on macOS and iOS; Safari always opens `options_ui` in a tab; the app stays a launcher with instructions (App Review 4.2 is met by the extension) |
| 5 | Keyboard shortcuts | In-page `keydown` with a shortcut editor in the options page; one manifest `commands` entry ("open settings") only | `commands` customisation exists only on macOS Safari 26+; in-page handling works on every version and on iPad with a keyboard |
| 6 | Shorts and ads | Hide Shorts (CSS) is in; no ad blocking, no SponsorBlock | Ad blocking violates YouTube Terms (App Review 5.2.2); SponsorBlock is a separate product |
| 7 | Icons | Own inline SVG glyphs drawn in the SF Symbols style; no SF Symbols files | Apple's SF Symbols license restricts them to apps on Apple platforms; web content inside the extension is a grey zone, so avoid it |

Answer with numbers ("1 keep it, rest as recommended") or just "as recommended".

## 1. Feature list (target = Enhancer for YouTube, grouped)

Source for each row: screenshots 1, 4, 6 (options page), 2, 3, 5, 7 (in-player controls), mrfdev.com feature page. "Mobile" = `m.youtube.com` on iPhone; iPad gets the desktop site.

### A. Playback speed
| Feature | Enhancer default | Safari approach | Mobile | Slice |
|---|---|---|---|---|
| Default playback speed (applied on every video) | 1.3 (their screenshot), range 0.07x to 16x | `video.playbackRate` on navigation and on `loadedmetadata` | yes | T2 |
| Override YouTube's speed menu with finer steps | on | Re-apply after YouTube resets rate; speed list in settings | yes | T2 |
| Speed step for wheel and buttons | 0.02 | setting | n/a | T2 |
| Mouse wheel over player changes speed (Ctrl held, or right button held) | on | `wheel` listener on player, `passive:false` only while modifier held | no | T2 |
| Speed buttons - / + / reset in the control bar; Ctrl+click = default speed, Ctrl+Shift+click = 1x | on | in-page controls | yes (tap) | T2, T7 |
| Reverse wheel direction (speed and volume) | off | setting flag | no | T2 |

### B. Volume
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Default volume level | off, 50 | `video.volume` on navigation | iOS ignores `volume` (hardware only): hide on mobile | T3 |
| Volume booster level (1x to 10x) + control button | 2x, button on | Web Audio `MediaElementSource` to `GainNode`, created on first user gesture | yes (needs gesture) | T3 |
| Automatically boost | off | apply gain on load | yes | T3 |
| Wheel over player changes volume (optionally right button only), variation 5 | off | `wheel` listener | no | T3 |

### C. Playback quality and codecs
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Auto-select quality: videos, playlists, embeds | 1080p / 720p / 360p | page-world bridge calls the player's `setPlaybackQualityRange`; embeds out of scope v1 (needs `youtube-nocookie.com` host) | best effort (mobile player API unverified) | T4 |
| Different quality in full screen, revert on exit | 1440p etc. | `fullscreenchange` listener + same bridge | no (iOS full screen is native) | T4 |
| Force standard frame rates (24/25/30) | off | page-world override of `MediaSource.isTypeSupported` at `document_start` to reject high-fps strings | yes | T4 |
| Force MP4/AVC instead of WebM/VP9 | off | same override rejecting `vp9`/`av01` | yes (Safari often already AVC) | T4 |

### D. Autoplay
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Disable YouTube autoplay toggle | off | set the autoplay switch off via DOM, re-check on navigation | yes | T5 |
| Prevent videos in background tabs from autoplaying; foreground too; playlist exception; stop fully (save bandwidth) | on / off / on / off | `document.visibilityState` check at `play` event; `video.pause()`; "stop" = call player `stopVideo` via bridge | yes | T5 |
| Pause videos in other tabs when one starts (ignore pop-up) | off | content → background "playing" → `tabs.sendMessage` broadcast "pause" | yes | T5 |

### E. Player, layout, picture
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Cinema mode (dim everything but the player; Esc or click outside exits) | button on | full-page overlay below the player's z-index | yes | T6 |
| Expand player / fit to window (bigger than theater, no fullscreen) | buttons on | CSS class on `ytd-watch-flexy` and the player container; mobile: n/a (already full width) | no | T6 |
| Mini player when scrolling to comments; size 480x270; position corner | on | `IntersectionObserver` on player; `position: fixed` on the player container; sizes and corner from settings | no (YouTube mobile has its own) | T6 |
| Pop-up player size | 640x360 | replaced by Picture in Picture button (decision 2) | yes | T6 |
| Loop (whole video or A-B segment) | button on | `video.loop`; A-B via `timeupdate` | yes | T8 |
| Stop (unload video) | button off | bridge `stopVideo` | yes | T8 |
| Reverse playlist order | button on | reorder playlist panel items by DOM move; v1 best effort | no | T8 |
| Flip video (mirror) / rotate | button | CSS `transform` on `video` | yes | T8 |
| Video filters: brightness, contrast, saturation, grayscale, sepia, hue, invert, blur | button on | CSS `filter` on `video`; sliders in a popover; reset | yes | T8 |
| Screenshot (current frame, full resolution) | button on | `canvas.drawImage(video)` → `toBlob` → download link, or Share on iOS; verify canvas is not CORS-tainted in Safari | yes | T8 |
| Hide cards / end screens / annotations | button on | CSS | yes | T7 |

### F. Appearance and theme
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Dark theme: YouTube official, or own variant with accent colour | off | YouTube's: set `dark` attribute on `html`; own: CSS custom properties override | yes | T9 |
| Custom CSS | off | `<style>` element with user text; saved in `storage.local` | yes | T9 |
| Hide elements: related videos, comments, live chat, Shorts (shelf and tab), end screens, info cards, "more videos" overlay, playlist, description, merch, notifications, voice search | off each | one CSS class per toggle on `html`; selectors in one module with desktop and mobile variants | yes | T9 |
| Watch Shorts as regular videos | off | rewrite `/shorts/ID` links and redirect `/shorts/` page to `/watch?v=` | yes | T9 |

### G. Controls (the in-page toolbar)
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Choose which controls appear (17 in Enhancer: loop, stop, reverse playlist, boost, cards, cinema, expand, fit, flip, speed, speed reset, filters, mini player, pop-up/PiP, screenshot, shortcuts, custom script, settings) | most on | checklist in settings | yes | T7 |
| Placement: inside the player's control bar, or a bar below the player (or top/bottom of window) | inside | CSS + mount point switch; mobile: bar below player only | partial | T7 |
| Keep visible vs behind a "⋯" button | behind | Apple approach: one pill button opens a popover menu; pinned favourites sit next to it | yes | T7 |

### H. Shortcuts and mouse
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Keyboard shortcut per action, user-assigned (none by default) | none | `keydown` in content script, ignoring text inputs; recorder UI in options | iPad keyboard only | T10 |
| Mouse: Ctrl+click default speed, Ctrl+Shift+click 1x, wheel as above | on | see A and B | no | T2 |

### I. Backup, info, embedded
| Feature | Default | Approach | Mobile | Slice |
|---|---|---|---|---|
| Export / import settings (JSON) | | file download from the options tab; `<input type=file>` import | yes (Files app) | T11 |
| Apply defaults to embedded players on other sites | on | out of scope v1 (needs `<all_urls>` or `youtube-nocookie.com`; App Review 4.4.2) | | later |
| Custom script | | decision 1 | | later |

Competitor extras seen on the store pages but out of scope for v1 (parity first): SponsorBlock segments, subscription groups, channel blocking, transcripts, resume-where-left-off, tracking-param removal, other video sites.

## 2. Design

Principles: Apple HIG for forms and lists, no overhead. System font (`font: -apple-system-body` and friends so Dynamic Type works), `color-scheme: light dark`, system colours (`Canvas`, `CanvasText`, `AccentColor`, `-apple-system-*`), `accent-color` on form controls, native `<select>`, `<input type=range>`, `<input type=checkbox switch>` (Safari 17.4+, plain checkbox fallback), `prefers-reduced-motion` respected, 44pt touch targets, labels on every control, keyboard operable. One shared `ui.css` with tokens; no framework.

### 2.1 Popup (toolbar icon): "what you need right now"
- Header: product name, on/off switch for this site.
- "This video" group: speed stepper (- value +), boost switch, cinema switch, filters switch, PiP button. Each writes the setting and the open tab applies it live.
- "Defaults" group: default speed, default quality, dark theme switch.
- Footer link "All settings…" → options tab. Sheet on iPhone, popover on Mac: no fixed width, `body` background.

### 2.2 Options page: 6 groups instead of 14, progressive disclosure
- Layout: sidebar list on wide screens, stacked grouped-inset sections under 700px (CSS only). Search field at the top filters rows by label text (one `input`, one `filter` function) so no one scrolls 14 panels.
- Groups: Playback (speed, volume, loop), Quality (quality, codecs), Autoplay, Player (cinema, size, mini player, PiP, controls picker, filters), Appearance (theme, hide elements, custom CSS), Shortcuts (keyboard, mouse), plus Backup in the footer.
- Each row = label, optional footnote, native control. Child rows appear only when the parent switch is on (`:has()` or `hidden`), which replaces Enhancer's greyed-out nesting.
- Controls picker: grid of glyph toggles exactly like Enhancer but with Apple glyphs and a live preview of the pill.

### 2.3 On YouTube: one pill, not seventeen buttons
- Desktop: a frosted pill (`backdrop-filter`) in the player's right control group: pinned favourites (default: speed, boost, cinema, PiP) and a "⋯" button that opens a popover menu with every enabled action, grouped, with the shortcut shown. Hover reveals like the native controls; "keep visible" option.
- Mobile (`m.youtube.com`): the same pill as a bar directly below the player, scrollable horizontally, 44pt targets; popover becomes a bottom sheet.
- Glyphs: inline SVG sprite, `currentColor`, 1.5px strokes (SF style), own drawings.
- Overlays (cinema, filters sheet, mini player) use the same tokens; everything lives under one root element with a prefixed class to avoid clashing with YouTube's CSS, and `all: initial` on the root.

## 3. Architecture

```
extension/
  manifest.json          + options_ui, web_accessible_resources (page.js), permissions: storage, tabs-free messaging
  defaults.js            settings schema + defaults (classic script; loaded by popup, options and content)
  content.js             core: settings load/live update, navigation detection, page bridge, mount points, desktop vs mobile DOM
  content-playback.js    speed, volume, booster, wheel, loop, stop
  content-player.js      cinema, expand/fit, mini player, PiP, filters, flip, screenshot, autoplay
  content-ui.js          pill, popover, bottom sheet, glyph sprite
  content-shortcuts.js   keydown routing to actions
  content.css            pill, overlays, hide-element rules, theme variant
  page.js                page world (web_accessible_resources): player API calls, isTypeSupported override, quality/fullscreen events
  background.js          cross-tab pause broadcast, options-open command
  popup.html/js/css      quick controls
  options.html/js/css    all settings
  ui.css                 shared Apple tokens
  _locales/en/messages.json
tests/                   node:test: defaults merge, selector table, shortcut parser, hide-element CSS generation, manifest invariants
```

- Flat file names, no new subfolder (avoids the `opaque-folders` xcproj edit); `content_scripts.js` lists the five content files in order, all sharing one `globalThis.ytx` namespace.
- Settings: one object under `browser.storage.local.settings`, merged over defaults on read; `storage.onChanged` re-applies in every open tab, so popup and options never message the content script.
- Page bridge: content injects `<script src=browser.runtime.getURL('page.js')>` once; the two worlds talk through `document.dispatchEvent(new CustomEvent('ytx:'+type, {detail}))` both ways; page.js has no access to settings except what the content script sends.
- Navigation: `yt-navigate-finish` as accelerator, `MutationObserver` on `<title>` plus `popstate` as fallback; idempotent `apply()` guarded by `documentElement.dataset.ytx`.
- Mobile branch: `const mobile = location.hostname.startsWith('m.')`; every selector table has `desktop` and `mobile` keys; a feature with no mobile selector silently skips.
- No runtime dependencies, no bundler, no inline scripts (MV3 CSP).

## 4. Slices (each ends green on `scripts/test.sh js`, `scripts/lint.sh`, and a manual check in Safari)

### T0: Settings foundation
Does: schema + defaults, storage helpers, options page skeleton with Apple tokens, popup skeleton, manifest changes.
Touches: `defaults.js`, `ui.css`, `popup.*`, `options.*`, `manifest.json`, `_locales`, `tests/defaults.test.js`, `tests/manifest.test.js`.
Accept: `settings` reads back merged defaults; options page renders every group with native controls, light and dark, at 400px and 1200px; `options_ui` opens from the popup link.
Complexity: medium; Risk: `switch` attribute missing on 17.0 → plain checkbox fallback styled by `accent-color`.

### T1: Content core
Does: settings load + live update, navigation detection, page bridge, desktop/mobile detection, mount points, glyph sprite.
Touches: `content.js`, `page.js`, `manifest.json` (`web_accessible_resources`, `run_at: document_start`).
Accept: injected mid-page it still mounts; SPA navigation re-applies within 500 ms; bridge round-trip returns the player state; nothing throws on `m.youtube.com`.
Complexity: high; Risk: bridge script blocked by CSP → it is an extension URL in `web_accessible_resources`, allowed by YouTube's CSP (`script-src` includes `blob:`? verify; fallback: `scripting.executeScript` with `world: MAIN` on Safari 18+, otherwise feature off).

### T2: Playback speed (first full vertical slice)
Depends on: T0, T1. Accept: default speed applied and kept after YouTube resets it; wheel with Ctrl/right button changes by the step; buttons and Ctrl+click behave as specified; popup stepper updates the open tab live.

### T3: Volume and booster
Depends on: T2. Accept: gain node created only after a gesture, no audio glitch on navigation (single `AudioContext` per page, source re-attached when the `<video>` element changes); default volume skipped on iOS.

### T4: Quality and codecs
Depends on: T1. Accept: chosen quality active within 2 s of a watch page load; fullscreen quality switch and revert; `isTypeSupported` override installed before the player loads on fresh loads; graceful no-op when injected late.

### T5: Autoplay
Depends on: T1. Accept: background tab never starts playing; playlist exception honoured; cross-tab pause works between two Safari tabs; `background.js` registers listeners at top level only.

### T6: Cinema, expand/fit, mini player, PiP
Depends on: T1. Accept: cinema exits on Esc and outside click; expand and fit do not break the comments column; mini player appears when the player leaves the viewport and restores on scroll up; PiP toggles on Mac and iPhone (responsive mode cannot test PiP: note as a simulator/device item).

### T7: Controls pill, popover, hide cards
Depends on: T2 to T6. Accept: pinned set and "⋯" menu follow the settings picker; desktop in-player and below-player placements; mobile bar below player with 44pt targets; VoiceOver reads every button.

### T8: Loop, stop, reverse playlist, flip, filters, screenshot
Depends on: T7. Accept: A-B loop stays in range; filters sliders live-update and reset; screenshot produces a PNG of the video's native size on Mac (if the canvas is tainted on Safari, document and fall back to the `videoWidth` thumbnail route); reverse playlist is best effort and marked `// note:`.

### T9: Appearance
Depends on: T1. Accept: each hide toggle removes its element on desktop and mobile without layout holes; dark variant and custom CSS apply instantly from the options page; Shorts redirect preserves the video ID.

### T10: Keyboard shortcuts
Depends on: T7. Accept: recorder captures a combination, rejects conflicts with YouTube's own keys, and ignores typing in inputs; shortcuts shown in the popover menu.

### T11: Backup, i18n, accessibility, review pass
Depends on: all. Accept: export/import round-trips; every string in `messages.json`; popup at the largest Dynamic Type size; `app-store-compliance` checklist run; no new host or permission beyond `storage`.

Dependency graph: T0 → T1 → {T2 → T3, T4, T5, T6, T9} → T7 → {T8, T10} → T11.

## 5. Risks

| Risk | Mitigation |
|---|---|
| YouTube DOM changes break selectors | one selector table per DOM, feature-detect, fail silently, tests over HTML fixtures |
| Page-world script blocked | extension URL is allowed; `scripting.executeScript` `world: MAIN` on Safari 18+ as fallback; features that need the bridge degrade |
| Web Audio and canvas CORS on Safari | spike in T3/T8 before building UI; document fallback |
| Late injection on cold launch (Safari < 27.2) | every apply step idempotent and runnable at any time |
| iOS `volume` read-only, no wheel, no keyboard | rows hidden on mobile instead of silently ignored |
| Settings overload | search filter, progressive disclosure, 6 groups, sane defaults |
| Performance: 5 content scripts on every YouTube page | no polling; observers scoped to the player; CSS does the hiding; measured with Web Inspector timelines in T11 |

## 6. Verification

| Where | How |
|---|---|
| Desktop Safari | `scripts/run-mac.sh` once, then Safari > Settings > Developer > Add Temporary Extension on `extension/` for JS-only iteration |
| iPhone layout | Safari Develop > Enter Responsive Design Mode, iPhone preset (serves `m.youtube.com`); popup sheet width simulated by resizing |
| Dark/light, Dynamic Type | macOS System Settings appearance toggle; Safari page zoom and `-apple-system-body` |
| Automated | `scripts/test.sh js`, `scripts/lint.sh` on every slice |
