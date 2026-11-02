# App Store Review Guidelines mapped to this product

All quotes: https://developer.apple.com/app-store/review/guidelines/ (page states "Last Updated: October 16, 2026"; re-read before each submission). Product assumptions: free Safari web extension for youtube.com inside an iOS app and a macOS app; no accounts, no purchases, no data leaves the device, no ad blocking in version 1.

## Extensions and minimum functionality

| Guideline | Apple's words | For this product | Pass criterion |
|---|---|---|---|
| 4.4 Extensions | Apps "hosting or containing extensions must comply with ... the Safari web extensions documentation and should include some functionality, such as help screens and settings interfaces where possible. You should clearly and accurately disclose what extensions are made available in the app's marketing text, and the extensions may not include marketing, advertising, or in-app purchases." | The container app is the only place for settings, help and any purchase; popup and injected UI carry no promo or purchase | Container offers settings the extension honours plus help; ASC description names the Safari extension; `extension/` contains no store, upsell or ad code |
| 4.4.2 Safari extensions | "Safari extensions must run on the current version of Safari on the relevant Apple operating system. They may not interfere with System or Safari UI elements and must never include malicious or misleading content or code. Violating this rule will lead to removal from the Apple Developer Program. Safari extensions should not claim access to more websites than strictly necessary to function." | Hosts stay `*://*.youtube.com/*` until a feature needs more; injected UI lives inside page content; release build tested on current Safari | `manifest.json` has no `<all_urls>` and no host without a named feature; `tests/manifest.test.js` green; tested on current macOS and iOS Safari |
| 4.2 Minimum Functionality | "Your app should include features, content, and UI that elevate it beyond a repackaged website. If your app is not particularly useful, unique, or 'app-like,' it doesn't belong on the App Store." | The template container (a `WKWebView` showing on/off text) is thin; the reviewer opens the app first | Container has settings, per-platform enable guide, help and privacy-policy link |
| 4.2.2 | "apps shouldn't primarily be marketing materials, advertisements, web clippings, content aggregators, or a collection of links." | A container that only links to YouTube would fail | No screen whose only content is links |
| 4.2.3 (i) | "Your app should work on its own without requiring installation of another app to function." | Safari is a system app; nothing else may be required | App launches and is usable with nothing else installed; no "install X" prompts |
| 4.2.3 (ii) | "If your app needs to download additional resources in order to function on initial launch, disclose the size of the download and prompt users before doing so." | Nothing is downloaded at launch | No launch-time network fetch |

## Software requirements

