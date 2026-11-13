# Cross-case synthesis

Seven cases, read together. Four are AI claims or tools in science: [AlphaFold](case-studies/alphafold.md), [Navier–Stokes](case-studies/navier–stokes.md), the [Virtual Lab](case-studies/virtual-lab.md) and [Long-Tail Research](case-studies/long-tail-research.md) (FAIRdata.ai and AutoDiscovery). Two are problem classes built from invented vignettes and documented cases: [Undue Influence](case-studies/undue-influence.md) and [Morally Inadmissible Evidence](case-studies/morally-inadmissible.md). One is a documented misuse of AI against research: [Word Weaponization](case-studies/word-weaponization.md).

## Order of claim and check

| Case | Sequence |
|---|---|
| **Virtual Lab** | Agents design 92 → **bench binding tests** → paper published |
| **AlphaFold** | Model built → **blind benchmark** → database released → *user validation optional* |
| **Navier–Stokes** | Agents run → **public announcement** → Lean mismatch reported → *peer review pending* |
| **Undue Influence** | Claim gains reach (launch, preprint, citation) → **agent synthesises it** → *audit or retraction later, if ever* → flag seldom reaches the agent |
| **Morally Inadmissible** | Data acquired (consent exceeded, terms broken, protection evaded, provenance laundered) → **agent uses it** → paper or model published → *taint found later, if ever* |
| **Word Weaponization** | Viewpoint criterion set → keyword search + ChatGPT rationales → **grants terminated** → *litigation and discovery* → court ruling |
| **Long-Tail Research** | Data deposited years ago → **AI enriches the record and generates hypotheses** → high-surprise results auto-promoted to hypothesis papers → *depositor and domain-expert checks not built in* |

In the four science cases the check comes before, during or after the claim. In the other three, the check comes after the harm, if it comes at all.

## Was AI necessary?

| Case | Non-AI alternative | Reading |
|---|---|---|
| **AlphaFold** | Experimental determination, homology modelling, evolutionary couplings | **Strong.** Nothing was close at this accuracy or scale, though it learned from the method it displaced. |
| **Navier–Stokes** | Computer-assisted proofs, used in this field for twenty years | **Weak.** Rigorous machine methods already existed. What was new was autonomy and speed, not machine involvement. |
| **Virtual Lab** | A skilled person chaining ESM, AlphaFold-Multimer and Rosetta | **Unproven.** Plausible for an under-networked researcher, but no baseline tests the claim. |
| **Undue Influence** | A human reviewer, who falls for the same traps (Boldt predates AI tools) | **Not necessary to the harm; amplifies it.** Ranking by prominence makes reach look like trust. The agent is also the cheapest place to apply existing markers. |
| **Morally Inadmissible** | Human scrapers and analysts (Havasupai, OkCupid, Books3) | **Not necessary to the harm; hides it.** Moves the decision from a person to an optimisation process, and the record from memory to an unread log. |
| **Word Weaponization** | Keyword search (Ctrl+F), which did most of the screening | **Not necessary; legitimising.** ChatGPT added no capability, only one-line rationales on demand and an argument that "the AI did it". |
| **Long-Tail Research** | Human data curators; secondary analysis by domain experts | **Strong for enrichment, weaker for discovery.** The realistic alternative for long-tail data is no curation and no second look. But a model's surprise is not a field's finding. |

"Was AI necessary?" is a separate question from "did it work?". A result can be real and the AI incidental to it. A harm can be old and the AI still change who sees it and who answers for it.

## Five ethical patterns that recur

1. **Who supplied the data, and did they agree?** PDB depositors trained AlphaFold. Codex sessions may have informed a competitor's model. Havasupai donors gave blood for diabetes research. Forum members never consented to an agent's scrape. Long-tail depositors' records are rewritten and mined "without requiring anything from the original depositor". In each, the contributors had no say in the downstream use and no way to audit it. (Appraisal items 12, 14.)
2. **Where is the hard gate?** The Virtual Lab had one: the bench. AlphaFold's is optional and user-supplied. Navier–Stokes placed its check after the announcement. Retraction flags exist but agents skip them. Long-tail findings are auto-promoted with no domain-expert gate. NEH's statutory peer review was bypassed entirely. Trust tracks the gate, not the technology. (Items 3, 11.)
3. **Who can afford to check?** Verification needs a wet lab, an expert mathematician, millions in compute, a retraction database the tool actually reads, or a lawsuit to force discovery. As claim production speeds up, the capacity to check becomes the bottleneck, and the inequality. (Item 15.)
4. **Responsibility does not transfer to the tool.** Virtual Lab's "1% human involvement", the researcher who reads only the agent's summary, and the government's ChatGPT defence at NEH all raise one question: who answers for outputs no human read? The NEH court gave the clearest answer: whoever "selected the AI tool, formulated the prompt, and defined the operative… criterion". (Item 9.)
5. **Who is recognised, and who is erased?** Prominence-ranking amplifies the already cited. "AI scientist" narratives compress the tool builders out of view. Keyword screening used the vocabulary that makes underrepresented research findable to defund it, and researchers now self-censor that vocabulary. The same classifiers that could surface historically underrecognised work can be turned to exclude it. Long-Tail Research is the hopeful counterpart: AI enrichment could make overlooked datasets findable, but only if credit flows back to the collectors rather than to whoever runs the tool. (Item 13.)

