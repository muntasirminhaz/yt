(() => {
  const ytx = globalThis.ytx;
  const state = { speed: 1, loadedAt: 0, bound: new WeakSet(), acc: 0, wheelAt: 0, positions: {}, lastSaved: 0, pausedByBlur: false, remainingEl: null, remainingAt: 0, sleep: null, sleepTimer: 0, stats: {}, statsAt: 0, statsSaved: 0 };
  browser.storage.local.get(["positions", "watchStats"]).then((r) => { state.positions = r.positions ?? {}; state.stats = r.watchStats ?? {}; });
  const t = (k) => browser.i18n.getMessage(k);
  const seek = (ctx, delta) => { if (ctx.video) { ctx.video.currentTime = Math.max(0, Math.min(ctx.video.duration || Infinity, ctx.video.currentTime + delta)); ytx.hud(ytx.formatTime(ctx.video.currentTime)); } };
  const frame = (ctx, dir) => { if (ctx.video) { ctx.video.pause(); ctx.video.currentTime = Math.max(0, ctx.video.currentTime + dir / 30); } };
  const sleepCycle = (ctx) => {
    const steps = [15, 30, 60];
    const next = state.sleep ? steps[steps.indexOf(state.sleep.minutes) + 1] : steps[0];
    clearTimeout(state.sleepTimer);
    if (!next) { state.sleep = null; ytx.hud(t("h_sleep_off")); return; }
    state.sleep = { minutes: next, at: Date.now() + next * 60000 };
    state.sleepTimer = setTimeout(() => { ctx.video?.pause(); state.sleep = null; ytx.hud(t("h_sleep_done")); ytx.refreshUi?.(); }, next * 60000);
    ytx.hud(`${t("h_sleep_in")} ${next} min`);
  };
  const trackStats = (v) => {
    const now = Date.now();
    if (!v.paused && state.statsAt && now - state.statsAt < 3000) {
      const day = new Date().toISOString().slice(0, 10);
      state.stats[day] = (state.stats[day] ?? 0) + (now - state.statsAt) / 1000;
    }
    state.statsAt = now;
    if (now - state.statsSaved > 30000) {
      state.statsSaved = now;
      for (const day of Object.keys(state.stats).sort().slice(0, -30)) delete state.stats[day];
      browser.storage.local.set({ watchStats: state.stats });
    }
  };
  const NOTCH = 50, SPEED_NOTCH = 100, SPEED_GAP = 200;

  const setSpeed = (ctx, speed, show = true) => {
    state.speed = ytx.clampSpeed(speed);
    if (ctx.video) ctx.video.playbackRate = state.speed;
    if (show) ytx.hud(`${state.speed}×`);
  };

  const onRateChange = (ctx) => {
    const rate = ctx.video.playbackRate;
    if (rate === state.speed || ytx.adActive) return;
    if (performance.now() - state.loadedAt < 2000) { ytx.log("speed: re-applying", state.speed, "over", rate); setSpeed(ctx, state.speed, false); }
    else state.speed = rate;
  };

  const captionsOn = (ctx, tries = 0) => {
    if (ctx.shorts) return;
    ctx.call("captions", ctx.settings.captionsLang === "auto" ? "" : ctx.settings.captionsLang.trim()).then((r) => {
      ytx.log("captions", r);
      if (r === true) return;
      const button = document.querySelector(".ytp-subtitles-button");
      if (r == null && button?.getAttribute("aria-pressed") === "false") button.click();
      else if (tries < 5) setTimeout(() => captionsOn(ctx, tries + 1), 1000);
    });
  };

  const onLoad = async (ctx, reason) => {
    state.loadedAt = performance.now();
    const data = await ctx.call("videoData");
    const own = reason === "boot" || ctx.settings.speedOverride ? ctx.settings.speedDefault : state.speed;
    const base = ctx.shorts && ctx.settings.shortsSpeed !== "same" ? Number(ctx.settings.shortsSpeed) : own;
    setSpeed(ctx, base, false);
    if (ctx.settings.captionsAuto) setTimeout(() => captionsOn(ctx), 800);
    const id = data?.id ?? ctx.videoId;
    const pos = ctx.settings.resumePositions && id && !new URLSearchParams(location.search).has("t") ? state.positions[id] : null;
    if (pos && ctx.video && ctx.video.currentTime < 5 && pos.t > 30 && pos.t < pos.d - 30) { ctx.video.currentTime = pos.t; ytx.hud(`${t("h_resumed")} ${ytx.formatTime(pos.t)}`); ytx.log("resume", pos.t); }
  };

  const onTime = (ctx) => {
    const v = ctx.video;
    if (!v) return;
    trackStats(v);
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
    const speedGesture = s.speedWheel && (e.altKey || e.ctrlKey);
    const volumeGesture = s.volumeWheel && !e.altKey && !e.ctrlKey && !e.metaKey;
    if (!speedGesture && !volumeGesture) return;
    if (ctx.shorts && !speedGesture) return;
    e.preventDefault();
    state.acc += e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    const notch = speedGesture ? SPEED_NOTCH : NOTCH;
    const notches = Math.trunc(state.acc / notch);
    if (!notches) return;
    state.acc -= notches * notch;
    const steps = -notches * (s.wheelReverse ? -1 : 1);
    if (!speedGesture) return ytx.actions.volumeBy(steps * s.volumeStep);
    const now = performance.now();
    if (now - state.wheelAt < SPEED_GAP) { state.acc = 0; return; }
    state.wheelAt = now;
    setSpeed(ctx, state.speed + Math.sign(steps) * s.speedStep);
  };

  const bind = (ctx) => {
    const player = ctx.q("player");
    if (!player || state.bound.has(player)) return;
    state.bound.add(player);
    player.addEventListener("wheel", (e) => onWheel(ctx, e), { passive: false });
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
    state: () => ({ sleepTimer: Boolean(state.sleep) }),
  });

  Object.assign(ytx.actions, {
    speedUp: () => setSpeed(ytx.ctx, state.speed + ytx.ctx.settings.speedStep),
    speedDown: () => setSpeed(ytx.ctx, state.speed - ytx.ctx.settings.speedStep),
    speedReset: () => setSpeed(ytx.ctx, ytx.ctx.settings.speedDefault),
    speedSet: (v) => setSpeed(ytx.ctx, v),
    speedRestore: () => setSpeed(ytx.ctx, state.speed, false),
    seekBack: () => seek(ytx.ctx, -ytx.ctx.settings.seekStep),
    seekForward: () => seek(ytx.ctx, ytx.ctx.settings.seekStep),
    frameBack: () => frame(ytx.ctx, -1),
    frameForward: () => frame(ytx.ctx, 1),
    sleepTimer: () => sleepCycle(ytx.ctx),
  });
})();
