# Agent Skills Overview

Skill stack for the Safari Web Extension for YouTube (macOS + iOS). Stack: WebExtension MV3 (JavaScript, CSS, HTML) in `extension/`; Swift wrapper app and extension targets in the Xcode folders at the repo root; Xcode 27.2 headless builds through `scripts/`; App Store distribution on both platforms. 23 skills: 11 authored or ported for this project, 12 vendored from the community (provenance in `VENDORED.md`). Reference-only material that is not loaded as skills lives in `.atlas/knowledge/vendor/`.

Always-on rules live in `CLAUDE.md`; path-scoped rules in `.claude/rules/extension.md` and `.claude/rules/swift.md` load when matching files are touched.

## Layer 1: Agent foundation (always active)

| Skill | Focus | Activate |
|---|---|---|
| minimal-code-ladder | Least code that solves the task: YAGNI, reuse, platform API, native feature, installed dep, one line, minimum | Before writing, adding, fixing or refactoring any code or file |
| context-engineering | Layered loading, progressive disclosure, noise purging | Reading files, delegating, as context grows |
| planning-and-task-breakdown | Small verifiable tasks with acceptance criteria and risks | Before non-trivial or multi-file work; plans go to `.atlas/plans/` |
| incremental-implementation | Thin vertical slices across storage, background, content script, popup, Swift bridge | During any multi-step feature |
| debugging-and-error-recovery | Reproduce, localize, reduce, fix, guard | Failing tests, build errors, Safari misbehaviour |
| token-efficiency-patterns | Compress, defer, script over prose, normalize output | Writing skills, prompts, reports, delegation briefs |
| code-review-and-quality | Scope limits, lint/test/build gates, revert fast | Before a commit or when asked if a change is ready |

## Layer 2: Safari extension (anything under `extension/`)

| Skill | Focus | Activate |
|---|---|---|
| safari-web-extension (authored) | Manifest, content scripts, background, popup, storage, permissions, i18n, Safari API support by version, debugging, YouTube SPA navigation, mobile vs desktop DOM | Before adding a feature, editing the manifest, picking an API, or debugging code that does not run in Safari |

## Layer 3: Apple wrapper (Swift, xcproj, plists, entitlements)

| Skill | Focus | Activate |
|---|---|---|
| apple-host-app (authored) | Container app duties, SafariWebExtensionHandler messaging, App Groups, entitlements, bundle IDs, privacy manifest files, xcproj editing, Swift 6.2 isolation rules | Any Swift, plist, entitlement, xcprivacy or project-file work |
| app-extension-architecture-workflow (vendored) | Extension points, targets, isolation, shared containers, lifecycle, signing | When the extension architecture itself is in question |
| diagnose-apple-entitlements (vendored) | Entitlement mismatches between source, profile and signed binary | "Settings not shared", missing or rejected entitlements |
| macos-capabilities (vendored) | App Sandbox, app extensions, menu bar, background execution on macOS | macOS-specific system integration |
| swift-concurrency-expert (vendored) | Swift 6.2 concurrency review and remediation | Concurrency warnings or errors in Swift |
| swift-unit-testing (vendored) | Swift Testing and XCTest patterns | Writing or fixing Swift tests |

## Layer 4: Build, run, debug, release tooling

| Skill | Focus | Activate |
|---|---|---|
| xcode-headless-build (authored) | scripts/ first, xcodebuild, simctl, devicectl with DEVELOPER_DIR, destinations, signing modes, archive and export, log filtering, enabling the extension | Any build, run, simulator, device, archive or signing question |
| asc-xcode-build (vendored) | Archive, export, upload and version bumps with the `asc` CLI | Release builds for App Store Connect or TestFlight |

## Layer 5: App Store, privacy, design, accessibility

| Skill | Focus | Activate |
|---|---|---|
| app-store-compliance (authored) | Review guidelines for extensions and container apps, privacy manifest and labels, YouTube naming and trademark rules, privacy policy, App Store Connect, TestFlight, universal purchase | Before any user-facing or release-facing change, naming decision, permission change or submission |
| app-store-preflight (vendored) | Rejection-pattern scan of the Xcode project and metadata | Before submission or after a rejection |
| privacy-manifests (vendored) | PrivacyInfo.xcprivacy, required-reason APIs, tracking domains | When APIs or data use change |
| rejection-handler (vendored) | Resolution Center replies, appeals, common rejections | After a rejection |
| axiom-shipping (vendored) | Submission checklist, review guidelines map, expert review checklist | Preparing a submission |
| axiom-design (vendored) | HIG, SF Symbols, typography, app structure | Visual or interaction design decisions in the host app |
| accessibility-audit (vendored) | VoiceOver, Dynamic Type, Accessibility Nutrition Labels | Before release and when adding UI |

## Layer 6 (next stage): YouTube page model

`youtube-page-model` will be authored once features are designed: YouTube DOM structure, player API, navigation detection, m.youtube.com versus www.youtube.com differences.

## Activation strategy

- Tier 1, always: Layer 1.
- Tier 2, by path: `extension/**` or `tests/**` -> Layer 2; `*.swift`, `*.xcodeproj/**`, plists, entitlements -> Layer 3; build, run, test, archive, simulator, device -> Layer 4; anything a user or App Review will see -> Layer 5.
- Vendored skills are secondary: the authored skill for the same area is read first; the vendored one adds depth on demand.
- Skills do not auto-load into subagents: name the skill in every delegation prompt.
