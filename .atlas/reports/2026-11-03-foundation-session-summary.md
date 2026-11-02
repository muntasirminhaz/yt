# Foundation session summary (2026-11-02 to 2026-11-03)

What was done before any extension feature work, in one place for the next session.

## Research and planning
- Surveyed the Apple-development skills ecosystem (16 packs, 5 articles, the in-account plugin directory) and recorded verdicts and licenses: `.atlas/reports/2026-11-02-apple-skills-ecosystem-survey.md`.
- Compiled sourced platform facts for Safari Web Extensions on iOS and macOS, the Xcode 27.2 project format, and Claude Code settings mechanics: `.atlas/research/`.
- Wrote and executed the foundation plan with 11 decisions: `.atlas/plans/2026-11-02-2255-project-foundation-plan.md` (drafts companion alongside).

## Repository and project
- Repo root moved up from `yt/`; Xcode project and source folders at the root; the WebExtension lives in `extension/` and the project references it as a synced folder.
- Template fixed: iOS 17 / macOS 14 deployment targets, youtube.com-only content script, `strict_min_version` 17.0, iPhone-friendly popup, privacy manifests, macOS app category, dead availability fallbacks removed, Xcode user state untracked.
- Headless tooling in `scripts/` (`env.sh`, `build.sh`, `run-mac.sh`, `run-ios-sim.sh`, `test.sh`, `lint.sh`), node:test manifest tests, ESLint 10, swift-format, VS Code tasks and recommendations, `.editorconfig`, `.gitignore`.
- Homebrew: `xcbeautify`, `gh`. Plugin: official `swift-lsp` at project scope.

## Claude Code layer
- `CLAUDE.md` house rules; `.claude/settings.json` (portable, deny list, tested guard hook, one-line SessionStart hook); machine-specific rules in the ignored `.claude/settings.local.json`; path-scoped rules in `.claude/rules/`.
- 23 skills in `.claude/skills/`: 4 authored (safari-web-extension, apple-host-app, xcode-headless-build, app-store-compliance), 7 ported foundation skills, 12 vendored with provenance (`VENDORED.md`); index in `OVERVIEW.md`; reference-only packs with licenses in `.atlas/knowledge/vendor/`.
- Runbooks: `build-run-debug.md`, `prompting-guide.md`, `rename-checklist.md`.

## Verified
- Builds: macOS unsigned and ad-hoc signed, iOS Simulator; JS tests and lint green.
- Extension runs in macOS Safari 27.2 (popup, content-script round trip, Private Browsing allowed) and in the iOS 27.2 simulator (popup sheet over m.youtube.com). Xcode 27.2's device window is Device Hub, not Simulator.app.

## Audit and fixes
- Read-only audit with adversarial verification: 41 findings, 23 confirmed, 2 refuted; fixes applied for settings portability, guard hook gaps, macOS category key, script bugs, tooling config, template leftovers, skill trigger overlap, provenance pointers, oversized screenshots.
- A Cloudflare API token found in the user's global Claude settings (from an older project session) was removed from settings and all backup copies; it was never in the repo. Rotate it.

## Permissions
- Global settings: auto mode with allow rules for Apple tooling and all project writes; blanket edit and read rules for `.claude/**`, `~/.claude/**`, `/Users/muntasir/Sites/**`; auto-mode opt-in dialog skipped. Lesson: parallel subagents writing into `.claude/` flood the user with prompts; do bulk config writes in the main session.

## Git state
- `main`: template commit `03eb2c8` plus one squashed foundation commit `04728ca` (391 files). Not pushed. GitHub repo `muntasirminhaz/yt` is public.

## Open items
- Rotate the Cloudflare token.
- Apple Developer Program enrolment (needed for devices, TestFlight, App Store).
- Product name and bundle IDs (placeholder `yt`, `cyberm3.yt`); see the rename checklist.
- App icons (empty asset catalogs) before the first archive.
- Consider turning ultracode off; it pushes toward large multi-agent runs.

## Next session
- Feature design for the extension; the saved reference screenshots are in `.atlas/research/images/`. Start by reading `CLAUDE.md`, `.claude/skills/OVERVIEW.md`, `.atlas/runbooks/build-run-debug.md`.
