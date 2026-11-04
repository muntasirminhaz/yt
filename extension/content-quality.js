(() => {
  const ytx = globalThis.ytx;
  const state = { before: null, fullscreen: false };
  const KEYS = ["qualityAuto", "qualityVideo", "qualityPlaylist", "qualityFullscreen", "qualityFsVideo", "qualityFsPlaylist", "audioMode"];
  const playlist = () => new URLSearchParams(location.search).has("list");
  const away = { on: false, timer: 0, at: 0, dropped: false, bound: new WeakSet() };
  const wanted = (s) => {
    if (s.audioMode || away.on) return "tiny";
    const fs = state.fullscreen && s.qualityFullscreen;
    return playlist() ? (fs ? s.qualityFsPlaylist : s.qualityPlaylist) : (fs ? s.qualityFsVideo : s.qualityVideo);
  };

  const setQuality = async (ctx, level) => {
    const available = (await ctx.call("qualities")) ?? [];
    const pick = available.length ? ytx.pickQuality(level, available) : level;
    const result = await ctx.call("keepQuality", pick);
    ytx.log("quality", { wanted: level, pick, available, result, fullscreen: state.fullscreen });
  };

  // note: every quality change makes the player reload the stream (a short gap in the sound), so the picture is hidden at once and the quality only drops after five seconds away, once, and comes back once
  const leave = (ctx) => {
    const s = ctx.settings;
    clearTimeout(away.timer);
    if (!s.enabled || !s.audioOnBlur || s.audioMode || ctx.mobile || !ctx.watch || !ctx.video || ctx.video.paused || away.on || !document.hidden) return;
    away.on = true;
    ytx.audioAway = true;
    ytx.feature("player")?.apply(ctx, "away");
    away.at = performance.now();
    away.dropped = false;
  };
  const onTimeAway = (ctx) => {
    if (!away.on || away.dropped || !ctx.settings.audioOnBlurQuality || performance.now() - away.at < 5000) return;
    away.dropped = true;
    setQuality(ctx, "tiny");
  };
  const back = (ctx) => {
    clearTimeout(away.timer);
    if (!away.on) return;
    away.on = false;
    ytx.audioAway = false;
    ytx.feature("player")?.apply(ctx, "away");
    if (ctx.settings.audioOnBlurQuality && ctx.settings.qualityAuto) setQuality(ctx, wanted(ctx.settings));
  };

  const onFullscreen = async (ctx) => {
    const s = ctx.settings;
    const fs = Boolean(document.fullscreenElement ?? document.webkitFullscreenElement);
    if (fs === state.fullscreen) return;
    state.fullscreen = fs;
    if (!s.enabled || !s.qualityAuto) return;
    if (fs) state.before = await ctx.call("quality");
    ytx.log("fullscreen", fs, { before: state.before });
    if (!fs && s.qualityFullscreen && !s.qualityRevert) return;
    setQuality(ctx, !fs && s.qualityFullscreen && s.qualityRevert && state.before ? state.before : wanted(s));
  };

  ytx.register({
    id: "quality",
    apply(ctx, reason) {
      const s = ctx.settings;
      if (reason === "boot" || reason === "settings") {
        ctx.call("codecs", { fps: s.enabled && s.codecStandardFps, avc: s.enabled && s.codecAvc });
        if (reason === "boot") for (const type of ["fullscreenchange", "webkitfullscreenchange"]) document.addEventListener(type, () => onFullscreen(ctx));
        if (reason === "boot") {
          document.addEventListener("visibilitychange", () => (document.hidden ? leave(ctx) : back(ctx)));
        }
        if (reason === "settings" && (!ctx.settings.audioOnBlur || !ctx.settings.enabled)) back(ctx);
      }
      if (ctx.video && !away.bound.has(ctx.video)) {
        away.bound.add(ctx.video);
        ctx.video.addEventListener("timeupdate", () => onTimeAway(ctx));
      }
      if (!s.enabled || !(s.qualityAuto || s.audioMode) || !ctx.video) return;
      if (reason === "settings" && !KEYS.some((k) => ctx.changed.has(k))) return;
      if (reason === "nav") { if (away.on) back(ctx); return; }
      setQuality(ctx, wanted(s));
    },
  });
})();
