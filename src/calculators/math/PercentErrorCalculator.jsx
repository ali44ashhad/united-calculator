import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/percent-error-calculator";

const DEFAULTS = {
  measuredValue: "105",
  actualValue: "100",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const fmtNum = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });

const computePercentError = (measuredValue, actualValue) => {
  if (measuredValue.trim() === "" || actualValue.trim() === "") {
    return null;
  }

  const measured = parseFloat(measuredValue);
  const actual = parseFloat(actualValue);

  if (isNaN(measured) || isNaN(actual)) {
    return { error: "Enter valid numbers in both fields." };
  }

  if (actual === 0) {
    return { error: "Actual (accepted) value must not be zero." };
  }

  const signedError = measured - actual;
  const absoluteError = Math.abs(signedError);
  const percentError = Math.abs(signedError / actual) * 100;
  const direction =
    signedError > 0
      ? "Overestimate"
      : signedError < 0
        ? "Underestimate"
        : "Exact match";

  return {
    measured,
    actual,
    signedError,
    absoluteError,
    percentError,
    direction,
    formula: "|measured − actual| ÷ |actual| × 100",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is percent error?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Percent error compares a measured (experimental) value to an accepted (true) value, expressed as a percentage of the accepted value.",
    },
  },
  {
    "@type": "Question",
    name: "What is the percent error formula?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "|measured − actual| ÷ |actual| × 100. The accepted value in the denominator cannot be zero.",
    },
  },
  {
    "@type": "Question",
    name: "Which value goes in measured vs actual?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Measured is your experimental or observed result. Actual is the accepted, theoretical, or true value used as the reference.",
    },
  },
  {
    "@type": "Question",
    name: "Why is percent error always positive on this calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The standard formula uses the absolute difference. The summary also shows whether the measurement was an overestimate or underestimate.",
    },
  },
  {
    "@type": "Question",
    name: "Is percent error the same as percent difference?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Percent error divides by the accepted (true) value only. Percent difference often uses an average of the two values in the denominator.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use significant figures?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—it returns a numeric result for any valid inputs. Round the answer to match your lab’s significant-figure rules.",
    },
  },
];

const PercentErrorCalculator = () => {
  const [measuredValue, setMeasuredValue] = useState(DEFAULTS.measuredValue);
  const [actualValue, setActualValue] = useState(DEFAULTS.actualValue);

  const result = computePercentError(measuredValue, actualValue);

  const reset = () => {
    setMeasuredValue(DEFAULTS.measuredValue);
    setActualValue(DEFAULTS.actualValue);
  };

  return (
    <>
      <Helmet>
        <title>
          Percent Error Calculator - Experimental vs Accepted Value
        </title>
        <meta
          name="description"
          content="Compute percent error from measured (experimental) and actual (accepted) values using |measured − actual| ÷ |actual| × 100—not percent difference."
        />
        <meta
          name="keywords"
          content="percent error calculator, percentage error, experimental error, accepted value, lab error"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Percent Error Calculator" />
        <meta
          property="og:description"
          content="Percent error between measured and accepted values."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Percent Error Calculator" />
        <meta
          name="twitter:description"
          content="Experimental vs accepted percent error."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Percent Error Calculator",
            url: PAGE_URL,
            description:
              "Calculate percent error between measured and accepted values.",
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
            name: "Percent Error Calculator",
            url: PAGE_URL,
            description: "Web tool for percent error in science and math.",
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
            headline: "Percent Error Formula",
            description:
              "How to calculate percent error from experimental and accepted values.",
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
                name: "Percent Error Calculator",
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
              Measured value
            </label>
            <input
              type="number"
              step="any"
              value={measuredValue}
              onChange={(e) => setMeasuredValue(e.target.value)}
              placeholder="e.g. 105"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Experimental or observed result.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Actual value
            </label>
            <input
              type="number"
              step="any"
              value={actualValue}
              onChange={(e) => setActualValue(e.target.value)}
              placeholder="e.g. 100"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Accepted, theoretical, or true reference (cannot be zero).
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
            Percent error summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Percent error</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? `${fmtNum(result.percentError)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Absolute error</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.absoluteError) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Signed error (measured − actual)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.signedError) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Direction</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.direction : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Measured</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.measured) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Actual</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.actual) : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Standard percent error—not percent difference or relative standard deviation.`
                : "Enter measured and actual values."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PercentErrorCalculator;
