import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DensityCalculator = () => {
  const [mass, setMass] = useState("");
  const [volume, setVolume] = useState("");

  const calculateDensity = () => {
    const m = parseFloat(mass);
    const v = parseFloat(volume);

    if (isNaN(m) || isNaN(v) || v === 0) return null;

    const density = m / v;
    return density.toFixed(3);
  };

  const result = calculateDensity();

  return (
    <>
      <Helmet>
        <title>Density Calculator | Calculate Density of Objects Easily</title>
        <meta
          name="description"
          content="Use our Density Calculator to quickly determine the density of an object by entering its mass and volume."
        />
        <meta
          name="keywords"
          content="density calculator, calculate density, mass and volume calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/density-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Density Calculator | Calculate Density of Objects Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate the density of any object by inputting its mass and volume with our easy Density Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/density-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Density Calculator",
  "url": "https://www.unitedcalculator.net/other/density-calculator",
  "description": "Determine the density of an object by entering its mass and volume using our Density Calculator.",
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
      "name": "What is a Density Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Density Calculator helps you find the density of an object by dividing its mass by its volume."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Density Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the mass and volume of the object, and the calculator will compute its density."
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
      "name": "Density Calculator",
      "item": "https://www.unitedcalculator.net/other/density-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Mass (kg)</label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              placeholder="e.g. 10"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Volume (m³)</label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="e.g. 2"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Density Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Density:</span>
              <span className="text-blue-600">{result} kg/m³</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DensityCalculator;
