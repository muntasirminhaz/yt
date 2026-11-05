---
name: app-store-compliance
description: App Review rules for Safari extensions and container apps, privacy manifest and nutrition labels, YouTube naming/trademark rules, privacy policy, App Store Connect, TestFlight, universal purchase. Use before any user-facing or release-facing change, naming decision, permission change or submission.
---

# App Store compliance (Safari web extension, iOS + macOS)

Product facts this skill assumes; update the row when a fact changes.

| Fact | Value |
|---|---|
| Distribution | App Store on iOS and macOS from one App Store Connect record; app bundle ID `cyberm3.yt`, extension `cyberm3.yt.Extension`; universal purchase |
| Business | Free; no in-app purchase, no ads, no accounts, no analytics. Three opt-in features reach community servers behind optional host permissions (SponsorBlock and DeArrow at sponsor.ajay.app: 4-character hash prefix of the video ID; Return YouTube Dislike: the video ID); otherwise no network calls of our own |
| Policy and support pages | `docs/privacy.md`, `docs/support.md`, meant for GitHub Pages at `https://muntasirminhaz.github.io/yt/`; linked from `Main.html` and the extension's Support page; Notes for Review draft in `.atlas/runbooks/review-notes.md` |
| Version 1 scope | Playback and interface controls on `*://*.youtube.com/*`; no ads blocked or skipped |
| Name | `yt` is an internal placeholder; the public name is fixed before the App Store Connect record exists |
| Team | No Apple Developer Program team yet; device, TestFlight and App Store builds wait for enrolment |
| Privacy manifests | `Shared (App)/PrivacyInfo.xcprivacy`, `Shared (Extension)/PrivacyInfo.xcprivacy`; today: no tracking, nothing collected, no required-reason APIs |

Guideline numbers below refer to https://developer.apple.com/app-store/review/guidelines/ (page dated October 16, 2026); quotes and pass criteria are in `references/review-guidelines-map.md`.

## Pre-change checklist

Run the matching rows before writing code. A failed row is a blocker to raise, not a note to add.

| Change | Check | Rule |
|---|---|---|
| Any feature | Works with nothing else installed; no downloaded or evaluated code; the container app still offers real settings and help | 4.2.3(i), 2.5.2, 4.2, 4.4 |
| Feature acting on YouTube's page | Does not save, convert or download media; does not block or skip ads in v1; stays inside what YouTube's terms permit | 5.2.2, 5.2.3, ad-blocking table below |
| Feature a reviewer must see | Add it to Notes for Review with steps; update screenshots and description in the same release | 2.3.1(a), 2.3.3 |
| New extension permission or API (`storage`, `alarms`, `scripting`, `declarativeNetRequest`, `nativeMessaging`) | Only what the feature needs; never `<all_urls>`; prefer `activeTab` or optional permissions; `webRequest` cannot block in Safari | 4.4.2, 5.1.1(iii) |
| New host (`youtube-nocookie.com`, `googlevideo.com`, `ytimg.com`) | A named feature fails without it; add the exact host to `content_scripts.matches` or `host_permissions`, no wildcard beyond the domain | 4.4.2 |
| Native code using `UserDefaults`, file dates, boot time or disk space | Add the category and reason code to both privacy manifests in the same change | `references/privacy-manifest.md` |
| Anything sending data off device (analytics, crash reports, remote config) | Default is no. Otherwise: opt-in consent UI, privacy policy update, App Privacy answers update, `NSPrivacyCollectedDataTypes` | 5.1.1(i)(ii), 5.1.2(i) |
| A purchase | In-app purchase only, in the container app only, never in the extension; restore purchases; no license keys or codes | 3.1.1, 4.4 |
| A login | Prefer none. A third-party login for a primary account needs an equivalent privacy-preserving option (Sign in with Apple is the usual one); account creation needs in-app deletion | 4.8, 5.1.1(v) |
| Product name, icon, listing copy, in-app strings | Naming rule below; no YouTube logo, red-and-white play-button trade dress, or "YouTube" inside our product name | 5.2.1, 2.3.7, brand page |
| Extension UI (popup, injected controls) | No ads, marketing or purchases; must not cover or imitate Safari or system UI | 4.4, 4.4.2, 2.5.18 |
| Deployment target or SDK | Still runs on the current Safari and OS; app and extension targets stay identical | 2.5.1, 4.4.2 |

## Pre-submission checklist

