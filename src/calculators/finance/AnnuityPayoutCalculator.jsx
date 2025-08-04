import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AnnuityPayoutCalculator = () => {
  const [presentValue, setPresentValue] = useState("500000");
  const [interestRate, setInterestRate] = useState("5");
  const [years, setYears] = useState("20");

  const calculatePayout = () => {
    const PV = parseFloat(presentValue);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const n = parseFloat(years) * 12; // Number of months

    if (isNaN(PV) || isNaN(r) || isNaN(n) || r === 0) return null;

    const monthlyPayout = (PV * r) / (1 - Math.pow(1 + r, -n));
    const totalReceived = monthlyPayout * n;
    const totalInterest = totalReceived - PV;

    return {
      monthlyPayout: monthlyPayout.toFixed(2),
      totalReceived: totalReceived.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculatePayout();

  return (
    <>
      <Helmet>
        <title>
          Calculate Your Monthly Annuity Payouts by using lifetime annuity
          payout calculator | United Calculator
        </title>
        <meta
          name="description"
          content="Use our lifetime annuity payout calculator to estimate the monthly or yearly income you will receive from an annuity investment. Ideal for retirement and long-term financial planning."
        />
        <meta
          name="keywords"
          content="lifetime annuity payout calculator, annuity payout calculator, monthly annuity calculator, annuity payment calculator, retirement income calculator, pension payout calculator, calculate annuity income, fixed annuity payout calculator, annuity calculator india"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/annuity-payout-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Calculate Your Monthly Annuity Payouts - Annuity Payout Calculator | United Calculator"
        />
        <meta
          property="og:description"
          content="Use our annuity payout calculator to estimate periodic income based on your investment, interest rate, and duration. Ideal for financial planning and retirement."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/annuity-payout-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Annuity Payout Calculator - Monthly Retirement Income Estimator"
        />
        <meta
          name="twitter:description"
          content="Estimate your monthly or annual annuity payments using our annuity payout calculator. Perfect for secure retirement planning."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Annuity Payout Calculator",
      "url": "https://unitedcalculator.net/finance/annuity-payout-calculator",
      "description": "Free annuity payout calculator to estimate your recurring income based on investment amount, interest rate, and time period. Ideal for retirement income planning.",
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
          "name": "What is an annuity payout calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An annuity payout calculator helps you determine the periodic income you can expect from your annuity investment based on factors like investment amount, duration, and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use an annuity payout calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone who is investing in annuities and wants to estimate the recurring payments—monthly, quarterly, or annually—should use this calculator for better financial planning."
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
          "name": "Annuity Payout Calculator",
          "item": "https://unitedcalculator.net/finance/annuity-payout-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Present Value ($)</label>
            <input
              type="number"
              value={presentValue}
              onChange={(e) => setPresentValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Payout Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Annuity Payout Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payout:</span>
                <span className="text-blue-600 font-medium">
                  ${result.monthlyPayout}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Received Over Time:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalReceived}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Interest Earned:</span>
                <span className="text-green-600">${result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AnnuityPayoutCalculator;
