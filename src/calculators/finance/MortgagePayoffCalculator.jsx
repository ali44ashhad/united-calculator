import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MortgagePayoffCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("300000"); // total loan
  const [interestRate, setInterestRate] = useState("4"); // annual interest %
  const [monthlyPayment, setMonthlyPayment] = useState("2000"); // monthly payment

  const calculatePayoff = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12; // monthly interest rate
    const M = parseFloat(monthlyPayment);

    if (isNaN(P) || isNaN(r) || isNaN(M) || M <= P * r) return null;

    const numPayments = Math.log(M / (M - P * r)) / Math.log(1 + r);
    const totalPaid = M * numPayments;
    const totalInterest = totalPaid - P;

    return {
      months: Math.ceil(numPayments),
      years: Math.floor(numPayments / 12),
      remainingMonths: Math.ceil(numPayments) % 12,
      totalPaid: totalPaid.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculatePayoff();

  return (
    <>
      <Helmet>
        <title>Mortgage Payoff Calculator</title>
        <meta
          name="description"
          content="Use our Mortgage Payoff Calculator to estimate how extra payments can help you pay off your home loan faster and save on interest. Plan your early mortgage repayment easily."
        />
        <meta
          name="keywords"
          content="mortgage payoff calculator, pay off mortgage early, extra mortgage payment calculator, early loan repayment, mortgage savings calculator, home loan payoff, reduce mortgage term"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/mortgage-payoff-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mortgage Payoff Calculator" />
        <meta
          property="og:description"
          content="Estimate how much faster you can pay off your mortgage and how much interest you can save by making extra payments with our Mortgage Payoff Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/mortgage-payoff-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Payoff Calculator",
      "url": "https://www.unitedcalculator.net/finance/mortgage-payoff-calculator",
      "description": "Calculate how much sooner you can pay off your home loan and how much interest you can save with our Mortgage Payoff Calculator. Perfect for homeowners planning early repayment.",
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
          "name": "What is a Mortgage Payoff Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Mortgage Payoff Calculator helps you see how extra payments toward your mortgage can reduce the loan term and interest paid over time."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a Mortgage Payoff Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It allows you to plan early repayment strategies, helping you become debt-free sooner and save thousands in interest."
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
          "name": "Mortgage Payoff Calculator",
          "item": "https://www.unitedcalculator.net/finance/mortgage-payoff-calculator"
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
              placeholder="e.g. 300000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Interest Rate (% per annum)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 4"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Monthly Payment ($)
            </label>
            <input
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2000"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Payoff Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Time to Payoff:</span>
                <span className="text-yellow-600 font-medium">
                  {result.years} years {result.remainingMonths} months
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest Paid:</span>
                <span className="text-green-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Amount Paid:</span>
                <span className="text-blue-600">${result.totalPaid}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default MortgagePayoffCalculator;
