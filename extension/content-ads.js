(() => {
  const ytx = globalThis.ytx;
  const SKIP = ".ytp-skip-ad-button, .ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button-slot button, .ytp-ad-overlay-close-button, button[id^='skip-button'], .skip-button";
  const state = { observer: null, observed: null, active: false, muted: false, timer: 0, allowed: false };

  const adShowing = (player) => player.classList.contains("ad-showing") || player.classList.contains("ad-interrupting");
  const tick = (ctx) => {
    const player = ctx.q("player");
    const v = ctx.video;
    if (!player || !v) return;
    const showing = ctx.settings.enabled && ctx.settings.adSkip && !state.allowed && adShowing(player);
    if (showing && !state.active) {
      state.active = true;
      ytx.adActive = true;
      state.muted = v.muted;
      v.muted = true;
      ytx.log("ad: skipping");
    }
    if (showing) {
      v.playbackRate = 16;
      if (Number.isFinite(v.duration) && v.duration > 0 && v.currentTime < v.duration - 0.5) v.currentTime = v.duration;
      for (const b of player.querySelectorAll(SKIP)) b.click();
    }
    if (!showing && state.active) {
      state.active = false;
      ytx.adActive = false;
      v.muted = state.muted;
      ytx.actions.speedRestore?.();
      ytx.log("ad: done");
    }
  };

  ytx.register({
    id: "ads",
    apply(ctx, reason) {
      if (reason === "video" || reason === "boot" || ctx.changed.has("adAllowChannels")) {
        const list = ytx.listOf(ctx.settings.adAllowChannels);
        if (list.length) ctx.call("videoData").then((d) => { state.allowed = ytx.matchList(d?.author ?? "", list); }); else state.allowed = false;
      }
      const player = ctx.q("player");
      const on = ctx.settings.enabled && ctx.settings.adSkip && player;
      if (!on) {
        state.observer?.disconnect(); state.observer = null; state.observed = null;
        clearInterval(state.timer); state.timer = 0;
        if (state.active) tick(ctx);
        return;
      }
      if (state.observed !== player) {
        state.observer?.disconnect();
        state.observer = new MutationObserver(() => tick(ctx));
        state.observer.observe(player, { attributes: true, attributeFilter: ["class"] });
        state.observed = player;
      }
      if (!state.timer) state.timer = setInterval(() => { if (state.active) tick(ctx); }, 500);
      tick(ctx);
    },
  });
})();
