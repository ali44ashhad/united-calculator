import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CircleCalculator = () => {
  const [radius, setRadius] = useState("");
  const [result, setResult] = useState(null);

  const calculateCircle = () => {
    const r = parseFloat(radius);
    if (isNaN(r) || r < 0) {
      setResult("Invalid radius");
      return;
    }

    const diameter = 2 * r;
    const circumference = 2 * Math.PI * r;
    const area = Math.PI * r * r;

    setResult({
      diameter: diameter.toFixed(2),
      circumference: circumference.toFixed(2),
      area: area.toFixed(2),
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Circle Calculator | Calculate Area, Circumference & Diameter
        </title>
        <meta
          name="description"
          content="Use our Circle Calculator to find the area, circumference, diameter, and radius of a circle. Perfect for students, teachers, and professionals needing quick and accurate circle measurements."
        />
        <meta
          name="keywords"
          content="circle calculator, area of a circle calculator, circumference calculator, diameter calculator, radius calculator, geometry calculator, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/math/circle-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Circle Calculator | Calculate Area, Circumference & Diameter"
        />
        <meta
          property="og:description"
          content="Quickly calculate a circle's area, circumference, diameter, and radius using our Circle Calculator. Simple and accurate."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/math/circle-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Circle Calculator",
  "url": "https://unitedcalculator.net/math/circle-calculator",
  "description": "Use the Circle Calculator to find the area, circumference, diameter, and radius of a circle quickly and accurately. Great for students, teachers, and professionals.",
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
      "name": "How do you calculate the area of a circle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The area of a circle is calculated using the formula π × radius². Enter the radius into the calculator to get the result instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Can the Circle Calculator find circumference and diameter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Circle Calculator can calculate area, circumference, diameter, and radius of a circle based on your input."
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
      "name": "Circle Calculator",
      "item": "https://unitedcalculator.net/math/circle-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Circle Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Radius (in units)</label>
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <button
            onClick={calculateCircle}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition"
          >
            Calculate
          </button>
        </div>

        {result && typeof result === "object" && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Circle Properties
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Diameter:</span>
                <span className="text-yellow-600 font-medium">
                  {result.diameter} units
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Circumference:</span>
                <span className="text-green-600 font-medium">
                  {result.circumference} units
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Area:</span>
                <span className="text-blue-600">{result.area} sq units</span>
              </div>
            </div>
          </section>
        )}

        {typeof result === "string" && (
          <p className="mt-4 text-red-600 font-medium">{result}</p>
        )}
      </div>
    </>
  );
};

export default CircleCalculator;
