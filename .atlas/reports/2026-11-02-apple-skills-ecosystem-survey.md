# Apple-ecosystem skills survey (record for future Apple projects)

Date: 2026-11-02
Purpose: a durable map of what Claude Code skills, plugins and MCP servers exist for Apple-platform development, which ones matter for a Safari Web Extension shipped to the iOS and macOS App Stores, and why the rest were left out. Raw research (every pack, every article, licenses, line counts) is archived in `.atlas/research/skills-raw/`.

## 1. Sources consulted

| Source | What it gave |
|---|---|
| Claude web chat suggestion (`.atlas/skills suggestion from claude web.txt`) | Names of 10 community packs and the hint that Safari extensions are the thinnest area |
| 5 web articles (Medium, LinkedIn, awesomeskill.ai, aitmpl.com catalog API, codelynx.dev) | 45 skill candidates; none mention Safari extensions |
| 16 GitHub repos cloned read-only (nothing executed) | Skill lists, licenses, SDK requirements, overlap |
| Claude plugin directory cache on this Mac (3,605 listings) | In-account plugins: `apple-skills`, `swift-lsp` (official), HIG/App Review auditors, extension builders |
| Local checks | Xcode 27.2 headless builds work; no Safari skill exists in the account's synced skills |

## 2. How the pieces fit in Claude Code

- Skill: a `SKILL.md` with frontmatter under `.claude/skills/<name>/` (project) or `~/.claude/skills/<name>/` (personal). Only the description sits in context; the body loads when triggered. `references/` files load only when the skill points at them.
- Plugin: a packaged bundle (skills + agents + commands + hooks + MCP) installed from a marketplace or the plugin directory. Every bundled skill description is in context, and hooks run on your machine.
- MCP server: an external process exposing tools (for example build or simulator control). Tool definitions cost context on every turn, so a CLI used from Bash is cheaper when the same binary offers one.

## 3. Ecosystem map by area

| Area | What exists | Best sources | Needed here |
|---|---|---|---|
| Headless build, run, simulator, device | xcodebuild/simctl/devicectl recipes; MobileBuildMCP (ex XcodeBuildMCP, 82 tools, CLI + MCP) | rshankras `ios/run-simulator`, `ios/run-device`; patrickserrano `ios-debugger-agent`; hmohamed01 refs; getsentry/MobileBuildMCP | Yes, core |
| Safari Web Extensions | One real multiplatform skill (masih-0x3), one macOS decision guide (gaelic-ghost), one handler/App Group template (rshankras); generic MV3 references (LevyBytes, aitmpl browser-extension-builder, Chrome packs) | masih-0x3 `safari-web-extensions`; gaelic-ghost `safari-extension-control-workflow`; rshankras `generators/app-extensions` | Yes, but thin: we must author our own project skill |
| App extensions, App Groups, entitlements, sandbox | Extension architecture, shared containers, entitlement diagnosis, macOS sandbox | gaelic-ghost `app-extension-architecture-workflow`, `diagnose-apple-entitlements`; rshankras `macos/macos-capabilities`; Axiom `axiom-macos` | Yes |
| Swift language and concurrency (Swift 6.2) | Strict concurrency, default MainActor isolation, approachable concurrency | patrickserrano `swift-concurrency-expert`; rshankras `swift/concurrency`; Axiom `axiom-concurrency`; fal3 migration | Small (handler code only) |
| SwiftUI / UIKit / AppKit app architecture | Dozens of packs (SwiftUI Pro, SwiftUI Expert, koshkinvv, Axiom, Dimillian, AvdLee) | twostraws, AvdLee, Axiom | No: host app is a WKWebView page; revisit only if the host app grows |
| App Store submission and review | Submission checklists, review guidelines, rejection handling, preflight scanners | Axiom `axiom-shipping`; rshankras `app-store/rejection-handler`; truongduy2611 `app-store-preflight-skills`; directory plugins App Review Companion, Review Ready | Yes, core for publishability |
| Privacy manifest and privacy policy | `PrivacyInfo.xcprivacy`, required-reason APIs, policy generators | rshankras `security/privacy-manifests`, `legal/privacy-policy`; appfoyer plugin | Yes |
| Code signing, provisioning, notarization, distribution | Certificates, profiles, export options, notarytool | Axiom `axiom-security` code-signing docs; gaelic-ghost provisioning and distribution; hmohamed01 ExportOptions plists; rorkai `asc-xcode-build` | Yes (archive, export, upload stage) |
| HIG and design | HIG reference, Liquid Glass, SF Symbols, typography; auditors | Axiom `axiom-design`; rshankras ui-review skills; HIG Compliance Auditor plugin; Mobile App Design (iOS) plugin | Partly (host app screens, popup conventions) |
| Accessibility | VoiceOver, Dynamic Type, audits | rshankras `ios/accessibility-audit`; fal3; gaelic-ghost; Axiom | Yes, light |
| Testing | Swift Testing, XCTest, XCUITest, snapshot, coverage | fal3 `swift-unit-testing-skill`; Axiom `axiom-testing`; rshankras testing routers | Light for Swift; JS tests are our own |
| Localization | String Catalogs for Swift; WebExtension `_locales` is separate | rshankras `generators/localization-setup`; gaelic-ghost `xcode-localization-workflow`; Dragoman plugin | Later |
| Icons and store assets | Icon generators, screenshots | rshankras `app-icon-generator`; Icon Creator plugin; code-with-beto app-icon | Later |
| ASO, marketing, monetization, IAP | Large share of rshankras and Axiom; ASO Atlas, AppSkyline plugins | rshankras `app-store/*`, appeeky aso-skills | No (unless the app becomes paid) |
| Xcode GUI MCP bridges | `xcrun mcpbridge` (Xcode 26+), Axiom xcode-mcp, gaelic-ghost `.mcp.json` | Axiom, gaelic-ghost | No: they need Xcode open; we work headlessly |
| Project scaffolding | Tuist/DDD scaffolds, MVVM frameworks, XcodeGen | tddworks, jeremieb, Pragma plugin | No: the Xcode template already exists; only the gitignore and naming references are reused |
| Cross-browser extension frameworks | extension.dev, WXT, CRXJS packs | extensiondev, quangpl | No: Safari is a conversion target there, not the Xcode workflow |

