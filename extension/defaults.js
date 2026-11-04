(() => {
  const clampSpeed = (v) => Math.min(16, Math.max(0.07, Math.round(v * 100) / 100));
  const KEY_NAMES = { ArrowUp: "↑", ArrowDown: "↓", ArrowLeft: "←", ArrowRight: "→", Space: "Space", Enter: "↩", Backspace: "⌫", Backquote: "`", Minus: "-", Equal: "=", BracketLeft: "[", BracketRight: "]", Semicolon: ";", Quote: "'", Comma: ",", Period: ".", Slash: "/", Backslash: "\\" };
  const comboOf = (e) => {
    if (["Control", "Alt", "Shift", "Meta"].includes(e.key)) return null;
    const mods = [e.ctrlKey && "Ctrl", e.altKey && "Alt", e.shiftKey && "Shift"].filter(Boolean);
    const fkey = /^F\d{1,2}$/.test(e.code);
    if (!mods.length && !fkey) return null;
    return [...mods, e.code].join("+");
  };
  const comboLabel = (combo) => (combo ?? "").split("+").map((part) => ({ Ctrl: "⌃", Alt: "⌥", Shift: "⇧" })[part] ?? KEY_NAMES[part] ?? part.replace(/^(Key|Digit)/, "")).join("");
  const device = (() => {
    const platform = navigator.platform || "";
    if (/iPhone|iPod/.test(platform)) return "iphone";
    if (/iPad/.test(platform) || (platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "ipad";
    return "mac";
  })();
  const NO_PHONE = { not: ["iphone"] };
  const row = (key, type, def, extra = {}) => ({ key, type, def, ...extra });
  const sw = (key, def = false, extra) => row(key, "switch", def, extra);
  const QUALITIES = ["hd2160", "hd1440", "hd1080", "hd720", "large", "medium", "small", "tiny"];
  const QUALITY_LABELS = { hd2160: "2160p (4K)", hd1440: "1440p", hd1080: "1080p", hd720: "720p", large: "480p", medium: "360p", small: "240p", tiny: "144p" };
  const quality = (key, def, extra) => row(key, "select", def, { options: QUALITIES, labels: QUALITY_LABELS, ...extra });
  const SIZES = ["320x180", "400x225", "480x270", "640x360"];

  const ACTIONS = ["speedDown", "speedUp", "speedReset", "seekBack", "seekForward", "frameBack", "frameForward", "audio", "loop", "loopAB", "chapterPrev", "chapterNext", "undoSkip", "sleepTimer", "stop", "cinema", "miniPlayer", "pip", "flip", "rotate", "fillCrop", "filters", "cards", "screenshot", "copyLink", "copyTranscript", "reversePlaylist", "setIntro", "thumbnail", "saveTranscript", "chapters", "settings"];
  const NEEDS = { setIntro: "channelSkips", thumbnail: "thumbViewer", saveTranscript: "transcriptSave", chapters: "chapterMaker" };
  const actionsFor = (s) => ACTIONS.filter((id) => !NEEDS[id] || s[NEEDS[id]]);
  const CAP_COLORS = { white: "#fff", yellow: "#ff0", green: "#0f0", cyan: "#0ff", blue: "#00f", magenta: "#f0f", red: "#f00", black: "#080808" };
  const CAP_EDGES = { none: 0, shadow: 4, raised: 1, depressed: 2, outline: 3 };
  const AI_WORDS = "ai generated\nai-generated\nai video\nai videos\nai film\nai films\nai animation\nai animations\nai music\nai cover\nai covers\nai song\nai songs\nai art\nai short\nai shorts\nai slop\nmade with ai\n#ai\n#aivideo\n#aiart\n#aigenerated\n#aigeneratedvideo\nveo 3\nveo3\nveo 3.1\nsora 2\nsora ai\nopenai sora\nkling ai\nrunway gen\nrunway ml\npika labs\nluma dream\nluma ai\nhailuo\nmidjourney\nseedance\nsuno ai\nudio";
  const SB_CATEGORIES = { sponsor: "skip", selfpromo: "skip", interaction: "skip", intro: "mark", outro: "mark", preview: "off", music_offtopic: "off", filler: "off" };
  // note: built but not yet verified on YouTube in Safari; delete a key once it is confirmed working.
  const BETA = new Set(["backgroundPlay", "previewCaptionsOff", "findPanels", "loopExtras", "wlAutoRemove", "wlRemoveWatched", "channelVideosTab", "commentsBeside", "commentTime", "chatTidy", "chatFilter", "channelSkips", "thumbViewer", "exactStats", "searchFade", "timestampPreview", "hideAiVideos", "transcriptSave", "factsPanel", "velocityBadge", "adBreakMarks", "chapterMaker", "commentTriage", "savedReplies", "channelTracker", "thumbTest", "captionStyle", "setIntro", "thumbnail", "saveTranscript", "chapters"]);
  const LANGS = "ab aa af ak sq am ar hy as ay az bn ba eu be bho bs br bg my ca ceb zh-Hans zh-Hant co hr cs da dv nl dz en eo et ee fo fj fil fi fr gaa gl lg ka de el gn gu ht ha haw iw hi hmn hu is ig id iu ga it ja jv kl kn kk kha km rw ko kri ku ky lo la lv ln lt lua luo lb mk mg ms ml mt gv mi mr mn mfe ne new nso no ny oc or om os pam ps fa pl pt pt-PT pa qu ro rn ru sm sg sa gd sr crs sn sd si sk sl so st es su sw ss sv tg ta tt te th bo ti to ts tn tum tr tk uk ur ug uz ve vi war cy fy wo xh yi yo zu".split(" ");
  const langNames = () => { try { const names = new Intl.DisplayNames([navigator.language], { type: "language" }); return Object.fromEntries(LANGS.map((code) => [code, names.of(code)])); } catch { return {}; } };
  const LANG_NAMES = langNames();
  const RELOAD = new Set(["qualityAuto", "qualityVideo", "qualityPlaylist", "qualityFullscreen", "qualityFsVideo", "qualityFsPlaylist", "qualityRevert", "codecStandardFps", "codecAvc", "autoTheater", "backgroundPlay", "shortsAutoNext"]);

  const SCHEMA = [
    { id: "playback", rows: [
      row("speedDefault", "choice", 1, { options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3], labels: Object.fromEntries([0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3].map((n) => [n, `${n}×`])), custom: { min: 0.07, max: 16, step: 0.05, from: (v) => v, to: (n) => clampSpeed(n) } }),
      sw("speedOverride"),
      row("speedStep", "select", 0.1, { options: [0.05, 0.1, 0.25, 0.5], actions: ["speedDown", "speedUp", "speedReset"] }),
      sw("speedWheel", false, { ...NO_PHONE }),
      sw("wheelReverse", false, { ...NO_PHONE }),
      row("seekStep", "select", 10, { options: [5, 10, 15, 30, 60], labels: { 5: "5 s", 10: "10 s", 15: "15 s", 30: "30 s", 60: "60 s" }, actions: ["seekBack", "seekForward", "frameBack", "frameForward"] }),
      sw("captionsAuto"),
      row("captionsLang", "dropdown", "auto", { parent: "captionsAuto", options: ["auto", ...LANGS.sort((a, b) => (LANG_NAMES[a] ?? a).localeCompare(LANG_NAMES[b] ?? b))], labels: LANG_NAMES }),
      sw("timeRemaining", false, { ...NO_PHONE }),
      sw("pauseOnBlur"),
      sw("resumePositions"),
      sw("backgroundPlay", false, { not: ["mac"] }),
    ] },
    { id: "quality", rows: [
      sw("qualityAuto", true),
      quality("qualityVideo", "hd1080", { parent: "qualityAuto" }),
      quality("qualityPlaylist", "hd720", { parent: "qualityAuto" }),
      sw("qualityFullscreen", false, { parent: "qualityAuto", ...NO_PHONE }),
      quality("qualityFsVideo", "hd1440", { parent: "qualityFullscreen", ...NO_PHONE }),
      quality("qualityFsPlaylist", "hd1440", { parent: "qualityFullscreen", ...NO_PHONE }),
      sw("qualityRevert", false, { parent: "qualityFullscreen", ...NO_PHONE }),
      sw("codecStandardFps"),
      sw("codecAvc"),
      sw("audioMode", false, { actions: ["audio"] }),
    ] },
    { id: "appearance", rows: [
      sw("hideRelated"), sw("hideComments"), sw("hideChat"),
      sw("hideEndScreens"), sw("hideEndWall", true), sw("hideCards"), sw("hideMoreVideos"), sw("hideNotifications"),
    ] },
    { id: "shorts", rows: [
      sw("hideShorts"), sw("shortsAsVideos"), sw("shortsAutoNext"), sw("shortsComments"), sw("shortsCaptions"),
      row("shortsSpeed", "select", "same", { options: ["same", "1", "1.25", "1.5", "1.75", "2"], labels: { 1: "1×", 1.25: "1.25×", 1.5: "1.5×", 1.75: "1.75×", 2: "2×" } }),
    ] },
    { id: "cleanup", rows: [
      sw("hideHomeFeed"), sw("hideThumbnails"), sw("hideViews"), sw("hideChips"),
      sw("hideGuide"), sw("hideNavExplore"), sw("hideNavYou"), sw("hideNavMore"),
      sw("hideCreate"), sw("hideVoiceSearch"), sw("hidePlayables"), sw("hideAi"),
      row("gridColumns", "select", "auto", { options: ["auto", 3, 4, 5, 6], labels: { 3: "3", 4: "4", 5: "5", 6: "6" } }),
    ] },
    { id: "feeds", rows: [
      row("homeRedirect", "select", "none", { options: ["none", "subscriptions", "watchlater", "history"] }),
      sw("hideWatched"),
      sw("hideLive"),
      sw("hideMixes"),
      row("blockedChannels", "textarea", ""),
      row("blockedKeywords", "textarea", ""),
      row("hideShorterThan", "select", 0, { options: [0, 1, 2, 5, 10, 20], labels: { 0: "Off", 1: "1 min", 2: "2 min", 5: "5 min", 10: "10 min", 20: "20 min" } }),
      row("hideLongerThan", "select", 0, { options: [0, 30, 60, 120, 240], labels: { 0: "Off", 30: "30 min", 60: "1 h", 120: "2 h", 240: "4 h" } }),
      sw("fixCaps"),
      sw("fullTitles"),
      sw("thumbFrames"),
      sw("hidePosts"),
      sw("hideSearchShelves"),
      row("feedPreviews", "select", "allow", { options: ["allow", "sound", "muted", "off"], prefix: "pv_" }),
      sw("previewCaptionsOff"),
    ] },
    { id: "ads", rows: [
      sw("hidePromoted"),
      sw("adSkip"),
      row("adAllowChannels", "textarea", "", { parent: "adSkip" }),
      sw("sbEnabled", false, { origins: ["https://sponsor.ajay.app/*"], link: "https://sponsor.ajay.app/", actions: ["undoSkip"] }),
      ...Object.entries(SB_CATEGORIES).map(([cat, def]) => row("sb_" + cat, "select", def, { options: ["skip", "mute", "mark", "off"], prefix: "sbo_", parent: "sbEnabled" })),
      sw("sbNotify", true, { parent: "sbEnabled" }),
      row("sbWhitelist", "textarea", "", { parent: "sbEnabled" }),
    ] },
    { id: "player", rows: [
      sw("miniPlayer", true, { ...NO_PHONE, actions: ["miniPlayer"] }),
      row("miniSize", "choice", "480x270", { options: SIZES, prefix: "z_", custom: { min: 200, max: 1200, step: 10, from: (v) => Number(v.split("x")[0]), to: (w) => `${w}x${Math.round(w * 9 / 16)}` }, parent: "miniPlayer", ...NO_PHONE }),
      row("miniPosition", "select", "tl", { options: ["tl", "tr", "bl", "br"], parent: "miniPlayer", ...NO_PHONE }),
      sw("autoTheater", false, { ...NO_PHONE }),
      sw("controlsAlwaysVisible", false, { ...NO_PHONE }),
      sw("tabFullscreen", false, { ...NO_PHONE }),
      sw("hideOverlays"),
      sw("hideAmbient"),
      row("screenshotTo", "select", "file", { options: ["file", "clipboard"], actions: ["screenshot"] }),
    ] },
    { id: "toolbar", rows: [
      row("controlsPlacement", "select", "player", { options: ["player", "below", "both"], ...NO_PHONE }),
      sw("toolbarLabels", true, { parent: "controlsPlacement", when: "below,both", ...NO_PHONE }),
      row("controls", "set", ["speedDown", "speedUp", "cinema", "pip"], { options: ACTIONS, prefix: "a_", label: (s) => (s.controlsPlacement === "both" ? "s_controlsPlayer" : "s_controls") }),
      row("controlsBelow", "set", ["speedDown", "speedUp", "speedReset", "loop", "audio", "sleepTimer", "pip", "screenshot"], { options: ACTIONS, prefix: "a_", parent: "controlsPlacement", when: "both", ...NO_PHONE }),
      row("menuSide", "select", "auto", { options: ["auto", "above", "below"], prefix: "ms_", parent: "controlsPlacement", when: "below,both", ...NO_PHONE }),
    ] },
    { id: "autoplay", rows: [
      sw("autoplayOff"),
      sw("autoplayBlockBackground", true),
      sw("autoplayBlockForeground", false, { parent: "autoplayBlockBackground" }),
      sw("autoplayAllowPlaylists", true, { parent: "autoplayBlockBackground" }),
      sw("pauseOtherTabs"),
    ] },
    { id: "volume", rows: [
      sw("volumeDefaultOn", false, { ...NO_PHONE }),
      row("volumeDefault", "range", 50, { min: 0, max: 100, step: 1, parent: "volumeDefaultOn", ...NO_PHONE }),
      sw("volumeWheel", false, { ...NO_PHONE }),
      row("volumeStep", "select", 5, { options: [1, 2, 5, 10], parent: "volumeWheel", ...NO_PHONE }),
    ] },
    { id: "page", rows: [
      sw("autoDescription"),
      sw("autoTranscript"),
      sw("autoAsk"),
      sw("emailCopy"),
      sw("linksNewTab"),
      sw("noTranslate"),
      sw("stripTracking"),
      sw("rydEnabled", false, { origins: ["https://returnyoutubedislikeapi.com/*"], link: "https://returnyoutubedislike.com/" }),
      sw("rydBar", true, { parent: "rydEnabled" }),
      sw("dismissContinue"),
      row("commentsSort", "select", "default", { options: ["default", "newest"] }),
      sw("hideActionButtons"),
      row("blockedCommentWords", "textarea", ""),
      sw("dearrowTitles", false, { origins: ["https://sponsor.ajay.app/*"], link: "https://dearrow.ajay.app/" }),
    ] },
    { id: "theme", rows: [
      row("theme", "select", "system", { options: ["system", "light", "dark", "amoled", "accent"] }),
      row("accent", "color", "#ff375f", { parent: "theme", when: "accent" }),
      row("cinemaDim", "range", 85, { min: 50, max: 100, step: 5, actions: ["cinema"] }),
      sw("grayscale"),
      sw("customCssOn"),
      row("customCss", "textarea", "", { parent: "customCssOn" }),
    ] },
    { id: "power", rows: [
      sw("findPanels"),
      sw("loopExtras"),
      sw("wlAutoRemove"),
      sw("wlRemoveWatched", false, { ...NO_PHONE }),
      sw("channelVideosTab"),
      sw("commentsBeside", false, { ...NO_PHONE }),
      sw("commentTime", false, { ...NO_PHONE }),
      row("chatTidy", "set", [], { options: ["avatars", "badges", "emojiOnly", "liveMode"], prefix: "ct_" }),
      row("chatFilter", "select", "all", { options: ["all", "members", "paid"], prefix: "cf_" }),
      row("channelSkips", "textarea", "", { actions: ["setIntro"] }),
      sw("thumbViewer", false, { actions: ["thumbnail"] }),
      sw("exactStats"),
      sw("searchFade"),
      sw("timestampPreview", false, { ...NO_PHONE }),
      sw("hideAiVideos"),
      row("aiKeywords", "textarea", AI_WORDS, { parent: "hideAiVideos" }),
    ] },
    { id: "creator", rows: [
      sw("transcriptSave", false, { actions: ["saveTranscript"] }),
      row("transcriptFormat", "select", "txt", { options: ["txt", "srt"], prefix: "tf_", parent: "transcriptSave" }),
      sw("factsPanel", false, { ...NO_PHONE }),
      sw("velocityBadge", false, { ...NO_PHONE }),
      sw("adBreakMarks", false, { ...NO_PHONE }),
      sw("chapterMaker", false, { ...NO_PHONE, actions: ["chapters"] }),
      sw("commentTriage", false, { ...NO_PHONE }),
      row("savedReplies", "textarea", "", { ...NO_PHONE }),
      sw("channelTracker", false, { ...NO_PHONE }),
      row("trackedChannels", "textarea", "", { parent: "channelTracker", ...NO_PHONE }),
      sw("thumbTest", false, { ...NO_PHONE }),
    ] },
    { id: "access", rows: [
      sw("captionStyle"),
      row("captionSize", "select", 0, { options: [-2, -1, 0, 1, 2, 3, 4], labels: { "-2": "50%", "-1": "75%", 0: "100%", 1: "150%", 2: "200%", 3: "300%", 4: "400%" }, parent: "captionStyle" }),
      row("captionColor", "select", "white", { options: Object.keys(CAP_COLORS), prefix: "cc_", parent: "captionStyle" }),
      row("captionBg", "select", "black", { options: Object.keys(CAP_COLORS), prefix: "cc_", parent: "captionStyle" }),
      row("captionBgOpacity", "select", 0.75, { options: [0, 0.25, 0.5, 0.75, 1], labels: { 0: "0%", 0.25: "25%", 0.5: "50%", 0.75: "75%", 1: "100%" }, parent: "captionStyle" }),
      row("captionEdge", "select", "none", { options: Object.keys(CAP_EDGES), prefix: "ce_", parent: "captionStyle" }),
      row("captionPosition", "select", "default", { options: ["default", "raised", "center"], prefix: "cp_", parent: "captionStyle" }),
    ] },
    { id: "shortcuts", rows: [row("shortcuts", "shortcuts", {}, { ...NO_PHONE, recommended: { speedDown: "Alt+Minus", speedUp: "Alt+Equal", speedReset: "Alt+Digit0", seekBack: "Alt+ArrowLeft", seekForward: "Alt+ArrowRight", frameBack: "Alt+Comma", frameForward: "Alt+Period", loop: "Alt+KeyL", loopAB: "Alt+KeyB", chapterPrev: "Alt+BracketLeft", chapterNext: "Alt+BracketRight", cinema: "Alt+KeyC", miniPlayer: "Alt+KeyM", pip: "Alt+KeyP", audio: "Alt+KeyA", screenshot: "Alt+KeyS", sleepTimer: "Alt+KeyZ", copyLink: "Alt+Shift+KeyC", undoSkip: "Alt+Backspace" } })] },
    { id: "privacy", rows: [sw("guestMode")] },
    { id: "advanced", rows: [sw("debug"), row("backup", "backup", null), row("welcome", "link", null)] },
  ];

  const DEFAULTS = Object.fromEntries(SCHEMA.flatMap((g) => g.rows).map((r) => [r.key, r.def]));
  Object.assign(DEFAULTS, {
    enabled: true,
    filters: { brightness: 100, contrast: 100, saturate: 100, grayscale: 0, sepia: 0, hue: 0, invert: 0, blur: 0 },
    filtersOn: false,
    loop: false,
    cinema: false,
  });

  const PRESETS = {
    recommended: { hideShorts: true, hideChips: true, hideEndWall: true, hideMoreVideos: true, hideNotifications: true, autoplayBlockBackground: true, qualityAuto: true, miniPlayer: true, controlsPlacement: "both", toolbarLabels: true, controls: ["speedDown", "speedUp", "speedReset", "loop", "pip", "screenshot"], controlsBelow: ["speedDown", "speedUp", "speedReset", "loop", "loopAB", "audio", "sleepTimer", "pip", "screenshot", "copyLink"] },
    focused: { hideShorts: true, hideChips: true, hideEndWall: true, hideNotifications: true, hideMoreVideos: true },
    fast: { speedDefault: 1.5, speedStep: 0.25, speedWheel: true, controls: ["speedDown", "speedUp", "speedReset", "cinema", "pip"] },
    clean: { hideShorts: true, hideChips: true, hideEndWall: true, hideNotifications: true, hideMoreVideos: true, hideThumbnails: true, hideViews: true, hideNavExplore: true, hideNavMore: true, hideCreate: true, hideVoiceSearch: true },
  };
  const formatTime = (sec) => {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s2 = sec % 60;
    return (h ? `${h}:${String(m).padStart(2, "0")}` : String(m)) + ":" + String(s2).padStart(2, "0");
  };
  const listOf = (text) => String(text ?? "").split("\n").map((l) => l.trim().toLowerCase()).filter(Boolean);
  const matchList = (text, list) => {
    const hay = String(text ?? "").toLowerCase();
    return list.some((needle) => (needle.startsWith("@") ? hay.includes(needle) || hay === needle.slice(1) : hay.includes(needle)));
  };
  const chapterStarts = (widths, duration) => {
    const total = widths.reduce((a, b) => a + b, 0);
    if (!total || !duration || widths.length < 2) return [];
    let acc = 0;
    return widths.map((w) => { const start = (acc / total) * duration; acc += w; return start; });
  };
  const sbPrefix = async (videoId) => {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(videoId));
    return [...new Uint8Array(buf)].slice(0, 2).map((b) => b.toString(16).padStart(2, "0")).join("");
  };
  const videoIdFrom = (url) => { try { const u = new URL(url); return u.searchParams.get("v") ?? u.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{11})/)?.[1] ?? null; } catch { return null; } };
  const parseDuration = (text) => { const parts = String(text ?? "").trim().split(":").map(Number); return parts.length && parts.every(Number.isFinite) ? parts.reduce((a, b) => a * 60 + b, 0) : NaN; };
  const titleCase = (text) => text.replace(/\S+/g, (w) => (/[A-Z]/.test(w) && w.length > 1 && w === w.toUpperCase() ? w[0] + w.slice(1).toLowerCase() : w));
  const mostlyCaps = (text) => { const letters = text.replace(/[^A-Za-z]/g, ""); return letters.length >= 8 && letters.replace(/[^A-Z]/g, "").length / letters.length > 0.6; };
  const escapeRe = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const aiPatterns = (text) => listOf(text).map((w) => new RegExp("(^|[^\\p{L}\\p{N}])" + escapeRe(w) + "(?![\\p{L}\\p{N}])", "iu"));
  const aiMatch = (text, patterns) => patterns.some((re) => re.test(String(text ?? "")));
  const parseCount = (text) => { const m = String(text ?? "").replace(/,/g, "").match(/([\d.]+)\s*([KMB])?/i); return m ? Math.round(Number(m[1]) * ({ K: 1e3, M: 1e6, B: 1e9 }[m[2]?.toUpperCase()] ?? 1)) : NaN; };
  const parseSkips = (text) => listOf(text).map((line) => {
    const parts = line.split(/[\s,|]+/).filter(Boolean);
    const nums = [];
    while (parts.length > 1 && nums.length < 2 && /^\d+(:\d+)*$/.test(parts.at(-1))) nums.unshift(parseDuration(parts.pop()));
    return { match: parts.join(" "), start: nums[0] ?? 0, end: nums[1] ?? 0 };
  }).filter((x) => x.match && (x.start || x.end));
  const storyboardTile = (spec, t, duration, level = 2) => {
    const [base, ...levels] = String(spec ?? "").split("|");
    if (!base || !levels.length) return null;
    const L = Math.min(level, levels.length - 1);
    const [w, h, count, rows, cols, interval, name, sig] = levels[L].split("#");
    const ms = Number(interval) || (Number(count) && duration ? (duration * 1000) / Number(count) : 0);
    if (!ms || !Number(rows) || !Number(cols)) return null;
    const frame = Math.max(0, Math.min(Number(count) - 1, Math.floor((t * 1000) / ms)));
    const per = Number(rows) * Number(cols);
    const idx = frame % per;
    const url = base.replace("$L", String(L)).replace("$N", name.replace("$M", String(Math.floor(frame / per)))) + "&sigh=" + sig;
    return { url, x: (idx % Number(cols)) * Number(w), y: Math.floor(idx / Number(cols)) * Number(h), w: Number(w), h: Number(h) };
  };
  const heatPath = (d, duration) => {
    const nums = (String(d ?? "").match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
    const pts = [];
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push({ t: (nums[i] / 1000) * duration, v: 100 - nums[i + 1] });
    return pts;
  };
  const heatPeaks = (pts, n = 5) => {
    const peaks = pts.filter((p, i) => p.v > 0 && (i === 0 || p.v > pts[i - 1].v) && (i === pts.length - 1 || p.v >= pts[i + 1].v)).sort((a, b) => b.v - a.v);
    const out = [];
    const span = pts.length ? pts.at(-1).t - pts[0].t : 0;
    for (const p of peaks) { if (out.length >= n) break; if (out.every((o) => Math.abs(o.t - p.t) > span * 0.03)) out.push(p); }
    return out.sort((a, b) => b.v - a.v);
  };
  const srtTime = (sec) => { const ms = Math.max(0, Math.round(sec * 1000)); const p = (v, l = 2) => String(v).padStart(l, "0"); return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`; };
  const srt = (lines) => lines.map((l, i) => `${i + 1}\n${srtTime(l.t)} --> ${srtTime(lines[i + 1]?.t ?? l.t + 4)}\n${l.text}\n`).join("\n");
  const merge = (stored) => ({ ...DEFAULTS, ...stored });
  const load = async () => merge((await browser.storage.local.get("settings")).settings);
  const save = async (patch) => {
    const settings = { ...(await load()), ...patch };
    await browser.storage.local.set({ settings });
    return settings;
  };
  const watch = (cb) => browser.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.settings) cb(merge(changes.settings.newValue));
  });

  const pickQuality = (wanted, available) => {
    const order = QUALITIES.slice(QUALITIES.indexOf(wanted));
    return order.find((q) => available.includes(q)) ?? available.find((q) => q !== "auto") ?? wanted;
  };

  globalThis.ytx = { SCHEMA, DEFAULTS, ACTIONS, QUALITY_LABELS, merge, load, save, watch, clampSpeed, pickQuality, device, comboOf, comboLabel, PRESETS, SB_CATEGORIES, BETA, RELOAD, formatTime, listOf, matchList, chapterStarts, sbPrefix, videoIdFrom, parseDuration, titleCase, mostlyCaps, NEEDS, actionsFor, CAP_COLORS, CAP_EDGES, aiPatterns, aiMatch, parseCount, parseSkips, storyboardTile, heatPath, heatPeaks, srt, reset: () => browser.storage.local.set({ settings: {} }) };
})();
