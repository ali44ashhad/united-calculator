import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/permutation-combination-calculator";

const MAX_N = 1000;

const DEFAULTS = {
  n: "10",
  r: "3",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseWholeNumber = (value) => {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const num = Number(trimmed);
  if (!Number.isInteger(num)) return NaN;
  return num;
};

const permutation = (n, r) => {
  let result = 1n;
  for (let i = n - r + 1; i <= n; i += 1) {
    result *= BigInt(i);
  }
  return result;
};

const combination = (n, r) => {
  const k = Math.min(r, n - r);
  let result = 1n;
  for (let i = 1; i <= k; i += 1) {
    result = (result * BigInt(n - k + i)) / BigInt(i);
  }
  return result;
};

const fmtBig = (value) => value.toLocaleString();

const computePermutationCombination = (nInput, rInput) => {
  if (nInput.trim() === "" || rInput.trim() === "") {
    return null;
  }

  const n = parseWholeNumber(nInput);
  const r = parseWholeNumber(rInput);

  if (Number.isNaN(n) || Number.isNaN(r)) {
    return { error: "Enter whole numbers (integers) for n and r." };
  }

  if (n < 0 || r < 0) {
    return { error: "n and r must be zero or positive." };
  }

  if (r > n) {
    return { error: "r cannot be greater than n (require n ≥ r)." };
  }

  if (n > MAX_N) {
    return { error: `n must be ${MAX_N} or less for this calculator.` };
  }

  const nPr = permutation(n, r);
  const nCr = combination(n, r);

  return {
    n,
    r,
    nPr,
    nCr,
    nPrText: `P(${n}, ${r}) = ${fmtBig(nPr)}`,
    nCrText: `C(${n}, ${r}) = ${fmtBig(nCr)}`,
    formula: "nPr = n!/(n−r)!; nCr = n!/(r!(n−r)!)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a permutation (nPr)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A permutation counts ordered arrangements: choose r items from n distinct items where order matters. Formula: n!/(n−r)!.",
    },
  },
  {
    "@type": "Question",
    name: "What is a combination (nCr)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A combination counts unordered selections: choose r items from n where order does not matter. Formula: n!/(r!(n−r)!).",
    },
  },
  {
    "@type": "Question",
    name: "When do I use permutation vs combination?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use permutations when order matters (e.g. podium finishes). Use combinations when order does not (e.g. choosing a committee).",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator allow repetition?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—this is standard nPr and nCr without replacement and without repeated items.",
    },
  },
  {
    "@type": "Question",
    name: "What are valid values for n and r?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Whole numbers with 0 ≤ r ≤ n. Enter n as total items and r as items chosen.",
    },
  },
  {
    "@type": "Question",
    name: "Why is there a maximum n?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Very large n can slow the browser. This tool supports n up to 1000 with exact integer results.",
    },
  },
];

const PermutationCombinationCalculator = () => {
  const [n, setN] = useState(DEFAULTS.n);
  const [r, setR] = useState(DEFAULTS.r);

  const result = computePermutationCombination(n, r);

  const reset = () => {
    setN(DEFAULTS.n);
    setR(DEFAULTS.r);
  };

  return (
    <>
      <Helmet>
        <title>
          Permutation &amp; Combination Calculator - nPr and nCr
        </title>
        <meta
          name="description"
          content="Compute nPr (permutations) and nCr (combinations) for whole numbers n and r with 0 ≤ r ≤ n—no repetition, order matters vs does not."
        />
        <meta
          name="keywords"
          content="permutation calculator, combination calculator, nPr, nCr, permutations and combinations"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Permutation & Combination Calculator"
        />
        <meta
          property="og:description"
          content="nPr and nCr from n and r."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Permutation & Combination Calculator"
        />
        <meta
          name="twitter:description"
          content="Ordered permutations and unordered combinations."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Permutation Combination Calculator",
            url: PAGE_URL,
            description: "Calculate nPr and nCr for counting problems.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Permutation Combination Calculator",
            url: PAGE_URL,
            description: "Web tool for permutations and combinations.",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Permutations and Combinations",
            description: "nPr and nCr formulas and when to use each.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_SCHEMA,
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Math Calculators",
                item: "https://www.unitedcalculator.net/math",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Permutation Combination Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              n (total items)
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={n}
              onChange={(e) => setN(e.target.value)}
              placeholder="e.g. 10"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              How many distinct items in the set (max {MAX_N}).
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              r (items chosen)
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={r}
              onChange={(e) => setR(e.target.value)}
              placeholder="e.g. 3"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              How many to pick; must satisfy 0 ≤ r ≤ n.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={reset}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Permutation &amp; combination summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Permutation nPr
              </span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.nPrText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Combination nCr</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.nCrText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">n</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.n : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">r</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.r : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Order matters?</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? "nPr yes · nCr no" : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Without replacement— not n^r or multiset formulas.`
                : "Enter whole numbers n and r."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PermutationCombinationCalculator;
