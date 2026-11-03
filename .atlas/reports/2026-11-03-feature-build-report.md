# Feature build report: competitor parity round 2

Date: 2026-11-03 (+06). Commits: `16e4ce5` (settings redesign), `b816269` (feature build), later commits listed at the end.
Research inputs: `.atlas/research/2026-11-03-survey-chrome.md`, `-survey-firefox.md`, `-survey-apple.md`, `-community-findings.md`; consolidated list in `.atlas/research/example_extentions.txt` and `.atlas/research/2026-11-03-competitor-feature-lists.md`.

## 1. Built this round

| Group | Feature | How it works | Needs / flag |
|---|---|---|---|
| Sponsors | Skip sponsor segments (SponsorBlock) | Background fetches `sponsor.ajay.app/api/skipSegments/<4-hex SHA-256 prefix>` (privacy mode: full video ID never leaves the device), content script skips or marks per category, colour markers on the progress bar, optional HUD | `optional_host_permissions` prompt on first enable; API has CORS `*` so it works even if the prompt is declined; third-party service: list in App Store privacy label ("Identifiers: no; Usage data: video hash prefix"); attribution in the setting note |
| Watch page | Dislike counts (Return YouTube Dislike) | Background fetches `returnyoutubedislikeapi.com/votes?videoId=`; count appended inside the dislike button | Prompt on first enable; the API sends CORS `*` to extension origins (verified with curl), so a declined prompt still works; sends the full video ID; privacy label |
| Watch page | Clearer titles (DeArrow) | Background fetches `sponsor.ajay.app/api/branding/<prefix>`; watch-page title replaced with the locked or top-voted community title, original kept in the tooltip | Same server as SponsorBlock; card titles in feeds are pending (one request per card prefix; needs batching and caching) |
| Ads | Hide promoted videos and banners | CSS on feed ad renderers, masthead banner, companion slots, merch and promo shelves | Cosmetic only |
| Ads | Skip video ads (experimental, off) | Watches `#movie_player` for `ad-showing`/`ad-interrupting`: mutes, 16× rate, seeks to the end, presses every Skip button; restores mute and speed after | Against YouTube terms; App Review 5.2.2 risk; YouTube changes the player often; keep off by default and keep the warning |
| Experimental | Keep playing in the background (iPhone, iPad) | Main-world override of `document.hidden`/`visibilityState` and swallowing `visibilitychange`, `pagehide`, `blur` at capture, flag cached in localStorage so it is in place at `document_start` | Device test only; may not survive the lock screen on every iOS version |
| Playback | Remember speed per channel | `channelSpeeds` in `storage.local`, keyed by the player's author name, written when you change speed | |
| Playback | Turn on captions + language | Player API `loadModule("captions")` + `setOption("captions","track",{languageCode})`, falls back to clicking the CC button | |
| Playback | Show time remaining | Span after the duration, updated once per second, divided by the current speed | Desktop only |
| Playback | Pause when you leave the window | `blur` pauses, `focus` resumes only what we paused | |
| Playback | Resume where you left off | `positions` in `storage.local`, 300 newest, saved every 10 s, cleared on `ended`, skipped when the URL has `t=` or YouTube already resumed | |
| Player | Start in Theater mode | Clicks the size button once per video when not already theater | Desktop only |
| Player | Screenshot to clipboard | `ClipboardItem` with a promise, created inside the click gesture | Safari 13.1+ |
| Toolbar | Previous / next chapter | Chapter starts derived from the widths of the chapter segments in the progress bar | Desktop only |
| Toolbar | Loop a section (A–B) | Panel with From / To fields and "Now" buttons; `timeupdate` seeks back at B | |
| Toolbar | Copy link at current time, copy transcript | `youtu.be/<id>?t=<s>`; transcript opened and read from the panel | |
| Feeds | Open Subscriptions / Watch later / History instead of Home | `location.replace` on `/` | |
| Feeds | Hide watched, hide live and premieres | CSS `:has()` on progress overlays and live badges | |
| Feeds | Blocked channels, blocked words in titles | Debounced DOM scanner shared with the view-count hider, class `ytx-blocked` | |
| Feeds | Hide Mixes | CSS on radio renderers and `list=RD` links | Added from the Firefox survey |
| Sponsors | Never skip on these channels | Channel-name whitelist checked against the player's author; segments stay marked | From the community ranking (per-channel whitelist) |
| Clean up | Videos per row on the home page | Sets `--ytd-rich-grid-items-per-row` | From the community ranking (layout control) |
| Clean up | Hide AI features, Hide Playables | CSS on the Ask button and panel, the Playables shelf and sidebar entry | From the community ranking (AI controls) |
| Appearance | Hide Shorts also on channel tabs and in notifications | Extra selectors | From the community ranking |
| Watch page | Keep original titles | Compares the shown title with the player's `getVideoData().title` and restores it when YouTube auto-translated | Six Firefox add-ons exist only for this; relevant for non-English accounts |
| Watch page | Remove tracking from the address | `history.replaceState` without `si`, `pp`, `feature` and similar | From the Chrome survey (YouTube Enhancer) |

