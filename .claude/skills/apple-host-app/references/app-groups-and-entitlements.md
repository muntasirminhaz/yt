# App Groups, entitlements, bundle IDs, Info.plist, privacy manifest

Legend: `(local)` = (local, verified on this Mac 2026-11-02); `(unverified)` = not confirmed in an official source.

## Current state

| Item | Value | Source |
| --- | --- | --- |
| Entitlements files | none; `CODE_SIGN_ENTITLEMENTS` unset on all four targets | `(local)` |
| macOS sandbox settings | `ENABLE_APP_SANDBOX=YES`, `ENABLE_HARDENED_RUNTIME=YES` on both macOS targets; `ENABLE_OUTGOING_NETWORK_CONNECTIONS=YES` on the app; `ENABLE_USER_SELECTED_FILES=readonly` | `(local)` |
| Signed ad-hoc Debug `Commander.app` | entitlements `app-sandbox`, `files.user-selected.read-only`, `network.client`, `get-task-allow`; `Signature=adhoc`, `TeamIdentifier=not set` | `(local)` via `codesign -d --entitlements :- ...` |
| `REGISTER_APP_GROUPS=YES` | present on `Commander (macOS)` only; exact semantics | `(unverified)` |
| Privacy manifests | `Shared (App)/PrivacyInfo.xcprivacy` (both apps), `Shared (Extension)/PrivacyInfo.xcprivacy` (both extensions); all arrays empty, `NSPrivacyTracking=false` | `(local)` |
| Bundle IDs | `com.cyberm3.commander` apps, `com.cyberm3.commander.Extension` extensions, same on both platforms | `(local)` |
| Team / identities | `DEVELOPMENT_TEAM` unset; `security find-identity -v -p codesigning` reports 0 identities | `(local)` |

## App Group rules

| Rule | Source |
| --- | --- |
| Entitlement `com.apple.security.application-groups`; identifiers start with `group.` (macOS may also use `<TeamID>.<name>`); share through `UserDefaults(suiteName:)` and `FileManager.containerURL(forSecurityApplicationGroupIdentifier:)`; groups are registered in the developer account (max 1,000). | https://developer.apple.com/documentation/xcode/configuring-app-groups |
| On macOS a returned container URL does not prove access; test a real read/write. | https://developer.apple.com/documentation/xcode/accessing-app-group-containers (via https://github.com/gaelic-ghost/socket, Apache-2.0) |
| Ad-hoc builds carry no team identity, so macOS may prompt for or refuse group-container access; `CODE_SIGNING_ALLOWED=NO` builds embed no entitlements at all. | `(unverified)`; test entitlements only on `SIGN=adhoc` or team builds |
| The identifier must be byte-identical in every target, otherwise each process gets its own empty store. | https://github.com/rshankras/claude-code-apple-skills (MIT), paraphrased |
| `UserDefaults` is thread-safe; `didChangeNotification` is not posted for changes made outside the current process, so the app must re-read after the extension writes. | https://developer.apple.com/documentation/foundation/userdefaults , https://developer.apple.com/documentation/foundation/userdefaults/didchangenotification |
| Reading defaults is a required-reason API: category `NSPrivacyAccessedAPICategoryUserDefaults`, reason `CA92.1` (same App Group). | https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api |

## Setup procedure (one file per target)

| Step | Command or content | Status |
| --- | --- | --- |
| 1 Files | `iOS (App)/Commander.entitlements`, `macOS (App)/Commander.entitlements`, `iOS (Extension)/Commander Extension.entitlements`, `macOS (Extension)/Commander Extension.entitlements` | convention |
| 2 Content | the plist below; macOS files need nothing else because sandbox keys come from build settings | `(unverified)` merge detail; observed sandbox keys in the signature `(local)` |
| 3 Wire | `xcrun xcodeproj setting set CODE_SIGN_ENTITLEMENTS "iOS (App)/Commander.entitlements" --target "Commander (iOS)" --project Commander.xcodeproj`, repeated for the other three | syntax `(local)` |
| 4 Keep out of Resources | `xcrun xcodeproj group exclude Commander.entitlements --group "/iOS (App)" --target "Commander (iOS)" --project Commander.xcodeproj` for each folder; whether a synced folder would otherwise copy the file into the bundle is `(unverified)`, the exclusion is harmless | syntax `(local)` |
| 5 Format and parse | `xcrun xcprojformatter --update Commander.xcodeproj && xcodebuild -list -project Commander.xcodeproj` | `(local)` |
| 6 Build signed | `SIGN=adhoc scripts/build.sh macos`; `codesign -d --entitlements :- .atlas/tmp/build/DerivedData/Build/Products/Debug/Commander.app` and the nested `.../Contents/PlugIns/Commander Extension.appex` must both list the group (`:-` prints XML plus a deprecation warning; `--entitlements -` printed nothing here) | `(local)` |
| 7 Simulator | `xcrun simctl get_app_container <udid> com.cyberm3.commander groups` lists group containers | subcommand `(local)`; output `(unverified)` |
| 8 Account | register `group.com.cyberm3.commander` and enable App Groups on App IDs `com.cyberm3.commander` and `com.cyberm3.commander.Extension` before the first signed device build; `-allowProvisioningUpdates` creates/updates profiles, app IDs and certificates for automatic signing (`xcodebuild -help`, `(local)`); whether it registers groups too | `(unverified)` |
| 9 Privacy manifest | add the UserDefaults entry (`CA92.1`) to both `PrivacyInfo.xcprivacy`; whether the `.appex` needs its own manifest is not stated by Apple, so keep both | https://developer.apple.com/documentation/bundleresources/privacy-manifest-files ; `(unverified)` |

