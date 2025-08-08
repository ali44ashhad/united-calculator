import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const InflationCalculator = () => {
  const [initialAmount, setInitialAmount] = useState("1000");
  const [inflationRate, setInflationRate] = useState("3");
  const [years, setYears] = useState("10");

  const calculateInflation = () => {
    const P = parseFloat(initialAmount);
    const r = parseFloat(inflationRate) / 100;
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(t)) return null;

    const futureValue = P / Math.pow(1 + r, t);
    const depreciation = P - futureValue;

    return {
      adjustedValue: futureValue.toFixed(2),
      depreciation: depreciation.toFixed(2),
    };
  };

  const result = calculateInflation();

  return (
    <>
      <Helmet>
        <title>Inflation Calculator - Adjust Value for Inflation</title>
        <meta
          name="description"
          content="Use our Inflation Calculator to determine the value of money over time. Adjust for inflation to understand the real purchasing power of your money in past or future years."
        />
        <meta
          name="keywords"
          content="inflation calculator, value of money over time, future value calculator, historical inflation calculator, purchasing power calculator, adjust for inflation, inflation rate calculator, CPI calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/inflation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Inflation Calculator - Adjust Value for Inflation"
        />
        <meta
          property="og:description"
          content="Calculate the impact of inflation on the value of money using our Inflation Calculator. See how much your money is worth in the past or future."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/inflation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Inflation Calculator",
      "url": "https://www.unitedcalculator.net/finance/inflation-calculator",
      "description": "Use the Inflation Calculator to evaluate the changing value of money over time. Calculate real value adjusted for inflation for any year range.",
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
          "name": "What does an inflation calculator do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An inflation calculator helps you estimate the past or future value of money by adjusting for the rate of inflation, showing how purchasing power changes over time."
          }
        },
        {
          "@type": "Question",
          "name": "Why is it important to account for inflation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Accounting for inflation helps in understanding real value changes in income, expenses, and savings over time, ensuring accurate financial planning."
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
          "name": "Finance Calculators",
          "item": "https://www.unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Inflation Calculator",
          "item": "https://www.unitedcalculator.net/finance/inflation-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Initial Amount (₹)</label>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Inflation Rate (%)</label>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Time Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Inflation Adjusted Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Adjusted Value:</span>
                <span className="text-blue-600 font-medium">
                  ₹{result.adjustedValue}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Loss in Value:</span>
                <span className="text-red-600">₹{result.depreciation}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default InflationCalculator;