| Playback | Seek back/forward, previous/next frame, sleep timer | Toolbar actions; seek step setting; sleep timer cycles 15/30/60 min and pauses | From the candidates list (seek buttons, sleep timer) |
| Player | Rotate video, fill the frame, keep controls visible, hide overlays, ambient glow off | CSS transforms and classes | Candidates 20, 22, 24, 46, 49 |
| Watch page | Block this channel (toolbar), dismiss "Continue watching?", comments sorted by newest, hide Share/Clip/Thanks/Save, blocked words in comments, like/dislike ratio bar | Scanner and DOM clicks; ratio bar uses the RYD numbers already fetched | Candidates 9, 18, 21, 38, 42, 52 |
| Feeds | Hide shorter/longer than, tone down ALL-CAPS titles, full titles, real frames instead of thumbnails, hide Community posts, clean search results | Scanner (duration badge, title case, `i.ytimg.com/vi/<id>/hq2.jpg`), CSS | Candidates 10, 28, 29, 32, 41 |
| Sponsors | Mute instead of skip (per category), undo last skip | Mute while inside the segment; undo seeks to the segment start | Candidates 35, 53 |
| Ads | Allow ads on chosen channels | Author matched against the list before the skipper engages | Candidate 26 |
| Shorts | Play once, then next | `video.loop = false`, clicks the next button on `ended` | Candidate 5 (17 community sources) |
| Theme | Grayscale | `filter: grayscale(1)` on body | Candidate 8 |
| Embeds | Content scripts run in `youtube.com/embed/*` frames on other sites (`all_frames`) | Speed, quality, codecs, captions and sponsor skipping apply; no toolbar | Candidate 2 (34 products). Safari may need its own site grant per embedding site; verify |
| Home | Watched today / this week | `watchStats` seconds per day, 30 days kept | Candidate 37 |

Settings page: three new groups (Feeds, Sponsors, Ads) with icons; `Watch page` and `Playback` extended; Experimental holds Background play (iPhone/iPad only) and Privacy mode.

## 2. Not built, with reason

| Feature | Reason | What would unlock it |
|---|---|---|
| Video download | YouTube terms and App Review 5.2.3 (apps that save media from third-party sources without permission) | Nothing; do not ship |
| Volume boost | WebKit does not route MSE audio through Web Audio (see `.atlas/knowledge/safari-youtube-limits.md`) | WebKit change |
| iCloud settings sync | Needs the container app with an iCloud entitlement, which needs the Apple Developer Program | Enrol, then NSUbiquitousKeyValueStore via native messaging (about 40 lines of Swift) |
| Native pop-up player window | `windows.create` is absent on iOS; Picture in Picture covers it | |
| DeArrow thumbnails and card titles | One API call per card hash prefix on every feed; needs an IndexedDB cache and batching before it is cheap enough | Build when the title replacement proves useful |
| Network-level ad blocking | `declarativeNetRequest` cannot separate ad and video traffic on googlevideo.com; cosmetic hiding plus the skipper cover the visible effect | |
| Auto Picture in Picture on tab switch | Safari requires a user gesture for PiP | |

## 3. Test matrix

All tests on macOS Safari 27 unless marked. Reload: untick/tick the extension in Safari Settings after a rebuild; YouTube tabs reload themselves. Turn on Advanced > Developer logging for `[ytx]` console lines.

