---
name: debugging-and-error-recovery
description: "Systematic debugging for agents: reproduce, localize, reduce, fix, guard. Covers failing tests, xcodebuild errors, content scripts that stop after YouTube navigation, lost background state, native messaging and permission faults."
license: MIT
metadata:
  author: Agent quality patterns
  version: "1.0"
  focus: error_recovery, rework_prevention, systematic_diagnosis
  adapted_for: yt Safari extension (JS + Swift)
---

# Debugging and Error Recovery

Debug systematically to avoid thrashing. Five steps, in order, none skipped: reproduce, localize, reduce, fix, guard.

## Core Principles

1. **Reproduce First**: confirm the error occurs consistently.
2. **Localize**: narrow to the failing component.
3. **Reduce**: build the minimal reproduction.
4. **Fix**: address the root cause, not the symptom.
5. **Guard**: add a test that fails without the fix.

## 1. Error Triage Framework

**Step 1, Reproduce.** Run the exact failing command: `scripts/test.sh js -- --test-name-pattern <name>`, `scripts/build.sh macos`, or `scripts/run-mac.sh` on a specific watch URL. Three runs: consistent means proceed; intermittent means capture logs under `.atlas/tmp/` and find the pattern before touching code.

**Step 2, Localize.** Walk the path and test each hop alone: manifest declares it; content script injected; message reaches background; `sendNativeMessage` reaches `beginRequest`; reply arrives. Stop at the first hop that fails. Read the stack trace or `error:` line for file and line before reading any file.

**Step 3, Reduce.** Strip to the smallest input that still fails: one URL, one setting, one message, one selector. For JS, a `node:test` case against the pure function; for the bridge, a single `sendNativeMessage` from the background console.

**Step 4, Fix.** State the root cause in one line before editing. Apply the smallest change that makes the reduced case pass; re-run the original reproduction as well.

**Step 5, Guard.** Add the regression test, confirm it fails with the fix reverted and passes with it, then run the full `scripts/test.sh` and `scripts/lint.sh`.

## 2. Real-World Example: Content Script Stops After Navigation

Scenario: the mute behaviour works on page load but not after clicking another video.

- Reproduce: load a watch page, confirm muted, click a related video, confirm not muted. Consistent.
- Localize: the content script ran once; YouTube is a single-page app and Safari has no `webNavigation.onHistoryStateUpdated`, so nothing re-runs.
- Reduce: a two-line content script logging `location.href` on `yt-navigate-finish` shows the event fires and nothing listens.
- Fix (root cause): listen for `yt-navigate-finish` with a MutationObserver on the player as fallback; re-apply on each navigation.
- Guard: a `node:test` case for the navigation handler's idempotence; manual check recorded in the plan.

Symptom fixes to avoid: a 500 ms `setInterval`, or forcing a full reload. Both mask the cause and cost battery.

## 3. Error Categories and Recovery

| Type | Likely cause here | Recovery |
|------|-------------------|----------|
| Syntax / lint | ESLint or swift-format finding; `error:` in the xcodebuild log | `scripts/lint.sh --fix`; grep the log in `.atlas/tmp/build/` |
| Runtime | Null DOM element (`m.youtube.com` differs); API missing below iOS 17 / macOS 14; background unloaded, state lost | Feature-detect; keep state in `browser.storage.local`; register listeners at top level |
| Logic | Selector matched the wrong element; handler ran twice after navigation; wrong default | Write the edge-case test first; make the handler idempotent |
| Performance | MutationObserver on `document` with heavy work per mutation; work on every `timeupdate` | Observe the narrowest node; debounce; `browser.alarms` for periodic work |
| External | Site access not granted; "Allow unsigned extensions" reset when Safari quit; YouTube DOM changed; App Group not registered | Check the precondition before debugging code; fail silently in the page; record the gotcha |

## 4. Debugging Workflow

- Content script: Safari Web Inspector on the YouTube tab; `console.log` output appears there.
- Background and popup: Develop menu, Web Extension Background Content; or inspect the popup.
- Swift handler: `os_log` lines in Console.app, or `log stream --predicate 'subsystem CONTAINS "cyberm3.yt"'` redirected to `.atlas/tmp/`.
- Build and test failures: the scripts write `.atlas/tmp/build/<name>.log`; grep `error:|failed`, never read the whole log.
- Time a suspect path; anything over a frame on `timeupdate` is a performance bug.

```js
const t0 = performance.now();
applySetting(video);
console.log("applySetting ms", (performance.now() - t0).toFixed(1));
```

Remove timing and logging before the commit.

## 5. Testing Error Recovery

- The reduced case becomes a committed `node:test` or XCTest, not a one-off script.
- The guard test fails with the fix reverted (verify once, then restore).
- Full `scripts/test.sh` and `scripts/lint.sh` pass after the fix.
- A gotcha discovered on the way goes to `.claude/rules/` or `.atlas/knowledge/`, in one line.

## 6. Best Practices Checklist

- [ ] Reproduce first; confirm it is consistent
- [ ] Localize to one hop of the path before editing
- [ ] Build a minimal reproduction
- [ ] Name the root cause in one line before fixing
- [ ] Fix makes the reduced case and the original case pass
- [ ] Regression test fails without the fix
- [ ] Full test and lint run before commit
- [ ] Error and fix reason recorded in the plan
- [ ] No bandaid fixes, polling workarounds or empty catch blocks
- [ ] New gotchas written down once, in rules or knowledge

## Related Skills

- `incremental-implementation`: implement fixes as slices.
- `planning-and-task-breakdown`: plan the fix as a task.
- `code-review-and-quality`: review the fix.
