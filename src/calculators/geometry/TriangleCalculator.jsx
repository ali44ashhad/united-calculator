import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const TriangleCalculator = () => {
  const [base, setBase] = useState("10");
  const [height, setHeight] = useState("5");
  const [sideA, setSideA] = useState("10");
  const [sideB, setSideB] = useState("6");
  const [sideC, setSideC] = useState("8");
  const [results, setResults] = useState({ area: "", perimeter: "" });

  const calculateTriangle = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);
    const a = parseFloat(sideA);
    const c = parseFloat(sideC);
    const d = parseFloat(sideB);

    if (
      isNaN(b) ||
      isNaN(h) ||
      isNaN(a) ||
      isNaN(c) ||
      isNaN(d) ||
      b <= 0 ||
      h <= 0 ||
      a <= 0 ||
      c <= 0 ||
      d <= 0
    ) {
      setResults({ area: "Invalid input", perimeter: "Invalid input" });
      return;
    }

    const area = 0.5 * b * h;
    const perimeter = a + c + d;

    setResults({
      area: area.toFixed(2),
      perimeter: perimeter.toFixed(2),
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Triangle Calculator | Find Area, Perimeter & Angles of Any Triangle
        </title>
        <meta
          name="description"
          content="Use our Triangle Calculator to calculate the area, perimeter, angles, and sides of any triangle type. Solve triangle problems using Heron's formula, SSS, SAS, ASA, and more."
        />
        <meta
          name="keywords"
          content="triangle calculator, triangle area calculator, triangle perimeter calculator, heron's formula calculator, triangle angle calculator, SSS triangle calculator, SAS triangle calculator, ASA triangle calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/geometry/triangle-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Triangle Calculator | Find Area, Perimeter & Angles of Any Triangle"
        />
        <meta
          property="og:description"
          content="Solve triangle problems with ease using our Triangle Calculator. Find area, perimeter, angles, and unknown sides using Heron's formula, trigonometry, and triangle theorems."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/geometry/triangle-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Triangle Calculator",
      "url": "https://unitedcalculator.net/geometry/triangle-calculator",
      "description": "This Triangle Calculator helps you find the area, perimeter, angles, and side lengths of any triangle. Supports all triangle types with SSS, SAS, ASA, and AAS solving methods.",
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
          "name": "How do I calculate the area of a triangle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The area of a triangle can be calculated using various formulas depending on the known values. The most common is ½ × base × height. For known sides, Heron's formula is used."
          }
        },
        {
          "@type": "Question",
          "name": "What methods does the Triangle Calculator use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Triangle Calculator supports solving using SSS (Side-Side-Side), SAS (Side-Angle-Side), ASA (Angle-Side-Angle), and Heron's formula. It calculates angles, area, perimeter, and missing sides."
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
          "name": "Geometry Calculators",
          "item": "https://unitedcalculator.net/geometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Triangle Calculator",
          "item": "https://unitedcalculator.net/geometry/triangle-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="grid gap-4">
          <div>
            <label className="block mb-1 font-medium">Base</label>
            <input
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter base"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Height</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter height"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Side A</label>
            <input
              type="number"
              value={sideA}
              onChange={(e) => setSideA(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter side A"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Side B</label>
            <input
              type="number"
              value={sideB}
              onChange={(e) => setSideB(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter side B"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Side C</label>
            <input
              type="number"
              value={sideC}
              onChange={(e) => setSideC(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter side C"
            />
          </div>

          <button
            onClick={calculateTriangle}
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
          >
            Calculate Area & Perimeter
          </button>
        </div>

        {results.area && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Results
            </h2>
            <p className="text-green-600 font-semibold text-lg">
              Area: {results.area} units²
            </p>
            <p className="text-blue-600 font-semibold text-lg">
              Perimeter: {results.perimeter} units
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TriangleCalculator;
