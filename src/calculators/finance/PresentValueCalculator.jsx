import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PresentValueCalculator = () => {
  const [futureValue, setFutureValue] = useState("10000");
  const [interestRate, setInterestRate] = useState("5");
  const [years, setYears] = useState("10");

  const calculatePresentValue = () => {
    const FV = parseFloat(futureValue);
    const r = parseFloat(interestRate) / 100;
    const n = parseFloat(years);

    if (isNaN(FV) || isNaN(r) || isNaN(n)) return null;

    const PV = FV / Math.pow(1 + r, n);
    return PV.toFixed(2);
  };

  const result = calculatePresentValue();

  return (
    <>
      <Helmet>
        <title>Present Value Calculator</title>
        <meta
          name="description"
          content="Use our Present Value Calculator to determine the current worth of a future sum of money. Ideal for evaluating investments, annuities, and financial planning."
        />
        <meta
          name="keywords"
          content="present value calculator, pv calculator, discounted cash flow calculator, time value of money, net present value, investment calculator, finance calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/present-value-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Present Value Calculator" />
        <meta
          property="og:description"
          content="Calculate the present value of future cash flows using our Present Value Calculator. Great for investment analysis and financial decision-making."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/present-value-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Present Value Calculator",
      "url": "https://unitedcalculator.net/finance/present-value-calculator",
      "description": "Use the Present Value Calculator to determine the current value of a future amount of money or stream of cash flows, discounted at a specific rate.",
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
          "name": "What is a Present Value Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Present Value Calculator helps you determine the current worth of a future sum of money based on a specific discount rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why is present value important in finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Present value is important for understanding how much future money is worth today, allowing better investment and budgeting decisions."
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
          "name": "Present Value Calculator",
          "item": "https://unitedcalculator.net/finance/present-value-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Future Value (₹)</label>
            <input
              type="number"
              value={futureValue}
              onChange={(e) => setFutureValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Years</label>
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
              Present Value Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Present Value:</span>
              <span className="text-green-600">₹{result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PresentValueCalculator;
