import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ResistorCalculator = () => {
  const [band1, setBand1] = useState("brown");
  const [band2, setBand2] = useState("black");
  const [multiplier, setMultiplier] = useState("red");
  const [tolerance, setTolerance] = useState("gold");
  const [result, setResult] = useState("");

  const colorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };

  const multipliers = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    gold: 0.1,
    silver: 0.01,
  };

  const tolerances = {
    brown: "±1%",
    red: "±2%",
    green: "±0.5%",
    blue: "±0.25%",
    violet: "±0.1%",
    gray: "±0.05%",
    gold: "±5%",
    silver: "±10%",
  };

  const calculateResistance = () => {
    const digit1 = colorValues[band1];
    const digit2 = colorValues[band2];
    const multiplierValue = multipliers[multiplier];
    const resistance = (digit1 * 10 + digit2) * multiplierValue;
    const toleranceValue = tolerances[tolerance];
    setResult(`${resistance} Ω ${toleranceValue}`);
  };

  const colorOptions = Object.keys(colorValues);

  return (
    <>
      <Helmet>
        <title>
          Resistor Calculator | Calculate Resistor Values & Color Codes
        </title>
        <meta
          name="description"
          content="Use our Resistor Calculator to find resistor values and color codes quickly and accurately."
        />
        <meta
          name="keywords"
          content="resistor calculator, resistor value calculator, resistor color code calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/resistor-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Resistor Calculator | Calculate Resistor Values & Color Codes"
        />
        <meta
          property="og:description"
          content="Quickly calculate resistor values and color codes with our easy-to-use Resistor Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/resistor-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Resistor Calculator",
  "url": "https://www.unitedcalculator.net/other/resistor-calculator",
  "description": "Calculate resistor values and color codes quickly and accurately using our Resistor Calculator.",
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
      "name": "What is a Resistor Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Resistor Calculator helps you determine resistor values and decode color bands easily."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Resistor Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input the color bands or resistor value, and the calculator will provide the corresponding value or color code."
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
      "name": "Resistor Calculator",
      "item": "https://www.unitedcalculator.net/other/resistor-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Resistor Color Code Calculator
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">
              Band 1
            </label>
            <select
              value={band1}
              onChange={(e) => setBand1(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            >
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">
              Band 2
            </label>
            <select
              value={band2}
              onChange={(e) => setBand2(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            >
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">
              Multiplier
            </label>
            <select
              value={multiplier}
              onChange={(e) => setMultiplier(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            >
              {Object.keys(multipliers).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">
              Tolerance
            </label>
            <select
              value={tolerance}
              onChange={(e) => setTolerance(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            >
              {Object.keys(tolerances).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={calculateResistance}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl mt-4"
          >
            Calculate Resistance
          </button>

          {result && (
            <div className="text-center mt-4 text-lg font-medium text-green-600 dark:text-green-400">
              Resistance: {result}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResistorCalculator;
