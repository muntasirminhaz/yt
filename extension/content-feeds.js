(() => {
  const ytx = globalThis.ytx;
  const TARGETS = { subscriptions: "/feed/subscriptions", watchlater: "/playlist?list=WL", history: "/feed/history" };
  const CARDS = "ytd-rich-item-renderer, ytd-video-renderer, ytd-compact-video-renderer, ytd-grid-video-renderer, ytd-playlist-video-renderer, ytd-reel-item-renderer, yt-lockup-view-model, ytm-rich-item-renderer, ytm-video-with-context-renderer, ytm-compact-video-renderer";
  const NAME = "ytd-channel-name #text, ytd-channel-name a, #channel-name, .ytd-channel-name, yt-content-metadata-view-model .yt-content-metadata-view-model__metadata-row:first-child span, .ytm-badge-and-byline-renderer, ytm-channel-name";
  const TITLE = "#video-title, h3 a, .yt-lockup-metadata-view-model__title, .media-item-headline, .compact-media-item-headline";
  let lists = { channels: [], keywords: [] };

  const scan = () => {
    for (const card of document.querySelectorAll(CARDS)) {
      const name = card.querySelector(NAME)?.textContent ?? "";
      const title = card.querySelector(TITLE)?.textContent ?? "";
      const handle = card.querySelector("a[href^='/@']")?.getAttribute("href")?.slice(1) ?? "";
      const blocked = (lists.channels.length && (ytx.matchList(name, lists.channels) || ytx.matchList(handle, lists.channels))) || (lists.keywords.length && ytx.matchList(title, lists.keywords));
      card.classList.toggle("ytx-blocked", Boolean(blocked));
    }
  };

  ytx.register({
    id: "feeds",
    apply(ctx, reason) {
      const s = ctx.settings;
      if (s.enabled && s.homeRedirect !== "none" && location.pathname === "/" && (reason === "boot" || reason === "nav")) { location.replace(TARGETS[s.homeRedirect]); return; }
      lists = { channels: s.enabled ? ytx.listOf(s.blockedChannels) : [], keywords: s.enabled ? ytx.listOf(s.blockedKeywords) : [] };
      const active = lists.channels.length || lists.keywords.length;
      if (document.body) ytx.scanner.set("blocked", active ? scan : null);
      if (!active) for (const card of document.querySelectorAll(".ytx-blocked")) card.classList.remove("ytx-blocked");
    },
  });
})();
