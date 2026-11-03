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

  const control = (row, value) => {
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
    return el("input", { type: row.type, value, min: row.min ?? "", max: row.max ?? "", step: row.step ?? "" });
  };

  const read = (row, node) => {
    if (row.type === "switch") return node.checked;
    if (row.type === "set") return [...node.querySelectorAll("input:checked")].map((i) => i.value);
    if (row.type === "select") return typeof row.options[0] === "number" ? Number(node.dataset.value) : node.dataset.value;
    if (row.type === "choice") return typeof row.options[0] === "number" ? Number(node.dataset.value) : node.dataset.value;
    if (row.type === "number" || row.type === "range") return Number(node.value);
    return node.value;
  };

  const renderRow = (row, settings) => {
    const node = control(row, settings[row.key]);
    const stack = row.type === "textarea" || row.type === "set" || row.type === "choice" || (row.type === "select" && row.options.length > 2);
    const labelled = row.type === "switch" || row.type === "range" || row.type === "number" || row.type === "textarea" || row.type === "color";
    const text = el("span", { className: "text" }, [el("span", { className: "label", textContent: t(row.label ?? "s_" + row.key) }), ...(t("n_" + row.key) ? [el("span", { className: "note", textContent: t("n_" + row.key) })] : [])]);
    const container = el(labelled ? "label" : "div", { className: "row" + (stack ? " stack" : "") }, [text, node, ...(row.type === "range" ? [el("output", { textContent: settings[row.key] })] : [])]);
    container.dataset.key = row.key;
    if (row.parent) Object.assign(container.dataset, { parent: row.parent, when: row.when ?? "" });
    if (row.type === "range") node.addEventListener("input", () => (container.querySelector("output").textContent = node.value));
    container.addEventListener("change", () => globalThis.ytx.save({ [row.key]: read(row, node) }));
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
