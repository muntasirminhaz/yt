# Firefox Add-ons (AMO) YouTube survey

- Date: 2026-11-03
- Source: AMO public API v5 (addons.mozilla.org/api/v5), app=firefox; search `q=youtube&sort=users` pages 1-2 plus targeted searches per feature category
- Scope: every advertised feature recorded, including features that cannot work in Safari; downloaders included and flagged
- Images: .atlas/research/store-images/firefox/`<slug>`/NN.png (max 6 per add-on; skipped for the five generic multi-site blockers: Adblock Plus, AdGuard AdBlocker, AdBlock for Firefox, AdBlocker Ultimate, Ghostery)
- Status: COMPLETE (93 add-on sections, Feature matrix, Summary)
- Notes on data: "Recommended" = AMO `promoted` category; "Repo" = source URL found in the listing text; "Feature tags" use a fixed vocabulary (see Feature matrix legend)
- Looper for YouTube: no public AMO listing (API slug `looper-for-youtube` answers 401, not disabled, so it is unlisted or non-public; search finds nothing); stand-ins are covered in the Loopers group
- Method: listing text, preview captions and declared permissions come straight from the AMO API; "Features" are condensed from the listing; items marked "seen only in reviews" or "beyond the AMO text" are not in the listing
- Reviews: for the 10 most-used YouTube-specific add-ons (Return YouTube Dislike, SponsorBlock, Enhancer for YouTube, AdBlocker for YouTube, Easy Youtube Video Downloader Express, SaveFrom.net helper, Video Background Play Fix, YouTube NonStop, Unhook, YouTube High Definition) the latest 50 plus the 1-star and 2-star pools were read; uBlock Origin got a keyword scan of its latest 400 reviews for "youtube"
- Fields: Badge = AMO promoted category (recommended, spotlight, line, none); Repo = first source URL found in the listing; users = AMO average daily users
- Not covered: YouTube-only downloaders ranked below the top 30 (for example Youtube Downloader 12k, YouTube Download Plus 19.6k, YouTube mp3 Downloader 13k) and YouTube Music-only add-ons

## Checklist

Tier 1, named must-cover:
- [x] `sponsorblock`
- [x] `enhancer-for-youtube`
- [x] `return-youtube-dislikes`
- [x] `dearrow`
- [x] `youtube-high-definition`
- [x] `youtube-recommended-videos` (Unhook)
- [x] `particle-iridium` (Iridium for YouTube)
- [x] `ublock-origin` (YouTube points only)
- [x] `videospeed` (Video Speed Controller)
- [x] `youtube-nonstop`
- [x] `blocktube`
- [x] `untrap-for-youtube`

Tier 2, remaining top-30 YouTube-specific results of `q=youtube` by users:
- [x] `adblock-for-youtube`
- [x] `easy-youtube-video-download` (downloader)
- [x] `savefromnet-helper` (downloader)
- [x] `video-background-play-fix`
- [x] `hide-youtube-shorts`
- [x] `youtube-addon` (Improve YouTube / ImprovedTube)
- [x] `h264ify`
- [x] `youtube-shorts-block`
- [x] `control-panel-for-youtube`
- [x] `youtube_downloader_webx` (downloader)
- [x] `youtube-no-translation`
- [x] `vidiq-vision-youtube`
- [x] `ambient-light-for-youtube`
- [x] `adblock-for-youtube-tm`
- [x] `youtube_downloader` (downloader)
- [x] `youtube-anti-translate`
- [x] `youtube-suite-search-fixer`
- [x] `youtube-mp3-converter` (downloader)
- [x] `youtube-downloader-udl-helper` (downloader)
- [x] `youtube-subscription-groups` (PocketTube)
- [x] `youtube-converter-button` (downloader)

Tier 3, category coverage:
- Shorts blockers: [x] `remove-youtube-shorts` [x] `ytb-shorts-blocker` [x] `youtube-shorts-blocker-pro` [x] `yt-shorts-blocker` [x] `block-yt-shortvideo` [x] `shorts-block` [x] `shortsless`
- Auto-quality: [x] `auto-hd-4k-8k-for-youtube` [x] `youtube-hd-1` [x] `enhanced-h264ify`
- Audio-only / background play: [x] `backstage-play` [x] `playback-helper-youtube-vimeo` [x] `youtube-background-play` [x] `youtube-audio`
- Comment filters and tools: [x] `remove-youtube-s-suggestions` [x] `youtube-comment-search` [x] `ycs-continued` [x] `hyperchat`
- Clean YouTube: [x] `df-youtube` [x] `tweaks-for-youtube` [x] `youtube-tweaks` [x] `youtube-enhancer-vc` [x] `less-mixes-for-youtube` [x] `youtube-row-fixer-extension` [x] `youtube-redux` [x] `socialfocus` [x] `youtube-levelup`
- Ad skippers and YouTube blockers: [x] `youtube-adblock` [x] `youtube-ad-auto-skipper` [x] `yt-ad-speedup-skip-ads-faster` [x] `ad-speedup-skip-video-ads-fast` [x] `youtube-ad-skipper` [x] `skipit-adblocker-for-youtube` [x] `litetube-adfree`
- Generic blockers (YouTube points only): [x] `adblock-plus` [x] `adguard-adblocker` [x] `adblock-for-firefox` [x] `adblocker-ultimate` [x] `ghostery`
- Loopers (stand-ins for Looper for YouTube): [x] `youtube-video-looper` [x] `youtube-parts-looper` [x] `youtube-repeat-button` [x] `rotate-youtube-video` [x] `looper`
- Speed: [x] `global-speed`
- Other YouTube-specific: [x] `youtube-screenshot-button` [x] `annotations-restored` [x] `youtube-summary-with-chatgpt` [x] `youtube-thumbnail-rating-bar` [x] `youtube-dislike-counter` [x] `proxtube` [x] `regretsreporter` [x] `theater-mode-for-youtube` [x] `youtube-subtitle-downloader`

- Added during survey (found through category searches): [x] `turn-off-the-lights` [x] `youtube-auto-hd-fps` [x] `clickbait-remover-for-youtube` [x] `volume-booster-for-youtube` [x] `auto-youtube-shorts-scroller` [x] `youtube-anti-translate-mv3`


## Top-30 YouTube-specific results of `q=youtube` by daily users

# = rank among YouTube-specific hits; Raw rank = position among all `q=youtube` hits sorted by users. Downloaders stay in and are flagged in their sections.

| # | Raw rank | Add-on | Users | Rating |
|---:|---:|---|---:|---:|
| 1 | 7 | Return YouTube Dislike (`return-youtube-dislikes`) | 890,739 | 4.46 (5,339) |
| 2 | 8 | SponsorBlock - Skip Sponsorships on YouTube (`sponsorblock`) | 815,906 | 4.81 (3,244) |
| 3 | 9 | Enhancer for YouTube™ (`enhancer-for-youtube`) | 598,570 | 4.66 (12,438) |
| 4 | 10 | AdBlocker for YouTube™ (`adblock-for-youtube`) | 516,837 | 3.85 (1,377) |
| 5 | 12 | Easy Youtube Video Downloader Express (`easy-youtube-video-download`) | 464,876 | 4.14 (20,081) |
| 6 | 13 | SaveFrom.net helper all-in-1 / youtube downloader (`savefromnet-helper`) | 334,726 | 4.11 (4,775) |
| 7 | 14 | Video Background Play Fix (`video-background-play-fix`) | 228,452 | 4.46 (1,555) |
| 8 | 16 | YouTube NonStop (`youtube-nonstop`) | 178,432 | 4.15 (612) |
| 9 | 17 | Unhook: Remove YouTube Recommended Videos Comments (`youtube-recommended-videos`) | 169,857 | 4.63 (1,201) |
| 10 | 18 | YouTube High Definition (`youtube-high-definition`) | 163,369 | 3.75 (1,400) |
| 11 | 22 | Hide Youtube-Shorts (`hide-youtube-shorts`) | 106,263 | 4.55 (319) |
| 12 | 23 | 'Improve YouTube!'  🎧 (For YouTube & Video) (`youtube-addon`) | 101,335 | 4.28 (907) |
| 13 | 26 | h264ify (`h264ify`) | 74,305 | 4.42 (236) |
| 14 | 29 | Youtube-shorts block (`youtube-shorts-block`) | 63,231 | 4.46 (298) |
| 15 | 30 | Control Panel for YouTube (`control-panel-for-youtube`) | 62,120 | 4.54 (194) |
| 16 | 31 | YouTube Video and Audio Downloader (WebEx) (`youtube_downloader_webx`) | 59,721 | 3.76 (1,861) |
| 17 | 34 | YouTube No Translation (`youtube-no-translation`) | 51,414 | 4.86 (391) |
| 18 | 35 | vidIQ Vision for YouTube (`vidiq-vision-youtube`) | 49,900 | 4.05 (323) |
| 19 | 38 | Ambient light for YouTube™ (`ambient-light-for-youtube`) | 48,672 | 4.89 (84) |
| 20 | 45 | Adblock for Youtube™ (`adblock-for-youtube-tm`) | 38,212 | 4.37 (1,696) |
| 21 | 47 | YouTube Downloader (`youtube_downloader`) | 36,959 | 2.99 (607) |
| 22 | 52 | DeArrow - Better Titles and Thumbnails on YouTube (`dearrow`) | 34,217 | 3.98 (396) |
| 23 | 53 | YouTube Anti Translate (`youtube-anti-translate`) | 33,873 | 4.19 (231) |
| 24 | 54 | YouTube Search Fixer (`youtube-suite-search-fixer`) | 33,531 | 4.37 (175) |
| 25 | 55 | BlockTube (`blocktube`) | 33,264 | 3.88 (534) |
| 26 | 56 | YouTube mp3 (`youtube-mp3-converter`) | 28,758 | 3.45 (300) |
| 27 | 59 | YouTube Downloader (UDL Helper) (`youtube-downloader-udl-helper`) | 26,710 | 4.54 (844) |
| 28 | 60 | UnTrap for YouTube (`untrap-for-youtube`) | 23,362 | 3.52 (217) |
| 29 | 61 | PocketTube: Youtube Subscription Manager (`youtube-subscription-groups`) | 21,945 | 4.15 (707) |
| 30 | 64 | YouTube Converter Button (`youtube-converter-button`) | 20,207 | 4.17 (604) |

Skipped in the first 64 hits as not YouTube-specific (general ad blockers, VPNs, translators, generic downloaders, other sites): Adblock Plus (2,832,371); AdGuard AdBlocker (1,840,239); Video Download Helper (1,834,442); AdBlock for Firefox (1,387,728); AdBlocker Ultimate (1,050,924); Ghostery – Privacy Ad Blocker (1,016,959); BetterTTV (481,623); Ecosia — The search engine that plants trees 🌱 (227,070); DeepL: AI translator and writing assistant (159,043); Video Downloader professional (139,624); Immersive Translate -Translate Website, PDF, Video (111,157); Auto Tab Discard (100,040); 7TV (77,476); Turn Off the Lights for Firefox (65,823); Global Speed - Video Speed Control (65,140); Allow Right-Click (56,914); Imagus (53,396); FastProxy - Россия (49,712); SoundFixer (48,984); Netflix Party is now Teleparty (47,811); Download Video and Flash - HD Download (46,999); Dark Mode (WebExtension) (45,239); Feedbro (41,136); cookies.txt (40,886); Media Downloader Unleashed!! (39,537); CyberGhost VPN Free Proxy (37,816); Group Speed Dial (36,747); Tab Auto Refresh (35,241); Shinigami Eyes (34,750); ZenMate Free VPN (34,242); Song Identifier (28,219); VPN add-on (27,595); Stylish - Custom themes for any website (20,561); Time Tracker - Web Habit Builder (20,336).

---

## SponsorBlock - Skip Sponsorships on YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/
- Daily users: 815,906 | Rating: 4.81 (3,244 ratings, 922 with text) | Version: 6.1.7 | Last updated: 2026-07-13 | Badge: recommended
- Repo: https://github.com/ajayyy/SponsorBlock | License: GNU Lesser General Public License v3.0 only | Price/model: free; open source; donations via GitHub Sponsors
- Declared permissions: `API: storage, scripting, unlimitedStorage; hosts: https://sponsor.ajay.app/*, https://*.youtube.com/*, https://www.youtube-nocookie.com/embed/*; optional: *://*/*`
- Feature tags: sponsor-skip, shortcuts, progress
- Features:
  - Skip sponsors, intros, outros, subscription reminders and other annoying parts of YouTube videos
  - Crowdsourced: anyone submits start and end times of segments; once one person submits, everyone with the extension skips them
  - Automatic skip of known sponsor segments (looked up in the community database on each video page)
  - Skip non-music sections of music videos
  - Report/submit new sponsor segments from inside the video page
  - Supports Invidious, old YouTube layout and mobile YouTube
  - User-added third-party YouTube front-end instances (asks permission per added site)
  - Beyond the AMO text (SponsorBlock site, flagged as known): segment categories (sponsor, self-promotion, interaction reminder, intro, endcards, preview/recap, filler, highlight, non-music), per-category auto-skip / manual-skip / show-in-seekbar, colored segments on the seek bar, skip notice with undo, vote up/down on segments, channel whitelist, keyboard shortcuts for submit/skip, time-saved statistics, custom server address
- External service/API: yes, required: sponsor.ajay.app (public segment database; segment lookup, submissions, votes, stats); extension is useless offline
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: "YouTube is basically unwatchable without it", "must-have", works even on low-view videos, active community (praise in English, Russian, Polish, Portuguese)
  - Praise: free and does the one job well; users pair it with uBlock Origin
  - Complaint: unreliable/inconsistent skipping (segments shown on the bar but not skipped, stopped working after YouTube updates)
  - Complaint: depends on the server (outages, 403 "mass spam attack" submission restrictions, segments not loading)
  - Complaint: wrong or mislabeled segments, especially on non-English videos; moderators approve bad segments
  - Complaint: Firefox for Android issues, submission UI clumsy (cannot delete own segments, lost submissions), whitelist behavior changed
  - Misattribution: some low scores are from users expecting it to block YouTube ads (it does not)
- Screenshots: .atlas/research/store-images/firefox/sponsorblock/01.png, .atlas/research/store-images/firefox/sponsorblock/02.png, .atlas/research/store-images/firefox/sponsorblock/03.png

## Enhancer for YouTube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/
- Daily users: 598,570 | Rating: 4.66 (12,438 ratings, 5,344 with text) | Version: 2.0.136 | Last updated: 2026-08-04 | Badge: recommended
- Repo: none listed | License: Proprietary License | Price/model: free; proprietary (closed source), no paid tier listed
- Declared permissions: `API: storage; hosts: *://www.youtube.com/*, *://www.youtube.com/embed/*, *://www.youtube.com/live_chat*, *://www.youtube.com/shorts/*; data collection declared: required=none, optional=none; data collection declared: required=none, optional=none`
- Feature tags: speed, quality, volume, loop, autoplay, cinema, transform, theme, hide-ui, hide-feed, hide-comments, hide-shorts, screenshot, shortcuts, pip-popup, layout, shorts-tools
- Features:
  - Adjust playback speed, quality, volume and more with the mouse wheel or keyboard shortcuts
  - Default playback speed, adjustable from 0.07x to 16x while watching
  - Default playback quality for videos, playlists and embedded videos
  - Volume booster: up to 10x audio boost, plus bass boost
  - Enhanced loop mode: repeat a specific part or the whole video
  - Autoplay control: tune or disable YouTube's autoplay features
  - Video formats: disable high frame rate (60fps) formats
  - Video filters: brightness, contrast, color and more, independent of monitor settings
  - Custom themes to restyle YouTube
  - Cinema mode: dim everything around the player
  - Wide player: expand beyond Theater Mode, or fill the window without going full screen
  - Mini player: keep watching while reading comments
  - Block distractions: hide end screens, info cards, recommendations, related videos, chat, comments
  - YouTube Shorts: hide Shorts, or watch Shorts like regular videos
  - Screenshot: capture high-quality frames from the video
  - Customizable keyboard shortcuts for YouTube controls
  - "And more" (listing is deliberately short)
  - Seen only in reviews (not in listing): videos-per-row grid setting, player control buttons placed in or below the video, ambient mode and "disable experiments" (Chromium build only), closed-caption default option requested
- External service/API: none; permissions are storage plus youtube.com pages (watch, embed, live_chat, shorts) only
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: very complete feature set, "almost mandatory", disables nagging autoplay, long-time users across many languages
  - Praise: fixes subscription grid rows and removes home-page Shorts
  - Complaint: breaks whenever YouTube changes its UI (Oct 2026 UI update, Shorts pages missing comments/likes), then recovers after a patch
  - Complaint: settings not honored: preferred quality ignored (1440p becomes 720p), Shorts not hidden, autoplay disable fails, speed override glitches
  - Complaint: Firefox build lags behind the Chrome build (3.0 features such as ambient and "disable experiments" missing on Firefox)
  - Complaint: buttons/pause stop working, videos pause every 10-20 seconds, slow page loads, rows stuck at 3 per line
  - Complaint: update pop-up on every YouTube tab cannot be dismissed without reload; one report of triggering YouTube ad-block detection
- Screenshots: .atlas/research/store-images/firefox/enhancer-for-youtube/01.png, .atlas/research/store-images/firefox/enhancer-for-youtube/02.png, .atlas/research/store-images/firefox/enhancer-for-youtube/03.png, .atlas/research/store-images/firefox/enhancer-for-youtube/04.png, .atlas/research/store-images/firefox/enhancer-for-youtube/05.png

## Return YouTube Dislike
- URL: https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/
- Daily users: 890,739 | Rating: 4.46 (5,339 ratings, 1,833 with text) | Version: 4.1.3 | Last updated: 2026-11-02 | Badge: recommended
- Repo: https://github.com/Anarios/return-youtube-dislike | License: GNU General Public License v3.0 only | Price/model: free; open source; Patreon-funded "RYD Premium" upsell is shown in-page (per reviews)
- Declared permissions: `API: activeTab, storage, identity; hosts: *://*.youtube.com/*, *://returnyoutubedislikeapi.com/*; data collection declared: required=none, optional=browsingActivity, websiteContent, websiteActivity, personallyIdentifyingInfo, authenticationInfo`
- Feature tags: dislikes
- Features:
  - Restores the visible dislike count on YouTube videos (YouTube removed public dislikes on 2021-12-13)
  - Estimates dislikes from archived pre-removal like/dislike data plus the votes of extension users, plus the visible like count
  - Accuracy improves as more people use it; unpopular videos uploaded after 2021-12-13 are less accurate
  - Your Like/Dislike click is sent as a vote; vote submission can be turned off in settings
  - Optional sign-in with Patreon or GitHub (authentication information, optional)
  - Random generated user ID used to count votes, not linked to Google/YouTube account
  - Sends the video ID of each opened YouTube video to its API to fetch the count
  - Open source, Firefox Recommended extension; help site and GitHub issue tracker
  - Seen only in reviews: popup/inline promo for "RYD Premium" with "raw counts" (appeared in comment sections and a popup window)
- External service/API: yes, required: returnyoutubedislikeapi.com (dislike counts, votes); the listing explains Firefox's new data-collection consent labels (personally identifying info, browsing activity, website content, website activity) as broad Mozilla categories
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: "YouTube experience is incomplete without it", restores a lost signal, used for years without issues
  - Praise: several 5-star reviewers defend the privacy labels after reading the description and permissions
  - Complaint: Firefox's new data-collection consent prompt (browsing activity, PII) triggered a wave of 1-star reviews; users refuse to update
  - Complaint: in-page Patreon / "RYD Premium" promo popups seen as intrusive ads
  - Complaint: slowdowns, memory and CPU use, delayed video start, buffering issues
  - Complaint: Firefox release stale for about two years (v3.0.0.18 until 2026): thumbs-down icon missing after YouTube UI changes, broken on Firefox Android, interferes with "save to playlist" menu
  - Complaint: counts are estimates from extension users, not real YouTube dislikes
- Screenshots: .atlas/research/store-images/firefox/return-youtube-dislikes/01.png, .atlas/research/store-images/firefox/return-youtube-dislikes/02.png

## DeArrow - Better Titles and Thumbnails on YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/dearrow/
- Daily users: 34,217 | Rating: 3.98 (396 ratings, 208 with text) | Version: 2.3.10 | Last updated: 2026-07-17 | Badge: none
- Repo: https://github.com/ajayyy/DeArrow | License: GNU Lesser General Public License v3.0 only | Price/model: "paid (if you want)": $1 unlimited license key, or click "I can't/don't want to pay" (soft paywall, client side); open source
- Declared permissions: `API: storage, unlimitedStorage, alarms, scripting; hosts: https://sponsor.ajay.app/*, https://dearrow-thumb.ajay.app/*, https://*.googlevideo.com/*, https://*.youtube.com/*, https://www.youtube-nocookie.com/embed/*, https://dearrow.ajay.app/*; optional: *://*/*`
- Feature tags: thumbs
- Features:
  - Crowdsource better, descriptive titles and thumbnails on YouTube to reduce sensationalism and clickbait
  - Titles are arbitrary user text; thumbnails are screenshots from specific video timestamps; both are user submitted and voted on
  - Submit and vote on titles/thumbnails for each video from a submission menu; you can vote for the original thumbnail if it is good
  - Fallback when no submission exists: auto-format the original title to a chosen casing (Title Case, Sentence case; acronyms and proper names kept), configurable or disable-able
  - Fallback thumbnail: screenshot at a truly random timestamp from its own server (not YouTube's face-favoring auto thumbnails); checks the SponsorBlock database so the frame is not inside a sponsor segment; option to show original thumbnail by default
  - Positioned against "Clickbait Remover for YouTube": crowdsourcing first, smarter casing, random frames
  - Works on third-party YouTube front-ends you add yourself (asks permission per site; Invidious support unfinished)
  - Seen only in reviews: remove-emojis option, button to show the original title/thumbnail, per-element settings, 6-hour trial/activation prompt
- External service/API: yes, required: sponsor.ajay.app / dearrow.ajay.app (title and thumbnail submissions, votes), dearrow-thumb.ajay.app (generated thumbnails), googlevideo.com (frame fetch)
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: makes YouTube less noisy, "up there with SponsorBlock and uBlock Origin", random-frame thumbnails give a better idea of the content
  - Praise: breakage after YouTube changes is usually fixed quickly
  - Complaint: payment/activation scheme (trial that deactivates, missing activation button, "scummy" soft paywall) is the top 1-star reason
  - Complaint: many videos have no submissions, so little changes; community titles are verbose or pedantic, edits to already fine titles
  - Complaint: breaks YouTube layout or hangs/slows the browser, heavy bandwidth on the history page, Firefox mobile titles not changing
  - Complaint: settings not granular enough, remove-emojis glitch, requests for an extension-UI language setting
- Screenshots: .atlas/research/store-images/firefox/dearrow/01.png, .atlas/research/store-images/firefox/dearrow/02.png, .atlas/research/store-images/firefox/dearrow/03.png

## YouTube High Definition
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-high-definition/
- Daily users: 163,369 | Rating: 3.75 (1,400 ratings, 520 with text) | Version: 118.0.9 | Last updated: 2024-09-02 | Badge: recommended
- Repo: none listed | License: GNU Lesser General Public License v3.0 only | Price/model: free; closed source listing (LGPL-3.0 license stated, no repo link)
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, <all_urls>`
- Feature tags: quality, volume, speed, autoplay, cinema, captions, layout
- Features:
  - Automatically play all YouTube videos in the highest resolution possible
  - Preferred resolution selectable: 4K, 1440p, 1080p, 720p, 480p, 360p, 240p, 144p
  - Change video player size
  - Control auto-mute volume and auto-stop of video play
  - HD playback also for videos embedded on external sites (Facebook, Twitter, Reddit and others)
  - Set a preferred volume level for all videos
  - Improve music on YouTube by always playing the best sound quality automatically
  - Seen only in reviews: automatic theater mode, default playback speed, disable autoplay, subtitles off, auto-expand description, requests for default FPS and a fallback resolution
- External service/API: none; permissions: storage, youtube.com and youtube-nocookie.com, plus an all-sites host permission (the listing needs it for embedded players)
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: does a thing YouTube refuses to offer (set a preferred resolution); "works as expected" when it works
  - Complaint: stopped working (YouTube keeps choosing quality by itself); last update 2024-09, widespread "non-functional" reports from 2025 to 2026; reviewers recommend "YouTube Auto HD + FPS" instead
  - Complaint: asks for read/change data on all websites, shows the green privacy dot, called suspicious
  - Complaint: theater mode / player size setting not sticking, speed setting locked or reset on every video, settings page cannot be reopened
  - Complaint: causes buffering or stuck playback, breaks Shorts comments on Android, does not work on embedded videos or Firefox mobile
- Screenshots: .atlas/research/store-images/firefox/youtube-high-definition/01.png

## Unhook: Remove YouTube Recommended Videos Comments
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-recommended-videos/
- Daily users: 169,857 | Rating: 4.63 (1,201 ratings, 537 with text) | Version: 1.6.9 | Last updated: 2026-04-09 | Badge: recommended
- Repo: none listed | License: All Rights Reserved | Price/model: free; closed source ("All Rights Reserved"); contribution/donation link on developer site
- Declared permissions: `API: storage, webRequest; hosts: https://www.youtube.com/*, https://m.youtube.com/*`
- Feature tags: hide-feed, hide-comments, hide-shorts, hide-ui, autoplay, search, layout, focus
- Features:
  - Hide related videos, comments, video suggestions wall, homepage recommendations, trending tab and other distractions
  - Toggle options through the popup to build a custom YouTube experience
  - Compatible with mobile YouTube (m.youtube.com) through Firefox for Android; also works on video embeds
  - Option list: hide homepage feed; hide video sidebar; hide recommended (related videos); hide live chat; hide playlist
  - Option list: hide end-screen videowall; hide end-screen cards; hide comments; hide profile photos
  - Option list: hide Mix/Radio playlists; hide merch, tickets, offers; hide video info
  - Option list: hide video buttons bar (share, likes, dislikes); hide channel (profile + subscribe); hide video description
  - Option list: hide top header; hide notification bell
  - Option list: hide irrelevant search results ("Related to your search", "Latest from", "Searches related to", "People also search for")
  - Option list: hide Explore and Trending; hide More from YouTube; hide Shorts tab
  - Option list: hide and redirect Subscriptions (replace home with subscriptions)
  - Option list: disable autoplay; disable annotations
  - Feedback form to request features; also on Chrome and Edge
- External service/API: none stated; permissions: storage, webRequest, youtube.com and m.youtube.com; one review alleges a bundled "MellowTel-js" scraper (unverified, 2025-07)
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: "makes YouTube less distracting", escapes recommendation rabbit holes, fine-grained toggles (e.g. keep related videos but drop playlists and live chat), home replaced by subscriptions, works on Firefox Android
  - Complaint: not updated since 2024-04 per many reviews; features rot with each YouTube update (end-screen recommendations return, "hide Explore" hides the You section, annotations/Shorts not hidden)
  - Complaint: breaks video playback, full screen or captions, freezes browser, embedded videos broken, breaks PocketTube
  - Complaint: closed source, license prohibits forking; accused of being a closed fork of Remove YouTube Suggestions; MellowTel scraping allegation
  - Complaint: unclickable videos, empty space left when only "hide recommended" is on; users point to UnTrap for YouTube as a maintained alternative
- Screenshots: .atlas/research/store-images/firefox/youtube-recommended-videos/01.png, .atlas/research/store-images/firefox/youtube-recommended-videos/02.png, .atlas/research/store-images/firefox/youtube-recommended-videos/03.png, .atlas/research/store-images/firefox/youtube-recommended-videos/04.png, .atlas/research/store-images/firefox/youtube-recommended-videos/05.png

## Iridium for YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/particle-iridium/
- Daily users: 1,060 | Rating: 3.95 (627 ratings, 285 with text) | Version: 2.1.2 | Last updated: 2024-09-18 | Badge: none
- Repo: https://github.com/ParticleCore/Iridium | License: Custom License | Price/model: free; open source (custom license); donation link
- Declared permissions: `API: storage; hosts: *://www.youtube.com/*`
- Feature tags: filter, autoplay, quality, speed, theme, cinema, adblock, hide-shorts, volume, layout, playlist, codec
- Features:
  - Blacklist channels (hide their videos)
  - Reverse playlists
  - Always visible player (player stays in view while scrolling)
  - Control video autoplay
  - Default playback quality and speed
  - Dark theme control
  - Super theater mode
  - HFR control (high frame rate formats)
  - Monetization info (shows whether a video is monetized)
  - Ad control / ad manager
  - Remove short videos (disable Shorts)
  - Scroll to change video volume
  - Video focus (dims everything but the player, per preview caption)
  - "And more"; Version 2 is a rewrite (release notes on GitHub)
- External service/API: none; privacy text says data stays in the browser or sync storage and nothing leaves youtube.com; permissions: storage, www.youtube.com
- Review highlights: not fetched (about 1,060 daily users, outside the top 10)
- Screenshots: .atlas/research/store-images/firefox/particle-iridium/01.png, .atlas/research/store-images/firefox/particle-iridium/02.png, .atlas/research/store-images/firefox/particle-iridium/03.png, .atlas/research/store-images/firefox/particle-iridium/04.png, .atlas/research/store-images/firefox/particle-iridium/05.png

## uBlock Origin
- URL: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
- Daily users: 11,357,478 | Rating: 4.80 (22,271 ratings, 5,893 with text) | Version: 1.75.2 | Last updated: 2026-11-02 | Badge: recommended
- Repo: https://github.com/gorhill/uBlock#ublock-origin | License: GNU General Public License v3.0 only | Price/model: free; open source (GPLv3); "for users by users", no donation ask
- Declared permissions: `API: alarms, dns, menus, privacy, storage, tabs, unlimitedStorage, webNavigation, webRequest, webRequestBlocking, <all_urls>; hosts: http://*/*, https://*/*, file://*/*, https://easylist.to/*, https://*.fanboy.co.nz/*, https://filterlists.com/* (+6 more); data collection declared: required=none, optional=none`
- Feature tags: adblock, anti-adblock, hide-ui, filter
- Features (listing text does not mention YouTube; this section records YouTube-relevant points only):
  - Listing: wide-spectrum content blocker, CPU and memory efficient; out of the box blocks ads, trackers, coin miners, popups via EasyList, EasyPrivacy, Peter Lowe's ad server list, Online Malicious URL Blocklist and uBO's own lists
  - Listing: optional lists (EasyList Cookie, Fanboy Annoyances, AdGuard Annoyances, Dan Pollock's hosts file and others); point-and-click local/global JavaScript blocking; own global or local rules; unified logger; default and default-deny popup modes
  - YouTube, per reviews: blocks YouTube video ads (including YouTube embedded in other sites such as Reddit) and homepage ad slots through its filter lists
  - YouTube, per reviews: constant arms race with YouTube's anti-adblock enforcement; users re-add the extension or update filter lists after breakage, and add GitHub-hosted user scripts/filters for YouTube
  - YouTube, per reviews: element picker and custom cosmetic rules are used to hide YouTube elements; "works with SponsorBlock" is a common pairing
  - YouTube, per reviews: Firefox keeps full blocking ability (webRequestBlocking); Chrome users note uBlock Origin is gone from Chrome
  - Not a YouTube feature but relevant: YouTube treats ad blocking as a Terms-of-Service violation and shows an ad-block wall
- External service/API: filter lists downloaded from third-party hosts (easylist.to, github.com/uBlockOrigin, filterlists.com, fanboy.co.nz and others); no account
- Review highlights (latest 400 reviews scanned for "youtube", 15 matched):
  - Praise: "blocks all YouTube ads", "never seen a single ad", faster start than other blockers that freeze the screen
  - Complaint: YouTube periodically defeats it ("truly an arms race"); homepage ads slip through; search bar disappears after a YouTube change
  - Complaint: reports of "does not work on YouTube" (1-star) conflicting with many 5-star reports; embedded YouTube in Reddit sometimes not blocked
- Screenshots: .atlas/research/store-images/firefox/ublock-origin/01.png, .atlas/research/store-images/firefox/ublock-origin/02.png, .atlas/research/store-images/firefox/ublock-origin/03.png, .atlas/research/store-images/firefox/ublock-origin/04.png, .atlas/research/store-images/firefox/ublock-origin/05.png, .atlas/research/store-images/firefox/ublock-origin/06.png

## Video Speed Controller
- URL: https://addons.mozilla.org/en-US/firefox/addon/videospeed/
- Daily users: 104,205 | Rating: 4.53 (804 ratings, 329 with text) | Version: 0.6.3.3 | Last updated: 2021-04-06 | Badge: none
- Repo: https://github.com/codebicycle/videospeed | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: storage; hosts: http://*/*, https://*/*, file:///*`
- Flags: generic (any HTML5 video, not YouTube-only); stale since 2021-04
- Feature tags: speed, shortcuts
- Features:
  - Quick playback-speed adjustment, plus rewind to hear the last seconds again, on any page with HTML5 video
  - Speed indicator in the top-left corner of the video player; hover reveals controls to accelerate, slow down or rewind
  - Keyboard shortcuts: S decrease speed, D increase speed, R reset speed, Z rewind 10 seconds, X advance 10 seconds, V show/hide controller
  - Settings page: change shortcuts, change the speed increment, remember playback speed for future videos
  - Works on YouTube (preview caption "VideoSpeed on Youtube") and any other HTML5 video site
- External service/API: none; permissions: storage plus all http(s) and file URLs
- Review highlights: not fetched (outside the top 10 YouTube-specific add-ons)
- Screenshots: .atlas/research/store-images/firefox/videospeed/01.png, .atlas/research/store-images/firefox/videospeed/02.png

## YouTube NonStop
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-nonstop/
- Daily users: 178,432 | Rating: 4.15 (612 ratings, 224 with text) | Version: 0.9.2 | Last updated: 2023-10-31 | Badge: recommended
- Repo: https://github.com/lawfx/YoutubeNonStop | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: none; hosts: https://www.youtube.com/*, https://music.youtube.com/*`
- Feature tags: nonstop, bg-play
- Features:
  - Auto-clicks the "Video paused. Continue watching?" confirmation so playback stays unpaused (it counters the dialog, it does not stop it from appearing)
  - Works on YouTube and YouTube Music
  - Media keys support (needs about:config: media.hardwaremediakeys.enabled and dom.media.mediasession.enabled set to true, then restart)
  - Untested but expected to work in fullscreen and in the miniplayer
- External service/API: none; permissions: www.youtube.com and music.youtube.com only
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: simple and effective, "haven't been paused once", also works on YouTube Music, listen to music all day
  - Complaint: stops working after YouTube changes (one reviewer: works about 60% of the time); prompt still visible on YouTube Music
  - Complaint: dialog gone but video still pauses, or video controls stop working until refresh, cannot pause manually
  - Complaint: not available on Firefox for Android; reports of failure on Linux and recent Firefox builds; setup steps (about:config) confusing
  - Complaint: extra silence/instrumental filler between tracks, minor slowdowns; some say "Video Background Play Fix" works better
- Screenshots: .atlas/research/store-images/firefox/youtube-nonstop/01.png

## BlockTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/blocktube/
- Daily users: 33,264 | Rating: 3.88 (534 ratings, 363 with text) | Version: 0.4.8 | Last updated: 2026-02-20 | Badge: none
- Repo: https://github.com/amitbl/blocktube | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0)
- Declared permissions: `API: storage, unlimitedStorage; hosts: https://www.youtube.com/*, https://m.youtube.com/*`
- Feature tags: filter, hide-shorts, hide-feed, hide-comments, nonstop, hide-ui
- Features:
  - Block specific channels and videos you do not want to see or get recommended
  - Integrated context menus across YouTube for one-click blocking
  - Block videos by name; block channels by name
  - Block comments from a specific user or by content keywords
  - Block or allow videos with a specific runtime (duration filter)
  - Block YouTube Shorts; block YouTube Movies; block the Explore page
  - Block YouTube's auto-generated playlists (Mixes)
  - Hide watched videos from recommendations
  - Remove "Video paused, continue watching?" popups
  - Regular expressions supported across all filter options
  - Advanced Blocking: extend filtering with your own JavaScript function (warning: untrusted code can put your YouTube account at risk)
  - Works on www.youtube.com and m.youtube.com; separate Chrome/Edge/Opera/Brave build
  - Privacy: no analytics, no third-party requests, options stored locally only
- External service/API: none (explicitly makes no third-party requests)
- Review highlights: not fetched (outside the top 10 YouTube-specific add-ons)
- Screenshots: none

## UnTrap for YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/untrap-for-youtube/
- Daily users: 23,362 | Rating: 3.52 (217 ratings, 140 with text) | Version: 12.4 | Last updated: 2026-10-25 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free core; optional "UnTrap Plus" upgrade (unlimited daily AI summaries instead of 3/day, cloud settings sync, faster access to new features); closed source
- Declared permissions: `API: storage, activeTab, management, alarms, scripting; hosts: *://www.youtube.com/*, *://m.youtube.com/*`
- Flags: also ships on Safari (App Store id1637438059): a direct competitor on the target platform
- Feature tags: hide-shorts, hide-comments, hide-feed, hide-ui, thumbs, filter, cinema, ai, focus, shortcuts, ad-skip, layout
- Features:
  - "250+ features": AI video summaries, layout customization, content filters, automation, focus tools
  - Hide Shorts, comments, related and suggested videos
  - Grayscale, blur or hide thumbnails
  - Auto-redirect the YouTube homepage to a custom page
  - Remove notifications, buttons, sidebars and trending tabs
  - Auto-enable Theater or Full Screen mode
  - Hide ad banners and auto-skip video promotions
  - Block videos, channels or comments by keyword, channel ID or regex
  - AI summary: overview of any video in about 5 seconds; key-insight extraction; timestamped navigation; summarize and translate in 40+ languages; top-comments overview; enhanced transcript generator
  - Password-protected settings
  - Temporary focus mode (block distractions with one click); scheduled focus sessions
  - Opening delays (pause before accessing YouTube or launching the extension)
  - Custom hotkeys to trigger features
  - Works on YouTube desktop, mobile site and embedded videos
  - Available on Safari, Chrome, Opera, Brave, Firefox, Edge
- External service/API: AI summaries, translation and Plus cloud sync need UnTrap's servers; permissions include management, scripting, alarms, activeTab, youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); Unhook reviewers name UnTrap as the maintained alternative
- Screenshots: none

## AdBlocker for YouTube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/adblock-for-youtube/
- Daily users: 516,837 | Rating: 3.85 (1,377 ratings, 546 with text) | Version: 0.5.4 | Last updated: 2026-05-06 | Badge: recommended
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link; donation link on developer site
- Declared permissions: `API: storage, declarativeNetRequest; hosts: *://*.youtube.com/*`
- Flags: ad blocking (YouTube treats it as a Terms-of-Service violation and actively detects it)
- Feature tags: adblock
- Features:
  - Removes video ads and display ads from YouTube
  - Loads the YouTube website and videos faster
  - Supports Firefox desktop and Firefox for Android
  - Uses declarativeNetRequest rules (per declared permissions) scoped to *.youtube.com
- External service/API: none stated; permissions: storage, declarativeNetRequest, *.youtube.com
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: "does exactly what it says", no ads seen, smooth playback; YouTube-only focus seen as stronger than general blockers; works on Android and macOS
  - Complaint: YouTube detects it (detection wave around 2025-03-20, account-suspension warnings, "video interference" errors), then it stays broken until updated
  - Complaint: ads still appear, skip button disabled leaving 2-minute ads, "error occurred" playback failures on dynamically loaded videos, requires page refresh
  - Complaint: slows down YouTube, breaks the site; a few suspicion/spyware accusations
  - Complaint: slow update cadence (users beg for an update after YouTube changes)
- Screenshots: .atlas/research/store-images/firefox/adblock-for-youtube/01.png, .atlas/research/store-images/firefox/adblock-for-youtube/02.png

## Easy Youtube Video Downloader Express
- URL: https://addons.mozilla.org/en-US/firefox/addon/easy-youtube-video-download/
- Daily users: 464,876 | Rating: 4.14 (20,081 ratings, 11,445 with text) | Version: 25.4 | Last updated: 2026-10-13 | Badge: recommended
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: freemium; free trial then PRO upgrade ("pay what you want" per listing; reviewers cite about $30 per year and a trial that ends after ~53 downloads)
- Declared permissions: `API: storage, downloads, activeTab, webRequest, webRequestBlocking, webRequestFilterResponse, declarativeNetRequestWithHostAccess, scripting; hosts: http://www.youtube.com/*, https://www.youtube.com/*, http://m.youtube.com/*, <all_urls>`
- Flags: DOWNLOADER (downloading YouTube video/audio breaches YouTube Terms of Service; server-side processing for 1080p/MP3)
- Feature tags: download, convert-mp3
- Features:
  - Simple extension for fast, easy YouTube downloads in FLV, 3GP, MP3, MP4, 720p and 1080p
  - 1080p Full-HD downloads (listing: recent YouTube changes break most other downloaders at this)
  - Single-click 256 kbps HQ MP3 downloads
  - Simple, minimalist download button on the watch page
  - One-click download without loading any external executable
  - New toolbar download button to mitigate experimental and new YouTube layout changes
  - Works with the new YouTube design; non-intrusive button
  - Audio-only versions for music videos (per reviews)
  - PRO upgrade: 1080p and MP3 need the vendor's own server infrastructure because YouTube no longer provides direct links for them
  - Support system for bugs and feedback
- External service/API: yes for 1080p and MP3 (vendor processing servers, "Range fetch" worker); broad permissions: downloads, webRequest(+Blocking, FilterResponse), declarativeNetRequestWithHostAccess, scripting, optional all-sites host access
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: one-click, fast, many formats including audio-only, FHD without limits, restores ability to download after YouTube player changes
  - Complaint: undisclosed free trial then paid (about $30 per year); "pay what you want" not obvious; users point to yt-dlp or Video DownloadHelper
  - Complaint: stuck on "generating link", worker 403 errors, no download button on 18+/"not for children" videos, 5 GB limit
  - Complaint: trojan/virus accusation (unverified), all-websites permission enabled by default, optional tracking toggles, update tab opens on every update
- Screenshots: .atlas/research/store-images/firefox/easy-youtube-video-download/01.png, .atlas/research/store-images/firefox/easy-youtube-video-download/02.png, .atlas/research/store-images/firefox/easy-youtube-video-download/03.png, .atlas/research/store-images/firefox/easy-youtube-video-download/04.png, .atlas/research/store-images/firefox/easy-youtube-video-download/05.png, .atlas/research/store-images/firefox/easy-youtube-video-download/06.png

## SaveFrom.net helper all-in-1 / youtube downloader
- URL: https://addons.mozilla.org/en-US/firefox/addon/savefromnet-helper/
- Daily users: 334,726 | Rating: 4.11 (4,775 ratings, 1,426 with text) | Version: 10.63 | Last updated: 2026-11-02 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: freemium; free tier limited (low resolution), premium subscription for hi-res and more (per reviews); sign-in prompts
- Declared permissions: `API: tabs, downloads, storage, <all_urls>, webRequest, webRequestBlocking; hosts: *://*.vimeo.com/*, *://*.youtube.com/*, *://music.youtube.com/*, *://*.soundcloud.com/*, *://*.vk.com/*, *://*.vkontakte.ru/* (+28 more)`
- Flags: DOWNLOADER (YouTube Terms-of-Service breach); multi-site (YouTube is one of 100+ sites); broad all-sites permission
- Feature tags: download, convert-mp3
- Features:
  - Download files from YouTube, Facebook, Vimeo, Dailymotion, VK, Odnoklassniki, SoundCloud and 40+ other sites in one click (summary); "more than 100 popular websites" in the description
  - "Download" button appears on the video page and saves the video in the desired quality
  - VK integration: download links for photo albums, audio and video; download all mp3 files from the page, save mp3 with proper titles, check bitrate and file size, save a playlist for later
  - Replaces links on supported pages with a download button that yields a direct link in one click, which download managers can grab
  - Supported media hosts: youtube, metacafe, break, dailymotion, vimeo, tiktok, mail.ru, smotri, yandex.ru, rambler, tvigle, intv; other sites: livejournal, vkontakte, facebook, liveinternet, guitar-tube, zaycev.net, 1tv, rutv, ntv, vesti and others
  - Host permissions cover YouTube, YouTube Music, Vimeo, SoundCloud, VK, OK.ru, Mail.ru and more, plus downloads, webRequest(+Blocking)
- External service/API: yes, savefrom.net servers resolve links and enforce premium/sign-in; reviewers allege user-information collection
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: "best YouTube downloading extension" for some; restarts working after updates; grabs Instagram/Facebook media
  - Complaint: breaks repeatedly after site changes (YouTube capped at 360p or no download; VK music stops)
  - Complaint: video saved without audio, high-resolution requires paid subscription, constant premium upsell banners, new sign-in requirement seen as tracking
  - Complaint: described as spyware/information collecting (user claims, unverified)
- Screenshots: .atlas/research/store-images/firefox/savefromnet-helper/01.png, .atlas/research/store-images/firefox/savefromnet-helper/02.png, .atlas/research/store-images/firefox/savefromnet-helper/03.png, .atlas/research/store-images/firefox/savefromnet-helper/04.png, .atlas/research/store-images/firefox/savefromnet-helper/05.png, .atlas/research/store-images/firefox/savefromnet-helper/06.png

## Video Background Play Fix
- URL: https://addons.mozilla.org/en-US/firefox/addon/video-background-play-fix/
- Daily users: 228,452 | Rating: 4.46 (1,555 ratings, 610 with text) | Version: 1.8.1 | Last updated: 2024-12-03 | Badge: recommended
- Repo: https://github.com/mozilla/video-bg-play | License: MIT License | Price/model: free; open source (MIT, Mozilla GitHub org)
- Declared permissions: `API: none; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://*.vimeo.com/*`
- Feature tags: bg-play
- Features:
  - Quick fix for sites that do not work with Firefox for Android's video background-play feature
  - Works by blocking the Page Visibility API and the Fullscreen API so the page cannot tell it was backgrounded
  - Supported pages: YouTube (including youtube-nocookie embeds) and Vimeo (Vimeo: playback no longer stops when exiting fullscreen)
- External service/API: none; permissions: youtube.com, youtube-nocookie.com, vimeo.com only
- Review highlights (latest 50, 1-star and 2-star pools):
  - Praise: "works", background audio with screen off or app switched, works in private tabs, "must-have" on GrapheneOS, simple and fluent
  - Complaint: stopped working after recent Firefox updates; add-on not updated since 2024-12 (reviews ask why Mozilla-recommended add-on is unmaintained)
  - Complaint: playback stops after a few minutes with the screen locked, or after switching apps; page refreshes when returning
  - Complaint: no PiP, breaks mini player, YouTube Music not covered on newer Firefox, freezing/slowdowns, orientation glitches, runaway data use when left running
- Screenshots: none (listing has no screenshots)

## Hide Youtube-Shorts
- URL: https://addons.mozilla.org/en-US/firefox/addon/hide-youtube-shorts/
- Daily users: 106,263 | Rating: 4.55 (319 ratings, 159 with text) | Version: 1.11.0 | Last updated: 2026-05-04 | Badge: none
- Repo: https://github.com/Vulpelo/hide-youtube-shorts | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0)
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*; optional: tabs; data collection declared: required=none, optional=none`
- Feature tags: hide-shorts, hide-ui
- Features:
  - Hides Shorts from the homepage, subscriptions and search results
  - Can also hide the "Shorts" tab
  - Hide only on chosen pages (home / subscriptions / channel / search)
  - Timeout setting to limit how often the hiding function runs (reduces page-load cost)
  - Button to close a Shorts section on the subscriptions page
  - Hides Shorts in the notifications menu
  - Hides live videos (experimental) and "upcoming" videos (experimental)
- External service/API: none; permissions: storage, *.youtube.com; optional: tabs
- Review highlights: not fetched (outside the top 10 YouTube-specific add-ons)
- Screenshots: .atlas/research/store-images/firefox/hide-youtube-shorts/01.png, .atlas/research/store-images/firefox/hide-youtube-shorts/02.png

## 'Improve YouTube!'  🎧 (For YouTube & Video)
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-addon/
- Daily users: 101,335 | Rating: 4.28 (907 ratings, 435 with text) | Version: 4.2400 | Last updated: 2026-10-26 | Badge: recommended
- Repo: https://github.com/code4charity/YouTube-Extension/ | License: Friendly License | Price/model: free; open source ("Friendly License"); non-profit, no income since 2012
- Declared permissions: `API: contextMenus, storage, unlimitedStorage; hosts: https://www.youtube.com/*; optional: downloads`
- Feature tags: speed, quality, codec, volume, loop, autoplay, pip-popup, cinema, screenshot, transform, captions, shortcuts, progress, hide-shorts, hide-feed, hide-comments, hide-ui, filter, theme, adblock, ad-skip, stats, playlist, layout, thumbs, focus, search
- Features:
  - "175+ useful and unique features" to set the player, content categories and filter rules, tweaks, layout, theme and style
  - Applies most settings with no reload; draggable icon on the YouTube page; lightweight
  - Playback features for embedded videos (mobile m.youtube, Facebook, Netflix, Twitch, Vimeo "in preparation")
  - Expand always: video description, transcript, chapters
  - "Virtual Travel": switch your content country
  - Zen mode: dim pages until hovered; auto-pause tabs; auto-fullscreen; Picture-in-Picture
  - Analyse your activity (watch statistics)
  - Block videos, channels, tags and categories; channel: do not play trailer
  - Per-tab video volume mixer
  - Remove related videos; remove Shorts reel; hide distractions for teaching / screen-sharing / presentations
  - "Up Next": off (reset autoplay after every video); player auto-play off
  - Undo the new sidebar (description, details, comments)
  - Ad blocker: adblock and ad skip, or allow ads from channels you subscribe to
  - Themes: disable ambient lighting (cinematics), dark-mode schedule, black OLED theme, display dim, blue-light filter, retro classic layout, legacy list style
  - Screenshot: save a copy of any video frame; frame-by-frame watching
  - Extra player buttons: loop/repeat and rotate video; reverse and shuffle playlist
  - Subtitles, captions and transcript options
  - Expander (video fills the window), theater mode, cinema mode (lights off), resizable player
  - Default/fixed quality (144p to 8K, auto HD, automatic 4K), avoid 60 fps vs 30 fps, HDR vs SDR
  - Fixed default playback speed ("speed-watching", smart controller that skips music and education)
  - Fixed volume or loudness normalization
  - Popup player, custom mini-player, pop-out player (always-on-top needs OS support)
  - Deny the AV1 codec (use H.264/VP8/VP9 to save CPU; h264ify-style)
  - Custom keyboard shortcuts / hotkeys including mouse-scroll volume; overwrite YouTube's own shortcuts
  - Hide comments (fold/collapse), transparent header, annotations, live chat, video details; toggle player controls
  - Set YouTube language; tweak "scroll for details"; mini-player scrolling; search inside; channel video counter
  - Thumbnails: GIF-style animation off, HD thumbnails
  - 40+ UI languages, 140+ volunteers; plays alongside SponsorBlock, PocketTube and extra ad blockers; only one site permission (YouTube), optional downloads permission
- External service/API: none stated ("we can't care about what video you watch"); permissions: contextMenus, storage, unlimitedStorage, www.youtube.com; optional: downloads
- Review highlights: not fetched (outside the top 10); Unhook reviewers say Unhook and Improve YouTube "need each other" after 2025 YouTube changes
- Screenshots: .atlas/research/store-images/firefox/youtube-addon/01.png, .atlas/research/store-images/firefox/youtube-addon/02.png, .atlas/research/store-images/firefox/youtube-addon/03.png

## h264ify
- URL: https://addons.mozilla.org/en-US/firefox/addon/h264ify/
- Daily users: 74,305 | Rating: 4.42 (236 ratings, 97 with text) | Version: 1.1.0 | Last updated: 2019-09-09 | Badge: none
- Repo: https://github.com/erkserkserks/h264ify-firefox | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://*.youtu.be/*`
- Feature tags: codec
- Features:
  - Makes YouTube stream H.264 videos instead of VP8/VP9 (also covers youtube-nocookie embeds and youtu.be)
  - Purpose: smoother playback, lower CPU use, longer battery life, cooler laptop, because H.264 is usually GPU hardware accelerated and VP8/VP9 often is not
  - Limitation stated in the listing: 4K and 1440p are unavailable because YouTube no longer encodes them in H.264
  - No settings; installs and works
- External service/API: none; permissions: storage, youtube.com, youtube-nocookie.com, youtu.be
- Review highlights: not fetched (outside the top 10); listing last updated 2019-09 yet 74k daily users
- Screenshots: .atlas/research/store-images/firefox/h264ify/01.png

## Youtube-shorts block
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-shorts-block/
- Daily users: 63,231 | Rating: 4.46 (298 ratings, 144 with text) | Version: 1.5.3 | Last updated: 2025-05-12 | Badge: none
- Repo: https://github.com/doma-itachi/Youtube-shorts-block | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://m.youtube.com/*`
- Feature tags: hide-shorts, shorts-tools
- Features:
  - Plays YouTube Shorts on a normal watch page (rewrites /shorts/ID to /watch?v=ID)
  - Optionally hides the "Shorts" tab and Shorts videos
  - Settings page
  - Caution from the listing: Firefox disables autoplay by default, so set "Allow Audio and Video" for autoplay
  - Works on www.youtube.com and m.youtube.com
- External service/API: none; permissions: storage, www.youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10)
- Screenshots: .atlas/research/store-images/firefox/youtube-shorts-block/01.png, .atlas/research/store-images/firefox/youtube-shorts-block/02.png, .atlas/research/store-images/firefox/youtube-shorts-block/03.png

## Control Panel for YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/control-panel-for-youtube/
- Daily users: 62,120 | Rating: 4.54 (194 ratings, 103 with text) | Version: 1.38.0 | Last updated: 2026-10-17 | Badge: recommended
- Repo: none listed | License: All Rights Reserved | Price/model: free; closed source ("All Rights Reserved"); Ko-fi donation link
- Declared permissions: `API: storage; hosts: https://www.youtube.com/*, https://m.youtube.com/*, https://www.youtube.com/embed/*, https://www.youtube-nocookie.com/embed/*`
- Feature tags: adblock, ad-skip, hide-ui, hide-feed, hide-shorts, hide-comments, filter, autoplay, cinema, screenshot, layout, bg-play, translate-off, progress, captions, search, shorts-tools
- Features:
  - Ads: block ads, auto-skip video ads, hide sponsored videos and promos, hide merch/offers (desktop)
  - New player UI (desktop): disable new progress bar and controls, hide new full-screen controls, hide "More videos" in full screen, always compact Play button, remove control background, hide full-screen title
  - Annoyances: hide AI summaries, "Ask YouTube" and AI suggestions, GIFs in comments, information panels, Premium upsells, "Experiencing interruptions?" popup; remove pink gradient from progress bars; auto-pause channel trailers
  - Mobile (m.youtube.com): allow background playback, hide "Open App" links, hide Posts in Home, grid view for Subscriptions and Search, hide Explore button and channel list
  - Video lists: hide suggested sections, Live, Streamed, Mixes, Playlists, Movies and TV, Upcoming, Members-only, watched and hidden videos
  - Hide channels (adds "Hide channel" to video menus); disable the Home feed; search thumbnail size; minimum grid items per row; hide collaborations in Subscriptions
  - Subscriptions page behaves like an inbox of videos; search page shows only search results
  - Video pages: disable Autoplay, disable Ambient mode, hide related videos, Next button, Share/Thanks/Clip, metadata, comments, chat
  - Always use theater mode, full-size theater (hide header/scrollbar), disable enlarged UI in theater mode
  - Always use original audio (blocks auto-dubbed audio); hide Miniplayer button, end cards, endscreen content, channel watermark
  - Add "Take snapshot" to the video menu (JPEG / PNG); make the transcript downloadable
  - Shorts: hide Shorts, redirect Shorts to the normal player, hide suggested actions, always show progress bar, stop Shorts looping, hide Remix button, hide metadata until hover, minimum Shorts per row
  - UI tweaks: hide Home categories, channel banner images, "Search with your voice"; link the YouTube logo to Subscriptions; tidy the Guide sidebar; hide the "Latest" bar
  - Embedded videos: hide Share button and pause overlay; hide algorithmic recommendations in embeds
- External service/API: none stated; permissions: storage, youtube.com (www, m, embed), youtube-nocookie embed
- Review highlights: not fetched (outside the top 10)
- Screenshots: .atlas/research/store-images/firefox/control-panel-for-youtube/01.png, .atlas/research/store-images/firefox/control-panel-for-youtube/02.png, .atlas/research/store-images/firefox/control-panel-for-youtube/03.png, .atlas/research/store-images/firefox/control-panel-for-youtube/04.png, .atlas/research/store-images/firefox/control-panel-for-youtube/05.png, .atlas/research/store-images/firefox/control-panel-for-youtube/06.png

## YouTube Video and Audio Downloader (WebEx)
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube_downloader_webx/
- Daily users: 59,721 | Rating: 3.76 (1,861 ratings, 899 with text) | Version: 1.2.1 | Last updated: 2022-02-10 | Badge: none
- Repo: https://github.com/feller-prj/extractor-project | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0)
- Declared permissions: `API: activeTab, storage, nativeMessaging, downloads, notifications; hosts: *://www.youtube.com/*, *://m.youtube.com/*, *://*.googlevideo.com/*`
- Flags: DOWNLOADER (YouTube Terms-of-Service breach); needs native messaging client and optional FFmpeg binary (cannot ship that way in Safari); not updated since 2022-02
- Feature tags: download, convert-mp3
- Features:
  - Download YouTube videos in all available formats
  - Extract the original audio files
  - Options page: optional native client (small NodeJS client) and optional FFmpeg executable
  - FFmpeg integration needed only for high-resolution video or audio (combining audio-only and video-only streams)
  - Detection core is node-ytdl-core (since 1.0.0); rewrite of an older downloader add-on as a WebExtension
  - Works on www.youtube.com and m.youtube.com; fetches from googlevideo.com; desktop notifications
- External service/API: no vendor server; relies on YouTube stream URLs through ytdl-core logic, local native client and FFmpeg; permissions: nativeMessaging, downloads, notifications, googlevideo.com
- Review highlights: not fetched (outside the top 10)
- Screenshots: .atlas/research/store-images/firefox/youtube_downloader_webx/01.png

## YouTube No Translation
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-no-translation/
- Daily users: 51,414 | Rating: 4.86 (391 ratings, 140 with text) | Version: 2.26.1 | Last updated: 2026-10-28 | Badge: none
- Repo: none listed | License: GNU Affero General Public License v3.0 only | Price/model: free; open source (AGPL-3.0); pay-what-you-want Ko-fi contribution
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*; data collection declared: required=none, optional=none`
- Feature tags: translate-off, thumbs, captions
- Features:
  - Keeps YouTube content in its original language
  - Video titles: keep the original language
  - Audio tracks: default to the original track or a chosen language (desktop only)
  - Descriptions: prevent translation
  - Thumbnails: switch back to the original thumbnails
  - Subtitles: set a preferred language; if unavailable, subtitles are disabled
  - Privacy statement: no tracking, no data collection
  - Also on the Chrome Web Store
- External service/API: none; permissions: storage, youtube.com, youtube-nocookie.com
- Review highlights: not fetched (outside the top 10); rating 4.86 across 391 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-no-translation/01.png, .atlas/research/store-images/firefox/youtube-no-translation/02.png

## vidIQ Vision for YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/vidiq-vision-youtube/
- Daily users: 49,900 | Rating: 4.05 (323 ratings, 86 with text) | Version: 3.227.0 | Last updated: 2026-10-20 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: freemium; free extension with paid plans (vidIQ Pro, Boost, Boost+ with coaching); AMO flags "requires payment"; closed source
- Declared permissions: `API: cookies, clipboardWrite, storage, unlimitedStorage, background, declarativeNetRequestWithHostAccess; hosts: https://www.youtube.com/*, *://www.youtube.com/*, *://studio.youtube.com/*, *://www.tiktok.com/*, *://www.instagram.com/*, *://claude.ai/* (+7 more)`
- Flags: creator analytics tied to a vidIQ account and vidIQ servers; not a viewer-side feature
- Feature tags: stats, ai, search
- Features:
  - Optimization report card for any YouTube video: insights and metrics beyond YouTube Analytics
  - vidIQ Score: proprietary cross-platform optimization score predicting promotion in Related, Search and Recommended
  - Channel Audit: shows how content performs and what needs attention
  - Video Velocity: views per hour, real-time acceleration to spot viral videos
  - Competitors Tool: follow competitors' ranking and growth
  - Average Watch Time for your videos and ones you watch
  - Social media likes, shares and comments on Facebook, Twitter, Reddit for a video URL
  - Keyword research and "what is really trending"; YouTube SEO guidance (tags, title, description)
  - AI-powered video ideas with view prediction (preview caption)
  - Paid tiers: Pro (historical data, keyword research, competition tracking, Description Campaigns), Boost (keyword recommendation engine, unlimited Pro tools, more channels), Boost+ (personalized coaching)
  - Host permissions include YouTube, studio.youtube.com, TikTok, Instagram, claude.ai, chatgpt.com, gemini.google.com and vidiq.com
- External service/API: yes, required: vidIQ backend (app.vidiq.com) and account; cookies and clipboardWrite permissions
- Review highlights: not fetched (outside the top 10)
- Screenshots: .atlas/research/store-images/firefox/vidiq-vision-youtube/01.png, .atlas/research/store-images/firefox/vidiq-vision-youtube/02.png, .atlas/research/store-images/firefox/vidiq-vision-youtube/03.png, .atlas/research/store-images/firefox/vidiq-vision-youtube/04.png, .atlas/research/store-images/firefox/vidiq-vision-youtube/05.png

## Ambient light for YouTube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/ambient-light-for-youtube/
- Daily users: 48,672 | Rating: 4.89 (84 ratings, 35 with text) | Version: 2.38.17 | Last updated: 2025-11-13 | Badge: none
- Repo: https://github.com/WesselKroos/youtube-ambilight | License: MIT License | Price/model: free; open source (MIT); donation link
- Declared permissions: `API: storage; hosts: https://www.youtube.com/*, https://www.youtube.com/embed/*, https://www.youtube.com/live_chat*`
- Flags: GPU-heavy (listing recommends a GPU with PassMark G3D score of 1000+); canvas/WebGL rendering of the video frame
- Feature tags: cinema, transform, theme, pip-popup, hide-ui
- Features:
  - Ambient light glow around the YouTube player, rendered in the browser (no lightstrip hardware); options blur, spread, fade-in duration
  - Remove black and colored bars, remove sidebars, fill video to screen (tip: for widescreen or portrait monitors)
  - Filters: brightness, contrast, vibrance, saturation
  - Video size (scale/zoom) and shadow
  - Video page content: shadows on elements, opacity of buttons/boxes/images, hide elements in theater mode, translucent header, hide scrollbar
  - Quality: limit frame rate, resolution of the ambient render, WebGL renderer (less power), save energy on static videos, synchronization to display or video frame rate
  - General: Light / Default / Dark appearance; enable only in small, theater or fullscreen mode; enable in Picture-in-Picture; on/off switch
  - Advanced: edge size, fade-out start and curve, debanding (noise/dithering), flicker reduction, smooth motion (frame blending), directions (top/right/bottom/left)
  - Advanced bar detection: offset, averaging, manual bar and sidebar size, reset bars each video; sync video with ambient light
  - Stats: frame rate, frame time, resolution and draw time
  - Works on watch pages, embeds and live chat frames; preview shows vertical video and fullscreen
- External service/API: none; permissions: storage, youtube.com (watch, embed, live_chat)
- Review highlights: not fetched (outside the top 10); rating 4.89 across 84 ratings
- Screenshots: .atlas/research/store-images/firefox/ambient-light-for-youtube/01.png, .atlas/research/store-images/firefox/ambient-light-for-youtube/02.png, .atlas/research/store-images/firefox/ambient-light-for-youtube/03.png, .atlas/research/store-images/firefox/ambient-light-for-youtube/04.png, .atlas/research/store-images/firefox/ambient-light-for-youtube/05.png, .atlas/research/store-images/firefox/ambient-light-for-youtube/06.png

## Adblock for Youtube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/adblock-for-youtube-tm/
- Daily users: 38,212 | Rating: 4.37 (1,696 ratings, 631 with text) | Version: 6.0.6 | Last updated: 2022-02-21 | Badge: none
- Repo: none listed | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0 stated, no repo link); last updated 2022-02-21
- Declared permissions: `API: tabs, storage, unlimitedStorage, webRequest, webRequestBlocking, <all_urls>; hosts: http://*/*, https://*/*`
- Flags: ad blocking (YouTube ToS); requests access to all websites; listing carries a Google Analytics notice copied from another store
- Feature tags: adblock
- Features:
  - Blocks ads, banners and popups on YouTube, including pre-roll ads
  - Blocks ads on external sites that embed YouTube
  - Technology is filter lists that block external ad URLs; the page itself is not modified
  - Faster page loads (no ads or tracking)
  - Ad-block detection logic runs locally
  - Listing includes user testimonials and a long changelog (v3.4 to v5.0.9)
