import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CashBackOrLowInterestCalculator = () => {
  const [purchaseAmount, setPurchaseAmount] = useState("1000");
  const [cashBack, setCashBack] = useState("50");
  const [interestRate, setInterestRate] = useState("10");
  const [repaymentPeriod, setRepaymentPeriod] = useState("12");

  const calculate = () => {
    const amount = parseFloat(purchaseAmount);
    const cb = parseFloat(cashBack);
    const rate = parseFloat(interestRate) / 100 / 12; // monthly rate
    const months = parseInt(repaymentPeriod);

    if (
      isNaN(amount) ||
      isNaN(cb) ||
      isNaN(rate) ||
      isNaN(months) ||
      months === 0
    ) {
      return null;
    }

    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    const totalInterest = monthlyPayment * months - amount;
    const netCostWithInterest = amount + totalInterest;
    const netCostWithCashBack = amount - cb;

    const betterOption =
      netCostWithCashBack < netCostWithInterest ? "Cash Back" : "Low Interest";

    return {
      totalInterest: totalInterest.toFixed(2),
      netCostWithInterest: netCostWithInterest.toFixed(2),
      netCostWithCashBack: netCostWithCashBack.toFixed(2),
      betterOption,
    };
  };

  const result = calculate();

  return (
    <>
      <Helmet>
        <title>Cash Back or Low Interest Calculator</title>
        <meta
          name="description"
          content="Use our Cash Back or Low Interest Calculator to compare which credit card or loan offer gives you the best value — upfront cash back or lower interest over time."
        />
        <meta
          name="keywords"
          content="cash back vs low interest calculator, credit card cash back calculator, compare cash back or low interest, loan incentive calculator, finance comparison tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/cash-back-or-low-interest-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cash Back or Low Interest Calculator"
        />
        <meta
          property="og:description"
          content="Compare the benefits of cash back offers versus low interest rates using our calculator. Ideal for evaluating credit card or loan deals."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/cash-back-or-low-interest-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cash Back or Low Interest Calculator",
      "url": "https://unitedcalculator.net/finance/cash-back-or-low-interest-calculator",
      "description": "Use our Cash Back or Low Interest Calculator to find out which financial offer provides greater savings — upfront rewards or long-term interest reduction.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
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
          "name": "What is a Cash Back or Low Interest Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This calculator helps you compare the financial impact of choosing between a cash back incentive or a lower interest rate when taking a loan or using a credit card."
          }
        },
        {
          "@type": "Question",
          "name": "When should I use this calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use it when evaluating promotional credit card offers or loans to see whether you save more with upfront cash back or long-term interest reduction."
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
          "name": "Cash Back or Low Interest Calculator",
          "item": "https://unitedcalculator.net/finance/cash-back-or-low-interest-calculator"
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
              Purchase Amount ($)
            </label>
            <input
              type="number"
              value={purchaseAmount}
              onChange={(e) => setPurchaseAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Cash Back ($)</label>
            <input
              type="number"
              value={cashBack}
              onChange={(e) => setCashBack(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 50"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Interest Rate (Annual %)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Repayment Period (months)
            </label>
            <input
              type="number"
              value={repaymentPeriod}
              onChange={(e) => setRepaymentPeriod(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Comparison Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest Paid:</span>
                <span className="text-blue-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Cost with Low Interest:</span>
                <span className="text-blue-600 font-medium">
                  ${result.netCostWithInterest}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Cost with Cash Back:</span>
                <span className="text-blue-600 font-medium">
                  ${result.netCostWithCashBack}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Better Option:</span>
                <span className="text-green-600">{result.betterOption}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CashBackOrLowInterestCalculator;
