(() => {
  const ytx = globalThis.ytx;
  const state = { playerGestureAt: 0, playingAt: 0, blockedFor: null, bound: new WeakSet() };
  const playlist = () => new URLSearchParams(location.search).has("list");
  window.addEventListener("pointerdown", (e) => { if (e.target.closest?.("#movie_player")) state.playerGestureAt = performance.now(); }, true);
  window.addEventListener("keydown", (e) => { if (e.key === " " || e.key.toLowerCase() === "k") state.playerGestureAt = performance.now(); }, true);

  const shouldBlock = (ctx) => {
    const s = ctx.settings;
    if (!s.enabled || !s.autoplayBlockBackground || state.blockedFor === location.href) return false;
    if (playlist() && s.autoplayAllowPlaylists) return false;
    if (performance.now() - state.playerGestureAt < 1500 || performance.now() - state.playingAt < 5000) return false;
    if (document.hidden) return true;
    return s.autoplayBlockForeground;
  };

  const onPlay = (ctx) => {
    if (shouldBlock(ctx)) {
      state.blockedFor = location.href;
      ytx.log("autoplay blocked", { hidden: document.hidden });
      ctx.video.pause();
      ctx.call("cue");
      return;
    }
    state.blockedFor = location.href;
    if (ctx.settings.enabled && ctx.settings.pauseOtherTabs) browser.runtime.sendMessage({ type: "playing" }).catch(() => {});
  };

  const autonavOff = (ctx) => {
    document.querySelector(ctx.mobile ? ".ytm-autonav-toggle-button-container[aria-pressed='true']" : ".ytp-autonav-toggle-button[aria-checked='true']")?.click();
  };

  ytx.register({
    id: "autoplay",
    apply(ctx, reason) {
      if (reason === "boot") browser.runtime.onMessage.addListener((msg) => { if (msg.type === "pauseOthers" && ctx.video && !ctx.video.paused) ctx.video.pause(); });
      if (!ctx.settings.enabled) return;
      if (ctx.settings.autoplayOff && ctx.watch) setTimeout(() => autonavOff(ctx), 500);
      const video = ctx.video;
      if (video && !state.bound.has(video)) {
        state.bound.add(video);
        video.addEventListener("play", () => onPlay(ctx));
        video.addEventListener("timeupdate", () => { if (!video.paused) state.playingAt = performance.now(); });
      }
    },
  });
})();
