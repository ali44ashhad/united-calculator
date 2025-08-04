import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BudgetCalculator = () => {
  const [income, setIncome] = useState("50000");
  const [expenses, setExpenses] = useState({
    rent: "15000",
    food: "8000",
    transport: "3000",
    utilities: "2000",
    entertainment: "2000",
    others: "1000",
  });

  const calculateBudget = () => {
    const totalIncome = parseFloat(income);
    const totalExpenses = Object.values(expenses).reduce(
      (acc, val) => acc + parseFloat(val || 0),
      0
    );

    if (isNaN(totalIncome) || isNaN(totalExpenses)) return null;

    const savings = totalIncome - totalExpenses;
    const savingsPercent = ((savings / totalIncome) * 100).toFixed(2);

    return {
      totalIncome: totalIncome.toFixed(2),
      totalExpenses: totalExpenses.toFixed(2),
      savings: savings.toFixed(2),
      savingsPercent,
    };
  };

  const handleExpenseChange = (key, value) => {
    setExpenses((prev) => ({ ...prev, [key]: value }));
  };

  const result = calculateBudget();

  return (
    <>
      <Helmet>
        <title>Budget Calculator | calculate your budget today</title>
        <meta
          name="description"
          content="Use our Budget Calculator to manage your monthly expenses, income, and savings. Perfect for planning personal or household budgets effectively."
        />
        <meta
          name="keywords"
          content="budget calculator, monthly budget calculator, personal budget planner, income and expense calculator, household budget calculator, savings planner"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/budget-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Budget Calculator" />
        <meta
          property="og:description"
          content="Create a personal or household budget using our Budget Calculator. Track income, expenses, and savings to take control of your finances."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/budget-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Budget Calculator",
      "url": "https://unitedcalculator.net/finance/budget-calculator",
      "description": "Plan and manage your monthly budget with our easy-to-use Budget Calculator. Track expenses, income, and savings efficiently.",
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
          "name": "What is a budget calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget calculator helps you plan your monthly income, expenses, and savings. It's a simple tool for financial management and goal setting."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a budget calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a budget calculator helps you gain control over your finances, avoid overspending, and set savings goals for the future."
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
          "name": "Budget Calculator",
          "item": "https://unitedcalculator.net/finance/budget-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Monthly Income (₹)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 50000"
            />
          </div>

          <h3 className="font-semibold text-gray-700 mt-4 mb-2">
            Monthly Expenses
          </h3>

          {Object.keys(expenses).map((key) => (
            <div key={key}>
              <label className="block mb-1 capitalize font-medium">
                {key} (₹)
              </label>
              <input
                type="number"
                value={expenses[key]}
                onChange={(e) => handleExpenseChange(key, e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder={`e.g. ${key === "rent" ? "15000" : "1000"}`}
              />
            </div>
          ))}
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Budget Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Income:</span>
                <span className="text-blue-600 font-medium">
                  ₹{result.totalIncome}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Expenses:</span>
                <span className="text-red-500 font-medium">
                  ₹{result.totalExpenses}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Savings:</span>
                <span className="text-green-600">
                  ₹{result.savings} ({result.savingsPercent}%)
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BudgetCalculator;
