Undue Influence in AI-Assisted Research Synthesis: A Case Study
Nov 12, 2026 · John Basl (but mostly Claude)
Summary and purpose
An AI research agent can give unvetted or discredited research outsized influence over a researcher's picture of a field, and this case study asks readers to design markers that would catch it. Three short vignettes show the problem at rising levels of difficulty. Each vignette is an invented composite, followed by the documented cases behind it.
Exemplar 1, retracted papers: a synthesis built on studies that were later discredited. A marker exists, and many tools ignore it.
Exemplar 2a, unvetted results (detectable): a capability summary built on launch-day claims. Simple rules about origin catch most of it, with side effects.
Exemplar 2b, unvetted results (no reliable signal): the same kind of summary built only on sources that pass every rule. The influence ran through channels that leave no trace in the documents.
Use it in a seminar or working group: read the vignettes, then draft markers using the discussion questions near the end. Written 12 November 2026; later developments are not covered.
Definitions
Undue influence is influence that exceeds what a source's vetting justifies. Three things must hold together: the source has reach, it has a defect, and it had a vetting gap when it gained that reach.
Reach: citations, leaderboard adoption, press coverage, or adoption by tools that other people rely on.
Defect: an error, fabrication, bias, or conflict of interest that a careful reader would have wanted to know about.
Vetting gap: independent checking was absent when the source gained reach. Five types recur in the cases here: preprint-only publication; claims made through launch channels such as blog posts, demos, and press releases; undisclosed funding or access; undisclosed process rules; and artifacts that outsiders cannot verify.
Marker: a signal an agent can read from a source or its metadata that predicts a vetting gap, such as a retraction flag or a first-party-only provenance label.
Why agents raise the stakes. An agent ranks by prominence and citation count, so repetition looks like corroboration. Language models asked to produce reference lists from memory favor highly cited papers (Algaba et al.). That finding has not been tested on retrieval-based research agents, so treat it as a reason for concern, not a measurement.
Exemplar 1: Inclusion of Retracted Papers
A synthesis looks rigorous because many studies agree, and the agreement comes from studies that were later discredited.
The vignette
A hospital pharmacist is asked to review the evidence on a widely used intravenous fluid before her committee votes on keeping it on the formulary. She asks her AI research assistant for a summary, and it returns a polished answer within minutes: nine trials, a pooled table, and a clear conclusion that the fluid shows no survival difference.
Most of the trials come from one prolific investigator. Years earlier, that investigator's work was formally retracted for fabricated data and missing ethics approval. The retraction notices exist, on publisher pages and in a retraction database. The assistant treated every paper as a clean source anyway, because the papers were still indexed and widely cited. The committee approves the fluid.
Had the committee removed the investigator's trials, the same table would have shown a signal of harm.
Why it misleads
The summary's reassurance comes from the fabricated studies themselves. The pharmacist cannot see the flaw without leaving the summary, and the many-studies format makes the conclusion look sturdier than it is. A tool that skips the retraction check makes discredited work look as well supported as sound work.
What a careful agent does
It checks every source against retraction databases before pooling, removes what is flagged, and reports what changed. The harder case is work that is suspect but not retracted, covered in the second grounding point below.
Grounding in documented cases
The pooled-evidence flip. A 2013 JAMA meta-analysis of starch fluids found that excluding seven trials by an investigator whose research was retracted for misconduct left starch associated with a significantly increased risk of death and kidney injury. A government investigation had led to the retraction of 88 of that investigator's 102 papers since 1999. Summaries of the paper differ on exact estimates (example), so read the paper before quoting figures.
Retraction status was an incomplete marker. The seven excluded trials had not been retracted, because they predated 1999, the cutoff of the misconduct investigation. The authors had already left out the retracted papers (Retraction Watch). A rule keyed to retraction flags alone would have missed the trials that mattered.
AI tools carried retracted work. In an MIT Technology Review test built on 21 retracted papers, Elicit referenced five of them, Ai2 ScholarQA 17, Perplexity 11, and Consensus 18, all without noting the retractions. Consensus cited only five in a later test after adding retraction data. A peer-reviewed study found retracted articles in topic overviews without warning, with error rates above 40% in several tools.
The tension. Meta-analysts have been reluctant to exclude studies without sound reason, because comprehensiveness guards against bias (Anesthesiology News commentary, mirror). Any exclusion rule should be disclosed, with its effect reported.
Exemplar 2a: Unvetted Results (Detectable)
A capability summary leans on launch-day claims, and simple rules about where a claim came from would have caught the worst of it.
The vignette
Dana is a social scientist moving into AI evaluation. She is drafting the background section of a grant proposal and has two days. She asks her research agent for a summary of where frontier models stand on capabilities, with citations. Twenty minutes later it returns a clean brief with fourteen sources. Every headline finding carries two or three citations that agree, so Dana feels she has triangulated. Three of the findings:
Frontier models now place in the top ten percent of people taking a professional licensing exam.
A new model solves roughly nine in ten problems on a standard programming test.
A hard PhD-level science exam is still mostly unsolved, but scores are climbing fast.
Dana writes that models now match expert humans on professional exams and are closing in on research-level reasoning. A reviewer who knows the later corrections circles the sentence.
What sat underneath
Headline
What sat underneath
Marker readable at the time
Top ten percent on a licensing exam
All citations traced back to one launch-day claim: a press release and a preprint by authors with a commercial stake. The comparison pool was skewed toward people who had failed before. A re-analysis found far weaker essay results and ranked below the fold.
Yes: press-release origin, commercial authorship, preprint-only
Nine in ten programming problems
The only source was the lab's own technical report, with no independent run.
Yes: first-party-only provenance
Hard science exam, scores climbing
The exam was a preprint for its first year, yet a field-wide report already cited it. A later audit found a large share of answers in one section conflicted with the literature.
Partly: preprint-only, builders with commercial ties; the defect was not visible until audited

