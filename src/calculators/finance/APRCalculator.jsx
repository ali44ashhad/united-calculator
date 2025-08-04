import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const APRCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [fees, setFees] = useState("500");
  const [interestRate, setInterestRate] = useState("5");
  const [termYears, setTermYears] = useState("2");

  const calculateAPR = () => {
    const principal = parseFloat(loanAmount);
    const totalFees = parseFloat(fees);
    const nominalRate = parseFloat(interestRate) / 100;
    const years = parseFloat(termYears);

    if (
      isNaN(principal) ||
      isNaN(totalFees) ||
      isNaN(nominalRate) ||
      isNaN(years)
    )
      return null;

    const totalLoan = principal + totalFees;
    const r = nominalRate;
    const n = years;

    // Approximate APR using the formula:
    // APR = 2 * n * interest / (totalLoan + principal)
    const interest = principal * r * n;
    const apr = ((2 * n * interest) / (principal + totalLoan)) * 100;

    return {
      apr: apr.toFixed(2),
      totalCost: (principal + interest + totalFees).toFixed(2),
    };
  };

  const result = calculateAPR();

  return (
    <>
      <Helmet>
        <title>
          APR Calculator - Calculate Annual Percentage Rate by United Calculator
        </title>
        <meta
          name="description"
          content="Use our APR Calculator to determine the annual percentage rate on your loans or credit. Understand true borrowing costs including interest and fees."
        />
        <meta
          name="keywords"
          content="apr calculator, annual percentage rate calculator, loan apr calculator, credit card apr calculator, apr calculator india, calculate apr, mortgage apr calculator, apr vs interest rate"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/apr-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="APR Calculator - Calculate Annual Percentage Rate | United Calculator"
        />
        <meta
          property="og:description"
          content="Easily calculate the true annual percentage rate (APR) on loans and credit cards. Includes interest, fees, and other costs to help you make informed decisions."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/apr-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="APR Calculator - Understand Real Loan Costs"
        />
        <meta
          name="twitter:description"
          content="Use our APR calculator to find out the true cost of borrowing. Perfect for comparing loans, mortgages, and credit card offers."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "APR Calculator",
      "url": "https://unitedcalculator.net/finance/apr-calculator",
      "description": "This APR Calculator helps you determine the true cost of a loan or credit card by factoring in interest rates, fees, and repayment terms.",
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
          "name": "What is an APR calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An APR calculator helps you find the real annual cost of borrowing by including interest and additional fees, giving you a better comparison tool across loan offers."
          }
        },
        {
          "@type": "Question",
          "name": "Why is APR important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "APR gives a complete picture of how much a loan will cost annually. It’s useful for comparing credit products with different interest rates and fee structures."
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
          "name": "APR Calculator",
          "item": "https://unitedcalculator.net/finance/apr-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Loan Amount ($)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fees ($)</label>
            <input
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={termYears}
              onChange={(e) => setTermYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              APR Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Estimated APR:</span>
                <span className="text-blue-600 font-medium">{result.apr}%</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Cost of Loan:</span>
                <span className="text-red-600">${result.totalCost}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default APRCalculator;
