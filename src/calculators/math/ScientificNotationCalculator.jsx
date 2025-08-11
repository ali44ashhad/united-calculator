import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ScientificNotationCalculator = () => {
  const [number, setNumber] = useState("");
  const [scientific, setScientific] = useState("");
  const [fromScientific, setFromScientific] = useState("");
  const [converted, setConverted] = useState("");

  const convertToScientific = () => {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      setScientific(num.toExponential());
    } else {
      setScientific("Invalid input");
    }
  };

  const convertFromScientific = () => {
    try {
      const value = Number(fromScientific);
      if (!isNaN(value)) {
        setConverted(value.toString());
      } else {
        setConverted("Invalid input");
      }
    } catch {
      setConverted("Invalid input");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Scientific Notation Calculator | Convert Numbers to Scientific
          Notation
        </title>
        <meta
          name="description"
          content="Use our Scientific Notation Calculator to easily convert numbers to and from scientific notation. Perfect for students and professionals."
        />
        <meta
          name="keywords"
          content="scientific notation calculator, convert to scientific notation, scientific notation converter, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/scientific-notation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Scientific Notation Calculator | Convert Numbers to Scientific Notation"
        />
        <meta
          property="og:description"
          content="Easily convert numbers to and from scientific notation using our easy-to-use Scientific Notation Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/scientific-notation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Scientific Notation Calculator",
  "url": "https://www.unitedcalculator.net/math/scientific-notation-calculator",
  "description": "Convert numbers to and from scientific notation quickly and accurately with our Scientific Notation Calculator.",
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
      "name": "What is scientific notation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scientific notation is a way to express very large or very small numbers using powers of ten."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Scientific Notation Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the number you want to convert, and the calculator will display it in scientific notation or convert it back."
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
      "name": "Scientific Notation Calculator",
      "item": "https://www.unitedcalculator.net/math/scientific-notation-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          Scientific Notation Calculator
        </h2>

        <div className="mb-6">
          <label className="block mb-1 font-medium">
            Number to Convert to Scientific Notation
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            placeholder="Enter a number"
          />
          <button
            onClick={convertToScientific}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Convert to Scientific Notation
          </button>
          {scientific && (
            <div className="mt-2 text-green-600 font-medium">
              Result: {scientific}
            </div>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Scientific Notation to Convert to Number
          </label>
          <input
            type="text"
            value={fromScientific}
            onChange={(e) => setFromScientific(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            placeholder="Enter scientific notation (e.g., 1.23e4)"
          />
          <button
            onClick={convertFromScientific}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Convert to Standard Number
          </button>
          {converted && (
            <div className="mt-2 text-green-600 font-medium">
              Result: {converted}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ScientificNotationCalculator;
