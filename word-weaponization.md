# Word Weaponization: AI and Keyword Screening of Research Grants

**Label: Negative.** Keyword lists and a generative AI chatbot were used to decide which funded research to cancel. The criterion was a viewpoint, the AI was given no definition, and the work most affected was by and about historically underrecognised people. A federal court held the process unconstitutional and rejected the defence that "the AI did it".

> **This is a living case.** Litigation, appeals and agency policy moved quickly through 2025–2026. Facts below are as of mid-November 2026. Re-check court status before each teaching session.

## Sources
**Primary**
- *American Council of Learned Societies v. National Endowment for the Humanities*, consolidated with *Authors Guild v. NEH*, Nos. 25-cv-3657 and 25-cv-3923 (CM) (S.D.N.Y.), Opinion and Order granting summary judgment, McMahon J., filed 7 May 2026 (Dkt. 291, 143 pp.). https://www.acls.org/wp-content/uploads/2026/05/291-Memo-opinion-050726.pdf. Also on Justia. **Read in full text.**
- HHS 2025 AI Use Case Inventory (entry for the Administration for Children and Families) **[VERIFY — not opened]**

**Reporting and analysis**
- WIRED (early Feb 2026): "HHS Is Using AI Tools From Palantir to Target 'DEI' and 'Gender Ideology' in Grants." https://www.wired.com/story/hhs-is-using-ai-tools-from-palantir-to-target-dei-and-gender-ideology-in-grants/
- Higher Ed Dive (23 Jul 2026), L. Spitalniak: "Ctrl+F: Federal agencies used keyword searches to nix grants en masse, court records show"
- Higher Ed Dive (27 Jul 2026), L. Spitalniak: "Inside the federal keyword lists that canceled billions in research funding"
- Urban Institute (9 Jul 2025), J. Schwabish and J. Axelrod: "NSF Has Canceled More Than 1,500 Grants. Nearly 90 Percent Were Related to DEI."
- *Science*: "NSF's grant cuts fall heaviest on scientists from underrepresented groups"
- National Law Review / Epstein Becker Green (7 Jul 2026), L. B. Taylor and E. Flood: "Defunding DEI Hits a Legal Wall: Courts Shield Federal Funding Recipients From Biased AI Overreach"
- IBTimes UK (12 Mar 2026): deposition testimony on ChatGPT use at NEH
- Sen. Ted Cruz, *D.E.I. Division. Extremism. Ideology.* (Senate Commerce Committee report, 2024), the source of NSF's term list
- Frontiers in Education (2026): "Unraveling federal award terminations: evidence from the Louis Stokes Alliances for Minority Participation" (not read; suggested further reading)
- Case proposed at the workshop by Brandeis (see [workshop notes](archive/originals-2026-11-12/notes.md))

## Background

From January 2025, executive orders directed federal agencies to end funding for "equity-related" work. Executive Order 14151 ended federal DEI programmes. Executive Order 14168 defined "sex" as an immutable biological classification and barred promotion of "gender ideology". Agencies then had to find out which of tens of thousands of active awards to cancel. Court records show they mostly did it by searching for words.

**NEH and ChatGPT (the documented core of this case).** In early April 2025, NEH terminated more than 1,400 grants worth over $100 million: the largest mass termination in its history. The process was run by two DOGE staff, Justin Fox and Nate Cavanaugh, political appointees in their twenties detailed from the General Services Administration. According to the court, neither had experience evaluating humanities projects. On 12 March 2025 they sent NEH's acting chair a spreadsheet titled "Biden Grants": 1,295 awards with about $322 million "remaining (can presumably be clawed back)".

Fox had already run keyword searches over grant descriptions, using a tab labelled "Detection Codes". Its terms included "Tribal", "Immigrants", "diversity", "inclusion", "Indigenous", "Native", "Equity", "Equality", "Marginalized", "BIPOC", "Solidarity", "Citizenship", "Melting Pot", "Social Justice", "LGBTQ", "Homosexual" and "Gay". He sorted grants into "Craziest Grants" and "Other Bad Grants", labels he admitted reflected his and Cavanaugh's "subjective" views.

For grants that NEH's own staff had marked "N/A" (not DEI-related), Fox ran a second pass to find more grants to put "on the road to termination". He submitted each short spreadsheet description to ChatGPT with this prompt:

