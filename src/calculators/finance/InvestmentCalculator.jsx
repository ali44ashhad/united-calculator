import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8");
  const [years, setYears] = useState("5");

  const calculateInvestment = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(t)) return null;

    const A = P * Math.pow(1 + r, t);
    const totalInterest = A - P;

    return {
      futureValue: A.toFixed(2),
      interestEarned: totalInterest.toFixed(2),
    };
  };

  const result = calculateInvestment();

  return (
    <>
      <Helmet>
        <title>Investment Calculator</title>
        <meta
          name="description"
          content="Use our Investment Calculator to estimate the future value of your investments. Enter your initial amount, rate of return, and time period to plan your financial goals."
        />
        <meta
          name="keywords"
          content="investment calculator, future value calculator, investment growth calculator, compound interest calculator, investment planning tool, ROI calculator, calculate investment returns, savings calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/investment-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Investment Calculator" />
        <meta
          property="og:description"
          content="Calculate how much your investments will grow over time using our easy Investment Calculator. Ideal for planning savings, SIPs, or lump sum investments."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/investment-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Investment Calculator",
      "url": "https://unitedcalculator.net/finance/investment-calculator",
      "description": "Use the Investment Calculator to forecast the growth of your investments based on principal, interest rate, and time. Ideal for financial planning, SIPs, and long-term goals.",
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
          "name": "What is an investment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An investment calculator estimates the future value of your investment based on the principal amount, interest rate, and investment duration."
          }
        },
        {
          "@type": "Question",
          "name": "How does an investment calculator help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you plan your financial goals by showing how your investments grow over time with compound interest or regular contributions."
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
          "name": "Investment Calculator",
          "item": "https://unitedcalculator.net/finance/investment-calculator"
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
              Investment Amount (₹)
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
              placeholder="e.g. 8"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Investment Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Investment Result
            </h2>
            <div className="flex justify-between text-lg font-semibold mb-2">
              <span className="text-gray-800">Future Value:</span>
              <span className="text-green-600">₹{result.futureValue}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Interest Earned:</span>
              <span className="text-blue-600">₹{result.interestEarned}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default InvestmentCalculator;
