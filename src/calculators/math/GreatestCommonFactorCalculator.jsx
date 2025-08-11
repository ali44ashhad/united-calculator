import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const GreatestCommonFactorCalculator = () => {
  const [num1, setNum1] = useState("48");
  const [num2, setNum2] = useState("18");

  const calculateGCF = () => {
    let a = parseInt(num1);
    let b = parseInt(num2);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) return null;

    // Euclidean algorithm
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    return {
      number1: parseInt(num1),
      number2: parseInt(num2),
      gcf: a,
    };
  };

  const result = calculateGCF();

  return (
    <>
      <Helmet>
        <title>Greatest Common Factor Calculator | Find GCF of Numbers</title>
        <meta
          name="description"
          content="Use our Greatest Common Factor Calculator to quickly find the largest common factor of two or more numbers. Ideal for students and math professionals."
        />
        <meta
          name="keywords"
          content="greatest common factor calculator, GCF calculator, highest common factor calculator, common factor calculator, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/greatest-common-factor-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Greatest Common Factor Calculator | Find GCF of Numbers"
        />
        <meta
          property="og:description"
          content="Instantly calculate the Greatest Common Factor (GCF) of two or more numbers using our easy-to-use Greatest Common Factor Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/greatest-common-factor-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Greatest Common Factor Calculator",
  "url": "https://www.unitedcalculator.net/math/greatest-common-factor-calculator",
  "description": "Find the Greatest Common Factor (GCF) of two or more numbers instantly with our calculator.",
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
      "name": "What is the Greatest Common Factor (GCF)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Greatest Common Factor is the largest number that divides two or more numbers exactly without leaving a remainder."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Greatest Common Factor Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input two or more numbers, and the calculator will instantly provide the greatest common factor."
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
      "name": "Greatest Common Factor Calculator",
      "item": "https://www.unitedcalculator.net/math/greatest-common-factor-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">First Number</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 48"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Second Number</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 18"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Greatest Common Factor (GCF)
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Number 1:</span>
                <span className="text-yellow-600 font-medium">
                  {result.number1}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Number 2:</span>
                <span className="text-green-600 font-medium">
                  {result.number2}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">GCF:</span>
                <span className="text-blue-600">{result.gcf}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default GreatestCommonFactorCalculator;
