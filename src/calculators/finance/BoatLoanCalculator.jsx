import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BoatLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("30000");
  const [interestRate, setInterestRate] = useState("6");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateBoatLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || n === 0) return null;

    const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateBoatLoan();

  return (
    <>
      <Helmet>
        <title>Boat Loan Calculator | Estimate your loan</title>
        <meta
          name="description"
          content="Use our Boat Loan Calculator to estimate your monthly payments and total loan cost. Calculate interest and plan your boat financing easily."
        />
        <meta
          name="keywords"
          content="boat loan calculator, marine loan calculator, boat financing calculator, calculate boat loan, boat loan interest calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/boat-loan-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boat Loan Calculator" />
        <meta
          property="og:description"
          content="Calculate your monthly boat loan payments with our Boat Loan Calculator. Get a detailed breakdown of interest, total cost, and payoff schedule."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/boat-loan-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Boat Loan Calculator",
      "url": "https://www.unitedcalculator.net/finance/boat-loan-calculator",
      "description": "Use our Boat Loan Calculator to calculate your monthly payments and total interest. Plan your marine loan financing effectively.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
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
          "name": "What is a boat loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A boat loan calculator helps estimate monthly payments, total interest, and overall cost based on loan amount, term, and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a boat loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a boat loan calculator helps you plan your financing, compare options, and make informed decisions before purchasing a boat."
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
          "name": "Boat Loan Calculator",
          "item": "https://www.unitedcalculator.net/finance/boat-loan-calculator"
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
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 30000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 6"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 5"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Boat Loan Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment:</span>
                <span className="text-blue-600 font-medium">
                  ${result.monthlyPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest:</span>
                <span className="text-red-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Payment:</span>
                <span className="text-green-600">${result.totalPayment}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BoatLoanCalculator;
