import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CommissionCalculator = () => {
  const [saleAmount, setSaleAmount] = useState("1000");
  const [commissionRate, setCommissionRate] = useState("10");

  const calculateCommission = () => {
    const sale = parseFloat(saleAmount);
    const rate = parseFloat(commissionRate) / 100;

    if (isNaN(sale) || isNaN(rate)) return null;

    const commission = sale * rate;
    const earnings = sale - commission;

    return {
      commission: commission.toFixed(2),
      earnings: earnings.toFixed(2),
    };
  };

  const result = calculateCommission();

  return (
    <>
      <Helmet>
        <title>Commission Calculator</title>
        <meta
          name="description"
          content="Use our Commission Calculator to easily calculate sales commissions based on percentage or tiered structures. Perfect for salespeople, freelancers, and businesses."
        />
        <meta
          name="keywords"
          content="commission calculator, sales commission calculator, calculate commission, commission percentage calculator, freelance commission calculator, tiered commission calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/commission-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commission Calculator" />
        <meta
          property="og:description"
          content="Quickly calculate commissions based on sales amount and percentage using our Commission Calculator. Ideal for sales professionals and business owners."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/commission-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Commission Calculator",
      "url": "https://www.unitedcalculator.net/finance/commission-calculator",
      "description": "Use the Commission Calculator to determine commission earnings based on flat or tiered percentage structures. Great for sales, consulting, and service industries.",
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
          "name": "What is a commission calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A commission calculator helps determine earnings from sales by applying a percentage-based or tiered rate to the sales amount."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use a commission calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is useful for sales representatives, real estate agents, freelancers, and businesses to calculate commissions based on revenue or sales deals."
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
          "name": "Commission Calculator",
          "item": "https://www.unitedcalculator.net/finance/commission-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Sale Amount ($)</label>
            <input
              type="number"
              value={saleAmount}
              onChange={(e) => setSaleAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Commission Rate (%)
            </label>
            <input
              type="number"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Commission Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Commission Amount:</span>
                <span className="text-red-600 font-medium">
                  ${result.commission}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  You Keep (After Commission):
                </span>
                <span className="text-green-600">${result.earnings}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CommissionCalculator;
