import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const TakeHomePaycheckCalculator = () => {
  const [grossIncome, setGrossIncome] = useState("60000");
  const [federalTaxRate, setFederalTaxRate] = useState("12");
  const [stateTaxRate, setStateTaxRate] = useState("5");
  const [otherDeductions, setOtherDeductions] = useState("2000");

  const calculateTakeHomePay = () => {
    const income = parseFloat(grossIncome);
    const federalTax = parseFloat(federalTaxRate) / 100;
    const stateTax = parseFloat(stateTaxRate) / 100;
    const otherDeduct = parseFloat(otherDeductions);

    if (
      isNaN(income) ||
      isNaN(federalTax) ||
      isNaN(stateTax) ||
      isNaN(otherDeduct)
    )
      return null;

    const totalTax = income * (federalTax + stateTax);
    const netIncome = income - totalTax - otherDeduct;

    return {
      totalTax: totalTax.toFixed(2),
      deductions: otherDeduct.toFixed(2),
      netPay: netIncome.toFixed(2),
    };
  };

  const result = calculateTakeHomePay();

  return (
    <>
      <Helmet>
        <title>
          Take Home Paycheck Calculator | Estimate Net Salary After Tax
        </title>
        <meta
          name="description"
          content="Use our Take Home Paycheck Calculator to calculate your net salary after deductions like taxes, insurance, and retirement contributions. Get accurate estimates of your actual take-home pay."
        />
        <meta
          name="keywords"
          content="take home paycheck calculator, net salary calculator, after tax salary calculator, paycheck estimator, salary after deductions, income tax calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/take-home-paycheck-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Take Home Paycheck Calculator | Estimate Net Salary After Tax"
        />
        <meta
          property="og:description"
          content="Estimate your take-home pay after tax deductions with our Take Home Paycheck Calculator. Know your net salary after income tax, insurance, and other contributions."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/take-home-paycheck-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Take Home Paycheck Calculator",
      "url": "https://www.unitedcalculator.net/finance/take-home-paycheck-calculator",
      "description": "Use our Take Home Paycheck Calculator to estimate your actual net salary after all deductions such as taxes, health insurance, and retirement contributions. Plan your budget better with clear insights into your real income.",
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
          "name": "What is a take-home paycheck calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A take-home paycheck calculator estimates your net salary after deducting federal and state taxes, Social Security, Medicare, insurance, and other withholdings from your gross salary."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a take-home pay calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you understand your actual income, plan your expenses, and budget effectively by giving you a clear picture of what you’ll receive after all deductions."
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
          "name": "Take Home Paycheck Calculator",
          "item": "https://www.unitedcalculator.net/finance/take-home-paycheck-calculator"
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
              Annual Gross Income ($)
            </label>
            <input
              type="number"
              value={grossIncome}
              onChange={(e) => setGrossIncome(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 60000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Federal Tax Rate (%)
            </label>
            <input
              type="number"
              value={federalTaxRate}
              onChange={(e) => setFederalTaxRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">State Tax Rate (%)</label>
            <input
              type="number"
              value={stateTaxRate}
              onChange={(e) => setStateTaxRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Other Deductions ($)
            </label>
            <input
              type="number"
              value={otherDeductions}
              onChange={(e) => setOtherDeductions(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2000"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Take-Home Pay Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Taxes Paid:</span>
                <span className="text-red-600 font-medium">
                  ${result.totalTax}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Other Deductions:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.deductions}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Annual Take-Home Pay:</span>
                <span className="text-green-600">${result.netPay}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default TakeHomePaycheckCalculator;
