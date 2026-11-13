# Use of AI in Research: The appraisal checklist (use for every case)

Sixteen questions in three groups. The first group asks whether the claim is **sound**, the second whether it is **accountable**, the third whether it is **just**. Most hype survives the first group and fails the second and third, which is why the checklist does not stop at the science.

### A. Is the claim sound? — epistemic quality

1. **Task fit** — narrow and measurable, or open-ended? Is this the kind of question the method can answer at all?
2. **Ground truth** — what counts as valid and robust science here, and who decides? Whose standards are being applied, and would another discipline accept them?
3. **Validation** — computational, formal, bench, or independent replication? Done *before* the claim was made public?
4. **Denominator** — how many attempts, how many successes? What was discarded, and is that reported?
5. **Baseline** — compared with what? A human team, a simpler method, chance, or nothing at all?
6. **Uncertainty** — is confidence reported, is it calibrated, and does the headline carry the same uncertainty as the data?

### B. Is it accountable? — research integrity

7. **Independence** — who verified it, and do they have a stake in the result?
8. **Disclosure** — is the AI use declared, with model versions, prompts and parameters? Could someone repeat the method, not merely read about it?
9. **Accountability** — which named humans are answerable for outputs no human read? No AI tool may be an author; responsibility does not transfer to a model.
10. **Conflicts and incentives** — who funded it, who benefits from the claim, and who controlled the timing of the announcement?
11. **Error correction** — if it is wrong, how would anyone find out, who fixes it, and can it be withdrawn? Is there a route to correction, retraction, or removing data from a trained model?

### C. Is it just? — ethical research practice

12. **Provenance and consent** — whose data and work went in, under what terms? Did they agree, could they have declined, and can they withdraw now?
13. **Recognition** — whose contributions are credited? Does the system surface underrepresented people, communities, languages and disciplines, or does it amplify sources that are already dominant?
14. **Participation** — were the people affected by the question involved in choosing it, or only in supplying data about themselves?
15. **Access and benefit** — could a typical lab reproduce or check it? Who can act on the result, and who is left holding an untestable hypothesis?
16. **Harm, dual use and stakes** — what could this enable if misused, who reviewed that, what happens if it is wrong, who bears the cost, and how soon would anyone know?

> **Short form for quick use.** When there is no time for sixteen, six catch most problems: *Validation* (was it checked before the claim?), *Denominator*, *Baseline*, *Independence*, *Recognition* (who is credited and who is erased?), and *Stakes*.

> **A note on items 12–14.** These are the questions most often skipped, and they are not softer than the others. Research that is methodologically sound and ethically careless still fails as research. They also tend to be the questions a student can act on earliest in a career, by citing well, naming contributors and asking who is missing from a dataset.

---
---

# Case 1: AlphaFold

**Label: Ambiguous.** Open release is a genuine and uncommon good. Credit, trust and access remain unresolved.

### Sources
- Jumper et al., *Nature* 596, 583–589 (2021). DOI: 10.1038/s41586-021-03819-2
- AlphaFold Protein Structure Database (EMBL-EBI): https://alphafold.ebi.ac.uk/ — over 200 million entries, CC-BY-4.0
- 2024 Nobel Prize in Chemistry: Hassabis and Jumper for AlphaFold, shared with Baker for computational protein design
- *Nature* news on AlphaFold 3 release terms (Nov 2024)
- PNAS feature, "AlphaFold two years on: validation and impact" (2024)
- *The Protein Journal*, "Advantages and limitations of AlphaFold in structural biology" (2025)
- *Nature Methods* (2026), ROCKET: AlphaFold as a prior for experimental structure determination
- AlphaFold educational summit report on global equity (Zenodo, 2025)
- DeepMind, "Our approach to biosecurity for AlphaFold 3" (2024)

### The story
AlphaFold 2 was trained on experimentally determined structures from the Protein Data Bank, together with evolutionary sequence alignments and self-distillation on its own predictions **[VERIFY in paper]**. It predicts 3D structure from sequence at near-experimental accuracy for many proteins. Over 200 million predictions are free through EMBL-EBI under CC-BY-4.0. AlphaFold 3 was published in 2024 without code; after criticism, code and weights were released in November 2024 for non-commercial academic use, with weights available on request.

### Who did what
| | |
|---|---|
| **AI** | Predicted single static structures, with per-residue confidence (pLDDT) and a predicted aligned error map (PAE) |
| **Humans** | Solved the training structures over decades; ran the blind CASP benchmark; host the database; interpret and validate |
| **Checkpoint** | Confidence scores and experimental validation — both optional for the user |

### Progress made
| Claim | Status | Evidence |
|---|---|---|
| Predicts many structures at near-experimental accuracy | Verified | Peer-reviewed, blind-benchmarked. Accuracy varies by protein. |
| 200M+ predictions free, including commercial use | Verified | EMBL-EBI, CC-BY-4.0 |
| Recognised by the 2024 Nobel Prize in Chemistry | Verified | Awarded for the science. No source found that it honoured the open release. |
| Researchers without structural capacity can generate hypotheses | Reported | Widely stated and plausible; distributional evidence not checked. |

### Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| Over-trusting confident-looking models | Any scientist building on a prediction | Documented risk |
| Credit gap for data depositors | Structural biologists | Open question |
| Restricted access for the newest model | Commercial users, collaborative groups | Documented |
| Possible narrowing of research agendas | The field | Unverified here |

---

## Deep dive 1.1 — Was AI necessary?

**The question:** did this need AI, or was it simply faster?

Protein structure prediction was a recognised open problem for roughly fifty years. The field ran a blind competition, CASP, from 1994 onwards, precisely because self-reported accuracy could not be trusted. Before AlphaFold 2, the best methods combined homology modelling, fragment assembly and, increasingly, evolutionary couplings — the observation that residues which mutate together are often in contact. Those methods were improving, but slowly, and they failed on proteins without close relatives of known structure.

The experimental alternative was not unavailable; it was expensive. Determining one structure by crystallography or cryo-EM could occupy a graduate student for a substantial part of a PhD, and some proteins resisted for decades. After more than fifty years of global effort, the PDB held a few hundred thousand experimentally determined structures. AlphaFold released over 200 million predictions.

So AI did not invent the possibility of knowing protein structures. It changed the economics of a hypothesis. Work that used to precede a structure now follows it.

> **Reading.** Strong case for necessity, with a caveat. No non-AI method was close to this accuracy or scale. But AlphaFold is downstream of the experimental structures it learned from, so it did not remove the need for the method it replaced at scale.
>
> **Push back.** A sceptic would note that evolutionary-coupling methods were already climbing, and that AlphaFold's jump reflects decades of accumulated public data plus a large engineering effort, rather than a purely algorithmic insight.

**For discussion:** if the same capability had arrived five years later by conventional means, what would have been lost, and who would have borne that loss?

## Deep dive 1.2 — Disciplinary advance

Measured change, rather than claimed change.

1. **It entered experimental workflows rather than replacing them.** A 2024 PNAS feature reported roughly 850 PDB entries associated with papers that use AlphaFold, over 60% of them cryo-EM structures (data to January 2023). Predictions serve as search models in crystallography and help interpret ambiguous cryo-EM density.
2. **Integrative structural biology grew.** Combining experimental maps with predictions became standard for large assemblies; the nuclear pore complex is the best-known early example. Major cryo-EM model-building programs added AlphaFold support.
3. **The research question shifted.** With a plausible fold available cheaply, attention moved from "what shape is it?" to "which state, with what partners, under what conditions?" Reviews identify dynamics, disorder, ligands and transient assemblies as the standing gaps.
4. **New methods treat prediction as a prior, not an answer.** A 2026 *Nature Methods* paper introduces ROCKET, which refines AlphaFold2 predictions against crystallography, cryo-EM and cryo-ET data, framing scarce multi-state ground truth as the limiting problem.
5. **Reach is broad; outcomes are not yet demonstrated.** DeepMind reports over 3 million users across 190 countries and a partnership with DNDi on Chagas disease and leishmaniasis. I found no peer-reviewed study showing a resulting approved drug or measured health benefit.

**For discussion:** which of these would still be true if the AI component were removed, and which depend on it?

## Deep dive 1.3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Reciprocity to the data commons** | PDB depositors | Deposition was voluntary and openly licensed, so nothing was taken improperly. The question is whether a field that supplied decades of training data receives a proportionate return, and whether citing the PDB is sufficient credit. |
| **The "experiments are no longer needed" risk** | Experimental structural biology | A structural biology editorial reports that some reviewers of grants and papers now treat experimental determination as less necessary. The same piece notes experimental structures outperform AlphaFold models at explaining diffraction data and as docking targets. If funding follows that belief, the training data for future models stops being generated. |
| **Openness without capacity is not access** | Under-resourced institutions | A 2025 AlphaFold education summit report argues the benefit requires equitable access to resources and expertise, not just free downloads, and recommends regional hubs. A capacity-building paper describes substantial barriers to structural biology in Africa. |
| **Partial openness in newer versions** | Commercial users, collaborative groups | AlphaFold 3 weights are non-commercial, on request, and may not be shared outside your organisation. A field built on open deposition now depends partly on a corporate licence. |
| **Biosecurity** | Society | DeepMind published a biosecurity approach for AlphaFold 3. Structure prediction for pathogens and toxins is dual-use, and the risk assessment sits largely with the releasing organisation. |
| **Misrepresentation in publication** | Readers and reviewers | Presenting a prediction with the visual authority of an experimental structure, without confidence scores, misleads readers. Routine and avoidable. |

**For discussion:** pick the item you think most serious. Who has the power to fix it — the individual scientist, the institution, the funder, the publisher, or the developer?

## Deep dive 1.4 — Alternative views

### Debate A: has AlphaFold ended structural biology?

