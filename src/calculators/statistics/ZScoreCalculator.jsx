import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ZScoreCalculator = () => {
  const [score, setScore] = useState("85");
  const [mean, setMean] = useState("70");
  const [stdDev, setStdDev] = useState("10");
  const [zScore, setZScore] = useState(null);

  const calculateZScore = () => {
    const x = parseFloat(score);
    const mu = parseFloat(mean);
    const sigma = parseFloat(stdDev);

    if (isNaN(x) || isNaN(mu) || isNaN(sigma) || sigma === 0) {
      setZScore("Invalid input");
      return;
    }

    const z = (x - mu) / sigma;
    setZScore(z.toFixed(4));
  };

  return (
    <>
      <Helmet>
        <title>Z-Score Calculator | Find Standard Score & Probability</title>
        <meta
          name="description"
          content="Use our Z-Score Calculator to compute the standard score (z-value) for your dataset. Understand how far a data point is from the mean in terms of standard deviations. Supports population and sample data."
        />
        <meta
          name="keywords"
          content="z-score calculator, standard score calculator, statistics calculator, z value calculator, standard deviation, normal distribution calculator, probability calculator, z table"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/statistics/z-score-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Z-Score Calculator | Find Standard Score & Probability"
        />
        <meta
          property="og:description"
          content="Calculate the z-score (standard score) of a data point based on the mean and standard deviation. Our Z-Score Calculator supports normal distribution, population, and sample data."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/statistics/z-score-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Z-Score Calculator",
      "url": "https://unitedcalculator.net/statistics/z-score-calculator",
      "description": "The Z-Score Calculator helps you determine how far a value is from the mean in terms of standard deviations. Useful for statistical analysis and understanding standard normal distribution.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
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
          "name": "What is a z-score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A z-score is a statistical measurement that describes a value's relationship to the mean of a group of values, expressed in terms of standard deviations from the mean."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use the Z-Score Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the data value, mean, and standard deviation. The calculator will instantly compute the z-score, showing how many standard deviations the value is from the mean."
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
          "item": "https://unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Statistics Calculators",
          "item": "https://unitedcalculator.net/statistics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Z-Score Calculator",
          "item": "https://unitedcalculator.net/statistics/z-score-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Raw Score (X)</label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter raw score"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mean (μ)</label>
            <input
              type="number"
              value={mean}
              onChange={(e) => setMean(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter mean"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Standard Deviation (σ)
            </label>
            <input
              type="number"
              value={stdDev}
              onChange={(e) => setStdDev(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter standard deviation"
            />
          </div>

          <button
            onClick={calculateZScore}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate Z-Score
          </button>
        </div>

        {zScore !== null && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Z-Score Result
            </h2>
            <div className="text-green-600 font-bold text-2xl">{zScore}</div>
          </section>
        )}
      </div>
    </>
  );
};

export default ZScoreCalculator;
