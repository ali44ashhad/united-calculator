import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ExponentCalculator = () => {
  const [base, setBase] = useState("2");
  const [exponent, setExponent] = useState("3");

  const calculateExponent = () => {
    const b = parseFloat(base);
    const e = parseFloat(exponent);

    if (isNaN(b) || isNaN(e)) return null;

    const result = Math.pow(b, e);

    return {
      base: b.toFixed(2),
      exponent: e.toFixed(2),
      result: result.toFixed(4),
    };
  };

  const result = calculateExponent();

  return (
    <>
      <Helmet>
        <title>Exponent Calculator | Calculate Powers & Exponents</title>
        <meta
          name="description"
          content="Use our Exponent Calculator to quickly compute powers and exponents of numbers. Ideal for students and professionals handling exponential calculations."
        />
        <meta
          name="keywords"
          content="exponent calculator, power calculator, calculate exponents, math calculator, exponential calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/exponent-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Exponent Calculator | Calculate Powers & Exponents"
        />
        <meta
          property="og:description"
          content="Quickly calculate powers and exponents of numbers with our easy-to-use Exponent Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/exponent-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Exponent Calculator",
  "url": "https://www.unitedcalculator.net/math/exponent-calculator",
  "description": "Calculate powers and exponents of numbers quickly and accurately using our Exponent Calculator.",
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
      "name": "What is an exponent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An exponent indicates how many times a number, known as the base, is multiplied by itself."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Exponent Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the base number and the exponent value, then the calculator will compute the power instantly."
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
      "name": "Exponent Calculator",
      "item": "https://www.unitedcalculator.net/math/exponent-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Base</label>
            <input
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Exponent</label>
            <input
              type="number"
              value={exponent}
              onChange={(e) => setExponent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 3"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Exponentiation Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Base:</span>
                <span className="text-yellow-600 font-medium">
                  {result.base}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Exponent:</span>
                <span className="text-green-600 font-medium">
                  {result.exponent}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Result:</span>
                <span className="text-blue-600">{result.result}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ExponentCalculator;
