import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const FuelCostCalculator = () => {
  const [distance, setDistance] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");

  const calculateFuelCost = () => {
    const D = parseFloat(distance);
    const M = parseFloat(mileage);
    const P = parseFloat(fuelPrice);

    if (isNaN(D) || isNaN(M) || isNaN(P) || M === 0) return null;

    const cost = (D / M) * P;
    return cost.toFixed(2);
  };

  const result = calculateFuelCost();

  return (
    <>
      <Helmet>
        <title>Fuel Cost Calculator | Estimate Your Fuel Expenses Easily</title>
        <meta
          name="description"
          content="Use our Fuel Cost Calculator to quickly estimate your fuel expenses based on distance, fuel efficiency, and fuel price."
        />
        <meta
          name="keywords"
          content="fuel cost calculator, fuel expenses calculator, estimate fuel cost, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/fuel-cost-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fuel Cost Calculator | Estimate Your Fuel Expenses Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate your fuel expenses based on distance traveled, fuel efficiency, and fuel price with our Fuel Cost Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/fuel-cost-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Fuel Cost Calculator",
  "url": "https://www.unitedcalculator.net/other/fuel-cost-calculator",
  "description": "Estimate your fuel expenses quickly and accurately using our Fuel Cost Calculator.",
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
      "name": "What is a Fuel Cost Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Fuel Cost Calculator helps you estimate the cost of fuel based on distance, fuel efficiency, and fuel price."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Fuel Cost Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your travel distance, your vehicle's fuel efficiency, and the current fuel price to calculate the estimated fuel cost."
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
      "name": "Fuel Cost Calculator",
      "item": "https://www.unitedcalculator.net/other/fuel-cost-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Distance (km)</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="e.g. 150"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mileage (km/l)</label>
            <input
              type="number"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              placeholder="e.g. 18"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fuel Price (₹/l)</label>
            <input
              type="number"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              placeholder="e.g. 105"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Fuel Cost Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Fuel Cost:</span>
              <span className="text-green-600">₹{result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default FuelCostCalculator;
