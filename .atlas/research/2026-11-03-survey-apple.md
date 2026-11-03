# Apple App Store survey: Safari / iOS / macOS tools that change YouTube

Date: 2026-11-03. Source: iTunes Search/Lookup API (country=us), the public App Store product pages (in-app purchase lists, privacy labels, per-platform compatibility), and the US customer-review RSS (two most-recent pages per app). Prices are US App Store.

Coverage: 96 apps have full sections (19 of the 20 must-cover names exist on the US store, plus Safari extensions, players, ad blockers and userscript/CSS managers that advertise YouTube support) and 49 more appear as metadata-only rows in the long tail. About 2,050 distinct apps surfaced across roughly 95 search queries (macOS and iOS/iPadOS entities); the ones listed are those whose listing mentions YouTube (or SponsorBlock) and Safari, plus the named must-cover apps.

Review counts quoted as "N US reviews" are the most recent reviews the RSS feed returned (up to 100), so the sample average can differ from the store average shown next to it.

## Checklist (must-cover)

- [x] Clean YT for Safari
- [x] SponsorBlock for Safari
- [x] PocketTube for Safari
- [x] Block YT Shorts for Safari
- [x] Accelerate for Safari
- [x] Shorts Blocker for YouTube
- [x] Vinegar - Tube Cleaner
- [x] Baking Soda - Tube Cleaner
- [x] Tweaks for YouTube (NOT on the US App Store after 8 search variants; nearest match is YouTweak)
- [x] Return YouTube Dislike (any Safari port)
- [x] DeArrow (any Safari port)
- [x] Hush Nag Blocker
- [x] Wipr
- [x] 1Blocker
- [x] AdGuard for Safari
- [x] StopTheMadness Pro
- [x] Userscripts
- [x] Cascadea
- [x] Hyperweb
- [x] Noir (if it touches YouTube)
- [x] Extras found: speed / background play / PiP / Premium alternative (see sections; metadata-only rows in the long tail)
- [x] Noir touches YouTube only as a generic dark mode (recorded for both iOS and Mac listings)
- [x] Wipr: only Wipr 2 is listed; original Wipr no longer in search

## App sections

## Clean YT for Safari
- App Store: https://apps.apple.com/us/app/clean-yt-for-safari/id6754407661; id 6754407661; seller Alfredo Grassau; site https://www.safariwebextensions.com
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 5 (1); API iOS (5, 1); API Mac None
- Last release: 2026-09-30 (v1.0.16); first release 2025-10-26
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99), no IAP, no subscription
- Features:
  - Block YouTube Shorts: removes Shorts from feeds
  - Block sponsored videos: filters promoted content so only organic videos show
  - Hide comments section
  - Hide suggested/recommended videos list
  - Privacy-first: advertises no data collection, tracking or logging
  - Multilingual UI
  - Single streamlined UI integrated into Safari
  - Same extension on Safari for macOS, iOS and iPadOS (universal purchase)
- External services/APIs: none stated; privacy label "Data Not Collected"; developer hub site https://www.safariwebextensions.com
- Review highlights: no written reviews in the US store (1 rating, 5 stars); nothing to summarise
- screenshots: .atlas/research/store-images/apple/clean-yt-for-safari/01-06.png (all iPhone)

## SponsorBlock for Safari
- App Store: https://apps.apple.com/us/app/sponsorblock-for-safari/id1573461917; id 1573461917; seller Ajay Ramachandran; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 4.4 (81); API iOS (4.37, 81); API Mac None
- Last release: 2026-06-30 (v6.1.6); first release 2021-06-24
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Linked to You [User Content, Identifiers]
- Pricing model: one-time paid app ($2.99; a 2024 reviewer cites $3.99, so price has moved), no IAP, no subscription
- Features:
  - Skip sponsor segments inside videos (crowdsourced start/end timestamps)
  - Skip intros, outros, subscription reminders and "other annoying parts"
  - Skip non-music sections of music videos
  - Auto-skip setting plus segment markers on the player timeline (reviews)
  - Users can submit segments and vote on them; leaderboard and reputation tied to a random userID
  - Option to hide creator chapters; fix for YouTube chapters sometimes not shown in the timeline (latest notes)
  - Injects extra buttons beside the video title (a reviewer complains about them)
  - Does NOT block normal YouTube ads; developer says to pair it with AdGuard
  - Works only on the YouTube website, not the YouTube app
  - Advertises compatibility with the Vinegar extension
  - Open source, public database; permission limited to youtube.com and youtube-nocookie.com
- External services/APIs: sponsor.ajay.app SponsorBlock API/database (segments, submissions, votes), github.com/ajayyy/SponsorBlock, Discord community; random userID generated at install; privacy label "Data Linked to You [User Content, Identifiers]"
- Review highlights (50 recent US reviews, 4.12 avg; store 4.4 of 81):
  - Praise: people happily pay to support the developer ("Happy to pay") and the servers; saves hours of sponsor reads; "Makes YouTube usable on iOS"
  - Complaint: stops activating or skipping after Safari/YouTube changes ("Doesn't activate while on youtube, just endlessly retries"; 2026-08, v6.1.6)
  - Complaint: segments show on the timeline but auto-skip stops working (2024 and 2026 reviews)
  - Complaint: conflicts with AdGuard's media player and the Vinegar extension ("either block ads or block sponsors")
  - Complaint: unwanted green buttons beside the title; occasional over-skipping to mid-video; confusion enabling it on iPhone; wish for Invidious support
- screenshots: .atlas/research/store-images/apple/sponsorblock-for-safari/01-04.png (01-02 iPhone, 03-04 iPad)

## PocketTube for Safari
- App Store: https://apps.apple.com/us/app/pockettube-for-safari/id1533703891; id 1533703891; seller Dmitry Nabok; site https://yousub.info/
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-10-23 (v18.10.8); first release 2020-09-29
- Min OS: Mac: Requires macOS 10.14 or later.
- Privacy label: Data Not Linked to You [Usage Data]
- Pricing model: free (no IAP listed); Mac only
- Features:
  - Create groups/collections of YouTube channels by topic; one channel can sit in several collections
  - Custom icon per collection (bundled icons or upload your own)
  - Show the latest videos per collection; play a whole collection as a YouTube playlist
  - Auto-sync collections to iOS (companion iOS app "PocketTube Subscription Manager")
  - Integrates into the YouTube main page and the left sidebar
  - Feed filters by topic on the subscriptions feed
  - Hide watched videos and hide search on the feed page
  - Sort subscriptions by activity, A-Z, subscription count or custom order
  - Catch-up helper for subscriptions; watch a tab group
  - Reload YouTube tabs after install (store note)
- External services/APIs: yousub.info (developer site, support email hello@yousub.info); iOS sync service implied by "auto-sync on iOS"; privacy label "Data Not Linked to You [Usage Data]"
- Review highlights (12 US reviews, avg 3.25; store shows no aggregate):
  - Praise: organises 1,500+ subscriptions into folders; free; "Excellent Support" (answers within minutes)
  - Complaint: slows down Safari or the whole Mac (2021, v9.x)
  - Complaint: groups do not appear in Safari after install (2023); toolbar icon re-appears after every update
  - Complaint: no auto-sync between Macs ("needs MacOS auto-sync"); wish for playlist folders
  - Complaint: privacy concern about subscription data (2020 review); a 2026 reviewer calls Mac App Store YouTube extensions near-identical clones
- screenshots: .atlas/research/store-images/apple/pockettube-for-safari/01-04.png (all Mac)

## Block YT Shorts for Safari
- App Store: https://apps.apple.com/us/app/block-yt-shorts-for-safari/id6754257092; id 6754257092; seller Alfredo Grassau; site https://www.safariwebextensions.com
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 5 (1); API iOS (5, 1); API Mac None
- Last release: 2026-09-30 (v1.0.16); first release 2025-10-21
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99), no IAP, no subscription
- Features:
  - Removes all Shorts from the YouTube homepage, subscriptions and recommendations
  - Lightweight single-purpose extension
  - Privacy-first: advertises no data collection, tracking or logging
  - Multilingual UI
  - Same extension on Safari for macOS, iOS and iPadOS (universal purchase)
- External services/APIs: none stated; privacy label "Data Not Collected"
- Review highlights (2 US reviews):
  - Praise: "saved me" from Shorts hijacking focus
  - Complaint: still shows Shorts after following the setup steps (1 star, 2026-09, v1.0.15) - "Waste of time and money"
- screenshots: .atlas/research/store-images/apple/block-yt-shorts-for-safari/01-06.png (01-03 iPhone, 04-06 iPad)

## Accelerate for Safari
- App Store: https://apps.apple.com/us/app/accelerate-for-safari/id1459809092; id 1459809092; seller Ritam Sarmah; site https://ritam.me/projects/accelerate/
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: Coffee Tip $1.99
- Rating: store page 4.2 (53); API iOS (4.19, 53); API Mac None
- Last release: 2026-02-04 (v1.1.4); first release 2019-04-18
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free with optional tip (IAP "Coffee Tip" $1.99); open source
- Features:
  - Control playback speed of any HTML5 video in Safari (YouTube, Netflix, Hulu, Apple TV+, Prime Video, Twitch and more)
  - Customisable keyboard shortcuts: play/pause, skip, mute, Picture-in-Picture and more
  - Control from keyboard or the extension popup menu
  - Supports Picture-in-Picture and AirPlay
  - Reviewers: speed steps fixed at 0.25x, cap at 2x, one reviewer wants 3x
  - Reviewers: clicking the toolbar icon should open settings
  - Open source on GitHub (ritamsarmah/accelerate), FAQ and privacy page on ritam.me
- External services/APIs: none stated; privacy label "Data Not Collected"
- Review highlights (90 recent US reviews, 3.83 avg; store 4.2 of 53):
  - Praise: "the perfect Safari video accelerator" for Mac; free; keyboard shortcut control
  - Complaint: stops working after Safari/YouTube/site changes ("doesn't work consistently on YouTube" after v4.2.4; not on disneyplus.com)
  - Complaint: iPhone setup and documentation unclear; shortcuts do not trigger
  - Complaint: max speed 2x and 0.25x increments only; custom increments like 0.05x impossible
  - Complaint: measurable Safari slowdown (Speedometer 2.0 drop reported on M1 Pro); tip prompt ("not free")
- screenshots: .atlas/research/store-images/apple/accelerate-for-safari/01-06.png (01-04 iPhone, 05-06 iPad)

## Shorts Blocker for YouTube
- App Store: https://apps.apple.com/us/app/shorts-blocker-for-youtube/id6451330524; id 6451330524; seller Yevhen Tretiakov; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $1.99; IAP: none listed
- Rating: store page 3.9 (135); API iOS (3.93, 135); API Mac None
- Last release: 2026-10-04 (v2.5); first release 2023-08-28
- Min OS: iPhone: Requires iOS 15.4 or later. | iPad: Requires iPadOS 15.4 or later. | iPod touch: Requires iOS 15.4 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99), no IAP, no subscription (a reviewer praises this vs subscription rivals)
- Features:
  - Removes YouTube Shorts everywhere: feed, search results, recommendations
  - Works only in Safari on iPhone, iPad and Mac; not compatible with the YouTube app (stated in small print)
  - Setup steps required in Safari Extensions (many reviewers get stuck)
  - Privacy label: no data collected
- External services/APIs: none stated
- Review highlights (100 recent US reviews, 3.94 avg; store 3.9 of 135):
  - Praise: one-time purchase vs subscription ("I'll gladly pay 3-5 bucks once"); works immediately; improved focus
  - Complaint: does not work in the YouTube app; screenshots show the YouTube app, so buyers feel misled
  - Complaint: setup unclear ("Please explain how to use it"); extension does not turn on
  - Complaint: stopped working after YouTube changes (v1.9); one report that it hid the whole subscriptions feed
  - Complaint: parents say it does not stop Shorts on channel pages for kids
- screenshots: .atlas/research/store-images/apple/shorts-blocker-for-youtube/01-02.png (01 iPhone, 02 iPad)

## Vinegar - Tube Cleaner
- App Store: https://apps.apple.com/us/app/vinegar-tube-cleaner/id1591303229; id 1591303229; seller And a Dinosaur; site https://andadinosaur.com/launch-vinegar
- Platforms: macOS, iPhone, iPad
- Price: iOS $1.99; IAP: none listed
- Rating: store page 4.2 (761); API iOS (4.24, 761); API Mac None
- Last release: 2026-10-18 (v3.5.4); first release 2021-11-06
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99), no IAP; 50% "Fizzy Water Bundle" discount with Baking Soda
- Features:
  - Replaces the YouTube player with a minimal native HTML video tag
  - Removes ads
  - Restores Picture-in-Picture
  - Background playback when set to audio-only quality
  - Reviewers mention: video quality choice, subtitles, AirPlay, widescreen mode, a "Vinegar Classic" mode, an on/off switch they sometimes need to toggle
  - Needs "read and alter webpages" permission to find and swap the player (developer explains wording)
  - Companion Baking Soda handles other sites (not YouTube)
  - Wanted by reviewers: YouTube Music support, automatic maximum resolution, autoplay-on-scroll off switch
- External services/APIs: none stated; privacy label "Data Not Collected"; developer site andadinosaur.com
- Review highlights (100 recent US reviews, 3.45 avg; store 4.2 of 761):
  - Praise: "makes YouTube tolerable", tiny footprint, fair price, well maintained
  - Complaint: breaks after YouTube/Safari changes (PiP button gone, "no longer functions")
  - Complaint: subtitle bugs (oversized or left-aligned); volume jumps
  - Complaint: AirPlay sends audio only or low quality (360p)
  - Complaint: iPad controls unusable at times; autoplay while scrolling; conflicts with uBO Lite
- screenshots: .atlas/research/store-images/apple/vinegar-tube-cleaner/01-04.png (01-02 iPhone, 03-04 iPad)

## Baking Soda - Tube Cleaner
- App Store: https://apps.apple.com/us/app/baking-soda-tube-cleaner/id1601151613; id 1601151613; seller And a Dinosaur; site https://andadinosaur.com/launch-baking-soda
- Platforms: macOS, iPhone, iPad
- Price: iOS $1.99; IAP: none listed
- Rating: store page 4.5 (100); API iOS (4.49, 100); API Mac None
- Last release: 2026-10-01 (v1.2.3); first release 2021-12-23
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99), no IAP; Vinegar owners get 50% off via the "Fizzy Water Bundle"
- Features:
  - Replaces custom video players (all sites except YouTube) with a minimal HTML video tag
  - Simpler than Vinegar: no ad blocking, no video quality switching
  - Per-website disable in settings
  - Latest fix: Content Security Policy error on some sites
  - Wanted by reviewers: subtitles, playback-speed slider, hotkeys, captions and quality controls
  - Does not touch YouTube; it is the companion to Vinegar (relevant as a pattern, not a YouTube tool)
- External services/APIs: none stated; privacy label "Data Not Collected"
- Review highlights (31 US reviews, 3.68 avg; store 4.5 of 100):
  - Praise: no-compromise way to strip janky players; per-site disable; good value
  - Complaint: breaks some sites (ESPN, Amazon Photos, Facebook); described as unmaintained
  - Complaint: no subtitle support or speed control; hotkeys undocumented
  - Complaint: Safari permission warning about "passwords and credit cards" scares users
- screenshots: .atlas/research/store-images/apple/baking-soda-tube-cleaner/01-04.png (01-02 iPhone, 03-04 iPad)

## DeArrow for YouTube
- App Store: https://apps.apple.com/us/app/dearrow-for-youtube/id6451469297; id 6451469297; seller Ajay Ramachandran; site https://dearrow.ajay.app
- Platforms: macOS, iPhone, iPad
- Price: iOS $1.99; IAP: none listed
- Rating: store page 4.4 (18); API iOS (4.39, 18); API Mac None
- Last release: 2026-06-10 (v2.3.9); first release 2023-07-20
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Linked to You [User Content, Identifiers]
- Pricing model: one-time paid app ($1.99), no IAP; sold in a bundle with SponsorBlock (review mentions a bundle)
- Features:
  - Crowdsourced replacement titles and thumbnails for YouTube videos; users submit and vote
  - Thumbnails are screenshots from specific video timestamps
  - Fallback when no submission exists: auto-format the original title and show a screenshot from a random timestamp
  - Title casing options: "Title Case" and "Sentence case" that keep acronyms and proper names
  - Random-timestamp thumbnail avoids sponsor segments by checking the SponsorBlock database
  - Option to disable formatting or show the original thumbnail by default; can vote for the original thumbnail
  - Compared with "Clickbait Remover for YouTube": crowdsourcing first, smarter casing, truly random thumbnails (not YouTube's face-favouring ML ones)
  - Optional user-added third-party YouTube front-ends (Invidious support unfinished); asks permission per site, never all sites
  - Latest notes: fix thumbnail replacement on /live/ pages and on page resize; compatibility with "mr beastify" style extensions
  - Open source (github.com/ajayyy/DeArrow); permission limited to youtube.com and youtube-nocookie.com
- External services/APIs: dearrow.ajay.app (title/thumbnail database and random-timestamp thumbnail generation), SponsorBlock database, GitHub; privacy label "Data Linked to You [User Content, Identifiers]"
- Review highlights (11 US reviews, 4.27 avg; store 4.4 of 18):
  - Praise: removes clickbait and "face fatigue" (exaggerated faces) from thumbnails; cleaner interface
  - Praise: complements SponsorBlock as a suite
  - Complaint: opens its configuration page for every new Safari profile or web app ("forcibly opens its configuration web page")
  - Complaint: slower, less reliable on Safari over time; some clickbait titles stay unchanged; wish for basic AI rewrites
- screenshots: .atlas/research/store-images/apple/dearrow-for-youtube/01-04.png (01-02 iPhone, 03-04 iPad)

## Hush Nag Blocker
- App Store: https://apps.apple.com/us/app/hush-nag-blocker/id1544743900; id 1544743900; seller Oblador AB; site https://oblador.github.io/hush/
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.4 (1090); API iOS (4.41, 1090); API Mac None
- Last release: 2026-07-26 (v1.0.19); first release 2020-12-22
- Min OS: iPhone: Requires iOS 14.3 or later. | iPad: Requires iPadOS 14.3 or later. | iPod touch: Requires iOS 14.3 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP, open source (MIT)
- Features:
  - Safari content blocker that removes cookie-consent nags and privacy-invasive tracking
  - Zero configuration; thousands of rules run in the background
  - Blocking done by Safari itself from Hush's rule list; app cannot see browsing
  - No third-party dependencies, no tracking or crash reporting
  - Tiny and fast native build
  - Quote in listing from John Gruber (Daring Fireball)
  - Latest notes: more nags blocked and fixes to partially broken websites
  - No YouTube-specific claim in the listing
- External services/APIs: none; privacy label "Data Not Collected"; source at oblador.github.io/hush
- Review highlights (100 recent US reviews, 3.58 avg; store 4.4 of 1,090):
  - Praise: mostly short generic five-star reviews ("This is a great app"); the listing itself stresses free, open source, no settings
  - Complaint: cookie banners still appear on big sites (CNN etc.) and blocking got "hit or miss" in 2026
  - Complaint: hard to find or manage after install (one review says it vanished from the extension list)
- screenshots: .atlas/research/store-images/apple/hush-nag-blocker/01-02.png (01 iPhone, 02 iPad)

## Wipr 2
- App Store: https://apps.apple.com/us/app/wipr-2/id1662217862; id 1662217862; seller Kaylee Calderolla; site https://kaylees.site/wipr2.html
- Platforms: macOS, iPhone, iPad
- Price: iOS $4.99; IAP: Filtr $4.99; Filtr $24.99; Monthly Recurring Tip $1.99; Tip $4.99; Yearly Recurring Tip $9.99; Mega Tip $19.99
- Rating: store page 4.7 (1361); API iOS (4.68, 1361); API Mac None
- Last release: 2026-10-29 (v2.44); first release 2024-11-12
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($4.99) plus optional IAP: Filtr add-on ($4.99 and $24.99 tiers listed) and tips (monthly $1.99, yearly $9.99, one-off $4.99 and $19.99)
- Features:
  - Blocks ads, popups, trackers and cookie warnings in Safari
  - Blocklist updated automatically twice a week; enhanced lists for 30+ languages
  - Filtr add-on extends blocking to all apps at network level (works with VPNs, iCloud Private Relay, custom DNS; cannot read data)
  - "Wipr Extra" extension for advanced rules; latest notes add Global Privacy Control support and many site fixes
  - Universal purchase across iPhone, iPad, Mac and Vision Pro; Family Sharing; VoiceOver and Voice Control support
  - Dark, tinted and clear icon variants
  - No "acceptable ads" programme
  - Featured by Apple in "The Best Safari Extensions"
  - No YouTube claim in the listing; reviewers test it on YouTube
- External services/APIs: blocklist hosting (updates twice weekly); privacy label "Data Not Collected"
- Review highlights (100 recent US reviews, 4.25 avg; store 4.7 of 1,361):
  - Praise: "Only ad blocker that just works", zero configuration, one-time purchase, responsive indie developer
  - Complaint: does not block YouTube ads in Safari ("will not even touch anything on YT"; Wipr 1 did)
  - Complaint: triggers YouTube's ad-block detection and cookie pop-ups on Mac
  - Complaint: Filtr app-wide blocking does not cover the YouTube app yet costs extra ("they charge you $25 more")
  - Complaint: "Wipr Extra" crashes Safari in Private mode; Filtr breaks Amazon checkout
- screenshots: .atlas/research/store-images/apple/wipr-2/01-06.png (01-04 iPhone, 05-06 iPad)

## 1Blocker: Ad Blocker
- App Store: https://apps.apple.com/us/app/1blocker-ad-blocker/id1365531024; id 1365531024; seller 1Blocker LLC; site https://1blocker.com
- Platforms: macOS, iPhone, visionOS, iPad
- Price: iOS Free; IAP: 1Blocker Yearly $14.99; 1Blocker Monthly $2.99; Legacy Users $14.99; 1Blocker Lifetime $39.99; Legacy Users $2.99; Promo Offer (Sale Ended) $14.99; Promo Offer (Sale Ended) $2.99
- Rating: store page 4.5 (12964); API iOS (4.5, 12964); API Mac None
- Last release: 2026-10-07 (v6.7); first release 2018-04-26
- Min OS: iPhone: Requires iOS 16.0 or later. | iPad: Requires iPadOS 16.0 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Purchases, Identifiers]
- Pricing model: free app with subscription or lifetime unlock: Yearly $14.99, Monthly $2.99, Lifetime $39.99 (Legacy-user and promo prices also listed)
- Features:
  - Block ads, trackers and annoying elements with Safari content-blocker filters (native, no page modification)
  - Cloud updates of built-in filters; categories (ads, trackers, etc.) toggled with switches
  - Free tier: one category at a time, whitelist sites from the Safari extension, iCloud whitelist sync
  - Premium: custom rules - block any URL by regular expression, hide any element by CSS, block cookies
  - Preferences and custom rules sync across iPhone, iPad and Mac via iCloud
  - "1Blocker Scripts" extension runs scriptlets and extended CSS in every filter package (before only YouTube)
  - YouTube ad blocking now updates together with the other filters (latest notes)
  - Premium: external filter lists may include advanced rules, with a "Trust This List" option
  - Claims sites load 2-5x faster; no "Acceptable Ads"; disclaims that some ads cannot be blocked by content blockers
- External services/APIs: 1Blocker filter cloud (silent updates); iCloud for sync; privacy label "Data Not Linked to You [Purchases, Identifiers]"
- Review highlights (100 recent US reviews, 3.22 avg; store 4.5 of 12,964):
  - Praise: "best content blocker in the App Store"; years of reliable blocking; responsive developer
  - Complaint: YouTube ads reappeared in Safari after recent updates and iOS 27 (dozens of Oct 2026 reviews)
  - Complaint: moved from paid app to freemium and subscription ("$15 a year or just use uBlock Origin Lite")
  - Complaint: does nothing for in-app ads (YouTube app)
  - Complaint: free tier limited to one category
- screenshots: .atlas/research/store-images/apple/1blocker/01-06.png (all iPhone)

## AdGuard Ad Blocker for Safari
- App Store: https://apps.apple.com/us/app/adguard-ad-blocker-for-safari/id1047223162; id 1047223162; seller Adguard Software Limited; site https://adguard.com/
- Platforms: iPhone, iPad
- Price: iOS Free; IAP: 1 Year Premium Mobile Ad Block $7.99; 1 Month Safe Mobile Ad Blocker $1.99; AdGuard Premium $19.99; AdGuard Premium $4.99; AdGuard: Mobile Annual $19.99; AdGuard: Personal Monthly $2.99; Premium Lifetime $14.99; AdGuard: Personal Annual $29.99; AdGuard: Family Annual $65.99; AdGuard: Family Monthly $6.99
- Rating: store page 4.3 (20229); API iOS (4.35, 20229); API Mac None
- Last release: 2026-11-02 (v4.5.24); first release 2015-10-24
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free app + subscriptions/lifetime IAP; 7-day free trial. Listed IAP tiers: Premium Lifetime $14.99; Premium $4.99 and $19.99; Mobile Annual $19.99; Personal Monthly $2.99, Personal Annual $29.99; Family Monthly $6.99, Family Annual $65.99; 1-Year Mobile Ad Block $7.99; 1-Month Safe Mobile Ad Blocker $1.99
- Features:
  - Block ads, banners, popups, autoplay videos in Safari "including YouTube" (free tier)
  - Pro unlocks "advanced YouTube blocking", app protection via DNS, custom rules and security filters
  - Block trackers and digital fingerprinting scripts
  - Encrypted DNS filtering system-wide (not just Safari); choose DNS servers; family-safe DNS
  - Allowlists and blocklists, user rules for filtering
  - Built-in statistics dashboard of blocked ads and trackers
  - Protection against malvertising and phishing; in-house filters plus popular third-party lists
  - Open source on GitHub; no "acceptable ads"; 17 years of experience claimed
  - No account or registration needed for the free tier
  - Companion note in SponsorBlock's listing: pair AdGuard with SponsorBlock to cover ads and sponsors
- External services/APIs: AdGuard DNS servers/filter lists; privacy label "Data Not Collected"
- Review highlights (100 recent US reviews, 4.09 avg; store 4.3 of 20,229):
  - Praise: blocks pop-ups and redirects (also on streaming sites), long-time reliable; some praise in-app-ad blocking via DNS
  - Complaint: ads still appear on several sites; anti-adblock walls recognise it
  - Complaint: "this connection is not secure" errors when the DNS/VPN profile is active
  - Complaint: forced ratings prompt; slow or confusing support
  - Complaint: stopped working with DuckDuckGo browser; some sites break
