# Undue Influence in AI-Assisted Research Synthesis

**Label: Negative (partly illustrative).** AI research tools are documented to cite retracted work without warning. Launch-day and first-party claims gain reach before anyone checks them. Some kinds of influence leave no marker an agent could read.

> **How this case is built.** The case was written by John Basl, with substantial drafting by Claude, on 12 November 2026. Three vignettes show the problem at increasing difficulty. **The vignettes are invented composites.** Each is followed by the documented cases behind it. The companion case is [Morally Inadmissible Evidence](morally-inadmissible.md). Later developments are not covered.

## Sources
**Exemplar 1: retracted papers**
- Zarychanski R, et al. Starch fluids meta-analysis. *JAMA*, 20 Feb 2013. Coverage: Medical Xpress, MDedge, *The Hospitalist*. **[VERIFY — DOI not confirmed; summaries disagree on estimates]**
- Retraction Watch (2013): "Does scientific misconduct cause patient harm? The case of Joachim Boldt"
- *Anesthesiology News* (2013): "The Boldt Affair: A Quandary for Meta-Analysts"
- *MIT Technology Review* (23 Sep 2025): "AI models are using material from retracted scientific papers"
- "Performance of AI Tools in Citing Retracted Literature: Content Analysis." *Journal of Medical Internet Research*

**Exemplar 2a: unvetted results, detectable**
- Illinois Tech press release (15 Mar 2023): "GPT-4 Passes the Bar Exam"
- Katz DM, Bommarito MJ, Gao S, Arredondo P. GPT-4 passes the bar exam. SSRN, 15 Mar 2023; *Phil. Trans. R. Soc. A* 382 (2024)
- Martínez E. Re-evaluating GPT-4's bar exam performance. *Artificial Intelligence and Law* (2024)
- Center for AI Safety, Scale AI, HLE Contributors. Humanity's Last Exam. *Nature* 649 (2026); arXiv:2501.14249
- Skarlinski M, et al. About 30% of Humanity's Last Exam chemistry/biology answers are likely wrong. FutureHouse, Jul 2025 (updated Sep 2025)
- Zhang H, et al. A careful examination of LLM performance on grade school arithmetic (GSM1k). Scale AI, 2024
- *Evaluation Cards: An Interpretive Layer for AI Evaluation Reporting* (preprint)
- Ahmed N, Wahed M, Thompson N. The growing influence of industry in AI research. *Science* (2023)

**Exemplar 2b: unvetted results, no reliable signal**
- TechCrunch (19 Jan 2025); The Decoder; Decrypt; LessWrong contractor account: OpenAI funding of FrontierMath
- Singh S, et al. *The Leaderboard Illusion* (2025)
- TechCrunch (11 Apr 2025); The Decoder; *Analytics India Magazine*: Meta Llama 4 Maverick on LMArena
- OpenAI. *GPT-4 Technical Report* (2023)
- Wan A, et al. *The 2025 Foundation Model Transparency Index*

**Cross-cutting**
- Algaba A, et al. How deep do LLMs internalise scientific literature and citation practices? (2025); LLMs reflect human citation patterns with a heightened citation bias
- Bean A, et al. Measuring what matters: construct validity in LLM benchmarks. NeurIPS 2025 Datasets and Benchmarks
- Reuel A, et al. BetterBench (2024)

## Background

**Definition.** *Undue influence* is influence greater than a source's vetting justifies. Three things must hold together:
- **Reach:** citations, leaderboard adoption, press coverage, or adoption by tools other people rely on.
- **Defect:** an error, fabrication, bias or conflict of interest that a careful reader would have wanted to know about.
- **Vetting gap:** no independent check had happened when the source gained its reach. Five types recur: preprint-only publication; claims made through launch channels (blog posts, demos, press releases); undisclosed funding or access; undisclosed process rules; and artefacts outsiders cannot verify.

A **marker** is a signal an agent can read from a source or its metadata that predicts a vetting gap. A retraction flag and a first-party-only provenance label are both markers.

**Why agents raise the stakes.** Agents rank by prominence and citation count, so repetition looks like corroboration. When language models produce reference lists from memory, they favour highly cited papers (Algaba et al.). This has not been tested on retrieval-based research agents, so treat it as a reason for concern, not a measurement.

### Exemplar 1 — Retracted papers (invented composite)
A hospital pharmacist asks an AI assistant to review the evidence on an intravenous fluid before a formulary vote. Within minutes it returns nine trials, a pooled table, and a conclusion of no survival difference. Most of the trials come from one investigator whose work was retracted years earlier for fabricated data and missing ethics approval. The retraction notices exist. The assistant ignored them because the papers were still indexed and widely cited. The committee approves the fluid. **Without that investigator's trials, the same table would have shown a signal of harm.**

*Grounding.* A 2013 *JAMA* meta-analysis of starch fluids found that excluding seven trials by Joachim Boldt left starch associated with a significantly higher risk of death and kidney injury. A government investigation led to the retraction of 88 of his 102 papers since 1999. **Retraction status was an incomplete marker:** the seven excluded trials had *not* been retracted, because they predated the investigation's 1999 cutoff. A rule based only on retraction flags would have missed the trials that mattered. In an *MIT Technology Review* test using 21 retracted papers, Elicit cited 5, Ai2 ScholarQA 17, Perplexity 11 and Consensus 18, none with a retraction warning. Consensus cited only 5 in a later test, after adding retraction data. A peer-reviewed study found retracted articles in AI topic overviews without warning, with error rates above 40% in several tools. There is a real tension here: meta-analysts are reluctant to exclude studies without good reason, because completeness guards against bias. Any exclusion rule should be disclosed and its effect reported.

### Exemplar 2a — Unvetted results that can be detected (invented composite)
Dana, a social scientist moving into AI evaluation, has two days to write a grant background section. Her agent returns a brief with fourteen sources, and every headline finding has two or three agreeing citations. She concludes that models match expert humans on professional exams and are approaching research-level reasoning. A reviewer who knows the later corrections circles the sentence.

| Headline | What was underneath | Marker readable at the time |
|---|---|---|
| Top 10% on a licensing exam | Every citation traced to one launch-day claim: a press release and preprint by authors with a commercial stake. The comparison pool was skewed toward repeat takers. A re-analysis found much weaker results. | Yes: press-release origin, commercial authorship, preprint-only |
| Nine in ten programming problems | The only source was the lab's own technical report, with no independent run | Yes: first-party-only provenance |
| Hard science exam, scores rising | A preprint for its first year, yet cited by a field-wide report. A later audit found many answers in one section conflicted with the literature. | Partly: preprint-only, builders with commercial ties; defect not visible until audited |

**The fix.** Dana rewrites her instructions: trace each claim to its earliest source and downgrade press releases, launch blogs and demos; downgrade results that come only from the model's builders, and say so; prefer peer-reviewed versions and flag preprint-only results. The new brief warns that most headline claims trace back to launch announcements.

**Where the fix misfires.** It discounts correct work: the GSM1k correction of a maths benchmark came from Scale AI, which has a commercial stake. It cannot settle contested corrections: the FutureHouse audit used an agent its authors built, and the exam team's own check found a smaller share of bad answers. And it would erase most of the field, since industry produces most leading benchmarks.

*Grounding.* An Illinois Tech press release on 15 March 2023 put GPT-4 at the 90th percentile of bar takers. The SSRN paper went up the same day, by authors affiliated with Casetext, a legal-tech firm, and OpenAI displayed the figure prominently. A re-analysis placed the model near the 68th percentile overall and the 48th on essays, against a pool skewed toward repeat takers. The peer-reviewed version appeared about 11 months after the claim. Humanity's Last Exam was a preprint from January 2025 until it appeared in *Nature* in January 2026, and the 2025 AI Index cited it in between. FutureHouse found 29% (±3.7) of 321 text-only chemistry and biology questions had answers that conflicted with the literature; the exam team's follow-up found about 18%. An aggregation preprint found 95% of 213 reported GPT-5 results lacked the parameters needed to reproduce them. Ahmed, Wahed and Thompson (*Science*, 2023) report that industry produces 91% of leading AI benchmarks.

### Exemplar 2b — Unvetted results with no reliable signal (invented composite)
Dana reruns her improved agent on research-level mathematics and conversational ability. For maths, it finds a benchmark from a nonprofit, with problems written by expert mathematicians, a private held-out set, and an assurance that no model was trained on it. For conversation, it finds a public leaderboard of volunteer votes. Every rule passes. **The brief is confident, well sourced and misleading in ways neither Dana nor the agent could see.**

| Channel | What the agent saw | What was true | Why no marker existed |
|---|---|---|---|
| Funding and access | Independent nonprofit, expert authors, held-out set | A lab being scored funded the benchmark and owns the problems; a contract barred disclosure until that lab announced its score; problem writers were reportedly not told | The facts surfaced afterwards in a footnote |
| Selection | Public leaderboard, volunteer votes | Some providers tested many private variants and published only the best; one lab entered an unreleased chat-tuned variant | The rules sat outside the published results |
| Training exposure | A statement that no model was trained on the test | Labs do not disclose training data, so no outsider can check | The data is closed |

