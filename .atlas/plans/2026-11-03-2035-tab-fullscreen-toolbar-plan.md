# Plan: full screen in the tab, combined toolbar, toolbar names (2026-11-03 20:35)

Requests: full screen should fill the Safari tab instead of opening a full-screen window, with an opt-in for other websites; toolbar placement "in the player and under the video"; names next to icons under the video by default, switchable off.

1. `winfull.js` (MAIN world, idempotent): wraps `Element.prototype.requestFullscreen`/`webkitRequestFullscreen` and `Document.prototype.exitFullscreen`/`webkitExitFullscreen`; marks the element with `data-ytx-winfull`, toggles `html.ytx-winfull`, fires `resize` and `ytx:winfull`; Escape exits; iframes tell the parent through `postMessage` so the host page enlarges the frame. YouTube (base.js `dr(this.app.fb().element)`) requests on the player root, so the same rules apply there. Gated on YouTube by a `ytx:config` event from `content-player.js`; always on elsewhere.
2. `winfull.css`: `html.ytx-winfull` hides page overflow; `[data-ytx-winfull]` fixed, inset 0, top z-index, black. Shared by youtube.com (manifest css) and the registered script.
3. Settings (Player): `tabFullscreen` (Beta, not iPhone) and child `tabFullscreenEverywhere` with `origins: ["<all_urls>"]`; the permission pre-step gets an all-sites text. Background registers `winfull.js` + `winfull.css` for `<all_urls>` (excluding youtube.com) through `scripting.registerContentScripts` with `world: "MAIN"` (Safari 18); on failure the switch flips back. Manifest: `scripting` permission, `<all_urls>` in `optional_host_permissions`; manifest tests updated.
4. Toolbar: `controlsPlacement` gains `both`; `content-ui.js` keeps a list of bars, each with its own menu, filters and A–B panels; `toolbarLabels` (default on) adds a name after each icon in the bar under the video; `reveal` accepts `when: "a,b"`.
5. Mini player ignores window full screen (`fullscreen()` checks `html.ytx-winfull`, listens to `ytx:winfull`).
6. Lint, tests, `run-mac.sh`; report and status lists updated. No commit.
