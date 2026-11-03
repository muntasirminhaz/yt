import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
globalThis.navigator ??= { platform: "MacIntel", maxTouchPoints: 0 };
const store = {};
globalThis.browser = {
  storage: { local: { get: async (k) => ({ [k]: store[k] }), set: async (o) => Object.assign(store, o) }, onChanged: { addListener() {} } },
};
await import("../extension/defaults.js");
const { SCHEMA, DEFAULTS, ACTIONS, load, save, comboOf, comboLabel } = globalThis.ytx;
const rows = SCHEMA.flatMap((g) => g.rows);
const PLACEMENTS = rows.find((r) => r.key === "controlsPlacement").options;
const messages = JSON.parse(readFileSync(join(root, "extension/_locales/en/messages.json"), "utf8"));

test("every schema row has a default, a label and a valid parent", () => {
  const keys = new Set(rows.map((r) => r.key));
  for (const row of rows) {
    assert.ok(row.key in DEFAULTS, `${row.key} default`);
    assert.ok(messages["s_" + row.key]?.message, `${row.key} label`);
    if (row.parent) assert.ok(keys.has(row.parent), `${row.key} parent ${row.parent}`);
    if (["select", "set", "choice", "dropdown"].includes(row.type)) assert.ok(row.options.length, `${row.key} options`);
    if (typeof row.label === "function") for (const v of PLACEMENTS) assert.ok(messages[row.label({ controlsPlacement: v })]?.message, `${row.key} label for ${v}`);
    if (row.type === "choice") assert.equal(row.custom.to(row.custom.from(row.def)), row.def, `${row.key} custom round-trip`);
  }
  for (const g of SCHEMA) assert.ok(messages["g_" + g.id]?.message, `${g.id} group label`);
  for (const a of ACTIONS) assert.ok(messages["a_" + a]?.message, `${a} action label`);
});

test("word options and defaults are valid", () => {
  for (const row of rows.filter((r) => (r.type === "select" || r.type === "choice") && !r.labels)) {
    assert.ok(row.options.includes(row.def), `${row.key} default in options`);
    for (const o of row.options) if (typeof o === "string") assert.ok(messages[(row.prefix ?? "o_") + o]?.message, `${row.key} option ${o}`);
  }
  for (const row of rows) assert.ok(messages["n_" + row.key]?.message, `${row.key} note`);
  for (const row of rows) for (const d of row.not ?? []) assert.ok(["iphone", "ipad", "mac"].includes(d), `${row.key} device ${d}`);
  for (const a of [...DEFAULTS.controls, ...DEFAULTS.controlsBelow]) assert.ok(ACTIONS.includes(a));
  for (const row of rows.filter((r) => r.type === "dropdown")) assert.ok(row.options.includes(row.def) && row.options.every((o) => row.labels[o] || messages["o_" + o]?.message), `${row.key} dropdown`);
});

test("load merges stored values over defaults and save round-trips", async () => {
  assert.deepEqual(await load(), DEFAULTS);
  await save({ speedDefault: 1.5 });
  const loaded = await load();
  assert.equal(loaded.speedDefault, 1.5);
  assert.equal(loaded.boostLevel, DEFAULTS.boostLevel);
  assert.equal(DEFAULTS.speedDefault, 1);
});

test("shortcut combos need a modifier or F-key and render as Mac glyphs", () => {
  assert.equal(comboOf({ key: "s", code: "KeyS", altKey: true }), "Alt+KeyS");
  assert.equal(comboOf({ key: "s", code: "KeyS" }), null);
  assert.equal(comboOf({ key: "F5", code: "F5" }), "F5");
  assert.equal(comboOf({ key: "Shift", code: "ShiftLeft", shiftKey: true }), null);
  assert.equal(comboLabel("Ctrl+Alt+Shift+ArrowUp"), "⌃⌥⇧↑");
  assert.equal(comboLabel("Alt+Digit1"), "⌥1");
});

test("presets only touch known settings", () => {
  for (const [name, preset] of Object.entries(globalThis.ytx.PRESETS)) for (const key of Object.keys(preset)) assert.ok(key in DEFAULTS, `${name}.${key}`);
  for (const a of [...globalThis.ytx.PRESETS.recommended.controls, ...globalThis.ytx.PRESETS.recommended.controlsBelow]) assert.ok(ACTIONS.includes(a), `recommended ${a}`);
});

test("beta entries name real settings or actions", () => {
  const known = new Set([...rows.map((r) => r.key), ...ACTIONS]);
  for (const key of [...globalThis.ytx.BETA, ...globalThis.ytx.RELOAD]) assert.ok(known.has(key), `${key} beta/reload`);
});

test("recommended shortcuts name real actions and carry a modifier", () => {
  const recommended = rows.find((r) => r.key === "shortcuts").recommended;
  assert.ok(Object.keys(recommended).length > 10);
  for (const [id, combo] of Object.entries(recommended)) {
    assert.ok(ACTIONS.includes(id), `${id} action`);
    assert.match(combo, /^((Ctrl|Alt|Shift)\+)+[A-Za-z0-9]+$/, `${id} combo ${combo}`);
    assert.ok(comboLabel(combo).length >= 2, `${id} label`);
  }
  assert.equal(Object.keys(DEFAULTS.shortcuts).length, 0);
});

test("shortcut hints on rows name real actions", () => {
  for (const row of rows) for (const id of row.actions ?? []) assert.ok(ACTIONS.includes(id), `${row.key} action ${id}`);
});