*Grounding.* On 20 December 2024, the day OpenAI demonstrated o3 on FrontierMath, Epoch AI disclosed that OpenAI had funded the benchmark. Its contract had barred earlier disclosure. OpenAI owns the questions and has access to problems and solutions, though it says it did not train o3 directly on them. The disclosure appeared as an updated footnote, and Epoch said it had not independently verified the results. *The Leaderboard Illusion* found an unstated policy letting some providers test privately, including 27 private Meta variants before Llama 4. Meta's experimental Maverick variant ranked high; the standard release ranked 32nd. Meta denied training on test sets, and the leaderboard said Meta's reading of its policy did not match expectations. The GPT-4 technical report gives no details of dataset construction. The 2025 Foundation Model Transparency Index found average transparency fell from 58 to 40 out of 100.

## Who did what

| Human/AI/User | Contribution |
|---|---|
| **Humans** | Wrote, fabricated, funded, launched and promoted the sources; ran the audits and re-analyses that exposed defects; maintain retraction databases; chose to cite |
| **AI** | Retrieves, ranks by prominence and citation, pools results, writes a confident synthesis; counts repetition as corroboration; often ignores retraction flags |
| **Users** | A pharmacist and a social scientist under time pressure, who rely on the summary and cannot see the defect without leaving it |
| **Checkpoint** | Retraction databases (Exemplar 1, often unchecked); provenance rules the user writes (2a, imperfect); none available at the time (2b) |

## Progress made
| Claim | Status | Evidence |
|---|---|---|
| Removing one investigator's trials reversed a pooled finding to harm | Verified | 2013 *JAMA* meta-analysis; exact estimates differ in summaries |
| AI research tools cited retracted papers without warning | Verified | *MIT Technology Review* test; peer-reviewed *JMIR* study |
| Adding retraction data reduces the problem | Reported | Consensus improved from 18 to 5 of 21 in a later test |
| GPT-4 scored at the 90th percentile on the bar exam | Disputed | Re-analysis: about the 68th overall and the 48th on essays |
| About 29% of HLE chem/bio answers conflict with the literature | Contested | FutureHouse audit; exam team found about 18% |
| Benchmark funding and leaderboard selection were undisclosed at the time of reach | Verified | Epoch footnote (FrontierMath); *Leaderboard Illusion* audit |
| Retrieval-based research agents rank by prominence like LLMs do from memory | Plausible, untested | Algaba et al. tested memory-based references only |

## Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| Fabricated evidence entering clinical decisions through AI summaries | Patients, formulary committees | Documented mechanism (Boldt); AI pathway documented for retracted papers |
| Suspect but unretracted work escaping flags | Anyone relying on retraction checks | Documented (pre-1999 Boldt trials) |
| Repetition read as triangulation | Researchers new to a field | Plausible; consistent with citation-bias research |
| Launch claims turning into the field's background "facts" | Grant reviewers, policy makers | Documented (bar exam) |
| Provenance rules discounting correct work from interested parties | Correct researchers, the evidence base | Documented (GSM1k) |
| Influence through channels with no marker | Everyone | Documented (FrontierMath, LMArena) |
| Revised or audited sources never re-read | Users of agents that cached the earlier version | Plausible |

---

## Deep dive 1 — Was AI necessary?

**The question:** is undue influence an AI problem, or a literature problem that agents amplify?

Undue influence is old. Boldt's trials distorted meta-analyses for a decade before any AI tool read them. Press-release science, industry-funded studies and leaderboard gaming all predate research agents. A careful human reviewer can fall for every one of these traps.

What agents change is **speed, confidence and format**. A human reviewer writing a nine-trial synthesis spends days with the papers and has a chance to notice that one name keeps appearing. An agent returns a pooled table in minutes, and the many-studies format makes the conclusion look sturdier than it is. Ranking by prominence turns citation count, which is the very thing undue influence produces, into a signal of trust. The effect is circular.

The agent is also where the fix can be applied cheaply. One tool's error rate fell sharply when it added retraction data. A human doing a manual retraction check on every source is slow; an agent can do it on every query.

> **Reading.** AI is not necessary to the harm, and it does amplify it. It also offers the cheapest place to apply the markers that already exist. The hard part, Exemplar 2b, is not something any agent can fix, because the information is not in the documents.
>
> **Push back.** A defender would say agents with good markers are better than overworked humans, who also skip retraction checks. The comparison should be agent versus the realistic human alternative, not versus an ideal reviewer.