| # | Feature | Steps | Expect |
|---|---|---|---|
| 1 | SponsorBlock | Sponsors > Skip sponsor segments on (accept the prompt). Open a video with known sponsors, for example a Linus Tech Tips or MKBHD video. Watch the progress bar | Green and yellow markers appear; playback jumps past the sponsor with a "Skipped: Sponsor" pill; console `[ytx] sponsorblock {segments: n}` |
| 2 | SponsorBlock categories | Set Intro to Skip, Sponsor to Mark; reload | Intro skipped, sponsor only marked |
| 3 | SponsorBlock rewind | Seek back into a skipped segment by hand | It plays (each segment skips once per video) |
| 4 | Dislike counts | Watch page > Show dislike counts on, accept the prompt. Open any popular video | A number appears inside the dislike button, with or without accepting the prompt |
| 5 | DeArrow titles | Watch page > Clearer titles on. Open a clickbait video (search "you won't believe") | Title changes when DeArrow has one; hovering shows the original |
| 6 | Hide promoted | Ads > Hide promoted on. Home page and a search page | Sponsored cards and the masthead banner are gone |
| 7 | Skip video ads | Ads > Skip video ads on (signed out helps). Open a monetised video with pre-roll | Ad is muted and jumps to the end or is skipped within a second; speed and mute return to normal after; console `[ytx] ad: skipping` / `ad: done` |
| 8 | Background play | iPhone or iPad only: Experimental > Keep playing in the background, reload, play, press the side button or switch apps | Audio continues; lock-screen controls work |
| 9 | Per-channel speed | Playback > Remember speed per channel on. Set 1.5× with the toolbar on a channel; open another video from the same channel, then one from a different channel | Same channel: 1.5×; other channel: default |
| 10 | Captions | Turn on captions, language `en`; open a video with captions | CC turns on in English; with an empty language the default track is used |
| 11 | Time remaining | Playback > Show time remaining; set speed 2× | "(−mm:ss)" after the duration, halved at 2× |
| 12 | Pause on blur | Playback > Pause when you leave the window; click another app, come back | Paused, then resumed |
| 13 | Resume | Playback > Resume where you left off; watch 1 minute, close the tab, reopen the video | Starts at the saved position with a time pill; a `t=` link overrides it |
| 14 | Theater on start | Player > Start in Theater mode | Every watch page opens wide |
| 15 | Screenshot to clipboard | Player > Screenshot goes to Clipboard; press the toolbar Screenshot button; paste into Preview | PNG at video resolution |
| 16 | Chapters | Pin Previous/Next chapter; open a video with chapters | Jumps between chapter starts; "No chapters" pill otherwise |
| 17 | A–B loop | ••• > Loop a section; press Now at 0:10, play to 0:20, press Now in To | Playback loops 0:10–0:20; Clear stops it |
| 18 | Copy link | ••• > Copy link at current time; paste | `https://youtu.be/<id>?t=<seconds>` |
| 19 | Copy transcript | ••• > Copy transcript on a video with a transcript; paste | Timestamped lines; "No transcript" pill otherwise |
| 20 | Home redirect | Feeds > Subscriptions; click the YouTube logo | Lands on /feed/subscriptions |
| 21 | Hide watched / live | Feeds switches on; home page with watched and live items | Those cards disappear |
| 22 | Blocked channels | Feeds > Blocked channels: `@mkbhd` and `Linus Tech Tips`; search "iphone" | Their results are gone; also on home and related |
| 23 | Blocked words | Feeds > Blocked words: `shorts`, `reaction` | Matching titles disappear |
| 24 | Shortcuts | Shortcuts > assign ⌥S to Slower, ⌥⇧C to Cinema; use them on a watch page | They work; the ••• menu shows the keys |
| 25 | Backup | Advanced > Export, change a setting, Import the file, Reset all | Round-trip restores; Reset returns defaults |
| 26 | Welcome | Advanced > Welcome page > Show again; pick Focused, Start | Lands on Home with the "All set" note and a Saved toast |
| 27 | Privacy mode | Experimental > Privacy mode on, reload: signed out, player works; off: signed in again | |
| 28 | iPhone layout | Develop > Enter Responsive Design Mode > iPhone preset: options page and m.youtube.com | Drill-down settings; toolbar under the player; ••• as a bottom sheet; Volume, scroll, mini-player, shortcut rows hidden |
| 29 | Regression | Speed buttons, quality, cinema, mini player, PiP, filters, audio mode, hide switches | Unchanged |
| 30 | Whitelist | Sponsors > Never skip on these channels: the channel of test 1; reload | Markers stay, nothing skips |
| 31 | Videos per row | Clean up > 3; home page | Three columns regardless of window width; Auto restores |
| 32 | AI and Playables | Clean up switches on; watch page and home | Ask button gone; Playables shelf and sidebar entry gone |
| 33 | Original titles | Watch page > Keep original titles; set YouTube language to Bengali in your account, open an English video | English title shown; console `[ytx] title restored` |
| 34 | Mixes | Feeds > Hide Mixes; home page and related list | Mix cards gone |
| 35 | Tracking params | Watch page > Remove tracking; open a shared link with `?si=` | Address bar loses the parameter without reloading |
| 36 | Seek and frames | Pin Seek back/forward and Previous/Next frame; Playback > Seek step 30 s | Jumps 30 s; frame buttons pause and step |
| 37 | Sleep timer | ••• > Sleep timer three times | Pills "Sleep in 15 min", 30, 60, then off; at zero the video pauses |
| 38 | Rotate and fill | ••• > Rotate video four times; Fill the frame on a 4:3 video | 90° steps back to normal; fill crops the bars, button shows active |
| 39 | Block this channel | ••• > Block this channel; go to the home page | Pill "Blocked: <channel>"; Feeds > Blocked channels gained the name; its cards are gone |
| 40 | Continue watching | Watch page > Dismiss on; leave a playlist playing for hours (or trigger the idle prompt) | Prompt disappears by itself |
| 41 | Comment sort and words | Watch page > Sort comments Newest first; Blocked words in comments: `first` | Comments load newest first; comments containing "first" are hidden |
| 42 | Length, caps, frames | Feeds > shorter than 2 min, longer than 1 h, Tone down ALL-CAPS, Real frames; home page | Short and long videos gone; shouting titles in sentence case; thumbnails replaced by a mid-video frame |
| 43 | Posts and search shelves | Feeds switches on; home page and a search for "iphone" | Community posts and "People also watched" shelves gone |
| 44 | Mute and undo | Sponsors > Sponsor = Mute, Intro = Skip; ••• > Undo last skip after an intro skip | Muted during the sponsor with a pill; undo jumps back to the intro start and plays it |
| 45 | Allow ads | Ads > Skip video ads on, Allow ads on: a channel you watch; open its video | Ads play normally there, skipped elsewhere |
| 46 | Shorts auto-next | Appearance > Shorts: play once, then next; open /shorts | Each Short plays once and advances |
| 47 | Grayscale and hidden extras | Theme > Grayscale; Player > overlays, ambient, controls visible | Site in grey; no watermark or heat map; no glow; controls never fade |
| 48 | Embeds | Open a blog post with an embedded YouTube video (any site); Safari may ask to allow the extension on that site | Default speed and quality apply inside the embed; console `[ytx]` lines from the frame |
| 49 | Watch stats | Watch a few minutes, open the settings Home | "Watched today … · … this week" under the intro |