- screenshots: .atlas/research/store-images/apple/adguard-ad-blocker-for-safari-ios/01-06.png (all iPhone)

## AdGuard: Ad Blocker for Safari
- App Store: https://apps.apple.com/us/app/adguard-ad-blocker-for-safari/id1440147259; id 1440147259; seller Adguard Software Limited; site https://adguard.com
- Platforms: macOS
- Price: Mac Free; IAP: Monthly subscription $4.99; Annual subscription $34.99
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-11-02 (v3.0); first release 2018-11-07
- Min OS: Mac: Requires macOS 12 or later.
- Privacy label: Data Not Collected
- Pricing model: free app + subscription IAP (Pro: Monthly $4.99, Annual $34.99); 14-day free trial; reviews also mention a lifetime licence
- Features:
  - Now branded "AdGuard Mini" (formerly AdGuard for Safari); redesigned and faster
  - Block banners, video ads, popups, autoplay video, overlays in Safari
  - Stop trackers and analytics beacons
  - Clean annoyances: cookie notices, social widgets, sticky bars
  - Manage everything from the Safari toolbar
  - Element picker and manual blocking to remove anything on a page
  - Popular filter lists or add your own; advanced custom rule editor
  - Pro: real-time filter updates, "AdGuard Extra" for anti-adblock and hard cases, advanced custom filters
  - v3.0: system web view UI (less RAM/CPU), basic VoiceOver, hide stories in tray, experimental system-wide protection for licence holders
  - No YouTube claim in the listing; reviewers test it on YouTube
- External services/APIs: AdGuard filter servers/knowledge base (adguard.com/kb); privacy label "Data Not Collected"
- Review highlights (100 recent US reviews, 2.66 avg; Mac store shows no aggregate):
  - Praise: set-and-forget, free core, "works good with YT and shorts" (v2.3.1091 comment)
  - Complaint: blocks YouTube ads for a few hours, then videos refuse to play until AdGuard is off
  - Complaint: high battery and power use, Mac gets warm; crashes on launch on macOS Sequoia
  - Complaint: dock icon appears on every run; review-begging pop-up; licence model change and lost lifetime licence
  - Complaint: "works about as well as uBlock Origin with some glaring exceptions, like Youtube"
- screenshots: .atlas/research/store-images/apple/adguard-for-safari-mac/01-06.png (all Mac)

## StopTheMadness Pro
- App Store: https://apps.apple.com/us/app/stopthemadness-pro/id6471380298; id 6471380298; seller Jeff Johnson; site https://underpassapp.com/StopTheMadness/
- Platforms: macOS, iPhone, iPad
- Price: iOS $14.99; IAP: none listed
- Rating: store page 0 (0); API iOS (4.73, 204); API Mac None
- Last release: 2026-10-30 (v28.2); first release 2023-12-12
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($14.99), no IAP, no trial; one purchase covers Mac, iPhone and iPad (Mac also includes Chrome and Firefox extensions)
- Features:
  - Stop sites disabling copy/paste, text selection, drag and drop, context menus, AutoFill, Cmd shortcuts
  - Stop Google AMP; strip URL tracking parameters; stop clickjacking, hyperlink auditing, sendBeacon tracking
  - Bypass URL shorteners (bit.ly, tinyurl, t.co)
  - Stop autoplaying audio and video; always show Safari native video controls incl. Picture-in-Picture
  - Unmute videos on first play; auto-select video playback speed
  - Stop Safari pausing background audio such as Apple Music
  - "YouTube Picture-in-Picture" feature (latest notes fix the PiP button alignment)
  - Hide "Get the app", notification and "Sign in with Google" banners
  - Hide page elements with a tap; website-specific CSS and JavaScript; run custom JS snippets; custom URL redirects
  - Font substitution; force links into current or new tab; stop web animations; stop pinch-zoom lock
  - Reload page on timer; view and edit page HTML; iCloud sync of settings between devices
  - Explicitly "not an ad blocker"
  - Reviewers request: YouTube return-dislike option, disable-scripts feature
- External services/APIs: iCloud for settings sync; privacy label "Data Not Collected"; documentation at underpassapp.com/StopTheMadness
- Review highlights (85 US reviews, 4.31 avg; API 4.73 of 204):
  - Praise: Swiss-army-knife control over sites; one-time payment; developer responsive; works on phone and iPad too
  - Complaint: default settings break many sites (links stop working, infinite loading)
  - Complaint: steep learning curve and thin documentation; no trial
  - Complaint: crashes on reddit.com autoplay blocking (2025); ratings nag in the UI (2026)
  - Complaint: some buyers could not install across iPhone and Mac at launch (universal purchase confusion)
- screenshots: .atlas/research/store-images/apple/stopthemadness-pro/01-06.png (all iPhone)

## Userscripts
- App Store: https://apps.apple.com/us/app/userscripts/id1463298887; id 1463298887; seller Justin Wasack; site https://github.com/quoid/userscripts
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.3 (191); API iOS (4.32, 191); API Mac None
- Last release: 2026-01-11 (v1.8.6); first release 2019-05-14
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP, open source (GitHub quoid/userscripts)
- Features:
  - Save and run arbitrary JavaScript and CSS for sites you visit (userscript manager for Safari)
  - Use cases listed: automatic page redirection, page manipulation (styling, element creation), custom ad-blocking, code injection, style injection
  - No user tracking
  - Scripts stored in a user-chosen directory (a pain point on iOS)
  - Latest notes: memory usage cut, crash fix for large metadata userscripts on iOS, guard against too many scripts
  - Community uses: show YouTube dislike counts (a reviewer tried one), right-click fixes, CSS on iPad
- External services/APIs: none; privacy label "Data Not Collected"; GitHub for help and bug reports
- Review highlights (78 US reviews, 4.21 avg; store 4.3 of 191):
  - Praise: free, open source, makes desktop-only userscripts possible on iPhone and iPad
  - Complaint: scripts silently turn off or revert after a few days, need re-opening the app
  - Complaint: iOS has no guide; extension setup screen loops; script directory problems
  - Complaint: slows Safari or fails to recognise scripts (one tried to replace Tampermonkey)
  - Complaint: a YouTube dislike userscript was inaccurate (reviewer count vs. real dislikes)
- screenshots: .atlas/research/store-images/apple/userscripts/01-06.png (01-03 iPhone, 04-06 iPad)

## Cascadea
- App Store: https://apps.apple.com/us/app/cascadea/id1432182561; id 1432182561; seller Mike Freuden; site http://cascadea.app
- Platforms: macOS
- Price: Mac $2.99; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2021-11-03 (v2.1.3); first release 2018-10-03
- Min OS: Mac: Requires macOS 10.14 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99); Mac only; no iOS/iPadOS version (a reviewer asks for it); store listing last updated 2021-11 (appears dormant)
- Features:
  - Custom CSS themes for any website in Safari; install styles from compatible style sites, UserCSS files or plain CSS
  - Native UI to configure per-style settings, reorder styles, keep them updated, auto-update on launch
  - Built-in style editor: CSS, Stylus and Less preprocessors; autocompletion, syntax highlighting, folding, multi-cursor, tabs; live reload to Safari on save
  - Per-site rules and site exclusions for each style
  - UserCSS variables supported
  - Tie styles to macOS appearance (Dark Mode styles toggle automatically)
  - iCloud sync of styles and preferences across Macs; import and export the style database
  - Toolbar icon shows active styles on the page and opens them in the editor
  - Apple silicon native; Touch Bar support
  - No tracking; only opt-in Apple crash reports
  - No YouTube-specific claim (a style tool people can aim at YouTube)
- External services/APIs: user-style sites (userstyles-type galleries) for installing styles; iCloud; privacy label "Data Not Collected"
- Review highlights (28 US reviews, 3.89 avg; Mac store shows no aggregate):
  - Praise: "very well designed", good for small website tweaks (hide something, widen a table)
  - Complaint: requests permission for all websites and browsing history ("severe privacy risk" reviews)
  - Complaint: does not work in Dock web apps; styles not applying and support did not reply
  - Complaint: choppy scrolling with long CSS; early versions forced global styles with exclusions rather than per-domain rules
- screenshots: .atlas/research/store-images/apple/cascadea/01-06.png (all Mac)

## Hyperweb
- App Store: https://apps.apple.com/us/app/hyperweb/id1581824571; id 1581824571; seller Laso Technologies Inc; site n/a
- Platforms: iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.6 (1482); API iOS (4.62, 1482); API Mac None
- Last release: 2023-03-21 (v1.1.31); first release 2021-09-20
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Usage Data, Diagnostics]
- Pricing model: free, no IAP (a former paid subscription existed per one reviewer); iPhone and iPad only; last update 2023-03 (reviewers call it abandoned)
- Features:
  - "All-in-one extension for Safari on iOS" that suggests enhancements automatically as you browse
  - Blocks annoyances; suggests smart alternatives (e.g. redirect links to other apps)
  - Reviewers mention: YouTube ad blocker and YouTube Picture-in-Picture enabler
  - Reviewers mention: element blocking tool, auto-click to dismiss cookie banners and newsletter pop-ups, ad filter lists, blocking new-tab pop-ups, Reddit redirect to another app
  - Reviewer request: open YouTube links in Yattee (third-party player app)
  - Listing text is a single sentence; no feature list
- External services/APIs: ad filter lists (reviewers say they stopped updating); privacy label "Data Not Linked to You [Usage Data, Diagnostics]"; hyperweb.app privacy page reported unreachable
- Review highlights (100 recent US reviews, 3.55 avg; store 4.6 of 1,482):
  - Praise: free all-in-one blocker; "love the YouTube adblocker and YouTube PiP enabler" (iOS 15 era)
  - Complaint: abandoned since 2023; breaks Safari page loads on newer iOS; ad lists no longer update
  - Complaint: features blank or broken (auto-click, element blocking); no tutorial
  - Complaint: one review says YouTube loads extremely slowly with it enabled
  - Complaint: developer/company seems defunct; privacy policy site unreachable
- screenshots: .atlas/research/store-images/apple/hyperweb/01-06.png (all iPhone)

## Noir - Dark Mode for Safari
- App Store: https://apps.apple.com/us/app/noir-dark-mode-for-safari/id1581140954; id 1581140954; seller Jeffrey Kuiken; site https://getnoir.app
- Platforms: iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 4.6 (1366); API iOS (4.56, 1366); API Mac None
- Last release: 2026-10-22 (v2026.2.2); first release 2021-09-20
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99 iOS/iPadOS; Mac version is a separate $3.99 purchase); no subscription, no ads
- Features:
  - Automatic dark mode for every website in Safari; custom dark style generated per site from page colours
  - 20+ built-in themes plus custom themes
  - Linked to device Dark Mode by default; override per website; enable or disable per site
  - Safari web extension: no manual activation per page
  - Integrates with Shortcuts, Control Center, Focus Filters and Widgets
  - iCloud sync of settings; no browsing data collected
  - Needs access to all websites to analyse and override page styles
  - Latest notes: ready for iPhone Duo; many site fixes
  - No YouTube-specific claim; touches YouTube only as a generic dark mode (a Mac review says it breaks precision seeking and seek-bar thumbnails)
- External services/APIs: iCloud for settings sync; privacy label "Data Not Collected"; getnoir.app
- Review highlights (100 recent US reviews, 4.19 avg; store 4.6 of 1,366):
  - Praise: photo-friendly dark mode; accessibility benefit for light-sensitive users; responsive developer
  - Complaint: slows page loads or blocks pages from loading; sluggish after updates
  - Complaint: misdetects dark/light pages; many sites need to be disabled
  - Complaint: Mac version must be bought again
- screenshots: .atlas/research/store-images/apple/noir-dark-mode-ios/01-06.png (01-05 iPhone, 06 iPad)

## Noir – Dark Mode for Safari
- App Store: https://apps.apple.com/us/app/noir-dark-mode-for-safari/id1592917505; id 1592917505; seller Jeffrey Kuiken; site https://getnoir.app
- Platforms: macOS
- Price: Mac $3.99; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-10-26 (v2026.2.2); first release 2021-11-03
- Min OS: Mac: Requires macOS 12.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($3.99), separate Mac listing from the $2.99 iOS/iPadOS one; no subscription
- Features:
  - Same feature set as the iOS listing (automatic per-site dark mode, 20+ themes, Shortcuts, Focus Filters, Widgets, iCloud sync); no Control Center on Mac
  - Keyboard shortcuts for "set enabled status" (reviewer says they do not work)
  - YouTube relevance: only generic; a 1-star review says it "messes up precision seeking on Youtube" and shows wrong preview thumbnails
- External services/APIs: iCloud for settings sync; privacy label "Data Not Collected"
- Review highlights (100 recent US reviews, 3.72 avg; Mac store shows no aggregate):
  - Praise: "Works on 9/10 websites"; eye-saver for night reading; looks almost native
  - Complaint: Safari warning that the extension can read passwords and credit cards on all sites scares buyers
  - Complaint: slow rendering, misdetection of dark/light sites, extension connection errors on macOS 26.1
  - Complaint: help guides out of date; update/reinstall problems
- screenshots: .atlas/research/store-images/apple/noir-dark-mode-mac/01-05.png (all Mac)

## Return Dislikes
- App Store: https://apps.apple.com/us/app/return-dislikes/id6605923430; id 6605923430; seller Linus Ronnback Larsson; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 3 (4); API iOS (3, 4); API Mac None
- Last release: 2024-12-09 (v1.2.3); first release 2024-08-06
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later.
- Privacy label: Data Not Linked to You [Identifiers]
- Pricing model: free, no IAP; Safari port of the Return YouTube Dislike idea (store copy does not name the RYD API)
- Features:
  - Brings back the YouTube dislike counter on video pages in Safari
  - Single-purpose extension; tiny (0.8 MB)
  - Universal listing: Mac, iPhone, iPad
- External services/APIs: not stated; the only public dislike data source is the community Return YouTube Dislike API, so it very likely calls it (inference); privacy label "Data Not Linked to You [Identifiers]"
- Review highlights (4 US reviews, 3.0 avg):
  - Praise: "a well-made return YouTube dislike client for Safari"; reviewer calls it the only one of its kind
  - Complaint: one buyer never saw dislike counts ("It doesn't work in the settings")
- screenshots: .atlas/research/store-images/apple/return-dislikes/01-06.png (01-03 iPhone, 04-06 iPad)

## Dislike Checker for YouTube
- App Store: https://apps.apple.com/us/app/dislike-checker-for-youtube/id1627860091; id 1627860091; seller Taishi Nakai; site https://100hon.com/
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: none listed
- Rating: store page 3.4 (248); API iOS (3.42, 248); API Mac None
- Last release: 2023-08-16 (v1.0.11); first release 2022-06-04
- Min OS: iPhone: Requires iOS 11.0 or later. | iPad: Requires iPadOS 11.0 or later. | iPod touch: Requires iOS 11.0 or later. | Mac: Requires macOS 11.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Used to Track You [Identifiers]; Data Not Linked to You [Identifiers]
- Pricing model: free (ad-supported per a review), no IAP; iPhone and iPad only (not a Safari extension)
- Features:
  - Paste or share a YouTube URL to see dislikes, likes and rating
  - Marketed for analysing rivals' videos and popularity
  - Built-in YouTube browser (a reviewer wants dislikes shown inside it)
  - Ads in the app can glitch results (review)
- External services/APIs: undisclosed rating/dislike data source; privacy label "Data Used to Track You [Identifiers]; Data Not Linked to You [Identifiers]"
- Review highlights (47 US reviews, 1.62 avg; store 3.4 of 248):
  - Praise: "Simple. Effective. Free."; useful for looking up negative ratings
  - Complaint: URL lookup often fails or says the link is invalid ("doesn't work at all")
  - Complaint: numbers may be inaccurate; ads glitch the results
  - Complaint: does not change YouTube itself (no in-page counter)
- screenshots: .atlas/research/store-images/apple/dislike-checker-for-youtube/01-02.png (01 iPhone, 02 iPad)

## wBlock: Ad Blocker for Safari
- App Store: https://apps.apple.com/us/app/wblock-ad-blocker-for-safari/id6746388723; id 6746388723; seller Alexander Skula; site https://skula.me/project/wblock/
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.8 (187); API iOS (4.79, 187); API Mac None
- Last release: 2026-11-02 (v3.2.3); first release 2025-10-13
- Min OS: iPhone: Requires iOS 15.4 or later. | iPad: Requires iPadOS 15.4 or later. | iPod touch: Requires iOS 15.4 or later. | Mac: Requires macOS 12.3 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, open source (GPL-3.0), no IAP, no subscription; nothing locked behind payment
- Features:
  - Up to 750,000 Safari content-blocking rules; recommended filter lists or add your own by URL, text or file
  - Regional lists; optional cookie-banner and annoyance filters; lists auto-update; inspect rules each list produces
  - Userscripts and userstyles: built-in AdGuard Extra and Dark Reader, import your own userscripts, UserCSS (plain CSS, USO, Less, Stylus)
  - Return YouTube Dislike available in the script catalog
  - Optional "Tube Cleaner" and "Player Cleaner": Safari native video controls on supported players, Picture-in-Picture and background audio
  - Tube Cleaner includes SponsorBlock settings for YouTube
  - DeArrow (alternative titles and thumbnails) available as a separate download
  - Per-site toggle of filtering or userscripts from the toolbar popup
  - Element Zapper to hide overlays; per-list site scoping and exclusions including patterns like amazon.*
  - Pause blocking; tracking-parameter removal; opt-in Global Privacy Control
  - Optional toolbar blocked-request count
  - iCloud sync of lists, settings, custom filters and userscripts; local backup export
  - Mac: scheduled filter updates while the app is closed
  - Latest notes: OLED background option for Dark Reader, Persian blocker, split large lists across blockers, apply progress banners
- External services/APIs: community filter list hosts; Return YouTube Dislike, SponsorBlock and DeArrow services via bundled scripts; iCloud; GitHub; privacy label "Data Not Collected"
- Review highlights (76 recent US reviews, 4.51 avg; store 4.8 of 187):
  - Praise: free yet granular control; "lets you block YouTube ads"; lightweight; best dark reader mode
  - Praise: works on desktop-only sites (Pinterest) and restricted news articles
  - Complaint: some ads and pop-ups get through, especially on mobile; "jack of all trades"
  - Complaint: install fails to finish on macOS Tahoe 26.3; constant "unapplied filters" reminders
  - Complaint: userscript option lags; a Feb 2026 update removed the Google logo
- screenshots: .atlas/research/store-images/apple/wblock-ad-blocker-for-safari/01-06.png (01-05 iPhone, 06 iPad)

## UnTrap for YouTube
- App Store: https://apps.apple.com/us/app/untrap-for-youtube/id1637438059; id 1637438059; seller Yevhen Tretiakov; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $4.99; IAP: Monthly $3.99; Yearly $35.99
- Rating: store page 4.1 (519); API iOS (4.05, 519); API Mac None
- Last release: 2026-10-25 (v12.4); first release 2022-08-08
- Min OS: iPhone: Requires iOS 15.4 or later. | iPad: Requires iPadOS 15.4 or later. | iPod touch: Requires iOS 15.4 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Usage Data]
- Pricing model: paid app ($4.99) plus subscription IAP (Monthly $3.99, Yearly $35.99); reviewers say sync and many features moved behind the subscription
- Features:
  - 250+ features: layout customisation, content filters, automation, focus tools
  - Hide Shorts, comments, related and suggested videos
  - Grayscale, blur or hide thumbnails
  - Auto-redirect the YouTube homepage to a custom page
  - Remove notifications, buttons, sidebars, trending tab
  - Auto-enable Theater or Full Screen mode
  - Hide ad banners and auto-skip video promotions
  - Block videos, channels or comments by keywords, channel IDs or regex
  - AI video summaries (5 seconds), key insights, timestamped navigation, 40+ languages, top-comments overview, enhanced transcripts
  - Password-protected settings
  - Temporary focus mode and scheduled focus sessions
  - Opening delays before YouTube loads
  - Custom hotkeys
  - Works on YouTube website (desktop, mobile, embedded videos) but not the YouTube app
  - Also ships for Chrome, Opera, Brave, Firefox and Edge (cross-browser product)
- External services/APIs: AI summary and transcript service (server-side, details not shown); untrap.app terms; privacy label "Data Not Linked to You [Usage Data]"
- Review highlights (100 recent US reviews, 3.26 avg; store 4.1 of 519):
  - Praise: very configurable; hides Shorts and thumbnails; helps mindful viewing and focus
  - Complaint: features moved behind a paid subscription after purchase; syncing settings between iPhone and Mac needs paying
  - Complaint: UI overhaul made enabling harder; inconsistent behaviour; sessions bugs
  - Complaint: breaks channel unsubscribe/mute on iPadOS 27; Shorts still reappear sometimes
  - Complaint: bought expecting YouTube-app support but works only in Safari
  - Complaint: ethical objection to subscription for removing ads/Shorts
- screenshots: .atlas/research/store-images/apple/untrap-for-youtube/01-06.png (all iPhone)

## YouTweak
- App Store: https://apps.apple.com/us/app/youtweak/id6788401713; id 6788401713; seller shizhi shen; site https://yttweak.com/
- Platforms: macOS, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-08-05 (v1.2.12); first release 2026-07-31
- Min OS: iPad: Requires iPadOS 17.6 or later. | Mac: Requires macOS 12.4 or later. | Apple Vision: Requires visionOS 1.3 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP listed; very new (first release 2026-07-31); closest App Store match to a "Tweaks for YouTube" style tool (the real "Tweaks for YouTube" is not on the US App Store)
- Features:
  - Lock video quality
  - Speed buttons
  - Show commenter names (alongside handles)
  - Auto-translate comments
  - Hide distractions
  - "and more" (single-sentence listing)
  - Store lists macOS and iPad (no iPhone listed); iPadOS 17.6+, macOS 12.4+
- External services/APIs: not disclosed (auto-translate comments needs some translation service); privacy label "Data Not Collected"; site yttweak.com
- Review highlights (1 US review, 5 stars, no detail)
- screenshots: .atlas/research/store-images/apple/youtweak/01.png (iPad)

## Unwatched for YouTube
- App Store: https://apps.apple.com/us/app/unwatched-for-youtube/id6477287463; id 6477287463; seller Pentland Firth Software GmbH; site https://github.com/fer0n/Unwatched
- Platforms: macOS, tvOS, watchOS, iPhone, visionOS, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.7 (438); API iOS (4.65, 438); API Mac None
- Last release: 2026-11-02 (v2.0.1); first release 2024-07-19
- Min OS: iPhone: Requires iOS 26.0 or later. | iPad: Requires iPadOS 26.0 or later. | Mac: Requires macOS 26.0 or later. | Apple Vision: Requires visionOS 26.0 or later. | Apple TV: Requires tvOS 26.0 or later. | Apple Watch: Requires watchOS 26.0 or later.
- Privacy label: Data Not Linked to You [Identifiers, Usage Data]
- Pricing model: free app with an optional "Premium" unlock (mentioned in release notes; IAP list not shown); open source (github.com/fer0n/Unwatched); not a Safari extension - a stand-alone queue-based YouTube client
- Features:
  - Queue-first watching: no autoplay, no algorithmic feed; videos play in the order you choose
  - Follow channels or playlists; new videos added automatically
  - Triage: new videos go to the top of the queue or to an inbox (card-swipe inbox in v2.0)
  - Hide Shorts
  - Custom playback speed per channel
  - Chapter support: jump to, or pick, chapters to watch
  - Picture-in-Picture with background audio
  - Drag and drop video and channel URLs; Shortcuts support
  - Continuous play, notifications, sleep timer, custom themes
  - Import YouTube subscriptions directly; iCloud sync
  - In-app YouTube browser/search (v2.0 changed it; "auto-play browser videos in-app" no longer needs Premium)
  - Runs on iPhone, iPad, Mac, Apple TV, Apple Watch and Apple Vision (iOS/macOS/tvOS 26+)
- External services/APIs: YouTube channel data (mechanism not stated), iCloud; privacy label "Data Not Linked to You [Identifiers, Usage Data]"
- Review highlights (100 recent US reviews, 4.06 avg; store 4.7 of 438):
  - Praise: "watch YouTube videos without the algorithm"; best way to escape Shorts; per-channel speed
  - Complaint: v2.0 (Oct 2026) removed or changed "search on YouTube" and browsing, with a wave of 1-star reviews
  - Complaint: cannot add more subscriptions after initial feed creation; UI "not very straightforward"
- screenshots: .atlas/research/store-images/apple/unwatched-for-youtube/01-06.png (all iPhone)

## Adblocker For YouTube Videos
- App Store: https://apps.apple.com/us/app/adblocker-for-youtube-videos/id1621531549; id 1621531549; seller 国辉 满; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: premium $1.99
- Rating: store page 4.5 (1647); API iOS (4.53, 1647); API Mac None
- Last release: 2026-06-04 (v2.7); first release 2022-04-28
- Min OS: iPhone: Requires iOS 11.0 or later. | iPad: Requires iPadOS 11.0 or later. | iPod touch: Requires iOS 11.0 or later. | Mac: Requires macOS 12.3 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: paid app ($2.99) plus IAP "premium" ($1.99); age rating 17+ (user-generated web content)
- Features:
  - Removes YouTube pre-roll video ads, text ads and banner ads
  - Support for 1080p and audio-only playback
  - YouTube Picture-in-Picture
  - Background play
  - Custom video speed, rewind and advance buttons
  - Overlay menu inside the video player (hidden in iPhone full-screen)
  - Claims faster page loads, lower memory/CPU and bandwidth
  - Needs "All Websites" permission to handle embedded players; reload YouTube tabs after install
  - Safari for iOS/iPadOS 15+; Mac version needs macOS 12.3+
  - Latest notes: better iPad playback, floating player layout, rotation fixes, simpler options page
  - Includes YouTube trademark disclaimer
- External services/APIs: not disclosed; privacy label "Data Not Collected"
- Review highlights (100 recent US reviews, 3.88 avg; store 4.5 of 1,647):
  - Praise: good value; blocks ads, PiP and background play; "worth every penny"
  - Complaint: premium purchase asked again ("duplicate charges"); crashes
  - Complaint: ads still show; does not work with a VPN; unclear "All Websites" permission step
  - Complaint: refund requests; one calls it a scam
- screenshots: .atlas/research/store-images/apple/adblocker-for-youtube-videos/01-06.png (01-04 iPhone, 05-06 iPad)