**For discussion:** would the pharmacist have found the Boldt problem without an AI tool, given the time she had?

## Deep dive 2 — Disciplinary advance

What is known, and where the design problem sits.

1. **Retraction flags work, but only partly.** Databases such as OpenAlex and Retraction Watch provide machine-readable flags, and at least one tool improved after using them. The Boldt case shows the limit: the trials that mattered were never retracted.
2. **Origin rules catch launch-channel claims, at a cost.** Tracing to the earliest source, downgrading first-party results and flagging preprints would have caught the bar exam claim. Applied strictly, the same rules discount correct corrections and most of the field.
3. **Corrections are themselves contested.** The FutureHouse audit (29%) and the exam team's own check (about 18%) differ, and both groups have interests. No rule cleanly separates claim from correction.
4. **Versioning has no marker.** The FrontierMath disclosure arrived as a footnote in a revised paper. Retractions have flags; revised preprints and audited benchmarks do not. An agent that read the first version is never prompted to re-read.
5. **The unvetted segment has not been measured.** A review of 445 benchmarks excluded industry benchmarks without formal peer review, and a quality assessment covered only 24. Construct-validity work (Bean et al., BetterBench) shows how to assess benchmarks but has not been applied systematically.

| Exemplar | Vetting gap | Marker available today | What an agent can do now | Still open |
|---|---|---|---|---|
| 1. Retracted papers | Discredited after publication | Retraction flags (OpenAlex, Retraction Watch) | Check every source before pooling; report what was removed and the effect | Suspect studies never retracted |
| 2a. Unvetted, detectable | Preprint-only, launch channels, first-party reporting | Press-release origin, commercial authorship, provenance labels, preprint status | Trace the earliest source; downgrade by origin; flag preprint-only results | Over-discounting correct work; contested corrections; industry dominance |
| 2b. Unvetted, no signal | Undisclosed funding, process rules, training exposure | None at the time | State uncertainty; look for later disclosures and revisions | Everything: no known marker |

**For discussion:** which of these would still be true if the agent were removed?

## Deep dive 3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Stakes vary, rules do not** | Patients, decision committees | The same synthesis error matters far more for a formulary vote than for background reading. Agents seldom adjust their checks to the stakes. |
| **Concentration of credit** | Less-cited researchers, newer and non-English work | Ranking by prominence amplifies the already dominant. Correct but less-cited work, including corrections, gets less weight. |
| **Discounting interested parties** | Correct researchers in industry | Origin rules punish the source, not the defect. GSM1k was a correct correction from a commercially interested firm. |
| **Valuable but unvetted sources** | Patient-led research, community data, independent researchers | Many useful sources lack traditional peer review. A rule that discounts unvetted work hits them, not just launch blogs. |
| **Undisclosed conflicts** | Problem writers, readers, the field | FrontierMath contributors were reportedly not told who funded the work. Disclosure arriving afterwards in a footnote reaches only those who re-read. |
| **Opacity of agent ranking** | Researchers who rely on agents | Builders seldom publish their source-ranking and discounting policies, so users cannot know what was downweighted. |
| **Author's conflict of interest** | Readers | Drafted with Claude (Anthropic). Anthropic is scored in the 2025 Foundation Model Transparency Index cited above. Several cases involve OpenAI or Meta, and no Anthropic-origin case was examined. |

**For discussion:** is it worse to carry a fraudulent result or to discard a correct one? Does the answer change between a formulary decision and a grant background section?

## Deep dive 4 — Alternative views

### Debate A: should agents discount sources by origin?

**Position A — yes, origin predicts vetting gaps**
- Launch-channel and first-party claims are disproportionately overstated (bar exam, first-party GPT-5 results).
- Origin is readable today; defects often are not.
- A warning about thin evidence is more honest than a clean brief.

**Position B — no, origin punishes the wrong thing**
- Correct work from interested parties gets discounted (GSM1k).
- Industry produces 91% of leading benchmarks, so strict rules leave little to summarise.
- Origin is cheap to game: route a claim through an independent-looking intermediary.

> **A third framing.** Use origin to set uncertainty, not to exclude. An agent can say a claim is single-source and first-party, show it, and put any independent check beside it. The goal is calibrated confidence, not a cleaner-looking brief.

### Debate B: should preprints be discounted?

