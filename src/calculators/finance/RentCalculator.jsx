import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RentCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState("15000");
  const [numberOfMonths, setNumberOfMonths] = useState("12");

  const calculateTotalRent = () => {
    const rent = parseFloat(monthlyRent);
    const months = parseFloat(numberOfMonths);

    if (isNaN(rent) || isNaN(months)) return null;

    const totalRent = rent * months;

    return {
      totalRent: totalRent.toFixed(2),
    };
  };

  const result = calculateTotalRent();

  return (
    <>
      <Helmet>
        <title>Rent Calculator</title>
        <meta
          name="description"
          content="Use our Rent Calculator to determine how much rent you can afford based on your income and expenses. Ideal for renters budgeting for housing costs."
        />
        <meta
          name="keywords"
          content="rent calculator, how much rent can I afford, affordable rent calculator, rent affordability calculator, income rent calculator, rental budget calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/rent-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rent Calculator" />
        <meta
          property="og:description"
          content="Easily calculate how much rent you can afford based on your monthly income and expenses with our Rent Calculator. Ideal for smart budgeting and financial planning."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/rent-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Rent Calculator",
      "url": "https://unitedcalculator.net/finance/rent-calculator",
      "description": "Use our Rent Calculator to find out how much rent you can afford based on your income and monthly expenses. Perfect for renters planning their housing budget.",
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
          "name": "What is a rent calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A rent calculator helps determine how much rent you can afford based on your income and expenses, allowing you to budget effectively."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a rent calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps renters plan their housing budget smartly and ensures they choose a property within their financial limits."
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
          "name": "Rent Calculator",
          "item": "https://unitedcalculator.net/finance/rent-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Monthly Rent</label>
            <input
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 15000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Months</label>
            <input
              type="number"
              value={numberOfMonths}
              onChange={(e) => setNumberOfMonths(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Rent Summary
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Rent Payable:</span>
              <span className="text-green-600">₹{result.totalRent}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RentCalculator;
