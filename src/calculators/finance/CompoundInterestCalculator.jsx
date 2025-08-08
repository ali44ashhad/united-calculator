import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8");
  const [timesCompounded, setTimesCompounded] = useState("4"); // Quarterly
  const [years, setYears] = useState("10");

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(timesCompounded);
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t)) return null;

    const amount = P * Math.pow(1 + r / n, n * t);
    const interest = amount - P;

    return {
      totalAmount: amount.toFixed(2),
      compoundInterest: interest.toFixed(2),
    };
  };

  const result = calculateCompoundInterest();

  return (
    <>
      <Helmet>
        <title>Compound Interest Calculator</title>
        <meta
          name="description"
          content="Use our Compound Interest Calculator to estimate the future value of your investments or savings with compounding interest over time. Plan smarter with accurate projections."
        />
        <meta
          name="keywords"
          content="compound interest calculator, interest calculator, compounding calculator, future value calculator, savings calculator, investment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/compound-interest-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Compound Interest Calculator" />
        <meta
          property="og:description"
          content="Calculate how your money grows with our Compound Interest Calculator. Get accurate projections for savings, investments, and retirement planning."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/compound-interest-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Compound Interest Calculator",
      "url": "https://unitedcalculator.net/finance/compound-interest-calculator",
      "description": "Use the Compound Interest Calculator to determine the future value of an investment or savings account with compounded interest over time.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
      }
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a compound interest calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A compound interest calculator helps you estimate the future value of an investment or savings by applying compound interest over time."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a compound interest calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It allows you to project the growth of your money with reinvested interest, helping with retirement planning, savings goals, and long-term investing."
          }
        }
      ]
    }
    `}
        </script>
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
          "name": "Compound Interest Calculator",
          "item": "https://unitedcalculator.net/finance/compound-interest-calculator"
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
              Principal Amount ($)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
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
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 8"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Compounded Times per Year
            </label>
            <input
              type="number"
              value={timesCompounded}
              onChange={(e) => setTimesCompounded(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 4 (Quarterly)"
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
              Compound Interest Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Interest Earned:</span>
                <span className="text-green-600 font-medium">
                  ${result.compoundInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Amount:</span>
                <span className="text-blue-600">${result.totalAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CompoundInterestCalculator;
