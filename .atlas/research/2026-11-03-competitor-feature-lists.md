# Competitor feature lists (consolidated 2026-11-03)

Scope: 281 YouTube-related products surveyed on 2026-11-03: 43 on the Chrome Web Store, 93 on Firefox Add-ons and 145 on the Apple App Store (96 full sections plus 49 metadata-only long-tail rows).
Sources: .atlas/research/2026-11-03-survey-chrome.md, 2026-11-03-survey-firefox.md and 2026-11-03-survey-apple.md (feature matrices, summaries, pricing table) and 2026-11-03-community-findings.md (ranked asks; n = logged source entries).
Counts: Chrome and Firefox n come from each survey's matrix; Apple n counts the 69 apps in its 51-row matrix (grouped rows expanded) plus keyword matches in the 96 full sections; a trailing ~ marks counts that include keyword matches on feature text.
Our status comes from .atlas/tmp/our-keys.txt (settings keys and toolbar actions) and sections 1 and 2 of .atlas/reports/2026-11-03-feature-build-report.md.
Detail lives in the three survey files (per-product bullet lists, permissions, reviews); store screenshots are on disk only, in .atlas/research/store-images/<store>/<slug>/ (326 MB, gitignored, not in git).
Terms column: yes = clearly against YouTube's terms or store policy, gray = disputed or conditional; platform and scope rows (mobile web, iPhone parity, embeds, non-YouTube sites, stand-alone apps) are left out of the top-30 ranking.

## Master feature list

n = products advertising the feature (Chrome of 43, Firefox of 93, Apple of 96 full sections). Users want = n from the community ranking (53 source entries); blank when the study did not rank it. Our status: built, partial, pending API, not possible, won't do, candidate.

