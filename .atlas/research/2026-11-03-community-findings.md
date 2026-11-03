# Community findings: YouTube browser extensions (Safari, macOS, iOS, iPadOS)

Date: 2026-11-03. Sources: forums, store reviews, issue trackers only (no video platforms).
Status: complete. All 31 queries processed; Reddit unreachable (see Access notes), so each Reddit-flavoured query was answered from non-Reddit forums, stores and trackers. Counting unit for rankings: one logged entry (thread, store review set or tracker) = one independent source.

## Query checklist

- [x] Q01 best youtube extension safari reddit
- [x] Q02 safari youtube extension like enhancer for youtube
- [x] Q03 enhancer for youtube review reddit
- [x] Q04 enhancer for youtube problems
- [x] Q05 sponsorblock safari reddit
- [x] Q06 return youtube dislike safari
- [x] Q07 youtube ad blocker safari 2026 reddit
- [x] Q08 youtube adblock detection safari
- [x] Q09 vinegar safari youtube reddit
- [x] Q10 tweaks for youtube safari
- [x] Q11 youtube background play iphone safari extension
- [x] Q12 youtube picture in picture safari ios extension
- [x] Q13 hide youtube shorts safari
- [x] Q14 youtube playback speed extension safari
- [x] Q15 unhook youtube review
- [x] Q16 df tube review
- [x] Q17 improve youtube extension review
- [x] Q18 youtube extension battery drain safari
- [x] Q19 youtube extension slow safari
- [x] Q20 HN: youtube extension
- [x] Q21 HN: sponsorblock
- [x] Q22 HN: dearrow
- [x] Q23 HN: return youtube dislike
- [x] Q24 HN: unhook
- [x] Q25 GitHub open issues: ajayyy/SponsorBlock (top 15)
- [x] Q26 GitHub open issues: Anarios/return-youtube-dislike (top 15)
- [x] Q27 GitHub open issues: ajayyy/DeArrow (top 15)
- [x] Q28 Enhancer for YouTube public feature requests / issue titles
- [x] Q29 Firefox AMO review text (enhancer, sponsorblock, RYD, dearrow, unhook)
- [x] Q30 App Store review RSS (Safari YouTube extensions)
- [x] Q31 Chrome Web Store review text (where reachable)

## Per-source log

### Access notes (logged 2026-11-03)

- Reddit: not reachable. WebFetch refuses old.reddit.com ("unable to fetch"); WebSearch rejects reddit.com as a domain; direct HTTP gets a login wall (302) or 403. Mirror and proxy routes were not used (blocked by the environment as bot-check circumvention). Subreddit coverage = none. Reddit-adjacent evidence below comes only from search-result summaries and non-Reddit forums.
- Reachable and used: HN Algolia API, Firefox AMO ratings API, GitHub REST API, iTunes RSS, Mozilla Discourse, gHacks, MacRumors, Apple Support Communities, AlternativeTo.

### Q01 + Q02 web search (best youtube extension safari / like enhancer for youtube)
- Source: WebSearch result summaries, 2026-11-03 (no Reddit threads surfaced).
- Enhancer for YouTube has no official Safari build; AlternativeTo lists Safari alternatives: Vinegar, Turn Off the Lights, Control Panel for YouTube, UnTrap for YouTube, Focus for YouTube.
- App Store listings seen: Improved Tube (250+ features, ads/PiP/60fps/dark mode/shortcuts), Clean YT for Safari ($2.99, blocks Shorts/comments/suggestions, 1 rating), PocketTube for Safari (free, subscription groups), Enhanced YouTube Safari Extension (visionOS-style UI; US listing unavailable).
- GitHub hobby projects exist for iOS Safari: IM-SPYBOY/YouTube-Enhancer (userscript via Stay for background play, PiP, ad removal, quality) and Dhruv11192/YouTubeAutoEnhancer (auto 4K, 1.5x, subtitle style) = unmet demand for an Enhancer-like Safari extension.

### Q03 + Q04 web search (enhancer for youtube review / problems)
- Source: WebSearch result summaries, 2026-11-03.
- AlternativeTo shows 5.0 from 4 reviews; note there says distribution paused after YouTube changes broke it fully on Firefox and partly on Chromium.
- Developer page lists known unfixable issues: volume booster mutes some codec combos until reload; wheel volume breaks with Logitech Smooth Scrolling; flip video fails in fullscreen on Chromium with hardware acceleration.
- gHacks (2025-08-18): Firefox version possibly discontinued because Mozilla review takes weeks while YouTube keeps changing. Threads to fetch next: Mozilla Discourse "Enhancer for YouTube is gone", AMO reviews.

### [Q03/Q04] Mozilla Discourse: "Enhancer for YouTube is gone" (Oct-Nov 2023)
- URL: https://discourse.mozilla.org/t/enhancer-for-youtube-is-gone/123749
- Praised: speed control, volume booster, video filters, fixed resolution, end-screen toggles. "Please put it back somewhere. Even if it works just a bit" (ln_de_troie).
- Pain: dev paused Firefox distribution because YouTube changes broke it; players showed YouTube's ad-blocker warning even with Enhancer's ad block off; users wanted a stated removal reason on AMO; workaround was sideloading an old version from Wayback.
- Wish: a named replacement ("kevinaosei asked for one"); uBlock Origin used alongside Enhancer with its ad block off.

### [Q03/Q04] Firefox AMO reviews, Enhancer for YouTube (API, 12,438 ratings; read 2026-11-03)
- URL: https://addons.mozilla.org/api/v5/ratings/rating/?addon=enhancer-for-youtube (score=1, score=2, newest pages)
- Breakage after YouTube changes is the dominant complaint: "No longer works after the latest YouTube UI update" (2026-10-25); "no longer hides shorts and it no longer keeps the video quality at my preferred setting" (2026-10-18); preferred resolution ignored (set 1440p, starts 720p, 2026-03).
- Specific bugs: cannot pause/click buttons unless reloaded (2026-11-02, 2026-10-23); speed override only works for first playlist item (2025-06); "triggers youtube's adblock detection" (2025-06); pauses every 10 to 20 s, maybe conflict with SponsorBlock (2026-08); disables autoplay fails and breaks subtitles (2026-09); CPU hog / slow page loads (2024-12, 2025-07); popup after every update can't be disabled (2026-01).
- Abandonment/update-lag complaints: "Hasn't been updated since 2024" (2026-01), stuck on 2.0.121 (2026-02), Firefox build lags Chrome build (2024-12, 2025-02).
- Feature requests seen: hide Shorts in notifications, turn off "Ask YouTube" AI, always-visible controls below player, hard refresh button, default audio track (never auto-translated), default subtitle/none, comments-button toggle, more compact right-side recommendations, backup import fails with "json outdated".
- Praise (4-5 star text): "Absolute Essential. Touching vanilla youtube has become hard after this extension" (2026-08); "This single-handedly is keeping me on this browser" (2026-08); custom themes; volume boost (also distorts on Linux Mint, 2026-08).

### [Q20] HN: "Show HN: Weedout - Safari extension that hides YouTube AI-labeled videos" (2026-09-01, 185 pts, 82 comments)
- URL: https://news.ycombinator.com/item?id=49528895
- Demand: hide AI-labeled ("Made with AI") videos; "Been waiting for something like this; YouTube's AI detection is wildly inaccurate and just clutters the feed" (haul_up); wish for the same on every site; wish for AI-voice detection (ungreased0675, karim79); a per-channel or invert filter (MarioMan made an inverted TamperMonkey script).
- Complaint on label: the AI label is coarse ("not all videos that have an AI title screen are slop", Schnitz); mislabels on legit channels (consumer451) -> users want report/override.
- Safari/pricing: priced at $1.99 for macOS; "Safari users are happy to pay a little money for an extension whereas most other browser users wouldn't" (adav); author: App Store submission "took 2x the time, hence the price", free to build on GitHub; "$100/year" Apple signing cited; skeptics ("Blows my mind if someone pays for that", ffsm8) vs ranger_danger surprised people pay for extensions at all; a Firefox port appeared the same week.
- Adjacent: shortless.app (Safari-only Shorts remover), YouTube app "Shorts feed limit 0 minutes" setting cited as native workaround.

