import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PaybackPeriodCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("100000");
  const [annualCashInflow, setAnnualCashInflow] = useState("25000");

  const calculatePaybackPeriod = () => {
    const investment = parseFloat(initialInvestment);
    const inflow = parseFloat(annualCashInflow);

    if (isNaN(investment) || isNaN(inflow) || inflow <= 0) return null;

    const paybackPeriod = investment / inflow;

    return {
      years: Math.floor(paybackPeriod),
      months: Math.round((paybackPeriod % 1) * 12),
      totalYears: paybackPeriod.toFixed(2),
    };
  };

  const result = calculatePaybackPeriod();

  return (
    <>
      <Helmet>
        <title>Payback Period Calculator</title>
        <meta
          name="description"
          content="Use our Payback Period Calculator to determine how long it takes to recover your investment. Ideal for evaluating business projects, capital budgeting, and investment decisions."
        />
        <meta
          name="keywords"
          content="payback period calculator, investment recovery calculator, ROI calculator, capital budgeting tool, breakeven calculator, project evaluation calculator, investment payback tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/payback-period-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Payback Period Calculator" />
        <meta
          property="og:description"
          content="Calculate the payback period for your investment with this easy-to-use Payback Period Calculator. Find out how long it will take to recover your initial costs."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/payback-period-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Payback Period Calculator",
      "url": "https://www.unitedcalculator.net/finance/payback-period-calculator",
      "description": "Use the Payback Period Calculator to calculate how many years it will take to recover your investment based on cash inflows. Perfect for business and investment planning.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
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
          "name": "What is a payback period calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A payback period calculator helps you determine how long it will take to recover the initial investment from the cash inflows of a project or asset."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the payback period important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps investors and businesses evaluate the risk and profitability of a project by showing how quickly the initial investment can be recouped."
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
          "name": "Payback Period Calculator",
          "item": "https://www.unitedcalculator.net/finance/payback-period-calculator"
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
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Cash Inflow ($)
            </label>
            <input
              type="number"
              value={annualCashInflow}
              onChange={(e) => setAnnualCashInflow(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 25000"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Payback Period Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Payback Period:</span>
                <span className="text-yellow-600 font-medium">
                  {result.years} years {result.months} months
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Payback Time:</span>
                <span className="text-blue-600">{result.totalYears} years</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PaybackPeriodCalculator;
