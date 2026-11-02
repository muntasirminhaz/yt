---
name: incremental-implementation
description: "Incremental implementation for agents: build features as thin vertical slices across storage, background, content script, popup and the Swift bridge; test each slice; keep every change revertible. Use when implementing any multi-step feature or fix."
license: MIT
metadata:
  author: Agent execution patterns
  version: "1.0"
  focus: rework_prevention, quality_assurance, safety
  adapted_for: yt Safari extension (JS + Swift)
---

# Incremental Implementation

Build features in thin vertical slices: one complete path from stored setting to visible behaviour per iteration. Test at each stage. Fail fast and pivot.

## Core Principles

1. **Thin Vertical Slices**: one feature end-to-end per iteration, not all storage then all UI.
2. **Test at Each Step**: do not defer testing to the end.
3. **Fail Fast**: run the check immediately after the change.
4. **Reversible Changes**: each commit stands alone and reverts cleanly.
5. **Safety Mechanisms**: lint, tests and a headless build gate every commit.

## 1. Vertical Slice Architecture

A slice here spans setting, background, content script or popup, optional Swift bridge, test. Each one is demonstrable with `scripts/run-mac.sh` and independently revertible.

```
Wrong (horizontal): all storage keys, then all listeners, then all popup UI, then wire, then test
Right (vertical):   slice 1 = one setting + listener + popup control + node:test      (done)
                    slice 2 = content script reads the setting on the watch page      (done)
                    slice 3 = app-side mirror through App Group + native message      (done)
```

## 2. Slice Definition Template

```
Slice: <name>
Does: <one sentence of user-visible behaviour>
Accept: <testable statements>
Files: <exact paths under extension/, the Swift folders, tests/>
Tests: <node:test names or XCTest methods>
Depends on: <previous slice or none>
```

A slice touching more than five files is two slices.

## 3. Implementation Workflow Per Slice

1. Read the files in `Files` and the matching `.claude/rules/*.md`; climb the `minimal-code-ladder`.
2. Storage and background first: keys, defaults, top-level listeners (`browser.storage.local`, `browser.alarms`).
3. Write the `node:test` case; run `scripts/test.sh js -- --test-name-pattern <name>`.
4. Content script or popup: smallest DOM change; feature-detect; handle mid-page injection and `m.youtube.com`.
5. Swift bridge only if the slice needs it: `beginRequest`, JSON-serialisable payload, reply once.
6. Quality: `scripts/lint.sh --fix`, then `scripts/build.sh macos` (JS reaches Safari only after a rebuild).
7. Demonstrate with `scripts/run-mac.sh` or `scripts/run-ios-sim.sh`; note the result in the plan.
8. Commit only with an explicit go-ahead in the current conversation (project rule).

## 4. Safety Mechanisms: Pre-Commit Checks

Run all of these; any failure blocks the commit.

| Check | Command |
|-------|---------|
| Lint JS and Swift | `scripts/lint.sh` |
| Tests (JS now; Swift once a target exists; includes `tests/manifest.test.js`) | `scripts/test.sh` |
| Headless build | `scripts/build.sh macos`; `scripts/build.sh ios` when iOS files changed |
| Project file valid after hand edits | `xcrun xcprojformatter --update yt.xcodeproj && xcodebuild -list` |

## 5. Test-as-You-Go Pattern

Write the test with the code, one case per acceptance criterion.

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { defaults } from "../extension/settings.js";

test("muteAutoplay defaults to off", () => {
  assert.equal(defaults.muteAutoplay, false);
});
```

Pure logic lives in importable modules so `node:test` can reach it; DOM and `browser.*` calls stay thin at the edges. Swift logic gets an XCTest once a test target exists; until then, demonstrate through `scripts/run-mac.sh` and record it.

## 6. Commit Hygiene

- Every check in section 4 green before the commit.
- One slice per commit. Message: `feat: <behaviour> (slice n)`; body lists what changed and an `Accept:` line naming the checks that passed.
- No secrets, no `.atlas/tmp/` contents, no DerivedData, no `node_modules`.
- Manifest or `project.xcproj` changes travel in the same commit as the code that needs them.

## 7. Rollback Strategy

- `git revert <commit>` per slice, newest first; there is no database to roll back. Rebuild and re-run before declaring the rollback complete.
- Re-check `manifest.json` and `project.xcproj` after a revert: a removed permission, content script or folder must not linger; re-run `xcodebuild -list`.

## 8. Testing Incremental Implementation

- Each slice can be exercised alone: its test passes with later slices absent, and the pre-commit table runs clean on every slice.
- Reverting the newest slice leaves the previous slice's tests green.

## 9. Best Practices Checklist

- [ ] Feature defined as thin vertical slices
- [ ] One slice completed fully before the next starts
- [ ] Tests written alongside code
- [ ] `scripts/test.sh` run after each slice
- [ ] Pre-commit checks run before every commit
- [ ] Commits small, single-slice, clearly messaged
- [ ] Each commit independently revertible
- [ ] No secrets or scratch files committed
- [ ] Commit only after an explicit go-ahead
- [ ] Feature branch deleted after merge

## Related Skills

- `planning-and-task-breakdown`: plan slices before implementation.
- `debugging-and-error-recovery`: handle slice failures.
- `code-review-and-quality`: review completed slices.