> "Does the following relate at all to DEI? Respond factually in less than 120 characters. Begin with 'Yes.' or 'No.' followed by a brief explanation."

He did not define DEI and did not know how ChatGPT understood it. The spreadsheet records outputs for roughly 1,162 descriptions (rows C2–C1163). The ChatGPT "DEI rationales" were merged with NEH staff ratings into the final termination lists. NEH's acting chair testified that he did not know ChatGPT had been used and did not think AI was appropriate for the task.

Examples the court cited of grants ChatGPT labelled "DEI":
- Recovering ancient texts attributed to Moses (Jubilees, Testament of Moses) using multispectral imaging, flagged because it offered "insight into Jewish thought".
- "How the City Became Plastic", a history of the plastics industry and municipal building codes. Rationale: "Yes. This description highlights how the plastics industry influenced municipal government officials… #DEI."
- A study of the Chinese government's persecution of the Uyghurs.
- A monograph on American women in Paris, 1890s–1968.
- Digitising mid-century African-American newspapers for the National Digital Newspaper Program, flagged for "preserving and sharing underrepresented voices".
- Digitising interactive "flap books" from a history of medicine library, flagged for "promoting inclusivity in digitization efforts".

On 7 May 2026, Judge Colleen McMahon granted summary judgment to the plaintiffs. She held that the terminations violated the First Amendment (viewpoint discrimination) and the equal protection component of the Fifth Amendment (classification by race, gender and sexual orientation), and that nothing in NEH's statute permitted the process. She issued a permanent injunction against giving effect to the terminations.

**NSF, NIH and other agencies.** Court filings in a University of California researchers' lawsuit (about $2 billion in terminated grants) show NSF, NIH, the Department of Defense and NEH relied on keyword lists. They identified awards "using general criteria" rather than assessing each grant. NSF took its list from a 2024 report by Sen. Ted Cruz: hundreds of terms including "advocates", "biases", "equitable", "women and gender", "Black men" and "Indigenous women". It ran them through an internal search tool, sent form letters, and did not say which term triggered each termination. NIH searched for "structural racism", "workforce diversity", "health equity" and permutations. It also cancelled grants that carried diversity supplements, which fund researchers from underrepresented or disadvantaged backgrounds. The Department of Defense also targeted climate and renewable-energy terms.

**HHS and Palantir.** WIRED reported in February 2026 that HHS's Administration for Children and Families had used Palantir and Credal AI tools since March 2025 to flag grant applications, existing grants and job descriptions for "DEI" and "gender ideology" language, with ACF staff doing a final review. The use was disclosed through HHS's 2025 AI use case inventory, not announced. Palantir's 2025 HHS payments are reported at over $35 million, though procurement records do not mention this work.

## Who did what

| Human/AI/User | Contribution |
|---|---|
| **Humans** | Wrote the executive orders and the Cruz term list; chose the criterion ("relates at all to DEI"); chose the tools; wrote the prompt; built the "Detection Codes"; applied pressure to terminate quickly; signed termination letters. On the other side: researchers, scholarly societies and courts challenged the process. |
| **AI** | ChatGPT produced one-line yes/no "DEI rationales" from short descriptions, with no definition and no grant materials. Palantir and Credal tools at HHS flagged documents for review. Search tools matched keywords. |
| **Users** | DOGE staff, who adopted the outputs; agency leadership, who in NEH's case were not told AI was used |
| **Checkpoint** | NEH's statutory peer review and advisory council were bypassed. The court found "not a scintilla of evidence" of meaningful review of the ChatGPT rationales. HHS reports a final staff review **[VERIFY]**. The effective check was litigation, after the terminations. |

