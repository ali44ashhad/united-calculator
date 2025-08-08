import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SavingsCalculator = () => {
  const [initialAmount, setInitialAmount] = useState("10000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [annualInterestRate, setAnnualInterestRate] = useState("5");
  const [years, setYears] = useState("10");

  const calculateSavings = () => {
    const P = parseFloat(initialAmount);
    const PMT = parseFloat(monthlyContribution);
    const r = parseFloat(annualInterestRate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (isNaN(P) || isNaN(PMT) || isNaN(r) || isNaN(n)) return null;

    const futureValue =
      P * Math.pow(1 + r, n) + PMT * ((Math.pow(1 + r, n) - 1) / r);

    return {
      futureValue: futureValue.toFixed(2),
    };
  };

  const result = calculateSavings();

  return (
    <>
      <Helmet>
        <title>Savings Calculator | Estimate Future Savings & Interest</title>
        <meta
          name="description"
          content="Use our Savings Calculator to estimate how your money will grow over time. Enter initial deposit, interest rate, and monthly contributions to calculate future savings."
        />
        <meta
          name="keywords"
          content="savings calculator, future savings calculator, interest calculator, savings goal calculator, compound interest calculator, money growth calculator, calculate savings"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/savings-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Savings Calculator | Estimate Future Savings & Interest"
        />
        <meta
          property="og:description"
          content="Find out how much you’ll save with our Savings Calculator. Calculate future value with compound interest and regular monthly deposits."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/savings-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Savings Calculator",
      "url": "https://unitedcalculator.net/finance/savings-calculator",
      "description": "Estimate how your savings will grow over time using our Savings Calculator. Input interest rate, monthly deposit, and duration to calculate future savings with or without compounding.",
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
          "name": "What is a savings calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A savings calculator helps estimate how much money you’ll have in the future based on your initial amount, interest rate, monthly contributions, and time period."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this calculator for compound interest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the calculator factors in compound interest to give you an accurate picture of how your savings will grow over time."
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
          "name": "Savings Calculator",
          "item": "https://unitedcalculator.net/finance/savings-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Initial Amount ($)</label>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Monthly Contribution ($)
            </label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Years</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Savings Growth
            </h2>
            <div className="text-lg font-semibold flex justify-between">
              <span>Future Value:</span>
              <span className="text-green-600">${result.futureValue}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default SavingsCalculator;