## SwizzTube: Video Ad Blocker
- App Store: https://apps.apple.com/us/app/swizztube-video-ad-blocker/id6466721604; id 6466721604; seller Valerio Perrotta; site https://www.swizztube.ch
- Platforms: macOS, tvOS, iPhone, iPad
- Price: iOS Free; IAP: Full Unlock – Small Donation $3.99; Full Unlock – Large Donation $9.99; Full Unlock – Medium Donation $5.99
- Rating: store page 4.6 (466); API iOS (4.57, 466); API Mac None
- Last release: 2026-10-26 (v3.6.3); first release 2023-09-20
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later. | Apple Vision: Requires visionOS 1.0 or later. | Apple TV: Requires tvOS 15.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free to try (20 uses), then one-time "Full Unlock" via donation tiers ($3.99 small, $5.99 medium, $9.99 large); reviewers complain the free tier became paid after years; stand-alone video browser app, not a Safari extension
- Features:
  - Integrated ad and Shorts blocker
  - Integrated SponsorBlock
  - Background playback
  - Picture-in-Picture and AirPlay HD
  - Force dark mode and dark content
  - iCloud sync
  - Video quality up to 4K (2160p) on latest iOS
  - Prefer English audio track (disable auto-dubbing)
  - Subtitles in full-screen player
  - Channel notifications without login
  - Preview videos and add to watchlist
  - Overlay mini player
  - Auto-open last web page (saves video position)
  - Search engine based on the open page; navigation bar at the bottom on iPhone
  - Favorites, history, page zoom
  - Runs on iPhone, iPad, Mac and Apple TV
- External services/APIs: YouTube web player; SponsorBlock database; iCloud; privacy label "Data Not Collected"; swizztube.ch
- Review highlights (39 US reviews, 3.82 avg; store 4.6 of 466):
  - Praise: "truly doesn't play ads or sponsor segments"; works for YouTube daily
  - Complaint: paywall appears after a few days; background play removed from the free tier
  - Complaint: buggy playback (unpauses on rotate or minimise, buffering, stuck menu bar)
  - Complaint: age rating 17+ (web browser)
- screenshots: .atlas/research/store-images/apple/swizztube-video-ad-blocker/01-06.png (01-05 iPhone, 06 iPad)

## PiPifier
- App Store: https://apps.apple.com/us/app/pipifier/id1234771095; id 1234771095; seller Arno Appenzeller; site n/a
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: Small Tea for the Developer $0.99; Large Tea for the Developer $2.99; Giant Tea for the Developer $4.99
- Rating: store page 4.4 (325); API iOS (4.42, 325); API Mac None
- Last release: 2025-09-16 (v1.3); first release 2017-05-30
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free with optional tip IAPs ("Tea for the Developer": $0.99, $2.99, $4.99); a separate Mac listing exists (PiPifier, id 1160374471, Free)
- Features:
  - Safari Action extension that puts any HTML5 video into Picture-in-Picture, "like YouTube"
  - Works on sites that hide native video controls
  - Setup: Safari aA menu, Manage Extensions, enable PiPifier, then pick PiPifier on a page with a video
  - Tiny (1.6 MB), no ads
  - Lockdown Mode support requested by a reviewer; auto-PiP requested
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (90 US reviews, 4.01 avg; store 4.4 of 325):
  - Praise: "It just works", no bloat, easy to use
  - Complaint: causes heavy buffering on some videos; extension toggle awkward or non-functional on some devices
  - Complaint: iOS 12 support dropped; blanket/blank screen in PiP; only works while Safari stays open
  - Complaint: Safari permission warning about reading webpages
- screenshots: .atlas/research/store-images/apple/pipifier/01-05.png (01-02 iPhone, 03-05 iPad)

## Tube PiP
- App Store: https://apps.apple.com/us/app/tube-pip/id6476895094; id 6476895094; seller 中洋 李; site https://www.tubepip.com
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: Annual Membership $14.49; Monthly Membership $3.00; Lifetime Membership $49.99
- Rating: store page 4.6 (2936); API iOS (4.62, 2936); API Mac None
- Last release: 2026-10-25 (v2.9.0); first release 2024-02-22
- Min OS: iPhone: Requires iOS 15 or later. | iPad: Requires iPadOS 15 or later. | iPod touch: Requires iOS 15 or later. | Mac: Requires macOS 12.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free + subscription/lifetime IAP: Monthly $3.00, Annual $14.49, Lifetime $49.99; stand-alone player app (not a Safari extension); age rating 17+
- Features:
  - Picture-in-Picture while using other apps
  - Background playback
  - Lock-screen playback
  - "Fewer interruptions" / cleaner, more focused viewing (vague wording; no explicit ad-blocking claim)
  - Sleep timer
  - Clean, familiar YouTube-like interface; history list
  - Account sign-in via the YouTube website (reviewer reports sign-in just opens the browser)
  - Free tier with useful features; membership unlocks the rest
- External services/APIs: YouTube web player/content; privacy label "Data Not Collected"; tubepip.com
- Review highlights (100 recent US reviews, 3.31 avg; store 4.6 of 2,936):
  - Praise: "Best YouTube alternative out there"; PiP and background play work; users delete YouTube for it
  - Complaint: instability after updates (video not visible, mutes often, laggy description)
  - Complaint: alarms silenced when left running overnight
  - Complaint: lifetime purchase invalidated for some buyers; sign-in broken; timestamps in descriptions do not seek
- screenshots: .atlas/research/store-images/apple/tube-pip/01-06.png (all iPhone)

## Vidimote for Safari
- App Store: https://apps.apple.com/us/app/vidimote-for-safari/id1585702412; id 1585702412; seller IOSPIRIT GmbH; site https://www.iospirit.com/products/vidimote/
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 4.2 (66); API iOS (4.2, 66); API Mac None
- Last release: 2025-09-01 (v1.8.6); first release 2021-09-20
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.5 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99), no IAP
- Features:
  - Playback speed up to 2x in 5% steps (live streams: watch recorded part faster until "back to live")
  - Jump plus/minus 10 seconds; position slider; play/pause
  - Skip to the end of a video
  - Actual time remaining adjusted to playback speed
  - Live-stream clock showing approximate clock time of current position
  - Picture-in-Picture; fullscreen; mute/unmute
  - Works with HTML5 video on Netflix, Prime Video, YouTube, Vimeo, Dailymotion, Twitch, TED, Udemy, Khan Academy, Twitter, TikTok, Reddit, Facebook, Dropbox, Google Drive, OneDrive and more
  - Reviewers: configurable max speed; want mute toggle inside the PiP window
- External services/APIs: none; privacy label "Data Not Collected"; iospirit.com
- Review highlights (23 US reviews, 3.30 avg; store 4.2 of 66):
  - Praise: best of several options; fast developer response; skip through ads/infomercials
  - Complaint: AirPlay casts audio only or button missing
  - Complaint: makes Safari laggy and breaks some sites (Reddit); stopped working on iPad
- screenshots: .atlas/research/store-images/apple/vidimote-for-safari/01-06.png (01-04 iPhone, 05-06 iPad)

## yPlayer for YouTube
- App Store: https://apps.apple.com/us/app/yplayer-for-youtube/id1586397529; id 1586397529; seller Alex Kitcoff; site https://alexkitcoff.com/yplayer/
- Platforms: iPhone
- Price: iOS $1.99; IAP: none listed
- Rating: store page 4.1 (51); API iOS (4.08, 51); API Mac None
- Last release: 2024-01-22 (v3.0); first release 2021-09-20
- Min OS: iPhone: Requires iOS 16.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99); earlier versions were ad-supported and the $1.99 removed ads (2022-2023 reviews); iPhone only
- Features:
  - Play YouTube videos in Picture-in-Picture using Safari
  - In-app browser with the same PiP function
  - "Now Playing" bar to browse while listening
  - Safari Manifest V3 support (v3.0), updated extension popup
  - Reviewer asks: screen-off playback in the in-app player
- External services/APIs: YouTube web; privacy label "Data Not Collected"; alexkitcoff.com
- Review highlights (18 US reviews, 3.67 avg; store 4.1 of 51):
  - Praise: simple PiP that Safari/YouTube do not offer; better than other apps tried
  - Complaint: v3.0 regression in 2026 - tapping a video no longer opens it
  - Complaint: does not stay logged in or resume videos; history access moves around
- screenshots: .atlas/research/store-images/apple/yplayer-for-youtube/01-02.png (all iPhone)

## SponsorBlock port for Youtube
- App Store: https://apps.apple.com/us/app/sponsorblock-port-for-youtube/id1532163541; id 1532163541; seller James Sadlier; site n/a
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2020-09-20 (v1.01); first release 2020-09-18
- Min OS: Mac: Requires macOS 10.14 or later.
- Privacy label: No Details Provided
- Pricing model: free; Mac only; abandoned (last release 2020-09, v1.01); privacy label "No Details Provided"
- Features:
  - Unofficial port of SponsorBlock for Safari on Mac
  - Users submit sponsor timestamps from the extension; known sponsors are skipped automatically
  - Also skips intros, outros and "subscribe" reminders
  - Uses the SponsorBlock database at sponsor.ajay.app
- External services/APIs: sponsor.ajay.app SponsorBlock API
- Review highlights (8 US reviews, 3.62 avg; Mac store shows no aggregate):
  - Praise: free alternative to the $2.99 official app; "must alongside some form of adblock"
  - Complaint: no longer maintained, broke on Big Sur and later; unclear what it does and how to use it
- screenshots: .atlas/research/store-images/apple/sponsorblock-port-for-youtube/01-02.png (all Mac)

## PocketTube Subscription Manage
- App Store: https://apps.apple.com/us/app/pockettube-subscription-manage/id1475688814; id 1475688814; seller Dmitry Nabok; site https://pockettube.io
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: none listed
- Rating: store page 3.3 (59); API iOS (3.32, 59); API Mac None
- Last release: 2026-05-05 (v2.1.29); first release 2019-08-21
- Min OS: iPhone: Requires iOS 12.0 or later. | iPad: Requires iPadOS 12.0 or later. | iPod touch: Requires iOS 12.0 or later. | Mac: Requires macOS 11.0 or later and a Mac with Apple M1 chip or later.
- Privacy label: Data Not Linked to You [Usage Data]
- Pricing model: free, no IAP listed; iPhone/iPad companion app (not a Safari extension) for the Mac PocketTube extension
- Features:
  - Create, modify and delete collections of subscriptions
  - Group channels into collections (one channel in several collections)
  - Custom icon per collection
  - Show latest videos from collections and channels
  - Auto-sync collections (with the Mac extension) by linking a YouTube account
  - Reviewers: needs a Safari extension on iOS/iPadOS, YouTube channel search, account without Google sign-in
- External services/APIs: Google/YouTube account link for subscriptions; pockettube.io sync; privacy label "Data Not Linked to You [Usage Data]"
- Review highlights (34 US reviews, 3.21 avg; store 3.3 of 59):
  - Praise: finally lets you organise hundreds of subscriptions; avoids the recommendation feed
  - Complaint: no Safari extension on iPhone/iPad, so it lives in a separate in-app browser ("stuck within the app")
  - Complaint: account link prompts reappear; groups from desktop do not sync; iPad full-screen handling poor
- screenshots: .atlas/research/store-images/apple/pockettube-subscription-manager/01-06.png (01-05 iPhone, 06 iPad)

## Turn Off the Lights for Safari
- App Store: https://apps.apple.com/us/app/turn-off-the-lights-for-safari/id1273998507; id 1273998507; seller Stefan Van Damme; site https://www.turnoffthelights.com
- Platforms: macOS, iPhone, visionOS, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.1 (59); API iOS (4.14, 59); API Mac None
- Last release: 2026-09-16 (v4.7.2); first release 2017-09-19
- Min OS: iPhone: Requires iOS 18.0 or later. | iPad: Requires iPadOS 18.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 26.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, open source, no IAP; age rating 17+ (web content); the developer asks for 5-star ratings; a reviewer complains of pop-up ads
- Features:
  - Dims everything except the video (cinema mode); click the dark layer to turn the lights back on
  - Works on YouTube, Dailymotion, Vimeo, Twitch and more
  - YouTube options: Auto HD (highres down to 144p), Auto Wide, 60 FPS block, Night Mode (black or white theme) with whitelist/blacklist and time schedule, blackout
  - Stop YouTube and HTML5 videos from autoplaying
  - Darken on play button click; fade in/out; custom colours; dimness level bar
  - Eye Protection for night browsing with whitelist/blacklist
  - Atmosphere lighting glow around the player
  - Keyboard shortcuts: toggle lights (Ctrl+Shift+L), opacity up/down/save/restore, eye protection toggle, all tabs
  - Mouse-wheel volume control for each HTML5 player
  - Video filters (grayscale, sepia, invert, contrast, saturate, hue rotation, brightness)
  - Audio visualisation effects (Blocks, Frequency, Music Tunnel)
  - Loop current HTML5 video
- External services/APIs: none disclosed; privacy label "Data Not Collected"; turnoffthelights.com
- Review highlights (100 recent US reviews, 2.95 avg; store 4.1 of 59):
  - Praise: free eye-comfort dark layer
  - Complaint: sometimes just a black film over Safari; click anywhere restores it
  - Complaint: broke after iOS 26.6 (not listed in Safari extensions); does not work on iPad
  - Complaint: pop-up promos inside the extension
- screenshots: .atlas/research/store-images/apple/turn-off-the-lights-for-safari/01-06.png (all iPhone)

## "No Distractions" for YouTube
- App Store: https://apps.apple.com/us/app/no-distractions-for-youtube/id1482507016; id 1482507016; seller ULRIK LYNGS; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $1.29; IAP: none listed
- Rating: store page 4.4 (29); API iOS (4.45, 29); API Mac None
- Last release: 2026-06-02 (v4.10); first release 2019-10-06
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.29), open source; developer says it receives no further updates (moved to "ReDD Focus", not found in US store search)
- Features:
  - Hide video recommendations and other distractions on front, search and watch pages
  - Hide any custom element
  - Hide thumbnail images
  - Hide ads inserted in search results
  - Per-part toggles from the extension icon; "save settings" to persist
  - Optional wait time before settings open (friction against re-enabling distractions)
  - Works in Safari only, not the YouTube app; tip: Add to Home Screen shortcut that opens YouTube in Safari
  - Open source, no data collection
- External services/APIs: none; privacy label "Data Not Collected"; github.com/ulyngs/open-source-no-distractions-for-youtube
- Review highlights (32 US reviews, 4.47 avg; store 4.4 of 29):
  - Praise: fixes subscriptions page clutter; helps ADHD users avoid the endless scroll; "buy this for yourself"
  - Complaint: iPad settings do not save; did not work on iPhone in 2022 (v1.3)
  - Request: hide Community posts
- screenshots: .atlas/research/store-images/apple/no-distractions-for-youtube/01-06.png (all iPhone)

## BlockYT for Safari
- App Store: https://apps.apple.com/us/app/blockyt-for-safari/id1575379461; id 1575379461; seller Nikita Kukushkin; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 4 (36); API iOS (4.03, 36); API Mac None
- Last release: 2026-03-05 (v1.3.20); first release 2021-07-11
- Min OS: iPhone: Requires iOS 16.0 or later. | iPad: Requires iPadOS 16.0 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99), no IAP
- Features:
  - Block YouTube recommendations
  - Block Shorts
  - Block comments
  - Latest notes: block "recommended" subscriptions
  - Explicitly does not block advertisements
  - Safari only (website), not the YouTube app
  - Reviewer requests: block specific channels from recommendations/search; keep home recommendations but remove them on watch pages
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (30 US reviews, 3.53 avg; store 4.0 of 36):
  - Praise: blocks addictive recommendations and Shorts; "exactly what I needed"; works on iPad after enabling in Settings
  - Complaint: stops working after YouTube site changes (shows Shorts, hides whole feed, ad-block warning)
  - Complaint: confusion that it does not work in the YouTube app
- screenshots: .atlas/research/store-images/apple/blockyt-for-safari/01-06.png (all iPhone)

## #blockit: Block Shorts & Reels
- App Store: https://apps.apple.com/us/app/blockit-block-shorts-reels/id1492879257; id 1492879257; seller Jordi Kitto; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: Yearly $3.99; Monthly $0.99; Yearly + Family Sharing $7.99; Yearly (Existing User Only) $3.99
- Rating: store page 4 (169); API iOS (4.04, 169); API Mac None
- Last release: 2026-10-29 (v4.12.1); first release 2020-01-18
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free download with 7-day trial, then subscription (Yearly $3.99, Monthly $0.99, Yearly with Family Sharing $7.99); reviewers say it switched from a lifetime purchase to a subscription without notice
- Features:
  - Safari Content Blocker (cannot read page content; Apple states it has no permission to read or transmit pages)
  - YouTube.com: block Shorts, home recommendations, related videos, comments, end screens, even the subscriptions feed
  - Also Instagram (Reels, Stories, Explore, suggested posts, feed), Facebook (feed, Stories, Reels, Marketplace, Groups), Reddit (home/subreddit feeds, comments), X (For You, Following, Explore, notifications), LinkedIn (home feed)
  - Block entire websites by URL; per-site simple switches
  - Keeps search, messages, notifications and profiles
  - No account, no built-in browser, nothing sent to servers
  - iCloud sync of settings and blocked sites across iPhone, iPad, Mac
  - Limit: can only remove certain parts of certain sites via Safari
- External services/APIs: iCloud sync only; privacy label "Data Not Collected"
- Review highlights (67 US reviews, 3.51 avg; store 4.0 of 169):
  - Praise: "Blocks YT shorts perfectly", "the ONLY thing that's worked"; no account or built-in browser
  - Complaint: switch from lifetime to subscription ("bait-and-switch")
  - Complaint: Instagram and Facebook blocking inconsistent after site updates; YouTube recommendations not blocked at times in 2026
- screenshots: .atlas/research/store-images/apple/blockit-block-shorts-reels/01-06.png (all iPhone)

## No Shorts: Blocker for YouTube
- App Store: https://apps.apple.com/us/app/no-shorts-blocker-for-youtube/id6502996298; id 6502996298; seller Guillaume Claverie; site https://www.guillaumeclaverie.com/apps/no-shorts
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 4.5 (15); API iOS (4.47, 15); API Mac None
- Last release: 2026-10-10 (v1.2.7); first release 2024-05-22
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99); "no subscriptions, no hidden fees"
- Features:
  - Hides the Shorts feed, previews and suggestions on youtube.com in Safari (iPhone, iPad, Mac)
  - YouTube app unchanged
  - Lightweight, no tracking or data collection
  - Clearer explanation of the Shorts filter and improved Arabic right-to-left layout (latest notes)
  - Reviewers: option to hide recommended videos on watch page but keep home; Shorts tab sometimes still visible
- External services/APIs: none; privacy label "Data Not Collected"; guillaumeclaverie.com
- Review highlights (11 US reviews, 4.27 avg; store 4.5 of 15):
  - Praise: simple setup, works immediately
  - Complaint: does not work in the YouTube app; Shorts still visible in one browser case
- screenshots: .atlas/research/store-images/apple/no-shorts-blocker-for-youtube/01-06.png (all iPhone)

## Mira - Focused Video Player
- App Store: https://apps.apple.com/us/app/mira-focused-video-player/id6767721654; id 6767721654; seller Hershkovitz Bros LLC; site https://watchwithmira.com
- Platforms: macOS, tvOS, iPhone, iPad
- Price: iOS Free; IAP: Mira Premium Yearly $9.99; Mira Premium Monthly $2.99; Mira Lifetime $19.99
- Rating: store page 4.4 (25); API iOS (4.44, 25); API Mac None
- Last release: 2026-10-29 (v1.10.1); first release 2026-05-17
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 1.0 or later. | Apple TV: Requires tvOS 17.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free app with Premium: Yearly $9.99, Monthly $2.99, Lifetime $19.99; one purchase unlocks iPhone, iPad, Mac and Apple TV; stand-alone player app (not a Safari extension); age rating 17+
- Features:
  - Auto-skip sponsors, intros, outros, self-promos and recaps on YouTube via community (SponsorBlock) data; user chooses categories
  - Video queue that auto-plays in order, synced via iCloud across iPhone, iPad, Mac, Apple TV
  - Background play with locked screen
  - Searchable YouTube transcripts with tap-to-seek timestamps
  - AI summaries, outlines, quotes, follow-up questions; bring your own OpenAI, Claude or Grok key
  - Watch Together: synced room with room code and chat
  - Focus mode: hide distracting sections; toggle off Shorts, Playables, autoplay hover-previews
  - Community dislike estimates (Return YouTube Dislike)
  - Universal playback speed 0.25x to 3.0x across sites
  - Eye comfort mode with intensity slider; dark mode on supported sites
  - Watchlist tracking started and finished videos
  - AirPlay via Screen Mirroring and a mini-player
  - Shortcuts to streaming sites plus custom sites
  - Disclaims affiliation with YouTube, Google, OpenAI, Anthropic, xAI, SponsorBlock, Return YouTube Dislike
- External services/APIs: SponsorBlock community data; Return YouTube Dislike; user-supplied OpenAI/Claude/Grok API key; iCloud; privacy label "Data Not Collected"
- Review highlights (16 US reviews, 4.25 avg; store 4.4 of 25):
  - Praise: "Fantastic YouTube alternative"; seamlessly skips sponsors; screen-locked listening; active developer
  - Complaint: constant buffering on some videos; no skip/back button; Apple TV clip casting issue
- screenshots: .atlas/research/store-images/apple/mira-focused-video-player/01-06.png (all iPhone)

## Custom Video Speed for YouTube
- App Store: https://apps.apple.com/us/app/custom-video-speed-for-youtube/id6443640011; id 6443640011; seller Thomas Povinelli; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.4 (7); API iOS (4.43, 7); API Mac None
- Last release: 2022-12-29 (v1.0); first release 2022-12-28
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 10.14 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP; last update 2022-12 (v1.0)
- Features:
  - Finer, consistent YouTube playback speed control in Safari
  - Applies current speed automatically to every new video; set current speed as default
  - Control from the extension pop-over or keyboard bindings (customisable in options or off)
  - Increments of 0.05x, 0.1x, 0.5x and 1.0x
  - Range 0.1x to 8.0x
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (6 US reviews, 3.67 avg; store 4.4 of 7):
  - Praise: "you can do whatever speed you want"; works on iPhone Safari
  - Complaint: "cannot save default"; no visible controls on YouTube until the user finds the puzzle-piece menu
- screenshots: .atlas/research/store-images/apple/custom-video-speed-for-youtube/01-06.png (01-03 iPhone, 04-06 iPad)

## Hover Speed for YouTube
- App Store: https://apps.apple.com/us/app/hover-speed-for-youtube/id6778460443; id 6778460443; seller Adam Bardon; site https://hover.adambards.com
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-07-01 (v1.0.1); first release 2026-06-23
- Min OS: Mac: Requires macOS 15.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP; Mac only; very new (2026-06)
- Features:
  - Compact hover-only YouTube speed control inside the player
  - One-click speeds from 1x to 3x without opening YouTube settings
  - Synchronised with YouTube's own playback speed
  - Safari permission limited to YouTube domains
  - No account, no sign-up
- External services/APIs: none; privacy label "Data Not Collected"; hover.adambards.com
- Review highlights (1 US review, 5 stars: "This is perfect")
- screenshots: .atlas/research/store-images/apple/hover-speed-for-youtube/01-02.png (all Mac)

## Better Player for Youtube
- App Store: https://apps.apple.com/us/app/better-player-for-youtube/id1592876082; id 1592876082; seller Minwoo Lee; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.2 (12); API iOS (4.17, 12); API Mac None
- Last release: 2026-11-01 (v1.5.5); first release 2021-11-14
- Min OS: iPhone: Requires iOS 16.0 or later. | iPad: Requires iPadOS 16.0 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP, no subscription, no ads in the app; one app for iPhone, iPad and Mac
- Features:
  - Ad slots hidden by stylesheet before first paint, feed ads cleared, Skip pressed automatically on skippable player ads (unskippable ads still play)
  - iPhone landscape full screen even with rotation lock on; own play/pause/skip buttons, double-tap to skip, drag along edge to scrub
  - Playback bar: Picture-in-Picture, back/forward 10 seconds, play, full screen
  - Focus mode: dark layer covers the page with the video lit and centred; nothing removed or rearranged
  - Ambient light: samples the frame 5 times a second and paints a colour glow behind the video, adjustable spread and strength
  - Shorts get the same lit treatment; one switch keeps focus mode to watch pages only
  - Large on-page controls (previous/next, home, PiP, full screen), each switchable off
  - 11 languages; settings stay on device; no backend or analytics
  - Runs on youtube.com only (permission limited to it)
  - Shorts are on the desktop site; on iPhone request the desktop site
- External services/APIs: none ("no backend it could send anything to"); privacy label "Data Not Collected"
- Review highlights (6 US reviews, 3.50 avg; store 4.2 of 12):
  - Praise: easy install, "best extension for Safari" (2023); mostly works
  - Complaint: ads still sneak in; unremovable glow in early versions; on-screen controls block comments (not optional in 2026 review)
  - Complaint: no developer response to email (2022)
- screenshots: .atlas/research/store-images/apple/better-player-for-youtube/01-06.png (01-02 iPhone, 03-06 iPad)

## Improved Tube
- App Store: https://apps.apple.com/us/app/improved-tube/id1672777754; id 1672777754; seller Alexander Yang; site https://github.com/ImprovedTube/ImprovedTube
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-10-22 (v4.2027.0); first release 2023-02-19
- Min OS: Mac: Requires macOS 12.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, open source, no IAP; Mac only (no iOS port); Safari port of the long-running ImprovedTube extension (Chrome 500,000 users)
- Features (from the 250+ feature claim):
  - Auto-pause tabs and "Auto-Play: Off"; "Up Next" off
  - Custom shortcuts, hotkeys and mouse actions; disable/overwrite YouTube shortcuts
  - Set YouTube language; analyse your activity (subscriptions, categories)
  - Always expand description; always show transcript
  - Built-in ad blocker/ad skip with whitelist for subscribed channels
  - Window/expanded player, resize player, auto fullscreen, custom mini-player, Picture-in-Picture
  - Themes (Black, Plain, Desert, Dawn, Sunset, Night), dark mode schedule, OLED black, blue-light filter, display dim
  - Subtitle/caption/layout options; thumbnails per row 1-12; mimic classic YouTube views
  - Hide related videos, comments, header, annotations, live chat, anything (declutter for teaching/screenshare)
  - Block videos by channel, tag or category
  - Frame-by-frame watching; reverse/shuffle playlist; screenshot/save frame
  - Extra player buttons: loop, rotate, jump to Most Replayed scene
  - Fixed volume or loudness normalisation, mixer
  - Speedwatching (fixed default playback speed); Smart Speed engine (adapts speed within min/max, can use SponsorBlock segments to speed through sponsors/intros/outros, Skip Intro/Skip Sponsor buttons)
  - Quality to match display or bandwidth, avoid AV1/60fps/HDR; prefer H264/VP8/VP9; block Opus audio codec option
  - Video filters (brightness, contrast, saturation, hue, sharpness, gamma) with presets and quick toggle
  - Automatic-dub handling that keeps human-made dubbed tracks
  - Works on embedded YouTube, m.youtube and other sites (Facebook, Netflix, Twitch, Vimeo)
  - Applies many settings without reload; 39+ languages; compatible with Return YouTube Dislike and SponsorBlock
