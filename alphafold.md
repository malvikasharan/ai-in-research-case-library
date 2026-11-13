# AlphaFold

**Label: Ambiguous.** Open release is a genuine and uncommon good. Credit, trust and access remain unresolved.

## Sources
- Jumper et al., *Nature* 596, 583–589 (2021). DOI: 10.1038/s41586-021-03819-2
- AlphaFold Protein Structure Database (EMBL-EBI): https://alphafold.ebi.ac.uk/ — over 200 million entries, CC-BY-4.0
- 2024 Nobel Prize in Chemistry: Hassabis and Jumper for AlphaFold, shared with Baker for computational protein design
- *Nature* news on AlphaFold 3 release terms (Nov 2024)
- PNAS feature, "AlphaFold two years on: validation and impact" (2024)
- *The Protein Journal*, "Advantages and limitations of AlphaFold in structural biology" (2025)
- *Nature Methods* (2026), ROCKET: AlphaFold as a prior for experimental structure determination
- AlphaFold educational summit report on global equity (Zenodo, 2025)
- DeepMind, "Our approach to biosecurity for AlphaFold 3" (2024)

## Background

AlphaFold 2 was trained on experimentally determined structures from the Protein Data Bank, together with evolutionary sequence alignments and self-distillation on its own predictions. It predicts 3D structure from sequence at near-experimental accuracy for many proteins. Over 200 million predictions are free through EMBL-EBI under CC-BY-4.0. AlphaFold 3 was published in 2024 without code; after criticism, code and weights were released in November 2024 for non-commercial academic use, with weights available on request.

## Who did what

| Human/AI/User | Contribution |
|---|---|
| **Humans** | Solved the training structures over decades; ran the blind CASP benchmark; host the database; interpret and validate |
| **AI** | Predicted single static structures, with per-residue confidence (pLDDT) and a predicted aligned error map (PAE) |
| **Checkpoint** | Confidence scores and experimental validation — both optional for the user |

## Progress made
| Claim | Status | Evidence |
|---|---|---|
| Predicts many structures at near-experimental accuracy | Verified | Peer-reviewed, blind-benchmarked. Accuracy varies by protein. |
| 200M+ predictions free, including commercial use | Verified | EMBL-EBI, CC-BY-4.0 |
| Recognised by the 2024 Nobel Prize in Chemistry | Verified | Awarded for the science. No source found that it honoured the open release. |
| Researchers without structural capacity can generate hypotheses | Reported | Widely stated and plausible; distributional evidence not checked. |

## Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| Over-trusting confident-looking models | Any scientist building on a prediction | Documented risk |
| Credit gap for data depositors | Structural biologists | Open question |
| Restricted access for the newest model | Commercial users, collaborative groups | Documented |
| Possible narrowing of research agendas | The field | Unverified here |

---

## Deep dive 1 — Was AI necessary?

**The question:** did this need AI, or was it simply faster?

Protein structure prediction was a recognised open problem for roughly fifty years. The field ran a blind competition, CASP, from 1994 onwards, precisely because self-reported accuracy could not be trusted. Before AlphaFold 2, the best methods combined homology modelling, fragment assembly and, increasingly, evolutionary couplings — the observation that residues which mutate together are often in contact. Those methods were improving, but slowly, and they failed on proteins without close relatives of known structure.

The experimental alternative was not unavailable; it was expensive. Determining one structure by crystallography or cryo-EM could occupy a graduate student for a substantial part of a PhD, and some proteins resisted for decades. After more than fifty years of global effort, the PDB held a few hundred thousand experimentally determined structures. AlphaFold released over 200 million predictions.

So AI did not invent the possibility of knowing protein structures. It changed the economics of a hypothesis. Work that used to precede a structure now follows it.

> **Reading.** Strong case for necessity, with a caveat. No non-AI method was close to this accuracy or scale. But AlphaFold is downstream of the experimental structures it learned from, so it did not remove the need for the method it replaced at scale.
>
> **Push back.** A sceptic would note that evolutionary-coupling methods were already climbing, and that AlphaFold's jump reflects decades of accumulated public data plus a large engineering effort, rather than a purely algorithmic insight.

**For discussion:** if the same capability had arrived five years later by conventional means, what would have been lost, and who would have borne that loss?

## Deep dive 2 — Disciplinary advance

Measured change, rather than claimed change.

1. **It entered experimental workflows rather than replacing them.** A 2024 PNAS feature reported roughly 850 PDB entries associated with papers that use AlphaFold, over 60% of them cryo-EM structures (data to January 2023). Predictions serve as search models in crystallography and help interpret ambiguous cryo-EM density.
2. **Integrative structural biology grew.** Combining experimental maps with predictions became standard for large assemblies; the nuclear pore complex is the best-known early example. Major cryo-EM model-building programs added AlphaFold support.
3. **The research question shifted.** With a plausible fold available cheaply, attention moved from "what shape is it?" to "which state, with what partners, under what conditions?" Reviews identify dynamics, disorder, ligands and transient assemblies as the standing gaps.
4. **New methods treat prediction as a prior, not an answer.** A 2026 *Nature Methods* paper introduces ROCKET, which refines AlphaFold2 predictions against crystallography, cryo-EM and cryo-ET data, framing scarce multi-state ground truth as the limiting problem.
5. **Reach is broad; outcomes are not yet demonstrated.** DeepMind reports over 3 million users across 190 countries and a partnership with DNDi on Chagas disease and leishmaniasis. I found no peer-reviewed study showing a resulting approved drug or measured health benefit.

**For discussion:** which of these would still be true if the AI component were removed, and which depend on it?

## Deep dive 3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Reciprocity to the data commons** | PDB depositors | Deposition was voluntary and openly licensed, so nothing was taken improperly. The question is whether a field that supplied decades of training data receives a proportionate return, and whether citing the PDB is sufficient credit. |
| **The "experiments are no longer needed" risk** | Experimental structural biology | A structural biology editorial reports that some reviewers of grants and papers now treat experimental determination as less necessary. The same piece notes experimental structures outperform AlphaFold models at explaining diffraction data and as docking targets. If funding follows that belief, the training data for future models stops being generated. |
| **Openness without capacity is not access** | Under-resourced institutions | A 2025 AlphaFold education summit report argues the benefit requires equitable access to resources and expertise, not just free downloads, and recommends regional hubs. A capacity-building paper describes substantial barriers to structural biology in Africa. |
| **Partial openness in newer versions** | Commercial users, collaborative groups | AlphaFold 3 weights are non-commercial, on request, and may not be shared outside your organisation. A field built on open deposition now depends partly on a corporate licence. |
| **Biosecurity** | Society | DeepMind published a biosecurity approach for AlphaFold 3. Structure prediction for pathogens and toxins is dual-use, and the risk assessment sits largely with the releasing organisation. |
| **Misrepresentation in publication** | Readers and reviewers | Presenting a prediction with the visual authority of an experimental structure, without confidence scores, misleads readers. Routine and avoidable. |

**For discussion:** pick the item you think most serious. Who has the power to fix it — the individual scientist, the institution, the funder, the publisher, or the developer?

## Deep dive 4 — Alternative views

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

NOTE: Verification needed for the training-data details in the 2021 paper; current AlphaFold 3 licence terms