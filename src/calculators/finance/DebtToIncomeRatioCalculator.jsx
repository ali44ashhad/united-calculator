import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DebtToIncomeRatioCalculator = () => {
  const [monthlyDebtPayments, setMonthlyDebtPayments] = useState("1500");
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState("6000");

  const calculateDTI = () => {
    const debt = parseFloat(monthlyDebtPayments);
    const income = parseFloat(grossMonthlyIncome);

    if (isNaN(debt) || isNaN(income) || income === 0) return null;

    const dti = (debt / income) * 100;

    let category = "";
    if (dti < 20) category = "Excellent";
    else if (dti >= 20 && dti < 35) category = "Good";
    else if (dti >= 35 && dti < 50) category = "Fair";
    else category = "Poor";

    return {
      dti: dti.toFixed(2),
      category,
    };
  };

  const result = calculateDTI();

  return (
    <>
      <Helmet>
        <title>Debt-to-Income Ratio Calculator</title>
        <meta
          name="description"
          content="Use our Debt-to-Income Ratio Calculator to assess your financial health. Calculate your DTI ratio and determine your loan eligibility based on your income and monthly debt payments."
        />
        <meta
          name="keywords"
          content="debt to income ratio calculator, DTI calculator, loan eligibility calculator, mortgage DTI, debt income calculator, personal finance calculator, financial health tool, DTI ratio"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Debt-to-Income Ratio Calculator" />
        <meta
          property="og:description"
          content="Calculate your debt-to-income ratio using this simple tool to evaluate your loan affordability. Perfect for mortgage planning and financial management."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Debt-to-Income Ratio Calculator",
      "url": "https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator",
      "description": "Use the Debt-to-Income Ratio Calculator to determine your DTI and understand how your debt compares to your income. This is a key metric used by lenders to assess your financial stability.",
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
          "name": "What is a debt-to-income ratio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Debt-to-income (DTI) ratio is the percentage of your gross monthly income that goes toward paying your monthly debt payments. It helps lenders evaluate your ability to manage monthly payments and repay debts."
          }
        },
        {
          "@type": "Question",
          "name": "Why is DTI important for loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders use your DTI ratio to determine whether you can afford to take on additional debt. A lower DTI ratio indicates better financial health and increases your chances of loan approval."
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
          "name": "Debt-to-Income Ratio Calculator",
          "item": "https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator"
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
              Monthly Debt Payments ($)
            </label>
            <input
              type="number"
              value={monthlyDebtPayments}
              onChange={(e) => setMonthlyDebtPayments(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1500"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Gross Monthly Income ($)
            </label>
            <input
              type="number"
              value={grossMonthlyIncome}
              onChange={(e) => setGrossMonthlyIncome(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6000"
              min="0"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Debt-to-Income Ratio Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">DTI Ratio:</span>
                <span className="text-blue-600 font-medium">
                  {result.dti} %
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Category:</span>
                <span className="text-green-600">{result.category}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DebtToIncomeRatioCalculator;
