---
name: app-extension-architecture-workflow
description: Route Apple app-extension work across extension points, targets, isolation, entitlements, shared containers, lifecycle, privacy, testing, signing, distribution, and handoffs. Use when the extension point is not settled.
metadata:
  source: https://github.com/gaelic-ghost/socket/tree/ccbde05d2d542ce20d1645b425c75dc531b53721/plugins/apple-dev-skills/skills/app-extension-architecture-workflow
  commit: ccbde05d2d542ce20d1645b425c75dc531b53721
  license: Apache-2.0
  vendored: "2026-11-02"
---

# App Extension Architecture Workflow

> Vendoring note: copied from the gaelic-ghost `apple-dev-skills` plugin. Upstream, this workflow hands off to many sibling workflows and to an XcodeGen-based workspace layout. None of those sibling skills are installed in this repo, and this repo uses a plain `.xcodeproj`. Wherever a sibling workflow is named below, see "Fallbacks and Handoffs" for its status here.

## Purpose

Choose and structure an Apple app extension before implementation. Apple documents app extensions as separate bundles whose code runs in a separate process; the extension point and host define the lifecycle, APIs, and activation contract. This skill owns those reusable mechanics, not product-specific framework behavior.

It owns extension-point routing, target and process boundaries, activation, entitlements, app groups and shared containers, bounded data flow, privacy, testing, signing, and distribution. It does not absorb MailKit, File Provider, Finder Sync, Safari, Messages/iMessage, communication-notification, VoIP, Push to Talk, widget, intent, or other product-framework guidance.

## When To Use

- Use this skill when a request needs an Apple app extension but the right extension point, host relationship, or target structure is unclear.
- Use this skill when planning a containing app and extension targets, process isolation, activation, app groups, shared containers, XPC, privacy boundaries, signing, or distribution.
- For Safari-specific extension and SafariServices choices, read the reference-only copy of `safari-extension-control-workflow` (path in "Fallbacks and Handoffs").
- Upstream routes MailKit, File Provider / Finder Sync, Messages/iMessage, communication-notification, VoIP, Push to Talk, Apple-documentation lookup, and Xcode build/test mechanics to dedicated sibling workflows. None of those are installed here; use Apple's documentation for the named extension point directly.

## Single-Path Workflow

1. Classify the extension point and host:
   - name the system host, supported platform, activation trigger, user-visible configuration, and expected lifetime
   - choose an existing Apple extension point and its documented template or contract; do not invent a generic extension target
   - route product behavior to its dedicated workflow before designing shared mechanics
2. State the documented behavior relied on:
   - app extensions are separate bundles that run in separate processes
   - the host controls activation and the extension-point API contract
   - use the extension point’s APIs and lifecycle rather than assuming the containing app is running or reachable
   - stop and surface a conflict if current code assumes a lifecycle, privilege, or data access that Apple documentation does not support
3. Design targets and ownership:
   - give the containing app, each extension target, and any shared framework or package one clear job
   - upstream house rule, not used in this repo: place every extension target at `Apps/<ExtensionTarget>/` as a peer of its containing app and register it through XcodeGen. This repo uses a plain `.xcodeproj`, so keep extension targets where Xcode's template creates them
   - require the containing app's target to name and embed the extension explicitly (Build Phases > Embed Foundation Extensions / Embed App Extensions); directory proximity or target naming is not host evidence
   - keep extension entry points thin; put portable domain logic in deliberately shared source only when both targets need it
   - do not use a shared target to smuggle UI, host-only state, or privileged access across process boundaries
4. Define the process and data-flow contract:
   - state where each operation runs, how work is activated, what happens when the host interrupts or relaunches it, and what can be retried safely
   - prefer the extension point’s documented request, completion, and cancellation APIs
   - use XPC only where the extension-point contract or a documented app-extension API actually supports it
   - make payload types small, typed, versioned when persisted, and free of secrets unless the secure storage and access policy is explicit
5. Minimize entitlements and shared state:
   - grant each target only the capabilities it needs
   - use an App Group only when the app and extension genuinely need a shared container or documented IPC support
   - validate membership in every participating target; on macOS, test actual container access rather than trusting a returned URL alone
   - do not treat an App Group as a general cross-process database, privilege escalation path, or substitute for an extension-point API
6. Plan privacy and failure behavior:
   - inventory data read by the host, extension, and shared container separately
   - retain the minimum data for the minimum time, avoid sensitive logs, and make user-facing effects explainable
   - define cancellation, timeout, unavailable-host, disabled-extension, migration, and stale-shared-state behavior before shipping
