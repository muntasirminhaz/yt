import "./defaults.js";

browser.action.onClicked.addListener(() => browser.runtime.openOptionsPage());

const YT = "youtube.com";
const cookieUrl = (c) => `http${c.secure ? "s" : ""}://${c.domain.replace(/^\./, "")}${c.path}`;
const guestOn = async () => {
  const cookies = await browser.cookies.getAll({ domain: YT });
  if (cookies.length) await browser.storage.local.set({ guestBackup: cookies });
  await Promise.all(cookies.map((c) => browser.cookies.remove({ url: cookieUrl(c), name: c.name }).catch(() => null)));
};
const guestOff = async () => {
  const { guestBackup = [] } = await browser.storage.local.get("guestBackup");
  const current = await browser.cookies.getAll({ domain: YT });
  await Promise.all(current.map((c) => browser.cookies.remove({ url: cookieUrl(c), name: c.name }).catch(() => null)));
  await Promise.all(guestBackup.map((c) => browser.cookies.set({
    url: cookieUrl(c), name: c.name, value: c.value, path: c.path, secure: c.secure, httpOnly: c.httpOnly, sameSite: c.sameSite,
    ...(c.domain.startsWith(".") ? { domain: c.domain } : {}), ...(c.expirationDate ? { expirationDate: c.expirationDate } : {}),
  }).catch((err) => console.warn("[ytx] restore cookie", c.name, err))));
  await browser.storage.local.remove("guestBackup");
};
const reloadYouTube = async () => {
  const tabs = await browser.tabs.query({ url: "*://*.youtube.com/*" }).catch(() => []);
  for (const tab of tabs) browser.tabs.reload(tab.id).catch(() => null);
};

browser.runtime.onInstalled.addListener(async (details) => {
  await reloadYouTube();
  if (details.reason === "install") browser.tabs.create({ url: browser.runtime.getURL("options.html#welcome") }).catch(() => null);
});
browser.storage.onChanged.addListener(async (changes, area) => {
  if (area !== "local" || !changes.settings) return;
  const on = Boolean(changes.settings.newValue?.guestMode);
  if (on === Boolean(changes.settings.oldValue?.guestMode)) return;
  await (on ? guestOn() : guestOff()).catch((err) => console.warn("[ytx] guest", err));
  await reloadYouTube();
});

const pauseOthers = async (sender) => {
  const tabs = await browser.tabs.query({});
  await Promise.all(tabs.filter((t) => t.id !== sender.tab?.id).map((t) => browser.tabs.sendMessage(t.id, { type: "pauseOthers" }).catch(() => null)));
};

const cache = new Map();
const cached = async (key, make) => {
  if (!cache.has(key)) cache.set(key, make().catch((err) => { cache.delete(key); console.warn("[ytx] api", key, err); return null; }));
  return cache.get(key);
};
const getJson = async (url) => { const r = await fetch(url, { headers: { Accept: "application/json" } }); if (r.status === 404) return null; if (!r.ok) throw new Error(`${r.status} ${url}`); return r.json(); };
const api = {
  sb: async ({ videoId, categories }) => cached("sb:" + videoId + categories.join(), async () => {
    const prefix = await globalThis.ytx.sbPrefix(videoId);
    const list = await getJson(`https://sponsor.ajay.app/api/skipSegments/${prefix}?categories=${encodeURIComponent(JSON.stringify(categories))}&actionTypes=${encodeURIComponent(JSON.stringify(["skip"]))}`);
    const hit = (list ?? []).find((v) => v.videoID === videoId);
    return (hit?.segments ?? []).map((seg) => ({ start: seg.segment[0], end: seg.segment[1], category: seg.category, id: seg.UUID }));
  }),
  ryd: async ({ videoId }) => cached("ryd:" + videoId, async () => {
    const d = await getJson(`https://returnyoutubedislikeapi.com/votes?videoId=${encodeURIComponent(videoId)}`);
    return d ? { likes: d.likes, dislikes: d.dislikes } : null;
  }),
  dearrow: async ({ videoId }) => cached("da:" + videoId, async () => {
    const prefix = await globalThis.ytx.sbPrefix(videoId);
    const map = await getJson(`https://sponsor.ajay.app/api/branding/${prefix}`);
    const entry = map?.[videoId];
    const title = entry?.titles?.find((t) => !t.original && (t.locked || t.votes >= 0));
    return title ? { title: title.title.replace(/^>/, "") } : null;
  }),
};
browser.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === "openOptions") return browser.runtime.openOptionsPage();
  if (msg.type === "playing") return pauseOthers(sender);
  if (api[msg.type]) return api[msg.type](msg);
  return undefined;
});