| Guideline | Apple's words | For this product | Pass criterion |
|---|---|---|---|
| 2.5.1 | "Apps may only use public APIs and must run on the currently shipping OS. ... Apps should use APIs and frameworks for their intended purposes and indicate that integration in their app description." | SafariServices, WebKit, Foundation only | No private symbols; deployment targets iOS 17.0 / macOS 14.0 build and run on the current OS |
| 2.5.2 | "Apps should be self-contained in their bundles, and may not read or write data outside the designated container area, nor may they download, install, or execute code which introduces or changes features or functionality of the app" | Manifest v3 already disallows remote scripts (https://developer.apple.com/videos/play/wwdc2022/10099/); state lives in `browser.storage` and, later, an App Group | No `eval`, no remote `<script src>`, no remote config that toggles features; all JavaScript ships in `extension/` |
| 2.5.4 | "Multitasking apps may only use background services for their intended purposes: VoIP, audio playback, location, task completion, local notifications, etc." | Container declares no background modes; the extension's background page is Safari-managed and non-persistent | No `UIBackgroundModes` in `iOS (App)/Info.plist`; no audio or location entitlements |
| 2.5.6 | "Apps that browse the web must use the appropriate WebKit framework and WebKit JavaScript." | Container uses `WKWebView` for its local `Main.html`; the extension runs inside Safari | No alternative engine, no third-party browser SDK |
| 2.5.18 | "Display advertising should be limited to your main app binary, and should not be included in extensions, App Clips, widgets, notifications, keyboards, watchOS apps, etc." | Reinforces 4.4 | No ad SDK anywhere |

## Business and login

| Guideline | Apple's words | For this product | Pass criterion |
|---|---|---|---|
| 3.1.1 | "If you want to unlock features or functionality within your app, (by way of example: subscriptions, in-game currencies, game levels, access to premium content, or unlocking a full version), you must use in-app purchase. Apps may not use their own mechanisms to unlock content or functionality, such as license keys..." | Version 1 is free with nothing locked; a later paid tier is StoreKit in-app purchase in the container only (4.4 bars purchases in the extension) | No paywall or "pro" gate tied to codes or external payment; if IAP arrives: products attached to the version, restore purchases present |
| 4.8 Login Services | Apps using "a third-party or social login service (such as Facebook Login, Google Sign-In ...) to set up or authenticate the user's primary account with the app must also offer as an equivalent option another login service" that limits data to name and email, lets users hide their email, and does not collect interactions for advertising without consent. Not required when "Your app is a client for a specific third-party service and users are required to sign in to their mail, social media, or other third-party account directly to access their content." | No account in version 1; the user's own YouTube session inside Safari is not a login to our app | No login screen; if one appears, it offers the equivalent option (Sign in with Apple meets the listed features per https://github.com/CharlesWiltgen/Axiom app-store-submission) |

## Privacy

| Guideline | Apple's words | For this product | Pass criterion |
|---|---|---|---|
| 5.1.1 (i) Privacy Policies | "All apps must include a link to their privacy policy in the App Store Connect metadata field and within the app in an easily accessible manner." The policy must "Identify what data, if any, the app/service collects", cover third parties, and "Explain its data retention/deletion policies" | Required even though nothing is collected; the policy says so | HTTPS policy URL in App Store Connect; link reachable in the container app |
| 5.1.1 (ii) Permission | "Apps that collect user or usage data must secure user consent for the collection, even if such data is considered to be anonymous" | Any analytics or crash reporting needs opt-in | No collection; or explicit opt-in before the first send |
| 5.1.1 (iii) Data Minimization | "Apps should only request access to data relevant to the core functionality of the app and should only collect and use data that is required to accomplish the relevant task." | Host access is the extension's data request | Hosts limited to YouTube; no `<all_urls>`; no `tabs`-style permission without need |
| 5.1.1 (v) Account Sign-In | "If your app doesn't include significant account-based features, let people use it without a login. If your app supports account creation, you must also offer account deletion within the app." | No accounts | No account; or in-app deletion exists |
| 5.1.2 (i) Data Use and Sharing | "you may not use, transmit, or share someone's personal data without first obtaining their permission ... You must receive explicit permission from users via the App Tracking Transparency APIs to track their activity." | What the content script reads from YouTube's DOM stays on the device | No network calls from extension or app beyond YouTube's own page traffic; `NSPrivacyTracking` false |

## Intellectual property

| Guideline | Apple's words | For this product | Pass criterion |
|---|---|---|---|
| 5.2.1 Generally | "Don't use protected third-party material such as trademarks, copyrighted works, or patented ideas in your app without permission, and don't include misleading, false, or copycat representations, names, or metadata in your app bundle or developer name." | YouTube name and logo are Google's marks; see `naming-and-trademark.md` | Name without "YouTube"/"YT"; icon without YouTube marks; "for YouTube" used only descriptively |
| 5.2.2 Third-Party Sites/Services | "If your app uses, accesses, monetizes access to, or displays content from a third-party service, ensure that you are specifically permitted to do so under the service's terms of use. Authorization must be provided upon request." | We modify YouTube's page inside the user's browser. YouTube's terms forbid altering or circumventing the Service (https://www.youtube.com/t/terms) and YouTube Help calls ad blocking a terms violation (https://support.google.com/youtube/answer/14129599) | Version 1 ships no ad blocking or skipping; Notes for Review can state the extension runs only in the user's Safari, requests nothing from YouTube's servers itself and downloads no media. Whether player controls need Google's authorization is unverified |
| 5.2.3 Audio/Video Downloading | "Apps should not facilitate illegal file sharing or include the ability to save, convert, or download media from third-party sources (such as Apple Music, YouTube, SoundCloud, Vimeo, etc.) without explicit authorization from those sources." | YouTube is named; no download, capture, audio extraction or offline feature | No feature writes media to disk or clipboard; no `googlevideo.com` host access |

## Metadata

| Guideline | Apple's words | For this product | Pass criterion |
|---|---|---|---|
| 2.3 Accurate Metadata | "make sure all your app metadata, including privacy information, your app description, screenshots, and previews accurately reflect the app's core experience" | Screenshots show the extension on YouTube pages; YouTube's UI appears incidentally | Every control named in the listing exists in the submitted build |
| 2.3.1 (a) | "All new features, functionality, and product changes must be described with specificity in the Notes for Review section of App Store Connect (generic descriptions will be rejected)" | Each release lists its controls and how to reach them | Notes list features, enable steps per platform, a test video URL |
| 2.3.3 | "Screenshots should show the app in use, and not merely the title art, login page, or splash screen." | The container's on/off page alone is not "in use" | At least one screenshot per platform shows the popup open and a control applied on youtube.com |
| 2.3.6 | "Answer the age rating questions in App Store Connect honestly so that your app aligns properly with parental controls." | Container has no unrestricted web access (local HTML only), no UGC, no ads; the extension acts inside Safari | Questionnaire answered with none of those capabilities; how App Review treats an extension running on a site with mature content is unverified |
| 2.3.7 | "Choose a unique app name, assign keywords that accurately describe your app, and don't try to pack any of your metadata with trademarked terms, popular app names, pricing information, or other irrelevant phrases just to game the system. App names must be limited to 30 characters." | "YouTube" in name, subtitle or keywords is a trademarked term in metadata | Name at most 30 characters without "YouTube"/"YT"; keywords describe functions |
| 2.3.8 | "Use of terms like 'For Kids' and 'For Children' in app metadata is reserved in the App Store for the Kids Category." and icons across sizes must be "similar to avoid creating confusion" | No kids framing; one icon family | No such terms; app, extension and toolbar icons match |
| 2.3.10 | "don't include names, icons, or imagery of other mobile platforms or alternative app marketplaces in your app or metadata" | No Chrome, Firefox or Android references in the listing | Listing copy searched for them |

## Also expected to be cited

| Guideline | Summary (wording not re-verified today, unverified) | Pass criterion |
|---|---|---|
| 2.1 App Completeness | Crashes, placeholder text, broken links and missing test information are the most common rejection (https://github.com/CharlesWiltgen/Axiom app-store-submission) | Release build tested on device and Mac; no `yt` placeholder strings; Notes for Review complete |
| 2.4.5 (i) macOS | Mac App Store apps must be sandboxed; `ENABLE_APP_SANDBOX = YES` is already set on both macOS targets | Sandbox stays on; entitlements limited to what features need |
