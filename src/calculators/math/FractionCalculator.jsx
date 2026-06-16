import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/fraction-calculator";

const DEFAULTS = {
  num1: "1",
  den1: "2",
  num2: "1",
  den2: "3",
  operation: "add",
};

const OPERATION_LABELS = {
  add: "Addition (+)",
  subtract: "Subtraction (−)",
  multiply: "Multiplication (×)",
  divide: "Division (÷)",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const selectClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const gcd = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const simplify = (numerator, denominator) => {
  const common = gcd(numerator, denominator);
  let num = numerator / common;
  let den = denominator / common;

  if (den < 0) {
    num = -num;
    den = -den;
  }

  return { numerator: num, denominator: den };
};

const formatFraction = (numerator, denominator) =>
  `${numerator}/${denominator}`;

const toMixedNumber = (numerator, denominator) => {
  if (denominator === 0 || numerator === 0) {
    return null;
  }

  const whole = Math.trunc(numerator / denominator);
  const remainder = Math.abs(numerator % denominator);

  if (whole === 0 || remainder === 0) {
    return null;
  }

  const sign = numerator < 0 ? "-" : "";
  const absWhole = Math.abs(whole);

  return `${sign}${absWhole} ${remainder}/${denominator}`;
};

const computeFraction = (num1, den1, num2, den2, operation) => {
  if (
    num1.trim() === "" ||
    den1.trim() === "" ||
    num2.trim() === "" ||
    den2.trim() === ""
  ) {
    return null;
  }

  const a = parseInt(num1, 10);
  const b = parseInt(den1, 10);
  const c = parseInt(num2, 10);
  const d = parseInt(den2, 10);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    return { error: "Enter valid whole numbers for all numerators and denominators." };
  }

  if (b === 0 || d === 0) {
    return { error: "Denominators cannot be zero." };
  }

  if (operation === "divide" && c === 0) {
    return { error: "Cannot divide by a fraction with numerator zero." };
  }

  let rawNumerator;
  let rawDenominator;
  let formula;

  switch (operation) {
    case "add":
      rawNumerator = a * d + b * c;
      rawDenominator = b * d;
      formula = "a/b + c/d = (a×d + b×c) / (b×d)";
      break;
    case "subtract":
      rawNumerator = a * d - b * c;
      rawDenominator = b * d;
      formula = "a/b − c/d = (a×d − b×c) / (b×d)";
      break;
    case "multiply":
      rawNumerator = a * c;
      rawDenominator = b * d;
      formula = "a/b × c/d = (a×c) / (b×d)";
      break;
    case "divide":
      rawNumerator = a * d;
      rawDenominator = b * c;
      formula = "a/b ÷ c/d = (a×d) / (b×c)";
      break;
    default:
      return { error: "Select a valid operation." };
  }

  const simplified = simplify(rawNumerator, rawDenominator);
  const decimal = simplified.numerator / simplified.denominator;
  const mixed = toMixedNumber(
    simplified.numerator,
    simplified.denominator
  );

  return {
    fraction1: formatFraction(a, b),
    fraction2: formatFraction(c, d),
    operation,
    operationLabel: OPERATION_LABELS[operation],
    rawNumerator,
    rawDenominator,
    rawFraction: formatFraction(rawNumerator, rawDenominator),
    numerator: simplified.numerator,
    denominator: simplified.denominator,
    resultFraction: formatFraction(
      simplified.numerator,
      simplified.denominator
    ),
    decimal,
    mixed,
    isWholeNumber: simplified.denominator === 1,
    formula,
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a fraction?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A fraction is a numerator over a denominator (a/b). It shows part of a whole. This calculator uses integer numerators and denominators for two fractions.",
    },
  },
  {
    "@type": "Question",
    name: "How do you add fractions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use a common denominator: a/b + c/d = (a×d + b×c)/(b×d), then simplify. Example: 1/2 + 1/3 = 5/6.",
    },
  },
  {
    "@type": "Question",
    name: "How do you divide fractions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Multiply by the reciprocal: a/b ÷ c/d = (a×d)/(b×c). The second fraction's numerator cannot be zero.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator simplify the answer?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Results are reduced using the GCF and shown as a simplified fraction plus decimal and mixed-number forms when applicable.",
    },
  },
  {
    "@type": "Question",
    name: "Can I enter negative fractions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Negative numerators or denominators are accepted; the simplified result keeps the sign on the numerator.",
    },
  },
  {
    "@type": "Question",
    name: "What operations are supported?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Addition, subtraction, multiplication, and division of two fractions—not three or more, and not decimal-only entry without denominators.",
    },
  },
];

