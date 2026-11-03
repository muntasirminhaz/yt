const { SCHEMA, t, el, renderRow, reveal, load, watch } = globalThis.ytx;

const settings = await load();
document.title = t("extension_name");
document.getElementById("title").textContent = t("extension_name");
document.getElementById("search").placeholder = t("o_search");

const ICONS = {
  playback: ["M6 4l14 8-14 8z"],
  quality: ["M3 5h18v12H3z", "M8 21h8", "M8 9h3v4H8zM13 9h3v4h-3z"],
  appearance: ["M3 3l18 18", "M10.6 10.6a2 2 0 0 0 2.8 2.8", "M9.9 5.2A10 10 0 0 1 12 5c5 0 9 4 10 7a11 11 0 0 1-2.2 3.4", "M6.6 6.6A11 11 0 0 0 2 12c1 3 5 7 10 7a10 10 0 0 0 4.5-1"],
  cleanup: ["M4 20l5-5", "M14 4l6 6-8 8-6-6z", "M10 8l6 6"],
  player: ["M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", "M10 9l5 3-5 3z"],
  toolbar: ["M3 5h18v4H3z", "M7 13h10M7 17h6"],
  autoplay: ["M12 3a9 9 0 1 1-9 9", "M3 3v5h5", "M10 9l5 3-5 3z"],
  volume: ["M11 5L6 9H2v6h4l5 4z", "M15 9.5a3.5 3.5 0 0 1 0 5", "M18 6.5a7.5 7.5 0 0 1 0 11"],
  page: ["M5 3h10l4 4v14H5z", "M15 3v4h4", "M8 12h8M8 16h8"],
  theme: ["M12 3a9 9 0 0 0 0 18c1 0 1.5-.7 1.5-1.5 0-1-.5-1.5-.5-2.5 0-1 .8-1.5 2-1.5H17a4 4 0 0 0 4-4c0-4.5-4-8.5-9-8.5z", "M7.5 10.5h.01M10.5 7h.01M15 7h.01"],
  experimental: ["M9 3h6", "M10 3v6L4 20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1L14 9V3", "M7 15h10"],
  advanced: ["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"],
};
const icon = (id) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  for (const d of ICONS[id] ?? []) { const path = document.createElementNS("http://www.w3.org/2000/svg", "path"); path.setAttribute("d", d); svg.append(path); }
  return svg;
};

const nav = document.getElementById("nav");
const main = document.getElementById("main");
for (const group of SCHEMA) {
  nav.append(el("a", { href: "#" + group.id }, [icon(group.id), el("span", { textContent: t("g_" + group.id) })]));
  main.append(
    el("h2", { id: group.id, textContent: t("g_" + group.id) }),
    el("section", { className: "group" }, group.rows.map((row) => renderRow(row, settings))),
  );
}
reveal(main, settings);
watch((next) => reveal(main, next));

document.getElementById("search").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  for (const section of main.querySelectorAll("section")) {
    let visible = 0;
    for (const row of section.querySelectorAll(".row")) {
      const hit = !q || row.querySelector(".text").textContent.toLowerCase().includes(q);
      row.classList.toggle("filtered", !hit);
      visible += hit && !row.hidden;
    }
    section.classList.toggle("filtered", !visible);
    section.previousElementSibling.classList.toggle("filtered", !visible);
  }
});
