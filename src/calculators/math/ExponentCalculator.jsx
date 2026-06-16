import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/exponent-calculator";

const DEFAULTS = {
  base: "2",
  exponent: "3",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const formatPowerNotation = (b, e) => {
  const baseStr = Number.isInteger(b) ? String(b) : b.toString();
  const expStr = Number.isInteger(e) ? String(e) : e.toString();
  return `${baseStr}^${expStr}`;
};

const formatResult = (value) => {
  if (!Number.isFinite(value)) {
    return String(value);
  }

  const abs = Math.abs(value);
  if (abs !== 0 && (abs >= 1e10 || abs < 1e-4)) {
    return value.toExponential(6);
  }

  return parseFloat(value.toPrecision(12)).toLocaleString(undefined, {
    maximumFractionDigits: 10,
  });
};

const computeExponent = (base, exponent) => {
  if (base.trim() === "" || exponent.trim() === "") {
    return null;
  }

  const b = parseFloat(base);
  const e = parseFloat(exponent);

  if (isNaN(b) || isNaN(e)) {
    return { error: "Enter valid numbers for base and exponent." };
  }

  const result = Math.pow(b, e);

  if (Number.isNaN(result)) {
    return {
      error:
        "Result is undefined (e.g. negative base with a non-integer exponent).",
    };
  }

  if (!Number.isFinite(result)) {
    return {
      error: "Result is infinite—check for very large exponents or division by zero patterns.",
    };
  }

  const isIntegerExp = Number.isInteger(e);
  const isIntegerResult = Number.isInteger(result);

  return {
    base: b,
    exponent: e,
    result,
    powerNotation: formatPowerNotation(b, e),
    reciprocal:
      e < 0 ? Math.pow(b, -e) : e > 0 ? 1 / Math.pow(b, e) : null,
    isIntegerExp,
    isIntegerResult,
    formula: "Result = base^exponent (b^e)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is an exponent?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "An exponent tells how many times to multiply the base by itself. b^e means base b raised to power e. Example: 2^3 = 2 × 2 × 2 = 8.",
    },
  },
  {
    "@type": "Question",
    name: "How do you calculate a power?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter base and exponent; this calculator computes b^e. Fractional exponents are roots (e.g. 16^0.5 = 4). Negative exponents give reciprocals (2^-3 = 1/8).",
    },
  },
  {
    "@type": "Question",
    name: "What is a negative exponent?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "b^-n = 1 / b^n. Example: 2^-3 = 1/8 = 0.125.",
    },
  },
  {
    "@type": "Question",
    name: "Can the base be negative?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes for integer exponents (e.g. (-2)^4 = 16). A negative base with a non-integer exponent is not a real number and shows an error here.",
    },
  },
  {
    "@type": "Question",
    name: "What is zero to the zero power?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "0^0 is indeterminate in pure math; JavaScript Math.pow(0,0) returns 1. Treat as context-dependent in coursework.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as a scientific calculator power button?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Same b^e math for real-number inputs within JavaScript limits. For trig and logs, use the Scientific or Log calculators.",
    },
  },
];

const ExponentCalculator = () => {
  const [base, setBase] = useState(DEFAULTS.base);
  const [exponent, setExponent] = useState(DEFAULTS.exponent);

  const result = computeExponent(base, exponent);

  const reset = () => {
    setBase(DEFAULTS.base);
    setExponent(DEFAULTS.exponent);
  };

  return (
    <>
      <Helmet>
        <title>
          Exponent Calculator - Power &amp; Exponent (b^e)
        </title>
        <meta
          name="description"
          content="Calculate b^e: base raised to exponent. Supports negative and fractional powers—2^3, 16^0.5, 2^-3."
        />
        <meta
          name="keywords"
          content="exponent calculator, power calculator, b to the power of e, calculate exponents, negative exponent, fractional exponent"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Exponent Calculator" />
        <meta
          property="og:description"
          content="Compute powers: base^exponent."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exponent Calculator" />
        <meta
          name="twitter:description"
          content="b^e power calculator online."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Exponent Calculator",
            url: PAGE_URL,
            description: "Calculate powers and exponents b^e.",
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
            name: "Exponent Calculator",
            url: PAGE_URL,
            description: "Web tool for exponentiation b^e.",
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
            headline: "Powers and Exponents",
            description: "How to compute b raised to the e power.",
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
                name: "Exponent Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Base (b)</label>
            <input
              type="number"
              step="any"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              placeholder="e.g. 2"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Exponent (e)
            </label>
            <input
              type="number"
              step="any"
              value={exponent}
              onChange={(e) => setExponent(e.target.value)}
              placeholder="e.g. 3"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Fractional exponents are roots (9^0.5 = 3). Negative exponents
              use reciprocals.
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
            Exponent summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Result (b^e)</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-all">
                {result && !result.error
                  ? formatResult(result.result)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Power notation</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.powerNotation : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Base</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? formatResult(result.base) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Exponent</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatResult(result.exponent)
                  : "—"}
              </span>
            </div>
            {result && !result.error && result.exponent < 0 && (
              <div className="flex items-center justify-between">
                <span className="text-on-surface">
                  Positive exponent form (b^|e|)
                </span>
                <span className="font-code-num text-code-num">
                  {formatResult(result.reciprocal)}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Integer result?</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.isIntegerResult
                    ? "Yes"
                    : "No"
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Very large powers may use scientific notation.`
                : "Enter base and exponent to compute b^e."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExponentCalculator;