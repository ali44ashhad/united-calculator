import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CanadianMortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("100000");
  const [loanTerm, setLoanTerm] = useState("25");
  const [interestRate, setInterestRate] = useState("5");

  const calculateMortgage = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const termYears = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    const loanAmount = price - down;
    const totalMonths = termYears * 12;

    if (
      isNaN(price) ||
      isNaN(down) ||
      isNaN(termYears) ||
      isNaN(rate) ||
      totalMonths <= 0
    )
      return null;

    const EMI =
      (loanAmount * rate * Math.pow(1 + rate, totalMonths)) /
      (Math.pow(1 + rate, totalMonths) - 1);

    const totalPayment = EMI * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: EMI.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
    };
  };

  const result = calculateMortgage();

  return (
    <>
      <Helmet>
        <title>Canadian Mortgage Calculator | calculate your mortgage</title>
        <meta
          name="description"
          content="Use our Canadian Mortgage Calculator to estimate your monthly mortgage payments, interest cost, and amortization schedule. Ideal for home buyers in Canada."
        />
        <meta
          name="keywords"
          content="canadian mortgage calculator, mortgage calculator canada, home loan calculator canada, canada mortgage payments, mortgage amortization calculator, mortgage interest calculator canada"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Canadian Mortgage Calculator" />
        <meta
          property="og:description"
          content="Calculate your Canadian mortgage payments with ease using our Mortgage Calculator. Get detailed insights on principal, interest, and amortization."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Canadian Mortgage Calculator",
      "url": "https://www.unitedcalculator.net/finance/canadian-mortgage-calculator",
      "description": "Use our Canadian Mortgage Calculator to calculate monthly home loan payments, interest breakdown, and amortization schedule. Designed specifically for Canadian home buyers.",
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
          "name": "What is a Canadian mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Canadian mortgage calculator estimates monthly payments, interest costs, and amortization schedule based on Canadian mortgage terms and rates."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a Canadian mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a Canadian mortgage calculator helps home buyers in Canada plan their finances, understand mortgage costs, and compare loan options before purchasing a home."
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
          "name": "Canadian Mortgage Calculator",
          "item": "https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Home Price (CAD)</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment (CAD)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100000"
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
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Canadian Mortgage Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="text-blue-600 font-medium">
                  ${result.loanAmount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment (EMI):</span>
                <span className="text-green-600 font-medium">
                  ${result.emi}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest:</span>
                <span className="text-red-500 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Payment:</span>
                <span className="text-yellow-600">${result.totalPayment}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CanadianMortgageCalculator;
