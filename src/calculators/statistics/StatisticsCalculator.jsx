import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const StatisticsCalculator = () => {
  const DEFAULTS = { input: "10, 20, 20, 40, 50" };

  const [input, setInput] = useState(DEFAULTS.input);

  const parseNumbers = (value) =>
    value
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

  const calculateStats = () => {
    const nums = parseNumbers(input);
    if (input.trim() === "" || nums.length === 0) return null;

    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / nums.length;

    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];

    const freq = {};
    sorted.forEach((n) => {
      freq[n] = (freq[n] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(freq));
    const modes = Object.keys(freq)
      .filter((k) => freq[k] === maxFreq)
      .map(Number);

    const range = sorted[sorted.length - 1] - sorted[0];

    return {
      count: nums.length,
      mean,
      median,
      mode: modes.join(", "),
      range,
    };
  };

  const result = calculateStats();

  const reset = () => setInput(DEFAULTS.input);

  return (
    <>
      <Helmet>
        <title>
          Statistics Calculator - Mean, Median, Mode & Range
        </title>
        <meta
          name="description"
          content="Enter comma-separated numbers to get count, mean, median, mode, and range for your dataset. Quick descriptive statistics summary."
        />
        <meta
          name="keywords"
          content="statistics calculator, mean calculator, median calculator, mode calculator, range calculator, descriptive statistics, data summary calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/statistics/statistics-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Statistics Calculator - Descriptive Summary"
        />
        <meta
          property="og:description"
          content="Paste a list of numbers to see mean, median, mode, and range at a glance."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/statistics/statistics-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Statistics Calculator - Mean, Median, Mode, Range"
        />
        <meta
          name="twitter:description"
          content="Fast descriptive stats from comma-separated data."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Statistics Calculator",
      "url": "https://www.unitedcalculator.net/statistics/statistics-calculator",
      "description": "Statistics calculator for mean, median, mode, range, and count from comma-separated numbers.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
      }
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does the Statistics Calculator compute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It returns count, mean (average), median (middle value), mode (most frequent value), and range (max minus min) for comma-separated numeric input."
          }
        },
        {
          "@type": "Question",
          "name": "How do I enter my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Type numbers separated by commas, such as 10, 20, 20, 40, 50. Spaces around values are fine; invalid tokens are ignored."
          }
        }
      ]
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Statistics Calculators",
          "item": "https://www.unitedcalculator.net/statistics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Statistics Calculator",
          "item": "https://www.unitedcalculator.net/statistics/statistics-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Numbers (comma-separated)
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder="e.g. 10, 20, 20, 40, 50"
            />
            <p className="text-sm text-on-surface-variant">
              Separate values with commas. Non-numeric tokens are ignored.
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
            Descriptive Statistics Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Count (n)</span>
              <span className="font-code-num text-code-num">
                {result ? result.count : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mean</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? result.mean.toFixed(4) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Median</span>
              <span className="font-code-num text-code-num">
                {result ? result.median.toFixed(4) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mode</span>
              <span className="font-code-num text-code-num">
                {result ? result.mode : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Range</span>
              <span className="font-code-num text-code-num">
                {result ? result.range.toFixed(4) : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatisticsCalculator;