**Position A — the replacement view**
- Structures for most proteins are now a database lookup.
- Funding should move to questions predictions cannot answer.
- Training a new generation in crystallography is a poor use of scarce resources.

**Position B — the amplification view**
- Predictions are used inside experimental pipelines, not instead of them: roughly 850 PDB entries involved AlphaFold, mostly cryo-EM.
- The hard remaining problems — dynamics, complexes, ligands, disorder — need experiment.
- Methods like ROCKET exist because predictions need experimental data to be refined.

> **A third framing.** The evidence available favours amplification over replacement. The more interesting question is distributional: amplification helps labs that already have instruments, while labs without them gain predictions and no way to test them. "Did it end structural biology?" may be the wrong question; "who can now act on a structure?" is sharper.

### Debate B: is free release enough?

**Position A — open release discharges the obligation**
- Over 200 million predictions, CC-BY-4.0, free for commercial use too.
- 3 million users across 190 countries.
- Charging would have restricted it to wealthy institutions.

**Position B — access requires more than a download**
- Interpreting pLDDT and PAE needs training that is unevenly distributed.
- Acting on a prediction needs a wet lab.
- The newest model carries restrictive terms, so the open precedent is not guaranteed to continue.

> **A third framing.** Both can be true. Open release was a real and uncommon choice, and it is not sufficient on its own. The practical question for an institution is what it budgets for training and testing capacity alongside the free resource.

## What a scientist needs to know
- A prediction is a hypothesis. Label it "predicted" in methods and figures.
- Read **pLDDT** (per-residue confidence) *and* **PAE** (confidence in relative domain positions). Domains can each be confident yet wrongly placed.
- Models are single static conformations: poor for dynamics, conformational switches and point-mutation effects.
- Ligands, post-translational modifications and cellular context are generally absent in AlphaFold 2 models.
- Quality depends on how many related sequences exist. Orphan and fast-evolving proteins do worse.
- High confidence is not proof. A preprint reports 30–40% of residues in 49 model-organism proteomes at low or very low confidence, and that pLDDT can miss implausible geometry **[VERIFY — preprint]**.

## Decision point
Your target's predicted structure shows a confident binding pocket. Your lab has no crystallography. Do you (a) design inhibitors directly, (b) run a cheap experimental check first, or (c) use the model only to prioritise experiments? What would change your mind?

## Activity (15 min): "Confidence Walk"
Give students three real AlphaFold models with pLDDT and PAE plots: one high-confidence, one with a disordered region, one where the experimental structure differs. Teams state what they can and cannot claim from each, and write a one-sentence methods statement.

## Recommendations
| Audience | Action |
|---|---|
| Scientists | Label predicted structures as predicted; show pLDDT and PAE |
| Scientists | Check for an experimental structure first; use predictions to prioritise, not replace |
| Institutions and funders | Keep funding experimental structural biology — models need new ground truth |
| Institutions and funders | Credit the data commons; cite the PDB and consider recognition for depositors |
| Developers | Release weights and licences that let research be shared; make version-specific terms obvious |

**Takeaway:** a widely useful, largely open tool can still carry hidden costs in credit, trust and concentration. Ask what a prediction does not tell you.

---
---

# Case 2: OpenAI's Navier–Stokes Claim

**Label: Contested.** Relabelled from "Negative". Lean formalisation is good practice and the result may hold. The issue is the gap between announcement and community acceptance.

> **This is a living case.** It moved substantially between September and November 2026. Re-check before each teaching session. Facts below are as of mid-November 2026.

### Sources
- CNBC, 9 Sep 2026 — openai-navier-stokes-math-problem-solved
- Quanta Magazine, 8 Sep 2026
- *Scientific American*, 21 Sep 2026 — "Did OpenAI solve the wrong Navier–Stokes problem?"
- *Scientific American*, 13 Oct 2026 — "OpenAI's blockbuster Navier–Stokes proof isn't what we thought it was"
- King's College London, 27 Oct 2026 — "OpenAI's Navier–Stokes proof called into question"
- Implicator — on the Clay Institute's position
- Clay Mathematics Institute: Fefferman, *Existence and smoothness of the Navier–Stokes equation* (problem statement) **[VERIFY — read the official text]**
- BBC News (could not be opened): https://www.bbc.com/news/articles/cy7zygy3rl2o
- Also obtain: OpenAI's announcement and Lean repository; Buckmaster's and Alpöge's public statements

### The story
On 8 September 2026, OpenAI announced that an internal model, run by about 10,000 concurrent agents, had produced a 166-page argument for finite-time blowup in the 3D Navier–Stokes equations. OpenAI says the solution arrived about 88 hours after the first agents launched, on Saturday 5 September. *Scientific American* reports roughly 130 billion tokens; Quanta reports a cost of several million dollars; CNBC reports that tokens, messages and cost were **not** disclosed. The argument was reportedly formalised in Lean about 17 hours later, by a second AI model.

The Clay Mathematics Institute has not accepted the result. Its president, Martin Bridson, said evaluation would be "deliberately unhurried" and "absolutely rigorous". OpenAI says it does not intend to claim the prize.

