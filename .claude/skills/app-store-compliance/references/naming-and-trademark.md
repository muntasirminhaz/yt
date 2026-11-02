# Naming, trademark and listing wording for a YouTube companion

## YouTube brand rules (quotes: https://developers.google.com/youtube/terms/branding-guidelines, read 2026-11-02)

| Topic | Google's words |
|---|---|
| Name | "You must never use the YouTube name or any abbreviation, acronym, or variant of the word YouTube, such as YT or You-Tube in conjunction with the overall name of your application." Forbidden examples on the page: "YouTube for Kids", "YouTube Education" |
| Branding images next to the name | "you must never use YouTube branding images in conjunction with the overall name or description of your application." |
| Permitted reference | "you may reference the fact that your app is for YouTube or works with YouTube"; the page's example is a "great app for YouTube" |
| Marks | "You cannot modify the colors of the YouTube logos or YouTube Icons"; "You cannot change YouTube branding images or remove, obstruct, distort, or alter any element of a YouTube trademark." |
| Prominence | "Do not display the logo as the most prominent element on your web page." |
| Trade dress | "Do not adopt marks, logos, slogans, or designs that are confusingly similar to the YouTube trademarks" or imitate YouTube's trade dress, including "distinctive color combinations, typography, graphic designs, product icons, or imagery associated with YouTube." |
| Endorsement | "Do not use a logo in ways that (1) imply an association with or endorsement of any other product, service"; other uses "must be approved via written permission." |

The page is written for YouTube API Services clients; this extension does not call that API, so the rules reach us through trademark law and App Review 5.2.1 rather than an API agreement (judgment, unverified).

## Apple rules (quotes: https://developer.apple.com/app-store/review/guidelines/)

