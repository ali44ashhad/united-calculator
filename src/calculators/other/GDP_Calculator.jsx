import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const GDP_Calculator = () => {
  const [consumption, setConsumption] = useState("");
  const [investment, setInvestment] = useState("");
  const [governmentSpending, setGovernmentSpending] = useState("");
  const [exports, setExports] = useState("");
  const [imports, setImports] = useState("");

  const calculateGDP = () => {
    const C = parseFloat(consumption);
    const I = parseFloat(investment);
    const G = parseFloat(governmentSpending);
    const X = parseFloat(exports);
    const M = parseFloat(imports);

    if ([C, I, G, X, M].some((val) => isNaN(val))) return null;

    const GDP = C + I + G + (X - M);
    return GDP.toFixed(2);
  };

  const result = calculateGDP();

  return (
    <>
      <Helmet>
        <title>GDP Calculator | Calculate Gross Domestic Product Easily</title>
        <meta
          name="description"
          content="Use our GDP Calculator to quickly estimate the Gross Domestic Product (GDP) based on economic inputs."
        />
        <meta
          name="keywords"
          content="GDP calculator, gross domestic product calculator, economic calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/gdp-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GDP Calculator | Calculate Gross Domestic Product Easily"
        />
        <meta
          property="og:description"
          content="Estimate the Gross Domestic Product (GDP) of a country or region using our easy-to-use GDP Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/gdp-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "GDP Calculator",
  "url": "https://www.unitedcalculator.net/other/gdp-calculator",
  "description": "Quickly calculate the Gross Domestic Product (GDP) based on economic data with our GDP Calculator.",
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
      "name": "What is a GDP Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A GDP Calculator helps estimate the total economic output of a country or region."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the GDP Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input the necessary economic data such as consumption, investment, government spending, and net exports to calculate GDP."
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
      "name": "GDP Calculator",
      "item": "https://www.unitedcalculator.net/other/gdp-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Consumption (C)</label>
            <input
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Investment (I)</label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="e.g. 2000"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Government Spending (G)
            </label>
            <input
              type="number"
              value={governmentSpending}
              onChange={(e) => setGovernmentSpending(e.target.value)}
              placeholder="e.g. 3000"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Exports (X)</label>
            <input
              type="number"
              value={exports}
              onChange={(e) => setExports(e.target.value)}
              placeholder="e.g. 1500"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Imports (M)</label>
            <input
              type="number"
              value={imports}
              onChange={(e) => setImports(e.target.value)}
              placeholder="e.g. 1000"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              GDP Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">GDP:</span>
              <span className="text-green-600">${result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default GDP_Calculator;