7. Plan validation and distribution:
   - validate target membership, `Info.plist` extension-point configuration, entitlements, signing, embedding, install/enable state, activation, and clean-device behavior
   - test the extension independently where its framework permits; extract pure/shared logic into a testable target instead of trying to unit-test an unsupported extension process directly
   - validate the same signing and distribution path intended for users; do not infer App Store, notarization, or enterprise behavior from a development build
8. Return one recommendation with the extension point, target map, lifecycle/data-flow boundary, entitlement/share plan, privacy plan, validation sequence, and the next focused handoff.
9. Upstream hands settled target creation or existing-target adoption to its `bootstrap-xcode-workspace` workflow (XcodeGen-based). That workflow is not vendored. In this repo, create or adopt extension targets directly in Xcode (File > New > Target) and confirm the containing app embeds them in its Build Phases.

## Inputs

- `request`: optional extension feature request.
- `platforms`: optional Apple platforms and deployment targets.
- `host`: optional system host or containing-app context.
- `data_needs`: optional private, shared, remote, or user-selected data requirements.
- `distribution`: optional development, TestFlight, App Store, notarized, enterprise, or unknown path.
- Defaults:
  - use a documented extension point and its host contract
  - preserve process isolation and least privilege
  - prefer no shared container until a concrete shared-data need exists
  - keep product-specific behavior (Safari, MailKit, Messages, and so on) out of this workflow

## Outputs

- `status`: `success`, `handoff`, or `blocked`.
- `extension_plan`:
  - selected extension point and documented behavior relied on
  - containing-app, extension-target, and shared-code ownership
  - activation, process, lifecycle, cancellation, and restart behavior
  - entitlement, App Group, container, and data-flow decisions
  - privacy, signing, distribution, and validation plan
  - explicit next workflow handoff

## Guards and Stop Conditions

- Do not call an extension a thread or assume it shares the containing app’s memory, lifecycle, or UI state.
- Do not add a generic coordinator, manager, bridge, repository, or shared store merely to connect an app and extension. Name the documented transport and the concrete data it carries.
- Do not add an App Group, shared Keychain access group, network entitlement, or broad file access without naming the participating targets and the required data flow.
- Do not place Messages/iMessage collaboration, communication-notification product policy, VoIP, or Push to Talk behavior in this workflow.
- Do not claim an extension is enabled, activated, signed, distributable, or testable until the relevant host and build evidence exists.
- Do not create or recommend a root `Extensions/` directory, a separate extension project, or an inferred host relationship. Extensions are peer targets of the containing app, and the containing app embeds them explicitly.
- Stop with `blocked` when the requested behavior needs an undocumented extension point, host privilege, private system data, or cross-process access the platform does not expose.

## Fallbacks and Handoffs

Upstream hands off to the sibling workflows below. Their status in this repo:

| Upstream handoff | Status here |
|---|---|
| `diagnose-apple-entitlements` (capability differs between source, profile, signed artifact, runtime) | Installed as an active skill: `.claude/skills/diagnose-apple-entitlements/` |
| `safari-extension-control-workflow` (Safari-specific extension choices) | Reference-only copy: `.atlas/knowledge/vendor/gaelic-ghost-socket/plugins/apple-dev-skills/skills/safari-extension-control-workflow/` |
| `macos-distribution-workflow` (signing, notarization, Gatekeeper, artifact inspection) | Reference-only copy: `.atlas/knowledge/vendor/gaelic-ghost-socket/plugins/apple-dev-skills/skills/macos-distribution-workflow/` |
| `macos-sandbox-file-access-workflow` (security-scoped bookmarks, user-selected files) | Not vendored; the installed `macos-capabilities` skill (`.claude/skills/macos-capabilities/sandboxing.md`) covers the basics |
| `mailkit-workflow`, `file-provider-and-finder-sync-workflow`, `app-intents-workflow` | Not vendored; use Apple's documentation for the extension point |
| `xcode-build-run-workflow`, `xcode-testing-workflow`, `bootstrap-xcode-workspace` | Not vendored; work in Xcode / `xcodebuild` directly (the installed `asc-xcode-build` skill covers archive and export) |
| `explore-apple-swift-docs`, `references/snippets/apple-xcode-project-core.md` | Not vendored; read developer.apple.com directly |

## References

### Workflow References

- `references/extension-points-targets-and-lifecycle.md`
- `references/entitlements-shared-containers-and-data-flow.md`
- `references/privacy-validation-signing-and-distribution.md`

### Authoritative Sources

- [Adding support for app extensions to your app](https://developer.apple.com/documentation/extensionfoundation/adding-support-for-app-extensions-to-your-app)
- [Building an app extension to support a host app](https://developer.apple.com/documentation/extensionfoundation/building-an-app-extension-to-support-a-host-app)
- [Configuring app groups](https://developer.apple.com/documentation/xcode/configuring-app-groups)
