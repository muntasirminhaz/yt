# Troubleshooting headless builds and runs

| Symptom | Cause | Fix |
|---|---|---|
| `xcode-select: error: tool 'xcodebuild' requires Xcode` | Active developer dir is Command Line Tools (local) | Prefix with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`; the scripts do; or the user runs `sudo xcode-select -s /Applications/Xcode.app` once |
| `xcrun: error: unable to find utility "simctl"` | Same cause | Same fix |
| `requires a development team` or `No signing certificate` | Automatic signing with no team (local state) | `CODE_SIGNING_ALLOWED=NO` (simulator, compile) or `SIGN=adhoc` (macOS run); team signing waits for enrolment |
| `Unable to find a destination matching {name=iPhone 17 Pro, OS=27.2}` | Device names are per runtime (local) | `xcrun simctl list devices available`, pass `id=<UDID>` |
| `open -a Simulator` says "Unable to find application named 'Simulator'" | Xcode 27.2 ships the simulator window as Device Hub (local) | `open -a /Applications/Xcode.app/Contents/Applications/DeviceHub.app`; `simctl` boot, install, launch and openurl work without any window |
| Build succeeds but Safari does not list the extension | App never launched, or Safari developer toggles off | `open <Commander.app>` once; Settings > Advanced > web developer features; Settings > Developer > Allow unsigned extensions (resets on quit); check `pluginkit -mAvvv -p com.apple.Safari.web-extension` |
| Content script never runs on youtube.com | Site access not granted; `run_at` applies only after the grant | Grant in the toolbar item or Settings > Extensions > Websites; reload the page |
| JS edits not visible in Safari | Resources are copied into the `.appex` at build time | Rebuild, or use Settings > Developer > Add Temporary Extension pointed at `extension/` |
| Subfolder files missing or flattened in the `.appex` | Folder not listed under `opaque-folders` in the xcproj | Add it to the `extension` entry's `opaque-folders`, run `xcprojformatter --update`, rebuild |
| `Target names must be unique` or `requires a newer version of Xcode` from xcprojformatter | Hand edit broke the project file | Fix the JSON5, keep target names unique, rerun the formatter; last resort `git checkout Commander.xcodeproj/project.xcproj` |
| Comments or unknown keys vanished from project.xcproj | Formatter drops them silently | Do not rely on comments in the project file |
| `error: The project 'Commander' requires ... iOS 17.0` on an iOS 16 simulator | Deployment target is 17.0 | Use an iOS 17+ runtime |
| Simulator install fails with bundle ID mismatch between app and extension | Extension must be `<app id>.Extension` | Keep `com.cyberm3.commander` and `com.cyberm3.commander.Extension` in sync when renaming |
| `pluginkit` shows the extension but Safari says it is from an unidentified developer | Unsigned or ad-hoc build without the developer toggle | Tick "Allow unsigned extensions" again (it resets each Safari launch) |
| swift-format reports indentation errors | Default style is 2 spaces, Apple templates use 4 | Repo `.swift-format` sets 4; run `scripts/lint.sh --fix` |
| `node --test tests/` fails with MODULE_NOT_FOUND | Node 22 wants file globs, not a directory | `node --test 'tests/**/*.test.js'` (scripts already do) |
| Keychain dialog blocks a signed build | First use of a signing key | Click Always Allow once (only the user can) |
| Build is slow or stale after project edits | DerivedData cache | Delete `.atlas/tmp/build/DerivedData` (scratch) and rebuild |

Unverified items (confirm in the first live session and update `.atlas/runbooks/build-run-debug.md`): whether Safari 27.2 treats ad-hoc signed extensions as unsigned, the exact `pluginkit` output right after first launch, and whether `simctl install` over an existing install keeps the enabled state.
