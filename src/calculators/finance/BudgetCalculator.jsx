import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const EXPENSE_LABELS = {
  rent: "Rent / housing",
  food: "Food & groceries",
  transport: "Transport",
  utilities: "Utilities",
  entertainment: "Entertainment",
  others: "Other expenses",
};

const BudgetCalculator = () => {
  const DEFAULTS = {
    income: "50000",
    expenses: {
      rent: "15000",
      food: "8000",
      transport: "3000",
      utilities: "2000",
      entertainment: "2000",
      others: "1000",
    },
  };

  const [income, setIncome] = useState(DEFAULTS.income);
  const [expenses, setExpenses] = useState(DEFAULTS.expenses);

  const calculateBudget = () => {
    const totalIncome = parseFloat(income);
    const totalExpenses = Object.values(expenses).reduce(
      (acc, val) => acc + parseFloat(val || 0),
      0
    );

    if (isNaN(totalIncome) || isNaN(totalExpenses)) return null;

    const savings = totalIncome - totalExpenses;
    const savingsPercent =
      totalIncome !== 0 ? ((savings / totalIncome) * 100).toFixed(2) : "0.00";

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
        <title>
          Budget Calculator - Monthly Income, Expenses & Savings Planner
        </title>
        <meta
          name="description"
          content="Plan your monthly budget: enter income and expense categories to see total spending, surplus or shortfall, and savings as a percent of income."
        />
        <meta
          name="keywords"
          content="budget calculator, monthly budget calculator, personal budget planner, household budget calculator, income and expense calculator, savings planner, monthly savings calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/budget-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Budget Calculator - Income & Expense Planner"
        />
        <meta
          property="og:description"
          content="Track monthly income and categorized expenses to spot surplus, overspending, and savings rate."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/budget-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Budget Calculator - Personal Finance Planner"
        />
        <meta
          name="twitter:description"
          content="Compare monthly income to rent, food, transport, and more—see savings or deficit instantly."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Budget Calculator",
      "url": "https://www.unitedcalculator.net/finance/budget-calculator",
      "description": "Plan and manage your monthly budget with our easy-to-use Budget Calculator. Track expenses, income, and savings efficiently.",
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
          "name": "Budget Calculator",
          "item": "https://www.unitedcalculator.net/finance/budget-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">Monthly income</label>
          <div className="relative max-w-full md:max-w-md">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
              ₹
            </span>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.income}
            />
          </div>
        </div>

        <div>
          <h3 className="font-h3 text-h3 text-on-surface mb-4">
            Monthly expenses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(expenses).map((key) => (
              <div key={key} className="space-y-2">
                <label className="font-h3 text-h3 text-on-surface text-sm md:text-base">
                  {EXPENSE_LABELS[key] || key}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={expenses[key]}
                    onChange={(e) => handleExpenseChange(key, e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                    placeholder="0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={() => {
                setIncome(DEFAULTS.income);
                setExpenses({ ...DEFAULTS.expenses });
              }}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Budget Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total income</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `₹${result.totalIncome}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total expenses</span>
              <span className="font-code-num text-code-num">
                {result ? `₹${result.totalExpenses}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Savings (surplus / deficit)</span>
              <span className="font-code-num text-code-num">
                {result ? (
                  <>
                    ₹{result.savings}{" "}
                    <span className="text-body-lg font-body-lg text-on-surface-variant">
                      ({result.savingsPercent}% of income)
                    </span>
                  </>
                ) : (
                  "—"
                )}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BudgetCalculator;
