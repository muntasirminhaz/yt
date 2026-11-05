# PrivacyInfo.xcprivacy: keys, reason codes, App Privacy answers

## Where the files live in this repo (read from `Commander.xcodeproj/project.xcproj`, 2026-11-02)

| File | Attached to | Mechanism | Lands in |
|---|---|---|---|
| `Shared (App)/PrivacyInfo.xcprivacy` | `Commander (iOS)`, `Commander (macOS)` | `membership-exceptions.inclusions` list of the `Shared (App)` folder; new files in that folder must be listed by hand | app bundle root on iOS, `Contents/Resources/` on macOS; Xcode places it (https://developer.apple.com/documentation/bundleresources/adding-a-privacy-manifest-to-your-app-or-third-party-sdk) |
| `Shared (Extension)/PrivacyInfo.xcprivacy` | `Commander Extension (iOS)`, `Commander Extension (macOS)` | folder `target-membership` | inside `Commander Extension.appex` |

Both files declare `NSPrivacyTracking` false and empty `NSPrivacyTrackingDomains`, `NSPrivacyCollectedDataTypes`, `NSPrivacyAccessedAPITypes`. No Swift file uses `UserDefaults`, file dates, uptime or disk-space APIs (grep, 2026-11-02), so the empty manifests are correct today.

## Keys (quotes: https://developer.apple.com/documentation/bundleresources/privacy-manifest-files)

| Key | Apple's description | Value here |
|---|---|---|
| `NSPrivacyTracking` | "A Boolean that indicates whether your app or third-party SDK uses data for tracking as defined under the App Tracking Transparency framework." | `false` |
| `NSPrivacyTrackingDomains` | "An array of strings that lists the internet domains your app or third-party SDK connects to that engage in tracking." Requests to them fail until tracking permission is granted | empty |
| `NSPrivacyCollectedDataTypes` | "An array of dictionaries that describes the data types your app or third-party SDK collects." | empty while nothing leaves the device |
| `NSPrivacyAccessedAPITypes` | "An array of dictionaries that describe the API types your app or third-party SDK accesses that have been designated as APIs that require reasons to access." | add an entry the moment native code uses a listed API |

Scope per the same page: data types "on all platforms"; required-reason APIs "on iOS, iPadOS, tvOS, visionOS, and watchOS". The macOS targets therefore need only truthful data-type content; identical files on both platforms are simpler and allowed. The name must be exactly `PrivacyInfo.xcprivacy` and the file must be in the target's resources for Xcode's privacy report (same page). Since May 1, 2024 App Store Connect refuses apps that use a required-reason API without a declared reason (https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api, https://developer.apple.com/news/?id=3d8a9yyh); invalid manifests are rejected at upload (https://developer.apple.com/documentation/bundleresources/adding-a-privacy-manifest-to-your-app-or-third-party-sdk).

## Required-reason API categories likely to matter

Category strings and codes: https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api. The per-code descriptions on that page render client-side and could not be re-fetched today, so the "Use when" column is a paraphrase; confirm the exact text there before declaring a code (unverified wording).

| Category (`NSPrivacyAccessedAPIType`) | Trigger in this project | Code | Use when (paraphrase) |
|---|---|---|---|
| `NSPrivacyAccessedAPICategoryUserDefaults` | `UserDefaults.standard` in the container app | `CA92.1` | defaults readable only by the app itself |
| same | `UserDefaults(suiteName: "group.…")` shared with the extension (planned per `.claude/rules/swift.md`) | `1C8F.1` | defaults shared through an App Group between the app and its extensions |
| same | a third-party SDK's own defaults / MDM managed configuration | `C56D.1` / `AC6B.1` | not expected here |
| `NSPrivacyAccessedAPICategoryFileTimestamp` | `FileManager.attributesOfItem`, `URLResourceKey.contentModificationDateKey` or `.creationDateKey`, `stat`, `fstat`, `getattrlist` on files in the app or group container (cache age) | `C617.1` | timestamps of files inside the app, App Group or CloudKit container |
| same | showing a file date to the user | `DDA9.1` | timestamps displayed to the person using the app |
| same | files the user picked (document picker, drag and drop) | `3B52.1` | timestamps of user-granted files |
| `NSPrivacyAccessedAPICategorySystemBootTime` | `ProcessInfo.processInfo.systemUptime`, `mach_absolute_time()` for native timing | `35F9.1` | measuring elapsed time between in-app events |
| same | converting event timestamps to absolute time | `8FFB.1` | absolute timestamps for in-app events |
| same | boot time inside an optional user-submitted bug report | `3D61.1` | user-chosen bug report |
| `NSPrivacyAccessedAPICategoryDiskSpace` | `volumeAvailableCapacity*` resource keys, `statfs`, `statvfs` | `E174.1` / `85F4.1` / `7D9E.1` | check space before writing / display to the user / optional bug report; these three are easy to swap, verify on the page |

Declare in the manifest of the bundle whose executable makes the call: "For each executable or dynamic library in an app that uses a required reason API, the bundle that includes the executable or dynamic library needs to include a privacy manifest file that reports the API." (same page). Swift in `Shared (Extension)/` runs inside the `.appex`, so its reasons go in the extension manifest. JavaScript in `extension/` runs inside Safari, not in our binary, and `browser.storage` is not on Apple's list (the list names native APIs only).

Entry to add when `UserDefaults` arrives (in both manifests if both sides read the suite):

```xml
<key>NSPrivacyAccessedAPITypes</key>
<array>
  <dict>
    <key>NSPrivacyAccessedAPIType</key>
    <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
    <key>NSPrivacyAccessedAPITypeReasons</key>
    <array><string>CA92.1</string><string>1C8F.1</string></array>
  </dict>
</array>
```

## App Privacy ("nutrition label") answers for an on-device-only extension

Definitions from https://developer.apple.com/app-store/app-privacy-details/: "Collect" means "transmitting data off the device in a way that allows you and/or your third-party partners to access it for a period longer than what is necessary to service the transmitted request in real time"; "Data that is processed only on device is not 'collected' and does not need to be disclosed in your answers"; "This information is required to submit new apps and app updates to the App Store"; answers can be changed at any time without a new build.

| App Store Connect question or category | Answer today | Why |
|---|---|---|
| Do you or your third-party partners collect data from this app? | No | The content script reads and changes YouTube's DOM inside Safari; settings live in `browser.storage` and, later, an App Group; nothing is transmitted to us or to partners |
| Browsing History ("Information about content the user has viewed that is not part of the app, such as websites") | Not collected | Watched videos are visible to the script and never leave the device |
| Usage Data, Diagnostics, Identifiers, Contact Info, User Content, Location, Purchases | Not collected | No analytics, crash reporting, accounts, purchases or location code |
| Tracking | No | No ATT prompt, no ad SDK, `NSPrivacyTracking` false |
| Third-party partners | None | No SDK in the app; the shipped extension has no runtime dependencies (`package.json`) |

What flips an answer: a crash reporter or analytics SDK (Diagnostics, Usage Data; the SDK must ship its own manifest: https://developer.apple.com/documentation/bundleresources/describing-data-use-in-privacy-manifests), a remote config or update check carrying a device identifier (Identifiers), a feedback form that uploads logs (Diagnostics unless every optional-disclosure criterion on the App Privacy page holds), iCloud sync of settings (off device but inside the user's own account; how Apple classifies it is unverified). The privacy policy, the App Privacy answers and `NSPrivacyCollectedDataTypes` must agree; 5.1.1(i) requires the policy to "Identify what data, if any, the app/service collects" (https://developer.apple.com/app-store/review/guidelines/).

## Does the `.appex` need its own manifest? (unverified)

| Evidence | Reading |
|---|---|
| Apple's manifest pages speak of "your app or third-party SDK" and never name app extensions (https://developer.apple.com/documentation/bundleresources/privacy-manifest-files) | no explicit requirement either way |
| "the bundle that includes the executable or dynamic library needs to include a privacy manifest file that reports the API" (https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api) | an `.appex` is a bundle with its own executable, so once `SafariWebExtensionHandler` uses a listed API the safe reading is that the extension bundle declares it |
| Xcode's template and this project already ship `Shared (Extension)/PrivacyInfo.xcprivacy` (local) | keep it; cost is zero |

Decision: keep both files, mirror any required-reason entry into whichever target's Swift makes the call, and treat "extension manifest not required" as unverified until Apple states it.

## Verify before archiving

| Step | Command or place |
|---|---|
| Syntax | `plutil -lint "Shared (App)/PrivacyInfo.xcprivacy" "Shared (Extension)/PrivacyInfo.xcprivacy"` |
| Code audit | `grep -rnE 'UserDefaults|attributesOfItem|contentModificationDateKey|creationDateKey|systemUptime|mach_absolute_time|volumeAvailableCapacity|statfs' --include='*.swift' .` (skip `node_modules`, `.atlas`) |
| Aggregated report | Xcode Organizer, select the archive, Generate Privacy Report (demonstrated in https://developer.apple.com/videos/play/wwdc2023/10060/); the file must be in the target's resources for the report (https://developer.apple.com/documentation/bundleresources/privacy-manifest-files) |
| After upload | Watch for App Store Connect's email: a missing-reason notice means the binary uses a category the manifest lacks (https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api) |
