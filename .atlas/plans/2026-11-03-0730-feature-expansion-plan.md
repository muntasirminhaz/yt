# Plan: feature expansion from competitor survey (autonomous round)

Date: 2026-11-03 07:30 (+06)
Status: EXECUTING. Research agents write to `.atlas/research/2026-11-03-survey-{chrome,firefox,apple}.md` and `2026-11-03-community-findings.md`; build proceeds in parallel.

## Decisions taken (user: "build all, flag what needs an API, follow Apple guidelines")
| Feature | Approach | Needs | Flag |
|---|---|---|---|
| SponsorBlock segments | Background fetch to sponsor.ajay.app with 4-char SHA-256 prefix (privacy mode), per-category skip/mark/off, progress-bar markers, HUD on skip | `optional_host_permissions` requested when the switch is turned on; attribution | 3rd-party API, privacy label: video ID prefix sent |
| Return YouTube Dislike | Background fetch returnyoutubedislikeapi.com/votes, count inserted into the dislike button | optional host permission | 3rd-party API, sends video ID |
| DeArrow titles | Background fetch sponsor.ajay.app/api/branding/<prefix>, watch-page title only | optional host permission | 3rd-party API; card titles pending (many requests) |
| Skip video ads | In-page: mute + 16x + click skip while `.ad-showing`; cosmetic hide of feed/banner ads | nothing | Experimental, off by default; conflicts with YouTube terms; App Review 5.2.2 risk noted |
| Background play (iPhone/iPad) | Main-world override of document.hidden/visibilityState and visibilitychange at document_start, flag cached in localStorage | nothing | Experimental; device test only |
| Per-channel speed, captions auto + language, time remaining, pause on blur, resume positions | content scripts + storage.local keys `channelSpeeds`, `positions` | nothing | |
| Theater on start, screenshot to clipboard, chapters prev/next, A–B loop, copy link at time, copy transcript | content scripts | nothing | |
| Feeds: home redirect, hide watched, hide live, blocked channels, blocked keywords | CSS + debounced scanner (shared with view-count hider) | nothing | |

## Slices
T12 schema + strings + manifest (optional hosts, new content files) → T13 playback extras → T14 player extras + actions → T15 sponsors/RYD/DeArrow (background + content) → T16 feeds → T17 ads → T18 background play → T19 tests, lint, build → T20 research consolidation, example_extentions.txt, report with test matrix → commits after T14, T17, T20.
