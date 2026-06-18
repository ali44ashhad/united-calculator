import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/root-calculator";

const DEFAULTS = {
  base: "16",
  root: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const fmtNum = (n) => {
  if (!Number.isFinite(n)) return "—";
  return parseFloat(n.toFixed(8)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  });
};

const rootLabel = (n) => {
  if (n === 2) return "Square root";
  if (n === 3) return "Cube root";
  return `${fmtNum(n)}th root`;
};

const computeRoot = (baseInput, rootInput) => {
  if (baseInput.trim() === "" || rootInput.trim() === "") {
    return null;
  }

  const base = parseFloat(baseInput);
  const n = parseFloat(rootInput);

  if (isNaN(base) || isNaN(n)) {
    return { error: "Enter valid numbers for base and root degree." };
  }

  if (n === 0) {
    return { error: "Root degree n cannot be zero." };
  }

  if (base < 0 && Number.isInteger(n) && n % 2 === 0) {
    return { error: "Even roots of negative numbers are not real." };
  }

  if (base < 0 && !Number.isInteger(n)) {
    return { error: "Non-integer roots of negative numbers are not real." };
  }

  const value = Math.pow(base, 1 / n);

  if (!Number.isFinite(value)) {
    return { error: "This root is not a real number for the given inputs." };
  }

  const check = Math.pow(value, n);
  const notation =
    n === 2
      ? `√${fmtNum(base)}`
      : n === 3
        ? `∛${fmtNum(base)}`
        : `${fmtNum(n)}√${fmtNum(base)}`;

  return {
    base,
    n,
    value,
    notation,
    rootLabel: rootLabel(n),
    valueText: `${notation} = ${fmtNum(value)}`,
    checkText: `(${fmtNum(value)})^${fmtNum(n)} ≈ ${fmtNum(check)}`,
    formula: "ⁿ√x = x^(1/n)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is an nth root?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The nth root of x is a number that raised to the power n equals x. Written ⁿ√x or x^(1/n).",
    },
  },
  {
    "@type": "Question",
    name: "How do I get a square root?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter root n = 2. Example: base 16 → √16 = 4.",
    },
  },
  {
    "@type": "Question",
    name: "How do I get a cube root?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter root n = 3. Example: base 27 → ∛27 = 3.",
    },
  },
  {
    "@type": "Question",
    name: "Can I take an even root of a negative number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No real answer—for example √(-4) is not a real number. Odd roots of negatives work (e.g. ∛(-8) = -2).",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the exponent calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Roots are exponents of 1/n. This page focuses on ⁿ√x; the Exponent Calculator handles general powers.",
    },
  },
  {
    "@type": "Question",
    name: "Does n have to be a whole number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Any non-zero n works mathematically as x^(1/n). Even non-integer n is allowed for non-negative bases.",
    },
  },
];

const RootCalculator = () => {
  const [base, setBase] = useState(DEFAULTS.base);
  const [root, setRoot] = useState(DEFAULTS.root);

  const result = computeRoot(base, root);

  const reset = () => {
    setBase(DEFAULTS.base);
    setRoot(DEFAULTS.root);
  };

  return (
    <>
      <Helmet>
        <title>Root Calculator - Square, Cube &amp; nth Roots</title>
        <meta
          name="description"
          content="Compute ⁿ√x (x^(1/n)) for square, cube, and other roots—real results only; not complex roots or step-by-step radical simplification."
        />
        <meta
          name="keywords"
          content="root calculator, square root, cube root, nth root, radical"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Root Calculator" />
        <meta property="og:description" content="nth roots as x^(1/n)." />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Root Calculator" />
        <meta
          name="twitter:description"
          content="Square, cube, and nth roots."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Root Calculator",
            url: PAGE_URL,
            description: "Calculate nth roots of numbers.",
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
            name: "Root Calculator",
            url: PAGE_URL,
            description: "Web tool for nth roots.",
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
            headline: "nth Roots",
            description: "How to compute square, cube, and nth roots.",
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
                name: "Root Calculator",
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
              Number (x)
            </label>
            <input
              type="number"
              step="any"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              placeholder="e.g. 16"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              The value under the radical (radicand).
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Root degree (n)
            </label>
            <input
              type="number"
              step="any"
              value={root}
              onChange={(e) => setRoot(e.target.value)}
              placeholder="e.g. 2"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              n = 2 square, n = 3 cube (cannot be 0).
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Root summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Result</span>
              <span className="font-code-num text-code-num text-primary text-xl">
                {result && !result.error ? fmtNum(result.value) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Notation</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.valueText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Root type</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.rootLabel : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Check (raise to n)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.checkText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Base x</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.base) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Degree n</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.n) : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Real roots only—not radical simplify steps or complex results.`
                : "Enter x and root degree n."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RootCalculator;
