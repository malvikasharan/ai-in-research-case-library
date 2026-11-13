Step 1: Case studies

Files provided: Appriasal guide, meeting notes that are now in README file, three case stduies pre-formatted alphafold, virtual lab and Navier Stokes, and initial drafts of other four case studies

Input: read appraisal guide that has been used for format three case studies alphafold, virtual lab and Navier Stokes. Use these as reference then rewrite other case studies to match the format - add information if missing but try to use the information provided as much as possible. finally update the cross case study synthesis.

Opus output: I've read the appraisal checklist and the three reference cases. Next I'm reading the other case files and the synthesis.
Now I'll gather sources for the thin "word weaponization" case. Its file has only one link.

I have enough documented material for the weaponization case. One more fetch to check the court opinion's own wording, then I'll write.
Sources are gathered, including the full NEH court opinion. Next I'll back up the originals and write the three rewritten cases.

Morally inadmissible is done. Now the undue influence case.
Undue influence is done. Next is the weaponization case, built mainly on the NEH court opinion, which I read in full text.

That `claude --resume` is a CLI command for reopening a session, so I'll take it as you picking up where we left off. First, a small fix: I used a quote out of context.

I've rewritten the three remaining cases in the same format as AlphaFold, Virtual Lab and Navier–Stokes, and updated the cross-case synthesis. All three now have the reference cases' sections in the same order, from Label and Sources through the four deep dives to Recommendations, a Takeaway and a closing verification NOTE. Your originals are saved in `archive/originals-2026-11-12/`.

**Undue Influence** (`undue-influence.md`) and **Morally Inadmissible Evidence** (`morally-inadmissable.md`)
- Almost nothing from the originals was dropped. The vignettes, documented cases, definitions and building blocks now sit inside the template's sections, including the Havasupai background in the second case.
- I wrote the new parts the template needs: who did what, claim and risk tables, debates, a decision point, an activity and recommendations.
- Your long discussion-question lists didn't fit any template section, so I kept them in a short "Further discussion questions" section at the end of each case.
- Both are labelled **Negative (illustrative)**, because the vignettes are invented composites and the case states that. The Undue Influence label adds "partly", since AI tools citing retracted papers is documented.
- The original notes that these were drafted with Claude, and that Anthropic appears in both cases, are kept.

**Word Weaponization** (`word-weponization.md`)
- The original was one WIRED link plus a blank template, so I researched this one and built it mostly from new material.
- Its core is the May 2026 court ruling on the National Endowment for the Humanities (NEH) grant cuts, which I read in full text. It records the exact ChatGPT prompt, the list of search terms, the examples of mislabelled grants, and the judge's rejection of the "the AI did it" defence.
- Supporting sources cover the keyword lists used by NSF and NIH and WIRED's HHS–Palantir story. I couldn't open the WIRED article or the *Science* analysis directly, so those details come from summaries and are marked **[VERIFY]**.
- Your template's questions on lessons for AI are answered in a short closing section.
- **Your note mentioned "Brandeis", but I found no source connecting it to the grant screening.** It's flagged for you to clarify.

**Cross-case synthesis** (`cross-case-synthesis.md`)
- All six cases now appear in the claim-and-check, "Was AI necessary?" and side-by-side tables.
- I added a fourth and fifth recurring pattern ("responsibility doesn't pass to the tool" and "who is recognised, and who is erased"), and a table comparing the three newer cases.
- It also suggests case pairings for teaching and has a merged list of items to verify for every case.

Step 2: Html style

Input: create 3 best designs based on the pudding journaling website to serve two case studies: navier-stokes and long-tail-research, which i will explore to select best design, that could be then used to render all case studies in a scrollable, browsable, visual and interactive to keep readers interested while they read and understand the case study without consgetting overwhelmed with too much information.

Opus output: I'll start by checking the tools I can use to preview the pages.

I'm building a shared content layer that parses each case study into structured data, then three different designs on top of it, plus an index page; I'll start with the parser.

The parser handles every case cleanly. Next, the shared model layer that turns sections into meaning: claims, debates, deep dives.

Now the hand-written extras (hooks, key numbers, scroll steps, chart data, glossary) and the appraisal checklist.

Now the shared base styles, then the three designs.

Design A is the classic Pudding scrollytelling layout: a sticky graphic that changes as you scroll past the story.

Let me smoke-test Design A in headless Chrome before building the other two.

No JavaScript errors; the remaining lines are harmless headless display warnings. Now a visual check.

The hero looks right. A tall viewport doesn't work for checking further down because the hero fills the full height, so I'll jump to chapter anchors instead.

The anchor screenshots came back blank, which looks like a headless-capture quirk with scrolled pages. I'll drive Chrome over the DevTools protocol instead, so I can scroll and capture properly.

The screenshots show my scroll helper put each step at the top, not the middle where steps trigger. The step cards themselves render fine. Fixing the helper to centre the element:

The dumbbell chart is working; next I'm spacing the timeline events evenly so early-September ones stop overlapping, wrapping the long detail text, and fixing the clipped axis labels on the dumbbell.

