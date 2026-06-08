import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/common-factor-calculator";

const DEFAULTS = {
  num1: "60",
  num2: "48",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getFactors = (n) => {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

const gcdEuclidean = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const computeCommonFactors = (num1, num2) => {
  if (num1.trim() === "" || num2.trim() === "") {
    return null;
  }

  const a = parseInt(num1, 10);
  const b = parseInt(num2, 10);

  if (isNaN(a) || isNaN(b)) {
    return { error: "Enter valid whole numbers." };
  }

  if (a <= 0 || b <= 0) {
    return { error: "Enter positive integers greater than zero." };
  }

  const min = Math.min(a, b);
  const commonFactors = [];

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      commonFactors.push(i);
    }
  }

  const gcf = gcdEuclidean(a, b);
  const factorsA = getFactors(a);
  const factorsB = getFactors(b);

  return {
    num1: a,
    num2: b,
    commonFactors,
    gcf,
    hcf: gcf,
    count: commonFactors.length,
    factors1: factorsA,
    factors2: factorsB,
    formula: "Common factors divide both numbers; GCF (HCF) is the largest",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a common factor?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A common factor is a positive integer that divides two numbers with no remainder. Example: 2 is a common factor of 4 and 6.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between common factors and GCF?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Common factors are all shared divisors. GCF (greatest common factor) or HCF (highest common factor) is the largest one. This calculator lists all common factors and highlights the GCF.",
    },
  },
  {
    "@type": "Question",
    name: "How do you find common factors of two numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "List divisors of each number (or test 1 through the smaller number) and keep values that divide both. The largest match is the GCF.",
    },
  },
  {
    "@type": "Question",
    name: "How many numbers can I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Two positive integers on this page. For GCF-only output with Euclidean algorithm, see the Greatest Common Factor Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "Is GCF the same as HCF?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. GCF (greatest common factor) and HCF (highest common factor) mean the same value—the largest shared factor.",
    },
  },
  {
    "@type": "Question",
    name: "What is the relationship between GCF and LCM?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For two positive integers a and b, a × b = GCF(a,b) × LCM(a,b). Use the Least Common Multiple Calculator for LCM.",
    },
  },
];

const CommonFactorCalculator = () => {
  const [num1, setNum1] = useState(DEFAULTS.num1);
  const [num2, setNum2] = useState(DEFAULTS.num2);

  const result = computeCommonFactors(num1, num2);

  const reset = () => {
    setNum1(DEFAULTS.num1);
    setNum2(DEFAULTS.num2);
  };

  return (
    <>
      <Helmet>
        <title>
          Common Factor Calculator - List Shared Factors &amp; GCF (HCF)
        </title>
        <meta
          name="description"
          content="Find all common factors of two positive integers plus GCF/HCF. Lists divisors shared by both numbers—not three or more inputs."
        />
        <meta
          name="keywords"
          content="common factor calculator, GCF calculator, HCF calculator, shared factors of two numbers, greatest common factor list"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Common Factor Calculator" />
        <meta
          property="og:description"
          content="All common factors and GCF for two integers."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Common Factor Calculator" />
        <meta
          name="twitter:description"
          content="Shared divisors and greatest common factor."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Common Factor Calculator",
            url: PAGE_URL,
            description:
              "List common factors and GCF of two positive integers.",
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
            name: "Common Factor Calculator",
            url: PAGE_URL,
            description: "Web tool for common factors and GCF of two numbers.",
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
            headline: "Common Factors and Greatest Common Factor",
            description: "How to find shared divisors of two integers.",
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
                name: "Common Factor Calculator",
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
              First number
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="e.g. 60"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Second number
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="e.g. 48"
              className={inputClassName}
            />
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
            Common factors summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                GCF / HCF (greatest)
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? result.gcf : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">All common factors</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error
                  ? result.commonFactors.join(", ")
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Count of common factors</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.count : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Factors of first number</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error
                  ? result.factors1.join(", ")
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Factors of second number</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error
                  ? result.factors2.join(", ")
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Numbers used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.num1} · ${result.num2}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Two positive integers only on this page.`
                : "Enter two positive integers to list shared factors and GCF."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommonFactorCalculator;
