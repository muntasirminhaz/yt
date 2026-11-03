(() => {
  const ytx = globalThis.ytx;
  const EMAIL = /[\w.+-]+@[\w-]+\.[\w.-]+/g;
  const state = { doneFor: null };

  const visible = (el) => el && (el.offsetParent !== null || el.getClientRects().length > 0);
  const waitFor = (selector, tries = 10) => new Promise((resolve) => {
    const tick = (n) => {
      const el = [...document.querySelectorAll(selector)].find(visible);
      if (el || n <= 0) return resolve(el ?? null);
      setTimeout(() => tick(n - 1), 400);
    };
    tick(tries);
  });

  const expandDescription = async () => {
    const button = await waitFor("#description-inline-expander #expand, ytd-text-inline-expander #expand");
    if (button) button.click();
  };
  const openTranscript = async () => {
    const button = await waitFor("ytd-video-description-transcript-section-renderer button, button[aria-label='Show transcript']");
    if (button && !document.querySelector("ytd-engagement-panel-section-list-renderer[target-id='engagement-panel-searchable-transcript'][visibility='ENGAGEMENT_PANEL_VISIBILITY_EXPANDED']")) button.click();
  };
  const openAsk = async () => {
    const button = await waitFor("ytd-watch-metadata button[aria-label^='Ask'], #actions button[aria-label^='Ask']");
    if (button) button.click();
  };

  const addEmailCopy = async () => {
    const root = await waitFor("#description-inline-expander, ytd-text-inline-expander");
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const hits = [];
    for (let node = walker.nextNode(); node; node = walker.nextNode()) if (EMAIL.test(node.nodeValue) && !node.parentElement.closest(".ytx-email")) hits.push(node);
    for (const node of hits) {
      const span = document.createElement("span");
      span.className = "ytx-email";
      let last = 0;
      for (const m of node.nodeValue.matchAll(EMAIL)) {
        span.append(node.nodeValue.slice(last, m.index), m[0]);
        const copy = Object.assign(document.createElement("button"), { type: "button", className: "ytx-copy", textContent: browser.i18n.getMessage("f_copy") });
        copy.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); navigator.clipboard.writeText(m[0]).then(() => ytx.hud(browser.i18n.getMessage("h_copied"))); });
        span.append(copy);
        last = m.index + m[0].length;
      }
      span.append(node.nodeValue.slice(last));
      node.replaceWith(span);
    }
  };

  const onClick = (ctx, e) => {
    if (!ctx.settings.enabled || !ctx.settings.linksNewTab || e.metaKey || e.ctrlKey) return;
    const a = e.target.closest?.("ytd-watch-metadata a[href], #description a[href], ytd-text-inline-expander a[href], ytd-comments a[href^='http'], ytd-comments a[href^='/@']");
    if (!a) return;
    const url = new URL(a.href, location.href);
    const sameVideo = url.pathname === "/watch" && url.searchParams.get("v") === new URLSearchParams(location.search).get("v");
    if (sameVideo || url.hash) return;
    e.preventDefault();
    e.stopPropagation();
    window.open(url.href, "_blank", "noopener");
  };

  const TRACKING = ["si", "pp", "feature", "embeds_referring_euri", "source_ve_path", "ab_channel"];
  const strip = () => {
    const u = new URL(location.href);
    let changed = false;
    for (const k of TRACKING) if (u.searchParams.has(k)) { u.searchParams.delete(k); changed = true; }
    if (changed) history.replaceState(history.state, "", u.toString());
  };

  const dismissContinue = () => {
    const dialog = [...document.querySelectorAll("yt-confirm-dialog-renderer, tp-yt-paper-dialog")].find((d) => /continue watching|still watching/i.test(d.textContent) && d.offsetParent !== null);
    dialog?.querySelector("#confirm-button, button")?.click();
  };
  const sortComments = async () => {
    const trigger = await waitFor("#sort-menu yt-sort-filter-sub-menu-renderer, #sort-menu tp-yt-paper-button, #sort-menu");
    if (!trigger) return;
    trigger.querySelector("tp-yt-paper-button, button, #icon-label")?.click();
    await new Promise((r) => setTimeout(r, 300));
    const items = document.querySelectorAll("#sort-menu tp-yt-paper-listbox a, #sort-menu tp-yt-paper-listbox tp-yt-paper-item, ytd-menu-popup-renderer tp-yt-paper-listbox a");
    const newest = [...items].find((i) => /newest/i.test(i.textContent));
    if (newest) newest.click(); else document.body.click();
  };

  ytx.register({
    id: "page",
    apply(ctx, reason) {
      if (document.body) ytx.scanner.set("continue", ctx.settings.enabled && ctx.settings.dismissContinue ? dismissContinue : null);
      if (ctx.settings.enabled && !ctx.mobile && ctx.watch && ctx.settings.commentsSort === "newest" && (reason === "video" || reason === "boot") && state.sortedFor !== location.href) { state.sortedFor = location.href; setTimeout(sortComments, 2500); }
      if (ctx.settings.enabled && ctx.settings.stripTracking && (reason === "boot" || reason === "nav")) strip();
      if (reason === "boot") document.addEventListener("click", (e) => onClick(ctx, e), true);
      const s = ctx.settings;
      const KEYS = ["autoDescription", "autoTranscript", "autoAsk", "emailCopy"];
      if (reason === "settings" && KEYS.some((k) => ctx.changed.has(k))) state.doneFor = null;
      if (!s.enabled || ctx.mobile || !ctx.watch || !ctx.video || state.doneFor === location.href) return;
      if (reason !== "video" && reason !== "boot" && reason !== "settings") return;
      state.doneFor = location.href;
      (async () => {
        if (s.autoDescription || s.autoTranscript) await expandDescription();
        if (s.autoTranscript) await openTranscript();
        if (s.autoAsk) await openAsk();
        if (s.emailCopy) await addEmailCopy();
      })().catch((err) => console.warn("[ytx] page", err));
    },
  });
})();
