import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PersonalLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("500000");
  const [interestRate, setInterestRate] = useState("12");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || r === 0) return null;

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
        <title>Personal Loan Calculator</title>
        <meta
          name="description"
          content="Use our Personal Loan Calculator to estimate your monthly payments based on loan amount, interest rate, and term. Plan your finances smartly for personal loans."
        />
        <meta
          name="keywords"
          content="personal loan calculator, loan emi calculator, monthly loan payment calculator, interest calculator, personal finance calculator, loan repayment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/personal-loan-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Personal Loan Calculator" />
        <meta
          property="og:description"
          content="Estimate your monthly payments and total loan cost with our Personal Loan Calculator. Great for managing budgets and planning personal loans."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/personal-loan-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Personal Loan Calculator",
      "url": "https://unitedcalculator.net/finance/personal-loan-calculator",
      "description": "Calculate monthly EMI and total repayment for your personal loan using our Personal Loan Calculator. Ideal for financial planning and debt management.",
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
          "name": "What is a Personal Loan Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Personal Loan Calculator helps you determine your monthly EMI and total interest payable based on loan amount, interest rate, and tenure."
          }
        },
        {
          "@type": "Question",
          "name": "Why use a Personal Loan Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a Personal Loan Calculator allows you to plan repayments in advance, compare different loan offers, and make informed financial decisions."
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
          "name": "Personal Loan Calculator",
          "item": "https://unitedcalculator.net/finance/personal-loan-calculator"
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
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12"
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
              Loan Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly EMI:</span>
                <span className="text-blue-600 font-medium">₹{result.emi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest:</span>
                <span className="text-red-600 font-medium">
                  ₹{result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Payment:</span>
                <span className="text-green-600">₹{result.totalPayment}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PersonalLoanCalculator;
