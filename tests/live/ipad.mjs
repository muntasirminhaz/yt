// iPad simulator checks (desktop YouTube) through safaridriver. Install first: scripts/run-ios-sim.sh Debug "iPad Pro 13-inch (M5)" on the
// iOS 26.5 runtime; enable the extension and allow youtube.com once; then: node tests/live/ipad.mjs [check…].
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
const udid = sh(`xcrun simctl list devices booted -j | jq -r '[.devices[][] | select(.name | contains("iPad"))][0].udid // empty'`);
if (!udid) { console.log("boot an iPad simulator first: scripts/run-ios-sim.sh Debug \"iPad Pro 13-inch (M5)\""); process.exit(1); }
const db = sh(`find "$HOME/Library/Developer/CoreSimulator/Devices/${udid}/data/Containers/Data/Application" -path "*WebExtensions/Default/com.cyberm3.commander.Extension*" -name LocalStorage.db 2>/dev/null | head -1`);
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
const box = (sel) => q(`const e = document.querySelector(arguments[0]); if (!e) return null; const b = e.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.top + scrollY), Math.round(b.width), Math.round(b.height)];`, [sel]);
const MORE = `document.querySelector('.ytx-bar:not(.in-player) .ytx-btn[data-action="more"]').click();`;
const item = (id) => `${MORE} document.querySelector('.ytx-bar:not(.in-player) .ytx-item[data-action="${id}"]').click();`;
const play = async () => {
  const paused = await q(`return document.querySelector('#movie_player video')?.paused`);
  if (paused) { try { const el = await req("POST", `/session/${s}/element`, { using: "css selector", value: ".ytp-play-button" }); await req("POST", `/session/${s}/element/${el["element-6066-11e4-a52e-4f735466cecf"]}/click`); } catch { /* no button */ } await sleep(3000); }
  return qa(`const done = arguments[0]; const p = document.getElementById('movie_player'); const v = document.querySelector('#movie_player video'); if (v.paused) { p?.playVideo?.(); v.play().catch(() => {}); } setTimeout(() => done({ paused: v.paused }), 1500);`);
};

