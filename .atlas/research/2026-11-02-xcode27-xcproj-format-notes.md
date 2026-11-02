# Xcode 27.2 project.xcproj (JSON5 project format) - research notes, 2026-11-02
Tags: [n] = URL n under Sources. [R:path] = https://github.com/apple/xcode-project-format/blob/main/Sources/<path>. [L] = my own local test on Xcode 27.2 (27B52), no URL;
scratch files in /private/tmp/claude-501/-Users-muntasir-Sites-yt-control-extention/28210def-b269-449f-a7dd-83329c07f974/scratchpad/exp-xcproj. "(unverified)" = no source found.
Premise correction: the format arrived in Xcode 27.2 (GA 2026-10-29) [3], not in 27.0 / 27.1.

## a. Name, introduction, default, diffable / hand-editable
- Name: Apple says "JSON project configuration file format" / "JSON-based project format (.xcproj)"; the open-source spec + Swift library is "xcode-project-format" (module XcodeProjectFormat,
  types in XCSchema). project.xcproj replaces project.pbxproj inside the .xcodeproj. File inspector "Project Format" pop-up: JSON vs Property List. No other brand name found. [1][2][4][10]
- Introduced: Xcode 27.2 (Apple doc metadata: introducedAt 27.2) [1]. First beta: 27.2 beta 1, 27B5019j, 2026-09-16 [17] (another source says beta 2 [13]). GA 27B52 on 2026-10-29 [3].
  Xcode 27 (09-14) and 27.1 (10-15) [3] can open it but do not default to it [1][2]; the 27, 27.1 and 26.6 release notes never mention it (keyword search) [29].
- Default: yes from 27.2: "In Xcode 27.2 and later, the default project configuration file is a ... JSON file with a .xcproj extension"; Xcode 27+ supports both [1]. Existing projects are not auto-converted [10][11].
  The release notes word it "Enable it in the File inspector" [2]. New-project wizard not tested (GUI); [L] `xcrun xcodeproj init` and `xcrun safari-web-extension-packager` both write project.xcproj.
- Diffable: yes, stated goal: "changes in the comparison view correspond to your actions in Xcode ... merge conflicts are less likely" [1]; one UI action = one hunk, membership lives on the file, names not IDs [5].
- Hand-editable: Apple only says "more human-readable and editable by coding intelligence agents" [1] and "easily readable by humans" [5]; no stated support policy for manual edits (unverified).
  xcodebuild accepted my hand edits [L]; what gets lost is in section d.
- WWDC 2026: no session found covering it; it first shipped in a September 2026 beta (unverified).

## b. kind "folder" with a path outside the project; symlinks
- Outside path works. [L] `xcrun xcodeproj group add extension --filesystem-path ../extension` wrote { "kind": "folder", "path": "../extension" }; `group include --group /extension --target Demo` added
  "target-membership": [ "Demo" ]; `xcodebuild -list` and a build succeeded. An absolute-path argument was stored as a relative path. Xcode GUI not tested (unverified).
- Schema: path = FilePath (path + base; default is relative to the parent group; also absolute, <PROJECT>/, <SDK>/, <DEVELOPER>/, <PRODUCTS>/, <USER:SETTING>/). The library only checks absolute-vs-relative;
  it neither forbids ".." nor resolves paths [R:Library/Schema/References/FilePath.swift]. CLI help: relative paths resolve against the immediate parent group's directory and
  "Use an absolute path to link outside the project's own tree" [L: xcrun xcodeproj help group add]; the ../ form still worked.
- Apple's own Safari tool does the same: `xcrun safari-web-extension-packager` (27.2) emits project.xcproj with "../../../repo/extension/manifest.json"-style file refs [L]; docs: by default "the packager creates
  a reference in the Xcode project to the resources in the path you provide", --copy-resources copies instead [8].
