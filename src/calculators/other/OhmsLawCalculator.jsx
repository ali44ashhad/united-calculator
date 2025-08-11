import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const OhmsLawCalculator = () => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState("");

  const calculateOhmsLaw = () => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const R = parseFloat(resistance);

    if (!isNaN(V) && !isNaN(I)) {
      setResult(`Resistance (R) = ${(V / I).toFixed(2)} ohms`);
    } else if (!isNaN(V) && !isNaN(R)) {
      setResult(`Current (I) = ${(V / R).toFixed(2)} amps`);
    } else if (!isNaN(I) && !isNaN(R)) {
      setResult(`Voltage (V) = ${(I * R).toFixed(2)} volts`);
    } else {
      setResult("Enter any two values to calculate the third.");
    }
  };

  const clearFields = () => {
    setVoltage("");
    setCurrent("");
    setResistance("");
    setResult("");
  };

  return (
    <>
      <Helmet>
        <title>
          Ohm's Law Calculator | Calculate Voltage, Current & Resistance
        </title>
        <meta
          name="description"
          content="Use our Ohm's Law Calculator to quickly calculate voltage, current, or resistance in an electrical circuit."
        />
        <meta
          name="keywords"
          content="ohms law calculator, voltage calculator, current calculator, resistance calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/ohms-law-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ohm's Law Calculator | Calculate Voltage, Current & Resistance"
        />
        <meta
          property="og:description"
          content="Quickly calculate voltage, current, or resistance using Ohm's Law with our easy-to-use calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/ohms-law-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Ohm's Law Calculator",
  "url": "https://www.unitedcalculator.net/other/ohms-law-calculator",
  "description": "Calculate voltage, current, or resistance in an electrical circuit easily using Ohm's Law with our calculator.",
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
      "name": "What is Ohm's Law Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Ohm's Law Calculator helps you calculate voltage, current, or resistance in an electrical circuit using Ohm's Law."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Ohm's Law Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter any two values among voltage, current, and resistance, and the calculator will compute the third."
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
      "name": "Ohm's Law Calculator",
      "item": "https://www.unitedcalculator.net/other/ohms-law-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Ohm's Law Calculator
        </h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Voltage (V)"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl"
          />
          <input
            type="number"
            placeholder="Current (I)"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl"
          />
          <input
            type="number"
            placeholder="Resistance (R)"
            value={resistance}
            onChange={(e) => setResistance(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl"
          />

          <div className="flex justify-between gap-4">
            <button
              onClick={calculateOhmsLaw}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
            >
              Calculate
            </button>
            <button
              onClick={clearFields}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-xl"
            >
              Clear
            </button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-blue-50 border rounded-xl text-blue-700">
              {result}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OhmsLawCalculator;