**Which problem was solved?** Fefferman's official statement asks for a proof of **one of four alternatives**. Statements (A) and (B) are existence and smoothness with **no external force**, on all of space and on the torus respectively. Statements (C) and (D) are **breakdown** results that **permit a smooth external force**. OpenAI's result uses a force, so it addresses the (C)/(D) route. A claim that "two of four statements" were resolved does not appear in any source I could read **[VERIFY]**.

**The dispute.** Tristan Buckmaster (NYU) and Levent Alpöge (Anthropic) were pursuing Navier–Stokes in a personal collaboration, using several LLMs. Buckmaster says their progress reached OpenAI and that OpenAI's route resembles theirs. OpenAI says its effort began on 1 September after a rumour of progress, that neither its researchers nor its agents saw the pair's work before public release, and that no specific user data was accessed. It acknowledges it cannot rule out that de-identified data derived from product usage improved its models. **Present both as stated positions.** Because a model's reasoning cannot be fully inspected, the facts may never be settled.

*Omitted deliberately:* *Scientific American* also reports Buckmaster's allegation that OpenAI tried to bribe and threaten him. That is a serious claim by one party; leave it out of teaching material.

### Who did what
| | |
|---|---|
| **AI** | ~10,000 agents produced the argument; a second model produced the Lean formalisation |
| **Humans** | Chose the problem, built the system, announced the result; mathematicians are now checking and interpreting |
| **Checkpoint** | Lean check (formal), then peer review and Clay evaluation — both pending |

### Progress made
| Claim | Status | Evidence |
|---|---|---|
| Agents produced a long formal argument for forced blowup in days | Claimed | Announced by OpenAI; widely reported; not independently confirmed correct |
| Fits Clay statement (C), which permits a smooth external force | Contested | The statement allows forcing in (C) and (D). Whether that is the problem the field wants is disputed. |
| A machine-checkable formal proof was released | Contested | A preprint reports the Lean version does not fully match the written proof |
| The method extends to the unforced problem | Disputed | *Scientific American* reports three mathematicians argue it cannot |

### Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| A headline outran the evidence | Public, funders, other researchers | Documented |
| "Lean-verified" read as "proven" | Anyone reading the announcement | Documented |
| Priority and credit dispute | Buckmaster, Alpöge, OpenAI, tool users | Contested |
| User data provenance | Researchers using commercial AI tools | Open question |
| Burden on human experts | Mathematicians | Reported |
| Unaffordable to reproduce | Academic labs | Reported |

---

## Deep dive 2.1 — Was AI necessary?

**The question:** was this a new kind of result, or an old method run faster?

Computers have been central to fluid singularity research for over twenty years, and the field had already worked out how to use them rigorously. The standard technique is the **computer-assisted proof**: compute a numerical solution precisely enough, wrap it in rigorous error bounds, and convert that into a proof that a true solution exists nearby. Hou and Chen used this approach to prove a singularity for 3D Euler with a boundary in 2022 — work that took close to a decade.

Machine learning entered before this case too. In September 2025, DeepMind and academic mathematicians used physics-informed neural networks to find new families of unstable singularities in several simplified fluid equations. That work was careful about its own scope: the authors said the accuracy was sufficient to support a later computer-assisted proof, and did not claim one.

Against that background, what is new here is not the use of machines but the **autonomy and the scale**: roughly 10,000 agents generating a 166-page argument in days, with a formalisation produced by a second model. It is a difference of degree that may amount to a difference in kind — but the comparison that matters is not "AI versus humans". **Buckmaster and Alpöge were also using large language models.** The contrast is between two AI-assisted efforts with very different compute budgets and very different release practices.

> **Reading.** Weak case that AI was necessary; strong case that it was fast. The discipline already had rigorous computer-assisted methods, and the specific result concerns a forced variant that several mathematicians consider less important than the unforced problem.
>
> **Push back.** A defender would say speed at this scale is itself a scientific capability: exploring a proof space in days permits strategies no human team would attempt, and the artefacts were released publicly for checking.

## Deep dive 2.2 — Disciplinary advance

What mathematics actually gained, and what remains open.

1. **The official problem offers four options, and they are not equal.** (A) and (B): existence and smoothness, no external force, on all of space and on the torus. (C) and (D): breakdown, permitting a smooth external force. OpenAI's result takes the (C)/(D) route.
2. **Whether that settles the problem is genuinely disputed by mathematicians.** Luis Silvestre (Chicago): "The most important problem is unsolved," adding the forced formulation "was different from the problem we really wanted to solve." Diego Córdoba takes the opposite view: real fluids are always under some external force, so including one "makes complete sense." Luis Martínez-Zoroa: "Most of the other groups, it's true, were specifically considering the scenario without a force."
3. **The method may be a dead end for the harder question.** *Scientific American* reports three mathematicians posted a paper arguing OpenAI's method can never be extended to the full problem. If that holds, the result is a boundary marker rather than a route forward.
4. **Formalisation became the contested ground, not a settlement.** A King's College London and Cambridge preprint (27 Oct 2026, not peer reviewed; Bastounis, Circelli and Hansen) reports the Lean version does not fully match the written proof, with the written proof making a stronger claim in at least one place. The authors are explicit that this does **not** show the proof is wrong.
5. **A possible contribution nobody intended.** Gonzalo Cao-Labora notes that if the force-based route is ruled out for the full problem, the Clay statement itself might come to be seen as flawed for permitting forcing. Exposing an imprecision in a famous problem statement would be a real, if unglamorous, advance.

