import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const StandardDeviationCalculator = () => {
  const [numbers, setNumbers] = useState("10, 20, 30, 40, 50");
  const [result, setResult] = useState(null);

  const calculateStandardDeviation = () => {
    const numArray = numbers
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (numArray.length === 0) {
      setResult("Please enter valid numbers separated by commas.");
      return;
    }

    const mean = numArray.reduce((a, b) => a + b, 0) / numArray.length;
    const variance =
      numArray.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) /
      numArray.length;
    const stdDeviation = Math.sqrt(variance).toFixed(4);

    setResult(`Standard Deviation: ${stdDeviation}`);
  };

  return (
    <>
      <Helmet>
        <title>
          Standard Deviation Calculator | Step-by-Step Statistics Tool
        </title>
        <meta
          name="description"
          content="Use our Standard Deviation Calculator to find the standard deviation, variance, and mean of a dataset. Supports population and sample data. Get detailed step-by-step results for statistics problems."
        />
        <meta
          name="keywords"
          content="standard deviation calculator, statistics calculator, variance calculator, sample standard deviation, population standard deviation, statistics tool, data analysis calculator, mean and deviation"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/statistics/standard-deviation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Standard Deviation Calculator | Step-by-Step Statistics Tool"
        />
        <meta
          property="og:description"
          content="Easily calculate standard deviation, variance, and mean for your dataset with this free Standard Deviation Calculator. Ideal for students, teachers, and statisticians."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/statistics/standard-deviation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Standard Deviation Calculator",
      "url": "https://www.unitedcalculator.net/statistics/standard-deviation-calculator",
      "description": "Calculate standard deviation, variance, and mean using this powerful statistics calculator. Supports both sample and population datasets with step-by-step breakdowns.",
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
          "name": "What is standard deviation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard deviation is a measure of the amount of variation or dispersion in a dataset. A low standard deviation indicates the data points are close to the mean, while a high standard deviation indicates more spread."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use the Standard Deviation Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter your dataset (comma-separated values) into the calculator. Choose whether it's a sample or population, and the calculator will return the mean, variance, and standard deviation with step-by-step calculation."
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
          "name": "Standard Deviation Calculator",
          "item": "https://www.unitedcalculator.net/statistics/standard-deviation-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Enter numbers</label>
            <input
              type="text"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              placeholder="e.g. 10, 20, 30"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            onClick={calculateStandardDeviation}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate
          </button>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
            <div className="text-green-600 font-bold text-2xl">{result}</div>
          </section>
        )}
      </div>
    </>
  );
};

export default StandardDeviationCalculator;