- External service/API: none for blocking (filter lists bundled); asks for all-sites access (tabs, webRequest, webRequestBlocking, `<all_urls>`) to catch embedded players
- Review highlights: not fetched (outside the top 10); rating 4.37 across 1,696 ratings
- Screenshots: .atlas/research/store-images/firefox/adblock-for-youtube-tm/01.png

## YouTube Downloader
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube_downloader/
- Daily users: 36,959 | Rating: 2.99 (607 ratings, 256 with text) | Version: 1.6.30 | Last updated: 2024-08-27 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link
- Declared permissions: `API: downloads, tabs; hosts: *://www.youtube.com/*, http://www.youtube.com/*, https://www.youtube.com/*`
- Flags: DOWNLOADER (YouTube Terms-of-Service breach)
- Feature tags: download
- Features:
  - "Download" button on a YouTube watch page; choose the video format
  - A "Download Page" opens and the download starts; file keeps the YouTube title and lands in Downloads
  - Download videos without loss of quality
  - No additional settings required
- External service/API: not stated (download page may use a vendor service); permissions: downloads, tabs, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 2.99 across 607 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube_downloader/01.png, .atlas/research/store-images/firefox/youtube_downloader/02.png

## YouTube Anti Translate
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-anti-translate/
- Daily users: 33,873 | Rating: 4.19 (231 ratings, 134 with text) | Version: 1.20.5 | Last updated: 2026-10-20 | Badge: none
- Repo: https://github.com/artisticfox8/yt-anti-translate | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0; port of zpix1/yt-anti-translate)
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://m.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: translate-off, thumbs
- Features:
  - Disables YouTube's automatic translation of video titles (shows the original title)
  - Preview caption: comparison of YouTube titles with the extension on and off
  - Port of the Chrome extension of the same name; code nearly identical
  - Also covers youtube-nocookie embeds and m.youtube.com
  - A separate AMO listing "YouTube Anti Translate - Official Port" (youtube-anti-translate-mv3, about 8.6k users) exists
- External service/API: none; permissions: storage, youtube.com, youtube-nocookie.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.19 across 231 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-anti-translate/01.png

## YouTube Search Fixer
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-suite-search-fixer/
- Daily users: 33,531 | Rating: 4.37 (175 ratings, 99 with text) | Version: 10.1.3 | Last updated: 2026-08-11 | Badge: recommended
- Repo: none listed | License: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) | Price/model: free; open source (CC BY-SA 4.0 listed; GitLab project); donation link
- Declared permissions: `API: storage; hosts: https://www.youtube.com/*, https://m.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: search, filter, hide-feed, hide-shorts, layout, thumbs, hide-ui, shorts-tools
- Features:
  - Remove search suggestions: "For you", "People also search for", "Searches related to", "Learn while you're at home", "Related to your search", "People also watched", "Other people are watching", "Recommended to you", "Latest YouTube posts"
  - Remove Shorts, watched content, live videos and premieres (improved detection), time-stamped content, artist and verified-channel content from search results
  - Turn off playlists, mixes and reels in search results; remove musician sidebar (optional); filter out channel listings; remove courses
  - Individual toggles per section (horizontal card list, Shorts panel, auto-generated mixes and more)
  - Display search results in a grid view
  - Power Search: lowers visibility of results not matching the query, scanning titles and full descriptions
  - Remove description text, search snippets, expandable chapter breakdowns and AI-generated video summaries
  - Title lowercasing to defuse ALL-CAPS clickbait
  - Video Spotlight to highlight videos on the search page (optional); centered video title and description (optional)
  - Permanently redirect Shorts back to the normal video page
  - Visual tweaks for low-resolution screens; works in light and dark mode
  - Privacy: no data sent, no cookies, no analytics; plain JavaScript and CSS
  - Also available on Chrome and other browsers
- External service/API: none; permissions: storage, www.youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.37 across 175 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-suite-search-fixer/01.png, .atlas/research/store-images/firefox/youtube-suite-search-fixer/02.png, .atlas/research/store-images/firefox/youtube-suite-search-fixer/03.png, .atlas/research/store-images/firefox/youtube-suite-search-fixer/04.png, .atlas/research/store-images/firefox/youtube-suite-search-fixer/05.png

## YouTube mp3
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-mp3-converter/
- Daily users: 28,758 | Rating: 3.45 (300 ratings, 150 with text) | Version: 4.6 | Last updated: 2023-04-20 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link
- Declared permissions: `API: activeTab; hosts: http://www.youtube.com/*, https://www.youtube.com/*`
- Flags: DOWNLOADER / MP3 CONVERTER (YouTube Terms-of-Service breach); redirects to a partner website
- Feature tags: download, convert-mp3
- Features:
  - Adds an "MP3" button on YouTube watch pages
  - Converts a YouTube music video to MP3 and downloads the file
  - Conversion happens on rcyoutube.com; the user is redirected to a partner site
- External service/API: yes, required: rcyoutube.com (conversion); permissions: activeTab, youtube.com
- Review highlights: not fetched (outside the top 10); rating 3.45 across 300 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-mp3-converter/01.png, .atlas/research/store-images/firefox/youtube-mp3-converter/02.png, .atlas/research/store-images/firefox/youtube-mp3-converter/03.png, .atlas/research/store-images/firefox/youtube-mp3-converter/04.png

## YouTube Downloader (UDL Helper)
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-downloader-udl-helper/
- Daily users: 26,710 | Rating: 4.54 (844 ratings, 364 with text) | Version: 0.7.68.0 | Last updated: 2025-03-07 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free extension; closed source; heavy use/large files push to the separate UDL Client desktop app (Windows only)
- Declared permissions: `API: <all_urls>; hosts: http://*/*, https://*/*`
- Flags: DOWNLOADER (YouTube Terms-of-Service breach); also Instagram and Odnoklassniki; all-sites permission
- Feature tags: download, convert-mp3, screenshot
- Features:
  - Download YouTube video as MP4 with sound, normal and high frame rate (60 fps), 360p to 8K (720p, 1080p, 1440p, 2160p, 4320p)
  - Download audio from video as MP4 or MP3 at the highest bitrate (built-in converter up to 2 GB, otherwise UDL Client)
  - Merges separate audio and video streams in the browser for streams up to 2 GB; larger ones go to UDL Client
  - Download Shorts (video and audio) with no extra tools
  - Experimental "PLAYER" format that records from the site's own player when other methods fail (uses more memory)
  - Also downloads from Instagram and Odnoklassniki; Instagram photo save button
  - Screenshot button on YouTube and Odnoklassniki players (save frames)
  - Human-friendly file names; copy direct link to clipboard where available; send link to a phone via QR code
  - Two button styles: modern (on mouse over) and classic (on click); supports YouTube light and dark themes
  - Embedded YouTube videos on third-party sites supported; FAQ help section; several settings
- External service/API: partly; UDL Client desktop software and unidownloader.com site for large or failing downloads; permissions: all http(s) URLs
- Review highlights: not fetched (outside the top 10); rating 4.54 across 844 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-downloader-udl-helper/01.png, .atlas/research/store-images/firefox/youtube-downloader-udl-helper/02.png, .atlas/research/store-images/firefox/youtube-downloader-udl-helper/03.png, .atlas/research/store-images/firefox/youtube-downloader-udl-helper/04.png, .atlas/research/store-images/firefox/youtube-downloader-udl-helper/05.png, .atlas/research/store-images/firefox/youtube-downloader-udl-helper/06.png

