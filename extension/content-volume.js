(() => {
  const ytx = globalThis.ytx;
  ytx.register({
    id: "volume",
    apply(ctx, reason) {
      if (ctx.settings.enabled && ctx.video && reason === "video" && ctx.settings.volumeDefaultOn && !ctx.mobile) ctx.call("volume", ctx.settings.volumeDefault);
    },
  });
  ytx.actions.volumeBy = async (delta) => {
    const current = await ytx.ctx.call("volume");
    if (current == null) return;
    const next = Math.min(100, Math.max(0, current + delta));
    await ytx.ctx.call("volume", next);
    ytx.hud(`${next}%`);
  };
})();
