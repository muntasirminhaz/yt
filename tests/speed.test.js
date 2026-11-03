import { test } from "node:test";
import assert from "node:assert/strict";

globalThis.browser = { storage: { local: { get: async () => ({}) , set: async () => {} }, onChanged: { addListener() {} } } };
await import("../extension/defaults.js");
const { clampSpeed } = globalThis.ytx;

test("clampSpeed rounds to two decimals and stays inside YouTube's range", () => {
  assert.equal(clampSpeed(1 + 0.1 + 0.1 + 0.1), 1.3);
  assert.equal(clampSpeed(0.01), 0.07);
  assert.equal(clampSpeed(99), 16);
  assert.equal(clampSpeed(1.006), 1.01);
});

test("pickQuality picks the wanted level or the next lower one that exists", () => {
  const { pickQuality } = globalThis.ytx;
  const available = ["hd1080", "hd720", "large", "medium", "small", "tiny", "auto"];
  assert.equal(pickQuality("hd1080", available), "hd1080");
  assert.equal(pickQuality("hd2160", available), "hd1080");
  assert.equal(pickQuality("hd720", ["large", "medium", "auto"]), "large");
  assert.equal(pickQuality("tiny", ["hd720", "auto"]), "hd720");
});