- External services/APIs: none required; optional SponsorBlock community segments; GitHub (ImprovedTube); privacy label "Data Not Collected"
- Review highlights (36 US reviews, 3.31 avg; Mac store shows no aggregate):
  - Praise: easy customisation; removes Shorts, comments, viewer counts and "Related Searches"; actually works once configured
  - Complaint: stopped working in Safari (2026-06); extension enable loop at launch; cannot export data in Safari
  - Complaint: reviewer notes many Mac App Store YouTube extensions are near-identical clones
- screenshots: .atlas/research/store-images/apple/improved-tube/01-03.png (all Mac)

## Tampermonkey
- App Store: https://apps.apple.com/us/app/tampermonkey/id6738342400; id 6738342400; seller Jan Biniok; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 3.1 (61); API iOS (3.1, 61); API Mac None
- Last release: 2026-10-09 (v5.6.6243); first release 2024-11-18
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Location, Usage Data, Diagnostics]
- Pricing model: one-time paid app ($2.99), no IAP; Mac, iPhone, iPad; a separate older Mac listing "Tampermonkey Classic" (id 1482490089, $1.99) exists
- Features:
  - Userscript manager: create, manage and run JavaScript userscripts on any website
  - Same Tampermonkey userscript ecosystem used on desktop browsers (YouTube userscripts can run through it; the listing does not name YouTube)
  - Latest notes: editor menu fix, script/site icons in dashboard, saving export files on iOS, @require data: URIs
  - Reviewer requests: iCloud storage/sync of scripts
- External services/APIs: script hosting sites and update URLs; privacy label "Data Not Linked to You [Location, Usage Data, Diagnostics]"
- Review highlights (42 US reviews, 2.93 avg; store 3.1 of 61):
  - Praise: brings desktop tweaks to Safari; "so much easier than creating an extension"; actively maintained
  - Complaint: cannot install scripts from a URL; scripts that run on other browsers fail in Safari; auto-update broken
  - Complaint: scripts vanish after Safari updates; no Safari support pages; some buyers call it a scam
- screenshots: .atlas/research/store-images/apple/tampermonkey/01-06.png (01-04 iPhone, 05-06 iPad)

## Dark Reader for Safari
- App Store: https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180; id 1438243180; seller Dark Reader Ltd; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $4.99; IAP: none listed
- Rating: store page 4.3 (285); API iOS (4.25, 285); API Mac None
- Last release: 2026-09-17 (v1.5.10); first release 2018-10-10
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 11.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($4.99); one purchase includes the macOS version on the same iCloud account; no subscription
- Features:
  - Generates dark themes for websites on the fly (inverts bright colours)
  - Brightness and contrast controls; sepia mode; colour theme presets or custom background/text colours
  - Enable or disable per website; sync with system dark mode; detect already-dark sites
  - Developed by the original Dark Reader creators (since 2014); no ads, no data collection
  - No YouTube-specific claim; generic dark mode (YouTube already ships a native dark theme)
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (100 recent US reviews, 3.00 avg; store 4.3 of 285):
  - Praise: instant eye relief; no subscription
  - Complaint: iOS 26/27 slowdown (10 to 20 seconds to darken a page); crashes Safari; breaks checkboxes and images
  - Complaint: free on other browsers, paid on Safari
- screenshots: .atlas/research/store-images/apple/dark-reader-for-safari/01-06.png (01-04 iPhone, 05-06 iPad)

## Focus - Userscripts & Player
- App Store: https://apps.apple.com/us/app/focus-userscripts-player/id1631941898; id 1631941898; seller 庆彬 邓; site n/a
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: Pro Lifetime $5.99
- Rating: store page 4.7 (5153); API iOS (4.68, 5153); API Mac None
- Last release: 2026-08-26 (v2.9.7); first release 2022-07-07
- Min OS: iPhone: Requires iOS 13.0 or later. | iPad: Requires iPadOS 13.0 or later. | iPod touch: Requires iOS 13.0 or later. | Mac: Requires macOS 12.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Used to Track You [Identifiers]; Data Not Linked to You [Search History, Browsing History, Identifiers, Usage Data, Diagnostics]
- Pricing model: free + "Pro Lifetime" $5.99 IAP; iPhone/iPad stand-alone browser (not a Safari extension); age rating 17+
- Features:
  - Video mode: customisable player with floating video, playback speed control, Picture-in-Picture, DLNA and AirPlay casting, one-click screen lock
  - Userscripts: JavaScript and Tampermonkey 5.3.0 syntax
  - Reading mode: preload next page, font and margin adjustments, text filtering and regex rules
  - Auto page turning for novels, comics, forums
  - Ad blocking: AdBlock Plus and AdGuard syntax, ad marking, custom rules
  - Redirect blocker; custom homepage; web translation
  - Bookmark import/export (Safari, Chrome, Alook); URL scheme for Shortcuts
  - iCloud bookmark sync, dark mode, incognito, Face ID lock, full-screen mode
  - Reviewers use it for video download (YouTube download reported failing)
- External services/APIs: translation service, filter lists; privacy label "Data Used to Track You [Identifiers]; Data Not Linked to You [Search History, Browsing History, Identifiers, Usage Data, Diagnostics]"
- Review highlights (64 US reviews, 3.50 avg; store 4.7 of 5,153):
  - Praise: runs userscripts on iPhone/iPad; helps students; smooth
  - Complaint: scripts stop being read; crashes and blank screens; YouTube downloads fail; purchase restoration problems
- screenshots: .atlas/research/store-images/apple/focus-userscripts-and-player/01-06.png (all iPhone)

## Pie Adblock for Safari
- App Store: https://apps.apple.com/us/app/pie-adblock-for-safari/id6499055690; id 6499055690; seller The People's Internet Experiment Inc; site https://www.pie.org
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 4.7 (1556); API iOS (4.67, 1556); API Mac None
- Last release: 2025-08-18 (v1.24.2); first release 2024-08-13
- Min OS: iPhone: Requires iOS 16.4 or later. | iPad: Requires iPadOS 16.4 or later. | Mac: Requires macOS 14.0 or later.
- Privacy label: Data Used to Track You [Contact Info, Browsing History, Identifiers, Usage Data]; Data Linked to You [Contact Info, Browsing History, Identifiers, Usage Data]; Data Not Linked to You [Identifiers]
- Pricing model: free; monetised by opt-in ads, cash-back shopping and coupons ("pays you to use it")
- Features:
  - Free "premium" ad blocking: anti-adblock circumvention, cookie popup suppression, "YouTube web adblocking"
  - Safari only; does not block ads in the YouTube or Facebook apps (stated)
  - Opt-in approved ads for cash-back rewards
  - Cash back at 1,000s of partner stores; automatic coupon application; Amazon, Walmart, Target integration
  - Latest notes: much faster ad blocking, lower memory use, fixed ad blocker randomly disabling
- External services/APIs: Pie rewards and coupon backend; partner ad network; privacy label lists tracking and linked data (Contact Info, Browsing History, Identifiers, Usage Data); age rating 17+
- Review highlights (100 recent US reviews, 4.89 avg; store 4.7 of 1,556):
  - Praise: "No more ads running on Twitch and YouTube"; best on macOS
  - Complaint: YouTube page keeps reloading until the blocker is toggled; some ads get through; rewards points slow to accumulate
- screenshots: .atlas/research/store-images/apple/pie-adblock-for-safari/01-06.png (01-02 iPhone, 03-06 iPad)

## Ad blocker by Magic Lasso
- App Store: https://apps.apple.com/us/app/ad-blocker-by-magic-lasso/id1260462853; id 1260462853; seller Magic Lasso Pty Ltd; site https://www.magiclasso.co/
- Platforms: tvOS, iPhone, iPad
- Price: iOS Free; IAP: Pro Yearly (iOS) $29.99; Pro Yearly (iOS) $29.99; Pro Yearly (iOS) $29.99; Pro Monthly (iOS) $2.99; Pro Yearly (iOS) $29.99; Pro Monthly (iOS) $2.99
- Rating: store page 4.2 (918); API iOS (4.22, 918); API Mac None
- Last release: 2026-10-28 (v5.6.2); first release 2017-08-22
- Min OS: iPhone: Requires iOS 18.0 or later. | iPad: Requires iPadOS 18.0 or later. | Apple TV: Requires tvOS 26.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free + subscription: Pro Yearly $29.99, Pro Monthly $2.99 (a reviewer asks for a one-time option); iPhone, iPad and Apple TV on this listing; separate Mac listing "Ad blocker - Magic Lasso" (id 1198047227)
- Features:
  - Safari ad and tracker blocking with daily rule updates; claims 2x faster pages and "battery boost"
  - YouTube ad blocking in Safari: pre-roll and mid-roll video ads, 10+ other YouTube ad types (banner, search, merchandising), mobile, desktop and embedded videos, kept updated for YouTube changes
  - v5.6 web extension lets you allow or block categories per site (YouTube, annoyances, regional ad blocking)
  - Annoyance and cookie-notice blocking; regional lists for 40+ regions
  - Custom rules for cookies, media and JavaScript; Tap to Block any element
  - Performance insights per site
  - App ad blocking and Apple TV ad blocking via DNS-style protection (games, video, news, social apps; other browsers)
  - iCloud syncing of custom rules; on-device blocking; no data collection
  - Quotes from John Gruber and iMore
- External services/APIs: Magic Lasso rule update servers; DNS filtering for apps; iCloud; privacy label "Data Not Collected"
- Review highlights (97 US reviews, 2.56 avg; store 4.2 of 918):
  - Praise: exceptional support; "only one that truly works"; responsive after iOS 27 breakage
  - Complaint: does not block YouTube ads on Apple TV or in the YouTube app; still sees ads in Safari at times
  - Complaint: in-app ads not blocked after iOS 27; subscription regret; wants one-time purchase
- screenshots: .atlas/research/store-images/apple/magic-lasso-ad-blocker/01-06.png (all iPhone)

## AdGuard Pro: Safari Ad Blocker
- App Store: https://apps.apple.com/us/app/adguard-pro-safari-ad-blocker/id1126386264; id 1126386264; seller Adguard Software Limited; site https://adguard.com/
- Platforms: iPhone, iPad
- Price: iOS $9.99; IAP: none listed
- Rating: store page 4.4 (3153); API iOS (4.42, 3153); API Mac None
- Last release: 2026-11-02 (v4.5.24); first release 2016-09-30
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($9.99) on iPhone and iPad (the older "Pro" edition; the free AdGuard listing has subscriptions)
- Features:
  - Safari ad blocking: banners, pop-ups, video ads; whitelist sites; manual element hiding
  - Privacy protection filters against trackers and web analytics
  - Claims Safari up to 4x faster; saves traffic and battery
  - 50+ filter subscriptions (EasyList, EasyPrivacy, language filters) plus AdGuard filters
  - Pro: custom filters by URL, DNS privacy (choose or configure DNS provider), security filters against cryptojacking and fraud
  - Open source; no YouTube claim in this listing
- External services/APIs: AdGuard filters/DNS; privacy label "Data Not Collected"
- Review highlights (100 US reviews, 3.81 avg; store 4.4 of 3,153):
  - Praise: also blocks in-game ads via DNS; blocks ads that break pages
  - Complaint: internet stops loading while the DNS profile is on; battery drain
  - Complaint: redesigned element blocker is worse; misses anti-adblock messages; subscription cancellation dispute
- screenshots: .atlas/research/store-images/apple/adguard-pro-safari-ad-blocker/01-06.png (all iPhone)

## Picture in Picture for Safari
- App Store: https://apps.apple.com/us/app/picture-in-picture-for-safari/id6755545186; id 6755545186; seller Alfredo Grassau; site https://www.safariwebextensions.com
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 5 (2); API iOS (5, 2); API Mac None
- Last release: 2026-10-07 (v1.0.9); first release 2025-11-21
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 12.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99); same developer family as Clean YT / Block YT Shorts (safariwebextensions.com)
- Features:
  - Picture-in-Picture for any web video via the Safari extension icon
  - Compatible with YouTube, Netflix, Prime Video, Hulu and more
  - Keyboard shortcut to trigger PiP
  - Privacy-first, multilingual, lightweight UI
  - Safari on macOS, iOS and iPadOS (universal purchase)
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (4 US reviews, 4.5 avg):
  - Praise: works on YouTube TV when other PiP tools do not; works in Safari "Add to Dock" web apps
  - Complaint: stopped working after macOS 27
- screenshots: .atlas/research/store-images/apple/picture-in-picture-for-safari/01-06.png (01-03 iPhone, 04-06 iPad)

## OverPicture for Safari
- App Store: https://apps.apple.com/us/app/overpicture-for-safari/id1188020834; id 1188020834; seller Pedro Jose Pereira Vieito; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $3.99; IAP: none listed
- Rating: store page 4.3 (12); API iOS (4.25, 12); API Mac None
- Last release: 2026-09-11 (v2.8); first release 2016-12-30
- Min OS: iPhone: Requires iOS 16.0 or later. | iPad: Requires iPadOS 16.0 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($3.99), no IAP
- Features:
  - Play any web video in Picture-in-Picture
  - Three triggers: extension button, custom PiP button added to supported players like YouTube, or press the P key
  - Works in Safari web apps made from Safari on macOS
  - Fully on-device; stores or sends nothing outside the app sandbox
  - macOS, iOS and iPadOS
  - Reviewers want 30-second skip back/forward buttons
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (29 US reviews, 4.14 avg; store 4.3 of 12):
  - Praise: "Fast and simple"; reliable daily use for YouTube and Netflix
  - Complaint: permission dialog scares users; breaks after OS updates until permissions are reset; not visible in web apps in 2023
- screenshots: .atlas/research/store-images/apple/overpicture-for-safari/01-06.png (01-03 iPhone, 04-06 iPad)

## Eightify for Safari
- App Store: https://apps.apple.com/us/app/eightify-for-safari/id6448126776; id 6448126776; seller Rational Expressions Inc.; site https://eightify.app
- Platforms: macOS
- Price: Mac Free; IAP: Eightify Pro - Monthly $4.99; Eightify Pro - Annual $49.99
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2024-10-11 (v1.0.7); first release 2023-05-10
- Min OS: Mac: Requires macOS 10.15 or later.
- Privacy label: Data Linked to You [Financial Info, Contact Info, User Content, Browsing History, Identifiers, Usage Data, Diagnostics]; Data Not Linked to You [Diagnostics]
- Pricing model: free app + subscription IAP (Pro Monthly $4.99, Pro Annual $49.99); Mac only; not a page-cleaning tool, an AI summariser (cross-browser product)
- Features:
  - AI summaries of YouTube videos (TLDR) and key insights
  - Summarise top comments to gauge sentiment
  - 40+ languages for summary translation
  - Timestamped breakdowns to navigate the video
  - Share summaries; handles 4-6 hour videos; about 7 seconds average
  - Powered by the OpenAI ChatGPT API
- External services/APIs: Eightify servers plus OpenAI ChatGPT API; privacy label links Financial Info, Contact Info, User Content, Browsing History, Identifiers, Usage Data to the user
- Review highlights (7 US reviews, 2.86 avg; Mac store shows no aggregate):
  - Praise: shortens study time, processes long videos in seconds
  - Complaint: price not disclosed before download ($5/month); summarise button does nothing (2025); cannot sign in with the Chrome subscription account
- screenshots: .atlas/research/store-images/apple/eightify-for-safari/01-06.png (all Mac)

## Sink It for YouTube
- App Store: https://apps.apple.com/us/app/sink-it-for-youtube/id6798803425; id 6798803425; seller Tony Sundharam; site https://gosinkit.com
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: Micro Tip $2.99; Thoughtful Tip $4.99; Mega Tip $9.99
- Rating: store page 5 (2); API iOS (5, 2); API Mac None
- Last release: 2026-09-28 (v1.2.0); first release 2026-08-20
- Min OS: iPhone: Requires iOS 17.6 or later. | iPad: Requires iPadOS 17.6 or later. | Mac: Requires macOS 14.6 or later. | Apple Vision: Requires visionOS 1.3 or later.
- Privacy label: Data Not Collected
- Pricing model: free with optional tips (Micro $2.99, Thoughtful $4.99, Mega $9.99); very new (2026-08); same developer as the popular Sink It for Reddit
- Features:
  - Block Shorts everywhere or selectively on Home, Subscriptions, Search or Video pages
  - Hide Google Playables, Community Posts, Membership/Brand shelves on Home
  - Collapse Comments; hide Related Videos / Up Next on video pages
  - 100% on-device; zero data collection, telemetry or analytics
  - Roadmap: mute channels/keywords/topics, search page customisation (grid size, hide member-only/playlists/suggestions), hide AI summaries, Live Chat, Join buttons, End Cards, Play Next overlays, Total Focus Mode (disable Home feed)
  - Added iPad and Mac support (v1.2.0)
- External services/APIs: none; privacy label "Data Not Collected"; gosinkit.com
- Review highlights (2 US reviews):
  - Praise: free, disabled related videos and Shorts
  - Complaint: not working with a docked (Dock web app) YouTube
- screenshots: .atlas/research/store-images/apple/sink-it-for-youtube/01-06.png (01-04 iPhone, 05-06 iPad)

## Smart Tube BDP
- App Store: https://apps.apple.com/us/app/smart-tube-bdp/id6761388918; id 6761388918; seller New look entertainment doo; site n/a
- Platforms: macOS, tvOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 3.8 (92); API iOS (3.83, 92); API Mac None
- Last release: 2026-10-29 (v5.8); first release 2026-04-16
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 1.0 or later. | Apple TV: Requires tvOS 17.6 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP listed; stand-alone YouTube client (not a Safari extension); iPhone, iPad, Mac, Apple TV
- Features:
  - Native YouTube client built in SwiftUI
  - SponsorBlock: auto-skip sponsors, intros, outros, filler
  - DeArrow: replace clickbait titles and thumbnails
  - Picture-in-Picture on iPhone, iPad, Mac
  - Adaptive streaming (HLS/DASH via AVPlayer)
  - Search with live suggestions; browse channels and playlists; subscriptions grid
  - Sign in with Google for subscriptions, history, playlists
  - Reviewers: ad blocking works; background playback toggle unreliable
- External services/APIs: YouTube (access method not disclosed), SponsorBlock and DeArrow databases, Google sign-in; privacy label "Data Not Collected"
- Review highlights (61 US reviews, 3.39 avg; store 3.8 of 92):
  - Praise: "Best Tube app on iOS"; SponsorBlock and DeArrow; ad-free
  - Complaint: background playback does not work; sign-in code resets; playback/search fails after updates; channel pages limited
- screenshots: .atlas/research/store-images/apple/smart-tube-bdp/01-06.png (01-05 iPhone, 06 iPad)

## Red Crow For Safari
- App Store: https://apps.apple.com/us/app/red-crow-for-safari/id6766324724; id 6766324724; seller Alejandro Estol; site https://corvusdevs.github.io/Red-Crow-For-Safari/
- Platforms: macOS, iPhone, iPad
- Price: iOS $0.99; IAP: none listed
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-09-07 (v1.8); first release 2026-05-04
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($0.99), no IAP; very new (2026-05); closest Safari analogue to Enhancer for YouTube found
- Features (150+ settings):
  - Hide Shorts everywhere (sidebar link, Shorts tab, home shelves, search results), or convert a Short to the normal player with progress bar
  - Custom default playback speed 0.25x to 16x with per-channel memory
  - Force default quality and a separate fullscreen quality
  - SponsorBlock auto-skip (sponsors, intros, outros, non-content)
  - DeArrow clickbait title/thumbnail replacement
  - Return of dislikes: dislike counts and like/dislike ratio bar
  - Auto theater mode, dim page, cinema mode
  - Hide comments, related videos, mixes, end cards, upcoming, premieres and more
  - Block channels and keywords; dim or hide watched videos; duration filter
  - Player toolbar: screenshot, loop, A-B loop, timestamp bookmarks, PiP, pop-out player, reverse/shuffle playlists
  - Real-time video filters (brightness, contrast, saturation, sharpness, blur, hue)
  - Audio-only mode; playlist total/remaining duration; chapter slide-out panel
  - Auto-translate titles; auto-open transcripts; comment search
  - Live chat emotes (7TV, BetterTTV, FrankerFaceZ)
  - Codec control: block VP9, AV1 or high frame rate
  - Channel profiles (speed, quality, volume, cinema per channel)
  - Themes: Nord, Solarized Dark, Catppuccin Mocha, site light/dark; custom CSS
  - Floating mini-player; scroll-to-change volume; usage timer reminders
  - Customisable keyboard shortcuts; channel RSS links
  - Presets: Podcast, Presentation, Music, Minimal, Focus
  - On-page settings panel with search, import, export, reset
  - YouTube Music controls via headphones on Mac
- External services/APIs: SponsorBlock and DeArrow community lookups (video not revealed), dislike-count source not named (likely Return YouTube Dislike); privacy label "Data Not Collected"; corvusdevs.github.io
- Review highlights: none in the US store yet (0 ratings)
- screenshots: .atlas/research/store-images/apple/red-crow-for-safari/01-06.png (01-03 iPhone, 04-06 iPad)

## Auto HD + FPS for YouTube
- App Store: https://apps.apple.com/us/app/auto-hd-fps-for-youtube/id1546729687; id 1546729687; seller Carlos Jeurissen; site https://apps.jeurissen.co/auto-hd-fps-for-youtube
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 2.9 (35); API iOS (2.94, 35); API Mac None
- Last release: 2026-10-25 (v3.3.0); first release 2020-12-31
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 10.15 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP; Safari extension (Mac, iPhone, iPad), 2020 origin
- Features:
  - Automatically set YouTube video quality
  - Considers frame rate: e.g. play 60 FPS videos at 720p while 30 FPS plays at 1080p
  - Works for embedded YouTube videos on other sites
  - Can automatically resize the player to preference
  - Reviewer complaint: overrides manual quality changes ("big override issue")
- External services/APIs: none; privacy label "Data Not Collected"; apps.jeurissen.co
- Review highlights (52 US reviews, 2.69 avg; store 2.9 of 35):
  - Praise: "Best automatic quality and FPS"; works on iPhone and Apple-silicon Macs; simple
  - Complaint: stops working after YouTube or Safari changes; cannot change resolution manually on iPad (2024)
  - Complaint: a reviewer says most Mac App Store YouTube extensions are near-identical clones
- screenshots: .atlas/research/store-images/apple/auto-hd-fps-for-youtube/01-02.png (01 iPhone, 02 iPad)

## AdBlock Pro for Safari
- App Store: https://apps.apple.com/us/app/adblock-pro-for-safari/id1018301773; id 1018301773; seller Crypto Inc.; site https://adblockpro.com
- Platforms: macOS, iPhone, visionOS, iPad
- Price: iOS Free; IAP: 12 months $11.99; 1 month $1.99; 6 months $7.99; Lifetime $39.99; 3 months $4.99
- Rating: store page 4.5 (74358); API iOS (4.47, 74358); API Mac None
- Last release: 2026-10-31 (v13.1.0); first release 2015-11-01
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Identifiers]
- Pricing model: free + IAP: 1 month $1.99, 3 months $4.99, 6 months $7.99, 12 months $11.99, Lifetime $39.99
- Features:
  - Block pop-ups, banners, autoplay videos; block trackers; remove cookie prompts
  - Claims 2-4x faster pages, up to 60% data saved, battery savings
  - iCloud sync, Family Sharing (5 members), HTTPS-only mode, Safari shortcut
  - Custom blocking (hide elements), block miners, block scripts, block adult content
  - Picture-in-Picture (listed feature)
  - Language ad filters for 32 languages; UI in 60+ languages
  - Premium unlocks country-specific blocking, extra categories and automatic filter updates
  - Uses Apple's native Content Blocking API (no browsing data access)
  - Latest notes: native Mac support, redesigned UI, App Lock, iCloud sync status
  - No YouTube claim in the listing text
- External services/APIs: AdBlock Pro filter servers; iCloud; privacy label "Data Not Linked to You [Identifiers]"
- Review highlights (100 US reviews, 3.59 avg; store 4.5 of 74,358):
  - Praise: easy install, long-running trusted blocker
  - Complaint: most useful features are paid; asks users not to block ads; page-refresh and compatibility issues after iOS update; some sites ignored
- screenshots: .atlas/research/store-images/apple/adblock-pro-for-safari/01-06.png (all iPhone)

## Adblock Plus for Safari ABP
- App Store: https://apps.apple.com/us/app/adblock-plus-for-safari-abp/id1432731683; id 1432731683; seller Eyeo GmbH; site https://adblockplus.org
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-02-25 (v2.2.22); first release 2018-09-21
- Min OS: Mac: Requires macOS 11.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free; Mac only; Acceptable Ads on by default (can be turned off)
- Features:
  - Blocks pop-ups, video ads, banners and ads disguised as content in Safari
  - Acceptable Ads allow-list (default on)
  - Saves data and battery; filter lists optimised in latest release
  - No YouTube claim in listing
- External services/APIs: Adblock Plus filter lists and Acceptable Ads programme; privacy label "Data Not Collected"
- Review highlights (100 US reviews, 2.59 avg; Mac store shows no aggregate):
  - Praise: gets rid of distractions; "number 1 ad blocker"
  - Complaint: does not block ads in Safari at all for many users; "Didn't block a single YouTube ad"; forced Acceptable Ads agreement
- screenshots: .atlas/research/store-images/apple/adblock-plus-for-safari/01-02.png (all Mac)