Combos worth one pass: Skip video ads + SponsorBlock on the same video; Privacy mode + dislike counts (API still works); Audio mode + time remaining; Per-channel speed + "Start every video at the custom default speed" (channel wins); Blocked channels + hide watched on the home page (both hide, no layout holes).

## 4. App Review and privacy notes

- `optional_host_permissions` lists exactly the two community API hosts; each is requested only when its switch is turned on and the setting note names the host and what is sent.
- Privacy nutrition label when these are on: "Identifiers: no", "Usage data: hashed video ID prefix (SponsorBlock, DeArrow), video ID (Return YouTube Dislike)", not linked to the user. Add to `PrivacyInfo.xcprivacy` tracking domains: none (these are not tracking).
- Ad skipping and background play sit under warnings, off by default. If App Review pushes back on 5.2.2, remove the Ads group and the Experimental background switch before resubmitting; nothing else depends on them.
- No new permissions beyond `storage` and `cookies` in `permissions`.

## 5. Research consolidation

- Four agents surveyed 43 Chrome, 93 Firefox and 145 Apple products (96 in full) and about 82 forum, tracker and review sources; a fifth merged them. Files: `.atlas/research/2026-11-03-survey-chrome.md`, `-survey-firefox.md`, `-survey-apple.md`, `-community-findings.md`, `2026-11-03-competitor-feature-lists.md` (167-row master table with our status per feature), and the expanded `example_extentions.txt` (106 products).
- Screenshots: 789 PNGs, 326 MB, under `.atlas/research/store-images/<store>/<slug>/`, on disk only (gitignored); 24 MB slipped into history in `b816269` before the ignore rule. Say if you want that history rewritten.
- Reddit was unreachable for the agent (login wall and bot checks), so community evidence comes from Hacker News, MacRumors, Apple Support Communities, Mozilla Discourse, GitHub trackers and store reviews.
- Status counts in the master table before this last batch: built 73, candidate 56, won't do 14, not possible 11, pending API 7, partial 6. This batch moved 24 candidate rows to built.

## 6. Still open after this round

| Candidate | Why not now | Note |
|---|---|---|
| Other video sites, Reels on social sites, Invidious/Piped, YouTube Music | Scope and permission decisions: each adds hosts to the manifest and App Review justification | YouTube Music already matches `*.youtube.com` but has its own DOM; nothing applies there yet |
| Focus schedules, timers, settings lock, parental controls | Multi-day feature with its own UI | Sleep timer and grayscale cover the light version |
| DeArrow titles and thumbnails in feeds | One API request per visible card prefix; needs batching and an IndexedDB cache | Watch-page titles are built |
| Original audio track (block auto-dub) | Player audio-track API is undocumented and obfuscated | Revisit with a device that has auto-dub videos |
| Caption size and position | Player `fontSizeIncrement` option unverified in Safari | |
| Subscription groups | Needs a data model and UI; sync only with iCloud | |
| Playlist total duration, chapter list panel, comment search, multiple loops | Small but each needs its own panel | |
| Transcript export to file, video download | No downloads API; downloads conflict with YouTube terms | won't do |
