import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SlopeCalculator = () => {
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");
  const [slope, setSlope] = useState("");

  const calculateSlope = () => {
    const x1Val = parseFloat(x1);
    const y1Val = parseFloat(y1);
    const x2Val = parseFloat(x2);
    const y2Val = parseFloat(y2);

    if (isNaN(x1Val) || isNaN(y1Val) || isNaN(x2Val) || isNaN(y2Val)) {
      setSlope("Please enter valid numbers");
      return;
    }

    if (x2Val === x1Val) {
      setSlope("Undefined (division by zero)");
      return;
    }

    const result = (y2Val - y1Val) / (x2Val - x1Val);
    setSlope(result.toFixed(4));
  };

  return (
    <>
      <Helmet>
        <title>Slope Calculator | Calculate the Slope of a Line</title>
        <meta
          name="description"
          content="Use our Slope Calculator to quickly find the slope of a line given two points or an equation. Ideal for students and professionals."
        />
        <meta
          name="keywords"
          content="slope calculator, calculate slope, line slope calculator, math calculator, coordinate geometry"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/slope-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Slope Calculator | Calculate the Slope of a Line"
        />
        <meta
          property="og:description"
          content="Quickly calculate the slope of a line using two points or an equation with our easy-to-use Slope Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/slope-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Slope Calculator",
  "url": "https://www.unitedcalculator.net/math/slope-calculator",
  "description": "Calculate the slope of a line quickly and accurately with our Slope Calculator tool.",
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
      "name": "What is the slope of a line?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The slope of a line is a measure of its steepness, calculated as the change in y divided by the change in x between two points."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Slope Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter two points or the equation of the line, and the calculator will compute the slope for you."
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
      "name": "Slope Calculator",
      "item": "https://www.unitedcalculator.net/math/slope-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Slope Calculator</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium">x₁</label>
            <input
              type="number"
              value={x1}
              onChange={(e) => setX1(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter x₁"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">y₁</label>
            <input
              type="number"
              value={y1}
              onChange={(e) => setY1(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter y₁"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">x₂</label>
            <input
              type="number"
              value={x2}
              onChange={(e) => setX2(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter x₂"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">y₂</label>
            <input
              type="number"
              value={y2}
              onChange={(e) => setY2(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter y₂"
            />
          </div>
        </div>

        <button
          onClick={calculateSlope}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate Slope
        </button>

        {slope && (
          <div className="mt-4 text-green-600 font-medium text-center">
            Slope (m): {slope}
          </div>
        )}
      </div>
    </>
  );
};

export default SlopeCalculator;
