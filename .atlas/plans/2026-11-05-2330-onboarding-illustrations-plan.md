# Onboarding illustrations per platform (2026-11-05 23:30)

Goal: the container app's welcome page shows, for the device it runs on, a drawn picture of each system screen the user must act on, with the button to press highlighted. Stylised SVG, not screenshots (App Review 2.5.18 forbids imitating system UI inside the extension; the container app explaining Safari's own prompts is the normal onboarding pattern).

| Platform | Step 1: turn on | Step 2: allow the site | Private browsing |
|---|---|---|---|
| iPhone | Settings > Apps > Safari > Extensions > Commander: "Allow Extension" toggle | Safari address bar puzzle icon, sheet "Allow for One Day / Always Allow" | same Settings page: "Allow in Private Browsing" |
| iPad | same page | puzzle icon in the top address bar, popover with the same buttons | same |
| Mac | Safari > Settings > Extensions: tick Commander | toolbar button popover "Allow Once / Allow for One Day / Always Allow" | same Settings pane: "Allow in Private Browsing" |

Changes: `Main.html` (SVG illustrations under each step, per platform classes), `Style.css`, `Script.js` (`show('ipad')` adds both iOS and iPad classes), `ViewController.swift` (passes `ipad` on `.pad` idiom). Mac page gains the same two steps and pictures above its on/off state line. Verify: both builds, device install, Mac app launch.
