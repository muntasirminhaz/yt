(() => {
  const ytx = globalThis.ytx;
  const state = { timer: 0, id: null, last: 0, nearEnd: false, nextAt: 0, commentsFor: null, captionsFor: null };
  const activeReel = () => ytx.ctx.video?.closest("ytd-reel-video-renderer") ?? document.querySelector("ytd-reel-video-renderer[is-active]");
  const isAd = (reel) => Boolean(reel && (reel.querySelector("ytd-ad-slot-renderer, [is-ad]") || [...reel.querySelectorAll("badge-shape, .badge-shape-wiz__text, [aria-label]")].some((n) => /^(sponsored|ad)$/i.test((n.getAttribute("aria-label") || n.textContent).trim()))));
  const panelOpen = () => Boolean(document.querySelector("ytd-engagement-panel-section-list-renderer[visibility='ENGAGEMENT_PANEL_VISIBILITY_EXPANDED'], ytd-reel-video-renderer[is-active] #anchored-panel:not([hidden])"));

  const advance = (ctx, why) => {
    state.nextAt = performance.now();
    state.nearEnd = false;
    const reel = activeReel();
    const next = reel?.nextElementSibling?.matches?.("ytd-reel-video-renderer") ? reel.nextElementSibling : null;
    const button = document.querySelector("#navigation-button-down button, button[aria-label='Next video']");
    ytx.log("shorts: next", why, button ? "button" : next ? "scroll" : "nothing to click");
    if (button) button.click();
    else next?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { if (activeReel() === reel && next) { ytx.log("shorts: scroll fallback"); next.scrollIntoView({ behavior: "smooth", block: "start" }); } }, 700);
  };

  const openComments = (ctx, reel) => {
    if (!ctx.settings.shortsComments || state.commentsFor === state.id) return;
    if (panelOpen()) { state.commentsFor = state.id; return; }
    const button = (reel ?? document).querySelector("#comments-button button, button[aria-label*='omment'], #comments-button");
    if (!button) { ytx.log("shorts: comments button not found"); return; }
    state.commentsFor = state.id;
    button.click();
    ytx.log("shorts: comments opened");
  };

  const captions = (ctx, tries = 0) => {
    if (!ctx.settings.shortsCaptions || (tries === 0 && state.captionsFor === state.id)) return;
    const id = state.id;
    state.captionsFor = id;
    setTimeout(() => ctx.call("captions", ctx.settings.captionsLang.trim()).then((r) => {
      ytx.log("shorts: captions", r);
      if (r !== true && tries < 3 && state.id === id) captions(ctx, tries + 1);
    }), tries ? 1000 : 400);
  };

  const tick = (ctx) => {
    const v = ctx.video;
    const id = ctx.videoId;
    const reel = activeReel();
    if (!v || !id) return;
    if (id !== state.id) {
      Object.assign(state, { id, nearEnd: false, last: 0 });
      ytx.log("shorts: reel", id, isAd(reel) ? "(ad)" : "");
      if (ctx.settings.shortsAutoNext) ctx.call("loop", false);
    }
    if (ctx.settings.adSkip && isAd(reel)) { if (performance.now() - state.nextAt > 1500) advance(ctx, "ad"); return; }
    openComments(ctx, reel);
    captions(ctx);
    if (!ctx.settings.shortsAutoNext) return;
    if (v.loop) v.loop = false;
    const left = v.duration - v.currentTime;
    if (Number.isFinite(left) && left < 0.35) state.nearEnd = true;
    const wrapped = state.nearEnd && v.currentTime < 0.5 && !v.paused && state.last >= v.duration - 0.6;
    const ended = v.ended || wrapped;
    state.last = v.currentTime;
    if (!ended || performance.now() - state.nextAt < 1500) return;
    if (panelOpen() && !ctx.settings.shortsComments) { ytx.log("shorts: panel open, waiting"); return; }
    advance(ctx, v.ended ? "ended" : "wrap");
  };

  ytx.register({
    id: "shorts",
    apply(ctx) {
      const on = ctx.settings.enabled && ctx.shorts && !ctx.mobile;
      if (on && !state.timer) { state.timer = setInterval(() => tick(ctx), 250); ytx.log("shorts: watching"); }
      if (!on && state.timer) { clearInterval(state.timer); Object.assign(state, { timer: 0, id: null, nearEnd: false, last: 0, commentsFor: null, captionsFor: null }); }
    },
  });
})();
