import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RentVsBuyCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState("20000");
  const [homePrice, setHomePrice] = useState("5000000");
  const [annualAppreciation, setAnnualAppreciation] = useState("5");
  const [mortgageRate, setMortgageRate] = useState("7");
  const [loanTermYears, setLoanTermYears] = useState("20");

  const calculateComparison = () => {
    const rent = parseFloat(monthlyRent);
    const price = parseFloat(homePrice);
    const appreciation = parseFloat(annualAppreciation) / 100;
    const rate = parseFloat(mortgageRate) / 100 / 12;
    const months = parseFloat(loanTermYears) * 12;

    if (
      isNaN(rent) ||
      isNaN(price) ||
      isNaN(appreciation) ||
      isNaN(rate) ||
      isNaN(months)
    ) {
      return null;
    }

    // Total Rent Paid Over Loan Term
    const totalRent = rent * months;

    // Monthly Mortgage Payment (EMI)
    const emi =
      (price * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);
    const totalMortgage = emi * months;

    // Future Value of Home (after appreciation)
    const futureHomeValue = price * Math.pow(1 + appreciation, loanTermYears);

    return {
      totalRent: totalRent.toFixed(2),
      totalMortgage: totalMortgage.toFixed(2),
      futureHomeValue: futureHomeValue.toFixed(2),
    };
  };

  const result = calculateComparison();

  return (
    <>
      <Helmet>
        <title>Rent vs Buy Calculator</title>
        <meta
          name="description"
          content="Use our Rent vs Buy Calculator to compare the long-term financial impact of renting versus buying a home. Make informed real estate decisions based on cost and investment potential."
        />
        <meta
          name="keywords"
          content="rent vs buy calculator, should I rent or buy, home affordability calculator, real estate decision tool, buy or rent calculator, rent vs own calculator, property investment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/rent-vs-buy-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rent vs Buy Calculator" />
        <meta
          property="og:description"
          content="Compare the financial pros and cons of renting versus buying a home with our Rent vs Buy Calculator. Understand the costs, break-even points, and investment benefits."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/rent-vs-buy-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Rent vs Buy Calculator",
      "url": "https://www.unitedcalculator.net/finance/rent-vs-buy-calculator",
      "description": "Use our Rent vs Buy Calculator to evaluate whether it is financially better to rent or purchase a home. Analyze total costs, equity gained, and investment performance over time.",
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
          "name": "What is a Rent vs Buy Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Rent vs Buy Calculator compares the cost of renting a home to buying one, helping you make informed real estate decisions based on your financial goals."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I compare renting and buying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comparing helps you determine which option is more cost-effective in the long run by factoring in home equity, taxes, interest, rent, and investment returns."
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
          "name": "Rent vs Buy Calculator",
          "item": "https://www.unitedcalculator.net/finance/rent-vs-buy-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Monthly Rent (₹)</label>
            <input
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Home Price (₹)</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Home Appreciation (%)
            </label>
            <input
              type="number"
              value={annualAppreciation}
              onChange={(e) => setAnnualAppreciation(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Mortgage Interest Rate (%)
            </label>
            <input
              type="number"
              value={mortgageRate}
              onChange={(e) => setMortgageRate(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 7"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Comparison Result
            </h2>
            <div className="space-y-2 text-lg font-medium text-gray-700">
              <div className="flex justify-between">
                <span>Total Rent Paid:</span>
                <span className="text-red-600">₹{result.totalRent}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Mortgage Paid:</span>
                <span className="text-orange-600">₹{result.totalMortgage}</span>
              </div>
              <div className="flex justify-between">
                <span>Future Home Value:</span>
                <span className="text-green-600">
                  ₹{result.futureHomeValue}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RentVsBuyCalculator;
