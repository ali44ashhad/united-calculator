import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/number-sequence-calculator";

const MAX_TERMS = 500;

const DEFAULTS = {
  startValue: "1",
  difference: "2",
  length: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const fmtNum = (n) =>
  parseFloat(n.toFixed(10)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const computeArithmeticSequence = (startValue, difference, length) => {
  if (
    startValue.trim() === "" ||
    difference.trim() === "" ||
    length.trim() === ""
  ) {
    return null;
  }

  const a1 = parseFloat(startValue);
  const d = parseFloat(difference);
  const n = parseInt(length, 10);

  if (isNaN(a1) || isNaN(d)) {
    return { error: "Enter valid numbers for start value and common difference." };
  }

  if (isNaN(n) || !Number.isInteger(n)) {
    return { error: "Number of terms must be a whole integer." };
  }

  if (n <= 0) {
    return { error: "Number of terms must be greater than zero." };
  }

  if (n > MAX_TERMS) {
    return {
      error: `Number of terms cannot exceed ${MAX_TERMS} on this page.`,
    };
  }

  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(a1 + i * d);
  }

  const lastTerm = sequence[sequence.length - 1];
  const sum = (n / 2) * (a1 + lastTerm);
  const nthTermFormula = `aₙ = ${fmtNum(a1)} + (n − 1) × ${fmtNum(d)}`;

  return {
    startValue: a1,
    difference: d,
    length: n,
    sequence,
    sequenceText: sequence.map(fmtNum).join(", "),
    firstTerm: a1,
    lastTerm,
    sum,
    nthTermFormula,
    sequenceType: "Arithmetic (constant difference)",
    formula: "aₙ = a₁ + (n − 1)d; sum Sₙ = n(a₁ + aₙ)/2",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is an arithmetic sequence?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A sequence with a constant difference d between consecutive terms: aₙ = a₁ + (n − 1)d. Example: 1, 3, 5, 7… has a₁=1 and d=2.",
    },
  },
  {
    "@type": "Question",
    name: "What does this number sequence calculator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It generates terms of an arithmetic sequence from first term, common difference, and term count—plus the sum of the list.",
    },
  },
  {
    "@type": "Question",
    name: "Can it find geometric sequences?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page builds arithmetic sequences only—not geometric (multiply by ratio) or pattern guessing from given terms.",
    },
  },
  {
    "@type": "Question",
    name: "How do you find the sum of an arithmetic sequence?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sₙ = n(a₁ + aₙ)/2, or Sₙ = n(2a₁ + (n−1)d)/2. The summary shows the sum of generated terms.",
    },
  },
  {
    "@type": "Question",
    name: "What is the common difference?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The fixed amount added each step. d = a₂ − a₁. Negative d counts down (e.g. 10, 7, 4…).",
    },
  },
  {
    "@type": "Question",
    name: "Can I enter decimals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes for start value and common difference. Number of terms must be a positive integer.",
    },
  },
];

const NumberSequenceCalculator = () => {
  const [startValue, setStartValue] = useState(DEFAULTS.startValue);
  const [difference, setDifference] = useState(DEFAULTS.difference);
  const [length, setLength] = useState(DEFAULTS.length);

  const result = computeArithmeticSequence(startValue, difference, length);

  const reset = () => {
    setStartValue(DEFAULTS.startValue);
    setDifference(DEFAULTS.difference);
    setLength(DEFAULTS.length);
  };

  return (
    <>
      <Helmet>
        <title>
          Number Sequence Calculator - Arithmetic Sequence Generator
        </title>
        <meta
          name="description"
          content="Generate an arithmetic sequence from first term, common difference d, and term count. Shows list, last term, and sum—not geometric or pattern detection."
        />
        <meta
          name="keywords"
          content="arithmetic sequence calculator, number sequence generator, common difference, arithmetic progression sum"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Number Sequence Calculator" />
        <meta
          property="og:description"
          content="Arithmetic sequence terms and sum from a₁, d, and n."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Number Sequence Calculator" />
        <meta
          name="twitter:description"
          content="Build arithmetic sequences with sum."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Number Sequence Calculator",
            url: PAGE_URL,
            description: "Generate arithmetic sequences and their sum.",
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
            name: "Number Sequence Calculator",
            url: PAGE_URL,
            description: "Web tool for arithmetic sequence generation.",
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
            headline: "Arithmetic Number Sequences",
            description: "How to generate terms and sum of an arithmetic sequence.",
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
                name: "Number Sequence Calculator",
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
              First term (a₁)
            </label>
            <input
              type="number"
              step="any"
              value={startValue}
              onChange={(e) => setStartValue(e.target.value)}
              placeholder="e.g. 1"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Common difference (d)
            </label>
            <input
              type="number"
              step="any"
              value={difference}
              onChange={(e) => setDifference(e.target.value)}
              placeholder="e.g. 2"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Number of terms (n)
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="e.g. 10"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Arithmetic sequence only—max {MAX_TERMS} terms.
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
            Sequence summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Sequence</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.sequenceText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Type</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%]">
                {result && !result.error ? result.sequenceType : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">First term (a₁)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.firstTerm) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Last term (aₙ)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.lastTerm) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Common difference (d)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.difference) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Term count (n)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.length : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Sum (Sₙ)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.sum) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">nth term rule</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.nthTermFormula : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Generates arithmetic lists—not geometric sequences or pattern detection from terms.`
                : "Enter a₁, d, and n to build an arithmetic sequence."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default NumberSequenceCalculator;
