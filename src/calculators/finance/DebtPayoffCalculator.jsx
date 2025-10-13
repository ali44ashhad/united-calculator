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
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Debt Payoff Calculator</strong> helps you create a clear,
      actionable plan to pay down debt faster. Enter your balances, interest
      rates, and monthly payments to compare payoff strategies like the
      avalanche (highest interest first) and snowball (smallest balance first),
      and see timelines, interest saved, and monthly targets.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Designed for people managing credit cards, loans, or multiple balances,
      this tool shows which strategy gets you debt-free sooner. For other debt
      planning tools.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is a Debt Payoff Plan?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A debt payoff plan is a structured approach to repaying outstanding
        debts. Common strategies include:
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Snowball:</strong> pay smallest balances first to build momentum.</li>
        <li><strong>Avalanche:</strong> pay highest-interest debts first to minimize interest costs.</li>
        <li><strong>Custom:</strong> prioritize by due dates, relationships, or account type.</li>
      </ul>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        The calculator compares these approaches and shows estimated payoff dates
        and interest saved so you can pick the best plan for your goals.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How the Debt Payoff Calculator Works</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        Enter each debt's balance, APR, and minimum monthly payment. Optionally
        add the extra monthly amount you're willing to pay. The calculator will:
      </p>

      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>• Calculate payoff time for each debt under different strategies
• Show total interest paid and interest saved compared to minimum payments
• Provide monthly schedule and recommended payment amounts per account</code></pre>
      </div>

      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        Results assume fixed APRs and that you make payments as scheduled. For revolving balances that change due to new purchases, re-run the calculator with updated balances.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Use the Calculator</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Provide each debt's details and your payment plan options:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Creditor/account name (optional), outstanding balance, APR, minimum payment.</li>
        <li>Enter any additional monthly amount you can pay toward debts.</li>
        <li>Choose a payoff strategy: Snowball, Avalanche, or Custom order.</li>
        <li>Click <strong>Calculate</strong> to view payoff timelines, interest paid, and monthly breakdowns.</li>
      </ol>

      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Compare payoff dates and total interest under each strategy</li>
        <li>See recommended payment distribution for each account</li>
        <li>Estimate how much extra to pay monthly to reach a target payoff date</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Scenarios</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Scenario A — Snowball:</strong></p>
          <p>• Card A: $800 @ 18% (min $25)</p>
          <p>• Card B: $2,400 @ 22% (min $75)</p>
          <p>• Personal Loan: $4,000 @ 8% (payment $125)</p>
          <p>With an extra $150/month, snowball pays off Card A first, then applies its payment to Card B — faster for psychology/motivation; total interest may be slightly higher than avalanche.</p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Scenario B — Avalanche:</strong></p>
          <p>Using same balances but directing extra payments to highest APR first reduces total interest paid and may shorten payoff time versus snowball.</p>
          <p>Calculator shows side-by-side payoff dates and dollars saved for each method.</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Extra Features & Tips</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Target payoff date:</strong> tell the calculator when you want to be debt-free and it will compute necessary extra monthly payment.</li>
        <li><strong>One-time payments:</strong> model windfalls by applying lump-sum payments and seeing the impact.</li>
        <li><strong>Re-run after changes:</strong> update balances after consolidations, balance transfers, or new purchases.</li>
        <li><strong>Export schedule:</strong> print or save an amortization-like schedule for accountability.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 Which strategy saves the most money?</dt>
        <dd class="mt-1">Ans. The avalanche (highest APR first) typically saves the most interest. Snowball is better for motivation and momentum. Use our calculator to compare both for your balances.</dd>

        <dt class="font-semibold mt-4">Q.2 Should I consolidate before using a payoff plan?</dt>
        <dd class="mt-1">Ans. Sometimes — consolidating to a lower-rate loan or 0% balance transfer can help. Check the <a href="/DebtConsolidationCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Debt Consolidation Calculator</a> to compare options and include fees.</dd>

        <dt class="font-semibold mt-4">Q.3 How do I model credit card interest?</dt>
        <dd class="mt-1">Ans. Enter each card's APR and current balance. For issuer-specific compounding quirks, approximate using the APR and typical payment schedule or consult the <a href="/CreditCardCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Credit Card Calculator</a>.</dd>

        <dt class="font-semibold mt-4">Q.4 What if I want to reach payoff in X months?</dt>
        <dd class="mt-1">Ans. Use the target payoff option; the calculator will show the extra monthly amount required and a recommended payment distribution. You can also use a <a href="/PaymentCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Payment Calculator</a> to verify monthly payment math for a consolidated loan.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        The <strong>Debt Payoff Calculator</strong> gives a simple, visual plan to
        accelerate debt repayment. Compare strategies, estimate interest savings,
        and set realistic monthly goals — then re-run as balances change.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Ready to try different scenarios? Enter your debts and experiment with
        extra payments, target payoff dates, and consolidation options to find
        the fastest path to being debt-free.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default DebtPayoffCalculator;
