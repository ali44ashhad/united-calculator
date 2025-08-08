import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RentalPropertyCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState("25000");
  const [monthlyExpenses, setMonthlyExpenses] = useState("10000");
  const [propertyPrice, setPropertyPrice] = useState("3000000");

  const calculate = () => {
    const rent = parseFloat(monthlyRent);
    const expenses = parseFloat(monthlyExpenses);
    const price = parseFloat(propertyPrice);

    if (isNaN(rent) || isNaN(expenses) || isNaN(price)) return null;

    const netIncome = rent - expenses;
    const annualCashFlow = netIncome * 12;
    const roi = (annualCashFlow / price) * 100;

    return {
      netIncome: netIncome.toFixed(2),
      annualCashFlow: annualCashFlow.toFixed(2),
      roi: roi.toFixed(2),
    };
  };

  const result = calculate();

  return (
    <>
      <Helmet>
        <title>Rental Property Calculator</title>
        <meta
          name="description"
          content="Use our Rental Property Calculator to estimate rental income, cash flow, ROI, and cap rate. Ideal for landlords and real estate investors planning property investments."
        />
        <meta
          name="keywords"
          content="rental property calculator, real estate investment calculator, ROI calculator, cash flow calculator, cap rate calculator, property income calculator, landlord calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/rental-property-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rental Property Calculator" />
        <meta
          property="og:description"
          content="Estimate cash flow, ROI, and cap rate with our Rental Property Calculator. Useful tool for landlords and real estate investors evaluating property investments."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/rental-property-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Rental Property Calculator",
      "url": "https://unitedcalculator.net/finance/rental-property-calculator",
      "description": "Use our Rental Property Calculator to analyze the profitability of real estate investments. Calculate cash flow, ROI, cap rate, and income potential quickly and easily.",
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
          "name": "What is a rental property calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A rental property calculator estimates the potential returns on a real estate investment, including monthly cash flow, ROI, and cap rate."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use a rental property calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Landlords and real estate investors can use it to evaluate the profitability of current or future rental properties and make informed decisions."
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
          "name": "Rental Property Calculator",
          "item": "https://unitedcalculator.net/finance/rental-property-calculator"
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
              Monthly Rent Income
            </label>
            <input
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 25000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Monthly Expenses</label>
            <input
              type="number"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Property Price</label>
            <input
              type="number"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 3000000"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Rental Property Summary
            </h2>
            <div className="text-lg font-medium text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Monthly Net Income:</span>
                <span className="text-green-600">₹{result.netIncome}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Cash Flow:</span>
                <span className="text-green-600">₹{result.annualCashFlow}</span>
              </div>
              <div className="flex justify-between">
                <span>ROI (Return on Investment):</span>
                <span className="text-blue-600">{result.roi}%</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RentalPropertyCalculator;
