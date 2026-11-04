# Feature status: verified, beta, not done, impossible

Date: 2026-11-04 15:30 (+06). Twelve desktop feedback rounds since `cf43e46`, committed 2026-11-04 (`53147c1`, `dca6763`). Round 13 adds three options menus, Power tools, Creator tools and Accessibility (22 Beta features). Ten safaridriver runs on live YouTube (Safari 27.2, isolated automation profile, signed out) verified: intro skip, Intro ends here, outro skip, exact stats, velocity with comments, facts panel (tags, IDs, caption languages, publish time, length, end screen, cards, most replayed), loop panel with Copy loop link, thumbnail lightbox (maxres loads, Escape closes), Chapters panel, comments search by @author, comment filters, AI hiding (17 of 18 Veo 3 results), channel Videos tab, tracker line with Export CSV, live chat tidy-up (avatars, badges, emoji-only lines, Live chat selected), timestamp preview sprite, toolbar Both on a direct page load, comments beside the player. Not checkable there: caption style, transcript save, ad-break marks, Watch Later, comment Time button, saved replies (sign-in or features YouTube withholds from the automation profile).

Legend
- **Verified**: you confirmed it on YouTube in Safari 27 on macOS.
- **Beta**: built, unit-tested and linted, not yet confirmed live. Blue **Beta** badge next to the row, toolbar button or shortcut row. Source: `BETA` in `extension/defaults.js`; delete a key once confirmed; `tests/settings.test.js` rejects typos. Search "beta" on the options page to list them.
- **Reload**: rows in `RELOAD` (quality, codecs, Theater on start, background play, Shorts auto-next) show "Saved. Reload YouTube to apply." with a Reload button that reloads every YouTube tab.
- After a rebuild with no manifest change: untick/tick the extension in Safari Settings; YouTube tabs reload themselves. Advanced > Developer logging prints `[ytx]` lines.

## 1. Verified (done)

