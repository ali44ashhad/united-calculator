import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/probability-calculator";

const DEFAULTS = {
  favorable: "1",
  total: "6",
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

const fmtProb = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const fmtPct = (n) =>
  parseFloat((n * 100).toFixed(4)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });

const computeProbability = (favorableInput, totalInput) => {
  if (favorableInput.trim() === "" || totalInput.trim() === "") {
    return null;
  }

  const favorable = parseWholeNumber(favorableInput);
  const total = parseWholeNumber(totalInput);

  if (Number.isNaN(favorable) || Number.isNaN(total)) {
    return { error: "Enter whole numbers (counts of outcomes)." };
  }

  if (total <= 0) {
    return { error: "Total outcomes must be greater than 0." };
  }

  if (favorable < 0) {
    return { error: "Favorable outcomes cannot be negative." };
  }

  if (favorable > total) {
    return { error: "Favorable outcomes cannot exceed total outcomes." };
  }

  const probability = favorable / total;
  const complement = 1 - probability;
  const unfavorable = total - favorable;

  return {
    favorable,
    total,
    unfavorable,
    probability,
    probabilityPercent: probability * 100,
    complement,
    complementPercent: complement * 100,
    probabilityText: `P = ${favorable}/${total} = ${fmtProb(probability)}`,
    formula: "P(event) = favorable outcomes ÷ total equally likely outcomes",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is probability?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Probability measures how likely an event is, from 0 (impossible) to 1 (certain). This calculator uses P = favorable ÷ total for equally likely outcomes.",
    },
  },
  {
    "@type": "Question",
    name: "What do favorable and total outcomes mean?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Favorable is how many outcomes count as success. Total is how many equally likely outcomes exist in the sample space.",
    },
  },
  {
    "@type": "Question",
    name: "How do I convert probability to a percent?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Multiply by 100. A probability of 0.25 is 25%.",
    },
  },
  {
    "@type": "Question",
    name: "What is the complement probability?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "P(not A) = 1 − P(A). If 1 of 6 outcomes is favorable, P(not) = 5/6.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator do conditional probability?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—this is basic classical probability from two counts, not P(A|B) or Bayes’ theorem.",
    },
  },
  {
    "@type": "Question",
    name: "How do permutations relate to probability?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Count outcomes with nPr or nCr first, then divide favorable by total—or use this calculator once you have the counts.",
    },
  },
];

const ProbabilityCalculator = () => {
  const [favorable, setFavorable] = useState(DEFAULTS.favorable);
  const [total, setTotal] = useState(DEFAULTS.total);

  const result = computeProbability(favorable, total);

  const reset = () => {
    setFavorable(DEFAULTS.favorable);
    setTotal(DEFAULTS.total);
  };

  return (
    <>
      <Helmet>
        <title>
          Probability Calculator - Favorable ÷ Total Outcomes
        </title>
        <meta
          name="description"
          content="Classical probability P = favorable outcomes ÷ total equally likely outcomes—with decimal, percent, and complement—not conditional or Bayes."
        />
        <meta
          name="keywords"
          content="probability calculator, favorable outcomes, classical probability, chance calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Probability Calculator" />
        <meta
          property="og:description"
          content="P = favorable ÷ total outcomes."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Probability Calculator" />
        <meta
          name="twitter:description"
          content="Basic classical probability from outcome counts."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Probability Calculator",
            url: PAGE_URL,
            description: "Calculate classical probability from outcome counts.",
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
            name: "Probability Calculator",
            url: PAGE_URL,
            description: "Web tool for P = favorable/total.",
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
            headline: "Classical Probability",
            description: "P equals favorable outcomes divided by total outcomes.",
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
                name: "Probability Calculator",
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
              Favorable outcomes
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={favorable}
              onChange={(e) => setFavorable(e.target.value)}
              placeholder="e.g. 1"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              How many outcomes count as the event (0 to total).
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Total outcomes
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              placeholder="e.g. 6"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Equally likely outcomes in the sample space (must be &gt; 0).
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
            Probability summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Probability P</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? fmtProb(result.probability) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">As percent</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtPct(result.probability)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Complement P(not)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtProb(result.complement) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Complement (%)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtPct(result.complement)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Unfavorable outcomes</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.unfavorable : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Formula</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.probabilityText : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Classical equally likely model—not conditional probability or odds ratio.`
                : "Enter favorable and total outcome counts."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProbabilityCalculator;
