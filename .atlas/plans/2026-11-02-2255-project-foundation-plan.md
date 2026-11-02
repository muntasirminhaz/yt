# Project foundation plan: Safari Web Extension for YouTube (macOS + iOS)

Date: 2026-11-02 22:55 (+06)
Status: DRAFT for review. Nothing has been moved, renamed, installed or committed. Only files under `.atlas/` were written (this plan, the drafts companion, reports, research archives, and an ignored `tmp/` staging area).
Execution status 2026-11-03 00:40: phases 1 to 5 executed and verified (restructure, Claude layer, 23 skills, tooling, template fixes); everything is staged in git but not committed. Phase 6 completed 2026-11-03 00:35 to 00:50: the extension runs in macOS Safari 27.2 (popup, content-script round trip, Private Browsing allowed) and in the iOS 27.2 simulator (popup sheet over m.youtube.com); details in `.atlas/runbooks/build-run-debug.md`. Phase 7 (commit) waits for the user's go. Permissions: project and user settings now carry blanket allow rules for `.claude/**` edits so skill and rule edits no longer prompt.
Revision 2026-11-02 23:25: decision 1 settled on your request as a flat root: the Xcode project and its six source folders move up to the repo root and `yt/` disappears; there is no `apple/` subfolder. Section 2 and the drafts are updated; any leftover `apple/` mention means the repo root. Scope reminder: this is a Safari Web Extension; "macOS + iOS" only names the two Safari platforms it ships on.
Companion: `2026-11-02-2255-project-foundation-drafts.md` holds the proposed `CLAUDE.md`, `.claude/settings.json`, `.gitignore`, skill index and scripts.
Record of the skills research: `.atlas/reports/2026-11-02-apple-skills-ecosystem-survey.md`. Platform facts with sources: `.atlas/research/2026-11-02-safari-web-extension-platform-notes.md`.

## 0. Decisions needed from you

