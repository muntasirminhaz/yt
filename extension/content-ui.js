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
    guest: ["M2 13h3M19 13h3", "M11 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "M19 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "M11 13h2", "M5 10l2-5h10l2 5"],
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
    more: ["M5 12h.01M12 12h.01M19 12h.01"],
  };
  const TOGGLES = ["audio", "guest", "loop", "loopAB", "cinema", "flip", "filters", "cards", "miniPlayer", "reversePlaylist"];

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
  const button = (id, label, onClick) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ytx-btn";
    b.dataset.action = id;
    b.title = label;
    b.setAttribute("aria-label", label);
    b.append(glyph(id));
    b.addEventListener("click", (e) => { e.stopPropagation(); onClick(e); });
    return b;
  };

  const ui = { bar: null, menu: null, panel: null, ab: null };
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
    const clear = Object.assign(document.createElement("button"), { type: "button", className: "ytx-reset", textContent: t("ab_clear") });
    clear.addEventListener("click", () => { inputs.a.value = inputs.b.value = ""; ytx.actions.setAB({}); refresh(); });
    panel.append(clear);
    function commit() { ytx.actions.setAB({ a: parseTime(inputs.a.value), b: parseTime(inputs.b.value) }); refresh(); }
    return panel;
  };
  const toggleAB = (ctx, force) => { ui.ab.hidden = force === undefined ? !ui.ab.hidden : !force; if (!ui.ab.hidden) { ui.menu.hidden = true; ui.panel.hidden = true; } };
  const run = async (id) => { await ytx.actions[id]?.(); refresh(); };
  const refresh = () => {
    const st = ytx.feature("player")?.state(ytx.ctx) ?? {};
    for (const b of document.querySelectorAll(".ytx-btn[data-action], .ytx-item[data-action]")) {
      const id = b.dataset.action;
      if (TOGGLES.includes(id)) b.setAttribute("aria-pressed", String(Boolean(st[id])));
    }
  };

  const buildMenu = (ctx) => {
    const menu = document.createElement("div");
    menu.className = "ytx-menu";
    menu.hidden = true;
    for (const id of ytx.ACTIONS) {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "ytx-item";
      item.dataset.action = id;
      const combo = ctx.settings.shortcuts?.[id];
      item.append(glyph(id), Object.assign(document.createElement("span"), { textContent: t("a_" + id) }), Object.assign(document.createElement("kbd"), { textContent: combo ? ytx.comboLabel(combo) : "" }));
      item.addEventListener("click", (e) => { e.stopPropagation(); if (id === "filters") togglePanel(ctx, true); else if (id === "loopAB") toggleAB(ctx, true); else { run(id); closeAll(); } });
      menu.append(item);
    }
    return menu;
  };

  const buildPanel = (ctx) => {
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
    reset.addEventListener("click", () => { ytx.actions.resetFilters(); syncPanel(ytx.ctx); });
    panel.append(reset);
    return panel;
  };
  const syncPanel = (ctx) => { for (const input of ui.panel?.querySelectorAll("input") ?? []) input.value = ctx.settings.filters[input.dataset.filter]; };
  const togglePanel = (ctx, force) => { ui.panel.hidden = force === undefined ? !ui.panel.hidden : !force; if (!ui.panel.hidden) { ui.menu.hidden = true; syncPanel(ctx); } };
  const closeAll = () => { if (ui.menu) ui.menu.hidden = true; if (ui.panel) ui.panel.hidden = true; if (ui.ab) ui.ab.hidden = true; };

  const build = (ctx) => {
    const bar = document.createElement("div");
    bar.className = "ytx-bar";
    bar.setAttribute("role", "toolbar");
    for (const id of ctx.settings.controls) if (ytx.ACTIONS.includes(id)) bar.append(button(id, t("a_" + id), () => (id === "filters" ? togglePanel(ctx) : id === "loopAB" ? toggleAB(ctx) : run(id))));
    bar.append(button("more", t("a_more"), () => { ui.panel.hidden = true; ui.menu.hidden = !ui.menu.hidden; refresh(); }));
    ui.menu = buildMenu(ctx);
    ui.panel = buildPanel(ctx);
    ui.ab = buildAB(ctx);
    for (const el of [ui.menu, ui.panel, ui.ab]) el.addEventListener("click", (e) => e.stopPropagation());
    bar.append(ui.menu, ui.panel, ui.ab);
    return bar;
  };

  const mount = (ctx) => {
    const inPlayer = ctx.settings.controlsPlacement === "player" && !ctx.mobile;
    const host = inPlayer ? ctx.q("rightControls") : ctx.q("below");
    if (!host) return;
    if (ui.bar?.isConnected && ui.bar.dataset.sig === sig(ctx)) return;
    ytx.log("toolbar", { placement: ctx.settings.controlsPlacement, host: host.id || host.className, controls: ctx.settings.controls });
    ui.bar?.remove();
    ui.bar = build(ctx);
    ui.bar.dataset.sig = sig(ctx);
    ui.bar.classList.toggle("in-player", inPlayer);
    ctx.mobile ? host.after(ui.bar) : host.prepend(ui.bar);
  };
  const sig = (ctx) => ctx.settings.controlsPlacement + ":" + ctx.settings.controls.join(",") + ":" + JSON.stringify(ctx.settings.shortcuts ?? {});
  ytx.refreshUi = refresh;

  ytx.register({
    id: "ui",
    apply(ctx, reason) {
      if (reason === "boot") {
        document.addEventListener("click", closeAll);
        document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
      }
      if (!ctx.settings.enabled || !ctx.watch) { ui.bar?.remove(); ui.bar = null; return; }
      mount(ctx);
      refresh();
    },
  });
})();