## AdBlock for Safari & VPN
- App Store: https://apps.apple.com/us/app/adblock-for-safari-vpn/id1402042596; id 1402042596; seller Adblock Inc.; site https://getadblock.com
- Platforms: macOS
- Price: Mac Free; IAP: AdBlock VPN Yearly $39.99; AdBlock Gold $4.99; AdBlock VPN Monthly $3.99; AdBlock VPN Monthly $3.99; AdBlock VPN Yearly $34.99; AdBlock VPN Yearly $49.99; AdBlock VPN Monthly $5.99
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-10-28 (v4.0.7); first release 2018-07-30
- Min OS: Mac: Requires macOS 14.6 or later.
- Privacy label: Data Linked to You [Identifiers]; Data Not Linked to You [Contact Info]
- Pricing model: free Safari ad blocking; IAP: AdBlock Gold $4.99; AdBlock VPN monthly $3.99-$5.99, yearly $34.99-$49.99; Mac only
- Features:
  - Free Safari ad blocking: banners, pop-ups, autoplay video ads, audio ads "including YouTube and Facebook"
  - Cookie-consent banner removal and distraction control
  - Pause blocking on any site with one click
  - AdBlock VPN: 100+ locations, network-level ad/tracker/malware blocking, no-log, up to 8 devices
  - Claims 65 million users, 350 million downloads
  - Latest notes: Swedish, Danish, Norwegian, Czech; fixed Safari high CPU
- External services/APIs: AdBlock filter servers and VPN network; privacy label "Data Linked to You [Identifiers]; Data Not Linked to You [Contact Info]"
- Review highlights (100 US reviews, 2.36 avg; Mac store shows no aggregate):
  - Praise: long-running free model; saves time on ads
  - Complaint: heavy CPU use and heat after recent updates; blocks sites even after unblocking; ads still appear
- screenshots: .atlas/research/store-images/apple/adblock-for-safari-and-vpn/01.png (Mac)

## ProTube: Video Browser
- App Store: https://apps.apple.com/us/app/protube-video-browser/id6748081431; id 6748081431; seller Supermoon Platforms LLC; site https://www.protubeapp.com
- Platforms: iPhone, iPad
- Price: iOS Free; IAP: Premium $0.99; Premium $5.99
- Rating: store page 4.8 (15722); API iOS (4.82, 15722); API Mac None
- Last release: 2026-10-07 (v1.4.2); first release 2025-07-28
- Min OS: iPhone: Requires iOS 16.4 or later. | iPad: Requires iPadOS 16.4 or later.
- Privacy label: Data Used to Track You [Identifiers]; Data Linked to You [Identifiers, Usage Data]; Data Not Linked to You [Diagnostics]
- Pricing model: free + Premium IAP ($0.99 and $5.99 tiers listed); stand-alone video-site browser app (not a Safari extension); iPhone/iPad only; age rating 17+
- Features:
  - All-in-one browser for video websites with a native-app feel
  - AirPlay casting; dark mode; sleep timer
  - Background play, pop-up mode and PiP mentioned by reviewers (background play is the main draw)
- External services/APIs: web player sites; ad network and analytics (privacy label: Data Used to Track You [Identifiers]; Data Linked to You [Identifiers, Usage Data])
- Review highlights (100 recent US reviews, 3.17 avg; store 4.8 of 15,722):
  - Praise: allows YouTube listening with background play; many love it
  - Complaint: subscription pop-ups, bugs, performance, audio cut when pausing, no PiP for some users
  - Complaint: privacy concern about paying "premium" and data
- screenshots: .atlas/research/store-images/apple/protube-video-browser/01-06.png (01-04 iPhone, 05-06 iPad)

## YubePiP: PiP Browser & Tools
- App Store: https://apps.apple.com/us/app/yubepip-pip-browser-tools/id1591269922; id 1591269922; seller Actowise LLC; site https://www.actowise.com
- Platforms: iPhone, visionOS, iPad
- Price: iOS Free; IAP: Pro Lifetime $9.99; Pro Lifetime $7.99; Pro Lifetime $29.99
- Rating: store page 4.5 (9158); API iOS (4.54, 9158); API Mac None
- Last release: 2026-10-26 (v8.3); first release 2021-11-12
- Min OS: iPhone: Requires iOS 27.0 or later. | iPad: Requires iPadOS 27.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Purchases, Diagnostics]
- Pricing model: free + Pro Lifetime IAP ($7.99, $9.99, $29.99 tiers listed); stand-alone PiP browser (listing now named "uPiP Browser"); iPhone/iPad/Vision; now requires iOS 27; age rating 17+
- Features:
  - Play web videos in floating Picture-in-Picture or with background audio
  - Dual independent browser tabs (two web views or two videos at once)
  - Built-in PiP Tools: float local videos, photos, slideshows, PDFs, notes, countdown timers over any app
  - Desktop and mobile browser mode switching; Home URL setting
  - Reviewers: remember playback speed; ad blocking incomplete; lock-screen listening unreliable
- External services/APIs: web sites; ad SDKs (reviewers mention ads); privacy label "Data Not Linked to You [Purchases, Diagnostics]"
- Review highlights (100 recent US reviews, 3.49 avg; store 4.5 of 9,158):
  - Praise: floats a YouTube viewer over other apps; worth the Pro upgrade
  - Complaint: PiP fails half the time; cannot listen with the screen locked; ads still shown even after paying
- screenshots: .atlas/research/store-images/apple/yubepip-pip-browser/01-06.png (01-03 iPhone, 04-06 iPad)

## Video Lite
- App Store: https://apps.apple.com/us/app/video-lite/id1598997500; id 1598997500; seller Video Lite, Inc.; site https://videolite.app
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: Remove Ads (3 Months) $1.99; Remove Ads (1 Month) $0.99
- Rating: store page 4.8 (173931); API iOS (4.77, 173931); API Mac None
- Last release: 2026-10-26 (v6.26.001); first release 2021-12-08
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free (ad-supported) + "Remove Ads" IAP ($0.99 per month, $1.99 per 3 months); stand-alone video-site browser; iPhone/iPad; age rating 17+
- Features:
  - All-in-one browser for video websites with a native app feel
  - Chromecast and Picture-in-Picture; dark mode; sleep timer
  - Reviewers: skips ads on YouTube, plays playlists without hanging, but injects its own ads
- External services/APIs: web sites; ad network; privacy label "Data Not Collected"
- Review highlights (100 recent US reviews, 3.90 avg; store 4.8 of 173,931 - the most-rated tool in this category):
  - Praise: very good app; ad skipping; plays YouTube playlists correctly
  - Complaint: app gets hijacked by spam app promotions; periodic ads; login prompts; players change between versions
- screenshots: .atlas/research/store-images/apple/video-lite/01-06.png (all iPhone)

## YouPlay: AdBlock Video Browser
- App Store: https://apps.apple.com/us/app/youplay-adblock-video-browser/id6751497996; id 6751497996; seller Simon Zvara; site https://youplay-app.com
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: YouPlay Premium Lifetime $5.99; YouPlay Premium Monthly $1.99; YouPlay Premium Monthly $0.99; YouPlay Premium Yearly $5.99; YouPlay Premium Yearly $9.99
- Rating: store page 4.7 (1833); API iOS (4.68, 1833); API Mac None
- Last release: 2026-10-30 (v1.3.8); first release 2025-09-16
- Min OS: iPhone: Requires iOS 18.0 or later. | iPad: Requires iPadOS 18.0 or later. | Mac: Requires macOS 15.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 2.0 or later.
- Privacy label: Data Used to Track You [Diagnostics]; Data Linked to You [Diagnostics]
- Pricing model: free + Premium IAP (Lifetime $5.99; Monthly $0.99 or $1.99; Yearly $5.99 or $9.99); Premium only removes banner ads and adds custom backgrounds/icons; stand-alone browser; age rating 17+
- Features:
  - Simple browser for video websites with built-in ad blocking
  - Background playback
  - Picture-in-Picture
  - AirPlay streaming
  - Native-feeling UI; light/dark mode
  - Reviewers: also targets Disney+ and Prime Video ads
- External services/APIs: web sites; analytics/ads (privacy label: Data Used to Track You [Diagnostics]; Data Linked to You [Diagnostics])
- Review highlights (100 recent US reviews, 3.97 avg; store 4.7 of 1,833):
  - Praise: "watch YouTube without ads and in the background for free"
  - Complaint: ad blocking breaks across versions; background play pauses; PiP only on the first playlist video
  - Complaint: lifetime purchase not restorable or shareable with Family Sharing
  - Complaint: YouTube fails to load with an error at times
- screenshots: .atlas/research/store-images/apple/youplay-adblock-video-browser/01-06.png (01-04 iPhone, 05-06 iPad)

## Ad Skipper for YouTube
- App Store: https://apps.apple.com/us/app/ad-skipper-for-youtube/id1542270454; id 1542270454; seller Andrius Skerla; site n/a
- Platforms: macOS
- Price: Mac $1.99; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-09-09 (v3.0); first release 2020-11-29
- Min OS: Mac: Requires macOS 12.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99; earlier ~$0.99-$1 per reviews); Mac only
- Features:
  - Fast-forwards YouTube ads at 16x the moment they start (skippable or not) because YouTube no longer lets extensions press Skip
  - Mutes and blurs the player during an ad (each optional)
  - Hides promo banners and ad panels around the player (optional)
  - Optional Picture-in-Picture button in player controls
  - Keeps working in background tabs and between videos
  - Runs only on youtube.com; reads only the video player state
  - Note: after a long ad, YouTube's player can take seconds to resume
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (27 US reviews, 2.74 avg; Mac store shows no aggregate; newest review 2023):
  - Praise: "Best .99 I've spent"; works as advertised in 2021
  - Complaint: stopped working after YouTube changes (2022-2023); developer slow to fix; latest notes claim a new 16x engine
- screenshots: .atlas/research/store-images/apple/ad-skipper-for-youtube/01-05.png (all Mac)

## Buddy for Youtube
- App Store: https://apps.apple.com/us/app/buddy-for-youtube/id1232605621; id 1232605621; seller Vervone Solutions LLP; site n/a
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2018-07-04 (v1.1); first release 2017-07-20
- Min OS: Mac: Requires macOS 10.10 or later.
- Privacy label: No Details Provided
- Pricing model: free (reviews mention ~$1 earlier); Mac only; abandoned (last update 2018-07); age rating 17+
- Features:
  - Menu-bar YouTube player: search videos Spotlight-style
  - Floating, flexible player that snaps to screen edges
  - Copy URL from Safari and play from status bar icon; drag and drop URL onto player
  - Loop video; adjustable transparency; YouTube playlists; full-screen setting; launch at login
  - "Classic view" added in the last update
- External services/APIs: YouTube web player/search; privacy label "No Details Provided"
- Review highlights (10 US reviews, 3.00 avg):
  - Praise: native PiP-style player on desktop
  - Complaint: crashes, will not open, abandoned for 5+ years; cannot change playback speed
- screenshots: .atlas/research/store-images/apple/buddy-for-youtube/01-05.png (all Mac)

## 4Ktube Extension
- App Store: https://apps.apple.com/us/app/4ktube-extension/id1462103187; id 1462103187; seller Maxim Ananov; site https://hazeover.com/4ktube.html
- Platforms: macOS
- Price: Mac $1.99; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-03-30 (v1.2.1); first release 2019-05-17
- Min OS: Mac: Requires macOS 12 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99); Mac only
- Features:
  - Toolbar button opens the current page in another browser (Chrome, Firefox, Edge, Opera or another app); Shift-click also closes the Safari tab
  - Shows a "4K" badge in the toolbar when the watched YouTube video offers quality above 1080p
  - Hold Fn and click the button to skip a playing video ad
  - Option-click opens settings
- External services/APIs: none; privacy label "Data Not Collected"; hazeover.com
- Review highlights (9 US reviews, 4.44 avg):
  - Praise: easy way to hand a YouTube page to another browser; developer explains permissions
  - Complaint: "why would you sell an app that is just a link" (1 star)
- screenshots: .atlas/research/store-images/apple/4ktube-extension/01-03.png (all Mac)

## Channel Keeper for YouTube
- App Store: https://apps.apple.com/us/app/channel-keeper-for-youtube/id6450510658; id 6450510658; seller i-NOVATiON GmbH; site https://channelkeeper.app
- Platforms: macOS, iPhone, visionOS, iPad
- Price: iOS Free; IAP: Channel Keeper Premium $0.99
- Rating: store page 5 (2); API iOS (5, 2); API Mac None
- Last release: 2026-07-21 (v1.2.0); first release 2023-09-14
- Min OS: iPhone: Requires iOS 26.0 or later. | iPad: Requires iPadOS 26.0 or later. | Mac: Requires macOS 13.3 or later. | Apple Vision: Requires visionOS 26.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free + Premium IAP ($0.99); stand-alone channel organiser (not a Safari extension); iOS 26+
- Features:
  - Build a library of favourite YouTube channels
  - Collections to group channels
  - Widgets and Shortcuts (newest video for a channel or a collection)
  - Sync across iPhone, iPad, Mac, Vision Pro
  - Premium adds enhanced channel management
- External services/APIs: YouTube channel data; iCloud; privacy label "Data Not Collected"; channelkeeper.app
- Review highlights (1 US review, 5 stars: "Easy, organized way to keep up with all my YouTube")
- screenshots: .atlas/research/store-images/apple/channel-keeper-for-youtube/01-06.png (01-05 iPhone, 06 iPad)

## YT Shorts Blocker
- App Store: https://apps.apple.com/us/app/yt-shorts-blocker/id6742193472; id 6742193472; seller Anjey Tsibylskij; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $1.99; IAP: none listed
- Rating: store page 4.5 (2); API iOS (4.5, 2); API Mac None
- Last release: 2025-02-20 (v1.0); first release 2025-02-20
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 10.14 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99); Mac, iPhone, iPad
- Features:
  - Hide Shorts from homepage, subscriptions, channels and search results
  - Remove the Shorts navigation icon
  - Eliminate Shorts from trending and related videos
  - Disable infinite scrolling
  - Runs entirely on device; no data collected
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (2 ratings, 4.5; no written reviews)
- screenshots: .atlas/research/store-images/apple/yt-shorts-blocker/01-02.png (01 iPhone, 02 iPad)

## CleanTube: Ad & Shorts Blocker
- App Store: https://apps.apple.com/us/app/cleantube-ad-shorts-blocker/id6760742039; id 6760742039; seller TechParrot Innovations LLC; site https://cleantubeapp.com
- Platforms: macOS, iPhone, iPad
- Price: iOS $1.99; IAP: none listed
- Rating: store page 1 (1); API iOS (1, 1); API Mac None
- Last release: 2026-07-02 (v1.1.0); first release 2026-03-23
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($1.99); Mac, iPhone, iPad; Safari only
- Features:
  - Block video ads: pre-roll, mid-roll, banners, overlays; ads removed before they play; session ad counter in popup
  - Remove Shorts shelf, search results, sidebar; optional redirect of Shorts links to the regular player
  - Homepage modes: Zen (search bar only), Subscriptions Only, Default
  - Hide end screens, Up Next, comments, sidebar recommendations, Membership/Super Chat prompts, live chat replay (each toggle)
  - Playback: speed memory (set 1.5x once), disable autoplay, default theater mode
- External services/APIs: none; privacy label "Data Not Collected"; cleantubeapp.com
- Review highlights (1 US review, 1 star: "false advertising"; search-only and subscriptions-only modes did not work, v1.0.5)
- screenshots: .atlas/research/store-images/apple/cleantube-ad-and-shorts-blocker/01-03.png (all iPhone)

## ShortformBlock
- App Store: https://apps.apple.com/us/app/shortformblock/id6761337873; id 6761337873; seller Riku Kuisma; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: Support Development  $0.99
- Rating: store page 4.4 (14); API iOS (4.43, 14); API Mac None
- Last release: 2026-10-12 (v2.2); first release 2026-03-31
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 26.3 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free with a $0.99 "Support Development" IAP; claims to be the only free Shorts blocker for iPhone, iPad and Mac; Mac needs macOS 26.3
- Features (listing text calls it "ShortRemover"):
  - Hide Shorts from homepage, search results and navigation tab
  - Hide YouTube Community posts (latest update)
  - No analytics, no servers
  - Safari only; does not work in the YouTube app or Home Screen web apps (reviewer)
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (8 US reviews, 4.0 avg; store 4.4 of 14):
  - Praise: easy and quick; developer added Community-post hiding on request
  - Complaint: Shorts still appear in search results; extension does not start
- screenshots: .atlas/research/store-images/apple/shortformblock/01-03.png (01-02 iPhone, 03 iPad)

## Disable Shorts for YouTube
- App Store: https://apps.apple.com/us/app/disable-shorts-for-youtube/id6754694677; id 6754694677; seller Yaroslav Mykhailov; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $4.99; IAP: none listed
- Rating: store page 1 (1); API iOS (1, 1); API Mac None
- Last release: 2025-12-31 (v1.0.1); first release 2025-11-05
- Min OS: iPhone: Requires iOS 15.6 or later. | iPad: Requires iPadOS 15.6 or later. | iPod touch: Requires iOS 15.6 or later. | Mac: Requires macOS 11.5 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($4.99, highest price among Shorts-only blockers), no IAP
- Features:
  - Remove Shorts on homepage, search results, sidebar, navigation menu
  - Three modes: Hide (keep layout), Remove (delete from page), Redirect (convert Shorts URLs to regular video pages)
  - Full support for Mobile Safari (iPhone and iPad)
  - No data collection; local storage only
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (1 US review, 1 star: "followed all the instructions and this blocker doesn't work")
- screenshots: .atlas/research/store-images/apple/disable-shorts-for-youtube/01-02.png (01 iPhone, 02 iPad)

## ShortsBlocker - Remove Shorts
- App Store: https://apps.apple.com/us/app/shortsblocker-remove-shorts/id6683306924; id 6683306924; seller SageSight Ltd; site n/a
- Platforms: macOS
- Price: Mac Free; IAP: ShortsBlocker Yearly Premium $19.99; ShortsBlocker Lifetime Premium $29.99; ShortsBlocker Monthly Premium $1.99
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-03-04 (v2.0); first release 2024-09-22
- Min OS: Mac: Requires macOS 12.4 or later.
- Privacy label: Data Not Collected
- Pricing model: free to install; subscription or lifetime to keep using: Monthly $1.99, Yearly $19.99, Lifetime $29.99; Mac only
- Features:
  - Remove Shorts from homepage, tabs, search results, explore and subscriptions
  - v2.0: daily Shorts limits (including Unlimited and Block All), schedule-based blocking with weekday selection, blocked stats (today, week, total, estimated time saved), new Safari popup
  - Claims faster loading and no personal data
- External services/APIs: none stated; privacy label "Data Not Collected"; sagesight.io
- Review highlights (1 US review, 1 star): v2.0 auto-updated and now disables YouTube.com behind a $20/year popup without a subscription
- screenshots: .atlas/research/store-images/apple/shortsblocker-remove-shorts/01-03.png (all Mac)

## Shortstop - Block Shorts
- App Store: https://apps.apple.com/us/app/shortstop-block-shorts/id6741785614; id 6741785614; seller William Lu; site http://william.lu
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-03-13 (v1.2.0); first release 2025-02-11
- Min OS: Mac: Requires macOS 12.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP; Mac only
- Features:
  - Remove Shorts from the homepage
  - Disable Shorts recommendations alongside other videos
  - Block Shorts playback: redirect attempts back to the homepage
  - Latest notes: removes newer Shorts placements on search and home pages
  - Multi-step setup (enable in Safari Extensions, grant youtube.com permission)
- External services/APIs: none; privacy label "Data Not Collected"; william.lu
- Review highlights (10 US reviews, 3.60 avg):
  - Praise: works as advertised once manually enabled
  - Complaint: stopped after the macOS Tahoe upgrade; caused issues on pages with embedded YouTube videos
- screenshots: .atlas/research/store-images/apple/shortstop-block-shorts/01.png (Mac)

## Simple Shorts Blocker
- App Store: https://apps.apple.com/us/app/simple-shorts-blocker/id6761640934; id 6761640934; seller Yu Kinoshita; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $0.99; IAP: none listed
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-09-16 (v1.0); first release 2026-04-20
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 10.14 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($0.99); Mac, iPhone, iPad
- Features:
  - Hide the Shorts button in the main navigation and bottom bar
  - Remove the Shorts shelf from the home feed
  - Redirect Shorts to the standard video player (prevents autoplay and endless scrolling)
  - Enable via Settings, Safari, Extensions, allow youtube.com
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights: none yet (0 ratings)
- screenshots: .atlas/research/store-images/apple/simple-shorts-blocker/01-03.png (all iPhone)

## Still: Reels & Shorts Blocker
- App Store: https://apps.apple.com/us/app/still-reels-shorts-blocker/id6784061138; id 6784061138; seller Zachary Chartash; site https://stillapp.fit/
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 1 (1); API iOS (1, 1); API Mac None
- Last release: 2026-09-26 (v2.1.0); first release 2026-07-21
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 12.0 or later.
- Privacy label: Data Linked to You [Purchases, Contact Info, Identifiers, Usage Data, Other Data]
- Pricing model: free, no IAP listed; account sign-in by email for cross-device settings; privacy label shows linked data (Purchases, Contact Info, Identifiers, Usage Data)
- Features:
  - Removes YouTube Shorts (a Shorts link opens as a normal video)
  - Removes Instagram Reels and Facebook Reels
  - Blocks the TikTok website
  - One switch per site; settings sync across iPhone, iPad, Mac and Still extensions for Chrome and Firefox
  - Works in Safari with you signed in; no separate browser
  - No timers, streaks or screen-time stats
  - v2.1 adds an optional "Share usage data" switch
- External services/APIs: Still account/sync backend (email sign-in); stillapp.fit
- Review highlights (1 US review, 1 star): Instagram account deactivated by Meta after use (v2.1.0)
- screenshots: .atlas/research/store-images/apple/still-reels-and-shorts-blocker/01-03.png (all iPhone)

## MeowTube: Shorts Blocker
- App Store: https://apps.apple.com/us/app/meowtube-shorts-blocker/id6760180650; id 6760180650; seller Abubucker Siddeek Mohamed Sharik; site https://sharik.fr/meowtube/support/
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: Pro – Monthly $3.99; Pro – Yearly $24.99
- Rating: store page 5 (1); API iOS (5, 1); API Mac None
- Last release: 2026-10-28 (v2.7.1); first release 2026-03-18
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Used to Track You [Identifiers, Usage Data]; Data Linked to You [Contact Info, User Content, Identifiers, Usage Data]; Data Not Linked to You [Purchases, Usage Data]
- Pricing model: free + subscription (Pro Monthly $3.99, Pro Yearly $24.99); stand-alone focus browser for video, music and social sites (not a Safari extension); iPhone/iPad; age rating 17+
- Features:
  - Blocks Shorts cards on home and search, the Shorts tab; Shorts links return to home
  - Blocks short-video feeds on social networks too
  - Removes suggested videos and autoplay rabbit holes
  - Blur thumbnails or switch to black and white
  - Keeps searched videos/music, subscriptions, playlists, messages
  - Background listening with screen locked; Picture-in-Picture
  - Library: bookmarks, folders, resume position
  - Daily time limit with live counter (listing truncated after this)
- External services/APIs: account/analytics backend implied by privacy label (Data Used to Track You [Identifiers, Usage Data]; Data Linked to You [Contact Info, User Content, Identifiers, Usage Data])
- Review highlights (1 US review, 5 stars, no text)
- screenshots: .atlas/research/store-images/apple/meowtube-shorts-blocker/01-03.png (all iPhone)

## Shorts Free: YouTube Focus
- App Store: https://apps.apple.com/us/app/shorts-free-youtube-focus/id6796934892; id 6796934892; seller shuo zhou; site https://shorts-free-support.shuoinjp.chatgpt.site/?lang=en
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: Shorts Free Pro $1.99
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-08-06 (v1.0); first release 2026-08-05
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free tier + one-time "Shorts Free Pro" ($1.99; listing says 300 yen), no subscription, Restore Purchase included
- Features:
  - Free: hide the Shorts tab, shelves and Shorts videos
  - Free: redirect shared and direct Shorts links to the standard player
  - Free: preview of every removed surface with an animation
  - Pro "Calm Browse": also hide Home recommendations
  - Pro "Study": filter videos under 5 minutes
  - Pro "Deep Focus": filter videos under 10 minutes, related videos and comments
  - Pro "One Video": stop autoplay and next-video prompts
  - Safari only; local; no account
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights: none yet (0 ratings)
- screenshots: .atlas/research/store-images/apple/shorts-free-youtube-focus/01-03.png (01-02 iPhone, 03 iPad)

## Focus mode for YouTube
- App Store: https://apps.apple.com/us/app/focus-mode-for-youtube/id6758026862; id 6758026862; seller Sergei Saliukov; site https://topscrech.dev
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-10-15 (v64.0.9); first release 2026-01-22
- Min OS: iPhone: Requires iOS 15 or later. | iPad: Requires iPadOS 15 or later. | iPod touch: Requires iOS 15 or later. | Mac: Requires macOS 12 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP; open source (GitHub link mentioned in notes); Mac, iPhone, iPad
- Features:
  - Listing text is one line: "Block YouTube Shorts in Safari"
  - Localised in 11+ languages (Arabic, Danish, German, French, Hindi, Italian, Dutch, Russian, Turkish, Ukrainian, Simplified Chinese)
  - iPhone Duo support
- External services/APIs: none; privacy label "Data Not Collected"; topscrech.dev
- Review highlights: none yet (0 ratings)
- screenshots: .atlas/research/store-images/apple/focus-mode-for-youtube/01-02.png (01 iPhone, 02 iPad)

## FocusTube for Safari
- App Store: https://apps.apple.com/us/app/focustube-for-safari/id6799667312; id 6799667312; seller Xiamen Yiling Information Technology Co., Ltd.; site https://focustube.yilinglabs.com
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: FocusTube Annual $2.99
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-08-21 (v1.1); first release 2026-08-18
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later and a Mac with Apple M1 chip or later.
- Privacy label: Data Not Collected
- Pricing model: free to install + annual auto-renewing subscription ($2.99 listed in IAP; listing text says first month free then $1.99/year); Family Sharing; iPhone/iPad, iOS 17+
- Features (on by default for new installs):
  - Hide Shorts entry points from home, search and navigation
  - Open Shorts links in the regular player
  - Hide feed and page promo cards
  - Block video ads while watching in Safari ("best-effort, not a 100% ad-free claim")
  - Optional Focus: hide related videos, end screens, Mixes, comments or the home feed
  - Open YouTube to Subscriptions or Library instead of Home
  - Pause FocusTube from the host app
  - Playback settings remember speed and turn off autoplay
  - On-device; no account; no analytics or ad-tracking SDKs
