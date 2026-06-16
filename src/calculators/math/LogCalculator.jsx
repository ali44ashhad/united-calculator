import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/log-calculator";

const DEFAULTS = {
  number: "100",
  base: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const formatLog = (value) => {
  if (!Number.isFinite(value)) {
    return String(value);
  }
  return parseFloat(value.toPrecision(12)).toLocaleString(undefined, {
    maximumFractionDigits: 10,
  });
};

const computeLog = (number, base) => {
  if (number.trim() === "" || base.trim() === "") {
    return null;
  }

  const x = parseFloat(number);
  const a = parseFloat(base);

  if (isNaN(x) || isNaN(a)) {
    return { error: "Enter valid numbers for value and base." };
  }

  if (x <= 0) {
    return { error: "Logarithm is defined only for positive values (x > 0)." };
  }

  if (a <= 0 || a === 1) {
    return {
      error: "Base must be positive and not equal to 1.",
    };
  }

  const result = Math.log(x) / Math.log(a);
  const naturalLog = Math.log(x);
  const commonLog = Math.log10(x);
  const logBase2 = Math.log2(x);
  const antilog = Math.pow(a, result);
  const changeOfBaseLn = naturalLog / Math.log(a);
  const changeOfBaseLg = commonLog / Math.log10(a);

  const isNaturalBase = Math.abs(a - Math.E) < 1e-6;
  const isCommonBase = Math.abs(a - 10) < 1e-9;
  const isBase2 = Math.abs(a - 2) < 1e-9;

  return {
    x,
    base: a,
    result,
    naturalLog,
    commonLog,
    logBase2,
    antilog,
    changeOfBaseLn,
    changeOfBaseLg,
    isNaturalBase,
    isCommonBase,
    isBase2,
    notation: `log_${a}(${x})`,
    formula: "logₐ(x) = ln(x) / ln(a)",
    powerCheck: `a^logₐ(x) ≈ x`,
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a logarithm?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If a^y = x, then logₐ(x) = y. Logarithm is the inverse of exponentiation—the exponent needed to reach x from base a.",
    },
  },
  {
    "@type": "Question",
    name: "What is log 1?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "logₐ(1) = 0 for any valid base a (positive, not 1).",
    },
  },
  {
    "@type": "Question",
    name: "Can you take the log of a negative number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not in real numbers. This calculator requires x > 0. You can take -logₐ(x), which equals logₐ(1/x).",
    },
  },
  {
    "@type": "Question",
    name: "Are log and ln the same?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. ln usually means natural log (base e). log often means base 10—notation varies, so check context.",
    },
  },
  {
    "@type": "Question",
    name: "How do you calculate log with any base?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Change of base: logₐ(x) = ln(x)/ln(a) = lg(x)/lg(a). Enter x and base a on this page.",
    },
  },
  {
    "@type": "Question",
    name: "What bases does this log calculator support?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Any positive base except 1—natural (e), common (10), base 2, or custom values.",
    },
  },
];

const LogCalculator = () => {
  const [number, setNumber] = useState(DEFAULTS.number);
  const [base, setBase] = useState(DEFAULTS.base);

  const result = computeLog(number, base);

  const reset = () => {
    setNumber(DEFAULTS.number);
    setBase(DEFAULTS.base);
  };

  return (
    <>
      <Helmet>
        <title>
          Log Calculator - Logarithm With Any Base (ln, log₁₀, log₂)
        </title>
        <meta
          name="description"
          content="Compute logₐ(x) for positive x and base a (a>0, a≠1). Shows ln, log₁₀, change-of-base check—natural, common, or custom base."
        />
        <meta
          name="keywords"
          content="log calculator, logarithm calculator, natural log, log base 10, log base 2, change of base"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Log Calculator" />
        <meta
          property="og:description"
          content="Logarithm with arbitrary positive base."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Log Calculator" />
        <meta
          name="twitter:description"
          content="logₐ(x) with ln and lg readouts."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Log Calculator",
            url: PAGE_URL,
            description: "Calculate logarithms with any valid base.",
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
            name: "Log Calculator",
            url: PAGE_URL,
            description: "Web tool for logarithms with custom base.",
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
            headline: "Logarithms and Change of Base",
            description: "How to compute logₐ(x) for any valid base.",
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
                name: "Log Calculator",
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
              min="0"
              step="any"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="e.g. 100"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Base (a)</label>
            <input
              type="number"
              min="0"
              step="any"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              placeholder="e.g. 10, 2, or 2.71828"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Positive base, not 1. Try 10 (common), 2 (binary), or ~2.71828 (e).
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
            Logarithm summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">logₐ(x)</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? formatLog(result.result) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Notation</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.notation : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Natural log ln(x)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatLog(result.naturalLog)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Common log log₁₀(x)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatLog(result.commonLog)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">log₂(x)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatLog(result.logBase2)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Antilog a^result</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatLog(result.antilog)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Base type</span>
              <span className="font-code-num text-code-num text-sm text-right">
                {result && !result.error
                  ? result.isNaturalBase
                    ? "Natural (e)"
                    : result.isCommonBase
                      ? "Common (10)"
                      : result.isBase2
                        ? "Base 2"
                        : "Custom"
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. ${result.powerCheck}. Real logs only (x > 0)—not complex logs.`
                : "Enter positive x and valid base a."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LogCalculator;
