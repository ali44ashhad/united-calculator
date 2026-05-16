import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const StandardDeviationCalculator = () => {
  const DEFAULTS = { numbers: "10, 20, 30, 40, 50" };

  const [numbers, setNumbers] = useState(DEFAULTS.numbers);

  const parseNumbers = (input) =>
    input
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

  const calculateStats = () => {
    const numArray = parseNumbers(numbers);
    if (numbers.trim() === "" || numArray.length === 0) return null;

    const n = numArray.length;
    const mean = numArray.reduce((a, b) => a + b, 0) / n;
    const variance =
      numArray.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / n;
    const stdDeviation = Math.sqrt(variance);

    const sampleVariance =
      n > 1
        ? numArray.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) /
          (n - 1)
        : null;
    const sampleStdDeviation =
      sampleVariance !== null ? Math.sqrt(sampleVariance) : null;

    return {
      count: n,
      mean,
      variance,
      stdDeviation,
      sampleStdDeviation,
    };
  };

  const result = calculateStats();

  const reset = () => setNumbers(DEFAULTS.numbers);

  return (
    <>
      <Helmet>
        <title>
          Standard Deviation Calculator - Mean, Variance & Spread
        </title>
        <meta
          name="description"
          content="Enter comma-separated numbers to get mean, population variance, population standard deviation, and sample standard deviation (n−1) for your dataset."
        />
        <meta
          name="keywords"
          content="standard deviation calculator, population standard deviation, sample standard deviation, variance calculator, mean calculator, statistics spread calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/statistics/standard-deviation-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Standard Deviation Calculator - Dataset Spread"
        />
        <meta
          property="og:description"
          content="Paste comma-separated values to see mean, variance, and standard deviation summaries."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/statistics/standard-deviation-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Standard Deviation Calculator - Mean & Variance"
        />
        <meta
          name="twitter:description"
          content="Quick population and sample standard deviation from a list of numbers."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Standard Deviation Calculator",
      "url": "https://www.unitedcalculator.net/statistics/standard-deviation-calculator",
      "description": "Standard deviation calculator that computes mean, variance, population standard deviation, and sample standard deviation from comma-separated data.",
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
          "name": "What is standard deviation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard deviation measures how spread out values are around the mean. Low deviation means points cluster near the average; high deviation means wider scatter."
          }
        },
        {
          "@type": "Question",
          "name": "Population vs sample standard deviation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Population SD divides by n (entire group). Sample SD divides by n−1 (Bessel correction) when your list is a sample from a larger population."
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
          "name": "Standard Deviation Calculator",
          "item": "https://www.unitedcalculator.net/statistics/standard-deviation-calculator"
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
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              placeholder="e.g. 10, 20, 30, 40, 50"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
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
            Standard Deviation Summary
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
              <span className="text-on-surface">Population variance</span>
              <span className="font-code-num text-code-num">
                {result ? result.variance.toFixed(4) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Population standard deviation
              </span>
              <span className="font-code-num text-code-num">
                {result ? result.stdDeviation.toFixed(4) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Sample standard deviation (n − 1)
              </span>
              <span className="font-code-num text-code-num">
                {result?.sampleStdDeviation != null
                  ? result.sampleStdDeviation.toFixed(4)
                  : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StandardDeviationCalculator;
