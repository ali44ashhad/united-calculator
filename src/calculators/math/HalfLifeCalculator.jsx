import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/half-life-calculator";

const LN2 = Math.LN2;

const DEFAULTS = {
  initialAmount: "100",
  halfLife: "5",
  timeElapsed: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const formatAmount = (value) => {
  const abs = Math.abs(value);
  if (abs !== 0 && (abs >= 1e8 || abs < 1e-4)) {
    return value.toExponential(6);
  }
  return parseFloat(value.toPrecision(10)).toLocaleString(undefined, {
    maximumFractionDigits: 6,
  });
};

const computeHalfLife = (initialAmount, halfLife, timeElapsed) => {
  if (
    initialAmount.trim() === "" ||
    halfLife.trim() === "" ||
    timeElapsed.trim() === ""
  ) {
    return null;
  }

  const n0 = parseFloat(initialAmount);
  const tHalf = parseFloat(halfLife);
  const t = parseFloat(timeElapsed);

  if (isNaN(n0) || isNaN(tHalf) || isNaN(t)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (n0 < 0) {
    return { error: "Initial amount cannot be negative." };
  }

  if (tHalf <= 0) {
    return { error: "Half-life must be greater than zero." };
  }

  if (t < 0) {
    return { error: "Elapsed time cannot be negative." };
  }

  const halfLivesElapsed = t / tHalf;
  const remainingAmount = n0 * Math.pow(0.5, halfLivesElapsed);
  const decayedAmount = n0 - remainingAmount;
  const percentRemaining = n0 === 0 ? 0 : (remainingAmount / n0) * 100;
  const decayConstant = LN2 / tHalf;
  const meanLifetime = tHalf / LN2;

  return {
    initialAmount: n0,
    halfLife: tHalf,
    timeElapsed: t,
    remainingAmount,
    decayedAmount,
    percentRemaining,
    halfLivesElapsed,
    decayConstant,
    meanLifetime,
    formula: "N(t) = N(0) × 0.5^(t/T)",
    exponentialFormula: "N(t) = N(0) × e^(−λt)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is half-life?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Half-life is the time for a quantity to fall to half its initial value in exponential decay. It is probabilistic for single nuclei but accurate for large samples.",
    },
  },
  {
    "@type": "Question",
    name: "What is the half-life formula?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "N(t) = N(0) × 0.5^(t/T), where N(0) is initial amount, T is half-life, and t is elapsed time. Equivalent form: N(t) = N(0) × e^(−λt).",
    },
  },
  {
    "@type": "Question",
    name: "How do I use this half-life calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter initial amount N(0), half-life T, and elapsed time t (same time units). It returns remaining amount N(t) plus decay constant and mean lifetime.",
    },
  },
  {
    "@type": "Question",
    name: "What is the half-life of carbon-14?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Carbon-14 has a half-life of about 5730 years—half of an initial sample decays in that period on average.",
    },
  },
  {
    "@type": "Question",
    name: "What is the relationship between half-life and decay constant?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "T = ln(2)/λ and τ = T/ln(2), where λ is the decay constant and τ is mean lifetime.",
    },
  },
  {
    "@type": "Question",
    name: "Can this calculator solve for half-life from initial and final amounts?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page computes remaining quantity forward from N(0), T, and t. It does not solve for T when you only know N(0), N(t), and t.",
    },
  },
];

const HalfLifeCalculator = () => {
  const [initialAmount, setInitialAmount] = useState(DEFAULTS.initialAmount);
  const [halfLife, setHalfLife] = useState(DEFAULTS.halfLife);
  const [timeElapsed, setTimeElapsed] = useState(DEFAULTS.timeElapsed);

  const result = computeHalfLife(initialAmount, halfLife, timeElapsed);

  const reset = () => {
    setInitialAmount(DEFAULTS.initialAmount);
    setHalfLife(DEFAULTS.halfLife);
    setTimeElapsed(DEFAULTS.timeElapsed);
  };

  return (
    <>
      <Helmet>
        <title>
          Half-Life Calculator - Radioactive Decay N(t) = N(0) × 0.5^(t/T)
        </title>
        <meta
          name="description"
          content="Compute remaining quantity after decay: enter N(0), half-life T, and elapsed time t. Shows λ, mean lifetime, and percent remaining."
        />
        <meta
          name="keywords"
          content="half-life calculator, radioactive decay calculator, N(t) formula, decay constant, exponential decay"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Half-Life Calculator" />
        <meta
          property="og:description"
          content="Remaining amount from initial quantity, half-life, and elapsed time."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Half-Life Calculator" />
        <meta
          name="twitter:description"
          content="Exponential decay: N(t) from N(0), T, and t."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Half-Life Calculator",
            url: PAGE_URL,
            description:
              "Calculate remaining quantity after radioactive or exponential decay.",
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
            name: "Half-Life Calculator",
            url: PAGE_URL,
            description: "Web tool for half-life decay N(t) = N(0) × 0.5^(t/T).",
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
            headline: "Half-Life and Exponential Decay",
            description: "How to compute remaining quantity using half-life.",
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
                name: "Half-Life Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Initial amount N(0)
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              placeholder="e.g. 100"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Half-life T
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={halfLife}
              onChange={(e) => setHalfLife(e.target.value)}
              placeholder="e.g. 5"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Use the same time unit as elapsed time (seconds, years, etc.).
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Time elapsed t
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={timeElapsed}
              onChange={(e) => setTimeElapsed(e.target.value)}
              placeholder="e.g. 10"
              className={inputClassName}
            />
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
            Half-life decay summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Remaining N(t)
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? formatAmount(result.remainingAmount)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Initial N(0)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatAmount(result.initialAmount)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Amount decayed</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatAmount(result.decayedAmount)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Percent remaining</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.percentRemaining.toFixed(4)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Half-lives elapsed (t/T)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.halfLivesElapsed.toFixed(4)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Half-life T</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatAmount(result.halfLife)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Decay constant λ</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.decayConstant.toExponential(6)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mean lifetime τ</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatAmount(result.meanLifetime)
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Also ${result.exponentialFormula}. Forward calculation only—not solving for T from N(0) and N(t).`
                : "Enter N(0), half-life T, and elapsed time t."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HalfLifeCalculator;