The fix
Dana rewrites her agent's instructions:
Trace each claim to its earliest source. If that source is a press release, launch blog, or demo, downgrade it.
If every data point comes from organizations that built the models being scored, downgrade it and say so.
Prefer peer-reviewed versions, and flag results that exist only as preprints.
The new brief opens with a warning that most headline capability claims trace to launch announcements or builders' own reports. The exam claim is demoted, and the re-analysis appears beside it. Dana learns the evidence is thinner than she assumed.
Where the fix misfires
It discounts correct work. A correction of a widely used math benchmark came from a company with its own commercial stake in data and evaluation. Rule 2 would discount the correction.
It cannot settle contested corrections. The audit of the hard science exam was run with a research agent its authors built, and some commenters questioned the method. The exam's own team later found a smaller share of bad answers. Neither the claim nor its correction is cleanly trustworthy.
It would erase most of the field. Industry produced most leading benchmarks, so rule 2 applied strictly leaves little to summarize.
Grounding in documented cases
The exam claim. A university press release on 15 March 2023 reported GPT-4 in the 90th percentile of bar takers. The SSRN paper was posted the same day, with authors affiliated with Casetext, a legal-technology firm. OpenAI displayed the figure prominently on its website and technical report. A re-analysis put the model near the 68th percentile overall and 48th on essays, and found the comparison pool skewed toward repeat test-takers. The peer-reviewed version appeared in February 2024, about 11 months after the claim.
The hard science exam. Humanity's Last Exam appeared as a preprint in January 2025 and in Nature in January 2026, supported by the Center for AI Safety and Scale AI. The 2025 AI Index cited it in between. A FutureHouse audit found 29% (plus or minus 3.7) of 321 text-only chemistry and biology questions had answers conflicting with peer-reviewed literature. The same page reports that the exam team's own follow-up check of a subset found about 18% problematic. Some online commenters questioned the audit's method.
First-party reporting. An aggregation preprint of reported GPT-5 results found that 95% of 213 results lacked parameters needed for independent reproduction, and listed FrontierMath and HumanEval among benchmarks with first-party-only reporting. It is itself a preprint, so treat it cautiously.
Corrections from interested parties. The GSM1k correction of a grade-school math benchmark came from Scale AI, which also supported the hard science exam.
Industry dominance. Leading AI benchmarks come from industry 91% of the time, according to Ahmed, Wahed and Thompson in Science (2023).
Exemplar 2b: Unvetted Results (No Reliable Signal)
The summary is built only on sources that pass every rule, and the influence still ran through channels that no document reveals.
The vignette
Dana reruns her improved agent on a new topic: research-level mathematics and conversational ability. This time the agent discounts launch claims and builds on sources that pass its tests. For math it finds a benchmark from a nonprofit institute, with problems written by dozens of expert mathematicians, a private held-out set for independent verification, and an assurance that no model was trained on it. For conversation it finds a public leaderboard where volunteers compare models side by side. Every rule passes. The brief calls these the field's most trustworthy measurements and builds its core section on them.
The brief is confident, well sourced, and misleading in ways that neither Dana nor the agent could see.
What the brief could not say
Channel
What the agent saw
What was true
Why no marker existed
Funding and access
Independent nonprofit, expert authors, held-out problem set
The funder is one of the labs being scored and owns the problems. A contract barred disclosure until that lab announced its score, and problem writers were reportedly not told.
The facts surfaced afterward in a footnote. Nothing in the original documents carried them.
Selection
Public leaderboard, volunteer votes
A few providers could test many private variants and publish only the best, under a policy not stated publicly. One lab submitted an unreleased, chat-tuned variant.
The rules lived outside the published results. No entry carried a flag.
Training exposure
A statement that no model was trained on the test
Labs do not disclose training data, so no outsider can check whether models saw test material.
The data is closed. A benchmark's own documentation cannot show it.