Entitlements file body (identical for all four targets):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>com.apple.security.application-groups</key>
  <array><string>group.com.cyberm3.commander</string></array>
</dict></plist>
```

Privacy manifest entry (inside `NSPrivacyAccessedAPITypes`):

```xml
<dict>
  <key>NSPrivacyAccessedAPIType</key><string>NSPrivacyAccessedAPICategoryUserDefaults</string>
  <key>NSPrivacyAccessedAPITypeReasons</key><array><string>CA92.1</string></array>
</dict>
```

## Bundle IDs, Info.plist, sync

| Rule | Source |
| --- | --- |
| Extension ID must be a child of the app ID (`com.cyberm3.commander.Extension`); App Store Connect rejects more than one extra period. | https://developer.apple.com/forums/thread/101754 , https://developer.apple.com/forums/thread/680350 |
| Same extension bundle ID on macOS and iOS makes Safari 16+ sync the enabled state; otherwise add the `SFSafariCorresponding...BundleIdentifier` keys. | https://developer.apple.com/documentation/safariservices/syncing-safari-web-extensions-across-devices-and-platforms |
| Info.plist content = `INFOPLIST_KEY_*` build settings + the file named by `INFOPLIST_FILE` (`GENERATE_INFOPLIST_FILE=YES`). | https://developer.apple.com/documentation/xcode/build-settings-reference ; settings `(local)` |
| Extension plist: `NSExtension` -> `NSExtensionPointIdentifier=com.apple.Safari.web-extension`, `NSExtensionPrincipalClass=$(PRODUCT_MODULE_NAME).SafariWebExtensionHandler`. | `(local)` |
| App and extension deployment targets must match (17.0 / 14.0). | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension ; `(local)` |
| `get-task-allow` is a debug entitlement; notarized or App Store builds must not carry it; Release archives dropping it automatically | https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution ; `(unverified)` |
| Privacy manifest keys: `NSPrivacyTracking`, `NSPrivacyTrackingDomains`, `NSPrivacyCollectedDataTypes`, `NSPrivacyAccessedAPITypes`; required-reason declarations are mandatory on iOS; uploads need approved reasons since 2024-05-01. | https://developer.apple.com/documentation/bundleresources/privacy-manifest-files , https://developer.apple.com/news/?id=3d8a9yyh |

## Diagnosing an entitlement (five states)

Adapted from https://github.com/gaelic-ghost/socket (Apache-2.0); Apple references https://developer.apple.com/documentation/bundleresources/entitlements and https://developer.apple.com/documentation/bundleresources/diagnosing-issues-with-entitlements .

| State | Evidence | Command |
| --- | --- | --- |
| 1 Desired | operation, target, platform, distribution path, exact error | - |
| 2 Source | `.entitlements`, `CODE_SIGN_ENTITLEMENTS`, build settings, folder membership | `xcrun xcodeproj setting get CODE_SIGN_ENTITLEMENTS --target "<t>" --project Commander.xcodeproj` `(local)` |
| 3 Account | App ID capabilities, profile contents | `security cms -D -i <profile>.mobileprovision` `(unverified)` here |
| 4 Signed | entitlements of `Commander.app` and of the nested `.appex`, team ID, flags | `codesign -d --entitlements :- <bundle>`; `codesign -dvv <bundle>`; `codesign --verify --deep --strict --verbose=2 <bundle>` `(local)` first two |
| 5 Runtime | sandbox/TCC result, log lines | `/usr/bin/log stream --predicate 'subsystem == "com.cyberm3.commander.Extension"'` `(local)` syntax |

Fix at the first state that diverges, rebuild, repeat all five. A passing local build proves nothing about a distribution build.
