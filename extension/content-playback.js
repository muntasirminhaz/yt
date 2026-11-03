(() => {
  const ytx = globalThis.ytx;
  const state = { speed: 1, loadedAt: 0, rightDown: false, bound: new WeakSet(), acc: 0, channel: null, channelSpeeds: {}, positions: {}, lastSaved: 0, pausedByBlur: false, remainingEl: null, remainingAt: 0 };
  browser.storage.local.get(["channelSpeeds", "positions"]).then((r) => { state.channelSpeeds = r.channelSpeeds ?? {}; state.positions = r.positions ?? {}; });
  const remember = (ctx) => {
    if (!ctx.settings.speedPerChannel || !state.channel) return;
    state.channelSpeeds[state.channel] = state.speed;
    const keys = Object.keys(state.channelSpeeds);
    if (keys.length > 500) delete state.channelSpeeds[keys[0]];
    browser.storage.local.set({ channelSpeeds: state.channelSpeeds });
  };
  const NOTCH = 50;

  const setSpeed = (ctx, speed, show = true) => {
    state.speed = ytx.clampSpeed(speed);
    if (ctx.video) ctx.video.playbackRate = state.speed;
    if (show) { ytx.hud(`${state.speed}×`); remember(ctx); }
  };

  const onRateChange = (ctx) => {
    const rate = ctx.video.playbackRate;
    if (rate === state.speed || ytx.adActive) return;
    if (performance.now() - state.loadedAt < 2000) { ytx.log("speed: re-applying", state.speed, "over", rate); setSpeed(ctx, state.speed, false); }
    else { state.speed = rate; remember(ctx); }
  };

  const onLoad = async (ctx, reason) => {
    state.loadedAt = performance.now();
    const data = await ctx.call("videoData");
    state.channel = data?.author ?? null;
    const remembered = ctx.settings.speedPerChannel && state.channel ? state.channelSpeeds[state.channel] : undefined;
    const base = reason === "boot" || ctx.settings.speedOverride ? ctx.settings.speedDefault : state.speed;
    setSpeed(ctx, remembered ?? base, false);
    if (ctx.settings.captionsAuto) setTimeout(() => ctx.call("captions", ctx.settings.captionsLang.trim()).then((r) => { ytx.log("captions", r); if (r !== true) document.querySelector(".ytp-subtitles-button[aria-pressed='false']")?.click(); }), 800);
    const id = data?.id ?? ctx.videoId;
    const pos = ctx.settings.resumePositions && id && !new URLSearchParams(location.search).has("t") ? state.positions[id] : null;
    if (pos && ctx.video && ctx.video.currentTime < 5 && pos.t > 30 && pos.t < pos.d - 30) { ctx.video.currentTime = pos.t; ytx.hud(`${ytx.formatTime(pos.t)}`); }
  };

  const onTime = (ctx) => {
    const v = ctx.video;
    if (!v) return;
    const now = performance.now();
    if (ctx.settings.timeRemaining && !ctx.mobile && now - state.remainingAt > 1000) {
      state.remainingAt = now;
      const duration = document.querySelector(".ytp-time-duration");
      if (duration && Number.isFinite(v.duration)) {
        if (!state.remainingEl?.isConnected) { state.remainingEl = document.createElement("span"); state.remainingEl.className = "ytx-remaining"; duration.after(state.remainingEl); }
        state.remainingEl.textContent = ` (−${ytx.formatTime((v.duration - v.currentTime) / (v.playbackRate || 1))})`;
      }
    } else if (!ctx.settings.timeRemaining && state.remainingEl) { state.remainingEl.remove(); state.remainingEl = null; }
    if (ctx.settings.resumePositions && ctx.videoId && now - state.lastSaved > 10000 && v.currentTime > 5 && Number.isFinite(v.duration)) {
      state.lastSaved = now;
      state.positions[ctx.videoId] = { t: v.currentTime, d: v.duration, at: Date.now() };
      const ids = Object.keys(state.positions);
      if (ids.length > 300) for (const old of ids.sort((a, b) => state.positions[a].at - state.positions[b].at).slice(0, ids.length - 300)) delete state.positions[old];
      browser.storage.local.set({ positions: state.positions });
    }
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
        video.addEventListener("timeupdate", () => onTime(ctx));
        video.addEventListener("ended", () => { if (ctx.videoId) { delete state.positions[ctx.videoId]; browser.storage.local.set({ positions: state.positions }); } });
      }
      if (reason === "video" || reason === "boot") onLoad(ctx, reason);
      if (reason === "settings" && ctx.changed.has("speedDefault")) setSpeed(ctx, ctx.settings.speedDefault);
      if (reason === "settings" && ctx.changed.has("timeRemaining")) onTime(ctx);
      if (reason === "boot") {
        window.addEventListener("blur", () => { if (ctx.settings.enabled && ctx.settings.pauseOnBlur && ctx.video && !ctx.video.paused) { ctx.video.pause(); state.pausedByBlur = true; } });
        window.addEventListener("focus", () => { if (state.pausedByBlur && ctx.video?.paused) ctx.video.play().catch(() => {}); state.pausedByBlur = false; });
      }
    },
    state: () => state.speed,
  });

  Object.assign(ytx.actions, {
    speedUp: () => setSpeed(ytx.ctx, state.speed + ytx.ctx.settings.speedStep),
    speedDown: () => setSpeed(ytx.ctx, state.speed - ytx.ctx.settings.speedStep),
    speedReset: () => setSpeed(ytx.ctx, ytx.ctx.settings.speedDefault),
    speedSet: (v) => setSpeed(ytx.ctx, v),
    speedRestore: () => setSpeed(ytx.ctx, state.speed, false),
  });
})();
