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
          href="https://www.unitedcalculator.net/finance/budget-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Budget Calculator" />
        <meta
          property="og:description"
          content="Create a personal or household budget using our Budget Calculator. Track income, expenses, and savings to take control of your finances."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/budget-calculator"
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
      <article class="py-6">
        <p class="mb-6">
          Our <strong>Budget Calculator</strong> helps you track income,
          expenses, and savings to gain a clear picture of your financial
          health. By entering your monthly earnings and categorizing expenses
          such as housing, transportation, food, and entertainment, you’ll see
          whether you’re living within your means or overspending. This makes it
          easier to plan, save, and achieve financial goals.
        </p>

        <p class="mb-6">
          Whether you’re managing a household budget or planning for personal
          savings, this calculator provides accurate results to help you stay in
          control of your money. If you’d also like to explore how your
          investments grow over time, try our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/average-return-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Average Return Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is a Budget?</h2>
          <p>
            A budget is a financial plan that compares your income against
            expenses over a given period. It helps you allocate funds
            effectively for needs, wants, and savings. By regularly reviewing
            your budget, you can identify spending leaks, cut unnecessary costs,
            and redirect money toward important goals like debt repayment or
            retirement savings.
          </p>
          <p class="mt-2">Key components of a budget include:</p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>Income:</strong> Salary, business revenue, or passive
              income.
            </li>
            <li>
              <strong>Fixed Expenses:</strong> Rent, mortgage, utilities,
              insurance, and debt payments.
            </li>
            <li>
              <strong>Variable Expenses:</strong> Food, transportation, and
              entertainment.
            </li>
            <li>
              <strong>Savings:</strong> Contributions to savings accounts,
              emergency funds, or investments.
            </li>
            <li>
              <strong>Discretionary Spending:</strong> Non-essential purchases
              like travel or hobbies.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Budgeting Formula</h2>
          <p>
            One of the most common budgeting approaches is the{" "}
            <strong>50/30/20 Rule</strong>:
          </p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>50%</strong> of income → Needs (housing, bills, food)
            </li>
            <li>
              <strong>30%</strong> of income → Wants (entertainment, shopping)
            </li>
            <li>
              <strong>20%</strong> of income → Savings and debt repayment
            </li>
          </ul>
          <p class="mt-2">
            While the percentages may vary based on your situation, this method
            ensures a balance between enjoying life now and preparing for the
            future.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the Budget Calculator
          </h2>
          <p>Using the Budget Calculator is simple. Follow these steps:</p>
          <ol class="list-decimal ml-5 mb-3">
            <li>Enter your total monthly income.</li>
            <li>
              Input your fixed expenses (e.g., rent, utilities, loan payments).
            </li>
            <li>
              List variable expenses such as groceries and transportation.
            </li>
            <li>Add savings and discretionary spending categories.</li>
            <li>
              Click <strong>Calculate</strong> to see whether your expenses
              exceed your income and how much you can save monthly.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Highlights overspending or surplus</li>
            <li>Helps you balance needs vs. wants</li>
            <li>Shows potential monthly savings</li>
            <li>Encourages better financial discipline</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Suppose your monthly income is{" "}
              <strong>$4,000</strong>.
            </p>
            <p>Expenses:</p>
            <ul class="list-disc ml-5">
              <li>Housing: $1,200</li>
              <li>Utilities & Transportation: $600</li>
              <li>Food & Groceries: $500</li>
              <li>Entertainment: $400</li>
              <li>Savings: $800</li>
            </ul>
            <p>
              Total expenses = <strong>$3,500</strong>. Surplus ={" "}
              <strong>$500</strong> left each month, which you can add to
              savings or pay down debt.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Using the Budget Calculator
          </h2>
          <ul class="list-disc ml-5">
            <li>Gives a clear picture of your financial health</li>
            <li>Helps control overspending</li>
            <li>Encourages consistent savings habits</li>
            <li>Assists in planning for emergencies and long-term goals</li>
            <li>Improves financial decision-making</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What does the Budget Calculator show?
            </dt>
            <dd>
              Ans. It shows whether your income covers your expenses and how
              much you can save monthly.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 Can I use this for both personal and household budgeting?
            </dt>
            <dd>Ans. Yes, it works for individuals, couples, and families.</dd>

            <dt class="font-semibold mt-4">
              Q.3 How often should I update my budget?
            </dt>
            <dd>
              Ans. At least once a month, or whenever your income or expenses
              change significantly.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 Does it include debt repayment?
            </dt>
            <dd>
              Ans. Yes, loan and credit card payments should be listed under
              expenses.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 What if my expenses are greater than my income?
            </dt>
            <dd>
              Ans. The calculator will highlight overspending, helping you
              identify areas to cut costs.
            </dd>
          </dl>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            A <strong>Budget Calculator</strong> is an essential tool for anyone
            who wants to take control of their money. By comparing income and
            expenses, it highlights areas where you can save, cut back, or
            reallocate funds.
          </p>
          <p>
            With consistent use, you’ll develop stronger financial habits, avoid
            overspending, and work toward long-term stability and financial
            freedom.
          </p>
        </section>
      </article>
    </>
  );
};

export default BudgetCalculator;
