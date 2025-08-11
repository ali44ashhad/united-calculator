import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MulchCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [result, setResult] = useState("");

  const calculateMulch = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if (isNaN(l) || isNaN(w) || isNaN(d)) {
      setResult("Please enter valid numbers.");
      return;
    }

    const volume = (l * w * (d / 12)) / 27; // Convert to cubic yards
    setResult(
      `You need approximately ${volume.toFixed(2)} cubic yards of mulch.`
    );
  };

  const clearFields = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setResult("");
  };

  return (
    <>
      <Helmet>
        <title>Mulch Calculator | Calculate Mulch Needed for Your Garden</title>
        <meta
          name="description"
          content="Use our Mulch Calculator to estimate the amount of mulch required for your garden or landscaping project."
        />
        <meta
          name="keywords"
          content="mulch calculator, garden mulch calculator, landscaping mulch calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/mulch-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mulch Calculator | Calculate Mulch Needed for Your Garden"
        />
        <meta
          property="og:description"
          content="Estimate the amount of mulch needed for your garden or landscaping project easily with our Mulch Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/mulch-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mulch Calculator",
  "url": "https://www.unitedcalculator.net/other/mulch-calculator",
  "description": "Quickly calculate the amount of mulch needed for your garden or landscaping using our Mulch Calculator.",
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
      "name": "What is a Mulch Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Mulch Calculator helps you estimate the amount of mulch required to cover a specific area in your garden or landscape."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Mulch Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the dimensions of the area to be covered and the desired mulch depth, and the calculator will estimate the amount of mulch needed."
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
      "name": "Other Calculators",
      "item": "https://www.unitedcalculator.net/other"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Mulch Calculator",
      "item": "https://www.unitedcalculator.net/other/mulch-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Mulch Calculator
        </h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Length (feet)"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl"
          />
          <input
            type="number"
            placeholder="Width (feet)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl"
          />
          <input
            type="number"
            placeholder="Depth (inches)"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl"
          />

          <div className="flex justify-between gap-4">
            <button
              onClick={calculateMulch}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
            >
              Calculate
            </button>
            <button
              onClick={clearFields}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-xl"
            >
              Clear
            </button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-blue-50 border rounded-xl text-blue-700">
              {result}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MulchCalculator;