- External services/APIs: none; privacy label "Data Not Collected"; focustube.yilinglabs.com
- Review highlights: none yet (0 ratings)
- screenshots: .atlas/research/store-images/apple/focustube-for-safari/01-03.png (all iPhone)

## Video Speed Control for Safari
- App Store: https://apps.apple.com/us/app/video-speed-control-for-safari/id6756773806; id 6756773806; seller Adarsh Kumar; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: SpeedMaster Pro Monthly $2.99; SpeedMaster Pro Yearly $19.99
- Rating: store page 4.1 (7); API iOS (4.14, 7); API Mac None
- Last release: 2026-05-12 (v2.6); first release 2026-01-05
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Linked to You [Purchases, Identifiers]; Data Not Linked to You [Usage Data]
- Pricing model: free + subscription ("SpeedMaster Pro" Monthly $2.99, Yearly $19.99); Mac, iPhone, iPad
- Features:
  - Playback speed 0.25x to 16x on YouTube, Netflix, Prime Video, Disney+, Hulu, HBO Max, Udemy, Coursera, LinkedIn Learning, Vimeo, Twitch and any HTML5 video
  - Slider with 0.01x accuracy and preset buttons; floating on-page controller
  - Remembers a default speed per website
  - Time-saved statistics, weekly activity charts, average viewing speed, most-used sites
- External services/APIs: none stated; privacy label "Data Linked to You [Purchases, Identifiers]; Data Not Linked to You [Usage Data]"
- Review highlights (7 ratings, 4.1; no written reviews in US RSS)
- screenshots: .atlas/research/store-images/apple/video-speed-control-for-safari/01-02.png (all iPhone)

## Fast Video Speed for Safari
- App Store: https://apps.apple.com/us/app/fast-video-speed-for-safari/id6502541176; id 6502541176; seller Dongwook Cho; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $2.99; IAP: none listed
- Rating: store page 5 (1); API iOS (5, 1); API Mac None
- Last release: 2024-05-15 (v1.0); first release 2024-05-15
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 10.14 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($2.99); Mac, iPhone, iPad; unchanged since 2024-05 (v1.0)
- Features:
  - Change video play speed instantly on any site (Netflix, YouTube, Twitter)
  - Speed range 0.1x to 16x
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (1 rating, 5 stars; no text)
- screenshots: .atlas/research/store-images/apple/fast-video-speed-for-safari/01-02.png (01 iPhone, 02 iPad)

## Simple Video Speed Controller
- App Store: https://apps.apple.com/us/app/simple-video-speed-controller/id6806633069; id 6806633069; seller Chase Olson; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: Standard Tip $2.99; Generous Tip $4.99; Small Tip $0.99
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-09-08 (v1.15); first release 2026-09-08
- Min OS: iPhone: Requires iOS 16.0 or later. | iPad: Requires iPadOS 16.0 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, open source, optional tips ($0.99, $2.99, $4.99); Mac, iPhone, iPad
- Features:
  - Adjust video speed on any website with HTML5 video (YouTube, Netflix, Disney and more)
  - Use cases listed: educational videos, entertainment, news/sports highlights, lectures
  - Keeps consistent speed settings across videos
  - Reload tabs after installing and pin the extension
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights: none yet (0 ratings)
- screenshots: .atlas/research/store-images/apple/simple-video-speed-controller/01-02.png (all iPhone)

## ClipGlider-video speed control
- App Store: https://apps.apple.com/us/app/clipglider-video-speed-control/id6446220573; id 6446220573; seller Vladislav Kharchev; site https://ClipGlider.com
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: 1 month $4.99; 1 year $34.99; 3 months $9.99; Premium forever $59.99; 6 monthes $17.99; 3 months $9.99; 1 month $4.99; 6 monthes $17.99; 1 year $34.99
- Rating: store page 3.3 (49); API iOS (3.33, 49); API Mac None
- Last release: 2026-05-06 (v2.3.3); first release 2023-03-14
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 10.14 or later.
- Privacy label: Data Not Collected
- Pricing model: free + subscriptions/lifetime: 1 month $4.99, 3 months $9.99, 6 months $17.99, 1 year $34.99, Premium forever $59.99 (highest-priced speed tool found); age rating 17+
- Features:
  - On-page control panel for any playback speed (not only 1.25x/1.5x/1.75x/2x) on websites and social networks
  - Quick seek navigation by tapping
  - Volume boost and noise reduction for some videos
  - Works on Instagram Stories/Reels/posts, Facebook, YouTube Shorts, X clips, Twitch, Snapchat Spotlight, Netflix and ads
  - No account needed
- External services/APIs: none stated; privacy label "Data Not Collected"; ClipGlider.com
- Review highlights (28 US reviews, 2.79 avg; store 3.3 of 49):
  - Praise: works without an account; strong support (Russian-language reviews)
  - Complaint: dark screen/no longer works in some regions; video pauses every 5 seconds with a pop-up
- screenshots: .atlas/research/store-images/apple/clipglider-video-speed-control/01-02.png (all iPhone)

## Stylebot
- App Store: https://apps.apple.com/us/app/stylebot/id6821400927; id 6821400927; seller Ankit Ahuja; site https://stylebot.dev/
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-11-01 (v4.2.0); first release 2026-10-29
- Min OS: Mac: Requires macOS 15.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, open source, no IAP; Mac only; brand new (2026-10-29); successor of the Chrome Stylebot CSS tool
- Features:
  - Pick any element on a page and change font, colours, spacing without code
  - Code editor for hand-written CSS
  - Gallery of styles made by other people, one-click install
  - Profiles: several looks per site, switchable
  - Sync of styles across computers
  - Version history with restore
  - Readability mode (clean reading view)
  - No tracking of browsing
  - No YouTube-specific claim
- External services/APIs: Stylebot gallery and sync backend; privacy label "Data Not Collected"; stylebot.dev
- Review highlights: none yet
- screenshots: .atlas/research/store-images/apple/stylebot/01-02.png (all Mac)

## Autoscripts - Exec Userscripts
- App Store: https://apps.apple.com/us/app/autoscripts-exec-userscripts/id6775431941; id 6775431941; seller Lim Sangjin; site http://jin-apps.s3-website.ap-northeast-2.amazonaws.com/autoscripts/
- Platforms: macOS, iPhone, iPad
- Price: iOS $0.29; IAP: none listed
- Rating: store page 0 (0); API iOS (0, 0); API Mac None
- Last release: 2026-10-15 (v1.3); first release 2026-06-05
- Min OS: iPhone: Requires iOS 26.0 or later. | iPad: Requires iPadOS 26.0 or later. | Mac: Requires macOS 15.0 or later. | Apple Vision: Requires visionOS 26.0 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($0.29, the cheapest userscript manager found); Mac, iPhone, iPad; iOS 26+
- Features:
  - Local-first userscript manager: create or import .user.js scripts
  - Review permissions before enabling; run scripts only on matching websites
  - Block sensitive sites; inspect source; manage updates
  - Backup library as ZIP files
  - No hosting, analytics, ads, accounts, subscriptions or tracking
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights: none yet
- screenshots: .atlas/research/store-images/apple/autoscripts-exec-userscripts/01-02.png (all iPhone)

## Looper & Replay for YouTube
- App Store: https://apps.apple.com/us/app/looper-replay-for-youtube/id6449761600; id 6449761600; seller Yuriy Litvishkov; site n/a
- Platforms: macOS
- Price: Mac $12.99; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2023-06-03 (v1.0); first release 2023-06-03
- Min OS: Mac: Requires macOS 10.14 or later.
- Privacy label: Data Not Collected
- Pricing model: one-time paid app ($12.99, the highest price found for a single-purpose YouTube extension); Mac only; unchanged since 2023-06; age rating 17+
- Features:
  - Automatically replay (loop) videos
  - Set start and end times for the replay
  - Light and dark theme support
  - "Best used with Adblock"
- External services/APIs: none stated; privacy label "Data Not Collected"
- Review highlights: none (0 ratings)
- screenshots: .atlas/research/store-images/apple/looper-and-replay-for-youtube/01-02.png (all Mac)

## PiPifier (Mac listing)
- App Store: https://apps.apple.com/us/app/pipifier/id1160374471; id 1160374471; seller Arno Appenzeller; site https://github.com/arnoappenzeller/PiPifier
- Platforms: macOS
- Price: Mac Free; IAP: Buy me a tea $2.99
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2025-09-10 (v1.4); first release 2016-09-30
- Min OS: Mac: Requires macOS 10.12 or later.
- Privacy label: Data Not Collected
- Pricing model: free; optional "Buy me a tea" tip IAP $2.99; open source (GitHub arnoappenzeller/PiPifier); separate listing from the iOS PiPifier (id 1234771095)
- Features:
  - Native macOS Safari extension that puts any HTML5 video into Picture-in-Picture from a toolbar icon
  - Works on YouTube; interact with the player once (play/pause) before pressing
  - Setup: Safari Preferences, Extensions, enable, drag icon to toolbar
  - Reviewer asks: PiP for the whole window
- External services/APIs: none; privacy label "Data Not Collected"
- Review highlights (91 US reviews, 3.76 avg; Mac store shows no aggregate):
  - Praise: native PiP with Apple's touches; "should be installed on all MacBooks by default"
  - Complaint: stopped working on some M1 Macs and with Sling TV after a 9-month update gap (2022)
- screenshots: .atlas/research/store-images/apple/pipifier-mac/01-02.png (all Mac)

## Vanced Tube-Block ads on video
- App Store: https://apps.apple.com/us/app/vanced-tube-block-ads-on-video/id6773042646; id 6773042646; seller Quynh Nguyen; site https://mv.pesnft.com/app-ads.txt
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: Monthly $5.99; Weekly $1.99; Yearly $29.99
- Rating: store page 4.6 (221); API iOS (4.58, 221); API Mac None
- Last release: 2026-09-24 (v1.0.7); first release 2026-06-03
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Used to Track You [Identifiers]; Data Not Linked to You [Identifiers, Usage Data, Diagnostics]
- Pricing model: free + subscription (Weekly $1.99, Monthly $5.99, Yearly $29.99); iPhone/iPad; listing is a local media player despite the name (name borrows "Vanced" and "Block ads on video")
- Features (from the listing):
  - Plays local video and audio files; background playback and Picture-in-Picture
  - Audio-only mode; gesture controls; playback speed, repeat, shuffle, sleep timer
  - Multi-band equalizer with presets
  - Import from Files/Photos; Wi-Fi transfer; playlists, history, liked items
  - On-device editor and converter (trim, extract audio, compress, GIF, ringtone)
  - Subtitles and lyrics import
  - No YouTube functionality in the description; a 5-star reviewer says it removes Shorts from the home page (conflicting with the listing)
- External services/APIs: ad SDKs (privacy label: Data Used to Track You [Identifiers]); site mv.pesnft.com
- Review highlights (2 US reviews, 5 stars; store 4.6 of 221): "Distraction free" praise only
- screenshots: .atlas/research/store-images/apple/vanced-tube-block-ads-on-video/01-02.png (all iPhone)

## Vdo Tube - No ads in video
- App Store: https://apps.apple.com/us/app/vdo-tube-no-ads-in-video/id6747290963; id 6747290963; seller Chowdhury Sabir Morshed; site n/a
- Platforms: iPhone (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: Unlock Premium $7.99
- Rating: store page 4.5 (734); API iOS (4.52, 734); API Mac None
- Last release: 2026-08-10 (v1.3.1); first release 2025-07-02
- Min OS: iPhone: Requires iOS 15.6 or later. | iPod touch: Requires iOS 15.6 or later. | Mac: Requires macOS 12.5 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Usage Data, Diagnostics]
- Pricing model: free + "Unlock Premium" $7.99; iPhone-only web browser; age rating 17+
- Features:
  - Ad blocker: banners, pop-ups and video ads (pre-roll, mid-roll, overlay)
  - Fast lightweight browser; dark mode; no tracking claim
  - Reviewers: watch YouTube member-only videos without ads; small player window, no landscape or pause control (one review)
- External services/APIs: web sites; privacy label "Data Not Linked to You [Usage Data, Diagnostics]"
- Review highlights (15 US reviews, 3.67 avg; store 4.5 of 734):
  - Praise: no ads; member videos playable
  - Complaint: tiny window, no landscape/controls in early versions; many problems
- screenshots: .atlas/research/store-images/apple/vdo-tube-no-ads-in-video/01-02.png (all iPhone)

## App for YouTube ·
- App Store: https://apps.apple.com/us/app/app-for-youtube/id6753933026; id 6753933026; seller AppAlchemy Labs LLC; site n/a
- Platforms: macOS
- Price: Mac Free; IAP: Lifetime Access $29.99; Yearly Subscription $19.99
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2026-07-02 (v1.3.1); first release 2025-12-17
- Min OS: Mac: Requires macOS 13.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free + Lifetime $29.99 or Yearly $19.99; Mac only; a YouTube movie browser, not an extension
- Features:
  - Browser home of popular movies and trailers (TMDB-powered posters)
  - Built-in WebView playback of official YouTube videos
  - Open full movies on YouTube
  - Favorites and watch history
- External services/APIs: TMDB (movie metadata), YouTube web; privacy label "Data Not Collected"
- Review highlights (7 US reviews, 2.71 avg): praise for UI; complaints about login/password loop and repeated upgrade interruptions; clone warning
- screenshots: .atlas/research/store-images/apple/app-for-youtube-appalchemy/01-02.png (all Mac)

## SuperX - PIP Extension
- App Store: https://apps.apple.com/us/app/superx-pip-extension/id6450839791; id 6450839791; seller 坚涛 陈; site n/a
- Platforms: iPhone, iPad (iOS app also runs on Apple-silicon Macs as an iPad app; no native Mac Safari extension)
- Price: iOS Free; IAP: None Ad Feature $0.99; SuperX Lifetime $12.99; 12 months $14.99; 1 month $1.99
- Rating: store page 4 (20); API iOS (4.05, 20); API Mac None
- Last release: 2026-10-16 (v3.2); first release 2023-07-14
- Min OS: iPhone: Requires iOS 17.0 or later. | iPad: Requires iPadOS 17.0 or later. | Mac: Requires macOS 14.0 or later and a Mac with Apple M1 chip or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free + IAP: 1 month $1.99, 12 months $14.99, Lifetime $12.99, "None Ad Feature" $0.99; iPhone/iPad; age rating 17+
- Features:
  - Safari extension that activates Picture-in-Picture video
  - Hands video from other apps (YouTube, Chrome, etc.) into SuperX's in-app browser
  - Supports local video, image and PDF files
  - Works with Safari, Chrome, Brave and apps (YouTube, Vimeo, Facebook, TikTok, IGTV)
- External services/APIs: none stated; privacy label "Data Not Collected"
- Review highlights (3 US reviews, 4.33 avg; store 4.0 of 20): praise "YouTube took away PiP when I went abroad. This app is clutch"; complaint: PiP button sometimes stops working until app restart
- screenshots: .atlas/research/store-images/apple/superx-pip-extension/01-02.png (all iPhone)

## RYTD
- App Store: https://apps.apple.com/us/app/rytd/id6463305263; id 6463305263; seller Rishik Dev; site https://rishikdev.github.io/RYTD/
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: none listed
- Rating: store page 2.3 (27); API iOS (2.3, 27); API Mac None
- Last release: 2025-10-28 (v1.4); first release 2024-11-27
- Min OS: iPhone: Requires iOS 15.0 or later. | iPad: Requires iPadOS 15.0 or later. | iPod touch: Requires iOS 15.0 or later. | Mac: Requires macOS 14.6 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no IAP; Safari port of a dislike counter (Mac, iPhone, iPad)
- Features:
  - Shows the dislike count next to the dislike button on YouTube watch pages in Safari
  - No copy-paste of URLs, no extra tools
  - Latest notes: fixed a bug that converted the extension into a normal iOS app
  - Data source not named in the listing (RYD-style)
- External services/APIs: not stated; the developer site rishikdev.github.io/RYTD; privacy label "Data Not Collected"
- Review highlights (27 US reviews, 2.96 avg; store 2.3 of 27):
  - Praise: "shows dislikes as it should"; timely updates
  - Complaint: breaks with YouTube UI changes ("No longer works with the latest YouTube UI", 2026-07); extension does nothing after enabling
  - Complaint: confusion that it is a website-only extension and not for the YouTube app (most 1-2 star reviews, per a defender)
- screenshots: .atlas/research/store-images/apple/rytd/01-03.png (all iPhone)

## Dislike Checker for YouTube +
- App Store: https://apps.apple.com/us/app/dislike-checker-for-youtube/id6741679691; id 6741679691; seller 满 李; site https://forms.gle/JnuHDBDMmYUiSGn1A
- Platforms: macOS
- Price: Mac Free; IAP: none listed
- Rating: store page 0 (0); API iOS None; API Mac (0, 0)
- Last release: 2025-11-28 (v1.2); first release 2025-02-14
- Min OS: Mac: Requires macOS 11.0 or later.
- Privacy label: Data Not Collected
- Pricing model: free, no ads, no subscription; Mac only; a stand-alone Mac app (share a link, not a page extension)
- Features:
  - Retrieves dislike counts from the third-party Return YouTube Dislike service (data is estimated; reference only)
  - Share YouTube links from Safari or Chrome into the app to see video details
  - Saved search history
  - Privacy-first: no tracking
- External services/APIs: returnyoutubedislike.com (Return YouTube Dislike API); privacy label "Data Not Collected"
- Review highlights: none (0 ratings)
- screenshots: .atlas/research/store-images/apple/dislike-checker-for-youtube-plus/01.png (Mac)

## SocialFocus: Hide Distractions
- App Store: https://apps.apple.com/us/app/socialfocus-hide-distractions/id1661093205; id 1661093205; seller Yevhen Tretiakov; site n/a
- Platforms: macOS, iPhone, iPad
- Price: iOS $4.99; IAP: Monthly $3.99; Yearly $35.99; Lifetime $79.99
- Rating: store page 4 (326); API iOS (3.95, 326); API Mac None
- Last release: 2026-07-02 (v7.7); first release 2022-12-24
- Min OS: iPhone: Requires iOS 15.4 or later. | iPad: Requires iPadOS 15.4 or later. | iPod touch: Requires iOS 15.4 or later. | Mac: Requires macOS 13.0 or later. | Apple Vision: Requires visionOS 1.0 or later.
- Privacy label: Data Not Linked to You [Usage Data]
- Pricing model: paid app ($4.99) plus PRO subscription/lifetime (Monthly $3.99, Yearly $35.99, Lifetime $79.99); same developer as UnTrap for YouTube and Shorts Blocker for YouTube
- Features:
  - Selectively hide parts of YouTube, Facebook, Twitter, Instagram, Reddit, LinkedIn, Gmail
  - YouTube: conceal recommended videos, Shorts, comments and more
  - Facebook/Instagram: hide feed, reels, stories
  - Startup settings; import/export of settings
  - PRO: hotkey configuration, settings synchronisation, more
  - Works only for websites in Safari, not the apps
- External services/APIs: none stated; privacy label "Data Not Linked to You [Usage Data]"
- Review highlights (100 US reviews, 3.64 avg; store 4.0 of 326):
  - Praise: "best extension for limiting social media", gave users their time back; works well on Reddit and Twitter
  - Complaint: paid app plus paid PRO ("why is there a subscription if the app itself costs money"); codebase updates behind subscription
  - Complaint: does not block Facebook reels or YouTube Shorts even after setup (several 2025-2026 reviews)
- screenshots: .atlas/research/store-images/apple/socialfocus-hide-distractions/01-04.png (all iPhone)

## Ghostery AdBlocker for Privacy
- App Store: https://apps.apple.com/us/app/ghostery-adblocker-for-privacy/id6504861501; id 6504861501; seller Ghostery GmbH; site https://www.ghostery.com/
- Platforms: macOS, iPhone, iPad
- Price: iOS Free; IAP: Monthly donation $4.99; Medium monthly contribution $4.99; Small monthly contribution $1.99; Yearly donation $47.99; Small one-time contributio $5.00; Medium one-time contribution $10.00; Large one-time contribution $20.00; Small yearly contribution $23.90; Large yearly contribution $143.99; Medium yearly contribution $59.90
- Rating: store page 4.3 (209); API iOS (4.33, 209); API Mac None
- Last release: 2026-10-28 (v10.6.10); first release 2024-07-02
- Min OS: iPhone: Requires iOS 18.7 or later. | iPad: Requires iPadOS 18.7 or later. | Mac: Requires macOS 14.6 or later. | Apple Vision: Requires visionOS 3.0 or later.
- Privacy label: Data Not Linked to You [Usage Data]
- Pricing model: free, open source, funded by donations/contributions (one-time $5/$10/$20; monthly $1.99-$4.99; yearly $23.90-$143.99)
- Features:
  - Block ads and pop-ups across all websites, "including YouTube and Facebook"
  - Stop trackers; remove cookie consent pop-ups
  - Speed up page loads ("2.5x faster" claim)
  - Tracker insights per site; tracker previews on search results
  - Whitelists for trusted sites and trackers
  - WhoTracks.Me tracker database updated daily
  - Latest notes: ad blocking inside embedded frames always on
- External services/APIs: Ghostery tracker database (WhoTracks.Me), remote settings; privacy label "Data Not Linked to You [Usage Data]"
- Review highlights (100 US reviews, 3.74 avg; store 4.3 of 209):
  - Praise: free, effective on pop-ups; quick install
  - Complaint: slows Safari page loads by 10-20 seconds; does not block ads on YouTube or Amazon for some; repeated review prompts
- screenshots: .atlas/research/store-images/apple/ghostery-adblocker-for-privacy/01-03.png (all iPhone)

## Long tail (metadata-only rows)

Checked through the lookup API and store page only (no review fetch, no screenshots saved). These are near-duplicate clones, brand-new apps with 0 to a handful of ratings, or general tools with a passing YouTube mention. Columns: app | id | seller | price (IAP) | platforms | rating (count) | last release | privacy label | first words of the listing.

