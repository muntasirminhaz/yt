(() => {
  const t = (key) => browser.i18n.getMessage(key) || "";
  const optionLabel = (row, value) => row.labels?.[value] || t((row.prefix ?? "o_") + value) || String(value);
  const el = (tag, props = {}, children = []) => {
    const node = Object.assign(document.createElement(tag), props);
    node.append(...children);
    return node;
  };
  const fire = (node) => node.dispatchEvent(new Event("change", { bubbles: true }));

  const segment = (row, value, options = row.options) => {
    const seg = el("div", { className: "seg", role: "radiogroup" });
    seg.dataset.value = String(value);
    const buttons = options.map((o) => el("button", { type: "button", role: "radio", textContent: optionLabel(row, o) }));
    const sync = () => buttons.forEach((b, i) => b.setAttribute("aria-checked", String(String(options[i]) === seg.dataset.value)));
    buttons.forEach((b, i) => b.addEventListener("click", () => { seg.dataset.value = String(options[i]); sync(); fire(seg); }));
    sync();
    seg.append(...buttons);
    seg.sync = (v) => { seg.dataset.value = String(v); sync(); };
    return seg;
  };

  const choice = (row, value) => {
    const box = el("div", { className: "choice" });
    box.dataset.value = String(value);
    const options = [...row.options, "__custom"];
    const chips = segment({ ...row, labels: { ...(row.labels ?? {}), __custom: t("o_custom") } }, value, options);
    const custom = el("input", { type: "number", min: row.custom.min, max: row.custom.max, step: row.custom.step, value: row.custom.from(value) });
    const isPreset = (v) => row.options.some((o) => String(o) === String(v));
    custom.hidden = isPreset(value);
    const set = (v) => { box.dataset.value = String(v); chips.sync(isPreset(v) ? v : "__custom"); fire(box); };
    chips.addEventListener("change", (e) => {
      e.stopPropagation();
      if (chips.dataset.value === "__custom") { custom.hidden = false; custom.focus(); return; }
      custom.hidden = true;
      set(typeof row.options[0] === "number" ? Number(chips.dataset.value) : chips.dataset.value);
    });
    custom.addEventListener("change", () => { if (custom.value !== "") { const v = row.custom.to(Number(custom.value)); custom.value = row.custom.from(v); set(v); } });
    box.append(chips, custom);
    return box;
  };

  const shortcuts = (row, value) => {
    const ytx = globalThis.ytx;
    const box = el("div", { className: "keys" });
    box.dataset.value = JSON.stringify(value);
    let current = { ...value };
    const commit = () => { box.dataset.value = JSON.stringify(current); fire(box); };
    for (const id of ytx.ACTIONS) {
      const key = el("button", { type: "button", className: "key", textContent: current[id] ? ytx.comboLabel(current[id]) : t("k_none") });
      key.classList.toggle("empty", !current[id]);
      key.addEventListener("click", () => {
        key.textContent = t("k_press");
        key.classList.add("recording");
        const done = () => { window.removeEventListener("keydown", onKey, true); key.classList.remove("recording"); key.textContent = current[id] ? ytx.comboLabel(current[id]) : t("k_none"); key.classList.toggle("empty", !current[id]); };
        const onKey = (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (e.key === "Escape") return done();
          if (e.key === "Backspace" || e.key === "Delete") { delete current[id]; commit(); return done(); }
          const combo = ytx.comboOf(e);
          if (!combo) return;
          for (const [other, c] of Object.entries(current)) if (c === combo && other !== id) { delete current[other]; box.querySelector(`[data-action="${other}"] .key`).replaceChildren(t("k_none")); }
          current[id] = combo;
          commit();
          done();
        };
        window.addEventListener("keydown", onKey, true);
      });
      const line = el("div", { className: "keyrow" }, [el("span", { textContent: t("a_" + id) }), key]);
      line.dataset.action = id;
      box.append(line);
    }
    return box;
  };

  const backup = () => {
    const ytx = globalThis.ytx;
    const box = el("div", { className: "backup" });
    const exportBtn = el("button", { type: "button", textContent: t("b_export") });
    exportBtn.addEventListener("click", async () => {
      const settings = await ytx.load();
      const a = el("a", { href: URL.createObjectURL(new Blob([JSON.stringify(settings, null, 2)], { type: "application/json" })), download: "yt-settings.json" });
      document.body.append(a);
      a.click();
      a.remove();
    });
    const file = el("input", { type: "file", accept: "application/json,.json", hidden: true });
    file.addEventListener("change", async () => {
      const text = await file.files[0]?.text();
      if (!text) return;
      try {
        const data = JSON.parse(text);
        const clean = Object.fromEntries(Object.entries(data).filter(([k]) => k in ytx.DEFAULTS));
        await browser.storage.local.set({ settings: clean });
        location.reload();
      } catch (err) { console.warn("[ytx] import", err); }
    });
    const importBtn = el("button", { type: "button", textContent: t("b_import") });
    importBtn.addEventListener("click", () => file.click());
    const resetBtn = el("button", { type: "button", className: "danger", textContent: t("b_reset") });
    resetBtn.addEventListener("click", async () => { await ytx.reset(); location.reload(); });
    box.append(exportBtn, importBtn, resetBtn, file);
    return box;
  };

  const control = (row, value) => {
    if (row.type === "shortcuts") return shortcuts(row, value);
    if (row.type === "link") { const b = el("button", { type: "button", className: "plain", textContent: t("b_" + row.key) }); b.addEventListener("click", () => { location.hash = "welcome"; }); return b; }
    if (row.type === "backup") return backup();
    if (row.type === "switch") {
      const input = el("input", { type: "checkbox", checked: value });
      input.setAttribute("switch", "");
      return input;
    }
    if (row.type === "select") return segment(row, value);
    if (row.type === "choice") return choice(row, value);
    if (row.type === "set") {
      return el("div", { className: "set" }, row.options.map((o) =>
        el("label", {}, [el("input", { type: "checkbox", value: o, checked: value.includes(o) }), el("span", { textContent: optionLabel(row, o) })])));
    }
    if (row.type === "textarea") return el("textarea", { value, rows: 6 });
    return el("input", { type: row.type, value, min: row.min ?? "", max: row.max ?? "", step: row.step ?? "", placeholder: row.placeholder ?? "", autocomplete: "off" });
  };

  const read = (row, node) => {
    if (row.type === "switch") return node.checked;
    if (row.type === "set") return [...node.querySelectorAll("input:checked")].map((i) => i.value);
    if (row.type === "select") return typeof row.options[0] === "number" ? Number(node.dataset.value) : node.dataset.value;
    if (row.type === "choice") return typeof row.options[0] === "number" ? Number(node.dataset.value) : node.dataset.value;
    if (row.type === "shortcuts") return JSON.parse(node.dataset.value);
    if (row.type === "number" || row.type === "range") return Number(node.value);
    return node.value;
  };

  const renderRow = (row, settings) => {
    const node = control(row, settings[row.key]);
    const stack = ["textarea", "set", "choice", "shortcuts", "backup"].includes(row.type) || (row.type === "select" && row.options.length > 2);
    const labelled = row.type === "switch" || row.type === "range" || row.type === "number" || row.type === "textarea" || row.type === "color";
    const text = el("span", { className: "text" }, [el("span", { className: "label", textContent: t(row.label ?? "s_" + row.key) }), ...(t("n_" + row.key) ? [el("span", { className: "note", textContent: t("n_" + row.key) })] : [])]);
    const container = el(labelled ? "label" : "div", { className: "row" + (stack ? " stack" : "") }, [text, node, ...(row.type === "range" ? [el("output", { textContent: settings[row.key] })] : [])]);
    container.dataset.key = row.key;
    if (row.parent) Object.assign(container.dataset, { parent: row.parent, when: row.when ?? "" });
    if (row.type === "range") node.addEventListener("input", () => (container.querySelector("output").textContent = node.value));
    if (row.type !== "backup" && row.type !== "link") container.addEventListener("change", () => {
      const value = read(row, node);
      if (row.origins && value === true && browser.permissions?.request) browser.permissions.request({ origins: row.origins }).catch(() => {});
      globalThis.ytx.save({ [row.key]: value });
    });
    return container;
  };

  const reveal = (root, settings) => {
    for (const label of root.querySelectorAll("[data-parent]")) {
      const parentValue = settings[label.dataset.parent];
      label.hidden = label.dataset.when ? String(parentValue) !== label.dataset.when : !parentValue;
    }
  };

  Object.assign(globalThis.ytx, { t, el, renderRow, reveal });
})();
