import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/rounding-calculator";

const MAX_DECIMAL_PLACES = 20;

const DEFAULTS = {
  number: "123.45678",
  decimals: "2",
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

const roundToDecimals = (num, decimalPlaces) => {
  const factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
};

const formatRounded = (num, decimalPlaces) => {
  if (decimalPlaces === 0) {
    return String(Math.round(num));
  }
  return roundToDecimals(num, decimalPlaces).toFixed(decimalPlaces);
};

const computeRounding = (numberInput, decimalsInput) => {
  if (numberInput.trim() === "" || decimalsInput.trim() === "") {
    return null;
  }

  const num = parseFloat(numberInput);
  const decimalPlaces = parseWholeNumber(decimalsInput);

  if (isNaN(num)) {
    return { error: "Enter a valid number to round." };
  }

  if (Number.isNaN(decimalPlaces)) {
    return { error: "Decimal places must be a whole number (0 or more)." };
  }

  if (decimalPlaces < 0) {
    return { error: "Decimal places cannot be negative." };
  }

  if (decimalPlaces > MAX_DECIMAL_PLACES) {
    return {
      error: `Decimal places must be ${MAX_DECIMAL_PLACES} or less.`,
    };
  }

  const roundedValue = roundToDecimals(num, decimalPlaces);
  const roundedText = formatRounded(num, decimalPlaces);
  const difference = roundedValue - num;
  const placeLabel =
    decimalPlaces === 0
      ? "nearest whole number"
      : `${decimalPlaces} decimal place${decimalPlaces === 1 ? "" : "s"}`;

  return {
    original: num,
    decimalPlaces,
    roundedValue,
    roundedText,
    difference,
    placeLabel,
    formula: "Round to nearest at chosen decimal place (half away from zero)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does this rounding calculator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It rounds a number to a chosen count of decimal places. Use 0 to round to the nearest integer.",
    },
  },
  {
    "@type": "Question",
    name: "Does this round to significant figures?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—only decimal places. Significant-figure rounding is not included on this page.",
    },
  },
  {
    "@type": "Question",
    name: "How do I round to the nearest whole number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Set decimal places to 0. Example: 123.45678 → 123.",
    },
  },
  {
    "@type": "Question",
    name: "What rounding rule is used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Standard nearest-value rounding at the selected place (half away from zero via Math.round).",
    },
  },
  {
    "@type": "Question",
    name: "Can decimal places be zero?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes—0 means round to the nearest integer.",
    },
  },
  {
    "@type": "Question",
    name: "Does this do floor or ceiling?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—only nearest rounding to a decimal place, not always-down or always-up modes.",
    },
  },
];

const fmtNum = (n) =>
  parseFloat(n.toFixed(10)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 10,
  });

const RoundingCalculator = () => {
  const [number, setNumber] = useState(DEFAULTS.number);
  const [decimals, setDecimals] = useState(DEFAULTS.decimals);

  const result = computeRounding(number, decimals);

  const reset = () => {
    setNumber(DEFAULTS.number);
    setDecimals(DEFAULTS.decimals);
  };

  return (
    <>
      <Helmet>
        <title>
          Rounding Calculator - Decimal Places &amp; Nearest Integer
        </title>
        <meta
          name="description"
          content="Round a number to a chosen count of decimal places (0 = nearest integer)—not significant figures, floor, or ceiling modes."
        />
        <meta
          name="keywords"
          content="rounding calculator, decimal places, round number, nearest integer"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rounding Calculator" />
        <meta
          property="og:description"
          content="Round to decimal places."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rounding Calculator" />
        <meta
          name="twitter:description"
          content="Round numbers to decimal places."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rounding Calculator",
            url: PAGE_URL,
            description: "Round numbers to a set number of decimal places.",
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
            name: "Rounding Calculator",
            url: PAGE_URL,
            description: "Web tool for rounding to decimal places.",
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
            headline: "Rounding to Decimal Places",
            description: "How to round numbers to a fixed decimal place count.",
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
                name: "Rounding Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Number</label>
            <input
              type="number"
              step="any"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="e.g. 123.45678"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              The value you want to round.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Decimal places
            </label>
            <input
              type="number"
              min="0"
              max={MAX_DECIMAL_PLACES}
              step="1"
              value={decimals}
              onChange={(e) => setDecimals(e.target.value)}
              placeholder="e.g. 2"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              0 = nearest integer; max {MAX_DECIMAL_PLACES}.
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
            Rounding summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Rounded value</span>
              <span className="font-code-num text-code-num text-primary text-xl">
                {result && !result.error ? result.roundedText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Original number</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.original) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rounded to</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.placeLabel : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Decimal places</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.decimalPlaces : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Change (rounded − original)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.difference) : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Decimal-place rounding only—not significant figures or floor/ceil.`
                : "Enter a number and decimal places."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RoundingCalculator;
