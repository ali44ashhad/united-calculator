import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DepreciationCalculator = () => {
  const [cost, setCost] = useState("50000");
  const [salvageValue, setSalvageValue] = useState("5000");
  const [usefulLife, setUsefulLife] = useState("10");

  const calculateDepreciation = () => {
    const c = parseFloat(cost);
    const s = parseFloat(salvageValue);
    const life = parseFloat(usefulLife);

    if (
      isNaN(c) ||
      isNaN(s) ||
      isNaN(life) ||
      c <= 0 ||
      life <= 0 ||
      s < 0 ||
      s > c
    )
      return null;

    const annualDepreciation = (c - s) / life;
    const totalDepreciation = annualDepreciation * life;

    return {
      annualDepreciation: annualDepreciation.toFixed(2),
      totalDepreciation: totalDepreciation.toFixed(2),
    };
  };

  const result = calculateDepreciation();

  return (
    <>
      <Helmet>
        <title>Depreciation Calculator</title>
        <meta
          name="description"
          content="Use our Depreciation Calculator to calculate the decrease in value of an asset over time using methods like straight-line, declining balance, or sum-of-the-years-digits."
        />
        <meta
          name="keywords"
          content="depreciation calculator, asset depreciation, straight line depreciation, declining balance method, sum of years digits calculator, car depreciation, equipment depreciation, calculate depreciation"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/depreciation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Depreciation Calculator" />
        <meta
          property="og:description"
          content="Calculate asset depreciation using our Depreciation Calculator. Choose from multiple methods including straight-line, declining balance, and more."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/depreciation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Depreciation Calculator",
      "url": "https://unitedcalculator.net/finance/depreciation-calculator",
      "description": "The Depreciation Calculator helps you determine the loss in value of assets over time using methods like straight-line and declining balance. Useful for accounting, taxes, and budgeting.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
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
          "name": "What is a depreciation calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A depreciation calculator helps you estimate how much an asset loses value over time. It's commonly used for vehicles, machinery, electronics, and tax-related accounting."
          }
        },
        {
          "@type": "Question",
          "name": "Which depreciation methods are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our calculator supports straight-line, declining balance, and sum-of-the-years-digits methods for calculating depreciation."
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
          "item": "https://unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Finance Calculators",
          "item": "https://unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Depreciation Calculator",
          "item": "https://unitedcalculator.net/finance/depreciation-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Cost of Asset ($)</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 50000"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Salvage Value ($)</label>
            <input
              type="number"
              value={salvageValue}
              onChange={(e) => setSalvageValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Useful Life (years)
            </label>
            <input
              type="number"
              value={usefulLife}
              onChange={(e) => setUsefulLife(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
              min="1"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Depreciation Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Annual Depreciation:</span>
                <span className="text-blue-600 font-medium">
                  ${result.annualDepreciation}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Depreciation:</span>
                <span className="text-green-600">
                  ${result.totalDepreciation}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DepreciationCalculator;
