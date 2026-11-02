# Rejection playbook

How replies work: App Review's message arrives in App Store Connect; answer through "Reply to App Review" (the thread older guides call the Resolution Center); do not use it to appeal or to ask for an expedited review; after a reply you can "request a call with an Apple representative" (include your time zone; "Calls are typically completed within three to five business days") - https://developer.apple.com/help/app-review/after-submitting-for-review/contact-app-review. Appeals: reply first, then "Only submit one appeal per rejected or removed app" covering every cited guideline point by point; the App Review Board answers in App Store Connect - https://developer.apple.com/help/app-review/after-submitting-for-review/appeal-to-the-app-review-board. Live apps: a non-legal, non-safety issue "will not" delay a bug fix if you accept the Bug Fix Submission offer; expedited review is for "a critical timing issue" only - https://developer.apple.com/app-store/review/guidelines/ (After You Submit). Metadata rejections are fixed in App Store Connect without a new build; binary rejections need a new upload (https://github.com/CharlesWiltgen/Axiom app-store-submission).

## Likely rejections for this product

Guideline text: https://developer.apple.com/app-store/review/guidelines/. Patterns adapted from https://github.com/rshankras/claude-code-apple-skills (rejection-handler, common-rejections) and https://github.com/CharlesWiltgen/Axiom (app-store-diag) to this product.

| Cited | Trigger here | Fix | Reply |
|---|---|---|---|
| 2.1 Completeness: reviewer cannot find or enable the extension | Notes lacked enable steps; site access never granted, so the content script did nothing | Use the Notes template in `submission-checklist.md` section 6; keep a public test video | B |
| 2.1 Completeness: placeholder or crash | "yt's extension" strings, template copy, crash on the current OS | Rename checklist in `naming-and-trademark.md`; fix; test the release build on a device and a Mac | A |
| 2.3.1(a) generic Notes for Review | "This app adds controls" | List each control and where it appears; state no sign-in, no network calls | A (metadata) |
| 2.3.3 screenshots | Only the container's on/off page | Screenshots of Safari with the extension acting on youtube.com | A (metadata) |
| 2.3.7 or 5.2.1 trademark in name or metadata | "YouTube" or "YT" in name, subtitle, keywords or icon | Rename in App Store Connect and in binary strings (new build when in-app); never argue the trademark | A |
| 4.2 Minimum functionality | Container judged a shell | Settings the extension honours, enable guide, help and privacy links; then describe them | C, then A |
| 4.4 Extensions | Description does not disclose the extension; popup carries promo or a purchase | Disclose in the first paragraph; strip promo | A |
| 4.4.2 host access or UI interference | Hosts beyond youtube.com, `<all_urls>`, or injected UI over Safari chrome | Narrow `matches`; keep UI inside page content | A |
| 5.2.2 or 5.2.3 third-party terms; "Authorization must be provided upon request" | Reviewer asks for YouTube's permission; a save or download feature; anything resembling ad blocking | No media download and no ad blocking in v1; state exactly what runs where (template B); if facts were misread, appeal (judgment) | B |
| 5.1.1(i) privacy policy | URL missing, dead, or no in-app link | Publish, link in the app and the record | A |
| 5.1.2 or App Privacy mismatch | Labels say nothing collected but an added SDK phones home | Remove the SDK, or declare it in labels, manifest and policy | A |
| 3.1.1 purchase (future) | A "Pro" unlock through codes or external payment | StoreKit in-app purchase in the container; restore purchases | A |
| 4.8 login (future) | Google Sign-In as the only login | Add Sign in with Apple as the equivalent option | A |
| 2.3.6 age rating | Reviewer treats YouTube content as the app's content | Container has no web browsing; answer honestly; explain that the extension runs inside Safari (outcome unverified) | B |
| 4.4.2 "must run on the current version of Safari" | Build tested only on older Safari | Re-test on the shipping OS before each submission | A |

## Reply patterns (under 200 words, cite the guideline, facts only)

A. Fixed and resubmitted
```
Thank you for the review. We addressed Guideline <X.Y>:
- <what changed, one line each>
- Verified on <device, OS> and <Mac, macOS>.
Build <version> (<build>) is submitted. Notes for Review now include the steps to enable the extension.
```

B. Clarification with steps (extension not found, terms questions)
```
Thank you for reviewing <Name>. To see the extension in use:
1. Open <Name> once. iOS: Settings > Apps > Safari > Extensions > <Name> > Allow Extension. macOS: Safari > Settings > Extensions, tick <Name>.
2. In Safari open <test video URL>; choose <Name> from the page menu (iOS) or click its toolbar button (macOS) and allow youtube.com.
3. <Control> appears <where>; <control> appears <where>.
The extension runs only inside the user's Safari on youtube.com pages, makes no requests of its own, does not save, convert or download media, and does not block or skip ads.
```

C. Pushing back on 4.2 (only when the container has real functionality)
```
Thank you for the feedback on Guideline 4.2. <Name>'s container app provides: <settings the extension applies>, <enable guide per platform>, <help and privacy policy>. The Safari extension is the product's core, as Guideline 4.4 permits; the container holds its settings and help. Steps to see each item: <steps>. We can provide a screen recording or discuss on a call.
```

## Escalation and what not to do

| Step | Rule | Source |
|---|---|---|
| 1 Reply | Template A, B or C in the App Store Connect thread; be "specific about what you're asking" | https://developer.apple.com/help/app-review/after-submitting-for-review/contact-app-review |
| 2 Call | Request it in the same thread after Apple replies; confirm contact details first | same page |
| 3 Appeal | One per rejected app; "Cite the specific guideline or terms your app was rejected or removed under, and explain point by point how your app meets it"; not for information requests, status checks or expedites | https://developer.apple.com/help/app-review/after-submitting-for-review/appeal-to-the-app-review-board |
| 4 Bug Fix Submission | For an app already on the store: accept the offer, ship the fix, address the issue next release | https://developer.apple.com/app-store/review/guidelines/ (After You Submit) |
| Expedited review | Only for critical timing; abuse leads to future requests being refused | https://developer.apple.com/help/app-review/after-submitting-for-review/request-expedited-review |
| Never | Resubmit unchanged, appeal an information request, discuss other developers' apps, use emotional language, or claim rights to Google's marks | the two Apple help pages above; https://github.com/rshankras/claude-code-apple-skills rejection-handler |
