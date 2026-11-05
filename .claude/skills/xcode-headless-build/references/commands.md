# Raw commands (all with the DEVELOPER_DIR prefix)

Export once per shell, or prefix each call: `export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`. Source for the override: `man xcode-select` and https://developer.apple.com/library/archive/technotes/tn2339/_index.html. Items marked (local) were run on this Mac on 2026-11-02.

## Inspect

| Purpose | Command |
|---|---|
| Targets, configurations, schemes (local) | `xcodebuild -list -project Commander.xcodeproj` |
| Installed SDKs (local) | `xcodebuild -showsdks` |
| Valid destinations for a scheme | `xcodebuild -showdestinations -project Commander.xcodeproj -scheme "Commander (iOS)"` |
| Resolved build settings | `xcodebuild -showBuildSettings -project Commander.xcodeproj -scheme "Commander (macOS)" -configuration Debug \| grep -E 'PRODUCT_BUNDLE_IDENTIFIER\|DEPLOYMENT_TARGET\|CODE_SIGN'` |
| Validate and normalise the project file (local) | `xcrun xcprojformatter --update Commander.xcodeproj` |
| Add a synced folder from the shell (per the project-format notes) | `xcrun xcodeproj group add <name> --filesystem-path <dir> --project Commander.xcodeproj` then `xcrun xcodeproj group include --group /<name> --target "<target>"` |
| Simulators (local) | `xcrun simctl list devices available` |

## Build

Unsigned Debug macOS build into the repo scratch area (local):

```sh
xcodebuild -project Commander.xcodeproj -scheme "Commander (macOS)" -configuration Debug \
  -destination 'platform=macOS,arch=arm64' \
  -derivedDataPath .atlas/tmp/build/DerivedData CODE_SIGNING_ALLOWED=NO -quiet build \
  > .atlas/tmp/build/build-macos-Debug.log 2>&1; grep -E 'error:|BUILD' .atlas/tmp/build/build-macos-Debug.log
```

Ad-hoc signed macOS build (local; entitlements applied):

```sh
xcodebuild -project Commander.xcodeproj -scheme "Commander (macOS)" -configuration Debug \
  -destination 'platform=macOS,arch=arm64' -derivedDataPath .atlas/tmp/build/DerivedData \
  CODE_SIGN_STYLE=Manual CODE_SIGN_IDENTITY=- DEVELOPMENT_TEAM= PROVISIONING_PROFILE_SPECIFIER= -quiet build
```

iOS Simulator build for a specific device (local with the generic destination; UDID form per Apple's destination syntax):

```sh
UDID=$(xcrun simctl list devices available -j | jq -r '[.devices[][] | select(.name|test("iPhone"))][0].udid')
xcodebuild -project Commander.xcodeproj -scheme "Commander (iOS)" -configuration Debug \
  -destination "platform=iOS Simulator,id=$UDID" -derivedDataPath .atlas/tmp/build/DerivedData \
  CODE_SIGNING_ALLOWED=NO -quiet build
```

Clean: `xcodebuild -project Commander.xcodeproj -scheme "Commander (macOS)" clean` or delete `.atlas/tmp/build/DerivedData` (safe; it is scratch).

## Run and inspect products

| Purpose | Command |
|---|---|
| Launch the macOS app once so Safari registers the extension | `open .atlas/tmp/build/DerivedData/Build/Products/Debug/Commander.app` |
| Confirm registration | `pluginkit -mAvvv -p com.apple.Safari.web-extension \| grep -A3 cyberm3` |
| Inspect the signature and entitlements (local) | `codesign -dv --entitlements - .atlas/tmp/build/DerivedData/Build/Products/Debug/Commander.app` |
| List what shipped inside the extension (local) | `ls ".atlas/tmp/build/DerivedData/Build/Products/Debug/Commander.app/Contents/PlugIns/Commander Extension.appex/Contents/Resources"` |
| Read the built manifest | `plutil -p` is for plists; for JSON use `jq . ".../Commander Extension.appex/Contents/Resources/manifest.json"` |

## Test

| Purpose | Command |
|---|---|
| JavaScript tests (local) | `node --test 'tests/**/*.test.js'` |
| One JS test by name | `node --test --test-name-pattern "manifest" 'tests/**/*.test.js'` |
| Swift tests, once a test target exists | `xcodebuild test -project Commander.xcodeproj -scheme "Commander (macOS)" -destination 'platform=macOS,arch=arm64' -derivedDataPath .atlas/tmp/build/DerivedData CODE_SIGNING_ALLOWED=NO -quiet` |
| One Swift test | add `-only-testing:<TestTarget>/<Class>/<method>` |

Apple: XCTest cannot unit-test the WebExtension JavaScript or drive Safari; use it for the container app only. https://developer.apple.com/documentation/safariservices/creating-a-safari-web-extension

## Archive, export, upload (needs a Developer Program team)

```sh
xcodebuild archive -project Commander.xcodeproj -scheme "Commander (iOS)" -destination 'generic/platform=iOS' \
  -archivePath .atlas/tmp/build/commander-ios.xcarchive -allowProvisioningUpdates DEVELOPMENT_TEAM=<TEAMID> -quiet
xcodebuild -exportArchive -archivePath .atlas/tmp/build/commander-ios.xcarchive \
  -exportOptionsPlist .atlas/tmp/build/ExportOptions-appstore.plist -exportPath .atlas/tmp/build/export-ios -allowProvisioningUpdates
```

Same for macOS with scheme `Commander (macOS)` and `-destination 'generic/platform=macOS'`. Export options, upload with `xcrun altool`/Transporter or the `asc` CLI, and TestFlight are in `references/signing-and-archive.md`. Reference: https://developer.apple.com/library/archive/technotes/tn2339/_index.html and `xcodebuild -help` (local).

## Log filtering

- `-quiet` suppresses everything except warnings, errors and the result line.
- `xcbeautify --quiet < .atlas/tmp/build/build-macos-Debug.log` (installed via Homebrew) prints only problems.
- `grep -E 'error:' log | sort -u | head -20` is the fallback used by the scripts.
