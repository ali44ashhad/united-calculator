import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const FactorCalculator = () => {
  const [number, setNumber] = useState("28");

  const calculateFactors = () => {
    const num = parseInt(number);

    if (isNaN(num) || num <= 0) return null;

    const factors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        factors.push(i);
        if (i !== num / i) {
          factors.push(num / i);
        }
      }
    }

    return {
      number: num,
      factors: factors.sort((a, b) => a - b),
    };
  };

  const result = calculateFactors();

  return (
    <>
      <Helmet>
        <title>Factor Calculator | Find Factors of a Number</title>
        <meta
          name="description"
          content="Use our Factor Calculator to quickly find all factors of any number. Ideal for students, teachers, and math enthusiasts."
        />
        <meta
          name="keywords"
          content="factor calculator, find factors, factors of a number, math calculator, number factors"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/factor-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Factor Calculator | Find Factors of a Number"
        />
        <meta
          property="og:description"
          content="Quickly find all factors of a given number using our easy-to-use Factor Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/factor-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Factor Calculator",
  "url": "https://www.unitedcalculator.net/math/factor-calculator",
  "description": "Find all factors of a number instantly using our Factor Calculator.",
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
      "name": "What is a factor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A factor is a number that divides another number exactly without leaving a remainder."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find factors of a number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find factors, divide the number by all integers from 1 up to that number and list the divisors that result in no remainder. Our Factor Calculator does this instantly."
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
      "name": "Factor Calculator",
      "item": "https://www.unitedcalculator.net/math/factor-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Enter a Number</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 28"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Factors of {result.number}
            </h2>
            <div className="text-blue-600 font-medium text-lg">
              {result.factors.join(", ")}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default FactorCalculator;
