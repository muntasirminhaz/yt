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
    if (ctx.settings.screenshotTo === "clipboard" && globalThis.ClipboardItem) {
      navigator.clipboard.write([new ClipboardItem({ "image/png": new Promise((resolve) => canvas.toBlob(resolve, "image/png")) })])
        .then(() => ytx.hud(t("h_saved_image")), (err) => console.warn("[ytx] clipboard", err));
      return;
    }
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

  const chapters = (ctx) => {
    const v = ctx.video;
    const bars = [...document.querySelectorAll(".ytp-chapters-container .ytp-chapter-hover-container")];
    if (!v || bars.length < 2) return [];
    return ytx.chapterStarts(bars.map((b) => b.offsetWidth), v.duration);
  };
  const jumpChapter = (ctx, dir) => {
    const v = ctx.video;
    const starts = chapters(ctx);
    if (!v || !starts.length) { ytx.hud(t("h_no_chapters")); return; }
    const target = dir > 0 ? starts.find((s) => s > v.currentTime + 0.5) : [...starts].reverse().find((s) => s < v.currentTime - 2) ?? 0;
    if (target === undefined) return;
    v.currentTime = target;
    ytx.hud(ytx.formatTime(target));
  };
  const onTimeAB = (ctx) => {
    const v = ctx.video;
    if (state.ab && v && v.currentTime >= state.ab.b) v.currentTime = state.ab.a;
  };
  const copyLink = (ctx) => {
    const id = ctx.videoId;
    if (!id || !ctx.video) return;
    navigator.clipboard.writeText(`https://youtu.be/${id}?t=${Math.floor(ctx.video.currentTime)}`).then(() => ytx.hud(t("h_copied_link")));
  };
  const copyTranscript = async () => {
    const button = document.querySelector("ytd-video-description-transcript-section-renderer button, button[aria-label='Show transcript']");
    if (button && !document.querySelector("ytd-transcript-segment-renderer")) button.click();
    for (let i = 0; i < 10 && !document.querySelector("ytd-transcript-segment-renderer"); i++) await new Promise((r) => setTimeout(r, 300));
    const lines = [...document.querySelectorAll("ytd-transcript-segment-renderer")].map((seg) => `${seg.querySelector(".segment-timestamp")?.textContent.trim() ?? ""} ${seg.querySelector(".segment-text")?.textContent.trim() ?? ""}`.trim());
    if (!lines.length) { ytx.hud(t("h_no_transcript")); return; }
    await navigator.clipboard.writeText(lines.join("\n"));
    ytx.hud(t("h_copied_transcript"));
  };
  const autoTheater = (ctx) => {
    if (!ctx.settings.autoTheater || ctx.mobile || !ctx.watch || state.theaterFor === location.href) return;
    state.theaterFor = location.href;
    setTimeout(() => { if (!document.querySelector("ytd-watch-flexy[theater]")) document.querySelector(".ytp-size-button")?.click(); }, 600);
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
      if (reason === "nav") { if (ctx.settings.cinema) ytx.save({ cinema: false }); setMini(ctx, false); state.yielded = 0; state.ab = null; }
      if (reason === "video" || reason === "boot") autoTheater(ctx);
      if (ctx.video && !state.abBound?.has(ctx.video)) { (state.abBound ??= new WeakSet()).add(ctx.video); ctx.video.addEventListener("timeupdate", () => onTimeAB(ctx)); }
      if (reason === "settings" && ctx.changed.has("filters")) state.filters = null;
      applyVideo(ctx);
      applyAudio(ctx);
      applyCinema(ctx);
      applyMini(ctx);
    },
    state: (ctx) => ({ loopAB: Boolean(state.ab), audio: ctx.settings.audioMode, guest: ctx.settings.guestMode, loop: ctx.settings.loop, cinema: ctx.settings.cinema, flip: state.flip, filters: ctx.settings.filtersOn, cards: ctx.settings.hideCards, miniPlayer: ctx.settings.miniPlayer, reversePlaylist: html.classList.contains("ytx-reverse") }),
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
    chapterPrev: () => jumpChapter(ytx.ctx, -1),
    chapterNext: () => jumpChapter(ytx.ctx, 1),
    copyLink: () => copyLink(ytx.ctx),
    copyTranscript,
    setAB: ({ a, b }) => { state.ab = Number.isFinite(a) && Number.isFinite(b) && b > a ? { a, b } : null; return state.ab; },
    getAB: () => state.ab,
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
