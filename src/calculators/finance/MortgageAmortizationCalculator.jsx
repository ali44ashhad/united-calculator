import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MortgageAmortizationCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("300000");
  const [annualInterestRate, setAnnualInterestRate] = useState("5");
  const [loanTermYears, setLoanTermYears] = useState("30");

  const principal = parseFloat(loanAmount || 0);
  const rate = parseFloat(annualInterestRate || 0) / 100 / 12;
  const numberOfPayments = parseInt(loanTermYears || 0) * 12;

  const monthlyPayment =
    principal && rate && numberOfPayments
      ? (principal * rate) / (1 - Math.pow(1 + rate, -numberOfPayments))
      : 0;

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;

  return (
    <>
      <Helmet>
        <title>Mortgage Amortization Calculator</title>
        <meta
          name="description"
          content="Use our Mortgage Amortization Calculator to view your loan repayment schedule. See how much goes toward principal and interest over time, and plan your mortgage payoff efficiently."
        />
        <meta
          name="keywords"
          content="mortgage amortization calculator, loan amortization schedule, mortgage calculator, amortization chart, mortgage payment breakdown, home loan calculator, interest vs principal calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/mortgage-amortization-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mortgage Amortization Calculator" />
        <meta
          property="og:description"
          content="Break down your mortgage payments with this Mortgage Amortization Calculator. See how your loan gets repaid month-by-month and explore payoff strategies."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/mortgage-amortization-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Amortization Calculator",
      "url": "https://www.unitedcalculator.net/finance/mortgage-amortization-calculator",
      "description": "Use the Mortgage Amortization Calculator to view a detailed schedule of your mortgage payments. Understand how much you pay in principal and interest each month.",
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
          "name": "What is a mortgage amortization calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mortgage amortization calculator helps you break down your home loan repayments into principal and interest over time, giving you a clear view of your repayment schedule."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use an amortization schedule?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using an amortization schedule helps you plan your finances, track how your mortgage balance reduces over time, and evaluate prepayment benefits."
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
          "name": "Mortgage Amortization Calculator",
          "item": "https://www.unitedcalculator.net/finance/mortgage-amortization-calculator"
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
              placeholder="300000"
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
              placeholder="5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="30"
            />
          </div>
        </div>

        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Mortgage Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Monthly Payment:</span>
            <span className="text-green-600">${monthlyPayment.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Total Interest Paid:</span>
            <span className="text-red-600">${totalInterest.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Total Payment:</span>
            <span className="text-blue-600">${totalPayment.toFixed(2)}</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default MortgageAmortizationCalculator;
