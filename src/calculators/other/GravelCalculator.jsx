import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const GravelCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [density, setDensity] = useState("1600"); // Default in kg/m³ (common gravel)

  const calculateGravel = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const dens = parseFloat(density);

    if (isNaN(l) || isNaN(w) || isNaN(d) || isNaN(dens)) return null;

    const volume = l * w * (d / 100); // m³
    const weight = volume * dens; // kg
    const tons = weight / 1000; // metric tons

    return {
      volume: volume.toFixed(2),
      weight: weight.toFixed(2),
      tons: tons.toFixed(2),
    };
  };

  const result = calculateGravel();

  return (
    <>
      <Helmet>
        <title>
          Gravel Calculator | Calculate Gravel Needed for Your Project
        </title>
        <meta
          name="description"
          content="Use our Gravel Calculator to estimate the amount of gravel required for your construction or landscaping project."
        />
        <meta
          name="keywords"
          content="gravel calculator, gravel quantity calculator, construction calculator, landscaping calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/gravel-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gravel Calculator | Calculate Gravel Needed for Your Project"
        />
        <meta
          property="og:description"
          content="Estimate the amount of gravel required quickly and accurately for your construction or landscaping project using our Gravel Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/gravel-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Gravel Calculator",
  "url": "https://www.unitedcalculator.net/other/gravel-calculator",
  "description": "Calculate the gravel quantity needed for your project easily using our Gravel Calculator.",
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
      "name": "What is a Gravel Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Gravel Calculator estimates the amount of gravel needed for construction or landscaping projects."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Gravel Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input the area dimensions and depth to calculate the quantity of gravel required."
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
      "name": "Gravel Calculator",
      "item": "https://www.unitedcalculator.net/other/gravel-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Length (meters)</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="e.g. 10"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Width (meters)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="e.g. 5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Depth (cm)</label>
            <input
              type="number"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
              placeholder="e.g. 15"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Gravel Density (kg/m³)
            </label>
            <input
              type="number"
              value={density}
              onChange={(e) => setDensity(e.target.value)}
              placeholder="e.g. 1600"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Gravel Estimate
            </h2>
            <div className="space-y-2 text-gray-800 text-lg font-medium">
              <div className="flex justify-between">
                <span>Volume:</span>
                <span>{result.volume} m³</span>
              </div>
              <div className="flex justify-between">
                <span>Weight:</span>
                <span>{result.weight} kg</span>
              </div>
              <div className="flex justify-between">
                <span>Weight (Tons):</span>
                <span>{result.tons} metric tons</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default GravelCalculator;
