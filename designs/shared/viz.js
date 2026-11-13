/* Small SVG visualisations shared by all designs. Colours come from CSS custom
   properties on the container (--ink, --muted, --accent, --accent2, --paper),
   so each design can restyle them. */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

  /* Timeline: events [{date,t,label,detail,key}], active index highlights one
     event and everything before it. */
  window.vizTimeline = function (el, events, active = -1, opts = {}) {
    const W = opts.width || 520, H = opts.height || 360, pad = 36;
    // Even spacing by index keeps clustered dates readable; real dates are labelled.
    const n = events.length;
    const yi = (i) => pad + (i / (n - 1 || 1)) * (H - 2 * pad);
    const idx = new Map(events.map((e, i) => [e, i]));
    const y = (t) => { const i = events.findIndex((e) => e.t === t); return yi(i < 0 ? 0 : i); };
    const t1 = events[n - 1].t;
    const wrap = (str, max) => { const out = []; let line = ""; String(str).split(" ").forEach((w) => { if ((line + " " + w).trim().length > max) { out.push(line.trim()); line = w; } else line += " " + w; }); if (line.trim()) out.push(line.trim()); return out; };
    const key = events.findIndex((e) => e.key);
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Timeline" class="viz viz-timeline">`;
    s += `<line x1="90" x2="90" y1="${pad}" y2="${H - pad}" stroke="var(--muted)" stroke-width="2"/>`;
    if (active >= 0) s += `<line x1="90" x2="90" y1="${pad}" y2="${y(events[Math.min(active, events.length - 1)].t)}" stroke="var(--accent)" stroke-width="4" class="tl-progress"/>`;
    if (key >= 0 && active >= key) {
      s += `<rect x="96" y="${y(events[key].t) - 2}" width="${W - 110}" height="${y(t1) - y(events[key].t) + 4}" fill="var(--accent)" opacity="0.07" rx="6"/>`;
      if (opts.band) s += `<text x="${W - 16}" y="${y(t1) - 8}" text-anchor="end" class="tl-band">${esc(opts.band)}</text>`;
    }
    events.forEach((e, i) => {
      const on = i <= active, cur = i === active;
      const yy = y(e.t);
      s += `<g class="tl-ev ${on ? "on" : ""} ${cur ? "cur" : ""}" opacity="${active < 0 || on ? 1 : 0.35}">`;
      s += `<text x="76" y="${yy + 4}" text-anchor="end" class="tl-date">${esc(e.date)}</text>`;
      s += `<circle cx="90" cy="${yy}" r="${cur ? 9 : e.key ? 7 : 5}" fill="${on ? (e.key ? "var(--accent)" : "var(--ink)") : "var(--paper)"}" stroke="${e.key ? "var(--accent)" : "var(--ink)"}" stroke-width="2"/>`;
      s += `<text x="108" y="${yy + 5}" class="tl-label" font-weight="${cur ? 700 : 500}">${esc(e.label)}</text>`;
      if (cur && e.detail) s += `<text x="108" y="${yy + 22}" class="tl-detail">${wrap(e.detail, Math.floor((W - 120) / 6.6)).map((l, k) => `<tspan x="108" dy="${k ? 15 : 0}">${esc(l)}</tspan>`).join("")}</text>`;
      s += `</g>`;
    });
    el.innerHTML = s + `</svg>`;
  };

  /* Flow: horizontal (or vertical) pipeline of stages with gates between them. */
  // Split a label into at most two balanced lines.
  const two = (str) => { const w = String(str).split(" "); if (w.length < 2 || str.length < 12) return [str]; let best = 1, diff = 1e9; for (let i = 1; i < w.length; i++) { const d = Math.abs(w.slice(0, i).join(" ").length - w.slice(i).join(" ").length); if (d < diff) { diff = d; best = i; } } return [w.slice(0, best).join(" "), w.slice(best).join(" ")]; };
  window.vizFlow = function (el, flow, active = -1, opts = {}) {
    const vertical = !!opts.vertical, n = flow.stages.length;
    const W = vertical ? 300 : 680, H = vertical ? 70 * n + 40 : 230;
    const pos = (i) => vertical ? { x: 150, y: 40 + i * 70 } : { x: 60 + i * ((W - 120) / (n - 1)), y: 100 };
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Process" class="viz viz-flow">`;
    for (let i = 0; i < n - 1; i++) {
      const a = pos(i), b = pos(i + 1);
      const on = i < active;
      s += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${on ? "var(--accent)" : "var(--muted)"}" stroke-width="${on ? 4 : 2}" ${i >= (flow.done ?? n) - 1 ? 'stroke-dasharray="5 5"' : ""}/>`;
    }
    const gates = flow.gates || [];
    gates.forEach((g, gi) => {
      const a = pos(g.after), b = pos(g.after + 1);
      const same = gates.filter((x) => x.after === g.after), k = same.indexOf(g);
      const f = (k + 1) / (same.length + 1);
      const gx = a.x + (b.x - a.x) * f, gy = a.y + (b.y - a.y) * f;
      const show = opts.showGates || active > g.after;
      if (!show) return;
      const off = vertical ? { x: 18, y: k * 18 } : { x: 0, y: 34 + k * 30 };
      const col = g.ok ? "var(--ok, #2a9d5c)" : "var(--bad, #d1342f)";
      s += `<g class="gate"><rect x="${gx - 9}" y="${gy - 9}" width="18" height="18" rx="4" fill="${col}" transform="rotate(45 ${gx} ${gy})"/>`;
      s += `<text x="${gx}" y="${gy + 4}" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">${g.ok ? "✓" : "✕"}</text>`;
      s += vertical
        ? `<text x="${gx + 20}" y="${gy + 4}" class="gate-label" fill="${col}">${esc(g.label)}</text>`
        : `<text x="${gx}" y="${gy + off.y + 8}" text-anchor="middle" class="gate-label" fill="${col}">${two(g.label).map((l, j) => `<tspan x="${gx}" dy="${j ? 14 : 0}">${esc(l)}</tspan>`).join("")}</text>`;
      s += `</g>`;
    });
    flow.stages.forEach((st, i) => {
      const p = pos(i), on = i <= active, cur = i === active, pending = i >= (flow.done ?? n);
      s += `<g class="fl-st ${on ? "on" : ""}" opacity="${active < 0 || on ? 1 : 0.45}">`;
      s += `<circle cx="${p.x}" cy="${p.y}" r="${cur ? 17 : 13}" fill="${on ? "var(--accent)" : "var(--paper)"}" stroke="${pending ? "var(--muted)" : "var(--ink)"}" stroke-width="2" ${pending ? 'stroke-dasharray="3 3"' : ""}/>`;
      s += `<text x="${p.x}" y="${p.y + 5}" text-anchor="middle" font-size="13" font-weight="700" fill="${on ? "var(--paper)" : "var(--ink)"}">${i + 1}</text>`;
      s += vertical
        ? `<text x="${p.x - 26}" y="${p.y + 5}" text-anchor="end" class="fl-label" font-weight="${cur ? 700 : 500}">${esc(st)}</text>`
        : `<text x="${p.x}" y="${p.y - 42}" text-anchor="middle" class="fl-label" font-weight="${cur ? 700 : 500}">${two(st).map((l, j) => `<tspan x="${p.x}" dy="${j ? 16 : 0}">${esc(l)}</tspan>`).join("")}</text>`;
      s += `</g>`;
    });
    el.innerHTML = s + `</svg>`;
  };

  /* Dumbbell: prior → posterior belief for each item. */
  window.vizDumbbell = function (el, data, active = -1) {
    const W = 520, rowH = 74, H = 60 + data.length * rowH, x0 = 30, x1 = W - 30;
    const x = (v) => x0 + v * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Prior and posterior belief" class="viz viz-dumbbell">`;
    [0, 0.5, 1].forEach((v) => {
      s += `<line x1="${x(v)}" x2="${x(v)}" y1="30" y2="${H - 10}" stroke="var(--muted)" stroke-dasharray="2 4"/>`;
      s += `<text x="${x(v)}" y="20" text-anchor="${v === 0 ? "start" : v === 1 ? "end" : "middle"}" class="db-axis">${v === 0 ? "0 · surely false" : v === 1 ? "1 · surely true" : "0.5"}</text>`;
    });
    data.forEach((d, i) => {
      const yy = 60 + i * rowH, on = active < 0 || i === active;
      s += `<g opacity="${on ? 1 : 0.3}">`;
      s += `<text x="${x0}" y="${yy - 14}" class="db-name">${esc(d.name)}</text>`;
      s += `<line x1="${x(d.post)}" x2="${x(d.prior)}" y1="${yy}" y2="${yy}" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" class="db-bar"/>`;
      s += `<circle cx="${x(d.prior)}" cy="${yy}" r="8" fill="var(--paper)" stroke="var(--ink)" stroke-width="2.5"/>`;
      s += `<circle cx="${x(d.post)}" cy="${yy}" r="8" fill="var(--accent)"/>`;
      s += `<text x="${x(d.prior)}" y="${yy + 26}" text-anchor="middle" class="db-val">before ${d.prior}</text>`;
      s += `<text x="${x(d.post)}" y="${yy + 26}" text-anchor="middle" class="db-val">after ${d.post}</text>`;
      s += `</g>`;
    });
    el.innerHTML = s + `</svg>`;
  };

  /* Bars: [{name, value, max, note}] horizontal bars; active highlights one. */
  window.vizBars = function (el, bars, active = -1) {
    const W = 520, rowH = 58, H = 30 + bars.data.length * rowH, x0 = 10, x1 = W - 70;
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(bars.title || "Bar chart")}" class="viz viz-bars">`;
    bars.data.forEach((d, i) => {
      const yy = 24 + i * rowH, on = active < 0 || i === active, max = d.max || bars.max || 1;
      const w = Math.max(2, (d.value / max) * (x1 - x0));
      s += `<g opacity="${on ? 1 : 0.35}"><text x="${x0}" y="${yy}" class="db-name">${esc(d.name)}</text>`;
      s += `<rect x="${x0}" y="${yy + 8}" width="${x1 - x0}" height="16" rx="8" fill="var(--muted)" opacity=".35"/>`;
      s += `<rect x="${x0}" y="${yy + 8}" width="${w}" height="16" rx="8" fill="${d.color || "var(--accent)"}" class="bar"/>`;
      s += `<text x="${x0 + w + 8}" y="${yy + 21}" class="db-name" font-weight="700">${esc(d.label ?? d.value)}</text></g>`;
    });
    el.innerHTML = s + `</svg>`;
  };

  /* Status bar: one segment per claim, coloured by status. */
  window.vizStatusBar = function (el, claims, opts = {}) {
    const counts = {};
    claims.forEach((c) => (counts[c.key] = (counts[c.key] || 0) + 1));
    const total = claims.length || 1;
    el.innerHTML = `<div class="statusbar">${Object.entries(counts).map(([k, v]) =>
      `<span style="flex:${v};background:${(STATUS[k] || STATUS.other).color}" title="${(STATUS[k] || STATUS.other).label}: ${v}">${opts.labels !== false ? `${(STATUS[k] || STATUS.other).label} ${v}` : ""}</span>`).join("")}</div>`;
    return counts;
  };

  /* Donut of claim statuses. */
  window.vizDonut = function (el, claims, size = 150) {
    const counts = {};
    claims.forEach((c) => (counts[c.key] = (counts[c.key] || 0) + 1));
    const total = claims.length || 1, r = size / 2 - 12, C = 2 * Math.PI * r;
    let acc = 0, s = `<svg viewBox="0 0 ${size} ${size}" class="viz viz-donut" role="img" aria-label="Claim status">`;
    Object.entries(counts).forEach(([k, v]) => {
      const len = (v / total) * C;
      s += `<circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${(STATUS[k] || STATUS.other).color}" stroke-width="20" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-acc}" transform="rotate(-90 ${size / 2} ${size / 2})"><title>${(STATUS[k] || STATUS.other).label}: ${v}</title></circle>`;
      acc += len;
    });
    s += `<text x="50%" y="48%" text-anchor="middle" font-size="28" font-weight="800" fill="var(--ink)">${claims.length}</text><text x="50%" y="62%" text-anchor="middle" font-size="11" fill="var(--muted-ink, #666)">claims</text>`;
    el.innerHTML = s + `</svg>`;
    return counts;
  };

  /* Generic fallback viz for cases without extras: a status bar of claims. */
  window.vizAuto = function (el, model, active) {
    const ex = model.extras;
    if (ex.viz === "timeline" && ex.timeline) return vizTimeline(el, ex.timeline, active, { band: ex.timelineBand });
    if (ex.viz === "flow" && ex.flow) return vizFlow(el, ex.flow, active, { vertical: true });
    vizDonut(el, model.claims, 220);
  };

  /* Wrap glossary terms in the given root with hover/tap definitions. */
  window.applyGlossary = function (root, glossary) {
    if (!glossary) return;
    const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
    const used = new Set();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement.closest("a,button,.gloss,svg,h1,h2,code,th") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      for (const t of terms) {
        if (used.has(t)) continue;
        const idx = node.nodeValue.indexOf(t);
        if (idx < 0) continue;
        const after = node.splitText(idx);
        after.nodeValue = after.nodeValue.slice(t.length);
        const span = document.createElement("button");
        span.type = "button";
        span.className = "gloss";
        span.textContent = t;
        span.dataset.def = glossary[t];
        span.setAttribute("aria-label", t + ": " + glossary[t]);
        node.parentNode.insertBefore(span, after);
        used.add(t);
        break;
      }
    });
  };
})();

