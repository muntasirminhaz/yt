I'll check the available skill catalogs and current community skill repos for Apple-platform development.

Here's what's actually out there as of now, grouped by your criteria. Quick orientation first: skills are a `SKILL.md` file in `~/.claude/skills/<name>/` (personal) or `.claude/skills/<name>/` (project-level) with YAML frontmatter, and the bigger packs install as Claude Code plugins via `/plugin marketplace add`. Custom skills can also be uploaded to Claude.ai and used via the API.

**Full-stack Apple packs (pick one as your base)**

- **Axiom** (CharlesWiltgen/Axiom) — the most complete. 108 discipline skills, 55 reference skills, 23 diagnostic skills, 12 commands and 38 agents, covering HIG compliance checklists, a full HIG reference, and Liquid Glass. Includes SwiftUI Performance (Instruments 26), SwiftUI Debugging, Xcode/Memory/Build troubleshooting, Swift 6 strict concurrency, plus GRDB and SwiftData persistence. Install: `/plugin marketplace add CharlesWiltgen/Axiom`, then install "axiom" from the /plugin menu; MCP setup exists for VS Code/Cursor and an Xcode integration guide. Caveats: it requires macOS 15+, Xcode 26+, and the iOS 26 SDK, and its scope explicitly covers iOS, iPadOS, watchOS, and tvOS rather than macOS.
- **claude-code-apple-skills** (rshankras) / **claude-code-apple-dev-plugin** (AutisticAF) — best for macOS + visionOS breadth. Covers iOS, macOS, watchOS, visionOS; 63 generators, 10 iOS skills (code review, UI review, navigation, iPad, migration, accessibility, device runs), 4 Swift skills (concurrency, Swift 6.2, InlineArray/Span), plus HIG-compliance, performance and App Store skills. The plugin repackaging has 166 skills across iOS, macOS, iPadOS, watchOS, tvOS and visionOS, installed with `claude plugin install github:AutisticAF/claude-code-apple-dev-plugin`.
- **ios-agent-skills** (koshkinvv) — lean and opinionated. 9 skills: SwiftUI, architecture, networking, data, security, concurrency, testing, accessibility, performance; targets iOS 17+ with @Observable, Swift Testing, SwiftData and async/await; installs to `~/.claude/skills/` and also works with Codex and Gemini CLI.
- **claude-skills-collection** (fal3) — swift-modern-architecture (Swift 6, SwiftData, Observation), performance-optimization (Instruments), memory-leak-diagnosis, cross-platform-app-development, accessibility, unit-testing, animation/graphics, and swift-concurrency-migration; install with `/plugin marketplace add https://github.com/fal3/claude-skills-collection` then `/plugin install ios-swift-skills`.

**Project structure**

- **Swift Claude Code Framework** (jeremieb/swift-unit-test-instructions) — the strongest structure-focused one. swift-project-setup generates a CLAUDE.md and copies skills; ships structure-swiftui, structure-uikit, structure-mixed (with Bridge/ rules), file-naming, gitignore-xcode, an SPM Package.swift skeleton, plus swift-architecture-audit, swift-networking, swift-testing and swift-code-review.
- **ios-app-scaffold** (tddworks) — scaffolds iOS apps with Tuist, Swift 6, and a layered Domain/Infrastructure/App architecture.
- fal3's cross-platform-app-development-skill for shared iOS/macOS architecture (above).

**Coding practices & review**

- Swift 6 concurrency is where agents most often go wrong, so have a dedicated one: swift-concurrency-expert (patrickserrano) for Swift 6.2+ review and remediation, or axiom-swift-concurrency.
- jeremieb's swift-code-review (MVVM checklist) and rshankras's code-review/UI-review skills.
- Pair with real compiler feedback: the **swift-lsp** plugin in your org catalog (SourceKit-LSP diagnostics) — see card below.

**Optimization**

- Axiom: SwiftUI Performance, Performance Profiling (CPU/memory/battery decision trees), Memory Debugging; fal3's swift-performance-optimization + memory-leak-diagnosis; koshkinvv's ios-performance.

**Apple guidelines (HIG, App Review, accessibility)**

- Axiom's HIG + HIG Reference + Liquid Glass; rshankras's Design and App Store skill groups; any of the ios-accessibility skills; axiom-shipping for release. From your catalog, **Mobile App Design (iOS)** checks flows against Apple conventions.

**Safari extensions (thinnest area)**

- rshankras's app-extensions generator produces Share, Action, Keyboard and Safari Web Extension infrastructure, including App Group data sharing between host app and extensions.
- Safari Extension Control Workflow (gaelic-ghost, on claudskills.com) guides decisions across Safari Web Extensions, Web Inspector Extensions, Safari App Extensions, SafariServices, content blockers and messaging.
- Since the extension body is JS + manifest, you'll want to write a small project skill of your own for your manifest version / messaging conventions.

**OS version compatibility — the gap to watch**

Most packs assume the latest SDK (Axiom needs Xcode 26; koshkinvv targets iOS 17+). The ones that explicitly branch on deployment target: hmohamed01/swift-development covers @Observable (iOS 17+) vs ObservableObject (iOS 13+) and NavigationStack (16+) vs NavigationView (13–15), with xcodebuild/simctl commands; jeremieb's architecture audit handles both iOS 17+ and iOS 16 patterns; rshankras's migration skills; fal3's swift-concurrency-migration. My honest recommendation: use `skill-creator` (shipped by Anthropic and bundled in rshankras's pack) to write a project-level skill that states your minimum deployment targets per platform and mandates `#available` guards and fallbacks — nothing community-made encodes your specific support matrix.

Two non-skill companions worth adding: XcodeBuildMCP for build/run/simulator control, and Axiom's apple-docs and xcode-mcp skills for official documentation lookup.

Your organization's catalog already has four Apple-relevant plugins you can add in one click:

The macOS SwiftUI plugin and swift-lsp fill the two gaps the community packs leave widest — Mac-specific patterns and real compiler feedback.