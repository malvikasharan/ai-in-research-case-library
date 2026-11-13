# AI in Research: A Case Library

## Note: This project is a demo/proof of concept and many components are generated and unvetted

### How do infrastructures support underrecognised disciplines, entities and non-traditional researchers in an AI-enabled research?

This repository is a set of case studies on various uses of AI in research. 

It came out of a workshop breakout group (Neil, Brandeis, Malvika and John) that set out to answer the question above.

Each case applies a shared [appraisal checklist](appraisal-checklist.md), and the [cross-case synthesis](cross-case-synthesis.md) reads them together.

---

## Why we built this

### The starting point: infrastructure is not neutral

We began by asking what "infrastructure" means for researchers who are not well served by the current system. That includes people outside traditional universities and large industry labs, such as small bioinformatics teams, citizen scientists, small companies and community organisations. It also includes people whose work is shared in non-traditional forms: blogs, videos, via social platforms rather than simply journal articles.

Several observations shaped the work:

- **Open science should be "science-first"**: Making things available is not the same as organising them so they are useful and trustworthy.
- **A research paper is not the only output, and peer review stops at the article**: Data, code, videos and community knowledge have no agreed trust signal. What tells a reader which of these to trust?
- **An infrastructure's job is more than being a repository/service provider**: It should be committed to organising information in a way that benefits people. Total homogenisation is bad, but so is a hyper-personalised feed of knowledge.
- **Inclusion is not the same as being inclusive**: Open infrastructure has widened access, but who gets found, cited and trusted is still uneven.
- **Communities should be designed as safe space**: We build communities for specific audiences, and keeping them safe means removing behavior that is disruptive, disrespectful or harmful. It means deciding who is involved is a choice. A community can't be for everyone, so we should be open and honest about it.
- **AI is now part of the infrastructure**: Agentic tools and AI "co-scientists" decide what researchers find, read and build on. The question is whether that widens or narrows whose knowledge counts.

### Problem Framing

> How can AI make it easy for people, especially in non-traditional settings, to find what they are looking for and add their own work in ways that benefit them and help reverse inequity, without the community going down wrong paths?
>
> To get there: How do we identify reliable sources, organize trusted social spaces, and scope the use of AI carefully, so that it benefits underrecognized groups without amplifying voices/agenda of harmful actors?

### The worries behind the cases

The discussion kept coming back to a few risks:

- **Proxies of power**: Dominant science today often means what comes out of the best-resourced labs. If AI tools learn from that signal, they amplify it, and the influence of low-resource settings shrinks further. These patterns are likely to look different from one discipline to another.
- **Benchmaxxing**: Any signal of quality we define, any proxy metric, can be gamed. AI can learn to imitate the look of good research outputs.
- **Siloed agentic science**: Agentic workflows may be auditable, but today they are rarely collaborative. Slow, deliberate, team-centred science is worth protecting. Then again, this is fixable.
- **Integrity needs more than a methods section**: In an age of AI, the data and the process need to be auditable too.
- **Consent and compensation**: AI systems can take in data that was shared under different terms, or for a group's own benefit, and give nothing back.

### What we want

> A world where AI tools synthesise and advance research by drawing on sources of knowledge that are typically under-recognised, or that fail to influence the trajectory of research, while guarding against the undue or outsized influence of others.
>
> AI-enabled research that respects ethical constraints on knowledge.

### Why case studies

We agreed that the most useful first output was a **set of cases, from theoretical to actual**. They capture good practice we want to encourage, and bad practice: undue influence, exclusion, or failure to respect ethical constraints. The cases have two purposes:

1. **To build evaluations and measures for AI-based research tools.** Each case points to something a tool should detect, mark, refuse or surface.
2. **To build sensitivity in practitioners.** Researchers using AI tools need to see both the pitfalls and the promise in concrete situations.

The longer-term aims are a **research agenda** for realising the promising cases and avoiding the bad ones, and a commissioned study on what the signal looks like when a knowledge graph such as OpenAlex draws on commercial sources versus underrepresented groups.

---

## How the cases are organised

At the workshop we sorted cases along two axes. **Positive or negative:** is this a use we want to encourage? **Includes or excludes:** does the AI bring data and people in, or leave them out?

| | **Includes data / information** | **Excludes data / information** |
|---|---|---|
| **Positive** | AlphaFold; Long-Tail Research (FAIRdata.ai) | Virtual Lab |
| **Negative** | Navier–Stokes; Undue Influence (retractions); Morally Inadmissible Evidence; Word Weaponization | *(candidates below)* |

Each written case also carries a label from the appraisal checklist: Positive, Ambiguous, Contested or Negative. Once the evidence was examined, the label sometimes differs from the workshop category. Navier–Stokes, for example, was relabelled from Negative to Contested.

