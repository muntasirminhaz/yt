# Signing, archive, export and upload

State on this Mac (2026-11-02): no signing identities, no team in the project (`CODE_SIGN_STYLE = Automatic` with no `DEVELOPMENT_TEAM`). Everything in sections 1 and 2 works today; sections 3 to 6 wait for Apple Developer Program enrolment (US$99/year, https://developer.apple.com/programs/).

## 1. Unsigned builds (today)

`CODE_SIGNING_ALLOWED=NO` skips signing. Good for simulator builds and compile checks. An unsigned macOS app still runs, and Safari loads its extension once "Allow unsigned extensions" is on, but entitlements such as the App Sandbox are not applied because they travel inside a signature.

## 2. Ad-hoc signing (today)

Xcode calls this "Sign to Run Locally". From the shell: `CODE_SIGN_STYLE=Manual CODE_SIGN_IDENTITY=- DEVELOPMENT_TEAM= PROVISIONING_PROFILE_SPECIFIER=`. Verified (local): the app is signed with `Signature=adhoc`, `TeamIdentifier=not set`, and the `com.apple.security.app-sandbox` entitlement is present. Ad-hoc signed extensions still need "Allow unsigned extensions" in Safari (unverified whether Safari 27.2 treats ad-hoc as unsigned; the runbook records the outcome). App Group entitlements under ad-hoc signing on macOS: works for `group.` identifiers in Apple's samples (unverified here; no App Group configured yet).

## 3. Team signing (after enrolment)

1. Enrol, then either sign in to Xcode once (Xcode > Settings > Accounts) so `-allowProvisioningUpdates` can create certificates and profiles, or create an App Store Connect API key and pass `-authenticationKeyPath`, `-authenticationKeyID`, `-authenticationKeyIssuerID` to xcodebuild. Source: `xcodebuild -help` (local) and https://developer.apple.com/library/archive/technotes/tn2339/_index.html.
2. Put the team ID in the project once: `xcrun xcodeproj setting set DEVELOPMENT_TEAM <TEAMID> --project Commander.xcodeproj` for each target (or edit the four `build-settings` blocks and run `xcprojformatter --update`).
3. Register the App Group in the developer account before the first signed build that uses it; both apps and both extensions need the entitlement. https://developer.apple.com/documentation/xcode/configuring-app-groups
4. Expect a one-time Keychain dialog ("codesign wants to sign using key"): click Always Allow.

## 4. Archive and export

Export options plist for the App Store (write to `.atlas/tmp/build/ExportOptions-appstore.plist`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>method</key><string>app-store-connect</string>
  <key>destination</key><string>upload</string>
  <key>teamID</key><string>TEAMID</string>
  <key>signingStyle</key><string>automatic</string>
  <key>uploadSymbols</key><true/>
</dict></plist>
```

Commands: see `commands.md` (archive, then `-exportArchive`). With `destination = upload` the export step uploads to App Store Connect directly; use `export` to get an `.ipa` or `.pkg` to inspect first. Keys documented by `xcodebuild -help` ("Available keys for -exportOptionsPlist", local).

Alternatives that stay on the command line: the `asc` CLI (`brew install asc`, see the `asc-xcode-build` skill) and Xcode Cloud. fastlane does not yet understand the Xcode 27.2 project format (`.atlas/research/2026-11-02-xcode27-xcproj-format-notes.md`).

## 5. What distribution requires

| Channel | Requirement | Source |
|---|---|---|
| macOS Safari, local testing | nothing (unsigned or ad-hoc + "Allow unsigned extensions") | https://developer.apple.com/documentation/safariservices/distributing-your-safari-web-extension |
| iOS Simulator | nothing | same |
| Physical iPhone or iPad | Developer Program (Apple's extension docs say membership is required; a free Personal Team is unverified) | https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension |
| TestFlight (iOS and macOS) | Program, App Store Connect record, archive upload | https://developer.apple.com/testflight/ |
| App Store (both platforms, one record, universal purchase) | Program, shared bundle ID across platforms, review | https://developer.apple.com/support/universal-purchase/ |
| Mac outside the App Store | Developer ID + notarization; Safari 18.4+ loads notarized extensions | https://webkit.org/blog/16574/webkit-features-in-safari-18-4/ |

Mac App Store builds do not need notarization. https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution

## 6. Secrets hygiene

Never commit `.p12`, `.cer`, `.mobileprovision`, `.provisionprofile` or `AuthKey_*.p8` files; `.gitignore` already blocks them. Keep API keys outside the repo (Keychain or `~/.private_keys`).