### [Q09/Q20] HN: "Vinegar: Safari extension that replaces YouTube embeds with HTML5 video tags" (2021-11-28, 229 pts, 148 comments)
- URL: https://news.ycombinator.com/item?id=29374979
- Praise: "It just works!" (html5web); "so much faster and basic stuff like rotation ... now works smoothly" (TheTon); "Extremely useful on iPhones, iPads" (xyst); native HTML5 player gives PiP/fullscreen that YouTube's web player breaks on iOS.
- Wishes/gaps: missing YouTube keyboard shortcuts (j/k/l/m, arrow-key seek) (jiriro, 9935c101ab17a66); quality selection unclear, phone defaults to 360p (lelandfe); live-stream quality poor on macOS html5 player (xyst); "playback failed" errors and phone heating on iPhone 6S (busymom0).
- Safari-specific: permission warning "can read sensitive information" makes buyers wary (meemo); "embarrassing how many iOS extensions I have installed just to work around today's websites" (dmart) = users accept stacking small paid Safari extensions; fear of YouTube breaking it ("how long it lasts", TheTon).
- Pricing: meemo "Bought it and it looks greater" (then worried about permissions); vehemenz "I'd feel pretty good about paying the $5"; the ethics of ad removal dominates the rest of the thread (Orphis, rezonant argue it deprives creators).

### [Q21] HN: "SponsorBlock - skip sponsor segments on YouTube" (2024-08-12, 661 pts, 368 comments)
- URL: https://news.ycombinator.com/item?id=41222577
- Praise: "Youtube is not usable without adblocker and annoying without sponsorblock" (Always42); category-level control and channel whitelisting ("not as blunt a tool as people make it", wanderingmind); stack praised: "Firefox + ublock origin + this + enhancer for youtube = Youtube bliss" (heraldgeezer; he skips by clicking the button, not auto-skip).
- Wants/gaps: non-browser coverage (TV/consoles via iSponsorBlockTV, ReVanced, NewPipe forks, FreeTube) = users want it on every surface, mobile included; DeArrow and "Tweaks for YouTube" recommended as companions (nikisweeting: "totally transformed my watching experience").
- Complaints: segment mis-categorisation ("use the correct type", wruza); "skip to highlight" on music contested; creators conflicted about revenue (noone_youknow).

### [Q22] HN: "DeArrow - Solving clickbait on YouTube" (2023-06-22, 253 pts, 166 comments)
- URL: https://news.ycombinator.com/item?id=36437950
- Praise/wants: "Looks great", donation request (simlevesque); asks for ReVanced patch (mobile parity); want a Shorts filter too: "I'd like an extension which filters out all those Short-videos. No way to pause, no way to scroll" (qwertox).
- Concerns: using it may remove the user's own negative signal to the algorithm (0cVlTeIATBs); ML face/arrow detection suggested as better than crowd titles (hrdwdmrbl); skeptics say clickbait is in the video itself.
- Safari/iOS: user notes the YouTube "not interested" style option exists on desktop but "doesn't seem to be on iOS" (eddythompson80).

### [Q24] HN: "Unhook: Hide YouTube Recommendations" (2021-09-29, 181 pts, 122 comments)
- URL: https://news.ycombinator.com/item?id=28698979
- Praise: "I use it for 3 months and never wanted to turn it off" (tandav); "Tried it, works flawlessly" (deadalus); useful on mobile where YouTube pulls you away from the video (iansinnott).
- Complaints/wants: trust ("yet another extension going rogue and selling to some shady company", gruez) -> prefers an adblock filter list; others want recommendations kept, selective hiding (kbenson, debesyla); ask for the same on Apple TV/Android YouTube apps (nyjah); wants uBlock filter for comments/recommendations (michaelmdresser).

### [Q23] HN: "'Return YouTube Dislike' Chrome Extension Injecting Ads" (2025-10-24, 71 pts, 51 comments) + "Return YouTube dislike count" (2021-11-15, 130 pts, 92 comments)
- URLs: https://news.ycombinator.com/item?id=45696329 ; https://news.ycombinator.com/item?id=29227573
- 2025 thread: users report a full-page ad opening a new window and ads injected into YouTube by the extension; dev reply says the backend needs a ~15 TB database and paid features/ads cover costs. Reaction: "You gotta be a bit short sighted to imagine that the kind of people that would download an extension would accept ads" (ekjhgkejhgk). Firefox variant reportedly unaffected. Trust and monetization-by-ads is the sore spot.
- 2021 thread: strong emotional demand for the dislike count ("this really frustrated me and made me feel powerless", guerrilla); dislike data sourced from archived votes + extension users, not YouTube API.
- Self-built alternative suggested: write own few-line extension (QuadmasterXLII "removing youtube shorts is like five lines of code").

### [Q20] HN comment search: Safari + YouTube extension stacks (2023-2026)
- URLs: https://news.ycombinator.com/item?id=35854434 ; 39469716 ; 36682509 ; 39993566 ; 45177683 ; 47016443 ; 34377227 ; 38538236 ; 46051340
- Praise: "Using Vinegar + SponsorBlock makes safari YouTube incredibly usable. You get no ads, no sponsor messages, and Picture in Picture support" (2fast4you, 2023); "I find my consumption to be way down because the YouTube site is good, but not great, on Safari" (ar_lan, 2024); Vinegar recommended repeatedly for "Safari (mobile and desktop)".
- Gaps: "Youtube in safari is a little janky compared to the app" (fryman); hidden Shorts and community posts done by hand with Userscripts on Safari iOS (busymom0, 2025); Tampermonkey + "Trusted Type Helper" needed to inject CSS into YouTube, ported to Safari iOS via Userscripts (65, 2026-02); Mac Safari stacks Wipr+KaBlock+1Block plus TamperMonkey scripts since no uBlock Origin (csydas, 2023).
- Safari-specific breakage: "youtube videos stopped playing on Safari on my iPhone yesterday ... AdGuard (non-premium)" (everdrive, 2023-12); Firefox on Mac "still sluggish" vs Safari (crossroadsguy, 2024).

### [Q11] HN comment: background audio on iPhone Safari with an ad blocker (2025-11-26)
- URL: https://news.ycombinator.com/item?id=46051340 (comment by qwerpy)
- Workaround users rely on: "Safari and uBlock Origin lite ... play the video, switch back to the home screen. Video playback will stop ... swipe down ... Notification Center ... playback control for the browser. Press play. Audio resumes" (playlist advances automatically). No YouTube Premium, no desktop mode needed. Shows background play is a recurring Safari want and that the pause-on-leave default is real and works around only via Control Center.

### [Q25] GitHub: ajayyy/SponsorBlock, top open issues by reactions (413 open; read 2026-11-03)
- URL: https://github.com/ajayyy/SponsorBlock/issues?q=is%3Aopen+sort%3Areactions-%2B1-desc
- #403 new category for rapidly flashing content (epilepsy) 77 +1; #515 expand integration beyond YouTube 45; #649 hide sponsored comments and video descriptions 36; #546 Spoiler category 35; #1562 fallback server option 28; #538 visual segments (block social icons/intrusive overlays) 24; #1963 removal of AI-generated slop via community reporting 17; #1310 Loud Noises category 20; #1997 "skip once" per segment type 14; #711 Profanity segment; #631 creator crowdfunding link in popup; #543 after-sponsor buffering; #1096 "Potentially disturbing content"; #584 tell new users the hotkeys; #1086 audio warning category.
- Read: wanted = new segment categories (safety/spoilers/noise), fallback server (availability), per-skip control, AI-slop reporting.

### [Q26] GitHub: Anarios/return-youtube-dislike, top open issues by reactions (161 open; read 2026-11-03)
- URL: https://github.com/Anarios/return-youtube-dislike/issues
- #130 badge when creator shares private dislikes 44; #1274 "Not working anymore right now" (2026-04) 56; #452 k-anonymity 41; #56 creators submit private dislike counter 35; #344 privacy concern 28 (79 comments); #319 batch API requests; #1074 extension freezing YouTube pages (53 comments); #1287 dislike bar not visible in Firefox (2026-05); #462 publish to Edge Add-ons; #84 gather data from YouTube Studio; #363 dislikes on comments; #1103 not working (2024-11); #587 do not open release notes tab after update; #976 "re-format like numbers" breaks with rolling like-count experiment.
- Read: top pain is breakage after YouTube experiments, freezing pages, privacy/anonymity of requests, and unwanted release-notes tabs.

### [Q27] GitHub: ajayyy/DeArrow, top open issues by reactions (137 open; read 2026-11-03)
- URL: https://github.com/ajayyy/DeArrow/issues
- #39 support Piped/Invidious 47; #381 blank thumbnail when a user-submitted one exists 20; #92 disable DeArrow when playing playlists 14; #423 2.1.11 on Firefox causing slowdown (2025-10) 12; #85 change language; #58 move toggle button somewhere less obtrusive; #117 reformat playlist titles; #138 always generate random thumbnails; #248 make it work with Kagi search; #45 apply config to all subscribed channels; #232 show original and crowd title together; #378 nebula.tv; #525 title replacement not working on Shorts (2026-10); #34 title colour; #55 general web links.
- Read: wants are alternate frontends and per-context disabling; pain is slowdown and visible blank thumbnails.

