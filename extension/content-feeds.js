(() => {
  const ytx = globalThis.ytx;
  const TARGETS = { subscriptions: "/feed/subscriptions", watchlater: "/playlist?list=WL", history: "/feed/history" };
  const CARDS = "ytd-rich-item-renderer, ytd-video-renderer, ytd-compact-video-renderer, ytd-grid-video-renderer, ytd-playlist-video-renderer, ytd-reel-item-renderer, yt-lockup-view-model, ytm-rich-item-renderer, ytm-video-with-context-renderer, ytm-compact-video-renderer";
  const NAME = "ytd-channel-name #text, ytd-channel-name a, #channel-name, .ytd-channel-name, yt-content-metadata-view-model .yt-content-metadata-view-model__metadata-row:first-child span, .ytm-badge-and-byline-renderer, ytm-channel-name";
  const TITLE = "#video-title, h3 a, .yt-lockup-metadata-view-model__title, .media-item-headline, .compact-media-item-headline";
  const DURATION = ".ytd-thumbnail-overlay-time-status-renderer #text, ytd-thumbnail-overlay-time-status-renderer, badge-shape .yt-badge-shape__text, .yt-thumbnail-overlay-badge-view-model, .ytm-thumbnail-overlay-time-status-renderer";
  const COMMENTS = "ytd-comment-thread-renderer, ytd-comment-view-model, ytm-comment-thread-renderer";
  let lists = { channels: [], keywords: [], comments: [] };
  let opts = { shorter: 0, longer: 0, caps: false, frames: false };

  const scan = () => {
    for (const card of document.querySelectorAll(CARDS)) {
      const name = card.querySelector(NAME)?.textContent ?? "";
      const titleEl = card.querySelector(TITLE);
      const title = titleEl?.textContent ?? "";
      const handle = card.querySelector("a[href^='/@']")?.getAttribute("href")?.slice(1) ?? "";
      let blocked = (lists.channels.length && (ytx.matchList(name, lists.channels) || ytx.matchList(handle, lists.channels))) || (lists.keywords.length && ytx.matchList(title, lists.keywords));
      if (!blocked && (opts.shorter || opts.longer)) {
        const seconds = ytx.parseDuration(card.querySelector(DURATION)?.textContent);
        if (Number.isFinite(seconds) && ((opts.shorter && seconds < opts.shorter * 60) || (opts.longer && seconds > opts.longer * 60))) blocked = true;
      }
      card.classList.toggle("ytx-blocked", Boolean(blocked));
      if (opts.caps && titleEl && !titleEl.dataset.ytxCaps && ytx.mostlyCaps(title)) { titleEl.dataset.ytxCaps = "1"; titleEl.textContent = ytx.titleCase(title.trim()); if (titleEl.title) titleEl.title = titleEl.textContent; }
      if (opts.frames) {
        const id = ytx.videoIdFrom(card.querySelector("a[href*='watch?v='], a[href^='/shorts/']")?.href ?? "");
        const img = card.querySelector("ytd-thumbnail img, yt-thumbnail-view-model img, .media-item-thumbnail-container img");
        if (id && img && img.dataset.ytxFrame !== id) { img.dataset.ytxFrame = id; img.src = `https://i.ytimg.com/vi/${id}/hq2.jpg`; img.removeAttribute("srcset"); }
      }
    }
    if (lists.comments.length) for (const c of document.querySelectorAll(COMMENTS)) c.classList.toggle("ytx-blocked", ytx.matchList(c.querySelector("#content-text, .comment-text")?.textContent ?? "", lists.comments));
  };

  const PREVIEW_VIDEO = "ytd-video-preview video, #video-preview video, #inline-preview-player video";
  let previews = "allow";
  let previewStart = 0;
  const holdPreview = (v, type) => {
    if (previews === "off" && !v.paused) v.pause();
    else if (previews === "muted" && !v.muted) v.muted = true;
    else if (previews === "sound") {
      if (type === "play" || type === "playing") previewStart = performance.now();
      if (v.muted && performance.now() - previewStart < 3000) ytx.call("previewSound").then((r) => ytx.log("preview sound", r));
    }
  };
  const onPreviewMedia = (e) => { if (previews !== "allow" && e.target.matches?.(PREVIEW_VIDEO)) holdPreview(e.target, e.type); };

  ytx.register({
    id: "feeds",
    apply(ctx, reason) {
      const s = ctx.settings;
      previews = s.enabled ? s.feedPreviews : "allow";
      document.documentElement.classList.toggle("ytx-previews-off", previews === "off");
      document.documentElement.classList.toggle("ytx-previewcaptionsoff", s.enabled && s.previewCaptionsOff);
      if (reason === "boot") for (const type of ["play", "playing", "volumechange"]) document.addEventListener(type, onPreviewMedia, true);
      if (previews !== "allow") for (const v of document.querySelectorAll(PREVIEW_VIDEO)) holdPreview(v, "settings");
      if (s.enabled && s.homeRedirect !== "none" && location.pathname === "/" && (reason === "boot" || reason === "nav")) { location.replace(TARGETS[s.homeRedirect]); return; }
      lists = { channels: s.enabled ? ytx.listOf(s.blockedChannels) : [], keywords: s.enabled ? ytx.listOf(s.blockedKeywords) : [], comments: s.enabled ? ytx.listOf(s.blockedCommentWords) : [] };
      opts = { shorter: s.enabled ? s.hideShorterThan : 0, longer: s.enabled ? s.hideLongerThan : 0, caps: s.enabled && s.fixCaps, frames: s.enabled && s.thumbFrames && !ctx.mobile };
      const active = lists.channels.length || lists.keywords.length || lists.comments.length || opts.shorter || opts.longer || opts.caps || opts.frames;
      if (document.body) ytx.scanner.set("blocked", active ? scan : null);
      if (!active) for (const card of document.querySelectorAll(".ytx-blocked")) card.classList.remove("ytx-blocked");
    },
  });
})();