## 4. Pack verdicts

| Pack | License | Verdict | Reason |
|---|---|---|---|
| rshankras/claude-code-apple-skills (183 skills, 23 routers) | MIT | Cherry-pick (optional plugin install as a library) | Best-maintained privacy-manifest, rejection, run-simulator, run-device, extension template coverage; 60% marketing noise |
| CharlesWiltgen/Axiom (27 routers, 43 agents, hooks, 6 binaries) | MIT | Cherry-pick folders only | Strongest App Store, HIG, signing docs; whole-plugin install runs Python hooks on every prompt and ships unsigned binaries |
| gaelic-ghost apple-dev-skills (65 skills, in `gaelic-ghost/socket`) | Apache-2.0 (keep NOTICE) | Cherry-pick | Only pack with a Safari decision guide plus extension, entitlement and distribution workflows; MCP-first prose and Xcode bridges otherwise |
| masih-0x3/agent-skills `safari-web-extensions` | MIT | Cherry-pick one skill, trimmed | Only skill written for multiplatform Safari Web Extensions; a third is product-specific filler |
| patrickserrano/skills | MIT | Cherry-pick | Compact, self-contained concurrency and simulator skills |
| fal3/claude-skills-collection | MIT | Cherry-pick small | Swift Testing and accessibility; rest SwiftUI |
| jeremieb Swift Claude Code Framework | MIT | Reuse two references | Xcode `.gitignore` and file-naming; MVVM dogma otherwise |
| hmohamed01/swift-development | No LICENSE file | Read-only reference | xcodebuild, simctl, ExportOptions material is good but reuse terms are unverifiable |
| getsentry/MobileBuildMCP (ex XcodeBuildMCP) | MIT | Adopt as CLI, MCP optional | Headless build/run/test/UI automation/log capture; no Safari-specific tooling |
| truongduy2611/app-store-preflight-skills | MIT | Adopt | Rejection-pattern scanner for iOS and macOS projects |
| rorkai/app-store-connect-cli-skills `asc-xcode-build` | MIT | Adopt at release stage | CLI archive, export, upload for IPA and PKG (needs the `asc` CLI) |
| Anthropic `frontend-design` | official | Optional | For the popup and options HTML |
| AutisticAF/claude-code-apple-dev-plugin | PolyForm Noncommercial | Skip | Forbids commercial use; stale fork of rshankras |
| koshkinvv/ios-agent-skills | MIT | Skip | SwiftUI app architecture only |
| tddworks/claude-skills | Apache-2.0 | Skip | Tuist scaffold incompatible with the template |
| extensiondev/skill, quangpl browser-extension-skills, Chrome Extension Builder, Extenshi | mixed | Skip | Chrome-first; Safari is a conversion target |
| LevyBytes MV3 reference, K8Cill safari-webkit | Apache-2.0 / MIT | Optional reading | Generic MV3 API reference; iOS Safari CSS/JS quirks |
| SwiftUI packs (twostraws, AvdLee, vermont42, wholiver, Dimillian) | MIT | Skip for now | No SwiftUI in the project |

