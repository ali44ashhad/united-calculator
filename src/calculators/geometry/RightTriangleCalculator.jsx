import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RightTriangleCalculator = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [hypotenuse, setHypotenuse] = useState("");
  const [missingSide, setMissingSide] = useState("");

  const calculateHypotenuse = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      setHypotenuse("Invalid input");
      return;
    }

    const c = Math.sqrt(a * a + b * b);
    setHypotenuse(c.toFixed(2));
    setMissingSide("");
  };

  const calculateMissingSide = () => {
    const a = parseFloat(sideA);
    const c = parseFloat(sideB);

    if (isNaN(a) || isNaN(c) || a <= 0 || c <= 0 || c <= a) {
      setMissingSide("Invalid input");
      return;
    }

    const b = Math.sqrt(c * c - a * a);
    setMissingSide(b.toFixed(2));
    setHypotenuse("");
  };

  return (
    <>
      <Helmet>
        <title>
          Right Triangle Calculator | Solve Right-Angled Triangle Sides & Angles
        </title>
        <meta
          name="description"
          content="Use our Right Triangle Calculator to calculate sides, angles, height, area, and perimeter of any right-angled triangle. Easy trigonometry and geometry calculator for fast solutions."
        />
        <meta
          name="keywords"
          content="right triangle calculator, triangle side calculator, angle calculator, right-angled triangle solver, triangle height calculator, trigonometry calculator, triangle geometry calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/geometry/right-triangle-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Right Triangle Calculator | Solve Right-Angled Triangle Sides & Angles"
        />
        <meta
          property="og:description"
          content="Calculate sides, angles, height, area, and perimeter of a right triangle with this free Right Triangle Calculator. Use simple trigonometry and geometry formulas to solve any triangle."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/geometry/right-triangle-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Right Triangle Calculator",
      "url": "https://www.unitedcalculator.net/geometry/right-triangle-calculator",
      "description": "Use this Right Triangle Calculator to solve for any side or angle of a right-angled triangle. It calculates height, area, perimeter, and unknowns using trigonometric functions and geometry rules.",
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
          "name": "What is a right triangle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A right triangle is a type of triangle that has one angle measuring exactly 90 degrees. The side opposite this right angle is called the hypotenuse."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate a right triangle's sides or angles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate sides or angles of a right triangle, you can use trigonometric ratios like sine, cosine, and tangent or apply the Pythagorean theorem if two sides are known."
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
          "name": "Geometry Calculators",
          "item": "https://www.unitedcalculator.net/geometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Right Triangle Calculator",
          "item": "https://www.unitedcalculator.net/geometry/right-triangle-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md max-w-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Side A (Base or Leg)
            </label>
            <input
              type="number"
              value={sideA}
              onChange={(e) => setSideA(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter side A"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              {hypotenuse || missingSide
                ? "Side B (Second Leg or Hypotenuse)"
                : "Side B"}
            </label>
            <input
              type="number"
              value={sideB}
              onChange={(e) => setSideB(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter side B"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <button
              onClick={calculateHypotenuse}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Calculate Hypotenuse
            </button>
            <button
              onClick={calculateMissingSide}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Calculate Missing Side
            </button>
          </div>
        </div>

        {(hypotenuse || missingSide) && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
            {hypotenuse && (
              <div className="text-blue-600 font-bold text-xl">
                Hypotenuse = {hypotenuse}
              </div>
            )}
            {missingSide && (
              <div className="text-green-600 font-bold text-xl">
                Missing Side = {missingSide}
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default RightTriangleCalculator;
