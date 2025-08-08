import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AutoLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("20000");
  const [interestRate, setInterestRate] = useState("6");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateAutoLoan = () => {
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

  const result = calculateAutoLoan();

  return (
    <>
      <Helmet>
        <title>
          Auto Loan Calculator - Estimate Your Car Loan EMI and Interest
        </title>
        <meta
          name="description"
          content="Use our Auto Loan Calculator to calculate your monthly EMI, total interest, and overall loan cost for buying a car. Enter loan amount, interest rate, and tenure to plan effectively."
        />
        <meta
          name="keywords"
          content="auto loan calculator, car loan calculator, car emi calculator, vehicle loan calculator, car loan emi calculator, auto finance calculator, car loan interest calculator, car loan calculator india"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/auto-loan-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auto Loan Calculator - Estimate Your Car Loan EMI and Interest"
        />
        <meta
          property="og:description"
          content="Calculate your monthly auto loan EMI, interest, and total repayment using our car loan calculator. Ideal for car buyers planning finance."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/auto-loan-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Auto Loan Calculator - Car Loan EMI Estimator"
        />
        <meta
          name="twitter:description"
          content="Use this auto loan calculator to plan your car purchase. Quickly find out EMI, interest, and total cost based on your loan inputs."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Auto Loan Calculator",
      "url": "https://www.unitedcalculator.net/finance/auto-loan-calculator",
      "description": "Auto Loan Calculator to help you determine car loan EMI, interest paid, and total repayment. Perfect tool for budgeting your next vehicle purchase.",
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
          "name": "What is an auto loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An auto loan calculator helps you estimate your monthly EMI and total interest payable based on loan amount, interest rate, and loan tenure."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is an auto loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It provides close estimates based on your input values, helping you make informed decisions when taking a car loan."
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
          "name": "Auto Loan Calculator",
          "item": "https://www.unitedcalculator.net/finance/auto-loan-calculator"
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
              placeholder="e.g. 20000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Interest Rate (Annual %)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Auto Loan Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment:</span>
                <span className="text-blue-600 font-medium">
                  ${result.monthlyPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Payment:</span>
                <span className="text-green-600 font-medium">
                  ${result.totalPayment}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Interest:</span>
                <span className="text-red-600">${result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AutoLoanCalculator;
