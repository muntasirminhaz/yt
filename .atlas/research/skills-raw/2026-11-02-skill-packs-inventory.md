# Apple skill packs inventory (date 2026-11-02)

Scope: community Claude Code skill packs for Apple-platform development, evaluated for one project: a Safari Web Extension for youtube.com (macOS + iOS Safari) built from Xcode's multiplatform "Safari Extension App" template, developed in VS Code with `xcodebuild` / `xcrun simctl`, targeting the App Store, on macOS 27.2 / Swift 6.2.3. Most code is JS/CSS/manifest; Swift is a thin wrapper (host app UI, `SafariWebExtensionHandler`, App Group settings).

Method: every repo was cloned read-only with `git clone --depth 1` into `.../scratchpad/downloads/<owner>-<repo>/`. No script, hook, or build file from any clone was executed. Line counts are `wc -l`. "Last commit" is the `git log -1` date of the default branch at clone time. All cloned content was treated as untrusted data.

Resolved locations for the items given only by name:
- Item 7 `tddworks/ios-app-scaffold` does not exist as a repo; the skill lives at `tddworks/claude-skills` -> `skills/ios-app-scaffold/`.
- Item 8 patrickserrano's `swift-concurrency-expert` is in `patrickserrano/skills` -> `skills/swift-concurrency-expert/` (plugin name `ios-swift-skills`).
- Item 10 gaelic-ghost's "Safari Extension Control Workflow" is `safari-extension-control-workflow`. The `gaelic-ghost/apple-dev-skills` repo is now only a pointer marketplace (0 skills); the canonical payload is `gaelic-ghost/socket` -> `plugins/apple-dev-skills/` (v10.0.3). The claudskills.com listing itself is not indexed by search; the skill is mirrored on claudepluginhub.com and llmbase.ai.
- Item 11 `cameroncooke/XcodeBuildMCP` now redirects to `getsentry/MobileBuildMCP` (renamed in v2.7.1; npm package and CLI are `mobilebuildmcp`).
- Item 12 the mcpmarket "Safari Web Extensions" skill resolves to `masih-0x3/agent-skills` -> `skills/safari-web-extensions/`.

## Summary table

