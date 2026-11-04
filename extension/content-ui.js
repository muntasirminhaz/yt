(() => {
  const ytx = globalThis.ytx;
  const t = (k) => browser.i18n.getMessage(k);
  const NS = "http://www.w3.org/2000/svg";
  const GAUGE = "M4 15a8 8 0 1 1 16 0";
  const GLYPHS = {
    speedDown: [GAUGE, "M12 15l-4-5", "M8 20h6"],
    speedUp: [GAUGE, "M12 15l4-5", "M8 20h6M11 17v6"],
    speedReset: [GAUGE, "M12 15V8", "M8 20h8"],
    audio: ["M9 18V6l12-2v12", "M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"],
    seekBack: ["M12 5a8 8 0 1 1-7 4", "M5 4v5h5", "M10 10v5l4-2.5z"],
    seekForward: ["M12 5a8 8 0 1 0 7 4", "M19 4v5h-5", "M10 10v5l4-2.5z"],
    frameBack: ["M18 5v14", "M14 12l-8-7v14z"],
    frameForward: ["M6 5v14", "M10 12l8-7v14z"],
    undoSkip: ["M9 14L4 9l5-5", "M4 9h10a6 6 0 0 1 0 12h-3"],
    sleepTimer: ["M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10z"],
    rotate: ["M4 12a8 8 0 1 0 3-6.2", "M4 4v5h5", "M9 9h6v6H9z"],
    fillCrop: ["M3 5h18v14H3z", "M8 9h8v6H8z", "M3 12h5M16 12h5"],
    loopAB: ["M4 17V7l5 5-5 5z", "M20 7v10l-5-5 5-5z", "M9 12h6"],
    chapterPrev: ["M6 5v14", "M18 5l-9 7 9 7z"],
    chapterNext: ["M18 5v14", "M6 5l9 7-9 7z"],
    copyLink: ["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.5 1.5", "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.5-1.5"],
    copyTranscript: ["M8 4h10a1 1 0 0 1 1 1v12", "M5 7h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z", "M8 12h5M8 16h5"],
    loop: ["M17 2l4 4-4 4", "M3 11V9a4 4 0 0 1 4-4h14", "M7 22l-4-4 4-4", "M21 13v2a4 4 0 0 1-4 4H3"],
    stop: ["M6 6h12v12H6z"],
    cinema: ["M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", "M4 9L3 5l15-3 1 4", "M8 8l2-4M13 7l2-4"],
    miniPlayer: ["M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", "M11 11h7v5h-7z"],
    pip: ["M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", "M12 11h7v5h-7z", "M12 11l7 5"],
    flip: ["M12 3v18", "M9 7H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4", "M15 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4"],
    filters: ["M4 6h9M17 6h3", "M4 12h2M10 12h10", "M4 18h11M19 18h1", "M15 4v4M8 10v4M17 16v4"],
    cards: ["M3 3l18 18", "M10.6 10.6a2 2 0 0 0 2.8 2.8", "M9.9 5.2A10 10 0 0 1 12 5c5 0 9 4 10 7a11 11 0 0 1-2.2 3.4", "M6.6 6.6A11 11 0 0 0 2 12c1 3 5 7 10 7a10 10 0 0 0 4.5-1"],
    screenshot: ["M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z", "M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"],
    reversePlaylist: ["M7 4v16M4 17l3 3 3-3", "M17 20V4M14 7l3-3 3 3"],
    settings: ["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"],
    setIntro: ["M4 12h10", "M10 8l4 4-4 4", "M18 5v14"],
    thumbnail: ["M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", "M3 15l5-4 4 3 4-5 5 5", "M8.5 9.5h.01"],
    saveTranscript: ["M12 4v11", "M8 11l4 4 4-4", "M5 19h14"],
    chapters: ["M4 6h16M4 12h10M4 18h13", "M18 10v4M16 12h4"],
    more: ["M5 12h.01M12 12h.01M19 12h.01"],
  };
  const TOGGLES = ["audio", "loop", "loopAB", "fillCrop", "sleepTimer", "cinema", "flip", "filters", "cards", "miniPlayer", "reversePlaylist"];

  const glyph = (id) => {
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    for (const d of GLYPHS[id]) {
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", d);
      svg.append(path);
    }
    return svg;
  };
  const button = (id, label, onClick, withLabel = false) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ytx-btn";
    b.dataset.action = id;
    b.title = label;
    b.setAttribute("aria-label", label);
    b.append(glyph(id));
    if (withLabel) b.append(Object.assign(document.createElement("span"), { className: "ytx-label", textContent: label }));
    b.addEventListener("click", (e) => { e.stopPropagation(); onClick(e); });
    return b;
  };

  const bars = [];
  let waiting = false;
  const parseTime = (text) => { const parts = String(text).trim().split(":").map(Number); return parts.some(Number.isNaN) ? NaN : parts.reduce((a, b) => a * 60 + b, 0); };
  const buildAB = (ctx) => {
    const panel = document.createElement("div");
    panel.className = "ytx-panel ytx-ab";
    panel.hidden = true;
    const inputs = {};
    for (const key of ["a", "b"]) {
      const row = document.createElement("label");
      row.className = "ytx-frow";
      const input = Object.assign(document.createElement("input"), { type: "text", placeholder: "0:00", inputMode: "numeric" });
      const now = Object.assign(document.createElement("button"), { type: "button", className: "ytx-reset ytx-now", textContent: t("ab_now") });
      now.addEventListener("click", () => { input.value = ytx.formatTime(ctx.video?.currentTime ?? 0); commit(); });
      input.addEventListener("change", commit);
      inputs[key] = input;
      row.append(Object.assign(document.createElement("span"), { textContent: t(key === "a" ? "ab_from" : "ab_to") }), input, now);
      panel.append(row);
    }
    if (ctx.settings.loopExtras) {
      const row = document.createElement("label");
      row.className = "ytx-frow";
      inputs.times = Object.assign(document.createElement("input"), { type: "number", min: 1, max: 999, placeholder: t("ab_forever"), inputMode: "numeric" });
      inputs.times.addEventListener("change", commit);
      row.append(Object.assign(document.createElement("span"), { textContent: t("ab_times") }), inputs.times);
      const copy = Object.assign(document.createElement("button"), { type: "button", className: "ytx-reset", textContent: t("ab_copy") });
      copy.addEventListener("click", () => ytx.actions.copyLoopLink?.());
      panel.append(row, copy);
    }
    const clear = Object.assign(document.createElement("button"), { type: "button", className: "ytx-reset", textContent: t("ab_clear") });
    clear.addEventListener("click", () => { for (const input of Object.values(inputs)) input.value = ""; ytx.actions.setAB({}); refresh(); });
    panel.append(clear);
    function commit() { ytx.actions.setAB({ a: parseTime(inputs.a.value), b: parseTime(inputs.b.value), times: Number(inputs.times?.value) || 0 }); refresh(); }
    return panel;
  };
  const run = async (id) => { await ytx.actions[id]?.(); refresh(); };
  const refresh = () => {
    const st = { ...(ytx.feature("player")?.state(ytx.ctx) ?? {}), ...(ytx.feature("speed")?.state(ytx.ctx) ?? {}) };
    for (const b of document.querySelectorAll(".ytx-btn[data-action], .ytx-item[data-action]")) {
      const id = b.dataset.action;
      if (TOGGLES.includes(id)) b.setAttribute("aria-pressed", String(Boolean(st[id])));
    }
  };
  const closeAll = () => { for (const bar of bars) for (const el of [bar.menu, bar.panel, bar.ab]) el.hidden = true; };
  const place = (bar, el) => {
    if (bar.classList.contains("in-player") || ytx.ctx.mobile) return;
    const side = ytx.ctx.settings.menuSide;
    const rect = bar.getBoundingClientRect();
    el.classList.toggle("ytx-up", side === "above" || (side === "auto" && rect.bottom + el.offsetHeight + 12 > innerHeight));
  };
  const toggle = (bar, el, ctx, force) => {
    const show = force ?? el.hidden;
    closeAll();
    if (!show) return;
    el.hidden = false;
    if (el === bar.panel) syncPanel(bar, ctx);
    if (el === bar.menu) refresh();
    place(bar, el);
  };

  const buildMenu = (ctx, bar) => {
    const menu = document.createElement("div");
    menu.className = "ytx-menu";
    menu.hidden = true;
    for (const id of ytx.actionsFor(ctx.settings)) {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "ytx-item";
      item.dataset.action = id;
      const combo = ctx.settings.shortcuts?.[id];
      item.append(glyph(id), Object.assign(document.createElement("span"), { textContent: t("a_" + id) }), Object.assign(document.createElement("kbd"), { textContent: combo ? ytx.comboLabel(combo) : "" }));
      item.addEventListener("click", (e) => { e.stopPropagation(); if (id === "filters") toggle(bar, bar.panel, ctx, true); else if (id === "loopAB") toggle(bar, bar.ab, ctx, true); else { run(id); closeAll(); } });
      menu.append(item);
    }
    return menu;
  };

  const buildPanel = (ctx, bar) => {
    const panel = document.createElement("div");
    panel.className = "ytx-panel";
    panel.hidden = true;
    const LIMITS = { brightness: [0, 200], contrast: [0, 200], saturate: [0, 300], grayscale: [0, 100], sepia: [0, 100], hue: [0, 360], invert: [0, 100], blur: [0, 20] };
    for (const [key, [min, max]] of Object.entries(LIMITS)) {
      const row = document.createElement("label");
      row.className = "ytx-frow";
      const input = Object.assign(document.createElement("input"), { type: "range", min, max, value: ctx.settings.filters[key] });
      input.dataset.filter = key;
      input.addEventListener("input", () => ytx.actions.setFilter({ key, value: Number(input.value) }));
      row.append(Object.assign(document.createElement("span"), { textContent: t("f_" + key) }), input);
      panel.append(row);
    }
    const reset = Object.assign(document.createElement("button"), { type: "button", className: "ytx-reset", textContent: t("f_reset") });
    reset.addEventListener("click", () => { ytx.actions.resetFilters(); syncPanel(bar, ytx.ctx); });
    panel.append(reset);
    return panel;
  };
  const syncPanel = (bar, ctx) => { for (const input of bar.panel.querySelectorAll("input")) input.value = ctx.settings.filters[input.dataset.filter]; };

  const build = (ctx, inPlayer, ids) => {
    const bar = document.createElement("div");
    bar.className = "ytx-bar" + (inPlayer ? " in-player" : "");
    bar.setAttribute("role", "toolbar");
    const labels = !inPlayer && ctx.settings.toolbarLabels;
    bar.menu = buildMenu(ctx, bar);
    bar.panel = buildPanel(ctx, bar);
    bar.ab = buildAB(ctx);
    const allowed = ytx.actionsFor(ctx.settings);
    for (const id of ids) if (allowed.includes(id)) bar.append(button(id, t("a_" + id), () => (id === "filters" ? toggle(bar, bar.panel, ctx) : id === "loopAB" ? toggle(bar, bar.ab, ctx) : run(id)), labels));
    bar.append(button("more", t("a_more"), () => toggle(bar, bar.menu, ctx), labels));
    for (const el of [bar.menu, bar.panel, bar.ab]) el.addEventListener("click", (e) => e.stopPropagation());
    bar.append(bar.menu, bar.panel, bar.ab);
    return bar;
  };

  const sig = (ctx) => [ctx.settings.controlsPlacement, ctx.settings.toolbarLabels, ctx.settings.controls.join(","), ctx.settings.controlsBelow.join(","), JSON.stringify(ctx.settings.shortcuts ?? {}), ctx.settings.loopExtras, ytx.actionsFor(ctx.settings).length].join(":");
  const unmount = () => { for (const bar of bars) bar.remove(); bars.length = 0; };
  const mount = (ctx) => {
    const placement = ctx.mobile ? "below" : ctx.settings.controlsPlacement;
    const wanted = placement === "both" ? [true, false] : [placement === "player"];
    const signature = sig(ctx);
    if (bars.length === wanted.length && bars.every((bar) => bar.isConnected && bar.dataset.sig === signature)) return;
    unmount();
    for (const inPlayer of wanted) {
      const host = inPlayer ? ctx.q("rightControls") : ctx.q("below");
      if (!host) continue;
      const bar = build(ctx, inPlayer, placement === "both" && !inPlayer ? ctx.settings.controlsBelow : ctx.settings.controls);
      bar.dataset.sig = signature;
      ctx.mobile ? host.after(bar) : host.prepend(bar);
      bars.push(bar);
    }
    ytx.log("toolbar", { placement, bars: bars.length });
  };
  ytx.refreshUi = refresh;

  ytx.register({
    id: "ui",
    apply(ctx, reason) {
      if (reason === "boot") {
        document.addEventListener("click", closeAll);
        document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
      }
      if (!ctx.settings.enabled || !ctx.watch) { unmount(); if (waiting) { waiting = false; ytx.scanner.set("toolbar", null); } return; }
      mount(ctx);
      const need = ctx.mobile || ctx.settings.controlsPlacement !== "both" ? 1 : 2;
      if (bars.length < need && !waiting && document.body) { waiting = true; ytx.scanner.set("toolbar", () => { mount(ctx); if (bars.length >= need) { waiting = false; ytx.scanner.set("toolbar", null); refresh(); } }); }
      refresh();
    },
  });
})();
