---
name: diagnose-apple-entitlements
description: Trace Apple entitlements across project source, account/profile authorization, final signed main or nested code, and runtime policy or consent. Use for missing or rejected entitlements, export-only failures, helpers, and re-signing.
metadata:
  source: https://github.com/gaelic-ghost/socket/tree/ccbde05d2d542ce20d1645b425c75dc531b53721/plugins/apple-dev-skills/skills/diagnose-apple-entitlements
  commit: ccbde05d2d542ce20d1645b425c75dc531b53721
  license: Apache-2.0
  vendored: "2026-11-02"
---

# Diagnose Apple Entitlements

> Vendoring note: copied from the gaelic-ghost `apple-dev-skills` plugin. The sibling workflows it names are not installed in this repo; see "Fallbacks and Handoffs" for their status.

## Purpose

Trace one desired behavior through tracked project source, developer-account/profile authorization, the final signed artifact and all nested code, and the observed runtime result. Identify the owner that must change without treating an entitlement as user consent or successful access.

## When To Use

- Use for capability/entitlement/profile mismatches, export-only failures, nested-code differences, restricted entitlement questions, and re-signed artifacts.
- Use before editing project settings when the actual owner could be the developer account, profile, signer, export transform, runtime policy, or user decision.
- Do not use to invent or recommend private entitlements for ordinary third-party products.

## Single-Path Workflow

1. Define the desired operation, target, platform/OS, distribution channel, artifact, and exact runtime error. Establish from current Apple documentation whether the capability is required or permitted (upstream routes this through its `explore-apple-swift-docs` workflow, which is not vendored; read developer.apple.com directly).
2. Create the five-state record in `references/five-state-entitlement-comparison.md`: desired behavior, tracked source, account/profile authorization, signed result, and runtime result.
3. Inspect tracked source: Xcode capability, `.entitlements`, Info.plist usage description, build settings, target membership, helper/extension/XPC configuration, generated-project source, configuration, and archive/export settings.
4. Inspect account authorization: Team/App ID, capability enablement, restricted-entitlement approval, certificate, provisioning profile entitlements, environment/device scope, and whether the change is portal-only or API-supported.
5. Treat the actual built/exported artifact as source of truth for signed state. Follow `references/artifact-and-nested-code-inspection.md` for the main executable, helpers, extensions, XPC services, frameworks, daemons/tools, and embedded profiles.
6. Compare exact keys and values. Preserve public, restricted, private/undocumented, development-only, environment, and exception classifications only when supported by current evidence. Read `references/restricted-and-private-entitlements.md`.
7. Evaluate runtime controls separately: App Sandbox, Hardened Runtime, library validation, TCC/user consent, service authorization, Gatekeeper/notarization, Data Vault/SIP/platform policy, and responsible process identity.
8. If the artifact was re-signed, patched, exported differently, or otherwise transformed, record a new artifact identity and invalidate assumptions about the original signature/notarization behavior.
9. Classify the mismatch and select exactly one next owner using `references/routing-and-validation.md`. Make the source/account/build change through that owner's workflow, rebuild/export, and repeat the signed and runtime comparisons.
10. Report every state, exact mismatch, owner, evidence/confidence, validation result, and what remains unproven.

## Inputs

- desired behavior, target/platform/OS, distribution channel, artifact, and exact error
- project/capability source, build settings, entitlements, Info.plist, and target graph
- Team/App ID/profile/certificate/approval context
- signed main and nested artifacts, embedded profiles, transformations, and runtime environment

## Outputs

- five-state entitlement comparison with exact key/value differences
- entitlement classification and responsible owner
- minimum correction/rebuild/export path
- final signed-artifact and runtime validation result with remaining uncertainty

## Guards and Stop Conditions

- Do not invent entitlement keys, values, availability, restricted approval, or profile support.
- Do not hand-edit generated project/profile artifacts or casually re-sign a bundle to hide a source mismatch.
- Do not call an entitlement effective until the final responsible executable and required runtime operation are checked.
- Do not confuse a usage description, capability, entitlement, sandbox exception, profile allowance, or user consent.
- Stop when the actual artifact or responsible nested executable is unavailable; report source-only conclusions as unverified.

## Fallbacks and Handoffs

Upstream hands off to the sibling workflows below. Their status in this repo:

| Upstream handoff | Status here |
|---|---|
| `apple-developer-provisioning-workflow` (App ID, capability, certificate, profile, account-side changes) | Reference-only copy: `.atlas/knowledge/vendor/gaelic-ghost-socket/plugins/apple-dev-skills/skills/apple-developer-provisioning-workflow/` |
| `macos-distribution-workflow` (Hardened Runtime, nested signing, Gatekeeper, notarization, stapling) | Reference-only copy: `.atlas/knowledge/vendor/gaelic-ghost-socket/plugins/apple-dev-skills/skills/macos-distribution-workflow/` |
| `app-extension-architecture-workflow` (extension/helper target structure) | Installed as an active skill: `.claude/skills/app-extension-architecture-workflow/` |
| Xcode project/build workflows (tracked capability, target, signing, archive, export changes) | Not vendored; make the change in Xcode's Signing & Capabilities pane or the `.entitlements` file directly; `asc-xcode-build` (installed) covers archive/export |
| `macos-sandbox-file-access-workflow` | Not vendored; the installed `macos-capabilities` skill (`.claude/skills/macos-capabilities/sandboxing.md`) covers the basics |
| `macos-privacy-permissions-workflow`, `audit-apple-signing-and-containment`, `research-macos-security-control`, `explore-apple-swift-docs`, `references/snippets/apple-xcode-project-core.md` | Not vendored; use `codesign` / `security` inspection from `references/artifact-and-nested-code-inspection.md` and Apple's documentation directly |

## References

- `references/five-state-entitlement-comparison.md`
- `references/restricted-and-private-entitlements.md`
- `references/artifact-and-nested-code-inspection.md`
- `references/routing-and-validation.md`
- [Entitlements](https://developer.apple.com/documentation/bundleresources/entitlements)
- [Diagnosing issues with entitlements](https://developer.apple.com/documentation/bundleresources/diagnosing-issues-with-entitlements)
