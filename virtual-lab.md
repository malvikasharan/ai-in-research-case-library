# The Virtual Lab and SARS-CoV-2 Nanobodies

**Label: Positive.** A narrow task, a human owner, and an experiment before the claim.

## Sources
- Swanson K, Wu W, Bulaong NL, Pak JE, Zou J. "The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies." *Nature* 646(8085):716–723, online 29 Jul 2025. DOI: 10.1038/s41586-025-09442-9. PMID 40730228. (Retrieved via PubMed.)
- Code and meeting transcripts: github.com/zou-group/virtual-lab
- Stanford news story, July 2025
- Elsevier generative-AI policies for journals; CASRAI on ICMJE/COPE authorship rules

## Background

An LLM Principal Investigator agent guided a team of LLM scientist agents through a series of research meetings, with a human researcher giving high-level feedback. The system built a computational nanobody design pipeline using the protein language model **ESM**, **AlphaFold-Multimer** and **Rosetta**, and designed **92 new nanobodies**. Experimental validation found "a range of functional nanobodies with promising binding profiles" across SARS-CoV-2 variants. Two showed improved binding to the **JN.1** or **KP.3** variant while keeping strong binding to the ancestral spike. The authors call these "suitable candidates for further investigation."

## Who did what

| Human/AI/User | Contribution |
|---|---|
| **Humans** | Posed the question, gave feedback, made the nanobodies, ran the binding experiments, judged the results |
| **AI** | Role-based agents held meetings, chose and combined tools, proposed and ranked designs |
| **Checkpoint** | Human feedback in meetings, then experimental binding tests |

## Progress made
| Claim | Status | Evidence |
|---|---|---|
| Designed 92 nanobodies using ESM, AlphaFold-Multimer and Rosetta | Verified | Peer-reviewed (PubMed abstract) |
| Experiments found functional nanobodies; two improved on JN.1 or KP.3 | Verified | Abstract. Binding, not neutralisation or efficacy. |
| One highlighted nanobody showed no off-target binding | Reported | Stanford news story; check the paper's data |
| Agents find things beyond prior human publications | Claimed | Said by the senior author as promising, not shown |

## Harm and risk
| Risk | Who is affected | Status |
|---|---|---|
| Generalising from one study | Readers, funders, other labs | Risk |
| Binding mistaken for a treatment | Public and press | Risk |
| Automation bias from "1% human involvement" | Teams copying the approach | Potential |
| Dual-use and biosecurity | Society | General concern |
| Targets move (JN.1, KP.3 may be superseded) | Countermeasure developers | Reported |

---

## Deep dive 1 — Was AI necessary?

**The question:** what did the agent layer add that a skilled human could not?

Every predictive component here already existed and was built by people: **ESM**, a protein language model; **AlphaFold-Multimer**, for complexes; and **Rosetta**, decades of computational structural biology. A competent computational biologist could chain these tools. So the agents did not supply new predictive power. They supplied **coordination**.

The paper's own justification is explicit and worth taking seriously: science benefits from interdisciplinary teams, and many scientists cannot easily reach experts across several fields. On that framing, the Virtual Lab is best understood as an **expertise-access tool** for people who lack a large collaborative network, not as a replacement for scientists who have one.

The problem is that this claim is not tested in the work. Without a human-only arm, or a comparison against the same pipeline assembled by a graduate student, we cannot tell whether the agent layer improved the outcome, left it unchanged, or simply made it faster to set up. The senior author's estimate that humans intervened around 1% of the time tells us about effort, not about quality.

> **Reading.** Necessity is plausible but unproven. The result is real; the claim that agents were the reason for it is the part that lacks a control.
>
> **Push back.** A defender would note that the relevant comparison is not a well-resourced Stanford lab but a researcher with no immunologist down the corridor, and that speed itself matters when a viral variant is current.

## Deep dive 2 — Disciplinary advance

What was achieved, and where it sits on the road to a therapeutic.

1. **A documented, reusable workflow.** The principal contribution is the method: an LLM PI agent running meetings with scientist agents under human direction, with transcripts and code released publicly. This is why the paper is notable, more than the molecules themselves.
2. **92 designs, with experimental follow-through.** A range showed functional binding profiles; two improved on JN.1 or KP.3 while keeping ancestral binding.
3. **Binding is the first rung of a long ladder.** For a therapeutic: binding → neutralisation → specificity → stability and manufacturability → animal efficacy → toxicology → clinical trials. Press coverage reports no off-target binding for the highlighted design, which is an early specificity signal, not an efficacy result.
4. **Nanobodies are a sensible choice for this test.** Small, comparatively stable, cheap to produce, so the design-and-test cycle is fast. The task was selected to be tractable — a strength of the study design and a limit on how far it generalises.

**For discussion:** which of these would still be true if the AI component were removed?

## Deep dive 3 — Ethical considerations

| Issue | Who carries it | Detail |
|---|---|---|
| **Accountability under low intervention** | Authors, institutions, journals | If a human intervenes around 1% of the time, who is answerable for the other 99%? No major publisher or integrity body permits an AI tool to be an author, because authorship entails responsibilities only people can carry. The corollary: named humans own every output, including the ones they did not read. |
| **Dual use in agent-driven biological design** | Society | A system that designs binders to a viral protein is the same kind of system that could be pointed somewhere harmful. This case is benign and the target is a public-health one. The governance question is whether institutional biosafety review currently covers automated design pipelines — typically it does not. |
| **Disclosure and reproducibility** | Readers and reviewers | Publisher policies now widely require disclosure of AI used to conduct research, with placement varying by journal. Agentic work raises a harder version: prompts, model versions and transcripts *are* the method. Releasing transcripts, as this team did, is currently best practice rather than a requirement. |
| **Automation bias at the review stage** | Teams adopting the approach | A fluent, well-argued agent transcript is persuasive regardless of correctness. The risk is reading coherence as competence. Put checkpoints where a wrong answer is cheapest to catch, not where a human happens to be curious. |
| **Equity of the bench requirement** | Labs without wet-lab capacity | This workflow works because the designs could be made and tested. Released freely, it gives a lab without that capacity 92 untestable hypotheses. The agent layer is cheap; the validation is not. |
| **Credit to the tool builders** | ESM, AlphaFold and Rosetta communities | The result depends entirely on tools built by other groups over many years. Citation handles this reasonably well, but "AI scientist" narratives compress that history out of view. |

## Deep dive 4 — Alternative views

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

NOTE: Verification needed for the hit rate among the 92, named agent roles, any baseline comparison, and confirmation that humans ran the experiments.