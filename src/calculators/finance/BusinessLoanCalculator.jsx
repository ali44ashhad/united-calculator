import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BusinessLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("500000");
  const [interestRate, setInterestRate] = useState("10");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = EMI * n;
    const totalInterest = totalPayment - P;

    return {
      emi: EMI.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateLoan();

  return (
    <>
    <Helmet>
  <title>Business Loan Calculator</title>
  <meta
    name="description"
    content="Use our Business Loan Calculator to estimate monthly payments, interest costs, and total repayment amount for your business loan. Ideal for small and large business financing."
  />
  <meta
    name="keywords"
    content="business loan calculator, commercial loan calculator, small business loan calculator, business financing calculator, loan repayment calculator"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://unitedcalculator.net/finance/business-loan-calculator"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Business Loan Calculator"
  />
  <meta
    property="og:description"
    content="Calculate your business loan repayments, interest, and total cost using our Business Loan Calculator. Ideal for startups and growing businesses."
  />
  <meta
    property="og:url"
    content="https://unitedcalculator.net/finance/business-loan-calculator"
  />
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Business Loan Calculator",
      "url": "https://unitedcalculator.net/finance/business-loan-calculator",
      "description": "Use our Business Loan Calculator to estimate EMIs, interest charges, and total repayment amount. Perfect for planning business financing.",
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
          "name": "What is a business loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A business loan calculator helps you estimate the monthly EMI, total interest, and repayment amount based on loan amount, term, and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a business loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a business loan calculator allows you to plan your loan repayment strategy effectively and compare multiple loan offers for the best fit."
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
          "name": "Business Loan Calculator",
          "item": "https://unitedcalculator.net/finance/business-loan-calculator"
        }
      ]
    }
    `}
  </script>
</Helmet>

    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Loan Amount (₹)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 500000"
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
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan Term (in Years)</label>
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
            Business Loan Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Monthly EMI:</span>
              <span className="text-blue-600 font-medium">₹{result.emi}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Total Payment:</span>
              <span className="text-yellow-600 font-medium">
                ₹{result.totalPayment}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Interest:</span>
              <span className="text-red-600">₹{result.totalInterest}</span>
            </div>
          </div>
        </section>
      )}
    </div></>
  );
};

export default BusinessLoanCalculator;
