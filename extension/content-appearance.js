(() => {
  const ytx = globalThis.ytx;
  const html = document.documentElement;
  const HIDE = ytx.SCHEMA.flatMap((g) => g.rows).map((r) => r.key).filter((k) => k.startsWith("hide"));
  const state = { forcedDark: false };
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
      for (const key of HIDE) html.classList.toggle("ytx-" + key.toLowerCase(), s.enabled && s[key]);
      if (document.body) watchViews(s.enabled && s.hideViews);
      try { localStorage.setItem("ytxBg", s.enabled && s.backgroundPlay ? "1" : "0"); } catch { /* storage blocked */ }
      const theme = s.enabled ? s.theme : "system";
      const dark = ["dark", "amoled", "accent"].includes(theme) || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
      try { localStorage.setItem("ytxDark", dark ? "1" : "0"); } catch { /* storage blocked */ }
      if (dark) { html.setAttribute("dark", ""); state.forcedDark = true; }
      else if (state.forcedDark) { html.removeAttribute("dark"); state.forcedDark = false; }
      html.classList.toggle("ytx-accent", theme === "accent");
      html.classList.toggle("ytx-amoled", theme === "amoled");
      html.style.setProperty("--ytx-accent", s.accent);
      let style = document.getElementById("ytx-custom");
      if (!style) { style = document.createElement("style"); style.id = "ytx-custom"; html.append(style); }
      style.textContent = s.enabled && s.customCssOn ? s.customCss : "";
      if (s.enabled && s.shortsAsVideos && (reason === "boot" || reason === "nav")) {
        const target = shortsToWatch(location.pathname);
        if (target) location.replace(target);
      }
      if (reason === "boot") matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => this.apply(ctx, "settings"));
      if (reason === "boot") document.addEventListener("click", (e) => {
        if (!ctx.settings.enabled || !ctx.settings.shortsAsVideos) return;
        const a = e.target.closest?.("a[href*='/shorts/']");
        const target = a && shortsToWatch(a.getAttribute("href"));
        if (target) { e.preventDefault(); e.stopPropagation(); location.assign(target); }
      }, true);
    },
  });
})();
