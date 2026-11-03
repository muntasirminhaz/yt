(() => {
  if (globalThis.__ytxWinfull) return;
  const state = { on: false, el: null };
  globalThis.__ytxWinfull = state;
  const announce = (el) => {
    for (const type of ["fullscreenchange", "webkitfullscreenchange"]) el.dispatchEvent(new Event(type, { bubbles: true, composed: true }));
    window.dispatchEvent(new Event("resize"));
    document.dispatchEvent(new CustomEvent("ytx:winfull"));
  };
  const set = (el) => {
    const was = state.el;
    state.el = el;
    was?.removeAttribute("data-ytx-winfull");
    el?.setAttribute("data-ytx-winfull", "");
    document.documentElement.classList.toggle("ytx-winfull", Boolean(el));
    setTimeout(() => announce(el ?? was ?? document), 0);
  };
  for (const name of ["requestFullscreen", "webkitRequestFullscreen"]) {
    const orig = Element.prototype[name];
    if (!orig) continue;
    Element.prototype[name] = function (...args) { if (!state.on) return orig.apply(this, args); set(this); return Promise.resolve(); };
  }
  for (const name of ["exitFullscreen", "webkitExitFullscreen", "webkitCancelFullScreen"]) {
    const orig = Document.prototype[name];
    if (!orig) continue;
    Document.prototype[name] = function (...args) { if (!state.el) return orig.apply(this, args); set(null); return Promise.resolve(); };
  }
  for (const name of ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement"]) {
    const desc = Object.getOwnPropertyDescriptor(Document.prototype, name);
    if (desc?.get) Object.defineProperty(Document.prototype, name, { ...desc, get() { return state.el ?? desc.get.call(this); } });
  }
  for (const name of ["fullscreen", "webkitIsFullScreen"]) {
    const desc = Object.getOwnPropertyDescriptor(Document.prototype, name);
    if (desc?.get) Object.defineProperty(Document.prototype, name, { ...desc, get() { return Boolean(state.el) || desc.get.call(this); } });
  }
  let escaping = false;
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && state.el) { escaping = true; e.preventDefault(); e.stopImmediatePropagation(); set(null); } }, true);
  document.addEventListener("keyup", (e) => { if (e.key === "Escape" && escaping) { escaping = false; e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  document.addEventListener("ytx:config", (e) => { state.on = Boolean(JSON.parse(e.detail).tabFullscreen); if (!state.on && state.el) set(null); });
})();