| # | Pack | Repo URL | License | Last commit | Skill count (agents/commands/MCP) | Install method | Minimum Xcode/OS/SDK stated | Platform coverage | Verdict |
|---|------|----------|---------|-------------|-----------------------------------|----------------|-----------------------------|-------------------|---------|
| 1 | rshankras/claude-code-apple-skills | https://github.com/rshankras/claude-code-apple-skills | MIT | 2026-07-24 | 183 SKILL.md = 23 category routers + 160 sub-skills (55,179 SKILL lines; 152k md lines). No agents/commands/hooks. Companion MCP (asc-metadata-mcp) is a separate repo. | `/plugin marketplace add rshankras/claude-code-apple-skills` then `/plugin install apple-skills@indie-apple-stack` (23 routers in context); or copy `skills/` folders | Frontmatter `os_version: iOS 27 / macOS 27`, `CURRENT_XCODE=27`, Swift 6; `last_verified` 2026-07-16 | iOS, iPadOS, macOS, watchOS, visionOS; app extensions incl. a Safari Web Extension generator | CHERRY-PICK: best-maintained coverage of privacy manifests, rejections, CLI run-simulator/run-device, App Group/extension templates; ~60% of the pack (ASO, marketing, product specs, monetization) is noise here |
| 2 | AutisticAF/claude-code-apple-dev-plugin | https://github.com/AutisticAF/claude-code-apple-dev-plugin | PolyForm Noncommercial 1.0.0 | 2026-04-02 | 166 flat skills (61,208 SKILL lines), 1 agent (`apple-dev:dev`, Opus), `.lsp.json` (sourcekit-lsp). No hooks/commands. | `claude plugin install github:AutisticAF/claude-code-apple-dev-plugin` (all 166 descriptions in context) | Swift 6+, no OS/Xcode version in frontmatter | Same as #1 (fork of it, April 2026 snapshot) + CLI apps, macros, AVFoundation, tvOS | SKIP: Noncommercial license blocks use on an App Store product, and it is an older fork of #1 with nothing extra this project needs |
| 3 | CharlesWiltgen/Axiom | https://github.com/CharlesWiltgen/Axiom | MIT (bundled `xcproject` tool has its own license file) | 2026-10-31 | Claude plugin v27.7.2: 27 router skills (each with a `skills/*.md` sub-doc folder; 196k md lines), 43 agents, 18 `/axiom-*` commands, 5 hook events (python), 6 bundled arm64 Mach-O binaries (axbuild, xclog, xcprof, xcproject, xcsym, xcui; ~15 MB), optional MCP server variant; also Codex (70 skills) and Cursor builds | `/plugin marketplace add CharlesWiltgen/Axiom` then install `axiom` from `/plugin`; MCP/Codex/Cursor/Pi variants documented | Content targets iOS 26 / Xcode 26 (some items "Xcode 26.6+"); no macOS minimum stated | iOS, iPadOS, macOS, watchOS, tvOS; no Safari-extension content (0 hits), app extensions only via widgets doc | CHERRY-PICK: strongest App Store submission / review guidelines / HIG / code-signing / sandbox docs; whole-plugin install adds hooks that run python on every prompt, edit and Bash call plus unsigned binaries |
| 4 | koshkinvv/ios-agent-skills | https://github.com/koshkinvv/ios-agent-skills | MIT | 2026-03-16 | 9 skills (2,542 SKILL lines + ~22k lines of references). No agents/commands. | `./install.sh` (copies to `~/.claude/skills`) or `cp -r skills/ios-* ~/.claude/skills/` | iOS 17+, Xcode 16+ (Swift Testing), Swift 6 | iOS only (SwiftUI app architecture) | SKIP: pure SwiftUI/app-architecture; nothing on extensions, App Store, signing, CLI |
| 5 | fal3/claude-skills-collection | https://github.com/fal3/claude-skills-collection | MIT | 2026-09-17 | 13 skills (1,664 SKILL lines; 4,530 md lines), each with `agents/openai.yaml` (Codex metadata), examples, some references. Plugin `ios-swift-skills` v1.3.0 (+ Codex plugin). | `/plugin marketplace add https://github.com/fal3/claude-skills-collection` then `/plugin install ios-swift-skills`; or `python3 scripts/install_skills.py` (not run; copy folders instead) | Per skill: Xcode 26 / iOS 26 for several; architecture skill iOS 18 / macOS 15 | iOS, iPadOS, macOS, watchOS, tvOS, visionOS | CHERRY-PICK (small): concurrency migration, unit testing, accessibility; rest is SwiftUI/SwiftData/animation/speech |
| 6 | jeremieb/swift-unit-test-instructions ("Swift Claude Code Framework") | https://github.com/jeremieb/swift-unit-test-instructions | MIT | 2026-02-27 | 7 skills (1,334 lines) + 1 agent (`swift-staff-engineer`) + 3 commands (`/swift-feature`, `/swift-arch-check`, `/swift-build`) + CLAUDE.md template with enterprise/indie modes | Copy `skills/` and `.claude/` into the project (no plugin manifest) | Swift 5.9+/iOS 16+ for Swift Testing; no Xcode version | iOS/SwiftUI/UIKit, MVVM-opinionated | CHERRY-PICK: `swift-project-setup` is the only pack with an explicit Xcode `.gitignore` + file-naming reference; `/swift-build` is a plain xcodebuild command |
| 7 | tddworks/claude-skills (`ios-app-scaffold`) | https://github.com/tddworks/claude-skills | Apache-2.0 (+ THIRD_PARTY_NOTICES for python deps) | 2026-06-13 | 7 real skills + 1 template (2,003 SKILL lines; 4,944 md lines); scripts in 2 skills | Copy `skills/<name>/` (README's plugin text is Anthropic boilerplate, not this repo) | Tuist + Swift 6; prototype skill targets iOS 26 Liquid Glass | iOS/macOS via Tuist-generated projects | SKIP (optionally pick `appstore-info-generator`): scaffold requires Tuist + layered DDD, incompatible with the Xcode Safari Extension App template |
| 8 | patrickserrano/skills (`swift-concurrency-expert`) | https://github.com/patrickserrano/skills | MIT | 2026-01-17 | 10 skills (1,758 lines; every skill is a single self-contained SKILL.md). No agents/commands. Plugin `ios-swift-skills` v1.0.0 | `claude plugin install patrickserrano/skills` or `claude plugin marketplace add https://github.com/patrickserrano/skills` + `claude plugin install ios-swift-skills` | Swift 6.2+, iOS 26+ (Liquid Glass); examples use iPhone 15 Pro simulator | iOS, macOS | CHERRY-PICK: concurrency expert, simulator debugger (pure xcodebuild/simctl), release notes, notarization script |
| 9 | hmohamed01/swift-development | https://github.com/hmohamed01/swift-development | NO LICENSE FILE (README badge claims MIT only) | 2026-04-12 | 1 skill: SKILL.md 272 lines + 11 references (2,050 lines) + 4 bash scripts (641 lines) + assets (SwiftLint/SwiftFormat configs, Package.swift template, 3 ExportOptions plists) | Copy `swift-development/` to `~/.claude/skills/` | macOS with Xcode 15+ (16+ for Swift 6) | iOS/macOS from the command line | CHERRY-PICK (with license caveat): xcodebuild/simctl/code-signing/CI references and ExportOptions plists are exactly the CLI material a non-Swift dev needs |
| 10 | gaelic-ghost apple-dev-skills (`safari-extension-control-workflow`) | pointer: https://github.com/gaelic-ghost/apple-dev-skills ; payload: https://github.com/gaelic-ghost/socket (`plugins/apple-dev-skills`) | Apache-2.0 (NOTICE requires attribution) | pointer 2026-07-03; socket 2026-08-26 | 65 skills (every skill = SKILL.md + `references/` + `agents/openai.yaml`); plugin `.mcp.json` registers `xcrun mcpbridge` and `xcrun lldb-mcp`; no commands; Codex-first | Claude: `claude plugin marketplace add gaelic-ghost/socket` then install `apple-dev-skills@socket` (65 descriptions + 2 Xcode MCP servers); or copy individual skill folders. Codex: `codex plugin marketplace add gaelic-ghost/socket` | Xcode 27 beta-era notes; "MCP-first, CLI fallback" policy | macOS-centric; iOS, visionOS, tvOS; Safari Web/App/Web-Inspector extensions, content blockers, App Groups, entitlements, provisioning, distribution | CHERRY-PICK: the Safari decision skill, app-extension architecture, entitlement/App Group diagnosis and distribution skills are good; whole-plugin install drags in Xcode-GUI MCP bridges and Codex-style workflow prose |
| 11 | XcodeBuildMCP -> MobileBuildMCP | https://github.com/cameroncooke/XcodeBuildMCP (redirects to https://github.com/getsentry/MobileBuildMCP) | MIT | 2026-10-22 (v2.7.1) | MCP server + CLI: 82 tools in 15 workflows; 2 agent skills (`mobilebuildmcp`, `mobilebuildmcp-cli`); 11 internal maintainer skills in `.agents/` | `brew tap getsentry/xcodebuildmcp && brew install mobilebuildmcp` or `npm i -g mobilebuildmcp@latest`; MCP via `npx -y mobilebuildmcp@latest mcp`; skills via `mobilebuildmcp init` | macOS 14.5+, Xcode 16.x+, Node 18+ (not for Homebrew) | iOS/watchOS/tvOS/visionOS simulators + devices, macOS apps, SwiftPM | ADOPT (tooling): headless build/run/test/log/UI-automation; only the 5 `xcode-ide` bridge tools need the Xcode GUI |
| 12a | masih-0x3/agent-skills (`safari-web-extensions`) | https://github.com/masih-0x3/agent-skills | MIT | 2026-09-28 | 160 skills in repo (39,847 SKILL lines); the one relevant skill = SKILL.md 173 lines + `references/sources.md` 34 lines | Copy `skills/safari-web-extensions/`; or `npx skillfish add masih-0x3/agent-skills safari-web-extensions` (repo installers not run) | None stated (links Apple docs; MV3) | Safari Web Extensions on iOS/iPadOS/macOS | CHERRY-PICK the single skill: only skill written specifically about multiplatform Safari Web Extensions; the rest of the repo is unrelated |
| 12b | extensiondev/skill (`extension-dev`) | https://github.com/extensiondev/skill | Apache-2.0 | 2026-10-20 | 1 skill: SKILL.md 338 lines + 15 references (~2,100 lines); companion MCP `@extension.dev/mcp` (35 tools) | `npx skills add extensiondev/skill` or `/plugin marketplace add extensiondev/skill` + `/plugin install extension-dev@extensiondev`; `claude mcp add extension-dev npx @extension.dev/mcp` | Node; Safari build needs macOS + Xcode; Safari 27 for Safari MCP | Chrome, Edge, Firefox, Chromium/Gecko forks, Safari (as a converted build target) | SKIP: framework-bound to extension.dev / Extension.js tooling; Safari is a conversion target, not the Xcode template workflow |
| 12c | cheginimohsen021/browser-extension-skills (upstream quangpl) | https://github.com/cheginimohsen021/browser-extension-skills | MIT | 2026-09-11 | 12 skills (1,517 SKILL lines; 8,726 md lines), each with `references/` | `npx skills add quangpl/browser-extension-skills [-s name]` or copy folders | Node 18+, Chrome; optional Gemini API key for assets | Chrome Web Store / MV3 only (1 Safari mention) | SKIP (maybe `extension-manifest`, `extension-test`): Chrome-centric (WXT/CRXJS, CWS, payments) |
| 12d | LevyBytes/AI-SKILL-chrome-extensions | https://github.com/LevyBytes/AI-SKILL-chrome-extensions | Apache-2.0 | 2026-10-22 | 1 skill: SKILL.md 56 lines + `references/` (~2,400 lines) + evals/scripts | Copy repo root as a skill folder | None | Chrome/Edge MV3; explicitly "not for Safari-specific behavior" | CHERRY-PICK (optional): compact MV3 `chrome.*` reference (service worker, messaging, scripting, storage) that Safari also implements |
| 12e | K8Cill/safari-webkit-skill | https://github.com/K8Cill/safari-webkit-skill | MIT | 2026-03-12 | 1 skill: SKILL.md 220 lines + 4 references (~2,200 lines) | Copy repo root to `~/.claude/skills/safari-webkit/` | None (Safari version landscape "as of 2025") | Safari/WebKit web-page compatibility (CSS/JS/Mobile Safari), not extensions | CHERRY-PICK (optional): useful for content.js/CSS injected into youtube.com on iOS Safari |

Licenses that block reuse on a commercial App Store product: #2 AutisticAF (PolyForm Noncommercial). Legally ambiguous: #9 hmohamed01 (no LICENSE file; README badge only). Apache-2.0 packs (#7, #10, #12b, #12d) require keeping NOTICE/attribution if redistributed; fine for private use.

## Per-pack detail

### 1. rshankras/claude-code-apple-skills

What it is: a 183-skill library for indie Apple developers, organised as 23 category routers (`skills/<category>/SKILL.md`) that route to sub-skills; covers product validation, code generators, testing, App Store/ASO, legal, security, macOS/iOS reviews. Installed as a plugin it surfaces only the 23 routers; sub-skills load on demand.

Categories (skill count): generators 63, root routers 23, product 14, testing 12, app-store 12, ios 10, macos 8, swiftui 7, design 7, growth 6, swift 4, apple-intelligence 3, visionos 2, shared 2, performance 2, monetization 2, legal 2, swiftdata 1, security 1, mapkit 1, foundation 1 (plus core-ml, watchos routers).

