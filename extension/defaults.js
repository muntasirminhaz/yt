(() => {
  const clampSpeed = (v) => Math.min(16, Math.max(0.07, Math.round(v * 100) / 100));
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
      sw("speedWheel"),
      sw("speedWheelRight", false, { parent: "speedWheel" }),
      sw("wheelReverse"),
    ] },
    { id: "quality", rows: [
      sw("qualityAuto", true),
      quality("qualityVideo", "hd1080", { parent: "qualityAuto" }),
      quality("qualityPlaylist", "hd720", { parent: "qualityAuto" }),
      sw("qualityFullscreen", false, { parent: "qualityAuto" }),
      quality("qualityFsVideo", "hd1440", { parent: "qualityFullscreen" }),
      quality("qualityFsPlaylist", "hd1440", { parent: "qualityFullscreen" }),
      sw("qualityRevert", false, { parent: "qualityFullscreen" }),
      sw("codecStandardFps"),
      sw("codecAvc"),
      sw("audioMode"),
    ] },
    { id: "appearance", rows: [
      sw("hideRelated"), sw("hideComments"), sw("hideChat"), sw("hideShorts"),
      sw("hideEndScreens"), sw("hideEndWall"), sw("hideCards"), sw("hideMoreVideos"), sw("hideNotifications"),
      sw("shortsAsVideos"),
    ] },
    { id: "cleanup", rows: [
      sw("hideHomeFeed"), sw("hideThumbnails"), sw("hideViews"), sw("hideChips"),
      sw("hideGuide"), sw("hideNavExplore"), sw("hideNavYou"), sw("hideNavMore"),
      sw("hideCreate"), sw("hideVoiceSearch"),
    ] },
    { id: "player", rows: [
      sw("miniPlayer", true),
      row("miniSize", "choice", "480x270", { options: SIZES, prefix: "z_", custom: { min: 200, max: 1200, step: 10, from: (v) => Number(v.split("x")[0]), to: (w) => `${w}x${Math.round(w * 9 / 16)}` }, parent: "miniPlayer" }),
      row("miniPosition", "select", "tl", { options: ["tl", "tr", "bl", "br"], parent: "miniPlayer" }),
    ] },
    { id: "toolbar", rows: [
      row("controlsPlacement", "select", "player", { options: ["player", "below"] }),
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
      sw("volumeDefaultOn"),
      row("volumeDefault", "range", 50, { min: 0, max: 100, step: 1, parent: "volumeDefaultOn" }),
      sw("volumeWheel"),
      sw("volumeWheelRight", false, { parent: "volumeWheel" }),
      row("volumeStep", "select", 5, { options: [1, 2, 5, 10], parent: "volumeWheel" }),
    ] },
    { id: "page", rows: [
      sw("autoDescription"),
      sw("autoTranscript"),
      sw("autoAsk"),
      sw("emailCopy"),
      sw("linksNewTab"),
    ] },
    { id: "theme", rows: [
      sw("themeOn"),
      row("theme", "select", "system", { options: ["system", "dark", "accent"], parent: "themeOn" }),
      row("accent", "color", "#ff375f", { parent: "theme", when: "accent" }),
      row("cinemaDim", "range", 85, { min: 50, max: 100, step: 5, parent: "themeOn" }),
      row("customCss", "textarea", "", { parent: "themeOn" }),
    ] },
    { id: "experimental", rows: [sw("guestMode")] },
    { id: "advanced", rows: [sw("debug")] },
  ];

  const DEFAULTS = Object.fromEntries(SCHEMA.flatMap((g) => g.rows).map((r) => [r.key, r.def]));
  Object.assign(DEFAULTS, {
    enabled: true,
    filters: { brightness: 100, contrast: 100, saturate: 100, grayscale: 0, sepia: 0, hue: 0, invert: 0, blur: 0 },
    filtersOn: false,
    loop: false,
    cinema: false,
    shortcuts: {},
  });

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

  globalThis.ytx = { SCHEMA, DEFAULTS, ACTIONS, QUALITY_LABELS, merge, load, save, watch, clampSpeed, pickQuality };
})();
