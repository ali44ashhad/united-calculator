import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ElectricityCalculator = () => {
  const [power, setPower] = useState(""); // in kilowatts
  const [hours, setHours] = useState(""); // time in hours
  const [rate, setRate] = useState(""); // ₹ per kWh

  const calculateCost = () => {
    const P = parseFloat(power);
    const T = parseFloat(hours);
    const R = parseFloat(rate);

    if (isNaN(P) || isNaN(T) || isNaN(R)) return null;

    const cost = P * T * R;
    return cost.toFixed(2);
  };

  const result = calculateCost();

  return (
    <>
      <Helmet>
        <title>
          Electricity Calculator | Calculate Electricity Consumption & Cost
        </title>
        <meta
          name="description"
          content="Use our Electricity Calculator to estimate your electricity consumption and cost based on usage and rates."
        />
        <meta
          name="keywords"
          content="electricity calculator, electricity consumption calculator, power usage calculator, energy cost calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/electricity-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Electricity Calculator | Calculate Electricity Consumption & Cost"
        />
        <meta
          property="og:description"
          content="Estimate your electricity usage and cost easily with our Electricity Calculator tool."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/electricity-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Electricity Calculator",
  "url": "https://www.unitedcalculator.net/other/electricity-calculator",
  "description": "Calculate electricity consumption and cost accurately using our Electricity Calculator.",
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
      "name": "What is an Electricity Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Electricity Calculator helps you estimate your power consumption and electricity cost based on your usage."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Electricity Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input your appliance power rating, usage hours, and electricity rate to calculate consumption and cost."
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
      "name": "Electricity Calculator",
      "item": "https://www.unitedcalculator.net/other/electricity-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Power (kW)</label>
            <input
              type="number"
              value={power}
              onChange={(e) => setPower(e.target.value)}
              placeholder="e.g. 1.5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Time (Hours)</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="e.g. 5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Rate (₹/kWh)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="e.g. 6"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Electricity Cost Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Cost:</span>
              <span className="text-green-600">₹{result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ElectricityCalculator;
