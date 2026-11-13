# Long-Tail Research: FAIRdata.ai and AutoDiscovery

**Label: Ambiguous.** Automated curation and discovery could give overlooked datasets the reuse they deserve. The evidence so far is a founder's own tests, no depositor was asked, and a surprising result is not yet a finding.

> **This is an early-stage case.** The tools were launched or described in February–March 2026 and are changing quickly. The main evidence is blog posts by a single author with a stake in the outcome, plus one peer-reviewed methods paper. Facts are as of mid-November 2026.

## Sources
- Hahnel M. "Moving from 'share data because you should' to 'share data because you'll get something back.'" OpenResearch.wtf, 16 Feb 2026. https://www.openresearch.wtf/moving-from-share-data-because-you-should-to-share-data-because-youll-get-something-back/ (the three dataset tests)
- Hahnel M. "FAIRdata.ai: Making Open Data FAIR-er." Substack, 23 Mar 2026 (https://hahnel.substack.com/p/fairdataai-making-open-data-fair); OpenResearch.wtf version (https://www.openresearch.wtf/fairdata-ai-making-open-data-fair-er/)
- Hahnel M. "OpenScience.ai: Using Open Data to Generate Research That Doesn't Yet Exist." OpenResearch.wtf, 23 Mar 2026 (not read; describes where promoted findings go)
- FAIRdata.ai: "Measure and Improve the FAIRness of …" (project site)
- Agarwal D, et al. "AutoDiscovery: Open-ended Scientific Discovery via Bayesian Surprise." NeurIPS 2025. arXiv:2507.00310
- Ai2 blog: "Introducing AutoDiscovery: Automated scientific discovery, now in AstaLabs"; "AutoDS: A prototype engine for autonomous, open-ended scientific discovery"
- "Evidence-Informed LLM Beliefs for Continual Scientific Discovery." arXiv:2606.29182 (2026, preprint), a critique of AutoDiscovery's surprise metric
- Hahnel M. "Academic Data Curation: Who checks? Who Pays? How Much?" OpenResearch.wtf, 9 Mar 2020 (background on curation cost)
- Datasets tested: Cheng J, brain tumour MRI dataset (Figshare, 2015, CC-BY 4.0); Trabucco A and Zomer R, Global Aridity Index v7 (Figshare); Khirevich S, Yutkin M and Patzek T, pressure and viscosity logs supporting a *Physics of Fluids* paper (Figshare+)

## Background

**The problem: open is not the same as usable.** Funders increasingly require FAIR (Findable, Accessible, Interoperable, Reusable) data management plans. Generalist repositories such as Zenodo, Figshare, Dryad and Mendeley Data make deposit easy. But, as the FAIRdata.ai project puts it, "not all data published on them is FAIR." Many records have single-letter variable names, descriptions that read "data for paper", no units, and no controlled vocabulary. The data are technically open but practically unusable.

This gap falls hardest on **long-tail researchers**: people in niche subfields, small labs and under-resourced institutions. Their datasets may be scientifically valuable, but they lack the curation support that large, well-funded teams have.

**FAIRdata.ai: closing the FAIR gap automatically.** FAIRdata.ai takes a dataset DOI and scores its FAIRness against five frameworks:
- F-UJI (17 metrics)
- the RDA FAIR Maturity Model (41 indicators)
- ARDC's Self-Assessment (12 checks)
- Metadata Game Changers (58 documentation concepts)
- a Data Fitness for Use framework (14 reuse criteria, assessed by an LLM)

It then enriches the record **without requiring anything from the original depositor**. It writes better descriptions, infers what variables mean, aligns terms to ontologies (MeSH, ENVO, Gene Ontology, AGROVOC), and resolves licences to machine-readable SPDX URIs. It also extracts context from the linked paper: methods, limitations, population and ethics. Anthropic's Claude (Sonnet) is the main model for enrichment.

Every change carries **COMET provenance**: which agent or model made it, which version, when, with what confidence, and from what source. Output includes schema.org and Croissant ML metadata, so datasets surface in Google Dataset Search and in machine-learning pipelines. The post imagines a future "two-score nudge" that shows a depositor their record moving from, say, 62% to 84% FAIR. **That figure is an illustration, not a measured result.** It currently works with Figshare, Zenodo, Dryad, Harvard Dataverse, Mendeley Data, OSF and Vivli, and the author notes that "the tail of domain repositories is long."

**AutoDiscovery: Bayesian surprise as a discovery engine.** AutoDiscovery, from the Allen Institute for AI (Ai2), generates hypotheses about a dataset, writes and runs Python to test them, and ranks results by **Bayesian surprise**. Bayesian surprise is the size of the shift between the language model's belief in a hypothesis before seeing the data and its belief afterwards. A Monte Carlo Tree Search explores the space of hypotheses, with surprise as its reward. In the NeurIPS 2025 paper, across 21 datasets in biology, economics, finance and behavioural science, AutoDiscovery found 5–29% more hypotheses surprising to the LLM than strong search baselines did. In a human study, 67% of the discoveries it rated surprising were also rated surprising by human experts. Ai2 released it as an experimental feature in AstaLabs in February 2026, and the code is open.

FAIRdata.ai's discovery layer uses the same approach, with GPT-4o choosing which analyses to run against the real data: correlations, distribution tests, ANOVA, outliers and temporal trends. Findings with Bayesian surprise ≥ 0.8 and p < 0.01 are promoted automatically to a sister project, OpenScience.ai, as "research seeds" for hypothesis papers. The author says this handoff "is still coarse."

**Three tests on real datasets.** Hahnel, who founded Figshare, ran AutoDiscovery in AstaLabs on three Figshare datasets that had been cited, though not heavily:

| Dataset | Hypothesis the model expected | Prior → posterior | Result |
|---|---|---|---|
| Jun Cheng brain tumour MRI (3,064 images; CC-BY 4.0, since 2015) | Gliomas show higher pixel-intensity heterogeneity than pituitary tumours | 0.96 → 0.327 (surprisal −0.759) | Reversed: pituitary tumours more heterogeneous (Mann–Whitney U, p = 5.97 × 10⁻⁴¹) |
| Trabucco and Zomer Global Aridity Index (v7) | The Southern 20–40° subtropical belt is more humid than the Northern | 0.984 → 0.335 (surprisal −0.778) | Reversed: the Northern belt was less arid (Welch's t-test, p < 0.001) |
| Khirevich, Yutkin and Patzek permeability logs (*Physics of Fluids*) | Pump heating causes systematic temperature drift | 0.831 → 0.283 (surprisal −0.657) | No drift; temperature stayed within 21.2–22.0 °C, which acts as an automated quality check on the published results |

Hahnel's argument is that this changes the incentive to share data. Instead of "share because you should", researchers would "share because you'll get something back": visibility, collaborators, and findings they would never have looked for themselves.

## Who did what

| Human/AI/User | Contribution |
|---|---|
| **Humans** | Collected and deposited the datasets, often years earlier; built the repositories, FAIR frameworks and ontologies; built FAIRdata.ai and AutoDiscovery; chose the datasets to test and interpreted the results |
| **AI** | Claude scores and rewrites metadata, infers variable meanings and maps ontologies. GPT-4o (FAIRdata.ai) or Ai2's agent (AstaLabs) proposes hypotheses, writes and runs code, and scores belief shifts. Promotion to "research seeds" is automatic. |
| **Users** | Repository users and future reusers who see the enriched record; OpenScience.ai, which turns seeds into hypothesis papers |
| **Checkpoint** | COMET provenance on each enrichment; open code and statistics for each discovery. **Depositors are not asked, and no domain expert reviewed the three test results.** |

## Progress made
| Claim | Status | Evidence |
|---|---|---|
| Bayesian surprise finds more LLM-surprising hypotheses than baseline searches | Verified | NeurIPS 2025 paper; 5–29% more across 21 datasets |
| AI-rated surprise matches human surprise | Reported | 67% agreement in Ai2's human study; a 2026 preprint finds 25–30% of "surprising" hypotheses are implied by earlier discoveries |
| FAIRdata.ai improves FAIR scores through automated enrichment | Claimed | Described by the developer; no accuracy metrics or external evaluation reported. The 62%→84% figure is hypothetical. |
| AutoDiscovery overturned confident priors on three real datasets | Reported | Founder's blog post; statistics and code shown; not checked by domain experts |
| The MRI and aridity reversals are new scientific findings | Not shown | Reversals of an LLM's prior are not necessarily new to the field, and may reflect artefacts |
| Long-tail researchers gain visibility, collaborators or citations | Not shown | Plausible; no depositor outcomes reported |

## Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| Enriched metadata misdescribes the data | Depositors, reusers | Possible; confidence is recorded but accuracy is not reported |
| The depositor's record is rewritten without their knowledge | Depositors | Documented design ("without requiring anything from the original depositor") |
| Credit flows to the tool or the reanalyst, not the collector | Long-tail researchers | Open question |
| A finding is "surprising" because the model is ignorant or the data has an artefact | Reusers, readers of hypothesis papers | Documented limitation (LLM priors; non-novel surprises) |
| Automated hypothesis papers outpace expert checking | Fields that receive them | Plausible; see the Navier–Stokes case |
| Reanalysing human-subjects data beyond its original purpose | Patients (e.g. MRI data) | Open question; CC-BY governs copyright, not consent |
| Coverage gaps favour generalist repositories | Researchers in domain repositories | Acknowledged by the developer |

---

## Deep dive 1 — Was AI necessary?

**The question:** could curators and secondary analysts do this, and if so, why haven't they?

Both halves of this system have human equivalents. Data curators at Dryad, institutional data stewards and domain repositories already improve metadata, and curated records are better for it. Secondary analysis and meta-research already mine old datasets for new questions. Neither needs AI.

What they need is money and attention, which long-tail data does not attract. Hahnel's own 2020 post asked who checks, who pays, and how much. Generalist repositories hold millions of records, and human curation at that scale is not affordable. Most datasets are never reanalysed by anyone. So the honest comparison is not "AI curation versus human curation". It is **AI curation versus no curation**, and AI exploration versus no second look at all.

On discovery, the gain is different in kind. Bayesian surprise is measured against the *model's* expectations, not the field's. That is both its value and its weakness. It brings "new priors and a different disciplinary frame" to old data, but it can be surprised by things any specialist already knows.

> **Reading.** Strong case for necessity at scale for enrichment, because the realistic alternative is nothing. A weaker case for discovery: the tool generates hypotheses cheaply, but turning a surprise into a finding still needs the expertise and capacity the long tail lacks.
>
> **Push back.** A sceptic would say automation removes the pressure to fund curators, as in the AlphaFold case where predictions were taken as a reason to fund fewer experiments. If AI enrichment becomes "good enough", the human curation and depositor training that produce truly reusable data may be cut.

**For discussion:** for a dataset in your field that no one has reused, what would a human curator catch that an LLM would miss?

## Deep dive 2 — Disciplinary advance

What has been shown, and what has not.

1. **A method with peer-reviewed evidence.** AutoDiscovery's use of surprise as a search reward is published at NeurIPS 2025. It is evaluated across 21 datasets and against human judgements of surprise, and the code is open. That is more evidence than most AI-discovery claims have.
2. **The metric has a known flaw.** A 2026 preprint finds that 25–30% of the hypotheses AutoDiscovery rated surprising were substantially implied by its own earlier discoveries, and proposes a correction. Surprise to a model is not novelty to a field.
3. **Three demonstrations, not three findings.** In the MRI test, a model trained on general knowledge expected gliomas to be more heterogeneous and the data said otherwise. That could be biology, or it could be acquisition settings, preprocessing or class composition in a dataset of 3,064 slices from 233 patients **[VERIFY patient count]**. The aridity reversal may be known to climatologists. The permeability test is the most useful kind of result: an automated confirmation that a published dataset has no drift.
4. **Provenance is built in.** COMET records of model, version, time and confidence for every change meet appraisal item 8 (disclosure) better than most human curation does, which leaves no trace.
5. **The incentive claim is untested.** No depositor has been reported as gaining citations, collaborators or funding. The "share because you'll get something back" framing is a hypothesis about researcher behaviour.

**For discussion:** which of these results would a domain expert need to confirm before you could cite it?

## Deep dive 3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Whose record is it?** | Depositors | Enrichment happens without the depositor's involvement. Their description, variable names and context can be rewritten by a model. COMET shows what changed, but only if someone looks. Should the original be preserved alongside it, and should the depositor approve? |
| **Credit for collectors** | Long-tail researchers | The promised return is visibility. But if OpenScience.ai turns a dataset into a hypothesis paper, who is the author, and is the collector cited, consulted or invited? Without that, this is extraction from the people the system means to help. (Item 13.) |
| **Reuse is not consent** | Patients, communities | A CC-BY licence permits reuse under copyright. It does not settle whether the patients whose MRIs were deposited agreed to open-ended hypothesis mining. See [Morally Inadmissible Evidence](morally-inadmissible.md). |
| **Surprise against whose priors?** | Disciplines and communities underrepresented in training data | A model's prior reflects what is common in its training text. Fields, regions and languages that are less represented will look more "surprising", which could surface overlooked work or flood it with noise. (Items 2, 13.) |
| **Claim production versus checking** | Experts in small fields | Automatic promotion of findings with surprise ≥ 0.8 to hypothesis papers creates claims faster than a small field can check them. Long-tail fields have the fewest reviewers. See [Navier–Stokes](navier–stokes.md) and [Undue Influence](undue-influence.md). |
| **Promoter's interest** | Readers | The evidence comes from Figshare's founder, using Figshare-hosted datasets, to promote tools that use them. That is not disqualifying, and it is a reason to want independent evaluation. (Item 10.) |
| **Author's conflict of interest** | Readers | This case was rewritten with Claude (Anthropic), the model FAIRdata.ai uses for enrichment. |

**For discussion:** what would the depositor of the brain tumour dataset need to be told, and when, for this to count as "getting something back"?

## Deep dive 4 — Alternative views

### Debate A: is automated enrichment a gift or an imposition?

**Position A — a gift**
- Most long-tail depositors will never have curation support.
- Better metadata makes their work findable by people and machines.
- Provenance makes every change auditable and reversible.

**Position B — an imposition**
- The depositor knows the data. A model infers it.
- A confident but wrong variable description is worse than a sparse one, because reusers trust it.
- Changes made "on their behalf" without asking remove the depositor's control over how their work is presented.

> **A third framing.** Make it a draft, not an edit. Show depositors the proposed enrichment and the score change, keep the original, and publish the enriched version with clear AI labelling until a human confirms it. The "two-score nudge" is already halfway there.

### Debate B: is Bayesian surprise a good guide to discovery?

**Position A — yes, it finds what significance misses**
- A p-value says an effect is unlikely to be chance, not that it is interesting.
- Surprise rewards results that change beliefs, which is what discovery is.
- In Ai2's study, human experts agreed two-thirds of the time.

**Position B — it measures the model, not the world**
- Surprise depends on the LLM's prior, which reflects training text, not expert knowledge.
- Artefacts and confounds are often surprising.
- A quarter or more of "surprises" were implied by earlier discoveries.

> **A third framing.** Treat surprise as a triage signal for where a human expert should look, not as a measure of discovery. The permeability test shows the overlooked value: an *unsurprising* confirmation that a dataset is sound may help the depositor more than a headline reversal.

### Debate C: does this level the playing field?

**Position A — yes**
- Free enrichment and a free second look reach labs with no curator and no collaborators.
- Discoverability is the first barrier for overlooked work.

**Position B — not by itself**
- Coverage favours generalist repositories, so domain repositories in the long tail are served last.
- Acting on a hypothesis needs expertise and resources. That is the same lesson as the AlphaFold and Virtual Lab cases.
- If credit goes to whoever runs the tool, the gains flow to the well-resourced reanalyst.

> **A third framing.** The playing field is levelled only if the return reaches the collector. Measure it: did depositors gain citations, collaborators or funding? Until someone measures it, the incentive claim is a hypothesis.

## What a scientist needs to know
- An enriched record is a model's reading of your data. Check AI-generated descriptions and variable meanings for your own deposits, and correct them.
- Look for the provenance record (COMET) before trusting enriched metadata as a reuser.
- A Bayesian-surprise score measures how wrong the *model* was, not how new the finding is to your field.
- Very small p-values on large datasets are easy to get. Ask about confounds, acquisition artefacts and multiple testing.
- If an AI tool finds something in someone else's dataset, contact and credit the depositor before building on it.
- Human-subjects data needs more than a licence check. Ask what participants consented to.
- Unsurprising confirmations, such as no drift and no artefacts, are useful too. Report them.

## Decision point
You deposited a small field dataset five years ago. You receive an email saying an AI system has enriched your record (score 58% → 81%) and that a "high-surprise" finding from your data has been promoted to an auto-generated hypothesis paper. Do you (a) welcome it, (b) check the enrichment and the finding first, (c) ask to be credited or involved, or (d) ask for the paper to be withdrawn? What would you need to see?

## Activity (20 min): "Surprise or Artefact?"
Give teams the three AutoDiscovery results (MRI, aridity, permeability), with priors, posteriors and tests. For each, teams list three non-biological or non-physical explanations for the result, what a domain expert would check first, and whether the result is a finding, a hypothesis or a quality check. Then they draft the message they would send to the original depositor.

## Recommendations
| Audience | Action |
|---|---|
| Scientists (depositors) | Review AI enrichments of your records; write good metadata at deposit so models have less to guess |
| Scientists (reusers) | Treat surprise-ranked results as hypotheses; credit and contact depositors; check consent for human-subjects data |
| Developers | Make enrichment a proposal the depositor approves; keep the original record; report enrichment accuracy against expert-curated samples |
| Developers | Don't auto-promote findings to papers without domain-expert review; credit the dataset and its collectors in every output |
| Repositories | Surface provenance clearly; let depositors accept, reject or edit AI enrichments; extend support to domain repositories |
| Institutions and funders | Keep funding human curation and data stewardship; count reuse and dataset citations in assessment |
| Independent evaluators | Test whether depositors actually gain visibility, citations or collaborators |

**Takeaway:** AI can do the curation the long tail never gets, and take the second look no one would. It helps long-tail researchers only if their records stay theirs, surprises are checked by people who know the field, and the credit flows back to those who collected the data.

NOTE: Verification needed. The three dataset results come only from the developer's blog, so check them against the AstaLabs outputs. Also check the Cheng dataset's patient count and acquisition details, FAIRdata.ai's current model choices (Claude Sonnet for enrichment, GPT-4o for discovery, as of Mar 2026), the OpenScience.ai pipeline, and the arXiv:2606.29182 critique (preprint). The post's definition of surprisal as a magnitude conflicts with the negative values it reports. There is no independent evaluation of FAIRdata.ai enrichment accuracy.
