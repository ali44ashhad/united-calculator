import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RealEstateCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState("5000000");
  const [downPayment, setDownPayment] = useState("1000000");
  const [loanTerm, setLoanTerm] = useState("20");
  const [interestRate, setInterestRate] = useState("7");

  const calculateMonthlyPayment = () => {
    const price = parseFloat(propertyPrice);
    const down = parseFloat(downPayment);
    const term = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;
    const principal = price - down;
    const n = term * 12;

    if (isNaN(principal) || isNaN(rate) || isNaN(n)) return null;

    const monthly =
      (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);

    return {
      monthly: monthly.toFixed(2),
      principal: principal.toFixed(2),
      totalPayment: (monthly * n).toFixed(2),
      totalInterest: (monthly * n - principal).toFixed(2),
    };
  };

  const result = calculateMonthlyPayment();

  return (
    <>
      <Helmet>
        <title>Real Estate Calculator</title>
        <meta
          name="description"
          content="Use our Real Estate Calculator to estimate property affordability, mortgage payments, ROI, and more. Ideal for home buyers, investors, and real estate planning."
        />
        <meta
          name="keywords"
          content="real estate calculator, property calculator, real estate investment calculator, home affordability calculator, mortgage calculator, ROI real estate calculator, rental property calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/real-estate-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Real Estate Calculator" />
        <meta
          property="og:description"
          content="Calculate home affordability, rental ROI, and mortgage payments with our Real Estate Calculator. Perfect for real estate investors and home buyers."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/real-estate-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Real Estate Calculator",
      "url": "https://unitedcalculator.net/finance/real-estate-calculator",
      "description": "Use our Real Estate Calculator to plan your property investment by estimating mortgage payments, cash flow, and returns. Helpful for real estate buyers and investors.",
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
          "name": "What is a Real Estate Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Real Estate Calculator helps estimate property affordability, mortgage payments, and investment returns for real estate transactions."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use a Real Estate Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Home buyers, investors, and financial planners use a Real Estate Calculator to assess profitability, affordability, and return on investment."
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
          "name": "Real Estate Calculator",
          "item": "https://unitedcalculator.net/finance/real-estate-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Property Price (₹)</label>
            <input
              type="number"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment (₹)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 7"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Real Estate Loan Summary
            </h2>
            <div className="space-y-2 text-lg font-semibold">
              <div className="flex justify-between">
                <span>Loan Amount:</span>
                <span className="text-blue-600">₹{result.principal}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Payment:</span>
                <span className="text-green-600">₹{result.monthly}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Payment:</span>
                <span>₹{result.totalPayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest:</span>
                <span className="text-red-600">₹{result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RealEstateCalculator;
