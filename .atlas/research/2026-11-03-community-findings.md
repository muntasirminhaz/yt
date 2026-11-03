# Community findings: YouTube browser extensions (Safari, macOS, iOS, iPadOS)

Date: 2026-11-03. Sources: forums, store reviews, issue trackers only (no video platforms).
Status: in progress. Entries below are appended per source as processed.

## Query checklist

- [ ] Q01 best youtube extension safari reddit
- [ ] Q02 safari youtube extension like enhancer for youtube
- [ ] Q03 enhancer for youtube review reddit
- [ ] Q04 enhancer for youtube problems
- [ ] Q05 sponsorblock safari reddit
- [ ] Q06 return youtube dislike safari
- [ ] Q07 youtube ad blocker safari 2026 reddit
- [ ] Q08 youtube adblock detection safari
- [ ] Q09 vinegar safari youtube reddit
- [ ] Q10 tweaks for youtube safari
- [ ] Q11 youtube background play iphone safari extension
- [ ] Q12 youtube picture in picture safari ios extension
- [ ] Q13 hide youtube shorts safari
- [ ] Q14 youtube playback speed extension safari
- [ ] Q15 unhook youtube review
- [ ] Q16 df tube review
- [ ] Q17 improve youtube extension review
- [ ] Q18 youtube extension battery drain safari
- [ ] Q19 youtube extension slow safari
- [ ] Q20 HN: youtube extension
- [ ] Q21 HN: sponsorblock
- [ ] Q22 HN: dearrow
- [ ] Q23 HN: return youtube dislike
- [ ] Q24 HN: unhook
- [ ] Q25 GitHub open issues: ajayyy/SponsorBlock (top 15)
- [ ] Q26 GitHub open issues: Anarios/return-youtube-dislike (top 15)
- [ ] Q27 GitHub open issues: ajayyy/DeArrow (top 15)
- [ ] Q28 Enhancer for YouTube public feature requests / issue titles
- [ ] Q29 Firefox AMO review text (enhancer, sponsorblock, RYD, dearrow, unhook)
- [ ] Q30 App Store review RSS (Safari YouTube extensions)
- [ ] Q31 Chrome Web Store review text (where reachable)

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
- Pricing: bought at ~$5 by several; vehemenz "I'd feel pretty good about paying the $5"; ethics debate about ad removal dominates the rest of the thread.

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