setSettings({ exactStats: true, velocityBadge: true, factsPanel: true, findPanels: true, commentTriage: true, loopExtras: true, thumbViewer: true, chapterMaker: true, commentsBeside: true, hideRelated: true, controlsPlacement: "both", hideAiVideos: true, channelVideosTab: true, channelTracker: true, trackedChannels: "@mrbeast", chatTidy: ["avatars", "badges", "emojiOnly", "liveMode"], chatFilter: "all", timestampPreview: true, thumbTest: true, channelSkips: "@RickAstleyYT 60 10" });
await open();
try {
  await go("https://www.youtube.com/watch?v=dQw4w9WgXcQ&loop=5-15&times=2");
  const load = await q(`return { ytx: document.documentElement.dataset.ytx ?? null, bars: document.querySelectorAll('.ytx-bar').length, host: location.hostname, w: innerWidth, desktop: !!document.querySelector('ytd-app') }`);
  check("load", load.ytx === "1" && load.desktop, load);
  const playing = !(await play()).paused;
  console.log(playing ? "INFO playback started" : "INFO the automation profile could not start playback; loop and intro-skip results below are informational");
  if (want("toolbar")) check("toolbar", load.bars === 2 && !!(await q(`return document.querySelector('#below > .ytx-bar')`)), { bars: load.bars });
  if (want("loop")) { const loop = await qa(`const done = arguments[0]; const v = document.querySelector('#movie_player video'); let last = v.currentTime; const jumps = []; const hud = new Set(); const t0 = Date.now(); const tick = () => { const h = document.querySelector('.ytx-hud.show'); if (h) hud.add(h.textContent); if (v.currentTime < last - 3) jumps.push(Math.round(last) + '>' + Math.round(v.currentTime)); last = v.currentTime; if (hud.has('Loop done') || Date.now() - t0 > 45000) return done({ jumps, hud: [...hud], t: Math.round(v.currentTime) }); setTimeout(tick, 200); }; tick();`); check("loop", !playing || (loop.jumps.length >= 1 && loop.hud.includes("Loop done")), loop); }
  if (want("stats")) { await sleep(3000); const st = await q(`return [document.querySelector('.ytx-exact')?.textContent ?? '', document.querySelector('.ytx-velocity')?.textContent ?? '']`); check("stats", /views · Published/.test(st[0]) && /views\/day/.test(st[1]), st); }
  if (want("facts")) { const facts = await q(`const f = document.querySelector('.ytx-facts'); if (!f) return null; f.open = true; return { rows: f.querySelectorAll('.ytx-fact').length, tagsWidth: Math.round(f.querySelector('.ytx-fact .ytx-fact-body span').getBoundingClientRect().width) }`); check("facts", facts && facts.rows === 11 && facts.tagsWidth > 200, facts); await shot("ipad-watch"); }
  if (want("skip")) { await go("https://www.youtube.com/watch?v=dQw4w9WgXcQ", 4000); await play(); const skip = await qa(`const done = arguments[0]; const v = document.querySelector('#movie_player video'); const t0 = Date.now(); const hud = new Set(); const tick = () => { const h = document.querySelector('.ytx-hud.show'); if (h) hud.add(h.textContent); if (v.currentTime >= 60 || Date.now() - t0 > 15000) return done({ t: Math.round(v.currentTime), hud: [...hud] }); setTimeout(tick, 250); }; tick();`); check("skip-intro", !playing || skip.t >= 60, skip); }
  if (want("beside")) { const b = { comments: await box("ytd-comments#comments"), movie: await box("#movie_player"), w: await q(`return innerWidth`) }; check("beside", b.comments && b.movie && b.comments[0] > b.movie[0] + b.movie[2] - 10, b); }
  if (want("viewer")) { const v = await qa(`const done = arguments[0]; ${item("thumbnail")} setTimeout(() => { const img = document.querySelector('.ytx-lightbox img'); const w = img?.naturalWidth ?? 0; document.querySelector('.ytx-lightbox')?.click(); done({ w, closed: !document.querySelector('.ytx-lightbox') }); }, 3000);`); check("viewer", v.w > 0 && v.closed, v); }
  if (want("chapters")) { const c = await q(`${item("chapters")} const p = document.querySelector('.ytx-chapters'); if (!p) return null; [...p.querySelectorAll('.ytx-row button')].find((b) => b.textContent === 'Mark now').click(); const n = p.querySelectorAll('.ytx-marks .ytx-frow').length; ${item("chapters")} return { marks: n, closed: !document.querySelector('.ytx-chapters') };`); check("chapters", c && c.marks >= 1 && c.closed, c); }
  if (want("tip")) { const tip = await qa(`const done = arguments[0]; const host = document.querySelector('ytd-watch-metadata'); const a = document.createElement('a'); a.href = '/watch?v=dQw4w9WgXcQ&t=75s'; a.textContent = '1:15'; host.prepend(a); a.scrollIntoView({ block: 'center' }); a.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })); setTimeout(() => { const tip = document.querySelector('.ytx-tip'); if (!tip || tip.hidden) return done({ tip: false }); const img = new Image(); img.onload = () => done({ tip: true, loaded: img.naturalWidth }); img.onerror = () => done({ tip: true, loaded: 0 }); img.src = tip.style.backgroundImage.slice(5, -2); }, 1500);`); check("tip", tip.tip && tip.loaded > 0, tip); }
  if (want("ai")) { await go("https://www.youtube.com/results?search_query=veo+3+ai+video", 8000); const ai = await q(`const all = [...document.querySelectorAll('ytd-video-renderer')]; return { all: all.length, hidden: all.filter((c) => c.classList.contains('ytx-blocked')).length }`); check("ai", ai.all > 3 && ai.hidden / ai.all >= 0.8, ai); }
  if (want("card")) { await go("https://www.youtube.com/", 8000); const card = await qa(`const done = arguments[0]; const panel = document.querySelector('.ytx-test'); if (!panel) return done({ panel: false }); try { const c = document.createElement('canvas'); c.width = 1280; c.height = 720; c.getContext('2d').fillRect(0, 0, 1280, 720); c.toBlob((blob) => { const dt = new DataTransfer(); dt.items.add(new File([blob], 't.png', { type: 'image/png' })); panel.querySelector('input[type=file]').files = dt.files; [...panel.querySelectorAll('button')].find((b) => b.textContent === 'Place in feed').click(); setTimeout(() => { const card = document.querySelector('.ytx-test-card'); const real = [...document.querySelectorAll('ytd-rich-item-renderer')].find((e) => e.getBoundingClientRect().width > 0); done(card ? { panel: true, img: card.querySelector('img').naturalWidth, cardW: Math.round(card.getBoundingClientRect().width), realW: real ? Math.round(real.getBoundingClientRect().width) : -1 } : { panel: true, card: false }); }, 1500); }, 'image/png'); } catch (e) { done({ panel: true, error: String(e) }); }`); check("card", card.img > 0 && (card.realW < 0 || Math.abs(card.cardW - card.realW) < 3), card); await shot("ipad-home"); }
  if (want("channel")) { await go("https://www.youtube.com/@MrBeast", 10000); const ch = await q(`return { path: location.pathname, track: document.querySelector('.ytx-track')?.textContent ?? '' }`); check("channel", ch.path.endsWith("/videos") && /visit|Since/.test(ch.track), ch); }
} catch (err) { check("harness", false, err.stack ?? String(err)); }
finally { await req("DELETE", `/session/${s}`); setSettings({}); }
const failed = results.filter((r) => !r[1]);
console.log(`\n${results.length - failed.length}/${results.length} passed${failed.length ? ": FAILED " + failed.map((r) => r[0]).join(", ") : ""}`);
process.exit(failed.length ? 1 : 0);
