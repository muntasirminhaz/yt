(() => {
  const ytx = globalThis.ytx;
  const t = (k) => browser.i18n.getMessage(k);
  const html = document.documentElement;
  const chat = location.pathname.startsWith("/live_chat");
  const state = { bound: new WeakSet(), skip: null, skipId: null, outroDone: null, wlDone: null, chatModeFor: null, videosTabFor: null, besideRo: null, besideFor: null, lightbox: null, tip: null, tipFor: null, cache: { id: null, data: null } };
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const retry = async (fn, tries = 10, ms = 400) => { for (let i = 0; i < tries; i++) { if (fn()) return true; await wait(ms); } return false; };
  const details = async (ctx) => {
    const id = ctx.videoId;
    if (state.cache.id === id && state.cache.data) return state.cache.data;
    const data = await ctx.call("details");
    if (data?.id !== id) return null;
    state.cache = { id, data };
    return data;
  };
  const likesCount = () => {
    const label = document.querySelector("like-button-view-model button[aria-label], #segmented-like-button button[aria-label]")?.getAttribute("aria-label") ?? "";
    const m = label.replace(/,/g, "").match(/(\d[\d.]*)\s*(?:other people|likes?)/i);
    return m ? Number(m[1]) : NaN;
  };
  const metaLine = (cls, text) => {
    let box = document.querySelector(".ytx-meta");
    if (!box) {
      const info = document.querySelector("ytd-watch-info-text");
      if (!info) return false;
      box = document.createElement("div");
      box.className = "ytx-meta";
      info.after(box);
    }
    let line = box.querySelector("." + cls);
    if (!text) { line?.remove(); return true; }
    if (!line) { line = document.createElement("div"); line.className = cls; box.append(line); }
    line.textContent = text;
    return true;
  };
  Object.assign(ytx, { wait, retry, details, likesCount, metaLine });

  const FIND = [
    { host: "ytd-comments#comments ytd-comments-header-renderer", after: "#title", items: "ytd-comment-thread-renderer", text: "#content-text", author: "#author-text", time: "a[href*='&t='], a[href*='?t=']" },
    { host: "yt-live-chat-header-renderer", items: "yt-live-chat-text-message-renderer, yt-live-chat-paid-message-renderer, yt-live-chat-membership-item-renderer", text: "#message", author: "#author-name" },
  ];
  const findFilter = (spec, input) => {
    const q = input.value.trim().toLowerCase();
    const byAuthor = q.startsWith("@") && spec.author;
    const needle = byAuthor ? q.slice(1) : q;
    for (const item of document.querySelectorAll(spec.items)) {
      const text = byAuthor ? item.querySelector(spec.author)?.textContent ?? "" : `${item.querySelector(spec.text)?.textContent ?? ""} ${spec.time ? item.querySelector(spec.time)?.textContent ?? "" : ""}`;
      item.classList.toggle("ytx-find-out", Boolean(needle) && !text.toLowerCase().includes(needle));
    }
  };
  const mountFind = () => {
    for (const spec of FIND) {
      const host = document.querySelector(spec.host);
      if (!host) continue;
      let input = host.querySelector(".ytx-find");
      if (!input) {
        input = Object.assign(document.createElement("input"), { type: "search", className: "ytx-find", placeholder: t("fd_placeholder") });
        input.addEventListener("input", () => findFilter(spec, input));
        input.addEventListener("keydown", (e) => e.stopPropagation());
        const anchor = spec.after && host.querySelector(spec.after);
        anchor ? anchor.after(input) : host.append(input);
      }
      if (input.value) findFilter(spec, input);
    }
  };
  const unmountFind = () => { for (const el of document.querySelectorAll(".ytx-find, .ytx-find-out")) { if (el.matches(".ytx-find")) el.remove(); else el.classList.remove("ytx-find-out"); } };
  // note: YouTube's transcript panel ships its own Search transcript box, so the find box covers comments and live chat only

  const REMOVE_WL = /remove from watch later/i;
  const menuClick = async (card, re) => {
    const button = card.querySelector("ytd-menu-renderer yt-icon-button button, ytd-menu-renderer button, #menu button");
    if (!button) return false;
    button.click();
    await wait(400);
    const item = [...document.querySelectorAll("ytd-menu-popup-renderer ytd-menu-service-item-renderer, ytd-menu-popup-renderer tp-yt-paper-item, tp-yt-iron-dropdown ytd-menu-service-item-renderer")].find((el) => re.test(el.textContent));
    if (!item) { document.body.click(); return false; }
    item.click();
    return true;
  };
  const onTimeWL = async (ctx) => {
    const v = ctx.video;
    if (!ctx.settings.enabled || !ctx.settings.wlAutoRemove || !v || state.wlDone === ctx.videoId || !Number.isFinite(v.duration) || v.duration < 30 || v.duration - v.currentTime > 6) return;
    if (new URLSearchParams(location.search).get("list") !== "WL") return;
    state.wlDone = ctx.videoId;
    const card = document.querySelector("ytd-playlist-panel-video-renderer[selected]");
    const ok = card && await menuClick(card, REMOVE_WL);
    ytx.hud(t(ok ? "h_removed_wl" : "h_wl_failed"));
  };
  const watchedCards = () => [...document.querySelectorAll("ytd-playlist-video-renderer")].filter((c) => parseFloat(c.querySelector("ytd-thumbnail-overlay-resume-playback-renderer #progress")?.style.width) >= 90);
  const wlButton = (ctx) => {
    const on = ctx.settings.enabled && ctx.settings.wlRemoveWatched && location.pathname === "/playlist" && new URLSearchParams(location.search).get("list") === "WL";
    const existing = document.querySelector(".ytx-wl");
    if (!on) { existing?.remove(); return; }
    if (existing) return;
    const host = document.querySelector("ytd-browse[page-subtype='playlist'] yt-page-header-renderer, ytd-browse[page-subtype='playlist'] ytd-playlist-header-renderer, ytd-browse[page-subtype='playlist'] #header");
    if (!host) return;
    const b = Object.assign(document.createElement("button"), { type: "button", className: "ytx-wl", textContent: t("wl_remove") });
    let armed = 0;
    b.addEventListener("click", async () => {
      const cards = watchedCards();
      if (!cards.length) { b.textContent = t("wl_none"); setTimeout(() => { b.textContent = t("wl_remove"); }, 2000); return; }
      if (!armed) { armed = setTimeout(() => { armed = 0; b.textContent = t("wl_remove"); }, 4000); b.textContent = `${t("wl_confirm")} (${cards.length})`; return; }
      clearTimeout(armed);
      armed = 0;
      b.disabled = true;
      let n = 0;
      for (const card of cards) { if (await menuClick(card, REMOVE_WL)) n++; await wait(700); }
      b.disabled = false;
      b.textContent = `${t("wl_done")} ${n}`;
      setTimeout(() => { b.textContent = t("wl_remove"); }, 3000);
    });
    host.append(b);
  };

  const CHANNEL_ROOT = /^\/(@[^/]+|channel\/[^/]+|c\/[^/]+|user\/[^/]+)\/?(featured)?$/;
  const videosTab = async (ctx) => {
    if (!ctx.settings.enabled || !ctx.settings.channelVideosTab || ctx.mobile || !CHANNEL_ROOT.test(location.pathname) || state.videosTabFor === location.pathname) return;
    state.videosTabFor = location.pathname;
    for (let i = 0; i < 10 && state.videosTabFor === location.pathname; i++) {
      const tabs = [...document.querySelectorAll("yt-tab-shape, tp-yt-paper-tab")];
      const videos = tabs.find((el) => /^videos$/i.test((el.getAttribute("tab-title") ?? el.textContent).trim())) ?? (tabs.length > 2 && tabs[0].matches("[aria-selected='true'], .iron-selected, [selected]") ? tabs[1] : null);
      if (videos) { (videos.querySelector(".yt-tab-shape-wiz__tab") ?? videos).click(); ytx.log("channel: videos tab"); return; }
      await wait(300);
    }
  };

  const besideVars = () => {
    const comments = document.querySelector("ytd-comments#comments");
    const sec = document.querySelector("ytd-watch-flexy #secondary-inner");
    const cb = comments?.offsetParent;
    if (!sec || !cb) return;
    const a = sec.getBoundingClientRect();
    const b = cb.getBoundingClientRect();
    html.style.setProperty("--ytx-beside-top", `${Math.round(a.top + a.height - b.top)}px`);
    html.style.setProperty("--ytx-beside-left", `${Math.round(a.left - b.left)}px`);
    html.style.setProperty("--ytx-beside-width", `${Math.round(a.width)}px`);
  };
  // note: comments stay in YouTube's DOM and are only positioned beside the player, so their lazy loading is untouched; theater and full screen keep YouTube's layout
  const beside = (ctx) => {
    const on = ctx.settings.enabled && ctx.settings.commentsBeside && !ctx.mobile && ctx.watch;
    html.classList.toggle("ytx-beside", on);
    if (!on) { state.besideRo?.disconnect(); state.besideRo = null; state.besideFor = null; for (const k of ["top", "left", "width"]) html.style.removeProperty("--ytx-beside-" + k); return true; }
    const sec = document.querySelector("ytd-watch-flexy #secondary-inner");
    const cb = document.querySelector("ytd-comments#comments")?.offsetParent;
    if (!sec || !cb) return false;
    if (state.besideFor !== sec) { state.besideRo?.disconnect(); state.besideRo = new ResizeObserver(besideVars); state.besideRo.observe(sec); state.besideRo.observe(cb); state.besideFor = sec; }
    besideVars();
    return true;
  };
  const timeButtons = (ctx) => {
    for (const box of document.querySelectorAll("ytd-commentbox")) {
      const buttons = box.querySelector("#footer #buttons, #buttons");
      if (!buttons || buttons.querySelector(".ytx-ctime")) continue;
      const b = Object.assign(document.createElement("button"), { type: "button", className: "ytx-chip ytx-ctime", textContent: t("cm_time") });
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        const root = box.querySelector("#contenteditable-root");
        if (!root) return;
        root.focus();
        document.execCommand("insertText", false, `${ytx.formatTime(ctx.video?.currentTime ?? 0)} `);
      });
      buttons.prepend(b);
    }
  };

  const hideEmojiOnly = () => {
    for (const msg of document.querySelectorAll("yt-live-chat-text-message-renderer:not(.ytx-emoji-out)")) {
      const m = msg.querySelector("#message");
      if (m && !m.textContent.trim() && m.querySelector("img")) msg.classList.add("ytx-emoji-out");
    }
  };
  const liveMode = () => {
    const menu = document.querySelector("yt-live-chat-header-renderer yt-dropdown-menu");
    const items = menu ? [...menu.querySelectorAll("tp-yt-paper-listbox a")] : [];
    if (items.length < 2) return false;
    if (items[1].querySelector(".iron-selected, [aria-selected='true']")) return true;
    menu.querySelector("tp-yt-paper-button, #label")?.click();
    setTimeout(() => (items[1].querySelector("tp-yt-paper-item") ?? items[1]).click(), 400);
    return true;
  };
  const chatApply = (ctx) => {
    const s = ctx.settings;
    const tidy = s.enabled ? s.chatTidy : [];
    for (const k of ["avatars", "badges"]) html.classList.toggle("ytx-chat-" + k, tidy.includes(k));
    html.dataset.ytxChat = s.enabled ? s.chatFilter : "all";
    if (document.body) ytx.scanner.set("emoji", tidy.includes("emojiOnly") ? hideEmojiOnly : null);
    if (!tidy.includes("emojiOnly")) for (const el of document.querySelectorAll(".ytx-emoji-out")) el.classList.remove("ytx-emoji-out");
    if (tidy.includes("liveMode") && state.chatModeFor !== location.href) { state.chatModeFor = location.href; retry(liveMode, 10, 500); }
    if (document.body) ytx.scanner.set("find", s.enabled && s.findPanels ? mountFind : null);
    if (!(s.enabled && s.findPanels)) unmountFind();
  };

  const ownerHandle = () => document.querySelector("ytd-video-owner-renderer a[href^='/@'], #owner a[href^='/@'], ytm-slim-owner-renderer a[href^='/@'], ytm-slim-video-metadata-section-renderer a[href^='/@']")?.getAttribute("href")?.slice(1) ?? "";
  const applySkips = async (ctx) => {
    const skips = ytx.parseSkips(ctx.settings.channelSkips);
    const v = ctx.video;
    state.skip = null;
    if (!skips.length || !v || !ctx.watch) return;
    const id = ctx.videoId;
    await wait(600);
    if (ctx.videoId !== id) return;
    const author = (await ctx.call("videoData"))?.author ?? "";
    if (skips.some((x) => x.match.startsWith("@"))) await retry(() => ownerHandle(), 8, 500);
    if (ctx.videoId !== id) return;
    const handle = ownerHandle();
    state.skip = skips.find((x) => ytx.matchList(handle, [x.match]) || ytx.matchList(author, [x.match])) ?? null;
    state.skipId = id;
    if (!state.skip) return;
    ytx.log("channel skip", state.skip);
    if (state.skip.start && v.currentTime < state.skip.start && !new URLSearchParams(location.search).has("t")) { v.currentTime = state.skip.start; ytx.hud(t("h_skipped_intro")); }
  };
  const onTimeSkip = (ctx) => {
    const v = ctx.video;
    const sk = state.skip;
    if (!sk?.end || !v || state.skipId !== ctx.videoId || state.outroDone === ctx.videoId || !Number.isFinite(v.duration)) return;
    const left = v.duration - v.currentTime;
    if (left <= sk.end && left > 0.5) { state.outroDone = ctx.videoId; v.currentTime = v.duration; ytx.hud(t("h_skipped_outro")); }
  };
  ytx.actions.setIntro = async () => {
    const ctx = ytx.ctx;
    if (!ctx.video) return;
    const name = ownerHandle() || (await ctx.call("videoData"))?.author;
    if (!name) { ytx.hud(t("h_no_channel")); return; }
    const start = Math.floor(ctx.video.currentTime);
    const key = name.toLowerCase();
    const lines = String(ctx.settings.channelSkips ?? "").split("\n").map((l) => l.trim()).filter(Boolean);
    const existing = lines.find((l) => ytx.parseSkips(l)[0]?.match === key);
    const end = existing ? ytx.parseSkips(existing)[0].end : 0;
    const kept = lines.filter((l) => l !== existing);
    kept.push(`${name} ${start}${end ? " " + end : ""}`);
    await ytx.save({ channelSkips: kept.join("\n") });
    ytx.hud(`${t("h_intro_set")} ${ytx.formatTime(start)}`);
  };

  const lightbox = (id) => {
    state.lightbox?.remove();
    const box = document.createElement("div");
    box.className = "ytx-lightbox";
    const img = Object.assign(document.createElement("img"), { src: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, alt: "" });
    const open = Object.assign(document.createElement("a"), { href: img.src, textContent: t("lb_open"), target: "_blank", rel: "noopener" });
    img.addEventListener("error", () => { if (!img.dataset.fallback) { img.dataset.fallback = "1"; img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; open.href = img.src; } });
    const onKey = (e) => { if (e.key === "Escape") { e.preventDefault(); e.stopImmediatePropagation(); close(); } };
    const close = () => { box.remove(); state.lightbox = null; document.removeEventListener("keydown", onKey, true); };
    box.addEventListener("click", (e) => { if (e.target !== open) close(); });
    document.addEventListener("keydown", onKey, true);
    box.append(img, open);
    document.body.append(box);
    state.lightbox = box;
  };
  ytx.actions.thumbnail = () => { const id = ytx.ctx.videoId; if (id) lightbox(id); };

  const exactStats = async (ctx) => {
    if (!ctx.settings.enabled || !ctx.settings.exactStats || !ctx.watch || ctx.mobile) { metaLine("ytx-exact", ""); return; }
    const id = ctx.videoId;
    const d = await details(ctx);
    if (!d || ctx.videoId !== id) return;
    const n = (x) => Number(x).toLocaleString();
    const when = d.published ? new Date(d.published).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "";
    const parts = [`${n(d.views)} ${t("ex_views")}`, when && `${t("ex_published")} ${when}`];
    await retry(() => Number.isFinite(likesCount()), 8);
    if (ctx.videoId !== id) return;
    const likes = likesCount();
    if (Number.isFinite(likes)) parts.push(`${n(likes)} ${t("ex_likes")}`);
    await retry(() => metaLine("ytx-exact", parts.filter(Boolean).join(" · ")), 10);
  };

  const parseT = (href) => {
    try {
      const raw = new URL(href, location.href).searchParams.get("t") ?? "";
      const m = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(\d+)s?$/);
      return m ? Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3]) : NaN;
    } catch { return NaN; }
  };
  const showTip = async (ctx, a) => {
    const d = await details(ctx);
    const v = ctx.video;
    const tile = d?.storyboard && v && Number.isFinite(v.duration) ? ytx.storyboardTile(d.storyboard, parseT(a.href), v.duration) : null;
    if (!tile || state.tipFor !== a) return;
    if (!state.tip) { state.tip = document.createElement("div"); state.tip.className = "ytx-tip"; document.body.append(state.tip); }
    const tip = state.tip;
    const r = a.getBoundingClientRect();
    Object.assign(tip.style, { width: `${tile.w}px`, height: `${tile.h}px`, backgroundImage: `url("${tile.url}")`, backgroundPosition: `-${tile.x}px -${tile.y}px`, left: `${Math.max(8, Math.min(innerWidth - tile.w - 8, r.left))}px`, top: `${r.top - tile.h - 8 < 8 ? r.bottom + 8 : r.top - tile.h - 8}px` });
    tip.hidden = false;
  };
  const hideTip = () => { state.tipFor = null; if (state.tip) state.tip.hidden = true; };
  const TIME_LINKS = "ytd-comments a[href*='&t='], ytd-comments a[href*='?t='], ytd-watch-metadata a[href*='&t='], ytd-watch-metadata a[href*='?t=']";

  const boot = (ctx) => {
    document.addEventListener("click", (e) => {
      if (!e.altKey || !ctx.settings.enabled || !ctx.settings.thumbViewer) return;
      const a = e.target.closest?.("a[href*='watch?v='], a[href^='/shorts/']");
      const id = a && ytx.videoIdFrom(a.href);
      if (!id) return;
      e.preventDefault();
      e.stopPropagation();
      lightbox(id);
    }, true);
    document.addEventListener("mouseover", (e) => {
      if (!ctx.settings.enabled || !ctx.settings.timestampPreview || ctx.mobile) return;
      const a = e.target.closest?.(TIME_LINKS);
      if (!a || ytx.videoIdFrom(a.href) !== ctx.videoId || !Number.isFinite(parseT(a.href))) return;
      state.tipFor = a;
      showTip(ctx, a);
    }, true);
    document.addEventListener("mouseout", (e) => { if (state.tipFor && e.target.closest?.("a") === state.tipFor) hideTip(); }, true);
  };

  ytx.register({
    id: "power",
    apply(ctx, reason) {
      const s = ctx.settings;
      if (chat) { chatApply(ctx); return; }
      if (reason === "boot") boot(ctx);
      if (reason === "nav") { state.skip = null; hideTip(); }
      if (ctx.video && !state.bound.has(ctx.video)) { state.bound.add(ctx.video); ctx.video.addEventListener("timeupdate", () => { onTimeSkip(ctx); onTimeWL(ctx); }); }
      if (!document.body) return;
      const find = s.enabled && s.findPanels;
      ytx.scanner.set("find", find ? mountFind : null);
      if (!find && reason === "settings") unmountFind();
      ytx.scanner.set("wl", s.enabled && s.wlRemoveWatched && !ctx.mobile ? () => wlButton(ctx) : null);
      if (!(s.enabled && s.wlRemoveWatched)) document.querySelector(".ytx-wl")?.remove();
      ytx.scanner.set("ctime", s.enabled && s.commentTime && !ctx.mobile ? () => timeButtons(ctx) : null);
      if (!(s.enabled && s.commentTime)) for (const el of document.querySelectorAll(".ytx-ctime")) el.remove();
      if (reason === "boot" || reason === "nav") videosTab(ctx);
      if (!ctx.mobile) retry(() => beside(ctx), reason === "settings" ? 1 : 10);
      if (reason === "video" || (reason === "settings" && ctx.changed.has("channelSkips"))) applySkips(ctx);
      if (reason === "video" || reason === "boot" || (reason === "settings" && ctx.changed.has("exactStats"))) exactStats(ctx);
    },
  });
})();
