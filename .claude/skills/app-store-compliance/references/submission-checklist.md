# Submission checklist: enrolment to App Store

Blocks are in dependency order. Apple's timings are quoted where it states them; otherwise plan days per cycle.

## 1. Apple Developer Program (none yet)

| Item | Detail | Source |
|---|---|---|
| Cost | "99 USD per membership year" | https://developer.apple.com/programs/enroll/ |
| Individual | Apple Account with two-factor authentication, legal name in the name fields (no alias or company name), legal age of majority, address without P.O. box; the legal name becomes the App Store seller name | same page |
| Organisation | Legal entity (no DBA), D-U-N-S Number, Account Holder with binding authority, work email on the organisation's domain, public website | same page |
| Why before device testing | "Testing on a physical device requires membership in the Apple Developer Program. The iOS simulators can be used without membership." | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| What the free account lacks | App Store Connect, TestFlight, Xcode Cloud, notarization | https://developer.apple.com/support/compare-memberships/ |
| After enrolment | "You can't add an app to your account until the Account Holder signs the latest agreement in the Business section." | https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app |

## 2. Certificates, identifiers, signing

| Item | Detail | Source |
|---|---|---|
| Certificate types | "Apple Distribution": submit iOS, iPadOS, macOS apps to App Store Connect; "Mac Installer Distribution": "Sign and submit a Mac Installer Package, containing your signed app, to the Mac App Store"; "Developer ID Application" only for distribution outside the Mac App Store; "Apple Development" for devices | https://developer.apple.com/help/account/create-certificates/certificates-overview |
| Who creates them | "Only the Account Holder or Admin role can create distribution certificates"; one of each type per team | same page |
| Xcode | All four targets already use `CODE_SIGN_STYLE = Automatic` (`yt.xcodeproj/project.xcproj`): set the team on all four and let Xcode create certificates and profiles; `xcodebuild -allowProvisioningUpdates` does the same from the CLI | https://developer.apple.com/library/archive/technotes/tn2339/_index.html |
| Identifiers | App ID `cyberm3.yt`; extension `cyberm3.yt.Extension` (child of the app ID, one extra period only); same app ID on iOS and macOS so Safari syncs the enabled state | https://developer.apple.com/forums/thread/101754, https://developer.apple.com/forums/thread/680350, https://developer.apple.com/documentation/safariservices/syncing-safari-web-extensions-across-devices-and-platforms |
| App Group (when settings are shared) | ID starts with `group.`; registered in the developer account; entitlement `com.apple.security.application-groups` on all four targets | https://developer.apple.com/documentation/xcode/configuring-app-groups |
| macOS sandbox | `ENABLE_APP_SANDBOX = YES` is set on both macOS targets; Mac App Store apps must be sandboxed (2.4.5(i); wording not re-verified today, unverified) | https://developer.apple.com/app-store/review/guidelines/ |
| Secrets | Never commit `.p12`, `.mobileprovision`, `.p8`; `.gitignore` already lists them (local) | local |

## 3. App Store Connect record

