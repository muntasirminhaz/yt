(() => {
  const ytx = globalThis.ytx;
  const state = { speed: 1, loadedAt: 0, rightDown: false, bound: new WeakSet(), acc: 0 };
  const NOTCH = 50;

  const setSpeed = (ctx, speed, show = true) => {
    state.speed = ytx.clampSpeed(speed);
    if (ctx.video) ctx.video.playbackRate = state.speed;
    if (show) ytx.hud(`${state.speed}×`);
  };

  const onRateChange = (ctx) => {
    const rate = ctx.video.playbackRate;
    if (rate === state.speed) return;
    if (performance.now() - state.loadedAt < 2000) { ytx.log("speed: re-applying", state.speed, "over", rate); setSpeed(ctx, state.speed, false); }
    else state.speed = rate;
  };

  const onWheel = (ctx, e) => {
    const s = ctx.settings;
    if (!s.enabled) return;
    const speedGesture = s.speedWheel && (e.altKey || e.ctrlKey) && (!s.speedWheelRight || state.rightDown);
    const volumeGesture = s.volumeWheel && !e.altKey && !e.ctrlKey && !e.metaKey && (!s.volumeWheelRight || state.rightDown);
    if (!speedGesture && !volumeGesture) return;
    e.preventDefault();
    state.acc += e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    const notches = Math.trunc(state.acc / NOTCH);
    if (!notches) return;
    state.acc -= notches * NOTCH;
    const steps = -notches * (s.wheelReverse ? -1 : 1);
    if (speedGesture) setSpeed(ctx, state.speed + steps * s.speedStep);
    else ytx.actions.volumeBy(steps * s.volumeStep);
  };

  const bind = (ctx) => {
    const player = ctx.q("player");
    if (!player || state.bound.has(player)) return;
    state.bound.add(player);
    player.addEventListener("wheel", (e) => onWheel(ctx, e), { passive: false });
    player.addEventListener("mousedown", (e) => { if (e.button === 2) state.rightDown = true; });
    window.addEventListener("mouseup", (e) => { if (e.button === 2) state.rightDown = false; });
    player.addEventListener("click", (e) => {
      if (!ctx.settings.enabled || !e.altKey || !e.target.matches("video")) return;
      e.preventDefault();
      e.stopPropagation();
      setSpeed(ctx, e.shiftKey ? 1 : ctx.settings.speedDefault);
    }, true);
  };

  ytx.register({
    id: "speed",
    apply(ctx, reason) {
      if (!ctx.settings.enabled) return;
      bind(ctx);
      const video = ctx.video;
      if (!video) return;
      if (!state.bound.has(video)) {
        state.bound.add(video);
        video.addEventListener("ratechange", () => onRateChange(ctx));
      }
      if (reason === "video" || reason === "boot") {
        state.loadedAt = performance.now();
        setSpeed(ctx, reason === "boot" || ctx.settings.speedOverride ? ctx.settings.speedDefault : state.speed, false);
      }
      if (reason === "settings" && ctx.changed.has("speedDefault")) setSpeed(ctx, ctx.settings.speedDefault);
    },
    state: () => state.speed,
  });

  Object.assign(ytx.actions, {
    speedUp: () => setSpeed(ytx.ctx, state.speed + ytx.ctx.settings.speedStep),
    speedDown: () => setSpeed(ytx.ctx, state.speed - ytx.ctx.settings.speedStep),
    speedReset: () => setSpeed(ytx.ctx, ytx.ctx.settings.speedDefault),
    speedSet: (v) => setSpeed(ytx.ctx, v),
  });
})();
