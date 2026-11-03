(() => {
  if (globalThis.browser?.runtime?.id) return;
  const player = () => (location.pathname.startsWith("/shorts/") && document.getElementById("shorts-player")) || document.getElementById("movie_player");
  let appReady = false;
  document.addEventListener("yt-navigate-finish", () => { appReady = true; });
  let bg = false;
  try { bg = localStorage.getItem("ytxBg") === "1"; } catch { /* storage blocked */ }
  if (bg) {
    for (const [owner, prop] of [[Document.prototype, "hidden"], [Document.prototype, "visibilityState"], [Document.prototype, "webkitHidden"], [Document.prototype, "webkitVisibilityState"]]) {
      try { Object.defineProperty(owner, prop, { configurable: true, get: () => (prop.endsWith("State") ? "visible" : false) }); } catch { /* read-only */ }
    }
    for (const type of ["visibilitychange", "webkitvisibilitychange", "pagehide", "blur"]) {
      document.addEventListener(type, (e) => e.stopImmediatePropagation(), true);
      window.addEventListener(type, (e) => e.stopImmediatePropagation(), true);
    }
  }
  const flags = { fps: false, avc: false };
  const blocked = (type) => (flags.avc && /vp0?9|av01/i.test(type)) || (flags.fps && /framerate=(4[89]|[5-9]\d)/i.test(type));
  const wrap = (owner, name) => {
    const orig = owner[name];
    owner[name] = function (type) { return blocked(String(type)) ? (name === "canPlayType" ? "" : false) : orig.call(this, type); };
  };
  if (globalThis.MediaSource) wrap(MediaSource, "isTypeSupported");
  wrap(HTMLMediaElement.prototype, "canPlayType");

  const quality = { desired: null, retries: 0 };
  const hook = (p) => {
    if (p.dataset.ytxHooked) return;
    p.dataset.ytxHooked = "1";
    p.addEventListener?.("onPlaybackQualityChange", (q) => {
      if (quality.desired && q !== quality.desired && quality.retries++ < 3) p.setPlaybackQualityRange?.(quality.desired, quality.desired);
    });
  };

  const api = {
    ping: () => "pong",
    codecs: (next) => Object.assign(flags, next),
    volume: (level) => { if (level != null) { player()?.unMute?.(); player()?.setVolume?.(level); } return player()?.getVolume?.(); },
    quality: () => player()?.getPlaybackQuality?.(),
    keepQuality: (level) => {
      const p = player();
      if (!p) return null;
      hook(p);
      quality.desired = level;
      quality.retries = 0;
      if (p.getPlaybackQuality?.() !== level) p.setPlaybackQualityRange?.(level, level);
      return p.getPlaybackQuality?.();
    },
    qualities: () => player()?.getAvailableQualityLevels?.() ?? [],
    state: () => player()?.getPlayerState?.(),
    stop: () => player()?.stopVideo?.(),
    loop: (on) => { player()?.setLoopVideo?.(Boolean(on)); return true; },
    videoData: () => { const d = player()?.getVideoData?.(); return d ? { id: d.video_id, title: d.title, author: d.author } : null; },
    captions: (lang) => {
      const p = player();
      if (!p?.loadModule) return null;
      try {
        const base = (code) => String(code ?? "").split("-")[0].toLowerCase();
        const shown = p.isSubtitlesOn?.() ? p.getOption?.("captions", "track") : null;
        if (shown && (!lang || base(shown.translationLanguage?.languageCode ?? shown.languageCode) === base(lang))) return true;
        p.loadModule("captions");
        const list = (p.getOption?.("captions", "tracklist", { includeAsr: true }) ?? []).sort((a, b) => (a.kind === "asr") - (b.kind === "asr"));
        if (!list.length) return "no tracks yet";
        const want = lang || navigator.language;
        const track = list.find((x) => x.languageCode === want) ?? list.find((x) => base(x.languageCode) === base(want)) ?? (lang ? null : list[0]);
        if (track) { p.setOption("captions", "track", track); return true; }
        const to = (p.getOption?.("captions", "translationLanguages") ?? []).find((x) => x.languageCode === lang);
        if (!to) return "no track for " + lang;
        p.setOption("captions", "track", { ...(list.find((x) => x.is_translateable) ?? list[0]), translationLanguage: to });
        return true;
      } catch (err) { return String(err); }
    },
    previewSound: () => { const p = document.getElementById("inline-preview-player"); if (typeof p?.unMute !== "function") return null; p.unMute(); p.syncVolume?.(); return !p.isMuted?.(); },
    theme: (mode) => {
      const app = document.querySelector("ytd-app");
      if (!app) return null;
      const go = () => app.dispatchEvent(new CustomEvent("yt-action", { detail: { actionName: "yt-signal-action-toggle-dark-theme-" + mode, optionalAction: false, args: [], returnValue: [] } }));
      if (appReady) { go(); return true; }
      document.addEventListener("yt-navigate-finish", go, { once: true });
      return "queued";
    },
    cue: () => { const p = player(); const id = p?.getVideoData?.().video_id; if (id) p.cueVideoById(id); return id ?? null; },
  };
  document.addEventListener("ytx:call", (e) => {
    const { id, method, args } = JSON.parse(e.detail);
    let result;
    try { result = api[method]?.(...args) ?? null; } catch (err) { result = { error: String(err) }; }
    document.dispatchEvent(new CustomEvent("ytx:reply", { detail: JSON.stringify({ id, result }) }));
  });
})();
