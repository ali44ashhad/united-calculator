import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ConfidenceIntervalCalculator = () => {
  const [mean, setMean] = useState("100");
  const [stdDev, setStdDev] = useState("15");
  const [sampleSize, setSampleSize] = useState("30");
  const [confidenceLevel, setConfidenceLevel] = useState("95");

  const getZValue = (confidence) => {
    const zTable = {
      90: 1.645,
      95: 1.96,
      99: 2.576,
    };
    return zTable[confidence] || 1.96; // default to 95%
  };

  const calculateCI = () => {
    const x̄ = parseFloat(mean);
    const σ = parseFloat(stdDev);
    const n = parseInt(sampleSize);
    const z = getZValue(confidenceLevel);

    if (isNaN(x̄) || isNaN(σ) || isNaN(n) || n <= 0) return null;

    const margin = z * (σ / Math.sqrt(n));
    const lower = x̄ - margin;
    const upper = x̄ + margin;

    return {
      lower: lower.toFixed(2),
      upper: upper.toFixed(2),
      margin: margin.toFixed(2),
    };
  };

  const result = calculateCI();

  return (
    <>
      <Helmet>
        <title>
          Confidence Interval Calculator | Calculate Confidence Intervals
        </title>
        <meta
          name="description"
          content="Use our Confidence Interval Calculator to easily compute confidence intervals for population means and proportions. Ideal for students, researchers, and statisticians."
        />
        <meta
          name="keywords"
          content="confidence interval calculator, statistical calculator, confidence level calculator, interval estimation, math calculator, population mean calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/confidence-interval-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Confidence Interval Calculator | Calculate Confidence Intervals"
        />
        <meta
          property="og:description"
          content="Calculate confidence intervals for means and proportions quickly and accurately with our Confidence Interval Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/confidence-interval-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Confidence Interval Calculator",
  "url": "https://www.unitedcalculator.net/math/confidence-interval-calculator",
  "description": "Calculate confidence intervals for population means and proportions with ease using our Confidence Interval Calculator.",
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
      "name": "What is a confidence interval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A confidence interval is a range of values used to estimate a population parameter with a specified level of confidence."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Confidence Interval Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input your sample size, sample mean or proportion, and confidence level to calculate the confidence interval instantly."
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
      "name": "math Calculators",
      "item": "https://www.unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Confidence Interval Calculator",
      "item": "https://www.unitedcalculator.net/math/confidence-interval-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Sample Mean (x̄)</label>
            <input
              type="number"
              value={mean}
              onChange={(e) => setMean(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
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
              placeholder="e.g. 15"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Sample Size (n)</label>
            <input
              type="number"
              value={sampleSize}
              onChange={(e) => setSampleSize(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Confidence Level (%)
            </label>
            <select
              value={confidenceLevel}
              onChange={(e) => setConfidenceLevel(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="90">90%</option>
              <option value="95">95%</option>
              <option value="99">99%</option>
            </select>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Confidence Interval Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Margin of Error:</span>
                <span className="text-yellow-600 font-medium">
                  ±{result.margin}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Confidence Interval:</span>
                <span className="text-blue-600">
                  {result.lower} to {result.upper}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ConfidenceIntervalCalculator;
