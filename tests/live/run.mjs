// Live regression checks against YouTube through safaridriver. Start `safaridriver -p 4444`, then `node tests/live/run.mjs [check…]`.
import { open, go, exec, execAsync, quit, handles, switchTo, frame, sleep, timeouts, rect, closeWindow } from "./wd.mjs";
import { execSync } from "node:child_process";

const only = new Set(process.argv.slice(2));
const results = [];
const s = await open();
await timeouts(s, 90000);
await rect(s, { x: 0, y: 0, width: 1440, height: 900 });
const q = (script, args = []) => exec(s, script, args);
const W = (sel, ms = 20000) => execAsync(s, `const [sel, ms, done] = arguments; const t0 = Date.now(); const tick = () => { if (document.querySelector(sel)) return done(true); if (Date.now() - t0 > ms) return done(false); setTimeout(tick, 250); }; tick();`, [sel, ms]);
const box = (sel) => q(`const e = document.querySelector(arguments[0]); if (!e) return null; const b = e.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.top + scrollY), Math.round(b.width), Math.round(b.height)];`, [sel]);
const openOptions = async () => { await W(".ytx-btn[data-action='more']"); const before = await handles(s); await q(`document.querySelector('.ytx-btn[data-action="more"]').click(); document.querySelector('.ytx-item[data-action="settings"]').click();`); await sleep(1500); const opt = (await handles(s)).find((h) => !before.includes(h)); await switchTo(s, opt); return before[0]; };
const set = async (patch) => { const yt = await openOptions(); await execAsync(s, `const [patch, done] = arguments; ytx.save(patch).then(() => done(true));`, [patch]); await closeWindow(s); await switchTo(s, yt); await sleep(800); };
const MORE = `document.querySelector('.ytx-bar:not(.in-player) .ytx-btn[data-action="more"]').click();`;
const item = (id) => `${MORE} document.querySelector('.ytx-bar:not(.in-player) .ytx-item[data-action="${id}"]').click();`;
const check = (name, ok, detail) => { results.push([name, ok, detail]); console.log(`${ok ? "PASS" : "FAIL"} ${name}: ${typeof detail === "string" ? detail : JSON.stringify(detail)}`); };
const want = (name) => !only.size || only.has(name);
const watch = async (id = "dQw4w9WgXcQ", extra = "") => { await go(s, `https://www.youtube.com/watch?v=${id}${extra}`); await W("#movie_player video"); };