## 5. In-account plugin directory findings

Relevant listings available from the `/plugin` directory in this account: `swift-lsp` (official Anthropic, SourceKit-LSP diagnostics), `apple-skills` (rshankras), `HIG Compliance Auditor`, `App Review Companion`, `Review Ready`, `Mobile App Design (iOS)`, `SwiftUI guidance for macOS`, `Dragoman` (localization), `Icon Creator`, `Mobile Release Check`, `appfoyer` (privacy policy pages), `ASO Atlas`, `AppSkyline`, `Pragma` (iOS scaffold), `Chrome Extension Builder`, `Extenshi`, `typescript-lsp` (official). No XcodeBuildMCP or MobileBuildMCP listing; those install via Homebrew or npm.

## 6. Safari and WebExtension coverage is thin

Nothing in the community encodes: Safari's per-site permission prompts, iOS non-persistent background rules combined with YouTube's single-page navigation, the Xcode 27 `project.xcproj` format, or the App Review posture for a YouTube-modifying extension. Those become project-authored skills with references built from Apple documentation (see the companion plan).

## 7. Shortlist adopted for this project

Tier A, project-authored (highest value, written for this codebase):
1. `safari-web-extension`: Safari-specific WebExtension rules for iOS and macOS, API support, permissions, iOS behaviour, debugging.
2. `apple-host-app`: Swift wrapper, native messaging, App Groups, entitlements, bundle IDs, xcproj editing, Swift 6.2 rules for the handler.
3. `xcode-headless-build`: DEVELOPER_DIR, build/run/test/simulator/device recipes, log filtering, archive and export.
4. `app-store-compliance`: review guideline checklist for this product, privacy manifest, naming and trademark rules, privacy policy, submission steps.
5. `youtube-page-model` (next phase, after feature design): YouTube DOM, player API, navigation events, mobile vs desktop differences.
6. Agent-foundation skills ported from the Laravel projects: `minimal-code-ladder` (rewritten for JS/Swift/Apple), plus condensed `context-engineering`, `token-efficiency-patterns`, `planning-and-task-breakdown`, `incremental-implementation`, `debugging-and-error-recovery`, `code-review-and-quality`.

Tier B, vendored community skills (copied into `.claude/skills/`, source and license recorded in `.claude/skills/VENDORED.md`):
- masih-0x3 `safari-web-extensions` (trimmed), gaelic-ghost `safari-extension-control-workflow`, `app-extension-architecture-workflow`, `diagnose-apple-entitlements`
- rshankras `privacy-manifests`, `rejection-handler`, `run-simulator`, `run-device`, `macos-capabilities`, `accessibility-audit`, `app-extensions` templates
- Axiom `axiom-shipping` (submission, review guidelines, expert checklist) and `axiom-design` HIG references
- patrickserrano `swift-concurrency-expert`; fal3 `swift-unit-testing-skill`; truongduy2611 `app-store-preflight`; rorkai `asc-xcode-build`

Tier C, plugins and tools (user-level, optional, auto-updating):
- `swift-lsp` (official) for compiler diagnostics in Swift files
- MobileBuildMCP as a Homebrew CLI first; enable its MCP server only if UI automation of the iOS Simulator is needed
- `frontend-design` for popup HTML; `apple-skills` plugin only if the full rshankras library is wanted on demand

Tier D, reference-only material kept out of context (`.atlas/knowledge/vendor/`): Axiom HIG full reference, hmohamed01 xcodebuild/simctl/ExportOptions, LevyBytes MV3 API reference, K8Cill Safari/WebKit quirks, gaelic-ghost distribution and provisioning workflows.

Context cost: each active skill adds roughly 40 to 100 tokens of description per session; the Tier A plus Tier B set stays under about 2,500 tokens, versus roughly 6,000 for installing Axiom and rshankras as plugins.

## 8. Licensing notes

MIT and Apache-2.0 material may be copied into the repo; Apache-2.0 copies must keep the upstream NOTICE text. AutisticAF (PolyForm Noncommercial) is excluded entirely. hmohamed01 has no license file, so its content is only read, never copied. Every vendored skill records upstream URL, commit and license in `.claude/skills/VENDORED.md`.