| Feature | Chrome (n) | Firefox (n) | Apple (n) | Users want (n) | Notable products | Needs service/API | Conflicts with YouTube terms | Safari feasible | Our status |
|---|---:|---:|---:|---:|---|---|---|---|---|
| **Playback & speed** | | | | | | | | | |
| Default playback speed and speed buttons | 10 | 11 | 14 | 7 | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Speed range beyond 2x (0.07x to 16x) | 3 | 3~ | 6~ |  | Enhancer for YouTube, Video Speed Controller, Tweaks for YouTube; Apple: Red Crow For Safari, Accelerate | no | no | yes | built |
| Fine speed steps (0.05 to 0.25) | 2~ | 0 | 3~ |  | Enhancer for YouTube; Apple: Custom Video Speed for YouTube, Video Speed Control | no | no | yes | built |
| Remember speed per channel or site | 3 | 1~ | 1~ |  | YouTube Enhancer, Video Speed Controller, Global Speed; Apple: Red Crow For Safari | no | no | yes | built |
| Speed overlay or buttons on the video | 3~ | 2~ | 5~ |  | YouTube Enhancer, Video Speed Controller, Youtube Playback Speed Control; Apple: Better Player for Youtube, ClipGlider-video speed control | no | no | yes | built |
| Show time remaining at current speed | 1~ | 2~ | 1~ |  | YouTube Enhancer, Tweaks for YouTube; Apple: Vidimote | no | no | yes | built |
| Frame-by-frame stepping | 2 | 2~ | 1~ |  | Improve YouTube!, Global Speed; Apple: Improved Tube | no | no | yes | candidate |
| Resume where you left off | 1 | 1~ | 1~ |  | YouTube Enhancer; Apple: MeowTube | no | no | yes | built |
| Loop whole video | 9 | 12 | 3 |  | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Loop a section (A-B) | 4 | 4~ | 3 |  | Enhancer for YouTube, Magic Actions for YouTube, Looper for YouTube; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Multiple loop segments and timestamp bookmarks | 0 | 1~ | 3~ |  | YouTube Parts Looper & Bookmarker; Apple: Red Crow For Safari, Focus | no | no | yes | candidate |
| Sleep timer or stop after a set time | 0 | 0 | 6~ |  | Apple: Red Crow For Safari, Tube PiP | no | no | yes | candidate |
| Seek step and skip-ahead buttons | 4~ | 4~ | 2~ | 5 | YouTube Enhancer, Video Speed Controller, Global Speed; Apple: ClipGlider-video speed control, Vidimote | no | no | yes | candidate |
| Audio-only mode | 2 | 1 | 4~ |  | Audio Only Youtube, Music Mode for YouTube, YouTube Audio; Apple: Vinegar, Red Crow For Safari | no | gray | yes | built |
| Background playback with the screen off | 2~ | 9 | 12 | 11 | ours: experimental page-visibility override for iPhone and iPad; device test pending. YouTube Enhancer, Control Panel for YouTube, YouTube NonStop; Apple: Vinegar, Red Crow For Safari | no | gray | partial (iOS may suspend the page) | partial |
| Stop the video stream fully | 1~ | 1~ | 0 |  | Enhancer for YouTube, YouTube in HD | no | no | yes | built |
| **Quality & codecs** | | | | | | | | | |
| Default quality (Auto HD) | 10 | 13 | 7 | 5 | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Vinegar, Red Crow For Safari | no | no | yes | built |
| Separate quality for fullscreen, playlists and embeds | 1~ | 4~ | 1~ |  | Enhancer for YouTube, Tweaks for YouTube, Ambient light for YouTube; Apple: Red Crow For Safari | no | no | yes | built |
| Frame-rate-aware quality or block 60 fps | 5 | 5~ | 2~ |  | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Improved Tube, Turn Off the Lights | no | no | yes | built |
| Force H.264 or block VP9 and AV1 | 2 | 8 | 2~ |  | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Quality by connection (Wi-Fi or cellular) | 1 | 0 | 0 |  | Magic Actions for YouTube | no | no | no (no Network Information API in Safari) | not possible |
| Video filters (brightness, contrast, colour) | 6 | 5~ | 4~ |  | Enhancer for YouTube, Turn Off the Lights, Global Speed; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Rotate or flip video | 3 | 5~ | 5~ |  | ours: flip action only; no rotate. Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Improved Tube, Turn Off the Lights | no | no | yes | partial |
| Zoom, crop or fill black bars | 2 | 4~ | 2~ |  | Turn Off the Lights, YouTube Tweaks, Magic Actions for YouTube; Apple: StopTheMadness Pro, SwizzTube | no | no | yes | candidate |
| Screenshot of the current frame | 6 | 9 | 3~ |  | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Audio visualisation, pitch shift or bass boost | 2 | 4~ | 0 |  | Enhancer for YouTube, Turn Off the Lights, Global Speed | no | no | no (WebKit does not route MSE audio through Web Audio) | not possible |
| Loudness normalisation control | 2 | 3~ | 1~ |  | Improve YouTube!, Iridium for YouTube, Tweaks for YouTube; Apple: Improved Tube | no | no | yes | candidate |
| **Autoplay & tabs** | | | | | | | | | |
| Turn off autoplay next | 9 | 14 | 7~ | 3 | Enhancer for YouTube, Improve YouTube!, Unhook; Apple: Improved Tube, StopTheMadness Pro | no | no | yes | built |
| Block autoplay in background tabs | 1~ | 0 | 0 |  | Enhancer for YouTube | no | no | yes | built |
| Pause videos in other or background tabs | 3 | 4~ | 1~ |  | Enhancer for YouTube, Improve YouTube!, Tweaks for YouTube; Apple: Improved Tube | no | no | yes | built |
| Auto-dismiss the Continue watching prompt | 4 | 8 | 0 |  | YouTube Enhancer, BlockTube, Tweaks for YouTube | no | no | yes | candidate |
| Auto fullscreen on load | 2~ | 2~ | 0 |  | Improve YouTube!, Untrap for YouTube, Tweaks for YouTube | no | no | no (fullscreen needs a user gesture) | not possible |
| **Player & layout** | | | | | | | | | |
| Theater or wide player by default | 8 | 13~ | 3~ | 6 | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, UnTrap for YouTube | no | no | yes | built |
| Cinema mode (dim the surroundings) | 6 | 6~ | 2~ |  | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, Turn Off the Lights | no | no | yes | built |
| Stretch the player to fill the window | 3~ | 3~ | 0 | 6 | Enhancer for YouTube, Control Panel for YouTube, Untrap for YouTube | no | no | yes | candidate |
| Mini player while scrolling | 3 | 5~ | 5~ |  | Enhancer for YouTube, Improve YouTube!, Control Panel for YouTube; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Resizable pop-up player window | 2~ | 1~ | 2~ |  | Enhancer for YouTube, Improve YouTube!; Apple: Red Crow For Safari, Adblocker For YouTube Videos | no | no | no (windows.create absent on iOS; Picture in Picture covers it) | not possible |
| Picture-in-Picture button | 4 | 7 | 21 | 11 | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Vinegar, Red Crow For Safari | no | no | yes | built |
| Automatic Picture-in-Picture on tab switch | 0 | 1~ | 1~ |  | Ambient light for YouTube; Apple: PiPifier | no | no | no (Picture in Picture needs a user gesture) | not possible |
| Ambient mode off or custom glow | 4 | 6~ | 1~ |  | Enhancer for YouTube, Improve YouTube!, Control Panel for YouTube; Apple: Better Player for Youtube | no | no | yes | candidate |
| Clean player overlays (watermark, heatmap, title bar) | 0 | 2~ | 1~ |  | Control Panel for YouTube, Tweaks for YouTube; Apple: Improved Tube | no | no | yes | candidate |
| Player controls always visible or minimal progress bar | 0 | 3~ | 0 |  | Control Panel for YouTube, Tweaks for YouTube | no | no | yes | candidate |
| Hide Share, Clip, Thanks and Save buttons | 1~ | 3~ | 0 |  | Unhook, Control Panel for YouTube, YouTube Tweaks | no | no | yes | candidate |
| Auto-enable captions and language | 2 | 4~ | 0 | 5 | YouTube Enhancer, Improve YouTube!, YouTube High Definition | no | no | yes | built |
| Caption size, position and style | 0 | 1~ | 0 | 5 | Tweaks for YouTube | no | no | yes | candidate |
| Chapter navigation (previous and next) | 2~ | 4~ | 3~ |  | Improve YouTube!, SponsorBlock, Tweaks for YouTube; Apple: SponsorBlock, Red Crow For Safari | no | no | yes | built |
| Chapter list panel | 0 | 1~ | 1~ |  | Tweaks for YouTube; Apple: Red Crow For Safari | no | no | yes | candidate |
| Auto-expand the description | 1~ | 2~ | 1~ |  | Tweaks for YouTube, RYS, YouTube High Definition; Apple: Improved Tube | no | no | yes | built |
| Auto-open the transcript | 0 | 1~ | 1~ |  | Tweaks for YouTube; Apple: Red Crow For Safari | no | no | yes | built |
| **Theme & appearance** | | | | | | | | | |
| Dark mode and colour themes | 9 | 13 | 15~ | 6 | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Accent colour | 2~ | 0 | 0 |  | Enhancer for YouTube, Magic Actions for YouTube | no | no | yes | built |
| Custom CSS | 4~ | 2~ | 7 |  | Enhancer for YouTube, Video Speed Controller, Tweaks for YouTube; Apple: Red Crow For Safari, wBlock | no | no | yes | built |
| Custom JavaScript or userscripts (why: security and App Review risk; userscript managers exist) | 2~ | 0 | 5~ |  | Enhancer for YouTube, BlockTube; Apple: wBlock, Autoscripts | no | no | partial (no userScripts API; review risk) | won't do |
| Grayscale or minimal layout | 5 | 5~ | 2~ | 5 | Improve YouTube!, Turn Off the Lights, Global Speed; Apple: UnTrap for YouTube, Turn Off the Lights | no | no | yes | candidate |
| Restore the old YouTube layout | 0 | 2 | 0 |  | Annotations Restored for YouTube, YouTube Redux | no | no | yes | candidate |
| Restore old annotations from an archive | 0 | 1~ | 0 |  | Annotations Restored for YouTube | annotation archive | no | yes | pending API |
| Full titles and larger thumbnails | 3 | 3~ | 0 |  | YouTube Enhancer, Improve YouTube!, Control Panel for YouTube | no | no | yes | candidate |
| Videos per row (grid size) | 1~ | 14 | 3~ | 6 | Enhancer for YouTube, Improve YouTube!, Unhook; Apple: Improved Tube, Sink It for YouTube | no | no | yes | built |
| Exact upload date and view count | 0 | 1~ | 0 |  | Tweaks for YouTube | no | no | yes | candidate |
| Compact header and sidebar | 0 | 1~ | 0 |  | YouTube Tweaks | no | no | yes | candidate |
| **Hiding & clean-up** | | | | | | | | | |
| Hide related videos and sidebar suggestions | 9 | 18 | 13 | 9 | Enhancer for YouTube, Improve YouTube!, Unhook; Apple: Red Crow For Safari, UnTrap for YouTube | no | no | yes | built |
| Hide the home feed | 5 | 5~ | 6~ | 9 | Unhook, Control Panel for YouTube, Untrap for YouTube; Apple: BlockYT, #blockit | no | no | yes | built |
| Hide end screens and info cards | 7 | 8~ | 5~ | 9 | Enhancer for YouTube, Improve YouTube!, SponsorBlock; Apple: Red Crow For Safari, #blockit | no | no | yes | built |
| Hide header, guide and navigation entries | 5 | 7~ | 1~ |  | Improve YouTube!, Unhook, Control Panel for YouTube; Apple: YT Shorts Blocker | no | no | yes | built |
| Hide the notification bell | 3 | 4~ | 2~ |  | Unhook, Untrap for YouTube, RYS; Apple: UnTrap for YouTube, StopTheMadness Pro | no | no | yes | built |
| Hide Explore and Trending | 4 | 4~ | 1~ |  | Unhook, Control Panel for YouTube, Untrap for YouTube; Apple: UnTrap for YouTube | no | no | yes | built |
| Hide topic chips | 0 | 1~ | 0 |  | Control Panel for YouTube | no | no | yes | built |
| Hide or blur thumbnails | 3 | 1~ | 3~ |  | Untrap for YouTube, RYS, Music Mode for YouTube; Apple: UnTrap for YouTube, "No Distractions" for YouTube | no | no | yes | built |
| Hide view counts | 3~ | 2~ | 0 |  | Turn Off the Lights, Iridium for YouTube, Tweaks for YouTube | no | no | yes | built |
| Hide YouTube's AI features | 0 | 2~ | 3~ | 5 | Control Panel for YouTube, UnTrap for YouTube; Apple: Mira, Eightify | no | no | yes | built |
| Hide Playables and the games shelf | 2~ | 1~ | 2~ |  | YouTube Enhancer, RYS, Block YouTube Shorts and Playables; Apple: Mira, Sink It for YouTube | no | no | yes | built |
| Hide Community posts and membership shelves | 1~ | 1~ | 2~ |  | Control Panel for YouTube, Magic Actions for YouTube; Apple: ShortformBlock, Sink It for YouTube | no | no | yes | candidate |
| Hide watched videos | 2 | 6~ | 4~ |  | Control Panel for YouTube, BlockTube, Tweaks for YouTube; Apple: Red Crow For Safari, Unwatched for YouTube | no | no | yes | built |
| Hide live streams, upcoming and premieres | 1~ | 6~ | 0 |  | Control Panel for YouTube, Tweaks for YouTube, RYS | no | no | yes | built |
| Clean search results (suggestion shelves) | 2~ | 3~ | 0 |  | Unhook, RYS, YouTube Search Fixer | no | no | yes | candidate |
| Open links and search results in a new tab | 0 | 2~ | 1~ |  | ours: links and @mentions in titles and descriptions; not search results. Tweaks for YouTube; Apple: StopTheMadness Pro | no | no | yes | partial |
| Hide Open App banners on mobile web | 0 | 1~ | 0 |  | Control Panel for YouTube | no | no | yes | candidate |
| **Feeds & filtering** | | | | | | | | | |
| Block channels | 4 | 14 | 3~ | 8 | Improve YouTube!, Control Panel for YouTube, Untrap for YouTube; Apple: Red Crow For Safari, AdGuard Ad Blocker | no | no | yes | built |
| Block keywords in titles | 4 | 4~ | 3~ | 8 | Improve YouTube!, Untrap for YouTube, BlockTube; Apple: Red Crow For Safari, UnTrap for YouTube | no | no | yes | built |
| One-click Hide channel on thumbnails | 3~ | 3~ | 0 | 8 | Unhook, Control Panel for YouTube, BlockTube | no | no | yes | candidate |
| Filter by video length | 1~ | 4~ | 1~ |  | BlockTube, Tweaks for YouTube, PocketTube; Apple: Red Crow For Safari | no | no | yes | candidate |
| Redirect Home to Subscriptions | 3 | 5~ | 5~ | 9 | Unhook, Control Panel for YouTube, Untrap for YouTube; Apple: UnTrap for YouTube, Block YT Shorts | no | no | yes | built |
| Inbox-style subscriptions and mark as watched | 1~ | 1~ | 1~ |  | Control Panel for YouTube, PocketTube; Apple: Unwatched for YouTube | no | no | yes | candidate |
| Subscription groups and collections | 1 | 1 | 3~ |  | PocketTube; Apple: Channel Keeper for YouTube, PocketTube | no | no | yes | candidate |
| Hide or avoid Mixes | 0 | 6~ | 2~ |  | Control Panel for YouTube, BlockTube, Tweaks for YouTube; Apple: Red Crow For Safari, FocusTube | no | no | yes | built |
| Hide promoted videos, banners and shopping shelves | 3~ | 5~ | 5~ |  | Unhook, Control Panel for YouTube, Untrap for YouTube; Apple: UnTrap for YouTube, Ad Skipper for YouTube | no | no | yes | built |
| **Shorts** | | | | | | | | | |
| Hide Shorts | 13 | 25 | 27~ | 17 | Enhancer for YouTube, Improve YouTube!, Unhook; Apple: Red Crow For Safari, UnTrap for YouTube | no | no | yes | built |
| Hide Shorts on channel tabs and in notifications | 3~ | 7~ | 2~ | 17 | YouTube Enhancer, Control Panel for YouTube, Iridium for YouTube; Apple: Unwatched for YouTube, YT Shorts Blocker | no | no | yes | built |
| Open Shorts in the regular player | 4 | 4~ | 3~ | 17 | Enhancer for YouTube, Control Panel for YouTube, Untrap for YouTube; Apple: Red Crow For Safari, CleanTube | no | no | yes | built |
| Shorts auto-scroll and loop control | 2~ | 1~ | 0 | 17 | YouTube Enhancer, YouTube Tweaks, Looper for YouTube | no | no | yes | candidate |
| Daily Shorts limit and one-at-a-time viewing | 0 | 0 | 1~ |  | Apple: ShortsBlocker | no | no | yes | candidate |
| Block Reels and short video on other social sites | 0 | 2~ | 5~ | 7 | SocialFocus, YouTube Search Fixer; Apple: SocialFocus, #blockit | no | no | yes | candidate |
| **Comments & chat** | | | | | | | | | |
| Hide comments | 7 | 12 | 4~ | 7 | Enhancer for YouTube, Improve YouTube!, Unhook; Apple: Red Crow For Safari, UnTrap for YouTube | no | no | yes | built |
| Hide live chat | 6 | 4~ | 4~ |  | Enhancer for YouTube, Improve YouTube!, Unhook; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Comment search and export | 3 | 2 | 1~ |  | BlockTube, RYS, YCS; Apple: Red Crow For Safari | no | gray | yes | candidate |
| Block comments by user or keyword | 2~ | 2~ | 0 |  | BlockTube, RYS | no | no | yes | candidate |
| Default comment sort (newest or top) | 0 | 2~ | 0 |  | Tweaks for YouTube | no | no | yes | candidate |
| Comment helpers (auto-expand, sidebar view, paste timestamp) | 1~ | 3~ | 0 |  | Tweaks for YouTube, RYS, YouTube High Definition | no | no | yes | candidate |
| Live chat defaults (Live over Top chat, replay) | 0 | 4 | 0 |  | Tweaks for YouTube, HyperChat, YCS | no | no | yes | candidate |
| Live chat emotes (7TV, BetterTTV, FrankerFaceZ) | 0 | 0 | 1~ |  | Apple: Red Crow For Safari | emote CDNs | no | yes | pending API |
| Translate chat or comments | 0 | 1~ | 1~ |  | HyperChat; Apple: YouTweak | Google Translate | no | yes | pending API |
| **Sponsors & crowd data** | | | | | | | | | |
| Skip sponsor segments (SponsorBlock), per category | 1 | 5 | 7 | 12 | SponsorBlock, Tweaks for YouTube, LiteTube; Apple: SponsorBlock, SponsorBlock port for Youtube | sponsor.ajay.app | no | yes | built |
| Colour segment markers on the progress bar | 0 | 1~ | 0 |  | SponsorBlock | sponsor.ajay.app | no | yes | built |
| Skip notice with undo | 2~ | 3~ | 0 |  | ours: notice pill only; no undo. Improve YouTube!, SponsorBlock, YouTube Tweaks | sponsor.ajay.app | no | yes | partial |
| Never skip on chosen channels | 1~ | 1~ | 1~ | 12 | SponsorBlock, YouTube Ad Auto Skipper; Apple: Improved Tube | sponsor.ajay.app | no | yes | built |
| Submit and vote on segments | 3~ | 2~ | 2~ |  | SponsorBlock, DeArrow, RYS; Apple: SponsorBlock, SponsorBlock port for Youtube | sponsor.ajay.app write API and user ID | no | yes | pending API |
| Extra categories (highlight, exclusive access, hook) | 2~ | 2~ | 0 |  | SponsorBlock, YouTube Search Fixer, YouTube Summary with ChatGPT & Claude | sponsor.ajay.app | no | yes | candidate |
| Mute instead of skip | 2~ | 0 | 0 |  | SponsorBlock, Ad Speedup | sponsor.ajay.app | no | yes | candidate |
| Skip intro or outro by fixed time per channel | 0 | 1~ | 0 |  | Tweaks for YouTube | no | no | yes | candidate |
| Restore dislike counts | 2 | 5 | 3 | 7 | Improve YouTube!, Return YouTube Dislike, Thumbnail Rating Bar for YouTube; Apple: Mira, Return Dislikes | returnyoutubedislikeapi.com | no | yes | built |
| Like and dislike ratio bar | 0 | 1~ | 1~ | 7 | Thumbnail Rating Bar for YouTube; Apple: Red Crow For Safari | returnyoutubedislikeapi.com | no | yes | candidate |
| Dislike counts on Shorts and thumbnails | 0 | 1~ | 0 |  | Thumbnail Rating Bar for YouTube | returnyoutubedislikeapi.com | no | yes | candidate |
| Clearer titles on the watch page (DeArrow) | 1 | 2~ | 3 | 5 | DeArrow, Clickbait Remover for Youtube; Apple: Red Crow For Safari, DeArrow for YouTube | sponsor.ajay.app (DeArrow) | no | yes | built |
| DeArrow titles and thumbnails in feeds | 1 | 2~ | 3 | 5 | DeArrow, Clickbait Remover for Youtube; Apple: Red Crow For Safari, DeArrow for YouTube | sponsor.ajay.app (DeArrow) | no | yes | candidate |
| Replace thumbnails with video frames; fix ALL-CAPS titles | 2 | 6~ | 3~ | 5 | Improve YouTube!, DeArrow, Ambient light for YouTube; Apple: Red Crow For Safari, DeArrow for YouTube | no | no | yes | candidate |
| Keep original-language titles (anti-translate) | 0 | 6 | 0 | 5 | Control Panel for YouTube, YouTube Tweaks, YouTube Anti Translate | no | no | yes | built |
| Use the original audio track (block auto-dub) | 1~ | 5~ | 0 | 5 | YouTube Enhancer, Control Panel for YouTube, YouTube Tweaks | no | no | yes | candidate |
| **Ads** | | | | | | | | | |
| Block YouTube video ads with an ad blocker (network layer) | 9 | 14 | 12 | 21 | Improve YouTube!, Control Panel for YouTube, uBlock Origin; Apple: Vinegar, Improved Tube | no | yes | no (DNR cannot separate ad and video traffic; no webRequest blocking on iOS; skipper and cosmetic hiding are separate rows) | not possible |
| Skip video ads automatically | 8 | 10 | 2~ |  | Improve YouTube!, Control Panel for YouTube, Untrap for YouTube; Apple: Ad Skipper for YouTube, Video Lite | no | yes | yes | built |
| Speed up, mute or fast-forward ads | 3 | 4~ | 4~ |  | Enhancer for YouTube, Tweaks for YouTube, Ad Speedup; Apple: Red Crow For Safari, Ad Skipper for YouTube | no | yes | yes | built |
| Allow ads on chosen channels | 3 | 3~ | 0 |  | Improve YouTube!, Iridium for YouTube, AdBlock | no | gray | yes | candidate |
| Defeat anti-adblock detection walls (why: against YouTube terms; arms race) | 1~ | 2 | 2~ |  | uBlock Origin, AdGuard AdBlocker, LiteTube; Apple: AdGuard, Pie Adblock | no | yes | yes | won't do |
| Tracker and cookie-banner blocking (why: generic blocker territory (Wipr, AdGuard)) | 5 | 3~ | 8~ |  | uBlock Origin, AdGuard AdBlocker, Adblock Plus; Apple: 1Blocker, AdGuard | no | no | yes | won't do |
| Ad-blocker filter lists and custom rules (why: generic blocker territory) | 2~ | 3~ | 10~ |  | uBlock Origin, AdGuard AdBlocker, Adblock for Youtube; Apple: wBlock, 1Blocker | filter-list hosts | no | yes | won't do |
| Ad-free player replacement (Vinegar style) (why: ad removal; App Review risk) | 0 | 0 | 1~ |  | Apple: Vinegar | no | yes | yes (Mac extension precedent) | won't do |
| **Watch page & metadata** | | | | | | | | | |
| Copy link at the current time | 1~ | 1~ | 0 |  | YouTube Enhancer, Tweaks for YouTube | no | no | yes | built |
| Transcript tools (copy, download, search) | 5~ | 7~ | 4~ |  | ours: copy to clipboard only; no file export or search. YouTube Enhancer, Improve YouTube!, Control Panel for YouTube; Apple: Red Crow For Safari, UnTrap for YouTube | no | gray | yes | partial |
| Remove tracking parameters from links | 1 | 2~ | 1~ |  | YouTube Enhancer, Less Mixes for YouTube; Apple: StopTheMadness Pro | no | no | yes | built |
| Playback info overlay (time, remaining, rate) | 0 | 1~ | 0 |  | Tweaks for YouTube | no | no | yes | candidate |
| Channel RSS link | 0 | 0 | 1~ |  | Apple: Red Crow For Safari | no | no | yes | candidate |
| Watch-time and usage statistics | 3 | 2 | 0 |  | Improve YouTube!, Untrap for YouTube, Magic Actions for YouTube | no | no | yes | candidate |
| Virtual content country (why: geo-spoofing) | 1 | 0 | 0 |  | Improve YouTube! | no | gray | partial | won't do |
| **Playlists** | | | | | | | | | |
| Reverse playlist order | 4 | 2~ | 2~ | 4 | Enhancer for YouTube, Improve YouTube!, Iridium for YouTube; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| Shuffle playlist | 1~ | 1~ | 3~ |  | Improve YouTube!; Apple: Red Crow For Safari, Improved Tube | no | no | yes | candidate |
| Playlist total and remaining duration | 1~ | 1~ | 1~ |  | YouTube Enhancer, Tweaks for YouTube; Apple: Red Crow For Safari | no | no | yes | candidate |
| Watch Later and History helpers | 3~ | 2~ | 1~ | 4 | YouTube Enhancer, RYS, Magic Actions for YouTube; Apple: App for YouTube · | no | no | yes | candidate |
| Queue-first watching without the algorithm (why: stand-alone client concept) | 0 | 0 | 2~ |  | Apple: Unwatched for YouTube, Mira | no | no | yes | won't do |
| **Keyboard & mouse** | | | | | | | | | |
| Customisable keyboard shortcuts | 9 | 15 | 7 | 5 | Enhancer for YouTube, Improve YouTube!, SponsorBlock; Apple: Red Crow For Safari, UnTrap for YouTube | no | no | yes | built |
| Mouse-wheel volume | 6 | 5~ | 2~ |  | Enhancer for YouTube, Improve YouTube!, Turn Off the Lights; Apple: Red Crow For Safari, Turn Off the Lights | no | no | yes | built |
| Mouse-wheel speed | 3 | 2~ | 0 |  | Enhancer for YouTube, YouTube Tweaks, Youtube Playback Speed Control | no | no | yes | built |
| Mouse buttons and click regions | 1~ | 1~ | 2~ |  | Enhancer for YouTube, Tweaks for YouTube; Apple: Improved Tube, Vanced Tube-Block ads on video | no | no | yes | candidate |
| Global OS-wide hotkeys | 1~ | 1~ | 0 |  | Global Speed, Tweaks for YouTube | no | no | no (no global shortcuts for extensions) | not possible |
| Game-controller input | 1 | 0 | 0 |  | Turn Off the Lights | no | no | no | not possible |
| Customisable toolbar of action buttons | 1~ | 3~ | 2~ |  | Enhancer for YouTube, Improve YouTube!, Volume Booster for YouTube; Apple: Red Crow For Safari, Improved Tube | no | no | yes | built |
| **Mobile, iOS & iPadOS** | | | | | | | | | |
| Mobile web support (m.youtube.com) | 8 | 27~ | 44 |  | Improve YouTube!, SponsorBlock, Unhook; Apple: Vinegar, SponsorBlock | no | no | yes | built |
| Same feature set on iPhone, iPad and Mac | 0 | 0 | 31 | 10 | ours: one extension on all three; desktop-only rows hidden on iPhone. Apple: Vinegar, SponsorBlock | no | no | yes | partial |
| Runs inside Home Screen web apps and PWAs | 0 | 0 | 0 | 10 | none listed | no | no | no (extensions do not load in Home Screen web apps) | not possible |
| Works inside the native YouTube app | 0 | 0 | 0 |  | none listed | no | no | no (Safari extensions run only in Safari) | not possible |
| Stand-alone YouTube client apps (ad-free, PiP) (why: separate app category) | 0 | 0 | 10 |  | Apple: Tube PiP, Unwatched for YouTube | no | no | yes | won't do |
| **Sync, backup & privacy** | | | | | | | | | |
| Settings export and import | 7 | 3~ | 9~ | 4 | Enhancer for YouTube, Untrap for YouTube, Iridium for YouTube; Apple: Red Crow For Safari, wBlock | no | no | yes | built |
| Settings sync across devices (iCloud or account) | 4~ | 3~ | 10 | 4 | Untrap for YouTube, Iridium for YouTube, PocketTube; Apple: UnTrap for YouTube, wBlock | iCloud (NSUbiquitousKeyValueStore; needs the paid Developer Program) | no | yes | pending API |
| Presets and profiles | 1~ | 0 | 1~ |  | Untrap for YouTube; Apple: Red Crow For Safari | no | no | yes | built |
| Focus schedules, timers and settings lock | 3 | 9 | 3 | 5 | Improve YouTube!, Unhook, Turn Off the Lights; Apple: Red Crow For Safari, UnTrap for YouTube | no | no | yes | candidate |
| Parental controls and locked settings | 1 | 0 | 0 | 3 | Untrap for YouTube | no | no | yes | candidate |
| Opt-in research data donation (why: third-party data flow) | 0 | 1 | 0 |  | RegretsReporter | no | no | yes | won't do |
| **AI & creator tools** | | | | | | | | | |
| AI summaries and chat about a video | 3 | 3 | 3 |  | Untrap for YouTube, Magic Actions for YouTube, vidIQ Vision for YouTube; Apple: UnTrap for YouTube, Mira | LLM API (paid key) | no | yes | pending API |
| Download captions or transcript as a file | 0 | 2~ | 0 |  | Control Panel for YouTube, Youtube Subtitle Downloader | no | gray | no (no downloads API; copy to clipboard instead) | not possible |
| Translate titles, chat or captions on demand | 0 | 1~ | 4~ |  | HyperChat; Apple: Red Crow For Safari, Eightify | Google Translate | no | yes | pending API |
| Creator SEO and optimisation score (vidIQ) (why: vendor service, creator side) | 0 | 1~ | 0 |  | vidIQ Vision for YouTube | vendor service | no | yes | won't do |
| **Downloads & other** | | | | | | | | | |
| Video download (why: YouTube terms, App Review 5.2.3) | 1 | 9 | 1~ |  | Easy Youtube Video Downloader Express, SaveFrom.net helper, Video Downloader Professional; Apple: Focus | vendor server | yes | yes | won't do |
| Audio and MP3 conversion (why: YouTube terms, App Review 5.2.3) | 0 | 6 | 0 |  | Easy Youtube Video Downloader Express, SaveFrom.net helper, YouTube Converter Button | vendor server | yes | yes | won't do |
| Region unblocking through a proxy (why: no proxy API; YouTube terms) | 0 | 1 | 0 |  | ProxTube | no | yes | no (no proxy API) | won't do |
| Works on YouTube embeds on other sites | 12 | 16~ | 6~ | 7 | Enhancer for YouTube, Improve YouTube!, DeArrow; Apple: UnTrap for YouTube, Improved Tube | no | no | yes | candidate |
| Works on YouTube Music | 3~ | 9~ | 2~ | 7 | Tweaks for YouTube, YouTube NonStop, Background Playback Helper; Apple: Vinegar, Red Crow For Safari | no | no | yes | candidate |
| Invidious, Piped and other front-ends | 1~ | 2~ | 1~ | 7 | SponsorBlock, DeArrow; Apple: DeArrow for YouTube | no | no | yes | candidate |
| Works on non-YouTube video sites | 13 | 9~ | 23~ |  | Improve YouTube!, Turn Off the Lights, Video Speed Controller; Apple: Improved Tube, Turn Off the Lights | no | no | yes | candidate |
| Night mode for every site (why: not YouTube-specific) | 1 | 0 | 0 |  | Turn Off the Lights | no | no | yes | won't do |

