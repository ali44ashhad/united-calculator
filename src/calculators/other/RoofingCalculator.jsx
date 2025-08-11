import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RoofingCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [pitch, setPitch] = useState("");
  const [area, setArea] = useState(null);

  const calculateRoofingArea = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const p = parseFloat(pitch);

    if (isNaN(l) || isNaN(w) || isNaN(p)) {
      setArea("Please enter valid values");
      return;
    }

    const pitchFactor = Math.sqrt(1 + Math.pow(p / 12, 2));
    const totalArea = (l * w * pitchFactor).toFixed(2);
    setArea(totalArea);
  };

  return (
    <>
      <Helmet>
        <title>Roofing Calculator | Estimate Roofing Materials & Costs</title>
        <meta
          name="description"
          content="Use our Roofing Calculator to estimate the amount of roofing materials and costs for your roofing project accurately."
        />
        <meta
          name="keywords"
          content="roofing calculator, roofing materials calculator, roofing cost estimator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/roofing-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Roofing Calculator | Estimate Roofing Materials & Costs"
        />
        <meta
          property="og:description"
          content="Estimate roofing materials and costs easily with our Roofing Calculator for your roofing projects."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/roofing-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Roofing Calculator",
  "url": "https://www.unitedcalculator.net/other/roofing-calculator",
  "description": "Accurately estimate roofing materials and costs for your roofing project using our Roofing Calculator.",
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
      "name": "What is a Roofing Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Roofing Calculator helps you estimate the amount of roofing materials and the cost required for a roofing project."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Roofing Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the dimensions of your roof and other relevant details, and the calculator will estimate materials and cost."
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
      "name": "Roofing Calculator",
      "item": "https://www.unitedcalculator.net/other/roofing-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Roofing Calculator
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Roof Length (ft)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter roof length"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Roof Width (ft)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter roof width"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Roof Pitch (rise per 12 inches of run)
          </label>
          <input
            type="number"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter roof pitch (e.g. 4 for 4/12)"
          />
        </div>

        <button
          onClick={calculateRoofingArea}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Calculate Area
        </button>

        {area && (
          <div className="mt-4 text-center text-lg font-semibold">
            Total Roofing Area:{" "}
            <span className="text-blue-700">{area} sq ft</span>
          </div>
        )}
      </div>
    </>
  );
};

export default RoofingCalculator;
