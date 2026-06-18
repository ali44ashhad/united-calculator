import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/ratio-calculator";

const DEFAULTS = {
  valueA: "8",
  valueB: "12",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const fmtNum = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const gcdInt = (a, b) => {
  let x = Math.abs(Math.trunc(a));
  let y = Math.abs(Math.trunc(b));
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const decimalPlaces = (str) => {
  const trimmed = str.trim();
  if (!trimmed.includes(".")) return 0;
  const fraction = trimmed.split(".")[1] || "";
  return fraction.replace(/0+$/, "").length;
};

const scaleToIntegers = (aStr, bStr, a, b) => {
  const scale = 10 ** Math.max(decimalPlaces(aStr), decimalPlaces(bStr));
  return [Math.round(a * scale), Math.round(b * scale)];
};

const computeRatio = (valueAInput, valueBInput) => {
  if (valueAInput.trim() === "" || valueBInput.trim() === "") {
    return null;
  }

  const a = parseFloat(valueAInput);
  const b = parseFloat(valueBInput);

  if (isNaN(a) || isNaN(b)) {
    return { error: "Enter valid numbers for both values." };
  }

  if (a === 0 && b === 0) {
    return { error: "Both values cannot be zero." };
  }

  const [intA, intB] = scaleToIntegers(valueAInput, valueBInput, a, b);

  if (intB === 0) {
    return { error: "Second value cannot be zero in the ratio." };
  }

  const gcd = gcdInt(intA, intB) || 1;
  const simplifiedA = intA / gcd;
  const simplifiedB = intB / gcd;
  const total = a + b;
  const shareA = total !== 0 ? (a / total) * 100 : null;
  const shareB = total !== 0 ? (b / total) * 100 : null;

  return {
    a,
    b,
    gcd,
    originalRatio: `${fmtNum(a)} : ${fmtNum(b)}`,
    simplifiedRatio: `${fmtNum(simplifiedA)} : ${fmtNum(simplifiedB)}`,
    decimalValue: b !== 0 ? a / b : null,
    shareA,
    shareB,
    formula: "Divide both parts by GCD to simplify",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a ratio?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A ratio compares two quantities in the form a : b, showing their relative sizes.",
    },
  },
  {
    "@type": "Question",
    name: "How do you simplify a ratio?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Divide both parts by their greatest common divisor (GCD). Example: 8 : 12 → 2 : 3.",
    },
  },
  {
    "@type": "Question",
    name: "Can I enter decimals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes—values are scaled to integers before GCD, then simplified.",
    },
  },
  {
    "@type": "Question",
    name: "Does this solve proportions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—this simplifies a two-part ratio a : b. It does not solve a/b = c/d for a missing term.",
    },
  },
  {
    "@type": "Question",
    name: "Can the second value be zero?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—the second part cannot be zero. The first part may be zero (e.g. 0 : 5 → 0 : 1).",
    },
  },
  {
    "@type": "Question",
    name: "Is a ratio the same as a fraction?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "a : b compares two parts; a/b is one number. This tool shows both simplified ratio and a÷b.",
    },
  },
];

const RatioCalculator = () => {
  const [valueA, setValueA] = useState(DEFAULTS.valueA);
  const [valueB, setValueB] = useState(DEFAULTS.valueB);

  const result = computeRatio(valueA, valueB);

  const reset = () => {
    setValueA(DEFAULTS.valueA);
    setValueB(DEFAULTS.valueB);
  };

  return (
    <>
      <Helmet>
        <title>Ratio Calculator - Simplify a : b with GCD</title>
        <meta
          name="description"
          content="Simplify a two-part ratio using GCD, with share percents and a÷b—not proportion solving or three-term ratios."
        />
        <meta
          name="keywords"
          content="ratio calculator, simplify ratio, GCD ratio, proportion parts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ratio Calculator" />
        <meta
          property="og:description"
          content="Simplify ratios and show part shares."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ratio Calculator" />
        <meta
          name="twitter:description"
          content="Simplify a : b using GCD."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ratio Calculator",
            url: PAGE_URL,
            description: "Simplify two-part ratios.",
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
            name: "Ratio Calculator",
            url: PAGE_URL,
            description: "Web tool to simplify ratios.",
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
            headline: "Simplifying Ratios",
            description: "How to reduce a : b using the GCD.",
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
                name: "Ratio Calculator",
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
              First value (a)
            </label>
            <input
              type="number"
              step="any"
              value={valueA}
              onChange={(e) => setValueA(e.target.value)}
              placeholder="e.g. 8"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              First part of the ratio a : b.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Second value (b)
            </label>
            <input
              type="number"
              step="any"
              value={valueB}
              onChange={(e) => setValueB(e.target.value)}
              placeholder="e.g. 12"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Second part (cannot be zero).
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Ratio summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Simplified ratio
              </span>
              <span className="font-code-num text-code-num text-primary text-xl">
                {result && !result.error ? result.simplifiedRatio : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Original ratio</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.originalRatio : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">GCD used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.gcd : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">a ÷ b</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.decimalValue !== null
                  ? fmtNum(result.decimalValue)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Share of first part</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.shareA !== null
                  ? `${fmtNum(result.shareA)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Share of second part</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.shareB !== null
                  ? `${fmtNum(result.shareB)}%`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Two-part ratio only—not proportion cross-multiply or 3+ terms.`
                : "Enter values a and b."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RatioCalculator;
