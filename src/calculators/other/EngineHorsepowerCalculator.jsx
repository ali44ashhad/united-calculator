import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const EngineHorsepowerCalculator = () => {
  const [torque, setTorque] = useState("");
  const [rpm, setRPM] = useState("");

  const calculateHorsepower = () => {
    const T = parseFloat(torque);
    const R = parseFloat(rpm);

    if (isNaN(T) || isNaN(R) || R <= 0) return null;

    const hp = (T * R) / 5252;
    return hp.toFixed(2);
  };

  const result = calculateHorsepower();

  return (
    <>
      <Helmet>
        <title>
          Engine Horsepower Calculator | Calculate Engine Power Easily
        </title>
        <meta
          name="description"
          content="Use our Engine Horsepower Calculator to quickly estimate the horsepower of your engine based on key parameters."
        />
        <meta
          name="keywords"
          content="engine horsepower calculator, horsepower calculator, engine power calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/engine-horsepower-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Engine Horsepower Calculator | Calculate Engine Power Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate the horsepower of an engine with our easy-to-use Engine Horsepower Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/engine-horsepower-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Engine Horsepower Calculator",
  "url": "https://www.unitedcalculator.net/other/engine-horsepower-calculator",
  "description": "Estimate engine horsepower based on key parameters using our Engine Horsepower Calculator.",
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
      "name": "What is an Engine Horsepower Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Engine Horsepower Calculator estimates the horsepower output of an engine based on input parameters."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Engine Horsepower Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the required engine specifications, and the calculator will compute the estimated horsepower."
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
      "name": "Engine Horsepower Calculator",
      "item": "https://www.unitedcalculator.net/other/engine-horsepower-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Torque (lb-ft)</label>
            <input
              type="number"
              value={torque}
              onChange={(e) => setTorque(e.target.value)}
              placeholder="e.g. 350"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">RPM</label>
            <input
              type="number"
              value={rpm}
              onChange={(e) => setRPM(e.target.value)}
              placeholder="e.g. 6000"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Engine Horsepower Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Horsepower:</span>
              <span className="text-blue-600">{result} HP</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default EngineHorsepowerCalculator;
