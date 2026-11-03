# Feature status pass (2026-11-03 12:59)

Goal: mark unverified features in the options UI and publish a status report (done / not done / impossible).

1. `BETA` set in `extension/defaults.js` (row keys and action ids built but not yet verified on YouTube in Safari; children inherit from their parent row).
2. `ui.js`: "Beta" badge after the label of beta rows, beta toolbar options and beta shortcut rows. `ui.css`: `.badge`. `messages.json`: `badge_beta`.
3. Test: every BETA entry is a schema key or an action.
4. `scripts/test.sh js`, `scripts/lint.sh`, `scripts/run-mac.sh`.
5. Report `.atlas/reports/2026-11-03-feature-status.md`: verified, beta (effect + how to test), not done (what unlocks it), impossible (Apple/WebKit reason).
6. Remove keys from `BETA` as the user confirms them; no commit without a go-ahead.

## Round 2 (13:40): Playback feedback
- Verified: time remaining, pause on blur, wheel speed, reverse. Remove from `BETA`.
- Remove: per-channel speed (row, code, strings, `channelSpeeds` load), "Only while the right mouse button is held" for speed (volume keeps its verified copy).
- Wheel speed: 100 px per step, one step per event, 200 ms gap, accumulator reset on reject; volume unchanged.
- Captions: click the CC button when off, then pick the track through the player API with three retries; bridge reports "no tracks yet" / "no track for xx".
- Resume: pill "Resumed at m:ss" and `[ytx] resume` log so the user can tell it from YouTube's own resume.

## Round 3 (14:05): per-section defaults
- Every section except Advanced ends with a Defaults row: "YouTube’s defaults" (switches off, lists empty, other rows at our defaults) and "Recommended" (welcome preset values over defaults). Options page now re-renders a section when its settings change elsewhere (presets, these buttons, another tab).

## Round 4 (14:55): page-by-page feedback
1. Groups: new Shorts group (hideShorts, shortsAsVideos, shortsAutoNext); Sponsors merged into Ads ("Ads and sponsors"); icons updated.
2. Rows: remove volumeWheelRight (and rightDown tracking); theme gains Light; ambient renamed "Turn off Ambient mode"; links (Learn more) on SponsorBlock, DeArrow, RYD rows; autoTheater note says reload.
3. Reload hint: `RELOAD` set (quality, codecs, autoTheater, backgroundPlay, shortsAutoNext) → toast "Saved. Reload YouTube to apply" with a Reload button → background reloads YouTube tabs.
4. Permission pre-step: origins rows explain the Safari prompt and offer Continue / Not now before `permissions.request`.
5. Mini player: never in full screen, container follows theater mode, release on fullscreenchange; autoTheater waits for mini to release.
6. Shorts auto-next: keep loop off every timeupdate, player setLoopVideo(false), click next on ended or wrap-around.
7. Thumbnails: collapse lockup image containers on the watch page.
8. Backup: Copy button, timestamped filename, two-step Reset all.
9. BETA trimmed to captions, resume, seek step, Shorts auto-next, theater, shortcuts, background play, toolbar actions.

## Round 5 (15:45): shortcuts, panel, privacy
- Shortcuts row carries `recommended` combos (Option-based, dead keys avoided); defaults stay empty; section Recommended applies them.
- Options window full height, sides unchanged; Learn more links `noopener noreferrer`.
- Privacy mode: clear YouTube local/session storage on enable; reload with `bypassCache`.

## Round 6 (16:20): Shorts rebuild
- `content-shorts.js` (new content script): 250 ms poll while on /shorts; per-reel state keyed by video id; loop off; next on ended or wrap; button then scroll fallback; panel-aware; ad reels skipped when adSkip is on; comments auto-open; captions via bridge.
- `page.js` player() prefers `#shorts-player` on Shorts URLs (fixes captions, loop, quality and volume calls there).
- Playback: Shorts speed setting; plain wheel left to Shorts navigation.
- Settings: shortsComments, shortsCaptions, shortsSpeed (Beta).

## Round 7 (16:50): desktop feedback 2
- Toolbar: `guest` and `blockChannel` actions removed; menus/panels flip upward (menuSide auto/above/below) when the toolbar sits under the video.
- Feeds: feedPreviews (allow/muted/off) + previewCaptionsOff via scanner and CSS; lockup thumbnail collapse fixed for both class generations.
- Options: shortcut hints on related rows (row.actions); Learn more opens via tabs.create.
- Shorts: active reel found via the video element; comments button lookup widened.
- BETA trimmed to captions, resume, seek step, Shorts comments, Theater, background play, menus, previews, undo skip.

## Round 8 (2026-11-03 19:20): desktop feedback 3

Reported: Shorts all good; previews "options are not switching"; captions still off; SponsorBlock, toolbars, player, options items, privacy cache fix, Advanced all good; rename Copy; rename Experimental.

- Root cause for previews: search results were `cloneNode` copies, so segmented controls had no click handlers (jsdom reproduction in `.atlas/tmp/jsdom`, deleted). Search now renders live rows through `renderRow`; the copy-back listener is gone; the Saved toast listens on results too.
- Captions: the watch page relied on the CC button click and returned early; now the bridge path proven on Shorts runs first (`isSubtitlesOn` short-circuit, honours the language), retried 5×, button click only when the bridge is missing; skipped on Shorts.
- Previews: document-level capture listeners for play, playing, volumechange replace the scanner; Off also hides `ytd-moving-thumbnail-renderer`. Verified in YouTube's current bundle: inline previews still use `#inline-preview-player` (WEB_PLAYER_CONTEXT_CONFIG_ID_KEVLAR_INLINE_PREVIEW), hover hosts `ytd-video-preview` plus loader and portal variants, Shorts shelves use moving thumbnails.
- Group `experimental` renamed `privacy` (label Privacy, shield icon); background play moved to Playback; "Experimental." dropped from notes; Copy renamed Copy settings.
- BETA trimmed to captionsAuto, resumePositions, seekStep, backgroundPlay, feedPreviews, previewCaptionsOff.
- Lint, 20 tests, `run-mac.sh` BUILD OK. Not committed.