## PocketTube: Youtube Subscription Manager
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-subscription-groups/
- Daily users: 21,945 | Rating: 4.15 (707 ratings, 301 with text) | Version: 18.10.8 | Last updated: 2026-10-21 | Badge: recommended
- Repo: none listed | License: All Rights Reserved | Price/model: free extension; closed source ("All Rights Reserved"); Patreon / Buy Me a Coffee support; companion Android and iOS apps
- Declared permissions: `API: alarms, storage, unlimitedStorage, identity, contextMenus, webRequest; hosts: https://*.youtube.com/*; optional: bookmarks, https://*.googleapis.com/*, notifications`
- Flags: companion iOS app "PocketTube for YouTube" already on the App Store (Apple-platform competitor)
- Feature tags: subs, filter, hide-feed, playlist
- Features:
  - Create group collections lists on YouTube and group subscriptions/channels into collections (one channel can sit in several collections)
  - Custom icon for each collection (pick a prepared icon or upload your own)
  - Show last videos by collection; play all videos in a collection through a YouTube playlist
  - Auto-sync collections across Android, iOS and Firefox via Google Drive (and Chrome profile)
  - Integration in the YouTube main page; filter videos by category on the subscriptions feed page
  - Hide watched videos
  - Order subscriptions by date published, A-Z or custom
  - "Catch up" your YouTube subscriptions
  - Tutorial videos; uses a cookie for temporary UI state (last opened collection/popup)
- External service/API: yes, optional: Google Drive sync (identity permission, googleapis.com optional); also alarms, contextMenus, webRequest; optional bookmarks and notifications
- Review highlights: not fetched (outside the top 10); Unhook reviewers report conflicts (Unhook hid its sidebar section)
- Screenshots: .atlas/research/store-images/firefox/youtube-subscription-groups/01.png, .atlas/research/store-images/firefox/youtube-subscription-groups/02.png, .atlas/research/store-images/firefox/youtube-subscription-groups/03.png, .atlas/research/store-images/firefox/youtube-subscription-groups/04.png, .atlas/research/store-images/firefox/youtube-subscription-groups/05.png

## YouTube Converter Button
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-converter-button/
- Daily users: 20,207 | Rating: 4.17 (604 ratings, 168 with text) | Version: 1.7 | Last updated: 2025-10-08 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free; closed source; third-party converter site
- Declared permissions: `API: webRequest, <all_urls>; hosts: https://y2mates.com/youtube-converter, https://y2mates.com/youtube-to-mp3, https://y2mates.com/, *://*.youtube.com/*, *://youtube.com/*, *://youtu.be/*`
- Flags: DOWNLOADER / CONVERTER (YouTube Terms-of-Service breach); listing has no description; sends users to y2mates.com; all-sites permission
- Feature tags: download, convert-mp3
- Features:
  - "Save YouTube video and audio files just in 1 click" (summary is the only advertised text)
  - Button on YouTube pages that opens y2mates.com YouTube converter / YouTube-to-MP3 pages
- External service/API: yes, required: y2mates.com conversion site; permissions: webRequest, all URLs, youtube.com, youtu.be
- Review highlights: not fetched (outside the top 10); rating 4.17 across 604 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-converter-button/01.png, .atlas/research/store-images/firefox/youtube-converter-button/02.png, .atlas/research/store-images/firefox/youtube-converter-button/03.png

## Remove Youtube Shorts
- URL: https://addons.mozilla.org/en-US/firefox/addon/remove-youtube-shorts/
- Daily users: 19,086 | Rating: 3.90 (93 ratings, 56 with text) | Version: 1.2.1 | Last updated: 2023-05-15 | Badge: none
- Repo: https://github.com/raven0230/Remove-Youtube-Shorts | License: MIT License | Price/model: free; open source (MIT); "personal project, updates not guaranteed"
- Declared permissions: `API: tabs, storage, menus; hosts: *://www.youtube.com/*`
- Feature tags: hide-shorts, shorts-tools
- Features:
  - Remove the Shorts tab from the navigation
  - Redirect Shorts videos to the original YouTube video player (Shorts player is mobile-oriented and annoying on desktop)
  - Remove the Shorts tab on channel pages
  - Remove Shorts on the subscription page (page may load slower with this feature)
- External service/API: none; permissions: tabs, storage, menus, www.youtube.com
- Review highlights: not fetched (outside the top 10); last updated 2023-05
- Screenshots: none (listing has no screenshots)

## Shorts block-tube
- URL: https://addons.mozilla.org/en-US/firefox/addon/ytb-shorts-blocker/
- Daily users: 4,431 | Rating: 4.91 (35 ratings, 6 with text) | Version: 1.2.6 | Last updated: 2026-11-03 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link
- Declared permissions: `API: storage, declarativeNetRequest; hosts: *://*.youtube.com/*, *://m.youtube.com/*, *://*/*, <all_urls>; data collection declared: required=none, optional=none`
- Feature tags: hide-shorts
- Features:
  - Removes YouTube Shorts from the browsing experience with a simple on/off switch
  - Cleaner, more personalized YouTube interface
  - Also blocks Shorts shown in embedded frames on non-YouTube websites
  - Uses declarativeNetRequest rules; works on www and m.youtube.com
- External service/API: none; permissions: storage, declarativeNetRequest, youtube.com, m.youtube.com and an all-sites host entry (for embedded frames)
- Review highlights: not fetched (outside the top 10); listing created 2026-03, rating 4.91 across 35 ratings
- Screenshots: .atlas/research/store-images/firefox/ytb-shorts-blocker/01.png

## No Shorts - YouTube Shorts Blocker
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-shorts-blocker-pro/
- Daily users: 3,282 | Rating: 4.21 (14 ratings, 11 with text) | Version: 3.1 | Last updated: 2025-06-20 | Badge: none
- Repo: none listed | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: activeTab, storage; hosts: *://*.youtube.com/*, *://*.m.youtube.com/*`
- Feature tags: hide-shorts, theme, shorts-tools
- Features:
  - Instantly remove Shorts from the homepage
  - Clean up search results with one tap
  - Hide the Shorts tab in navigation
  - Automatically convert Shorts URLs to the standard video format
  - Toggle blocking on/off through a dark glassmorphism interface
  - Works on desktop and mobile Firefox
- External service/API: none; permissions: activeTab, storage, youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.21 across 14 ratings
- Screenshots: none (listing has no screenshots)

## YT Shorts Blocker
- URL: https://addons.mozilla.org/en-US/firefox/addon/yt-shorts-blocker/
- Daily users: 2,829 | Rating: 4.32 (19 ratings, 13 with text) | Version: 1.3 | Last updated: 2024-09-03 | Badge: none
- Repo: https://github.com/greg-bt/YT-Shorts-Blocker#yt-shorts-blocker | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0)
- Declared permissions: `API: storage; hosts: https://www.youtube.com/*, https://m.youtube.com/*`
- Feature tags: hide-shorts, filter, shorts-tools
- Features:
  - Hide videos with a length filter (hide short videos from recommendations)
  - Hide all Shorts content; remove the Shorts button
  - Redirect "/shorts/" to "/watch?v"
  - Works on mobile and desktop; all settings in the add-on menu
  - Does not hide Shorts in search results; does not block watching any video
  - Privacy: collects nothing; active only on www.youtube.com and m.youtube.com; no background scripts
- External service/API: none; permissions: storage, www.youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10)
- Screenshots: .atlas/research/store-images/firefox/yt-shorts-blocker/01.png, .atlas/research/store-images/firefox/yt-shorts-blocker/02.png, .atlas/research/store-images/firefox/yt-shorts-blocker/03.png

## Block YouTube Shorts and Playables
- URL: https://addons.mozilla.org/en-US/firefox/addon/block-yt-shortvideo/
- Daily users: 2,130 | Rating: 4.12 (8 ratings, 3 with text) | Version: 1.1.0 | Last updated: 2026-07-13 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link
- Declared permissions: `API: storage, declarativeNetRequest; hosts: *://*.youtube.com/*, http://*/*, https://*/*; data collection declared: required=none, optional=none`
- Feature tags: hide-shorts, hide-feed, hide-ui, filter
- Features:
  - Automatically hides Shorts from the homepage, subscriptions and search results; hides the "Shorts" tab
  - Block Shorts only on chosen pages (home, subscriptions, channels or search results)
  - Timeout setting to reduce page-load cost
  - Quick-close button for Shorts sections in subscriptions
  - Hide Shorts in notifications
  - Experimental: hide live streams, upcoming videos, Playables and sponsored videos
  - Summary also lists Live, Sponsored and Playables as blockable
  - Looks like a clone of the "Hide Youtube-Shorts" add-on's option set (same wording); created 2026-07
- External service/API: none; declarativeNetRequest; permissions: storage, youtube.com and an all-sites host entry
- Review highlights: not fetched (outside the top 10); rating 4.12 across 8 ratings
- Screenshots: .atlas/research/store-images/firefox/block-yt-shortvideo/01.png, .atlas/research/store-images/firefox/block-yt-shortvideo/02.png

## Youtube Shorts Block
- URL: https://addons.mozilla.org/en-US/firefox/addon/shorts-block/
- Daily users: 1,943 | Rating: 4.32 (19 ratings, 11 with text) | Version: 1.1.2 | Last updated: 2026-04-13 | Badge: none
- Repo: https://github.com/CarlosSanchess/Youtube-Shorts-Block | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: tabs, storage; hosts: https://www.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: hide-shorts, shorts-tools
- Features:
  - Removes Shorts visibility from Home, Results and Trending
  - Automatically converts Shorts videos into the regular player format
  - Removes the Shorts section while watching a video
  - Modes: Full Block (Shorts fully removed), Soft Block (hidden from Home/Trending/Results but still reachable in the Shorts tab), View as Video (watch Shorts in normal video format; not compatible with Full Block)
  - Personal settings per mode; interacts with the DOM
- External service/API: none; permissions: tabs, storage, www.youtube.com
- Review highlights: not fetched (outside the top 10)
- Screenshots: .atlas/research/store-images/firefox/shorts-block/01.png, .atlas/research/store-images/firefox/shorts-block/02.png, .atlas/research/store-images/firefox/shorts-block/03.png

## YouTube Shorts Blocker
- URL: https://addons.mozilla.org/en-US/firefox/addon/shortsless/
- Daily users: 1,857 | Rating: 5.00 (9 ratings, 6 with text) | Version: 1.2.1 | Last updated: 2025-11-29 | Badge: none
- Repo: https://github.com/tn3w/YouTube-Shorts-Blocker | License: Apache License 2.0 | Price/model: free; open source (Apache-2.0); donation link
- Declared permissions: `API: none; hosts: *://*.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: hide-shorts
- Features:
  - Hides Shorts navigation tabs, shelves and videos across all YouTube pages (desktop and mobile)
  - Brutally minimal: about 35 lines of JavaScript, 22 CSS-selector rules, no settings, no UI
  - Listing prints the whole source: a MutationObserver re-runs a hide() over selector families such as ytd-reel-shelf-renderer, ytd-rich-shelf-renderer:has([href*="/shorts/"]), ytm-shorts-lockup-view-model, grid-shelf-view-model:has([href^="/shorts/"]), ytd-guide-entry-renderer a[title="Shorts"], ytm-pivot-bar-item-renderer a[href="/shorts"], and any element containing a link starting with /shorts/
  - No permissions beyond YouTube; no external connections
- External service/API: none; permissions: *.youtube.com only
- Review highlights: not fetched (outside the top 10); rating 5.00 across 9 ratings
- Screenshots: none (listing has no screenshots)

## Auto HD/4k/8k for YouTube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/auto-hd-4k-8k-for-youtube/
- Daily users: 3,645 | Rating: 3.91 (74 ratings, 41 with text) | Version: 1.0.5resigned1 | Last updated: 2024-04-26 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link; last updated 2024-04
- Declared permissions: `API: tabs, <all_urls>, storage; hosts: *://*/*`
- Feature tags: quality
- Features:
  - Set a default YouTube playback quality and never change resolution while playing
  - Resolutions offered: 4320p (8K), 2160p (4K), 1440p, 1080p, 720p, 480p, 360p, 240p, 144p
  - Switch back to Auto mode (YouTube's own choice)
  - Set-and-forget popup: click the icon and pick the default from the list
  - Sync the selected quality to other connected PCs
  - Light, fast, simple interface
- External service/API: none; requests broad permissions (tabs, all URLs)
- Review highlights: not fetched (outside the top 10); rating 3.91 across 74 ratings
- Screenshots: .atlas/research/store-images/firefox/auto-hd-4k-8k-for-youtube/01.png

## YouTube in HD (720p, 1080p, 1440p, 2160p)
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-hd-1/
- Daily users: 3,170 | Rating: 4.25 (169 ratings, 60 with text) | Version: 0.5.3 | Last updated: 2026-08-31 | Badge: none
- Repo: https://github.com/james-fray/YouTube-HD/issues | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated; GitHub issues link; donation link
- Declared permissions: `API: storage, scripting; hosts: *://www.youtube.com/*, *://www.youtube-nocookie.com/*; data collection declared: required=none, optional=none`
- Feature tags: quality, codec
- Features:
  - Automatically changes YouTube video quality to a user-selected high-quality resolution
  - Select the highest quality by default; almost all qualities selectable
  - Do not change the quality if an HD quality is already selected (can be disabled)
  - Optionally disable frame rates above 30 FPS (for browsers that drop frames at high frame rate)
  - Change quality of hidden tabs to save bandwidth
  - Use cases: YouTube starts low, YouTube auto-raises quality and shows the loader, YouTube switches to 60 fps and frames drop
  - Developer's sibling tools named in the listing: YouTube use Flash Player, no Annotations, no Buffer (no autoplay), Stop AutoPlay Next, toggle Flash and HTML, Player AdBlocker, auto Pause and Resume, Stop Button, Theater Mode for YouTube
- External service/API: none; permissions: storage, scripting, youtube.com, youtube-nocookie.com
- Review highlights: not fetched (outside the top 10); rating 4.25 across 169 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-hd-1/01.png, .atlas/research/store-images/firefox/youtube-hd-1/02.png

## enhanced-h264ify
- URL: https://addons.mozilla.org/en-US/firefox/addon/enhanced-h264ify/
- Daily users: 19,768 | Rating: 4.46 (122 ratings, 58 with text) | Version: 2.2.1 | Last updated: 2024-05-30 | Badge: none
- Repo: https://github.com/alextrv/enhanced-h264ify | License: MIT License | Price/model: free; open source (MIT); Ko-fi link
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://*.youtu.be/*`
- Feature tags: codec, quality
- Features:
  - Fork of h264ify: choose which video codec YouTube plays
  - Manual blocking of H.264, VP8, VP9 and AV1 codecs and of 60 fps video
  - Default: blocks everything but H.264 and 60 fps video (benefit: many devices decode H.264 in hardware but not VP8/VP9)
  - Works only on YouTube (youtube.com, youtube-nocookie.com, youtu.be)
- External service/API: none; permissions: storage plus YouTube hosts
- Review highlights: not fetched (outside the top 10); rating 4.46 across 122 ratings
- Screenshots: .atlas/research/store-images/firefox/enhanced-h264ify/01.png

## Youtube Background Play Fix
- URL: https://addons.mozilla.org/en-US/firefox/addon/backstage-play/
- Daily users: 8,064 | Rating: 4.72 (32 ratings, 20 with text) | Version: 1.2.0 | Last updated: 2026-02-19 | Badge: none
- Repo: https://github.com/Rigmunssel/FixYTBackground | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0)
- Declared permissions: `API: none; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://music.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: bg-play
- Features:
  - Enables background audio playback for YouTube and YouTube Music
  - Prevents the video from pausing when you switch tabs or minimize the browser
  - Works on Firefox for Android and desktop
  - Bugs reported through GitHub issues
- External service/API: none; permissions: youtube.com, youtube-nocookie.com, music.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.72 across 32 ratings, created 2026-01
- Screenshots: none (listing has no screenshots)

## Background Playback Helper (YouTube & Vimeo)
- URL: https://addons.mozilla.org/en-US/firefox/addon/playback-helper-youtube-vimeo/
- Daily users: 4,010 | Rating: 4.97 (31 ratings, 22 with text) | Version: 0.6.0 | Last updated: 2026-03-11 | Badge: none
- Repo: https://github.com/phase3dev/background-playback-helper-youtube | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: storage, tabs; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://*.vimeo.com/*; data collection declared: required=none, optional=none`
- Feature tags: bg-play, nonstop
- Features:
  - Firefox for Android: maintains background audio when switching apps or locking the screen
  - Firefox Desktop: prevents pausing on tab switch; stabilizes playback in the Firefox sidebar or DevTools responsive mode (verified on Windows only)
  - Supports YouTube, YouTube Music and Vimeo
  - Active status indicator: green icon and badge when a supported site is active
  - Dark-mode popup UI with a master enable/disable toggle and per-site selection
  - Optional keep-alive: harmless non-character key activity signals to reduce inactivity pauses
  - Stop Video Pause: auto-dismisses "Still watching?" and "Video paused. Continue watching?" on YouTube and YouTube Music
  - 0.6.0 targets YouTube's newly rolled-out phased detection and blocking of background playback on mobile and desktop
  - Privacy: all logic local, no data collected or transmitted
- External service/API: none; permissions: storage, tabs, youtube.com, youtube-nocookie.com, vimeo.com
- Review highlights: not fetched (outside the top 10); rating 4.97 across 31 ratings; developer asks users to email bug reports instead of low ratings
- Screenshots: .atlas/research/store-images/firefox/playback-helper-youtube-vimeo/01.png, .atlas/research/store-images/firefox/playback-helper-youtube-vimeo/02.png, .atlas/research/store-images/firefox/playback-helper-youtube-vimeo/03.png, .atlas/research/store-images/firefox/playback-helper-youtube-vimeo/04.png, .atlas/research/store-images/firefox/playback-helper-youtube-vimeo/05.png, .atlas/research/store-images/firefox/playback-helper-youtube-vimeo/06.png

## YouTube Background Play
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-background-play/
- Daily users: 3,697 | Rating: 5.00 (13 ratings, 8 with text) | Version: 1.0.0 | Last updated: 2026-02-20 | Badge: none
- Repo: https://github.com/yourusername/youtube-background-play | License: MIT License | Price/model: free; open source (MIT); repo link is a template placeholder (github.com/yourusername/...)
- Declared permissions: `API: none; hosts: *://*.youtube.com/*, *://youtube.com/*; data collection declared: required=none, optional=none`
- Flags: low-effort listing (placeholder homepage), 3.7k daily users but only 13 ratings
- Feature tags: bg-play
- Features:
  - Keeps YouTube videos playing when you switch tabs or minimize the browser
  - Intended for listening to music or podcasts in the background, also while working in other apps
- External service/API: none; permissions: youtube.com
- Review highlights: not fetched (outside the top 10); rating 5.00 across 13 ratings
- Screenshots: none (listing has no screenshots)

## YouTube Audio
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-audio/
- Daily users: 12,786 | Rating: 3.74 (533 ratings, 228 with text) | Version: 1.0.4 | Last updated: 2026-10-18 | Badge: spotlight
- Repo: none listed | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); AMO "Spotlight" promoted add-on
- Declared permissions: `API: tabs, webRequest, webRequestBlocking, storage, downloads; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://music.youtube.com/*, *://m.youtube.com/*, *://*.googlevideo.com/*, https://sponsor.ajay.app/*; data collection declared: required=websiteContent, optional=none`
- Flags: audio-only playback plus ad/tracking blocking plus audio download (YouTube Terms-of-Service issues); uses googlevideo streams directly
- Feature tags: audio-only, bg-play, adblock, sponsor-skip, volume, download, hide-shorts, hide-feed, hide-comments, thumbs, autoplay, quality
- Features:
  - Audio only: points the player at a direct audio stream and stops the video download at the source (less battery and data), native player controls kept
  - Background and lock-screen play with the OS media controls
  - "Ghost mode": blocks ads and tracking pings before they leave the browser (on by default)
  - SponsorBlock-style auto-skip of sponsor reads and off-topic intros (a 4-character hash goes to the SponsorBlock API; off if lookup disabled)
  - YouTube Music: loudness normalization and a 5-band equalizer
  - Save a track: download the current audio as a single .m4a
  - Tidy page (optional): hide Shorts, recommendations, comments, thumbnails or channel pictures; cap the quality; switch off autoplay-next
  - Always logged out: never reads or touches your YouTube account; requests carry no cookies
  - Graceful fallback: live, made-for-kids, age-restricted and members-only videos play normally at lowest quality; YouTube Music switches to the song version when available
  - Firefox 128+, desktop and Android
- External service/API: optional: sponsor.ajay.app for segment lookup; otherwise YouTube and googlevideo.com only; permissions include webRequest(+Blocking), downloads, tabs
- Review highlights: not fetched (outside the top 10); rating 3.74 across 533 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-audio/01.png, .atlas/research/store-images/firefox/youtube-audio/02.png, .atlas/research/store-images/firefox/youtube-audio/03.png, .atlas/research/store-images/firefox/youtube-audio/04.png, .atlas/research/store-images/firefox/youtube-audio/05.png

## RYS — Remove YouTube Suggestions
- URL: https://addons.mozilla.org/en-US/firefox/addon/remove-youtube-s-suggestions/
- Daily users: 4,891 | Rating: 4.13 (199 ratings, 116 with text) | Version: 4.5.2 | Last updated: 2026-10-11 | Badge: none
- Repo: https://github.com/lawrencehook/remove-youtube-suggestions | License: Mozilla Public License 2.0 | Price/model: freemium; free core, "Premium" unlocks 60+ advanced settings (signing in, no payment, enables any 2 premium features for free); open source (MPL-2.0)
- Declared permissions: `API: storage; hosts: *://www.youtube.com/*, *://m.youtube.com/*`
- Feature tags: hide-feed, hide-shorts, hide-comments, hide-ui, ad-skip, search, autoplay, cinema, layout, filter, focus, theme, shorts-tools
- Features:
  - 80+ options to hide recommended videos, Shorts, comments and more, making YouTube less engaging; search through 65+ settings (preview caption)
  - Free: hide homepage suggestions, Shorts, sidebar recommendations, end-of-video suggestions, comments, search suggestions
  - Free: skip and close ads; redirect Shorts to the default viewer
  - Premium: autoplay and ambient-mode control
  - Premium: homepage redirects (Subscriptions, Watch Later, Library)
  - Premium: comment filtering (timestamps only, hide usernames, hide replies)
  - Premium: nav bar and sidebar customization; theater mode, grayscale mode, search-engine mode
  - Premium: settings lock (timer and code entry); schedule when the extension is active
  - Simplify the video player (remove sidebar suggestions, comments, menu buttons)
  - Privacy: no data collection or sharing; updated since 2018
- External service/API: sign-in for premium unlock (RYS account); otherwise none; permissions: storage, www.youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.13 across 199 ratings
- Screenshots: .atlas/research/store-images/firefox/remove-youtube-s-suggestions/01.png, .atlas/research/store-images/firefox/remove-youtube-s-suggestions/02.png, .atlas/research/store-images/firefox/remove-youtube-s-suggestions/03.png, .atlas/research/store-images/firefox/remove-youtube-s-suggestions/04.png, .atlas/research/store-images/firefox/remove-youtube-s-suggestions/05.png, .atlas/research/store-images/firefox/remove-youtube-s-suggestions/06.png

## YouTube Comment Search
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-comment-search/
- Daily users: 1,704 | Rating: 3.82 (55 ratings, 39 with text) | Version: 2.5.0 | Last updated: 2023-09-07 | Badge: none
- Repo: https://github.com/pancevac/ytsc-extension | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0)
- Declared permissions: `API: tabs, activeTab; hosts: https://youtube-proxy-service.onrender.com/api/v1/*, *://*.youtube.com/*`
- Feature tags: comments-tools, search
- Features:
  - Search a video's comments by keyword from a popup (Ctrl+Alt+S or toolbar icon on the watch page)
  - Limits stated: results are not guaranteed to be complete, at most 100 results per request including replies, spam or duplicate comments may be filtered
  - Backed by YouTube API quota of 10,000 requests per day
- External service/API: yes, required: youtube-proxy-service.onrender.com (proxy to the YouTube API) with a shared daily quota; permissions: tabs, activeTab, youtube.com
- Review highlights: not fetched (outside the top 10); last updated 2023-09
- Screenshots: .atlas/research/store-images/firefox/youtube-comment-search/01.png

