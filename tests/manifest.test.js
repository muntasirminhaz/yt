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
  for (const cs of manifest.content_scripts) assert.deepEqual(cs.matches, ["*://*.youtube.com/*"]);
  for (const cs of manifest.content_scripts) {
    for (const file of cs.js ?? []) assert.ok(existsSync(join(ext, file)), `${file} exists`);
  }
});

test("background entry file exists", () => {
  const files = manifest.background.scripts ?? [manifest.background.service_worker];
  for (const file of files) assert.ok(existsSync(join(ext, file)), `${file} exists`);
});

test("icons, options page and default locale exist; the toolbar button opens settings", () => {
  for (const file of Object.values(manifest.icons)) assert.ok(existsSync(join(ext, file)), `${file} exists`);
  assert.ok(!manifest.action.default_popup, "no popup: the action opens the options page");
  assert.ok(existsSync(join(ext, manifest.action.default_icon)));
  assert.ok(existsSync(join(ext, manifest.options_ui.page)));
  const messages = JSON.parse(readFileSync(join(ext, "_locales", manifest.default_locale, "messages.json"), "utf8"));
  assert.ok(messages.extension_name?.message);
  assert.ok(messages.extension_description?.message);
});

test("permissions stay minimal", () => {
  const broad = ["<all_urls>", "*://*/*", "webRequest", "webRequestBlocking", "tabs", "scripting"];
  for (const p of [...(manifest.permissions ?? []), ...(manifest.host_permissions ?? [])]) {
    assert.ok(!broad.includes(p), `${p} is broader than this extension needs`);
  }
});

test("page bridge runs in the main world at document_start; the isolated bundle loads the schema first", () => {
  const main = manifest.content_scripts.find((cs) => cs.world === "MAIN");
  assert.deepEqual(main.js, ["page.js", "winfull.js"]);
  assert.equal(main.run_at, "document_start");
  const isolated = manifest.content_scripts.find((cs) => !cs.world);
  assert.equal(isolated.js[0], "defaults.js");
  assert.equal(isolated.run_at, "document_start");
  assert.ok(!manifest.web_accessible_resources, "nothing needs to be web accessible");
  for (const cs of manifest.content_scripts) for (const f of cs.css ?? []) assert.ok(existsSync(join(ext, f)), `${f} exists`);
});

test("optional hosts are the two community APIs", () => {
  assert.deepEqual(manifest.optional_host_permissions ?? [], ["https://sponsor.ajay.app/*", "https://returnyoutubedislikeapi.com/*"]);
});
