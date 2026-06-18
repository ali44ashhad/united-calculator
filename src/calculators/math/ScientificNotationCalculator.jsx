import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/scientific-notation-calculator";

const DEFAULTS = {
  number: "1230000",
  fromScientific: "1.23e4",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseScientificParts = (num) => {
  const eNotation = num.toExponential();
  const match = eNotation.match(/^(-?[\d.]+)e([+-]?\d+)$/i);
  if (!match) {
    return { eNotation, coefficient: null, exponent: null, timesTenText: eNotation };
  }
  const coefficient = parseFloat(match[1]);
  const exponent = parseInt(match[2], 10);
  return {
    eNotation,
    coefficient,
    exponent,
    timesTenText: `${coefficient} × 10^${exponent}`,
  };
};

const computeToScientific = (numberInput) => {
  if (numberInput.trim() === "") {
    return null;
  }

  const num = parseFloat(numberInput);

  if (isNaN(num)) {
    return { error: "Enter a valid standard number." };
  }

  if (!Number.isFinite(num)) {
    return { error: "Number must be finite (not Infinity or NaN)." };
  }

  const parts = parseScientificParts(num);

  return {
    input: num,
    ...parts,
    formula: "a × 10^n displayed as JavaScript e-notation",
  };
};

const computeFromScientific = (scientificInput) => {
  if (scientificInput.trim() === "") {
    return null;
  }

  const value = Number(scientificInput.trim());

  if (isNaN(value)) {
    return {
      error:
        "Enter valid e-notation (e.g. 1.23e4 or 4.5e-6)—not ×10^n text alone.",
    };
  }

  if (!Number.isFinite(value)) {
    return { error: "Value must be finite." };
  }

  const standardText =
    Math.abs(value) >= 1e15 || (Math.abs(value) > 0 && Math.abs(value) < 1e-6)
      ? value.toString()
      : Number.isInteger(value)
        ? String(value)
        : parseFloat(value.toPrecision(12)).toString();

  return {
    input: scientificInput.trim(),
    standard: value,
    standardText,
    formula: "Parse e-notation to decimal",
  };
};

const fmtNum = (n) =>
  parseFloat(n.toPrecision(12)).toLocaleString(undefined, {
    maximumFractionDigits: 12,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is scientific notation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A form a × 10^n for very large or small numbers. This tool shows JavaScript e-notation like 1.23e+4.",
    },
  },
  {
    "@type": "Question",
    name: "How do I convert to scientific notation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter a standard number in the top field. Example: 1230000 → 1.23e+6.",
    },
  },
  {
    "@type": "Question",
    name: "How do I convert from scientific notation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter e-notation in the bottom field, e.g. 1.23e4 → 12300.",
    },
  },
  {
    "@type": "Question",
    name: "Does this accept 1.2 × 10^5 format?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use e-notation for the reverse conversion (1.2e5). The output shows both e-form and ×10^n style.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the scientific calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—the Scientific Calculator evaluates math expressions. This page only converts number formats.",
    },
  },
  {
    "@type": "Question",
    name: "What about significant figures?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Conversion uses JavaScript floating-point formatting—not sig-fig rounding rules.",
    },
  },
];

const ScientificNotationCalculator = () => {
  const [number, setNumber] = useState(DEFAULTS.number);
  const [fromScientific, setFromScientific] = useState(DEFAULTS.fromScientific);

  const toResult = computeToScientific(number);
  const fromResult = computeFromScientific(fromScientific);

  const reset = () => {
    setNumber(DEFAULTS.number);
    setFromScientific(DEFAULTS.fromScientific);
  };

  return (
    <>
      <Helmet>
        <title>
          Scientific Notation Converter - Standard &amp; e-Notation
        </title>
        <meta
          name="description"
          content="Convert standard numbers to e-notation (and back)—two fields, live results—not a scientific calculator or sig-fig tool."
        />
        <meta
          name="keywords"
          content="scientific notation calculator, e notation converter, standard form, powers of ten"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Scientific Notation Calculator" />
        <meta
          property="og:description"
          content="Convert to and from e-notation."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scientific Notation Calculator" />
        <meta
          name="twitter:description"
          content="Scientific notation converter."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Scientific Notation Calculator",
            url: PAGE_URL,
            description: "Convert numbers to and from scientific notation.",
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
            name: "Scientific Notation Calculator",
            url: PAGE_URL,
            description: "Web tool for scientific notation conversion.",
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
            headline: "Scientific Notation Conversion",
            description: "Standard form and e-notation.",
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
                name: "Scientific Notation Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Standard number → scientific
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="e.g. 1230000"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Decimal or integer to convert to e-notation.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              e-Notation → standard
            </label>
            <input
              type="text"
              value={fromScientific}
              onChange={(e) => setFromScientific(e.target.value)}
              placeholder="e.g. 1.23e4"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Use forms like 1.23e4 or 4.5e-6.
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
            Scientific notation summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                To scientific (e-notation)
              </span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[55%] break-all">
                {toResult && !toResult.error ? toResult.eNotation : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">× 10ⁿ form</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-all">
                {toResult && !toResult.error ? toResult.timesTenText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Exponent n</span>
              <span className="font-code-num text-code-num">
                {toResult && !toResult.error && toResult.exponent !== null
                  ? toResult.exponent
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-outline-variant pt-4">
              <span className="text-on-surface font-medium">
                To standard number
              </span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[55%] break-all">
                {fromResult && !fromResult.error
                  ? fromResult.standardText
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Parsed decimal value</span>
              <span className="font-code-num text-code-num">
                {fromResult && !fromResult.error
                  ? fmtNum(fromResult.standard)
                  : "—"}
              </span>
            </div>

            {toResult?.error && (
              <p className="text-sm text-error">
                Standard → scientific: {toResult.error}
              </p>
            )}
            {fromResult?.error && (
              <p className="text-sm text-error">
                Scientific → standard: {fromResult.error}
              </p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Two-way converter using e-notation—not the Scientific Calculator
              and not significant-figure rounding.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScientificNotationCalculator;