/* ---------- Reading helpers shared by the story and dossier views ---------- */
(function () {
  /* Clamp elements whose text is longer than `chars` to `lines` lines, with a More/Less toggle. */
  window.clampLong = function (root, selector, opts = {}) {
    const chars = opts.chars || 260, lines = opts.lines || 3;
    root.querySelectorAll(selector).forEach((el) => {
      if (el.dataset.clamped || el.textContent.trim().length < chars) return;
      el.dataset.clamped = "1";
      el.classList.add("clamp");
      el.style.setProperty("--lines", lines);
      const b = document.createElement("button");
      b.type = "button"; b.className = "more-btn"; b.textContent = "More";
      b.setAttribute("aria-expanded", "false");
      b.onclick = (e) => { e.stopPropagation(); const o = el.classList.toggle("open"); b.textContent = o ? "Less" : "More"; b.setAttribute("aria-expanded", o); };
      el.insertAdjacentElement("afterend", b);
    });
  };
  /* Show only the first `n` items of each matching list, with a "+k more" toggle. */
  window.trimLists = function (root, selector, n = 2) {
    root.querySelectorAll(selector).forEach((ul) => {
      const items = [...ul.children].filter((c) => c.tagName === "LI");
      if (items.length <= n + 1 || ul.dataset.trimmed) return;
      ul.dataset.trimmed = "1";
      items.slice(n).forEach((li) => li.classList.add("trimmed"));
      const li = document.createElement("li"); li.className = "trim-btn";
      const b = document.createElement("button"); b.type = "button"; b.className = "more-btn"; b.textContent = `+${items.length - n} more`;
      b.onclick = (e) => { e.stopPropagation(); const hidden = items[n].classList.toggle("trimmed"); items.slice(n + 1).forEach((x) => x.classList.toggle("trimmed", hidden)); b.textContent = hidden ? `+${items.length - n} more` : "Show fewer"; };
      li.appendChild(b); ul.appendChild(li);
    });
  };
  /* Navigation: a case picker and a link to the other reading style. */
  window.siteNav = function (el, slug, here, other, otherLabel) {
    const opts = Object.values(window.CASES).map((c) => `<option value="${c.slug}" ${c.slug === slug ? "selected" : ""}>${c.title.replace(/:.*$/, "")}</option>`).join("");
    el.innerHTML = `<select class="casepick" aria-label="Choose a case">${opts}</select> <a class="stylelink" href="${other}?case=${slug}">${otherLabel}</a>`;
    el.querySelector("select").onchange = (e) => (location.href = `${here}?case=${e.target.value}`);
  };
  /* Pick the chart for a story step. */
  window.stepChart = function (st, X) {
    if (!st) return null;
    if (st.chart === "bars" && X.bars) return "bars";
    if ((st.chart === "dumbbell" || st.chart === true) && X.dumbbell) return "dumbbell";
    return null;
  };
})();
