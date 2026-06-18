import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/percentage-calculator";

const DEFAULTS = {
  value1: "25",
  value2: "80",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const fmtNum = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });

const computePercentage = (value1, value2) => {
  if (value1.trim() === "" || value2.trim() === "") {
    return null;
  }

  const x = parseFloat(value1);
  const y = parseFloat(value2);

  if (isNaN(x) || isNaN(y)) {
    return { error: "Enter valid numbers in both fields." };
  }

  const percentOf = (x * y) / 100;
  const percentOfText = `${fmtNum(x)}% of ${fmtNum(y)} = ${fmtNum(percentOf)}`;

  let isWhatPercent = null;
  let isWhatPercentText = null;
  if (y === 0) {
    isWhatPercentText = "Undefined (divide by zero)";
  } else {
    isWhatPercent = (x / y) * 100;
    isWhatPercentText = `${fmtNum(x)} is ${fmtNum(isWhatPercent)}% of ${fmtNum(y)}`;
  }

  let percentChange = null;
  let percentChangeText = null;
  let changeDirection = null;
  if (x === 0) {
    percentChangeText = "Undefined (starting value is zero)";
  } else {
    percentChange = ((y - x) / x) * 100;
    changeDirection =
      percentChange > 0 ? "Increase" : percentChange < 0 ? "Decrease" : "No change";
    percentChangeText = `From ${fmtNum(x)} to ${fmtNum(y)}: ${fmtNum(percentChange)}%`;
  }

  return {
    value1: x,
    value2: y,
    percentOf,
    percentOfText,
    isWhatPercent,
    isWhatPercentText,
    percentChange,
    percentChangeText,
    changeDirection,
    formula:
      "X% of Y; X as % of Y; % change from X to Y (three readouts, same two inputs)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a percentage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A percentage expresses a number as parts per hundred. 25% means 25 out of every 100.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate X percent of Y?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Multiply Y by X/100. Example: 25% of 80 = 80 × 0.25 = 20. Enter X as Value 1 and Y as Value 2.",
    },
  },
  {
    "@type": "Question",
    name: "How do I find what percent X is of Y?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Compute (X ÷ Y) × 100. Value 2 cannot be zero.",
    },
  },
  {
    "@type": "Question",
    name: "How is percentage change calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "((new − old) ÷ old) × 100. Here Value 1 is the starting amount and Value 2 is the ending amount.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator do sale percent-off?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page shows three math formulas from two numbers—not a dedicated sale price tool. See the Percent Off Calculator for discounts.",
    },
  },
  {
    "@type": "Question",
    name: "What do Value 1 and Value 2 mean?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Value 1 is the percent (for % of), the part (for % of total), and the start (for % change). Value 2 is the whole number and the end value.",
    },
  },
];

const PercentageCalculator = () => {
  const [value1, setValue1] = useState(DEFAULTS.value1);
  const [value2, setValue2] = useState(DEFAULTS.value2);

  const result = computePercentage(value1, value2);

  const reset = () => {
    setValue1(DEFAULTS.value1);
    setValue2(DEFAULTS.value2);
  };

  return (
    <>
      <Helmet>
        <title>
          Percentage Calculator - % of, What %, &amp; Percent Change
        </title>
        <meta
          name="description"
          content="From two numbers: X% of Y, what percent X is of Y, and percent change from X to Y—not a dedicated sale or tax calculator."
        />
        <meta
          name="keywords"
          content="percentage calculator, percent of, what percent, percentage change, percent increase decrease"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Percentage Calculator" />
        <meta
          property="og:description"
          content="Three percentage formulas from two values."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Percentage Calculator" />
        <meta
          name="twitter:description"
          content="Percent of, what percent, and percent change."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Percentage Calculator",
            url: PAGE_URL,
            description: "Calculate percent of, what percent, and percent change.",
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
            name: "Percentage Calculator",
            url: PAGE_URL,
            description: "Web tool for common percentage calculations.",
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
            headline: "Percentage Calculations",
            description: "Percent of, what percent, and percent change formulas.",
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
                name: "Percentage Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Value 1 (X)</label>
            <input
              type="number"
              step="any"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="e.g. 25"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Used as the percent, the part, and the starting value.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Value 2 (Y)</label>
            <input
              type="number"
              step="any"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder="e.g. 80"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Used as the whole number and the ending value.
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
            Percentage summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">X% of Y</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.percentOfText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">X is what % of Y?</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.isWhatPercentText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">% change X → Y</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.percentChangeText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Change direction</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.changeDirection || "—" : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Value X</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.value1) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Value Y</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.value2) : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Two-value tool—not percent-off sale pricing alone.`
                : "Enter Value 1 (X) and Value 2 (Y)."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PercentageCalculator;
