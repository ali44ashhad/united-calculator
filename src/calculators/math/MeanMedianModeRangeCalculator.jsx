import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MeanMedianModeRangeCalculator = () => {
  const [numbers, setNumbers] = useState("4, 8, 6, 5, 3, 8");

  const parseNumbers = (input) => {
    return input
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));
  };

  const getMean = (nums) =>
    nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;

  const getMedian = (nums) => {
    if (!nums.length) return 0;
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  };

  const getMode = (nums) => {
    if (!nums.length) return [];

    const frequency = {};
    nums.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });

    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency)
      .filter((key) => frequency[key] === maxFreq)
      .map(Number);

    return modes.length === nums.length ? [] : modes;
  };

  const getRange = (nums) =>
    nums.length ? Math.max(...nums) - Math.min(...nums) : 0;

  const nums = parseNumbers(numbers);
  const mean = getMean(nums);
  const median = getMedian(nums);
  const mode = getMode(nums);
  const range = getRange(nums);

  return (
    <>
      <Helmet>
        <title>
          Mean Median Mode Range Calculator | Statistical Measures Calculator
        </title>
        <meta
          name="description"
          content="Use our Mean Median Mode Range Calculator to quickly find key statistical measures for your data set. Ideal for students, researchers, and analysts."
        />
        <meta
          name="keywords"
          content="mean calculator, median calculator, mode calculator, range calculator, statistics calculator, statistical measures"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/mean-median-mode-range-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mean Median Mode Range Calculator | Statistical Measures Calculator"
        />
        <meta
          property="og:description"
          content="Easily calculate the mean, median, mode, and range of any data set using our Mean Median Mode Range Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/mean-median-mode-range-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mean Median Mode Range Calculator",
  "url": "https://www.unitedcalculator.net/math/mean-median-mode-range-calculator",
  "description": "Find the mean, median, mode, and range of your data set instantly with our calculator.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://www.unitedcalculator.net"
  }
}
    `}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is mean, median, mode, and range?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mean is the average of numbers, median is the middle value, mode is the most frequent value, and range is the difference between the highest and lowest values."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input your data set and the calculator will compute mean, median, mode, and range instantly."
      }
    }
  ]
}
    `}
        </script>

        {/* JSON-LD: Breadcrumb */}
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
      "name": "Math Calculators",
      "item": "https://www.unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Mean Median Mode Range Calculator",
      "item": "https://www.unitedcalculator.net/math/mean-median-mode-range-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div>
          <label className="block mb-2 font-medium">
            Enter numbers (comma separated)
          </label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="e.g. 4, 8, 6, 5, 3, 8"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {nums.length > 0 ? (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Results
            </h2>
            <p>
              <strong>Mean:</strong> {mean.toFixed(2)}
            </p>
            <p>
              <strong>Median:</strong> {median}
            </p>
            <p>
              <strong>Mode:</strong> {mode.length ? mode.join(", ") : "No mode"}
            </p>
            <p>
              <strong>Range:</strong> {range}
            </p>
          </div>
        ) : (
          <p className="text-red-600 mt-4">Please enter valid numbers.</p>
        )}
      </div>
    </>
  );
};

export default MeanMedianModeRangeCalculator;
