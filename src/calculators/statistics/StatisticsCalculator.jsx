import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const StatisticsCalculator = () => {
  const [input, setInput] = useState("10, 20, 20, 40, 50");
  const [stats, setStats] = useState(null);

  const calculateStats = () => {
    const nums = input
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (nums.length === 0) {
      setStats({ error: "Enter valid numbers separated by commas." });
      return;
    }

    // Mean
    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / nums.length;

    // Median
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];

    // Mode
    const freq = {};
    sorted.forEach((n) => (freq[n] = (freq[n] || 0) + 1));
    const maxFreq = Math.max(...Object.values(freq));
    const modes = Object.keys(freq)
      .filter((k) => freq[k] === maxFreq)
      .map(Number);

    // Range
    const range = sorted[sorted.length - 1] - sorted[0];

    setStats({
      mean: mean.toFixed(4),
      median: median.toFixed(4),
      mode: modes.join(", "),
      range: range.toFixed(4),
    });
  };

  return (
    <>
      <Helmet>
        <title>Statistics Calculator | Mean, Median, Mode, Range & More</title>
        <meta
          name="description"
          content="Use our comprehensive Statistics Calculator to find mean, median, mode, range, variance, and standard deviation. Perfect for analyzing datasets with step-by-step results and explanations."
        />
        <meta
          name="keywords"
          content="statistics calculator, mean calculator, median calculator, mode calculator, range calculator, variance calculator, standard deviation calculator, data analysis tool, descriptive statistics"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/statistics/statistics-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Statistics Calculator | Mean, Median, Mode, Range & More"
        />
        <meta
          property="og:description"
          content="Analyze your dataset using this powerful Statistics Calculator. Calculate mean, median, mode, range, variance, and standard deviation quickly and accurately with clear steps."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/statistics/statistics-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Statistics Calculator",
      "url": "https://www.unitedcalculator.net/statistics/statistics-calculator",
      "description": "This all-in-one Statistics Calculator lets you calculate mean, median, mode, range, variance, and standard deviation for any dataset. Ideal for students, teachers, and data analysts.",
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
          "name": "What does the Statistics Calculator do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Statistics Calculator computes key descriptive statistics including mean, median, mode, range, variance, and standard deviation. It helps you summarize and analyze your data easily."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use this calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter your dataset as comma-separated values. The calculator will automatically process the numbers and display all relevant statistical measures with explanations."
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

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Enter Numbers (comma‑separated)
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10, 20, 20, 40"
            />
          </div>

          <button
            onClick={calculateStats}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate Statistics
          </button>
        </div>

        {stats && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            {stats.error ? (
              <div className="text-red-600 font-medium">{stats.error}</div>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Results
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Mean:</span>
                    <span className="text-blue-600 font-medium">
                      {stats.mean}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Median:</span>
                    <span className="text-green-600 font-medium">
                      {stats.median}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Mode:</span>
                    <span className="text-yellow-600 font-medium">
                      {stats.mode}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-800">Range:</span>
                    <span className="text-indigo-600">{stats.range}</span>
                  </div>
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default StatisticsCalculator;
