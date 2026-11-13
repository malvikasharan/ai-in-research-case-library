/* Shared case model: turns the parsed markdown (window.CASES) into named parts
   that every design can render. Design-independent; no DOM work here except
   the small block renderer used for "read the full text" disclosures. */
(function () {
  const strip = (h) => (h || "").replace(/<[^>]+>/g, "").trim();
  const find = (c, re) => c.sections.find((s) => re.test(s.title));

  function statusKey(s) {
    const t = strip(s).toLowerCase();
    for (const k of ["verified", "reported", "claimed", "contested", "disputed", "plausible", "not shown", "documented", "open question", "possible", "risk", "potential"]) {
      if (t.startsWith(k)) return k.replace(" ", "-");
    }
    return "other";
  }

  // Leading "<strong>Lead.</strong> rest" → {lead, rest}
  function leadSplit(h) {
    const m = (h || "").match(/^<strong>(.+?)<\/strong>\s*(.*)$/s);
    return m ? { lead: m[1].replace(/[.:]\s*$/, ""), rest: m[2] } : { lead: "", rest: h };
  }

  function parseDeepDive(sec) {
    const m = sec.title.match(/^Deep dive (\d)\s*[—-]\s*(.+)$/);
    const dd = { n: +m[1], title: m[2], question: "", body: [], reading: "", pushback: "", discussion: "", table: null, list: null, debates: [], blocks: sec.blocks };
    let debate = null, side = null;
    for (const b of sec.blocks) {
      if (b.type === "h3") {
        debate = { title: b.html.replace(/^Debate [A-Z]:\s*/, "").replace(/^./, (ch) => ch.toUpperCase()), letter: (b.html.match(/^Debate ([A-Z])/) || [])[1] || "", a: null, b: null, third: "" };
        dd.debates.push(debate);
        side = null;
        continue;
      }
      if (debate) {
        if (b.type === "p" && /^<strong>Position [AB]/.test(b.html)) {
          const pos = b.html.match(/Position ([AB])\s*[—-]\s*(.+?)<\/strong>/);
          side = { label: pos ? pos[2] : strip(b.html), points: [] };
          debate[pos && pos[1] === "B" ? "b" : "a"] = side;
        } else if (b.type === "ul" && side) {
          side.points = b.items;
        } else if (b.type === "quote") {
          debate.third = b.paras.map((p) => p.replace(/^<strong>A third framing\.<\/strong>\s*/, "")).join(" ");
        }
        continue;
      }
      if (b.type === "p" && /^<strong>The question:<\/strong>/.test(b.html)) dd.question = b.html.replace(/^<strong>The question:<\/strong>\s*/, "");
      else if (b.type === "p" && /^<strong>For discussion:<\/strong>/.test(b.html)) dd.discussion = b.html.replace(/^<strong>For discussion:<\/strong>\s*/, "");
      else if (b.type === "quote") {
        for (const p of b.paras) {
          if (/^<strong>Reading\.<\/strong>/.test(p)) dd.reading = p.replace(/^<strong>Reading\.<\/strong>\s*/, "");
          else if (/^<strong>Push back\.<\/strong>/.test(p)) dd.pushback = p.replace(/^<strong>Push back\.<\/strong>\s*/, "");
          else dd.body.push({ type: "p", html: p });
        }
      } else if (b.type === "table") dd.table = b;
      else if (b.type === "ol" || b.type === "ul") { dd.list = b; dd.body.push(b); }
      else dd.body.push(b);
    }
    if (!dd.question && dd.body[0] && dd.body[0].type === "p" && strip(dd.body[0].html).length < 160) dd.question = dd.body.shift().html;
    return dd;
  }

  function rows(sec, keys) {
    const t = sec && sec.blocks.find((b) => b.type === "table");
    if (!t) return [];
    return t.rows.map((r) => Object.fromEntries(keys.map((k, i) => [k, r[i] || ""])));
  }

  window.buildModel = function (slug) {
    const c = window.CASES[slug];
    if (!c) throw new Error("Unknown case " + slug);
    const sources = find(c, /^Sources/);
    const bg = find(c, /^(Background|The story)/);
    const recSec = find(c, /^Recommendations/);
    const act = find(c, /^Activity/);
    const all = c.sections.flatMap((s) => s.blocks);
    const noteBlock = all.find((b) => b.type === "p" && /^NOTE:/.test(strip(b.html)));
    const takeBlock = all.find((b) => b.type === "p" && /^<strong>Takeaway:<\/strong>/.test(b.html));
    const known = /^(Sources|Background|The story|Who did what|Progress made|Harm and risk|Deep dive|What a scientist|Decision point|Activity|Recommendations)/;
    const claims = rows(find(c, /^Progress made/), ["claim", "status", "evidence"]).map((r) => ({ ...r, key: statusKey(r.status) }));
    const risks = rows(find(c, /^Harm and risk/), ["risk", "who", "status"]).map((r) => ({ ...r, key: statusKey(r.status) }));
    return {
      slug, title: c.title, file: c.file,
      label: c.label,
      callouts: c.callouts.flatMap((q) => q.paras),
      sources: sources ? sources.blocks : [],
      background: bg ? bg.blocks : [],
      who: rows(find(c, /^Who did what/), ["role", "text"]).map((r) => ({ role: strip(r.role), text: r.text })),
      claims, risks,
      deepDives: c.sections.filter((s) => /^Deep dive \d/.test(s.title)).map(parseDeepDive),
      scientist: (find(c, /^What a scientist/) || { blocks: [] }).blocks.flatMap((b) => b.items || []),
      decision: ((find(c, /^Decision point/) || { blocks: [] }).blocks[0] || {}).html || "",
      activity: act ? { title: act.title.replace(/^Activity\s*/, ""), html: act.blocks.map((b) => b.html || "").join(" ") } : null,
      recs: rows(recSec, ["audience", "action"]).map((r) => ({ audience: strip(r.audience), action: r.action })),
      takeaway: takeBlock ? takeBlock.html.replace(/^<strong>Takeaway:<\/strong>\s*/, "") : "",
      note: noteBlock ? noteBlock.html.replace(/^NOTE:\s*/, "") : "",
      extraSections: c.sections.filter((s) => !known.test(s.title)),
      extras: (window.EXTRAS || {})[slug] || {},
    };
  };

  window.STATUS = {
    verified: { label: "Verified", color: "#2a9d5c" },
    documented: { label: "Documented", color: "#2a9d5c" },
    reported: { label: "Reported", color: "#3a7bd5" },
    claimed: { label: "Claimed", color: "#e0a100" },
    plausible: { label: "Plausible", color: "#8e6bd1" },
    possible: { label: "Possible", color: "#8e6bd1" },
    potential: { label: "Potential", color: "#8e6bd1" },
    risk: { label: "Risk", color: "#8e6bd1" },
    contested: { label: "Contested", color: "#e8731a" },
    disputed: { label: "Disputed", color: "#d1342f" },
    "not-shown": { label: "Not shown", color: "#8a8a8a" },
    "open-question": { label: "Open question", color: "#8a8a8a" },
    other: { label: "Other", color: "#8a8a8a" },
  };

  window.renderBlocks = function (blocks) {
    return blocks.map((b) => {
      if (b.type === "p") return `<p>${b.html}</p>`;
      if (b.type === "h3") return `<h4>${b.html}</h4>`;
      if (b.type === "ul") return `<ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
      if (b.type === "ol") return `<ol>${b.items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
      if (b.type === "quote") return `<blockquote>${b.paras.map((p) => `<p>${p}</p>`).join("")}</blockquote>`;
      if (b.type === "table") return `<div class="tablewrap"><table><thead><tr>${b.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((d) => `<td>${d}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      return "";
    }).join("");
  };

  window.firstSentence = function (h) {
    const t = strip(h);
    const m = t.match(/^(.+?[.?!])(\s|$)/);
    return m ? m[1] : t;
  };
  window.stripTags = strip;
  window.leadSplit = leadSplit;
  window.caseSlug = function (fallback) {
    return new URLSearchParams(location.search).get("case") || fallback || "navier-stokes";
  };
})();