| Guideline | Apple's words | Effect |
|---|---|---|
| 5.2.1 | "Don't use protected third-party material such as trademarks, copyrighted works, or patented ideas in your app without permission, and don't include misleading, false, or copycat representations, names, or metadata in your app bundle or developer name." | "YouTube", the play-button icon and the wordmark are Google's marks; an authorization request from App Review cannot be met |
| 2.3.7 | "Choose a unique app name, assign keywords that accurately describe your app, and don't try to pack any of your metadata with trademarked terms, popular app names, pricing information, or other irrelevant phrases just to game the system. App names must be limited to 30 characters." Subtitles "should not include inappropriate content, reference other apps, or make unverifiable product claims." | name at most 30 characters; "YouTube" only where it states compatibility |
| 2.3.8 | "ensure your metadata, including app name and icons (small, large, Apple Watch app, alternate icons, etc.), are similar to avoid creating confusion"; "For Kids" and "For Children" are reserved for the Kids Category | one icon family; no kids wording |
| 2.3.10 | "don't include names, icons, or imagery of other mobile platforms or alternative app marketplaces in your app or metadata" | no Chrome, Firefox or Android mentions in the listing |
| 5.2.5 | "Don't create an app that appears confusingly similar to an existing Apple product, interface (such as Finder), app (such as the App Store, iTunes Store, or Messages)"; "Apps and extensions ... may not include Apple emoji." | icon must not resemble Safari or Apple TV app icons; no Apple emoji in extension assets |
| App Store Connect names | "You can use an app name for one app per localization" (https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app); trademark holders can claim a name (https://www.apple.com/legal/internet-services/itunes/appnamenotices/) | check availability when creating the record; a Google claim would target names containing YouTube |

## Name patterns

| Pattern | Example | Verdict | Why |
|---|---|---|---|
| `<Name>` alone, descriptive subtitle | "Playfield", subtitle "Player controls for YouTube" | allowed | brand page permits "for YouTube"; subtitle is 27 characters |
| `<Name> for YouTube` | "Playfield for YouTube" | allowed | the construction the brand page permits; 21 characters |
| `<Name>: <function> for YouTube` | "Playfield: Controls for YouTube" | allowed only at 30 characters or fewer (this one is 31) | 2.3.7 limit |
| `YouTube <anything>` | "YouTube Controls", "YouTube Speed" | forbidden | the YouTube name leads the product name; Google's forbidden examples have this shape |
| `YT…`, `You-Tube…`, `UTube…` | "YT Control", "YTBoost" | forbidden | "any abbreviation, acronym, or variant"; the internal `yt` placeholder is in this class and must not ship |
| `Tube…` or `…Tube` | "TubeControl", "SpeedTube" | risky, avoid | arguably a "variant"; Google decides and we cannot pre-clear it (judgment) |
| Existing product names | "Enhancer for YouTube" (an existing browser extension noted in `.atlas/research`) | forbidden | copycat name under 5.2.1; likely App Store Connect name conflict |
| Names implying Google endorsement | "Official…", "…by YouTube", "YouTube Labs" | forbidden | brand page endorsement rule; 5.2.1 "misleading" |

Before fixing a name: search the App Store (iOS and Mac), the Chrome Web Store and Firefox Add-ons for the same name, and a trademark database (USPTO, EUIPO TMview); an empty result is not clearance (judgment).

## Icon rules

| Rule | Source |
|---|---|
| No YouTube play button (white triangle on a red rounded rectangle), no "YouTube" wordmark, no red-and-white TV or tube motif: these are the "product icons" and "distinctive color combinations" the brand page protects | https://developers.google.com/youtube/terms/branding-guidelines |
| A generic play or slider glyph is fine; avoid pairing it with YouTube red as the dominant colour (judgment) | same page |
| App Store icon: 1024×1024 PNG in the asset catalog; iOS and iPadOS can auto-generate from a single size; "For macOS and tvOS, you need to supply an asset for each size" (16, 32, 128, 256, 512 points) or an Icon Composer file | https://developer.apple.com/documentation/xcode/configuring-your-app-icon, https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format/AppIconType.html |
| Provide square layers; "The system masks all layer edges to produce an icon's final shape"; "Don't use replicas of Apple hardware products." | https://developer.apple.com/design/human-interface-guidelines/app-icons |
| Extension icons: PNG 48, 64, 96, 128, 256, 512 in `extension/images/`, toolbar icon as SVG; a grayscale toolbar icon is auto-tinted since Safari 16.4 | https://developer.apple.com/documentation/safariservices/creating-a-safari-web-extension, https://webkit.org/blog/13966/webkit-features-in-safari-16-4/ |
| App icon, extension icon and toolbar icon read as one family (2.3.8) | https://developer.apple.com/app-store/review/guidelines/ |

## Metadata wording

| Field (limit) | Write | Avoid | Rule |
|---|---|---|---|
| Name (30 characters) | `<Name>` or `<Name> for YouTube` | any YouTube or YT variant leading the name | brand page, 2.3.7 |
| Subtitle (30 characters) | "Player controls for YouTube" | superlatives, other app names, keyword lists | 2.3.7 |
| Description (4000 characters) | First paragraph: a Safari extension that adds playback and interface controls on youtube.com; list shipped controls; "Works with YouTube. Not affiliated with or endorsed by Google."; enable steps for iOS and macOS; "Nothing leaves your device" | "blocks ads" (not in v1), "download videos", "official", any control not in the build | 4.4 (disclose the extension), 2.3.1, 5.2.3, brand endorsement rule |
| Keywords (100 bytes) | function words: playback, speed, player, controls, safari extension, video | "YouTube" (a trademarked term in the keyword field is the 2.3.7 pattern; whether App Store Connect flags it is unverified) | 2.3.7 |
| Promotional text (170 characters), What's New | shipped behaviour only | roadmap promises | 2.3 |
| Screenshots | Safari on youtube.com with the popup open and a control applied; YouTube's UI appears incidentally | YouTube logo as hero art, YouTube red frames, the container's on/off page alone | 2.3.3, brand prominence rule |
| Notes for Review | enable steps, test video URL, control list | generic text | 2.3.1(a) |
| In-app and extension strings | `extension_description` "Playback and interface controls for YouTube in Safari." (current `extension/_locales/en/messages.json`) is fine | a product name containing YouTube (`.claude/rules/extension.md` already forbids it) | brand page |
| Privacy policy and support pages | "YouTube is a trademark of Google LLC. This app is not affiliated with or endorsed by Google." (recommended, judgment) | logo use | brand endorsement rule |

Field limits: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information.

## Rename checklist for the `yt` placeholder (grep, 2026-11-02)

| Location | Change |
|---|---|
| `yt.xcodeproj/project.xcproj` | `PRODUCT_NAME` (`yt`, `yt Extension`), `INFOPLIST_KEY_CFBundleDisplayName` (`yt`, `yt Extension`), target names and the schemes that follow them. Bundle IDs `cyberm3.yt` and `cyberm3.yt.Extension` are invisible to users and may stay; if changed, do it before the first upload (whether App Store Connect locks the bundle ID after the first build is unverified) and keep the extension ID `<app id>.Extension` with no extra period (https://developer.apple.com/forums/thread/680350) |
| `Shared (App)/ViewController.swift` line 19 | `extensionBundleIdentifier` must equal the extension bundle ID |
| `extension/_locales/en/messages.json` | `extension_name` (shown in Safari's extension lists) |
| `Shared (App)/Resources/Base.lproj/Main.html` lines 13-17, `Shared (App)/Resources/Script.js` lines 5-7 | "yt's extension" copy and the icon alt text |
| `macOS (App)/Base.lproj/Main.storyboard` | menu titles "About yt", "Hide yt", "Quit yt", "yt Help" and the window title |
| `scripts/*.sh` | scheme names follow the targets; re-check after renaming |
| App Store Connect | name and subtitle entered when the record is created |
| `README.md`, `package.json` | not user-facing; tidy with the rename |
