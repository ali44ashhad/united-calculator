import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MassCalculator = () => {
  const [density, setDensity] = useState("");
  const [volume, setVolume] = useState("");
  const [mass, setMass] = useState(null);

  const calculateMass = () => {
    const d = parseFloat(density);
    const v = parseFloat(volume);

    if (!isNaN(d) && !isNaN(v)) {
      const result = d * v;
      setMass(result.toFixed(2));
    } else {
      setMass(null);
    }
  };

  const handleReset = () => {
    setDensity("");
    setVolume("");
    setMass(null);
  };

  return (
    <>
      <Helmet>
        <title>Mass Calculator | Convert and Calculate Mass Easily</title>
        <meta
          name="description"
          content="Use our Mass Calculator to convert and calculate mass between different units quickly and accurately."
        />
        <meta
          name="keywords"
          content="mass calculator, mass conversion calculator, weight calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/mass-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mass Calculator | Convert and Calculate Mass Easily"
        />
        <meta
          property="og:description"
          content="Quickly convert and calculate mass between different units using our Mass Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/mass-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mass Calculator",
  "url": "https://www.unitedcalculator.net/other/mass-calculator",
  "description": "Convert and calculate mass easily between various units with our Mass Calculator.",
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
      "name": "What is a Mass Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Mass Calculator helps you convert and calculate mass between different units quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Mass Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the mass value and select the units to convert or calculate mass accordingly."
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
      "name": "Mass Calculator",
      "item": "https://www.unitedcalculator.net/other/mass-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
          Mass Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Density (kg/m³)</label>
            <input
              type="number"
              value={density}
              onChange={(e) => setDensity(e.target.value)}
              placeholder="Enter density"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Volume (m³)</label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Enter volume"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={calculateMass}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded w-full"
            >
              Reset
            </button>
          </div>
        </div>

        {mass !== null && (
          <section className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Result:
            </h3>
            <p className="text-2xl font-bold text-blue-800">{mass} kg</p>
          </section>
        )}
      </div>
    </>
  );
};

export default MassCalculator;
