(() => {
  const ytx = globalThis.ytx;
  const t = (k) => browser.i18n.getMessage(k);
  const COLORS = { sponsor: "#00d400", selfpromo: "#ffff00", interaction: "#cc00ff", intro: "#00ffff", outro: "#0202ed", preview: "#008fd6", music_offtopic: "#ff9900", filler: "#7300ff" };
  const state = { videoId: null, segments: [], done: new Set(), bar: null, bound: new WeakSet(), titleFor: null, originalTitle: null, whitelisted: false };

  const modes = (s) => Object.fromEntries(Object.keys(ytx.SB_CATEGORIES).map((c) => [c, s["sb_" + c]]));
  const clearBar = () => { state.bar?.remove(); state.bar = null; };
  const drawBar = (ctx) => {
    clearBar();
    const host = document.querySelector(".ytp-progress-bar");
    const v = ctx.video;
    if (!host || !v || !Number.isFinite(v.duration) || !state.segments.length) return;
    const m = modes(ctx.settings);
    state.bar = document.createElement("div");
    state.bar.className = "ytx-sb-bar";
    for (const seg of state.segments) {
      if (m[seg.category] === "off") continue;
      const mark = document.createElement("div");
      mark.style.left = `${(seg.start / v.duration) * 100}%`;
      mark.style.width = `${Math.max(0.2, ((seg.end - seg.start) / v.duration) * 100)}%`;
      mark.style.background = COLORS[seg.category] ?? "#fff";
      mark.title = t("s_sb_" + seg.category);
      state.bar.append(mark);
    }
    host.append(state.bar);
  };

  const onTime = (ctx) => {
    const v = ctx.video;
    if (!v || !state.segments.length || !ctx.settings.sbEnabled || state.whitelisted) return;
    const m = modes(ctx.settings);
    for (const seg of state.segments) {
      if (m[seg.category] !== "skip" || state.done.has(seg.id)) continue;
      if (v.currentTime >= seg.start && v.currentTime < seg.end - 0.3) {
        state.done.add(seg.id);
        v.currentTime = seg.end;
        ytx.log("sponsorblock skip", seg);
        if (ctx.settings.sbNotify) ytx.hud(`${t("h_skipped")}: ${t("s_sb_" + seg.category)}`);
        break;
      }
    }
  };

  const load = async (ctx) => {
    const id = ctx.videoId;
    if (!id || !ctx.settings.sbEnabled) { state.segments = []; clearBar(); return; }
    const categories = Object.entries(modes(ctx.settings)).filter(([, mode]) => mode !== "off").map(([c]) => c);
    const list = ytx.listOf(ctx.settings.sbWhitelist);
    state.whitelisted = list.length ? ytx.matchList((await ctx.call("videoData"))?.author ?? "", list) : false;
    const segments = (await browser.runtime.sendMessage({ type: "sb", videoId: id, categories }).catch(() => null)) ?? [];
    if (ctx.videoId !== id) return;
    state.segments = segments;
    ytx.log("sponsorblock", { id, segments: segments.length });
    drawBar(ctx);
    onTime(ctx);
  };

  const dislikes = async (ctx) => {
    const id = ctx.videoId;
    if (!id || !ctx.settings.rydEnabled || ctx.mobile) return;
    const data = await browser.runtime.sendMessage({ type: "ryd", videoId: id }).catch(() => null);
    if (!data || ctx.videoId !== id) return;
    for (let i = 0; i < 10 && !document.querySelector("dislike-button-view-model button"); i++) await new Promise((r) => setTimeout(r, 400));
    const button = document.querySelector("dislike-button-view-model button");
    if (!button) return;
    const n = data.dislikes;
    const text = n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(n >= 1e4 ? 0 : 1)}K` : String(n);
    let span = button.querySelector(".ytx-dislikes");
    if (!span) { span = document.createElement("span"); span.className = "ytx-dislikes"; button.append(span); }
    span.textContent = text;
    button.setAttribute("aria-label", `${n} dislikes`);
  };

  const untranslate = async (ctx) => {
    const id = ctx.videoId;
    if (!id || ctx.mobile || !ctx.settings.noTranslate || ctx.settings.dearrowTitles) return;
    const data = await ctx.call("videoData");
    if (!data?.title || ctx.videoId !== id) return;
    for (let i = 0; i < 10 && !document.querySelector("ytd-watch-metadata h1"); i++) await new Promise((r) => setTimeout(r, 400));
    const el = document.querySelector("ytd-watch-metadata h1 yt-formatted-string, ytd-watch-metadata h1");
    if (el && el.textContent.trim() !== data.title.trim()) { ytx.log("title restored", { shown: el.textContent.trim(), original: data.title }); el.textContent = data.title; }
  };

  const dearrow = async (ctx) => {
    const id = ctx.videoId;
    const h1 = document.querySelector("ytd-watch-metadata h1 yt-formatted-string, ytd-watch-metadata h1");
    if (!id || ctx.mobile) return;
    if (!ctx.settings.dearrowTitles) { if (h1 && state.originalTitle && state.titleFor === id) h1.textContent = state.originalTitle; return; }
    const data = await browser.runtime.sendMessage({ type: "dearrow", videoId: id }).catch(() => null);
    if (!data?.title || ctx.videoId !== id) return;
    for (let i = 0; i < 10 && !document.querySelector("ytd-watch-metadata h1"); i++) await new Promise((r) => setTimeout(r, 400));
    const el = document.querySelector("ytd-watch-metadata h1 yt-formatted-string, ytd-watch-metadata h1");
    if (!el) return;
    if (state.titleFor !== id) { state.titleFor = id; state.originalTitle = el.textContent; }
    el.textContent = data.title;
    el.title = state.originalTitle;
  };

  ytx.register({
    id: "sponsors",
    apply(ctx, reason) {
      if (!ctx.settings.enabled) { clearBar(); return; }
      if (reason === "nav") { state.segments = []; state.done.clear(); clearBar(); }
      if (ctx.video && !state.bound.has(ctx.video)) { state.bound.add(ctx.video); ctx.video.addEventListener("timeupdate", () => onTime(ctx)); ctx.video.addEventListener("durationchange", () => drawBar(ctx)); }
      const sbKeys = ["sbEnabled", "sbWhitelist", ...Object.keys(ytx.SB_CATEGORIES).map((c) => "sb_" + c)];
      if (ctx.watch && (reason === "video" || reason === "boot" || (reason === "settings" && sbKeys.some((k) => ctx.changed.has(k))))) load(ctx);
      if (ctx.watch && (reason === "video" || reason === "boot" || (reason === "settings" && ctx.changed.has("rydEnabled")))) dislikes(ctx);
      if (ctx.watch && (reason === "video" || reason === "boot" || (reason === "settings" && ctx.changed.has("dearrowTitles")))) dearrow(ctx);
      if (ctx.watch && (reason === "video" || reason === "boot" || (reason === "settings" && ctx.changed.has("noTranslate")))) untranslate(ctx);
    },
  });
})();
