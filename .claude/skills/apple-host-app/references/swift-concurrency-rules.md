# Swift concurrency rules for this project

Build settings (local, `Commander.xcodeproj/project.xcproj`): `SWIFT_VERSION = 5.0` (Swift 5 language mode) and `SWIFT_APPROACHABLE_CONCURRENCY = YES` on all four targets; `SWIFT_DEFAULT_ACTOR_ISOLATION = MainActor` on the two app targets only. Xcode 27.2 compiles with the Swift 6.4 toolchain. Sources: https://developer.apple.com/documentation/xcode/build-settings-reference, https://www.swift.org/migration/documentation/swift-6-concurrency-migration-guide/, the vendored `swift-concurrency-expert` skill.

## What the settings mean here

- App targets (`Commander (iOS)`, `Commander (macOS)`): every type and function is implicitly `@MainActor` unless marked `nonisolated`. UI code needs no annotations. Background work must opt out explicitly (`nonisolated func`, `@concurrent` where supported, or a `Task.detached`).
- Extension targets (`Commander Extension (iOS)`, `Commander Extension (macOS)`): no default isolation. `SafariWebExtensionHandler` methods are nonisolated and are invoked by the system on an extension request queue. Do not touch UI there; there is none.
- Language mode 5 means concurrency violations are warnings, not errors. Treat warnings as errors in review; switching to Swift 6 mode (`SWIFT_VERSION = 6`) is a later, deliberate step after the handler code stabilises.

## Rules for the native-messaging handler

1. `beginRequest(with:)` must reply exactly once via `context.completeRequest(returningItems:completionHandler:)`, on any thread, within a short time; the system may terminate the extension process afterwards.
2. Message payloads are `[String: Any]` dictionaries that must stay JSON-serialisable (strings, numbers, booleans, arrays, dictionaries); wrap decoding in a small `Sendable` struct, never pass `NSExtensionContext` across tasks.
3. For async work (reading App Group defaults, computing a response), use `Task { ... }` and complete the request inside it; capture `context` once. Avoid `DispatchQueue` unless bridging an API that requires it.
4. Shared mutable state in the handler must be an `actor` or protected by `UserDefaults(suiteName:)`, which is thread-safe for simple reads and writes.
5. Use `os.Logger` (subsystem = bundle ID) rather than `print`; logs are readable with `log stream` on the simulator and in Console on macOS.

## Rules for the container app

1. Keep view-controller code on the main actor (it already is by default); mark only long-running work as `nonisolated` and hop back with `await MainActor.run { }` or an `@MainActor` method.
2. `SFSafariExtensionManager.getStateOfSafariExtension` and `SFSafariApplication.showPreferencesForExtension` deliver their completion on an arbitrary queue; the template hops to `DispatchQueue.main.async`. The async-friendly form is `let state = try await SFSafariExtensionManager.stateOfSafariExtension(withIdentifier:)` (macOS; availability of the async overlay unverified for the deployment floor, keep the callback form until checked).
3. Types shared between app and extension (settings models) live in `Shared (Extension)` or a new shared folder added to all four targets, and must be `Sendable` and `Codable`.

## Review checklist

- No `@MainActor` on extension-target types unless they really touch the main thread.
- No blocking waits (`DispatchSemaphore`, `sleep`) inside `beginRequest`.
- Every `Task` that outlives a request captures only `Sendable` values.
- `swift-format lint --strict` clean (`scripts/lint.sh`) and no concurrency warnings in the build log (`grep -i 'concurrency\|Sendable' .atlas/tmp/build/build-macos-Debug.log`).