Design A is working end to end, with the claims chapter, debate slider and reveal all rendering. I'm building Design B next, a one-idea-at-a-time card deck with a claim-guessing game, debate voting and a decision-point choice.

Design B is working, so I'm now building Design C, a layered dossier with Skim, Read and Deep levels and a live appraisal scorecard.

Design C works: the depth switch, status chips and scorecard highlighting now update on scroll. Next I'll fix overlapping stage labels and gate spacing in the pipeline, then cap the dumbbell chart's width before the index page.

Now the comparison index page.

Now a final round of checks: the fixed pipeline graphic, mobile layouts, and a case with no extras, to confirm the fallback works.

All seven cases render in all three designs with no JavaScript errors, including the five that have no hand-written extras. Checking the visual fixes:

On mobile, Design A's pinned graphic covers the step text. I'll make the graphic smaller, layer the step cards above it, and trigger steps lower on the screen.

I built three designs, each showing Navier–Stokes and Long-Tail Research. Open `designs/index.html` in a browser to compare them side by side.

| Design | How it avoids overload | Main interactions | Best for |
|---|---|---|---|
| **A · Scrollytelling** (`a-scrolly.html`) | **Pacing:** a graphic stays pinned on screen and changes as each step of the story scrolls past | Key numbers count up; claims appear one by one with status colours; tap a claim for its evidence; "Our reading" vs "Push back" side by side; a "where do you stand?" slider on each debate reveals the third framing | First-time readers, public audiences, cases with a strong timeline |
| **B · Story cards** (`b-cards.html`) | **Chunking:** one idea per card, with a progress bar per chapter; swipe or use the arrow keys | A claim-check game (guess each claim's status, then see the evidence); vote on each debate; pick (a)–(d) at the decision point; a final card sums up your score, votes and choice | Classrooms and workshops, phones, readers who drift on long pages |
| **C · Layered dossier** (`c-dossier.html`) | **Layering:** a **Skim / Read / Deep** switch (about 3 minutes, about 12 minutes, or everything with sources) | An "at a glance" dashboard; filter claims by status; a **live appraisal scorecard** where the 16 checklist questions light up as you scroll and you rate each one | Researchers, evaluators, and turning cases into tool evaluations |

The visuals for these two cases:
- **Navier–Stokes:** a timeline from 1 September to November that highlights the announcement coming before any outside check.
- **Long-Tail Research:** a pipeline showing which checks are present or missing (provenance logged; no depositor approval; no expert review), and a chart of the AI's belief before and after seeing each dataset.
- **Both:** hover definitions for terms like Lean, Bayesian surprise and FAIR.

**Tested:** I checked all three designs in headless Chrome at desktop and phone sizes, and fixed the layout problems that turned up. All seven cases render in every design with no JavaScript errors. Interactions I didn't simulate, such as swiping, I haven't checked on a real device.

**Extending to all cases:**
- **Text comes from your markdown files.** After editing any case, run `python3 designs/build.py` and reload the page.
- **The visual extras are hand-written,** in `designs/data/extras.js`: hook, key numbers, short scroll steps, chart data and glossary. The other five cases work now without extras (try `?case=virtual-lab`), but they fall back to the background paragraphs and a claim-status chart.
- **Writing extras for each case is the main remaining work** once you pick a design.
- **No build tools or outside requests.** The pages open straight from disk and will work on GitHub Pages. Reader answers, votes and scores are saved only in that reader's browser.

The scroll steps, hooks and key numbers in `designs/data/extras.js` are my condensed wording, drawn from the case files. Check them against the cases as you would the cases themselves.

Once you've picked a design, tell me which elements to borrow from the other two.

Part 3: Scaling the selected design

Input: Use the style a-scrolly and c-dossier both for different audience. Make text heavy visible parts in a less text heavy. In th first number section of style a where ~10,000 is shown, it bleeds into 88h and looks like 10,00088h. Use 10k to avoid that. do the same for other case studies. Create a landing page with short summary of the project and cross case study synthesis, that link to different case studies

Output: I'll check what you changed in `navier–stokes.md` and `virtual-lab.md` first, so the visual extras match the current text.

Your edit to `navier–stokes.md` changed the label line, so the parser no longer finds it. Checking the file's opening lines:

I'm making the parser accept the `**Label: Contested**` form and have it parse the cross-case synthesis too, so the landing page stays in sync.

The build hung. The cause is the synthesis file's second top-level `#` heading, which my parser has no case for, so it loops forever. Stopping it and fixing:

The parser is fixed and all seven cases parse. I'm adding a bar-chart visual and a configurable timeline label next, then the visual extras for the remaining five cases.

The extras now cover all seven cases. Next, a shared "less text" toolkit: long passages get clamped to a few lines with a More button, and long bullet lists show their first items with "+N more".

Now updating the story view (Design A). It gets the shorter numbers, the case picker, a link to the dossier view, the new charts, and clamped text.

