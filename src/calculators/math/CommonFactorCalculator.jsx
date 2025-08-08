import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CommonFactorCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [factors, setFactors] = useState([]);

  const calculateCommonFactors = () => {
    const a = parseInt(num1);
    const b = parseInt(num2);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      setFactors("Invalid input. Enter positive integers.");
      return;
    }

    const min = Math.min(a, b);
    const result = [];

    for (let i = 1; i <= min; i++) {
      if (a % i === 0 && b % i === 0) {
        result.push(i);
      }
    }

    setFactors(result);
  };

  return (
    <>
      <Helmet>
        <title>Common Factor Calculator | Find GCF & HCF of Numbers</title>
        <meta
          name="description"
          content="Use our Common Factor Calculator to quickly find the Greatest Common Factor (GCF) or Highest Common Factor (HCF) of two or more numbers. Perfect for math students and professionals."
        />
        <meta
          name="keywords"
          content="common factor calculator, GCF calculator, HCF calculator, greatest common factor calculator, highest common factor calculator, math calculator, number factors calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/math/common-factor-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Common Factor Calculator | Find GCF & HCF of Numbers"
        />
        <meta
          property="og:description"
          content="Easily calculate the Greatest Common Factor (GCF) or Highest Common Factor (HCF) of two or more numbers using our Common Factor Calculator."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/math/common-factor-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Common Factor Calculator",
  "url": "https://unitedcalculator.net/math/common-factor-calculator",
  "description": "Find the Greatest Common Factor (GCF) or Highest Common Factor (HCF) of two or more numbers instantly using our Common Factor Calculator.",
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
      "name": "What is a common factor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A common factor is a number that divides exactly into two or more numbers. For example, 2 is a common factor of 4 and 6."
      }
    },
    {
      "@type": "Question",
      "name": "How do you find the Greatest Common Factor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find the Greatest Common Factor (GCF), list all factors of each number and choose the largest number that appears in both lists. Our Common Factor Calculator does this instantly for you."
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
      "name": "Math Calculators",
      "item": "https://unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Common Factor Calculator",
      "item": "https://unitedcalculator.net/math/common-factor-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Common Factor Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">First Number</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 60"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Second Number</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 48"
            />
          </div>

          <button
            onClick={calculateCommonFactors}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition"
          >
            Calculate
          </button>
        </div>

        {factors && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Common Factors
            </h3>
            {typeof factors === "string" ? (
              <p className="text-red-600">{factors}</p>
            ) : (
              <p className="text-blue-600 break-words">{factors.join(", ")}</p>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default CommonFactorCalculator;
