import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CDCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [term, setTerm] = useState("3");
  const [compoundingsPerYear, setCompoundingsPerYear] = useState("4"); // Quarterly

  const calculateCD = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(term);
    const n = parseFloat(compoundingsPerYear);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n) || n === 0) return null;

    const A = P * Math.pow(1 + r / n, n * t);
    const interest = A - P;

    return {
      maturityAmount: A.toFixed(2),
      interestEarned: interest.toFixed(2),
    };
  };

  const result = calculateCD();

  return (
    <>
      <Helmet>
        <title>CD Calculator - calculate your certificate deposite</title>
        <meta
          name="description"
          content="Use our CD Calculator to estimate the maturity value of your Certificate of Deposit. Calculate interest earned over time based on deposit amount, term, and rate."
        />
        <meta
          name="keywords"
          content="cd calculator, certificate of deposit calculator, calculate cd interest, cd maturity calculator, fixed deposit calculator, cd investment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/cd-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CD Calculator" />
        <meta
          property="og:description"
          content="Calculate your Certificate of Deposit interest earnings with our CD Calculator. Plan your fixed-term savings efficiently with accurate projections."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/cd-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "CD Calculator",
      "url": "https://www.unitedcalculator.net/finance/cd-calculator",
      "description": "Use our CD Calculator to calculate the final value of your Certificate of Deposit including earned interest. Great for fixed-term investment planning.",
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
          "name": "What is a CD calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CD calculator estimates the maturity value and interest earned from a Certificate of Deposit based on deposit amount, interest rate, and term."
          }
        },
        {
          "@type": "Question",
          "name": "Why use a Certificate of Deposit calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CD calculator helps you forecast the growth of your fixed-term deposit, allowing you to make informed investment decisions."
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
          "name": "CD Calculator",
          "item": "https://www.unitedcalculator.net/finance/cd-calculator"
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
              Principal Amount ($)
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
            <label className="block mb-1 font-medium">Term (Years)</label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Compoundings Per Year
            </label>
            <input
              type="number"
              value={compoundingsPerYear}
              onChange={(e) => setCompoundingsPerYear(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 4 for quarterly"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              CD Maturity Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Interest Earned:</span>
                <span className="text-blue-600 font-medium">
                  ${result.interestEarned}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Maturity Amount:</span>
                <span className="text-green-600">${result.maturityAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CDCalculator;