**For discussion:** which of these would still be true if the AI component were removed, and which depend on it?

## Deep dive 2.3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Announcement norms and who bears the cost** | The mathematical community | Publishing a 166-page proof as a public announcement transfers the verification burden to unpaid experts, on a timetable set by the announcing party. Camillo De Lellis: "It's not anymore a matter of clearly verifiable mathematical facts." Experts also reported the proof was hard to read. |
| **Priority and credit in an unauditable system** | Buckmaster, Alpöge, tool users | Both accounts are stated above. Because a model's reasoning cannot be fully inspected, the question may be permanently undecidable. |
| **Research data as training data** | Any scientist using a commercial AI tool | The structural issue outlives this dispute. If exploratory work in a vendor's product can shape that vendor's models, researchers competing with the vendor face a conflict they cannot audit or opt out of. Compare the Adobe photo-library case: same mechanism, different field. |
| **Open problems as benchmarks** | Early-career mathematicians | Reporting describes a September 2026 statement signed by Fields Medalists criticising AI companies for treating unsolved problems as benchmarks. **I could not read the statement itself [VERIFY].** The concern is that prestige problems crowd out the slow, unglamorous work careers are built on. |
| **Asymmetry of verification capacity** | Academic mathematics | A multi-million-dollar run can produce claims in days that take months to assess. Reporting says OpenAI released roughly 400 further results within weeks. Claim production can outpace checking. |
| **Honest framing by the claimant** | — | In fairness: OpenAI said it did not intend to claim the prize, released the proof and Lean code publicly, and acknowledged the limits of what it could rule out about data. These are better practices than the headlines suggest. |

**For discussion:** pick the item you think most serious. Who has the power to fix it?

## Deep dive 2.4 — Alternative views

### Debate A: did OpenAI solve the Navier–Stokes problem?

**Position A — yes, by the official criteria**
- Fefferman's statement explicitly permits a smooth external force in options (C) and (D).
- Reporting says the result unambiguously meets the Clay Institute's original formulation.
- Córdoba: real fluids are always forced, so the formulation is physically reasonable.
- The proof was formalised in Lean, which most human proofs never are.

**Position B — no, not the problem that matters**
- Silvestre: "The most important problem is unsolved."
- Most groups work on the unforced equations, where blowup would come from the fluid's own dynamics.
- A preprint argues the method cannot extend to the full problem.
- A preprint reports the Lean statement and the written proof make different claims.

> **A third framing.** Both sides agree on the facts and disagree on what counts as the problem. That disagreement is the lesson: "solved" is a social judgement by a community about whether a formal statement captures an intended question. No amount of computation settles it. Notice also that the Clay Institute, the only body that can rule, has deliberately not ruled.

### Debate B: is "Lean-verified" the gold standard we wanted?

**Position A — formalisation is a genuine advance**
- A machine check is stricter than most referee reports.
- It makes the argument auditable line by line, forever.
- Releasing the Lean code invited exactly the scrutiny that found the mismatch.

**Position B — formalisation moved the problem rather than solving it**
- Lean checks that a formal statement follows, not that it is the right statement.
- The KCL and Cambridge preprint reports the formal and written versions differ.
- Non-specialists read "formally verified" as "proven", which is a predictable misreading.

> **A third framing.** Formalisation converts a hard problem (is this reasoning sound?) into a narrower one (does this formal statement say what we mean?). That is real progress, and it is not the same as verification. The checkable question for any such claim: who confirmed the fidelity of the translation, and are they independent?

### Debate C: was the priority dispute a wrong, or an unanswerable question?

**Position A — a wrong was done**
- The timeline is tight: OpenAI began 1 September, after a rumour it later linked to the pair.
- The researchers were using the vendor's own product.
- OpenAI concedes de-identified usage data may have helped its models.

**Position B — no wrong is established**
- OpenAI states no specific user data was accessed and the work was not seen before release.
- Experts say the final approach differs from the one early accounts named.
- Simultaneous discovery is common in mathematics; a rumour of progress is itself public information.

> **A third framing.** Teach this as a question about infrastructure rather than character. Whatever happened here, the general condition — researchers cannot audit whether their exploratory work shaped a competitor's model — will recur. The remedy is contractual and technical (opt-outs, audit logs, institutional agreements), not a verdict on these individuals.

