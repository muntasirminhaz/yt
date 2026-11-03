(() => {
  if (globalThis.browser?.runtime?.id) return;
  const player = () => document.getElementById("movie_player");
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
    cue: () => { const p = player(); const id = p?.getVideoData?.().video_id; if (id) p.cueVideoById(id); return id ?? null; },
  };
  document.addEventListener("ytx:call", (e) => {
    const { id, method, args } = JSON.parse(e.detail);
    let result;
    try { result = api[method]?.(...args) ?? null; } catch (err) { result = { error: String(err) }; }
    document.dispatchEvent(new CustomEvent("ytx:reply", { detail: JSON.stringify({ id, result }) }));
  });
})();