## Top 30 by frequency

Total = Chrome + Firefox + Apple product counts for the row. Platform and scope rows are excluded.

| # | Feature | Total across stores | Users want (n) | Our status |
|--:|---|--:|--:|---|
| 1 | Hide Shorts | 65 | 17 | built |
| 2 | Hide related videos and sidebar suggestions | 40 | 9 | built |
| 3 | Dark mode and colour themes | 37 | 6 | built |
| 4 | Block YouTube video ads with an ad blocker (network layer) | 35 | 21 | not possible |
| 5 | Default playback speed and speed buttons | 35 | 7 | built |
| 6 | Picture-in-Picture button | 32 | 11 | built |
| 7 | Customisable keyboard shortcuts | 31 | 5 | built |
| 8 | Default quality (Auto HD) | 30 | 5 | built |
| 9 | Turn off autoplay next | 30 | 3 | built |
| 10 | Theater or wide player by default | 24 | 6 | built |
| 11 | Loop whole video | 24 |  | built |
| 12 | Background playback with the screen off | 23 | 11 | partial |
| 13 | Hide comments | 23 | 7 | built |
| 14 | Block channels | 21 | 8 | built |
| 15 | Hide end screens and info cards | 20 | 9 | built |
| 16 | Skip video ads automatically | 20 |  | built |
| 17 | Settings export and import | 19 | 4 | built |
| 18 | Videos per row (grid size) | 18 | 6 | built |
| 19 | Screenshot of the current frame | 18 |  | built |
| 20 | Settings sync across devices (iCloud or account) | 17 | 4 | pending API |
| 21 | Hide the home feed | 16 | 9 | built |
| 22 | Tracker and cookie-banner blocking | 16 |  | won't do |
| 23 | Transcript tools (copy, download, search) | 16 |  | partial |
| 24 | Focus schedules, timers and settings lock | 15 | 5 | candidate |
| 25 | Ad-blocker filter lists and custom rules | 15 |  | won't do |
| 26 | Video filters (brightness, contrast, colour) | 15 |  | built |
| 27 | Works on YouTube Music | 14 | 7 | candidate |
| 28 | Cinema mode (dim the surroundings) | 14 |  | built |
| 29 | Hide live chat | 14 |  | built |
| 30 | Skip sponsor segments (SponsorBlock), per category | 13 | 12 | built |

## Candidates ranked

Score = total store count (Chrome + Firefox + Apple) + 2 x Users want (n). Includes every row whose status is candidate or partial. Where a ranked community item names several features, each named row carries that item's n.

