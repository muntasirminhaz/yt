# Chrome Web Store survey: YouTube extensions (2026-11-03)

Scope: every advertised feature, including features that cannot work in Safari. Sections are appended one extension at a time; the checklist below is ticked as each section lands.

## Progress checklist

- [x] Enhancer for YouTube
- [x] Video Enhancer for YouTube
- [x] YouTube Enhancer
- [x] Improve YouTube!
- [ ] Unhook
- [ ] DF Tube (Distraction Free for YouTube)
- [ ] SponsorBlock
- [ ] Return YouTube Dislike
- [ ] DeArrow
- [ ] Magic Actions for YouTube
- [ ] Turn Off the Lights
- [ ] Video Speed Controller
- [ ] Iridium for YouTube
- [ ] Untrap for YouTube
- [ ] YouTube NonStop
- [ ] Looper for YouTube
- [ ] BlockTube
- [ ] RYS Remove YouTube Suggestions
- [ ] Minimal Theme for YouTube
- [ ] Adblock for Youtube
- [ ] AdBlock for YouTube (by AdBlock)
- [ ] YouTube Ad Auto Skipper
- [ ] Ad Speedup
- [ ] FadBlock
- [ ] uBlock Origin (YouTube-specific behaviour only)
- [ ] AdGuard AdBlocker (YouTube-specific behaviour only)
- [ ] PocketTube
- [ ] Auto HD/4K for YouTube
- [ ] Hide YouTube Shorts
- [ ] YouTube comments filter / clean YouTube extension
- [ ] YouTube Playback Speed Control
- [ ] YouTube audio only / background play extension
- [ ] (extras found via search are added below as they are discovered)

## Extension sections

## Enhancer for YouTube
- URL: https://chromewebstore.google.com/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle (developer site https://www.mrfdev.com/enhancer-for-youtube)
- Users: 1,000,000 | Rating: 4.46 (17,573) | Model: free, no paid tier stated | Updated: 2026-07-15 (v3.0.19, MV3, 487 KiB, 45 UI languages) | First published: 2013-07-25 | Open source: no (no repo) | Platforms: Chrome, Edge, Firefox (Safari and Opera not listed on the developer site)
- Features:
  - Playback speed via mouse wheel or keyboard, default speed, range 0.07x to 16x, finer steps than YouTube
  - Default playback quality for videos, playlists and embedded videos
  - Volume via mouse wheel; Volume Booster plus bass boost up to 10x
  - Default volume, speed and quality also applied to embedded videos
  - Enhanced Loop Mode (part of a video or the whole video)
  - Autoplay control (disable, block background-tab autoplay, fully stop videos to save bandwidth)
  - Disable high frame rate formats (force 24/25/30 fps)
  - Force MP4/AVC (H.264) instead of WebM/VP9
  - Video filters (brightness, contrast, color, more) and flip video
  - Enhanced Dark Mode with 50+ variants
  - Custom themes (custom CSS, accent colors) and custom script
  - Cinema Mode (dims everything around the player; Esc or click outside exits)
  - Wide Player (beyond Theater Mode, or fill the window without fullscreen)
  - Mini Player (auto-launches on scroll so comments stay readable)
  - Resizable Pop-up Player (can be pinned on top)
  - Picture-in-Picture toggle
  - Hide end screens, info cards, recommendations, related videos, live chat, comments
  - Hide Shorts or watch Shorts like regular videos
  - Screenshot capture of video frames
  - Reverse playlist order
  - Customizable keyboard shortcuts for most features (assigned in the browser shortcut settings; no defaults listed)
  - Mouse shortcuts: Ctrl+click = default speed; Ctrl+Shift+click = 1x
  - Settings backup/export recommended on the how-to page
