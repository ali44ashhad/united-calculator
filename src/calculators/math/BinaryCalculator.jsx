import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/binary-calculator";

const DEFAULTS = {
  bin1: "1010",
  bin2: "0110",
  operation: "+",
};

const BINARY_PATTERN = /^[01]+$/;

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

const isValidBinary = (str) => BINARY_PATTERN.test(str);

const toBinaryString = (decimal) => {
  if (decimal < 0) {
    return `-${(-decimal).toString(2)}`;
  }
  return decimal.toString(2);
};

const computeBinary = (bin1, bin2, operation) => {
  if (bin1.trim() === "" || bin2.trim() === "") {
    return null;
  }

  if (!isValidBinary(bin1.trim()) || !isValidBinary(bin2.trim())) {
    return {
      error: "Enter valid binary strings using only 0 and 1 (e.g. 1010).",
    };
  }

  const num1 = parseInt(bin1.trim(), 2);
  const num2 = parseInt(bin2.trim(), 2);
  const op = getOperation(operation);
  let decimalResult;
  let remainder = null;

  switch (operation) {
    case "+":
      decimalResult = num1 + num2;
      break;
    case "-":
      decimalResult = num1 - num2;
      break;
    case "*":
      decimalResult = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return { error: "Cannot divide by zero." };
      }
      decimalResult = Math.floor(num1 / num2);
      remainder = num1 % num2;
      break;
    default:
      return { error: "Select a valid operation." };
  }

  return {
    bin1: bin1.trim(),
    bin2: bin2.trim(),
    num1,
    num2,
    operation,
    opLabel: op.label,
    opSymbol: op.symbol,
    decimalResult,
    binaryResult: toBinaryString(decimalResult),
    hexResult:
      decimalResult < 0
        ? `-${(-decimalResult).toString(16).toUpperCase()}`
        : decimalResult.toString(16).toUpperCase(),
    remainder,
    formula: "Convert binary → decimal → operate → show binary & decimal",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does this binary calculator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It adds, subtracts, multiplies, or divides two binary numbers (0 and 1 digits). Results show in binary with decimal and hexadecimal equivalents.",
    },
  },
  {
    "@type": "Question",
    name: "How do I enter binary numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Type strings of 0 and 1 only, such as 1010 or 0110. No spaces, prefixes (0b), or decimal points.",
    },
  },
  {
    "@type": "Question",
    name: "Does this convert decimal to binary?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Inputs are binary only. The summary shows decimal and hex readouts of the result. For hex-focused conversion, use the Hex Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "How does binary division work here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Numbers convert to decimal, integer division runs (floor), then the quotient is shown in binary. Remainder is shown in decimal.",
    },
  },
  {
    "@type": "Question",
    name: "Can subtraction give negative results?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. If the second value is larger, the decimal result is negative and binary shows a leading minus on the magnitude.",
    },
  },
  {
    "@type": "Question",
    name: "Is this a full base converter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It performs binary arithmetic on two operands. Dedicated hex and conversion tools handle other base workflows.",
    },
  },
];

const BinaryCalculator = () => {
  const [bin1, setBin1] = useState(DEFAULTS.bin1);
  const [bin2, setBin2] = useState(DEFAULTS.bin2);
  const [operation, setOperation] = useState(DEFAULTS.operation);

  const result = computeBinary(bin1, bin2, operation);

  const reset = () => {
    setBin1(DEFAULTS.bin1);
    setBin2(DEFAULTS.bin2);
    setOperation(DEFAULTS.operation);
  };

  return (
    <>
      <Helmet>
        <title>
          Binary Calculator - Add, Subtract, Multiply &amp; Divide Binary Numbers
        </title>
        <meta
          name="description"
          content="Binary arithmetic on two 0/1 strings: +, −, ×, ÷ with binary, decimal, and hex result readouts—not a standalone base converter."
        />
        <meta
          name="keywords"
          content="binary calculator, binary addition, binary subtraction, binary math, add binary numbers, binary to decimal result"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Binary Calculator" />
        <meta
          property="og:description"
          content="Perform arithmetic on binary numbers with decimal and hex summaries."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Binary Calculator" />
        <meta
          name="twitter:description"
          content="Binary + − × ÷ with result in base 2."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Binary Calculator",
            url: PAGE_URL,
            description:
              "Add, subtract, multiply, and divide binary numbers online.",
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
            name: "Binary Calculator",
            url: PAGE_URL,
            description: "Web tool for binary arithmetic on two operands.",
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
            headline: "Binary Arithmetic Online",
            description:
              "How to add and operate on base-2 numbers with decimal checks.",
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
                name: "Binary Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Binary number 1
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={bin1}
              onChange={(e) => setBin1(e.target.value)}
              placeholder="e.g. 1010"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Binary number 2
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={bin2}
              onChange={(e) => setBin2(e.target.value)}
              placeholder="e.g. 0110"
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
              Digits 0 and 1 only. Division uses integer quotient (decimal
              remainder shown).
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
            Binary calculation summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Result (binary)</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-all">
                {result && !result.error ? result.binaryResult : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Result (decimal)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.decimalResult : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Result (hex)</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error ? result.hexResult : "—"}
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
              <span className="text-on-surface">Expression (binary)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-all">
                {result && !result.error
                  ? `${result.bin1} ${result.opSymbol} ${result.bin2}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Operands (decimal)</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error
                  ? `${result.num1} · ${result.num2}`
                  : "—"}
              </span>
            </div>
            {result && !result.error && result.remainder !== null && (
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Remainder (decimal)</span>
                <span className="font-code-num text-code-num">
                  {result.remainder}
                </span>
              </div>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. For hex-first conversion, use the Hex Calculator.`
                : "Enter two binary strings and an operation."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BinaryCalculator;
