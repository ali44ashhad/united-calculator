import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SpeedCalculator = () => {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [speed, setSpeed] = useState(null);

  const calculateSpeed = () => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (isNaN(d) || isNaN(t) || t === 0) {
      setSpeed(null);
      return;
    }

    const result = d / t;
    setSpeed(result.toFixed(2));
  };

  const resetFields = () => {
    setDistance("");
    setTime("");
    setSpeed(null);
  };

  return (
    <>
      <Helmet>
        <title>Speed Calculator | Calculate Speed, Distance & Time</title>
        <meta
          name="description"
          content="Use our Speed Calculator to quickly calculate speed, distance, or time in various motion problems."
        />
        <meta
          name="keywords"
          content="speed calculator, distance calculator, time calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/speed-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Speed Calculator | Calculate Speed, Distance & Time"
        />
        <meta
          property="og:description"
          content="Quickly calculate speed, distance, or time using our easy Speed Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/speed-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Speed Calculator",
  "url": "https://www.unitedcalculator.net/other/speed-calculator",
  "description": "Calculate speed, distance, or time in motion problems quickly and easily with our Speed Calculator.",
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
      "name": "What is a Speed Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Speed Calculator helps you determine speed, distance, or time given two of the three variables."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Speed Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter any two values among speed, distance, and time, and the calculator will compute the third."
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
      "name": "Speed Calculator",
      "item": "https://www.unitedcalculator.net/other/speed-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Speed Calculator
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="e.g., 100"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Time (hours)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="e.g., 2"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={calculateSpeed}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Calculate
          </button>
          <button
            onClick={resetFields}
            className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>

        {speed !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold text-green-600">
              Speed: {speed} km/h
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default SpeedCalculator;