- Needs external service/API: no (permissions: storage; hosts: youtube.com, youtube-nocookie.com)
- Known limits or complaints: how-to page lists no "1080p Premium" selection, booster can mute some avc1+mp4a streams until reload, wheel conflicts with Logitech Smooth Scrolling, flip not available in fullscreen with hardware acceleration, pop-up player needs the youtube-nocookie permission; recent reviews (2026-10/11) say it needs an update for the refreshed YouTube UI and "Convert Shorts" stopped working
- screenshots: store-images/chrome/enhancer-for-youtube/01.png to 05.png (5 files, 1280x800)

## Video Enhancer for YouTube
- URL: https://chromewebstore.google.com/detail/video-enhancer-for-youtube/jpgdgpdcbjcnhmnibhopchhkajphahmj
- Users: 2,000 | Rating: 4.43 (7) | Model: free | Updated: 2025-12-11 (v2.0.0, MV3, 258 KiB, 1 language) | First published: 2023-12-01 | Open source: no (GitHub repo https://github.com/isgkm/VEfYT is an issue tracker only) | Platforms: Chrome, Firefox (AMO listing video-enhancer-for-youtube)
- Features:
  - Playback rate from 0.1x to 16x
  - Audio boost
  - Loop the whole video
  - Loop specific sections of a video
  - Brightness adjustment
  - Contrast adjustment
  - Up to 7 more adjustable filters
  - Edit filter values directly in text fields; fine mouse-wheel adjustment of filters
  - Option to keep filters when the video changes (no reset)
  - Toggle Picture-in-Picture
  - Customize extension theme colors and font size
- Needs external service/API: no (permissions: storage; host: *.youtube.com)
- Known limits or complaints: tiny audience; reviewer says the control is hard to fine-tune, resets with every new video, and has no default-speed setting; no keyboard shortcuts listed
- screenshots: store-images/chrome/video-enhancer-for-youtube/01.png to 04.png (4 files)

## YouTube Enhancer
- URL: https://chromewebstore.google.com/detail/youtube-enhancer/dejhhgdpambaambdifcfbmpliolehfaj
- Users: 2,000 | Rating: 4.44 (16) | Model: free (Ko-fi donations) | Updated: 2026-09-06 (v1.35.0, MV3, 2.5 MiB) | First published: 2024-04-22 | Open source: yes, MIT, https://github.com/YouTube-Enhancer/extension | Platforms: Chrome, Firefox (AMO youtube-enhancer-vc); Edge and Brave by manual load; Safari not mentioned
- Features:
  - Default playback speed with on-screen controls; speed buttons and forced speed; per-channel speed
  - Default video quality (1080p, 4K, etc.) with fallback and frame-rate settings; Premium enhanced bitrate
  - Mouse wheel controls speed (modifier Alt/Ctrl/Shift, step setting)
  - Mouse wheel controls volume (right-click hold or modifier key, step setting)
  - Volume boost beyond YouTube's limit (global or per-video, dB adjustable by scroll)
  - Global volume level so every video starts at the same volume; remember last volume
  - Separate volume memory for Shorts and regular videos
  - Loop button (one click)
  - Skip the "Video paused? Continue watching?" dialog
  - Auto-pause videos in background tabs
  - Auto-enable Theater Mode or maximize player on load; maximize-player button
  - Mini Player (auto-open at comments, button, position and size settings)
  - Transcript button and quick access to transcripts
  - Remove /redirect links, tracking parameters and shorten share links
  - Copy URL with timestamp; timestamp preview; block number-key seeking
  - Screenshot button (PNG, JPEG, WEBP; filename template, date/timestamp formats)
  - Deep Dark CSS themes (about 30, Dracula and Solarized among them) with seven custom colors
  - Custom CSS
  - Resume where you left off (video history; automatic or prompted resume)
  - Hide Shorts (channel pages, home feed, search, sidebar, watch pages, subscriptions)
  - Hide live chat, end-screen cards, members-only videos, paid-promo banner, playables, posts, AI features, recommended sidebar, translate-comment button
  - Playlist length totals, watched and remaining time; remove video, mark unwatched, remove all watched
  - Forward/rewind buttons with configurable skip time
  - Flip video horizontally and vertically; mono-to-stereo button
  - Reverse playlist and Save-to-Watch-Later buttons; remaining time display
  - Default to original audio track; ambient mode off; autoplay off; captions on/off on load
  - Pause background players; Shorts auto-scroll; videos-per-row setting
- Needs external service/API: no named third-party API (playlist length can use a YouTube "API" method with HTML fallback; permissions: activeTab, storage, tabs, scripting; hosts: youtube.com, m.youtube.com)
- Known limits or complaints: no default keyboard shortcuts listed; all recent reviews positive; very small user base
- screenshots: store-images/chrome/youtube-enhancer/01.png to 05.png (5 files)

## Improve YouTube! (ImprovedTube)
- URL: https://chromewebstore.google.com/detail/improve-youtube-for-youtube-videos/bnomihfieiccainjcjblhegjgglakjdd (developer site https://improvedtube.com)
- Users: 400,000 | Rating: 4.35 (7,152) | Model: free, donations accepted | Updated: 2026-07-06 (v4.2081, MV3, 809 KiB, 57 UI languages) | First published: 2012-12-19 | Open source: yes, https://github.com/ImprovedTube/ImprovedTube (license not stated on site) | Platforms: Chrome, Edge, Firefox, Opera, Safari (App Store "Improved Tube"), Naver Whale
- Features (store claims 170+ features, 85+ listed; most settings apply without reload):
  - Extra player buttons: loop/repeat, rotate video, screenshot
  - Custom keyboard shortcuts/hotkeys including mouse scroll for volume or anything
  - Fixed default playback speed ("speed-watching"), smart enough to exclude music or education
  - Volume mixer, fixed volume, loudness normalization
  - Default video quality (144p to 8K), auto HD/4K, avoid 60 fps, HDR vs SDR preference
  - H.264 codec preference (h264ify-style)
  - Autoplay off, "Up Next" off
  - Auto-pause tabs, auto-fullscreen, popup player, custom mini player (scrolling), Picture-in-Picture, pop-out player
  - Theater mode, cinema mode, window expander, resize player
  - Frame-by-frame viewing
  - Disable ambient lighting (cinematics)
  - Always-expanded video description, always-on transcript, always-on chapters
  - Subtitles, captions and transcript options
  - "Virtual Travel" (switch content country)
  - Undo the new sidebar (description, details, comments)
  - Activity analytics
  - Block videos, channels, tags and categories (filter rules)
  - Remove related videos; hide comments (fold/collapse), header, annotations, live chat, video details
  - Ad blocker with ad skipping, or allow ads from channels you subscribe to
  - Blue-light filter and display dim
  - Zen mode (dim pages until hovered); declutter/presentation mode
  - Themes, dark mode schedule, black theme for OLED, retro/classic layout, legacy list style
  - Reverse and shuffle playlist
  - Thumbnail tweaks (disable GIF animation, HD thumbnails); channel home "featured content" vs trailer; channel video counter
  - Overwrite YouTube shortcuts; toggle player controls; set YouTube language; tweak "scroll for details"
  - Search inside the extension, touch-friendly menu, draggable ImprovedTube icon on YouTube
  - Playback features also on embedded players, Facebook, mobile m.youtube, Netflix, Twitch, Vimeo
- Needs external service/API: optional host permission for returnyoutubedislikeapi.com (Return YouTube Dislike API) and optional "downloads" permission (screenshots); required: contextMenus, storage, www.youtube.com; no telemetry claimed
- Known limits or complaints: always-on-top pop-out needs an OS setting or app; recent 1-star reviews say it breaks randomized playlists/looping, "does nothing", and freezes the page; large surface area means regressions after YouTube UI changes
- screenshots: store-images/chrome/improve-youtube/01.png to 03.png (3 files)

