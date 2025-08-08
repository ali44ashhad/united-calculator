import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const IRACalculator = () => {
  const [contribution, setContribution] = useState("6000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("30");

  const calculateIRA = () => {
    const c = parseFloat(contribution);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (isNaN(c) || isNaN(r) || isNaN(n)) return null;

    const futureValue = c * ((Math.pow(1 + r, n) - 1) / r);
    const totalContribution = c * n;
    const interestEarned = futureValue - totalContribution;

    return {
      futureValue: futureValue.toFixed(2),
      interestEarned: interestEarned.toFixed(2),
      totalContribution: totalContribution.toFixed(2),
    };
  };

  const result = calculateIRA();

  return (
    <>
      <Helmet>
        <title>IRA Calculator</title>
        <meta
          name="description"
          content="Use our IRA Calculator to estimate how much your retirement savings can grow in a Traditional or Roth IRA. Plan your future with confidence using accurate projections."
        />
        <meta
          name="keywords"
          content="IRA calculator, Roth IRA calculator, Traditional IRA calculator, retirement calculator, retirement savings, IRA growth calculator, investment calculator, tax-deferred account"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/ira-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IRA Calculator" />
        <meta
          property="og:description"
          content="Estimate your IRA savings with our IRA Calculator. Perfect for Roth and Traditional IRA contributions, showing how your retirement funds can grow over time."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/ira-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IRA Calculator",
      "url": "https://unitedcalculator.net/finance/ira-calculator",
      "description": "Use the IRA Calculator to project the future value of your Traditional or Roth IRA investments. Plan for retirement by estimating growth, returns, and tax impact.",
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
          "name": "What is an IRA calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An IRA calculator helps estimate how much your retirement savings can grow in a Traditional or Roth IRA, based on contributions, returns, and time."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a Roth IRA and a Traditional IRA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Roth IRA is funded with after-tax money and allows tax-free withdrawals in retirement, while a Traditional IRA is funded with pre-tax money and taxed upon withdrawal."
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
          "name": "IRA Calculator",
          "item": "https://unitedcalculator.net/finance/ira-calculator"
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
              Monthly Contribution (₹)
            </label>
            <input
              type="number"
              value={contribution}
              onChange={(e) => setContribution(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6000"
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
              placeholder="e.g. 7"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Investment Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              IRA Investment Result
            </h2>
            <div className="flex justify-between text-lg font-semibold mb-2">
              <span className="text-gray-800">Future Value:</span>
              <span className="text-green-600">₹{result.futureValue}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-2">
              <span className="text-gray-800">Interest Earned:</span>
              <span className="text-blue-600">₹{result.interestEarned}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Contribution:</span>
              <span className="text-purple-600">
                ₹{result.totalContribution}
              </span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default IRACalculator;