| # | Feature | Status | C / F / A | Total | Users want (n) | Score | Implementation note |
|--:|---|---|---|--:|--:|--:|---|
| 1 | Same feature set on iPhone, iPad and Mac | partial | 0 / 0 / 31 | 31 | 10 | 51 | DOM: options page shows desktop-only rows with a reason instead of hiding them; device test matrix |
| 2 | Works on YouTube embeds on other sites | candidate | 12 / 16 / 6 | 34 | 7 | 48 | DOM: content script on youtube.com/embed/* with all_frames; no extra host access |
| 3 | Works on non-YouTube video sites | candidate | 13 / 9 / 23 | 45 |  | 45 | DOM: scope decision, not a feature; needs access to all sites |
| 4 | Background playback with the screen off | partial | 2 / 9 / 12 | 23 | 11 | 45 | player API: page-visibility override already built; device test on iPhone and iPad, keep the flag experimental |
| 5 | Shorts auto-scroll and loop control | candidate | 2 / 1 / 0 | 3 | 17 | 37 | player API: on ended click next in the Shorts shelf; or force video.loop = false |
| 6 | Works on YouTube Music | candidate | 3 / 9 / 2 | 14 | 7 | 28 | DOM: add music.youtube.com as a host; separate selectors |
| 7 | Focus schedules, timers and settings lock | candidate | 3 / 9 / 3 | 15 | 5 | 25 | storage: schedules and limits; content-script timers; lock behind a passcode or delay |
| 8 | Grayscale or minimal layout | candidate | 5 / 5 / 2 | 12 | 5 | 22 | CSS: filter: grayscale(1) on the page; minimal preset |
| 9 | One-click Hide channel on thumbnails | candidate | 3 / 3 / 0 | 6 | 8 | 22 | DOM: add a menu entry on each card overflow menu; write the channel to blockedChannels |
| 10 | Replace thumbnails with video frames; fix ALL-CAPS titles | candidate | 2 / 6 / 3 | 11 | 5 | 21 | CSS text-transform on titles; swap thumbnail source to i.ytimg.com frames 1 to 3 |
| 11 | Block Reels and short video on other social sites | candidate | 0 / 2 / 5 | 7 | 7 | 21 | DOM: scope decision; one content script per site; widens the permission list |
| 12 | Seek step and skip-ahead buttons | candidate | 4 / 4 / 2 | 10 | 5 | 20 | player API seekTo(currentTime ± step); toolbar buttons and shortcuts |
| 13 | Stretch the player to fill the window | candidate | 3 / 3 / 0 | 6 | 6 | 18 | CSS on ytd-watch-flexy and #player-theater-container; follows the theater toggle |
| 14 | Invidious, Piped and other front-ends | candidate | 1 / 2 / 1 | 4 | 7 | 18 | DOM: scope decision; extra host patterns |
| 15 | Transcript tools (copy, download, search) | partial | 5 / 7 / 4 | 16 |  | 16 | DOM: filter box over the transcript panel; file export needs the absent downloads API |
| 16 | DeArrow titles and thumbnails in feeds | candidate | 1 / 2 / 3 | 6 | 5 | 16 | service: batch by hash prefix; storage: IndexedDB cache; one request per visible batch |
| 17 | Use the original audio track (block auto-dub) | candidate | 1 / 5 / 0 | 6 | 5 | 16 | player API: select the original audio track when several exist |
| 18 | Like and dislike ratio bar | candidate | 0 / 1 / 1 | 2 | 7 | 16 | service: RYD API already wired; DOM bar under the like buttons |
| 19 | Watch Later and History helpers | candidate | 3 / 2 / 1 | 6 | 4 | 14 | DOM shortcuts to /playlist?list=WL and /feed/history; clean-up helpers |
| 20 | Rotate or flip video | partial | 3 / 5 / 5 | 13 |  | 13 | CSS transform: rotate(90deg) steps on the video element |
| 21 | Auto-dismiss the Continue watching prompt | candidate | 4 / 8 / 0 | 12 |  | 12 | DOM: MutationObserver on ytd-popup-container; click the confirm button |
| 22 | Ambient mode off or custom glow | candidate | 4 / 6 / 1 | 11 |  | 11 | CSS: hide #cinematics; optional canvas glow from the video frame |
| 23 | Caption size, position and style | candidate | 0 / 1 / 0 | 1 | 5 | 11 | player API setOption("captions","fontSizeIncrement"); CSS on .caption-window |
| 24 | Zoom, crop or fill black bars | candidate | 2 / 4 / 2 | 8 |  | 8 | CSS transform: scale on the video element with a cover toggle |
| 25 | Parental controls and locked settings | candidate | 1 / 0 / 0 | 1 | 3 | 7 | storage: passcode-protected options; force-on hide switches |
| 26 | Allow ads on chosen channels | candidate | 3 / 3 / 0 | 6 |  | 6 | storage: channel allow-list checked by the ad skipper |
| 27 | Comment search and export | candidate | 3 / 2 / 1 | 6 |  | 6 | DOM: filter loaded comments by text and author; no scraping |
| 28 | Filter by video length | candidate | 1 / 4 / 1 | 6 |  | 6 | DOM: parse the overlay time text; hide cards under or over a threshold |
| 29 | Full titles and larger thumbnails | candidate | 3 / 3 / 0 | 6 |  | 6 | CSS: -webkit-line-clamp: unset on #video-title; scale thumbnails |
| 30 | Loudness normalisation control | candidate | 2 / 3 / 1 | 6 |  | 6 | DOM: toggle Stable volume in the settings menu; or player API option |
| 31 | Sleep timer or stop after a set time | candidate | 0 / 0 / 6 | 6 |  | 6 | storage plus a countdown on timeupdate; pause at zero |
| 32 | Clean search results (suggestion shelves) | candidate | 2 / 3 / 0 | 5 |  | 5 | CSS and DOM on search shelf renderers ("For you", "People also search for") |
| 33 | Frame-by-frame stepping | candidate | 2 / 2 / 1 | 5 |  | 5 | player API: pause then seekTo(currentTime + 1/fps); two toolbar actions |
| 34 | Shuffle playlist | candidate | 1 / 1 / 3 | 5 |  | 5 | player API or the playlist menu shuffle toggle |
| 35 | Skip notice with undo | partial | 2 / 3 / 0 | 5 |  | 5 | player API: remember the last skipped segment; undo button seeks back |
| 36 | Subscription groups and collections | candidate | 1 / 1 / 3 | 5 |  | 5 | storage: groups of channel IDs; filter the Subscriptions feed; sync only if iCloud is added |
| 37 | Watch-time and usage statistics | candidate | 3 / 2 / 0 | 5 |  | 5 | storage: seconds watched per day from timeupdate |
| 38 | Block comments by user or keyword | candidate | 2 / 2 / 0 | 4 |  | 4 | DOM scanner like blockedKeywords on ytd-comment-thread-renderer |
| 39 | Comment helpers (auto-expand, sidebar view, paste timestamp) | candidate | 1 / 3 / 0 | 4 |  | 4 | DOM helpers on the comment box and thread renderers |
| 40 | Extra categories (highlight, exclusive access, hook) | candidate | 2 / 2 / 0 | 4 |  | 4 | service: already wired; storage: add category keys and UI rows |
| 41 | Hide Community posts and membership shelves | candidate | 1 / 1 / 2 | 4 |  | 4 | CSS on post and membership shelf renderers in the feed and on channel pages |
| 42 | Hide Share, Clip, Thanks and Save buttons | candidate | 1 / 3 / 0 | 4 |  | 4 | CSS on the menu renderer buttons under the video |
| 43 | Live chat defaults (Live over Top chat, replay) | candidate | 0 / 4 / 0 | 4 |  | 4 | DOM: choose Live chat in the chat menu; auto-hide when idle |
| 44 | Mouse buttons and click regions | candidate | 1 / 1 / 2 | 4 |  | 4 | DOM: content script click and auxclick handlers on the video with modifier keys |
| 45 | Multiple loop segments and timestamp bookmarks | candidate | 0 / 1 / 3 | 4 |  | 4 | storage: ranges and bookmarks per video; reuse the A-B panel |
| 46 | Clean player overlays (watermark, heatmap, title bar) | candidate | 0 / 2 / 1 | 3 |  | 3 | CSS: hide .ytp-watermark, .ytp-heat-map-container, top gradient; one switch per element |
| 47 | Inbox-style subscriptions and mark as watched | candidate | 1 / 1 / 1 | 3 |  | 3 | storage: watched video IDs; class on cards; hide on the Subscriptions page |
| 48 | Open links and search results in a new tab | partial | 0 / 2 / 1 | 3 |  | 3 | DOM: target=_blank handling for search result anchors |
| 49 | Player controls always visible or minimal progress bar | candidate | 0 / 3 / 0 | 3 |  | 3 | CSS on .ytp-chrome-bottom and .ytp-autohide |
| 50 | Playlist total and remaining duration | candidate | 1 / 1 / 1 | 3 |  | 3 | DOM: sum the duration badges in the playlist panel |
| 51 | Chapter list panel | candidate | 0 / 1 / 1 | 2 |  | 2 | DOM: open the chapters engagement panel; or render a list from segment widths |
| 52 | Default comment sort (newest or top) | candidate | 0 / 2 / 0 | 2 |  | 2 | DOM: pick the sort menu entry once per page load |
| 53 | Mute instead of skip | candidate | 2 / 0 / 0 | 2 |  | 2 | player API: mute for the segment duration |
| 54 | Restore the old YouTube layout | candidate | 0 / 2 / 0 | 2 |  | 2 | CSS and DOM overrides; fragile |
| 55 | Channel RSS link | candidate | 0 / 0 / 1 | 1 |  | 1 | DOM: link to /feeds/videos.xml?channel_id= |
| 56 | Compact header and sidebar | candidate | 0 / 1 / 0 | 1 |  | 1 | CSS: reduce masthead and guide widths |
| 57 | Daily Shorts limit and one-at-a-time viewing | candidate | 0 / 0 / 1 | 1 |  | 1 | storage: per-day counter and an overlay after the limit |
| 58 | Dislike counts on Shorts and thumbnails | candidate | 0 / 1 / 0 | 1 |  | 1 | service: one request per card; storage: cache and batching like DeArrow |
| 59 | Exact upload date and view count | candidate | 0 / 1 / 0 | 1 |  | 1 | DOM: swap relative date text for the absolute date from the page data |
| 60 | Hide Open App banners on mobile web | candidate | 0 / 1 / 0 | 1 |  | 1 | CSS on m.youtube.com banner renderers |
| 61 | Playback info overlay (time, remaining, rate) | candidate | 0 / 1 / 0 | 1 |  | 1 | DOM overlay updated on timeupdate |
| 62 | Skip intro or outro by fixed time per channel | candidate | 0 / 1 / 0 | 1 |  | 1 | storage: per-channel start offset applied on load |

## Product index

Format: Name — URL — price/model — rating (count) — feature summary. Prices are US store prices on 2026-11-03; Chrome Web Store pages show no price, so the model comes from the listing text.

### Chrome Web Store (43 products)

- Enhancer for YouTube — https://chromewebstore.google.com/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle — free — 4.46 (17,573) — Speed, quality, volume, loop, cinema, filters, shortcuts and Shorts hiding
- Video Enhancer for YouTube — https://chromewebstore.google.com/detail/video-enhancer-for-youtube/jpgdgpdcbjcnhmnibhopchhkajphahmj — free — 4.43 (7) — Speed up to 16x, audio boost, loop, filters, popup player
- YouTube Enhancer — https://chromewebstore.google.com/detail/youtube-enhancer/dejhhgdpambaambdifcfbmpliolehfaj — free (Ko-fi donations) — 4.44 (16) — Speed, quality, volume wheel, resume playback, tracking-parameter stripping, themes
- Improve YouTube! (ImprovedTube) — https://chromewebstore.google.com/detail/improve-youtube-for-youtube-videos/bnomihfieiccainjcjblhegjgglakjdd — free (donations) — 4.35 (7,152) — Everything-in-one: player buttons, codecs, themes, shortcuts, hiding, optional ad blocker
- Unhook — https://chromewebstore.google.com/detail/unhook-remove-youtube-recommended-shorts/khncfooichmfjbepaaaebmommgaepoid — free (PayPal donations) — 4.86 (4,617) — Hides home feed, recommendations, comments, Shorts, end cards, autoplay
- DF Tube (Distraction Free for YouTube) — https://chromewebstore.google.com/detail/df-tube-new-distraction-free-for-youtube/kchgllkpfcggmdaoopkhlkbcokngahlg — free — 4.47 (251) — Distraction-free: hides recommendations, comments, Shorts and disables autoplay
- SponsorBlock — https://chromewebstore.google.com/detail/sponsorblock-for-youtube-skip-sponsorships/mnjggcdmjocbbbhaepdhchncahnbgone — free (optional donations) — 4.57 (3,534) — Crowdsourced skipping of sponsors, intros, outros and other segments
- Return YouTube Dislike — https://chromewebstore.google.com/detail/return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi — free core; some features need Patreon tiers — 2.50 (19,872) — Restores the dislike count using archived and estimated votes
- DeArrow — https://chromewebstore.google.com/detail/dearrow-better-titles-and-thumbnails/enamippconapkdmgfgjchkhakpfinmaj — $1 optional license key — 4.21 (319) — Crowdsourced descriptive titles and screenshot thumbnails replace clickbait
- Magic Actions for YouTube — https://chromewebstore.google.com/detail/magic-actions-for-youtube/nhjnnjaaiahcabkadamaeknbkndmaaib — free — 3.57 (7) — Cinema mode, Auto HD, wheel volume, filters, screenshots, Wi-Fi-aware quality
- Turn Off the Lights — https://chromewebstore.google.com/detail/turn-off-the-lights/bfbmjmiodbnnpllbbbfblcplfjjepjdn — free (donations) — 4.33 (33,459) — Dims the page around video; Auto HD, filters, night mode
- Video Speed Controller — https://chromewebstore.google.com/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk — free — 4.04 (4,522) — On-video speed overlay with hotkeys for any HTML5 video site
- Iridium for YouTube — https://chromewebstore.google.com/detail/iridium-for-youtube/gbjmgndncjkjfcnpfhgidhbgokofegbl — free (donations) — 2.88 (513) — Open-source tweaks: autoplay off, quality, themes, full titles, ad management
- UnTrap for YouTube — https://chromewebstore.google.com/detail/untrap-for-youtube-block-shorts-remove-recommendations-detox-focus/enboaomnljigfhfjfoalacienlhjlfil — freemium; UnTrap Pro subscription — 2.55 (849) — Hides Shorts, recommendations, comments; timers, parental controls, AI summaries
- YouTube NonStop — https://chromewebstore.google.com/detail/youtube-nonstop/nlkaejimjacpillmajjnopmpbkbnocid — free — 2.55 (1,318) — Auto-clicks the Continue watching prompt so playback never pauses
- Looper for YouTube — https://chromewebstore.google.com/detail/looper-for-youtube/iggpfpnahkgpnindfkdncknoldgnccdg — free (crypto donations) — 4.19 (3,993) — Loop button under the player, whole video or a range
- BlockTube — https://chromewebstore.google.com/detail/blocktube/bbeaicapbccfllodepmimpkgecanonai — free — 3.89 (825) — Block videos, channels, comments by name or keyword; context menus
- RYS (Remove YouTube Suggestions) — https://chromewebstore.google.com/detail/rys-remove-youtube-suggestions/cdhdichomdnlaadbndgmagohccgpejae — freemium; Premium tier — 3.39 (155) — Hides Shorts, home and sidebar suggestions, comments; Premium adds more
- Minimal Theme for YouTube — https://chromewebstore.google.com/detail/minimal-youtube-theme/ccplmbjcmgejfkggenhjagijijklnacm — free — 5.00 (8) — Tiny CSS theme that hides clutter and greys YouTube
- Adblock for Youtube — https://chromewebstore.google.com/detail/adblock-for-youtube/cmedhionkhpnakcndndgjdbohmhepckk — free — 4.75 (384,414) — Blocks YouTube ads, banners, popups, also in embedded players
- AdBlock for YouTube (by AdBlock) — https://chromewebstore.google.com/detail/adblock-block-ads-across-the-web/gighmmpiobklfepjocnamgkkbiglidom — freemium; Premium subscription — 3.91 (290,267) — General ad blocker with YouTube pre-roll and mid-roll blocking, trackers
- YouTube Ad Auto Skipper — https://chromewebstore.google.com/detail/youtube-ad-auto-skipper/lokpenepehfdekijkebhpnpcjjpngpnd — freemium; USD 7/year optional unlock — 4.11 (484) — Auto-clicks Skip Ad with countdown and per-channel exceptions
- Ad Speedup — https://chromewebstore.google.com/detail/ad-speedup-skip-video-ads-16x-faster/gfegfgnmgmcmlbnemeehifpckogmdapa — free — no ratings — Mutes and speeds ads 5x to 16x instead of blocking
- FadBlock Origin — https://chromewebstore.google.com/detail/fadblock-origin-friendly/lmnhcklabcehiohmmeihcheoegomkghm — open-core; optional paid license — n/a (listing not served) — Seeks through YouTube ads to the end instead of blocking
- uBlock Origin Lite — https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh — free — 4.53 (3,772) — Declarative content blocker for ads and trackers, YouTube cosmetic filters
- AdGuard AdBlocker — https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg — free extension; paid apps — 4.45 (69,035) — Blocks video ads and trackers; handles anti-adblock scripts
- PocketTube: YouTube Subscription Manager — https://chromewebstore.google.com/detail/pockettube-youtube-subscription-manager/kdmnjgijlmjgmimahnillepgcgeemffb — free (Patreon, Buy Me a Coffee) — 4.59 (5,004) — Groups subscriptions into collections with per-group feeds; Drive sync
- Auto HD/Automatic 4K for YouTube — https://chromewebstore.google.com/detail/auto-hd-automatic-4k-for-youtube/anbbfkflfipbnmkgndpbdmjphdkknnpb — free — 4.47 (1,239) — Remembers your chosen quality up to 8K and applies it
- Remove YouTube Shorts — https://chromewebstore.google.com/detail/remove-youtube-shorts/mgngbgbhliflggkamjnpdmegbkidiapm — free (tip jar) — 4.64 (712) — Removes Shorts from feeds, search and recommendations; Kiwi support
- YCS - YouTube Comment Search — https://chromewebstore.google.com/detail/ycs-youtube-comment-search/pmfhcilikeembgbiadjiojgfgcfbcoaa — free — 2.45 (561) — Search comments, replies, chat replay and transcript by content
- Minimal YouTube — https://chromewebstore.google.com/detail/minimal-youtube/imnffafnaoooaedkhappfhomnnpigogk — free — 4.60 (109) — Minimal YouTube interface with no recommendations and no Shorts
- Youtube Playback Speed Control — https://chromewebstore.google.com/detail/youtube-playback-speed-control/hdannnflhlmdablckfkjpleikpphncik — free — 4.40 (4,366) — Keyboard speed keys plus on-player speed overlay buttons
- Music Mode for YouTube — https://chromewebstore.google.com/detail/music-mode-for-youtube/abbpaepbpakcpipajigmlpnhlnbennna — free (donations) — 4.91 (582) — Audio-only YouTube with hidden video, lower quality, background play
- YouTube Summary with ChatGPT & Claude (Glasp) — https://chromewebstore.google.com/detail/youtube-summary-with-chatgpt-claude/nmmicjeknamkfloonkhhcjmomieiodli — freemium; daily caps — 4.21 (4,113) — AI summaries of videos with timestamps via ChatGPT, Claude, Gemini
- Video Downloader Professional — https://chromewebstore.google.com/detail/video-downloader-professional/elicpjhcidhpjomhibiffojpinpmmpil — free with premium upsell — 4.63 (229,926) — Downloads page videos; YouTube itself disabled per store policy
- Stands AdBlocker — https://chromewebstore.google.com/detail/ad-blocker-stands-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh — free — 4.79 (158,991) — Blocks pop-ups, banners and YouTube ads; built-in ad skipper
- Adblock Plus — https://chromewebstore.google.com/detail/adblock-plus-free-ad-blocker/cfhdojbkjhnklbpkdaibdccddilifddb — freemium; Premium subscription — 3.90 (188,153) — Blocks pop-ups, video ads, banners and trackers on all sites
- Ad & Intro Skip for YT, Netflix — https://chromewebstore.google.com/detail/ad-intro-skip-for-yt-netflix/hmbnhhcgiecenbbkgdoaoafjpeaboine — free — 4.10 (6,164) — Auto-skips YouTube video ads and Netflix intros
- YouTube Auto HD + FPS — https://chromewebstore.google.com/detail/youtube-auto-hd-fps/fcphghnknhkimeagdglkljinmpbagone — free — 4.28 (1,433) — Quality by frame rate, player resizing, works in embeds
- Youtube-shorts block — https://chromewebstore.google.com/detail/youtube-shorts-block/jiaopdjbehhjgokpphdfgmapkobbnmjp — free — 4.15 (1,073) — Redirects Shorts URLs to the normal player and hides Shorts
- Global Speed - Video Speed Control — https://chromewebstore.google.com/detail/global-speed-video-speed-control/jpbjcnkcffbooppibceonlgknpkniiff — free — 4.52 (863) — Universal media speed control with URL rules, boost, pitch, presets
- Clickbait Remover for Youtube — https://chromewebstore.google.com/detail/clickbait-remover-for-youtube/omoinegiohhgbikclijaniebjpkeopip — free — 4.51 (253) — Replaces thumbnails with video frames and fixes all-caps titles
- Audio Only Youtube — https://chromewebstore.google.com/detail/audio-only-youtube/pkocpiliahoaohbolmkelakpiphnllog — free — 1.96 (738) — Disables the video stream for audio-only listening, with replay button

### Firefox Add-ons (93 add-ons)

- SponsorBlock - Skip Sponsorships on YouTube — https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/ — free, open source — 4.81 (3,244) — Crowdsourced skipping of sponsors, intros, outros and reminders
- Enhancer for YouTube — https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/ — free, closed source — 4.66 (12,438) — Speed, quality, volume, loop, cinema, filters, shortcuts, hiding in one
- Return YouTube Dislike — https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/ — free, open source; in-page Patreon upsell — 4.46 (5,339) — Restores the dislike count from archived and estimated votes
- DeArrow - Better Titles and Thumbnails on YouTube — https://addons.mozilla.org/en-US/firefox/addon/dearrow/ — $1 optional license key (soft paywall) — 3.98 (396) — Crowdsourced titles and thumbnails replace clickbait ones
- YouTube High Definition — https://addons.mozilla.org/en-US/firefox/addon/youtube-high-definition/ — free, closed source — 3.75 (1,400) — Auto-plays in highest quality; defaults for speed, volume, captions, cinema
- Unhook: Remove YouTube Recommended Videos Comments — https://addons.mozilla.org/en-US/firefox/addon/youtube-recommended-videos/ — free, closed source — 4.63 (1,201) — Hides feed, comments, Shorts, related videos, autoplay; focus mode
- Iridium for YouTube — https://addons.mozilla.org/en-US/firefox/addon/particle-iridium/ — free, open source — 3.95 (627) — Open-source tweaks: channel blacklist, reverse playlists, quality, speed, themes
- uBlock Origin — https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/ — free, open source — 4.80 (22,271) — General content blocker with YouTube ad filters and anti-detection
- Video Speed Controller — https://addons.mozilla.org/en-US/firefox/addon/videospeed/ — free, open source — 4.53 (804) — On-video speed overlay and hotkeys for any HTML5 video
- YouTube NonStop — https://addons.mozilla.org/en-US/firefox/addon/youtube-nonstop/ — free, open source — 4.15 (612) — Dismisses the Continue watching prompt; background-play helper
- BlockTube — https://addons.mozilla.org/en-US/firefox/addon/blocktube/ — free, open source — 3.88 (534) — Blocks videos, channels, comments by rule; hides Shorts and feed
- UnTrap for YouTube — https://addons.mozilla.org/en-US/firefox/addon/untrap-for-youtube/ — free core; optional UnTrap Plus — 3.52 (217) — Hides Shorts, feed, comments; focus tools, AI summaries, shortcuts
- AdBlocker for YouTube — https://addons.mozilla.org/en-US/firefox/addon/adblock-for-youtube/ — free — 3.85 (1,377) — Dedicated YouTube ad blocker with network and cosmetic filtering
- Easy Youtube Video Downloader Express — https://addons.mozilla.org/en-US/firefox/addon/easy-youtube-video-download/ — freemium (trial, then PRO) — 4.14 (20,081) — Downloads YouTube video, audio and MP3 (terms flag)
- SaveFrom.net helper all-in-1 / youtube downloader — https://addons.mozilla.org/en-US/firefox/addon/savefromnet-helper/ — freemium (low-res free tier) — 4.11 (4,775) — Downloads YouTube video and MP3 through SaveFrom.net service
- Video Background Play Fix — https://addons.mozilla.org/en-US/firefox/addon/video-background-play-fix/ — free, open source — 4.46 (1,555) — Keeps YouTube playing when the tab is hidden
- Hide Youtube-Shorts — https://addons.mozilla.org/en-US/firefox/addon/hide-youtube-shorts/ — free, open source — 4.55 (319) — Hides Shorts from home, subscriptions, search and the Shorts tab
- Improve YouTube! (For YouTube & Video) — https://addons.mozilla.org/en-US/firefox/addon/youtube-addon/ — free, open source — 4.28 (907) — Hundreds of tweaks: speed, quality, codecs, ad blocking, themes, hotkeys
- h264ify — https://addons.mozilla.org/en-US/firefox/addon/h264ify/ — free, open source — 4.42 (236) — Forces H.264 so hardware decoding saves battery and CPU
- Youtube-shorts block — https://addons.mozilla.org/en-US/firefox/addon/youtube-shorts-block/ — free, open source — 4.46 (298) — Plays Shorts in the normal player; hides the Shorts tab
- Control Panel for YouTube — https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-youtube/ — free, closed source — 4.54 (194) — Hides ads, Shorts, comments, AI, mixes; theater and background play
- YouTube Video and Audio Downloader (WebEx) — https://addons.mozilla.org/en-US/firefox/addon/youtube_downloader_webx/ — free, open source — 3.76 (1,861) — Downloads YouTube video and audio files; MP3 conversion
- YouTube No Translation — https://addons.mozilla.org/en-US/firefox/addon/youtube-no-translation/ — free, open source — 4.86 (391) — Stops auto-translated titles, descriptions, captions and audio
- vidIQ Vision for YouTube — https://addons.mozilla.org/en-US/firefox/addon/vidiq-vision-youtube/ — freemium (vidIQ paid plans) — 4.05 (323) — Creator analytics and optimization score card for any video
- Ambient light for YouTube — https://addons.mozilla.org/en-US/firefox/addon/ambient-light-for-youtube/ — free, open source — 4.89 (84) — Ambient glow around the player; removes black bars, fills screen
- Adblock for Youtube — https://addons.mozilla.org/en-US/firefox/addon/adblock-for-youtube-tm/ — free, open source — 4.37 (1,696) — Blocks YouTube ads, banners and popups
- YouTube Downloader — https://addons.mozilla.org/en-US/firefox/addon/youtube_downloader/ — free — 2.99 (607) — Download button on the watch page, with format choice
- YouTube Anti Translate — https://addons.mozilla.org/en-US/firefox/addon/youtube-anti-translate/ — free, open source — 4.19 (231) — Restores original titles and thumbnails when YouTube translates them
- YouTube Search Fixer — https://addons.mozilla.org/en-US/firefox/addon/youtube-suite-search-fixer/ — free, open source — 4.37 (175) — Removes search suggestions, Shorts, watched videos, live and premieres
- YouTube mp3 — https://addons.mozilla.org/en-US/firefox/addon/youtube-mp3-converter/ — free — 3.45 (300) — Converts YouTube videos to MP3 through a vendor server
- YouTube Downloader (UDL Helper) — https://addons.mozilla.org/en-US/firefox/addon/youtube-downloader-udl-helper/ — free; UDL Client app for big files — 4.54 (844) — Downloads YouTube video and MP3 via helper; frame screenshots
- PocketTube: Youtube Subscription Manager — https://addons.mozilla.org/en-US/firefox/addon/youtube-subscription-groups/ — free, closed source; Patreon support — 4.15 (707) — Groups subscriptions into collections with per-group feeds and filters
- YouTube Converter Button — https://addons.mozilla.org/en-US/firefox/addon/youtube-converter-button/ — free, closed source — 4.17 (604) — Opens a converter site to save YouTube video or audio
- Remove Youtube Shorts — https://addons.mozilla.org/en-US/firefox/addon/remove-youtube-shorts/ — free, open source — 3.90 (93) — Removes the Shorts tab, redirects Shorts to the normal player
- Shorts block-tube — https://addons.mozilla.org/en-US/firefox/addon/ytb-shorts-blocker/ — free — 4.91 (35) — Hides Shorts across YouTube
- No Shorts - YouTube Shorts Blocker — https://addons.mozilla.org/en-US/firefox/addon/youtube-shorts-blocker-pro/ — free, open source — 4.21 (14) — Removes Shorts from home and search; Shorts viewing tools
- YT Shorts Blocker — https://addons.mozilla.org/en-US/firefox/addon/yt-shorts-blocker/ — free, open source — 4.32 (19) — Hides Shorts, filters by video length, channel or keyword
- Block YouTube Shorts and Playables — https://addons.mozilla.org/en-US/firefox/addon/block-yt-shortvideo/ — free — 4.12 (8) — Hides Shorts, Playables and feed rails with filters
- Youtube Shorts Block — https://addons.mozilla.org/en-US/firefox/addon/shorts-block/ — free, open source — 4.32 (19) — Removes Shorts from Home, results and Trending; opens normal player
- YouTube Shorts Blocker — https://addons.mozilla.org/en-US/firefox/addon/shortsless/ — free, open source — 5.00 (9) — Minimal Shorts hider for tabs, shelves and videos
- Auto HD/4k/8k for YouTube — https://addons.mozilla.org/en-US/firefox/addon/auto-hd-4k-8k-for-youtube/ — free — 3.91 (74) — Sets a default quality from 144p up to 8K
- YouTube in HD (720p, 1080p, 1440p, 2160p) — https://addons.mozilla.org/en-US/firefox/addon/youtube-hd-1/ — free — 4.25 (169) — Forces 720p to 2160p quality and codec choice
- enhanced-h264ify — https://addons.mozilla.org/en-US/firefox/addon/enhanced-h264ify/ — free, open source — 4.46 (122) — Block chosen codecs (VP9, AV1) and 60 fps formats
- Youtube Background Play Fix — https://addons.mozilla.org/en-US/firefox/addon/backstage-play/ — free, open source — 4.72 (32) — Keeps YouTube audio playing when the page is hidden
- Background Playback Helper (YouTube & Vimeo) — https://addons.mozilla.org/en-US/firefox/addon/playback-helper-youtube-vimeo/ — free, open source — 4.97 (31) — Background playback for YouTube and Vimeo; dismisses pause prompt
- YouTube Background Play — https://addons.mozilla.org/en-US/firefox/addon/youtube-background-play/ — free, open source — 5.00 (13) — Plays YouTube in the background while the tab is hidden
- YouTube Audio — https://addons.mozilla.org/en-US/firefox/addon/youtube-audio/ — free, open source — 3.74 (533) — Audio-only mode with background play, ad block, SponsorBlock and downloads
- RYS - Remove YouTube Suggestions — https://addons.mozilla.org/en-US/firefox/addon/remove-youtube-s-suggestions/ — freemium (Premium tier) — 4.13 (199) — Hides suggestions, Shorts, comments; ad skipping, themes; Premium tier
- YouTube Comment Search — https://addons.mozilla.org/en-US/firefox/addon/youtube-comment-search/ — free, open source — 3.82 (55) — Searches comments and replies by text or author
- YCS - YouTube Comment Search (Continued) — https://addons.mozilla.org/en-US/firefox/addon/ycs-continued/ — free, open source — 4.78 (36) — Continued comment, live chat and transcript search
- HyperChat [Improved YouTube Chat] — https://addons.mozilla.org/en-US/firefox/addon/hyperchat/ — free, open source — 4.63 (68) — Lightweight live chat with themes, filters and translation
- DF YouTube (Distraction Free) — https://addons.mozilla.org/en-US/firefox/addon/df-youtube/ — free — 4.56 (267) — Distraction-free: hides feed, comments, UI; autoplay, playlist and focus tools
- Tweaks for YouTube — https://addons.mozilla.org/en-US/firefox/addon/tweaks-for-youtube/ — free, closed source — 4.58 (201) — 100+ opt-in features: mouse regions, audio, hiding, shortcuts, filters
- YouTube Tweaks — https://addons.mozilla.org/en-US/firefox/addon/youtube-tweaks/ — free, open source — 4.84 (329) — Grid layout, hiding, per-channel speed, quality, themes, custom CSS
- YouTube Enhancer — https://addons.mozilla.org/en-US/firefox/addon/youtube-enhancer-vc/ — free, open source — 4.55 (121) — Speed, volume, quality, loop, cinema, captions, screenshots, themes, hiding
- Less Mixes for YouTube — https://addons.mozilla.org/en-US/firefox/addon/less-mixes-for-youtube/ — free — 4.76 (82) — Stops YouTube turning music videos into auto-generated Mix playlists
- YouTube Row Fixer — https://addons.mozilla.org/en-US/firefox/addon/youtube-row-fixer-extension/ — free, open source — 4.42 (36) — Sets videos per row, hides Shorts and channel profile images
- YouTube Redux — https://addons.mozilla.org/en-US/firefox/addon/youtube-redux/ — free, open source — 4.24 (311) — Restores old layout and dislikes; themes, autoplay and feed controls
- SocialFocus: Hide Distractions — https://addons.mozilla.org/en-US/firefox/addon/socialfocus/ — free tier; premium hints — 4.34 (143) — Hides recommendations, Shorts and comments on YouTube and social sites
- YouTube LevelUp — https://addons.mozilla.org/en-US/firefox/addon/youtube-levelup/ — free, open source — 4.69 (16) — Hides Shorts and feed; dislikes, sponsor skip, anti-translate, background play
- AdBlocker for YouTube Video — https://addons.mozilla.org/en-US/firefox/addon/youtube-adblock/ — free — 3.38 (86) — Removes YouTube advertisements and banners with hard-coded rules
- Youtube Ad Auto-skipper — https://addons.mozilla.org/en-US/firefox/addon/youtube-ad-auto-skipper/ — free, open source — 4.52 (131) — Clicks the Skip Ad button the moment it appears
- YT Ad Speedup - Skip Ads Faster — https://addons.mozilla.org/en-US/firefox/addon/yt-ad-speedup-skip-ads-faster/ — free, closed source — 3.91 (47) — Speeds ads to 16x and mutes them
- Ad Speedup Skip Video Ads Fast — https://addons.mozilla.org/en-US/firefox/addon/ad-speedup-skip-video-ads-fast/ — free, closed source — 4.07 (14) — Plays ads at 16x speed, muted
- Youtube Ad Skipper — https://addons.mozilla.org/en-US/firefox/addon/youtube-ad-skipper/ — free — 4.04 (28) — Auto-skips or removes video ads; ads still load
- SkipIt Adblocker for Youtube — https://addons.mozilla.org/en-US/firefox/addon/skipit-adblocker-for-youtube/ — free — 4.21 (14) — Skips short 2 to 3 second YouTube ads automatically
- LiteTube: Fix YouTube Lag & Adblock Detection — https://addons.mozilla.org/en-US/firefox/addon/litetube-adfree/ — free — 4.10 (20) — Fixes Firefox lag and ad-block detection; forces H.264, sponsor skip
- Adblock Plus — https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/ — free, open source (Acceptable Ads) — 4.37 (11,432) — General ad blocker with YouTube ad filter lists
- AdGuard AdBlocker — https://addons.mozilla.org/en-US/firefox/addon/adguard-adblocker/ — free, open source — 4.64 (7,009) — General ad blocker with YouTube ad filters
- AdBlock for Firefox — https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/ — free, open source — 4.21 (3,544) — General ad blocker with YouTube ad filters
- AdBlocker Ultimate — https://addons.mozilla.org/en-US/firefox/addon/adblocker-ultimate/ — free, open source — 4.78 (27,261) — General ad blocker with YouTube ad filters
- Ghostery – Privacy Ad Blocker — https://addons.mozilla.org/en-US/firefox/addon/ghostery/ — free, open source; optional paid tiers — 4.43 (5,783) — Privacy blocker for ads and trackers, including YouTube
- Youtube Video Looper — https://addons.mozilla.org/en-US/firefox/addon/youtube-video-looper/ — free, open source — 4.00 (17) — Auto-repeats YouTube songs and videos
- YouTube Parts Looper & Bookmarker — https://addons.mozilla.org/en-US/firefox/addon/youtube-parts-looper/ — free, open source — 4.80 (25) — Loops and bookmarks multiple segments of one video
- YouTube Repeat Button — https://addons.mozilla.org/en-US/firefox/addon/youtube-repeat-button/ — free — 4.27 (41) — Adds the missing repeat button to the player
- Rotate Youtube Video (+ Zoom / Mirror, AB Loop) — https://addons.mozilla.org/en-US/firefox/addon/rotate-youtube-video/ — free — 4.27 (117) — Rotate, zoom, mirror, crop and A-B loop the video
- Looper — https://addons.mozilla.org/en-US/firefox/addon/looper/ — free, open source — 3.78 (9) — Loops a video between points A and B
- Global Speed - Video Speed Control — https://addons.mozilla.org/en-US/firefox/addon/global-speed/ — free — 4.73 (315) — Global media speed control with shortcuts, boost, filters and cinema
- YouTube Screenshot Button — https://addons.mozilla.org/en-US/firefox/addon/youtube-screenshot-button/ — free, open source — 4.39 (97) — Screenshot button in the player, Shift+A shortcut
- Annotations Restored for YouTube — https://addons.mozilla.org/en-US/firefox/addon/annotations-restored/ — free, open source — 4.70 (44) — Restores discontinued 2019 annotations from an archive
- YouTube Summary with ChatGPT & Claude — https://addons.mozilla.org/en-US/firefox/addon/youtube-summary-with-chatgpt/ — free, closed source — 2.45 (31) — AI summaries and transcripts with ChatGPT and Claude
- Thumbnail Rating Bar for YouTube — https://addons.mozilla.org/en-US/firefox/addon/youtube-thumbnail-rating-bar/ — free, open source — 4.64 (181) — Like/dislike rating bars on thumbnails via Return YouTube Dislike
- YouTube Dislike Counter — https://addons.mozilla.org/en-US/firefox/addon/youtube-dislike-counter/ — free, open source — 3.46 (57) — Restores dislike counts on videos and Shorts
- ProxTube - Unblock YouTube — https://addons.mozilla.org/en-US/firefox/addon/proxtube/ — free — 3.09 (149) — Routes region-blocked videos through a proxy (terms flag)
- RegretsReporter — https://addons.mozilla.org/en-US/firefox/addon/regretsreporter/ — free, open source — 3.73 (143) — Adds stop-recommending buttons and donates feedback data to Mozilla research
- Theater Mode for YouTube (YouTube Wide Screen) — https://addons.mozilla.org/en-US/firefox/addon/theater-mode-for-youtube/ — free — 4.38 (39) — Forces theater mode on every video, even signed out
- Youtube Subtitle Downloader — https://addons.mozilla.org/en-US/firefox/addon/youtube-subtitle-downloader/ — free, open source — 3.90 (107) — Downloads YouTube subtitles and captions
- Turn Off the Lights for Firefox — https://addons.mozilla.org/en-US/firefox/addon/turn-off-the-lights/ — free, open source — 4.57 (698) — Dims the page; quality, codecs, volume, transforms, popup, loop
- YouTube Auto HD + FPS — https://addons.mozilla.org/en-US/firefox/addon/youtube-auto-hd-fps/ — free, open source — 4.07 (173) — Sets quality by frame rate and codec
- Clickbait Remover for Youtube — https://addons.mozilla.org/en-US/firefox/addon/clickbait-remover-for-youtube/ — free, open source — 4.75 (159) — Replaces thumbnails with video frames and normalises titles
- Volume Booster for YouTube — https://addons.mozilla.org/en-US/firefox/addon/volume-booster-for-youtube/ — free, open source — 4.29 (28) — Doubles YouTube volume with an audio gain button
- Auto Youtube Shorts Scroller — https://addons.mozilla.org/en-US/firefox/addon/auto-youtube-shorts-scroller/ — free, open source — 3.83 (53) — Auto-scrolls to the next Short; Shift+S toggle
- YouTube Anti Translate - Official Port — https://addons.mozilla.org/en-US/firefox/addon/youtube-anti-translate-mv3/ — free, open source — 4.80 (56) — Restores original titles, descriptions and audio instead of translations

### Apple App Store (96 full sections, 49 long-tail rows)

- Clean YT for Safari — https://apps.apple.com/us/app/clean-yt-for-safari/id6754407661 — iOS $2.99 one-time — 5 (1) — Hides Shorts, sponsored videos, comments and suggested videos
- SponsorBlock for Safari — https://apps.apple.com/us/app/sponsorblock-for-safari/id1573461917 — iOS $2.99 one-time — 4.4 (81) — Crowdsourced skipping of sponsors, intros and outros in Safari
- PocketTube for Safari — https://apps.apple.com/us/app/pockettube-for-safari/id1533703891 — Mac Free — no ratings — Groups subscriptions into collections (Mac only)
- Block YT Shorts for Safari — https://apps.apple.com/us/app/block-yt-shorts-for-safari/id6754257092 — iOS $2.99 one-time — 5 (1) — Removes Shorts from home, subscriptions and search
- Accelerate for Safari — https://apps.apple.com/us/app/accelerate-for-safari/id1459809092 — iOS Free + tip — 4.2 (53) — Speed control and shortcuts for any HTML5 video, plus PiP
- Shorts Blocker for YouTube — https://apps.apple.com/us/app/shorts-blocker-for-youtube/id6451330524 — iOS $1.99 one-time — 3.9 (135) — Removes Shorts from feed, search and navigation
- Vinegar - Tube Cleaner — https://apps.apple.com/us/app/vinegar-tube-cleaner/id1591303229 — iOS $1.99 one-time — 4.2 (761) — Native HTML5 player with ad removal, PiP and background audio
- Baking Soda - Tube Cleaner — https://apps.apple.com/us/app/baking-soda-tube-cleaner/id1601151613 — iOS $1.99 one-time — 4.5 (100) — Native video player on other sites; simpler Vinegar sibling
- DeArrow for YouTube — https://apps.apple.com/us/app/dearrow-for-youtube/id6451469297 — iOS $1.99 one-time — 4.4 (18) — Crowdsourced titles and screenshot thumbnails replace clickbait
- Hush Nag Blocker — https://apps.apple.com/us/app/hush-nag-blocker/id1544743900 — iOS Free (open source) — 4.4 (1,090) — Removes cookie-consent nags; no YouTube-specific features
- Wipr 2 — https://apps.apple.com/us/app/wipr-2/id1662217862 — iOS $4.99 one-time + optional add-on and tips — 4.7 (1,361) — Content blocker for ads, trackers, cookie warnings; not YouTube-specific
- 1Blocker: Ad Blocker — https://apps.apple.com/us/app/1blocker-ad-blocker/id1365531024 — iOS Free + subscription / lifetime — 4.5 (12,964) — Ad and tracker blocker with YouTube ad rules and scripts
- AdGuard Ad Blocker for Safari — https://apps.apple.com/us/app/adguard-ad-blocker-for-safari/id1047223162 — iOS Free + subscription / lifetime — 4.3 (20,229) — Ad blocker; Pro unlocks advanced YouTube blocking
- AdGuard: Ad Blocker for Safari — https://apps.apple.com/us/app/adguard-ad-blocker-for-safari/id1440147259 — Mac Free + subscription — no ratings — Mac ad blocker (AdGuard Mini) with video ad blocking
- StopTheMadness Pro — https://apps.apple.com/us/app/stopthemadness-pro/id6471380298 — iOS $14.99 one-time — 4.73 (204) — Web-fixes bundle with YouTube controls, tracking-parameter stripping, PiP, scripts
- Userscripts — https://apps.apple.com/us/app/userscripts/id1463298887 — iOS Free (open source) — 4.3 (191) — Open-source userscript and CSS runner for Safari
- Cascadea — https://apps.apple.com/us/app/cascadea/id1432182561 — Mac $2.99 one-time — no ratings — Custom CSS themes for any website (Mac)
- Hyperweb — https://apps.apple.com/us/app/hyperweb/id1581824571 — iOS Free — 4.6 (1,482) — Annoyance blocker and userscript extension for iOS Safari
- Noir - Dark Mode for Safari — https://apps.apple.com/us/app/noir-dark-mode-for-safari/id1581140954 — iOS $2.99 one-time — 4.6 (1,366) — Automatic dark mode for every website, YouTube included
- Noir – Dark Mode for Safari — https://apps.apple.com/us/app/noir-dark-mode-for-safari/id1592917505 — Mac $3.99 one-time — no ratings — Automatic dark mode for every website (Mac listing)
- Return Dislikes — https://apps.apple.com/us/app/return-dislikes/id6605923430 — iOS Free — 3 (4) — Brings back the dislike counter on videos
- Dislike Checker for YouTube — https://apps.apple.com/us/app/dislike-checker-for-youtube/id1627860091 — iOS Free (ads) — 3.4 (248) — Paste or share a URL to see dislikes and ratios
- wBlock: Ad Blocker for Safari — https://apps.apple.com/us/app/wblock-ad-blocker-for-safari/id6746388723 — iOS Free (open source) — 4.8 (187) — Open-source content blocker with 750,000 rules and YouTube scripts
- UnTrap for YouTube — https://apps.apple.com/us/app/untrap-for-youtube/id1637438059 — iOS $4.99 + subscription — 4.1 (519) — 250+ options hiding Shorts, comments, recommendations; focus tools and sync
- YouTweak — https://apps.apple.com/us/app/youtweak/id6788401713 — iOS Free — no ratings — Locks video quality and adds speed buttons
- Unwatched for YouTube — https://apps.apple.com/us/app/unwatched-for-youtube/id6477287463 — iOS Free (open source) + optional Premium — 4.7 (438) — Queue-first YouTube client: no autoplay, follow channels, playlists, PiP
- Adblocker For YouTube Videos — https://apps.apple.com/us/app/adblocker-for-youtube-videos/id1621531549 — iOS $2.99 one-time + premium IAP — 4.5 (1,647) — Removes YouTube pre-roll and text ads; 1080p, audio-only, PiP
- SwizzTube: Video Ad Blocker — https://apps.apple.com/us/app/swizztube-video-ad-blocker/id6466721604 — iOS Free + one-time unlock (donation tiers) — 4.6 (466) — Ad and Shorts blocker with SponsorBlock, PiP and background play
- PiPifier — https://apps.apple.com/us/app/pipifier/id1234771095 — iOS Free + tip — 4.4 (325) — Puts any HTML5 video into Picture-in-Picture
- Tube PiP — https://apps.apple.com/us/app/tube-pip/id6476895094 — iOS Free + subscription / lifetime — 4.6 (2,936) — Picture-in-Picture and background playback for YouTube while using other apps
- Vidimote for Safari — https://apps.apple.com/us/app/vidimote-for-safari/id1585702412 — iOS $2.99 one-time — 4.2 (66) — Speed up to 2x, 10-second jumps, PiP
- yPlayer for YouTube — https://apps.apple.com/us/app/yplayer-for-youtube/id1586397529 — iOS $1.99 one-time — 4.1 (51) — Plays YouTube in Picture-in-Picture with an in-app browser
- SponsorBlock port for Youtube — https://apps.apple.com/us/app/sponsorblock-port-for-youtube/id1532163541 — Mac Free — no ratings — Unofficial abandoned SponsorBlock port for Mac Safari
- PocketTube Subscription Manager — https://apps.apple.com/us/app/pockettube-subscription-manage/id1475688814 — iOS Free — 3.3 (59) — Manage subscription collections on iPhone and iPad
- Turn Off the Lights for Safari — https://apps.apple.com/us/app/turn-off-the-lights-for-safari/id1273998507 — iOS Free (open source) — 4.1 (59) — Cinema dimming, Auto HD, loop and hotkeys on video sites
- "No Distractions" for YouTube — https://apps.apple.com/us/app/no-distractions-for-youtube/id1482507016 — iOS $1.29 one-time — 4.4 (29) — Hides recommendations and any custom element on YouTube
- BlockYT for Safari — https://apps.apple.com/us/app/blockyt-for-safari/id1575379461 — iOS $2.99 one-time — 4 (36) — Blocks YouTube recommendations and Shorts
- #blockit: Block Shorts & Reels — https://apps.apple.com/us/app/blockit-block-shorts-reels/id1492879257 — iOS Free + subscription — 4 (169) — Content-blocker rules hiding Shorts, Reels and home recommendations
- No Shorts: Blocker for YouTube — https://apps.apple.com/us/app/no-shorts-blocker-for-youtube/id6502996298 — iOS $2.99 one-time — 4.5 (15) — Hides the Shorts feed, previews and suggestions
- Mira - Focused Video Player — https://apps.apple.com/us/app/mira-focused-video-player/id6767721654 — iOS Free + subscription / lifetime — 4.4 (25) — Focused player with SponsorBlock, queue, dislikes, background audio, sync
- Custom Video Speed for YouTube — https://apps.apple.com/us/app/custom-video-speed-for-youtube/id6443640011 — iOS Free — 4.4 (7) — Finer YouTube speed control applied to every new video
- Hover Speed for YouTube — https://apps.apple.com/us/app/hover-speed-for-youtube/id6778460443 — Mac Free — no ratings — Hover-only YouTube speed control, 1x to 3x (Mac)
- Better Player for Youtube — https://apps.apple.com/us/app/better-player-for-youtube/id1592876082 — iOS Free — 4.2 (12) — Hides ad slots, landscape full screen, PiP, theater tweaks
- Improved Tube — https://apps.apple.com/us/app/improved-tube/id1672777754 — Mac Free (open source) — no ratings — Mac all-in-one: Shorts hiding, speed, quality, PiP, loops, hotkeys
- Tampermonkey — https://apps.apple.com/us/app/tampermonkey/id6738342400 — iOS $2.99 one-time — 3.1 (61) — Userscript manager for Safari on iPhone and iPad
- Dark Reader for Safari — https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180 — iOS $4.99 one-time — 4.3 (285) — Dark themes for any site, with brightness and contrast controls
- Focus - Userscripts & Player — https://apps.apple.com/us/app/focus-userscripts-player/id1631941898 — iOS Free + one-time unlock — 4.7 (5,153) — Floating video player, userscripts and a Tampermonkey-compatible manager
- Pie Adblock for Safari — https://apps.apple.com/us/app/pie-adblock-for-safari/id6499055690 — iOS Free (ad/cash-back funded) — 4.7 (1,556) — Free Safari ad blocker with anti-adblock circumvention
- Ad blocker by Magic Lasso — https://apps.apple.com/us/app/ad-blocker-by-magic-lasso/id1260462853 — iOS Free + subscription — 4.2 (918) — Ad and tracker blocker with YouTube pre-roll and mid-roll blocking
- AdGuard Pro: Safari Ad Blocker — https://apps.apple.com/us/app/adguard-pro-safari-ad-blocker/id1126386264 — iOS $9.99 one-time — 4.4 (3,153) — Paid one-time ad blocker with video ads and tracker filters
- Picture in Picture for Safari — https://apps.apple.com/us/app/picture-in-picture-for-safari/id6755545186 — iOS $2.99 one-time — 5 (2) — Picture-in-Picture for any web video, YouTube included
- OverPicture for Safari — https://apps.apple.com/us/app/overpicture-for-safari/id1188020834 — iOS $3.99 one-time — 4.3 (12) — Picture-in-Picture via button, custom PiP button or shortcut
- Eightify for Safari — https://apps.apple.com/us/app/eightify-for-safari/id6448126776 — Mac Free + subscription — no ratings — AI summaries of YouTube videos and top comments (subscription)
- Sink It for YouTube — https://apps.apple.com/us/app/sink-it-for-youtube/id6798803425 — iOS Free + tip — 5 (2) — Blocks Shorts everywhere or per page; hides Playables and posts
- Smart Tube BDP — https://apps.apple.com/us/app/smart-tube-bdp/id6761388918 — iOS Free — 3.8 (92) — Native SwiftUI YouTube client with SponsorBlock, DeArrow, PiP
- Red Crow For Safari — https://apps.apple.com/us/app/red-crow-for-safari/id6766324724 — iOS $0.99 one-time — no ratings — 150+ settings: Shorts, speed, quality, SponsorBlock, DeArrow, dislikes, filters
- Auto HD + FPS for YouTube — https://apps.apple.com/us/app/auto-hd-fps-for-youtube/id1546729687 — iOS Free — 2.9 (35) — Sets YouTube quality automatically with frame-rate rules
- AdBlock Pro for Safari — https://apps.apple.com/us/app/adblock-pro-for-safari/id1018301773 — iOS Free + subscription / lifetime — 4.5 (74,358) — General ad, popup and tracker blocker (subscription)
- Adblock Plus for Safari ABP — https://apps.apple.com/us/app/adblock-plus-for-safari-abp/id1432731683 — Mac Free (Acceptable Ads) — no ratings — Acceptable-Ads ad blocker including video ads (Mac)
- AdBlock for Safari & VPN — https://apps.apple.com/us/app/adblock-for-safari-vpn/id1402042596 — Mac Free + subscription (VPN) — no ratings — General ad blocker with cookie banner removal and VPN
- ProTube: Video Browser — https://apps.apple.com/us/app/protube-video-browser/id6748081431 — iOS Free + one-time unlock — 4.8 (15,722) — Video browser with native player, AirPlay, sleep timer, ad blocking
- YubePiP: PiP Browser & Tools — https://apps.apple.com/us/app/yubepip-pip-browser-tools/id1591269922 — iOS Free + one-time unlock — 4.5 (9,158) — Floating Picture-in-Picture browser with dual tabs and tools
- Video Lite — https://apps.apple.com/us/app/video-lite/id1598997500 — iOS Free, ad-supported + remove-ads — 4.8 (173,931) — Video browser with native player, Chromecast, PiP, sleep timer
- YouPlay: AdBlock Video Browser — https://apps.apple.com/us/app/youplay-adblock-video-browser/id6751497996 — iOS Free + subscription / lifetime — 4.7 (1,833) — Video browser with ad blocking and background playback
- Ad Skipper for YouTube — https://apps.apple.com/us/app/ad-skipper-for-youtube/id1542270454 — Mac $1.99 one-time — no ratings — Fast-forwards ads at 16x, mutes and blurs the player
- Buddy for Youtube — https://apps.apple.com/us/app/buddy-for-youtube/id1232605621 — Mac Free — no ratings — Menu-bar YouTube player with Spotlight search and floating window
- 4Ktube Extension — https://apps.apple.com/us/app/4ktube-extension/id1462103187 — Mac $1.99 one-time — no ratings — Opens the page in another browser and flags 4K availability
- Channel Keeper for YouTube — https://apps.apple.com/us/app/channel-keeper-for-youtube/id6450510658 — iOS Free + one-time unlock — 5 (2) — Library of favourite channels with collections and sync
- YT Shorts Blocker — https://apps.apple.com/us/app/yt-shorts-blocker/id6742193472 — iOS $1.99 one-time — 4.5 (2) — Hides Shorts from home, subscriptions, channels and navigation
- CleanTube: Ad & Shorts Blocker — https://apps.apple.com/us/app/cleantube-ad-shorts-blocker/id6760742039 — iOS $1.99 one-time — 1 (1) — Blocks video ads and removes Shorts shelves and search results
- ShortformBlock — https://apps.apple.com/us/app/shortformblock/id6761337873 — iOS Free + tip — 4.4 (14) — Hides Shorts and Community posts; tip supported
- Disable Shorts for YouTube — https://apps.apple.com/us/app/disable-shorts-for-youtube/id6754694677 — iOS $4.99 one-time — 1 (1) — Removes Shorts on home, search and sidebar in three modes
- ShortsBlocker - Remove Shorts — https://apps.apple.com/us/app/shortsblocker-remove-shorts/id6683306924 — Mac Free + subscription / lifetime — no ratings — Removes Shorts; v2.0 adds daily Shorts limits (subscription)
- Shortstop - Block Shorts — https://apps.apple.com/us/app/shortstop-block-shorts/id6741785614 — Mac Free — no ratings — Removes Shorts from home and recommendations (Mac)
- Simple Shorts Blocker — https://apps.apple.com/us/app/simple-shorts-blocker/id6761640934 — iOS $0.99 one-time — no ratings — Hides the Shorts button and home shelf
- Still: Reels & Shorts Blocker — https://apps.apple.com/us/app/still-reels-shorts-blocker/id6784061138 — iOS Free (account sign-in) — 1 (1) — Blocks Shorts, Instagram Reels and Facebook Reels
- MeowTube: Shorts Blocker — https://apps.apple.com/us/app/meowtube-shorts-blocker/id6760180650 — iOS Free + subscription — 5 (1) — Blocks Shorts and short-video feeds on social networks
- Shorts Free: YouTube Focus — https://apps.apple.com/us/app/shorts-free-youtube-focus/id6796934892 — iOS Free + one-time unlock — no ratings — Hides Shorts tab and shelves; redirects Shorts links (Pro extras)
- Focus mode for YouTube — https://apps.apple.com/us/app/focus-mode-for-youtube/id6758026862 — iOS Free (open source) — no ratings — Blocks YouTube Shorts; open source, 11 languages
- FocusTube for Safari — https://apps.apple.com/us/app/focustube-for-safari/id6799667312 — iOS Free + subscription (annual) — no ratings — Hides Shorts entry points; opens Shorts in regular player
- Video Speed Control for Safari — https://apps.apple.com/us/app/video-speed-control-for-safari/id6756773806 — iOS Free + subscription — 4.1 (7) — Speed 0.25x to 16x with slider and presets
- Fast Video Speed for Safari — https://apps.apple.com/us/app/fast-video-speed-for-safari/id6502541176 — iOS $2.99 one-time — 5 (1) — Instant speed change 0.1x to 16x on any site
- Simple Video Speed Controller — https://apps.apple.com/us/app/simple-video-speed-controller/id6806633069 — iOS Free + tip (open source) — no ratings — Speed control on any HTML5 video site; tip supported
- ClipGlider-video speed control — https://apps.apple.com/us/app/clipglider-video-speed-control/id6446220573 — iOS Free + subscription / lifetime — 3.3 (49) — On-page speed panel and tap-to-seek navigation (subscription)
- Stylebot — https://apps.apple.com/us/app/stylebot/id6821400927 — Mac Free (open source) — no ratings — Pick page elements and restyle with custom CSS (Mac)
- Autoscripts - Exec Userscripts — https://apps.apple.com/us/app/autoscripts-exec-userscripts/id6775431941 — iOS $0.29 one-time — no ratings — Local-first userscript manager at $0.29
- Looper & Replay for YouTube — https://apps.apple.com/us/app/looper-replay-for-youtube/id6449761600 — Mac $12.99 one-time — no ratings — Replays videos automatically between chosen start and end times
- PiPifier (Mac listing) — https://apps.apple.com/us/app/pipifier/id1160374471 — Mac Free + tip — no ratings — Puts any HTML5 video into Picture-in-Picture on Mac
- Vanced Tube-Block ads on video — https://apps.apple.com/us/app/vanced-tube-block-ads-on-video/id6773042646 — iOS Free + subscription — 4.6 (221) — Ad-blocking video player app with background play, audio-only
- Vdo Tube - No ads in video — https://apps.apple.com/us/app/vdo-tube-no-ads-in-video/id6747290963 — iOS Free + one-time unlock — 4.5 (734) — Ad-blocking browser app for video sites
- App for YouTube — https://apps.apple.com/us/app/app-for-youtube/id6753933026 — Mac Free + subscription / lifetime — no ratings — Movie and trailer browser with in-app YouTube playback
- SuperX - PIP Extension — https://apps.apple.com/us/app/superx-pip-extension/id6450839791 — iOS Free + subscription / lifetime — 4 (20) — Picture-in-Picture extension that hands video to other apps
- RYTD — https://apps.apple.com/us/app/rytd/id6463305263 — iOS Free — 2.3 (27) — Shows the dislike count next to the dislike button
- Dislike Checker for YouTube + — https://apps.apple.com/us/app/dislike-checker-for-youtube/id6741679691 — Mac Free — no ratings — Fetches dislike counts from Return YouTube Dislike via share sheet
- SocialFocus: Hide Distractions — https://apps.apple.com/us/app/socialfocus-hide-distractions/id1661093205 — iOS $4.99 + subscription — 4 (326) — Hides recommendations, Shorts and comments on YouTube and social sites
- Ghostery AdBlocker for Privacy — https://apps.apple.com/us/app/ghostery-adblocker-for-privacy/id6504861501 — iOS Free + tip (donations) — 4.3 (209) — Ad, popup and tracker blocking plus cookie-banner removal

Long-tail rows (name and URL only):

- iBlocker: Stop ADS — https://apps.apple.com/us/app/iblocker-stop-ads/id1567368739
- Turn Off the Lights for Mobile — https://apps.apple.com/us/app/turn-off-the-lights-for-mobile/id1044081431
- Play: Save Videos Watch Later — https://apps.apple.com/us/app/play-save-videos-watch-later/id1596506190
- Immersive Translate — https://apps.apple.com/us/app/immersive-translate/id6447957425
- PiP - Picture in Picture — https://apps.apple.com/us/app/pip-picture-in-picture/id1635796246
- PiPY -Tube Skip Ad & AdBlocker — https://apps.apple.com/us/app/pipy-tube-skip-ad-adblocker/id1160309830
- MyTV Tube - Player for Youtube — https://apps.apple.com/us/app/mytv-tube-player-for-youtube/id871837501
- SocialRouter–Hide Reels&Shorts — https://apps.apple.com/us/app/socialrouter-hide-reels-shorts/id6758858307
- Scrolless: Feed Blocker — https://apps.apple.com/us/app/scrolless-feed-blocker/id6758870122
- Scrolled: Limit Reels & Shorts — https://apps.apple.com/us/app/scrolled-limit-reels-shorts/id6815860237
- Slowth: Short Video Blocker — https://apps.apple.com/us/app/slowth-short-video-blocker/id6764140763
- ShortsKiller — https://apps.apple.com/us/app/shortskiller/id6762032154
- Detoxify - Short Block YT — https://apps.apple.com/us/app/detoxify-short-block-yt/id6740556197
- tubetidy: Hide Shorts & Feed — https://apps.apple.com/us/app/tubetidy-hide-shorts-feed/id6780741579
- StillTabs: Block Reels, Shorts — https://apps.apple.com/us/app/stilltabs-block-reels-shorts/id6761367777
- NoShorts for Safari — https://apps.apple.com/us/app/noshorts-for-safari/id6758736915
- Remove distractions on YouTube — https://apps.apple.com/us/app/remove-distractions-on-youtube/id6633443341
- CleanTube for Youtube — https://apps.apple.com/us/app/cleantube-for-youtube/id6762927986
- HideShorts for YouTube — https://apps.apple.com/us/app/hideshorts-for-youtube/id6757431862
- SpeedByGenre for YouTube — https://apps.apple.com/us/app/speedbygenre-for-youtube/id6759827413
- Timestamps & Summaries for YT — https://apps.apple.com/us/app/timestamps-summaries-for-yt/id6763356148
- TodayTube — https://apps.apple.com/us/app/todaytube/id6776426080
- MiniTube Player — https://apps.apple.com/us/app/minitube-player/id1442926006
- Weber - Video Speed Extention — https://apps.apple.com/us/app/weber-video-speed-extention/id6753136256
- Video Speedifier — https://apps.apple.com/us/app/video-speedifier/id6777611041
- Video Looper - for Safari — https://apps.apple.com/us/app/video-looper-for-safari/id6477761211
- Looper - Repeat videos — https://apps.apple.com/us/app/looper-repeat-videos/id1539200207
- Ad Skipper for YT — https://apps.apple.com/us/app/ad-skipper-for-yt/id6463863543
- Ad Blocker for Youtube. — https://apps.apple.com/us/app/ad-blocker-for-youtube/id6744957833
- VPN & Ad Blocker for Safari — https://apps.apple.com/us/app/vpn-ad-blocker-for-safari/id1584644148
- Nomoads: Ad & Tracker Blocker — https://apps.apple.com/us/app/nomoads-ad-tracker-blocker/id6759786049
- So Annoying! Ad Blocker — https://apps.apple.com/us/app/so-annoying-ad-blocker/id6808265336
- YouTube, FB, LinkedIn Blocker — https://apps.apple.com/us/app/youtube-fb-linkedin-blocker/id6782716865
- Clean Tube — https://apps.apple.com/us/app/clean-tube/id6757726426
- Video Declutter for Safari — https://apps.apple.com/us/app/video-declutter-for-safari/id6780689402
- FocusFeed for YouTube — https://apps.apple.com/us/app/focusfeed-for-youtube/id6771856915
- Kids Guardian: Safe YouTube — https://apps.apple.com/us/app/kids-guardian-safe-youtube/id6758027372
- Hooks for YouTube - PiP Video — https://apps.apple.com/us/app/hooks-for-youtube-pip-video/id6480011338
- PIP - Video Player for Youtube — https://apps.apple.com/us/app/pip-video-player-for-youtube/id6747489810
- PocketTube Playlist for Safari — https://apps.apple.com/us/app/pockettube-playlist-for-safari/id1592569440
- Ad blocker - Magic Lasso — https://apps.apple.com/us/app/ad-blocker-magic-lasso/id1198047227
- Purple Crow For Safari — https://apps.apple.com/us/app/purple-crow-for-safari/id6761481948
- Picture-in-Picture Tool (PiP) — https://apps.apple.com/us/app/picture-in-picture-tool-pip/id1565547115
- PiPer — https://apps.apple.com/us/app/piper/id1421915518
- Floating: Picture In Picture — https://apps.apple.com/us/app/floating-picture-in-picture/id1508833245
- Hover for Safari — https://apps.apple.com/us/app/hover-for-safari/id1540705431
- SmartPlay for Safari — https://apps.apple.com/us/app/smartplay-for-safari/id1545815826
- Trancy ET- AI Translator — https://apps.apple.com/us/app/trancy-et-ai-translator/id6475386403
- Dual Subtitles for YouTube — https://apps.apple.com/us/app/dual-subtitles-for-youtube/id6748589138
