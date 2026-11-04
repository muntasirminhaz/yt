(() => {
  const ytx = globalThis.ytx;
  const html = document.documentElement;
  const HIDE = ytx.SCHEMA.flatMap((g) => g.rows).map((r) => r.key).filter((k) => k.startsWith("hide") && k !== "hideAiVideos");
  const CAP_DEFAULT = { fontSizeIncrement: 0, color: "#fff", background: "#080808", backgroundOpacity: 0.75, charEdgeStyle: 0 };
  const CAP_KEYS = ["enabled", "captionStyle", "captionSize", "captionColor", "captionBg", "captionBgOpacity", "captionEdge"];
  const capOptions = (s) => ({ fontSizeIncrement: s.captionSize, color: ytx.CAP_COLORS[s.captionColor] ?? "#fff", background: ytx.CAP_COLORS[s.captionBg] ?? "#080808", backgroundOpacity: s.captionBgOpacity, charEdgeStyle: ytx.CAP_EDGES[s.captionEdge] ?? 0 });
  const syncTheme = (ctx, want, reason) => {
    let tried = "";
    try { tried = sessionStorage.getItem("ytxTheme") ?? ""; } catch { /* storage blocked */ }
    if (reason !== "settings" && tried === want) return;
    try { sessionStorage.setItem("ytxTheme", want); } catch { /* storage blocked */ }
    ctx.call("theme", want).then((r) => {
      ytx.log("theme", want, r);
      if (r === null && want !== "device") html.toggleAttribute("dark", want === "dark");
    });
  };
  const VIEWS = /^\s*(?:[\d.,]+\s*[KMB]?\s*(?:views?|watching|waiting)?|[\d.,]+\s*[KMB]?)\s*$/i;
  const markViews = () => {
    for (const span of document.querySelectorAll("yt-content-metadata-view-model span:not(.ytx-views), #metadata-line span:not(.ytx-views), .ytm-badge-and-byline-item-byline:not(.ytx-views)")) {
      if (span.children.length <= 1 && VIEWS.test(span.textContent) && /\d/.test(span.textContent)) {
        span.classList.add("ytx-views");
        if (span.nextElementSibling?.textContent.trim() === "•") span.nextElementSibling.classList.add("ytx-views");
      }
    }
  };
  const watchViews = (on) => ytx.scanner.set("views", on ? markViews : null);

  const shortsToWatch = (href) => {
    const m = href.match(/\/shorts\/([\w-]+)/);
    return m ? `/watch?v=${m[1]}` : null;
  };

  ytx.register({
    id: "appearance",
    apply(ctx, reason) {
      const s = ctx.settings;
      if (reason === "settings" && ctx.changed.has("guestMode") && s.guestMode) { try { for (const key of Object.keys(localStorage)) if (!key.startsWith("ytx")) localStorage.removeItem(key); sessionStorage.clear(); } catch { /* storage blocked */ } }
      for (const key of [...HIDE, "fullTitles", "grayscale", "controlsAlwaysVisible"]) html.classList.toggle("ytx-" + key.toLowerCase(), s.enabled && Boolean(s[key]));
      if (document.body) watchViews(s.enabled && s.hideViews);
      try { localStorage.setItem("ytxBg", s.enabled && s.backgroundPlay ? "1" : "0"); } catch { /* storage blocked */ }
      const theme = s.enabled ? s.theme : "system";
      const want = theme === "system" ? "device" : theme === "light" ? "light" : "dark";
      const mismatch = want === "dark" ? !html.hasAttribute("dark") : want === "light" ? html.hasAttribute("dark") : false;
      if (reason === "settings" ? ctx.changed.has("theme") || ctx.changed.has("enabled") : mismatch) syncTheme(ctx, want, reason);
      else if (!mismatch) { try { sessionStorage.removeItem("ytxTheme"); } catch { /* storage blocked */ } }
      const capOn = s.enabled && s.captionStyle;
      html.dataset.ytxCap = capOn ? s.captionPosition : "";
      html.classList.toggle("ytx-capstyle", Boolean(capOn));
      const bg = ytx.CAP_COLORS[s.captionBg] ?? "#080808";
      html.style.setProperty("--ytx-cap-color", ytx.CAP_COLORS[s.captionColor] ?? "#fff");
      html.style.setProperty("--ytx-cap-bg", `rgb(from ${bg} r g b / ${s.captionBgOpacity})`);
      if (ctx.video && (reason === "settings" ? CAP_KEYS.some((k) => ctx.changed.has(k)) : capOn && reason !== "nav")) ctx.call("captionStyle", capOn ? capOptions(s) : CAP_DEFAULT).then((r) => ytx.log("caption style", r));
      html.classList.toggle("ytx-accent", theme === "accent");
      html.classList.toggle("ytx-amoled", theme === "amoled");
      html.style.setProperty("--ytx-accent", s.accent);
      if (s.enabled && s.gridColumns !== "auto") html.style.setProperty("--ytx-grid", String(s.gridColumns)); else html.style.removeProperty("--ytx-grid");
      let style = document.getElementById("ytx-custom");
      if (!style) { style = document.createElement("style"); style.id = "ytx-custom"; html.append(style); }
      style.textContent = s.enabled && s.customCssOn ? s.customCss : "";
      if (s.enabled && s.shortsAsVideos && (reason === "boot" || reason === "nav")) {
        const target = shortsToWatch(location.pathname);
        if (target) location.replace(target);
      }
      if (reason === "boot") document.addEventListener("click", (e) => {
        if (!ctx.settings.enabled || !ctx.settings.shortsAsVideos) return;
        const a = e.target.closest?.("a[href*='/shorts/']");
        const target = a && shortsToWatch(a.getAttribute("href"));
        if (target) { e.preventDefault(); e.stopPropagation(); location.assign(target); }
      }, true);
    },
  });
})();
