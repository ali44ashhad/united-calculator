import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/factor-calculator";

const DEFAULTS = {
  number: "28",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getFactors = (num) => {
  const factors = [];
  const limit = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= limit; i++) {
    if (num % i === 0) {
      factors.push(i);
      const pair = num / i;
      if (pair !== i) {
        factors.push(pair);
      }
    }
  }

  return factors.sort((a, b) => a - b);
};

const getFactorPairs = (num) => {
  const pairs = [];
  const limit = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= limit; i++) {
    if (num % i === 0) {
      pairs.push([i, num / i]);
    }
  }

  return pairs;
};

const computeFactors = (number) => {
  if (number.trim() === "") {
    return null;
  }

  const num = parseInt(number, 10);

  if (isNaN(num)) {
    return { error: "Enter a valid whole number." };
  }

  if (num <= 0) {
    return { error: "Enter a positive integer greater than zero." };
  }

  if (!Number.isSafeInteger(num)) {
    return {
      error: "Number is too large for exact integer factor listing in the browser.",
    };
  }

  const factors = getFactors(num);
  const factorPairs = getFactorPairs(num);
  const isPrime = num > 1 && factors.length === 2;

  return {
    number: num,
    factors,
    count: factors.length,
    isPrime,
    smallest: factors[0],
    largest: factors[factors.length - 1],
    factorPairs,
    factorPairsText: factorPairs.map(([a, b]) => `${a} × ${b}`).join(", "),
    sumOfFactors: factors.reduce((sum, f) => sum + f, 0),
    formula: "Factors divide the number evenly (remainder 0)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a factor?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A factor (divisor) is a whole number that divides another number with no remainder. Example: 1, 2, 4, 7, 14, and 28 are factors of 28.",
    },
  },
  {
    "@type": "Question",
    name: "How do I find all factors of a number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Test divisors from 1 up to the square root of n. When i divides n, both i and n/i are factors. This calculator lists every factor in ascending order.",
    },
  },
  {
    "@type": "Question",
    name: "Is 1 a factor of every number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. 1 divides every positive integer and is always listed first in the factor list.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from prime factorization?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool lists all divisors (1, 2, 4, 8 for 8). Prime factorization breaks a number into prime building blocks (8 = 2 × 2 × 2). Use the Prime Factorization Calculator for primes only.",
    },
  },
  {
    "@type": "Question",
    name: "How many numbers can I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "One positive integer per calculation. For shared factors of two numbers, use the Common Factor Calculator or Greatest Common Factor Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if a number is prime?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A prime number has exactly two factors: 1 and itself. This calculator shows 'Prime? Yes' when only those two divisors exist (and n > 1).",
    },
  },
];

const FactorCalculator = () => {
  const [number, setNumber] = useState(DEFAULTS.number);

  const result = computeFactors(number);

  const reset = () => {
    setNumber(DEFAULTS.number);
  };

  return (
    <>
      <Helmet>
        <title>Factor Calculator - Find All Factors of a Number</title>
        <meta
          name="description"
          content="List every factor (divisor) of one positive integer—count, factor pairs, prime check. One number input, not GCF or prime factorization."
        />
        <meta
          name="keywords"
          content="factor calculator, find factors, divisors of a number, factor pairs, list all factors, prime check"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Factor Calculator" />
        <meta
          property="og:description"
          content="All factors and factor pairs for one positive integer."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Factor Calculator" />
        <meta
          name="twitter:description"
          content="Divisors, pairs, and prime check for one number."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Factor Calculator",
            url: PAGE_URL,
            description: "Find all factors of a positive integer.",
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
            name: "Factor Calculator",
            url: PAGE_URL,
            description: "Web tool to list all divisors of one integer.",
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
            headline: "Factors and Divisors of a Number",
            description: "How to list every factor of a positive integer.",
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
                name: "Factor Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Positive integer
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="e.g. 28"
            className={inputClassName}
          />
          <p className="text-sm text-on-surface-variant">
            Enter one whole number to list every divisor (factor).
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
            Factors summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">All factors</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.factors.join(", ") : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Number</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.number : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Count of factors</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.count : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Prime?</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.isPrime
                    ? "Yes"
                    : "No"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Smallest factor</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.smallest : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Largest factor</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.largest : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Factor pairs</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.factorPairsText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Sum of factors</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.sumOfFactors.toLocaleString()
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. One positive integer only—not prime factorization or GCF.`
                : "Enter a positive integer to list all factors."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FactorCalculator;