## What a scientist needs to know
- Mathematics differs from empirical science: a proof can in principle be checked by anyone with the skill, but expert time is scarce.
- A **Lean-verified statement is only as good as its translation.** Ask who confirmed the formal statement matches the real problem.
- Posting a result is not peer review. Check the Clay Institute's own rules for acceptance.
- **A variant is not the original problem.** Read the definition, including what is permitted (such as an external force).
- Early news coverage is provisional. Headlines and bodies of the same article can disagree.
- Ask: who benefits from announcing now? Who could check this, and how long would it take?

## Decision point
You are a journalist, a journal editor, and a funder in turn. The claim lands on your desk on 8 September. What do you publish, accept or fund that day? What would you need to see first?

## Activity (20 min): "Claim Audit"
Give teams the original BBC-style summary and two later articles. Teams list every discrepancy in numbers and framing, then fill in: *What is claimed? Who checked it? What was checked? What is unconfirmed? Who benefits from announcing now?* Finally, rewrite the headline to match the evidence.

## Recommendations
| Audience | Action |
|---|---|
| Developers | Separate "announcement" from "claim": release to experts first, or label clearly as unreviewed |
| Developers | Publish the formal statement with a fidelity check — a human-readable account of what the Lean statement says and why it matches |
| Developers | Disclose compute, attempts and data policy, including failed runs |
| Institutions and funders | Set journal and funder rules for AI-generated proofs: what counts as verification, credit and priority |
| Scientists | Read the problem definition before the headline |
| Scientists | Ask vendors what happens to your inputs; prefer tools with opt-out and audit provisions |

**Takeaway:** scale and speed do not replace community verification. Even formal checking leaves human judgement about whether the right thing was checked.

---
---

# Case 3: The Virtual Lab and SARS-CoV-2 Nanobodies

**Label: Positive.** A narrow task, a human owner, and an experiment before the claim.

### Sources
- Swanson K, Wu W, Bulaong NL, Pak JE, Zou J. "The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies." *Nature* 646(8085):716–723, online 29 Jul 2025. DOI: 10.1038/s41586-025-09442-9. PMID 40730228. (Retrieved via PubMed.)
- Code and meeting transcripts: github.com/zou-group/virtual-lab
- Stanford news story, July 2025
- Elsevier generative-AI policies for journals; CASRAI on ICMJE/COPE authorship rules

### The story
An LLM Principal Investigator agent guided a team of LLM scientist agents through a series of research meetings, with a human researcher giving high-level feedback. The system built a computational nanobody design pipeline using the protein language model **ESM**, **AlphaFold-Multimer** and **Rosetta**, and designed **92 new nanobodies**. Experimental validation found "a range of functional nanobodies with promising binding profiles" across SARS-CoV-2 variants. Two showed improved binding to the **JN.1** or **KP.3** variant while keeping strong binding to the ancestral spike. The authors call these "suitable candidates for further investigation."

### Who did what
| | |
|---|---|
| **AI** | Role-based agents held meetings, chose and combined tools, proposed and ranked designs |
| **Humans** | Posed the question, gave feedback, made the nanobodies, ran the binding experiments, judged the results |
| **Checkpoint** | Human feedback in meetings, then experimental binding tests |

### Progress made
| Claim | Status | Evidence |
|---|---|---|
| Designed 92 nanobodies using ESM, AlphaFold-Multimer and Rosetta | Verified | Peer-reviewed (PubMed abstract) |
| Experiments found functional nanobodies; two improved on JN.1 or KP.3 | Verified | Abstract. Binding, not neutralisation or efficacy. |
| One highlighted nanobody showed no off-target binding | Reported | Stanford news story; check the paper's data |
| Agents find things beyond prior human publications | Claimed | Said by the senior author as promising, not shown |

### Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| Generalising from one study | Readers, funders, other labs | Risk |
| Binding mistaken for a treatment | Public and press | Risk |
| Automation bias from "1% human involvement" | Teams copying the approach | Potential |
| Dual-use and biosecurity | Society | General concern |
| Targets move (JN.1, KP.3 may be superseded) | Countermeasure developers | Reported |

---

## Deep dive 3.1 — Was AI necessary?

**The question:** what did the agent layer add that a skilled human could not?

Every predictive component here already existed and was built by people: **ESM**, a protein language model; **AlphaFold-Multimer**, for complexes; and **Rosetta**, decades of computational structural biology. A competent computational biologist could chain these tools. So the agents did not supply new predictive power. They supplied **coordination**.

The paper's own justification is explicit and worth taking seriously: science benefits from interdisciplinary teams, and many scientists cannot easily reach experts across several fields. On that framing, the Virtual Lab is best understood as an **expertise-access tool** for people who lack a large collaborative network, not as a replacement for scientists who have one.

The problem is that this claim is not tested in the work. Without a human-only arm, or a comparison against the same pipeline assembled by a graduate student, we cannot tell whether the agent layer improved the outcome, left it unchanged, or simply made it faster to set up. The senior author's estimate that humans intervened around 1% of the time tells us about effort, not about quality.