## Progress made
| Claim | Status | Evidence |
|---|---|---|
| NEH terminated over 1,400 grants (>$100M) in April 2025 using keyword screening and ChatGPT rationales | Verified | S.D.N.Y. opinion, 7 May 2026, citing depositions and spreadsheets |
| The terminations were unconstitutional and unauthorised by statute | Verified (subject to appeal) | Summary judgment and permanent injunction, McMahon J. **[VERIFY appeal status]** |
| Viewpoint discrimination doctrine applies to funding terminations | Verified (9th Cir.) | *Thakur v. Trump*, as summarised in legal commentary **[VERIFY]** |
| NSF, NIH, DoD and NEH used keyword lists, not individual review | Verified | Agency filings in the UC lawsuit, per Higher Ed Dive |
| ~90% of cancelled NSF grants contained a DEI-category word vs ~50% of others | Reported | Urban Institute text analysis; correlational |
| Cuts fell hardest on women and underrepresented PIs (58% of cancelled NSF grants led by women vs 34% of active) | Reported | *Science* analysis, read only as a summary **[VERIFY]** |
| HHS ACF uses Palantir and Credal AI to flag DEI and "gender ideology" language | Reported | WIRED via reprints; HHS AI inventory not opened |
| AI screening is a neutral aid to human judgement | Disputed | Rejected by the court for NEH, where AI outputs were adopted without review |

## Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| Cancellation of sound research for its subject, not its quality | Researchers studying race, gender, sexuality, Indigenous and immigrant histories | Documented |
| Loss of funding for researchers from underrepresented backgrounds | Diversity-supplement holders, women-led and minority-led projects | Documented (NIH); reported (NSF) |
| Generative AI producing pretextual "rationales" on demand | Any grantee | Documented (NEH) |
| Responsibility pushed onto the tool | The public, courts | Documented; argued by the government and rejected |
| Chilling effect: self-censoring of words in proposals | Grant writers, early-career researchers, institutions | Reported |
| Erasure from the record of vocabulary that marks underrepresented work | Future discovery and synthesis tools | Plausible |
| Bypassing peer review and statutory process | Funding agencies, the research system | Documented (NEH) |
| Scaling to other agencies via procured AI | Applicants to HHS and other agencies | Reported (HHS–Palantir) |

---

## Deep dive 1 — Was AI necessary?

**The question:** did AI make this possible, or did it make it look legitimate?

Most of the screening needed no AI at all. NSF's list came from a Senate report and was run through a search tool. Fox's "Detection Codes" were Ctrl+F. Keyword matching across a few thousand grant descriptions is a spreadsheet task.

ChatGPT was used for something else: a **second pass over grants that NEH's own staff had already judged not to be DEI-related**. Its job was to find additional reasons to terminate. The prompt asked whether a project "relate[d] at all to DEI", which nearly any humanities project can be made to do. It asked for an answer in under 120 characters. The court observed that the tool may simply have inferred what its users wanted and "supplied 'rationales' simply in order to satisfy the user's perceived demand".

So the AI did not add capability. It added **scale of justification**: over a thousand one-line rationales that looked like assessments, generated without anyone reading the grants. It also gave the government an argument it later made in court, that the classifications were ChatGPT's and not its own.

> **Reading.** AI was not necessary, and that is the point. A keyword list could already find the grants. The chatbot turned a viewpoint test into text that looked like review, and it failed every item of the appraisal checklist's first group: no task fit, no ground truth, no validation, no baseline, no uncertainty.
>
> **Push back.** A defender would say agencies faced an impossible volume and an executive mandate, and that AI-assisted triage with human sign-off is standard in large programmes. The answer from the record is that sign-off did not happen at NEH, and the mandate itself was what the court found unconstitutional.

**For discussion:** if Fox had used only the keyword list, would the case be ethically different? Legally different?

## Deep dive 2 — Disciplinary advance

In this case, "advance" means what the record and the courts established, not what research gained.

1. **The courts set a clear rule on AI and responsibility.** "There is no distinction to be drawn here between the Government and ChatGPT. ChatGPT was the Government's chosen instrument." DOGE "selected the AI tool, formulated the prompt, and defined the operative viewpoint-based criterion". The judge compared the government's argument to the comedian Flip Wilson's "The devil made me do it". This is the clearest judicial statement so far that delegating to a model does not transfer accountability (appraisal item 9).
2. **Discovery made the process visible.** The prompt, the spreadsheets, the term lists and the deposition testimony are all in the public record. That only happened because scholarly societies sued. No AI disclosure rule required it.
3. **The damage was measured, roughly.** Urban Institute found ~94% of cancelled NSF grants contained a word from a published list of flagged terms, against ~67% of others. More than three-quarters of the rest went to Harvard and concerned misinformation. *Science* reports women led 58% of cancelled NSF grants but only 34% of active ones **[VERIFY]**. These are correlational, and agencies did not disclose which word triggered each cut.
4. **Statute already specified a better process.** NEH's authorising act requires individual evaluation by subject experts, advisory review and Council involvement. It also tells NEH to support work reflecting "the diversity and richness of our American cultural heritage" and to give "particular regard" to underrepresented scholars and institutions. The screening targeted exactly what Congress had asked NEH to fund.
5. **Remedies were partial and slow.** Some grants were reinstated after court orders. Others moved to the Court of Federal Claims after the Supreme Court held that a district court lacked authority to restore NIH funding. Projects were interrupted mid-stream regardless of later rulings.