Relevant skills (path | description first line | size | self-contained?):
- `skills/generators/app-extensions/SKILL.md` | "Generates app extension infrastructure for Share Extensions, Action Extensions, Keyboard Extensions, and Safari Web Extensions with data sharing via App Groups." | 271 lines | references `templates.md` (900 lines: `SafariWebExtensionHandler.swift` native-message handler, `SharedDataManager` App Group helper, manifest.json/content.js templates, bundle-id convention `com.x.app.Extension`, isolated-world note, enable-in-Safari steps). Safari section is thin (17 mentions); it generates what the Xcode template already gives you, but the App Group + handler patterns are directly reusable.
- `skills/ios/run-simulator/SKILL.md` | "Build, install, launch, and screenshot an iOS app in the Simulator to verify a change visually." | 175 | self-contained; pure `xcodebuild` + `xcrun simctl` (list/boot/bootstatus/install/launch/screenshot), explicitly not for tests.
- `skills/ios/run-device/SKILL.md` | "Build, install, and launch an iOS app on a physical iPhone or iPad entirely from the command line (no Xcode GUI), using xcodebuild + devicectl." | 173 | self-contained.
- `skills/security/privacy-manifests/SKILL.md` | "Privacy manifest (PrivacyInfo.xcprivacy) implementation including required reason APIs, tracking domains, third-party SDK declarations, and App Tracking Transparency." | 397 | self-contained; decision tree, file format/placement, required-reason API categories (incl. UserDefaults, relevant to App Group defaults).
- `skills/app-store/rejection-handler/SKILL.md` | "Handle App Store rejections, prepare submissions to avoid common rejection reasons, write Resolution Center responses, and navigate the appeal process." | 405 | references `common-rejections.md`.
- `skills/release-review/SKILL.md` | "Senior developer-level release review for macOS/iOS apps. Identifies security, privacy, UX, and distribution issues with actionable fixes." | 233 | references 5 checklists (api-design, distribution, privacy, security, ux-polish).
- `skills/macos/macos-capabilities/SKILL.md` | "Expert guidance on macOS platform capabilities. Covers sandboxing, app extensions, menu bar apps, and background execution." | 119 | references `sandboxing.md` 233, `extensions.md` 273, `menubar.md` 342, `background.md` 358; entitlements quick reference.
- `skills/ios/ui-review/SKILL.md` | "Review SwiftUI code for iOS/watchOS Human Interface Guidelines compliance, font usage, Dynamic Type support, and accessibility." | 207 | references `hig-checklist.md`, `font-guidelines.md`, `accessibility-quick-ref.md`.
- `skills/macos/ui-review-tahoe/SKILL.md` | "Comprehensive UI/UX review for macOS Tahoe apps. Covers Liquid Glass design, HIG compliance, SwiftUI patterns, and accessibility." | 210 | references 5 md files (macos-tahoe-hig, liquid-glass-design, swiftui-macos, appkit-modern, accessibility).
- `skills/ios/accessibility-audit/SKILL.md` | "Run a structured accessibility audit on an iOS/macOS app — automated XCUITest audits, Accessibility Inspector, manual VoiceOver/Dynamic Type passes." | 91 | references `automated-audits.md`, `nutrition-labels.md`.
- `skills/generators/accessibility-generator/SKILL.md` | "Generate accessibility infrastructure for VoiceOver, Dynamic Type, and accessibility features." | 126 | references `accessibility-patterns.md`.
- `skills/generators/localization-setup/SKILL.md` | "Generate internationalization (i18n) infrastructure for multi-language support in iOS/macOS apps." | 238 | references `localization-patterns.md` + `templates/` (Swift side only; the extension's `_locales` is WebExtension i18n, not covered).
- `skills/generators/test-generator/SKILL.md` | "Generate test templates for unit tests, integration tests, and UI tests using Swift Testing and XCTest." | 386 | references `templates.md`, `testing-patterns.md`.
- `skills/generators/ci-cd-setup/SKILL.md` | "Generate CI/CD configuration for automated builds, tests, and distribution of iOS/macOS apps (GitHub Actions, Xcode Cloud, fastlane)." | 201 | references `ci-cd-patterns.md`, `templates/`.
- `skills/swift/concurrency/SKILL.md` | "Swift 6.2 concurrency updates including default MainActor inference, @concurrent for background work, isolated conformances, and approachable concurrency." | 385 | references `rules/`.
- `skills/swift/concurrency-patterns/SKILL.md` | "Swift concurrency patterns including Swift 6.2 approachable concurrency, structured concurrency, actors, continuations, and migration." | 112 | references 5 md files.
- `skills/legal/privacy-policy/SKILL.md` | "Generate privacy policies, terms of service, and EULAs for Apple platform apps." | 320 | references `templates.md`. (App Store requires a privacy policy URL.)
- `skills/generators/app-icon-generator/SKILL.md` | "Generates an app icon for macOS or iOS — CoreGraphics placeholder and/or layered source art for Icon Composer." | 387 | references `apple-hig-icons.md`, `templates/`; the only file in the pack mentioning `.gitignore`.
- `skills/testing/SKILL.md` router (86) -> `tdd-feature` 328, `test-contract` 310 (self-contained), `snapshot-test-setup` 396, `flow-walkthrough` 120 (XCUITest flows), `characterization-test-generator`, `coverage-ratchet`, `mutation-testing` (experimental, needs `muter`).
- Not present: dedicated code-signing/notarization skill (only `release-review/distribution-checklist.md`), no `.gitignore` skill, no `xcodebuild archive/export` skill.

Overlap: AutisticAF is a fork of this pack (same `app-extensions`, `privacy-manifests`, `rejection-handler`, `release-review`, `macos-capabilities`). Axiom covers the same App Store/HIG/concurrency/testing ground with longer reference docs. gaelic-ghost covers app extensions/App Groups/localization/accessibility from a workflow-routing angle. patrickserrano `ios-debugger-agent` and hmohamed01 duplicate `run-simulator`.

Red flags: 55k SKILL lines (fine as plugin since only routers load, but a `cp -r skills/` manual install puts 183 descriptions in context); plugin tracks `main` with no version pinning (era tags exist); heavy indie-marketing/ASO/monetization content; `product/test-spec` 1,513 lines and `product/release-spec` 1,833 lines are very large single files; templates are Swift-generation oriented (they would try to regenerate files the Xcode template already created).

### 2. AutisticAF/claude-code-apple-dev-plugin

What it is: a flat 166-skill Claude Code plugin "heavily based on" rshankras (April 2026 snapshot, skills renamed `generators-app-extensions`, `security-privacy-manifests`, etc.) plus additions (swift-cli-apps 743 lines, swift-macros, avfoundation, settings-kit 679, swiftui-webkit, tvOS, CarPlay, MusicKit...). Ships an Opus `apple-dev:dev` agent and an `.lsp.json` that starts `sourcekit-lsp`.

Categories: same as rshankras but flattened (app-store-*, generators-*, ios-*, macos-*, product-*, security-*, swift-*, swiftui-*, testing-*, growth-*, legal-*).

Relevant skills (all near-copies of #1, slightly older): `skills/generators-app-extensions/SKILL.md` (269 lines + templates.md; 17 Safari mentions), `skills/security-privacy-manifests/SKILL.md` (398), `skills/app-store-rejection-handler/SKILL.md` (403), `skills/release-review/SKILL.md` (231 + references/), `skills/macos-capabilities/SKILL.md` (118), `skills/ios-accessibility-audit/SKILL.md` (398), `skills/macos-ui-review-tahoe/SKILL.md` (200), `skills/generators-localization-setup/SKILL.md` (236), `skills/swift-concurrency-patterns/SKILL.md` (105), `skills/testing-snapshot-test-setup/SKILL.md` (369), `skills/generators-ci-cd-setup/SKILL.md` (173). Unique but low value here: `swiftui-webkit`, `swift-cli-apps`, `swift-macros`, `swift-package-manager`, `swift-testing`.

Overlap: ~90% with rshankras (upstream is newer: 2026-07-24 vs 2026-04-02).

Red flags: PolyForm Noncommercial 1.0.0 license (plugin.json spells it "Noncomercial") forbids commercial use, which an App Store product is; 166 flat descriptions in context (no routers); `.lsp.json` auto-launches sourcekit-lsp; no `os_version`/`last_verified` frontmatter (freshness unknown); stale relative to upstream.

### 3. CharlesWiltgen/Axiom

What it is: a large, actively maintained (v27.7.2, 2026-10-31) Apple-development plugin for Claude Code (plus Codex, Cursor, Pi, MCP builds). The Claude plugin has 27 router skills; each router's `skills/` folder holds long reference/diagnostic markdown docs (not SKILL.md), 43 agents, 18 `/axiom-*` commands, hooks on SessionStart / UserPromptSubmit / PreToolUse(Read) / PostToolUse(Bash, Write|Edit) / PostToolUseFailure, and six prebuilt CLI binaries (axbuild, xclog, xcprof, xcproject, xcsym, xcui).

Router list (27, lines of router SKILL.md): axiom-accessibility 161, axiom-ai 306, axiom-apple-docs 221, axiom-build 460, axiom-concurrency 186, axiom-data 211, axiom-design 197, axiom-games 209, axiom-graphics 271, axiom-health 91, axiom-integration 264, axiom-location 167, axiom-macos 104, axiom-media 210, axiom-networking 146, axiom-payments 227, axiom-performance 394, axiom-security 252, axiom-shipping 479, axiom-swift 178, axiom-swiftui 148, axiom-testing 173, axiom-tools 148, axiom-uikit 154, axiom-vision 130, axiom-watchos 117, axiom-xcode-mcp 150. Commands: analyze-crash, ask, audit, compare-traces, console, fix-build, health-check, modernize, optimize-build, profile, resolve-deps, run-tests, screenshot, status, test-simulator, triage, ui.

Relevant routers and their sub-docs (path under `.claude-plugin/plugins/axiom/`):
- `skills/axiom-shipping/SKILL.md` | "Use when preparing an app for App Store submission, handling rejections or appeals, managing App Store Connect and Xcode Cloud, or triaging TestFlight/Sentry crash corpora." | 479 | references `skills/app-store-submission.md` 758 (privacy manifest Q&A, metadata, screenshots, demo credentials), `app-review-guidelines.md` 135, `expert-review-checklist.md` 95, `app-store-diag.md`, `app-store-ref.md`, `asc-mcp.md`, `testflight-triage.md`, `production-triage.md`, `app-clips*.md` (total 5,854 lines).
- `skills/axiom-design/SKILL.md` | "Use when making visual or interaction design decisions for an Apple app — HIG patterns, Liquid Glass, SF Symbols, typography, app entry-point and auth-flow structure." | 197 | references `hig.md` 514, `hig-ref.md` 1,336, `liquid-glass*.md`, `sf-symbols*.md`, `typography-ref.md`, `app-composition.md` (7,400 total).
- `skills/axiom-security/SKILL.md` | "...implementing passkeys, securing AI/agentic features against prompt injection, code signing, or managing certificates and provisioning profiles." | 252 | references `code-signing.md` 451, `code-signing-diag.md` 345, `code-signing-ref.md`, `security-privacy-scanner.md` 329, keychain/cryptokit docs (6,355 total).
- `skills/axiom-macos/SKILL.md` | "Use when building ANY macOS app — windows, menus, sandboxing, distribution, AppKit bridging..." | 104 | references `sandbox-and-file-access.md` 468, `direct-distribution.md` 591 (notarization), `settings.md`, `windows.md`, `menus-and-commands.md`, `ios-apps-on-mac.md` (5,034 total).
- `skills/axiom-build/SKILL.md` | "Use when ANY iOS or macOS build fails, a crash log needs diagnosing, a test run crashes, Xcode misbehaves..." | 460 | references `build-debugging.md` 547, `xcode-debugging.md`, `build-performance.md`, `lldb*.md`; mentions xcodebuild 5x and the bundled `axbuild` 3x.
- `skills/axiom-accessibility/SKILL.md` | "Use when fixing or auditing ANY accessibility issue — VoiceOver, Dynamic Type, color contrast, touch targets, WCAG compliance, App Store accessibility review." | 161 | references `accessibility-auditor.md` 287, `accessibility-diag.md`, `ux-flow-audit.md`.
- `skills/axiom-concurrency/SKILL.md` | "Use when writing ANY async code, actors, or threads in an Apple-platform app, or seeing ANY concurrency error. Covers Swift 6 concurrency, @MainActor, Sendable..." | 186 | references `swift-concurrency.md` 1,413, `concurrency-auditor.md`, `isolation-inheritance-diag.md`, etc.
- `skills/axiom-testing/SKILL.md` | "Use when writing ANY test, debugging flaky tests, making tests faster, or choosing Swift Testing vs XCTest." | 173 | references `swift-testing.md` 899, `ui-testing.md`, `xctest-automation.md`, `testing-auditor.md`.
- `skills/axiom-integration/SKILL.md` | "...widgets, Live Activities, in-app purchase, localization, privacy prompts..." | 264 | references `localization.md` 1,264, `privacy-ux.md` 993, `extensions-widgets.md` 708 (App Groups for extension data sharing; widget-focused) (25,533 total; the heaviest router).
- `skills/axiom-tools/SKILL.md` | "Use when asking about Axiom skills or axbuild build/test capture, xclog console, xcsym symbolication, xcui simulator UI/accessibility, or xcprof..." | 148 | references `device-control-ref.md` 514 (simctl/devicectl), `xcui-ref.md`, etc.; ties to the bundled binaries.
- `skills/axiom-xcode-mcp/SKILL.md` | 150 | Xcode 26 MCP bridge (`xcrun mcpbridge`) — needs the Xcode GUI; irrelevant for VS Code.

Overlap: App Store submission/rejections, privacy manifests, HIG, concurrency, testing, accessibility all overlap rshankras; code signing / sandbox / distribution overlap gaelic-ghost; `device-control-ref` overlaps MobileBuildMCP and the CLI skills.

Red flags: 196k markdown lines in the Claude plugin (progressive loading mitigates, but routers are 100-480 lines each and 27 descriptions sit in context); hooks execute python on every user prompt (`user-prompt-submit.py` injects skill-routing text when it detects iOS-related prompts), every `.swift` Write/Edit (`swift-guardrails.py`), every Bash call (`posttool-bash-hints.py`), and SessionStart; six unsigned arm64 Mach-O binaries ship inside the plugin (~15 MB) and the routers steer toward them; content is iOS-first; no Safari extension coverage. Cherry-picking a router folder (e.g. `skills/axiom-shipping/`) into `.claude/skills/` works because sub-docs are referenced by relative path, and it avoids the hooks/binaries entirely.

### 4. koshkinvv/ios-agent-skills

What it is: nine "expert" skills for modern iOS app development (iOS 17+, @Observable, SwiftData, Swift Testing), each a 190-340 line SKILL.md plus ~2k lines of references, installed by copying to `~/.claude/skills`.

Full list (SKILL.md lines / total with references): ios-accessibility 293/1,785; ios-architecture 248/3,238; ios-concurrency 330/2,696; ios-data 324/2,476; ios-networking 209/2,908; ios-performance 315/2,690; ios-security 190/2,148; ios-swiftui 295/2,839; ios-testing 338/2,746. All reference files in `references/`.

Relevant: marginally `ios-testing` (Swift Testing/XCTest) and `ios-concurrency` (Swift 6 strict concurrency); `ios-accessibility` (VoiceOver). Nothing on extensions, App Groups, macOS, App Store, signing, CLI, project structure.

Overlap: concurrency/testing/accessibility duplicated by fal3, patrickserrano, rshankras, Axiom (all of which also cover macOS).

Red flags: iOS-only; `install.sh` detects agent and copies (fine, but copy manually); 24k lines for nine skills; no macOS content at all.

### 5. fal3/claude-skills-collection

What it is: 13 focused Apple skills packaged as the `ios-swift-skills` plugin (Claude + Codex), each with a README, `agents/openai.yaml`, examples and sometimes references; single-line descriptions tuned for hubs.

Full list (SKILL.md lines / folder total): app-intents-widgets 112/395; cross-platform-app-development-skill 137/183; ios-accessibility-skill 114/158; ios-animation-graphics-skill 123/164; iphone-duo-design 95/596; memory-leak-diagnosis-skill 155/259; swift-SpeechAnalyzer-Framework-Expert 122/178; swift-concurrency-migration 113/388; swift-modern-architecture-skill 162/689; swift-performance-optimization-skill 136/181; swift-unit-testing-skill 146/193; swiftdata-core-data-migrations 138/368; swiftui-programming-skill 111/157.

Relevant:
- `skills/swift-concurrency-migration/SKILL.md` | "Plan, implement, debug, and verify migrations from callback-, delegate-, Dispatch-, or permissive-concurrency Swift code to Swift 6 strict concurrency, including target-specific build settings, approachable concurrency, default actor isolation..." | 113 | references `references/`, examples.
- `skills/swift-unit-testing-skill/SKILL.md` | "Design, write, migrate, and review Swift unit and integration tests using Swift Testing by default, with XCTest retained for UI automation..." | 146 | examples only (self-contained guidance).
- `skills/ios-accessibility-skill/SKILL.md` | "Use when iOS or iPadOS accessibility design, implementation, review, or testing involves VoiceOver, Voice Control, Switch Control, Full Keyboard Access, Dynamic Type..." | 114 | examples.
- `skills/cross-platform-app-development-skill/SKILL.md` | "Use when one Swift/SwiftUI product intentionally targets two or more of iOS, iPadOS, Mac Catalyst, macOS..." | 137 | examples (useful framing for the shared iOS/macOS host app).
- `skills/app-intents-widgets/SKILL.md` mentions "shared extension data" but is App Intents/WidgetKit focused.

Overlap: concurrency with patrickserrano/rshankras/Axiom; testing with jeremieb/koshkinvv/Axiom; accessibility with rshankras/gaelic-ghost.

Red flags: python installer (do not run; copy); several skills require Xcode 26 / iOS 26 APIs; no App Store, signing, CLI or extension content.

### 6. jeremieb/swift-unit-test-instructions ("Swift Claude Code Framework")

What it is: a drop-in CLAUDE.md template (enterprise or indie mode) plus seven MVVM-oriented skills, one agent and three slash commands for Swift/SwiftUI/UIKit projects; small and opinionated.

Full list: skills/swift-architecture-audit 146 (self-contained); swift-code-review 156 (self-contained); swift-networking 288 (self-contained); swift-persistence 144 (references/); swift-project-setup 192 (references/: file-naming.md 67, gitignore-xcode.md 59, spm-skeleton.md 60, structure-mixed.md 64, structure-swiftui.md 76, structure-uikit.md 75); swift-testing 181 (references/); swiftui-component 227 (self-contained). Agent: `.claude/agents/swift-staff-engineer.md` 72. Commands: `.claude/commands/swift-feature.md` 85, `swift-arch-check.md` 80, `swift-build.md` 60 (detects .xcworkspace/.xcodeproj/Package.swift, runs `xcodebuild -list` then `xcodebuild build`). Root: CLAUDE.md 60, enterprise.md 170, indiedev.md 123.

Relevant:
- `skills/swift-project-setup/SKILL.md` | "Bootstraps a new Swift/SwiftUI/UIKit project with MVVM architecture, standard folder structure, testing targets, and CLAUDE.md configuration." | 192 | references the six files above; the `.gitignore` and file-naming references are the only ones across all packs.
- `skills/swift-testing/SKILL.md` | "Writes unit tests and UI tests for Swift, SwiftUI, and UIKit projects following enterprise or indie testing standards." | 181 | references/.
- `skills/swift-code-review/SKILL.md` | "Reviews Swift, SwiftUI, and UIKit code for MVVM compliance, testing standards, naming conventions, async correctness, and anti-patterns." | 156 | self-contained.
- `.claude/commands/swift-build.md` | 60 | self-contained xcodebuild recipe.

Overlap: testing with fal3/koshkinvv/Axiom/rshankras; project structure partially with gaelic-ghost `structure-swift-sources` and `bootstrap-xcode-workspace`.

Red flags: MVVM dogma baked into every skill (the project's Swift is too thin for ViewModels); CLAUDE.md template would override project conventions if copied wholesale; no Xcode version statements; young repo (Feb 2026).

### 7. tddworks/claude-skills (`ios-app-scaffold`)

What it is: tddworks' skills for Tuist-based iOS/macOS projects with a London-school DDD layering (Domain/Infrastructure/App), plus App Store listing, UX prototyping and design-system helpers.

Full list: skills/appstore-info-generator 152 (self-contained; EN/zh-Hans/zh-Hant listing text, character limits); domain-design 378 (references/); feature-lifecycle 90 (references/); ios-app-scaffold 163 (references/architecture.md + scripts/scaffold.py; runs `tuist generate`, Project.swift, Mockable 0.5.0+); ios-ux-prototype 259 (assets/examples/references; python imageio deps per THIRD_PARTY_NOTICES); swiftui-atomic-design 693 (self-contained); tuist-app-localization 262 (references + scripts; `.strings` sync for Tuist projects); template 6 (placeholder).

Relevant: only `appstore-info-generator` (App Store metadata drafting). `ios-app-scaffold` is explicitly Tuist-only and would fight the Xcode Safari Extension App template; `tuist-app-localization` assumes Tuist and `.strings` rather than String Catalogs.

Overlap: App Store copy with rshankras `app-store/*` and Axiom shipping docs; localization with rshankras/gaelic-ghost.

Red flags: requires Tuist (external tool) and a DDD layering unsuitable for a thin wrapper; README install section is copied Anthropic marketplace boilerplate (`anthropics/skills`), i.e. no real plugin manifest; python scripts in skills.

### 8. patrickserrano/skills (`swift-concurrency-expert`)

What it is: ten compact, single-file skills (no reference folders) for iOS/Swift work and release workflows, packaged as the `ios-swift-skills` Claude plugin (Jan 2026).

Full list (all self-contained): skills/github-issue-fix-flow 177; ios-debugger-agent 114; native-app-profiling 183; release-app-store-changelog 138; release-macos-spm-packaging 283; swift-concurrency-expert 163; swiftui-liquid-glass 160; swiftui-performance-audit 202; swiftui-ui-patterns 185; swiftui-view-refactor 153.

Relevant:
- `skills/swift-concurrency-expert/SKILL.md` | "Swift Concurrency review and remediation for Swift 6.2+. Use when asked to review Swift Concurrency usage, improve concurrency compliance, or fix Swift concurrency compiler errors." | 163 | self-contained: triage, smallest-safe-fix, Swift 6.2 default actor isolation, isolated conformances, `@concurrent`, migration checklist, build settings (`SWIFT_STRICT_CONCURRENCY`). Near-identical to Dimillian/Skills' skill of the same name (derived).
- `skills/ios-debugger-agent/SKILL.md` | "Build, run, and debug iOS apps on a simulator. Use when asked to run an iOS app, interact with the simulator UI, capture logs, or diagnose runtime behavior." | 114 | self-contained; raw `xcrun simctl list/boot/install/launch/spawn log stream/io screenshot/recordVideo/openurl` + `xcodebuild` (no MCP needed).
- `skills/release-app-store-changelog/SKILL.md` | "Create user-facing App Store release notes from git history." | 138 | self-contained.
- `skills/native-app-profiling/SKILL.md` | "Profile native macOS/iOS apps using Time Profiler via CLI (xctrace)." | 183 | self-contained.
- `skills/release-macos-spm-packaging/SKILL.md` | "Scaffold, build, and package SwiftPM-based macOS apps without Xcode project ... signing/notarization steps outside Xcode." | 283 | self-contained; the `codesign --options runtime` + notarytool script is reusable even though the SPM-app layout is not (App Store builds do not need notarization).

Overlap: concurrency with rshankras/fal3/Axiom; simulator workflow with rshankras `run-simulator`, hmohamed01 and MobileBuildMCP.

Red flags: none serious; pre-dates Xcode 27 (simulator names "iPhone 15 Pro"); plugin v1.0.0 restructure Jan 2026 with no later commits.

### 9. hmohamed01/swift-development

What it is: one broad "swift-development" skill: a 272-line SKILL.md that routes to eleven reference docs (xcodebuild, simctl, code signing, CI/CD, SPM, concurrency, architecture, testing, troubleshooting), four helper bash scripts and assets (SwiftLint/SwiftFormat configs, three ExportOptions plists).

Skill: `swift-development/SKILL.md` | "Comprehensive Swift development for building, testing, and deploying iOS/macOS applications." | 272 | references everything below.
Files: references/xcodebuild.md 155, simctl.md 176, code-signing.md 110 (certificates, profiles, manual codesign, entitlements; no notarization), cicd.md 240, troubleshooting.md 234, spm.md 135, concurrency.md 210, architecture.md 555, testing-patterns.md 94, swiftui-patterns.md 121, best-practices.md 20; scripts/simulator.sh 148, run_tests.sh 136, format_and_lint.sh 131, new_package.sh 226; assets/ExportOptions/{app-store,development,ad-hoc}.plist, .swiftlint.yml, .swiftformat, Package.swift.template.

Relevant: xcodebuild.md, simctl.md, code-signing.md, cicd.md, ExportOptions plists (archive -> export for App Store from the CLI).

Overlap: CLI build/run with rshankras run-simulator, patrickserrano ios-debugger-agent, MobileBuildMCP; code signing with Axiom/gaelic-ghost.

Red flags: no LICENSE file in the repo (only a README badge) so reuse terms are unverifiable; the single skill's description claims "any other Swift/iOS/macOS development tasks" so it will trigger on everything; bundled bash scripts are untrusted (read, do not run); last commit "Fix WebFetch URLs to use raw GitHub markdown sources" shows it expects live fetching of Apple/GitHub docs; targets Xcode 15/16 era.

### 10. gaelic-ghost apple-dev-skills (`safari-extension-control-workflow`)

What it is: Gale Williams' Apple workflow skills, authored for Codex ("Inputs / Outputs / status: success|handoff|blocked" schema, `agents/openai.yaml` in every skill) and now published inside the `gaelic-ghost/socket` marketplace, which also exposes a Claude Code marketplace. 65 skills, each a SKILL.md plus `references/`; policy is "Xcode MCP first, official CLI fallback".

Categories: Xcode/SwiftPM workflows (xcode-build-run, xcode-testing, xcode-localization, xcode-device-hub, xcode-debugger-mcp, xcode-coding-intelligence, bootstrap-xcode-workspace, swift-package-*), app extensions & Safari (app-extension-architecture, safari-extension-control, safari-mcp, mailkit, file-provider), macOS platform (sandbox-file-access, privacy-permissions, distribution, window-management, virtualization, VMs), provisioning/entitlements (apple-developer-provisioning, diagnose-apple-entitlements, devicecheck-app-attest), UI (swiftui-*, appkit, accessibility, typography, sf-symbols, icon-composer, liquid-glass), media/vision/AR (about 20 skills), docs/tooling (explore-apple-swift-docs, author-swift-docc-docs, format-swift-sources, structure-swift-sources, feedback-assistant, tips-helpviewer).

Relevant skills (path under `plugins/apple-dev-skills/`; none mention Codex in the body; none reference `shared/`):
- `skills/safari-extension-control-workflow/SKILL.md` | "Guide macOS Safari integration decisions across Safari Web Extensions, Safari Web Inspector Extensions, Safari App Extensions, SafariServices APIs, content blockers, extension messaging, and app-to-Safari control surfaces." | 141 | references `references/extension-shape-decision.md` 49, `messaging-shared-data-and-permissions.md` 51, `safari-services-control-surfaces.md` 38, `testing-debugging-and-distribution.md` 46, `web-inspector-extensions.md` 42, `snippets/apple-xcode-project-core.md` 145 (512 lines total). It is a decision/routing guide (which Safari surface; app-group and typed-message plan; validation plan; "docs gate"), macOS-centric (iOS mentioned twice), and does not teach content-script or manifest details.
- `skills/safari-mcp-workflow/SKILL.md` | "Inspect a scoped live site in Safari through Safari Technology Preview's local MCP server. Use for Safari-specific DOM, console, network, screenshot, accessibility, performance..." | 79 | references/; useful for inspecting youtube.com under the extension on macOS (Safari 27 / STP).
- `skills/app-extension-architecture-workflow/SKILL.md` | "Route Apple app-extension work across extension points, targets, isolation, entitlements, shared containers, lifecycle, privacy, testing, signing, distribution, and handoffs." | 140 | references `entitlements-shared-containers-and-data-flow.md`, `extension-points-targets-and-lifecycle.md`, `privacy-validation-signing-and-distribution.md` (344 total).
- `skills/macos-sandbox-file-access-workflow/SKILL.md` | "Design and diagnose macOS file access. Use for App Sandbox, App Groups, user selection, security-scoped bookmarks..." | 70 | references/ (317 total).
- `skills/diagnose-apple-entitlements/SKILL.md` | "Trace Apple entitlements across project source, account/profile authorization, final signed main or nested code, and runtime policy or consent." | 69 | references/ (283 total).
- `skills/macos-distribution-workflow/SKILL.md` | "Inspect, prepare, validate, and troubleshoot exported macOS distribution artifacts ... signing identities, entitlements, hardened runtime, nested code, Gatekeeper, notarization readiness." | 59 | references/ (216 total).
- `skills/apple-developer-provisioning-workflow/SKILL.md` | "Plan and safely automate officially supported Apple Developer provisioning and CloudKit workflows through the App Store Connect REST API..." | 125 | references/ (351 total).
- `skills/macos-privacy-permissions-workflow/SKILL.md` | 70 | TCC/PPPC diagnosis (host app rarely needs it).
- `skills/xcode-build-run-workflow/SKILL.md` | "Guide build, run, preview-adjacent, workspace-inspection, diagnostics, toolchain, and guarded mutation work in existing Xcode-managed projects..." | 144 | 19 files (717 lines) incl. `references/cli-fallback-matrix.md` 36 (the only place with `xcodebuild` commands), `mcp-tool-matrix.md`, `workflow-policy.md` (MCP-first invariant), `xcodegen-project-maintenance.md`.
- `skills/xcode-testing-workflow/SKILL.md` | "Guide Swift Testing, XCTest, XCUITest ... code coverage, xctestplan matrices..." | 154 | 26 files (1,075 lines); MCP-first, no raw xcodebuild in SKILL.md.
- `skills/xcode-localization-workflow/SKILL.md` | "Plan, implement, review, and validate Apple-platform localization with Xcode String Catalogs (.xcstrings)..." | 107 | references/ (352 total).
- `skills/apple-ui-accessibility-workflow/SKILL.md` | "Guide Apple UI accessibility implementation and review for SwiftUI-first code, with UIKit and AppKit bridge guidance..." | 125 | references/ (537 total).
- `skills/bootstrap-xcode-workspace/SKILL.md` | "Create, adopt, extend, and align one Swift product workspace with app, extension, package, and service components under one permanent Xcode entrypoint." | 185 | references/ + xcodegen templates (326 total).
- `skills/structure-swift-sources/SKILL.md` | "Organize Swift source trees and oversized Swift files by feature, layer, and declaration group ... `// MARK:` sections, file headers" | 113 | references/ (400 total).
- `skills/format-swift-sources/SKILL.md` | SwiftLint/SwiftFormat integration | 144.
- `skills/xcode-device-hub-workflow/SKILL.md` | 51 | Xcode 27 Device Hub (GUI).

Overlap: app extensions/App Groups with rshankras `app-extensions` and `macos-capabilities`; signing/entitlements/distribution with Axiom `axiom-security`/`axiom-macos`; localization/accessibility with rshankras and Axiom; build/test with MobileBuildMCP (which is the better headless path).

Red flags: Codex-first design and prose style ("status: blocked", "handoff"); the plugin's `.mcp.json` registers `xcrun mcpbridge` and experimental `xcrun lldb-mcp`, which need the Xcode GUI with "Model Context Protocol" enabled and a project open (the README says only docs tools work without an open workspace on Xcode 27 beta 5); whole-plugin install puts 65 long descriptions in context; the pointer repo `gaelic-ghost/apple-dev-skills` has zero skills, so hub listings (claudskills.com, claudepluginhub) that cite it are indirect; Apache-2.0 NOTICE must travel with copies.

### 11. XcodeBuildMCP / MobileBuildMCP

See the dedicated section below.

### 12. Browser/Safari extension skills (masih-0x3, extensiondev, cheginimohsen021, LevyBytes, K8Cill)

See the dedicated section below.

## Safari / WebExtension-specific skills found (item 12)

Search coverage: GitHub topic/code search terms "safari web extension" SKILL.md, "webextension" SKILL.md, "browser extension" claude code skill, "manifest v3" skill, "safari app extension" skill, plus mcpmarket, claudepluginhub, llmbase, skills.sh, skills.lc listings. Findings, strongest first:

1. masih-0x3/agent-skills -> `skills/safari-web-extensions/SKILL.md` (173 lines) + `references/sources.md` (34 lines of Apple/MDN links and the `developer.apple.com/tutorials/data/documentation/safariservices/<slug>.json` trick for fetching JS-rendered Apple docs). MIT, last commit 2026-09-28, catalog review status "unreviewed", no executable content. This is the only skill found that is explicitly about multiplatform Safari Web Extensions: default Xcode Safari Extension App layout (App/iOS, App/macOS, App/Shared, Extension/manifest.json...), `xcrun safari-web-extension-packager`, MV3 preference, `browser.*` vs `chrome.*`, iOS non-persistent background rule, `nativeMessaging` only from background/extension pages (not content scripts), Storage API with schema versioning, minimal permissions + plain-language permission copy, three-level testing (engine tests outside Safari, temporary extension loading + Web Inspector, Xcode build / Simulator / TestFlight), debugging workflow, App Store distribution notes. Caveats: about a third of it is a dark/warm/focus-mode "engine" design for a specific product (irrelevant to a YouTube control extension); it tells the agent to combine with `build-ios-apps:*`, `build-macos-apps:*`, `build-web-apps:*` skills that do not exist in the repo (only `aso`, `competitors`, `competitor-profiling`, `pricing`, `frontend-design` exist), so those lines should be edited out when copying; the surrounding 160-skill repo is unrelated (do not install whole). mcpmarket's "Safari Web Extensions" listing is this skill.
2. gaelic-ghost `safari-extension-control-workflow` (141 + 371 reference lines, Apache-2.0): a Safari-surface decision and planning guide (Web Extension vs App Extension vs Web Inspector extension vs content blocker vs SafariServices/`ASWebAuthenticationSession`), typed messaging, App Group plan, permission/privacy guards, validation plan (extension visibility/enabled state first, unsigned vs signed testing), testing/debugging/distribution reference. macOS-centric; complements rather than duplicates masih-0x3. Sibling `safari-mcp-workflow` (79 lines) covers Safari 27 / Technology Preview's local MCP server for live DOM/console/network inspection.
3. rshankras `generators/app-extensions` (271 + 900-line templates, MIT): Safari Web Extension is one of four extension types; provides `SafariWebExtensionHandler.swift` (NSExtensionRequestHandling + os.Logger), `SharedDataManager` App Group helper, manifest.json and content.js templates, bundle-id and App Group identifier rules, isolated-world note, "enable in Safari > Settings > Extensions" steps. AutisticAF ships the same text (noncommercial license).
4. extensiondev/skill `extension-dev` (338 + ~2,100 lines, Apache-2.0, 2026-10-20): cross-browser skill for the extension.dev / Extension.js framework and its 35-tool MCP server. Safari appears only in `references/cross-browser.md` (19 mentions: `dev --browser=safari` converts the bundle into a Safari app via Xcode, `safari:`/`webkit:` manifest prefixes, MV3 background CSP blocks eval, no CDP so no `extension_inspect`, Safari 27 MCP) and twice in `publishing.md`. Not useful without adopting that framework.
5. cheginimohsen021 (upstream quangpl)/browser-extension-skills (12 skills, MIT): Chrome Web Store / WXT / CRXJS / payments oriented; one Safari mention. Transferable pieces: `skills/extension-manifest/SKILL.md` (92 lines; derive minimum permissions from code) and `skills/extension-test/SKILL.md` (129; Jest mocks for `chrome.*`, Puppeteer E2E).
6. LevyBytes/AI-SKILL-chrome-extensions (56-line SKILL.md + ~2,400 lines of references, Apache-2.0, 2026-10-22): disciplined MV3 `chrome.*` reference (service workers, content scripts, popups, message passing, permissions, native messaging, declarativeNetRequest, MV2->MV3). Explicitly scoped "not for Firefox/Safari-specific WebExtension behavior", but Safari implements the same `chrome.*`/`browser.*` surface so the API reference transfers.
7. K8Cill/safari-webkit-skill (220 + ~2,200 lines, MIT, 2026-03-12): Safari/WebKit page-compatibility and performance (CSS quirks, Mobile Safari, Next.js/React), not extensions; relevant to CSS/JS injected into youtube.com on iOS Safari.
8. Not skills, for completeness: chriscantu/claude-safari-extension (a Safari Web Extension + Swift MCP app that lets Claude Code drive Safari; MV2; macOS 13+/Safari 16.4+), SDLLL/claude-for-safari (AppleScript/JS automation of Safari), anthropics/claude-code issue #36355 (official Safari extension: closed, not planned). Nothing found that is specifically about Safari + "manifest v3" beyond items 1, 2 and 4.

Bottom line for item 12: coverage is thin. masih-0x3's skill is the only Safari-Web-Extension-specific skill; pair it with gaelic-ghost's decision guide, rshankras' handler/App Group templates, and a generic MV3 API reference (LevyBytes) for the JavaScript side.

## XcodeBuildMCP summary (item 11)

Identity: `cameroncooke/XcodeBuildMCP` now lives at `getsentry/MobileBuildMCP` (Sentry acquired/maintains it; v2.7.1 renamed the npm package, binaries `mobilebuildmcp` / `mobilebuildmcp-doctor`, Homebrew formula, `MOBILEBUILDMCP_*` env vars, `.mobilebuildmcp/config.yaml`, state dir `~/Library/Developer/MobileBuildMCP`, registry name `io.github.getsentry/mobilebuildmcp`). MIT; last commit 2026-10-22; TypeScript, Node 18+; bundled AXe 1.8.0 for simulator UI automation; example projects for iOS, macOS, SwiftPM.

Install: `brew tap getsentry/xcodebuildmcp && brew install mobilebuildmcp` or `npm install -g mobilebuildmcp@latest`; MCP server via `mobilebuildmcp mcp` or on demand `npx -y mobilebuildmcp@latest mcp` (`claude mcp add mobilebuildmcp -- npx -y mobilebuildmcp@latest mcp`); the same binary is a CLI (`mobilebuildmcp simulator build --scheme ... --project-path ...`, `mobilebuildmcp tools`, `<workflow> --help`); `mobilebuildmcp init` installs the two agent skills (`skills/mobilebuildmcp/SKILL.md` 41 lines for MCP use, `skills/mobilebuildmcp-cli/SKILL.md` 64 lines for CLI use). The CLI runs a per-workspace daemon for stateful operations (log capture, debugging).

Requirements: macOS 14.5+, Xcode 16.x+, Node 18+ (not needed with Homebrew). Device tools need code signing configured. Telemetry: Sentry error telemetry only; opt out with `MOBILEBUILDMCP_SENTRY_DISABLED` (or `SENTRY_DISABLED`). xcodebuild is invoked with macro validation skipped.

Tools (82) by workflow (only `simulator` is enabled by default for MCP; enable others in `.mobilebuildmcp/config.yaml` or via `manage_workflows`):
- simulator: list_sims, boot_sim, open_sim, build_sim, build_run_sim, test_sim, get_sim_app_path, install_app_sim, launch_app_sim, stop_app_sim, get_app_bundle_id
- simulator-management: erase_sims, set_sim_appearance, set_sim_location, reset_sim_location, sim_statusbar, toggle_connect_hardware_keyboard, toggle_software_keyboard, record_sim_video
- macos: build_macos, build_run_macos, test_macos, launch_mac_app, stop_mac_app, get_mac_app_path, get_mac_bundle_id
- device: list_devices, build_device, build_run_device, test_device, install_app_device, launch_app_device, stop_app_device, get_device_app_path
- debugging: debug_attach_sim, debug_breakpoint_add, debug_breakpoint_remove, debug_continue, debug_detach, debug_lldb_command, debug_stack, debug_variables
- coverage: get_coverage_report, get_file_coverage
- ui-automation (AXe): snapshot_ui, screenshot, tap, touch, long_press, swipe, drag, gesture, type_text, key_press, key_sequence, button, wait_for_ui
- swift-package: swift_package_build, swift_package_run, swift_package_test, swift_package_clean, swift_package_list, swift_package_stop
- project-discovery: discover_projs, list_schemes, show_build_settings
- project-scaffolding: scaffold_ios_project, scaffold_macos_project
- session-management: session_show_defaults, session_set_defaults, session_clear_defaults, session_use_defaults_profile
- utilities / doctor / workflow-discovery: clean, batch, doctor, manage_workflows
- xcode-ide: xcode_ide_list_tools, xcode_ide_call_tool, xcode_tools_bridge_status, xcode_tools_bridge_sync, xcode_tools_bridge_disconnect, sync_xcode_defaults

Works without the Xcode GUI? Yes for everything except the `xcode-ide` workflow. Build/test/run tools shell out to `xcodebuild`, `xcrun simctl`, `xcrun devicectl` (device), `lldb` (debugging) and the bundled AXe binary (UI automation); none require Xcode.app to be running, only Xcode CLI tools and a selected Xcode 16+. The five `xcode-ide` bridge tools connect to Xcode 26+'s built-in MCP server (`xcrun mcpbridge`) and need Xcode open with MCP enabled; they are optional and hidden in Xcode-agent mode.

Fit for this project: good for the two host apps (`simulator` workflow for the iOS app, `macos` workflow for the Mac app, `test_sim`/`test_macos` for XCTest targets, `snapshot_ui`/`tap`/`screenshot` to drive Settings > Safari > Extensions on the simulator, log capture for `SafariWebExtensionHandler` os.Logger output). There is nothing Safari-specific (one incidental "Safari" string in a test fixture): enabling the extension, granting youtube.com permission and exercising content.js still happen inside Safari (simulator `xcrun simctl openurl` plus UI automation, or macOS Safari's Develop menu / temporary extension loading).

## Recommended minimal set

Twenty individual skills/tools (pack + path), no duplicated purpose, chosen for a VS Code + xcodebuild developer with no Swift background shipping a Safari Web Extension to the iOS and macOS App Stores. Items marked (edit) should be trimmed before adoption.

Build/run tooling
1. MobileBuildMCP server + `skills/mobilebuildmcp-cli/SKILL.md` (getsentry/MobileBuildMCP) — headless build/run/test/log/UI automation for both host apps; enable `macos`, `ui-automation`, `debugging` workflows; set `MOBILEBUILDMCP_SENTRY_DISABLED` if telemetry is unwanted.
2. rshankras `skills/ios/run-simulator/SKILL.md` — the plain `xcodebuild` + `simctl` recipe, so the developer learns the raw commands and has a fallback when the MCP is off.
3. rshankras `skills/ios/run-device/SKILL.md` — `xcodebuild` + `devicectl` for the mandatory real-iPhone check before submission (Safari extension behaviour differs on device).
4. hmohamed01 `swift-development/references/xcodebuild.md` + `simctl.md` + `assets/ExportOptions/app-store.plist` (edit; license caveat) — archive/export-for-App-Store from the CLI; copy only these files, not the scripts.

Safari extension
5. masih-0x3 `skills/safari-web-extensions/` (edit: delete the dark-mode engine section and the references to non-existent `build-*-apps:*` skills) — Safari-specific WebExtension rules, iOS background constraints, native-messaging routing, testing levels, App Store notes.
6. gaelic-ghost socket `plugins/apple-dev-skills/skills/safari-extension-control-workflow/` — decide/justify the Safari surface, typed messaging + App Group data plan, permission/privacy guards, enabled-state-first debugging.
7. gaelic-ghost `plugins/apple-dev-skills/skills/safari-mcp-workflow/` (optional) — Safari 27 / Technology Preview MCP for inspecting youtube.com DOM/console while the extension runs on macOS.
8. LevyBytes/AI-SKILL-chrome-extensions `SKILL.md` + `references/` (optional) — compact MV3 `chrome.*`/`browser.*` API reference (service-worker lifecycle, messaging, scripting, storage) that content.js/background.js rely on; K8Cill `safari-webkit` is the alternative if the pain is CSS/JS quirks on iOS Safari rather than extension APIs.

Apple app wrapper (Swift)
9. rshankras `skills/generators/app-extensions/` (SKILL.md + templates.md) — `SafariWebExtensionHandler` and App Group `SharedDataManager` patterns, bundle-id and entitlement rules.
10. gaelic-ghost `plugins/apple-dev-skills/skills/app-extension-architecture-workflow/` — extension target isolation, entitlements, shared containers, lifecycle, signing/distribution checklist for the two extension targets.
11. rshankras `skills/macos/macos-capabilities/` (SKILL.md + sandboxing.md + extensions.md) — macOS App Sandbox/entitlements for the Mac host app.
12. gaelic-ghost `plugins/apple-dev-skills/skills/diagnose-apple-entitlements/` — when App Group / sandbox entitlements disagree between source, profile and signed binary (the classic "settings not shared" bug).
13. jeremieb `skills/swift-project-setup/` (use `references/gitignore-xcode.md` and `file-naming.md`; ignore the MVVM scaffold) — Xcode `.gitignore` and file naming conventions.
14. patrickserrano `skills/swift-concurrency-expert/SKILL.md` — Swift 6.2 isolation rules for the small amount of handler/App Group Swift code; self-contained.

App Store / compliance
15. Axiom `.claude-plugin/plugins/axiom/skills/axiom-shipping/` (copy the router folder; skip plugin install to avoid hooks/binaries) — submission checklist, App Review guidelines, expert review checklist, TestFlight triage.
16. rshankras `skills/security/privacy-manifests/SKILL.md` — `PrivacyInfo.xcprivacy` incl. required-reason APIs (UserDefaults via App Group) for app and extension targets.
17. rshankras `skills/app-store/rejection-handler/` — common rejection causes and Resolution Center replies.
18. Axiom `.claude-plugin/plugins/axiom/skills/axiom-design/` (hig.md, hig-ref.md) — HIG for the host-app UI on iOS and macOS; rshankras `ios/ui-review` + `macos/ui-review-tahoe` are the lighter alternative.

Code quality / testing
19. fal3 `skills/swift-unit-testing-skill/` — Swift Testing for the handler/settings code; Axiom `axiom-testing` is the heavier alternative.
20. rshankras `skills/ios/accessibility-audit/` — structured VoiceOver/Dynamic Type audit of the host app (App Review and HIG expectation).

Deliberately not included: localization skills (host-app strings are few; rshankras `generators/localization-setup` or gaelic-ghost `xcode-localization-workflow` can be added later; the extension's `_locales` is WebExtension i18n, covered by items 5 and 8), CI/CD (rshankras `generators/ci-cd-setup` once a pipeline is wanted), notarization (not needed for App Store distribution; patrickserrano `release-macos-spm-packaging` or Axiom `axiom-macos/skills/direct-distribution.md` if a Developer ID build is ever needed), and every SwiftUI-architecture, SwiftData, ASO/marketing, product-spec and Tuist skill.
