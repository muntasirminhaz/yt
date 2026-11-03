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

browser.runtime.onInstalled.addListener(reloadYouTube);
browser.storage.onChanged.addListener(async (changes, area) => {
  if (area !== "local" || !changes.settings) return;
  const on = Boolean(changes.settings.newValue?.guestMode);
  if (on === Boolean(changes.settings.oldValue?.guestMode)) return;
  await (on ? guestOn() : guestOff()).catch((err) => console.warn("[ytx] guest", err));
  await reloadYouTube();
});

browser.runtime.onMessage.addListener(async (msg, sender) => {
  if (msg.type === "openOptions") return browser.runtime.openOptionsPage();
  if (msg.type !== "playing") return;
  const tabs = await browser.tabs.query({});
  await Promise.all(tabs.filter((t) => t.id !== sender.tab?.id).map((t) => browser.tabs.sendMessage(t.id, { type: "pauseOthers" }).catch(() => null)));
});
