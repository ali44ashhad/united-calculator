import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RothIRACalculator = () => {
  const [annualContribution, setAnnualContribution] = useState("6000");
  const [annualReturnRate, setAnnualReturnRate] = useState("7");
  const [years, setYears] = useState("30");

  const calculateRothIRA = () => {
    const contribution = parseFloat(annualContribution);
    const rate = parseFloat(annualReturnRate) / 100;
    const time = parseFloat(years);

    if (isNaN(contribution) || isNaN(rate) || isNaN(time)) return null;

    let futureValue = 0;

    for (let i = 0; i < time; i++) {
      futureValue = (futureValue + contribution) * (1 + rate);
    }

    return {
      futureValue: futureValue.toFixed(2),
    };
  };

  const result = calculateRothIRA();

  return (
    <>
      <Helmet>
        <title>
          Roth IRA Calculator | Estimate Your Tax-Free Retirement Savings
        </title>
        <meta
          name="description"
          content="Use our Roth IRA Calculator to estimate your tax-free retirement savings. See how much you can grow with Roth IRA contributions based on age, income, and expected return."
        />
        <meta
          name="keywords"
          content="roth ira calculator, roth ira contribution calculator, tax free retirement calculator, ira savings calculator, roth ira growth calculator, retirement planning, roth ira estimate"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/roth-ira-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Roth IRA Calculator | Estimate Your Tax-Free Retirement Savings"
        />
        <meta
          property="og:description"
          content="Estimate your tax-free retirement savings with our Roth IRA Calculator. Input your age, income, and expected returns to project future Roth IRA growth."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/roth-ira-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Roth IRA Calculator",
      "url": "https://unitedcalculator.net/finance/roth-ira-calculator",
      "description": "Use our Roth IRA Calculator to forecast your retirement savings. This tool helps you estimate tax-free growth based on contributions, investment returns, and time horizon.",
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
          "name": "What is a Roth IRA Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Roth IRA Calculator helps you estimate how much your Roth IRA contributions can grow over time. It considers factors like annual contributions, investment returns, and retirement age."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a Roth IRA instead of a Traditional IRA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike a Traditional IRA, Roth IRA contributions are made with after-tax dollars, but withdrawals are tax-free in retirement. This makes it a good option for those expecting to be in a higher tax bracket later."
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
          "name": "Roth IRA Calculator",
          "item": "https://unitedcalculator.net/finance/roth-ira-calculator"
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
              Annual Contribution ($)
            </label>
            <input
              type="number"
              value={annualContribution}
              onChange={(e) => setAnnualContribution(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Return Rate (%)
            </label>
            <input
              type="number"
              value={annualReturnRate}
              onChange={(e) => setAnnualReturnRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 7"
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
              placeholder="e.g. 30"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Roth IRA Summary
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Future Value:</span>
              <span className="text-green-600">${result.futureValue}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RothIRACalculator;
