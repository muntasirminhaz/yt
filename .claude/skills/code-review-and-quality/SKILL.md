---
name: code-review-and-quality
description: "Code review and quality gates for agents: scope limits per change, lint/test/build gates, specific actionable feedback, approval criteria, revert-fast policy. Use before a commit, when reviewing a diff, or when asked whether a change is ready."
license: MIT
metadata:
  author: Agent quality patterns
  version: "1.0"
  focus: rework_prevention, quality_enforcement, feedback_speed
  adapted_for: Commander Safari extension (JS + Swift)
---

# Code Review and Quality

Strict review discipline prevents rework and catches issues before merge. Enforce scope limits, fast feedback and quality gates.

## Core Principles

1. **Small Scope**: max 400 changed lines per change; single concern.
2. **Fast Feedback**: review within hours, not days.
3. **Quality Gates**: every check passes before merge.
4. **No Approval Without Changes**: require fixes, or evidence a check was run, never "looks good".
5. **Revert Fast**: merged code that fails is reverted first, fixed second.

## 1. Scope Enforcement

Measure before reviewing: files changed, lines added and removed, commits, concerns.

- More than 15 files or 400 added lines: split.
- More than one concern (extension JS, Swift bridge and project file for unrelated reasons): split.
- More than 5 commits for one slice: squash.

Valid: "feat: mute autoplay toggle. background.js, content.js, popup.*, one test. 140 lines, 5 files, 1 commit." Invalid: "Rework settings, add native sync, restyle popup. 1800 lines, 40 files, 14 commits."

## 2. Quality Gates

| Gate | Command | Pass condition |
|------|---------|----------------|
| Lint | `scripts/lint.sh` | ESLint and swift-format report nothing |
| Tests | `scripts/test.sh` | `JS TESTS OK` (includes the manifest test); Swift ok, or skipped with no target |
| Build | `scripts/build.sh macos`, plus `ios` when iOS files changed | exit 0, no `error:` in the log |
| Project file | `xcrun xcprojformatter --update Commander.xcodeproj && xcodebuild -list` after hand edits | all four targets listed |
| Dependencies | `git diff package.json` | no runtime deps; new dev deps approved |

## 3. Fast Feedback Loop

Vague: "This looks off. Needs work. Not ready." Specific and actionable:

```
Request changes

1. Navigation handler runs twice (extension/content.js:42)
   Issue: yt-navigate-finish and the MutationObserver both call apply()
   Fix: track the current video id; apply only when it changes

2. Hard-coded copy (extension/popup.html:12)
   Issue: "Mute autoplay" is inline; it belongs in _locales
   Fix: i18n key plus browser.i18n.getMessage in popup.js

Approved after fixes
```

Each item: location, issue, fix, and why when it is not obvious.

## 4. Review Checklist

- [ ] Scope: single concern, under 400 lines, five or fewer files
- [ ] `scripts/lint.sh` clean, `scripts/test.sh` green, build ok; new logic covered by a `node:test` or XCTest case
- [ ] `minimal-code-ladder` climbed: no unrequested abstractions or files
- [ ] `browser.*` with Promises; feature-detected above iOS 17 / macOS 14; background state in `browser.storage.local`, listeners at top level
- [ ] Content script works when injected mid-page, after SPA navigation, and on `m.youtube.com`
- [ ] No `eval`, inline scripts, remote code or `innerHTML` with untrusted strings; host permissions unchanged or justified (App Review 4.4.2)
- [ ] User-facing strings in `_locales`; no "YouTube" in the product name
- [ ] `beginRequest` replies once with a JSON-serialisable payload; App Group entitlement on all four targets and `PrivacyInfo.xcprivacy` updated when used
- [ ] `project.xcproj` reformatted and `xcodebuild -list` run after hand edits
- [ ] No leftover `console.log`, `print`, timing code, commented-out blocks, secrets or scratch files
- [ ] Only `// note:` markers as comments, each naming the limit and the upgrade path
- [ ] Commit message names the behaviour and the criteria met

## 5. Approval Criteria

Approve only when all hold: gates green, scope within limits, new code tested, checklist satisfied, change explained in the commit body.

Approve message: "Approved. Gates green (lint, test, build macOS). Scope: 1 concern, 140 lines, 5 files. Tests cover defaults and the navigation handler. Merge with `git merge --ff-only`." Request-changes message: a numbered list as in section 3, then "Re-request review after fixes."

## 6. Revert Fast Policy

When merged code breaks the build, a test, or the extension in Safari:

1. `git revert <merge commit>` immediately; do not wait for the fix.
2. Record the failure and suspected cause in `.atlas/reports/` or the plan.
3. Fix on a new branch through the full gate list; merge as a separate change.

## 7. Testing Review Quality

- A change with 20 files or 600 lines is rejected on scope before its content is read; any red gate rejects regardless of size.
- A diff containing a stray `console.log` or `print(` fails the hygiene check.
- A review comment without location and fix is rewritten before it is sent.

## 8. Best Practices Checklist

- [ ] Every change under 400 lines and one concern
- [ ] All quality gates green before merge
- [ ] Feedback specific: location, issue, fix
- [ ] Review within 24 hours of the request
- [ ] Revert immediately on a failure after merge
- [ ] No approval without a concrete check having been run
- [ ] New code covered by tests
- [ ] No debug output left behind
- [ ] Commit messages clear and descriptive
- [ ] Commits, reverts and merges only with explicit go-ahead

## Related Skills

- `incremental-implementation`: build small reviewable slices.
- `token-efficiency-patterns`: keep reviews concise.
- `debugging-and-error-recovery`: fix issues found in review.
