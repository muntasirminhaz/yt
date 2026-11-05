# Rename record: `yt` placeholder to Commander (done 2026-11-05)

| Item | Value |
|---|---|
| Product, project, display name | `Commander` (`Commander.xcodeproj`, targets `Commander (iOS)`, `Commander (macOS)`, `Commander Extension (iOS)`, `Commander Extension (macOS)`, products `Commander.app`, `Commander Extension.appex`) |
| App Store listing name | `Commander for YouTube` (entered when the App Store Connect record is created; "for YouTube" is the descriptor Google's brand page permits) |
| Bundle IDs | `com.cyberm3.commander`, `com.cyberm3.commander.Extension` |
| Extension name (`_locales`) | `Commander`; description unchanged |
| GitHub repository | still `yt`, so the privacy and support URLs stay `https://muntasirminhaz.github.io/yt/`; if the repository is renamed, update `Main.html`, `extension/options.js` and the compliance skill |

Files changed: `Commander.xcodeproj/project.xcproj`, `scripts/env.sh`, `Shared (App)/ViewController.swift`, `Shared (App)/Resources/Base.lproj/Main.html`, `macOS (App)/Base.lproj/Main.storyboard`, `extension/_locales/en/messages.json`, `extension/options.js` and `extension/ui.js` (settings file name), `tests/live/*.mjs` (simulator storage path), `package.json`, `docs/privacy.md`, `README.md`, `CLAUDE.md`, `.claude/rules/*.md`, `.claude/skills/**`.

After the rename, Safari treats the extension as new: enable it again in Safari > Settings > Extensions (macOS) and Settings > Apps > Safari > Extensions (iOS), and re-grant youtube.com.

## Still before the first archive

- App icons: `Shared (App)/Assets.xcassets/AppIcon.appiconset` and `LargeIcon.imageset` are empty; add a 1024 px icon for iOS and the macOS sizes (or an Icon Composer file) and fill both `Contents.json`.
- Extension icons in `extension/images/` and the toolbar SVG still show the template artwork.
- `MARKETING_VERSION` / `CURRENT_PROJECT_VERSION` in the project file and `version` in `extension/manifest.json` should agree (1.0 / 1 / 1.0 today).

## Verify

```sh
grep -rnI '\byt\b' --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=tmp . | grep -v 'yt-' | grep -v '\.atlas/\(plans\|reports\|research\|knowledge\)'
scripts/build.sh macos && scripts/build.sh ios && scripts/test.sh
```
