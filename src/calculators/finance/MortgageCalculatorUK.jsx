import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MortgageCalculatorUK = () => {
  const [loanAmount, setLoanAmount] = useState("250000"); // in GBP
  const [interestRate, setInterestRate] = useState("4"); // annual %
  const [loanTerm, setLoanTerm] = useState("25"); // in years

  const calculateMortgage = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12; // monthly interest rate
    const n = parseFloat(loanTerm) * 12; // total number of payments

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const monthlyPayment =
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateMortgage();

  return (
    <>
      <Helmet>
        <title>Mortgage Calculator UK</title>
        <meta
          name="description"
          content="Use our Mortgage Calculator UK to estimate your monthly payments, interest costs, and total repayment amount. Ideal for home buyers in the UK planning their mortgage budget."
        />
        <meta
          name="keywords"
          content="mortgage calculator UK, UK home loan calculator, monthly mortgage payments, UK mortgage interest calculator, property loan UK, mortgage repayment calculator, UK housing loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/mortgage-calculator-uk"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mortgage Calculator UK" />
        <meta
          property="og:description"
          content="Estimate your monthly mortgage payments and interest using our UK Mortgage Calculator. Perfect for home buyers and real estate planning in the UK."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/mortgage-calculator-uk"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Calculator UK",
      "url": "https://www.unitedcalculator.net/finance/mortgage-calculator-uk",
      "description": "Calculate your mortgage payments in the UK based on loan amount, interest rate, and repayment term. Useful for budgeting your home loan and understanding total cost.",
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
          "name": "What is a Mortgage Calculator UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Mortgage Calculator UK helps you estimate your monthly mortgage payments, interest charges, and total repayment amount based on UK-specific loan parameters."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a mortgage calculator before buying a home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It allows you to plan your finances better by showing how much you'll pay monthly and in total, helping you make an informed home-buying decision."
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
          "name": "Mortgage Calculator UK",
          "item": "https://www.unitedcalculator.net/finance/mortgage-calculator-uk"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Loan Amount (£)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 250000"
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
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 25"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Mortgage Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment:</span>
                <span className="text-yellow-600 font-medium">
                  £{result.monthlyPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest Paid:</span>
                <span className="text-green-600 font-medium">
                  £{result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Repayment Amount:</span>
                <span className="text-blue-600">£{result.totalPayment}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default MortgageCalculatorUK;