**For discussion:** which of these outcomes depended on the AI component being in the record?

## Deep dive 3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Words as proxies for people** | Researchers who are women, Black, Indigenous, LGBTQ, immigrants, or who study them | "Indigenous women", "Black men", "Gay" and "Tribal" were search terms. Classifying research by these words classifies it by the identity of its subjects or authors. The court treated this as a race-, gender- and sexual-orientation-based classification. |
| **Recognition run in reverse** | Historically underrecognised researchers | Appraisal item 13 asks whether a system surfaces underrepresented people or amplifies the dominant. This system did the first in order to defund. The same vocabulary that makes such work findable made it a target. |
| **Undefined criteria and fabricated reasons** | Grantees | "DEI" was never defined. A generative model asked to find a link will usually find one. Rationales like "#DEI" for a history of plastics are not reasons. They are text shaped like reasons. |
| **Accountability laundering** | The public, courts | The government argued that viewpoint classification was ChatGPT's doing. Leadership was not told AI was used. Responsibility was spread until no one held it, which the court refused to accept. |
| **Bypassing expert review** | The research system | NEH's peer reviewers had already funded these projects. Two non-experts with a chatbot overrode that review. Cavanaugh confirmed they did not examine the applications, and the court notes they "admittedly never read" at least one proposal. |
| **Chilling effect and self-censorship** | Future applicants | Researchers report rewording proposals to avoid flagged terms. That makes underrepresented work harder to find in the record, including for future AI discovery tools. |
| **Opaque procurement** | Applicants to HHS programmes | HHS's use of Palantir and Credal tools was not announced and surfaced through an inventory. Applicants cannot see the criteria or challenge a flag. |
| **Dual use of discovery tools** | Anyone building research-discovery AI | Semantic search and classification built to find underrepresented work can be turned to exclude it. Builders of inclusive discovery tools should assume their classifiers can be repurposed. |

**For discussion:** pick the item you think most serious. Who can fix it: the researcher, the institution, the agency, the vendor, the courts, or Congress?

## Deep dive 4 — Alternative views

### Debate A: is AI-assisted screening of grants inherently wrong?

**Position A — the tool is neutral; the criterion was the problem**
- Agencies legitimately screen for eligibility, compliance and conflicts at scale.
- A clear, lawful criterion with expert review could use AI triage responsibly.
- The same methods could find duplicate funding or fraud.

**Position B — this use is structurally prone to abuse**
- A generative model asked "does this relate at all to X?" will usually say yes, so it serves any predetermined outcome.
- Short descriptions remove the context experts use.
- Speed and volume reward termination over review.

> **A third framing.** Ask the appraisal checklist's first questions. Is the task narrow and measurable? Is there ground truth? Was the output validated before it was acted on? Here the answers were no, no and no. A tool can be neutral and its deployment still fail every test of sound method.

### Debate B: does "a human made the final call" make it acceptable?

**Position A — yes, if review is real**
- HHS says ACF staff do a final review.
- AI flags, humans decide, is a common and defensible design.

**Position B — not if the review is nominal**
- At NEH there was "not a scintilla of evidence" of meaningful review of the rationales.
- The person with formal authority did not know AI was involved.
- Pressure tactics ("pressure from the top", later admitted to be invented) were used to shorten deliberation.

> **A third framing.** As in the [Virtual Lab case](virtual-lab.md), an overall "human in the loop" claim is the wrong metric. Ask which decision required a human signature, whether that human saw the evidence, and whether they could say no. At NEH, the acting chair's attempt to spare grants whose "DEI rationale" showed no DEI component was not the deciding factor.

### Debate C: should researchers change their language to survive screening?

**Position A — yes, pragmatically**
- Funding keeps labs, students and communities going.
- The science is unchanged by changing the words.

