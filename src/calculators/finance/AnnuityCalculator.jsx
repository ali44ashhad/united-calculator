import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AnnuityCalculator = () => {
  const [paymentAmount, setPaymentAmount] = useState("1000");
  const [interestRate, setInterestRate] = useState("6");
  const [numberOfPeriods, setNumberOfPeriods] = useState("20");

  const calculateAnnuity = () => {
    const P = parseFloat(paymentAmount);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const n = parseFloat(numberOfPeriods) * 12; // Total months

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r);
    const totalPaid = P * n;
    const totalInterest = futureValue - totalPaid;

    return {
      futureValue: futureValue.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateAnnuity();

  return (
    <>
      <Helmet>
        <title>
          Calculate your retirement return by our free annuity calculator ||
          United Calculator
        </title>
        <meta
          name="description"
          content="Use our free Annuity Calculator to calculate your guaranteed income during retirement. Plan your future with fixed payments, calculate returns, and make valuble investment decisions."
        />
        <meta
          name="keywords"
          content="annuity calculator, annuity income calculator, retirement annuity calculator, fixed annuity calculator, immediate annuity calculator, pension annuity calculator, online annuity calculator, annuity calculator india, annuity payout calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/annuity-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="calculate Your Retirement Income with the Annuity Calculator || United Calculator"
        />
        <meta
          property="og:description"
          content="Use our Annuity Calculator to determine your retirement income from fixed or immediate annuity plans. Plan a secure financial future now."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/annuity-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Annuity Calculator by united calculator || Retirement Income Estimator"
        />
        <meta
          name="twitter:description"
          content="Calculate your fixed retirement income with our annuity calculator. Ideal for pension planning and income security."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Annuity Calculator",
      "url": "https://unitedcalculator.net/finance/annuity-calculator",
      "description": "Free annuity calculator to project retirement income from fixed or immediate annuities. Plan your finances and secure your future income stream.",
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
          "name": "What is an annuity calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An annuity calculator helps to estimate the income you’ll receive from an annuity plan based on your investment amount, rate of return, and investment duration."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use an annuity calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone can invest for retirement or looking to secure regular income from a lump sum investment should use an annuity calculator for better financial planning."
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
          "name": "Annuity Calculator",
          "item": "https://unitedcalculator.net/finance/annuity-calculator"
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
              Monthly Payment ($)
            </label>
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
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
              placeholder="e.g. 6"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Years</label>
            <input
              type="number"
              value={numberOfPeriods}
              onChange={(e) => setNumberOfPeriods(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Annuity Result Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Contributions:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalPaid}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Estimated Interest Earned:
                </span>
                <span className="text-green-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Future Value:</span>
                <span className="text-blue-600">${result.futureValue}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AnnuityCalculator;