## YCS - YouTube Comment Search (Continued)
- URL: https://addons.mozilla.org/en-US/firefox/addon/ycs-continued/
- Daily users: 1,608 | Rating: 4.78 (36 ratings, 26 with text) | Version: 1.10.4 | Last updated: 2026-10-26 | Badge: none
- Repo: https://github.com/pc035860/YCS-cont | License: MIT License | Price/model: free; open source (MIT); donation mention
- Declared permissions: `API: storage, scripting; hosts: *://*.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: comments-tools, search, livechat, captions
- Features:
  - Search comments, replies, chat replay and video transcript of the current video by content, author or time
  - Quick search by timestamp, author, content; flexible (fuzzy) and multilingual search; search by emoji
  - Export comments, replies, chat replay and video transcript
  - Unlimited comment loading; works in incognito
  - Filters: time stamps, author, likes (sort), replied (sort by reply count), members, donated (chat), show random comment
  - Transcript lookup by minute (for example "15:" for the 15th minute); "@" finds comments addressed to a user
  - YouTube Shorts support (open the short through the YCS badge)
  - Real-time live-chat recording on live streams
  - Optional YouTube Data API v3 integration as an alternative to the Innertube API
  - Fixes: loading broken since 2024-03, reply-count sorting, XSS hardening, cache-loading performance
  - Small, low CPU and memory
- External service/API: Innertube (YouTube's internal API) by default; optional YouTube Data API v3 key; permissions: storage, scripting, youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.78 across 36 ratings
- Screenshots: .atlas/research/store-images/firefox/ycs-continued/01.png, .atlas/research/store-images/firefox/ycs-continued/02.png, .atlas/research/store-images/firefox/ycs-continued/03.png, .atlas/research/store-images/firefox/ycs-continued/04.png

## HyperChat [Improved YouTube Chat]
- URL: https://addons.mozilla.org/en-US/firefox/addon/hyperchat/
- Daily users: 4,303 | Rating: 4.63 (68 ratings, 23 with text) | Version: 4.0.2 | Last updated: 2026-10-15 | Badge: none
- Repo: https://github.com/LiveTL/HyperChat | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); OpenCollective donations
- Declared permissions: `API: storage; hosts: https://www.youtube.com/live_chat*, https://www.youtube.com/live_chat_replay*, https://studio.youtube.com/live_chat*, https://studio.youtube.com/live_chat_replay*, https://www.youtube.com/embed/hyperchat_embed?*`
- Feature tags: livechat, theme, filter
- Features:
  - CPU/RAM optimizations: memory leak patches, custom-built message renderer, cross-extension message parser
  - Light/dark theme; show or hide profile icons, timestamps, usernames, user badges, mentions, emojis
  - Toggle sticky superchats; render system-native emojis
  - Translate chat messages with Google Translate (auto-message translation)
  - Member-only message filter; skip emoji-only messages; auto-switch to "Live Chat"
  - Compatible with LiveTL and YtcFilter; same developers as LiveTL
  - Works on live_chat and live_chat_replay frames (including YouTube Studio)
- External service/API: Google Translate for message translation (optional); otherwise none
- Review highlights: not fetched (outside the top 10); rating 4.63 across 68 ratings
- Screenshots: .atlas/research/store-images/firefox/hyperchat/01.png, .atlas/research/store-images/firefox/hyperchat/02.png, .atlas/research/store-images/firefox/hyperchat/03.png, .atlas/research/store-images/firefox/hyperchat/04.png

## DF YouTube (Distraction Free)
- URL: https://addons.mozilla.org/en-US/firefox/addon/df-youtube/
- Daily users: 9,901 | Rating: 4.56 (267 ratings, 147 with text) | Version: 1.13.504 | Last updated: 2019-11-19 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link; last updated 2019-11 (stale)
- Declared permissions: `API: storage, tabs, notifications; hosts: https://api.mailgun.net/*, https://www.youtube.com/*, https://www.youtube.com/?*, https://www.youtube.com/watch*`
- Feature tags: hide-feed, hide-comments, hide-ui, autoplay, playlist, focus
- Features:
  - Hides the video recommendations sidebar and the related videos shown at the end of videos (defaults)
  - Removes the recommended-videos grid on the homepage; hide the feed and the left subscriptions bar
  - Hide comments; disable playlists sitewide; disable autoplay
  - Everything is configurable; feed no longer flashes before it is hidden (2019 fix)
  - In-extension feedback button (sends to the developer through api.mailgun.net)
  - Listing recommends pairing with uBlock Origin for video ads
- External service/API: mailgun.net only for the feedback button; permissions: storage, tabs, notifications, youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.56 across 267 ratings
- Screenshots: .atlas/research/store-images/firefox/df-youtube/01.png, .atlas/research/store-images/firefox/df-youtube/02.png, .atlas/research/store-images/firefox/df-youtube/03.png

## Tweaks for YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/tweaks-for-youtube/
- Daily users: 7,982 | Rating: 4.58 (201 ratings, 127 with text) | Version: 3.94.0 | Last updated: 2026-10-21 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free; closed source ("All Rights Reserved"); Patreon supported
- Declared permissions: `API: contextMenus, storage; hosts: *://www.youtube.com/*, *://www.youtube-nocookie.com/*, *://youtube.googleapis.com/*, *://music.youtube.com/*`
- Feature tags: speed, volume, quality, autoplay, nonstop, shortcuts, progress, captions, screenshot, pip-popup, cinema, transform, loop, sponsor-skip, hide-shorts, hide-feed, hide-comments, hide-ui, filter, layout, theme, thumbs, ad-skip, search, livechat, playlist, focus, shorts-tools
- Features:
  - 100+ features, all off by default; covers YouTube, embedded videos, YouTube Music and Google Drive videos
  - Mouse control: 50+ actions on unlimited custom mouse wheel/button regions of the player, shorts player or miniplayer (seek by second/frame/chapter/%, volume, speed 0.1x-16x, quality, subtitle size, snapshot, save to playlist, comments in sidebar)
  - Keyboard shortcuts, including global shortcuts that control the active video from any app
  - Audio: Auto Gain (balance loudness), Mono Mix, High Pass Filter, Boost Volume; initial volume and playback rate per video
  - Video chapter navigation by mouse on the progress-bar chapter container
  - Player controls always visible, hidden, hover-only or minimalist progress bar; custom time display; volume level shown instead of mute button; always-visible volume bar
  - Content filters: hide watched, shorts, upcoming, live, mixes and other sections on various pages; dim watched videos
  - Clean player (annotations, cards, watermark, end screen, title, heatmap, ambient mode, overlays); clean page (doodle, reminders, hints, surveys, nudges, some ads)
  - Hide comments, sidebar, related videos; chat visibility (show replay, auto-hide live chat); channel trailer autoplay off
  - Custom rich-grid layout: container width, font size, avatars, items per row; full video titles; disable inline hover playback
  - Shorts: hide overlays, title links to the normal player, open Shorts in the normal player, autoplay next Short, loop Shorts
  - Full-size thumbnails and avatars (Ctrl+click); playlist duration; video filter (brightness/contrast 0-200%); Zen mode (dim, blur, grayscale except the player)
  - Sticky player (compact/wide, position and offset); expanded cinema mode with header/scrollbar hidden; transparent description and buttons; fixed sidebar; thin scrollbars
  - Description expanded or minimalist, exact date/view count; auto-show chapters, transcript, description or comments in the sidebar
  - Autoplay: turn the Autoplay switch off, disable autoplay next in playlist, disable "Video paused. Continue watching?", initial player state, pause previous video, loop normal videos
  - Skip video intro/outro (start from a time or chapter, per channel); skip ads by shortcut or delay, auto-click "Skip Ads"
  - Preferred resolution per context (fullscreen, cinema, embedded, background); initial fullscreen; subtitles on/off, fixed position, centered
  - Picture-in-Picture with local/global shortcuts (Chromium); instant fullscreen; instant play/pause; middle-click fullscreen
  - Video snapshot as JPG/PNG/WebP, optional subtitles, clipboard copy (Chromium)
  - Video download link template (for yt-dlp or browser tools); copy video URL (short/long, with time)
  - Comments: focus input, paste timestamp (minus 1-3 s), sort newest/top, back-to-comment, back-to-top button
  - Search: focus search box hotkey, open results in new tab with Ctrl/Shift+Enter, "Search YouTube for ..." context menu
  - Playback info overlay (time, remaining, volume, rate); embed mode (embedded player in tab or popup); custom CSS and JavaScript
  - Experimental: overlaid sidebar in cinema/fullscreen; secondary right/middle-click actions on subscribe button, sort menu, share button, next button, thumbnail menus
- External service/API: none; privacy statement: no personal data collected, nothing sent to a server; permissions: contextMenus, storage, youtube.com, music.youtube.com, youtube-nocookie.com, youtube.googleapis.com
- Review highlights: not fetched (outside the top 10); rating 4.58 across 201 ratings
- Screenshots: .atlas/research/store-images/firefox/tweaks-for-youtube/01.png, .atlas/research/store-images/firefox/tweaks-for-youtube/02.png, .atlas/research/store-images/firefox/tweaks-for-youtube/03.png, .atlas/research/store-images/firefox/tweaks-for-youtube/04.png

## YouTube Tweaks
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-tweaks/
- Daily users: 20,070 | Rating: 4.84 (329 ratings, 166 with text) | Version: 2026.10.26 | Last updated: 2026-10-26 | Badge: recommended
- Repo: https://github.com/pedrosouu/yt-tweaks | License: MIT License | Price/model: free; open source (MIT); donation link; also on Chrome, Brave, Opera, Edge
- Declared permissions: `API: storage; hosts: https://www.youtube.com/*`
- Feature tags: layout, hide-shorts, hide-feed, hide-comments, hide-ui, search, speed, quality, volume, shortcuts, screenshot, transform, pip-popup, cinema, nonstop, autoplay, theme, progress, livechat, thumbs, translate-off, loop, focus, playlist, shorts-tools
- Features:
  - Videos per row / thumbnail size; video grid: hide profile pictures, decrease font size; show full video titles, channel name and upload time
  - Hide Shorts, Mixes, watched videos, upcoming videos and live streams; hide irrelevant search results ("For you", "People also watched", "Previously watched"); search results in grid view
  - Compact left sidebar/header; channel page defaults to Videos tab; open search results in new tab; YouTube logo redirects to Subscriptions; homepage: hide topic bar and Latest posts
  - Comments: auto-expand, show in sidebar, sort by newest by default; auto-expand video description; like/dislike hotkeys
  - Live chat: disable auto-opening, default to "Live chat" instead of "Top chat"
  - Playback: default quality (Auto HD/4K/8K), default speed, per-channel speed, mouse-wheel speed/volume/seek, volume boost, mono audio, force original audio track
  - Video focus; screenshot; zoom/flip/mirror/rotate video; pause previous video when another starts; pin video while scrolling; toggle PiP hotkey
  - Disable "Video paused. Continue watching?"; disable auto-play next in playlists; disable number-key shortcuts
  - Shorts: auto-scroll, disable/stop looping
  - Player UI: show remaining time, hide controls on pause, always show progress bar, automatic and fullscreen theater mode, Nyan cat progress bar, bring back the red subscribe button
  - Watch page: open channels from sidebar, hide end cards and Share/Download/Clip/Thanks/Save buttons; left sidebar: hide Shorts, Explore, More from YouTube
  - Hotkeys: navigation (Home, Subscriptions, Shorts), playback (seek, undo seek, volume, speed, quality, loop), scroll-to-top; back-to-top button
  - 100+ YouTube themes; custom CSS/JavaScript; "more animations"
- External service/API: none; permissions: storage, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.84 across 329 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-tweaks/01.png, .atlas/research/store-images/firefox/youtube-tweaks/02.png, .atlas/research/store-images/firefox/youtube-tweaks/03.png, .atlas/research/store-images/firefox/youtube-tweaks/04.png

## YouTube Enhancer 💻
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-enhancer-vc/
- Daily users: 10,359 | Rating: 4.55 (121 ratings, 75 with text) | Version: 1.35.0 | Last updated: 2026-09-08 | Badge: none
- Repo: https://github.com/YouTube-Enhancer/extension | License: MIT License | Price/model: free; open source (MIT); Ko-fi support, Discord community
- Declared permissions: `API: activeTab, webRequest, storage, tabs, scripting; hosts: https://m.youtube.com/*, https://www.youtube.com/*, https://youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: speed, volume, quality, loop, nonstop, cinema, captions, screenshot, theme, hide-shorts, hide-ui, hide-feed, shortcuts, progress, pip-popup
- Features:
  - Default playback speed with on-screen buttons; mouse-wheel speed or volume
  - Default video quality (1080p, 4K, ...)
  - Boost volume beyond YouTube's limit; global volume so every video starts at the preferred level
  - Loop videos easily; remember separate volume for Shorts and regular videos
  - Skip "Video paused? Continue watching?" prompts; auto-pause videos in background tabs
  - Auto-enable theater mode or maximize the player; quick access to transcripts
  - Remove redirect links and unnecessary URL parameters
  - Capture stills from the video in multiple formats
  - Deep-dark themes (Dracula, Solarized, custom colors/CSS)
  - Resume videos where you left off
  - Hide elements such as live chat, Shorts, end-screen cards "and much more"
  - Extension buttons below the player and a playback-feature overlay (preview captions)
- External service/API: none; permissions: activeTab, webRequest, storage, tabs, scripting, youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.55 across 121 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-enhancer-vc/01.png, .atlas/research/store-images/firefox/youtube-enhancer-vc/02.png, .atlas/research/store-images/firefox/youtube-enhancer-vc/03.png, .atlas/research/store-images/firefox/youtube-enhancer-vc/04.png, .atlas/research/store-images/firefox/youtube-enhancer-vc/05.png, .atlas/research/store-images/firefox/youtube-enhancer-vc/06.png

## Less Mixes for YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/less-mixes-for-youtube/
- Daily users: 7,558 | Rating: 4.76 (82 ratings, 49 with text) | Version: 3.1.4 | Last updated: 2026-10-21 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, GitHub page for support; no repo link in listing
- Declared permissions: `API: declarativeNetRequestWithHostAccess, storage; hosts: *://*.youtube.com/*`
- Feature tags: playlist, autoplay
- Features:
  - Stops YouTube from turning music videos into auto-generated Mix playlists
  - Keep Music Videos as Videos: prevents Mix creation for videos, singles and OSTs
  - Turn Mixes into Single Videos: plays only the displayed video instead of starting the Mix
  - Turn My Mix into Single Video: plays only the selected video instead of "My Mix"
  - Works with autoplay on or off
  - Mechanism: strips URL parameters such as "&list=" and "&start_radio=1" and redirects to the clean URL (declarativeNetRequest)
  - Available for Firefox desktop and Android and Chromium browsers; needs a fresh YouTube tab after install
- External service/API: none; permissions: declarativeNetRequestWithHostAccess, storage, youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.76 across 82 ratings
- Screenshots: .atlas/research/store-images/firefox/less-mixes-for-youtube/01.png, .atlas/research/store-images/firefox/less-mixes-for-youtube/02.png, .atlas/research/store-images/firefox/less-mixes-for-youtube/03.png

## YouTube Row Fixer
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-row-fixer-extension/
- Daily users: 11,116 | Rating: 4.42 (36 ratings, 21 with text) | Version: 1.1.6 | Last updated: 2025-09-01 | Badge: none
- Repo: https://github.com/sapondanaisriwan/youtube-row-fixer | License: MIT License | Price/model: free; open source (MIT); Ko-fi donations
- Declared permissions: `API: scripting, storage; hosts: https://www.youtube.com/*`
- Feature tags: layout, hide-shorts, thumbs
- Features:
  - Customize the number of videos per row, posts per row and shelf items per row
  - Option to hide Shorts and channel profile images
  - Show full video titles without truncation
  - Fixes large/oversized thumbnail display issues
  - Responsive layout with dynamic row adjustments
- External service/API: none; permissions: scripting, storage, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.42 across 36 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-row-fixer-extension/01.png, .atlas/research/store-images/firefox/youtube-row-fixer-extension/02.png

## YouTube Redux
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-redux/
- Daily users: 12,609 | Rating: 4.24 (311 ratings, 195 with text) | Version: 3.12.0 | Last updated: 2026-05-13 | Badge: none
- Repo: https://github.com/omnidevZero/YouTubeRedux | License: MIT License | Price/model: free; open source (MIT); donation link
- Declared permissions: `API: activeTab, storage; hosts: *://*.youtube.com/*; optional: downloads; data collection declared: required=none, optional=none`
- Feature tags: legacy, layout, theme, hide-ui, dislikes, autoplay, nonstop, hide-feed
- Features:
  - Replicates the old YouTube look and features inside the modern layout
  - Classic video page layout, plus an alternative that mimics even older layouts
  - Small video player with size presets and pillarboxing
  - Disable infinite scrolling for comments and related videos
  - Custom number of videos per row on the home page (1 to 10, default 4)
  - True fullscreen mode
  - Automatic video unpausing during long sessions
  - Restore the classic YouTube logo and favicons
  - Precise, non-truncated like/dislike values on the video page
  - Dark theme for playlists matching the old design
  - Hide the "Autoplay" or "Play on TV" button
  - Visual changes to home page, search results, channel page, explore pages and others
  - Customizable settings; optional downloads permission
- External service/API: none stated; permissions: activeTab, storage, youtube.com; optional: downloads
- Review highlights: not fetched (outside the top 10); rating 4.24 across 311 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-redux/01.png, .atlas/research/store-images/firefox/youtube-redux/02.png, .atlas/research/store-images/firefox/youtube-redux/03.png, .atlas/research/store-images/firefox/youtube-redux/04.png, .atlas/research/store-images/firefox/youtube-redux/05.png, .atlas/research/store-images/firefox/youtube-redux/06.png

## SocialFocus: Hide Distractions
- URL: https://addons.mozilla.org/en-US/firefox/addon/socialfocus/
- Daily users: 15,981 | Rating: 4.34 (143 ratings, 81 with text) | Version: 8.0 | Last updated: 2026-08-11 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free tier; premium/subscription hints; closed source ("All Rights Reserved"); same developer as UnTrap for YouTube
- Declared permissions: `API: storage, activeTab, management, alarms; hosts: *://*.youtube.com/*, *://*.facebook.com/*, *://*.linkedin.com/*, *://*.twitter.com/*, *://twitter.com/*, *://*.x.com/* (+10 more)`
- Flags: multi-site (YouTube is one of ~10 sites); also ships on Safari (App Store id1661093205): competitor on the target platform
- Feature tags: hide-feed, hide-shorts, hide-comments, hide-ui, thumbs, focus, theme
- Features:
  - 115+ features across sites; selectively hide attention-grabbing components per site
  - YouTube: hide Home recommended videos, video page sidebar, related videos, Shorts, comments, Explore, Subscriptions, video end screen, thumbnails
  - Facebook: home feed, stories, sponsored posts, People you may know, Reels, suggested groups
  - Instagram: feed, stories, promoted posts, suggestions
  - LinkedIn: feed, metrics, ads; Gmail: ads
  - Reddit: home feed, related posts, trending, Premium ads, popular communities, left sidebar, and dozens of UI elements
  - Twitter/X: timelines, tweet box, metrics, nav items, Premium ads, trends, who to follow, footer
  - Password protection; launch tweaks; export, import and reset settings; extension dark/light theme
  - Compatible with mobile websites; available on Safari, Chrome, Firefox, Edge, Whale
- External service/API: none stated; permissions include management, alarms, activeTab and host access to YouTube, Facebook, LinkedIn, Twitter/X, Reddit, Instagram, Google, Hacker News, Twitch, Pinterest, Netflix and others
- Review highlights: not fetched (outside the top 10); rating 4.34 across 143 ratings
- Screenshots: .atlas/research/store-images/firefox/socialfocus/01.png, .atlas/research/store-images/firefox/socialfocus/02.png, .atlas/research/store-images/firefox/socialfocus/03.png, .atlas/research/store-images/firefox/socialfocus/04.png

## YouTube LevelUp
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-levelup/
- Daily users: 698 | Rating: 4.69 (16 ratings, 10 with text) | Version: 1.6.0 | Last updated: 2026-10-22 | Badge: none
- Repo: https://github.com/tn3w/YouTube-LevelUp | License: Apache License 2.0 | Price/model: free; open source (Apache-2.0); same author as ShortsLess
- Declared permissions: `API: storage; hosts: https://returnyoutubedislikeapi.com/*, https://sponsor.ajay.app/*, *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://*.youtubekids.com/*; data collection declared: required=none, optional=none`
- Feature tags: hide-shorts, hide-feed, dislikes, sponsor-skip, nonstop, translate-off, bg-play
- Features:
  - "Seven essential improvements" in one lightweight extension
  - Shorts Blocker: hides Shorts tabs, shelves and videos on all YouTube pages
  - Members-Only Content Blocker: hides members-only videos from feeds and recommendations
  - Dislike Counter Restoration: uses the Return YouTube Dislike API
  - Smart Sponsor Skipping: uses the SponsorBlock API
  - Auto-Continue Watching: bypasses "Are you still watching?" while you are active
  - Anti-Translate: restores original audio and descriptions on dubbed videos
  - Background Playback: keeps videos playing when the tab is in the background
  - Recommends pairing with uBlock Origin; no tracking, local caching only
  - Also covers YouTube Kids (youtubekids.com host)
- External service/API: yes, optional/required for two features: returnyoutubedislikeapi.com and sponsor.ajay.app
- Review highlights: not fetched (outside the top 10); about 700 daily users, rating 4.69 across 16 ratings
- Screenshots: none (listing has no screenshots)

## AdBlocker for YouTube™ Video
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-adblock/
- Daily users: 5,394 | Rating: 3.38 (86 ratings, 39 with text) | Version: 0.1.6resigned1 | Last updated: 2024-04-25 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link; last updated 2024-04
- Declared permissions: `API: storage, webRequest, webRequestBlocking; hosts: http://*/*, https://*/*, *://*.youtube.com/*`
- Flags: ad blocking (YouTube Terms-of-Service); requests all-sites access with webRequestBlocking
- Feature tags: adblock
- Features:
  - Removes all sorts of advertisements and banners from YouTube
  - Hard-coded filtering rules for seamless performance
  - Does not block annotations (turn them off in the player panel)
- External service/API: none; permissions: storage, webRequest, webRequestBlocking, all http(s) URLs
- Review highlights: not fetched (outside the top 10); rating 3.38 across 86 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-adblock/01.png

## Youtube Ad Auto-skipper
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-ad-auto-skipper/
- Daily users: 10,139 | Rating: 4.52 (131 ratings, 76 with text) | Version: 0.6.0 | Last updated: 2024-09-12 | Badge: none
- Repo: https://github.com/squgeim/yt-ad-autoskipper | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); Buy Me a Coffee
- Declared permissions: `API: none; hosts: *://*.youtube.com/*`
- Feature tags: ad-skip
- Features:
  - Auto-clicks the "Skip Ad" button the moment YouTube provides it
  - Not an ad blocker: ads are still served, only skippable ads are skipped
  - Zero options; permission only on youtube.com
- External service/API: none; permissions: *.youtube.com only
- Review highlights: not fetched (outside the top 10); rating 4.52 across 131 ratings; last updated 2024-09
- Screenshots: none (listing has no screenshots)

## YT Ad Speedup - Skip Ads Faster
- URL: https://addons.mozilla.org/en-US/firefox/addon/yt-ad-speedup-skip-ads-faster/
- Daily users: 5,138 | Rating: 3.91 (47 ratings, 29 with text) | Version: 1.0.5 | Last updated: 2023-12-13 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free; closed source; port of a Chrome extension
- Declared permissions: `API: none; hosts: https://*.youtube.com/*`
- Flags: needs manual "Always allow on www.youtube.com" permission grant after install
- Feature tags: ad-skip
- Features:
  - Automatically speeds up ads (16x) and mutes them; normal content unaffected
  - Automatic skipping with no clicks; ad autoplay to reach the skip faster
  - Works in the background; can be used alongside existing ad blockers
  - Roadmap: other video platforms, speed up in-video sponsor content
- External service/API: none; permissions: *.youtube.com
- Review highlights: not fetched (outside the top 10); rating 3.91 across 47 ratings; last updated 2023-12
- Screenshots: none (listing has no screenshots)

