# Editing yt.xcodeproj/project.xcproj (Xcode 27.2 JSON5 project format)

Legend: `(local)` = (local, verified on this Mac 2026-11-02); `(unverified)` = not confirmed in an official source; "research note" = local tests recorded in `.atlas/research/2026-11-02-xcode27-xcproj-format-notes.md`. Every `xcrun`/`xcodebuild` call needs `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer` `(local)`.

## Format facts

| Fact | Source |
| --- | --- |
| `project.xcproj` is the JSON project format, default for new projects since Xcode 27.2; Xcode 27+ reads both it and `project.pbxproj`; earlier Xcode cannot open it. | https://developer.apple.com/documentation/xcode/updating-your-xcode-project-configuration-file-format |
| Dialect is JSON5 (comments, trailing commas, single quotes accepted on read); the schema lives only in Apple's open-source Swift library. | https://github.com/apple/xcode-project-format , https://github.com/apple/xcode-project-format/blob/main/Sources/Library/XcodeProjectFormat.docc/Docs/file-format-goals.md |
| Writer style: trailing commas only in multi-line arrays/objects, fixed key order, sets sorted, `last-upgrade` near the end. | research note; `(local)` current file |
| `kind: folder` = filesystem-synchronized folder; files found on disk join the folder's targets by file-type rules; `opaque-folders` keeps a subfolder as one unit. | https://github.com/apple/xcode-project-format/blob/main/Sources/Library/XcodeProjectFormat.docc/Docs/schema-overview.md |
| `membership-exceptions` entries carry `target` plus either `inclusions` or `exclusions`, never both. | same URL; `(local)` |
| Folder entries have no `name` key; the CLI rejects a name that differs from the directory basename. | `xcrun xcodeproj group add --help` `(local)` |
| Strict JSON parsers (`python3 -m json.tool`, `jq`, `JSON.parse`) fail on trailing commas; no `json5` package exists under `node_modules`. | `(local)` |
| Read-only commands (`xcodebuild -list`, `-showdestinations`, `xcrun xcodeproj target list`) do not rewrite the file (hash unchanged). | `(local)` |
| fastlane actions built on the `xcodeproj` gem cannot read the format. | https://github.com/fastlane/fastlane/issues/30323 |

## This project's folder entries (`(local)`)

| Entry | Membership style | Consequence |
| --- | --- | --- |
| `Shared (App)` | `inclusions` per app target (`ViewController.swift`, `Assets.xcassets`, `PrivacyInfo.xcprivacy`, `Resources/*`, localized `Main.html`) | every new file must be included explicitly in both app targets |
| `Shared (Extension)` | `target-membership` = both extension targets | new Swift files compile into both extensions automatically |
| `extension` | `target-membership` = both extension targets; `opaque-folders: ["_locales", "images"]` | a new subfolder must be added to `opaque-folders` or its files are flattened into `Resources/` |
| `iOS (App)`, `iOS (Extension)`, `macOS (Extension)` | `target-membership` + `exclusions: ["Info.plist"]` | add exclusions for other non-resource files (entitlements) |
| `macOS (App)` | `target-membership` only | same |
| `Products` | group with product references and the two `Embed Foundation Extensions` copy phases | never hand-edit |

## CLI commands (run from the repo root)

