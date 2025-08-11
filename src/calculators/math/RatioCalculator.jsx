import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RatioCalculator = () => {
  const [valueA, setValueA] = useState("8");
  const [valueB, setValueB] = useState("12");
  const [simplifiedRatio, setSimplifiedRatio] = useState("");

  const calculateGCD = (a, b) => {
    if (!b) return a;
    return calculateGCD(b, a % b);
  };

  const calculateRatio = () => {
    const a = parseFloat(valueA);
    const b = parseFloat(valueB);

    if (isNaN(a) || isNaN(b) || b === 0) {
      setSimplifiedRatio("Invalid input");
      return;
    }

    const gcd = calculateGCD(a, b);
    const simplifiedA = a / gcd;
    const simplifiedB = b / gcd;

    setSimplifiedRatio(`${simplifiedA} : ${simplifiedB}`);
  };

  return (
    <>
      <Helmet>
        <title>Ratio Calculator | Calculate Ratios Quickly and Easily</title>
        <meta
          name="description"
          content="Use our Ratio Calculator to quickly compute ratios between numbers. Ideal for students, professionals, and everyday calculations."
        />
        <meta
          name="keywords"
          content="ratio calculator, calculate ratio, ratio math calculator, math calculator, proportion calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/ratio-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ratio Calculator | Calculate Ratios Quickly and Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate ratios between numbers using our easy-to-use Ratio Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/ratio-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Ratio Calculator",
  "url": "https://www.unitedcalculator.net/math/ratio-calculator",
  "description": "Calculate ratios between numbers quickly and accurately with our Ratio Calculator.",
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
      "name": "What is a ratio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A ratio is a way to compare two or more quantities showing their relative sizes."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Ratio Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the quantities you want to compare, and the calculator will provide the simplified ratio."
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
      "name": "Ratio Calculator",
      "item": "https://www.unitedcalculator.net/math/ratio-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">First Value</label>
            <input
              type="number"
              value={valueA}
              onChange={(e) => setValueA(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter first value"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Second Value</label>
            <input
              type="number"
              value={valueB}
              onChange={(e) => setValueB(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter second value"
            />
          </div>

          <button
            onClick={calculateRatio}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate Ratio
          </button>
        </div>

        {simplifiedRatio && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Simplified Ratio
            </h2>
            <div className="text-green-600 font-bold text-2xl">
              {simplifiedRatio}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RatioCalculator;
