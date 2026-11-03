const { SCHEMA, t, el, renderRow, reveal, load, watch, save, PRESETS, device } = globalThis.ytx;
const NS = "http://www.w3.org/2000/svg";
const ICONS = {
  home: ["#007aff", "M3 11l9-7 9 7", "M5 10v10h14V10", "M10 20v-6h4v6"],
  support: ["#34c759", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.5", "M12 17h.01"],
  playback: ["#0a84ff", "M7 4l12 8-12 8z"],
  quality: ["#af52de", "M3 5h18v12H3z", "M8 21h8", "M8 9h3v4H8zM13 9h3v4h-3z"],
  appearance: ["#ff2d55", "M3 3l18 18", "M10.6 10.6a2 2 0 0 0 2.8 2.8", "M9.9 5.2A10 10 0 0 1 12 5c5 0 9 4 10 7a11 11 0 0 1-2.2 3.4", "M6.6 6.6A11 11 0 0 0 2 12c1 3 5 7 10 7a10 10 0 0 0 4.5-1"],
  cleanup: ["#ff9500", "M4 20l5-5", "M14 4l6 6-8 8-6-6z", "M10 8l6 6"],
  feeds: ["#30b0c7", "M4 5h16M4 10h16M4 15h10", "M17 14l2 2 4-4"],
  sponsors: ["#00c7be", "M5 12l5 5L20 7", "M3 3h18v18H3z"],
  ads: ["#ff3b30", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M5.6 5.6l12.8 12.8"],
  player: ["#5856d6", "M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", "M10 9l5 3-5 3z"],
  toolbar: ["#32ade6", "M3 5h18v4H3z", "M7 13h10M7 17h6"],
  autoplay: ["#34c759", "M12 3a9 9 0 1 1-9 9", "M3 3v5h5", "M10 9l5 3-5 3z"],
  volume: ["#ff3b30", "M11 5L6 9H2v6h4l5 4z", "M15 9.5a3.5 3.5 0 0 1 0 5", "M18 6.5a7.5 7.5 0 0 1 0 11"],
  page: ["#8e8e93", "M5 3h10l4 4v14H5z", "M15 3v4h4", "M8 12h8M8 16h8"],
  theme: ["#ffcc00", "M12 3a9 9 0 0 0 0 18c1 0 1.5-.7 1.5-1.5 0-1-.5-1.5-.5-2.5 0-1 .8-1.5 2-1.5H17a4 4 0 0 0 4-4c0-4.5-4-8.5-9-8.5z", "M7.5 10.5h.01M10.5 7h.01M15 7h.01"],
  shortcuts: ["#636366", "M3 7h18v10H3z", "M6 10h1M9 10h1M12 10h1M15 10h1M18 10h1M7 14h10"],
  experimental: ["#ff6b22", "M9 3h6", "M10 3v6L4 20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1L14 9V3", "M7 15h10"],
  advanced: ["#8e8e93", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"],
};
const tile = (id) => {
  const [color, ...paths] = ICONS[id] ?? ["#8e8e93"];
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  for (const d of paths) { const p = document.createElementNS(NS, "path"); p.setAttribute("d", d); svg.append(p); }
  const box = el("span", { className: "tile" }, [svg]);
  box.style.setProperty("--tile", color);
  return box;
};

const settings = await load();
const name = t("extension_name");
document.title = name;
document.getElementById("brand").textContent = name;
document.getElementById("search").placeholder = t("o_search");
document.getElementById("back").querySelector("span").textContent = t("o_back");
document.documentElement.dataset.device = device;

const groups = SCHEMA.map((g) => ({ ...g, rows: g.rows.filter((row) => !row.not?.includes(device)) })).filter((g) => g.rows.length);
const nav = document.getElementById("nav");
const list = document.getElementById("list");
const main = document.getElementById("main");
const results = document.getElementById("results");
const pages = { home: document.getElementById("home"), support: document.getElementById("support") };
const sections = {};
const listGroup = el("div", { className: "group" });
list.append(el("input", { className: "search", type: "search", placeholder: t("o_search"), autocomplete: "off" }), listGroup);
const entry = (id) => el("a", { href: "#" + id }, [tile(id), el("span", { textContent: t("g_" + id) })]);
nav.append(entry("home"));
listGroup.append(entry("home"));
for (const g of groups) {
  nav.append(entry(g.id));
  listGroup.append(entry(g.id));
  sections[g.id] = el("section", { className: "group", hidden: true }, g.rows.map((row) => renderRow(row, settings)));
  main.append(sections[g.id]);
}
nav.append(entry("support"));
listGroup.append(entry("support"));
reveal(main, settings);
watch((next) => reveal(main, next));

const toast = document.getElementById("toast");
let toastTimer;
const notify = (text) => { toast.textContent = text; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 1400); };
main.addEventListener("change", () => notify(t("t_saved")));

const manifest = browser.runtime.getManifest();
const supportEmail = t("support_email");
const allset = el("p", { className: "allset", textContent: t("h_allset"), hidden: true });
pages.home.append(
  el("img", { src: "images/icon-128.png", alt: "" }),
  el("h2", { textContent: t("h_title") }),
  el("p", { textContent: t("h_intro") }),
  allset,
  el("p", { className: "note" }, [t("h_feedback") + " ", el("a", { href: "#support", textContent: t("g_support") })]),
);
const copyMail = el("button", { type: "button", className: "plain", textContent: t("sp_copy") });
copyMail.addEventListener("click", () => navigator.clipboard.writeText(supportEmail).then(() => notify(t("h_copied"))));
pages.support.append(
  el("p", { textContent: t("sp_intro") }),
  el("section", { className: "group" }, [
    el("div", { className: "row" }, [el("span", { className: "text" }, [el("span", { className: "label", textContent: t("sp_email") }), el("span", { className: "note", textContent: supportEmail })]), el("a", { className: "button", href: `mailto:${supportEmail}?subject=${encodeURIComponent(name + " " + manifest.version)}`, textContent: t("sp_write") }), copyMail]),
    el("div", { className: "row" }, [el("span", { className: "text" }, [el("span", { className: "label", textContent: t("sp_version") })]), el("span", { className: "note", textContent: manifest.version })]),
    el("div", { className: "row" }, [el("span", { className: "text" }, [el("span", { className: "label", textContent: t("sp_device") })]), el("span", { className: "note", textContent: [device, navigator.userAgent.match(/Version\/[\d.]+/)?.[0]].filter(Boolean).join(" · ") })]),
  ]),
);
const foot = document.getElementById("foot");
const exportLink = el("a", { href: "#", textContent: t("f_export") });
exportLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const a = el("a", { href: URL.createObjectURL(new Blob([JSON.stringify(await load(), null, 2)], { type: "application/json" })), download: "yt-settings.json" });
  document.body.append(a); a.click(); a.remove();
});
foot.append(el("a", { href: "#welcome", textContent: t("f_welcome") }), el("a", { href: "#support", textContent: t("f_support") }), exportLink, el("span", { textContent: `${name} ${manifest.version}` }));

