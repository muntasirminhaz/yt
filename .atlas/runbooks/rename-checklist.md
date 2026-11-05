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

- Icons done 2026-11-05 (direction A, brass chevrons on navy): iOS light, dark and tinted 1024 px, the ten macOS sizes, LaunchScreen LargeIcon, `extension/images/icon-*.png`, `Shared (App)/Resources/Icon.png`, toolbar SVG. Renderer: `.atlas/runbooks/icon-render.swift` (regenerate from it, never edit PNGs by hand).
- `MARKETING_VERSION` / `CURRENT_PROJECT_VERSION` in the project file and `version` in `extension/manifest.json` should agree (1.0 / 1 / 1.0 today).

## Verify

```sh
grep -rnI '\byt\b' --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=tmp . | grep -v 'yt-' | grep -v '\.atlas/\(plans\|reports\|research\|knowledge\)'
scripts/build.sh macos && scripts/build.sh ios && scripts/test.sh
```
