import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const GasMileageCalculator = () => {
  const [distance, setDistance] = useState("");
  const [fuelUsed, setFuelUsed] = useState("");

  const calculateMPG = () => {
    const D = parseFloat(distance);
    const F = parseFloat(fuelUsed);

    if (isNaN(D) || isNaN(F) || F === 0) return null;

    const mpg = D / F;
    return mpg.toFixed(2);
  };

  const result = calculateMPG();

  return (
    <>
      <Helmet>
        <title>Gas Mileage Calculator | Calculate Fuel Efficiency Easily</title>
        <meta
          name="description"
          content="Use our Gas Mileage Calculator to determine your vehicle's fuel efficiency in miles per gallon (MPG) or liters per 100 kilometers."
        />
        <meta
          name="keywords"
          content="gas mileage calculator, fuel efficiency calculator, miles per gallon calculator, liters per 100 km calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/gas-mileage-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gas Mileage Calculator | Calculate Fuel Efficiency Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate your vehicle's gas mileage and fuel efficiency with our easy-to-use Gas Mileage Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/gas-mileage-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Gas Mileage Calculator",
  "url": "https://www.unitedcalculator.net/other/gas-mileage-calculator",
  "description": "Calculate your vehicle's fuel efficiency easily using miles per gallon or liters per 100 kilometers with our Gas Mileage Calculator.",
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
      "name": "What is a Gas Mileage Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Gas Mileage Calculator helps you calculate your vehicle's fuel efficiency in miles per gallon (MPG) or liters per 100 kilometers."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Gas Mileage Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the distance traveled and fuel consumed to get your vehicle's gas mileage or fuel efficiency."
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
      "name": "Gas Mileage Calculator",
      "item": "https://www.unitedcalculator.net/other/gas-mileage-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Distance Traveled (miles)
            </label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="e.g. 300"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Fuel Used (gallons)
            </label>
            <input
              type="number"
              value={fuelUsed}
              onChange={(e) => setFuelUsed(e.target.value)}
              placeholder="e.g. 10"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Gas Mileage Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Mileage:</span>
              <span className="text-blue-600">{result} MPG</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default GasMileageCalculator;
