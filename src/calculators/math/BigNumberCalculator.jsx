import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/big-number-calculator";

const DEFAULTS = {
  num1: "999999999999999999999",
  num2: "1",
  operation: "+",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const OPERATIONS = [
  { value: "+", label: "Addition (+)", symbol: "+" },
  { value: "-", label: "Subtraction (−)", symbol: "−" },
  { value: "*", label: "Multiplication (×)", symbol: "×" },
  { value: "/", label: "Division (÷, integer)", symbol: "÷" },
];

const getOperation = (value) =>
  OPERATIONS.find((op) => op.value === value) ?? OPERATIONS[0];

const digitCount = (n) => {
  const s = n < 0n ? (-n).toString() : n.toString();
  return s.length;
};

const parseBigIntInput = (value, fieldLabel) => {
  const trimmed = value.trim();

  if (trimmed === "") {
    return { empty: true };
  }

  if (trimmed.includes(".")) {
    return {
      error: `${fieldLabel} must be a whole integer (no decimal point).`,
    };
  }

  try {
    return { value: BigInt(trimmed) };
  } catch {
    return {
      error: `${fieldLabel} must be a valid integer (digits only, optional leading −).`,
    };
  }
};

const computeBigNumber = (num1, num2, operation) => {
  if (num1.trim() === "" || num2.trim() === "") {
    return null;
  }

  const parsed1 = parseBigIntInput(num1, "Number 1");
  const parsed2 = parseBigIntInput(num2, "Number 2");

  if (parsed1.error) return { error: parsed1.error };
  if (parsed2.error) return { error: parsed2.error };

  const big1 = parsed1.value;
  const big2 = parsed2.value;
  const op = getOperation(operation);
  let result;
  let remainder = null;

  switch (operation) {
    case "+":
      result = big1 + big2;
      break;
    case "-":
      result = big1 - big2;
      break;
    case "*":
      result = big1 * big2;
      break;
    case "/":
      if (big2 === 0n) {
        return { error: "Cannot divide by zero." };
      }
      result = big1 / big2;
      remainder = big1 % big2;
      break;
    default:
      return { error: "Select a valid operation." };
  }

  return {
    num1: big1,
    num2: big2,
    operation,
    opLabel: op.label,
    opSymbol: op.symbol,
    result,
    remainder,
    resultText: result.toString(),
    digits1: digitCount(big1),
    digits2: digitCount(big2),
    digitsResult: digitCount(result),
    formula:
      operation === "/"
        ? "Integer division: quotient = a ÷ b, remainder = a mod b"
        : `BigInt ${op.label.toLowerCase()} with arbitrary precision`,
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a big number calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It performs +, −, ×, ÷ on very large integers using JavaScript BigInt so digits are not lost to floating-point limits.",
    },
  },
  {
    "@type": "Question",
    name: "Does this big number calculator support decimals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only whole integers. Decimal fractions are rejected—use the Basic or Scientific Calculator for decimal math.",
    },
  },
  {
    "@type": "Question",
    name: "How does division work with big integers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Division returns the integer quotient (truncated toward zero). The summary also shows the remainder (modulo) when you divide.",
    },
  },
  {
    "@type": "Question",
    name: "How large can the numbers be?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BigInt handles integers far beyond normal Number precision, limited mainly by browser memory. Very long inputs may slow down.",
    },
  },
  {
    "@type": "Question",
    name: "What format should I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Type digits only, with an optional leading minus for negative values. No commas, spaces, or decimal points inside the number.",
    },
  },
  {
    "@type": "Question",
    name: "Is this big number calculator the same as a scientific calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This tool is for huge integers only. Trig, logs, and decimals are on the Scientific Calculator.",
    },
  },
];

const BigNumberCalculator = () => {
  const [num1, setNum1] = useState(DEFAULTS.num1);
  const [num2, setNum2] = useState(DEFAULTS.num2);
  const [operation, setOperation] = useState(DEFAULTS.operation);

  const result = computeBigNumber(num1, num2, operation);

  const reset = () => {
    setNum1(DEFAULTS.num1);
    setNum2(DEFAULTS.num2);
    setOperation(DEFAULTS.operation);
  };

  return (
    <>
      <Helmet>
        <title>
          Big Number Calculator - Large Integer Add, Subtract, Multiply, Divide
        </title>
        <meta
          name="description"
          content="Arbitrary-precision integer math with BigInt: +, −, ×, ÷ on huge whole numbers. Integer division with remainder—no decimals."
        />
        <meta
          name="keywords"
          content="big number calculator, large integer calculator, bigint calculator, high precision integer math, huge number addition multiplication"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Big Number Calculator" />
        <meta
          property="og:description"
          content="Add, subtract, multiply, and divide very large integers."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Big Number Calculator" />
        <meta
          name="twitter:description"
          content="BigInt precision for huge whole numbers."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Big Number Calculator",
            url: PAGE_URL,
            description:
              "Perform arithmetic on very large integers with BigInt precision.",
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
            name: "Big Number Calculator",
            url: PAGE_URL,
            description: "Web tool for large integer arithmetic.",
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
            headline: "Large Integer Arithmetic with BigInt",
            description:
              "How to add, subtract, multiply, and divide huge whole numbers.",
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
                name: "Big Number Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Number 1</label>
            <input
              type="text"
              inputMode="numeric"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter large integer"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Number 2</label>
            <input
              type="text"
              inputMode="numeric"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter large integer"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Operation</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className={inputClassName}
            >
              {OPERATIONS.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
            <p className="text-sm text-on-surface-variant">
              Whole integers only. Division returns integer quotient and
              remainder—no decimal fractions.
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
            Big number summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Result</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-all">
                {result && !result.error ? result.resultText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Operation</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? result.opLabel
                  : getOperation(operation).label}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Expression</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-all">
                {result && !result.error
                  ? `${result.num1.toString()} ${result.opSymbol} ${result.num2.toString()}`
                  : "—"}
              </span>
            </div>
            {result && !result.error && result.remainder !== null && (
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Remainder (mod)</span>
                <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-all">
                  {result.remainder.toString()}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Digits in result</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.digitsResult : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Digits in inputs</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error
                  ? `${result.digits1} · ${result.digits2}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. JavaScript BigInt—integers beyond normal calculator precision.`
                : "Enter two integers and an operation for arbitrary-precision results."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BigNumberCalculator;
