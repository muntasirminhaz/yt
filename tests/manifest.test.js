import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ext = join(root, "extension");
const manifest = JSON.parse(readFileSync(join(ext, "manifest.json"), "utf8"));

test("manifest is MV3 and declares a Safari minimum version", () => {
  assert.equal(manifest.manifest_version, 3);
  assert.equal(manifest.browser_specific_settings?.safari?.strict_min_version, "17.0");
});

test("content script targets youtube.com and its subdomains only", () => {
  const matches = manifest.content_scripts.flatMap((cs) => cs.matches);
  assert.deepEqual(matches, ["*://*.youtube.com/*"]);
  for (const cs of manifest.content_scripts) {
    for (const file of cs.js ?? []) assert.ok(existsSync(join(ext, file)), `${file} exists`);
  }
});

test("background entry file exists", () => {
  const files = manifest.background.scripts ?? [manifest.background.service_worker];
  for (const file of files) assert.ok(existsSync(join(ext, file)), `${file} exists`);
});

test("icons, popup and default locale exist", () => {
  for (const file of Object.values(manifest.icons)) assert.ok(existsSync(join(ext, file)), `${file} exists`);
  assert.ok(existsSync(join(ext, manifest.action.default_popup)));
  assert.ok(existsSync(join(ext, manifest.action.default_icon)));
  const messages = JSON.parse(readFileSync(join(ext, "_locales", manifest.default_locale, "messages.json"), "utf8"));
  assert.ok(messages.extension_name?.message);
  assert.ok(messages.extension_description?.message);
});

test("permissions stay minimal", () => {
  const broad = ["<all_urls>", "*://*/*", "webRequest", "webRequestBlocking", "tabs"];
  for (const p of [...(manifest.permissions ?? []), ...(manifest.host_permissions ?? [])]) {
    assert.ok(!broad.includes(p), `${p} is broader than this extension needs`);
  }
});
