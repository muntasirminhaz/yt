# Notes for Review (draft, fill `<Name>` and the test URL at submission)

Paste into App Store Connect > App Review Information > Notes (4000 bytes max). Contact phone in international format.

```
<Name> is a Safari web extension for youtube.com with a small companion app. No sign-in, no in-app purchase, no analytics. Nothing is downloaded and no media is saved or converted. Ads are not blocked or skipped.

Enable on iOS: open the app once, then Settings > Apps > Safari > Extensions > <Name> > Allow Extension. In Safari load <test video URL>, tap the page menu, choose <Name>, allow access.
Enable on macOS: open the app once, then Safari > Settings > Extensions and tick <Name>. Load <test video URL>, click the <Name> toolbar button, allow access to youtube.com.

Settings open from the toolbar button (macOS) or the extension's entry in Safari's page menu (iOS). The companion app explains how to enable the extension, links the privacy policy and support page, and on macOS opens Safari's extension settings.

Permissions:
- storage: the user's settings.
- cookies (youtube.com only): the optional "Privacy mode" setting, off by default, copies the user's youtube.com cookies into the extension's local storage and signs YouTube out so it behaves as for a first-time visitor; turning it off restores them. Nothing leaves the device.
- Optional host permissions, each requested only when the user turns the matching setting on: sponsor.ajay.app (SponsorBlock segment skipping and DeArrow titles; sends a 4-character hash prefix of the video ID) and returnyoutubedislikeapi.com (dislike counts; sends the video ID).

What to try on <test video URL>: the toolbar under the player (speed, loop, screenshot, quality), the Settings page groups Playback, Player, Appearance, Feeds, Power and Creator. The Power and Creator groups are advanced controls and are off by default.

Privacy policy: <policy URL>. Support: <support URL>.
```
