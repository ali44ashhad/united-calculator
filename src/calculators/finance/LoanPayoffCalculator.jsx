import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const LoanPayoffCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("50000");
  const [interestRate, setInterestRate] = useState("6");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(loanTerm) * 12; // Total months

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    // Monthly payment formula: P * r / (1 - (1 + r)^-n)
    const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalPaid = monthlyPayment * n;
    const totalInterest = totalPaid - P;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateLoan();

  return (
    <>
      <Helmet>
        <title>
          Loan Payoff Calculator | Estimate Monthly Payments & Interest ||
          United Calculator
        </title>
        <meta
          name="description"
          content="Use our free Loan Payoff Calculator to determine your monthly payment, total interest, and overall loan cost. Plan your debt-free journey today."
        />
        <meta
          name="keywords"
          content="loan payoff calculator, loan calculator, mortgage payoff calculator, debt payoff calculator, personal loan calculator, car loan payoff calculator, online loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/loan-payoff-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Loan Payoff Calculator | United Calculator"
        />
        <meta
          property="og:description"
          content="Calculate your monthly loan payments and interest using our free Loan Payoff Calculator. Ideal for personal loans, mortgages, and auto loans."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/loan-payoff-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Loan Payoff Calculator | United Calculator"
        />
        <meta
          name="twitter:description"
          content="Plan your loan repayment with our Loan Payoff Calculator. Find out your monthly payment, total cost, and interest."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loan Payoff Calculator",
      "url": "https://www.unitedcalculator.net/finance/loan-payoff-calculator",
      "description": "Free Loan Payoff Calculator to determine monthly payments, total cost, and interest. Plan your loan repayment effectively.",
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
          "name": "How do I calculate my loan payoff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can calculate your loan payoff by knowing your loan amount, interest rate, and term. Our Loan Payoff Calculator will show your monthly payment, total cost, and interest."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this calculator for any loan type?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, this calculator works for personal loans, mortgages, auto loans, and other fixed-term loans."
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
          "name": "Loan Payoff Calculator",
          "item": "https://www.unitedcalculator.net/finance/loan-payoff-calculator"
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
              placeholder="e.g. 50000"
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
              Loan Payoff Summary
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
                <span className="text-green-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Amount Paid:</span>
                <span className="text-yellow-600">${result.totalPaid}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default LoanPayoffCalculator;
