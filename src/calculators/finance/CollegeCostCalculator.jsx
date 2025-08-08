import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CollegeCostCalculator = () => {
  const [currentCost, setCurrentCost] = useState("20000"); // per year
  const [yearsUntilCollege, setYearsUntilCollege] = useState("10");
  const [inflationRate, setInflationRate] = useState("5");
  const [numberOfYears, setNumberOfYears] = useState("4");

  const calculateCollegeCost = () => {
    const cost = parseFloat(currentCost);
    const inflation = parseFloat(inflationRate) / 100;
    const waitYears = parseFloat(yearsUntilCollege);
    const studyYears = parseFloat(numberOfYears);

    if (
      isNaN(cost) ||
      isNaN(inflation) ||
      isNaN(waitYears) ||
      isNaN(studyYears)
    )
      return null;

    let totalFutureCost = 0;
    for (let i = 0; i < studyYears; i++) {
      const year = waitYears + i;
      const inflatedCost = cost * Math.pow(1 + inflation, year);
      totalFutureCost += inflatedCost;
    }

    return {
      futureAnnualCost: (cost * Math.pow(1 + inflation, waitYears)).toFixed(2),
      totalFutureCost: totalFutureCost.toFixed(2),
    };
  };

  const result = calculateCollegeCost();

  return (
    <>
      <Helmet>
        <title>College Cost Calculator</title>
        <meta
          name="description"
          content="Use our College Cost Calculator to estimate the total cost of college including tuition, room & board, books, and other expenses. Plan your education budget effectively."
        />
        <meta
          name="keywords"
          content="college cost calculator, education cost calculator, university expense calculator, tuition calculator, college budget planner, college savings calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/college-cost-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="College Cost Calculator" />
        <meta
          property="og:description"
          content="Calculate your total college expenses with our College Cost Calculator. Estimate tuition, housing, books, and other costs to plan your financial future."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/college-cost-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "College Cost Calculator",
      "url": "https://unitedcalculator.net/finance/college-cost-calculator",
      "description": "Use our College Cost Calculator to estimate and plan for all higher education expenses including tuition, room & board, and other costs.",
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
          "name": "What is a College Cost Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A College Cost Calculator helps you estimate the total cost of attending college, including tuition, fees, housing, books, and other expenses."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a College Cost Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a College Cost Calculator allows students and parents to better understand and plan for the financial requirements of higher education."
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
          "name": "College Cost Calculator",
          "item": "https://unitedcalculator.net/finance/college-cost-calculator"
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
              Current Annual College Cost ($)
            </label>
            <input
              type="number"
              value={currentCost}
              onChange={(e) => setCurrentCost(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Years Until College
            </label>
            <input
              type="number"
              value={yearsUntilCollege}
              onChange={(e) => setYearsUntilCollege(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Inflation Rate (%)
            </label>
            <input
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Number of Years in College
            </label>
            <input
              type="number"
              value={numberOfYears}
              onChange={(e) => setNumberOfYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 4"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              College Cost Estimate
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">First Year Cost (Future):</span>
                <span className="text-yellow-600 font-medium">
                  ${result.futureAnnualCost}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  Total College Cost (All Years):
                </span>
                <span className="text-blue-600">${result.totalFutureCost}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CollegeCostCalculator;