## Ad Speedup Skip Video Ads Fast
- URL: https://addons.mozilla.org/en-US/firefox/addon/ad-speedup-skip-video-ads-fast/
- Daily users: 2,110 | Rating: 4.07 (14 ratings, 12 with text) | Version: 1.0.2 | Last updated: 2023-12-14 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free; closed source; same product as the previous entry (Hackhive / AdSpeedUp)
- Declared permissions: `API: none; hosts: https://*.youtube.com/*`
- Feature tags: ad-skip
- Features:
  - Ads at 16x speed; ads automatically muted; normal content unaffected
  - Automatic skipping with no clicks; ad autoplay; works in the background
  - Works alongside existing ad blockers
  - Roadmap: other video platforms, speed up in-video sponsor content
- External service/API: none; permissions: *.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.07 across 14 ratings
- Screenshots: none (listing has no screenshots)

## Youtube Ad Skipper
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-ad-skipper/
- Daily users: 906 | Rating: 4.04 (28 ratings, 19 with text) | Version: 1.0.3 | Last updated: 2024-09-03 | Badge: none
- Repo: none listed | License: GNU General Public License v2.0 only | Price/model: free; GPL-2.0 license stated, no repo link; donation link
- Declared permissions: `API: tabs, <all_urls>; hosts: *://*.youtube.com/*, *://*.sonyliv.com/*, *://*.mxplayer.in/*`
- Flags: multi-site (YouTube, SonyLiv, MxPlayer); all-sites permission
- Feature tags: ad-skip
- Features:
  - Auto-skips or removes video ads and closes other ads on YouTube after the site provides a Skip Ad button
  - Not an ad blocker: ads still load
  - Also works on SonyLiv and MxPlayer
- External service/API: none; permissions: tabs, all URLs, youtube.com, sonyliv.com, mxplayer.in
- Review highlights: not fetched (outside the top 10); rating 4.04 across 28 ratings
- Screenshots: none (listing has no screenshots)

## SkipIt Adblocker for Youtube
- URL: https://addons.mozilla.org/en-US/firefox/addon/skipit-adblocker-for-youtube/
- Daily users: 3,247 | Rating: 4.21 (14 ratings, 8 with text) | Version: 1.0.1 | Last updated: 2025-06-02 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link
- Declared permissions: `API: alarms, storage, webNavigation, scripting; hosts: https://*/*, *://*/*`
- Flags: requests access to all https sites although it is YouTube-only; marketed as "ad blocking" but only skips short ads
- Feature tags: ad-skip
- Features:
  - Automatically skips short (2 to 3 second) YouTube video ads as they appear
  - One click install, no setup, works silently in the background
  - Lightweight, no lag
  - Privacy statement: no data collected
- External service/API: none; permissions: alarms, storage, webNavigation, scripting, `https://*/*`
- Review highlights: not fetched (outside the top 10); rating 4.21 across 14 ratings; created 2025-05
- Screenshots: .atlas/research/store-images/firefox/skipit-adblocker-for-youtube/01.png, .atlas/research/store-images/firefox/skipit-adblocker-for-youtube/02.png, .atlas/research/store-images/firefox/skipit-adblocker-for-youtube/03.png, .atlas/research/store-images/firefox/skipit-adblocker-for-youtube/04.png, .atlas/research/store-images/firefox/skipit-adblocker-for-youtube/05.png

## LiteTube: Fix YouTube Lag & Adblock Detection
- URL: https://addons.mozilla.org/en-US/firefox/addon/litetube-adfree/
- Daily users: 2,223 | Rating: 4.10 (20 ratings, 15 with text) | Version: 1.5.1 | Last updated: 2026-02-06 | Badge: none
- Repo: https://github.com/LiteTube/LiteTube-AdFree | License: All Rights Reserved | Price/model: free; "All Rights Reserved" license but GitHub source published
- Declared permissions: `API: storage, scripting, declarativeNetRequest; hosts: *://*.youtube.com/*, *://*.doubleclick.net/*, *://*.google-analytics.com/*, *://*.googlesyndication.com/*, *://*.googleadservices.com/*, *://sponsor.ajay.app/*; data collection declared: required=none, optional=none`
- Flags: ad blocking and anti-adblock evasion (YouTube Terms-of-Service); forces the mobile site (m.youtube.com)
- Feature tags: adblock, anti-adblock, sponsor-skip, codec, bg-play, shortcuts, loop, speed, layout, playlist
- Features:
  - Fixes Firefox YouTube lag and "Ad blocker detected" screens by forcing the lightweight mobile layout (m.youtube.com) and injecting code to restore the desktop player look and feel
  - Option to force the H.264 codec for hardware acceleration on older GPUs and Linux
  - "Undetectable" ad-free: strips ads from JSON payloads before they load (network plus payload blocking); bypasses anti-adblock screens
  - SponsorBlock integration: auto-skips sponsor segments, intros, outros, subscription reminders
  - Desktop keyboard shortcuts restored: J, K, L, Space, F, M and arrow keys
  - Hover-for-controls mouse behavior; mouse-wheel scrolling for Shorts
  - Loop button toggle in the player overlay; speed slider 0.25x to 4.0x; one-click copy of the video URL at the current time
  - Restored navigation menu: Trending, Subscriptions, History, Watch Later, Liked Videos, Playlists, "My Channel"
  - Background play: keeps audio going when minimized, tab switched or screen off
  - Max-quality playback
  - Privacy: no tracking, no watch-history collection
- External service/API: sponsor.ajay.app for segments; ad-domain hosts (doubleclick, googlesyndication, googleadservices, google-analytics) listed for blocking; permissions: storage, scripting, declarativeNetRequest
- Review highlights: not fetched (outside the top 10); rating 4.10 across 20 ratings; created 2025-12
- Screenshots: .atlas/research/store-images/firefox/litetube-adfree/01.png, .atlas/research/store-images/firefox/litetube-adfree/02.png, .atlas/research/store-images/firefox/litetube-adfree/03.png, .atlas/research/store-images/firefox/litetube-adfree/04.png, .atlas/research/store-images/firefox/litetube-adfree/05.png, .atlas/research/store-images/firefox/litetube-adfree/06.png

## Adblock Plus
- URL: https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/
- Daily users: 2,832,371 | Rating: 4.37 (11,432 ratings, 3,262 with text) | Version: 4.49.0 | Last updated: 2026-10-27 | Badge: none
- Repo: none listed | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); "Acceptable Ads" program lets advertisers pay to have non-intrusive ads shown by default (can be disabled)
- Declared permissions: `API: <all_urls>, alarms, contextMenus, notifications, storage, tabs, unlimitedStorage, webNavigation, webRequest, webRequestBlocking, devtools; hosts: http://*/*, https://*/*, *://*.youtube.com/*, https://youtube.com/*, https://www.youtube.com/*, https://accounts.adblockplus.org/* (+9 more); optional: management`
- Flags: generic ad blocker; YouTube points only; ad blocking vs YouTube Terms of Service
- Feature tags: adblock
- Features (YouTube-relevant only):
  - Listing: "Block video ads on sites like YouTube"
  - Preview caption: "Adblock Plus even removes those annoying 30-second video ads on YouTube"
  - Summary names YouTube (with Facebook) as a target site; YouTube hosts appear in its permission list
  - Generic features (not YouTube-specific): block popups and annoying ads, faster pages, reduce malvertising, stop trackers and social-media-icon tracking, whitelist sites, add or create own filters, Acceptable Ads opt-out
- External service/API: filter lists and account/telemetry hosts (adblockplus.org, myaccount); broad permissions: all URLs, webRequestBlocking, devtools
- Review highlights: not fetched (outside the top 10)
- Screenshots: none (generic add-on, screenshots intentionally skipped)

## AdGuard AdBlocker
- URL: https://addons.mozilla.org/en-US/firefox/addon/adguard-adblocker/
- Daily users: 1,840,239 | Rating: 4.64 (7,009 ratings, 2,163 with text) | Version: 5.5.3.5 | Last updated: 2026-10-13 | Badge: recommended
- Repo: https://github.com/AdguardTeam/AdguardBrowserExtension/releases | License: GNU Lesser General Public License v3.0 only | Price/model: free; open source (LGPL-3.0)
- Declared permissions: `API: tabs, <all_urls>, webRequest, webRequestBlocking, webNavigation, storage, contextMenus, cookies, privacy; hosts: http://*/*, https://*/*, *://*.adguard.com/*/thankyou.html*, *://*.adguard.info/*/thankyou.html*, *://*.adguard.app/*/thankyou.html*, *://reports.adguard.com/* (+2 more); optional: clipboardRead, clipboardWrite`
- Flags: generic ad blocker; YouTube points only; ad blocking vs YouTube Terms of Service
- Feature tags: adblock
- Features (YouTube-relevant only):
  - Listing: blocks "video ads (including YouTube video ads)" and ads on Facebook and YouTube
  - Cosmetic rules remove first-party ad leftovers (requires all-sites and tab access)
  - Generic features (not YouTube-specific): Tracking Protection filter (5,000+ rules), social media filter, malware/phishing domain blocking (2,000,000+ harmful sites), faster pages
  - Permissions: all URLs, webRequest(+Blocking), webNavigation, cookies, privacy; optional clipboardRead and others
- External service/API: filter updates and report pages (adguard.com / reports.adguard.com); no account needed for the extension
- Review highlights: not fetched (outside the top 10)
- Screenshots: none (generic add-on, screenshots intentionally skipped)

## AdBlock for Firefox
- URL: https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/
- Daily users: 1,387,728 | Rating: 4.21 (3,544 ratings, 968 with text) | Version: 6.51.0 | Last updated: 2026-10-29 | Badge: spotlight
- Repo: none listed | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); AdBlock "Acceptable Ads" style whitelist exists in the product (not stated in listing)
- Declared permissions: `API: <all_urls>, alarms, contextMenus, idle, notifications, storage, tabs, unlimitedStorage, webNavigation, webRequest, webRequestBlocking, devtools; hosts: http://*/*, https://*/*, https://getadblock.com/*, https://*.dev.getadblock.com/*, https://*.myaccount.getadblock.com/*, *://*.youtube.com/* (+10 more); optional: management`
- Flags: generic ad blocker; YouTube points only; ad blocking vs YouTube Terms of Service
- Feature tags: adblock
- Features (YouTube-relevant only):
  - Listing: "Block video ads on YouTube"; summary: "Block all advertisements on all web pages, even Facebook, Youtube, and Hulu"
  - YouTube hosts appear explicitly in its permission list
  - Generic features (not YouTube-specific): all ads blocked by default, customizable filter lists, ad counter, allow ads on chosen sites or pages, text ads allowed on Google search results optionally, 30+ languages, in-page ad reporting
- External service/API: filter lists and account hosts (getadblock.com, myaccount.getadblock.com); broad permissions: all URLs, webRequestBlocking
- Review highlights: not fetched (outside the top 10)
- Screenshots: none (generic add-on, screenshots intentionally skipped)

## AdBlocker Ultimate
- URL: https://addons.mozilla.org/en-US/firefox/addon/adblocker-ultimate/
- Daily users: 1,050,924 | Rating: 4.78 (27,261 ratings, 9,270 with text) | Version: 4.4.2 | Last updated: 2026-10-09 | Badge: spotlight
- Repo: https://github.com/adblockultimate/ | License: GNU Lesser General Public License v3.0 only | Price/model: free; open source (LGPL-3.0); no "acceptable ads"/advertiser whitelist
- Declared permissions: `API: tabs, <all_urls>, webRequest, webRequestBlocking, webNavigation, storage, contextMenus, cookies; hosts: http://*/*, https://*/*, https://*.adblockultimate.net/welcome*, https://*.adblockultimate.net/*/welcome*; optional: clipboardRead, clipboardWrite`
- Flags: generic ad blocker; YouTube points only; ad blocking vs YouTube Terms of Service
- Feature tags: adblock
- Features (YouTube-relevant only):
  - Listing: "extensive filters that filter against annoying display and video ads (including YouTube)"
  - Blocks video ads among text, banner, pop-up, pop-under, overlay, interstitial, webmail and Facebook ads
  - Generic features (not YouTube-specific): blocks malicious domains and tracking, performance benefit (CPU, memory, bandwidth), allow ads on trusted sites, extension also on Chrome, Edge, Opera, Yandex, iPhone/iPad and Windows
- External service/API: filter updates (adblockultimate.net); broad permissions: all URLs, webRequestBlocking, cookies
- Review highlights: not fetched (outside the top 10)
- Screenshots: none (generic add-on, screenshots intentionally skipped)

## Ghostery – Privacy Ad Blocker
- URL: https://addons.mozilla.org/en-US/firefox/addon/ghostery/
- Daily users: 1,016,959 | Rating: 4.43 (5,783 ratings, 2,021 with text) | Version: 10.6.10 | Last updated: 2026-10-28 | Badge: recommended
- Repo: none listed | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); optional paid "contributor" tiers fund the project
- Declared permissions: `API: alarms, contextMenus, cookies, storage, scripting, tabs, activeTab, webNavigation, webRequest, webRequestBlocking, unlimitedStorage; hosts: http://*/*, https://*/*, ws://*/*, wss://*/*, *://www.youtube.com/*; optional: browsingData`
- Flags: generic privacy blocker; YouTube points only; ad blocking vs YouTube Terms of Service
- Feature tags: adblock
- Features (YouTube-relevant only):
  - Listing: "Ghostery blocks ads instantly on YouTube, Facebook, and across the web"
  - Ad-Blocking component "blocks all ads on websites you visit, including Youtube and Facebook"
  - A dedicated youtube.com host permission (YouTube-specific handling of its ad filtering)
  - Generic features (not YouTube-specific): Anti-Tracking (randomized values, per-tracker unblock), Never-Consent (auto-dismiss cookie popups), tracker information per site, tracker preview on search results, WhoTracks.Me database
- External service/API: Ghostery/WhoTracks.Me lists and updates; broad permissions: all URLs, webRequestBlocking, cookies
- Review highlights: not fetched (outside the top 10)
- Screenshots: none (generic add-on, screenshots intentionally skipped)

## Youtube Video Looper
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-video-looper/
- Daily users: 1,786 | Rating: 4.00 (17 ratings, 7 with text) | Version: 5.1resigned1 | Last updated: 2024-04-25 | Badge: none
- Repo: https://github.com/rushikesh988/VideoRepeat | License: MIT License | Price/model: free; open source (MIT)
- Declared permissions: `API: tabs, activeTab, notifications; hosts: none`
- Feature tags: loop
- Features:
  - Auto-repeat (loop) YouTube songs and videos
  - Also works with Facebook and other video-sharing sites
  - Listing text is minimal ("enable autorepeat from video sharing sites")
- External service/API: none; permissions: tabs, activeTab, notifications
- Review highlights: not fetched (outside the top 10); rating 4.00 across 17 ratings
- Screenshots: none (listing has no screenshots)

## YouTube Parts Looper & Bookmarker
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-parts-looper/
- Daily users: 1,140 | Rating: 4.80 (25 ratings, 14 with text) | Version: 1.0.10 | Last updated: 2026-04-05 | Badge: none
- Repo: https://github.com/sumanthegde/ytparts | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0)
- Declared permissions: `API: bookmarks, storage; hosts: *://www.youtube.com/*, *://music.youtube.com/*`
- Feature tags: loop, playlist, shortcuts
- Features:
  - Play, loop and bookmark multiple segments of one YouTube video (use case: an album video where only songs 1 and 3 are wanted)
  - Interval input box below the video: comma-separated ranges such as "00:00-00:30, 5:00-5:30"; hh:mm:ss, mm:ss or plain seconds; Apply plays them in order
  - "Start" and "End" buttons capture the current time into the interval field
  - Keyboard shortcuts: Start Ctrl+Shift+<, End Ctrl+Shift+>, End at video end Ctrl+Shift+;, Apply Ctrl+Shift+' (Cmd on Mac); remappable
  - Bookmarking: save interval lists per video and auto-load them next time; builds a playlist of segments; "All B.s" side pane lists and deletes bookmarks
  - Export bookmarks as an HTML file and import into another browser (stored in a "YouTubePartsBookmarks" bookmarks folder)
  - Looping option for the sequence of portions; preference to make looping the default
  - Experimental: one decimal place for seconds (for intervals like 0:0 - 0:0.9)
  - Works on YouTube Music as well
- External service/API: none; permissions: bookmarks, storage, www.youtube.com, music.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.80 across 25 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-parts-looper/01.png

## YouTube Repeat Button
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-repeat-button/
- Daily users: 2,959 | Rating: 4.27 (41 ratings, 25 with text) | Version: 0.3.0 | Last updated: 2026-06-20 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link; donation link
- Declared permissions: `API: storage, scripting; hosts: *://www.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: loop
- Features:
  - Adds the missing repeat button to the HTML5 YouTube player (loops a single track after a 1 second delay)
  - Button is inactive by default; click once to repeat; turns white when active
  - Since 0.2.1 uses the native loop function and keeps loop state across track navigation
  - Playlist mode asks to switch to normal playing mode (before 0.2.1); append "&repeat=true" to the URL to enable on a new player
- External service/API: none; permissions: storage, scripting, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.27 across 41 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-repeat-button/01.png

## Rotate Youtube Video (+ Zoom / Mirror, AB Loop)
- URL: https://addons.mozilla.org/en-US/firefox/addon/rotate-youtube-video/
- Daily users: 5,626 | Rating: 4.27 (117 ratings, 70 with text) | Version: 6.2.1.1 | Last updated: 2026-08-31 | Badge: none
- Repo: none listed | License: Custom License for Rotate Youtube Video (+ Zoom / Mirror) | Price/model: free; custom license
- Declared permissions: `API: tabs, webNavigation, storage, management, scripting; hosts: https://www.youtube.com/*`
- Feature tags: transform, loop, shortcuts
- Features:
  - Rotate the video by 0, 90, 180, 270 degrees (also affects the video preview)
  - Zoom (scale), translate X/Y, crop and mirror (flip); long-press +/- buttons; values reset on the reset or rotate button; separate values for normal and full-screen mode
  - AB Loop: shift+click the button to set start/end markers, click to toggle the menu, multiple markers looped in order, saved markers viewable from the toolbar action button
  - AB Loop caveat: while ads play, the AB Loop button and shortcuts are disabled until the ads end
  - Add button to the video toolbar
  - Shortcuts: rotate Ctrl+Shift+9, zoom in/out Ctrl+Shift+./, move with Ctrl+Shift+arrows, mirror Ctrl+Shift+8, reset Ctrl+Shift+7, center zoomed video, set/clear ABLoop markers, start/stop ABLoop, open preferences Ctrl+Shift+1
  - Mouse: shift+scroll zoom, shift+left-drag move (axis lock with Shift+Ctrl on Windows/Linux, Shift+Alt on Mac), shift+middle-click reset
  - Shortcuts are remappable via Firefox "Manage Extension Shortcuts"
- External service/API: none; permissions: tabs, webNavigation, storage, management, scripting, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.27 across 117 ratings
- Screenshots: .atlas/research/store-images/firefox/rotate-youtube-video/01.png, .atlas/research/store-images/firefox/rotate-youtube-video/02.png, .atlas/research/store-images/firefox/rotate-youtube-video/03.png, .atlas/research/store-images/firefox/rotate-youtube-video/04.png, .atlas/research/store-images/firefox/rotate-youtube-video/05.png

## Looper
- URL: https://addons.mozilla.org/en-US/firefox/addon/looper/
- Daily users: 471 | Rating: 3.78 (9 ratings, 7 with text) | Version: 1.3 | Last updated: 2023-04-04 | Badge: none
- Repo: none listed | License: GNU General Public License v2.0 only | Price/model: free; open source (GPL-2.0 stated, no repo link)
- Declared permissions: `API: <all_urls>; hosts: none`
- Flags: generic (any video page); all-sites permission
- Feature tags: loop
- Features:
  - Loops a video from point A to point B continuously; click again to stop the loop
  - Marked as a YouTube-tag add-on but works on any page with a video
- External service/API: none; permissions: all URLs
- Review highlights: not fetched (outside the top 10); about 470 daily users, rating 3.78 across 9 ratings
- Screenshots: none (listing has no screenshots)

## Global Speed - Video Speed Control
- URL: https://addons.mozilla.org/en-US/firefox/addon/global-speed/
- Daily users: 65,140 | Rating: 4.73 (315 ratings, 109 with text) | Version: 3.4.124 | Last updated: 2026-09-29 | Badge: recommended
- Repo: https://github.com/polywock/globalSpeed | License: All Rights Reserved | Price/model: free; closed license in listing ("All Rights Reserved") but GitHub project linked (polywock/globalSpeed)
- Declared permissions: `API: storage, webNavigation, scripting, contextMenus; hosts: https://*/*, http://*/*, file://*/*; optional: clipboardRead, clipboardWrite; data collection declared: required=none, optional=none`
- Flags: generic (any video/audio site incl. YouTube, Netflix, Spotify, podcasts); all-sites permission
- Feature tags: speed, shortcuts, volume, cinema, transform
- Features:
  - Apply a default playback speed to all video and audio; works on YouTube, Netflix, Spotify, podcast sites and nearly any streaming site
  - Shortcuts: rewind Z, forward X, frame-by-frame Shift+Z / Shift+X, mark current time Shift+W, jump to marked time W; optional shortcuts for volume, fullscreen and more
  - Draw on the page (right-click menu)
  - Darken the background of a video (right-click menu)
  - Filters on videos or the entire page: invert, grayscale, brightness, contrast, mirroring and more
  - URL rule system to set speed or filters automatically per website
- External service/API: none; permissions: storage, webNavigation, scripting, contextMenus, all URLs; optional clipboard read/write
- Review highlights: not fetched (outside the top 10); rating 4.73 across 315 ratings
- Screenshots: .atlas/research/store-images/firefox/global-speed/01.png

## YouTube Screenshot Button
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-screenshot-button/
- Daily users: 19,482 | Rating: 4.39 (97 ratings, 53 with text) | Version: 4.4.2 | Last updated: 2026-01-13 | Badge: recommended
- Repo: https://github.com/gurumukhi/youtube-screenshot | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0); donation link
- Declared permissions: `API: storage, clipboardWrite, notifications; hosts: *://*.youtube.com/*`
- Feature tags: screenshot, shortcuts
- Features:
  - Adds a screenshot button to the YouTube player (next to the controls) and on YouTube Shorts (top of the player)
  - Shift+A shortcut takes a screenshot
  - Preferences: save as PNG or JPEG; download the file or copy to the clipboard
  - Preferences open with Ctrl+Shift+A or from about:addons
  - Very light weight
- External service/API: none; permissions: storage, clipboardWrite, notifications, youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.39 across 97 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-screenshot-button/01.png, .atlas/research/store-images/firefox/youtube-screenshot-button/02.png, .atlas/research/store-images/firefox/youtube-screenshot-button/03.png

## Annotations Restored for YouTube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/annotations-restored/
- Daily users: 8,991 | Rating: 4.70 (44 ratings, 23 with text) | Version: 1.2 | Last updated: 2022-09-14 | Badge: none
- Repo: https://github.com/isaackd/AnnotationsRestored | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); donation link
- Declared permissions: `API: storage; hosts: https://storage.googleapis.com/biggest_bucket/annotations/*, *://www.youtube.com/*; optional: downloads`
- Feature tags: legacy
- Features:
  - Brings YouTube annotations (discontinued 2019-01-15) back: searches online archives for a video's annotation files and displays them automatically
  - Load locally saved annotation (.xml) files into the current video through the popup
  - Popup page lists all annotations in a video
  - 1.2: close button fixed, speech bubbles interactive, 10 locales
  - Optional downloads permission (save annotation files)
- External service/API: yes, required: an archived annotation store (storage.googleapis.com/biggest_bucket/annotations); permissions: youtube.com, storage
- Review highlights: not fetched (outside the top 10); rating 4.70 across 44 ratings; last updated 2022-09
- Screenshots: .atlas/research/store-images/firefox/annotations-restored/01.png, .atlas/research/store-images/firefox/annotations-restored/02.png, .atlas/research/store-images/firefox/annotations-restored/03.png, .atlas/research/store-images/firefox/annotations-restored/04.png

