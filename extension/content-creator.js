(() => {
  const ytx = globalThis.ytx;
  const t = (k) => browser.i18n.getMessage(k);
  const state = { factsFor: null, drafts: {}, snapshots: {}, adBar: null, triage: "all", testTitle: "", testChannel: "" };
  browser.storage.local.get(["chapterDrafts", "channelSnapshots"]).then((r) => { state.drafts = r.chapterDrafts ?? {}; state.snapshots = r.channelSnapshots ?? {}; });
  const el = (tag, props = {}, children = []) => { const n = Object.assign(document.createElement(tag), props); n.append(...children); return n; };
  const btn = (text, onClick, cls = "ytx-copy") => { const b = el("button", { type: "button", className: cls, textContent: text }); b.addEventListener("click", (e) => { e.stopPropagation(); onClick(e); }); return b; };
  const download = (name, text, type = "text/plain") => {
    const a = el("a", { href: URL.createObjectURL(new Blob([text], { type })), download: name });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  };
  const pageTitle = () => document.title.replace(/ - YouTube$/, "");
  const when = (iso) => (iso ? new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : t("fp_none"));
  const mountBelow = (node) => {
    const below = ytx.ctx.q("below");
    if (!below) return false;
    const bar = below.querySelector(".ytx-bar:not(.in-player)");
    bar ? bar.after(node) : below.prepend(node);
    return true;
  };

  // note: Safari only allows a download or clipboard write right after a click, so the first press opens the transcript panel and the second press saves
  ytx.actions.saveTranscript = () => {
    const lines = ytx.transcript();
    if (!lines.length) return;
    const srt = ytx.ctx.settings.transcriptFormat === "srt";
    download(`${pageTitle()}.${srt ? "srt" : "txt"}`, srt ? ytx.srt(lines) : lines.map((l) => `${ytx.formatTime(l.t)} ${l.text}`).join("\n"));
    ytx.hud(t("h_saved_file"));
  };

  const copyBtn = (text, value) => btn(text, () => navigator.clipboard.writeText(value).then(() => ytx.hud(t("h_copied"))));
  const seekBtn = (sec, label = ytx.formatTime(sec)) => btn(label, () => { if (ytx.ctx.video) ytx.ctx.video.currentTime = sec; });
  const factRow = (label, children) => el("div", { className: "ytx-frow ytx-fact" }, [el("span", { textContent: label }), el("div", { className: "ytx-fact-body" }, children)]);
  const none = () => [el("span", { textContent: t("fp_none") })];
  const peaks = (ctx, d) => {
    const v = ctx.video;
    const path = document.querySelector(".ytp-heat-map-path");
    const points = d.heat?.length ? d.heat.map(([t, i]) => ({ t, v: i * 100 })) : v && path && Number.isFinite(v.duration) ? ytx.heatPath(path.getAttribute("d"), v.duration) : [];
    const list = ytx.heatPeaks(points);
    return list.length ? list.map((p) => seekBtn(p.t, `${ytx.formatTime(p.t)} · ${Math.round(p.v)}%`)) : [el("span", { textContent: t("fp_noHeat") })];
  };
  const factsText = (d) => [
    [t("fp_tags"), d.keywords.join(", ")], [t("fp_category"), d.category ?? ""], [t("fp_videoId"), d.id], [t("fp_channelId"), d.channelId ?? ""], [t("fp_captions"), d.captions.join(", ")], [t("fp_published"), when(d.published)], [t("fp_length"), ytx.formatTime(d.length)],
    [t("fp_adBreaks"), d.adBreaks.map(ytx.formatTime).join(", ")], [t("fp_endscreen"), d.endscreen.map((e) => `${ytx.formatTime(e.start)} ${e.style.toLowerCase()} ${e.title}`).join("; ")], [t("fp_cards"), d.cards.map((c) => `${ytx.formatTime(c.t)} ${c.text}`).join("; ")],
  ].map(([k, v]) => `${k}: ${v}`).join("\n");
  const buildFacts = (ctx, d) => {
    const box = el("details", { className: "ytx-panel ytx-facts" }, [el("summary", { textContent: t("fp_title") })]);
    const replayed = factRow(t("fp_replayed"), peaks(ctx, d));
    box.append(
      factRow(t("fp_tags"), d.keywords.length ? [el("span", { textContent: d.keywords.join(", ") }), copyBtn(t("fp_copyTags"), d.keywords.join(", "))] : none()),
      factRow(t("fp_category"), [el("span", { textContent: d.category ?? t("fp_none") })]),
      factRow(t("fp_videoId"), [el("span", { textContent: d.id }), copyBtn(t("f_copy"), d.id)]),
      factRow(t("fp_channelId"), [el("span", { textContent: d.channelId ?? "" }), copyBtn(t("f_copy"), d.channelId ?? "")]),
      factRow(t("fp_captions"), [el("span", { textContent: d.captions.length ? d.captions.join(", ") : t("fp_none") })]),
      factRow(t("fp_published"), [el("span", { textContent: when(d.published) })]),
      factRow(t("fp_length"), [el("span", { textContent: ytx.formatTime(d.length) })]),
      factRow(t("fp_adBreaks"), d.adBreaks.length ? d.adBreaks.map((s) => seekBtn(s)) : [el("span", { textContent: d.preroll ? "0:00" : t("fp_none") })]),
      replayed,
      factRow(t("fp_endscreen"), d.endscreen.length ? d.endscreen.map((e) => el("div", {}, [seekBtn(e.start), el("span", { textContent: ` ${e.style.toLowerCase()}: ${e.title}` })])) : none()),
      factRow(t("fp_cards"), d.cards.length ? d.cards.map((c) => el("div", {}, [seekBtn(c.t), el("span", { textContent: ` ${c.text}` })])) : none()),
      copyBtn(t("fp_copyAll"), factsText(d)),
    );
    box.addEventListener("toggle", () => { if (box.open) replayed.querySelector(".ytx-fact-body").replaceChildren(...peaks(ctx, d)); });
    return box;
  };
  const facts = async (ctx) => {
    const on = ctx.settings.enabled && ctx.settings.factsPanel && ctx.watch && !ctx.mobile;
    if (!on) { document.querySelector(".ytx-facts")?.remove(); state.factsFor = null; return; }
    const id = ctx.videoId;
    if (state.factsFor === id) return;
    state.factsFor = id;
    let d = null;
    for (let i = 0; i < 6 && !d; i++) { d = await ytx.details(ctx); if (!d) await ytx.wait(800); }
    if (!d || ctx.videoId !== id) { if (state.factsFor === id) state.factsFor = null; return; }
    document.querySelector(".ytx-facts")?.remove();
    const node = buildFacts(ctx, d);
    await ytx.retry(() => mountBelow(node), 10);
  };

  const commentsCount = () => ytx.parseCount(document.querySelector("ytd-comments-header-renderer #count")?.textContent ?? "");
  const velocity = async (ctx) => {
    const on = ctx.settings.enabled && ctx.settings.velocityBadge && ctx.watch && !ctx.mobile;
    if (!on) { ytx.metaLine("ytx-velocity", ""); return; }
    const id = ctx.videoId;
    const d = await ytx.details(ctx);
    if (!d || ctx.videoId !== id || !d.published) return;
    const days = Math.max(1, (Date.now() - new Date(d.published).getTime()) / 86400000);
    const short = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : String(Math.round(n)));
    const pct = (n) => { const p = (n / Math.max(1, d.views)) * 100; return p < 0.01 ? "<0.01%" : `${p.toFixed(2)}%`; };
    const parts = [`${short(d.views / days)} ${t("vb_views")}`];
    await ytx.retry(() => Number.isFinite(ytx.likesCount()), 8);
    if (ctx.videoId !== id) return;
    if (Number.isFinite(ytx.likesCount())) parts.push(`${pct(ytx.likesCount())} ${t("vb_likes")}`);
    await ytx.retry(() => ytx.metaLine("ytx-velocity", parts.join(" · ")), 10);
    ytx.scanner.set("velocity", () => {
      const comments = commentsCount();
      if (ctx.videoId !== id) { ytx.scanner.set("velocity", null); return; }
      if (!Number.isFinite(comments)) return;
      ytx.metaLine("ytx-velocity", [...parts, `${pct(comments)} ${t("vb_comments")}`].join(" · "));
      ytx.scanner.set("velocity", null);
    });
  };

  const adMarks = async (ctx) => {
    state.adBar?.remove();
    state.adBar = null;
    if (!ctx.settings.enabled || !ctx.settings.adBreakMarks || !ctx.watch || ctx.mobile) return;
    const id = ctx.videoId;
    const d = await ytx.details(ctx);
    const v = ctx.video;
    if (!d?.adBreaks.length || ctx.videoId !== id || !v || !Number.isFinite(v.duration)) return;
    await ytx.retry(() => document.querySelector(".ytp-progress-bar"), 10);
    const host = document.querySelector(".ytp-progress-bar");
    if (!host || ctx.videoId !== id) return;
    const bar = el("div", { className: "ytx-sb-bar ytx-ad-marks" });
    for (const s of d.adBreaks) bar.append(el("div", { style: `left:${(s / v.duration) * 100}%;width:0.4%;background:#ffd60a`, title: t("fp_adBreaks") }));
    host.append(bar);
    state.adBar = bar;
  };

  const marksFor = (id) => (state.drafts[id] ??= []);
  const saveDrafts = () => {
    const ids = Object.keys(state.drafts);
    for (const old of ids.slice(0, Math.max(0, ids.length - 50))) delete state.drafts[old];
    browser.storage.local.set({ chapterDrafts: state.drafts });
  };
  const chapterLines = (marks) => {
    const sorted = [...marks].sort((a, b) => a.t - b.t);
    if (!sorted.length || sorted[0].t > 0) sorted.unshift({ t: 0, title: t("ch_intro") });
    return sorted;
  };
  const chapterOk = (lines) => lines.length >= 3 && lines[0].t === 0 && lines.every((l, i) => !i || l.t - lines[i - 1].t >= 10);
  const seedFromComments = () => {
    const re = /^\s*((?:\d{1,2}:)?\d{1,2}:\d{2})\s*[-–—:|]?\s*(.+?)\s*$/;
    let best = [];
    for (const c of document.querySelectorAll("ytd-comment-thread-renderer #content-text, ytd-comment-view-model #content-text")) {
      const found = c.innerText.split("\n").map((l) => l.match(re)).filter(Boolean).map((m) => ({ t: ytx.parseDuration(m[1]), title: m[2] }));
      if (found.length > best.length) best = found;
    }
    return best;
  };
  const buildChapters = (ctx) => {
    const id = ctx.videoId;
    const panel = el("div", { className: "ytx-panel ytx-chapters" });
    const list = el("div", { className: "ytx-marks" });
    const status = el("div", { className: "ytx-note" });
    const check = () => { status.textContent = chapterOk(chapterLines(marksFor(id))) ? t("ch_ok") : t("ch_rule"); };
    const render = () => {
      const marks = marksFor(id).sort((a, b) => a.t - b.t);
      list.replaceChildren(...marks.map((m, i) => {
        const time = el("input", { type: "text", className: "ytx-time", value: ytx.formatTime(m.t), inputMode: "numeric" });
        time.addEventListener("change", () => { const v = ytx.parseDuration(time.value); if (Number.isFinite(v)) m.t = v; saveDrafts(); render(); });
        const name = el("input", { type: "text", value: m.title, placeholder: t("ch_name") });
        name.addEventListener("input", () => { m.title = name.value; saveDrafts(); check(); });
        return el("div", { className: "ytx-frow" }, [time, name, btn("×", () => { marks.splice(i, 1); saveDrafts(); render(); })]);
      }));
      check();
    };
    panel.append(
      el("div", { className: "ytx-note", textContent: t("ch_title") }),
      list,
      el("div", { className: "ytx-row" }, [
        btn(t("ch_add"), () => { marksFor(id).push({ t: Math.floor(ctx.video?.currentTime ?? 0), title: "" }); saveDrafts(); render(); }, "ytx-reset"),
        btn(t("ch_seed"), () => { const found = seedFromComments(); if (!found.length) { ytx.hud(t("ch_noSeed")); return; } state.drafts[id] = found; saveDrafts(); render(); }, "ytx-reset"),
        btn(t("ch_copy"), () => navigator.clipboard.writeText(chapterLines(marksFor(id)).map((l) => `${ytx.formatTime(l.t)} ${l.title || t("ch_name")}`).join("\n")).then(() => ytx.hud(t("h_copied_chapters"))), "ytx-reset"),
        btn(t("ch_clear"), () => { state.drafts[id] = []; saveDrafts(); render(); }, "ytx-reset"),
      ]),
      status,
    );
    panel.addEventListener("keydown", (e) => e.stopPropagation());
    render();
    return panel;
  };
  ytx.actions.chapters = () => {
    const existing = document.querySelector(".ytx-chapters");
    if (existing) { existing.remove(); return; }
    if (ytx.ctx.videoId) mountBelow(buildChapters(ytx.ctx));
  };

  const TRIAGE = ["all", "questions", "timestamps", "members", "unanswered"];
  const classify = (thread) => ({
    questions: /\?/.test(thread.querySelector("#content-text")?.textContent ?? ""),
    timestamps: Boolean(thread.querySelector("#content-text a[href*='t=']")),
    members: [...thread.querySelectorAll("#sponsor-comment-badge, ytd-sponsor-comment-badge-renderer")].some((b) => b.childElementCount && getComputedStyle(b).display !== "none"),
    unanswered: !thread.querySelector("#creator-thumbnail:not([hidden]), .creator-thumbnail, ytd-comment-view-model[author-is-channel-owner], ytd-comment-renderer[author-is-channel-owner]"),
  });
  const applyTriage = () => { for (const thread of document.querySelectorAll("ytd-comment-thread-renderer")) thread.classList.toggle("ytx-triage-out", state.triage !== "all" && !classify(thread)[state.triage]); };
  const triage = () => {
    const header = document.querySelector("ytd-comments-header-renderer");
    if (!header || header.querySelector(".ytx-chips")) return;
    const chips = el("div", { className: "ytx-chips" });
    for (const id of TRIAGE) {
      const b = btn(t("tr_" + id), () => { state.triage = id; for (const c of chips.children) c.setAttribute("aria-pressed", String(c === b)); applyTriage(); }, "ytx-chip");
      b.setAttribute("aria-pressed", String(id === state.triage));
      chips.append(b);
    }
    const title = header.querySelector("#title");
    title ? title.after(chips) : header.append(chips);
  };
  const untriage = () => { document.querySelector(".ytx-chips")?.remove(); state.triage = "all"; for (const el of document.querySelectorAll(".ytx-triage-out")) el.classList.remove("ytx-triage-out"); };

  const replies = (ctx) => {
    const lines = String(ctx.settings.savedReplies ?? "").split("\n").map((l) => l.trim()).filter(Boolean);
    for (const box of document.querySelectorAll("ytd-commentbox")) {
      const buttons = box.querySelector("#footer #buttons, #buttons");
      if (!buttons || buttons.querySelector(".ytx-replies")) continue;
      const select = el("select", { className: "ytx-replies" }, [el("option", { value: "", textContent: t("sr_pick") }), ...lines.map((l) => el("option", { value: l, textContent: l.length > 40 ? l.slice(0, 40) + "…" : l }))]);
      select.addEventListener("change", () => {
        const root = box.querySelector("#contenteditable-root");
        if (root && select.value) { root.focus(); document.execCommand("insertText", false, select.value); }
        select.value = "";
      });
      select.addEventListener("click", (e) => e.stopPropagation());
      buttons.prepend(select);
    }
  };

  const channelKey = () => location.pathname.match(/^\/(@[^/]+|channel\/[^/]+)/)?.[1]?.toLowerCase() ?? null;
  const readHeader = () => {
    const text = document.querySelector("yt-page-header-renderer, ytd-c4-tabbed-header-renderer, #channel-header")?.textContent ?? "";
    const subs = text.match(/([\d.,]+\s*[KMB]?)\s*subscribers/i)?.[1];
    const videos = text.match(/([\d.,]+\s*[KMB]?)\s*videos/i)?.[1];
    const name = document.querySelector("yt-page-header-renderer h1, ytd-c4-tabbed-header-renderer #channel-name #text, #channel-name")?.textContent.trim() ?? "";
    return subs ? { name, subs: ytx.parseCount(subs), videos: videos ? ytx.parseCount(videos) : NaN } : null;
  };
  const csv = () => ["channel,name,date,subscribers,videos", ...Object.entries(state.snapshots).flatMap(([k, s]) => (s.history ?? []).map((x) => [k, JSON.stringify(s.name ?? ""), new Date(x.at).toISOString(), x.subs, x.videos].join(",")))].join("\n");
  const tracker = async (ctx) => {
    document.querySelector(".ytx-track")?.remove();
    const key = channelKey();
    if (!ctx.settings.enabled || !ctx.settings.channelTracker || ctx.mobile || !key) return;
    if (!await ytx.retry(() => readHeader(), 12, 400) || channelKey() !== key) return;
    const now = readHeader();
    const host = document.querySelector("yt-page-header-renderer yt-content-metadata-view-model, yt-page-header-renderer .page-header-view-model-wiz__page-header-headline-info, ytd-c4-tabbed-header-renderer #meta, #channel-header");
    if (!host) return;
    const line = el("div", { className: "ytx-track" });
    const list = ytx.listOf(ctx.settings.trackedChannels);
    if (!list.length || !(ytx.matchList(key, list) || ytx.matchList(now.name, list))) {
      line.append(btn(t("tk_track"), () => ytx.save({ trackedChannels: [...String(ctx.settings.trackedChannels ?? "").split("\n").map((l) => l.trim()).filter(Boolean), key].join("\n") })));
      host.append(line);
      return;
    }
    const entry = (state.snapshots[key] ??= { name: now.name, history: [] });
    entry.name = now.name;
    const today = new Date().toDateString();
    const last = entry.history.at(-1);
    if (last && new Date(last.at).toDateString() === today) Object.assign(last, { at: Date.now(), subs: now.subs, videos: now.videos });
    else entry.history.push({ at: Date.now(), subs: now.subs, videos: now.videos });
    entry.history = entry.history.slice(-60);
    browser.storage.local.set({ channelSnapshots: state.snapshots });
    const base = entry.history.at(-2);
    const delta = (a, b) => (Number.isFinite(a) && Number.isFinite(b) ? `${a - b >= 0 ? "+" : ""}${(a - b).toLocaleString()}` : "–");
    const text = base ? `${t("tk_since")} ${new Date(base.at).toLocaleDateString(undefined, { dateStyle: "medium" })}: ${delta(now.subs, base.subs)} ${t("tk_subs")}, ${delta(now.videos, base.videos)} ${t("tk_videos")}` : t("tk_first");
    line.append(el("span", { textContent: text }), btn(t("tk_export"), () => download("channels.csv", csv(), "text/csv")));
    host.append(line);
  };

  const placeCard = (grid, src, title, channel) => {
    document.querySelector(".ytx-test-card")?.remove();
    const card = el("div", { className: "ytx-test-card" + (location.pathname === "/results" ? " ytx-list" : "") }, [
      el("img", { src, alt: "" }),
      el("div", { className: "ytx-test-meta" }, [el("div", { className: "ytx-test-avatar" }), el("div", {}, [el("div", { className: "ytx-test-title", textContent: title || t("tt_name") }), el("div", { className: "ytx-test-sub", textContent: `${channel || t("tt_channel")} · 12K views · 1 hour ago` })])]),
    ]);
    const first = grid.querySelector("ytd-rich-item-renderer, ytd-video-renderer");
    first ? first.after(card) : grid.prepend(card);
  };
  const thumbTest = (ctx) => {
    const on = ctx.settings.enabled && ctx.settings.thumbTest && !ctx.mobile && (location.pathname === "/" || location.pathname === "/results");
    if (!on) { document.querySelector(".ytx-test")?.remove(); document.querySelector(".ytx-test-card")?.remove(); return; }
    if (document.querySelector(".ytx-test")) return;
    const grid = document.querySelector("ytd-rich-grid-renderer > #contents, ytd-section-list-renderer > #contents");
    if (!grid) return;
    const file = el("input", { type: "file", accept: "image/*" });
    const name = el("input", { type: "text", placeholder: t("tt_name"), value: state.testTitle });
    const channel = el("input", { type: "text", placeholder: t("tt_channel"), value: state.testChannel });
    const panel = el("div", { className: "ytx-test" }, [
      el("span", { textContent: t("tt_title") }), file, name, channel,
      btn(t("tt_place"), () => { const f = file.files?.[0]; if (!f) { file.click(); return; } state.testTitle = name.value; state.testChannel = channel.value; placeCard(grid, URL.createObjectURL(f), name.value, channel.value); }, "ytx-reset"),
      btn(t("tt_remove"), () => document.querySelector(".ytx-test-card")?.remove(), "ytx-reset"),
    ]);
    panel.addEventListener("keydown", (e) => e.stopPropagation());
    grid.before(panel);
  };

  ytx.register({
    id: "creator",
    apply(ctx, reason) {
      const s = ctx.settings;
      if (location.pathname.startsWith("/live_chat")) return;
      if (reason === "nav") { document.querySelector(".ytx-chapters")?.remove(); state.factsFor = null; }
      if (reason === "video" || reason === "boot" || (reason === "settings" && ctx.changed.has("factsPanel"))) facts(ctx);
      if (reason === "video" || reason === "boot" || (reason === "settings" && ctx.changed.has("velocityBadge"))) velocity(ctx);
      if (reason === "video" || (reason === "settings" && ctx.changed.has("adBreakMarks"))) adMarks(ctx);
      if (reason === "boot" || reason === "nav" || (reason === "settings" && (ctx.changed.has("channelTracker") || ctx.changed.has("trackedChannels")))) tracker(ctx);
      if (!document.body) return;
      const triageOn = s.enabled && s.commentTriage && !ctx.mobile;
      ytx.scanner.set("triage", triageOn ? () => { triage(); applyTriage(); } : null);
      if (!triageOn) untriage();
      const repliesOn = s.enabled && !ctx.mobile && ytx.listOf(s.savedReplies).length > 0;
      if (!repliesOn || ctx.changed.has("savedReplies")) for (const el of document.querySelectorAll(".ytx-replies")) el.remove();
      ytx.scanner.set("replies", repliesOn ? () => replies(ctx) : null);
      ytx.scanner.set("thumbtest", s.enabled && s.thumbTest && !ctx.mobile ? () => thumbTest(ctx) : null);
      if (!(s.enabled && s.thumbTest)) { document.querySelector(".ytx-test")?.remove(); document.querySelector(".ytx-test-card")?.remove(); }
    },
  });
})();
