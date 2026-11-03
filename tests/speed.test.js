import { test } from "node:test";
import assert from "node:assert/strict";

globalThis.navigator ??= { platform: "MacIntel", maxTouchPoints: 0 };
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

test("formatTime, matchList and chapterStarts", () => {
  const { formatTime, listOf, matchList, chapterStarts } = globalThis.ytx;
  assert.equal(formatTime(65), "1:05");
  assert.equal(formatTime(3600), "1:00:00");
  const list = listOf("Linus Tech Tips\n@mkbhd\n\n  ReAcTs ");
  assert.ok(matchList("Linus Tech Tips", list));
  assert.ok(matchList("@MKBHD", list));
  assert.ok(matchList("Best REACTS of 2026", list));
  assert.ok(!matchList("Veritasium", list));
  assert.deepEqual(chapterStarts([50, 25, 25], 100), [0, 50, 75]);
  assert.deepEqual(chapterStarts([100], 100), []);
});

test("sbPrefix is the first four hex chars of SHA-256", async () => {
  assert.equal(await globalThis.ytx.sbPrefix("dQw4w9WgXcQ"), "5f6b");
});
