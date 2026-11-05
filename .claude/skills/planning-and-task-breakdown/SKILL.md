---
name: planning-and-task-breakdown
description: "Task planning and decomposition for agents: break a spec into small verifiable tasks with acceptance criteria, dependencies and risk before coding. Use before non-trivial work, multi-file changes, or anything saved to .atlas/plans/."
license: MIT
metadata:
  author: Agent execution patterns
  version: "1.0"
  focus: execution_quality, error_prevention, rework_avoidance
  adapted_for: Commander Safari extension (JS + Swift)
---

# Planning and Task Breakdown

Plan before executing to avoid rework, hallucinated APIs and half-finished features. Save the plan with a timestamp to `.atlas/plans/` before non-trivial work (project rule).

## Core Principles

1. **Decompose First**: break the spec into tasks before writing code.
2. **Verify Each Step**: every task has acceptance criteria and a check.
3. **Surface Dependencies**: identify blockers early.
4. **Risk Assessment**: flag high-uncertainty tasks.
5. **Linear Execution**: complete tasks in dependency order; no parallel half-work.

## 1. Task Decomposition Template

One block per task in the plan file:

```
### T<n>: <title>
Does: <one sentence>
Touches: <files>
Depends on: <task ids or none>
Accept: <testable statements>
Complexity: low | medium | high; Risk: <what could go wrong> -> <mitigation>
```

Execution order is a topological sort of `Depends on`; a cycle means the split is wrong.

## 2. Specification Analysis

Before splitting, extract from the request:

- User stories: who wants what, for which benefit; acceptance criteria stated or implied.
- Technical constraints: MV3 CSP, non-persistent background on iOS, `m.youtube.com` DOM, unsigned local builds, no runtime deps.
- Assumptions: site access granted? native messaging needed? App Group registered?
- Unknowns: anything you would have to verify in Apple docs or by running the app. List them; do not guess.

## 3. Task Breakdown Example

Request: "Add a mute-on-autoplay toggle."

- T1 Setting storage. Touches `extension/background.js`. Accept: `muteAutoplay` defaults to `false` in `browser.storage.local`; one `node:test` case. Low.
- T2 Content script. Depends on T1. Touches `extension/content.js`. Accept: on `yt-navigate-finish` (MutationObserver fallback) the `<video>` is muted when the setting is on; works when injected mid-page; selectors for desktop and `m.youtube.com`. Medium.
- T3 Popup control. Depends on T1. Touches `popup.html`, `popup.js`, `popup.css`, `_locales/en/messages.json`. Accept: labelled switch, keyboard operable, reads and writes the setting. Low.
- T4 Verification. Depends on T2, T3. Accept: `scripts/test.sh js` green, `scripts/lint.sh` clean, `scripts/run-mac.sh` shows the toggle working on a watch page. Low.

Risks: T2, YouTube DOM changes (feature-detect the element, fail silently); T3, popup is a sheet on iPhone (no fixed widths).

## 4. Acceptance Criteria Template

Vague: "User can mute autoplay", "Popup looks good". Specific and testable:

- `browser.storage.local.get("muteAutoplay")` resolves to `{ muteAutoplay: false }` on first run.
- `video.muted === true` within 500 ms of navigation when the setting is on.
- The toggle has an accessible name from `messages.json` and responds to Space and Enter.
- `scripts/test.sh js` passes; `scripts/lint.sh` reports no findings.

## 5. Dependency Graph

```
T1 storage ---> T2 content script ---> T4 verify
       \------> T3 popup -----------/
```

A task with zero dependencies goes first; verification goes last.

## 6. Risk Assessment

Score = complexity (low 1, medium 3, high 5) times uncertainty. Uncertainty multipliers for this stack:

- Touches the Swift bridge or App Group entitlements: x2
- Depends on YouTube DOM or undocumented events: x2
- Needs an API newer than iOS 17 / macOS 14: x1.5
- Changes `manifest.json` permissions or `project.xcproj`: x1.5

Under 3 is low, under 8 medium, otherwise high. High-risk tasks get a spike first: the smallest experiment that confirms the approach, output captured under `.atlas/tmp/`.

## 7. Task Execution Checklist (before starting a task)

- [ ] Dependencies complete and verified
- [ ] Acceptance criteria written and testable
- [ ] Test or run command known (`scripts/test.sh`, `scripts/run-mac.sh`)
- [ ] Risks and mitigations listed
- [ ] No open blocker (unapproved dependency, unsigned-build limit, unregistered App Group)

## 8. Testing the Plan

- Every task has at least one criterion a command or test can verify.
- No task depends on itself, directly or transitively; the first task has zero dependencies.
- Any task over roughly 400 changed lines or more than one concern is split.

## 9. Best Practices Checklist

- [ ] Decompose the spec into tasks before coding
- [ ] List dependencies; draw the graph
- [ ] Define specific, testable acceptance criteria
- [ ] Assess risk per task; spike the high-risk ones
- [ ] Plan the test command for each task
- [ ] Verify dependencies before starting a task
- [ ] Execute in dependency order
- [ ] Document blockers and mitigations in the plan
- [ ] Test at task completion, not after all tasks
- [ ] Review each task against its criteria before moving on

## Related Skills

- `incremental-implementation`: execute tasks as thin slices.
- `debugging-and-error-recovery`: handle task failures.
- `context-engineering`: load context per task.