try {
  await watch();
  try { execSync(`osascript -e 'tell application "Safari" to activate'`, { timeout: 15000 }); } catch { /* best effort */ }
  const loaded = await q(`return { ytx: document.documentElement.dataset.ytx ?? null, bar: !!document.querySelector('.ytx-bar') }`);
  check("load", loaded.ytx === "1" && loaded.bar, loaded);
  if (want("options")) {
    const yt = await openOptions();
    const nav = await q(`return [...document.querySelectorAll('#nav a')].map((a) => a.getAttribute('href')).join(' ')`);
    const gate = await execAsync(s, `const done = arguments[0]; const has = () => !!document.querySelector('.row[data-key="controls"] input[value="chapters"]'); const before = has(); ytx.save({ chapterMaker: true }).then(() => setTimeout(() => { const after = has(); ytx.save({ chapterMaker: false }).then(() => done({ before, after })); }, 300));`);
    check("options", /#power #creator #access/.test(nav) && !gate.before && gate.after, { nav: nav.split(" ").length, gate });
    await closeWindow(s); await switchTo(s, yt);
  }
  await set({ exactStats: true, velocityBadge: true, factsPanel: true, findPanels: true, commentTriage: true, loopExtras: true, thumbViewer: true, chapterMaker: true, commentsBeside: true, hideRelated: true, controlsPlacement: "both", hideAiVideos: true, channelVideosTab: true, channelTracker: true, trackedChannels: "@mrbeast", chatTidy: ["avatars", "badges", "emojiOnly", "liveMode"], chatFilter: "all", timestampPreview: true, thumbTest: true, audioOnBlur: true, audioOnBlurQuality: true });
  if (want("loop")) {
    await watch("dQw4w9WgXcQ", "&t=10&loop=10-20&times=2");
    const loop = await execAsync(s, `const done = arguments[0]; const v = document.querySelector('#movie_player video'); let last = v.currentTime; const jumps = []; const hud = new Set(); const t0 = Date.now(); const tick = () => { const h = document.querySelector('.ytx-hud.show'); if (h) hud.add(h.textContent); if (v.currentTime < last - 3) jumps.push(Math.round(last) + '>' + Math.round(v.currentTime)); last = v.currentTime; if (hud.has('Loop done') || Date.now() - t0 > 60000) return done({ jumps, hud: [...hud], t: Math.round(v.currentTime) }); setTimeout(tick, 200); }; tick();`);
    check("loop", loop.jumps.length >= 1 && loop.hud.includes("Loop done"), loop);
  }
  await set({ channelSkips: "@RickAstleyYT 60 10" });
  if (want("skip") || want("toolbar") || want("stats") || want("facts")) {
    await watch();
    const skip = await execAsync(s, `const done = arguments[0]; const v = document.querySelector('#movie_player video'); const t0 = Date.now(); const hud = new Set(); const tick = () => { const h = document.querySelector('.ytx-hud.show'); if (h) hud.add(h.textContent); if (v.currentTime >= 60 || Date.now() - t0 > 15000) return done({ t: Math.round(v.currentTime), hud: [...hud] }); setTimeout(tick, 250); }; tick();`);
    check("skip-intro", skip.t >= 60 && skip.hud.includes("Skipped intro"), skip);
    await W(".ytx-meta .ytx-exact"); await sleep(2000);
    check("toolbar", (await q(`return document.querySelectorAll('.ytx-bar').length`)) === 2 && !!(await q(`return document.querySelector('#below > .ytx-bar')`)), "two bars, one under the video");
    check("stats", /views · Published .* likes/.test(await q(`return document.querySelector('.ytx-exact')?.textContent ?? ''`)) && /views\/day/.test(await q(`return document.querySelector('.ytx-velocity')?.textContent ?? ''`)), await q(`return [document.querySelector('.ytx-exact')?.textContent, document.querySelector('.ytx-velocity')?.textContent]`));
    const facts = await q(`const f = document.querySelector('.ytx-facts'); if (!f) return null; f.open = true; return { rows: f.querySelectorAll('.ytx-fact').length, tagsWidth: Math.round(f.querySelector('.ytx-fact .ytx-fact-body span').getBoundingClientRect().width), replayed: [...f.querySelectorAll('.ytx-fact')].find((r) => /replayed/.test(r.firstChild.textContent))?.querySelector('.ytx-fact-body').textContent.slice(0, 30) }`);
    check("facts", facts && facts.rows === 11 && facts.tagsWidth > 300, facts);
    if (want("skip")) { const outro = await execAsync(s, `const done = arguments[0]; document.getElementById('movie_player').seekTo(204); const hud = new Set(); const t0 = Date.now(); const tick = () => { const h = document.querySelector('.ytx-hud.show'); if (h) hud.add(h.textContent); if (hud.has('Skipped outro') || Date.now() - t0 > 6000) return done([...hud]); setTimeout(tick, 150); }; tick();`); check("skip-outro", outro.includes("Skipped outro"), outro); }
  }
  if (want("beside") || want("nav") || want("tip") || want("viewer")) {
    await watch(); await W(".ytx-meta .ytx-exact"); await sleep(2000);
    const before = { comments: await box("ytd-comments#comments"), movie: await box("#movie_player") };
    check("beside", before.comments && before.movie && before.comments[0] > before.movie[0] + before.movie[2] - 10, before);
    const theater = await execAsync(s, `const done = arguments[0]; const r = (sel) => { const e = document.querySelector(sel); const b = e.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.width)]; }; document.querySelector('.ytp-size-button').click(); setTimeout(() => { const inT = r('ytd-comments#comments'); document.querySelector('.ytp-size-button').click(); setTimeout(() => done({ inT, back: r('ytd-comments#comments') }), 1500); }, 1500);`);
    check("beside-theater", theater.inT[0] < 100 && theater.back[0] > 900, theater);
    const tip = await execAsync(s, `const done = arguments[0]; const host = document.querySelector('ytd-watch-metadata'); const a = document.createElement('a'); a.href = '/watch?v=dQw4w9WgXcQ&t=75s'; a.textContent = '1:15'; host.prepend(a); a.scrollIntoView({ block: 'center' }); a.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })); setTimeout(() => { const tip = document.querySelector('.ytx-tip'); if (!tip || tip.hidden) return done({ tip: false }); const img = new Image(); img.onload = () => { a.dispatchEvent(new MouseEvent('mouseout', { bubbles: true })); done({ tip: true, loaded: img.naturalWidth, hiddenAfter: tip.hidden }); }; img.onerror = () => done({ tip: true, loaded: 0 }); img.src = tip.style.backgroundImage.slice(5, -2); }, 1500);`);
    check("tip", tip.tip && tip.loaded > 0 && tip.hiddenAfter, tip);
    const viewer = await execAsync(s, `const done = arguments[0]; ${item("thumbnail")} setTimeout(() => { const img = document.querySelector('.ytx-lightbox img'); const w = img?.naturalWidth ?? 0; document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); done({ w, closed: !document.querySelector('.ytx-lightbox') }); }, 3000);`);
    check("viewer", viewer.w > 0 && viewer.closed, viewer);
    await q(item("chapters"));
    const before2 = await q(`return { facts: document.querySelectorAll('.ytx-facts').length, chapters: document.querySelectorAll('.ytx-chapters').length }`);
    await q(`document.querySelector("a[href^='/watch?v=']:not([href*='dQw4w9WgXcQ'])")?.click()`);
    await sleep(2000); await W(".ytx-meta .ytx-exact"); await sleep(6000);
    const after = await q(`return { id: new URLSearchParams(location.search).get('v'), factsId: [...document.querySelectorAll('.ytx-facts .ytx-fact')].find((r) => /Video ID/.test(r.firstChild.textContent))?.querySelector('.ytx-fact-body span')?.textContent, facts: document.querySelectorAll('.ytx-facts').length, chapters: document.querySelectorAll('.ytx-chapters').length, bars: document.querySelectorAll('.ytx-bar').length, exact: !!document.querySelector('.ytx-exact') }`);
    check("nav", before2.chapters === 1 && after.id !== "dQw4w9WgXcQ" && after.factsId === after.id && after.facts === 1 && after.chapters === 0 && after.bars === 2 && after.exact, { before: before2, after });
  }
  if (want("away")) {
    await watch(); await sleep(5000);
    await q(`window.__log = []; window.__iv = setInterval(() => { const p = document.getElementById('movie_player'); window.__log.push([document.hidden ? 'H' : 'V', p.getPlaybackQuality(), document.documentElement.classList.contains('ytx-audio') ? 'audio' : 'video', Math.round(document.querySelector('#movie_player video').currentTime)]); }, 1000);`);
    const yt = (await handles(s))[0];
    await q(`window.open('about:blank', '_blank')`); await sleep(500);
    const other = (await handles(s)).find((h) => h !== yt);
    await switchTo(s, other); await sleep(14000); await closeWindow(s); await switchTo(s, yt); await sleep(6000);
    const log = await q(`clearInterval(window.__iv); return window.__log`);
    const hiddenRows = log.filter((r) => r[0] === "H");
    const ok = hiddenRows.length > 5 && hiddenRows.every((r) => r[2] === "audio") && hiddenRows.some((r) => r[1] === "tiny") && log.at(-1)[2] === "video" && log.at(-1)[1] !== "tiny";
    check("away", ok, log.map((r) => r.join(":")).join(" "));
  }
  if (want("ai")) { await go(s, "https://www.youtube.com/results?search_query=veo+3+ai+video"); await W("ytd-video-renderer"); await sleep(3000); const ai = await q(`const all = [...document.querySelectorAll('ytd-video-renderer')]; return { all: all.length, hidden: all.filter((c) => c.classList.contains('ytx-blocked')).length }`); check("ai", ai.all > 3 && ai.hidden / ai.all >= 0.8, ai); }
  if (want("card")) { await go(s, "https://www.youtube.com/"); await sleep(5000); const card = await execAsync(s, `const done = arguments[0]; const panel = document.querySelector('.ytx-test'); if (!panel) return done({ panel: false }); const c = document.createElement('canvas'); c.width = 1280; c.height = 720; c.getContext('2d').fillRect(0, 0, 1280, 720); c.toBlob((blob) => { const dt = new DataTransfer(); dt.items.add(new File([blob], 't.png', { type: 'image/png' })); panel.querySelector('input[type=file]').files = dt.files; [...panel.querySelectorAll('button')].find((b) => b.textContent === 'Place in feed').click(); setTimeout(() => { const card = document.querySelector('.ytx-test-card'); const real = [...document.querySelectorAll('ytd-rich-item-renderer')].find((e) => e.getBoundingClientRect().width > 0); done(card ? { panel: true, img: card.querySelector('img').naturalWidth, cardW: Math.round(card.getBoundingClientRect().width), realW: Math.round(real.getBoundingClientRect().width) } : { panel: true, card: false }); }, 1500); }, 'image/png');`); check("card", card.img > 0 && Math.abs(card.cardW - card.realW) < 3, card); }
  if (want("channel")) { await go(s, "https://www.youtube.com/@MrBeast"); await sleep(8000); const ch = await q(`return { path: location.pathname, track: document.querySelector('.ytx-track')?.textContent ?? '' }`); check("channel", ch.path.endsWith("/videos") && /visit|Since/.test(ch.track), ch); }
  if (want("chat")) {
    await go(s, "https://www.youtube.com/results?search_query=news+live&sp=EgJAAQ%253D%253D"); await W("ytd-video-renderer a#video-title");
    const href = await q(`return document.querySelector("ytd-video-renderer a#video-title")?.getAttribute('href')`);
    await go(s, "https://www.youtube.com" + href); await W("ytd-live-chat-frame iframe", 25000); await sleep(9000);
    await frame(s, await q(`return document.querySelector('ytd-live-chat-frame iframe')`)); await sleep(1000);
    const chat = await q(`return { cls: document.documentElement.className, label: document.querySelector('yt-live-chat-header-renderer #label-text')?.textContent.trim(), emojiOnly: [...document.querySelectorAll('yt-live-chat-text-message-renderer #message')].filter((m) => !m.textContent.trim() && m.querySelector('img')).length, emojiOut: document.querySelectorAll('.ytx-emoji-out').length, find: !!document.querySelector('.ytx-find') }`);
    check("chat", /ytx-chat-avatars/.test(chat.cls) && chat.label === "Live chat" && chat.emojiOut === chat.emojiOnly && chat.find, chat);
    await frame(s, null);
  }
} catch (err) { check("harness", false, err.stack ?? String(err)); }
finally {
  try { await watch(); const yt = await openOptions(); await execAsync(s, `const done = arguments[0]; browser.storage.local.set({ settings: {} }).then(() => done(true));`); await closeWindow(s); await switchTo(s, yt); } catch (err) { console.log("reset failed:", err.message); }
  await quit(s);
}
const failed = results.filter((r) => !r[1]);
console.log(`\n${results.length - failed.length}/${results.length} passed${failed.length ? ": FAILED " + failed.map((r) => r[0]).join(", ") : ""}`);
process.exit(failed.length ? 1 : 0);