Why this is the hard case
Every observable marker said "independent." The one disclosure that did arrive, a footnote in a revised paper, reaches only agents that read the revised version, and nothing prompts an agent that read the earlier one to check again. Rules written after each exposure would address only cases already known, which is the argument for developing markers in advance.
Grounding in documented cases
Funding and access. Epoch AI revealed on 20 December 2024 that OpenAI had funded FrontierMath, the day OpenAI demoed o3 on it. Epoch's contract prevented it from disclosing the support until o3's announcement. OpenAI retains ownership of the questions and has access to the problems and solutions, though it says it did not train o3 directly on the benchmark, and the disclosure appeared as an updated footnote on the whitepaper. Epoch said it had not independently verified OpenAI's results. A contractor's account says contributors were not told.
Selection. The Leaderboard Illusion audit found an unstated policy letting select providers privately test many submissions, including 27 private variants from Meta ahead of Llama 4's release. In April 2025, Meta used an experimental, unreleased Maverick model on the leaderboard, and the standard release ranked 32nd. Meta said it had labeled the model an experimental chat version and denied training on test sets; the leaderboard said Meta's reading of its policy did not match expectations.
Training exposure. The GPT-4 technical report states that it contains no details on dataset construction, citing competition and safety. The 2025 Foundation Model Transparency Index found average transparency fell from 58 to 40 out of 100, and a summary of the index reports that eight companies disclosed none of five data-related indicators.
Side-by-side comparison
The three exemplars differ in whether a usable marker exists today, and the gap between them is the design problem.
Exemplar
Vetting gap
Marker available today
What an agent can do now
Still open
1. Retracted papers
Discredited after publication
Retraction flags in databases such as OpenAlex and Retraction Watch
Check every source before pooling; report what was removed and the effect
Suspect studies that were never retracted
2a. Unvetted results, detectable
Preprint-only publication, launch-channel claims, first-party reporting
Press-release origin, commercial authorship, provenance labels, preprint status
Trace the earliest source, downgrade by origin, flag preprint-only results
Over-discounting correct work; contested corrections; most benchmarks come from industry
2b. Unvetted results, no signal
Undisclosed funding, process rules, and training exposure
None at the time
State the uncertainty; look for later disclosures and revised versions
Everything: no known marker exists

