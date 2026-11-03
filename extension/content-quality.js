(() => {
  const ytx = globalThis.ytx;
  const state = { before: null, fullscreen: false };
  const KEYS = ["qualityAuto", "qualityVideo", "qualityPlaylist", "qualityFullscreen", "qualityFsVideo", "qualityFsPlaylist", "audioMode"];
  const playlist = () => new URLSearchParams(location.search).has("list");
  const wanted = (s) => {
    if (s.audioMode) return "tiny";
    const fs = state.fullscreen && s.qualityFullscreen;
    return playlist() ? (fs ? s.qualityFsPlaylist : s.qualityPlaylist) : (fs ? s.qualityFsVideo : s.qualityVideo);
  };

  const setQuality = async (ctx, level) => {
    const available = (await ctx.call("qualities")) ?? [];
    const pick = available.length ? ytx.pickQuality(level, available) : level;
    const result = await ctx.call("keepQuality", pick);
    ytx.log("quality", { wanted: level, pick, available, result, fullscreen: state.fullscreen });
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
      }
      if (!s.enabled || !(s.qualityAuto || s.audioMode) || !ctx.video) return;
      if (reason === "settings" && !KEYS.some((k) => ctx.changed.has(k))) return;
      if (reason === "nav") return;
      setQuality(ctx, wanted(s));
    },
  });
})();
