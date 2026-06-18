import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/prime-factorization-calculator";

const MAX_N = Number.MAX_SAFE_INTEGER;

const DEFAULTS = {
  number: "60",
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

const getPrimeFactors = (num) => {
  const result = [];
  let n = num;

  while (n % 2 === 0) {
    result.push(2);
    n /= 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }

  if (n > 1) {
    result.push(n);
  }

  return result;
};

const toExponentForm = (factors) => {
  const counts = new Map();
  for (const p of factors) {
    counts.set(p, (counts.get(p) || 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([prime, exp]) => (exp === 1 ? `${prime}` : `${prime}^${exp}`))
    .join(" × ");
};

const computePrimeFactorization = (numberInput) => {
  if (numberInput.trim() === "") {
    return null;
  }

  const num = parseWholeNumber(numberInput);

  if (Number.isNaN(num)) {
    return { error: "Enter a whole number (integer)." };
  }

  if (num <= 1) {
    return { error: "Enter an integer greater than 1." };
  }

  if (num > MAX_N) {
    return { error: "Number is too large for exact integer factorization here." };
  }

  const factors = getPrimeFactors(num);
  const uniquePrimes = [...new Set(factors)];
  const productText = factors.join(" × ");
  const exponentText = toExponentForm(factors);
  const isPrime = factors.length === 1;

  return {
    number: num,
    factors,
    uniquePrimes,
    productText,
    exponentText,
    isPrime,
    factorCount: factors.length,
    uniqueCount: uniquePrimes.length,
    formula: "Divide by smallest primes until quotient is 1",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is prime factorization?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Prime factorization writes a composite number as a product of prime numbers, e.g. 60 = 2 × 2 × 3 × 5.",
    },
  },
  {
    "@type": "Question",
    name: "What numbers can I factor?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Whole integers greater than 1. This tool does not factor 0, 1, negatives, or decimals.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between prime factors and all factors?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Prime factors are primes only. The Factor Calculator lists every divisor, not just primes.",
    },
  },
  {
    "@type": "Question",
    name: "Is 1 a prime factor?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—1 is neither prime nor composite and is not included in prime factorization.",
    },
  },
  {
    "@type": "Question",
    name: "How do I read the exponent form?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "2^2 × 3 × 5 means two factors of 2, one of 3, and one of 5—the same as 2 × 2 × 3 × 5.",
    },
  },
  {
    "@type": "Question",
    name: "Does this find GCF or LCM?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—this factors one number. Use the GCF or LCM calculators for two or more numbers.",
    },
  },
];

const PrimeFactorizationCalculator = () => {
  const [number, setNumber] = useState(DEFAULTS.number);

  const result = computePrimeFactorization(number);

  const reset = () => {
    setNumber(DEFAULTS.number);
  };

  return (
    <>
      <Helmet>
        <title>
          Prime Factorization Calculator - Prime Factors &amp; Exponents
        </title>
        <meta
          name="description"
          content="Factor integers greater than 1 into prime factors with product and exponent form—one number at a time, not GCF/LCM or all divisors."
        />
        <meta
          name="keywords"
          content="prime factorization calculator, prime factors, factor tree, prime decomposition"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prime Factorization Calculator" />
        <meta
          property="og:description"
          content="Prime factors with multiplicity and exponent form."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prime Factorization Calculator" />
        <meta
          name="twitter:description"
          content="Break a number into prime factors."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Prime Factorization Calculator",
            url: PAGE_URL,
            description: "Find prime factors of a positive integer.",
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
            name: "Prime Factorization Calculator",
            url: PAGE_URL,
            description: "Web tool for prime decomposition of integers.",
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
            headline: "Prime Factorization",
            description: "How to express numbers as products of primes.",
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
                name: "Prime Factorization Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2 max-w-md">
          <label className="font-h3 text-h3 text-on-surface">Number</label>
          <input
            type="number"
            min="2"
            step="1"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="e.g. 60"
            className={inputClassName}
          />
          <p className="text-sm text-on-surface-variant">
            Whole integer greater than 1 (e.g. 60 → 2 × 2 × 3 × 5).
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
            Prime factorization summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Prime factors</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.productText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Exponent form</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.exponentText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Distinct primes</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error
                  ? result.uniquePrimes.join(", ")
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Is prime?</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? (result.isPrime ? "Yes" : "No") : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total prime factors (with repeats)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.factorCount : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Input number</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.number.toLocaleString()
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Prime decomposition only—not all divisors, GCF, or LCM.`
                : "Enter an integer greater than 1."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrimeFactorizationCalculator;