## What the agent cases add

The three newer cases move the checklist from *is this AI claim sound?* to *is the evidence an AI hands me sound, and was it obtained justly?*

| | Undue Influence | Morally Inadmissible | Word Weaponization |
|---|---|---|---|
| What goes wrong | True-looking evidence with a vetting gap | Accurate evidence with a tainted origin | Sound research classified by its subject |
| Marker today | Retraction flags; origin and preprint labels; none for hidden funding | Consent codes, DUO, Local Contexts Labels, logs; none for laundered data | None for applicants; discovery only through litigation |
| Where the fix sits | Index layer, venues, agent ranking | Collection, repository, agent acquisition | Funding process, disclosure rules, the courts |
| Hardest case | Exemplar 2b: influence with no trace in documents | Exemplar 3: every link looks clean | Nominal "human review" of AI flags |

## Side by side

| | AlphaFold | Navier–Stokes | Virtual Lab | Long-Tail Research | Undue Influence | Morally Inadmissible | Word Weaponization |
|---|---|---|---|---|---|---|---|
| Label | Ambiguous | Contested | Positive | Ambiguous | Negative (partly illustrative) | Negative (illustrative) | Negative |
| Evidence base | Peer-reviewed, benchmarked | Announcement, press, preprints | Peer-reviewed paper | NeurIPS methods paper; founder's blog tests | Documented cases + composite vignettes | Documented cases + composite vignettes | Court opinion, filings, reporting |
| Scale | 200M+ predictions | ~10,000 agents | 92 designs | 21 datasets (paper); 3 datasets (blog) | 21 retracted papers tested across 4 tools | 2.3M posts (vignette); 196,000 books (Books3) | 1,400+ NEH grants; 1,500+ NSF grants |
| Verification | Benchmark; user checks optional | Lean check disputed; peer review pending | Bench tests before claim | Provenance logged; no expert or depositor review | Retraction check often skipped; audits contested | Platform alerts only inside the walls | Bypassed; litigation after the fact |
| Access | Database open; newest model restricted | Not reproducible by most labs | Code and transcripts public | AutoDiscovery code open; hosted in AstaLabs | Agents' ranking policies unpublished | Markers do not follow copies | Criteria hidden until discovery |
| Who bears the cost | Experimental biologists, under-resourced labs | Unpaid expert checkers | Labs without wet-lab capacity | Depositors; small fields with few reviewers | Patients, newcomers to a field | Data subjects, Indigenous and patient communities | Underrecognised researchers and their subjects |
| Main risk | Over-trust and credit gap | Headline outran evidence; credit dispute | Overgeneralising from one study | Surprise mistaken for discovery; credit to the tool | Prominence read as vetting | Accurate but wrongly obtained evidence | AI as pretext; responsibility laundering |
| Lesson | Open is not the same as unproblematic | Announcement is not acceptance | Narrow task, human owner, experiment first | Findable is not credited | Reach is not vetting | Accurate is not admissible | The tool is the deployer's instrument |

## Using the seven together

- **Short-form checklist across all seven:** *Validation*, *Denominator*, *Baseline*, *Independence*, *Recognition*, *Stakes*. Students should find that the science cases mostly turn on the first three, and the agent and weaponization cases on the last three.
- **Suggested pairings:** Virtual Lab with Word Weaponization (what "human in the loop" means when the gate is real versus nominal); AlphaFold with Morally Inadmissible (data commons, consent and reciprocity); Navier–Stokes with Undue Influence (claims that gain reach before they are checked); Long-Tail Research with Word Weaponization (the same discovery and classification tools used to surface or to exclude).

---

# Items to verify before teaching

1. **Navier–Stokes:** the "x of 4 statements" framing; message count and cost; the exact scope relative to Fefferman's official text; current Clay and peer-review status; the Lean repository and the KCL/Cambridge preprint; the Fields Medallists' statement.
2. **Virtual Lab:** hit rate among the 92, named agent roles, any baseline comparison, and confirmation that humans ran the experiments.
3. **AlphaFold:** training-data details in the 2021 paper; the whole-proteome quality preprint; current AlphaFold 3 licence terms; the PNAS ~850-entry figure (data only to January 2023).
4. **Undue Influence:** the *JAMA* starch meta-analysis (DOI and estimates); whether the *Nature* HLE incorporated the audit; secondary sources on FrontierMath.
5. **Morally Inadmissible:** All of Us policies (read as excerpts); Havasupai donor and sample counts; status of Cloudflare, Reddit and Google allegations.
6. **Word Weaponization:** the WIRED HHS–Palantir article and *Science* NSF demographics (read only as summaries); *Thakur v. Trump* date and holding; appeal status of *ACLS v. NEH*.
7. **Long-Tail Research:** the three dataset results (from the developer's blog only); the Cheng MRI dataset's patient count; FAIRdata.ai's current models; the arXiv:2606.29182 critique; the sign of the reported surprisal values.
8. **Disclosure:** Undue Influence and Morally Inadmissible were drafted with Claude (Anthropic), and Anthropic appears in both as a party or scored developer. FAIRdata.ai uses Claude for enrichment. The rewrites in this set were also produced with Claude.

A second person should re-verify every number against primary sources before release.