| # | Item | Detail |
|---|---|---|
| 1 | Program and record | Enrolled; Account Holder signed the latest agreement; team set on all four targets; record created with the final name and the app bundle ID; both platforms on one record |
| 2 | Name and marks | Final name and icon pass `references/naming-and-trademark.md`; placeholder `yt` removed from every location in its rename checklist |
| 3 | Build | Release archive per platform tested on a device and a Mac running the current OS: extension enables, content script runs after the site grant, popup is a sheet on iPhone and a popover on iPad and Mac, no crash |
| 4 | Manifest | `extension/manifest.json` permissions and hosts minimal; `scripts/test.sh js` green |
| 5 | Privacy manifests | Both files match the code; privacy report generated from the archive |
| 6 | Privacy policy | Published at a public HTTPS URL, entered in App Store Connect, linked inside the container app |
| 7 | App Privacy | Answers say nothing is collected and no tracking, unless a change above altered that |
| 8 | Assets | Screenshots per platform showing the extension acting on youtube.com; 1024 px icon with no alpha; sizes in `references/submission-checklist.md` |
| 9 | Listing | Description names the Safari extension, says "for YouTube" only descriptively, claims only shipped controls; subtitle and keywords without "YouTube"; age rating answered |
| 10 | Notes for Review | Enable steps for iOS and macOS, a test video URL, what each control does, "no sign-in, no network calls, nothing downloaded", contact phone in international format |
| 11 | Export compliance | `ITSAppUsesNonExemptEncryption` = NO for both app targets |
| 12 | Beta | TestFlight pass on iOS and macOS; universal purchase shows both platforms |

## Naming rule

| Rule | Source |
|---|---|
| Never "YouTube" or "any abbreviation, acronym, or variant of the word YouTube, such as YT or You-Tube" in the app name; "YouTube for Kids" and "YouTube Education" are Google's forbidden examples | https://developers.google.com/youtube/terms/branding-guidelines |
| "<Name> for YouTube" and "works with YouTube" are the permitted references | same page |
| No YouTube logo, icon, colour scheme, typography or "product icons" imitated in our icon or art; never alter a YouTube mark | same page |
| No third-party trademarks or copycat names in bundle, metadata or developer name; name at most 30 characters; no trademarked terms packed into metadata | 5.2.1, 2.3.7 |
| Bundle IDs `cyberm3.yt*` are not user-visible and may stay; the product name, display names, menu titles, `_locales` name and container copy must be renamed first | `references/naming-and-trademark.md` |

## Ad blocking: each party's stated position

| Party | Statement | Source |
|---|---|---|
| YouTube Terms of Service (effective January 5, 2022) | Users may not "alter, modify" any part of the Service or Content without authorization, nor "circumvent, disable, fraudulently engage with, or otherwise interfere with any part of the Service"; ad blockers are not named | https://www.youtube.com/t/terms |
| YouTube Help | "When you block YouTube ads, you violate YouTube's Terms of Service." and "If you continue to use ad blockers, we may block your video playback." | https://support.google.com/youtube/answer/14129599 |
| App Review 5.2.2 | Using or displaying a third-party service's content requires being "specifically permitted to do so under the service's terms of use"; "Authorization must be provided upon request." | https://developer.apple.com/app-store/review/guidelines/ |
| Apple platform | Safari ships a Content Blocker extension API for "hiding elements, blocking loads, and stripping cookies" | https://developer.apple.com/documentation/safariservices/creating-a-content-blocker |
| This project, version 1 | No ads blocked or skipped. Any later change is a product decision taken with the rows above in view; this skill states positions and recommends none | - |

## Read next

| Need | File |
|---|---|
| Each guideline: Apple's words, what it means here, pass criterion | `references/review-guidelines-map.md` |
| Privacy manifest keys, reason codes, App Privacy answers, which targets need a file | `references/privacy-manifest.md` |
| Name patterns with examples, icon rules, metadata wording, rename checklist | `references/naming-and-trademark.md` |
| Enrolment to upload: certificates, record, universal purchase, assets, review notes, TestFlight, archive commands, first-submission mistakes | `references/submission-checklist.md` |
| Likely rejections with fixes, reply patterns, call and appeal path | `references/rejection-playbook.md` |
| Platform facts behind this skill | `.atlas/research/2026-11-02-safari-web-extension-platform-notes.md` sections 6 and 7 |
