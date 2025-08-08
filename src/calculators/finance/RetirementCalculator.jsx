import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("60");
  const [currentSavings, setCurrentSavings] = useState("500000");
  const [monthlyContribution, setMonthlyContribution] = useState("10000");
  const [expectedReturn, setExpectedReturn] = useState("10");

  const calculateRetirementSavings = () => {
    const ageNow = parseFloat(currentAge);
    const ageRetire = parseFloat(retirementAge);
    const savings = parseFloat(currentSavings);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(expectedReturn) / 100;

    if (
      isNaN(ageNow) ||
      isNaN(ageRetire) ||
      isNaN(savings) ||
      isNaN(monthly) ||
      isNaN(rate)
    )
      return null;

    const years = ageRetire - ageNow;
    const months = years * 12;
    const monthlyRate = rate / 12;

    const futureValueSavings = savings * Math.pow(1 + monthlyRate, months);
    const futureValueContributions =
      monthly *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const total = futureValueSavings + futureValueContributions;

    return {
      totalSavings: total.toFixed(2),
    };
  };

  const result = calculateRetirementSavings();

  return (
    <>
      <Helmet>
        <title>Retirement Calculator</title>
        <meta
          name="description"
          content="Use our Retirement Calculator to estimate how much you need to save to retire comfortably. Plan your retirement with accurate projections based on age, savings, and expenses."
        />
        <meta
          name="keywords"
          content="retirement calculator, retirement planning calculator, retirement savings calculator, retirement goal calculator, retirement estimate, pension calculator, retirement corpus calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/retirement-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Retirement Calculator" />
        <meta
          property="og:description"
          content="Estimate your retirement savings with our Retirement Calculator. Find out how much you need to retire comfortably and reach your financial goals."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/retirement-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Retirement Calculator",
      "url": "https://unitedcalculator.net/finance/retirement-calculator",
      "description": "Use the Retirement Calculator to determine how much you need to save for a financially secure retirement. It helps you estimate your retirement corpus based on current savings, future expenses, and age.",
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
          "name": "What is a retirement calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A retirement calculator helps estimate how much money you’ll need to save to maintain your lifestyle after retirement based on current income, savings, and expected expenses."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a retirement calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a retirement calculator allows you to plan effectively for the future, ensuring that you don’t outlive your savings and can retire comfortably."
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
          "name": "Retirement Calculator",
          "item": "https://unitedcalculator.net/finance/retirement-calculator"
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
              Current Savings (₹)
            </label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500000"
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
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Retirement Savings Summary
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">
                Total Savings at Retirement:
              </span>
              <span className="text-green-600">₹{result.totalSavings}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RetirementCalculator;