| # | Decision | Recommendation | Why it matters now |
|---|---|---|---|
| 1 | Repo layout | Decided: repo root = `yt_control_extention/`; the Xcode project and its six source folders move up to the root and `yt/` is removed; extension JS moves to `extension/` (section 2) | Determines every path in CLAUDE.md, scripts and the Xcode project; changing later costs a second migration |
| 2 | Git history and remote | Move the existing `.git` (one template commit, remote `github.com/muntasirminhaz/yt`) to the root and keep history; keep the repo private until release | Decides whether commit 1 stays the pristine Xcode template (useful diff baseline) |
| 3 | Apple Developer Program | Tell me whether you are enrolled (Team ID) or when you plan to enrol | Not needed to build or to test on macOS Safari and the iOS Simulator; required for a real iPhone, TestFlight and both App Stores (US$99/year) |
| 4 | Product name and bundle identifier | Choose the public name now; keep "YouTube" and "YT" out of the app name itself ("<Name> for YouTube" is allowed by YouTube's brand rules); bundle ID in reverse DNS such as `com.cyberm3.<name>` | The template is named `yt` with bundle IDs `cyberm3.yt` and `cyberm3.yt.Extension`; renaming is cheap before the first App Store Connect record and painful after |
| 5 | Minimum OS versions | iOS 17.0 and macOS 14.0 for app and extension alike (template has iOS app 17.0, iOS extension 15.0, macOS 12.0, which Apple says should match) | Sets which WebExtension APIs we may use without feature checks |
| 6 | Business model | Free for v1 (assumed if no answer) | Paid unlocks must use in-app purchase in the container app, never inside the extension (guideline 3.1.1 and 4.4) |
| 7 | Ads and sponsor segments | Assume v1 does not block or skip ads (assumed if no answer) | YouTube Help states ad blocking violates its Terms; App Review 5.2.2 defers to the third party's terms; Apple does ship a Content Blocker API. Stated plainly, no opinion |
| 8 | Community skills | Vendor-copy the selected skills into the repo (committed, pinned, reviewable) instead of installing whole packs as plugins; install only the official `swift-lsp` plugin at user level | Keeps context cost near 2,500 tokens instead of about 6,000 and avoids third-party hooks and binaries |
| 9 | Future Chrome/Firefox port | Keep `extension/` browser-agnostic (`browser.*` API, no Safari-only keys outside `browser_specific_settings`) | Costs nothing now, keeps the door open |
| 10 | Homebrew tools | Allow me to install `xcbeautify` (compact build logs), `gh` (GitHub CLI); optional later: `mobilebuildmcp`, `asc` | No sudo needed; each saves tokens or manual steps |
| 11 | xcode-select | Optional: run `sudo xcode-select -s /Applications/Xcode.app` once yourself | Otherwise every command keeps the `DEVELOPER_DIR` prefix, which the scripts already handle |

Answer with numbers, for example "1 yes, 3 not enrolled, 4 name = ..., rest as recommended".

## 1. Findings

### 1.1 Current layout and git
- `yt_control_extention/` is not a git repo. It holds `.atlas/` (your research and skill suggestions), an empty `README.md`, and `example_CLAUDE.md` copied from the Laravel projects.
- `yt/` is the Xcode-generated "Safari Extension App" project and is its own git repo: branch `main`, one commit "Initial Commit" (36 template files), remote `https://github.com/muntasirminhaz/yt.git` reachable with the osxkeychain credential helper, no `.gitignore`.
- Your request to track `.atlas/` and `CLAUDE.md` in git is met by making the outer folder the repo root (section 2) rather than nesting them inside the Xcode folder.

### 1.2 Toolchain on this Mac
- Xcode 27.2 (27B52) at `/Applications/Xcode.app`, SDKs iOS and macOS 27.2, simulators for iOS 26.5 and 27.0 runtimes, license accepted. `xcode-select` points at Command Line Tools and `sudo` needs a password, so every command uses `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`.
- Verified headless: macOS scheme builds in 11 s, iOS Simulator scheme in 9 s, both unsigned (`CODE_SIGNING_ALLOWED=NO`). Scratch copy with the extension folder moved to `../ext-shared` also builds and the `.appex` contains every resource. So VS Code plus the command line is enough for this phase.
- No code-signing identities exist (0 found), so no Apple Developer certificate is set up yet.
- Available: Homebrew 7, Node 22, Python 3.9, `swift-format`, `safari-web-extension-packager`, `simctl`, `notarytool`, `sourcekit-lsp` (inside Xcode). Missing: `gh`, `xcbeautify`, `swiftlint`, `fastlane`, the `code` and `claude` CLIs on PATH (the VS Code extension bundles a working `claude` binary).

### 1.3 Template facts
- Project file is `yt.xcodeproj/project.xcproj`, the JSON5 project format that became the default in Xcode 27.2 (released 2026-10-29); Xcode 26 cannot open it. Folder entries map directly to disk folders with per-target inclusions or exclusions, so it is readable from VS Code. Apple ships three tools for it: `xcrun xcodeproj` (adds folders and target memberships from the shell), `xcrun xcprojformatter --update` (validates and normalises after any hand edit; it silently drops comments and unknown keys), and `xcodebuild -convert-project pbxproj` (back-conversion if a tool such as fastlane or CocoaPods ever needs the old format). Gotcha verified on this Mac: subfolders inside a referenced folder are flattened into the bundle's `Resources/` unless listed under `opaque-folders`, which the template already does for `_locales` and `images`. Full notes: `.atlas/research/2026-11-02-xcode27-xcproj-format-notes.md`.
- Targets: `yt (iOS)`, `yt (macOS)`, `yt Extension (iOS)`, `yt Extension (macOS)`; schemes `yt (iOS)`, `yt (macOS)` (user-level, auto-created). Bundle IDs `cyberm3.yt` and `cyberm3.yt.Extension`; no team; automatic signing; Swift language mode 5.0 with approachable concurrency and MainActor default isolation; macOS app and extension sandboxed with hardened runtime.
- Deployment targets mismatch: iOS app 17.0, iOS extension 15.0, macOS 12.0. Apple's troubleshooting page says app and extension targets should match.
- Extension manifest is MV3 with a module background page, a content script matched to `*://example.com/*`, a popup, empty permissions and placeholder strings ("This is yt. You should tell us what your extension does here.").

### 1.4 Skills landscape (full detail in the ecosystem survey)
- Dozens of Apple packs exist; almost all are SwiftUI-app-centric. Only one community skill is written for multiplatform Safari Web Extensions and it needs trimming. Nothing encodes Safari's permission prompts, iOS background limits with YouTube's single-page navigation, the xcproj format, or App Review posture for a YouTube modifier. Those become project-authored skills.
- One pack (AutisticAF) is excluded by a non-commercial license; one (hmohamed01) has no license file and is reference-only.
- The account's plugin directory offers the official `swift-lsp` and `typescript-lsp` plugins, rshankras `apple-skills`, HIG and App Review auditors, and extension builders (Chrome-first).

### 1.5 Permissions state
- Your global `~/.claude/settings.json` already allows `Bash`, `Edit`, `Write`, `Read`, `Glob`, `Grep`, `WebFetch`, `WebSearch` without patterns, with `defaultMode: auto`. There is nothing more to grant on the Claude side; the project settings therefore add guardrails (deny list) and extra readable directories rather than permissions.
- What only you can do, each once: enable Safari's developer features and "Allow unsigned extensions" (resets every time Safari quits), approve Keychain access when signing starts, enrol in the Developer Program and sign in to Xcode or provide an App Store Connect API key, and grant macOS Automation access if we drive Safari with AppleScript. Section 7 lists them with exact clicks.

## 2. Target structure

```
yt_control_extention/            repo root = VS Code workspace = Claude working directory
├── CLAUDE.md                    house rules, routing table, Apple gotchas (draft in companion)
├── README.md                    what the project is, how to build and run
├── .gitignore  .editorconfig
├── .claude/
│   ├── settings.json            committed: deny guardrails, extra read dirs, SessionStart hook
│   ├── settings.local.json      ignored: personal overrides
│   └── skills/
│       ├── OVERVIEW.md          layered index and activation table
│       ├── VENDORED.md          provenance ledger (upstream URL, commit, license) for copied skills
│       ├── minimal-code-ladder/ + 6 condensed foundation skills (ported from 10exam/unitostudy)
│       ├── safari-web-extension/   SKILL.md + references/ (authored here)
│       ├── apple-host-app/         Swift wrapper, native messaging, App Groups, xcproj editing
│       ├── xcode-headless-build/   DEVELOPER_DIR, build/run/test/archive recipes, log filtering
│       ├── app-store-compliance/   review checklist, privacy manifest, naming, submission
│       └── <vendored skills>/      see section 4.3
├── .vscode/                     extensions.json, settings.json, tasks.json (committed)
├── .atlas/
│   ├── plans/  reports/  runbooks/  research/  knowledge/     committed
│   └── tmp/                     ignored scratch (build logs, vendor clones, one-off output)
├── extension/                   the WebExtension exactly as Safari loads it (manifest, JS, CSS, _locales, images)
├── yt.xcodeproj                 Xcode project (moved up from yt/; renamed with the product later)
├── Shared (App)/                host-app code shared by iOS and macOS (moved up from yt/)
├── Shared (Extension)/          SafariWebExtensionHandler.swift only; its Resources/ became extension/
├── iOS (App)/  macOS (App)/  iOS (Extension)/  macOS (Extension)/   per-platform targets (moved up from yt/)
├── Tests/                       Swift test targets, added when there is Swift logic to test
├── tests/                       JavaScript unit tests (node:test), kept outside extension/ so nothing extra ships
├── scripts/                     build.sh, run-mac.sh, run-ios-sim.sh, test.sh, lint.sh (wrap DEVELOPER_DIR, write logs to .atlas/tmp/build/)
└── package.json                 dev dependencies only (eslint); no runtime dependencies in the bundle
```

Why the Xcode project sits at the root: it is the conventional Apple layout, so tools that look for a project in the working directory (xcodebuild without `-project`, SweetPad, Xcode Cloud, CI templates) work with no configuration, and there is no extra nesting level. Why `extension/` leaves the Xcode folders: the extension is plain web code; a top-level folder keeps it portable to other browsers and keeps JS tooling simple, and the project references it as the sibling folder `extension` (an out-of-tree `../` reference was verified to build; a sibling is the simpler case). Everything inside `extension/` ships, so tests and tooling stay outside it. Cost: the root lists six Apple folders with spaces in their names next to `extension/`, `tests/` and `scripts/`; renaming those folders is optional later.

Mapping from today:

| Today | After |
|---|---|
| `yt/.git` | `./.git` (history kept) |
| `yt/yt.xcodeproj`, `yt/Shared (App)/`, `yt/iOS (App)/`, `yt/macOS (App)/`, `yt/iOS (Extension)/`, `yt/macOS (Extension)/` | same names at the repo root; `yt/` is removed |
| `yt/Shared (Extension)/Resources/*` | `extension/*` |
| `yt/Shared (Extension)/SafariWebExtensionHandler.swift` | `Shared (Extension)/SafariWebExtensionHandler.swift` |
| `.atlas/` | `.atlas/` (unchanged, now tracked; `tmp/` ignored) |
| `example_CLAUDE.md` | deleted after `CLAUDE.md` replaces it |
| `README.md` (empty) | written |

## 3. Git management

- Repo root moves to the outer folder; the first real commit after the template commit records the restructure as renames, so the template baseline stays diffable.
- `.gitignore` (draft in companion): Xcode user state and build products, DerivedData, archives, SwiftPM caches, Node modules, signing material (`*.p12`, `*.mobileprovision`, `*.p8`), `.claude/*` except `settings.json` and `skills/`, `.atlas/tmp/*` except its README. Schemes: Xcode's auto-created schemes are used (they work headlessly and `xcodebuild -list` shows them); shared schemes are created only when a CI pipeline or a Swift test target needs them. Scheme and bundle names live in `scripts/env.sh`.
- Branch model: `main` is always buildable; work on short-lived branches (`feat/…`, `chore/…`, `fix/…`); squash or rebase before merge; tags `v<MARKETING_VERSION>` at each App Store submission.
- Commit style: Conventional Commits subject lines, body states what was verified (which scheme built, what was tested in Safari), attribution trailer per session rules. No commits without your explicit go-ahead until you say otherwise.
- Hooks (optional, section 4.2): a PreToolUse guard refuses force pushes, hard resets and recursive deletes outside the repo; a deny list in settings covers the same ground without scripts.
- GitHub repo name stays `yt` for now; rename to the product name together with decision 4 (GitHub redirects old URLs).

## 4. Claude Code layer

### 4.1 CLAUDE.md (draft in companion)
Ported from the Laravel projects and adapted: Output Style, Search & Read, Subagent delegation, Tool Use, Write Less ladder (rungs rewritten for WebExtension API, web platform, Swift stdlib, Apple native features, dev-only dependencies), Work Scope, Scratch & Temp (`.atlas/tmp/`), Build & Run (scripts, `DEVELOPER_DIR`, log filtering), Project Gotchas (Apple-specific, from section 1 and the platform notes), Skills routing (points at `.claude/skills/OVERVIEW.md`), Git rules. Target length under 90 lines so it costs little on every turn.

### 4.2 `.claude/settings.json` (draft in companion)
- `permissions.allow`: restates the global tool allowances plus read access to DerivedData, CoreSimulator device data and crash reports so build products and extension logs can be inspected without prompts.
- `permissions.deny`: `git push --force`, `git reset --hard`, `git clean -fd`, `git branch -D`, `rm -rf` on `~`, `sudo`, `xcrun simctl erase/delete`, `security delete-*`, `defaults delete`, pipe-to-shell installs. Docs confirm deny is evaluated before allow and lists merge across scopes, so these beat the global bare `Bash` allow while everything else stays automatic. Recursive deletes outside the repo are policed by a tiny PreToolUse hook instead of a prefix rule, because `Bash(rm -rf /*)` would also block legitimate absolute paths inside the repo.
- `permissions.additionalDirectories`: DerivedData and CoreSimulator devices (effective after the workspace trust dialog).
- `enabledPlugins`: `swift-lsp@claude-plugins-official`, installed with `--scope project`; `sourcekit-lsp` is already on PATH.
- `env.BASH_MAX_OUTPUT_LENGTH`: 16,000 characters as a safety net under the default 30,000.
- `hooks.SessionStart`: one `echo` re-injecting the minimal-code ladder and the `DEVELOPER_DIR` rule on startup, resume, clear and compact (same pattern as 10exam). Hooks merge across user and project scopes.
- `.claude/rules/`: path-scoped rule files (`extension.md` for `extension/**` and `tests/**`, `swift.md` for Swift, xcproj, plist and entitlement files) that load only when a matching file is read or edited; this keeps `CLAUDE.md` short.
- `settings.local.json` stays ignored for personal tweaks. Your user-level `defaultMode: auto` (a classifier reviews actions instead of prompting) stays in charge; project settings cannot change it.

### 4.3 Skills
Tier A, authored for this project (each a short SKILL.md plus `references/` built from the platform notes):
1. `safari-web-extension`: Safari rules for iOS and macOS (manifest keys Safari honours, API support by version, permission prompts, iOS sheet popup, non-persistent background, storage limits, match patterns for the YouTube hosts, Web Inspector contexts, temporary-extension loop).
2. `apple-host-app`: `SafariWebExtensionHandler` messaging, App Groups, entitlements, bundle ID rules, xcproj editing conventions, Swift 6.2 isolation rules for the handler.
3. `xcode-headless-build`: exact `xcodebuild`, `simctl`, `devicectl`, archive and export commands with `DEVELOPER_DIR`, destination lookup, log filtering, where products land, enabling the extension on macOS and in the simulator.
4. `app-store-compliance`: guidelines 4.4, 4.4.2, 4.2, 2.5.x, 3.1.1, 4.8, 5.1.1, 5.2.x applied to this product; `PrivacyInfo.xcprivacy`; naming and trademark rules; privacy policy; App Store Connect and TestFlight steps; universal purchase.
5. Foundation skills ported from `10exam`: `minimal-code-ladder` rewritten for this stack, and condensed stack-neutral versions (about 80 to 120 lines each) of `context-engineering`, `token-efficiency-patterns`, `planning-and-task-breakdown`, `incremental-implementation`, `debugging-and-error-recovery`, `code-review-and-quality`. The originals are PHP-flavoured and 330 to 490 lines each.
6. `youtube-page-model`: deferred to the feature stage (YouTube DOM, player API, navigation detection, mobile versus desktop DOM).

Tier B, vendored community skills (copied into `.claude/skills/`, trimmed, provenance in `VENDORED.md`; staged already under `.atlas/tmp/vendor-clones/`):
- Safari and extensions: masih-0x3 `safari-web-extensions`; gaelic-ghost `safari-extension-control-workflow`, `app-extension-architecture-workflow`, `diagnose-apple-entitlements`.
- Build, run, release: rshankras `run-simulator`, `run-device`; patrickserrano `ios-debugger-agent`; rorkai `asc-xcode-build` and truongduy2611 `app-store-preflight` (to clone at execution).
- Apple wrapper: rshankras `app-extensions` templates, `macos-capabilities`; patrickserrano `swift-concurrency-expert`; fal3 `swift-unit-testing-skill`.
- Compliance and design: rshankras `privacy-manifests`, `rejection-handler`, `accessibility-audit`; Axiom `axiom-shipping` (submission, review guidelines, expert checklist) and `axiom-design` HIG references.

Tier C, plugins and tools at user level: official `swift-lsp` (compiler diagnostics in Swift files); `frontend-design` for popup HTML (optional); MobileBuildMCP as a Homebrew CLI first, its MCP server only if simulator UI automation becomes necessary.

Tier D, reference-only material under `.atlas/knowledge/vendor/` (never auto-loaded): Axiom code-signing and HIG full references, hmohamed01 xcodebuild/simctl/ExportOptions notes (no license, read only), LevyBytes MV3 API reference, K8Cill Safari and WebKit quirks, gaelic-ghost provisioning and distribution workflows.

`OVERVIEW.md` lists every active skill by layer with a one-line activation rule; `VENDORED.md` records upstream URL, commit hash, license and what was trimmed.

## 5. Token-efficiency setup

Carried over from the Laravel projects: terse output style, Grep/Glob before Read, targeted line ranges, Explore agent for searches, Haiku for bulk mechanical work, subagent prompt contract, batched tool calls, never re-reading after edits, scratch only under `.atlas/tmp/`, plans saved with timestamps, SessionStart ladder hook.

New for this stack:
- Build output is the big token sink. Scripts write full logs to `.atlas/tmp/build/<scheme>.log` and print only the result line and errors (`xcbeautify --quiet` once installed, `grep -E 'error:|BUILD'` as fallback). `xcodebuild -quiet` is the default flag.
- Simulator and Safari logs are captured with `simctl spawn log stream` filtered by subsystem into files, then grepped.
- `DerivedData` goes under `.atlas/tmp/build/DerivedData` so nothing lands in the repo or the global DerivedData folder.
- Skill descriptions are kept short; large references live in `references/` and `.atlas/knowledge/` and are read by path when needed.
- A `.atlas/runbooks/prompting-guide.md` adapted from 10exam explains how to brief me cheaply (scope, acceptance test, which skill to name).

## 6. Knowledge base in `.atlas/`

| Folder | Content | Git |
|---|---|---|
| `plans/` | This plan and future timestamped plans; `archive/` after two months | committed |
| `reports/` | Ecosystem survey, future audits and progress reports | committed |
| `research/` | Your example-extension notes and screenshots; raw agent research (`skills-raw/`, platform notes) | committed |
| `knowledge/` | Condensed platform references consumed by the skills; `vendor/` reference material not loaded as skills | committed |
| `runbooks/` | build-run-debug (macOS Safari, iOS Simulator, device), release checklist, prompting guide | committed |
| `tmp/` | build logs, DerivedData, vendor clones, scratch; safe to wipe | ignored |

## 7. Permissions and one-time approvals

Claude side: already maximal globally; project settings add the deny guardrails and extra read directories above. If you prefer prompts for git pushes, add `Bash(git push *)` to a project `ask` list; otherwise pushes stay automatic but never forced.

Only you can do these (each once):

| Step | Where | Needed for |
|---|---|---|
| Safari developer features | Safari > Settings > Advanced > "Show features for web developers" | Developer menu and tabs |
| Allow unsigned extensions | Safari > Settings > Developer > "Allow unsigned extensions" (re-tick after every Safari quit) | Running our unsigned Debug build in Safari on macOS; alternative that survives: ad-hoc signing with "Sign to Run Locally" once a team exists |
| Keychain approval | Dialog "codesign wants to sign using key" > Always Allow | First signed build after certificates exist |
| Developer Program | developer.apple.com enrol; then Xcode > Settings > Accounts sign-in, or create an App Store Connect API key for `xcodebuild -allowProvisioningUpdates` | Device testing, TestFlight, App Store |
| Automation consent | System Settings > Privacy & Security > Automation: allow VS Code or Terminal to control Safari and System Events | Only if we script Safari with AppleScript to reload the extension |
| Optional xcode-select | `sudo xcode-select -s /Applications/Xcode.app` | Removes the `DEVELOPER_DIR` prefix; scripts work either way |

Homebrew installs run without sudo; I will ask once per batch (decision 10).

## 8. VS Code and tooling

- `.vscode/extensions.json` recommends `sswg.swift-lang` (Swift language support using Xcode's sourcekit-lsp), `sweetpad.sweetpad` (build and run Apple targets from VS Code), `dbaeumer.vscode-eslint`, `editorconfig.editorconfig`. Install them from the Extensions view when prompted; you can also enable the `code` shell command from the Command Palette ("Shell Command: Install 'code' command in PATH") if you want me to install extensions for you.
- `.vscode/settings.json` points the Swift extension at the Xcode toolchain and hides `DerivedData` and `.atlas/tmp` from search.
- `.vscode/tasks.json` exposes the scripts as tasks (Build macOS, Build iOS Simulator, Run tests).
- Node: `package.json` with `eslint` as the only dev dependency and `node --test tests/` as the test runner; no bundler until the extension needs one (decision ladder).
- Swift formatting uses the `swift-format` that ships with Xcode; SwiftLint stays optional.

## 9. Template corrections before the first real commit

1. Rename product, module and bundle identifiers per decision 4 (project file, `extensionBundleIdentifier` in `ViewController.swift`, `_locales` name, host-app copy).
2. Align deployment targets per decision 5 and add `browser_specific_settings.safari.strict_min_version` to the manifest.
3. Replace `*://example.com/*` with the YouTube match patterns (`*://*.youtube.com/*` covers `www.` and `m.`; `youtube-nocookie.com` and `googlevideo.com` are separate hosts and only added if a feature needs them), keep permissions minimal.
4. Fix the template popup CSS fixed width (iPhone shows the popup as a full-width sheet) and add `color-scheme` and system font for Dynamic Type.
5. Add `PrivacyInfo.xcprivacy` to both app targets (and extension targets if Apple requires it; marked unverified in the notes) with "no tracking, no collected data" declarations.
6. Shared schemes: deferred until CI or a test target exists (auto-created schemes build headlessly today).
7. Remove placeholder strings from `_locales/en/messages.json` and the host app.

## 10. Execution sequence (after your answers)

| Phase | Work | Verification |
|---|---|---|
| 1 Restructure | Move `.git`, `yt.xcodeproj` and the six source folders from `yt/` up to the root and remove `yt/`; move `Shared (Extension)/Resources` to `extension/`; add the sibling `extension` folder to the project with `xcrun xcodeproj group add` and `group include` for both extension targets, list `_locales`, `images` and any future subfolder under `opaque-folders`, drop the old `Resources/` inclusions, then `xcrun xcprojformatter --update`; delete `example_CLAUDE.md`; write README, `.gitignore`, `.editorconfig` | `xcodebuild -list` still shows four targets; headless macOS and iOS Simulator builds succeed; the `.appex` contains `manifest.json` with `_locales/` and `images/` intact; `git status` shows renames only |
| 2 Claude layer | `CLAUDE.md`, `.claude/settings.json`, `.claude/skills/` foundation set, `OVERVIEW.md`, `VENDORED.md`, `.atlas/tmp/README.md`, runbooks, `scripts/`, `.vscode/` | New session loads CLAUDE.md and the SessionStart hook; `scripts/build.sh macos` prints one result line |
| 3 Skills | Author the four Tier A skills from the platform notes; vendor and trim Tier B skills; place Tier D references; write the ledger | Each SKILL.md under 150 lines with a specific description; references resolve |
| 4 Tooling | `brew install xcbeautify gh`; `npm init` with eslint and `node --test`; `swift-lsp` plugin at user level | `scripts/lint.sh` and `scripts/test.sh` pass on the template |
| 5 Template fixes | Section 9 items | Both builds succeed; manifest validates with the packager's warnings reviewed |
| 6 Live check | Launch the macOS app once, you enable the extension in Safari, open youtube.com and see the content script log; iOS Simulator: install, enable in Settings, open m.youtube.com | Documented in `.atlas/runbooks/build-run-debug.md` with screenshots |
| 7 Review and commit | You review; then two commits: "chore: restructure repo for extension plus Apple wrapper" and "chore: add Claude Code setup, skills and runbooks" | You say go; I commit and push to `main` |

Estimated effort: phases 1 to 5 are mostly mechanical and can run back-to-back once decisions 1, 2, 4 and 5 are in; phase 6 needs your clicks in Safari.

## 11. Deferred to the next stage

Feature design (which controls: speed, volume boost, quality, autoplay, mini player, shortcuts, theme, cinema mode as in the Enhancer for YouTube reference you saved), the `youtube-page-model` skill, host-app settings UI, icons and App Store listing, TestFlight, release runbook. None of these are blocked by the foundation work.

## 12. Open items marked unverified in the research

- Whether a free Personal Team suffices for on-device extension testing (Apple docs say Program membership is required).
- Whether the `.appex` needs its own privacy manifest.
- Whether "Request Desktop Website" on iPhone yields the desktop YouTube DOM.
- MDN says `webRequest` exists on iOS 18+, Apple's page says unsupported on iOS; treat as unavailable.
