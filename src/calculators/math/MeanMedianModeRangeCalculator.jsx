import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/mean-median-mode-range-calculator";

const DEFAULTS = {
  numbers: "4, 8, 6, 5, 3, 8",
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

const getMedian = (nums) => {
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

const getMode = (nums) => {
  const frequency = {};
  nums.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  const maxFreq = Math.max(...Object.values(frequency));
  if (maxFreq === 1) {
    return { modes: [], maxFreq, hasMode: false };
  }

  const modes = Object.keys(frequency)
    .filter((key) => frequency[key] === maxFreq)
    .map(Number)
    .sort((a, b) => a - b);

  return { modes, maxFreq, hasMode: modes.length > 0 };
};

const fmtNum = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const computeStats = (numbersInput) => {
  if (numbersInput.trim() === "") {
    return null;
  }

  const nums = parseNumberList(numbersInput);

  if (nums.length === 0) {
    return {
      error: "Enter at least one valid number (comma or space separated).",
    };
  }

  const sorted = [...nums].sort((a, b) => a - b);
  const count = nums.length;
  const sum = nums.reduce((acc, n) => acc + n, 0);
  const mean = sum / count;
  const median = getMedian(nums);
  const { modes, maxFreq, hasMode } = getMode(nums);
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const range = max - min;

  return {
    nums,
    sorted,
    count,
    sum,
    mean,
    median,
    modes,
    modeText: hasMode ? modes.map(fmtNum).join(", ") : "No mode",
    modeFrequency: hasMode ? maxFreq : 0,
    min,
    max,
    range,
    formula: "Mean = sum ÷ n; median = middle; mode = most frequent; range = max − min",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is mean, median, mode, and range?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Mean is the average (sum ÷ count). Median is the middle value when sorted. Mode is the most frequent value. Range is max − min.",
    },
  },
  {
    "@type": "Question",
    name: "How do I use this mean median mode range calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter comma- or space-separated numbers. Read mean, median, mode, range, and sorted list in the summary.",
    },
  },
  {
    "@type": "Question",
    name: "What if there is no mode?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "When every value appears once, there is no mode. This calculator shows 'No mode' in that case.",
    },
  },
  {
    "@type": "Question",
    name: "Can there be more than one mode?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes—bimodal or multimodal data lists every value tied for highest frequency.",
    },
  },
  {
    "@type": "Question",
    name: "Is mean the same as average?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Here, mean is the arithmetic average. For mean only, see the Average Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator include standard deviation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page computes mean, median, mode, and range only—not standard deviation or variance.",
    },
  },
];

const MeanMedianModeRangeCalculator = () => {
  const [numbers, setNumbers] = useState(DEFAULTS.numbers);

  const result = computeStats(numbers);

  const reset = () => {
    setNumbers(DEFAULTS.numbers);
  };

  return (
    <>
      <Helmet>
        <title>
          Mean Median Mode Range Calculator - Central Tendency &amp; Spread
        </title>
        <meta
          name="description"
          content="Find mean, median, mode, and range from comma-separated numbers. Sorted list and count—not standard deviation or quartiles."
        />
        <meta
          name="keywords"
          content="mean median mode range calculator, average and median, mode calculator, data set statistics"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mean Median Mode Range Calculator" />
        <meta
          property="og:description"
          content="Mean, median, mode, and range for a number list."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mean Median Mode Range Calculator"
        />
        <meta
          name="twitter:description"
          content="Four descriptive statistics from one data set."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mean Median Mode Range Calculator",
            url: PAGE_URL,
            description:
              "Calculate mean, median, mode, and range of a data set.",
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
            name: "Mean Median Mode Range Calculator",
            url: PAGE_URL,
            description: "Web tool for mean, median, mode, and range.",
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
            headline: "Mean, Median, Mode, and Range",
            description: "How to summarize a data set with four measures.",
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
                name: "Mean Median Mode Range Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Numbers (comma or space separated)
          </label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="e.g. 4, 8, 6, 5, 3, 8"
            className={inputClassName}
          />
          <p className="text-sm text-on-surface-variant">
            Enter a list of numbers to compute mean, median, mode, and range.
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
            Statistics summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Mean (average)</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? fmtNum(result.mean) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Median</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.median) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mode</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.modeText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Range</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.range) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Count (n)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.count : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Sum</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.sum) : "—"}
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
              <span className="text-on-surface">Sorted values</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-words">
                {result && !result.error
                  ? result.sorted.map(fmtNum).join(", ")
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Four measures only—not standard deviation or weighted mean.`
                : "Enter numbers to compute descriptive statistics."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MeanMedianModeRangeCalculator;
