import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/average-calculator";

const DEFAULTS = {
  numbers: "10, 20, 30, 40",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseNumberList = (input) => {
  if (input.trim() === "") {
    return [];
  }

  return input
    .split(/[,;\s]+/)
    .map((n) => n.trim())
    .filter((n) => n !== "")
    .map((n) => parseFloat(n))
    .filter((n) => !isNaN(n));
};

const computeAverage = (numbersInput) => {
  if (numbersInput.trim() === "") {
    return null;
  }

  const nums = parseNumberList(numbersInput);

  if (nums.length === 0) {
    return {
      error: "Enter at least one valid number (comma or space separated).",
    };
  }

  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const count = nums.length;
  const mean = sum / count;
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return {
    nums,
    count,
    sum,
    mean,
    min,
    max,
    formula: "Mean (average) = sum of values ÷ count",
  };
};

const fmtNum = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How do you calculate the average of numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Add all numbers in the set and divide by how many values there are. This arithmetic mean is what most people call the average.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between average and mean?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "In everyday use, average usually means the arithmetic mean: total ÷ count. This calculator computes that mean only.",
    },
  },
  {
    "@type": "Question",
    name: "Does this average calculator find median and mode?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page calculates the mean (average) only. For median, mode, and range together, use the Mean Median Mode Range Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "How should I enter numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Type numbers separated by commas or spaces, e.g. 10, 20, 30 or 10 20 30. Invalid tokens are skipped.",
    },
  },
  {
    "@type": "Question",
    name: "Can I average decimals and negative numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Any valid decimal or negative values in your list are included in the sum and count.",
    },
  },
  {
    "@type": "Question",
    name: "Is this average calculator the same as a grade average?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Simple grade averages without weights use the same mean formula. Weighted averages need each value multiplied by its weight first—this tool uses equal weight per entry.",
    },
  },
];

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState(DEFAULTS.numbers);

  const result = computeAverage(numbers);

  const reset = () => {
    setNumbers(DEFAULTS.numbers);
  };

  return (
    <>
      <Helmet>
        <title>
          Average Calculator - Mean (Arithmetic Average) of a Number List
        </title>
        <meta
          name="description"
          content="Find the arithmetic mean: enter numbers separated by commas or spaces. Shows sum, count, min, and max—not median or mode."
        />
        <meta
          name="keywords"
          content="average calculator, mean calculator, calculate average of numbers, arithmetic mean, find average, number list average"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Average Calculator" />
        <meta
          property="og:description"
          content="Arithmetic mean from a comma- or space-separated list."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Average Calculator" />
        <meta
          name="twitter:description"
          content="Sum ÷ count for your number list."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Average Calculator",
            url: PAGE_URL,
            description:
              "Calculate the arithmetic mean (average) of a list of numbers.",
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
            name: "Average Calculator",
            url: PAGE_URL,
            description: "Web tool for arithmetic mean of number lists.",
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
            headline: "How to Calculate the Arithmetic Mean",
            description: "Sum divided by count for a data set.",
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
                name: "Average Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Numbers (comma or space separated)
            </label>
            <input
              type="text"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              placeholder="e.g. 10, 20, 30"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Enter scores, measurements, or any values to average. Mean only—not
              median or mode.
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
            Average (mean) summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Average (mean)
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? fmtNum(result.mean) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Sum of values</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.sum) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Count</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.count : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Minimum</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.min) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Maximum</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.max) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Values used</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? result.nums.map((n) => fmtNum(n)).join(", ")
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. For median, mode, and range, use the Mean Median Mode Range Calculator.`
                : "Enter numbers to compute the arithmetic mean."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AverageCalculator;
