import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PensionCalculator = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("60");
  const [monthlyContribution, setMonthlyContribution] = useState("5000");
  const [annualReturnRate, setAnnualReturnRate] = useState("10");

  const calculatePension = () => {
    const ageNow = parseFloat(currentAge);
    const retireAt = parseFloat(retirementAge);
    const monthlyInvest = parseFloat(monthlyContribution);
    const annualRate = parseFloat(annualReturnRate);

    if (
      isNaN(ageNow) ||
      isNaN(retireAt) ||
      isNaN(monthlyInvest) ||
      isNaN(annualRate) ||
      ageNow >= retireAt
    )
      return null;

    const totalMonths = (retireAt - ageNow) * 12;
    const monthlyRate = annualRate / 100 / 12;

    const futureValue =
      monthlyInvest *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const totalInvested = monthlyInvest * totalMonths;
    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: totalInvested.toFixed(2),
      estimatedReturns: estimatedReturns.toFixed(2),
      futureValue: futureValue.toFixed(2),
    };
  };

  const result = calculatePension();

  return (
    <>
      <Helmet>
        <title>Pension Calculator</title>
        <meta
          name="description"
          content="Use our Pension Calculator to estimate your retirement income based on savings, contribution, and expected rate of return. Plan your retirement with ease and confidence."
        />
        <meta
          name="keywords"
          content="pension calculator, retirement calculator, retirement income calculator, pension planning, retirement savings calculator, pension estimate, pension planning tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/pension-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pension Calculator" />
        <meta
          property="og:description"
          content="Estimate your retirement income and plan your financial future with our Pension Calculator. Ideal for retirement planning and long-term financial goals."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/pension-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pension Calculator",
      "url": "https://unitedcalculator.net/finance/pension-calculator",
      "description": "Use our Pension Calculator to calculate your future pension based on current contributions, expected returns, and retirement goals.",
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
          "name": "What is a pension calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A pension calculator estimates your retirement income based on your current savings, contributions, and expected investment growth."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a pension calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a pension calculator helps you plan for retirement, understand how much you need to save, and make informed financial decisions."
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
          "name": "Pension Calculator",
          "item": "https://unitedcalculator.net/finance/pension-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Current Age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 60"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Monthly Contribution (₹)
            </label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={annualReturnRate}
              onChange={(e) => setAnnualReturnRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Pension Summary at Retirement
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Invested:</span>
                <span className="text-yellow-600 font-medium">
                  ₹{result.totalInvested}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Estimated Returns:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.estimatedReturns}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Pension Fund:</span>
                <span className="text-blue-600">₹{result.futureValue}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PensionCalculator;
