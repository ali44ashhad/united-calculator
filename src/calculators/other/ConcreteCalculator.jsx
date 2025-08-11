import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ConcreteCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const calculateConcrete = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if (isNaN(l) || isNaN(w) || isNaN(d)) return null;

    // Convert depth from inches to feet
    const depthInFeet = d / 12;

    // Volume in cubic feet
    const volumeCubicFeet = l * w * depthInFeet;

    // Convert to cubic yards (1 cubic yard = 27 cubic feet)
    const volumeCubicYards = volumeCubicFeet / 27;

    return {
      cubicFeet: volumeCubicFeet.toFixed(2),
      cubicYards: volumeCubicYards.toFixed(2),
    };
  };

  const result = calculateConcrete();

  return (
    <>
      <Helmet>
        <title>
          Concrete Calculator | Estimate Concrete Volume and Quantity
        </title>
        <meta
          name="description"
          content="Use our Concrete Calculator to accurately estimate the volume and quantity of concrete needed for your construction projects."
        />
        <meta
          name="keywords"
          content="concrete calculator, concrete volume calculator, construction calculator, estimate concrete quantity, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/concrete-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Concrete Calculator | Estimate Concrete Volume and Quantity"
        />
        <meta
          property="og:description"
          content="Quickly estimate the amount of concrete needed for your construction projects with our easy-to-use Concrete Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/concrete-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Concrete Calculator",
  "url": "https://www.unitedcalculator.net/other/concrete-calculator",
  "description": "Estimate concrete volume and quantity accurately for your construction needs using our Concrete Calculator.",
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
      "name": "What is a Concrete Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Concrete Calculator helps estimate the volume and quantity of concrete required for a construction project."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Concrete Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the dimensions of the area to be concreted, and the calculator will provide the estimated concrete volume."
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
      "name": "Concrete Calculator",
      "item": "https://www.unitedcalculator.net/other/concrete-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Length (ft)</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Width (ft)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 8"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Depth (inches)</label>
            <input
              type="number"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Concrete Volume Estimate
            </h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Total Volume:</span>
                <span>{result.cubicFeet} cubic feet</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Concrete Needed:</span>
                <span className="text-blue-600">
                  {result.cubicYards} cubic yards
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ConcreteCalculator;
