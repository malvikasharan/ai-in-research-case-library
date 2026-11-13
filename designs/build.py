#!/usr/bin/env python3
"""Parse case-study markdown files into structured data for the HTML designs.

Usage:  python3 designs/build.py
Writes: designs/data/cases.js  (window.CASES = {...})

The parser understands the shared case format: '# Title', a '**Label: X.**' line,
optional '>' callouts, '## Section' headings, '### Sub-headings', pipe tables,
bullet/numbered lists, blockquotes and paragraphs. It is deliberately small; it
does not try to be a full Markdown implementation.
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = Path(__file__).resolve().parent / "data" / "cases.js"

CASE_FILES = {
    "navier-stokes": "navier–stokes.md",
    "long-tail-research": "long-tail-research.md",
    "alphafold": "alphafold.md",
    "virtual-lab": "virtual-lab.md",
    "undue-influence": "undue-influence.md",
    "morally-inadmissible": "morally-inadmissible.md",
    "word-weaponization": "word-weaponization.md",
}


def inline(text: str) -> str:
    """Convert a small subset of inline Markdown to HTML."""
    t = html.escape(text, quote=False)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", r'<a href="\2">\1</a>', t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", t)
    t = re.sub(r'(?<!href=")(?<!">)(https?://[^\s<)]+)', r'<a href="\1">\1</a>', t)
    return t


def split_row(line: str):
    cells = line.strip().strip("|").split("|")
    return [inline(c.strip()) for c in cells]


def parse_blocks(lines):
    blocks, i = [], 0
    while i < len(lines):
        line = lines[i]
        s = line.strip()
        if not s or s == "---":
            i += 1
            continue
        if s.startswith("#"):
            # Any heading inside a section becomes a sub-heading (avoids stalls on stray headings).
            blocks.append({"type": "h3", "html": inline(s.lstrip("#").strip())})
            i += 1
        elif s.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(lines[i])
                i += 1
            head = split_row(rows[0])
            body = [split_row(r) for r in rows[2:]] if len(rows) > 1 and re.match(r"^\|?\s*:?-", rows[1].strip()) else [split_row(r) for r in rows[1:]]
            blocks.append({"type": "table", "head": head, "rows": body})
        elif re.match(r"^[-*] ", s):
            items = []
            while i < len(lines) and re.match(r"^\s*[-*] ", lines[i]):
                items.append(inline(re.sub(r"^\s*[-*] ", "", lines[i]).strip()))
                i += 1
            blocks.append({"type": "ul", "items": items})
        elif re.match(r"^\d+\. ", s):
            items = []
            while i < len(lines) and re.match(r"^\s*\d+\. ", lines[i]):
                items.append(inline(re.sub(r"^\s*\d+\. ", "", lines[i]).strip()))
                i += 1
            blocks.append({"type": "ol", "items": items})
        elif s.startswith(">"):
            paras, cur = [], []
            while i < len(lines) and lines[i].strip().startswith(">"):
                content = lines[i].strip()[1:].strip()
                if content:
                    cur.append(content)
                elif cur:
                    paras.append(inline(" ".join(cur)))
                    cur = []
                i += 1
            if cur:
                paras.append(inline(" ".join(cur)))
            blocks.append({"type": "quote", "paras": paras})
        else:
            cur = []
            while i < len(lines):
                t = lines[i].strip()
                if not t or t == "---" or t.startswith(("#", "|", ">")) or re.match(r"^([-*]|\d+\.) ", t):
                    break
                cur.append(t)
                i += 1
            blocks.append({"type": "p", "html": inline(" ".join(cur))})
    return blocks


def parse_case(md: str):
    lines = md.splitlines()
    title, label_tag, label_text, pre, sections, cur = "", "", "", [], [], None
    for line in lines:
        if line.startswith("# ") and not title:
            title = line[2:].strip()
        elif line.startswith("## ") or (line.startswith("# ") and title):
            cur = {"title": line.lstrip("#").strip(), "lines": []}
            sections.append(cur)
        elif cur is None:
            m = re.match(r"^\*\*Label:\s*(.+?)\.?\*\*\.?\s*(.*)$", line.strip())
            if m:
                label_tag, label_text = m.group(1), m.group(2)
            else:
                pre.append(line)
        else:
            cur["lines"].append(line)
    return {
        "title": title,
        "label": {"tag": label_tag, "html": inline(label_text)},
        "callouts": [b for b in parse_blocks(pre) if b["type"] == "quote"],
        "sections": [{"title": s["title"], "blocks": parse_blocks(s["lines"])} for s in sections],
    }


def main():
    data = {}
    for slug, fname in CASE_FILES.items():
        path = ROOT / fname
        if not path.exists() or not path.read_text(encoding="utf-8").strip():
            print(f"skip {fname} (missing or empty)")
            continue
        data[slug] = {"slug": slug, "file": fname, **parse_case(path.read_text(encoding="utf-8"))}
        print(f"parsed {fname}: {len(data[slug]['sections'])} sections")
    synth = ROOT / "cross-case-synthesis.md"
    if synth.exists():
        data_synth = parse_case(synth.read_text(encoding="utf-8"))
        print(f"parsed cross-case-synthesis.md: {len(data_synth['sections'])} sections")
    else:
        data_synth = None
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("// Generated by designs/build.py — do not edit by hand.\nwindow.CASES = "
                   + json.dumps(data, ensure_ascii=False, indent=1) + ";\nwindow.SYNTHESIS = "
                   + json.dumps(data_synth, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
