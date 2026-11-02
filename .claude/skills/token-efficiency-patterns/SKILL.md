---
name: token-efficiency-patterns
description: "Token efficiency for agent workflows: compress descriptions, defer references, prefer runnable scripts over walkthroughs, normalize tool output, explain once, measure savings. Use when writing skills, prompts, reports or delegation briefs."
license: MIT
metadata:
  author: Agent optimization patterns
  version: "1.0"
  focus: token_reduction, cost_efficiency, execution_speed
  adapted_for: yt Safari extension (JS + Swift)
---

# Token Efficiency Patterns

Agents waste 50-90% of tokens on verbose documentation, unnecessary context and repeated explanation. Compress, and disclose progressively.

## Core Principles

1. **Compress Descriptions**: 50-80% reduction by removing redundancy.
2. **Defer References**: load details only when explicitly needed.
3. **Executable Scripts**: runnable code over markdown walkthroughs.
4. **Normalize Output**: strip metadata before re-injecting tool results.
5. **Measure and Monitor**: track usage; optimize the highest-waste areas first.

## 1. Skill Description Compression

Wrong (verbose): "This skill helps with understanding and implementing settings sync for your extension. Settings sync is important because users expect the app and the extension to agree. It can be used to..."

Right (specific, under 250 characters): "Settings shared between app and extension: App Group UserDefaults, browser.storage.local mirror, native-message handshake, change propagation."

Removed: "helps with", "important", "can be used to", and the explanation of what the concept is.

## 2. Trigger Phrase Optimization

- No lists of "use when", "activate when", "relevant if". The router infers from keywords in the description.
- Put the nouns a request would contain in the description: "popup", "content script", "native messaging", "xcodebuild", "App Review".
- One sentence on when to activate is enough; twelve synonyms cost about 200 tokens and add nothing.

## 3. Body Compression

- Drop paragraphs that explain the code; keep the code.
- Drop comments that restate the line below them, and context that applies everywhere.
- A snippet of 3-8 lines that runs beats a 40-line class with placeholders.

```js
const { muted = false } = await browser.storage.local.get("muted");
await browser.storage.local.set({ muted: !muted });
```

## 4. Progressive Reference Disclosure

Keep the core pattern in the skill body; move the rest behind a pointer.

- Core: the decision rule and one example.
- Deferred: advanced variants, edge cases, migration notes, long tables.
- Pointer form: "iOS popup sizing: `.claude/rules/extension.md`", "headless build flags: `scripts/build.sh`".
- Typical saving: 700 tokens of body down to under 100, with 200 loaded on demand.

## 5. Normalize Tool Output

- Test run: failing names and assertion messages, not the pass list or timings.
- `xcodebuild`: `grep -E 'error:|failed' | sort -u | head -20`, not the log (the scripts do this).
- `git log`: `--oneline -5`.
- Directory listing: the files relevant to the task, never `node_modules` or DerivedData.
- JSON: the fields read later, as `key: value` lines.

## 6. Avoid Redundant Explanations

Define a term once, then refer to it by name.

- Wrong: every task re-explains "the background script is non-persistent on iOS, which means...".
- Right: `.claude/rules/extension.md` states it once; tasks say "non-persistent background" and move on.
- Stack knowledge (MV3, App Groups, Dynamic Type) is never re-taught inside a prompt.

## 7. Executable Scripts vs. Markdown

A script documents itself and can be run; a walkthrough must be read and then transcribed.

- Build, run, test, lint: `scripts/build.sh`, `scripts/run-mac.sh`, `scripts/run-ios-sim.sh`, `scripts/test.sh`, `scripts/lint.sh`. Point at them; never restate their steps.
- One-off procedures: a shell file under `.atlas/tmp/`; run it; keep only the command line in the report. Procedures worth keeping go to `.atlas/runbooks/`.

## 8. Context Window Measurement

- Note the size of each large tool result before and after filtering.
- Flag any task whose context grew by more than about 1.5x the average.
- Match the remedy to the cause: oversized references (defer), verbose descriptions (compress), raw output (normalize).

## 9. Cost Impact Analysis

Typical per-task budget in tokens, before and after; the saving compounds across every delegation.

| Source | Unoptimized | Optimized |
|--------|-------------|-----------|
| Description bloat | 500 | 100 |
| Redundant context | 800 | 200 |
| Verbose examples | 1200 | 300 (deferred) |
| Unnecessary metadata | 400 | 0 |
| Repeated explanations | 600 | 150 |
| Total | 3500 | 750 |

## 10. Best Practices Checklist

- [ ] Skill descriptions specific and under 250 characters
- [ ] No trigger-phrase lists; router inference only
- [ ] No filler words (helps, important, can, might)
- [ ] Examples beyond the core pattern deferred
- [ ] Only essential code; no comments that restate it
- [ ] Tool output normalized; metadata stripped
- [ ] Domain concepts explained once, then named
- [ ] Executable scripts over markdown walkthroughs
- [ ] Token usage noted per task
- [ ] Highest-waste area fixed first

## Related Skills

- `context-engineering`: load context efficiently.
- `planning-and-task-breakdown`: plan efficiently.
- `incremental-implementation`: execute without token waste.
