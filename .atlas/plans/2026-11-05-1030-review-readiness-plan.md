# Review readiness without a Developer Program team (2026-11-05 10:30)

Scope: everything on the pre-submission checklist that needs neither the final name nor a team. Name-bound items get a row in `.atlas/runbooks/rename-checklist.md` instead.

| # | Item | Change | Verify |
|---|---|---|---|
| 1 | Dependabot moderate (minimatch via eslint 10) | `overrides.minimatch` in `package.json` | `npm audit` 0, `scripts/lint.sh` green |
| 2 | Export compliance | `INFOPLIST_KEY_ITSAppUsesNonExemptEncryption = NO` on both app targets | key present in the built `Info.plist` |
| 3 | Privacy policy and support page | `docs/privacy.md`, `docs/support.md` for GitHub Pages | prose covers: nothing collected, settings on device, opt-in services and what they receive, Privacy mode cookie backup, deletion, contact, trademark line |
| 4 | Container app help and in-app policy link (4.2, 5.1.1) | `Main.html` gains what-it-does, privacy and credits; `ViewController` opens http links outside the web view; CSS scrolls | `scripts/build.sh macos` and `ios` |
| 5 | Policy link in the extension's Support page | one row in `options.js`, strings via node round-trip | options page renders |
| 6 | Notes for Review draft | `.atlas/runbooks/review-notes.md` with the `cookies` permission and optional origins explained | - |
| 7 | Docs | skill facts table, rename checklist (docs URLs, Main.html), README status | - |

Out of scope: name, icons, team, TestFlight, screenshots.