> **Reading.** Necessity is plausible but unproven. The result is real; the claim that agents were the reason for it is the part that lacks a control.
>
> **Push back.** A defender would note that the relevant comparison is not a well-resourced Stanford lab but a researcher with no immunologist down the corridor, and that speed itself matters when a viral variant is current.

## Deep dive 3.2 — Disciplinary advance

What was achieved, and where it sits on the road to a therapeutic.

1. **A documented, reusable workflow.** The principal contribution is the method: an LLM PI agent running meetings with scientist agents under human direction, with transcripts and code released publicly. This is why the paper is notable, more than the molecules themselves.
2. **92 designs, with experimental follow-through.** A range showed functional binding profiles; two improved on JN.1 or KP.3 while keeping ancestral binding.
3. **Binding is the first rung of a long ladder.** For a therapeutic: binding → neutralisation → specificity → stability and manufacturability → animal efficacy → toxicology → clinical trials. Press coverage reports no off-target binding for the highlighted design, which is an early specificity signal, not an efficacy result.
4. **Nanobodies are a sensible choice for this test.** Small, comparatively stable, cheap to produce, so the design-and-test cycle is fast. The task was selected to be tractable — a strength of the study design and a limit on how far it generalises.
5. **What the field still does not know.** The hit rate among the 92 was not visible in the sources I could read, nor any human-only baseline. These are the two numbers that would turn a promising demonstration into evidence about agents. **[VERIFY in full text]**

**For discussion:** which of these would still be true if the AI component were removed?

## Deep dive 3.3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Accountability under low intervention** | Authors, institutions, journals | If a human intervenes around 1% of the time, who is answerable for the other 99%? No major publisher or integrity body permits an AI tool to be an author, because authorship entails responsibilities only people can carry. The corollary: named humans own every output, including the ones they did not read. |
| **Dual use in agent-driven biological design** | Society | A system that designs binders to a viral protein is the same kind of system that could be pointed somewhere harmful. This case is benign and the target is a public-health one. The governance question is whether institutional biosafety review currently covers automated design pipelines — typically it does not. |
| **Disclosure and reproducibility** | Readers and reviewers | Publisher policies now widely require disclosure of AI used to conduct research, with placement varying by journal. Agentic work raises a harder version: prompts, model versions and transcripts *are* the method. Releasing transcripts, as this team did, is currently best practice rather than a requirement. |
| **Automation bias at the review stage** | Teams adopting the approach | A fluent, well-argued agent transcript is persuasive regardless of correctness. The risk is reading coherence as competence. Put checkpoints where a wrong answer is cheapest to catch, not where a human happens to be curious. |
| **Equity of the bench requirement** | Labs without wet-lab capacity | This workflow works because the designs could be made and tested. Released freely, it gives a lab without that capacity 92 untestable hypotheses. The agent layer is cheap; the validation is not. |
| **Credit to the tool builders** | ESM, AlphaFold and Rosetta communities | The result depends entirely on tools built by other groups over many years. Citation handles this reasonably well, but "AI scientist" narratives compress that history out of view. |

## Deep dive 3.4 — Alternative views

### Debate A: what does this case actually demonstrate?

**Position A — AI can do science**
- Agents chose a strategy, built a pipeline and proposed molecules that worked at the bench.
- Meetings that would take a human team weeks ran in minutes.
- Human intervention was roughly 1%.

**Position B — AI can orchestrate human tools on a human question**
- Every predictive component was built by people from experimental data.
- A human chose the target, the scope and the success criterion.
- Humans made and tested the molecules, and judged the results.
- No baseline shows the agents outperformed a skilled person with the same tools.

> **A third framing.** The second description is more defensible and more useful, because it tells you when to expect the approach to work: a narrow task, mature tools, a clear success measure and a bench to test on. The first description predicts nothing. Ask of any "AI scientist" claim which of these it is.

### Debate B: is 1% human involvement reassuring or alarming?

**Position A — reassuring**
- It shows the system is genuinely capable rather than puppeteered.
- Human attention is the scarcest resource in a lab.
- The real control was at the bench, where it belongs.

**Position B — alarming**
- An aggregate rate says nothing about whether the 1% landed at the decisive moments.
- Errors in the unreviewed 99% are invisible unless an experiment happens to catch them.
- It is self-reported, in a news interview, not measured in the paper.

> **A third framing.** The figure is the wrong metric either way. A better question is structural: which decisions required a human signature, and what would have happened if the agents had been wrong at each one? Here the bench test is a genuine hard gate, which is why the low rate is tolerable. In a workflow ending in a *claim* rather than an experiment, the same rate would be a serious problem.

### Debate C: should this be a template for other labs?

**Position A — yes, with the published artefacts**
- Code and transcripts are public, so the method is inspectable and adaptable.
- It suits exactly the under-networked researcher the paper describes.
- The components are standard and well documented.

**Position B — not yet, as evidence**
- One study, one lab, one target class.
- The two numbers needed to judge it — hit rate and baseline — are not available.
- The validation step requires resources many adopters will not have.

