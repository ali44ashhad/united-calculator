import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const DebtPayoffCalculator = () => {
  const [debtAmount, setDebtAmount] = useState("10000");
  const [annualInterestRate, setAnnualInterestRate] = useState("12");
  const [monthlyPayment, setMonthlyPayment] = useState("500");

  // Calculate months needed to pay off the debt and total interest paid
  const calculatePayoff = () => {
    const principal = parseFloat(debtAmount);
    const annualRate = parseFloat(annualInterestRate) / 100;
    const monthlyPay = parseFloat(monthlyPayment);

    if (
      isNaN(principal) ||
      isNaN(annualRate) ||
      isNaN(monthlyPay) ||
      principal <= 0 ||
      monthlyPay <= 0 ||
      annualRate < 0
    )
      return null;

    const monthlyInterestRate = annualRate / 12;

    if (monthlyPay <= principal * monthlyInterestRate) {
      // Payment too low to ever pay off the debt
      return { error: "Monthly payment is too low to pay off the debt." };
    }

    // Formula to calculate number of months to payoff
    const months =
      Math.log(monthlyPay / (monthlyPay - principal * monthlyInterestRate)) /
      Math.log(1 + monthlyInterestRate);

    // Total paid over payoff period
    const totalPaid = monthlyPay * months;
    const totalInterest = totalPaid - principal;

    return {
      months: Math.ceil(months),
      totalInterest: totalInterest.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
    };
  };

  const result = calculatePayoff();

  return (
    <>
      <Helmet>
        <title>Debt Payoff Calculator</title>
        <meta
          name="description"
          content="Use our Debt Payoff Calculator to create a strategy for paying off your loans faster. Compare snowball and avalanche methods, estimate your debt-free date, and save on interest."
        />
        <meta
          name="keywords"
          content="debt payoff calculator, debt repayment plan, snowball method calculator, avalanche method calculator, pay off debt faster, loan payoff calculator, credit card payoff calculator, debt strategy"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/debt-payoff-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Debt Payoff Calculator" />
        <meta
          property="og:description"
          content="Use the Debt Payoff Calculator to develop a personalized plan to eliminate debt. Compare methods like snowball and avalanche to see which works best for you."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/debt-payoff-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Debt Payoff Calculator",
      "url": "https://www.unitedcalculator.net/finance/debt-payoff-calculator",
      "description": "Use the Debt Payoff Calculator to plan and manage how you’ll pay off your loans or credit cards. Choose the best repayment strategy and track your debt-free journey.",
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
          "name": "What is a debt payoff calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A debt payoff calculator helps you figure out how long it will take to pay off your debts based on your current payments and interest rates. It also lets you compare strategies like snowball or avalanche."
          }
        },
        {
          "@type": "Question",
          "name": "Which debt repayment method should I use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The snowball method focuses on paying off smaller debts first for quick wins, while the avalanche method targets high-interest debts to save more money over time."
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
          "name": "Debt Payoff Calculator",
          "item": "https://www.unitedcalculator.net/finance/debt-payoff-calculator"
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
              Total Debt Amount ($)
            </label>
            <input
              type="number"
              value={debtAmount}
              onChange={(e) => setDebtAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10000"
              min="0"
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
              placeholder="e.g. 12"
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Monthly Payment ($)
            </label>
            <input
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500"
              min="0"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Debt Payoff Summary
            </h2>

            {result.error ? (
              <p className="text-red-600 font-medium">{result.error}</p>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Months to Pay Off:</span>
                  <span className="text-blue-600 font-medium">
                    {result.months}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Total Interest Paid:</span>
                  <span className="text-green-600 font-medium">
                    ${result.totalInterest}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-800">Total Amount Paid:</span>
                  <span className="text-yellow-600">${result.totalPaid}</span>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default DebtPayoffCalculator;
