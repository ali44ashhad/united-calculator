import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DistanceCalculator = () => {
  const [speed, setSpeed] = useState("60");
  const [time, setTime] = useState("2");

  const calculateDistance = () => {
    const s = parseFloat(speed);
    const t = parseFloat(time);

    if (isNaN(s) || isNaN(t) || s < 0 || t < 0) return null;

    const distance = s * t;

    return {
      distance: distance.toFixed(2),
      speed: s.toFixed(2),
      time: t.toFixed(2),
    };
  };

  const result = calculateDistance();

  return (
    <>
      <Helmet>
        <title>
          Distance Calculator | Calculate Distance Between Two Points
        </title>
        <meta
          name="description"
          content="Use our Distance Calculator to quickly find the distance between two points in 2D or 3D space. Perfect for students, engineers, and professionals."
        />
        <meta
          name="keywords"
          content="distance calculator, calculate distance, distance between two points, geometry calculator, 2D distance calculator, 3D distance calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/distance-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Distance Calculator | Calculate Distance Between Two Points"
        />
        <meta
          property="og:description"
          content="Easily calculate the distance between two points in 2D or 3D space using our Distance Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/distance-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Distance Calculator",
  "url": "https://www.unitedcalculator.net/math/distance-calculator",
  "description": "Calculate the distance between two points in 2D or 3D space quickly and accurately with our Distance Calculator.",
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
      "name": "What is the distance between two points?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The distance between two points is the length of the straight line connecting them, calculated using the distance formula."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate distance using the Distance Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the coordinates of the two points in 2D or 3D format, and the calculator will compute the distance instantly."
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
      "name": "Distance Calculator",
      "item": "https://www.unitedcalculator.net/math/distance-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Speed (km/h)</label>
            <input
              type="number"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 60"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Time (hours)</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Distance Calculation Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Speed:</span>
                <span className="text-yellow-600 font-medium">
                  {result.speed} km/h
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Time:</span>
                <span className="text-green-600 font-medium">
                  {result.time} hours
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Distance:</span>
                <span className="text-blue-600">{result.distance} km</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DistanceCalculator;