| Area | Feature | Effect | How to test |
|---|---|---|---|
| Playback | Default speed, Start every video at the custom default speed, Speed step, Faster/Slower/Reset; Turn on captions, Caption language (own track, else auto-translate) | Every video starts at the chosen speed; override decides whether a toolbar change carries over | Pick 1.5×, open a video; set 2× with the toolbar, click a related video |
| Playback | Scroll wheel changes speed, reverse direction | ⌥+scroll, 100 px per step, at most five steps a second | Hold ⌥ and scroll over the video |
| Playback | Show time remaining; Pause when you leave the window | "(−mm:ss)" after the duration, divided by the speed; pauses on blur (app or tab), resumes only what it paused | Set 2×; switch tab and back |
| Playback | Resume where you left off; Seek step | Returns to the saved position with a pill; seek buttons and ⌥← ⌥→ use the chosen step | Reopen a half-watched video; pin the seek buttons |
| Quality | Choose quality automatically, Videos, Playlists, full-screen quality with Switch back, Prefer standard frame rates, Prefer H.264, Start videos in audio mode | Quality forced as soon as the player is ready; codecs filtered | Gear > Quality; Stats for nerds > Codecs. Needs a reload of open tabs, hence the Reload toast |
| Appearance | Hide related, comments, live chat, end-screen cards, suggestions when a video ends, info cards, "More videos" when paused, notifications bell | Elements removed | Toggle and look |
| Shorts | Hide Shorts; Open Shorts as regular videos; Play once then next; Open comments with each Short; Captions on Shorts; Shorts playback speed | Shelves and links gone; /shorts URLs open as /watch; auto-advance; captions and a fixed speed on Shorts | Home page, a Shorts link, /shorts |
| Clean up | Hide home feed, thumbnails, view counts, topic chips, sidebar, Explore, You, More from YouTube, Create, voice search, Playables, AI features; Videos per row | Elements removed; fixed column count | Home page and watch page. Thumbnails are hidden in the watch page related list too |
| Feeds | Open instead of the home page; Hide watched, live, Mixes; Blocked channels and words; shorter/longer than; Tone down ALL-CAPS; Show full titles; Real frames; Hide Community posts; Clean search results; Hover and feed previews (Allow, With sound, Muted only, Off) | Cards hidden or rewritten by the scanner | Home page and a search |
| Ads and sponsors | Hide promoted videos and banners; Skip video ads with Allow ads on these channels; Skip sponsor segments with categories, Mute, Mark, note, Never skip on these channels; sponsored Shorts skipped | Ads hidden or skipped; SponsorBlock segments skipped, muted or marked | Monetised video signed out; a Linus Tech Tips video |
| Player | Full screen stays in the tab (f, button, Escape even while Safari is in macOS full screen, scroll for details); Start in Theater mode; Mini player (size, corner, `i` round trip; never in full screen, follows theater); Keep player controls visible; Hide player overlays; Turn off Ambient mode; Screenshot goes to File or Clipboard | | Scroll below the fold; press `i` twice; press Screenshot |
| Toolbar | Placement; Buttons in the toolbar; Show names under the video; Both with separate button sets; primary text colour under the video; every action including Undo last skip (Privacy mode and Block this channel removed from the toolbar); menus open upward when there is no room below, with the Menus open setting | | Press each |
| Shortcuts | Keyboard shortcuts editor and the recommended set | | Shortcuts > Recommended, then use them |
| Autoplay | Turn off YouTube autoplay; Don't start videos in background tabs; Also in the current tab; Except playlists; Pause other tabs | | Open a video in a background tab, then switch to it |
| Volume | Set a default volume; Scroll wheel changes volume; Volume step | The right-button option is gone (it fought the system right-click) | Scroll over the player |
| Watch page | Expand the description; Open the transcript; Open the Ask panel; Copy button next to emails; Open links and @mentions in a new tab; Keep original titles; Remove tracking from the address; Show dislike counts with the Like and dislike bar; Dismiss "Continue watching?"; Sort comments by; Hide Share, Clip, Thanks and Save; Blocked words in comments; Clearer titles from DeArrow | | Any popular video |
| Theme | Match device, Light, Dark (YouTube's own dark theme), Black (OLED), Dark with accent + Accent colour, Cinema mode dimming, Grayscale, Custom CSS | Dark sets YouTube's own `dark` attribute, so it is YouTube's dark theme | Pick each |
| Privacy | Privacy mode (section renamed from Experimental) | Cookies backed up and removed, local and session storage cleared, tabs reloaded bypassing the cache; YouTube sees a first-time visitor | On: signed out, player works. Off: signed in again |
| Advanced | Developer logging; Backup Export (dated file name), Copy settings, Import, two-step Reset all; Welcome page | | |
| Power tools | Open channels on their Videos tab | After landing on a channel’s Home, the Videos tab is clicked | Click a channel name on a card | |
| Power tools | Comments beside the video | Comments are positioned (not moved) in the right column: aligned with the player when related videos are hidden, otherwise below the sidebar; theater and full screen keep YouTube’s layout | Turn on Hide related too; scroll the comments column | |
| Power tools | Tidy the live chat | Avatars, badges and emoji-only lines hidden; Live chat picked over Top chat | A live stream or a replay with chat | |
| Options page | Sidebar, search, iPhone drill-down, device detection, Saved toast, Home, Support, Welcome presets, per-section "YouTube's defaults" and "Recommended", shortcut hints, Learn more links, permission pre-step, Reload toast, full-height panel | | |

## 2. Beta (badge shown) and new this round (no badge), please verify

| Area | Feature | Effect | How to test | Needs |
|---|---|---|---|---|
| Playback | Keep playing in the background (moved here from Experimental) | Audio continues when you switch apps or lock the screen | iPhone or iPad only | Device, Reload toast |
| Feeds | Hide captions in previews | Captions inside hover previews are hidden whatever YouTube's own preview captions preference says | Hover a captioned card with the switch on and off | |
| Theme | Match device, Light, Dark through YouTube's own switch (no badge) | YouTube serves a different stylesheet per theme and pins a few colours in it (Subscribe button text among them), so forcing the `dark` attribute on a page served light left the Subscribe button white on white (seen signed out in Privacy mode). The extension now fires YouTube's own theme action (dark, light or device): YouTube stores the choice and reloads with the matching stylesheet. Match device leaves YouTube alone | Privacy mode on, dark Mac: Subscribe button shows black text on white. Pick Light: page reloads light. Pick Dark, then Match device again. Black and Dark with accent still build on Dark | |
| Options | Text encoding (no badge) | Apostrophes, ••• and ⌥ were double-encoded by a round-9 edit and showed as â€¦; repaired | Toolbar page note, "YouTube's defaults" button, Playback notes | |
| Power tools | Search comments and live chat | A search box in the comments header and in the live chat header; @name filters by author; `1:30` matches timestamps. YouTube’s transcript panel has its own Search transcript box, so none is added there | Type a word in the comments box; type @ and an author; search inside a live chat | |
| Power tools | Loop count and loop links | The A–B panel gains Repeat (blank = forever) and Copy loop link; a link with `&loop=A-B&times=N` sets the loop on load | Set A–B and Repeat 2, watch it stop looping; copy the link and open it in a new tab | |
| Power tools | Remove finished videos from Watch Later; Remove watched button on Watch Later | In the last 6 s of a Watch Later video the playlist item's ⋮ menu "Remove from Watch later" is clicked; on `/playlist?list=WL` a red button removes every video 90 % watched after a confirming tap | Play a Watch Later video to the end; open Watch Later and tap the button twice | English menu text |
| Power tools | Insert the current time in comments (Beta) | A Time button in every comment box inserts m:ss | Open a reply box, signed in | |
| Power tools | Show in the live chat (Beta) | Everyone, members and moderators only, or paid messages only | Pick Members on a busy stream | |
| Power tools | Skip intros and outros per channel + Intro ends here | `@handle 15 30` seeks to 0:15 and jumps to the end 30 s early (autoplay then moves on); the toolbar action writes the current time for the current channel | Add a line for a channel you watch; press the action at the intro's end | |
| Power tools | Full-size thumbnail viewer + Open thumbnail | ⌥-click any card, or the action: a lightbox with maxres (hqdefault fallback) and an Open image link | ⌥-click a home card | |
| Power tools | Exact date, views and likes | A line under the video info: exact views, publish date and time, exact likes | Any watch page | |
| Power tools | Fade search results that lack your words | Results whose title, snippet and channel contain none of the query's words (3+ letters) are dimmed; hover restores | Search for something specific | |
| Power tools | Preview frames on timestamp links | Hovering a timestamp in comments or the description shows the storyboard tile for that second | Hover "1:15" in a comment | Mac or iPad pointer |
| Power tools | Hide AI-generated videos + AI words | Cards whose title or channel name match a word (whole words, hashtags included) disappear; the list is editable | Search "veo 3" | Heuristic: YouTube exposes no label in feeds |
| Creator tools | Save the transcript as a file (Text or SRT) + Save transcript | Opens the transcript panel if needed, downloads `<title>.txt` or `.srt` (next line's start as end time); YouTube's panel has its own Search transcript box | Press the action on a video with a transcript (the automation profile never loads transcript content) | |
| Creator tools | Video facts panel | Collapsible panel under the video: tags with Copy, category, IDs, caption languages, publish time, length, ad breaks, most replayed peaks, end screen elements and cards with seek buttons, Copy all | Open it on a monetised video with chapters | |
| Creator tools | Velocity and engagement badge | views/day since publish, likes ÷ views, comments ÷ views under the info line | Any watch page | |
| Creator tools | Mark ad breaks on the progress bar | Yellow marks at mid-roll cue times from the player response | A long monetised video, signed in (guests in the automation profile receive no ad placements at all) | |
| Creator tools | Chapter maker + Chapters | Panel under the video: Mark now, From comments (best timestamped comment), Copy chapters, Clear; validation line; drafts kept per video | Mark three moments, name them, copy | |
| Creator tools | Comment filters | Chips above the comments: All, Questions, Timestamps, Members, Unanswered (no creator reply indicator) | Click each chip | Loaded comments only |
| Creator tools | Saved replies | A "Saved reply…" menu in every comment box inserts the chosen line | Add two lines, open a reply box | |
| Creator tools | Track channels + Tracked channels | On a tracked channel page: the change since the previous day's visit and Export CSV; untracked channels show Track this channel | Visit a tracked channel on two days | Counts are rounded (525M) |
| Creator tools | Test a thumbnail and title in the feed | A panel above the home feed and search results; Place in feed inserts a card with your image and title in position 2 | Choose an image, type a title, Place in feed | Local only |
| Accessibility | Custom caption style: size, text colour, background colour and opacity, text edge, position | Applied through the player's own caption options (`fontSizeIncrement`, `color`, `background`, `backgroundOpacity`, `charEdgeStyle`); position by CSS; YouTube's defaults restored when switched off | Turn captions on, pick 200 %, yellow, raised. Not checkable by automation: the signed-out automation profile never renders captions | |

Combos worth one pass: Blocked channels + Hide watched on the home page; embeds on another site; Home stats after a few minutes of playback.

## 3. Not done, and what it takes

| Feature | What exists | What is needed |
|---|---|---|
| Submit and vote on SponsorBlock segments | Read-only skipping | `POST sponsor.ajay.app/api/skipSegments` with `videoID`, `segments: [{ segment: [start, end], category, actionType: "skip" }]`, `videoDuration`, a private `userID` of at least 30 random characters kept in storage, and `userAgent: "<app>/<version>"`. Needs a start/end marking UI (toolbar "Mark start" and "Mark end", category picker), handling of 403 (locked or auto-moderated), 409 (duplicate) and 429. Voting is `POST /api/voteOnSponsorTime` with `UUID`, `userID`, `type` 1 or 0. Tell the user that submissions are public under CC BY-NC-SA |
| DeArrow titles and thumbnails in feeds | Watch-page titles | Batch one request per visible card prefix, IndexedDB cache |
| Pop-up player window (macOS only) | Picture in Picture | `windows.create({ type: "popup" })` with an extension page hosting the embed; iOS has no `windows.create` |
| YouTube Music, Invidious/Piped, other video sites | Host pattern covers music.youtube.com but nothing applies there | Per-site selectors; new hosts need manifest entries and an App Review justification |
| Focus schedules, usage limits, settings lock, parental controls | Sleep timer, grayscale | `browser.alarms` + schedule UI; a PIN is only a deterrent |
| Original audio track (block auto-dub) | Nothing | Find the player's audio-track calls on a video that has auto-dub |
| Caption size, position and style | Captions on/off and language | `setOption("captions", "fontSize", n)` unverified in Safari; fallback CSS on `.ytp-caption-segment` |
| Subscription groups | Nothing | Data model, sidebar UI; cross-device only with iCloud |
| Playlist total duration, chapter list panel, comment search, several loops | Chapter starts, A–B loop, comment scanner | One panel each |
| Transcript export to a file, transcript search | Copy transcript | Blob `<a download>` from the content script (verify in Safari) and a filter box |
| Open search results in a new tab | Links and @mentions | Extend the `target=_blank` handling to search result anchors |
| Live chat emotes (7TV, BetterTTV, FrankerFaceZ) | Nothing | Emote CDN hosts, chat DOM rewriting |
| Translate titles, chat, comments, captions on demand | Keep original titles | A translation API key (paid) entered by the user |
| AI summaries and chat about a video | Opens YouTube's own Ask panel | An LLM API key (paid) entered by the user |
| iPhone: mini player, time remaining | Hidden on iPhone | m.youtube.com DOM work |

## 4. Cannot be done (Apple, WebKit, Safari or policy)

| Feature | Reason | What ships instead |
|---|---|---|
| Volume boost, bass boost, audio visualiser | WebKit's `MediaElementAudioSourceNode` does not process MSE-backed media (`.atlas/knowledge/safari-youtube-limits.md`) | System volume |
| Settings sync with iCloud or Safari | `storage.sync` is local-only in Safari; iCloud needs a container-app entitlement, which needs the paid Developer Program | Export, Copy, Import; after enrolment, `NSUbiquitousKeyValueStore` via native messaging |
| Ctrl+scroll, Ctrl+click and right-button-held gestures | macOS Safari consumes Ctrl+wheel (zoom) and the right button (context menu) before the page sees them | Option (⌥) gestures |
| Auto full screen on load; automatic Picture in Picture | WebKit requires a user gesture | Toolbar PiP button; Theater mode on start |
| Pop-up player window on iPhone and iPad | `windows.create` is absent on iOS | Picture in Picture |
| Network-level ad blocking, guaranteed ad-free playback | `webRequest` cannot block in Safari; `declarativeNetRequest` cannot separate ad from video traffic; server-side stitched ads are invisible | Cosmetic hiding plus the DOM skipper |
| Video or audio download | No `downloads` API on iOS; App Review 5.2.3; YouTube terms | Nothing |
| Quality by connection type | No Network Information API in Safari | Manual quality |
| Programmatic volume on iPhone | iOS ignores `video.volume` | Volume rows hidden on iPhone |
| Toolbar and HUD inside full screen on iPhone | m.youtube.com uses the system video player in full screen | Toolbar under the player |
| Background play as a system feature | Apple decides when Safari pauses hidden media; the override is a page hack | Beta switch under Playback with a warning |
| Global OS-wide hotkeys, game-controller input | Extensions cannot register system shortcuts | Shortcuts while a YouTube tab is focused |
| Running inside Home Screen web apps or the YouTube app | Safari extensions run only in Safari tabs | |
| Custom JavaScript or userscripts; virtual content country | No `userScripts` API; App Review risk | Custom CSS only |
| "Allow unsigned extensions" resetting on every Safari quit | Needs Developer ID signing, which needs the Developer Program | Re-tick after each launch during development |

## 5. Third-party services: licence and attribution

| Service | Terms found | What we do |
|---|---|---|
| SponsorBlock (sponsor.ajay.app) | API and database are CC BY-NC-SA 4.0 "unless you have explicit permission" (wiki: Database-and-API-License); attribution template linked from that page; contact the author (ajayyy) for any use outside the licence. The API docs page is behind a bot wall, read the licence page in a browser | Free app, named in the setting note with a Learn more link, hash-prefix endpoint only. If the app ever becomes paid or ad-supported, ask for a licence first |
| DeArrow (same server) | No licence text on dearrow.ajay.app or in the README; the site points to the API docs and to Discord/Matrix | Treat as the SponsorBlock licence; ask on Discord or Matrix before release to be safe |
| Return YouTube Dislike (returnyoutubedislikeapi.com) | README: third-party use allowed; "clearly attributed with a link to returnyoutubedislike.com"; rate limits 100 per minute and 10,000 per day per client (HTTP 429); project GPLv3 | Learn more link and name in the setting note; one request per watch page, well inside the limits |
