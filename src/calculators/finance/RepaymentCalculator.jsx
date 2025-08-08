import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RepaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("100000");
  const [annualInterestRate, setAnnualInterestRate] = useState("7");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateRepayment = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(annualInterestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || n === 0) return null;

    const monthlyRepayment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalRepayment = monthlyRepayment * n;
    const totalInterest = totalRepayment - P;

    return {
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateRepayment();

  return (
    <>
      <Helmet>
        <title>Repayment Calculator</title>
        <meta
          name="description"
          content="Use our Repayment Calculator to estimate your monthly loan repayments. Calculate EMI based on loan amount, interest rate, and loan tenure to manage your finances effectively."
        />
        <meta
          name="keywords"
          content="repayment calculator, loan repayment calculator, emi calculator, monthly repayment calculator, loan calculator, debt repayment planner, mortgage repayment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/repayment-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Repayment Calculator" />
        <meta
          property="og:description"
          content="Estimate your monthly loan repayments with our Repayment Calculator. Adjust loan amount, tenure, and interest rate to plan your EMI effectively."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/repayment-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Repayment Calculator",
      "url": "https://unitedcalculator.net/finance/repayment-calculator",
      "description": "Use the Repayment Calculator to plan your loan EMI based on principal amount, interest rate, and repayment tenure. Ideal for home, personal, and car loans.",
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
          "name": "What is a repayment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A repayment calculator helps you determine the monthly EMI for a loan based on the loan amount, interest rate, and repayment period."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a repayment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a repayment calculator allows you to plan your finances by giving an accurate estimate of how much you need to repay monthly and the total cost of the loan."
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
          "name": "Repayment Calculator",
          "item": "https://unitedcalculator.net/finance/repayment-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Loan Amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 7"
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
              Repayment Summary
            </h2>
            <div className="space-y-2 text-lg font-medium text-gray-700">
              <div className="flex justify-between">
                <span>Monthly Repayment:</span>
                <span className="text-green-600">
                  ₹{result.monthlyRepayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Repayment:</span>
                <span className="text-blue-600">₹{result.totalRepayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest Paid:</span>
                <span className="text-red-600">₹{result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RepaymentCalculator;
