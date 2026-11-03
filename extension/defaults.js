(() => {
  const clampSpeed = (v) => Math.min(16, Math.max(0.07, Math.round(v * 100) / 100));
  const KEY_NAMES = { ArrowUp: "↑", ArrowDown: "↓", ArrowLeft: "←", ArrowRight: "→", Space: "Space", Enter: "↩", Backquote: "`", Minus: "-", Equal: "=", BracketLeft: "[", BracketRight: "]", Semicolon: ";", Quote: "'", Comma: ",", Period: ".", Slash: "/", Backslash: "\\" };
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

  const ACTIONS = ["speedDown", "speedUp", "speedReset", "audio", "guest", "loop", "stop", "cinema", "miniPlayer", "pip", "flip", "filters", "cards", "screenshot", "reversePlaylist", "settings"];

  const SCHEMA = [
    { id: "playback", rows: [
      row("speedDefault", "choice", 1, { options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3], labels: Object.fromEntries([0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3].map((n) => [n, `${n}×`])), custom: { min: 0.07, max: 16, step: 0.05, from: (v) => v, to: (n) => clampSpeed(n) } }),
      sw("speedOverride"),
      row("speedStep", "select", 0.1, { options: [0.05, 0.1, 0.25, 0.5] }),
      sw("speedWheel", false, { ...NO_PHONE }),
      sw("speedWheelRight", false, { parent: "speedWheel", ...NO_PHONE }),
      sw("wheelReverse", false, { ...NO_PHONE }),
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
      sw("audioMode"),
    ] },
    { id: "appearance", rows: [
      sw("hideRelated"), sw("hideComments"), sw("hideChat"), sw("hideShorts"),
      sw("hideEndScreens"), sw("hideEndWall", true), sw("hideCards"), sw("hideMoreVideos"), sw("hideNotifications"),
      sw("shortsAsVideos"),
    ] },
    { id: "cleanup", rows: [
      sw("hideHomeFeed"), sw("hideThumbnails"), sw("hideViews"), sw("hideChips"),
      sw("hideGuide"), sw("hideNavExplore"), sw("hideNavYou"), sw("hideNavMore"),
      sw("hideCreate"), sw("hideVoiceSearch"),
    ] },
    { id: "player", rows: [
      sw("miniPlayer", true, { ...NO_PHONE }),
      row("miniSize", "choice", "480x270", { options: SIZES, prefix: "z_", custom: { min: 200, max: 1200, step: 10, from: (v) => Number(v.split("x")[0]), to: (w) => `${w}x${Math.round(w * 9 / 16)}` }, parent: "miniPlayer", ...NO_PHONE }),
      row("miniPosition", "select", "tl", { options: ["tl", "tr", "bl", "br"], parent: "miniPlayer", ...NO_PHONE }),
    ] },
    { id: "toolbar", rows: [
      row("controlsPlacement", "select", "player", { options: ["player", "below"], ...NO_PHONE }),
      row("controls", "set", ["speedDown", "speedUp", "cinema", "pip"], { options: ACTIONS, prefix: "a_" }),
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
      sw("volumeWheelRight", false, { parent: "volumeWheel", ...NO_PHONE }),
      row("volumeStep", "select", 5, { options: [1, 2, 5, 10], parent: "volumeWheel", ...NO_PHONE }),
    ] },
    { id: "page", rows: [
      sw("autoDescription"),
      sw("autoTranscript"),
      sw("autoAsk"),
      sw("emailCopy"),
      sw("linksNewTab"),
    ] },
    { id: "theme", rows: [
      row("theme", "select", "system", { options: ["system", "dark", "amoled", "accent"] }),
      row("accent", "color", "#ff375f", { parent: "theme", when: "accent" }),
      row("cinemaDim", "range", 85, { min: 50, max: 100, step: 5 }),
      sw("customCssOn"),
      row("customCss", "textarea", "", { parent: "customCssOn" }),
    ] },
    { id: "shortcuts", rows: [row("shortcuts", "shortcuts", {}, NO_PHONE)] },
    { id: "experimental", rows: [sw("guestMode")] },
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
    recommended: { hideShorts: true, hideChips: true, hideEndWall: true, hideMoreVideos: true, hideNotifications: true, autoplayBlockBackground: true, qualityAuto: true, miniPlayer: true },
    focused: { hideShorts: true, hideChips: true, hideEndWall: true, hideNotifications: true, hideMoreVideos: true },
    fast: { speedDefault: 1.5, speedStep: 0.25, speedWheel: true, controls: ["speedDown", "speedUp", "speedReset", "cinema", "pip"] },
    clean: { hideShorts: true, hideChips: true, hideEndWall: true, hideNotifications: true, hideMoreVideos: true, hideThumbnails: true, hideViews: true, hideNavExplore: true, hideNavMore: true, hideCreate: true, hideVoiceSearch: true },
  };
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

  globalThis.ytx = { SCHEMA, DEFAULTS, ACTIONS, QUALITY_LABELS, merge, load, save, watch, clampSpeed, pickQuality, device, comboOf, comboLabel, PRESETS, reset: () => browser.storage.local.set({ settings: {} }) };
})();
