import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const HouseAffordabilityCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState("80000");
  const [monthlyDebt, setMonthlyDebt] = useState("500");
  const [downPayment, setDownPayment] = useState("20000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");

  const calculateAffordability = () => {
    const income = parseFloat(annualIncome) / 12; // monthly income
    const debt = parseFloat(monthlyDebt);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseFloat(loanTerm) * 12;

    if (
      isNaN(income) ||
      isNaN(debt) ||
      isNaN(down) ||
      isNaN(rate) ||
      isNaN(termMonths)
    )
      return null;

    // Max 36% of income can go to debt payments (standard DTI rule)
    const maxMonthlyPayment = income * 0.36 - debt;

    // Mortgage affordability based on maxMonthlyPayment
    const loanAmount =
      (maxMonthlyPayment * (1 - Math.pow(1 + rate, -termMonths))) / rate;

    const housePrice = loanAmount + down;

    return {
      maxHousePrice: housePrice.toFixed(2),
      maxLoanAmount: loanAmount.toFixed(2),
      monthlyPayment: maxMonthlyPayment.toFixed(2),
    };
  };

  const result = calculateAffordability();

  return (
    <>
      <Helmet>
        <title>
          House Affordability Calculator - Know How Much Home You Can Afford
        </title>
        <meta
          name="description"
          content="Use our House Affordability Calculator to estimate how much house you can afford based on your income, expenses, and mortgage terms. Plan your home purchase smartly."
        />
        <meta
          name="keywords"
          content="house affordability calculator, home affordability calculator, how much house can I afford, mortgage calculator, income-based house calculator, home loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/house-affordability-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="House Affordability Calculator - Know How Much Home You Can Afford"
        />
        <meta
          property="og:description"
          content="Find out how much house you can afford with our House Affordability Calculator. Enter your income, expenses, and mortgage details to get an accurate estimate."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/house-affordability-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "House Affordability Calculator",
      "url": "https://unitedcalculator.net/finance/house-affordability-calculator",
      "description": "Calculate how much house you can afford based on your income, monthly debts, and mortgage rate. This House Affordability Calculator helps you plan smart home purchases.",
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
          "name": "What is a house affordability calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A house affordability calculator helps you estimate the maximum home price you can afford based on your income, debts, and mortgage terms."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a home affordability calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It gives you a realistic idea of what home price fits your budget so you can avoid overspending and plan your finances better."
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
          "name": "House Affordability Calculator",
          "item": "https://unitedcalculator.net/finance/house-affordability-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Annual Income ($)</label>
            <input
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 80000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Monthly Debt ($)</label>
            <input
              type="number"
              value={monthlyDebt}
              onChange={(e) => setMonthlyDebt(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment ($)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6.5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              House Affordability Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Estimated Monthly Payment:
                </span>
                <span className="text-green-600 font-medium">
                  ${result.monthlyPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Loan Amount You Can Afford:
                </span>
                <span className="text-blue-600 font-medium">
                  ${result.maxLoanAmount}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  Max House Price You Can Afford:
                </span>
                <span className="text-yellow-600">${result.maxHousePrice}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default HouseAffordabilityCalculator;
