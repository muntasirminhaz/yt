# iOS Simulator workflow

`scripts/run-ios-sim.sh` does steps 1 to 6 for you. The raw commands below (prefix `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`) are for cases the script does not cover. Sources: `xcrun simctl help` (local), https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension, https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension.

## 1. Pick a device

```sh
xcrun simctl list devices available            # names grouped by runtime; the newest runtime first in the script
xcrun simctl list devices booted -j | jq -r '.devices[][] | "\(.name) \(.udid)"'
```

Runtimes installed here: iOS 26.5 (iPhone 17 Pro, iPhone 17e, iPhone Air, iPads) and iOS 27.x (iPhone 18 Pro, iPhone 17e, iPhone Air, iPad Pro M5, iPad Air M4). Pick by UDID; names are not unique across runtimes.

## 2. Boot

```sh
xcrun simctl boot "$UDID"                      # no-op error if already booted; ignore
xcrun simctl bootstatus "$UDID" -b             # waits until fully booted
open -a /Applications/Xcode.app/Contents/Applications/DeviceHub.app   # Xcode 27.2 replaced Simulator.app with Device Hub (local); only to watch, builds and installs work headless
```

## 3. Build for that device

`IOS_DESTINATION="platform=iOS Simulator,id=$UDID" scripts/build.sh ios` or the raw command in `commands.md`. Unsigned builds are fine on the simulator; no Developer Program needed (Apple: "The iOS simulators can be used without membership").

## 4. Install and launch

```sh
APP=.atlas/tmp/build/DerivedData/Build/Products/Debug-iphonesimulator/yt.app
xcrun simctl install "$UDID" "$APP"
xcrun simctl launch "$UDID" cyberm3.yt
xcrun simctl openurl "$UDID" "https://m.youtube.com"
```

Reinstalling the same bundle ID replaces the app and keeps the extension's enabled state (unverified).

## 5. Enable the extension (manual, once per install)

Settings > Apps > Safari > Extensions > yt Extension > Allow Extension. Then in Safari, when the site asks, allow youtube.com ("Allow for One Day" or "Always Allow"); if no prompt appears, use the page menu (aA or puzzle icon) > Manage Extensions. Debug builds also list extension details in Settings; App Store or TestFlight copies do not.

## 6. Observe

| Purpose | Command |
|---|---|
| Live log of the app and extension (filter by subsystem or process) | `xcrun simctl spawn "$UDID" log stream --style compact --predicate 'process CONTAINS "yt"'` |
| Screenshot | `xcrun simctl io "$UDID" screenshot .atlas/tmp/build/sim.png` |
| Video | `xcrun simctl io "$UDID" recordVideo .atlas/tmp/build/sim.mp4` (Ctrl-C to stop) |
| Web Inspector for content, background or popup | macOS Safari > Develop > [Simulator name] > pick the page, "Extension Background Page" or "Extension Popup Page" |
| Terminate the app | `xcrun simctl terminate "$UDID" cyberm3.yt` |
| Shut down | `xcrun simctl shutdown "$UDID"` |

Keep logs in files under `.atlas/tmp/build/` and grep them; never stream logs straight into the conversation.

## iPhone versus iPad

Safari on iPhone loads `m.youtube.com` (mobile site, different DOM); iPad loads the desktop site. Test both: `scripts/run-ios-sim.sh Debug "iPad"` picks an iPad. Sources: https://support.google.com/youtube/answer/7174035, https://developer.apple.com/videos/play/wwdc2019/203/.

## Guard rails

`xcrun simctl erase` and `xcrun simctl delete` are on the project deny list; ask the user before wiping a simulator. Prefer `simctl uninstall "$UDID" cyberm3.yt` to reset only this app.