const FractionCalculator = () => {
  const [num1, setNum1] = useState(DEFAULTS.num1);
  const [den1, setDen1] = useState(DEFAULTS.den1);
  const [num2, setNum2] = useState(DEFAULTS.num2);
  const [den2, setDen2] = useState(DEFAULTS.den2);
  const [operation, setOperation] = useState(DEFAULTS.operation);

  const result = computeFraction(num1, den1, num2, den2, operation);

  const reset = () => {
    setNum1(DEFAULTS.num1);
    setDen1(DEFAULTS.den1);
    setNum2(DEFAULTS.num2);
    setDen2(DEFAULTS.den2);
    setOperation(DEFAULTS.operation);
  };

  return (
    <>
      <Helmet>
        <title>
          Fraction Calculator - Add, Subtract, Multiply &amp; Divide Fractions
        </title>
        <meta
          name="description"
          content="Add, subtract, multiply, or divide two fractions with integer numerators and denominators. Simplified answer, decimal, and mixed number."
        />
        <meta
          name="keywords"
          content="fraction calculator, add fractions, subtract fractions, multiply fractions, divide fractions, simplify fractions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fraction Calculator" />
        <meta
          property="og:description"
          content="Two-fraction + − × ÷ with simplified result."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fraction Calculator" />
        <meta
          name="twitter:description"
          content="Fraction arithmetic with simplified answers."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Fraction Calculator",
            url: PAGE_URL,
            description:
              "Add, subtract, multiply, and divide two fractions.",
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
            name: "Fraction Calculator",
            url: PAGE_URL,
            description: "Web tool for two-fraction arithmetic.",
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
            headline: "Fraction Operations",
            description: "How to add, subtract, multiply, and divide fractions.",
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
                name: "Fraction Calculator",
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
              Numerator 1
            </label>
            <input
              type="number"
              step="1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="e.g. 1"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Denominator 1
            </label>
            <input
              type="number"
              step="1"
              value={den1}
              onChange={(e) => setDen1(e.target.value)}
              placeholder="e.g. 2"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Numerator 2
            </label>
            <input
              type="number"
              step="1"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="e.g. 1"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Denominator 2
            </label>
            <input
              type="number"
              step="1"
              value={den2}
              onChange={(e) => setDen2(e.target.value)}
              placeholder="e.g. 3"
              className={inputClassName}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className={selectClassName}
          >
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (−)</option>
            <option value="multiply">Multiplication (×)</option>
            <option value="divide">Division (÷)</option>
          </select>
          <p className="text-sm text-on-surface-variant">
            Two fractions with integer parts only—result is simplified
            automatically.
          </p>
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
            Fraction result summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Simplified result
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? result.resultFraction : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Decimal</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.decimal.toLocaleString(undefined, {
                      maximumFractionDigits: 10,
                    })
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mixed number</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.mixed || (result.isWholeNumber ? String(result.numerator) : "—")
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Before simplifying</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.rawFraction : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Operation</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.operationLabel : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Expression</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error
                  ? `${result.fraction1} ${result.operation === "add" ? "+" : result.operation === "subtract" ? "−" : result.operation === "multiply" ? "×" : "÷"} ${result.fraction2}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Two fractions only—not mixed decimal entry or three+ fractions.`
                : "Enter two fractions and choose an operation."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FractionCalculator;
