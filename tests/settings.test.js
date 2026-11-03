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
const messages = JSON.parse(readFileSync(join(root, "extension/_locales/en/messages.json"), "utf8"));

test("every schema row has a default, a label and a valid parent", () => {
  const keys = new Set(rows.map((r) => r.key));
  for (const row of rows) {
    assert.ok(row.key in DEFAULTS, `${row.key} default`);
    assert.ok(messages["s_" + row.key]?.message, `${row.key} label`);
    if (row.parent) assert.ok(keys.has(row.parent), `${row.key} parent ${row.parent}`);
    if (row.type === "select" || row.type === "set" || row.type === "choice") assert.ok(row.options.length, `${row.key} options`);
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
  for (const a of DEFAULTS.controls) assert.ok(ACTIONS.includes(a));
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
});
