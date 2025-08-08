import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const InterestRateCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [interest, setInterest] = useState("1000");
  const [time, setTime] = useState("2");

  const calculateInterestRate = () => {
    const P = parseFloat(principal);
    const I = parseFloat(interest);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(I) || isNaN(T) || P === 0 || T === 0) return null;

    const rate = (I * 100) / (P * T);

    return {
      rate: rate.toFixed(2),
    };
  };

  const result = calculateInterestRate();

  return (
    <>
      <Helmet>
        <title>Interest Rate Calculator</title>
        <meta
          name="description"
          content="Use our Interest Rate Calculator to easily calculate the interest rate based on loan amount, payment, and time period. Ideal for loans, savings, and investments."
        />
        <meta
          name="keywords"
          content="interest rate calculator, loan interest rate, calculate interest rate, investment rate calculator, personal loan calculator, interest formula calculator, rate of interest calculator, simple interest rate"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/interest-rate-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Interest Rate Calculator" />
        <meta
          property="og:description"
          content="Calculate the interest rate for your loan or investment using this Interest Rate Calculator. Just enter principal, time, and payment details."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/interest-rate-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Interest Rate Calculator",
      "url": "https://unitedcalculator.net/finance/interest-rate-calculator",
      "description": "Use the Interest Rate Calculator to compute the rate of interest on loans or investments using principal, payment, and time period. Works for savings, EMIs, and more.",
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
          "name": "What is an interest rate calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An interest rate calculator helps determine the rate of interest based on the principal, payment, and time period. It’s useful for loans, savings, and investments."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate interest rate manually?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To manually calculate interest rate, use the formula: Interest Rate = (Interest / Principal) / Time. However, using a calculator saves time and avoids errors."
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
          "name": "Interest Rate Calculator",
          "item": "https://unitedcalculator.net/finance/interest-rate-calculator"
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
              Interest Earned (₹)
            </label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
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
              Interest Rate Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Annual Interest Rate:</span>
              <span className="text-blue-600">{result.rate}%</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default InterestRateCalculator;
