# Firefox Add-ons (AMO) YouTube survey

- Date: 2026-11-03
- Source: AMO public API v5 (addons.mozilla.org/api/v5), app=firefox; search `q=youtube&sort=users` pages 1-2 plus targeted searches per feature category
- Scope: every advertised feature recorded, including features that cannot work in Safari; downloaders included and flagged
- Images: .atlas/research/store-images/firefox/<slug>/NN.png (max 6 per add-on; generic non-YouTube blockers skipped)
- Status: IN PROGRESS (sections are appended as completed; resume from the last `## ` section)
- Notes on data: "Recommended" = AMO `promoted` category; "Repo" = source URL found in the listing text; "Feature tags" use a fixed vocabulary (see Feature matrix legend)
- Looper for YouTube: no public AMO listing (API slug `looper-for-youtube` answers 401, not disabled, so it is unlisted or non-public; search finds nothing); stand-ins are covered in the Loopers group

## Checklist

Tier 1, named must-cover:
- [x] `sponsorblock`
- [x] `enhancer-for-youtube`
- [x] `return-youtube-dislikes`
- [ ] `dearrow`
- [ ] `youtube-high-definition`
- [ ] `youtube-recommended-videos` (Unhook)
- [ ] `particle-iridium` (Iridium for YouTube)
- [ ] `ublock-origin` (YouTube points only)
- [ ] `videospeed` (Video Speed Controller)
- [ ] `youtube-nonstop`
- [ ] `blocktube`
- [ ] `untrap-for-youtube`

Tier 2, remaining top-30 YouTube-specific results of `q=youtube` by users:
- [ ] `adblock-for-youtube`
- [ ] `easy-youtube-video-download` (downloader)
- [ ] `savefromnet-helper` (downloader)
- [ ] `video-background-play-fix`
- [ ] `hide-youtube-shorts`
- [ ] `youtube-addon` (Improve YouTube / ImprovedTube)
- [ ] `h264ify`
- [ ] `youtube-shorts-block`
- [ ] `control-panel-for-youtube`
- [ ] `youtube_downloader_webx` (downloader)
- [ ] `youtube-no-translation`
- [ ] `vidiq-vision-youtube`
- [ ] `ambient-light-for-youtube`
- [ ] `adblock-for-youtube-tm`
- [ ] `youtube_downloader` (downloader)
- [ ] `youtube-anti-translate`
- [ ] `youtube-suite-search-fixer`
- [ ] `youtube-mp3-converter` (downloader)
- [ ] `youtube-downloader-udl-helper` (downloader)
- [ ] `youtube-subscription-groups` (PocketTube)
- [ ] `youtube-converter-button` (downloader)

Tier 3, category coverage:
- Shorts blockers: [ ] `remove-youtube-shorts` [ ] `ytb-shorts-blocker` [ ] `youtube-shorts-blocker-pro` [ ] `yt-shorts-blocker` [ ] `block-yt-shortvideo` [ ] `shorts-block` [ ] `shortsless`
- Auto-quality: [ ] `auto-hd-4k-8k-for-youtube` [ ] `youtube-hd-1` [ ] `enhanced-h264ify`
- Audio-only / background play: [ ] `backstage-play` [ ] `playback-helper-youtube-vimeo` [ ] `youtube-background-play` [ ] `youtube-audio`
- Comment filters and tools: [ ] `remove-youtube-s-suggestions` [ ] `youtube-comment-search` [ ] `ycs-continued` [ ] `hyperchat`
- Clean YouTube: [ ] `df-youtube` [ ] `tweaks-for-youtube` [ ] `youtube-tweaks` [ ] `youtube-enhancer-vc` [ ] `less-mixes-for-youtube` [ ] `youtube-row-fixer-extension` [ ] `youtube-redux` [ ] `socialfocus` [ ] `youtube-levelup`
- Ad skippers and YouTube blockers: [ ] `youtube-adblock` [ ] `youtube-ad-auto-skipper` [ ] `yt-ad-speedup-skip-ads-faster` [ ] `ad-speedup-skip-video-ads-fast` [ ] `youtube-ad-skipper` [ ] `skipit-adblocker-for-youtube` [ ] `litetube-adfree`
- Generic blockers (YouTube points only): [ ] `adblock-plus` [ ] `adguard-adblocker` [ ] `adblock-for-firefox` [ ] `adblocker-ultimate` [ ] `ghostery`
- Loopers (stand-ins for Looper for YouTube): [ ] `youtube-video-looper` [ ] `youtube-parts-looper` [ ] `youtube-repeat-button` [ ] `rotate-youtube-video` [ ] `looper`
- Speed: [ ] `global-speed`
- Other YouTube-specific: [ ] `youtube-screenshot-button` [ ] `annotations-restored` [ ] `youtube-summary-with-chatgpt` [ ] `youtube-thumbnail-rating-bar` [ ] `youtube-dislike-counter` [ ] `proxtube` [ ] `regretsreporter` [ ] `theater-mode-for-youtube` [ ] `youtube-subtitle-downloader`

---

## SponsorBlock - Skip Sponsorships on YouTube
- URL: https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/
- Daily users: 815,906 | Rating: 4.81 (3,244 ratings, 922 with text) | Version: 6.1.7 | Last updated: 2026-07-13 | Badge: recommended
- Repo: https://github.com/ajayyy/SponsorBlock | License: GNU Lesser General Public License v3.0 only | Price/model: free; open source; donations via GitHub Sponsors
- Declared permissions: API: storage, scripting, unlimitedStorage; hosts: https://sponsor.ajay.app/*, https://*.youtube.com/*, https://www.youtube-nocookie.com/embed/*; optional: *://*/*
- Feature tags: sponsor-skip, shortcuts, progress, captions
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
- Declared permissions: API: storage; hosts: *://www.youtube.com/*, *://www.youtube.com/embed/*, *://www.youtube.com/live_chat*, *://www.youtube.com/shorts/*
- Feature tags: speed, quality, volume, loop, autoplay, cinema, transform, theme, hide-ui, hide-feed, hide-comments, hide-shorts, screenshot, shortcuts, pip-popup, layout
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
- Declared permissions: API: activeTab, storage, identity; hosts: *://*.youtube.com/*, *://returnyoutubedislikeapi.com/*; data collection declared: required=none, optional=browsingActivity, websiteContent, websiteActivity, personallyIdentifyingInfo, authenticationInfo
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