**Position B — no, the words carry the science**
- "Health equity" and "structural racism" name research constructs, not slogans.
- Euphemism makes the work harder to find, cite and synthesise, including for future AI tools.
- Self-censorship does the screener's work for them.

> **A third framing.** This is a choice individuals should not have to make alone. Institutions, societies and funders can protect vocabulary, for example through shared guidance, legal support and repositories that preserve original descriptions. Notice also that the litigation that produced this record was brought by organisations, not single researchers.

## What a scientist needs to know
- Keyword screening matches words, not meaning. Your project can be flagged for a word used in an unrelated sense.
- A generative AI "rationale" is not an assessment. If you receive one, ask what definition, inputs and review were used.
- You have a right to the basis of a decision. The NEH record shows discovery can reveal the prompt and spreadsheets.
- Funding statutes may protect your subject explicitly. NEH's act names cultural diversity and underrepresented scholars.
- Keep your own records of proposals, award terms and correspondence; termination letters are often form letters.
- Professional societies (ACLS, AHA, MLA, Authors Guild) and university counsel brought the successful cases. Use collective channels.
- If you build discovery or classification tools for research, assume they can be repurposed to exclude, and design for contestability.

## Decision point
You are a programme officer. You are told to identify, within two weeks, every active award that "relates at all to DEI", and are offered an AI tool that will produce yes/no rationales from award titles. Do you (a) use it as instructed, (b) insist on a written definition and full grant materials, (c) require subject-expert review of every flag, or (d) refuse? What would you put in writing, and to whom?

## Activity (20 min): "Run the Prompt"
Give teams six real NEH grant descriptions quoted in the court opinion (the Moses texts, the plastics history, the Uyghur study, American women in Paris, the African-American newspapers, the flap books). Teams first decide, as expert reviewers, whether each meets a written definition of a criterion they agree on. Then they read the ChatGPT rationales the court reproduced. Discuss: what did the 120-character prompt remove? Then rewrite the process so that a wrong flag would be caught before termination.

## Recommendations
| Audience | Action |
|---|---|
| Scientists | Keep records; challenge terminations through collective and legal channels; describe your work in its own terms |
| Scientists | Cite and name underrepresented contributors and constructs explicitly, so the record preserves them |
| Institutions and societies | Provide legal and communications support; preserve original grant descriptions; issue shared vocabulary guidance |
| Funders and agencies | Never use generative AI to make or justify funding decisions without a defined criterion, full materials, expert review and an appeal route |
| Funders and agencies | Publish AI use in grant administration, including prompts and criteria, before deployment, not after discovery |
| Developers and vendors | Refuse or flag uses that classify research by protected characteristics; log prompts and outputs for audit |
| Policy makers | Require disclosure and contestability for AI in public funding decisions; confirm that responsibility stays with the deploying official |

**Takeaway:** the AI did not find anything a keyword search could not. It produced reasons on demand. Accountability stays with whoever chose the tool, wrote the prompt and set the criterion, and the people most at risk are those whose work is named by the words being searched.

## Lessons for an AI-enabled research ecosystem
- **What AI should make easier:** finding and crediting underrepresented researchers and their work; translating and surfacing non-traditional outputs; showing reviewers context.
- **What AI should never decide autonomously:** whether research is funded, defunded or excluded; whether a project's subject is acceptable; anything classified by protected characteristics.
- **What was missing:** a defined criterion, the underlying grant materials, expert review, disclosure of AI use, and a way for grantees to see and challenge a flag.
- **New risks the technology introduced:** cheap, plausible justifications at scale; a ready argument for avoiding responsibility; repurposing of discovery tools for exclusion.
- **What to replicate:** NEH's statutory process of individual expert evaluation; the record-building done through litigation; published AI use-case inventories, which is how the HHS use became known.

NOTE: Verification needed. The WIRED article and the *Science* analysis could not be opened, so HHS–Palantir details and the 58%/34% figures come from summaries. Confirm the *Thakur v. Trump* date and holding against the opinion, the appeal status of *ACLS v. NEH*, the DOGE termination date (reported as 4 July 2026), and the OMB anti-DEI rule (proposed effective 1 October 2026). NEH figures (1,400+ grants, $100M+, 1,295 grants/$322M, the prompt, the Detection Codes, the examples) are from the court opinion, which was read in full text.