## YouTube Summary with ChatGPT & Claude
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-summary-with-chatgpt/
- Daily users: 4,942 | Rating: 2.45 (31 ratings, 21 with text) | Version: 2.4.1 | Last updated: 2026-10-17 | Badge: none
- Repo: none listed | License: All Rights Reserved | Price/model: free; closed source; Glasp account ecosystem
- Declared permissions: `API: storage, <all_urls>; hosts: https://glasp.co/*, https://glasp.ai/*, https://chat.openai.com/*, https://chatgpt.com/*, https://chat.com/*, https://claude.ai/* (+5 more)`
- Flags: sends transcript/page data to third-party AI sites; extremely broad permissions (all URLs plus AI chat hosts)
- Feature tags: ai, captions
- Features:
  - Summarize YouTube videos, web articles and PDFs, powered by ChatGPT, Claude, Mistral AI and Gemini
  - Summary with or without timestamps; click a timestamp to jump to that part of the video
  - Transcript view with a "Copy Transcript" button; choose the transcript language
  - Adjustable summary length and custom prompt
  - Multi-language video support
  - Permissions list shows hand-off to chatgpt.com, claude.ai, chat.mistral.ai, gemini.google.com, aistudio.google.com, grok.com and glasp.co
- External service/API: yes, required: Glasp backend (glasp.co / glasp.ai) and the chosen AI chatbot site
- Review highlights: not fetched (outside the top 10); rating 2.45 across 31 ratings (low)
- Screenshots: .atlas/research/store-images/firefox/youtube-summary-with-chatgpt/01.png, .atlas/research/store-images/firefox/youtube-summary-with-chatgpt/02.png, .atlas/research/store-images/firefox/youtube-summary-with-chatgpt/03.png, .atlas/research/store-images/firefox/youtube-summary-with-chatgpt/04.png

## Thumbnail Rating Bar for YouTube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-thumbnail-rating-bar/
- Daily users: 2,544 | Rating: 4.64 (181 ratings, 77 with text) | Version: 1.9.21 | Last updated: 2026-08-11 | Badge: none
- Repo: https://github.com/elliotwaite/youtube-thumbnail-rating-bar | License: Apache License | Price/model: free; open source (Apache-2.0)
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://*.youtubekids.com/*, *://*.returnyoutubedislikeapi.com/*`
- Feature tags: dislikes, thumbs
- Features:
  - Displays a like/dislike rating bar at the bottom of every YouTube thumbnail
  - Purpose: find higher quality content and avoid being clickbaited
  - Also runs on YouTube Kids
- External service/API: yes, required: returnyoutubedislikeapi.com (rating data); permissions: storage, youtube.com, youtubekids.com
- Review highlights: not fetched (outside the top 10); rating 4.64 across 181 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-thumbnail-rating-bar/01.png, .atlas/research/store-images/firefox/youtube-thumbnail-rating-bar/02.png

## YouTube Dislike Counter
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-dislike-counter/
- Daily users: 6,308 | Rating: 3.46 (57 ratings, 46 with text) | Version: 2.1 | Last updated: 2026-03-21 | Badge: none
- Repo: none listed | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0 stated, no repo link); same author as "No Shorts - YouTube Shorts Blocker"
- Declared permissions: `API: storage; hosts: https://www.youtube.com/*, https://m.youtube.com/*, https://returnyoutubedislikeapi.com/*; data collection declared: required=none, optional=none`
- Feature tags: dislikes
- Features:
  - Restores dislike counts for regular videos and for Shorts (desktop and mobile layouts shown in captions)
  - Works in the background integrated with the YouTube interface; simple, lightweight
- External service/API: yes, required: returnyoutubedislikeapi.com (data source); permissions: storage, youtube.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); rating 3.46 across 57 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-dislike-counter/01.png, .atlas/research/store-images/firefox/youtube-dislike-counter/02.png, .atlas/research/store-images/firefox/youtube-dislike-counter/03.png, .atlas/research/store-images/firefox/youtube-dislike-counter/04.png

## ProxTube - Unblock YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/proxtube/
- Daily users: 10,385 | Rating: 3.09 (149 ratings, 71 with text) | Version: 7.0.2 | Last updated: 2021-05-13 | Badge: none
- Repo: none listed | License: CC BY-NC-ND 3.0 | Price/model: free; CC BY-NC-ND license; last updated 2021-05
- Declared permissions: `API: storage, tabs, management, proxy; hosts: http://*/, https://*/`
- Flags: GEO-UNBLOCKING via proxy (circumvents rights-holder country blocks; YouTube Terms-of-Service issue); proxy permission cannot be mirrored in Safari
- Feature tags: proxy
- Features:
  - Toolbar icon toggles the add-on; when a YouTube video is blocked in your country it plays through a proxy server
  - Proxy is deactivated again when leaving the site
  - Supported countries listed as Germany, Netherlands, Spain and others; not US compatible
  - Status and support on proxtube.com and Twitter (EN/DE)
- External service/API: yes, required: ProxTube proxy servers; permissions: proxy, management, tabs, all http(s) URLs
- Review highlights: not fetched (outside the top 10); rating 3.09 across 149 ratings
- Screenshots: .atlas/research/store-images/firefox/proxtube/01.png

## RegretsReporter
- URL: https://addons.mozilla.org/en-US/firefox/addon/regretsreporter/
- Daily users: 4,509 | Rating: 3.73 (143 ratings, 61 with text) | Version: 2.1.2 | Last updated: 2023-01-09 | Badge: line
- Repo: https://github.com/mozilla-extensions/regrets-reporter/ | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0); Mozilla Foundation non-profit; AMO "By Firefox" badge
- Declared permissions: `API: storage, alarms, webRequest; hosts: *://*.youtube.com/*, https://incoming.telemetry.mozilla.org/*`
- Flags: opt-in research data donation (telemetry to Mozilla); desktop only; 18+ only
- Feature tags: research, filter
- Features:
  - Overlays a "stop recommending" button on the thumbnail of every recommended video; pressing it sends "don't recommend this type of video" feedback directly to YouTube
  - Optional comment after sending feedback explaining why the recommendation was unwanted
  - "Report regret" flow for harmful recommendations
  - Opt-in crowdsourced research: Mozilla monitors counts of videos viewed, use of control features and what is recommended; linked to a random user ID, not the YouTube account; collects nothing in private windows
  - Data used for advocacy and campaigning (2021 investigation with 37,380 participants)
  - Desktop Firefox and Chrome only (not mobile); English-only interface
- External service/API: yes, optional: incoming.telemetry.mozilla.org (research data); permissions: youtube.com, webRequest, storage, alarms
- Review highlights: not fetched (outside the top 10); rating 3.73 across 143 ratings; last updated 2023-01
- Screenshots: .atlas/research/store-images/firefox/regretsreporter/01.png, .atlas/research/store-images/firefox/regretsreporter/02.png, .atlas/research/store-images/firefox/regretsreporter/03.png

## Theater Mode for YouTube™ (YouTube Wide Screen)
- URL: https://addons.mozilla.org/en-US/firefox/addon/theater-mode-for-youtube/
- Daily users: 4,507 | Rating: 4.38 (39 ratings, 20 with text) | Version: 0.2.7 | Last updated: 2026-06-18 | Badge: none
- Repo: none listed | License: Mozilla Public License 2.0 | Price/model: free; MPL-2.0 license stated, no repo link; donation link
- Declared permissions: `API: storage; hosts: *://www.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: cinema
- Features:
  - Forces the YouTube player to open in theater mode, even when logged out
  - Switch back with the player button or KeyT; the next visit returns to theater mode
  - No options page; method: sets the relevant cookie on each visit and presses the theater button when the player loads
  - Works in incognito if allowed
  - Developer's sibling extensions named: YouTube use Flash Player, in HD, no Annotations, no Buffer, Stop AutoPlay Next, toggle Flash and HTML, Player AdBlocker, auto Pause and Resume, Stop Button
- External service/API: none; the FAQ page opened after install carries Google Analytics; permissions: storage, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.38 across 39 ratings
- Screenshots: .atlas/research/store-images/firefox/theater-mode-for-youtube/01.png

## Youtube Subtitle Downloader
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-subtitle-downloader/
- Daily users: 4,217 | Rating: 3.90 (107 ratings, 61 with text) | Version: 3.5.3 | Last updated: 2025-07-16 | Badge: none
- Repo: https://github.com/lockex1987/youtube-subtitle-downloader | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0)
- Declared permissions: `API: webRequest; hosts: *://*.youtube.com/*, https://www.youtube.com/api/timedtext?*`
- Flags: DOWNLOADER (subtitles); needs captions toggled on to get past YouTube's Proof of Origin Token (since 2025-06-11)
- Feature tags: download, captions
- Features:
  - Download subtitle (closed caption) files from YouTube; download links appear under the video
  - Checks every video and tells you if there is no subtitle
  - Converts YouTube's timed text format to SRT
  - Supports auto-generated subtitles
  - Note from 2025-06-11: turn on the Subtitles/CC button to bypass the Proof of Origin Token
- External service/API: none; reads YouTube's timedtext endpoint via webRequest; permissions: webRequest, youtube.com
- Review highlights: not fetched (outside the top 10); rating 3.90 across 107 ratings
- Screenshots: .atlas/research/store-images/firefox/youtube-subtitle-downloader/01.png

## Turn Off the Lights for Firefox
- URL: https://addons.mozilla.org/en-US/firefox/addon/turn-off-the-lights/
- Daily users: 65,823 | Rating: 4.57 (698 ratings, 184 with text) | Version: 4.7.0 | Last updated: 2026-09-12 | Badge: recommended
- Repo: https://github.com/turnoffthelights | License: GNU General Public License v2.0 only | Price/model: free; open source (GPL-2.0); donation / "Pro" mentions on developer site
- Declared permissions: `API: contextMenus, tabs, storage, webNavigation, scripting, theme, <all_urls>; hosts: *://*.youtube.com/*, <all_urls>; data collection declared: required=none, optional=none`
- Flags: generic (all video sites and dark mode for all websites); YouTube-specific options inside
- Feature tags: cinema, quality, codec, volume, transform, pip-popup, autoplay, screenshot, loop, speed, theme, shortcuts, focus
- Features:
  - Lamp button dims the whole page except the video (cinema mode); works on YouTube, Vimeo, Twitch, Dailymotion, Facebook and more; one click back
  - YouTube options: Auto HD (highres, 8K, 5K, 4K, 1080p ... 144p), Auto Wide, 60 FPS block, Top Layer (keep subscriber count, title, suggestions above the dark layer)
  - Night Mode: dark mode for all websites with whitelist/blacklist, time interval, blackout, darker images, custom colors; PDF/local file conversion
  - Eye protection: orange screen shader, nighttime schedule, click-through dark layer
  - Dark layer customization: color, opacity, background image, dimness level bar, fade in/out toggle, dim on play
  - Atmosphere Lighting: glow around the video (Vivid mode, one solid color, four solid colors)
  - Shortcuts: Ctrl+Shift+L toggle, Alt+F8/F9 opacity restore/save, Alt+F10 eye protection, Alt+Up/Down opacity, Alt+* all tabs, T for movie-theater easter egg
  - Mouse-wheel volume per video player
  - Video player filters: grayscale, sepia, invert, contrast, saturate, hue rotate, brightness; zoom in/out; playback rate
  - Audio visualization (blocks, frequency, music tunnel); Picture-in-Picture with visualization
  - Full tab video player; video looping
  - Stop auto-playing YouTube and HTML5 videos
  - Video screen capture with filters, saved as PNG, JPEG, BMP or WEBP
  - Game controller support (Xbox, PlayStation); 55 languages
- External service/API: none for core features; asks all-URLs, tabs, scripting
- Review highlights: not fetched (outside the top 10); rating 4.57 across 698 ratings
- Screenshots: .atlas/research/store-images/firefox/turn-off-the-lights/01.png, .atlas/research/store-images/firefox/turn-off-the-lights/02.png, .atlas/research/store-images/firefox/turn-off-the-lights/03.png, .atlas/research/store-images/firefox/turn-off-the-lights/04.png, .atlas/research/store-images/firefox/turn-off-the-lights/05.png, .atlas/research/store-images/firefox/turn-off-the-lights/06.png

## YouTube Auto HD + FPS
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-auto-hd-fps/
- Daily users: 6,907 | Rating: 4.07 (173 ratings, 81 with text) | Version: 1.19.1 | Last updated: 2026-10-27 | Badge: none
- Repo: https://github.com/avi12/youtube-auto-hd/issues | License: GNU General Public License v3.0 only | Price/model: free; open source (GPL-3.0); donation link
- Declared permissions: `API: cookies, storage; hosts: https://www.youtube-nocookie.com/*, https://www.youtube.com/*, https://music.youtube.com/*, https://youtube.googleapis.com/*, https://youtube.com/*, https://*.youtube.com/*; data collection declared: required=none, optional=technicalAndInteraction`
- Feature tags: quality, codec
- Features:
  - Set video quality by the video's frame rate (for example 30 fps videos at 4K and 60 fps videos at 1080p), 144p to 8K
  - Works on YouTube, YouTube Music and Shorts
  - Option to auto-select the enhanced bitrate quality; option to opt out of super resolution
  - Choose quality for embedded videos (outside youtube.com)
  - Auto-resize feature to adjust the video (player) size automatically
- External service/API: none; permissions: cookies, storage, youtube.com, music.youtube.com, youtube-nocookie.com, youtube.googleapis.com
- Review highlights: not fetched (outside the top 10); rating 4.07 across 173 ratings; recommended by YouTube High Definition reviewers as the working alternative
- Screenshots: .atlas/research/store-images/firefox/youtube-auto-hd-fps/01.png, .atlas/research/store-images/firefox/youtube-auto-hd-fps/02.png

## Clickbait Remover for Youtube
- URL: https://addons.mozilla.org/en-US/firefox/addon/clickbait-remover-for-youtube/
- Daily users: 8,630 | Rating: 4.75 (159 ratings, 76 with text) | Version: 0.7.1 | Last updated: 2022-12-14 | Badge: none
- Repo: https://github.com/pietervanheijningen/clickbait-remover-for-youtube/issues | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0); last updated 2022-12
- Declared permissions: `API: webRequest, storage, webRequestBlocking, tabs; hosts: *://www.youtube.com/*, *://m.youtube.com/*, *://i.ytimg.com/*`
- Feature tags: thumbs
- Features:
  - Replaces thumbnails with a frame from the video (YouTube auto-generated thumbnails per DeArrow's comparison)
  - Modifies titles to stop partial or all-caps titles
  - Works on homepage, trending, subscriptions and channel pages; also mobile (m.youtube.com)
  - Every option customizable from the toolbar popup with instant effect, no reload
  - Positioned as help for YouTube addiction and flashy thumbnails
- External service/API: none; permissions: webRequest, webRequestBlocking, tabs, storage, youtube.com, m.youtube.com, i.ytimg.com
- Review highlights: not fetched (outside the top 10); rating 4.75 across 159 ratings
- Screenshots: .atlas/research/store-images/firefox/clickbait-remover-for-youtube/01.png, .atlas/research/store-images/firefox/clickbait-remover-for-youtube/02.png, .atlas/research/store-images/firefox/clickbait-remover-for-youtube/03.png, .atlas/research/store-images/firefox/clickbait-remover-for-youtube/04.png

## Volume Booster for YouTube™
- URL: https://addons.mozilla.org/en-US/firefox/addon/volume-booster-for-youtube/
- Daily users: 9,985 | Rating: 4.29 (28 ratings, 13 with text) | Version: 0.2.3 | Last updated: 2026-09-07 | Badge: none
- Repo: https://github.com/belaviyo/volume-booster/issues/11 | License: Mozilla Public License 2.0 | Price/model: free; open source issue tracker (MPL-2.0); donation link
- Declared permissions: `API: storage, scripting; hosts: *://www.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: volume
- Features:
  - Adds a "2x" button next to the settings button of the YouTube player (disabled by default)
  - One click installs an audio gain node on the source, doubling volume to 200% (like VLC); second click turns it off
  - Keyboard shortcuts for boosting (see FAQs page)
  - Compatibility note: works with page-level equalizer extensions, not with equalizers that filter directly on the player
- External service/API: none; permissions: storage, scripting, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.29 across 28 ratings
- Screenshots: .atlas/research/store-images/firefox/volume-booster-for-youtube/01.png, .atlas/research/store-images/firefox/volume-booster-for-youtube/02.png

## Auto Youtube Shorts Scroller
- URL: https://addons.mozilla.org/en-US/firefox/addon/auto-youtube-shorts-scroller/
- Daily users: 6,806 | Rating: 3.83 (53 ratings, 36 with text) | Version: 3.1.9 | Last updated: 2026-06-10 | Badge: none
- Repo: https://github.com/SoRadGaming/Auto-Youtube-Shorts-Scroller | License: Mozilla Public License 2.0 | Price/model: free; open source (MPL-2.0)
- Declared permissions: `API: tabs, storage; hosts: https://www.youtube.com/*`
- Flags: opposite of a blocker: increases Shorts consumption (auto-advance)
- Feature tags: shortcuts, shorts-tools
- Features:
  - Automatically scrolls to the next YouTube Short when one ends (hands-free Shorts watching)
  - Shift+S toggles the auto scroller on/off (changeable)
  - Tied to GitHub issues for suggestions
- External service/API: none; permissions: tabs, storage, www.youtube.com
- Review highlights: not fetched (outside the top 10); rating 3.83 across 53 ratings
- Screenshots: .atlas/research/store-images/firefox/auto-youtube-shorts-scroller/01.png

## YouTube Anti Translate - Official Port
- URL: https://addons.mozilla.org/en-US/firefox/addon/youtube-anti-translate-mv3/
- Daily users: 8,624 | Rating: 4.80 (56 ratings, 34 with text) | Version: 1.20.5 | Last updated: 2026-09-04 | Badge: none
- Repo: https://github.com/zpix1/yt-anti-translate/blob/main/README.md | License: MIT License | Price/model: free; open source (MIT); GitHub Sponsors link for maintainer
- Declared permissions: `API: storage; hosts: *://*.youtube.com/*, *://*.youtube-nocookie.com/*, *://m.youtube.com/*; data collection declared: required=none, optional=none`
- Feature tags: translate-off, thumbs, progress
- Features:
  - Restores original video titles and descriptions instead of auto-translated ones
  - Disables automatic audio translations (dubbing)
  - Restores the original chapters of videos
  - Supports YouTube Shorts (original audio and titles)
  - Works on mobile (m.youtube.com): titles and descriptions
  - Fixes translations in notifications (real titles back)
  - Works automatically: no configuration or API keys
  - Works on homepage, trending, subscriptions and more
  - Lightweight, no tracking; claims 100,000+ users across stores
  - Description repeated in Russian, Italian and more
- External service/API: none; permissions: storage, *.youtube.com, youtube-nocookie.com, m.youtube.com
- Review highlights: not fetched (outside the top 10); rating 4.80 across 56 ratings; official port of the Chrome extension (the older youtube-anti-translate listing is a separate Firefox port)
- Screenshots: .atlas/research/store-images/firefox/youtube-anti-translate-mv3/01.png, .atlas/research/store-images/firefox/youtube-anti-translate-mv3/02.png, .atlas/research/store-images/firefox/youtube-anti-translate-mv3/03.png, .atlas/research/store-images/firefox/youtube-anti-translate-mv3/04.png, .atlas/research/store-images/firefox/youtube-anti-translate-mv3/05.png

## Feature matrix

93 add-ons x 44 feature tags. A check mark means the add-on advertises (listing text, preview captions, or reviews where noted in its section) that feature. Rows are sorted by daily users.

### Legend and counts

| Tag | Add-ons | Meaning |
|---|---:|---|
| hide-shorts | 25 | hide or remove Shorts |
| hide-feed | 18 | hide recommendations, home feed, related videos, sidebar, watched videos |
| hide-ui | 18 | hide other page elements (end cards, chat, buttons, merch, header) |
| shortcuts | 15 | custom keyboard or mouse shortcuts |
| adblock | 14 | blocks YouTube ads (network, cosmetic or payload filtering) |
| autoplay | 14 | disable or tune autoplay / up-next |
| cinema | 14 | theater, cinema, dim-the-lights, wide player, ambient glow |
| filter | 14 | filter by channel, keyword, duration or rules |
| layout | 14 | grid, rows, sizing and layout fixes |
| thumbs | 14 | thumbnail/title changes (replace, blur, rating bar, full titles, casing) |
| quality | 13 | forces resolution, frame rate or HDR choice |
| theme | 13 | dark theme, themes, custom CSS |
| hide-comments | 12 | hide comments |
| loop | 12 | loop/repeat, A-B and multi-segment loops |
| shorts-tools | 12 | Shorts viewing tools: open in normal player, auto-scroll, loop control |
| speed | 11 | playback speed control |
| volume | 11 | volume boost, mixer, loudness normalization, EQ |
| ad-skip | 10 | skips, speeds up or mutes ads without blocking them |
| search | 10 | search-result filtering, fixes or tools |
| bg-play | 9 | background playback (tab hidden, app switched, screen off) |
| captions | 9 | caption, subtitle or transcript control |
| download | 9 | downloads video, audio or subtitles (YouTube Terms of Service flag) |
| focus | 9 | focus mode, schedules, locks, usage limits |
| playlist | 9 | playlist, mix, history and watch-later tools |
| screenshot | 9 | frame capture button or shortcut |
| codec | 8 | codec control (H.264/VP9/AV1, 60 fps block) |
| nonstop | 8 | dismisses or counters "Video paused. Continue watching?" |
| transform | 8 | rotate, zoom, mirror, filters, black-bar removal |
| pip-popup | 7 | Picture-in-Picture, popup, mini or floating player |
| progress | 7 | progress bar, chapters, resume position |
| convert-mp3 | 6 | converts to MP3 (YouTube Terms of Service flag) |
| translate-off | 6 | stops auto-translated titles, audio and descriptions |
| dislikes | 5 | dislike counts or ratings |
| sponsor-skip | 5 | skips sponsor/intro/outro segments (crowdsourced or per-channel) |
| livechat | 4 | live chat improvements |
| ai | 3 | AI summaries or transcripts |
| anti-adblock | 2 | defeats YouTube's ad-block detection wall |
| comments-tools | 2 | comment search, sort or export |
| legacy | 2 | restores old UI or removed features |
| stats | 2 | creator analytics or watch statistics |
| audio-only | 1 | audio-only streaming mode |
| proxy | 1 | geo-unblocking through a proxy (YouTube Terms of Service flag) |
| research | 1 | opt-in data donation for research |
| subs | 1 | subscription groups and management |

### Feature index (feature, then add-ons)

- hide-shorts (25): Enhancer for YouTube, Unhook, Hide Youtube-Shorts, Improve YouTube! (ImprovedTube), Youtube-shorts block, Control Panel for YouTube, YouTube Search Fixer, BlockTube, UnTrap for YouTube, YouTube Tweaks (pedrosouu), Remove Youtube Shorts, SocialFocus, YouTube Audio, YouTube Row Fixer, YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, Shorts block-tube, No Shorts (Shorts Blocker Pro), YT Shorts Blocker, Block YouTube Shorts and Playables, Youtube Shorts Block (Oblivion), YouTube Shorts Blocker (ShortsLess), Iridium for YouTube, YouTube LevelUp
- hide-feed (18): Enhancer for YouTube, Unhook, Improve YouTube! (ImprovedTube), Control Panel for YouTube, YouTube Search Fixer, BlockTube, UnTrap for YouTube, PocketTube, YouTube Tweaks (pedrosouu), SocialFocus, YouTube Audio, YouTube Redux, YouTube Enhancer (VampireChicken), DF YouTube, Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, Block YouTube Shorts and Playables, YouTube LevelUp
- hide-ui (18): uBlock Origin, Enhancer for YouTube, Unhook, Hide Youtube-Shorts, Improve YouTube! (ImprovedTube), Control Panel for YouTube, Ambient light for YouTube, YouTube Search Fixer, BlockTube, UnTrap for YouTube, YouTube Tweaks (pedrosouu), SocialFocus, YouTube Redux, YouTube Enhancer (VampireChicken), DF YouTube, Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, Block YouTube Shorts and Playables
- shortcuts (15): SponsorBlock, Enhancer for YouTube, Video Speed Controller, Improve YouTube! (ImprovedTube), Turn Off the Lights, Global Speed, UnTrap for YouTube, YouTube Tweaks (pedrosouu), YouTube Screenshot Button, YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), Auto YouTube Shorts Scroller, Rotate Youtube Video, LiteTube, YouTube Parts Looper
- adblock (14): uBlock Origin, Adblock Plus, AdGuard AdBlocker, AdBlock for Firefox, AdBlocker Ultimate, Ghostery, AdBlocker for YouTube (AdblockLite), Improve YouTube! (ImprovedTube), Control Panel for YouTube, Adblock for Youtube (Adblock Systems), YouTube Audio, AdBlocker for YouTube Video (Emmy), LiteTube, Iridium for YouTube
- autoplay (14): Enhancer for YouTube, Unhook, YouTube High Definition, Improve YouTube! (ImprovedTube), Turn Off the Lights, Control Panel for YouTube, YouTube Tweaks (pedrosouu), YouTube Audio, YouTube Redux, DF YouTube, Tweaks for YouTube (inzk), Less Mixes for YouTube, RYS Remove YouTube Suggestions, Iridium for YouTube
- cinema (14): Enhancer for YouTube, YouTube High Definition, Improve YouTube! (ImprovedTube), Turn Off the Lights, Global Speed, Control Panel for YouTube, Ambient light for YouTube, UnTrap for YouTube, YouTube Tweaks (pedrosouu), YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, Theater Mode for YouTube, Iridium for YouTube
- filter (14): uBlock Origin, Improve YouTube! (ImprovedTube), Control Panel for YouTube, YouTube Search Fixer, BlockTube, UnTrap for YouTube, PocketTube, Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, RegretsReporter, HyperChat, YT Shorts Blocker, Block YouTube Shorts and Playables, Iridium for YouTube
- layout (14): Enhancer for YouTube, Unhook, YouTube High Definition, Improve YouTube! (ImprovedTube), Control Panel for YouTube, YouTube Search Fixer, UnTrap for YouTube, YouTube Tweaks (pedrosouu), YouTube Redux, YouTube Row Fixer, Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, LiteTube, Iridium for YouTube
- thumbs (14): Improve YouTube! (ImprovedTube), YouTube No Translation, DeArrow, YouTube Anti Translate, YouTube Search Fixer, UnTrap for YouTube, YouTube Tweaks (pedrosouu), SocialFocus, YouTube Audio, YouTube Row Fixer, Clickbait Remover for YouTube, YouTube Anti Translate (official port), Tweaks for YouTube (inzk), Thumbnail Rating Bar
- quality (13): Enhancer for YouTube, YouTube High Definition, Improve YouTube! (ImprovedTube), Turn Off the Lights, YouTube Tweaks (pedrosouu), enhanced-h264ify, YouTube Audio, YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), YouTube Auto HD + FPS, Auto HD/4k/8k for YouTube, YouTube in HD (James Fray), Iridium for YouTube
- theme (13): Enhancer for YouTube, Improve YouTube! (ImprovedTube), Turn Off the Lights, Ambient light for YouTube, YouTube Tweaks (pedrosouu), SocialFocus, YouTube Redux, YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, HyperChat, No Shorts (Shorts Blocker Pro), Iridium for YouTube
- hide-comments (12): Enhancer for YouTube, Unhook, Improve YouTube! (ImprovedTube), Control Panel for YouTube, BlockTube, UnTrap for YouTube, YouTube Tweaks (pedrosouu), SocialFocus, YouTube Audio, DF YouTube, Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions
- loop (12): Enhancer for YouTube, Improve YouTube! (ImprovedTube), Turn Off the Lights, YouTube Tweaks (pedrosouu), YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), Rotate Youtube Video, YouTube Repeat Button, LiteTube, Youtube Video Looper, YouTube Parts Looper, Looper
- shorts-tools (12): Enhancer for YouTube, Youtube-shorts block, Control Panel for YouTube, YouTube Search Fixer, YouTube Tweaks (pedrosouu), Remove Youtube Shorts, Tweaks for YouTube (inzk), Auto YouTube Shorts Scroller, RYS Remove YouTube Suggestions, No Shorts (Shorts Blocker Pro), YT Shorts Blocker, Youtube Shorts Block (Oblivion)
- speed (11): Enhancer for YouTube, YouTube High Definition, Video Speed Controller, Improve YouTube! (ImprovedTube), Turn Off the Lights, Global Speed, YouTube Tweaks (pedrosouu), YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), LiteTube, Iridium for YouTube
- volume (11): Enhancer for YouTube, YouTube High Definition, Improve YouTube! (ImprovedTube), Turn Off the Lights, Global Speed, YouTube Tweaks (pedrosouu), YouTube Audio, YouTube Enhancer (VampireChicken), Volume Booster for YouTube, Tweaks for YouTube (inzk), Iridium for YouTube
- ad-skip (10): Improve YouTube! (ImprovedTube), Control Panel for YouTube, UnTrap for YouTube, Youtube Ad Auto-skipper, Tweaks for YouTube (inzk), YT Ad Speedup, RYS Remove YouTube Suggestions, SkipIt Adblocker, Ad Speedup (Hackhive), Youtube Ad Skipper (Avinash)
- search (10): Unhook, Improve YouTube! (ImprovedTube), Control Panel for YouTube, vidIQ Vision, YouTube Search Fixer, YouTube Tweaks (pedrosouu), Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions, YouTube Comment Search, YCS (Continued)
- bg-play (9): Video Background Play Fix, YouTube NonStop, Control Panel for YouTube, YouTube Audio, Youtube Background Play Fix (Regis), Background Playback Helper, YouTube Background Play, LiteTube, YouTube LevelUp
- captions (9): YouTube High Definition, Improve YouTube! (ImprovedTube), Control Panel for YouTube, YouTube No Translation, YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), YouTube Summary (Glasp), YouTube Subtitle Downloader, YCS (Continued)
- download (9): Easy YT Video Downloader Express, SaveFrom.net helper, YT Video+Audio Downloader (WebEx), YouTube Downloader (al3k_popov), YouTube mp3 (rcyoutube), YouTube Downloader (UDL Helper), YouTube Converter Button, YouTube Audio, YouTube Subtitle Downloader
- focus (9): Unhook, Improve YouTube! (ImprovedTube), Turn Off the Lights, UnTrap for YouTube, YouTube Tweaks (pedrosouu), SocialFocus, DF YouTube, Tweaks for YouTube (inzk), RYS Remove YouTube Suggestions
- playlist (9): Improve YouTube! (ImprovedTube), PocketTube, YouTube Tweaks (pedrosouu), DF YouTube, Tweaks for YouTube (inzk), Less Mixes for YouTube, LiteTube, YouTube Parts Looper, Iridium for YouTube
- screenshot (9): Enhancer for YouTube, Improve YouTube! (ImprovedTube), Turn Off the Lights, Control Panel for YouTube, YouTube Downloader (UDL Helper), YouTube Tweaks (pedrosouu), YouTube Screenshot Button, YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk)
- codec (8): Improve YouTube! (ImprovedTube), h264ify, Turn Off the Lights, enhanced-h264ify, YouTube Auto HD + FPS, YouTube in HD (James Fray), LiteTube, Iridium for YouTube
- nonstop (8): YouTube NonStop, BlockTube, YouTube Tweaks (pedrosouu), YouTube Redux, YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk), Background Playback Helper, YouTube LevelUp
- transform (8): Enhancer for YouTube, Improve YouTube! (ImprovedTube), Turn Off the Lights, Global Speed, Ambient light for YouTube, YouTube Tweaks (pedrosouu), Tweaks for YouTube (inzk), Rotate Youtube Video
- pip-popup (7): Enhancer for YouTube, Improve YouTube! (ImprovedTube), Turn Off the Lights, Ambient light for YouTube, YouTube Tweaks (pedrosouu), YouTube Enhancer (VampireChicken), Tweaks for YouTube (inzk)
- progress (7): SponsorBlock, Improve YouTube! (ImprovedTube), Control Panel for YouTube, YouTube Tweaks (pedrosouu), YouTube Enhancer (VampireChicken), YouTube Anti Translate (official port), Tweaks for YouTube (inzk)
- convert-mp3 (6): Easy YT Video Downloader Express, SaveFrom.net helper, YT Video+Audio Downloader (WebEx), YouTube mp3 (rcyoutube), YouTube Downloader (UDL Helper), YouTube Converter Button
- translate-off (6): Control Panel for YouTube, YouTube No Translation, YouTube Anti Translate, YouTube Tweaks (pedrosouu), YouTube Anti Translate (official port), YouTube LevelUp
- dislikes (5): Return YouTube Dislike, YouTube Redux, YouTube Dislike Counter, Thumbnail Rating Bar, YouTube LevelUp
- sponsor-skip (5): SponsorBlock, YouTube Audio, Tweaks for YouTube (inzk), LiteTube, YouTube LevelUp
- livechat (4): YouTube Tweaks (pedrosouu), Tweaks for YouTube (inzk), HyperChat, YCS (Continued)
- ai (3): vidIQ Vision, UnTrap for YouTube, YouTube Summary (Glasp)
- anti-adblock (2): uBlock Origin, LiteTube
- comments-tools (2): YouTube Comment Search, YCS (Continued)
- legacy (2): YouTube Redux, Annotations Restored
- stats (2): Improve YouTube! (ImprovedTube), vidIQ Vision
- audio-only (1): YouTube Audio
- proxy (1): ProxTube
- research (1): RegretsReporter
- subs (1): PocketTube

