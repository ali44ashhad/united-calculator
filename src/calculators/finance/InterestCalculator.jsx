import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const InterestCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [time, setTime] = useState("2");

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) return null;

    const interest = (P * R * T) / 100;
    const total = P + interest;

    return {
      interest: interest.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const result = calculateInterest();

  return (
    <>
      <Helmet>
        <title>
          Interest Calculator - Calculate Simple & Compound Interest
        </title>
        <meta
          name="description"
          content="Use our Interest Calculator to compute simple and compound interest easily. Calculate interest on savings, loans, or investments over any time period with precision."
        />
        <meta
          name="keywords"
          content="interest calculator, simple interest calculator, compound interest calculator, investment interest calculator, loan interest calculator, online interest calculator, calculate interest, finance calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/interest-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Interest Calculator - Calculate Simple & Compound Interest"
        />
        <meta
          property="og:description"
          content="Easily calculate both simple and compound interest with our Interest Calculator. Perfect for loans, savings, and investment scenarios."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/interest-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Interest Calculator",
      "url": "https://unitedcalculator.net/finance/interest-calculator",
      "description": "The Interest Calculator lets you quickly calculate simple and compound interest on any amount. Useful for personal finance, loan planning, and investment growth projections.",
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
          "name": "What is an interest calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An interest calculator helps you determine the amount of interest earned or paid over time using either simple or compound interest formulas."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the difference between simple and compound interest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simple interest is calculated only on the principal amount, while compound interest is calculated on the principal plus previously earned interest."
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
          "name": "Interest Calculator",
          "item": "https://unitedcalculator.net/finance/interest-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Principal Amount (₹)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Time Period (Years)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Interest Calculation Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Simple Interest:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.interest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Amount:</span>
                <span className="text-blue-600">₹{result.total}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default InterestCalculator;
