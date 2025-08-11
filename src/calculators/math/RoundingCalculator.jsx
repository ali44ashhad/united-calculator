import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RoundingCalculator = () => {
  const [number, setNumber] = useState("123.45678");
  const [decimals, setDecimals] = useState("2");
  const [result, setResult] = useState("");

  const calculateRounded = () => {
    const num = parseFloat(number);
    const decimalPlaces = parseInt(decimals);

    if (isNaN(num) || isNaN(decimalPlaces) || decimalPlaces < 0) {
      setResult("Invalid input");
      return;
    }

    const rounded = num.toFixed(decimalPlaces);
    setResult(rounded);
  };

  return (
    <>
      <Helmet>
        <title>
          Rounding Calculator | Round Numbers Quickly and Accurately
        </title>
        <meta
          name="description"
          content="Use our Rounding Calculator to easily round numbers to the nearest integer, decimal place, or significant figure. Perfect for students and professionals."
        />
        <meta
          name="keywords"
          content="rounding calculator, round numbers, nearest integer calculator, round decimal places, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/rounding-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rounding Calculator | Round Numbers Quickly and Accurately"
        />
        <meta
          property="og:description"
          content="Quickly round numbers to the nearest integer, decimal place, or significant figure using our easy-to-use Rounding Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/rounding-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Rounding Calculator",
  "url": "https://www.unitedcalculator.net/math/rounding-calculator",
  "description": "Easily round numbers to the desired decimal place or significant figure with our Rounding Calculator.",
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
      "name": "What is rounding in math?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rounding is the process of reducing the digits in a number while keeping its value close to the original number."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Rounding Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the number and the place to which you want to round, and the calculator will provide the rounded result."
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
      "name": "Rounding Calculator",
      "item": "https://www.unitedcalculator.net/math/rounding-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Number</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter number to round"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Decimal Places</label>
            <input
              type="number"
              value={decimals}
              onChange={(e) => setDecimals(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter number of decimal places"
            />
          </div>

          <button
            onClick={calculateRounded}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Round Number
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

export default RoundingCalculator;