> **A third framing.** Adopt the practices now, suspend judgement on the claims. The transparency, the narrow scoping and the hard experimental gate are good design regardless of whether agents helped. Whether the agent layer adds value is an empirical question that this paper sets up and does not answer.

## What a scientist needs to know
- The novelty is the workflow; the prediction tools were already established.
- Always ask for the **denominator**. "Two improved" means little without how many were tested.
- Ask what the **baseline** was: a human team, random designs, or the same pipeline without agents?
- Binding is an early step toward a therapeutic. Several further stages come before clinical value.
- Open transcripts let you see where humans steered. Read them.
- Wet-lab capacity is required. Without it, you have computational candidates only.

## Decision point
You lead a small lab with a similar tool. It proposes 20 designs, ranked. You can test only five. How do you choose? What would convince you the ranking isn't just plausible-sounding? What do you report if two of the five work?

## Activity (20 min): "Design the Checkpoints"
Give teams a five-step workflow (question → agent design → ranking → bench test → report). Teams mark where a human must decide, where verification happens, and where a failure could go unnoticed. Then compare with the Virtual Lab's actual design and read part of the public transcripts.

## Recommendations
| Audience | Action |
|---|---|
| Scientists | Report the denominator and a baseline |
| Scientists | Define human gates before you start, rather than relying on an overall intervention rate |
| Institutions and funders | Fund the wet-lab capacity — computational candidates are only as useful as the capacity to test them |
| Developers | Keep transcripts and code open; add versioned records of agent prompts |
| Institutions and funders | Add biosecurity review to agent-driven design |

**Takeaway:** AI works best when the task is narrow, humans own the question and decision, and a real-world test comes before the claim.

---
---

# Cross-case synthesis

## Order of claim and check

| Case | Sequence |
|---|---|
| **Virtual Lab** | Agents design 92 → **bench binding tests** → paper published |
| **AlphaFold** | Model built → **blind benchmark** → database released → *user validation optional* |
| **Navier–Stokes** | Agents run → **public announcement** → Lean mismatch reported → *peer review pending* |

## Was AI necessary?

| Case | Non-AI alternative | Reading |
|---|---|---|
| **AlphaFold** | Experimental determination, homology modelling, evolutionary couplings | **Strong.** Nothing was close at this accuracy or scale, though it learned from the method it displaced. |
| **Navier–Stokes** | Computer-assisted proofs, used in this field for twenty years | **Weak.** Rigorous machine methods already existed. What was new was autonomy and speed, not machine involvement. |
| **Virtual Lab** | A skilled person chaining ESM, AlphaFold-Multimer and Rosetta | **Unproven.** Plausible for an under-networked researcher, but no baseline tests the claim. |

"Was AI necessary?" is a separate question from "did it work?". A result can be real and the AI still incidental to it.

## Three ethical patterns that recur

1. **Who supplied the data?** PDB depositors trained AlphaFold. Codex sessions may have informed a competitor's model. In both, the contributors had no say in the downstream use and no way to audit it.
2. **Where is the hard gate?** The Virtual Lab had one: the bench. AlphaFold's is optional and user-supplied. Navier–Stokes placed its check after the announcement. Trust tracks the gate, not the technology.
3. **Who can afford to check?** Verification needs a wet lab, an expert mathematician, or millions in compute. As claim production accelerates, the capacity to check becomes the bottleneck — and the inequality.

## Side by side

| | AlphaFold | Navier–Stokes | Virtual Lab |
|---|---|---|---|
| Label | Ambiguous | Contested | Positive |
| Scale | 200M+ predictions | ~10,000 agents | 92 designs |
| Verification | Benchmark; user checks optional | Lean check disputed; peer review pending | Bench tests before claim |
| Access | Database open; newest model restricted | Not reproducible by most labs | Code and transcripts public |
| Main risk | Over-trust and credit gap | Headline outran evidence; credit dispute | Overgeneralising from one study |
| Lesson | Open is not the same as unproblematic | Announcement is not acceptance | Narrow task, human owner, experiment first |

---

# Items to verify before teaching

1. **Navier–Stokes:** the "x of 4 statements" framing; message count and cost; the exact scope relative to Fefferman's official text; current Clay and peer-review status; the Lean repository and the KCL/Cambridge preprint; the Fields Medalists' statement.
2. **Virtual Lab:** hit rate among the 92, named agent roles, any baseline comparison, and confirmation that humans ran the experiments.
3. **AlphaFold:** training-data details in the 2021 paper; the whole-proteome quality preprint; current AlphaFold 3 licence terms; the PNAS ~850-entry figure (data only to January 2023).
4. **Sources read only as summaries:** the PNAS feature, *The Protein Journal* review, *Nature Methods* ROCKET paper, Zenodo equity report, DeepMind biosecurity note, DeepMind unstable-singularities preprint, Elsevier and *Science* authorship items.
5. **Could not open at all:** the BBC article, the *Science* news piece, the *Nature* full text, the bioRxiv full text.

A second person should re-verify every number against primary sources before release.