- Weak precedent: a pbxproj synchronized group written by Xcode with sourceTree BUILT_PRODUCTS_DIR and path "../../Intermediates.noindex/..." (".." in such a path; not a source-tree case) [9].
- Gotcha for web extensions: a folder flattens nested files into Resources/ (scripts/util.js becomes util.js) [L]. Fix: "opaque-folders": [ "scripts", "images" ] keeps the structure [L]. Same cause reported for
  pbxproj explicitFolders [18]; conversion maps explicitFolders <-> opaque-folders [L]. Verified on an app-extension target: { "kind": "folder", "path": "../../repo/extension", "opaque-folders": [...],
  "target-membership": [ "PkgDemo Extension" ] } gave a correct .appex Resources layout (that throwaway project's embed step later failed on an unrelated bundle-ID mismatch) [L].
- Symlinks: Apple docs are silent (unverified); Folder is only described as one that "will dynamically load its content from the file system at project load time" [R:Library/Schema/References/Folder/Folder.swift].
  [L] xcodebuild: a symlinked file inside the folder was copied as a regular file; a symlinked directory inside was copied whole, not flattened (log: builtin-copy ... -resolve-src-symlinks);
  a folder whose own path is a symlink (ext_link -> ../extension) was followed, but the nested relative symlinks (../other_dir) then failed the build with "couldn't be opened" (cause not verified).

## c. Schema, validation, conversion
- No JSON Schema file from Apple (none in the repo tree [4]). Reference = the open-source Swift library (typed XCSchema model; DocC "Schema Overview" and "File Format Goals") [4][5][6]. Chris Hanson: it is documented in
  the library and its generated docs; another commenter: nothing beyond the library [12]. Unofficial JSON Schema (draft 2020-12) by a third party [14].
- Validate/format: `xcprojformatter [--input|--output|--update]` "pretty prints 'project.xcproj' Xcode project files in their canonical format" [R:Tool/Help.swift]. It decodes then re-encodes, so bad files fail [L]:
  unknown required-capabilities -> "The project requires a newer version of Xcode with support for ..."; duplicate target names -> "Target names must be unique". No check-only mode yet [20].
  It lives in Xcode.app/Contents/Developer/usr/bin (run via xcrun) [L]; articles say /usr/bin [11][16] (absent on my machine). Not a converter; does not read pbxproj [11][13].
- Convert: File inspector > Project Document > Project Format [1]; CLI `xcodebuild -project X.xcodeproj -convert-project FORMAT` ("converts a project from one format to another" in `xcodebuild -help`) [L].
  Articles use "Xcode Project" [10][11] or xcproj / pbxproj [13]. [L] xcproj and "Xcode Project" -> project.xcproj; pbxproj -> project.pbxproj (objectVersion = 110; kind folder -> PBXFileSystemSynchronizedRootGroup);
  round trip kept ../extension; a wrong name prints a list (Xcode 2.4 ... Xcode 27.0, Xcode Project). Not in Apple's online command-line tool reference [30]; man page not checked (unverified).
- `xcrun xcodeproj` (27.2 beta 3+) edits both formats but cannot convert; no Apple docs as of 2026-10-15 [13][15].

## d. Parser / dialect and gotchas
- Dialect: JSON5. Apple: "Being JSON5, the format is also much easier to work with on systems where this package is unavailable" [5]. Reader: Darwin JSONSerialization with [.json5Allowed, .fragmentsAllowed];
  elsewhere JSONDecoder.allowsJSON5 = true [R:Library/Serialization/Values/Value.swift]. json5Allowed (macOS 12+): comments, single/double quotes, multi-line strings, hex numbers, +/-Infinity, NaN [7].
  Rationale for choosing JSON5 is not documented; issue #19 asks, no reply [19].
- Writer style [L]: trailing commas only after the last item of multi-line arrays/objects (one-line { } and [ ] have none); fixed key order; sets sorted; "last-upgrade" is a "major.minor[.patch]" string near the
  end of the file [R:Library/Schema/Project.swift].
- Strict parsers fail: Python json stopped at the first trailing comma [L]; JSON.parse [22][16]; jq [19]. Use a JSON5 parser or Apple's library; Tuist's XcodeProj 9.17.x support is experimental [23].
- Comments, unknown keys and duplicate keys are silently dropped on rewrite: [L] xcprojformatter removed // and /* */ comments and an unknown top-level key and normalized single quotes, while xcodebuild -list
  accepted the same file; duplicates are dropped [13]; typos (unknown keys) go unnoticed [14].
- After scripted edits run `xcrun xcprojformatter --update X.xcodeproj` to restore canonical order/whitespace [R:Tool/Help.swift]. "Keep both sides" merge fixes can create duplicate keys [13].
- Misc: folder entries have no "name" key (the CLI rejects a name different from the directory basename) [L]; per-config settings use the key suffix [config=Debug] [14]; target names must be unique [L].
- Tsai: moving a file in a folder-based project dropped its target exclusions [12]. Adding a Sources phase after including a synchronized folder writes per-file exclusions and can fail linking silently [13].

## e. membership-exceptions, opaque-folders, target-membership
- kind "folder" = Apple's "Folder": it "will dynamically load its content from the file system at project load time, and keep it synchronized"; discovered files map to the folder's targets' build phases by
  file-type rules (PNG -> resources, Swift -> sources) [6][R:Library/Schema/References/Folder/Folder.swift]. In pbxproj it is PBXFileSystemSynchronizedRootGroup [L].
- target-membership: on a folder = list of target names. On a file/group = list of build-file memberships: string "Target/phase-kind[/name]" (kinds: compile-sources, resources, frameworks, headers, copy, script, ...)
  or object { "build-phase": ..., "header-role": ..., "platforms": ..., "asset-tags": ... } [R:Library/Schema/BuildFiles/BuildFile.swift][R:Library/Schema/BuildPhases/BuildPhase.swift]. The file lists its targets, not vice versa [5].
- membership-exceptions: array of exception sets; each has "target" (TargetExceptionSet) or "build-phase" (BuildPhaseExceptionSet) plus "exclusions" OR "inclusions" (both is an error; build-phase sets are always
  inclusions) as folder-relative member paths; optional maps "platforms", "attributes" (header-role ...), "asset-tags"; target sets also "public-headers", "private-headers", "compiler-flags"
  [R:Library/Schema/References/Folder/ExceptionSets/FolderExceptionSet.swift, TargetExceptionSet.swift, CommonExceptionSetProperties.swift][14].
  [L] { "target": "Demo", "exclusions": [ "background.js" ] } removed that file from Demo; { "target": "Demo2", "inclusions": [ "manifest.json", "scripts" ] } (Demo2 not in target-membership) gave Demo2 only those two.
  Tested with top-level names only.
- opaque-folders: set of folder-relative subfolder paths treated as one unit (copied whole, structure kept, not recursed or flattened). Apple's overview: "the whole folder flows through the build as a unit ...
  great for including things like a tree of html, js and css files" [6]; the property is explicitOpaqueFolders [R:Library/Schema/References/Folder/Folder.swift]; behavior confirmed [L]. "file-types" = per-member file-type overrides [14].

## f. Older Xcode, xcodebuild, CI, tools
- Xcode 26 and earlier: Apple says only ".xcproj is compatible with Xcode 27 and later" [1] and "also open in earlier versions of Xcode 27" [2]; "Xcode 26 cannot" is stated by [10][16]; exact Xcode 26 error text (unverified).
  Revert: pop-up back to Property List, or discard the VCS change [1], or -convert-project pbxproj ([L] writes objectVersion = 110; whether Xcode 26 opens that is (unverified)).
- xcodebuild/CI: no new flags; 27.0 and 27.1 xcodebuild read an xcproj [15][25]; 27.2 builds it [L]. Every machine needs Xcode 27+, CI included [24]. GitHub Actions: macos-26 images carry Xcode up to 26.6 [27];
  Xcode 27.x is on the separate xcode-27 label (GA 2026-10-15, arm64 only) [26], which includes 27.2 (RC build 27B48, image 20261026.0314.1) [28]. Xcode Cloud: no source found (unverified).
- fastlane: actions using the xcodeproj gem are reported broken (update_code_signing_settings, update_project_team, update_app_identifier, versioning plugin); maintainer: "None of our tooling is ready", "might take
  months" [22]. CocoaPods/Xcodeproj #1052 (the gem behind pod install) is open, no maintainer reply on the page when fetched 2026-11-02 [21]. Lanes that only call xcodebuild: no source (unverified).
- XcodeGen: no xcproj output; PR #1653 (options.projectFormat: json) open, unmerged [25]. Tuist: XcodeProj 9.17.0 (2026-09-17) added experimental read/write [23]; Tuist PR #13359 (merged 2026-09-17) adds
  GenerationOptions.projectFormat (.pbxproj default, .xcproj opt-in); which Tuist release contains it (unverified) [24]. Generators that keep emitting pbxproj are unaffected: Xcode 27 reads both [1].

## Sources
1 https://developer.apple.com/documentation/xcode/updating-your-xcode-project-configuration-file-format
2 https://developer.apple.com/documentation/xcode-release-notes/xcode-27_2-release-notes
3 https://developer.apple.com/news/releases/
4 https://github.com/apple/xcode-project-format (commit 0a7242a, 2026-10-02; docs https://swiftpackageindex.com/apple/xcode-project-format/0.1.0/documentation/xcodeprojectformat)
5 https://github.com/apple/xcode-project-format/blob/main/Sources/Library/XcodeProjectFormat.docc/Docs/file-format-goals.md
6 https://github.com/apple/xcode-project-format/blob/main/Sources/Library/XcodeProjectFormat.docc/Docs/schema-overview.md
7 https://developer.apple.com/documentation/foundation/jsonserialization/readingoptions/json5allowed
8 https://developer.apple.com/documentation/safariservices/packaging-a-web-extension-for-safari
9 https://developer.apple.com/forums/thread/795748
10 https://sarunw.com/posts/xcode-json-project-format-xcproj/
11 https://fatbobman.com/en/posts/from-pbxproj-to-xcproj/
12 https://mjtsai.com/blog/2026/09/17/xcodes-new-xcproj-files-are-json/
13 https://artemnovichkov.com/blog/xcode-projects-for-the-command-line-and-coding-agents
14 https://gist.github.com/artemnovichkov/0033fa6ca7d77312bbc7c8b7d6d7d350 (unofficial JSON Schema)
15 https://zenn.dev/d_date/articles/xcrun-xcodeproj-xcode27-2
16 https://dev.to/arshtechpro/goodbye-pbxproj-a-friendly-guide-to-xcode-272s-new-json-project-format-bhh
17 https://blakecrosley.com/blog/ios-27-2-beta
18 https://github.com/water-rs/waterui/issues/804
19 https://github.com/apple/xcode-project-format/issues/19
20 https://github.com/apple/xcode-project-format/issues/20
21 https://github.com/CocoaPods/Xcodeproj/issues/1052
22 https://github.com/fastlane/fastlane/issues/30323
23 https://github.com/tuist/XcodeProj/releases/tag/9.17.0
24 https://github.com/tuist/tuist/pull/13359
25 https://github.com/yonaskolb/XcodeGen/pull/1653
26 https://github.blog/changelog/2026-10-15-xcode-27-runner-image-generally-available/
27 https://github.com/actions/runner-images/issues/14404
28 https://github.com/actions/runner-images/blob/main/images/macos/xcode-27-arm64-Readme.md
29 https://developer.apple.com/documentation/xcode-release-notes/ (xcode-27-release-notes, xcode-27_1-release-notes, xcode-26_6-release-notes)
30 https://developer.apple.com/documentation/xcode/xcode-command-line-tool-reference
