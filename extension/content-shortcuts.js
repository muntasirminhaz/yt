(() => {
  const ytx = globalThis.ytx;
  window.addEventListener("keydown", (e) => {
    const s = ytx.ctx.settings;
    if (!s.enabled || e.repeat || e.target.matches?.("input, textarea, select, [contenteditable='true'], [contenteditable='']")) return;
    const combo = ytx.comboOf(e);
    if (!combo) return;
    const id = Object.keys(s.shortcuts ?? {}).find((k) => s.shortcuts[k] === combo);
    if (!id || !ytx.actions[id]) return;
    e.preventDefault();
    e.stopPropagation();
    Promise.resolve(ytx.actions[id]()).then(() => ytx.refreshUi?.());
  }, true);
})();
