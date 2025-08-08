import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const FinanceCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("10000");
  const [annualRate, setAnnualRate] = useState("8"); // in %
  const [years, setYears] = useState("10");

  const calculateFutureValue = () => {
    const P = parseFloat(initialInvestment);
    const r = parseFloat(annualRate) / 100;
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(t)) return null;

    const futureValue = P * Math.pow(1 + r, t);
    const totalInterest = futureValue - P;

    return {
      futureValue: futureValue.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateFutureValue();

  return (
    <>
      <Helmet>
        <title>Finance Calculator - Free Online Financial Tools</title>
        <meta
          name="description"
          content="Access our Finance Calculator to make smarter financial decisions. Includes tools for loans, investments, budgeting, debt repayment, and savings – all in one place."
        />
        <meta
          name="keywords"
          content="finance calculator, financial tools, online finance calculator, loan calculator, investment calculator, savings calculator, debt calculator, budget calculator, united calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/finance-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Finance Calculator - Free Online Financial Tools"
        />
        <meta
          property="og:description"
          content="Use the Finance Calculator to calculate loans, returns, debt repayments, and savings. Everything you need to manage your finances efficiently."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/finance-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Finance Calculator",
      "url": "https://unitedcalculator.net/finance/finance-calculator",
      "description": "Use the Finance Calculator to make informed decisions on loans, savings, investments, and more. Get accurate financial insights with this all-in-one tool.",
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
          "name": "What is a finance calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A finance calculator helps you compute various financial values like loan repayments, investment returns, savings goals, and budgeting needs."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use this finance calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone looking to manage their money better—whether you're a student, investor, employee, or business owner—can use this free tool."
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
          "name": "Finance Calculator",
          "item": "https://unitedcalculator.net/finance/finance-calculator"
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
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
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
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 8"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Time Period (in Years)
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
              Finance Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest Earned:</span>
                <span className="text-green-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Future Value:</span>
                <span className="text-blue-600">${result.futureValue}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default FinanceCalculator;
