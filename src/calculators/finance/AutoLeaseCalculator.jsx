import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AutoLeaseCalculator = () => {
  const [msrp, setMsrp] = useState("30000");
  const [downPayment, setDownPayment] = useState("2000");
  const [leaseTerm, setLeaseTerm] = useState("36"); // months
  const [moneyFactor, setMoneyFactor] = useState("0.0025");
  const [residualValuePercent, setResidualValuePercent] = useState("55");

  const calculateLease = () => {
    const msrpVal = parseFloat(msrp);
    const down = parseFloat(downPayment);
    const term = parseFloat(leaseTerm);
    const mf = parseFloat(moneyFactor);
    const residual = parseFloat(residualValuePercent);

    if (
      isNaN(msrpVal) ||
      isNaN(down) ||
      isNaN(term) ||
      isNaN(mf) ||
      isNaN(residual)
    )
      return null;

    const residualValue = (residual / 100) * msrpVal;
    const depreciationFee = (msrpVal - residualValue) / term;
    const financeFee = (msrpVal + residualValue) * mf;
    const monthlyPayment = depreciationFee + financeFee;
    const totalLeaseCost = monthlyPayment * term + down;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalLeaseCost: totalLeaseCost.toFixed(2),
      residualValue: residualValue.toFixed(2),
    };
  };

  const result = calculateLease();

  return (
    <>
      <Helmet>
        <title>
          Auto Lease Calculator - Estimate Monthly Car Lease Payments | United
          Calculator
        </title>
        <meta
          name="description"
          content="Use our Auto Lease Calculator to estimate your monthly car lease payments of tesla. Include vehicle price, lease term, interest rate, and residual value to plan your finances smartly."
        />
        <meta
          name="keywords"
          content="auto lease calculator, car lease calculator, lease payment calculator, vehicle lease calculator, car lease monthly payment calculator, auto lease calculator india, estimate lease payments, car leasing tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/auto-lease-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auto Lease Calculator - Estimate Monthly Car Lease Payments | United Calculator"
        />
        <meta
          property="og:description"
          content="Calculate monthly car lease payments with our free Auto Lease Calculator. Adjust lease term, interest rate, and car value to get accurate estimates."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/auto-lease-calculator"
        />
        {/* Twitter */}

        <meta
          name="twitter:title"
          content="Auto Lease Calculator - Plan Your Monthly Lease Cost"
        />
        <meta
          name="twitter:description"
          content="Quickly estimate your auto lease payments using our simple and accurate car lease calculator. Ideal for budgeting and car financing decisions."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Auto Lease Calculator",
      "url": "https://www.unitedcalculator.net/finance/auto-lease-calculator",
      "description": "Use our free Auto Lease Calculator to compute your monthly lease payments based on car price, interest rate, lease term, and residual value. Ideal for vehicle budgeting.",
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
          "name": "What is an auto lease calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An auto lease calculator helps estimate your monthly lease payments based on car price, interest rate, residual value, and lease duration."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use an auto lease calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you plan your budget, compare lease offers, and understand total costs before leasing a car."
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
          "name": "Auto Lease Calculator",
          "item": "https://www.unitedcalculator.net/finance/auto-lease-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">MSRP ($)</label>
            <input
              type="number"
              value={msrp}
              onChange={(e) => setMsrp(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment ($)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Lease Term (months)
            </label>
            <input
              type="number"
              value={leaseTerm}
              onChange={(e) => setLeaseTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 36"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Money Factor</label>
            <input
              type="number"
              step="0.0001"
              value={moneyFactor}
              onChange={(e) => setMoneyFactor(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 0.0025"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Residual Value (%)</label>
            <input
              type="number"
              value={residualValuePercent}
              onChange={(e) => setResidualValuePercent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 55"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Lease Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment:</span>
                <span className="text-blue-600 font-medium">
                  ${result.monthlyPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Residual Value:</span>
                <span className="text-blue-600 font-medium">
                  ${result.residualValue}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span className="text-gray-800">Total Lease Cost:</span>
                <span className="text-green-600">${result.totalLeaseCost}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AutoLeaseCalculator;
