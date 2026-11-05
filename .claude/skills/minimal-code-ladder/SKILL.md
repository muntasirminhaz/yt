---
name: minimal-code-ladder
description: "Least code that solves the task. Activate on any request to write, add, implement, build, fix or refactor code, or before creating a file, class, module or dependency. YAGNI, reuse, platform API, native feature, installed dep, one line, minimum."
license: MIT
metadata:
  author: Inspired by ponytail (DietrichGebert/ponytail, MIT)
  version: "1.0"
  focus: write_less, reuse_first, smallest_diff
  adapted_for: Commander Safari extension (JS + Swift)
---

# Minimal Code Ladder

Lazy about solutions, diligent about understanding. Code is small because it is necessary, not golfed or clever.

Layer 1 foundation skill: applies to every coding task alongside `incremental-implementation` (how to slice) and `code-review-and-quality` (what to catch after). It governs the decision before the first line is written.

## The Decision Ladder

Understand the flow first: read the task, the affected files in `extension/` or the Swift folders, and the message path between them. Then climb and stop at the first rung that holds:

1. **Does this need to exist at all?** (YAGNI) Skip it.
2. **Already in this codebase?** Reuse a module in `extension/`, the Swift folders, `scripts/`, or a pattern in `.claude/skills/`.
3. **Does the WebExtension API, the web platform (HTML/CSS/DOM), Foundation, or the Swift standard library do it?** Use it.
4. **Native platform feature** (Safari permission UI, `browser.storage`, `browser.alarms`, App Groups, `color-scheme`, system fonts and Dynamic Type)? Use it.
5. **Already-installed dev dependency** (`package.json`)? Use it. The shipped extension has no runtime dependencies; new deps need approval.
6. **Can it be one line?** Make it one line.
7. **Only then:** write the minimum that works.

## One example per rung

| Rung | Instinct | Ladder result |
|------|----------|---------------|
| 1 | Add a settings-migration layer for the first release | No stored settings exist yet; skip it |
| 2 | Write a second `sendMessage` wrapper in `popup.js` | Reuse the listener pattern already in `background.js` |
| 3 | Hand-roll a URL parser for the watch page | `new URL(location.href).searchParams.get("v")` |
| 3 | Write a Swift JSON encoder for the native reply | `Codable` and `JSONSerialization` from Foundation |
| 4 | Build a timer loop in the background script | `browser.alarms.create` plus `onAlarm`; survives iOS unloading the background |
| 4 | Ship a dark-mode toggle in the popup | `color-scheme: light dark` and `font: -apple-system-body` |
| 4 | Sync a setting app-to-extension over native messaging | `UserDefaults(suiteName: "group.<app id>")` via App Groups |
| 5 | Add a test runner or assertion library | `node:test` and `node:assert/strict`, already used in `tests/` |
| 6 | A helper class to read one stored key | `const { muted = false } = await browser.storage.local.get("muted");` |
| 7 | Nothing above holds | The smallest function that passes one `node:test` case |

## Core Rules

- No unrequested abstractions, wrappers, option objects or config knobs.
- No boilerplate, scaffolding or files that were not asked for. Fewest files possible; nothing new inside `extension/` without a reason, since everything there ships in the `.appex`.
- Favor deletion over addition. Boring beats clever. The shortest working diff wins.
- When two correct approaches match in size, prefer the one that handles the edge case: `m.youtube.com` DOM, mid-page injection, non-persistent background.
- Question requests that imply heavy machinery: ask whether the actual need is smaller.

## Off the ladder (never cut for brevity)

- **Validation** of anything crossing a trust boundary: messages from content scripts, `sendNativeMessage` payloads, values read back from `browser.storage`.
- **Security**: MV3 CSP (no `eval`, inline or remote scripts), host access limited to YouTube, no `innerHTML` with untrusted strings.
- **Privacy**: no data leaves the device unless the feature requires it; `PrivacyInfo.xcprivacy` entries for any required-reason API.
- **Accessibility**: labelled controls, keyboard operability, Dynamic Type, `prefers-reduced-motion`.
- **App Review compliance**: no ads, marketing or purchases in the extension (4.4); container app does real work (4.2); minimal host permissions (4.4.2).

If the smallest solution drops one of these, it is not the solution. Climb back up.

## The `// note:` marker

The one sanctioned comment. Use it only when you intentionally cap scope; name the limit and the upgrade path:

```js
// note: desktop selectors only; add m.youtube.com variants when iPhone support lands
```

```swift
// note: single App Group key; move to a Codable settings struct when a second setting appears
```

Never use it to explain what the code does.

## Testing expectation

Non-trivial logic gets one runnable check: the smallest `node:test` case (`scripts/test.sh js -- --test-name-pattern <name>`) or XCTest (`scripts/test.sh swift -- -only-testing:<Target>/<Class>`) that fails when the logic breaks. Trivial one-liners need none.

## Related

- `incremental-implementation`: thin vertical slices once the rung is chosen.
- `code-review-and-quality`: scope limits and revert-fast after the diff exists.
- `context-engineering` / `token-efficiency-patterns`: the same "only what is needed" applied to context and agent I/O.
- `safari-web-extension` / `apple-host-app`: the platform idioms rungs 3 and 4 point to.