### Matrix: Ads, sponsors, segments (24 add-ons)

| Add-on | Users | adblock | ad-skip | anti-adblock | sponsor-skip |
|---|---:|:-:|:-:|:-:|:-:|
| uBlock Origin | 11,357,478 | ✓ |  | ✓ |  |
| Adblock Plus | 2,832,371 | ✓ |  |  |  |
| AdGuard AdBlocker | 1,840,239 | ✓ |  |  |  |
| AdBlock for Firefox | 1,387,728 | ✓ |  |  |  |
| AdBlocker Ultimate | 1,050,924 | ✓ |  |  |  |
| Ghostery | 1,016,959 | ✓ |  |  |  |
| SponsorBlock | 815,906 |  |  |  | ✓ |
| AdBlocker for YouTube (AdblockLite) | 516,837 | ✓ |  |  |  |
| Improve YouTube! (ImprovedTube) | 101,335 | ✓ | ✓ |  |  |
| Control Panel for YouTube | 62,120 | ✓ | ✓ |  |  |
| Adblock for Youtube (Adblock Systems) | 38,212 | ✓ |  |  |  |
| UnTrap for YouTube | 23,362 |  | ✓ |  |  |
| YouTube Audio | 12,786 | ✓ |  |  | ✓ |
| Youtube Ad Auto-skipper | 10,139 |  | ✓ |  |  |
| Tweaks for YouTube (inzk) | 7,982 |  | ✓ |  | ✓ |
| AdBlocker for YouTube Video (Emmy) | 5,394 | ✓ |  |  |  |
| YT Ad Speedup | 5,138 |  | ✓ |  |  |
| RYS Remove YouTube Suggestions | 4,891 |  | ✓ |  |  |
| SkipIt Adblocker | 3,247 |  | ✓ |  |  |
| LiteTube | 2,223 | ✓ |  | ✓ | ✓ |
| Ad Speedup (Hackhive) | 2,110 |  | ✓ |  |  |
| Iridium for YouTube | 1,060 | ✓ |  |  |  |
| Youtube Ad Skipper (Avinash) | 906 |  | ✓ |  |  |
| YouTube LevelUp | 698 |  |  |  | ✓ |

### Matrix: Player control (54 add-ons)

| Add-on | Users | quality | codec | speed | volume | loop | autoplay | nonstop | bg-play | audio-only | pip-popup | cinema | screenshot | transform | captions | shortcuts | progress | shorts-tools |
|---|---:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| SponsorBlock | 815,906 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  |
| Enhancer for YouTube | 598,570 | ✓ |  | ✓ | ✓ | ✓ | ✓ |  |  |  | ✓ | ✓ | ✓ | ✓ |  | ✓ |  | ✓ |
| Video Background Play Fix | 228,452 |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| YouTube NonStop | 178,432 |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |
| Unhook | 169,857 |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| YouTube High Definition | 163,369 | ✓ |  | ✓ | ✓ |  | ✓ |  |  |  |  | ✓ |  |  | ✓ |  |  |  |
| Video Speed Controller | 104,205 |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| Improve YouTube! (ImprovedTube) | 101,335 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| h264ify | 74,305 |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Turn Off the Lights | 65,823 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  | ✓ | ✓ | ✓ | ✓ |  | ✓ |  |  |
| Global Speed | 65,140 |  |  | ✓ | ✓ |  |  |  |  |  |  | ✓ |  | ✓ |  | ✓ |  |  |
| Youtube-shorts block | 63,231 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| Control Panel for YouTube | 62,120 |  |  |  |  |  | ✓ |  | ✓ |  |  | ✓ | ✓ |  | ✓ |  | ✓ | ✓ |
| YouTube No Translation | 51,414 |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| Ambient light for YouTube | 48,672 |  |  |  |  |  |  |  |  |  | ✓ | ✓ |  | ✓ |  |  |  |  |
| YouTube Search Fixer | 33,531 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| BlockTube | 33,264 |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |
| YouTube Downloader (UDL Helper) | 26,710 |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |
| UnTrap for YouTube | 23,362 |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |  |  |
| YouTube Tweaks (pedrosouu) | 20,070 | ✓ |  | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | ✓ | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ |
| enhanced-h264ify | 19,768 | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| YouTube Screenshot Button | 19,482 |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  | ✓ |  |  |
| Remove Youtube Shorts | 19,086 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| YouTube Audio | 12,786 | ✓ |  |  | ✓ |  | ✓ |  | ✓ | ✓ |  |  |  |  |  |  |  |  |
| YouTube Redux | 12,609 |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |
| YouTube Enhancer (VampireChicken) | 10,359 | ✓ |  | ✓ | ✓ | ✓ |  | ✓ |  |  | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ |  |
| Volume Booster for YouTube | 9,985 |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DF YouTube | 9,901 |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| YouTube Anti Translate (official port) | 8,624 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |
| Youtube Background Play Fix (Regis) | 8,064 |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| Tweaks for YouTube (inzk) | 7,982 | ✓ |  | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Less Mixes for YouTube | 7,558 |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| YouTube Auto HD + FPS | 6,907 | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Auto YouTube Shorts Scroller | 6,806 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  | ✓ |
| Rotate Youtube Video | 5,626 |  |  |  |  | ✓ |  |  |  |  |  |  |  | ✓ |  | ✓ |  |  |
| YouTube Summary (Glasp) | 4,942 |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| RYS Remove YouTube Suggestions | 4,891 |  |  |  |  |  | ✓ |  |  |  |  | ✓ |  |  |  |  |  | ✓ |
| Theater Mode for YouTube | 4,507 |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |
| YouTube Subtitle Downloader | 4,217 |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| Background Playback Helper | 4,010 |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |
| YouTube Background Play | 3,697 |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| Auto HD/4k/8k for YouTube | 3,645 | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| No Shorts (Shorts Blocker Pro) | 3,282 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| YouTube in HD (James Fray) | 3,170 | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| YouTube Repeat Button | 2,959 |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| YT Shorts Blocker | 2,829 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| LiteTube | 2,223 |  | ✓ | ✓ |  | ✓ |  |  | ✓ |  |  |  |  |  |  | ✓ |  |  |
| Youtube Shorts Block (Oblivion) | 1,943 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| Youtube Video Looper | 1,786 |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| YCS (Continued) | 1,608 |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| YouTube Parts Looper | 1,140 |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| Iridium for YouTube | 1,060 | ✓ | ✓ | ✓ | ✓ |  | ✓ |  |  |  |  | ✓ |  |  |  |  |  |  |
| YouTube LevelUp | 698 |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |
| Looper | 471 |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |

### Matrix: Feed, page and content (49 add-ons)

| Add-on | Users | hide-shorts | hide-feed | hide-comments | hide-ui | filter | search | layout | theme | thumbs | translate-off | dislikes | subs | playlist | comments-tools | livechat | legacy |
|---|---:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| uBlock Origin | 11,357,478 |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| Return YouTube Dislike | 890,739 |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |
| Enhancer for YouTube | 598,570 | ✓ | ✓ | ✓ | ✓ |  |  | ✓ | ✓ |  |  |  |  |  |  |  |  |
| Unhook | 169,857 | ✓ | ✓ | ✓ | ✓ |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |
| YouTube High Definition | 163,369 |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| Hide Youtube-Shorts | 106,263 | ✓ |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| Improve YouTube! (ImprovedTube) | 101,335 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  | ✓ |  |  |  |
| Turn Off the Lights | 65,823 |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |
| Youtube-shorts block | 63,231 | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Control Panel for YouTube | 62,120 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | ✓ |  |  |  |  |  |  |
| YouTube No Translation | 51,414 |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |
| vidIQ Vision | 49,900 |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |
| Ambient light for YouTube | 48,672 |  |  |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |
| DeArrow | 34,217 |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |
| YouTube Anti Translate | 33,873 |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |
| YouTube Search Fixer | 33,531 | ✓ | ✓ |  | ✓ | ✓ | ✓ | ✓ |  | ✓ |  |  |  |  |  |  |  |
| BlockTube | 33,264 | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| UnTrap for YouTube | 23,362 | ✓ | ✓ | ✓ | ✓ | ✓ |  | ✓ |  | ✓ |  |  |  |  |  |  |  |
| PocketTube | 21,945 |  | ✓ |  |  | ✓ |  |  |  |  |  |  | ✓ | ✓ |  |  |  |
| YouTube Tweaks (pedrosouu) | 20,070 | ✓ | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | ✓ |  | ✓ |  |
| Remove Youtube Shorts | 19,086 | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| SocialFocus | 15,981 | ✓ | ✓ | ✓ | ✓ |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  |
| YouTube Audio | 12,786 | ✓ | ✓ | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |
| YouTube Redux | 12,609 |  | ✓ |  | ✓ |  |  | ✓ | ✓ |  |  | ✓ |  |  |  |  | ✓ |
| YouTube Row Fixer | 11,116 | ✓ |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  |  |  |
| YouTube Enhancer (VampireChicken) | 10,359 | ✓ | ✓ |  | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |
| DF YouTube | 9,901 |  | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| Annotations Restored | 8,991 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| Clickbait Remover for YouTube | 8,630 |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |
| YouTube Anti Translate (official port) | 8,624 |  |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |
| Tweaks for YouTube (inzk) | 7,982 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  | ✓ |  | ✓ |  |
| Less Mixes for YouTube | 7,558 |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| YouTube Dislike Counter | 6,308 |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |
| RYS Remove YouTube Suggestions | 4,891 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |
| RegretsReporter | 4,509 |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| Shorts block-tube | 4,431 | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| HyperChat | 4,303 |  |  |  |  | ✓ |  |  | ✓ |  |  |  |  |  |  | ✓ |  |
| No Shorts (Shorts Blocker Pro) | 3,282 | ✓ |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |
| YT Shorts Blocker | 2,829 | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| Thumbnail Rating Bar | 2,544 |  |  |  |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  |
| LiteTube | 2,223 |  |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |
| Block YouTube Shorts and Playables | 2,130 | ✓ | ✓ |  | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| Youtube Shorts Block (Oblivion) | 1,943 | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| YouTube Shorts Blocker (ShortsLess) | 1,857 | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| YouTube Comment Search | 1,704 |  |  |  |  |  | ✓ |  |  |  |  |  |  |  | ✓ |  |  |
| YCS (Continued) | 1,608 |  |  |  |  |  | ✓ |  |  |  |  |  |  |  | ✓ | ✓ |  |
| YouTube Parts Looper | 1,140 |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| Iridium for YouTube | 1,060 | ✓ |  |  |  | ✓ |  | ✓ | ✓ |  |  |  |  | ✓ |  |  |  |
| YouTube LevelUp | 698 | ✓ | ✓ |  |  |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |

### Matrix: Services, tools, risk (22 add-ons)

| Add-on | Users | stats | ai | focus | research | download | convert-mp3 | proxy |
|---|---:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Easy YT Video Downloader Express | 464,876 |  |  |  |  | ✓ | ✓ |  |
| SaveFrom.net helper | 334,726 |  |  |  |  | ✓ | ✓ |  |
| Unhook | 169,857 |  |  | ✓ |  |  |  |  |
| Improve YouTube! (ImprovedTube) | 101,335 | ✓ |  | ✓ |  |  |  |  |
| Turn Off the Lights | 65,823 |  |  | ✓ |  |  |  |  |
| YT Video+Audio Downloader (WebEx) | 59,721 |  |  |  |  | ✓ | ✓ |  |
| vidIQ Vision | 49,900 | ✓ | ✓ |  |  |  |  |  |
| YouTube Downloader (al3k_popov) | 36,959 |  |  |  |  | ✓ |  |  |
| YouTube mp3 (rcyoutube) | 28,758 |  |  |  |  | ✓ | ✓ |  |
| YouTube Downloader (UDL Helper) | 26,710 |  |  |  |  | ✓ | ✓ |  |
| UnTrap for YouTube | 23,362 |  | ✓ | ✓ |  |  |  |  |
| YouTube Converter Button | 20,207 |  |  |  |  | ✓ | ✓ |  |
| YouTube Tweaks (pedrosouu) | 20,070 |  |  | ✓ |  |  |  |  |
| SocialFocus | 15,981 |  |  | ✓ |  |  |  |  |
| YouTube Audio | 12,786 |  |  |  |  | ✓ |  |  |
| ProxTube | 10,385 |  |  |  |  |  |  | ✓ |
| DF YouTube | 9,901 |  |  | ✓ |  |  |  |  |
| Tweaks for YouTube (inzk) | 7,982 |  |  | ✓ |  |  |  |  |
| YouTube Summary (Glasp) | 4,942 |  | ✓ |  |  |  |  |  |
| RYS Remove YouTube Suggestions | 4,891 |  |  | ✓ |  |  |  |  |
| RegretsReporter | 4,509 |  |  |  | ✓ |  |  |  |
| YouTube Subtitle Downloader | 4,217 |  |  |  |  | ✓ |  |  |

## Summary

- Most common (of 93 add-ons): hide Shorts 25, hide recommendations/feed 18, hide other page UI 18, custom shortcuts 15, ad blocking 14, autoplay control 14, cinema/theater 14, content filters 14, layout fixes 14, thumbnail/title changes 14, forced quality 13, themes 13, hide comments 12, loop 12, volume boost 11, speed 11.
- Unique or rare: crowdsourced sponsor/intro skipping (SponsorBlock), crowdsourced titles and thumbnails (DeArrow), restored dislike counts (5 add-ons led by Return YouTube Dislike), anti-translate (6), subscription collections (PocketTube), creator analytics (vidIQ), AI summaries (UnTrap, Glasp), comment/chat/transcript search and export (YCS), Mix suppression, restored annotations, ambient glow, audio-only mode, multi-segment loops, mobile-layout ad-detection evasion (LiteTube), research telemetry (RegretsReporter).
- API or server dependent (28 add-ons): sponsor.ajay.app (SponsorBlock, DeArrow, YouTube Audio, LevelUp, LiteTube), returnyoutubedislikeapi.com (Return YouTube Dislike, Thumbnail Rating Bar, Dislike Counter, LevelUp), vendor servers for downloaders and converters, vidIQ, UnTrap AI and sync, Glasp AI, Google Drive sync (PocketTube), Google Translate (HyperChat), annotation archive, comment-search proxy, filter-list hosts (uBlock Origin, Adblock Plus, AdBlock).
- Likely against YouTube terms: ad blocking and anti-adblock evasion (14 blockers, 2 evasion), ad skipping/speed-up (10), downloaders, MP3 converters and subtitle downloaders (9 download, 6 convert), proxy geo-unblocking (ProxTube); gray area: background play and audio-only (9), Innertube/Data API scraping (YCS, Comment Search).
- Safari cannot do (per repo platform notes): blocking webRequest and webRequestFilterResponse (declarativeNetRequest only, no iOS webRequest), downloads API (every downloader), proxy API (ProxTube), management, bookmarks, notifications and identity (PocketTube Drive sync, RYD sign-in, Parts Looper), nativeMessaging to third-party binaries (FFmpeg/NodeJS client), global OS-wide shortcuts, persistent iOS background pages; Firefox-Android background-play tricks (Page Visibility and Fullscreen API blocking) are unproven on iOS.
