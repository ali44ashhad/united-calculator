import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/long-division-calculator";

const DEFAULTS = {
  dividend: "100",
  divisor: "7",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const buildLongDivisionSteps = (dividend, divisor) => {
  const steps = [];
  const dividendStr = String(dividend);
  let quotient = 0;
  let current = 0;

  for (let i = 0; i < dividendStr.length; i++) {
    const digit = parseInt(dividendStr[i], 10);
    current = current * 10 + digit;

    if (current < divisor) {
      if (quotient > 0) {
        quotient *= 10;
        steps.push({
          label: `Bring down ${digit}`,
          working: current,
          note: `${current} < ${divisor}, quotient digit 0`,
        });
      } else if (i > 0) {
        steps.push({
          label: `Bring down ${digit}`,
          working: current,
          note: `${current} < ${divisor}, no quotient digit yet`,
        });
      }
      continue;
    }

    const quotientDigit = Math.floor(current / divisor);
    const product = quotientDigit * divisor;
    const remainder = current - product;
    quotient = quotient * 10 + quotientDigit;

    steps.push({
      label: `Divide ${current} ÷ ${divisor}`,
      working: current,
      quotientDigit,
      product,
      remainder,
      note: `${quotientDigit} × ${divisor} = ${product}, remainder ${remainder}`,
    });

    current = remainder;
  }

  return {
    quotient,
    remainder: current,
    steps,
  };
};

const computeLongDivision = (dividend, divisor) => {
  if (dividend.trim() === "" || divisor.trim() === "") {
    return null;
  }

  const dividendValue = parseInt(dividend, 10);
  const divisorValue = parseInt(divisor, 10);

  if (isNaN(dividendValue) || isNaN(divisorValue)) {
    return { error: "Enter valid whole numbers for dividend and divisor." };
  }

  if (
    !/^-?\d+$/.test(dividend.trim()) ||
    !/^-?\d+$/.test(divisor.trim())
  ) {
    return { error: "Enter whole integers only (no decimals)." };
  }

  if (divisorValue === 0) {
    return { error: "Divisor cannot be zero." };
  }

  const absDividend = Math.abs(dividendValue);
  const absDivisor = Math.abs(divisorValue);
  const division = buildLongDivisionSteps(absDividend, absDivisor);

  const negativeResult =
    (dividendValue < 0) !== (divisorValue < 0);
  const quotient =
    negativeResult ? -division.quotient : division.quotient;
  const remainder =
    dividendValue < 0
      ? -division.remainder
      : division.remainder;

  const checkValue = quotient * divisorValue + remainder;

  return {
    dividend: dividendValue,
    divisor: divisorValue,
    quotient,
    remainder,
    absDividend,
    absDivisor,
    steps: division.steps,
    stepsText: division.steps.map((s) => s.note).join(" → "),
    mixedNumber:
      remainder === 0
        ? String(quotient)
        : `${quotient} R${Math.abs(remainder)}`,
    decimalApprox: dividendValue / divisorValue,
    checkValue,
    formula: "dividend = divisor × quotient + remainder",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is long division?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Long division is a step-by-step method to divide one integer by another and find quotient and remainder: dividend = divisor × quotient + remainder.",
    },
  },
  {
    "@type": "Question",
    name: "How do I use this long division calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter dividend and divisor as whole numbers. Read quotient, remainder, and the step-by-step notes in the summary.",
    },
  },
  {
    "@type": "Question",
    name: "What is the remainder?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The remainder is what's left after dividing: dividend = divisor × quotient + remainder. Example: 100 ÷ 7 = 14 remainder 2.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator show decimal answers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Primary output is integer quotient and remainder. A decimal approximation is shown for reference—not a full decimal long-division expansion.",
    },
  },
  {
    "@type": "Question",
    name: "Can I divide negative numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Quotient follows sign rules; remainder keeps the dividend's sign in this tool.",
    },
  },
  {
    "@type": "Question",
    name: "What numbers can I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Whole integers only—no decimals. For huge integers, use the Big Number Calculator.",
    },
  },
];

const LongDivisionCalculator = () => {
  const [dividend, setDividend] = useState(DEFAULTS.dividend);
  const [divisor, setDivisor] = useState(DEFAULTS.divisor);

  const result = computeLongDivision(dividend, divisor);

  const reset = () => {
    setDividend(DEFAULTS.dividend);
    setDivisor(DEFAULTS.divisor);
  };

  return (
    <>
      <Helmet>
        <title>
          Long Division Calculator - Quotient, Remainder &amp; Steps
        </title>
        <meta
          name="description"
          content="Divide two whole numbers: quotient, remainder, and step notes. Integer long division—not decimal expansion or polynomial division."
        />
        <meta
          name="keywords"
          content="long division calculator, quotient and remainder, division steps, divide whole numbers"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Long Division Calculator" />
        <meta
          property="og:description"
          content="Integer division with quotient, remainder, and steps."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Long Division Calculator" />
        <meta
          name="twitter:description"
          content="Whole-number long division with remainder."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Long Division Calculator",
            url: PAGE_URL,
            description:
              "Calculate quotient and remainder with long division steps.",
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
            name: "Long Division Calculator",
            url: PAGE_URL,
            description: "Web tool for integer long division.",
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
            headline: "Long Division with Quotient and Remainder",
            description: "How to divide whole numbers step by step.",
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
                name: "Long Division Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Dividend</label>
            <input
              type="number"
              step="1"
              value={dividend}
              onChange={(e) => setDividend(e.target.value)}
              placeholder="e.g. 100"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Divisor</label>
            <input
              type="number"
              step="1"
              value={divisor}
              onChange={(e) => setDivisor(e.target.value)}
              placeholder="e.g. 7"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Whole integers only. Divisor cannot be zero.
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
            Long division summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Quotient</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? result.quotient : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Remainder</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.remainder : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Expression</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.dividend} ÷ ${result.divisor}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Result form</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.mixedNumber : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Decimal (approx.)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.decimalApprox.toLocaleString(undefined, {
                      maximumFractionDigits: 10,
                    })
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Check (q×d + r)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.checkValue : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Steps</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.stepsText : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Integer quotient and remainder—not full decimal long division.`
                : "Enter dividend and divisor to divide."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LongDivisionCalculator;
