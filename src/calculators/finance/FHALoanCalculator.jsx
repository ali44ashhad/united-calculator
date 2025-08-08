import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const FHALoanCalculator = () => {
  const [homePrice, setHomePrice] = useState("300000");
  const [downPaymentPercent, setDownPaymentPercent] = useState("3.5"); // default FHA min
  const [loanTerm, setLoanTerm] = useState("30"); // in years
  const [interestRate, setInterestRate] = useState("6.5"); // annual rate

  const calculateFHALoan = () => {
    const price = parseFloat(homePrice);
    const downPercent = parseFloat(downPaymentPercent) / 100;
    const termYears = parseFloat(loanTerm);
    const annualRate = parseFloat(interestRate) / 100;

    if (
      isNaN(price) ||
      isNaN(downPercent) ||
      isNaN(termYears) ||
      isNaN(annualRate)
    )
      return null;

    const downPayment = price * downPercent;
    const loanAmount = price - downPayment;
    const monthlyRate = annualRate / 12;
    const totalMonths = termYears * 12;

    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -totalMonths));

    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      downPayment: downPayment.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    };
  };

  const result = calculateFHALoan();

  return (
    <>
      <Helmet>
        <title>FHA Loan Calculator</title>
        <meta
          name="description"
          content="Use our FHA Loan Calculator to estimate your monthly mortgage payments, including FHA insurance premiums. Perfect for first-time homebuyers planning an FHA-backed home loan."
        />
        <meta
          name="keywords"
          content="FHA loan calculator, FHA mortgage calculator, FHA payment estimator, home loan calculator, FHA mortgage insurance, FHA loan eligibility, monthly mortgage calculator, FHA home loan tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/fha-loan-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FHA Loan Calculator" />
        <meta
          property="og:description"
          content="Estimate your monthly mortgage payments with our FHA Loan Calculator, including principal, interest, taxes, and insurance for FHA-insured home loans."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/fha-loan-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "FHA Loan Calculator",
      "url": "https://www.unitedcalculator.net/finance/fha-loan-calculator",
      "description": "Use the FHA Loan Calculator to estimate your monthly mortgage payment and upfront costs, including mortgage insurance premiums and property taxes.",
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
          "name": "What is an FHA loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An FHA loan calculator helps estimate your monthly mortgage payments for a home purchased with an FHA-insured loan, including mortgage insurance and taxes."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use an FHA loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First-time homebuyers or those considering an FHA-backed mortgage should use this calculator to understand their payment breakdown and affordability."
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
          "name": "FHA Loan Calculator",
          "item": "https://www.unitedcalculator.net/finance/fha-loan-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Home Price ($)</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 300000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment (%)</label>
            <input
              type="number"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 3.5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6.5"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              FHA Loan Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Down Payment:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.downPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="text-blue-600 font-medium">
                  ${result.loanAmount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment:</span>
                <span className="text-green-600 font-medium">
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
                <span className="text-purple-600">${result.totalPayment}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default FHALoanCalculator;