## The cases

| Case | Appraisal label | What it asks | Lesson |
|---|---|---|---|
| [AlphaFold](alphafold.md) | Ambiguous | Does an open, transformative tool still carry costs in credit, trust and access? | Open is not the same as unproblematic |
| [Navier–Stokes](navier–stokes.md) | Contested | What happens when an AI result is announced before the community can check it? | Announcement is not acceptance |
| [Virtual Lab](virtual-lab.md) | Positive | When do AI agents do good science? | Narrow task, human owner, experiment first |
| [Long-Tail Research](long-tail-research.md) | Ambiguous | Can AI curation and discovery give overlooked datasets the reuse they deserve? | Findable is not credited |
| [Undue Influence](undue-influence.md) | Negative (partly illustrative) | How do AI tools give unvetted or discredited work outsized weight? | Reach is not vetting |
| [Morally Inadmissible Evidence](morally-inadmissible.md) | Negative (illustrative) | How do agents bring in evidence obtained in ways that wrong its sources? | Accurate is not admissible |
| [Word Weaponization](word-weaponization.md) | Negative | What happens when AI is used to find and defund research by its vocabulary? | The tool is the deployer's instrument |

Every case follows the same structure:
- Sources, background, and who did what
- Progress made, and harms and risks
- Four deep dives: Was AI necessary? Disciplinary advance. Ethical considerations. Alternative views.
- What a scientist needs to know, a decision point, a classroom activity, recommendations and a takeaway

### How to use them

- **In discussion format:** run one case in 45–90 minutes using its decision point and activity. Pair cases to contrast them; suggested pairings are in the [synthesis](cross-case-synthesis.md).
- **In tool evaluation:** turn each case's harms table and "what a careful tool does" points into test cases for AI research tools.
- **As a quick screen:** use the checklist's short form of six questions: *Validation, Denominator, Baseline, Independence, Recognition, Stakes.*

---

## Candidate cases not yet written

The workshop proposed these cases, which are not yet written up. The one-line summaries come from workshop notes and **have not been verified**.

| Workshop category | Candidate | Why it was proposed |
|---|---|---|
| Positive, includes | **The Zizi Show** (Jake Elwes) | Drag performers consented, were paid and are credited in an AI persona. The direct counterpoint to the Adobe case. |
| Positive, includes | **Halicin** (Stokes et al., *Cell* 2020) | Searching a broad chemical space found a structurally novel antibiotic, validated in mice. |
| Positive, includes | **AlphaGenome** (Avsec et al., *Nature* 2026) | Unified genomic model with an open atlas of predictions |
| Positive, includes | **Dataverse AI metadata** | AI metadata recommendations with mandatory human review |
| Positive, includes | **Choral AI dataset** (arXiv:2412.01433) | How a community deliberates over governing an AI dataset built from its own performances |
| Positive, excludes | **Si et al.**, *Can LLMs Generate Novel Research Ideas?* | A rigorous human study of AI ideation, including its limits |
| Negative, includes | **Adobe photo library** (PetaPixel, 2026) | A photographer's work was used for training despite his objection, with no removal or compensation |
| Negative, includes | **Hao et al.**, *Nature* 2026 | AI expands individual scientists' impact but narrows the field's focus |
| Negative, includes | **Fabricated citations** (Topaz et al., *Lancet* 2026) | Rising rates of hallucinated references across 2.5 million biomedical papers |
| Negative, includes | **Accenture reports** (GPTZero) | 31 hallucinated sources in professional publications |
| Negative, excludes | **Agentic AI scientists** (arXiv:2605.08956) | Agents ignored evidence in most traces and seldom revised their beliefs |
| Negative, excludes | **Into the Unknown** (arXiv:2610.19159) | Agents fell short on 135 open research problems submitted by scientists |
| Negative, excludes | **Multi-agent teamwork** (CNBC, Nov 2026) | Confident errors compound when agents collaborate |
| Negative, excludes | **METR rogue-agent investigation** (Aug 2026) | An independent audit of agents acting beyond their authorised scope |

The notes list one arXiv ID (2605.08956) for both the agentic-scientists paper and Si et al. Si et al. is arXiv:2409.04109.

---

## Status and caveats

- **Draft, November 2026.** Several cases are living cases. Re-check facts before each use.
- **Verify before using.** Each case ends with a verification note, and the synthesis has a merged list.
- **Illustrative vignettes are labelled.** Undue Influence and Morally Inadmissible Evidence use invented composite scenarios, each followed by documented cases.
- **AI assistance and conflicts of interest.** Several cases were drafted or rewritten with Claude (Anthropic).
