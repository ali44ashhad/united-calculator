import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/least-common-multiple-calculator";

const DEFAULTS = {
  numbers: "12, 18",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const lcmTwo = (a, b) => (a * b) / gcd(a, b);

const computeLCM = (numbersInput) => {
  if (numbersInput.trim() === "") {
    return null;
  }

  const rawParts = numbersInput
    .split(",")
    .map((part) => part.trim())
    .filter((part) => part !== "");

  if (rawParts.length === 0) {
    return { error: "Enter at least two comma-separated integers." };
  }

  const parsed = [];
  for (const part of rawParts) {
    const value = parseInt(part, 10);
    if (isNaN(value)) {
      return { error: `Invalid number: "${part}". Use whole integers only.` };
    }
    if (value === 0) {
      return {
        error:
          "LCM with zero is undefined (division by zero in the GCD method).",
      };
    }
    parsed.push(Math.abs(value));
  }

  if (parsed.length < 2) {
    return { error: "Enter at least two numbers separated by commas." };
  }

  const steps = [];
  let current = parsed[0];
  steps.push(`Start with ${current}`);

  for (let i = 1; i < parsed.length; i++) {
    const next = parsed[i];
    const g = gcd(current, next);
    const lcmPair = lcmTwo(current, next);
    steps.push(
      `lcm(${current}, ${next}) = (${current} × ${next}) / gcd(${g}) = ${lcmPair}`
    );
    current = lcmPair;
  }

  const gcfPair =
    parsed.length === 2 ? gcd(parsed[0], parsed[1]) : null;
  const productPair =
    parsed.length === 2 ? parsed[0] * parsed[1] : null;

  return {
    numbers: parsed,
    count: parsed.length,
    lcm: current,
    steps,
    gcfPair,
    productPair,
    formula:
      parsed.length === 2
        ? "lcm(a,b) = |a×b| / gcd(a,b); a × b = gcd × lcm"
        : "Pairwise lcm via gcd on comma-separated list",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is the least common multiple (LCM)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The LCM is the smallest positive integer that is a multiple of every number in the set. Example: multiples of 4 include 4, 8, 12…; LCM(4, 6) = 12.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate LCM using GCD?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For two numbers: lcm(a,b) = |a×b| / gcd(a,b). For more numbers, apply pairwise and replace the pair with the result until one LCM remains.",
    },
  },
  {
    "@type": "Question",
    name: "What is the LCM of 12, 16, and 21?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "336. Prime factors: 12=2²×3, 16=2⁴, 21=3×7 → LCM = 2⁴×3×7 = 336.",
    },
  },
  {
    "@type": "Question",
    name: "What is the LCM of 0 and another number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Undefined when using gcd (division by zero). Some fields treat lcm(n,0)=0; this calculator rejects zero inputs.",
    },
  },
  {
    "@type": "Question",
    name: "How many numbers can I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Two or more comma-separated integers. Negative signs are ignored (absolute value used); LCM is defined as positive.",
    },
  },
  {
    "@type": "Question",
    name: "Why is LCM used with fractions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "When adding fractions, the common denominator is the LCM of the denominators.",
    },
  },
];

const LeastCommonMultipleCalculator = () => {
  const [numbers, setNumbers] = useState(DEFAULTS.numbers);

  const result = computeLCM(numbers);

  const reset = () => {
    setNumbers(DEFAULTS.numbers);
  };

  return (
    <>
      <Helmet>
        <title>
          Least Common Multiple Calculator - LCM of Two or More Numbers
        </title>
        <meta
          name="description"
          content="Find LCM of comma-separated integers using the GCD method. Pairwise steps shown—two or more positive whole numbers; zero rejected."
        />
        <meta
          name="keywords"
          content="least common multiple calculator, LCM calculator, lcm gcd formula, smallest common multiple"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Least Common Multiple Calculator" />
        <meta
          property="og:description"
          content="LCM from comma-separated integers via GCD."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Least Common Multiple Calculator" />
        <meta
          name="twitter:description"
          content="Smallest common multiple for a list of numbers."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Least Common Multiple Calculator",
            url: PAGE_URL,
            description:
              "Calculate LCM of two or more positive integers.",
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
            name: "Least Common Multiple Calculator",
            url: PAGE_URL,
            description: "Web tool for LCM via greatest common divisor.",
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
            headline: "Least Common Multiple (LCM)",
            description: "How to find LCM using GCD and other methods.",
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
                name: "Least Common Multiple Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Numbers (comma-separated)
          </label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="e.g. 12, 18 or 12, 16, 21"
            className={inputClassName}
          />
          <p className="text-sm text-on-surface-variant">
            Two or more integers. Negative signs use absolute value; zero is not
            allowed.
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">LCM summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">LCM</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? result.lcm.toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Numbers used</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.numbers.join(", ") : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Count</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.count : "—"}
              </span>
            </div>
            {result && !result.error && result.gcfPair !== null && (
              <div className="flex items-center justify-between">
                <span className="text-on-surface">GCD (two-number case)</span>
                <span className="font-code-num text-code-num">
                  {result.gcfPair}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Pairwise GCD steps</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.steps.join(" → ") : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. GCD/LCM method—not prime-factorization or table-method UI.`
                : "Enter comma-separated integers (at least two)."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LeastCommonMultipleCalculator;
