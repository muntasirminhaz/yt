(() => {
  const root = document.documentElement;
  if (root.dataset.ytx) return;
  root.dataset.ytx = "1";
  try { if (localStorage.getItem("ytxDark") === "1") root.setAttribute("dark", ""); } catch { /* storage blocked */ }
  const ytx = globalThis.ytx;
  const features = [];
  const mobile = location.hostname.startsWith("m.");
  const pending = new Map();
  let seq = 0;

  const SEL = {
    player: "#movie_player",
    video: "#movie_player video",
    rightControls: mobile ? ".player-controls-bottom" : ".ytp-right-controls",
    below: mobile ? "#player-container-id, #player" : "#below",
  };
  const q = (key, scope = document) => scope.querySelector(SEL[key]);

  const call = (method, ...args) => new Promise((resolve) => {
    const id = ++seq;
    pending.set(id, resolve);
    setTimeout(() => pending.delete(id) && resolve(undefined), 1000);
    document.dispatchEvent(new CustomEvent("ytx:call", { detail: JSON.stringify({ id, method, args }) }));
  });
  document.addEventListener("ytx:reply", (e) => {
    const { id, result } = JSON.parse(e.detail);
    pending.get(id)?.(result);
    pending.delete(id);
  });
  const ctx = { settings: ytx.DEFAULTS, mobile, video: null, changed: new Set(), call, q, SEL, get watch() { return location.pathname === "/watch"; } };
  const log = (...args) => { if (ctx.settings.debug) console.debug("[ytx]", ...args); };
  let hudTimer;
  ytx.hud = (text) => {
    const player = q("player");
    if (!player) return;
    let hud = player.querySelector(".ytx-hud");
    if (!hud) { hud = document.createElement("div"); hud.className = "ytx-hud"; player.append(hud); }
    hud.textContent = text;
    hud.classList.add("show");
    clearTimeout(hudTimer);
    hudTimer = setTimeout(() => hud.classList.remove("show"), 900);
  };
  const apply = (reason, video) => {
    ctx.video = video ?? q("video");
    log("apply", reason, { watch: ctx.watch, video: Boolean(ctx.video), changed: [...ctx.changed] });
    for (const f of features) try { f.apply(ctx, reason); } catch (err) { console.warn("[ytx]", f.id, err); }
    ctx.changed.clear();
  };

  let href = location.href;
  const onNavigate = () => {
    if (href === location.href) return;
    href = location.href;
    apply("nav");
  };
  document.addEventListener("yt-navigate-finish", onNavigate);
  window.addEventListener("popstate", onNavigate);
  new MutationObserver(onNavigate).observe(root, { childList: true, subtree: false });
  const titleObserver = new MutationObserver(onNavigate);
  const observeTitle = () => document.querySelector("title") && titleObserver.observe(document.querySelector("title"), { childList: true });
  document.addEventListener("loadedmetadata", (e) => {
    if (e.target.matches?.(SEL.video)) apply("video", e.target);
  }, true);

  ytx.register = (feature) => features.push(feature);
  ytx.actions = {};
  browser.runtime.onMessage.addListener((msg) => {
    if (msg.type === "action") return Promise.resolve(ytx.actions[msg.id]?.(msg.value) ?? null);
    if (msg.type === "state") return Promise.resolve(Object.fromEntries(features.map((f) => [f.id, f.state?.(ctx) ?? null])));
  });
  ytx.watch((settings) => {
    ctx.changed = new Set(Object.keys(settings).filter((k) => JSON.stringify(settings[k]) !== JSON.stringify(ctx.settings[k])));
    ctx.settings = settings;
    apply("settings");
  });
  ytx.load().then((settings) => {
    ctx.settings = settings;
    const boot = () => {
      observeTitle();
      call("ping").then((r) => (r === "pong" ? log("bridge ok") : console.warn("[ytx] page bridge unavailable; quality, volume and stop are off")));
      apply("boot");
    };
    document.body ? boot() : document.addEventListener("DOMContentLoaded", boot, { once: true });
  });
  Object.assign(ytx, { ctx, call, log, feature: (id) => features.find((f) => f.id === id) });
})();
