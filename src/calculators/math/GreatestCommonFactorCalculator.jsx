import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/greatest-common-factor-calculator";

const DEFAULTS = {
  num1: "48",
  num2: "18",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const gcdEuclidean = (a, b) => {
  let x = a;
  let y = b;
  const steps = [];

  while (y !== 0) {
    const remainder = x % y;
    steps.push({
      dividend: x,
      divisor: y,
      remainder,
    });
    x = y;
    y = remainder;
  }

  return { gcf: x, steps };
};

const computeGCF = (num1, num2) => {
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

  const { gcf, steps } = gcdEuclidean(a, b);
  const lcm = (a * b) / gcf;
  const isCoprime = gcf === 1;

  return {
    number1: a,
    number2: b,
    gcf,
    hcf: gcf,
    lcm,
    isCoprime,
    reducedFraction: `${a / gcf}/${b / gcf}`,
    euclideanSteps: steps,
    lastStep: steps.length > 0 ? steps[steps.length - 1] : null,
    formula: "GCF(A,B) via Euclidean algorithm (modulo steps)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is the greatest common factor (GCF)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The GCF (also HCF or GCD) is the largest positive integer that divides two numbers with no remainder. Example: GCF(45, 189) = 9.",
    },
  },
  {
    "@type": "Question",
    name: "What is the GCF of 8 and 12?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Common factors are 1, 2, 4. The largest is 4, so GCF(8, 12) = 4.",
    },
  },
  {
    "@type": "Question",
    name: "What is the GCF of two co-prime numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Co-prime numbers share no factor other than 1, so their GCF is always 1.",
    },
  },
  {
    "@type": "Question",
    name: "How many numbers can I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Two positive integers on this page. For every shared factor listed, use the Common Factor Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "How does this calculator find GCF?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the Euclidean algorithm with modulo steps—fast for large values like 10144 and 12408.",
    },
  },
  {
    "@type": "Question",
    name: "Why is GCF useful?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "GCF simplifies fractions and connects to LCM through a × b = GCF × LCM.",
    },
  },
];

const GreatestCommonFactorCalculator = () => {
  const [num1, setNum1] = useState(DEFAULTS.num1);
  const [num2, setNum2] = useState(DEFAULTS.num2);

  const result = computeGCF(num1, num2);

  const reset = () => {
    setNum1(DEFAULTS.num1);
    setNum2(DEFAULTS.num2);
  };

  return (
    <>
      <Helmet>
        <title>
          Greatest Common Factor Calculator - GCF / HCF / GCD (Two Numbers)
        </title>
        <meta
          name="description"
          content="Find GCF (HCF/GCD) of two positive integers using the Euclidean algorithm. Includes LCM, reduced fraction, and coprime check—not 3+ numbers."
        />
        <meta
          name="keywords"
          content="greatest common factor calculator, GCF calculator, HCF calculator, GCD calculator, Euclidean algorithm GCF"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Greatest Common Factor Calculator" />
        <meta
          property="og:description"
          content="GCF of two integers via Euclidean algorithm."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Greatest Common Factor Calculator" />
        <meta
          name="twitter:description"
          content="Find GCF, HCF, and related LCM for two numbers."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Greatest Common Factor Calculator",
            url: PAGE_URL,
            description:
              "Calculate GCF of two positive integers with Euclidean algorithm.",
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
            name: "Greatest Common Factor Calculator",
            url: PAGE_URL,
            description: "Web tool for GCF of two positive integers.",
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
            headline: "Greatest Common Factor (GCF)",
            description: "How to find GCF of two positive integers.",
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
                name: "Greatest Common Factor Calculator",
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
              placeholder="e.g. 48"
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
              placeholder="e.g. 18"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Two positive integers—Euclidean algorithm handles large values
              quickly.
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">GCF summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                GCF / HCF / GCD
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? result.gcf : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Numbers</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.number1}, ${result.number2}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">LCM (related)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.lcm.toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Co-prime?</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.isCoprime
                    ? "Yes (GCF = 1)"
                    : "No"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Reduced ratio</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.reducedFraction : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Euclidean steps</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error
                  ? result.euclideanSteps
                      .map(
                        (s) => `${s.dividend} mod ${s.divisor} = ${s.remainder}`
                      )
                      .join(" → ")
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. a × b = GCF × LCM. Two integers only—not a full common-factor list.`
                : "Enter two positive integers to find GCF."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GreatestCommonFactorCalculator;
