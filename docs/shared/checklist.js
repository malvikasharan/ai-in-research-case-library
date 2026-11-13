/* The 16-question appraisal checklist (appraisal-checklist.md), grouped A/B/C. */
window.CHECKLIST = [
  { n: 1, g: "A", name: "Task fit", q: "Narrow and measurable, or open-ended? Can the method answer this at all?" },
  { n: 2, g: "A", name: "Ground truth", q: "What counts as valid science here, and who decides?" },
  { n: 3, g: "A", name: "Validation", q: "Computational, formal, bench or independent? Done before the claim went public?" },
  { n: 4, g: "A", name: "Denominator", q: "How many attempts, how many successes? What was discarded?" },
  { n: 5, g: "A", name: "Baseline", q: "Compared with what: a human team, a simpler method, chance, or nothing?" },
  { n: 6, g: "A", name: "Uncertainty", q: "Is confidence reported, and does the headline carry it?" },
  { n: 7, g: "B", name: "Independence", q: "Who verified it, and do they have a stake in the result?" },
  { n: 8, g: "B", name: "Disclosure", q: "Is the AI use declared well enough to repeat the method?" },
  { n: 9, g: "B", name: "Accountability", q: "Which named humans answer for outputs no human read?" },
  { n: 10, g: "B", name: "Conflicts", q: "Who funded it, who benefits, who controlled the timing?" },
  { n: 11, g: "B", name: "Error correction", q: "If it's wrong, how would anyone find out, and can it be withdrawn?" },
  { n: 12, g: "C", name: "Provenance & consent", q: "Whose data went in, under what terms? Could they decline?" },
  { n: 13, g: "C", name: "Recognition", q: "Who is credited? Does it surface the underrepresented or amplify the dominant?" },
  { n: 14, g: "C", name: "Participation", q: "Were affected people involved in choosing the question?" },
  { n: 15, g: "C", name: "Access & benefit", q: "Could a typical lab reproduce it? Who can act on the result?" },
  { n: 16, g: "C", name: "Harm & stakes", q: "What if it's wrong or misused? Who bears the cost?" },
];
window.CHECK_GROUPS = { A: "Is it sound?", B: "Is it accountable?", C: "Is it just?" };
window.SHORT_FORM = [3, 4, 5, 7, 13, 16];
/* Which checklist questions each part of a case speaks to. */
window.CHECK_MAP = { story: [1, 2, 10], who: [7, 9], claims: [3, 4, 5, 6], risks: [16], dd1: [1, 5], dd2: [2, 3, 6], dd3: [8, 11, 12, 13, 14, 15, 16], dd4: [2, 7, 10] };