| Task | Command | Status |
| --- | --- | --- |
| List targets | `xcrun xcodeproj target list --project yt.xcodeproj` | `(local)` |
| Folder tree | `xcrun xcodeproj group ls --project yt.xcodeproj` | `(local)` |
| Phases of a target | `xcrun xcodeproj target info --target "yt Extension (macOS)" --project yt.xcodeproj` (prints `1 sources, 2 frameworks, 3 resources`) | `(local)` |
| Read a setting | `xcrun xcodeproj setting get SWIFT_VERSION --target "yt (iOS)" --project yt.xcodeproj`; omit `--target` for project level; `--config Debug` to scope | `(local)` |
| Dump settings | `xcrun xcodeproj setting list --target "yt (iOS)" --config Release --project yt.xcodeproj` | help `(local)` |
| Set one value | `xcrun xcodeproj setting set MACOSX_DEPLOYMENT_TARGET 14.0 --target "yt Extension (macOS)" --project yt.xcodeproj` | help `(local)`; not executed |
| Set a list | `xcrun xcodeproj setting set-multi OTHER_LDFLAGS -- -framework SafariServices -framework WebKit --target "yt (iOS)" --project yt.xcodeproj` (`--` before values starting with `-`) | help `(local)`; not executed |
| Per-configuration value | `xcrun xcodeproj setting set VALIDATE_PRODUCT YES --target "yt (iOS)" --config Release --project yt.xcodeproj`; never write a `[config=...]` key name | help `(local)` |
| Remove a setting | `xcrun xcodeproj setting unset DEVELOPMENT_TEAM --project yt.xcodeproj` | help `(local)` |
| Include one file from a synced folder | `xcrun xcodeproj group include SharedSettings.swift --group "/Shared (Extension)" --target "yt (iOS)" --project yt.xcodeproj` (bare file name, must exist on disk) | help `(local)` |
| Include a whole synced folder | `xcrun xcodeproj group include --group "/extension" --target "yt Extension (iOS)" --project yt.xcodeproj` | help `(local)` |
| Exclude a file | `xcrun xcodeproj group exclude yt.entitlements --group "/iOS (App)" --target "yt (iOS)" --project yt.xcodeproj` | help `(local)` |
| Add a synced folder | `xcrun xcodeproj group add Config --filesystem-path Config --project yt.xcodeproj` (path relative to the parent group's directory; must exist) | help `(local)` |
| Target dependency | `xcrun xcodeproj target add-dependency "yt (iOS)" "yt Extension (iOS)" --project yt.xcodeproj` (already present; duplicates and cycles rejected) | help `(local)` |
| New target | `xcrun xcodeproj target add ytTests --product-type unit-test-bundle --project yt.xcodeproj`, then `target phase add ...` and `setting set ...` | help `(local)`; not executed |
| Packages | `xcrun xcodeproj pkg add <url> --from 1.0.0 --product <P> --target "<t>"` (none used; new deps need approval) | help `(local)` |
| Canonical format + validation | `xcrun xcprojformatter --update yt.xcodeproj` | `(local)` |
| Parse check | `xcodebuild -list -project yt.xcodeproj` | `(local)` |
| Convert | `xcodebuild -project yt.xcodeproj -convert-project pbxproj` writes `project.pbxproj` (objectVersion 110, folders become `PBXFileSystemSynchronizedRootGroup`); `-convert-project xcproj` converts back; a wrong name prints the accepted list | flag `(local)`; behaviour research note |

No CLI covers `opaque-folders` or the exception arrays beyond include/exclude (`xcrun xcodeproj help group`, `(local)`): edit those by hand, then format.

## Hand-edit procedure

1. Edit `yt.xcodeproj/project.xcproj`; keep the writer's trailing-comma style.
2. `xcrun xcprojformatter --update yt.xcodeproj`. It decodes and re-encodes: bad JSON5 fails, but comments, unknown keys and duplicate keys are dropped silently, so a misspelled key disappears instead of erroring (research note; https://artemnovichkov.com/blog/xcode-projects-for-the-command-line-and-coding-agents).
3. `xcodebuild -list -project yt.xcodeproj`, then `git diff yt.xcodeproj` must show only the intended change.
4. `scripts/build.sh macos` and `scripts/build.sh ios` before the change is considered done.

## Pitfalls

| Pitfall | Fix | Source |
| --- | --- | --- |
| New `extension/` subfolder flattened into `Resources/` | add it to `opaque-folders` | research note; https://github.com/water-rs/waterui/issues/804 |
| New file in `Shared (App)` not built | `group include` it for both app targets | `(local)` structure |
| Misspelled key vanishes after formatting | diff after every formatter run | research note |
| "Keep both" merge resolution leaves duplicate keys; last wins silently | reformat, review the diff | https://artemnovichkov.com/blog/xcode-projects-for-the-command-line-and-coding-agents |
| Duplicate target names | formatter error `Target names must be unique` | research note |
| `xcodebuild -list` without `-scheme` reports Release as the default configuration | pass `-scheme` and `-configuration` | `(local)` |
| App and extension deployment targets drift | keep `IPHONEOS_DEPLOYMENT_TARGET` 17.0 and `MACOSX_DEPLOYMENT_TARGET` 14.0 on all four targets | https://developer.apple.com/documentation/safariservices/troubleshooting-your-safari-web-extension |
| Xcode GUI open while the CLI edits the file | close Xcode first; it may rewrite the file | `(unverified)` |
| Moving a file inside a synchronized folder dropped its target exceptions | re-check `membership-exceptions` after moves | https://mjtsai.com/blog/2026/09/17/xcodes-new-xcproj-files-are-json/ |
| Symlinks: a symlinked file inside a folder is copied as a file; nested relative symlinks broke the build | keep real directories under `extension/` | research note |
| Packager-generated projects give the iOS extension deployment target 15.0 while the app gets 17.0 | this project already has 17.0 on both; re-check after any regeneration | research note; `(local)` |