**Position A — flag them**
- The bar exam claim and HLE both gained reach as preprints.
- Peer review, however imperfect, is a vetting step.

**Position B — treat them as neutral**
- Preprints carried several of the corrections too, including the bar exam re-analysis and the FutureHouse audit.
- In fast fields, the peer-reviewed version arrives after the influence has happened.

> **A third framing.** What matters is time and independence, not format. A useful measure is the lag between a claim and its first independent check. An agent could report it.

### Debate C: is Exemplar 2b a problem agents can solve at all?

**Position A — no, it is a disclosure problem**
- The funding contract, the private-testing policy and the training data were not in any document.
- Only authors, platforms and funders can create the missing markers.

**Position B — partly**
- Agents can look for later disclosures and revised versions.
- They can decline to present any single benchmark as settled and state what cannot be known.

> **A third framing.** Rules written after each exposure only cover cases already known. That argues for building markers in advance, such as machine-readable funding and access fields, published leaderboard rules and version change logs, and for agents to say plainly when the evidence cannot exclude hidden channels.

## What a scientist needs to know
- Many citations that agree may be one claim repeated. Trace headline claims to their earliest source.
- Check retraction status for every source in a synthesis, and be aware that suspect work is often not retracted.
- Launch blogs, press releases, demos and builders' own technical reports are claims, not evidence.
- Benchmarks have funders, owners and submission rules. Look for them, and treat their absence as uncertainty.
- Revised preprints and audited benchmarks carry no flag. Check whether a source you rely on has been updated.
- Ask your agent to show what it discounted and why. If it cannot, assume it discounted nothing.
- Match the depth of checking to the stakes of the decision.

## Decision point
You are on a formulary committee. An AI summary of nine trials shows no difference in survival. One name is an author on six of them. You have one day. Do you (a) accept the summary, (b) rerun it with retraction checks, or (c) ask for a re-analysis excluding that author? If the result flips, what do you report, and to whom?

## Activity (20 min): "Write the Marker"
Teams propose one marker that would have caught Exemplar 2b, such as a funding-and-access field, an independent-versus-first-party provenance label, a leaderboard rules flag, or a version change log. They list what it flags across all three exemplars, what it wrongly flags, and how a builder could pass it without fixing the underlying problem. Finally, they name who would maintain it over time.

## Recommendations
| Audience | Action |
|---|---|
| Scientists | Trace claims to their earliest source; check retractions; report exclusion rules and their effect |
| Scientists | Use agents that show what they discounted; scale checks to the stakes |
| Developers (agent builders) | Check retraction databases before pooling; publish source-ranking and discounting policies |
| Developers (agent builders) | Tell independent confirmations from repeated citations of one claim; flag single-origin claims as unsettled |
| Venues and platforms | Label unreviewed work; require funding and access fields; publish leaderboard submission and private-testing rules; keep change logs for revised versions |
| Index services | Maintain flags for retractions, corrections, audits and first-party-only results, and push them quickly to tools |
| Institutions and funders | Require independent replication before a benchmark or capability claim is cited in grants and policy |

**Takeaway:** prominence is not vetting. An agent that ranks by reach will amplify whatever gained reach before it was checked, and some of what it cannot see is not in any document.

## Further discussion questions
- **Funding and access.** What would a machine-readable "who funded this, who has access" field look like, and who would audit it?
- **Independence.** How can an agent tell five independent confirmations from five citations of one claim?
- **Training exposure.** When training data is closed, what could stand in for a contamination check?
- **Gaming.** Once a marker is known, how cheap is it to pass without fixing the problem? What makes a marker hard to fake?
- **Disclosure to users.** How much detail about discounting would a researcher actually read?
- **Speed.** How quickly must a correction travel to matter?
- **Where to intervene.** At the source, the venue, the index layer, the agent, the interface, or the community? For each exemplar, what is the earliest point of prevention and the last point of catching it? Who should bear the cost of vetting? If one practice is banned, where does it move?
- **Measurement.** How would you test whether a marker works, and how would you keep the test itself from becoming a target?

NOTE: Verification needed. Most figures come from search excerpts and news or blog coverage, not full-text reads. Check the *JAMA* starch meta-analysis (no DOI confirmed; summaries disagree), whether the *Nature* version of HLE incorporated the audit findings, and the Decrypt, LessWrong and Digg pages (secondary sources). The citation-bias studies tested GPT-4, GPT-4o and Claude 3.5 producing references from memory, not retrieval agents. The cases are ones that drew public criticism. Prepared with Claude (Anthropic); see the conflict-of-interest row above.
