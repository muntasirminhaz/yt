---
name: context-engineering
description: "Context engineering for agents: feed only relevant information at the right time through layered loading, progressive disclosure, semantic filtering, tool-output normalization and purging. Use when reading files, delegating, or as context grows."
license: MIT
metadata:
  author: Agent optimization patterns
  version: "1.0"
  focus: token_efficiency, hallucination_reduction, execution_quality
  adapted_for: Commander Safari extension (JS + Swift)
---

# Context Engineering

Agent performance depends on the right information at the right time. Poor context causes hallucinations, token waste and wrong decisions.

## Core Principles

1. **Minimal Context**: include only what the next decision needs.
2. **Progressive Disclosure**: defer details until explicitly needed.
3. **Semantic Filtering**: remove noise; keep signal.
4. **Normalization**: transform tool output before re-injecting it.
5. **Purging**: drop irrelevant decisions, failed attempts and outdated state.

## 1. Context Loading Strategy

Load in layers, not all at once.

- First layer: the task, `CLAUDE.md`, and the one file being changed.
- Second layer, on demand: the counterpart across the bridge (`content.js`, `background.js`, `SafariWebExtensionHandler.swift`), the manifest, the matching `.claude/rules/*.md`.
- Third layer, only when a decision depends on it: build logs, `project.xcproj`, vendored references, Apple docs.
- Use Grep and Glob to locate; read targeted line ranges on large files (`project.xcproj`, `.atlas/tmp/build/*.log`, long plans).

## 2. Prompt-Level Context Management

Structure every delegation brief so the subagent's focus is guided, not flooded.

```
Task: <one sentence>
Essential: <paths to read, the rule or skill file to load, the exact deliverable shape>
Deferred: <what exists and how to fetch it; load only if needed>
Output: <exact path under .atlas/tmp/>; return only the answer, no file dumps or narration
```

Skills and rules do not auto-load into subagents: name the file.

## 3. Noise Purging

After each decision, remove what no longer changes behaviour.

- Failed approaches: keep one line, "tried X, failed because Y"; drop the transcript.
- Intermediate values: build output, directory listings, grep hits already acted on.
- Outdated observations: anything about a file that has since been edited.
- Commit the decision in one line; everything that led to it can go.

## 4. Semantic Filtering

Keep only facts that change the next action.

- From a test run: failing test names, assertion message, file and line. Not the pass list.
- From `xcodebuild`: lines matching `error:` or `failed`, sorted unique (the scripts already do this). Not the full log.
- From a file read: the function under change and its callers. Not the header or the imports.
- From a web page or doc: the API signature and its constraint. Not the tutorial prose.

## 5. Long-Term Memory Management

Persist important state outside the conversation; fetch it when needed.

- Plans: `.atlas/plans/<timestamp>-<slug>.md` before non-trivial work.
- Durable findings: `.atlas/knowledge/`, `.atlas/research/`, `.atlas/runbooks/`.
- Project gotchas: `CLAUDE.md` and `.claude/rules/`; never restate them in chat.
- Scratch: `.atlas/tmp/`, safe to wipe. Nothing in the repo root, `extension/` or `/tmp`.

## 6. Tool Output Normalization

Transform verbose output into concise input before it re-enters context.

- Filter at the source: `head`, `grep`, `jq`, `-quiet`, `--test-name-pattern`.
- Redirect long output to `.atlas/tmp/build/<name>.log`, then grep the log.
- Summarise structured results as `name: value` lines, not raw JSON.
- Example: `scripts/test.sh js -- --test-name-pattern permissions 2>&1 | grep -E "^(not ok|# fail)"`.

## 7. Request-Level Context Isolation

- Persistent: project rules, the plan, decisions already made.
- Per task: the files for this slice, this test run, this error.
- When a slice finishes, drop its per-task context; carry forward only the outcome and any new gotcha.

## 8. Deferred Reference Pattern

- "`extension/manifest.json` declares the content script" beats pasting the manifest.
- "`scripts/test.sh` filters xcodebuild errors" beats reading the script again.
- Record a path and a line range; re-read only when the next decision depends on the bytes.

## 9. Testing Context Quality

Check a prompt or context bundle the way you would check code.

- Does it contain anything the next decision cannot use? Remove it.
- Is anything deferred that is actually required? Pull it in.
- Would a fresh agent with only this context reach the same conclusion? If not, it is incomplete, not merely small.

## 10. Best Practices Checklist

- [ ] Load context in layers (minimal, deferred, on demand)
- [ ] Remove noise after each decision
- [ ] Normalize all tool output before re-injection
- [ ] Keep persistent state in `.atlas/`, not the conversation
- [ ] Use progressive disclosure in prompts and delegation briefs
- [ ] Purge failed attempts and outdated observations
- [ ] Verify context holds only essential data
- [ ] Watch context growth; summarise and restart when it crowds the task
- [ ] Record what is available versus deferred
- [ ] Measure token savings from each normalization

## Related Skills

- `planning-and-task-breakdown`: decompose before requesting context.
- `token-efficiency-patterns`: compress context further.
- `incremental-implementation`: process context one slice at a time.