| Item | Detail | Source |
|---|---|---|
| Role | "Account Holder, App Manager, or Admin" | https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app |
| Fields | Platforms (tick iOS and macOS), Name, Primary Language, Bundle ID, SKU, User Access | same page |
| One record for both platforms | "If you want to offer an app with multiple platforms as a single purchase, create it as a single record in App Store Connect. All platforms will share the same bundle ID, but you'll add platform-specific information separately." | same page |
| Name | Final name only (`naming-and-trademark.md`); "You can use an app name for one app per localization" | same page |
| Bundle ID | Pick `cyberm3.yt` (registered by Xcode's automatic signing); the extension ID is never entered in the record | same page; https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension |
| Universal purchase | Same record, bundle ID and SKU; "Add Platform" for the second platform; activates once versions on at least two platforms are approved and cannot then be split; separate records cannot be merged later; Apple recommends it for extensions on both platforms | https://developer.apple.com/support/universal-purchase/, https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension |
| Age rating | Complete the questionnaire; the container has no "Unrestricted Web Access" ("Users can navigate to any webpage within the app or freely browse the web"; ours loads local HTML), no user-generated content, no advertising, no messaging; tiers are 4+, 9+, 13+, 16+, 18+ | https://developer.apple.com/help/app-store-connect/reference/age-ratings |
| Category | Utilities or Productivity (judgment) | https://developer.apple.com/app-store/review/guidelines/ 2.3 |

## 4. Product page assets

Screenshot rules (https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications): "at least one screenshot and can upload up to 10 screenshots per device size in .jpeg, .jpg, or .png"; "Images can't include alpha channels or transparencies"; App Store Connect scales the highest required resolution down for smaller sizes.

| Platform | Required set | Pixel sizes (portrait or landscape) |
|---|---|---|
| iPhone | "At least one screenshot for iPhone with Dynamic Island (medium display)" | 1179×2556 or 1206×2622; large-display 1290×2796, 1260×2736 or 1320×2868 are scaled down if supplied instead |
| iPad | "At least one screenshot for iPad 13-inch display" when the app runs on iPad (it does) | 2064×2752 or 2048×2732 |
| Mac | "Required for Mac apps", 16:10 | 1280×800, 1440×900, 2560×1600 or 2880×1800 |
| Icons | 1024×1024 App Store well in `Shared (App)/Assets.xcassets`; "For macOS and tvOS, you need to supply an asset for each size" or use an Icon Composer file | https://developer.apple.com/documentation/xcode/configuring-your-app-icon |
| Content | Safari on youtube.com with the extension acting (2.3.3: "Screenshots should show the app in use, and not merely the title art, login page, or splash screen"); capture on a device or simulator at the exact size | https://developer.apple.com/app-store/review/guidelines/ |

## 5. Privacy policy and App Privacy

| Item | Detail | Source |
|---|---|---|
| Policy URL | Public HTTPS page, entered in App Store Connect and linked in the container app: "All apps must include a link to their privacy policy in the App Store Connect metadata field and within the app in an easily accessible manner." | https://developer.apple.com/app-store/review/guidelines/ 5.1.1(i) |
| Policy content | What is collected (nothing); that the extension reads the YouTube page on the device; third-party sharing (none); retention and deletion (settings stay on the device, deleting the app removes them); contact address; YouTube trademark line | same; `naming-and-trademark.md` |
| App Privacy answers | No collection, no tracking (`privacy-manifest.md`) | https://developer.apple.com/app-store/app-privacy-details/ |
| Support URL | Required field; must reach a real contact page | https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information |

## 6. Review notes and demo instructions

App Review Information: Contact "Name, email, phone number" (phone "in international format, including a plus sign"); Sign-in only "If your app requires a login to use it" (not ours); Notes "can contain up to 4000 bytes" (https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information). 2.3.1(a): "All new features, functionality, and product changes must be described with specificity in the Notes for Review section" (https://developer.apple.com/app-store/review/guidelines/).

```
<Name> is a Safari web extension for youtube.com with a small container app. No sign-in, no in-app purchase, no network requests of its own; nothing is downloaded or stored off the device.
Enable on iOS: open the app once, then Settings > Apps > Safari > Extensions > <Name> > Allow Extension. In Safari load <test video URL>, tap the page menu, choose <Name>, allow access (for one day or always).
Enable on macOS: open the app once, then Safari > Settings > Extensions and tick <Name>. Load <test video URL>, click the <Name> toolbar button, allow access to youtube.com.
Controls in this version: <one per line, with where each appears>.
This version does not block, hide or skip ads.
```

Enable paths: https://support.apple.com/guide/iphone/get-extensions-iphab0432bf6/ios, https://support.apple.com/guide/safari/use-safari-extensions-sfri32508/mac, https://developer.apple.com/documentation/safariservices/managing-safari-web-extension-permissions.

## 7. TestFlight

| Item | Detail | Source |
|---|---|---|
| Limits | Internal "up to 100" App Store Connect users; external "up to 10,000"; "You can test a build for up to 90 days" | https://developer.apple.com/help/app-store-connect/test-a-beta-version/overview-of-testflight |
| Review | The first build added to an external group is reviewed; "beta app description and beta app review information are required in order to share your beta with external testers" | https://developer.apple.com/testflight/ |
| macOS | "To use TestFlight for Mac, build your macOS apps with Xcode 13 or later"; testers install through the TestFlight app | https://developer.apple.com/help/app-store-connect/test-a-beta-version/overview-of-testflight |
| Extension caveat | Extension details in iOS Settings appear "only ... for debug builds of your app from Xcode and not for copies from the App Store or TestFlight"; testers enable it under Settings > Apps > Safari > Extensions | https://developer.apple.com/videos/play/wwdc2021/10104/ |
| What to test | Enable flow on both platforms, site-permission prompt, popup as sheet (iPhone) and popover (iPad, Mac), every control on `m.youtube.com` and `www.youtube.com`, sync of the enabled state across devices | https://developer.apple.com/documentation/safariservices/syncing-safari-web-extensions-across-devices-and-platforms |

## 8. Archive and upload

Run through the `scripts/` conventions: `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`, `-quiet`, logs under `.atlas/tmp/build/`.

| Step | Detail | Source |
|---|---|---|
| Export compliance | `ITSAppUsesNonExemptEncryption` = `NO` "to indicate that your app ... either uses no encryption, or only uses encryption that's exempt"; without the key App Store Connect asks on every upload. Add it to `iOS (App)/Info.plist`; the macOS app has no plist file, so use the generated-Info.plist build setting (`INFOPLIST_KEY_ITSAppUsesNonExemptEncryption`, name unverified) | https://developer.apple.com/documentation/bundleresources/information-property-list/itsappusesnonexemptencryption |
| Versions | `MARKETING_VERSION` and `CURRENT_PROJECT_VERSION` identical on app and extension targets (all 1.0 / 1 today); raise the build number per upload (local; severity of a mismatch at upload unverified) | `yt.xcodeproj/project.xcproj` |
| Archive | `xcodebuild archive -project yt.xcodeproj -scheme "yt (iOS)" -destination "generic/platform=iOS" -archivePath .atlas/tmp/build/ios.xcarchive -allowProvisioningUpdates`; repeat with `"yt (macOS)"` and `generic/platform=macOS` | https://developer.apple.com/library/archive/technotes/tn2339/_index.html |
| Export and upload | `xcodebuild -exportArchive -archivePath <archive> -exportPath .atlas/tmp/build/export -exportOptionsPlist <plist: method app-store-connect, destination upload> -allowProvisioningUpdates`; or Xcode Organizer, Distribute App, App Store Connect | same; https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension |
| Privacy report | Organizer, archive, Generate Privacy Report before uploading | `privacy-manifest.md` |
| Submit | Attach the processed build to each platform version, answer the export-compliance and content-rights prompts, submit; status and App Review messages live in App Store Connect; "App Review will examine your app as soon as we can" | https://developer.apple.com/app-store/review/guidelines/ (After You Submit) |
| No-Mac fallback | App Store Connect, Xcode Cloud, "Safari Web Extension Packager" builds iOS and macOS apps from the extension folder; whether custom Swift in `SafariWebExtensionHandler` survives that path is unverified | https://developer.apple.com/documentation/safariservices/packaging-and-distributing-safari-web-extensions-with-app-store-connect |
| Outside the Mac App Store (not planned) | Developer ID signing plus notarization; Safari 18.4+ loads such extensions; no equivalent on iOS | https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension, https://webkit.org/blog/16574/webkit-features-in-safari-18-4/ |

## 9. Common first-submission mistakes

| Mistake | Effect | Prevention |
|---|---|---|
| Bundle ID in the record differs from `PRODUCT_BUNDLE_IDENTIFIER` | upload refused | copy from `project.xcproj`, case included (https://github.com/CharlesWiltgen/Axiom app-store-submission) |
| Latest agreement not signed by the Account Holder | no record, no upload | section 1 (https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app) |
| Placeholder `yt` still in menus, `_locales` or container copy | completeness and brand problems | `naming-and-trademark.md` rename checklist |
| Container app is the template on/off page | 4.2 risk | settings and help in the container (`review-guidelines-map.md`) |
| Screenshots show only the container | 2.3.3 | Safari with the extension in use |
| Notes for Review omit the enable steps | 2.1 "unable to locate the extension" pattern (https://github.com/rshankras/claude-code-apple-skills rejection-handler) | section 6 template |
| `<all_urls>` or extra hosts in `manifest.json` | 4.4.2 | `tests/manifest.test.js` |
| Privacy policy URL or in-app link missing | 5.1.1(i) | section 5 |
| Required-reason API added without a manifest entry | warning email, then refusal | `privacy-manifest.md` |
| iOS extension deployment target below the app's | Apple says keep them equal | both 17.0 (https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension) |
| Separate records per platform | universal purchase impossible later | one record from the start (https://developer.apple.com/support/universal-purchase/) |
