# Live automation pass, round 2 (2026-11-04 17:00 +06)

Goal: a repeatable safaridriver regression run that lives in the repo (`tests/live/`), not in the session scratchpad that a restart wipes, so every rebuild can be checked on real YouTube in a minute or two.

## How it runs
- `safaridriver -p 4444` (remote automation is enabled; after a Safari relaunch, re-tick "Allow unsigned extensions" and the extension). `node tests/live/run.mjs [check…]` opens one automation window, saves test settings through the extension's own options page (isolated storage, so the user's settings stay untouched), runs the checks and resets the storage at the end.
- Checks that need the tab visible (comments loading, captions) print `USER ACTION NEEDED`; the user brings the orange-barred window to the front.

## Checks (T1 one script, T2 run, T3 fix what fails)
| # | Check | Pass when |
|---|---|---|
| load | extension present on a watch page | `html[data-ytx]`, in-player toolbar |
| options | three new groups, Beta badges, gating | nav has power/creator/access; chapters action appears in Toolbar and Shortcuts only after chapterMaker is on |
| toolbar | Both placement on a direct load | two bars, one in `#below` |
| stats | exact line, velocity with comments | both lines present, comment share appears after comments load |
| facts | panel rows and most replayed | 11 rows, tags width, peaks from initial data |
| loop | `&loop=10-20&times=2` link | one jump 20→10 then "Loop done" |
| skip | per-channel intro and outro | jump to 0:60 with "Skipped intro"; seek to 204 → "Skipped outro" |
| nav | SPA navigation to another video | facts/exact/velocity rebuilt for the new id, chapters panel gone, bars kept |
| beside | comments beside and theater toggle | comments at the sidebar x, back under the player in theater |
| viewer | alt-click lightbox, action lightbox | maxres image loads, Escape closes |
| ai | "veo 3 ai video" search | ≥ 80 % hidden |
| channel | Videos tab and tracker line | path ends with /videos, "First visit saved" |
| chat | tidy, Live chat mode, emoji-only, find | classes on, label "Live chat", emojiOut equals emoji-only count |
| away | audio only while hidden, 144p drop | audio class while hidden, 144p after ~6 s, restore on return |
| tip | timestamp preview with an injected link | sprite loads, tip hidden on mouseout |
| card | thumbnail test card on home and results | same width and top as a real card |

Not automatable (signed-out profile): Watch Later removal, comment Time button, saved replies insert, chapter seeding from real comments, transcript (panel never loads), captions rendering, ad placements. Those stay in the manual round.

## Risks
- YouTube's automation profile withholds features (transcript, captions, ads, comment continuation); a check that passes here can still fail for the user, so each manual report keeps precedence.
- The window must be visible for IntersectionObserver-driven loads; the harness waits and asks.
