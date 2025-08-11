import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const unitOptions = [
  { label: "Meters", value: "m" },
  { label: "Kilometers", value: "km" },
  { label: "Feet", value: "ft" },
  { label: "Miles", value: "mi" },
];

const conversionFactors = {
  m: { m: 1, km: 0.001, ft: 3.28084, mi: 0.000621371 },
  km: { m: 1000, km: 1, ft: 3280.84, mi: 0.621371 },
  ft: { m: 0.3048, km: 0.0003048, ft: 1, mi: 0.000189394 },
  mi: { m: 1609.34, km: 1.60934, ft: 5280, mi: 1 },
};

const ConversionCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");

  const convert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return null;

    const result = value * conversionFactors[fromUnit][toUnit];
    return result.toFixed(4);
  };

  const result = convert();

  return (
    <>
      <Helmet>
        <title>Conversion Calculator | Convert Units Easily</title>
        <meta
          name="description"
          content="Use our Conversion Calculator to quickly convert between different units of measurement including length, weight, volume, and more."
        />
        <meta
          name="keywords"
          content="conversion calculator, unit converter, convert units, measurement converter, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/conversion-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Conversion Calculator | Convert Units Easily"
        />
        <meta
          property="og:description"
          content="Quickly convert between various units of measurement with our easy-to-use Conversion Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/conversion-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Conversion Calculator",
  "url": "https://www.unitedcalculator.net/other/conversion-calculator",
  "description": "Convert units of measurement quickly and accurately using our Conversion Calculator.",
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
      "name": "What is a Conversion Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Conversion Calculator helps you convert values from one unit of measurement to another."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Conversion Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the value and select the units you want to convert from and to, and the calculator will display the converted value."
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
      "name": "Conversion Calculator",
      "item": "https://www.unitedcalculator.net/other/conversion-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Enter Value</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {unitOptions.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2">
              <label className="block mb-1 font-medium">To</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {unitOptions.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Conversion Result
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              {inputValue} {fromUnit} ={" "}
              <span className="text-blue-600">{result}</span> {toUnit}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default ConversionCalculator;
