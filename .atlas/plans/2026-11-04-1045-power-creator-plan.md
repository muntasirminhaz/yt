# Power tools, Creator tools, Accessibility (2026-11-04 10:45 +06)

Request: build section A (shortlisted-extension gaps) and section B (creator tools) of `.atlas/research/2026-11-04-feature-ideas.md`, the picks (loop count/links, channel Videos tab, intro/outro skip, SEO facts, velocity badge, chapter maker, transcript search, caption styling) and "hide AI-labelled videos", in separate options menus so average users are unaffected.

## Spike results (curl, 2026-11-04, see `.atlas/knowledge/safari-youtube-limits.md`)
- Feeds and search carry no "altered or synthetic" label (search `badges`: 4K, CC, New, product only). AI hiding is a word-boundary keyword heuristic over title, hashtags and channel name, with an editable list.
- `movie_player.getPlayerResponse()` is an exported player method; response has `storyboards.playerStoryboardSpecRenderer.spec` (`base|w#h#count#rows#cols#intervalMs#name#sigh` per level), `adPlacements[].adPlacementRenderer.config.adPlacementConfig{kind,adTimeOffset}`, `endscreen.endscreenRenderer.elements[].endscreenElementRenderer{style,title,startMs,endMs,endpoint}`, `cards.cardCollectionRenderer.cards[].cardRenderer{teaser,cueRanges}`, `microformat.playerMicroformatRenderer{publishDate (ISO with time),category,viewCount,externalChannelId}`, `videoDetails.keywords`, `captions.playerCaptionsTracklistRenderer.captionTracks[]{languageCode,kind}`.
- Caption options are `setOption("captions", name, value)` with `fontSizeIncrement` -2..4, `color`/`background` hex, `backgroundOpacity` 0..1, `charEdgeStyle` 0..4 (None, Raised, Depressed, Outline, Drop shadow = 4).
- Heat map: `.ytp-heat-map-path` `d` in a 1000×100 viewBox, y = 100 − intensity.
- Likes: like button `accessibilityText` "like this video along with 19,491,293 other people". Channel header rows: "525M subscribers", "1K videos"; tab titles Home/Videos/… with `/videos` URLs.
- YouTube's `img-src` CSP is report-only, so `blob:` images render.

## Tasks
### T1 Schema, strings, options shell
Does: three new groups (`power`, `creator`, `access`), rows, `NEEDS` action gating (`actionsFor`), pure helpers (`aiPatterns`, `aiMatch`, `storyboardTile`, `heatPeaks`, `srt`, `parseCount`, `parseSkips`), BETA entries, nav icons, strings.
Touches: defaults.js, ui.js, options.js, messages.json, tests/settings.test.js. Accept: `scripts/test.sh js` green, labels for every row and option.
### T2 Bridge and shared pieces
Does: page.js `details` and `captionStyle`; loop count + loop links in the A–B panel; AI hide and search fade in the feed scanner; caption style in appearance. Depends: T1.
### T3 content-power.js
Does: find boxes (transcript, comments, chat), Watch Later clean-up, channel Videos tab, comments beside + time button, chat tidy, channel skips + `setIntro`, thumbnail viewer + `thumbnail`, exact stats, timestamp preview. Depends: T2.
### T4 content-creator.js
Does: save transcript (TXT/SRT), facts panel (tags, IDs, captions, ad breaks, most replayed, end screen, cards), velocity badge, chapter maker + `chapters`, comment triage, saved replies, channel tracker + CSV, ad-break marks, thumbnail test card. Depends: T2.
### T5 CSS, manifest, docs, verification
Does: content.css rules, manifest script list, status report and knowledge file, lint, tests, `scripts/run-mac.sh`. Depends: T3, T4.

Risks: every DOM selector is unverified in Safari until the user's next round (all new keys carry the Beta badge); menus clicked for Watch Later removal are English-only; comment "unanswered" relies on the creator avatar in the replies toggle.

## Status (2026-11-04 12:20 +06)
T1–T5 done: lint, 25 JS tests, jsdom smoke of the options page and of the content scripts on watch, home, results, live-chat and channel fixtures, `scripts/run-mac.sh` BUILD OK. Every new key is in `BETA` until the next desktop round.

## Live verification (2026-11-04 15:30 +06)
Ten safaridriver runs against live YouTube (see the status report date line and the knowledge file). Fixes made from them: toolbar mounts late when `#below` renders after boot (scanner retry), facts panel race (duplicate), facts tag text width (`.ytx-frow > span`), transcript search box dropped (YouTube has its own), comments search box moved below the comments title, member badge detection (visible badge only), velocity picks up the comment count later, timestamp selectors (`&t=`/`?t=`), live chat Live-mode needs the menu opened first, scanner throttle, AI plural words, most-replayed peaks from `ytInitialData`, comments beside by absolute positioning instead of a DOM move.