| App | id | Seller | Price | Platforms | Rating | Last release | Privacy label | Listing summary |
|---|---|---|---|---|---|---|---|---|
| [iBlocker: Stop ADS](https://apps.apple.com/us/app/iblocker-stop-ads/id1567368739) | 1567368739 | Marina Karataeva | Free; IAP Premium access $5.99, Unlock everything $59.99, Premium access $9.99, Unlock Everything $9.99… | iPhone/iPad | 4.4 (736) | 2026-05-29 | Data Not Linked to You | Activate the smart filter for safari and start enjoying the internet without worrying about your security. Block in one click: - Pop-up ads. - Any shocking content. - Tracking of your priva… |
| [Turn Off the Lights for Mobile](https://apps.apple.com/us/app/turn-off-the-lights-for-mobile/id1044081431) | 1044081431 | Stefan Van Damme | Free; IAP Change keyboard $1.99, Homepage $0.99, Remove Ads $1.99 | iPhone/iPad | 4.1 (219) | 2019-04-26 | No Details Provided | The most popular Turn Off the Lights browser extension that dims everything in the background, so you can enjoy the video you’re watching without any distractions. Is now available for iPho… |
| [Play: Save Videos Watch Later](https://apps.apple.com/us/app/play-save-videos-watch-later/id1596506190) | 1596506190 | Loop Apps LTDA | Free; IAP Annual Subscription $19.99, Monthly Subscription $2.99, Play Premium (Lifetime) $99.99 | Mac/TV/iPhone/iPad | 4.7 (506) | 2026-11-02 | Data Not Linked to You | Play helps you save and organize videos for later, discover what to watch next, follow your favorite channels, and watch with powerful features. Critically acclaimed by The Verge, Daring Fi… |
| [Immersive Translate](https://apps.apple.com/us/app/immersive-translate/id6447957425) | 6447957425 | Funstory.ai limited | Free; IAP  Monthly Pro $9.99,  Monthly Pro $9.99, Annual Pro $79.99, Max annual membership $289.99… | Mac/iPhone/iPad | 4.6 (566) | 2026-10-29 | Data Used to Track You; Data Not Linked to You | "Immersive Translate" is the next-generation AI translation tool, trusted by over 20 million users worldwide. We help you break down language barriers and connect with a broader world. Fast… |
| [PiP - Picture in Picture](https://apps.apple.com/us/app/pip-picture-in-picture/id1635796246) | 1635796246 | Supagarn Pattananuchart | Free; IAP Monthly $1.99, Lifetime $19.99, Yearly $9.99, PRO Upgrade (Lifetime) $2.99 | iPhone/iPad | 4.5 (339) | 2026-09-20 | Data Not Collected | PiP - Picture in Picture allows you to play videos in picture-in-picture from the Youtube or Safari application. Key Features: • Background Playback Keep your videos and music playing in th… |
| [PiPY -Tube Skip Ad & AdBlocker](https://apps.apple.com/us/app/pipy-tube-skip-ad-adblocker/id1160309830) | 1160309830 | Street Coder LLC | Free; IAP Upgrade to Pro $2.99 | iPhone/iPad | 2.9 (22) | 2023-04-05 | Data Not Collected | -= PiPY lets you play YouTube videos in Picture-in-Picture mode =- Picture-in-Picture is one of the most amazing features of iOS 15+ on iPhone and iPadOS 15+ on iPad. PiP displays a small v… |
| [MyTV Tube - Player for Youtube](https://apps.apple.com/us/app/mytv-tube-player-for-youtube/id871837501) | 871837501 | Do Tri | $8.99 | iPhone/iPad | 4.5 (20) | 2022-10-16 | Data Not Collected | Manage Youtube videos in playlist. Easily to import local video into app or download your favorite videos from Dropbox, then you can upload them to Dropbox or import into local playlist for… |
| [SocialRouter–Hide Reels&Shorts](https://apps.apple.com/us/app/socialrouter-hide-reels-shorts/id6758858307) | 6758858307 | Vikas Kumar | Free; IAP Premium Access (Lifetime) $4.99, Premium Access (6 Months) $1.99 | iPhone/iPad | 4.6 (14) | 2026-10-17 | Data Not Collected | Manage multiple accounts in one place without logging in and out again and again. SocialRouter lets you switch and manage your social media accounts using separate and secure browser spaces… |
| [Scrolless: Feed Blocker](https://apps.apple.com/us/app/scrolless-feed-blocker/id6758870122) | 6758870122 | Jared Floersch | Free; IAP Unlock Scrolless $4.99 | Mac/iPhone/iPad | 5 (9) | 2026-08-16 | Data Not Collected | Block Reels, Shorts, home feeds, recommendations, and other algorithmic traps - while keeping messages, search, profiles, posting, and the people you actually care about. Scrolless works in… |
| [Scrolled: Limit Reels & Shorts](https://apps.apple.com/us/app/scrolled-limit-reels-shorts/id6815860237) | 6815860237 | mauro manuel brito bosch | Free; IAP A month $7.99, A year $39.99, For good $89.99, A year $39.99 | iPhone | 5 (8) | 2026-11-01 | Data Not Linked to You | Scrolled gives your feeds an end. Feeds used to have a bottom. You scrolled, you reached the end, you put the phone down. Now they never run out and you're losing precious time staring at a… |
| [Slowth: Short Video Blocker](https://apps.apple.com/us/app/slowth-short-video-blocker/id6764140763) | 6764140763 | Denis Malin | Free; IAP Climbing Pass $8.99, Coffee Beans $4.99, Cup of Coffee $0.99 | Mac/iPhone/iPad | 4 (4) | 2026-10-29 | Data Not Collected | A Safari extension that quietly hides infinite‑scroll feeds. Slowth blocks YouTube Shorts, Instagram and Facebook Reels, plus Explore and trends on X while leaving the rest of each site ava… |
| [ShortsKiller](https://apps.apple.com/us/app/shortskiller/id6762032154) | 6762032154 | JACOB SCOTT KELLY | Free | iPhone | 5 (4) | 2026-05-14 | Data Not Collected | ShortsKiller is a lightweight browser extension that helps customize your browsing experience by reducing Shorts-related content. ShortsKiller is compatible with YouTube.com while browsing … |
| [Detoxify - Short Block YT](https://apps.apple.com/us/app/detoxify-short-block-yt/id6740556197) | 6740556197 | Huong Nguyen | Free | iPhone/iPad | 2.5 (4) | 2025-05-15 | Data Not Collected | Detoxify brings you new experiences when using YT. YT's main function is maximizing views and ad clicks, it’s flooding us with enticing thumbnails and ads. While it might be ideal for casua… |
| [tubetidy: Hide Shorts & Feed](https://apps.apple.com/us/app/tubetidy-hide-shorts-feed/id6780741579) | 6780741579 | Yosuke Sato | $2.99 | Mac/iPhone/iPad | none | 2026-06-17 | Data Not Collected | A Safari extension that tidies up YouTube. Hide Shorts, home recommendations, related videos, comments, the description box, and merch shelves - keep only what you want. - Hide Shorts every… |
| [StillTabs: Block Reels, Shorts](https://apps.apple.com/us/app/stilltabs-block-reels-shorts/id6761367777) | 6761367777 | Albert Major | Free | iPhone | none | 2026-10-15 | Data Not Linked to You | StillTabs shows five sites the user already uses (YouTube, Instagram, X, Reddit, Facebook) in a native launcher and hides their infinite feeds and short-form video. The user picks how stric… |
| [NoShorts for Safari](https://apps.apple.com/us/app/noshorts-for-safari/id6758736915) | 6758736915 | Luis Filipe Fontinelles B… | $0.99 | Mac | none | 2026-10-20 | Data Not Collected | Play the Youtube shorts video as if it were a normal video. A extension allows youtube shorts videos to play on a regular page. Features - Redirect shorts - Hide "shorts" tab - Hide shorts … |
| [Remove distractions on YouTube](https://apps.apple.com/us/app/remove-distractions-on-youtube/id6633443341) | 6633443341 | 远腾 李 | $1.99 | Mac | none | 2025-05-12 | Data Not Collected | Enhance Your YouTube Experience! This Safari extension is tailored for Mac users who desire a focused, distraction-free YouTube browsing experience. Effortlessly hide related videos, shorts… |
| [CleanTube for Youtube](https://apps.apple.com/us/app/cleantube-for-youtube/id6762927986) | 6762927986 | Santiago Rhenals | $2.99 | Mac | none | 2026-06-14 | Data Not Collected | Take back your attention. CleanTube is a lightweight Safari extension that turns YouTube into the focused video library it was meant to be. No more endless Shorts. No more "recommended for … |
| [HideShorts for YouTube](https://apps.apple.com/us/app/hideshorts-for-youtube/id6757431862) | 6757431862 | Phil Trevor | $0.99 | iPhone/iPad | 2 (1) | 2026-01-20 | Data Not Collected | Take back control of YouTube. With HideShorts for YouTube, you can remove distracting content and enjoy a cleaner, more focused browsing experience. Whether you want to eliminate YouTube Sh… |
| [SpeedByGenre for YouTube](https://apps.apple.com/us/app/speedbygenre-for-youtube/id6759827413) | 6759827413 | Onur Sencan | Free | Mac | none | 2026-05-27 | Data Not Collected | Automatically adjust YouTube playback speed based on the video's category. No manual tapping required. SpeedByGenre learns your preferences once, then applies them automatically. Such as, s… |
| [Timestamps & Summaries for YT](https://apps.apple.com/us/app/timestamps-summaries-for-yt/id6763356148) | 6763356148 | Matus Vojtek | Free | Mac | none | 2026-05-11 | Data Linked to You | Timestamps & Summaries for YT is a Safari extension that generates YouTube timestamps and summaries. Use the Safari extension to generate: - Chronological timestamps - Video summaries The a… |
| [TodayTube](https://apps.apple.com/us/app/todaytube/id6776426080) | 6776426080 | Musicamania Tecnologia Co… | $4.99 | Mac | none | 2026-06-16 | Data Not Collected | TodayTube transforms YouTube into a personal television experience. Subscribe to your favorite channels and the app plays their latest videos back-to-back, automatically — no scrolling, no … |
| [MiniTube Player](https://apps.apple.com/us/app/minitube-player/id1442926006) | 1442926006 | Ahmed Qazzaz | $0.49 | Mac | none | 2026-11-02 | Data Linked to You | MiniTube player is a simple video player based on YouTube™ links, you can run videos, and playlists. The Goal of this application is to show you the video as Picture-in-Picture style just l… |
| [Weber - Video Speed Extention](https://apps.apple.com/us/app/weber-video-speed-extention/id6753136256) | 6753136256 | 天从 何 | Free | Mac | none | 2025-09-29 | Data Not Collected | Weber – Safari-exclusive video speed plugin, precisely adjust playback speed from 0.1x to 100x, compatible with mainstream web platforms, efficient for learning, streaming, and work. Tired … |
| [Video Speedifier](https://apps.apple.com/us/app/video-speedifier/id6777611041) | 6777611041 | Justin James | Free | Mac/iPhone/iPad | 5 (3) | 2026-10-09 | Data Not Collected | Take control of every video you watch. Video Speedifier is a clean, powerful Safari extension that lets you adjust playback speed on any website with precision and ease. Use the smooth slid… |
| [Video Looper - for Safari](https://apps.apple.com/us/app/video-looper-for-safari/id6477761211) | 6477761211 | Nick Dubov | $2.99 | Mac/iPhone/iPad | none | 2026-06-15 | Data Not Collected | Loop any moment of any video on the web - right inside Safari. VideoLoop turns Safari into a video looper. Replay a chorus, repeat a dance step, drill a sentence in a language you're learni… |
| [Looper - Repeat videos](https://apps.apple.com/us/app/looper-repeat-videos/id1539200207) | 1539200207 | Hardik Jain | Free | Mac | none | 2020-11-25 | No Details Provided | When history can repeat itself, why can't we on youtube! Often there are videos that we would like to listen on repeat, for example, songs, but youtube doesn't have a feature for making thi… |
| [Ad Skipper for YT](https://apps.apple.com/us/app/ad-skipper-for-yt/id6463863543) | 6463863543 | Digital Media s.r.o. | Free | Mac | none | 2025-09-23 | Data Not Collected | This Safari extension is designed to enhance the YouTube viewing experience by providing users the option to automatically skip traditional ads or replace them with GIFs. Features Ad Skippi… |
| [Ad Blocker for Youtube.](https://apps.apple.com/us/app/ad-blocker-for-youtube/id6744957833) | 6744957833 | Waqas Zafar | Free; IAP Lifetime $49.99, Yearly $29.99, Monthly $9.99, Weekly $4.99 | Mac | none | 2025-09-27 | Data Not Collected | Tired of annoying ads interrupting your YouTube experience? No Ads: YouTube Ad Blocker is the ultimate tool to block video ads on YouTube, Safari, and other browsers—completely distraction-… |
| [VPN & Ad Blocker for Safari](https://apps.apple.com/us/app/vpn-ad-blocker-for-safari/id1584644148) | 1584644148 | All Protect GmbH | Free; IAP VPN: Fake IP Location Changer $8.99, VPN: Fake GPS Location Changer $15.99, AdBlocker for Safari Browser $7.99, VPN - Private Internet Access $29.99… | iPhone/iPad | 4.3 (193) | 2023-07-19 | Data Used to Track You; Data Linked to You; Data Not Linked to You | VPN & Ad Blocker for Safari is a versatile solution to protect your privacy. We offer security and internet freedom. It is your trusted guide to secure internet use. We offers lots of usefu… |
| [Nomoads: Ad & Tracker Blocker](https://apps.apple.com/us/app/nomoads-ad-tracker-blocker/id6759786049) | 6759786049 | Vladyslav Palamarchuk | Free; IAP NOMOADS Premium - monthly $4.99, Nomoads Weekly Premium $1.99, Nomoads Lifetime $39.99, Nomoads - Yearly $34.99 | iPhone/iPad | 4.2 (25) | 2026-10-26 | Data Not Collected | Nomoads blocks ads, trackers and unwanted domains in apps, games and Safari, right on your iPhone and iPad. It works at the DNS level: when an app tries to reach a known ad or tracking serv… |
| [So Annoying! Ad Blocker](https://apps.apple.com/us/app/so-annoying-ad-blocker/id6808265336) | 6808265336 | MIKAIL YENIGUN | Free; IAP Safari + apps, yearly $19.99, Safari + apps, forever $44.99, Safari + apps, monthly $3.99, Unlimited, yearly $14.99… | Mac/iPhone/iPad | 4.8 (29) | 2026-11-02 | Data Not Linked to You | So Annoying! blocks ads in Safari and inside many of your other apps and games. In the YouTube app, videos play without ads, keep playing when you lock the screen, and work in picture in pi… |
| [YouTube, FB, LinkedIn Blocker](https://apps.apple.com/us/app/youtube-fb-linkedin-blocker/id6782716865) | 6782716865 | Tadashi Kumazawa | $1.99 | iPhone/iPad | 4.5 (8) | 2026-11-02 | Data Not Collected | YT Rec Block is a simple Safari extension for iPhone and iPad that helps make YouTube less distracting. Now we block FaceBook and LinkedIn too! When enabled for youtube.com in Safari, it hi… |
| [Clean Tube](https://apps.apple.com/us/app/clean-tube/id6757726426) | 6757726426 | Binh Do | Free; IAP Yearly Plan $2.99 | iPhone/iPad | 1 (1) | 2026-02-23 | Data Not Linked to You | CleanTube is a powerful Safari extension that replaces YouTube's player with a feature-rich native video player, giving you unprecedented control over your viewing experience. TRY FREE FOR … |
| [Video Declutter for Safari](https://apps.apple.com/us/app/video-declutter-for-safari/id6780689402) | 6780689402 | MUSTAFA TOKMAK | Free | Mac/iPhone/iPad | none | 2026-07-21 | Data Not Collected | Open a video. Watch it. Leave. Video Declutter is an independent tool that works with the YouTube website in Safari, and lets you switch off the parts that pull you away — each behind its o… |
| [FocusFeed for YouTube](https://apps.apple.com/us/app/focusfeed-for-youtube/id6771856915) | 6771856915 | Aditya Tiwari | Free | iPhone/iPad | none | 2026-05-26 | Data Not Collected | FocusFeed is a Safari extension that makes YouTube less distracting. Hide the home feed, Shorts, recommendations, and comments so you can use YouTube for studying, tutorials, research, and … |
| [Kids Guardian: Safe YouTube](https://apps.apple.com/us/app/kids-guardian-safe-youtube/id6758027372) | 6758027372 | Elma Digital ltd | Free; IAP Kids Video Guardian Monthly Plan $3.99 | iPhone/iPad | none | 2026-03-02 | Data Linked to You | Kids Video Guardian gives parents full control over what kids watch on YouTube. Instead of algorithms and risky “recommended” rabbit holes, your child only sees the channels and videos you … |
| [Hooks for YouTube - PiP Video](https://apps.apple.com/us/app/hooks-for-youtube-pip-video/id6480011338) | 6480011338 | Miguel Angel Diaz Lopez | Free; IAP Premium $0.99, Premium+ $12.99, Hooks Premium Quarterly $0.99, Hooks Premium Monthly $1.00… | iPhone/iPad | 5 (1) | 2024-06-09 | Data Not Linked to You | Enjoy YouTube Premium benefits: • Blocks pop-ups, banners, and video ads for ad-free viewing. • Enables Picture-in-Picture to enhance multitasking. • Allows videos to play in the background… |
| [PIP - Video Player for Youtube](https://apps.apple.com/us/app/pip-video-player-for-youtube/id6747489810) | 6747489810 | Patel Nishaben | Free | iPhone/iPad | 3 (2) | 2026-04-15 | Data Not Collected | Enjoy seamless multitasking with PIP - Video Player for YouTube. This app lets you watch videos in Picture-in-Picture (PIP) mode, so you can browse other apps or work while your favorite co… |
| [PocketTube Playlist for Safari](https://apps.apple.com/us/app/pockettube-playlist-for-safari/id1592569440) | 1592569440 | Dmitry Nabok | Free | Mac | none | 2026-10-25 | Data Not Linked to You | Using this Youtube extension you can create collections that seamlessly fit into the YouTube layout. This is an easy way to manage a Youtube playlists. This extension enables you to: - Crea… |
| [Ad blocker - Magic Lasso](https://apps.apple.com/us/app/ad-blocker-magic-lasso/id1198047227) | 1198047227 | Magic Lasso Pty Ltd | Free; IAP Pro Yearly (macOS) $29.99, Pro Yearly (macOS) $29.99, Pro Monthly (macOS) $2.99, Pro Yearly (macOS) $29.99 | Mac | none | 2026-10-28 | Data Not Collected | Magic Lasso Adblock is the fastest, most efficient Safari, YouTube, App and Apple TV ad blocker available. 400,000+ users rely on Magic Lasso Adblock to: • Block ads and trackers – Block ad… |
| [Purple Crow For Safari](https://apps.apple.com/us/app/purple-crow-for-safari/id6761481948) | 6761481948 | Alejandro Estol | $0.99 | Mac/iPhone/iPad | 4 (4) | 2026-10-19 | Data Not Collected | Purple Crow is a Safari Web Extension that brings third-party emotes, BetterTTV, FrankerFaceZ, and 7TV, to both Twitch and Kick, along with 70+ quality-of-life features. SUPPORTED PLATFORMS… |
| [Picture-in-Picture Tool (PiP)](https://apps.apple.com/us/app/picture-in-picture-tool-pip/id1565547115) | 1565547115 | Sebastian Stadtlich | Free; IAP Buy me a coffee $2.99, Buy Cake $4.99 | iPhone/iPad | 4.6 (34) | 2026-10-21 | Data Not Collected | Picture-in-Picture Tool (PiP) plays YouTube videos in Picture-in-Picture mode. The video keeps running in a floating window on top of other apps – or as audio-only playback while your scree… |
| [PiPer](https://apps.apple.com/us/app/piper/id1421915518) | 1421915518 | Adam Marcus | Free; IAP Small Donation $0.99, Medium Donation $2.99, Grand Donation $9.99 | Mac | none | 2019-11-14 | Data Not Collected | PiPer for Safari is a browser extension that adds Picture in Picture functionality to YouTube, Netflix, Amazon Video, Twitch, and more! Features: - Adds a dedicated Picture in Picture butto… |
| [Floating: Picture In Picture](https://apps.apple.com/us/app/floating-picture-in-picture/id1508833245) | 1508833245 | Pranoy Chowdhury | Free; IAP Floating Pro $14.99 | Mac | none | 2026-10-20 | Data Not Collected | Floating is a very simple yet powerful app which lets you picture in picture (pin/stick/float) as many videos, photos, and websites on top of everything. Websites, YouTube, YouTube playlist… |
| [Hover for Safari](https://apps.apple.com/us/app/hover-for-safari/id1540705431) | 1540705431 | Justin Epstein | Free | Mac | none | 2024-12-06 | Data Not Collected | Hover for Safari allows you to expand any image, link, or GIF just by hovering over it. With extensive support for popular websites, you'll be able to browse media-heavy content with ease. … |
| [SmartPlay for Safari](https://apps.apple.com/us/app/smartplay-for-safari/id1545815826) | 1545815826 | Best App Limited | Free; IAP 1 Month Premium $4.99, 1 Week Premium $3.99, Lifetime Premium $14.99 | Mac | none | 2026-10-09 | Data Not Linked to You | ** SmartPlay is a Safari Web Extension that will give you extra control and functions (e.g., Video Effects, Playback Speed, Custom Subtitles, Auto Skip Intros, IMDB Rating, etc.) when you'r… |
| [Trancy ET- AI Translator](https://apps.apple.com/us/app/trancy-et-ai-translator/id6475386403) | 6475386403 | L2D LIMITED | Free; IAP Trancy Premium - Monthly $2.99, Trancy Premium - Yearly $29.99 | Mac/iPhone/iPad | 3.3 (15) | 2026-11-01 | Data Not Collected | Trancy ET is a Safari extension that provides YouTube AI bilingual subtitles and also offers AI word translation/immersive translation functions. It allows users to learn a new language bas… |
| [Dual Subtitles for YouTube](https://apps.apple.com/us/app/dual-subtitles-for-youtube/id6748589138) | 6748589138 | Gableworks Tech Inc. | Free | iPhone | 3.6 (14) | 2025-07-23 | Data Not Linked to You | Instantly understand English YouTube videos with AI-powered bilingual subtitles designed for ESL learners. Dual helps you quickly generate accurate transcripts and bilingual subtitles for a… |

## Coverage notes and gaps

- "Tweaks for YouTube": no US App Store listing under that name (searches: "tweaks for youtube", "tweaks youtube", "youtube tweaks", "youtweak", and neighbours). Closest: YouTweak (free, new in 2026-07), Red Crow For Safari and Improved Tube for the "everything in one extension" idea.
- Return YouTube Dislike: no official port. Ports and users of the data: Return Dislikes, RYTD, Dislike Checker for YouTube + (names the RYD service), wBlock script catalog, Mira, Red Crow, Improved Tube (compatible, not bundled). The older Dislike Checker for YouTube is a URL-lookup app, not a page extension.
- DeArrow: only the author's own $1.99 app is a stand-alone port; it is bundled or offered inside wBlock, Red Crow and Smart Tube BDP.
- SponsorBlock: the author's $2.99 app is the maintained port; the free unofficial Mac port is abandoned (2020). SponsorBlock data is also bundled in wBlock (Tube Cleaner), Red Crow, Improved Tube (Smart Speed), Mira, SwizzTube and Smart Tube BDP.
- Wipr: only "Wipr 2" is listed (original Wipr not found). Reviewers say Wipr 2 does not block YouTube ads in Safari.
- No Distractions for YouTube states its successor is "ReDD Focus"; no US listing by that name was found.
- Store-page ratings are 0 for most Mac-only listings even when written reviews exist; use the review samples there.
- "Stand-alone app" rows (SwizzTube, Mira, Smart Tube BDP, Unwatched, Tube PiP, ProTube, YubePiP, Video Lite, YouPlay, Focus, MeowTube, Channel Keeper, Vdo Tube, Vanced Tube) are not Safari extensions; they are included as the "YouTube Premium alternative" category.
- Screenshots are saved for every full section (up to 6 per app; fewer for long-tail clones), in store-images/apple/<slug>/NN.png. The folder is gitignored.

## Feature matrix

Rows are apps (some rows group near-identical apps), columns are features. ✓ = advertised in the listing or release notes. ~ = partial, indirect, or only reported by reviewers. Blank = not offered or not claimed. Apps with no YouTube-specific feature (Wipr 2, Hush Nag Blocker, Noir, Dark Reader, Baking Soda, Hyperweb, Cascadea apart from generic CSS) show nothing in the YouTube columns.

Column key: **Sh** Hide Shorts; **Dc** Declutter (recs, comments, related, home feed); **Ad** YouTube ads blocked or skipped; **SB** SponsorBlock skipping; **DA** DeArrow titles/thumbnails; **RD** Return-dislike counts; **Sp** Playback speed; **Ql** Quality / FPS / codec; **PiP** Picture-in-Picture; **Bg** Background / audio-only; **Th** Theater, cinema, dark, ambient, filters; **Lp** Loop / A-B repeat; **Hk** Custom hotkeys; **Bl** Channel/keyword block, subscription organiser, queue; **Cs** Custom CSS / JS; **AI** Summaries, transcripts, translation; **Fc** Focus limits, schedules, delay; **Sy** Settings sync (iCloud / account)

| App | Type | Sh | Dc | Ad | SB | DA | RD | Sp | Ql | PiP | Bg | Th | Lp | Hk | Bl | Cs | AI | Fc | Sy |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Red Crow For Safari | Safari ext Mac/iOS/iPad | ✓ | ✓ |  | ✓ | ✓ | ~ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ~ | ✓ |  |
| Improved Tube | Safari ext Mac | ✓ | ✓ | ✓ | ~ |  |  | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ | ✓ | ~ | ~ |  |  |
| UnTrap for YouTube | Safari ext Mac/iOS/iPad | ✓ | ✓ | ~ |  |  |  |  |  |  |  | ~ |  | ✓ | ✓ |  | ✓ | ✓ | ✓ |
| SocialFocus | Safari ext Mac/iOS/iPad | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  | ✓ |
| Clean YT for Safari | Safari ext Mac/iOS/iPad | ✓ | ✓ | ~ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Block YT Shorts for Safari | Safari ext Mac/iOS/iPad | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Shorts Blocker for YouTube | Safari ext Mac/iOS/iPad | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| BlockYT for Safari | Safari ext Mac/iOS/iPad | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| "No Distractions" for YouTube | Safari ext Mac/iOS/iPad |  | ✓ | ~ |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |
| Sink It for YouTube | Safari ext Mac/iOS/iPad | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| No Shorts: Blocker for YouTube | Safari ext Mac/iOS/iPad | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #blockit | Safari content blocker, Mac/iOS/iPad | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |
| CleanTube: Ad & Shorts Blocker | Safari ext Mac/iOS/iPad | ✓ | ✓ | ✓ |  |  |  | ~ |  |  |  | ✓ |  |  |  |  |  |  |  |
| FocusTube for Safari | Safari ext iOS/iPad | ✓ | ✓ | ~ |  |  |  | ~ |  |  |  |  |  |  |  |  |  |  |  |
| Shorts Free | Safari ext Mac/iOS/iPad | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Simple / Disable / YT Shorts / ShortformBlock / Shortstop / Focus mode (Shorts-only group) | Safari ext mixed | ✓ | ~ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| SponsorBlock for Safari | Safari ext Mac/iOS/iPad |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| SponsorBlock port for Youtube | Safari ext Mac (abandoned) |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DeArrow for YouTube | Safari ext Mac/iOS/iPad |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Return Dislikes | Safari ext Mac/iOS/iPad |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| RYTD | Safari ext Mac/iOS/iPad |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| Dislike Checker for YouTube + | Mac app (share sheet) |  |  |  |  |  | ~ |  |  |  |  |  |  |  |  |  |  |  |  |
| Vinegar - Tube Cleaner | Safari ext Mac/iOS/iPad |  |  | ✓ |  |  |  | ~ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |
| Accelerate for Safari | Safari ext Mac/iOS/iPad |  |  |  |  |  |  | ✓ |  | ✓ |  |  |  | ✓ |  |  |  |  |  |
| Custom Video Speed for YouTube | Safari ext Mac/iOS/iPad |  |  |  |  |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  |
| Hover Speed for YouTube | Safari ext Mac |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| Vidimote for Safari | Safari ext Mac/iOS/iPad |  |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  |  |  |  |  |
| Video Speed Control / Fast Video Speed / Simple Video Speed / ClipGlider | Safari ext Mac/iOS/iPad |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| Auto HD + FPS for YouTube | Safari ext Mac/iOS/iPad |  |  |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |
| PiPifier / OverPicture / Picture in Picture for Safari | Safari ext Mac and/or iOS |  |  |  |  |  |  |  |  | ✓ |  |  |  | ~ |  |  |  |  |  |
| Ad Skipper for YouTube | Safari ext Mac |  |  | ✓ |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| Better Player for Youtube | Safari ext Mac/iOS/iPad | ~ |  | ✓ |  |  |  |  |  | ✓ |  | ✓ |  |  |  |  |  |  |  |
| Turn Off the Lights for Safari | Safari ext Mac/iOS/iPad |  | ~ |  |  |  |  |  | ✓ |  |  | ✓ | ✓ | ✓ |  |  |  |  |  |
| StopTheMadness Pro | Safari ext Mac/iOS/iPad |  |  |  |  |  |  | ~ |  | ✓ |  |  |  |  |  | ✓ |  |  | ✓ |
| PocketTube for Safari | Safari ext Mac (+ iOS companion app) |  | ~ |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |  |
| YouTweak | Safari ext Mac/iPad |  | ✓ |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  |  | ~ |  |  |
| Userscripts / Tampermonkey / Cascadea / Stylebot | Safari ext userscript or CSS managers |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  |
| wBlock | Safari ext Mac/iOS/iPad |  |  | ✓ | ✓ | ~ | ~ |  |  | ✓ | ✓ |  |  |  |  | ✓ |  |  | ✓ |
| AdGuard (iOS / Mac) | content blocker + DNS |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  | ~ |  |  |  |
| 1Blocker | content blocker + scripts |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  | ~ |  |  | ✓ |
| Ad blocker by Magic Lasso | content blocker + DNS |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ~ |
| Pie Adblock for Safari | content blocker |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Adblocker For YouTube Videos | Safari ext Mac/iOS/iPad |  |  | ✓ |  |  |  | ✓ | ~ | ✓ | ✓ |  |  |  |  |  |  |  |  |
| AdBlock for Safari & VPN / Ghostery | content blockers |  |  | ~ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| SwizzTube | Stand-alone app iOS/iPad/Mac/TV | ✓ |  | ✓ | ✓ |  |  |  | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  | ✓ |
| Mira - Focused Video Player | Stand-alone app iOS/iPad/Mac/TV | ✓ |  |  | ✓ |  | ✓ | ✓ |  |  | ✓ | ✓ |  |  | ✓ |  | ✓ |  | ✓ |
| Smart Tube BDP | Stand-alone app iOS/iPad/Mac/TV |  |  | ~ | ✓ | ✓ |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |
| Unwatched for YouTube | Stand-alone app all Apple platforms | ✓ |  |  |  |  |  | ✓ |  | ✓ | ✓ |  |  |  | ✓ |  |  |  | ✓ |
| Tube PiP / YubePiP / ProTube / Video Lite / YouPlay | Stand-alone app iOS/iPad |  |  | ~ |  |  |  |  |  | ✓ | ✓ |  |  |  |  |  |  | ~ |  |
| Eightify for Safari | Safari ext Mac (subscription) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |
| Channel Keeper for YouTube | Stand-alone app Apple platforms |  |  |  |  |  |  |  |  |  |  |  |  |  | ✓ |  |  |  | ✓ |

## Pricing table

Prices are US App Store (2026-11-03). Model: one-time = single paid download; free + tip = free app with optional tip IAP; free + subscription = freemium with auto-renewing plans (lifetime option where noted); free + one-time unlock = free tier plus a single non-recurring Pro purchase. Rating = store page average (count); "none" = no ratings in the US store. Rows are in the order of the app sections above.

| App | Platforms | Price and in-app purchases | Model | Rating (count) |
|---|---|---|---|---|
| [Clean YT for Safari](https://apps.apple.com/us/app/clean-yt-for-safari/id6754407661) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 5 (1) |
| [SponsorBlock for Safari](https://apps.apple.com/us/app/sponsorblock-for-safari/id1573461917) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 4.4 (81) |
| [PocketTube for Safari](https://apps.apple.com/us/app/pockettube-for-safari/id1533703891) | macOS | Mac Free; no IAP | free | none |
| [Block YT Shorts for Safari](https://apps.apple.com/us/app/block-yt-shorts-for-safari/id6754257092) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 5 (1) |
| [Accelerate for Safari](https://apps.apple.com/us/app/accelerate-for-safari/id1459809092) | macOS, iPhone, iPad | iOS Free; IAP: Coffee Tip $1.99 | free + tip | 4.2 (53) |
| [Shorts Blocker for YouTube](https://apps.apple.com/us/app/shorts-blocker-for-youtube/id6451330524) | macOS, iPhone, iPad | iOS $1.99; no IAP | one-time | 3.9 (135) |
| [Vinegar - Tube Cleaner](https://apps.apple.com/us/app/vinegar-tube-cleaner/id1591303229) | macOS, iPhone, iPad | iOS $1.99; no IAP | one-time | 4.2 (761) |
| [Baking Soda - Tube Cleaner](https://apps.apple.com/us/app/baking-soda-tube-cleaner/id1601151613) | macOS, iPhone, iPad | iOS $1.99; no IAP | one-time | 4.5 (100) |
| [DeArrow for YouTube](https://apps.apple.com/us/app/dearrow-for-youtube/id6451469297) | macOS, iPhone, iPad | iOS $1.99; no IAP | one-time | 4.4 (18) |
| [Hush Nag Blocker](https://apps.apple.com/us/app/hush-nag-blocker/id1544743900) | macOS, iPhone, iPad | iOS Free; no IAP | free (open source) | 4.4 (1,090) |
| [Wipr 2](https://apps.apple.com/us/app/wipr-2/id1662217862) | macOS, iPhone, iPad | iOS $4.99; IAP: Filtr $4.99; Filtr $24.99; Monthly Recurring Tip $1.99; Tip $4.99; Yearly Recurring Tip $9.99; Mega Tip $19.99 | one-time + optional add-on and tips | 4.7 (1,361) |
| [1Blocker: Ad Blocker](https://apps.apple.com/us/app/1blocker-ad-blocker/id1365531024) | macOS, iPhone, visionOS, iPad | iOS Free; IAP: 1Blocker Yearly $14.99; 1Blocker Monthly $2.99; Legacy Users $14.99; 1Blocker Lifetime $39.99; Legacy Users $2.99; Promo Offer (Sale E… | free + subscription / lifetime | 4.5 (12,964) |
| [AdGuard Ad Blocker for Safari](https://apps.apple.com/us/app/adguard-ad-blocker-for-safari/id1047223162) | iPhone, iPad | iOS Free; IAP: 1 Year Premium Mobile Ad Block $7.99; 1 Month Safe Mobile Ad Blocker $1.99; AdGuard Premium $19.99; AdGuard Premium $4.99; AdGuard: Mo… | free + subscription / lifetime | 4.3 (20,229) |
| [AdGuard: Ad Blocker for Safari](https://apps.apple.com/us/app/adguard-ad-blocker-for-safari/id1440147259) | macOS | Mac Free; IAP: Monthly subscription $4.99; Annual subscription $34.99 | free + subscription | none |
| [StopTheMadness Pro](https://apps.apple.com/us/app/stopthemadness-pro/id6471380298) | macOS, iPhone, iPad | iOS $14.99; no IAP | one-time | 4.73 (204) |
| [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) | macOS, iPhone, iPad | iOS Free; no IAP | free (open source) | 4.3 (191) |
| [Cascadea](https://apps.apple.com/us/app/cascadea/id1432182561) | macOS | Mac $2.99; no IAP | one-time | none |
| [Hyperweb](https://apps.apple.com/us/app/hyperweb/id1581824571) | iPhone, iPad | iOS Free; no IAP | free | 4.6 (1,482) |
| [Noir - Dark Mode for Safari](https://apps.apple.com/us/app/noir-dark-mode-for-safari/id1581140954) | iPhone, iPad | iOS $2.99; no IAP | one-time | 4.6 (1,366) |
| [Noir – Dark Mode for Safari](https://apps.apple.com/us/app/noir-dark-mode-for-safari/id1592917505) | macOS | Mac $3.99; no IAP | one-time | none |
| [Return Dislikes](https://apps.apple.com/us/app/return-dislikes/id6605923430) | macOS, iPhone, iPad | iOS Free; no IAP | free | 3 (4) |
| [Dislike Checker for YouTube](https://apps.apple.com/us/app/dislike-checker-for-youtube/id1627860091) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; no IAP | free (ads) | 3.4 (248) |
| [wBlock: Ad Blocker for Safari](https://apps.apple.com/us/app/wblock-ad-blocker-for-safari/id6746388723) | macOS, iPhone, iPad | iOS Free; no IAP | free (open source) | 4.8 (187) |
| [UnTrap for YouTube](https://apps.apple.com/us/app/untrap-for-youtube/id1637438059) | macOS, iPhone, iPad | iOS $4.99; IAP: Monthly $3.99; Yearly $35.99 | paid + subscription | 4.1 (519) |
| [YouTweak](https://apps.apple.com/us/app/youtweak/id6788401713) | macOS, iPad | iOS Free; no IAP | free | none |
| [Unwatched for YouTube](https://apps.apple.com/us/app/unwatched-for-youtube/id6477287463) | macOS, tvOS, watchOS, iPhone, visionOS, iPad | iOS Free; no IAP | free (open source) + optional Premium | 4.7 (438) |
| [Adblocker For YouTube Videos](https://apps.apple.com/us/app/adblocker-for-youtube-videos/id1621531549) | macOS, iPhone, iPad | iOS $2.99; IAP: premium $1.99 | one-time + premium IAP | 4.5 (1,647) |
| [SwizzTube: Video Ad Blocker](https://apps.apple.com/us/app/swizztube-video-ad-blocker/id6466721604) | macOS, tvOS, iPhone, iPad | iOS Free; IAP: Full Unlock – Small Donation $3.99; Full Unlock – Large Donation $9.99; Full Unlock – Medium Donation $5.99 | free + one-time unlock (donation tiers) | 4.6 (466) |
| [PiPifier](https://apps.apple.com/us/app/pipifier/id1234771095) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: Small Tea for the Developer $0.99; Large Tea for the Developer $2.99; Giant Tea for the Developer $4.99 | free + tip | 4.4 (325) |
| [Tube PiP](https://apps.apple.com/us/app/tube-pip/id6476895094) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: Annual Membership $14.49; Monthly Membership $3.00; Lifetime Membership $49.99 | free + subscription / lifetime | 4.6 (2,936) |
| [Vidimote for Safari](https://apps.apple.com/us/app/vidimote-for-safari/id1585702412) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 4.2 (66) |
| [yPlayer for YouTube](https://apps.apple.com/us/app/yplayer-for-youtube/id1586397529) | iPhone | iOS $1.99; no IAP | one-time | 4.1 (51) |
| [SponsorBlock port for Youtube](https://apps.apple.com/us/app/sponsorblock-port-for-youtube/id1532163541) | macOS | Mac Free; no IAP | free | none |
| [PocketTube Subscription Manage](https://apps.apple.com/us/app/pockettube-subscription-manage/id1475688814) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; no IAP | free | 3.3 (59) |
| [Turn Off the Lights for Safari](https://apps.apple.com/us/app/turn-off-the-lights-for-safari/id1273998507) | macOS, iPhone, visionOS, iPad | iOS Free; no IAP | free (open source) | 4.1 (59) |
| ["No Distractions" for YouTube](https://apps.apple.com/us/app/no-distractions-for-youtube/id1482507016) | macOS, iPhone, iPad | iOS $1.29; no IAP | one-time | 4.4 (29) |
| [BlockYT for Safari](https://apps.apple.com/us/app/blockyt-for-safari/id1575379461) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 4 (36) |
| [#blockit: Block Shorts & Reels](https://apps.apple.com/us/app/blockit-block-shorts-reels/id1492879257) | macOS, iPhone, iPad | iOS Free; IAP: Yearly $3.99; Monthly $0.99; Yearly + Family Sharing $7.99; Yearly (Existing User Only) $3.99 | free + subscription | 4 (169) |
| [No Shorts: Blocker for YouTube](https://apps.apple.com/us/app/no-shorts-blocker-for-youtube/id6502996298) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 4.5 (15) |
| [Mira - Focused Video Player](https://apps.apple.com/us/app/mira-focused-video-player/id6767721654) | macOS, tvOS, iPhone, iPad | iOS Free; IAP: Mira Premium Yearly $9.99; Mira Premium Monthly $2.99; Mira Lifetime $19.99 | free + subscription / lifetime | 4.4 (25) |
| [Custom Video Speed for YouTube](https://apps.apple.com/us/app/custom-video-speed-for-youtube/id6443640011) | macOS, iPhone, iPad | iOS Free; no IAP | free | 4.4 (7) |
| [Hover Speed for YouTube](https://apps.apple.com/us/app/hover-speed-for-youtube/id6778460443) | macOS | Mac Free; no IAP | free | none |
| [Better Player for Youtube](https://apps.apple.com/us/app/better-player-for-youtube/id1592876082) | macOS, iPhone, iPad | iOS Free; no IAP | free | 4.2 (12) |
| [Improved Tube](https://apps.apple.com/us/app/improved-tube/id1672777754) | macOS | Mac Free; no IAP | free (open source) | none |
| [Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id6738342400) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 3.1 (61) |
| [Dark Reader for Safari](https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180) | macOS, iPhone, iPad | iOS $4.99; no IAP | one-time | 4.3 (285) |
| [Focus - Userscripts & Player](https://apps.apple.com/us/app/focus-userscripts-player/id1631941898) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: Pro Lifetime $5.99 | free + one-time unlock | 4.7 (5,153) |
| [Pie Adblock for Safari](https://apps.apple.com/us/app/pie-adblock-for-safari/id6499055690) | macOS, iPhone, iPad | iOS Free; no IAP | free (ad/cash-back funded) | 4.7 (1,556) |
| [Ad blocker by Magic Lasso](https://apps.apple.com/us/app/ad-blocker-by-magic-lasso/id1260462853) | tvOS, iPhone, iPad | iOS Free; IAP: Pro Yearly (iOS) $29.99; Pro Yearly (iOS) $29.99; Pro Yearly (iOS) $29.99; Pro Monthly (iOS) $2.99; Pro Yearly (iOS) $29.99; Pro Month… | free + subscription | 4.2 (918) |
| [AdGuard Pro: Safari Ad Blocker](https://apps.apple.com/us/app/adguard-pro-safari-ad-blocker/id1126386264) | iPhone, iPad | iOS $9.99; no IAP | one-time | 4.4 (3,153) |
| [Picture in Picture for Safari](https://apps.apple.com/us/app/picture-in-picture-for-safari/id6755545186) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 5 (2) |
| [OverPicture for Safari](https://apps.apple.com/us/app/overpicture-for-safari/id1188020834) | macOS, iPhone, iPad | iOS $3.99; no IAP | one-time | 4.3 (12) |
| [Eightify for Safari](https://apps.apple.com/us/app/eightify-for-safari/id6448126776) | macOS | Mac Free; IAP: Eightify Pro - Monthly $4.99; Eightify Pro - Annual $49.99 | free + subscription | none |
| [Sink It for YouTube](https://apps.apple.com/us/app/sink-it-for-youtube/id6798803425) | macOS, iPhone, iPad | iOS Free; IAP: Micro Tip $2.99; Thoughtful Tip $4.99; Mega Tip $9.99 | free + tip | 5 (2) |
| [Smart Tube BDP](https://apps.apple.com/us/app/smart-tube-bdp/id6761388918) | macOS, tvOS, iPhone, iPad | iOS Free; no IAP | free | 3.8 (92) |
| [Red Crow For Safari](https://apps.apple.com/us/app/red-crow-for-safari/id6766324724) | macOS, iPhone, iPad | iOS $0.99; no IAP | one-time | none |
| [Auto HD + FPS for YouTube](https://apps.apple.com/us/app/auto-hd-fps-for-youtube/id1546729687) | macOS, iPhone, iPad | iOS Free; no IAP | free | 2.9 (35) |
| [AdBlock Pro for Safari](https://apps.apple.com/us/app/adblock-pro-for-safari/id1018301773) | macOS, iPhone, visionOS, iPad | iOS Free; IAP: 12 months $11.99; 1 month $1.99; 6 months $7.99; Lifetime $39.99; 3 months $4.99 | free + subscription / lifetime | 4.5 (74,358) |
| [Adblock Plus for Safari ABP](https://apps.apple.com/us/app/adblock-plus-for-safari-abp/id1432731683) | macOS | Mac Free; no IAP | free (Acceptable Ads) | none |
| [AdBlock for Safari & VPN](https://apps.apple.com/us/app/adblock-for-safari-vpn/id1402042596) | macOS | Mac Free; IAP: AdBlock VPN Yearly $39.99; AdBlock Gold $4.99; AdBlock VPN Monthly $3.99; AdBlock VPN Monthly $3.99; AdBlock VPN Yearly $34.99; AdBloc… | free + subscription (VPN) | none |
| [ProTube: Video Browser](https://apps.apple.com/us/app/protube-video-browser/id6748081431) | iPhone, iPad | iOS Free; IAP: Premium $0.99; Premium $5.99 | free + one-time unlock | 4.8 (15,722) |
| [YubePiP: PiP Browser & Tools](https://apps.apple.com/us/app/yubepip-pip-browser-tools/id1591269922) | iPhone, visionOS, iPad | iOS Free; IAP: Pro Lifetime $9.99; Pro Lifetime $7.99; Pro Lifetime $29.99 | free + one-time unlock | 4.5 (9,158) |
| [Video Lite](https://apps.apple.com/us/app/video-lite/id1598997500) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: Remove Ads (3 Months) $1.99; Remove Ads (1 Month) $0.99 | free, ad-supported + remove-ads | 4.8 (173,931) |
| [YouPlay: AdBlock Video Browser](https://apps.apple.com/us/app/youplay-adblock-video-browser/id6751497996) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: YouPlay Premium Lifetime $5.99; YouPlay Premium Monthly $1.99; YouPlay Premium Monthly $0.99; YouPlay Premium Yearly $5.99; YouPlay Pr… | free + subscription / lifetime | 4.7 (1,833) |
| [Ad Skipper for YouTube](https://apps.apple.com/us/app/ad-skipper-for-youtube/id1542270454) | macOS | Mac $1.99; no IAP | one-time | none |
| [Buddy for Youtube](https://apps.apple.com/us/app/buddy-for-youtube/id1232605621) | macOS | Mac Free; no IAP | free | none |
| [4Ktube Extension](https://apps.apple.com/us/app/4ktube-extension/id1462103187) | macOS | Mac $1.99; no IAP | one-time | none |
| [Channel Keeper for YouTube](https://apps.apple.com/us/app/channel-keeper-for-youtube/id6450510658) | macOS, iPhone, visionOS, iPad | iOS Free; IAP: Channel Keeper Premium $0.99 | free + one-time unlock | 5 (2) |
| [YT Shorts Blocker](https://apps.apple.com/us/app/yt-shorts-blocker/id6742193472) | macOS, iPhone, iPad | iOS $1.99; no IAP | one-time | 4.5 (2) |
| [CleanTube: Ad & Shorts Blocker](https://apps.apple.com/us/app/cleantube-ad-shorts-blocker/id6760742039) | macOS, iPhone, iPad | iOS $1.99; no IAP | one-time | 1 (1) |
| [ShortformBlock](https://apps.apple.com/us/app/shortformblock/id6761337873) | macOS, iPhone, iPad | iOS Free; IAP: Support Development $0.99 | free + tip | 4.4 (14) |
| [Disable Shorts for YouTube](https://apps.apple.com/us/app/disable-shorts-for-youtube/id6754694677) | macOS, iPhone, iPad | iOS $4.99; no IAP | one-time | 1 (1) |
| [ShortsBlocker - Remove Shorts](https://apps.apple.com/us/app/shortsblocker-remove-shorts/id6683306924) | macOS | Mac Free; IAP: ShortsBlocker Yearly Premium $19.99; ShortsBlocker Lifetime Premium $29.99; ShortsBlocker Monthly Premium $1.99 | free + subscription / lifetime | none |
| [Shortstop - Block Shorts](https://apps.apple.com/us/app/shortstop-block-shorts/id6741785614) | macOS | Mac Free; no IAP | free | none |
| [Simple Shorts Blocker](https://apps.apple.com/us/app/simple-shorts-blocker/id6761640934) | macOS, iPhone, iPad | iOS $0.99; no IAP | one-time | none |
| [Still: Reels & Shorts Blocker](https://apps.apple.com/us/app/still-reels-shorts-blocker/id6784061138) | macOS, iPhone, iPad | iOS Free; no IAP | free (account sign-in) | 1 (1) |
| [MeowTube: Shorts Blocker](https://apps.apple.com/us/app/meowtube-shorts-blocker/id6760180650) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: Pro – Monthly $3.99; Pro – Yearly $24.99 | free + subscription | 5 (1) |
| [Shorts Free: YouTube Focus](https://apps.apple.com/us/app/shorts-free-youtube-focus/id6796934892) | macOS, iPhone, iPad | iOS Free; IAP: Shorts Free Pro $1.99 | free + one-time unlock | none |
| [Focus mode for YouTube](https://apps.apple.com/us/app/focus-mode-for-youtube/id6758026862) | macOS, iPhone, iPad | iOS Free; no IAP | free (open source) | none |
| [FocusTube for Safari](https://apps.apple.com/us/app/focustube-for-safari/id6799667312) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: FocusTube Annual $2.99 | free + subscription (annual) | none |
| [Video Speed Control for Safari](https://apps.apple.com/us/app/video-speed-control-for-safari/id6756773806) | macOS, iPhone, iPad | iOS Free; IAP: SpeedMaster Pro Monthly $2.99; SpeedMaster Pro Yearly $19.99 | free + subscription | 4.1 (7) |
| [Fast Video Speed for Safari](https://apps.apple.com/us/app/fast-video-speed-for-safari/id6502541176) | macOS, iPhone, iPad | iOS $2.99; no IAP | one-time | 5 (1) |
| [Simple Video Speed Controller](https://apps.apple.com/us/app/simple-video-speed-controller/id6806633069) | macOS, iPhone, iPad | iOS Free; IAP: Standard Tip $2.99; Generous Tip $4.99; Small Tip $0.99 | free + tip (open source) | none |
| [ClipGlider-video speed control](https://apps.apple.com/us/app/clipglider-video-speed-control/id6446220573) | macOS, iPhone, iPad | iOS Free; IAP: 1 month $4.99; 1 year $34.99; 3 months $9.99; Premium forever $59.99; 6 monthes $17.99; 3 months $9.99; 1 month $4.99; 6 monthes $17.9… | free + subscription / lifetime | 3.3 (49) |
| [Stylebot](https://apps.apple.com/us/app/stylebot/id6821400927) | macOS | Mac Free; no IAP | free (open source) | none |
| [Autoscripts - Exec Userscripts](https://apps.apple.com/us/app/autoscripts-exec-userscripts/id6775431941) | macOS, iPhone, iPad | iOS $0.29; no IAP | one-time | none |
| [Looper & Replay for YouTube](https://apps.apple.com/us/app/looper-replay-for-youtube/id6449761600) | macOS | Mac $12.99; no IAP | one-time | none |
| [PiPifier (Mac listing)](https://apps.apple.com/us/app/pipifier/id1160374471) | macOS | Mac Free; IAP: Buy me a tea $2.99 | free + tip | none |
| [Vanced Tube-Block ads on video](https://apps.apple.com/us/app/vanced-tube-block-ads-on-video/id6773042646) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: Monthly $5.99; Weekly $1.99; Yearly $29.99 | free + subscription | 4.6 (221) |
| [Vdo Tube - No ads in video](https://apps.apple.com/us/app/vdo-tube-no-ads-in-video/id6747290963) | iPhone (iPad app on Apple-silicon Macs only) | iOS Free; IAP: Unlock Premium $7.99 | free + one-time unlock | 4.5 (734) |
| [App for YouTube ·](https://apps.apple.com/us/app/app-for-youtube/id6753933026) | macOS | Mac Free; IAP: Lifetime Access $29.99; Yearly Subscription $19.99 | free + subscription / lifetime | none |
| [SuperX - PIP Extension](https://apps.apple.com/us/app/superx-pip-extension/id6450839791) | iPhone, iPad (iPad app on Apple-silicon Macs only) | iOS Free; IAP: None Ad Feature $0.99; SuperX Lifetime $12.99; 12 months $14.99; 1 month $1.99 | free + subscription / lifetime | 4 (20) |
| [RYTD](https://apps.apple.com/us/app/rytd/id6463305263) | macOS, iPhone, iPad | iOS Free; no IAP | free | 2.3 (27) |
| [Dislike Checker for YouTube +](https://apps.apple.com/us/app/dislike-checker-for-youtube/id6741679691) | macOS | Mac Free; no IAP | free | none |
| [SocialFocus: Hide Distractions](https://apps.apple.com/us/app/socialfocus-hide-distractions/id1661093205) | macOS, iPhone, iPad | iOS $4.99; IAP: Monthly $3.99; Yearly $35.99; Lifetime $79.99 | paid + subscription | 4 (326) |
| [Ghostery AdBlocker for Privacy](https://apps.apple.com/us/app/ghostery-adblocker-for-privacy/id6504861501) | macOS, iPhone, iPad | iOS Free; IAP: Monthly donation $4.99; Medium monthly contribution $4.99; Small monthly contribution $1.99; Yearly donation $47.99; Small one-time co… | free + tip (donations) | 4.3 (209) |

## Summary

1. Already available: 30+ single-purpose Shorts/declutter extensions ($0.99-$4.99), SponsorBlock ($2.99), DeArrow ($1.99), Vinegar-style player cleaning with ad removal, PiP and audio-only ($1.99), speed and PiP tools (Accelerate, Vidimote, Custom Video Speed, PiPifier, OverPicture), dislike-count ports (Return Dislikes, RYTD), YouTube filters inside ad blockers (1Blocker, AdGuard, Magic Lasso, Pie, wBlock), userscript/CSS managers (Userscripts, Tampermonkey, StopTheMadness Pro, Stylebot, Cascadea), and stand-alone YouTube players bundling SponsorBlock, DeArrow and PiP (SwizzTube, Mira, Smart Tube BDP).
2. Missing: a mature, well-rated all-in-one (Enhancer for YouTube class) on iPhone, iPad and Mac; the closest are Red Crow (new, $0.99, 150+ settings, zero ratings) and Improved Tube (Mac only, free, 3.3 sample average); nothing works inside the YouTube app; no maintained, well-rated Return YouTube Dislike port (RYTD 2.3 stars, Return Dislikes 4 ratings); no Safari ad blocker with dependable YouTube blocking after the Oct 2026 breakage (1Blocker, Wipr 2, AdGuard, Magic Lasso all draw reports).
3. Common complaints: breakage after YouTube, Safari or iOS updates (YouTube-ad failures in 1Blocker and AdGuard, Dark Reader and Noir slowdowns after recent iOS/iPadOS updates, Shorts blockers that stop after layout changes); unclear setup ("followed the steps, nothing happens", expecting it to work in the YouTube app); Safari's "can read passwords and credit cards" warning; paywalls added after purchase (UnTrap, #blockit lifetime to subscription, SwizzTube, ShortsBlocker 2.0); abandoned or clone listings (Hyperweb, Buddy, SponsorBlock port, Cascadea).
4. iOS limits named by developers or reviewers: extensions run only in Safari, never in the YouTube app (SponsorBlock, Shorts Blocker, UnTrap, No Shorts, BlockYT listings); each must be enabled in Settings > Apps > Safari > Extensions with "All Websites" allowed; some fail in Home Screen or Dock web apps; AirPlay from player replacements can cast audio only (Vinegar, Vidimote); iPhone full screen hides extension overlays (Adblocker For YouTube Videos); YouTube no longer lets extensions press Skip, so Ad Skipper fast-forwards ads at 16x; Shorts need the desktop site on iPhone (Better Player); userscript managers lose scripts or need a directory on iOS; several tools are Mac-only (Improved Tube, Hover Speed, PocketTube, Ad Skipper).
5. Price norms: one-time $0.99-$4.99 for single-purpose extensions (33 one-time apps, median $2.99, most common $2.99 then $1.99), $14.99 only for StopTheMadness Pro; free tools are open source or tip-supported (wBlock, Userscripts, Accelerate with a $1.99 tip); subscriptions cluster on ad blockers, sync and AI ($0.99-$4.99 per month, $9.99-$35.99 per year, lifetime $19.99-$79.99) and draw the loudest backlash, while "one-time purchase" is itself a praised selling point (Shorts Blocker, Noir, Wipr).