const welcome = document.getElementById("welcome");
let preset = "recommended";
const what = el("p", { className: "what", textContent: t("w_recommended_note") });
const chooser = el("div", { className: "seg", role: "radiogroup" });
for (const id of ["recommended", "focused", "fast", "clean"]) {
  const b = el("button", { type: "button", role: "radio", textContent: t("w_" + id) });
  b.setAttribute("aria-checked", String(id === preset));
  b.addEventListener("click", () => { preset = id; what.textContent = t("w_" + id + "_note"); for (const c of chooser.children) c.setAttribute("aria-checked", String(c === b)); });
  chooser.append(b);
}
const start = el("button", { type: "button", className: "start", textContent: t("w_done") });
start.addEventListener("click", async () => { if (PRESETS[preset]) await save(PRESETS[preset]); allset.hidden = false; notify(t("t_saved")); location.hash = "home"; });
welcome.append(el("img", { src: "images/icon-128.png", alt: "" }), el("h2", { textContent: t("w_title") }), el("p", { textContent: t("w_intro") }), chooser, what, el("p", { textContent: t("w_devices") }), start);

const narrow = matchMedia("(max-width: 700px)");
const title = document.getElementById("title");
const back = document.getElementById("back");
const scroll = document.getElementById("scroll");
const show = (id) => {
  const isWelcome = id === "welcome";
  const page = pages[id] ? id : null;
  const known = sections[id] ? id : null;
  const current = known ?? page ?? (isWelcome ? "welcome" : narrow.matches ? "" : "home");
  const root = narrow.matches && !current;
  list.hidden = !root;
  welcome.hidden = current !== "welcome";
  for (const [k, p] of Object.entries(pages)) p.hidden = current !== k;
  main.hidden = !known;
  results.hidden = true;
  for (const [k, s] of Object.entries(sections)) s.hidden = k !== known;
  for (const a of nav.children) { if (a.getAttribute("href") === "#" + current) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); }
  title.textContent = root ? t("o_settings") : current === "welcome" ? "" : t("g_" + current);
  back.hidden = !(narrow.matches && current);
  scroll.scrollTop = 0;
  scroll.classList.remove("enter");
  void scroll.offsetWidth;
  scroll.classList.add("enter");
};
const route = () => show(location.hash.slice(1));
window.addEventListener("hashchange", route);
narrow.addEventListener("change", route);
back.addEventListener("click", () => { location.hash = ""; });
route();

const search = (q) => {
  q = q.trim().toLowerCase();
  results.replaceChildren();
  if (!q) return show(location.hash.slice(1));
  for (const g of groups) {
    const hits = [...sections[g.id].querySelectorAll(".row")].filter((row) => !row.hidden && row.querySelector(".text").textContent.toLowerCase().includes(q));
    if (!hits.length) continue;
    results.append(el("h2", { textContent: t("g_" + g.id) }), el("section", { className: "group" }, hits.map((row) => row.cloneNode(true))));
  }
  list.hidden = welcome.hidden = main.hidden = true;
  for (const p of Object.values(pages)) p.hidden = true;
  results.hidden = false;
  back.hidden = !narrow.matches;
  title.textContent = t("o_search");
};
results.addEventListener("change", (e) => {
  const key = e.target.closest(".row")?.dataset.key;
  const original = main.querySelector(`.row[data-key="${key}"]`);
  if (!original) return;
  const src = e.target, dst = original.querySelector(src.tagName.toLowerCase() + (src.type ? `[type="${src.type}"]` : ""));
  if (dst) { if (src.type === "checkbox") dst.checked = src.checked; else dst.value = src.value; dst.dispatchEvent(new Event("change", { bubbles: true })); }
});
for (const input of [document.getElementById("search"), list.querySelector(".search")]) input.addEventListener("input", (e) => search(e.target.value));
