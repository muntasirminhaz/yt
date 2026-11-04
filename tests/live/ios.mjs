// iPhone simulator checks through safaridriver. Install first: scripts/run-ios-sim.sh Debug "iPhone 17e"; enable the extension and allow
// m.youtube.com in the simulator once; then: node tests/live/ios.mjs [check…]. Settings are written straight into the simulator's
// extension storage while its Safari is closed, because the options page is unreachable from an iOS automation session.
import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const base = "http://127.0.0.1:4444";
const env = { ...process.env, DEVELOPER_DIR: "/Applications/Xcode.app/Contents/Developer" };
const sh = (cmd) => execSync(cmd, { env, encoding: "utf8" }).trim();
const only = new Set(process.argv.slice(2));
const want = (name) => !only.size || only.has(name);
const results = [];
const check = (name, ok, detail) => { results.push([name, ok, detail]); console.log(`${ok ? "PASS" : "FAIL"} ${name}: ${typeof detail === "string" ? detail : JSON.stringify(detail)}`); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const device = process.env.DEVICE ?? "17e";
const udid = sh(`xcrun simctl list devices booted -j | jq -r --arg d "${device}" '[.devices[][] | select(.name | contains($d))][0].udid // empty'`);
if (!udid) { console.log("boot the iPhone 17e simulator first: scripts/run-ios-sim.sh Debug \"iPhone 17e\""); process.exit(1); }
const db = sh(`find "$HOME/Library/Developer/CoreSimulator/Devices/${udid}/data/Containers/Data/Application" -path "*WebExtensions/Default/cyberm3.yt.Extension*" -name LocalStorage.db 2>/dev/null | head -1`);
if (!db) { console.log("extension storage not found; enable the extension in the simulator once"); process.exit(1); }
mkdirSync(".atlas/tmp/wd", { recursive: true });
const setSettings = (settings) => {
  writeFileSync(".atlas/tmp/wd/settings.sql", `INSERT OR REPLACE INTO extension_storage (key, value) VALUES ('settings', '${JSON.stringify(settings).replace(/'/g, "''")}');\nPRAGMA wal_checkpoint(TRUNCATE);\n`);
  sh(`xcrun simctl terminate ${udid} com.apple.mobilesafari 2>/dev/null; sleep 2; sqlite3 "${db}" < .atlas/tmp/wd/settings.sql`);
};
let s;
const req = async (m, p, b) => { const r = await fetch(base + p, { method: m, headers: { "Content-Type": "application/json" }, body: b ? JSON.stringify(b) : undefined }); const j = await r.json(); if (j.value?.error) throw new Error(j.value.error + ": " + j.value.message); return j.value; };
const open = async () => { s = (await req("POST", "/session", { capabilities: { alwaysMatch: { browserName: "safari", platformName: "iOS", "safari:useSimulator": true, "safari:deviceUDID": udid } } })).sessionId; await req("POST", `/session/${s}/timeouts`, { script: 60000 }); };
const q = (script, args = []) => req("POST", `/session/${s}/execute/sync`, { script, args });
const qa = (script, args = []) => req("POST", `/session/${s}/execute/async`, { script, args });
const go = async (url, ms = 12000) => { await req("POST", `/session/${s}/url`, { url }); await sleep(ms); };
const shot = async (name) => writeFileSync(`.atlas/tmp/wd/${name}.png`, Buffer.from(await req("GET", `/session/${s}/screenshot`), "base64"));
const MORE = `document.querySelector('.ytx-btn[data-action="more"]').click();`;

setSettings({ speedDefault: 1.5, loopExtras: true, thumbViewer: true, hideShorts: true, hideAiVideos: true, captionsAuto: true, captionsLang: "bn", captionStyle: true, captionSize: 2, captionColor: "yellow", channelSkips: "@RickAstleyYT 60 10" });
await open();
try {
  await go("https://m.youtube.com/watch?v=dQw4w9WgXcQ");
  const play = () => qa(`const done = arguments[0]; const p = document.getElementById('movie_player'); const v = document.querySelector('video'); if (v.paused) { p?.playVideo?.(); v.play().catch(() => {}); } setTimeout(() => done({ paused: v.paused, t: Math.round(v.currentTime), state: p?.getPlayerState?.() }), 1500);`);
  check("play", !(await play()).paused, await q(`return { paused: document.querySelector('video').paused }`));
  const load = await q(`return { ytx: document.documentElement.dataset.ytx ?? null, bar: !!document.querySelector('.ytx-bar'), rate: document.querySelector('video').playbackRate }`);
  check("load", load.ytx === "1" && load.bar && load.rate === 1.5, load);
  if (want("toolbar")) { const bar = await q(`const bar = document.querySelector('.ytx-bar'); const r = bar.getBoundingClientRect(); const p = document.getElementById('player-container-id').getBoundingClientRect(); return { top: Math.round(r.top + scrollY), playerBottom: Math.round(p.bottom + scrollY), parent: bar.parentElement.className, width: Math.round(r.width) }`); check("toolbar", bar.parent.includes("watch-below-the-player") && bar.top >= bar.playerBottom && bar.width > 300, bar); }
  if (want("skip")) { await go("https://m.youtube.com/watch?v=dQw4w9WgXcQ", 4000); await play(); const skip = await qa(`const done = arguments[0]; const v = document.querySelector('video'); const t0 = Date.now(); const hud = new Set(); const tick = () => { const h = document.querySelector('.ytx-hud.show'); if (h) hud.add(h.textContent); if (v.currentTime >= 60 || Date.now() - t0 > 15000) return done({ t: Math.round(v.currentTime), hud: [...hud], handle: document.querySelector("ytm-slim-owner-renderer a[href^='/@'], ytm-slim-video-metadata-section-renderer a[href^='/@']")?.getAttribute('href'), handleLinks: [...document.querySelectorAll("a[href^='/@']")].slice(0, 3).map((a) => a.getAttribute('href') + '@' + a.closest('[class]')?.tagName.toLowerCase()) }); setTimeout(tick, 250); }; tick();`); check("skip-intro", skip.t >= 60, skip); }
  if (want("menu")) { const menu = await q(`${MORE} const m = document.querySelector('.ytx-menu'); const r = m.getBoundingClientRect(); const out = { hidden: m.hidden, items: m.querySelectorAll('.ytx-item').length, top: Math.round(r.top), bottom: Math.round(r.bottom), vh: innerHeight }; document.body.click(); return out;`); check("menu", !menu.hidden && menu.items >= 28 && menu.bottom <= menu.vh + 1 && menu.top >= 0, menu); }
  if (want("ab")) { const ab = await q(`${MORE} document.querySelector('.ytx-item[data-action="loopAB"]').click(); const p = document.querySelector('.ytx-ab'); const r = p.getBoundingClientRect(); const out = { hidden: p.hidden, rows: p.querySelectorAll('.ytx-frow').length, bottom: Math.round(r.bottom), vh: innerHeight }; document.body.click(); return out;`); check("ab", !ab.hidden && ab.rows === 3 && ab.bottom <= ab.vh + 1, ab); }
  if (want("sleep")) { const sl = await qa(`const done = arguments[0]; ${MORE} document.querySelector('.ytx-item[data-action="sleepTimer"]').click(); setTimeout(() => done({ hud: document.querySelector('.ytx-hud')?.textContent }), 600);`); check("sleep", /Sleep in 15/.test(sl.hud ?? ""), sl); }
  if (want("viewer")) { const v = await qa(`const done = arguments[0]; ${MORE} document.querySelector('.ytx-item[data-action="thumbnail"]').click(); setTimeout(() => { const img = document.querySelector('.ytx-lightbox img'); const w = img?.naturalWidth ?? 0; document.querySelector('.ytx-lightbox')?.click(); done({ w, closed: !document.querySelector('.ytx-lightbox') }); }, 3000);`); check("viewer", v.w > 0 && v.closed, v); }
  if (want("captions")) { await play(); const cap = await qa(`const done = arguments[0]; const t0 = Date.now(); const tick = () => { const seg = document.querySelector('.ytp-caption-segment'); const p = document.getElementById('movie_player'); if (seg || Date.now() - t0 > 20000) return done({ on: p?.isSubtitlesOn?.(), seg: seg ? { text: seg.textContent.slice(0, 20), color: getComputedStyle(seg).color } : null, cap: document.documentElement.dataset.ytxCap, captionEls: [...new Set([...document.querySelectorAll('[class*=caption]')].map((e) => e.tagName.toLowerCase() + '.' + e.className.split(' ')[0]))].slice(0, 6), track: p?.getOption?.('captions', 'track')?.languageCode, t: Math.round(document.querySelector('video').currentTime) }); setTimeout(tick, 500); }; tick();`); check("captions", cap.on === true, { note: "the automation profile never loads caption text; only the on state is checked", ...cap }); await shot("ios-captions"); }
  if (want("ai")) { await go("https://m.youtube.com/results?search_query=veo+3+ai+video", 8000); const ai = await q(`const all = [...document.querySelectorAll('ytm-video-with-context-renderer, ytm-compact-video-renderer')]; return { all: all.length, hidden: all.filter((c) => c.classList.contains('ytx-blocked')).length }`); check("ai", ai.all > 3 && ai.hidden / ai.all >= 0.8, ai); }
  if (want("shorts")) { await go("https://m.youtube.com/", 8000); const sh2 = await q(`const shelf = document.querySelector('ytm-reel-shelf-renderer'); const pivot = document.querySelector('ytm-pivot-bar-item-renderer:has(.pivot-shorts)'); const vis = (e) => e && getComputedStyle(e).display !== 'none'; return { shelf: shelf ? vis(shelf) : 'none', pivot: pivot ? vis(pivot) : 'none', cls: document.documentElement.classList.contains('ytx-hideshorts') }`); check("shorts", sh2.cls && sh2.shelf !== true && sh2.pivot !== true, sh2); await shot("ios-home"); }
} catch (err) { check("harness", false, err.stack ?? String(err)); }
finally { await req("DELETE", `/session/${s}`); setSettings({}); }
const failed = results.filter((r) => !r[1]);
console.log(`\n${results.length - failed.length}/${results.length} passed${failed.length ? ": FAILED " + failed.map((r) => r[0]).join(", ") : ""}`);
process.exit(failed.length ? 1 : 0);