Sources for each row are in the exemplar sections above.
Discussion questions
The aim is to propose markers that would have caught Exemplar 2b, then test them against the other two exemplars.
Funding and access. What would a machine-readable "who funded this, and who has access to it" field look like? Who would fill it in, and who would audit it?
Provenance. Could every reported result carry first-party versus independent provenance, plus the settings, versions, and run dates needed to reproduce it?
Process rules. Should leaderboards publish their submission, retraction, and private-testing rules, with a flag on any entry that is an unreleased variant?
Training exposure. When training data is closed, what could substitute for a contamination check?
Versions. How should an agent learn that a source it read was later revised, audited, or corrected? Retractions have flags, and at least one tool already uses them. Revised preprints and audited benchmarks have no equivalent.
Independence. How can an agent tell five independent confirmations from five citations of one claim?
False positives. How do you discount interested parties without erasing correct work from them, as in Exemplar 2a?
Gaming. Once a marker is known, how cheap is it to pass without changing the underlying problem? What makes a marker hard to fake?
Disclosure to users. Should an agent show what it discounted and why, and how much detail would a researcher actually read?
Exercise. Pick one marker. List what it flags across the three exemplars, what it wrongly flags, and how a builder could pass it without fixing the underlying problem. Then ask who would maintain the marker over time.
Where to intervene
Undue influence can be addressed at several points between a source's creation and a researcher's reading, and these questions ask which point works best for each exemplar.
Main question. What is the best point of intervention for addressing undue influence, and does the answer change across the three exemplars?
Candidate points, each with a question to start from:
At the source (authors, labs, funders). Would mandatory disclosure of funding, access, and conflicts have changed Exemplar 2b, and who would enforce it?
At the venue or platform (preprint servers, journals, leaderboards, benchmark hosts). Which platform restrictions are plausible: labels for unreviewed work, required funding and access fields, published submission rules, bans on private variants, change logs for revised versions? Which of these could a platform enforce without seeing the underlying facts?
At the index layer (databases and metadata services). Who should maintain flags for retractions, corrections, audits, and first-party-only results, and how fast must they reach the tools that rely on them?
At the agent (retrieval, ranking, and synthesis). Which detection signals are worth building in, given how they misfired in Exemplar 2a? Should an agent decline to present a single-origin claim as settled?
At the interface (what the researcher sees). Should every brief list what it discounted and why, with a confidence label for each claim?
At the community (reviewers, funders, institutions). Should funders or journals require independent replication or evaluation before a benchmark or capability claim is cited in grants and policy documents?
Further questions
Earliest and last. For each exemplar, what is the earliest point at which the problem could have been prevented, and the last point at which it could still have been caught?
Visibility. In Exemplar 2b, the agent cannot see the funding contract. Which parties can, and what would make them act?
Cost and responsibility. Who should bear the cost of vetting: authors, platforms, agent builders, or users? What happens when each assumes another will do it?
Displacement. If a platform bans one practice, such as private testing, where does the practice move?
Error costs. Is it worse to carry a fraudulent result or to discard a correct one? Does the answer change with the stakes, such as a hospital formulary decision versus background reading?
Speed. How quickly must a correction travel to matter? Is the lag between a claim and its first independent check a useful measure?
Valuable but unvetted sources. Many useful sources lack traditional peer review, such as patient-led research and community data. What separates them from sources with undue influence?
Preprints. Preprints carried both some claims and some corrections. Should an agent treat preprint status as a discount, a flag, or neutral?
Measurement. How would you test whether a marker works? Who would curate the test cases, and how do you keep the test itself from becoming a target?
Agent transparency. Should builders of research agents publish their source-ranking and discounting policies, and who would check them?
Limitations and evidence notes
The vignettes are illustrations: the sources document each defect separately, not their combined effect inside a capability-summary agent. Readers should weigh the following before citing this case study.
Source depth. Most figures come from search-result excerpts and from news or blog coverage, not full-text reads of the original papers. Check the primary papers before quoting any number.
Items to verify. The JAMA starch meta-analysis (summaries disagree on its estimates, and no DOI was confirmed); whether the Nature version of Humanity's Last Exam incorporated the audit findings; and the Decrypt, LessWrong, and Digg pages, which are secondary or discussion sources.
Contested findings. The hard-science-exam audit (29%) and the exam team's follow-up (about 18%) differ. The auditors have interests of their own: FutureHouse builds research agents, and Scale AI supported the exam it later helped re-check.
Agent behavior is inferred. The studies of citation bias tested models producing references from memory (GPT-4, GPT-4o, and Claude 3.5), not retrieval-based agents. That research agents rank by prominence in the same way is plausible but untested here.
No systematic data on the unvetted segment. A review of 445 benchmarks excludes benchmarks released by industry labs without formal peer review, and a quality assessment covered 24 benchmarks. The unvetted segment has not been measured systematically.
Sample selection. The cases are ones that drew public criticism, and several involve OpenAI or Meta. Cases that were never criticized are invisible here, and no Anthropic-origin case was examined.
Disclosure. This draft was prepared with Claude, an AI assistant made by Anthropic. Anthropic is one of the developers scored in the Foundation Model Transparency Index cited in Exemplar 2b.
Currency. Written 12 November 2026; later developments are not covered.
References
Links were collected during research on 12 November 2026, and not every page was re-opened for this document.
Exemplar 1: retracted papers
Zarychanski R, et al. Starch fluids meta-analysis. JAMA, 20 February 2013. Coverage: Medical Xpress, MDedge, The Hospitalist.
Retraction Watch (2013). Does scientific misconduct cause patient harm? The case of Joachim Boldt.
Anesthesiology News (2013). The Boldt Affair: A Quandary for Meta-Analysts (mirror).
MIT Technology Review (23 September 2025). AI models are using material from retracted scientific papers.
Performance of AI Tools in Citing Retracted Literature: Content Analysis. Journal of Medical Internet Research.
Exemplar 2a: unvetted results, detectable
Illinois Tech (15 March 2023). GPT-4 Passes the Bar Exam (press release).
Katz DM, Bommarito MJ, Gao S, Arredondo P. GPT-4 passes the bar exam. SSRN, 15 March 2023; Philosophical Transactions of the Royal Society A 382 (2024).
Martínez E. Re-evaluating GPT-4's bar exam performance. Artificial Intelligence and Law (2024); SSRN version.
Center for AI Safety, Scale AI, HLE Contributors Consortium. A benchmark of expert-level academic questions to assess AI capabilities. Nature 649 (2026); arXiv:2501.14249.
Skarlinski M, Laurent J, Bou A, White A. About 30% of Humanity's Last Exam chemistry/biology answers are likely wrong. FutureHouse, July 2025, updated September 2025.
Zhang H, et al. A Careful Examination of Large Language Model Performance on Grade School Arithmetic. Scale AI, 2024.
Evaluation Cards: An Interpretive Layer for AI Evaluation Reporting. Preprint.
Ahmed N, Wahed M, Thompson N. The growing influence of industry in AI research. Science, 2023.
Exemplar 2b: unvetted results, no reliable signal
TechCrunch (19 January 2025). AI benchmarking organization criticized for waiting to disclose funding from OpenAI.
The Decoder. OpenAI quietly funded independent math benchmark before setting record with o3.
Decrypt. Coverage of the FrontierMath disclosure.
LessWrong. Contractor account of the FrontierMath funding.
Singh S, et al. The Leaderboard Illusion. 2025.
TechCrunch (11 April 2025). Meta's vanilla Maverick AI model ranks below rivals on a popular chat benchmark.
The Decoder. Meta's Llama 4 models show promise on standard tests, but struggle with long-context tasks.
Analytics India Magazine. Meta denies any wrongdoing in Llama 4 benchmarks.
OpenAI. GPT-4 Technical Report. 2023.
Wan A, et al. The 2025 Foundation Model Transparency Index; overview.
Cross-cutting
Algaba A, et al. How Deep Do Large Language Models Internalize Scientific Literature and Citation Practices? 2025; and Large Language Models Reflect Human Citation Patterns with a Heightened Citation Bias.
Bean A, et al. Measuring what Matters: Construct Validity in Large Language Model Benchmarks. NeurIPS 2025 Datasets and Benchmarks Track.
Reuel A, et al. BetterBench: Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices. 2024.