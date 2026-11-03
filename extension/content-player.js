(() => {
  const ytx = globalThis.ytx;
  const t = (k) => browser.i18n.getMessage(k);
  const html = document.documentElement;
  const state = { flip: false, mini: false, cinemaEl: null, observer: null, observed: null, bound: new WeakSet(), filters: null, saveTimer: 0 };
  const FILTER_UNITS = { brightness: "%", contrast: "%", saturate: "%", grayscale: "%", sepia: "%", hue: "deg", invert: "%", blur: "px" };
  const hudToggle = (key, on) => ytx.hud(`${t("a_" + key)} ${t(on ? "h_on" : "h_off")}`);

  const filterCss = (filters) => Object.entries(filters).map(([k, v]) => `${k === "hue" ? "hue-rotate" : k}(${v}${FILTER_UNITS[k]})`).join(" ");
  const applyAudio = (ctx) => {
    const on = ctx.settings.enabled && ctx.settings.audioMode && ctx.watch;
    html.classList.toggle("ytx-audio", on);
    const player = ctx.q("player");
    const id = new URLSearchParams(location.search).get("v");
    if (player) player.style.backgroundImage = on && id ? `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` : "";
  };
  const applyVideo = (ctx) => {
    if (!ctx.video) return;
    ctx.video.style.filter = ctx.settings.filtersOn ? filterCss(state.filters ?? ctx.settings.filters) : "";
    ctx.video.style.transform = state.flip ? "scaleX(-1)" : "";
    ctx.video.loop = ctx.settings.enabled && ctx.settings.loop;
    if (!state.bound.has(ctx.video)) {
      state.bound.add(ctx.video);
      ctx.video.addEventListener("ended", () => { if (ctx.settings.enabled && ctx.settings.loop) { ctx.video.currentTime = 0; ctx.video.play(); } });
      ctx.video.addEventListener("play", () => { ctx.video.loop = ctx.settings.enabled && ctx.settings.loop; });
    }
  };

  const cinemaHole = () => {
    const player = ytx.ctx.q("player");
    if (!state.cinemaEl || !player) return;
    const r = player.getBoundingClientRect();
    state.cinemaEl.style.clipPath = `polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, ${r.left}px ${r.top}px, ${r.left}px ${r.bottom}px, ${r.right}px ${r.bottom}px, ${r.right}px ${r.top}px, ${r.left}px ${r.top}px)`;
  };
  const applyCinema = (ctx) => {
    const on = ctx.settings.enabled && ctx.settings.cinema && ctx.watch;
    if (on && !state.cinemaEl) {
      state.cinemaEl = document.createElement("div");
      state.cinemaEl.className = "ytx-cinema";
      state.cinemaEl.addEventListener("click", () => ytx.save({ cinema: false }));
      document.body.append(state.cinemaEl);
      window.addEventListener("resize", cinemaHole);
      window.addEventListener("scroll", cinemaHole, { passive: true });
    }
    if (!on && state.cinemaEl) {
      state.cinemaEl.remove();
      state.cinemaEl = null;
      window.removeEventListener("resize", cinemaHole);
      window.removeEventListener("scroll", cinemaHole);
    }
    if (state.cinemaEl) { state.cinemaEl.style.opacity = ctx.settings.cinemaDim / 100; cinemaHole(); }
  };


  const ytMiniActive = () => Boolean(ytx.ctx.q("player")?.closest("ytd-miniplayer") || document.querySelector("ytd-miniplayer[active], ytd-watch-flexy[hidden]"));
  const setMini = (ctx, on) => {
    const player = ctx.q("player");
    if (!player || state.mini === on || (on && (state.yielded || ytMiniActive()))) return;
    state.mini = on;
    if (on) {
      state.miniHome = player.parentElement;
      state.miniHost ??= Object.assign(document.createElement("div"), { className: "ytx-mini-host" });
      document.body.append(state.miniHost);
      state.miniHost.append(player);
    } else {
      (state.miniHome?.isConnected ? state.miniHome : document.querySelector("ytd-player #container"))?.append(player);
      state.miniHost?.remove();
    }
    html.classList.toggle("ytx-mini", on);
    window.dispatchEvent(new Event("resize"));
  };
  const applyMini = (ctx) => {
    const container = document.querySelector("#player-container-outer, #player-container");
    const on = ctx.settings.enabled && ctx.settings.miniPlayer && !ctx.mobile && ctx.watch && container;
    const [w, h] = ctx.settings.miniSize.split("x");
    html.style.setProperty("--ytx-mini-w", `${w}px`);
    html.style.setProperty("--ytx-mini-h", `${h}px`);
    html.dataset.ytxMiniPos = ctx.settings.miniPosition;
    if (!on) {
      state.observer?.disconnect();
      state.observer = null;
      state.observed = null;
      setMini(ctx, false);
      return;
    }
    if (state.observed === container) return;
    state.observer?.disconnect();
    state.observer = new IntersectionObserver(([entry]) => setMini(ctx, !entry.isIntersecting && ctx.video && !ctx.video.paused && !ytMiniActive()), { threshold: 0.3 });
    state.observer.observe(container);
    state.observed = container;
  };

  const screenshot = (ctx) => {
    const v = ctx.video;
    if (!v) return;
    const canvas = document.createElement("canvas");
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    canvas.getContext("2d").drawImage(v, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${document.title.replace(/ - YouTube$/, "")} ${Math.floor(v.currentTime)}s.png`;
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    });
  };

  ytx.register({
    id: "player",
    apply(ctx, reason) {
      if (reason === "boot") {
        document.addEventListener("keydown", (e) => { if (e.key === "Escape" && ctx.settings.cinema) ytx.save({ cinema: false }); });
        const yieldToYouTube = () => { state.yielded = performance.now(); setMini(ctx, false); };
        window.addEventListener("keydown", (e) => { if (e.key === "i" && !e.metaKey && !e.ctrlKey && !e.target.matches?.("input, textarea, [contenteditable]")) yieldToYouTube(); }, true);
        document.addEventListener("click", (e) => { if (e.target.closest?.(".ytp-miniplayer-button")) yieldToYouTube(); }, true);
        new MutationObserver(() => {
          if (ytMiniActive()) yieldToYouTube();
          else if (state.yielded && performance.now() - state.yielded > 500) { state.yielded = 0; state.observed = null; applyMini(ctx); }
        }).observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ["active", "enabled", "hidden"] });
      }
      if (reason === "nav") { if (ctx.settings.cinema) ytx.save({ cinema: false }); setMini(ctx, false); state.yielded = 0; }
      if (reason === "settings" && ctx.changed.has("filters")) state.filters = null;
      applyVideo(ctx);
      applyAudio(ctx);
      applyCinema(ctx);
      applyMini(ctx);
    },
    state: (ctx) => ({ audio: ctx.settings.audioMode, guest: ctx.settings.guestMode, loop: ctx.settings.loop, cinema: ctx.settings.cinema, flip: state.flip, filters: ctx.settings.filtersOn, cards: ctx.settings.hideCards, miniPlayer: ctx.settings.miniPlayer, reversePlaylist: html.classList.contains("ytx-reverse") }),
  });

  const toggleSetting = (key, hudKey = key) => async () => {
    const on = !ytx.ctx.settings[key];
    await ytx.save({ [key]: on });
    hudToggle(hudKey, on);
    return on;
  };
  Object.assign(ytx.actions, {
    loop: toggleSetting("loop"),
    audio: toggleSetting("audioMode", "audio"),
    guest: () => ytx.save({ guestMode: !ytx.ctx.settings.guestMode }),
    cinema: toggleSetting("cinema"),
    filters: toggleSetting("filtersOn", "filters"),
    cards: toggleSetting("hideCards", "cards"),
    miniPlayer: toggleSetting("miniPlayer"),
    flip: () => { state.flip = !state.flip; applyVideo(ytx.ctx); hudToggle("flip", state.flip); return state.flip; },
    stop: () => ytx.ctx.call("stop"),
    pip: async () => {
      const v = ytx.ctx.video;
      if (!v) return;
      if (document.pictureInPictureElement) return document.exitPictureInPicture();
      if (v.requestPictureInPicture) return v.requestPictureInPicture().catch((err) => console.warn("[ytx] pip", err));
      v.webkitSetPresentationMode?.(v.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");
    },
    screenshot: () => screenshot(ytx.ctx),
    reversePlaylist: () => { const on = html.classList.toggle("ytx-reverse"); hudToggle("reversePlaylist", on); return on; },
    settings: () => browser.runtime.sendMessage({ type: "openOptions" }),
    setFilter: ({ key, value }) => {
      state.filters = { ...(state.filters ?? ytx.ctx.settings.filters), [key]: value };
      if (ytx.ctx.video) ytx.ctx.video.style.filter = filterCss(state.filters);
      clearTimeout(state.saveTimer);
      state.saveTimer = setTimeout(() => ytx.save({ filters: state.filters, filtersOn: true }), 300);
    },
    resetFilters: () => { state.filters = null; return ytx.save({ filters: ytx.DEFAULTS.filters, filtersOn: false }); },
  });
})();
