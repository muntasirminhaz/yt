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

test("gated actions name real settings and hide until their feature is on", () => {
  const { NEEDS, actionsFor } = globalThis.ytx;
  for (const [action, key] of Object.entries(NEEDS)) { assert.ok(ACTIONS.includes(action), `${action} action`); assert.ok(key in DEFAULTS, `${action} needs ${key}`); }
  assert.equal(actionsFor(DEFAULTS).length, ACTIONS.length - Object.keys(NEEDS).length);
  assert.ok(actionsFor({ ...DEFAULTS, chapterMaker: true }).includes("chapters"));
  for (const row of rows.filter((r) => r.type === "set")) for (const o of row.options) assert.ok(messages[(row.prefix ?? "o_") + o]?.message, `${row.key} option ${o}`);
});

test("AI words match whole words and hashtags", () => {
  const { aiPatterns, aiMatch, DEFAULTS: d } = globalThis.ytx;
  const pats = aiPatterns(d.aiKeywords);
  assert.ok(aiMatch("First ai generated ad #aigeneratedvideo", pats));
  assert.ok(aiMatch("Made with Veo 3!", pats));
  assert.ok(!aiMatch("Sorachi island travel", pats));
  assert.ok(!aiMatch("Runway show in Paris", pats));
  assert.ok(!aiMatch("The AI revolution explained", pats));
});

test("storyboard tiles, heat map peaks, SRT, counts and channel skips parse", () => {
  const { storyboardTile, heatPath, heatPeaks, srt, parseCount, parseSkips } = globalThis.ytx;
  const spec = "https://i.ytimg.com/sb/x/storyboard3_L$L/$N.jpg?sqp=Q|48#27#100#10#10#0#default#rs$A0|80#45#108#10#10#2000#M$M#rs$A1|160#90#108#5#5#2000#M$M#rs$A2";
  assert.deepEqual(storyboardTile(spec, 75, 213), { url: "https://i.ytimg.com/sb/x/storyboard3_L2/M1.jpg?sqp=Q&sigh=rs$A2", x: 320, y: 180, w: 160, h: 90 });
  assert.equal(storyboardTile(spec, 5, 213, 0).url, "https://i.ytimg.com/sb/x/storyboard3_L0/default.jpg?sqp=Q&sigh=rs$A0");
  assert.equal(storyboardTile("", 1, 10), null);
  const peaks = heatPeaks(heatPath("M 0,100 C 100,100 200,20 300,20 C 400,20 500,80 600,80 C 700,80 800,5 900,5 C 950,5 1000,100 1000,100", 1000));
  assert.deepEqual(peaks.map((p) => [Math.round(p.t), p.v]), [[800, 95], [200, 80]]);
  assert.equal(srt([{ t: 0, text: "Hi" }, { t: 61.5, text: "There" }]), "1\n00:00:00,000 --> 00:01:01,500\nHi\n\n2\n00:01:01,500 --> 00:01:05,500\nThere\n");
  assert.equal(parseCount("525M subscribers"), 525e6);
  assert.equal(parseCount("1,234 videos"), 1234);
  assert.deepEqual(parseSkips("@mkbhd 15 30\nLinus Tech Tips 0:12, 1:00\nnothing"), [{ match: "@mkbhd", start: 15, end: 30 }, { match: "linus tech tips", start: 12, end: 60 }]);
});
