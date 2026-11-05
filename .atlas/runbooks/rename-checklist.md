# Rename checklist (placeholder `yt` to the final product name)

Do this once, before the App Store Connect record exists (bundle IDs are locked after that). Keep "YouTube" and "YT" variants out of the public name and icon; "<Name> for YouTube" is permitted by YouTube's brand rules (see the `app-store-compliance` skill).

## Decide

| Item | Current | New |
|---|---|---|
| Product and project name | `yt` (`yt.xcodeproj`, targets `yt (iOS)`, `yt (macOS)`, `yt Extension (iOS)`, `yt Extension (macOS)`, products `yt.app`, `yt Extension.appex`) | |
| App bundle ID (shared by iOS and macOS) | `cyberm3.yt` | reverse-DNS, e.g. `com.cyberm3.<name>` |
| Extension bundle ID (must be `<app id>.Extension`) | `cyberm3.yt.Extension` | |
| Display name | `yt` | |
| Extension display name and description | `extension/_locales/en/messages.json` | |

## Files that carry the names

| File | What to change |
|---|---|
| `yt.xcodeproj/project.xcproj` | target names, `PRODUCT_NAME`, `PRODUCT_BUNDLE_IDENTIFIER` (4 targets), `INFOPLIST_KEY_CFBundleDisplayName`, product references, the `yt.xcodeproj` folder name itself; run `xcrun xcprojformatter --update` and `xcodebuild -list` afterwards |
| `scripts/env.sh` | `PROJECT_FILE`, `PRODUCT_NAME`, `APP_BUNDLE_ID`, `EXT_BUNDLE_ID`, `SCHEME_MAC`, `SCHEME_IOS` (every script reads these) |
| `Shared (App)/ViewController.swift` | `extensionBundleIdentifier` |
| `Shared (App)/Resources/Base.lproj/Main.html` | the sentences, the icon alt text, and the privacy and support URLs if the repository is renamed |
| `extension/options.js` | the privacy policy URL on the Support page |
| `docs/privacy.md`, `docs/support.md` | the product name in prose; publish with GitHub > Settings > Pages > branch `main`, folder `/docs` (nothing is published until that is switched on) |
| `extension/_locales/en/messages.json` | `extension_name`, `extension_description` |
| `package.json` | `name`, `description` |
| `README.md`, `CLAUDE.md`, `.claude/rules/swift.md`, `.claude/skills/*/SKILL.md` and references, `.atlas/runbooks/*.md` | prose mentions; find them with the grep below |
| App Store Connect | app name, subtitle, keywords (created after the rename) |

## Also before the first archive

- App icons: `Shared (App)/Assets.xcassets/AppIcon.appiconset` and `LargeIcon.imageset` are empty; add a 1024 px icon for iOS and the macOS sizes (or an Icon Composer file) and fill both `Contents.json`.
- Extension icons in `extension/images/` and the toolbar SVG still show the template artwork.
- `MARKETING_VERSION` / `CURRENT_PROJECT_VERSION` in the project file and `version` in `extension/manifest.json` should agree.

## Verify

```sh
grep -rn 'cyberm3\|yt\.app\|"yt (\|yt Extension' --include='*.sh' --include='*.swift' --include='*.json' --include='*.xcproj' --include='*.html' --include='*.md' . | grep -v node_modules | grep -v '.atlas/tmp'
scripts/build.sh macos && scripts/build.sh ios && scripts/test.sh
```
