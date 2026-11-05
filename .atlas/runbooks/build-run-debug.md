# Runbook: build, run and debug the extension without the Xcode GUI

Date: 2026-11-02. Verified items are marked (verified); steps that need a human click in Safari are marked (manual) and get confirmed in the first local-testing session.

## 1. Build (verified)

| Command | Result |
|---|---|
| `scripts/build.sh macos` | Unsigned Debug build of `Commander (macOS)` in about 10 s; app at `.atlas/tmp/build/DerivedData/Build/Products/Debug/Commander.app` |
| `SIGN=adhoc scripts/build.sh macos` | Ad-hoc signed ("Sign to Run Locally"); entitlements such as App Sandbox apply; `codesign -dv` shows `Signature=adhoc` |
| `scripts/build.sh ios` | Unsigned iOS Simulator build; app at `.atlas/tmp/build/DerivedData/Build/Products/Debug-iphonesimulator/Commander.app` |
| `scripts/build.sh macos Release` | Release configuration, same locations under `Release/` |

Full logs: `.atlas/tmp/build/build-<platform>-<config>.log`. Read them with `grep -E 'error:|warning:'` or `xcbeautify --quiet < log`.

The extension bundle lands inside the app at `Contents/PlugIns/Commander Extension.appex/Contents/Resources/` (macOS) or `PlugIns/Commander Extension.appex/` (iOS) and contains `manifest.json`, the scripts, `_locales/`, `images/` and `PrivacyInfo.xcprivacy` (verified).

## 2. Run in macOS Safari

1. `scripts/run-mac.sh` builds ad-hoc signed and launches the app once so Safari registers the extension; it then prints `pluginkit` output (verified build and launch; registration output to confirm).
2. (manual, once) Safari > Settings > Advanced > tick "Show features for web developers".
3. (manual, every Safari launch) Safari > Settings > Developer > tick "Allow unsigned extensions".
4. (manual) Safari > Settings > Extensions > tick the extension; open https://www.youtube.com; grant access when the toolbar item prompts ("Allow for One Day" or "Always Allow").
5. Expected: Web Inspector console for the page shows `Received response: {farewell: "goodbye"}` from the template round trip; Develop > Web Extension Background Content shows the background page.

Verified 2026-11-03 on Safari 27.2 (macOS): after steps 1 to 4 the extension appeared in Settings > Extensions as "yt 1.0 from yt" with the youtube.com permission, the toolbar icon tinted once access was granted, the popup rendered "Hello World!", and the console logged `Received response: {farewell: "goodbye"}` from `content.js:2`. "Allow in Private Browsing" was ticked manually (off by default since Safari 17). Red console lines mentioning `Access-Control-Allow-Origin`, `safari-web-extension://<uuid>/web_accessible_resources/noop.txt` and "Content blocker prevented frame displaying" belong to uBlock Origin Lite, which is installed in this Safari; our extension declares no web-accessible resources. Disable uBlock on youtube.com when testing our page changes.

Faster JavaScript loop without rebuilding (manual): Safari > Settings > Developer > "Add Temporary Extension…" and pick the `extension/` folder; the Extensions tab then shows a Reload button. Temporary extensions vanish when Safari quits.

## 3. Run in the iOS Simulator

1. `scripts/run-ios-sim.sh` picks a booted iPhone or the newest available one, builds, installs, launches the app and opens https://m.youtube.com (verified build; install and launch to confirm in the first session).
2. (manual, once per install) Settings > Apps > Safari > Extensions > Commander Extension > Allow Extension; then allow youtube.com when prompted, or Safari page menu > Manage Extensions.
3. Inspect: macOS Safari > Develop > [Simulator name] > choose the page, "Extension Background Page" or "Extension Popup Page".
4. Pick a specific device: `scripts/run-ios-sim.sh Debug "iPad Pro"`; list devices with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl list devices available`.

Verified 2026-11-03 on the iOS 27.2 runtime ("iPhone Duo" simulator): the script built, installed and launched the app, `pluginkit` inside the simulator listed `com.cyberm3.commander.Extension(1.0)`, and after the user enabled the extension in Settings and allowed youtube.com, the popup opened as a full-width sheet over m.youtube.com showing "Hello World!". Xcode 27.2 has no `Simulator.app`; the device window is `/Applications/Xcode.app/Contents/Applications/DeviceHub.app` (the script opens it). The content-script console line on iOS was not inspected yet (use Mac Safari > Develop > [simulator] > the m.youtube.com page).

## 4. Tests and lint (verified)

- `scripts/test.sh js`: node:test over `tests/**/*.test.js` (manifest sanity: MV3, YouTube-only hosts, files exist, minimal permissions).
- `scripts/test.sh swift`: skipped until a Swift test target exists.
- `scripts/lint.sh`: ESLint (flat config, browser + webextensions globals) and swift-format with the repo `.swift-format` (4-space indent, 120 columns); `--fix` applies formatting.

## 5. Debugging checklist

| Symptom | Check |
|---|---|
| Extension missing from Safari Settings | App launched once? `pluginkit -mAvvv -p com.apple.Safari.web-extension`; "Allow unsigned extensions" ticked this session? |
| Content script silent on YouTube | Site access granted? `run_at` applies only after the grant; reload the page after granting |
| Changes not visible | Resources are copied into the `.appex`: rebuild, or use a temporary extension |
| Background page not running | It is non-persistent; inspecting it from the Develop menu loads it |
| Build cannot find a simulator | Device names differ per runtime; use `-showdestinations` or a UDID |
| Build fails on signing | Use `SIGN=none` (default) or `SIGN=adhoc`; team-based signing waits for Developer Program enrolment |

## 6. Not yet verified

- Verified 2026-11-03: `scripts/run-mac.sh` builds ad-hoc signed, launches the app, and `pluginkit -mAvvv -p com.apple.Safari.web-extension` lists `com.cyberm3.commander.Extension(1.0)` with the path inside `.atlas/tmp/build/DerivedData/...`, next to the user's installed uBlock Origin Lite extension (an ad blocker is active in this Safari; disable it on youtube.com when testing our content script to avoid confusing its effects with ours).
- Whether the ad-hoc signed app's App Group entitlement is accepted at launch (no App Group is configured yet).
- Simulator install and launch through the script: verified 2026-11-03 (see section 3).
- The content-script log line on iOS and the per-site permission prompt wording on the mobile site.