### [Q25/Q26/Q27] GitHub Safari-tagged issues (search "safari", read 2026-11-03)
- SponsorBlock #2227 (open since 2025-03-25, 24 comments) "Safari 18.4+ SponsorBlock asks for permission causing Invidious support to be removed": "On almost every website i visit, SponsorBlock asks for permission." Maintainer: Safari bug where a background POST from any page triggers a permission prompt for the extension; filed WebKit bug 290508; user asks for a "deny sites not explicitly assigned" default, maintainer says that toggle only shows if the extension always asks for all sites. Source of lasting friction: Safari per-site permission prompts and optional-host-permission handling.
- Older SponsorBlock Safari issues: #827 "Safari extension doesn't show up in Extensions list" (41 comments), #943 "VideoID detection failing on Safari" (21), #1820 "not skipping sponsors the first time" (54), #2338 info-button crash (2025-09).
- DeArrow #206 "2nd row of thumbnails not displaying Safari MacOS" (25 comments, closed 2023-12); #137 gray boxes when thumbnail replacement disabled (open); #230/#391/#401 "stopped working after update" pattern (2024-2025).
- RYD: most-commented issues are all "not working after new YouTube UI" (#801, #791, #797, #905, #1103, #1274) = chronic breakage on YouTube changes.

### [Q30/Q05] App Store reviews: "SponsorBlock for Safari" ($2.99, 4.37 avg, 81 ratings, v6.1.6)
- URL: https://itunes.apple.com/us/rss/customerreviews/id=1573461917/sortBy=mostRecent/json (read 2026-11-03, ~58 reviews)
- Praise (Safari-specific): "Recently switched to Safari and didn't think twice about having to pay for it" (2026-09); "Makes YouTube usable on iOS ... This + Vinegar + Adblock is the best YouTube experience" (2026-04); "Combined with uBlock origin lite, this makes browsing YouTube exactly like the old days" (2026-04); "Happy to pay ... Even at 2.99 it's underpriced" (2025-12); "set & forget"; segments for new videos already marked within minutes.
- Complaints: stops skipping while still showing segments (2026-09, 2024-09); "Doesn't activate or stay active ... endlessly retries" on Safari (2026-08); "never works" (2026-04); conflicts with AdGuard's own media player: "either block ads or block sponsors" (2025-07); skips too aggressively mid-video (2024-02); unwanted green buttons beside the title (2024-01); "$3.99 down the krapper" (price was $3.99 before, 2024-11).
- Pricing signal: paying on Safari is accepted as "supporting the developer's servers" ("Help the developer pay for the servers and buy this!").

### [Q09/Q30] App Store reviews: "Vinegar - Tube Cleaner" ($1.99, 4.24 avg, 761 ratings, v3.5.4)
- URL: https://itunes.apple.com/us/rss/customerreviews/id=1591303229/sortBy=mostRecent/json (read 2026-11-03, ~100 reviews, 43 rated 1-3 stars)
- Praise: "Makes youtube tolerable"; "makes the web app version of YouTube actually usable"; "listed at a very fair price"; "Mandatory for YouTube"; maintained through YouTube/Apple changes ("keeps up with it", 2026-10).
- Complaints (iOS/iPadOS/macOS specific): PiP button disappears, possibly with uBO Lite (2026-10); AirPlay to Apple TV sends only audio, or plays 360p regardless of settings (2026-09); "On iPadOS the app's extension breaks YouTube controls: no fullscreen and no resolution selection. Disabling the extension on iPad also disables it across all my Apple devices" (2025-09); "bought it exclusively for the background audio play and it doesn't work" on iOS 26 (2025-09); giant/left-aligned subtitles on Mac (2026-06, 2026-10, 2025-09); overlay doesn't always activate (2025-09, 2026-05); permission "allow" buttons stay on screen (2026-05); audio defaults to muted/volume jumps after update (2026-05, 2026-10); update regressions ("updating this app has rendered it useless for me", 2026-09).
- Wants: YouTube Music support (2026-10), automatic max-resolution option (2026-09), finer speed steps than 0.5 (0.9/0.85/0.8) with a slider (2025-09), native SponsorBlock integration (2026-10), Liquid Glass UI (2026-05).

### [Q15/Q30] App Store reviews: "UnTrap for YouTube" ($4.99 + subscription for sync, 4.05 avg, 519 ratings, v12.4)
- URL: https://itunes.apple.com/us/rss/customerreviews/id=1637438059/sortBy=mostRecent/json (read 2026-11-03, ~100 reviews, 49 rated 1-3 stars)
- Praise: "Great at blocking shorts ... remove comments, homepage, recommended videos, playlists ... works amazing watching YouTube on Safari" (2026-09); "Get Control of Your Screen Time ... 'unplug' that system" (2026-10); big settings depth.
- Complaints: monetization pivot is the top 1-star theme: "pay $3 for the rest of your life" to sync settings between iPhone and Mac after paying $5 (2026-10); "paid for this app just for them to rug pool all features ... behind a subscription" (2026-09); "ads for another useless subscription" (2026-02); breakage: Shorts unremovable despite "all shorts off" (2025-12, 2026-02), "doesn't let me unsubscribe or mute YouTube channels" on iPadOS 27 (2026-09), "doesn't work consistently" (2026-10), session/timer lock bugs (2026-10), a "Most Relevant" comments toggle wanted.
- Wants: settings sync iPhone <-> Mac without a subscription (iCloud), restore "center video" layout, filtering that works for kids' content (keyword filter failed, 2026-09).

### [Q09/Q30] App Store reviews: "Baking Soda - Tube Cleaner" ($1.99, 4.49 avg, 100 ratings, v1.2.0)
- URL: https://itunes.apple.com/us/rss/customerreviews/id=1601151613/sortBy=mostRecent/json (read 2026-11-03, 31 reviews)
- Complaints: breaks other sites (ESPN, Amazon Photos, Facebook); no subtitles ("Bro please add subtitle support", 2026-04; 2024-09); permission alarm: "can access sensitive information from webpages, including passwords, phone numbers, and credit cards ... I might delete the extension just because of this odd permission" (2024-03).

### [Q15/Q30] UnTrap pricing backlash detail (same RSS, keyword filter on subscription/price, read 2026-11-03)
- Model history from reviews: one-time $4.99 app with free features (2025-08) -> "Pro" subscription (~$3/month, ~$36/year) gating features and sync (2025-10 onward) -> 1-star wave: "I bought this over a year ago wanting to support the developer b/c I used it for free on chrome ... $3 per month is a lot" (2026-07); "shows me ads for another useless subscription" and "injecting ads into every YouTube webpage ... genuinely malware (adware)" (2025-10); "lifetime purchase I paid for suddenly no longer applies" (2026-04, later fixed); "Paid for a year because of the Adblock, but the feature has been removed" (2025-08).
- Counter-signal: "No subscription. Just a one time purchase and those brain rotting shorts are gone 10/10" (2026-01); "Worth every penny"; "I'd pay $50 for this if I needed to" (2025-08); "most worthwhile purchase on the App Store ... On PC Desktop it takes an army of 9-10 Chrome extensions" (2026-07); "Fantastic App with Great Devs" for keeping up with YouTube changes.
- Syncing is the contested paid feature: users expect iCloud-based settings sync for free ("that tiny amount of data could be stored in iCloud that I already pay for", 2026-10).
- Permission wariness: "why does this extension need access to EVERY website" (2026-08).
- Top praised features: hide Shorts, hide recommendations on video page, redirect home to Subscriptions, greyscale, time limits, hiding subscriber counts/avatars ("reduce visual noise"), pair with ScreenZen for doomscrolling.

### [Q07/Q08/Q30] App Store reviews mentioning YouTube: "uBlock Origin Lite" (Free, 4.71, 978 ratings) and "Wipr 2" ($4.99, 4.68, 1361 ratings)
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=6745342698/sortBy=mostRecent/json ; .../id=1662217862/... (150 reviews each scanned for "youtube", 2026-05 to 2026-10)
- uBO Lite: split verdict. Praise: "blocks all of the YouTube ads" (2026-10); "does not significantly slow down page loading". Failures: "videos keep flickering between 0:00 and their actual length and never load" (2026-09); "youtube videos keep spinning and restarting. I don't think a good youtube adblock is possible with Safari restrictions so I use Brave" (2026-07); "YouTube seems mostly immune and have found ways around uBlock lite" (2026-06); "Youtube ads appear on Safari" (2026-05). Also a permission-fear review: "requests permission to access and modify all page contents. This app can leak your banking info" (2026-06).
- Wipr 2: "no pop-ups or any problems using YouTube" (2026-08) vs "constantly triggers YouTube's ad block detectors" on Mac Tahoe (2026-07), "does NOT work on YouTube" (2026-07, 2026-06); upsell friction: "They charge you $25 more to block ads on apps" (2026-07); "The price was great for what this does".
- Read: ad blocking on Safari for YouTube is perceived as unreliable and arms-race dependent; users leave for Brave or stack extensions.

### [Q30] App Store reviews mentioning YouTube: "AdGuard for Safari" (Free, 4.35, 20k ratings) and "StopTheMadness Pro" ($14.99, 4.73, 204 ratings)
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=1047223162/... ; .../id=6471380298/... (150 / 85 reviews scanned for "youtube")
- AdGuard: only 1 of 150 recent reviews mentions YouTube ("Amazing for YouTube"), but SponsorBlock reviews show AdGuard's own media player blocks SponsorBlock.
- StopTheMadness Pro: YouTube controls and ad skipping praised ("added YouTube controls ... well worth the price", 2024-03; "The ability to skip YouTube ads is amazing", 2023-12); feature request "an option to return the dislike count" (2026-05). Shows a $14.99 Safari utility with YouTube features is accepted by power users.

### [Q11/Q12/Q30] App Store reviews: "Tube PiP" (Free + subscription, 4.62, 2,936 ratings, v2.9.0) and "Improved Tube" (v4.1321)
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=6476895094/... ; .../id=1672777754/... (read 2026-11-03)
- Tube PiP (an iOS PiP / background-play YouTube player): "my most used app for YT" (2026-10); "Delete YouTube get this" (2026-10); "the subscription model is humane, unlike other alternatives" (2026-10); complaints: latest update broke video, audio mutes repeatedly, timestamps in description don't seek, app unresponsive daily, "Alarms are silenced if this app is running while they go off" (2026-10, alarms silenced while it runs in the background), and a former lifetime buyer: bought lifetime license "all invalidated" (2026-10, translated). Wish: "do not recommend" on community posts.
- Improved Tube (Mac/Safari extension): "No longer works in Safari" (2026-06); "90% of the others on the Mac App Store are ALL EXACTLY the same" (2026-03); extension enable loop ("everytime i try to open the app it says something about an extension", 2024-01); adblock claim "does not work" (2023-12); needs export data (2025-10); channel Blocklist button discoverability. Read: generic multi-feature Safari extensions have poor trust; users distrust listings.

### [Q07/Q08] MacRumors: "Safari AdBlock not working anymore" (Mar 7-12, 2025)
- URL: https://forums.macrumors.com/threads/safari-adblock-not-working-anymore.2452478/
- "None of the AdBlockers I've tried work anymore on Safari" (iHorseHead, 2025-03-07), still seeing YouTube ads; AdGuard for Mac (paid) "works fine ... But don't expect perfection with Youtube" (gilby101); Adblock Plus "works just fine" (chevyboy60013).
- Pricing/trust pain: "I already paid for AdBlock Pro though" (iHorseHead) after it stopped working; AdBlock Pro shipped an update claiming "updated YouTube ad-blocking".

### [Q07/Q08] MacRumors: "Does AdGuard or other ad blocker for Safari block YouTube ads these days?" (Jun 24, 2024)
- URL: https://forums.macrumors.com/threads/does-adguard-or-other-ad-blocker-for-safari-block-youtube-ads-these-days.2429942/
- Split reports: "I use AdGuard and never see ads on mobile or desktop Safari" (boss.king) vs "I have all seven AdGuard extensions enabled in desktop Safari and none of them block YouTube ads" (GimmeDatApple); Vinegar recommended as "Works on macOS, iOS and iPadOS" but BotchQue/BeatCrazy say it "no longer works for me (latest OS, Safari)"; SwizzTube used as a Vinegar replacement ("a bit kludgy").
- "This is an ongoing quiet tit-for-tat war between YourTube and the ad blocker devs" (mblm85). Blank video placeholders during ads that need a refresh. Lifetime AdGuard licence ~$15 praised; nobody complained about price.

### [Q07/Q08] MacRumors: "Which ad blocker are you using on Safari?" (Aug 7-8, 2024)
- URL: https://forums.macrumors.com/threads/which-ad-blocker-are-you-using-on-safari.2433152/
- Users stack AdGuard + AdGuard Extras + User Scripts extension, plus "Vinegar with SponsorBlock for YouTube"; "YouTube ads are now built into the video stream" so extension-only blocking is partial; "The free adblockers are better than nothing but can't block all ads" (gilby101). Trust/privacy of blocker vendors and business models questioned. Full AdGuard app ~200-300 MB RAM noted (performance remark).

### [Q10/Q13/Q14] Web search: Tweaks for YouTube / hide Shorts / playback speed on Safari (2026-11-03)
- Tweaks for YouTube (inzk.dev, 100+ features) has no Safari build (Chrome, Firefox, Edge only), yet HN users call it transformative: "totally transformed my watching experience" (nikisweeting, HN 41222577) = unmet Safari gap.
- Safari Shorts blockers on the App Store: No Shorts (open source), BlockYT for Safari (needs YouTube login on iPhone), Shorts Blocker ($0.99), Disable Shorts for YouTube ($4.99), CleanTube (also ads), Eat the Shorts, Nope (free). All only work on youtube.com in Safari, not in the YouTube app.
- Speed controllers on Safari: Accelerate for Safari (open source), Custom Video Speed for YouTube (free, 0.1x-8x, default speed), Speed Player for Safari, Fast Video Speed for Safari ($2.99, 0.1x-16x). Crowded and cheap category.

### [Q13/Q14/Q30] App Store reviews: BlockYT for Safari (Shorts/recs blocker), Accelerate for Safari (speed), Custom Video Speed for YouTube
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=1575379461/... ; id=1459809092 ; id=6443640011 (read 2026-11-03)
- BlockYT: "Blocked the addictive recommendations ... successfully" (2025-06); wishes: block specific channels from recs/search (2026-03), separate toggle for comments ("Comment sections are as equal of a problem as shorts", 2024-12); breakages after YouTube web changes ("Google likely modified the YouTube website so now it blocks all videos on the main feed", 2024-10); parents want child-safe use (kids' recommendations).
- Accelerate: "Do not update to v 4.2.4 ... doesn't work consistently on YouTube" (2026-02); wants the extension icon click to open settings (2026-08); "A Bit Confusing" onboarding (2026-02).
- Custom Video Speed: onboarding friction is the main gripe: "Works on iphone ... You have to enable and know how to access it (via the little puzzle piece icon in address bar)" (2025-01); "installed it, allowed it, enabled it but I don't see any options on YouTube" (2024-04); default speed not saving (2026-08); language learners want presets 0.80/0.85/0.90/0.95 (2023-11) and spot speeds finer than YouTube's step.

### [Q11/Q12/Q30] App Store reviews: Safari PiP helpers (PiPHelper, yPlayer for YouTube, Picture in Picture for Safari)
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=1593160710/... ; id=1586397529 ; id=6755545186 (read 2026-11-03)
- Picture in Picture for Safari (macOS ext., v1.0.6): "Works on YouTubeTV when nothing else does ... Worth the money" (2026-05); user built a YouTube "app" via Safari "Add to Dock" and the PiP extension works inside it (2026-09); regression: "I just upgraded to macOS 27, and the extension doesn't seem to work at all" (2026-09).
- PiPHelper: privacy backlash: "PRIVACY NIGHTMARE ... collects datas that identifies you and shares them to third parties" (2023-01).
- yPlayer (wrapper app, $1.99 no ads): 2026-03/05 wave of "tapping on a video no longer opens it"; earlier "Does not keep you logged in. Does not resume videos" (2024-06). Read: wrapper players are fragile to YouTube changes; extensions on real Safari are what users prefer.

### [Q05/Q29] Firefox AMO reviews: SponsorBlock (4.81 avg, 3,244 ratings, ~816k users)
- URL: https://addons.mozilla.org/api/v5/ratings/rating/?addon=sponsorblock (score filters; read 2026-11-03)
- Praise: "YouTube is basically unwatchable without this add-on" (2026-10); "Just as essential as an ad-blocker" (2026-08); "Free YouTube Premium if used alongside uBlock Origin" (2026-10).
- Complaints: server-side: submissions blocked ("mass spam attack ... restricting submissions", 2026-07), segments not loading on popular videos (2026-06), "No longer retaining segments" (2025-12); UX: whitelist/channel-skip removed or broken ("Bring whitelist back", 2025-12; "Need white list for specific channels so bad", 2025-12); changes caption language to Arabic (2026-09); terms-of-service/data-consent friction (2026-09); lost submission work, can't store locally (2026-06); UI "not very good-looking" (2026-11); Android Firefox "blocked 0" (2026-10); YouTube Music console errors on Zen (2026-06).

### [Q06/Q23/Q29] Firefox AMO reviews: DeArrow (3.98 avg, 396 ratings) and Return YouTube Dislike (4.46 avg, 5,339 ratings)
- URLs: https://addons.mozilla.org/api/v5/ratings/rating/?addon=dearrow ; ?addon=return-youtube-dislikes (read 2026-11-03)
- DeArrow monetisation backlash: ~$1 "soft paywall" with 6-hour trial and missing activation button -> "replacing one annoyance with another" (2026-07); "predatory ... monetization strategy of promising to be free while its not" (2026-04); "Awkward semi-paid scheme, especially for a crowdsourced project" (2025-07); defenders say "you don't actually have to pay. just click 'I can't/won't pay'" (2026-09), so the real failure is unclear messaging. Quality: crowd titles "verbose / useless or don't change at all" (2025-03), breakage after YouTube layout changes (2026-02, 2025-10: toggle button moves), emoji removal fails (2026-05), blocked video loading at times (2026-09). Praise: "up there with Sponsor block and UBlock Origin" (2026-06); "Makes the YT experience less noisy" (2026-10).
- RYD privacy/ads backlash (peak 2026-09 to 2026-11-02): Mozilla's new permission labels (browsing activity, website content, PII) caused a 1-star wave: "requesting permissions to see my browsing? GOODBYE" (2026-11-02); "Used to be great, now is yet another data miner" (2026-09); also "intrusive ads to buy premium ... pop-up ads for patreon" (2026-11-02); defenders: "it's just a change on how Mozilla defines these permissions" (2026-11-02). Dev replies copy-pasted per review; users ask for the explanation in the listing description. Feature wish: show whether you disliked the video (2026-09).
- Lesson: permission wording + monetisation nags destroy ratings faster than bugs.

### [Q15/Q17/Q29] Firefox AMO reviews: Unhook (4.63 avg, 1,201 ratings, ~170k users) and Improve YouTube! (4.28 avg, 907 ratings, ~101k users)
- URLs: https://addons.mozilla.org/api/v5/ratings/rating/?addon=youtube-recommended-videos ; ?addon=youtube-addon (read 2026-11-03)
- Unhook praise: "A game-changer for my focus and productivity" (2026-09); hides algorithmic feeds so YouTube is usable for focus; wants hide-recommended without leaving dead space on the right (centered video, 2026-09), hide the "playables" section (2026-05), sidebar/comments/Shorts options on mobile (2026-05).
- Unhook complaints (abandonment dominates): "Not updated in two years, likely abandoned" (2026-03); "partially stopped working in November 2025 ... UnTrap for YouTube [is] the most up to date" (2026-02, a Safari-relevant competitor named by users); "functionality is breaking more and more as YouTube changes"; end-card and end-of-video recommendations not hidden after new UI (2025-11); "Hide explore" also hides History/Playlists (2025-11); playback freezes, fullscreen/pause broken (2026-10, 2026-07); not open source -> trust (2026-04); "Feels like the end of an era of peak YouTube extensions" (2026-02).
- Improve YouTube! praise: stops autoplay ("Only working Stop-YouTube-Autoplay addon in July 2026"), turn off Mixes on music videos, loop videos with the screen off on Android (background play), themes, grid size.
- Improve YouTube! complaints: settings not retained across loads (2026-03); half of options not working (2026-05); mobile doesn't work (2026-07); extremely laggy / CPU +30-40% right after install (2026-03, 2025-06); triggers YouTube's adblock detector (2025-06); playback stops on tab switch (2026-06); channel blocking ineffective (2026-09); wants reverse-playlist button, save/export options, stop button, separate grid sizes for Shorts vs sidebar, remove Mixes.

### [Q16/Q29] Firefox AMO reviews: DF YouTube (Distraction Free) (4.56 avg, 267 ratings, ~9.9k users) and Control Panel for YouTube (4.54 avg, 194 ratings, ~62k users)
- URLs: https://addons.mozilla.org/api/v5/ratings/rating/?addon=df-youtube ; ?addon=control-panel-for-youtube (read 2026-11-03)
- DF YouTube: since 2025-06 a wave of "this extension triggers YouTube's anti-adblock banner" (at least 9 independent reviews through 2026-10); "Warning! Installing this extension trigger youtube's anti-adblock detection ... I recommend unhook" (2025-08); core praise remains strong: "gave me back hours of my life and helped me break years of bad internet habits" (2025-07); wish for the same on Facebook, Instagram and Reddit feeds (2025-07).
- Control Panel for YouTube: praise for mobile support, "Subscriptions redirect", the "not interested" timer, "default settings are pretty thoughtful" (2026-10); complaints: defaults change between updates without telling users (2026-10), settings revert to default each Firefox start (2026-10), "Way too many things enabled by default" (2026-06), GPU 0-100-0 spikes and lag (2026-05, 2025-01), stuck-on-ads playback (2026-09), "experiencing interruptions" popup returns (2026-10), bloated dropdown (2026-09); wants "hide channel" for Shorts because "youtube's 'don't recommend channel' simply doesn't work" (2026-11).

### [Q03/Q04/Q31] Chrome Web Store reviews: Enhancer for YouTube (4.5 avg, 17.6K ratings, 1M users)
- URL: https://chromewebstore.google.com/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle/reviews (read 2026-11-03; reviews dated 2026-10-25 to 2026-11-03)
- Breakage after YouTube's refreshed interface: "needs an update" (2026-10-31); "Convert Shorts option no longer works after YouTube changed how Shorts URLs are handled" (2026-11-01).
- Wants: restore dislikes and default auto-dubbed audio to off (2026-10-26); auto-subtitle language option; closed-caption settings (2026-11-03); backward/forward seek via mouse/keyboard (2026-10-29).
- Praise: "Best tool for YouTube" (2026-10-25); "makes browsing YouTube easier".

### [Q18/Q19] MacRumors: "iOS Safari CPU usage going crazy when e.g. watching YouTube" (Jun 6-7, 2025)
- URL: https://forums.macrumors.com/threads/ios-safari-cpu-usage-going-crazy-when-e-g-watching-youtube.2458296/
- iPhone 16e: "The phone gets VERY hot when I watch a YouTube video" and "burns through battery power at about 1% per minute" (motrek); on M1 Pro Mac "up to 250%" CPU in Safari and Chrome; replies blame YouTube's anti-ad-block overhead ("even without extensions", HouseLannister) and suggest the YouTube app; Low Power Mode helped only slightly. No confirmed fix.

### [Q18/Q19] Apple Support Communities: "Fast battery drain when running YouTube in Safari on MBP" (Dec 2017, 92 "me too")
- URL: https://discussions.apple.com/thread/8196494
- ~1% battery per 1.5-2 minutes of playback and ~2% per 10 minutes idle on a YouTube tab; Apple's specialist advised disabling Safari extensions and re-enabling one by one. Dated (2017) but shows the standard support reflex of blaming extensions first, which affects trust in any YouTube extension that adds DOM work.

### [Q28] GitHub: Enhancer for YouTube issue tracker
- Enhancer for YouTube is closed source (mrfdev.com); no public GitHub issue tracker found (repo search returns only unrelated projects). Used instead: Chrome Web Store and AMO review text (see entries above).
- Adjacent iOS signal: dayanch96/YTLite ("A flexible enhancer for YouTube on iOS", 5.6k stars) and MiRO92/uYou-for-YouTube (2.6k stars) are sideloaded tweaks for the YouTube app = proof of iOS demand for Enhancer-class features outside Safari.

### [Q28] GitHub: dayanch96/YTLite (iOS tweak for the YouTube app; 598 issues, top by reactions, read 2026-11-03)
- URL: https://github.com/dayanch96/YTLite/issues
- Most-wanted (open/closed): #372 disable auto translations (auto-dubbed audio/titles) 26 +1; #664 remove AI summary in feed 21; #575 disable AI video overview and #586 disable AI features; #146 add DeArrow 14; #334 AirPlay not working; #690 server-side ad patch 73 comments; playback failures after YouTube updates (#595, #670, #796). Read: iOS users want "turn off YouTube's AI/auto-translate stuff", DeArrow, reliable AirPlay, and ads gone; everything breaks on each YouTube app update.

### [Q20] HN: "FocusTube: A Chrome extension that hides YouTube Shorts" (2025-10-23, 300 pts, 210 comments)
- URL: https://news.ycombinator.com/item?id=45687227
- Strong Shorts-hate: "nothing more infuriating than an app (which you pay a subscription for) gaslighting you into feeding you more slop even if you click 'i dont want to see this' a thousand times" (thousand_nights); wants it "for the app" (siavosh); Brave users use the "YouTube Anti-Shorts" filter list; others redirect /shorts/ URLs to /watch for a normal player (freehorse); Shorts disappear when watch history is off (wilsonnb3, sevenf0ur).
- Mobile-web workaround: "YouTube has gotten so bad recently, I started to watch it in Firefox mobile ... Tampermonkey with GoodTube ... blocks ads, removes Shorts" (amanzi). Premium payers also want Shorts gone (al_borland).

### [Q10/Q20] HN: "Show HN: Control Panel for YouTube" (2024-03-07, 111 pts, 51 comments) - has an App Store Safari build
- URL: https://news.ycombinator.com/item?id=39627895
- Safari onboarding pain from a buyer: after buying on the Mac App Store "1. Restart Safari 2. Activate the plugin 3. Add the button to the toolbar and click it once. Only after this did it function" and options are cut off in the popup (carlosjobim); author: "Both of the FAQs currently on the site are variations on 'why does it not work in Safari?'" and extensions don't run in home-screen PWAs, so users must make a Shortcut (insin).
- Wishes: full-size player by default (Saris); per-channel playback speed (starik36); hide videos by keyword ("Minecraft", "MrBeast", aantix); fix Watch Later playlist problems (quaunaut); default hides live-stream play controls (anigbrowl); interplay with Enhancer for YouTube noted.
- Motivation: "start using the website instead of FreeTube and thus distribute my juicy subscription money to the creators" (carlosjobim) = extensions keep creators paid vs. alternative frontends.

### [Q11/Q20] HN: "YouTube blocks background video playback on Brave and other browsers" (2026-01-31, 204 pts, 199 comments)
- URL: https://news.ycombinator.com/item?id=46834441
- Background play is wanted without Premium: "Imagine trying to take a basic browser function we've all taken for granted for decades and attempt to paywall it" (hsbauauvhabzb); workarounds named: PiP windows, dragging the tab into its own window, NewPipe/Tubular/PipePipe/Grayjay on Android, Firefox + background-play and SponsorBlock extensions "still work" (stevenhuang), Safari + AdBlock on an old iPad "handles Youtube's website very well" (ssl-3).
- Idea: "positive if browsers (extensions?) allow the ability to spoof visibility by site" (xnx). Risk: YouTube actively detects page visibility, so background play features are an arms race.
- Premium economics aired: "If people had an option to buy an ad-free subscription with none of the other premium features for $1/mo, uptake would be significantly higher" (anonymous908213).

### [Q11/Q12] MacRumors: iPhone/iPad YouTube background play and PiP threads (2021-2024)
- URLs: https://forums.macrumors.com/threads/keep-youtube-playing-in-the-background-on-your-iphone.2446457/ (Dec 31, 2024) ; .../how-to-keep-listening-to-youtube-in-the-background-or-with-iphone-locked.2414883/ (Dec 28, 2023) ; .../does-picture-in-picture-still-exist-for-youtube-on-iphones-without-youtube-premium.2326339/ (Dec 2021)
- Methods people use: Vinegar ("strip ads but also allow PIP/background play on YouTube.com in Safari", brofkand), PiPifier extension (free) then lock the phone, the Control Center play-button trick after PiP/lock, Brave, Edge, sideloaded uYouPlus; "the only downside is that it doesn't remember where you were" and scrubbing can crash the page (ghostface147).
- Wants: background play and PiP without Premium: "I just wanna view YouTube videos whilst I'm doing other stuff on my phone, without having to pay for YouTube premium" (HappyDude20, 2021); "Why is YouTube allowed to lock basic OS API features like this?" (thingstoponder).
- Fragility: "Now YouTube will patch it because it became public knowledge" (HQuest, 2024); extra tap on "AA" icon needed on iOS 15.
- Pricing anchors: Premium seen as worth it by some ("ad-free and background play/picture-in-picture and YouTube Music"); "I would be okay with a few dollars a month to remove ads" but not $14 (dkh587); Verizon add-on $10/month; Vinegar called "much cheaper than paying premium".

### [Q05/Q15/Q31] Chrome Web Store reviews: SponsorBlock (4.6 avg, 3.5K ratings) and Unhook (4.9 avg, 4.6K ratings)
- URLs: https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone/reviews ; https://chromewebstore.google.com/detail/unhook-remove-youtube-rec/khncfooichmfjbepaaaebmommgaepoid/reviews (read 2026-11-03, reviews 2026-09-30 to 2026-11-02)
- SponsorBlock: praise = smooth skipping ("may not notice a sponsor segment was cut"), easy contributing, reliability; complaint = unclear instructions for skipping a specific ad ("About as Straight Forward as Quicksand!", 2026-10-31); request = allow longer submitted segment length (2026-09-30).
- Unhook: praise dominated by distraction reduction ("surf youtube without screwing your dopamine", 2026-11-02; a student who must open YouTube constantly, 2026-10-28; found via Reddit); requests: selective hiding so the new Gemini/"Ask" sidebar stays visible (2026-11-01), let users watch a Short without being able to scroll to the next (2026-11-01).
- (An Improve YouTube! CWS fetch hit the wrong extension and was dropped, not logged.)

### [Q01/Q05/Q06/Q30] App Store reviews mentioning YouTube: "Userscripts" (Free, 4.32, 191 ratings) and "Stay for Safari"/"Hush"
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=1463298887/... ; id=1591620171 ; id=1544743900 (read 2026-11-03)
- Userscripts users bolt on YouTube features by script: "My favorite use case is to add the dislike button back to YouTube ... install returnyoutubedislike ... copy paste just the javascript" (2025-08); "Finally bye bye youtube ads" (2025-01); "Make YouTube allow downloads and Picture-in-Picture mode" and "YouTube html5 player" (2022); one user found the dislike numbers "not accurate" for their own channel (2024-07).
- Read: a segment of Safari users self-assembles YouTube features with userscripts; an all-in-one extension replaces that stack. Hush failed to auto-decline YouTube consent (2023-06).

### [Q13/Q09/Q30] App Store reviews: Shorts Blocker for YouTube ($1.99, 3.93 avg, 135 ratings), SwizzTube (free->paid), Dislike Checker for YouTube (3.42 avg, 248 ratings)
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=6451330524/... ; id=6466721604 ; id=1627860091 (read 2026-11-03)
- Shorts Blocker: "One time buy: Others are moving to a scummy subscription model. I'll gladly pay 3-5 bucks for something once, but never a subscription" (2026-09); "I am freeeeee" (2026-07); instructions confusion: "Please explain how to use it" (2026-10); parent wants kid-safe blocking and says it "does nothing" on some channel pages (2026-07).
- SwizzTube (Vinegar-style player/ad blocker): free-to-paid flip drew 1-star wave: "After a few days of 'free' use, I cannot even use it anymore. I only get the pay popup" (2026-10); "You took away backround play and ask for money" (2026-10); "Making something that was free payed after years of free use?" (2026-07); also paused videos auto-resume on rotate/minimise/lock (2026-03). Praise: "doesn't play ads or sponsor segments" (2026-09).
- Dislike Checker (web lookup app, not an extension): mostly "doesn't work", "doesn't show valid likes"; shows users want dislikes in-page, not via a URL-paste lookup.

### [Q10/Q13/Q30] App Store reviews: "Control Panel for YouTube" Safari build ($3.99, 3.67 avg, 9 ratings, v1.34.0), EXTENSION.app (PiP, 4.64 avg, 4,957 ratings), Turn Off the Lights for Safari
- URLs: https://itunes.apple.com/us/rss/customerreviews/id=6478456678/... ; id=1533525753 ; id=1273998507 (read 2026-11-03)
- Control Panel (Safari): "Worth every penny": force theater mode by default and stretch the video to fill the Safari window (not fullscreen) (2026-02); "resolves almost everything that I complained about Youtube" (2026-06); "won't use YouTube without it" (2025-09); algorithmic short-form removal praised (2024-10). Bugs: videos-per-row option labels broken and "breaks if you want to show shorts as well" (2026-03); hide-comments not working (2025-06); "Stopped working ... no option to sort by date" after a YouTube change (2026-02, "Waste of $$").
- EXTENSION.app: "plays without ads, also in the background, picture-in-picture, or with the screen off and locked" (2026-07); but a UI change drew "Please revert back to previous version" (2025-05) because the share-sheet "PiP this video" button moved into the app; "Picture Mix" multi-video PiP praised (2026-01).
- Turn Off the Lights (Safari): low-engagement reviews; one complaint that dimming reverts on any click (2026-08).

### [Q03/Q04] Mozilla Discourse (page 2) and AlternativeTo: "Enhancer for YouTube is gone"
- URLs: https://discourse.mozilla.org/t/enhancer-for-youtube-is-gone/123749?page=2 ; https://alternativeto.net/software/tube-enhancer/about/ (read 2026-11-03). gHacks article fetch returned HTTP 403 twice: skipped.
- Discourse: users still hit YouTube's ad-block warnings with Enhancer installed ("Youtube videos are stopped with a warning that my Adblocker is on", Dec 2023; "violating youtubes terms of service", Dec 2023); "this extension has always been somewhat buggy on Firefox" (tuk, Jan 2024); per-tab playback control valued ("when you open a new tab, the old one plays but if I play the new tab the old pauses", Shrapnel).
- AlternativeTo (4 reviews): "Very lightweight and VERY reliable!" (2026-02); "Won't use YouTube without it to prevent distractions" (2023-07); availability note: dev paused distribution because YouTube changes broke Firefox fully and Chromium partly, and asked people not to request a release date.

### [Q18/Q19] Apple Developer Forums: "Safari web extension service worker not working after a minute" (iPad 7th gen, iPadOS 17.4.1; Apple reply Feb 2025)
- URL: https://developer.apple.com/forums/thread/774868
- In-page extension widget "appears ... but disappears after a couple of refreshes" because the background service worker is killed and never answers content-script messages; Apple: "iOS 18 and later included fixes to improve the reliability of background scripts." User-visible effect = extension features silently vanish on iPad until reload; no workaround documented.

### [Q01] Apple Support Communities: iPadOS Safari extensions won't enable (Jan 19, 2024)
- URL: https://discussions.apple.com/thread/255424553
- "Safari extensions are still fairly limited on iPadOS" and "Not all extensions that work on Mac Safari are supported"; standard fix is toggle off/on in Settings > Safari > Extensions, update, reinstall, disable other content blockers; some users see extensions greyed out.

### [Q21] Lobsters: "SponsorBlock - Skip sponsorship segments of YouTube videos" (Aug 2019)
- URL: https://lobste.rs/s/p0iejl/sponsorblock_skip_sponsorship_segments
- Early reception: "works great"; concerns that Google can defeat it and creators will be upset; "useless for anyone using mobile clients" (skrzyp, 2019-08-24). No Safari/iOS mentions then.

### [Q05/Q20] HN comment search: SponsorBlock on Safari/iOS (2022-2026)
- URLs: https://news.ycombinator.com/item?id=48970894 ; 44198176 ; 30149800 ; 46453950
- "SponsorBlock has a native Safari/iOS extension that works fine" (Cyberdog, 2026-07); "works quite well. Doesn't block ads though" (xmodem, 2025-06); "I have an iPhone now and miss Firefox for Android (with Ublock, sponsorblock, etc)" (idonotknowwhy, 2026-01) = iPhone users feel the extension gap versus Android Firefox.

### [Q11/Q12/Q07] MacRumors: "YouTube Bringing Free Picture-in-Picture to iPhone Users Outside the U.S." (Apr 29, 2026)
- URL: https://forums.macrumors.com/threads/youtube-bringing-free-picture-in-picture-to-iphone-users-outside-the-u-s.2481703/
- YouTube says PiP on iPhone/iPad goes global "in the coming months": free for long-form non-music; Premium Lite same; Premium adds music. Reactions: "Locking a basic feature that's built into the OS behind a paywall is disgusting" (Radeon85); "If it's a video, then I just use a Safari plugin to break Google's breaking of PIP" (rjp1); "You can use a content blocker to allow PiP and therefore background playback already in browser for YT" (QuarterSwede); several prefer the browser with uBlock Origin, 1Blocker, Wipr over the app; Premium price hike pushes some toward Premium Lite.
- Read: native free PiP lowers the PiP-only value of an extension on iPhone; background play and ad-free remain the gap.

## What people want (ranked)

n = independent logged entries (thread, store review set, tracker) that mention the feature.

| # | Feature | n | What users specifically ask for |
|---|---------|---|---------------------------------|
| 1 | YouTube ad blocking that survives detection | 21 | Works on Safari iOS and macOS; no "ad blockers violate" banner; no spinner/flicker; blockers and UI tweaks must not trigger detection |
| 2 | Hide Shorts | 17 | "All Shorts off" that really works; Shorts in notifications and channel pages; redirect /shorts/ to the normal player; watch one Short without endless scroll |
| 3 | SponsorBlock-class segment skipping | 12 | Native on Safari; coexists with ad blockers; per-channel whitelist; skip-once; flashing/spoiler/loud-noise categories; reliable auto-skip |
| 4 | Background playback without Premium | 11 | Screen off or locked; resumes after leaving Safari; no side effects such as silenced alarms |
| 5 | Picture-in-picture | 11 | One tap on iPhone, iPad, Mac; YouTube TV; survives OS updates (macOS 27, iOS 26 regressions) |
| 6 | Same feature set on iPhone and iPad as on Mac | 10 | iPadOS parity (fullscreen, resolution, channel actions), works in home-screen shortcuts/PWAs, no per-device surprises |
| 7 | Hide recommendations, sidebar, end cards, home feed | 9 | Selective hiding (keep chapters, playlists, live chat), no dead space, redirect Home to Subscriptions, hide "playables" and other new rails |
| 8 | Channel and keyword blocklist | 8 | "Hide channel" and keyword filters where YouTube's "don't recommend" is a placebo; blocklist for Shorts and community posts |
| 9 | Restore dislike count | 7 | Dislikes in-page, show own vote state, accurate numbers, no data-harvesting permission |
| 10 | Hide or limit comments | 7 | Separate comments toggle; hide "Most Relevant" block; works on mobile |
| 11 | Playback speed control | 7 | Remembered default, per-channel memory, fine steps (0.8 to 0.95), slider, persists through playlists |
| 12 | Beyond youtube.com | 7 | YouTube Music, embeds, YouTube TV, Piped/Invidious, feed blocking on other social sites |
| 13 | Layout and theme control | 6 | Theater by default, stretch to window, videos per row, centered/full-size player, compact right rail, themes |
| 14 | Default quality/resolution | 5 | Auto-max on iOS, keeps preferred resolution across videos and embeds |
| 15 | AI controls | 5 | Hide AI summaries and "Ask YouTube", never auto-translate titles or auto-dub audio, filter "Made with AI" videos |
| 16 | Clickbait cleanup (DeArrow-style) | 5 | Better titles/thumbnails, native integration with SponsorBlock-type tools, per-context off switch |
| 17 | Keyboard shortcuts and seek | 5 | j/k/l, arrow seek, mouse-wheel volume, hotkey discoverability |
| 18 | Subtitle/caption control | 5 | Default on/off and language, size and position (centered), auto-CC rules |
| 19 | Focus tools | 5 | Time limits, greyscale, session lock, habit-breaking defaults |
| 20 | Settings sync and backup | 4 | iCloud sync iPhone/iPad/Mac without a subscription; export/import that does not break across versions |
| 21 | Playlist tools | 4 | Reverse playlist, Watch Later fixes, per-playlist behaviour |
| 22 | Volume boost/audio | 4 | Boost without distortion or mute-until-reload bugs; audio never defaults to muted |
| 23 | Disable autoplay | 3 | Real autoplay off, without breaking subtitles |
| 24 | Kid-safe controls | 3 | Locked settings, keyword filters that actually filter, Shorts blocked for kids |

## What people praise

| Extension | Praise (2 to 4 points) |
|-----------|------------------------|
| Enhancer for YouTube | Breadth in one install (speed, volume boost, filters, resolution, end-screen toggles, themes); "Absolute Essential"; keeps people on a browser ("This single-handedly is keeping me on this browser"); lightweight and reliable when current |
| SponsorBlock (incl. Safari build) | Set-and-forget skipping; segments appear within minutes of upload; category and channel control; Safari buyers call $2.99 "underpriced" and "Happy to pay" |
| Vinegar | Makes YouTube "tolerable" on iOS/iPadOS; native HTML5 player gives PiP and background audio; "very fair price"; maintainer keeps up with YouTube and Apple changes |
| UnTrap for YouTube | Depth of options (Shorts, comments, recommendations, greyscale, time limits, subscriber counts); redirect Home to Subscriptions; "most worthwhile purchase on the App Store" (before the subscription pivot) |
| Control Panel for YouTube | Sensible defaults; mobile support; theater-mode and viewport stretch; "won't use YouTube without it" |
| Unhook / DF YouTube | Focus and dopamine reduction; "gave me back hours of my life"; simple switches |
| DeArrow | Quieter feed; "up there with Sponsor block and UBlock Origin"; time saved on the recommendations page |
| Return YouTube Dislike | "youtube experience is incomplete without this extension"; restores a signal users felt was taken away |
| Improve YouTube! | Stop-autoplay that works, Mixes off, themes, grid sizes, loop with screen off on Android |
| Wipr 2 / AdGuard / uBlock Origin Lite | Cheap or free, low CPU, no setup; partial YouTube success is still "better than nothing" (gilby101) |
| Tube PiP / EXTENSION.app | Ad-free, PiP and lock-screen playback in one tap; "humane" subscription |

## What people complain about

Per extension:
- Enhancer for YouTube: breaks after each YouTube UI change (Shorts hiding, preferred quality, buttons); Firefox build lags Chrome; pause/click bugs; speed only applied to first playlist item; update popup cannot be disabled; flagged by YouTube ad-block detection; CPU spikes and slow page loads; Firefox listing pulled in Oct 2023 and again Feb 2024; a 2025 news report said the Firefox version might be discontinued over Mozilla review delays.
- SponsorBlock: server outages and "mass spam attack" submission locks; segments not loading; per-channel whitelist regressions; Safari: "doesn't activate or stay active", stops skipping while showing segments, per-site permission prompts on Safari 18.4+ (WebKit bug 290508), conflict with AdGuard's media player.
- Return YouTube Dislike: Sept to Nov 2026 permission-label backlash ("requesting permissions to see my browsing? GOODBYE"), premium/Patreon pop-ups, Oct 2025 ad-injection story, page freezes, "not working" after each YouTube experiment.
- DeArrow: unclear $1 soft paywall ("replacing one annoyance with another"), low-quality crowd titles, gray boxes, slowdown, breakage after YouTube layout changes.
- Unhook: abandoned (no update since 2024), end-card and recommendation hiding breaks, closed source distrust.
- DF YouTube, Improve YouTube!, Control Panel: trigger YouTube anti-adblock banner (DF: 11 reviews since 2025-06), CPU/GPU spikes, settings reverting, defaults changing silently.
- Vinegar: update regressions (muted audio, PiP button gone, AirPlay audio-only or 360p, left-aligned giant subtitles), iPad fullscreen/resolution broken, background audio failing on iOS 26.
- UnTrap: free-to-subscription pivot, "adware" claim, Shorts leaking despite setting, iPadOS 27 channel actions broken, session-lock bugs.
- Wipr 2 / uBO Lite / AdGuard: YouTube partly blocked, spinner/flicker, ad-block detection, upsell friction, "can leak your banking info" permission fear.
- Generic Safari listings (Improved Tube, Baking Soda): "90% of the others ... are ALL EXACTLY the same", breaks other sites (ESPN, Amazon Photos), no subtitle support, unclear permissions.

In general:
- Breakage within days of YouTube UI and experiment changes is the #1 driver of 1-star reviews across every tracker (RYD, DeArrow, Unhook, Enhancer, Control Panel, UnTrap).
- Abandonment and slow store review (weeks on AMO) turn praise into "avoid, abandoned".
- Performance: CPU 30 to 40% on install, GPU spikes, page freezes, laggy page loads, phone heating on iPhone 16e (blamed on YouTube anti-adblock overhead or the extension).
- Privacy and trust: Mozilla-style permission wording, data-harvesting suspicion, closed source, ad injection.
- Money: subscription flips, paywalls on previously free features, nag ads, hidden activation.
- Onboarding: users cannot find or enable the extension; developers' top FAQ is "why doesn't it work in Safari".
- Support: no way to contact developers; copy-pasted replies to every low review.

## Safari / iOS / iPadOS specifics

- Background play: Safari pauses on leaving; users resume via Control Center after PiP or lock (HN, MacRumors); Vinegar/PiPifier/EXTENSION.app are the extension routes; YouTube actively blocks background playback in browsers (HN Jan 2026, 204 pts) and users expect Google to patch workarounds once public; a Vinegar buyer "bought it exclusively for the background audio" and it failed on iOS 26; Tube PiP reportedly silenced morning alarms while running in the background.
- PiP: free native YouTube PiP is rolling out globally (Apr 2026), so PiP alone is losing value on iPhone; PiP extensions still regress on OS updates (macOS 27 broke one; Vinegar's PiP button vanished next to uBO Lite).
- Ad-block detection: YouTube flags blockers and also UI extensions (Enhancer, DF YouTube, Improve YouTube!); one reviewer: "I don't think a good youtube adblock is possible with Safari restrictions"; Wipr and AdGuard are split between "never see ads" and "constantly triggers detection"; Safari users stack AdGuard + Extras + User Scripts + Vinegar + SponsorBlock.
- Permission prompts: Safari per-site grants annoy (SponsorBlock 18.4 bug, 24 comments, still open); the "can access passwords, phone numbers, credit cards" wording scares buyers (Baking Soda, Vinegar, uBO Lite, UnTrap "access to EVERY website"); developer asks for a "deny other sites" default but Safari offers it only when the extension asks for all sites.
- Onboarding: users must enable in Settings > Apps > Safari > Extensions, allow per site, find the puzzle-piece icon, sometimes restart Safari and click the toolbar button once; extensions do not run in home-screen PWAs (a Shortcut is needed); "allow" buttons that stay on screen; options cut off in the popup.
- Settings sync: UnTrap sells sync as a subscription and buyers revolt ("could be stored in iCloud that I already pay for"); Vinegar users were surprised that disabling it on iPad disabled it on all devices.
- Battery/performance: iPhone 16e at ~1% battery per minute and heat on YouTube in Safari (MacRumors 2025); support reflex is to blame and disable extensions; any content-script work is suspect; uBO Lite praised for low CPU.
- Platform reliability: Safari background service workers get killed on iPad (Apple Developer Forums, iPadOS 17.4.1); Apple says iOS 18+ improved reliability; iPadOS extensions are "still fairly limited".
- Other: no left/right arrow seek in Safari's HTML5 player; AirPlay may send only audio; subtitles render giant and left-aligned on Mac; YouTube Music unsupported by most Safari tools.

## Pricing sentiment

| Signal | Evidence |
|--------|----------|
| Accepted: one-time $1.99 to $4.99 | Vinegar $1.99 "very fair price"; SponsorBlock $2.99 "even at 2.99 it's underpriced"; Wipr 2 $4.99 "price was great"; Shorts Blocker "I'll gladly pay 3-5 bucks for something once, but never a subscription"; Control Panel for YouTube $3.99 "worth every penny" |
| Accepted by power users: $15 | StopTheMadness Pro $14.99 (YouTube controls in a bundle, 4.73 avg); AdGuard lifetime ~$15 praised |
| Safari buyers pay more than other browsers' users | "Safari users are happy to pay a little money for an extension whereas most other browser users wouldn't" (HN, Weedout at $1.99); counter-view: "Blows my mind if someone pays for that" |
| Rejected: subscription flips and paywalled features | UnTrap ($5 once, then roughly $3/month or $36/year for features and sync): "rug pool all features", "Unfair and Greedy", "genuinely malware" for in-page upsell; SwizzTube free-to-paid and "took away background play"; Wipr "$25 more" for app-blocking upsell |
| Rejected: nags and soft paywalls | RYD premium/Patreon pop-ups; DeArrow's $1 soft paywall seen as predatory when activation is unclear |
| Subscription tolerated when it funds servers | Tube PiP "humane" subscription; SponsorBlock "help the developer pay for the servers"; users ask how to donate to DeArrow |
| YouTube anchors | Premium ~$14 too high ("a few dollars a month" is the ceiling for ad removal); Premium Lite and free PiP shift expectations; PiP/background behind a paywall is called "disgusting" |
| Ethics pushback | Some reviewers/commenters say ad-removal extensions "steal revenue from creators" (UnTrap 1-star, HN Vinegar); focus/UX framing draws less of it than "free Premium" framing (inference, not measured) |

## Summary

1. Top asks across 53 source entries: YouTube-proof ad blocking (21), Hide Shorts (17), SponsorBlock-class skipping (12), background play and PiP (11 each), same features on iPhone/iPad (10).
2. Praise goes to set-and-forget tools that keep up with YouTube and charge one-time $2 to $5 (SponsorBlock, Vinegar, Control Panel); Enhancer's breadth is the benchmark and no Enhancer-class all-in-one exists on Safari (users stack Vinegar + SponsorBlock + blocker + userscripts).
3. Dominant complaint is breakage within days of YouTube UI changes, then abandonment, anti-adblock detection hits on UI-only extensions, and CPU/GPU/battery load.
4. Backlash triggers: subscription flips (UnTrap, SwizzTube), nag ads (RYD), broad permission wording and Safari per-site prompts, hard-to-find enabling steps, iPadOS and OS-update regressions, paid sync for iCloud-sized data.
5. Limits of this study: Reddit was unreachable (0 Reddit sources); evidence is HN, MacRumors, Apple forums, GitHub trackers, AMO, Chrome Web Store and App Store reviews; several threads predate 2024.
