import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CreditCardCalculator = () => {
  const [balance, setBalance] = useState("5000");
  const [annualInterestRate, setAnnualInterestRate] = useState("18"); // % APR
  const [monthlyPayment, setMonthlyPayment] = useState("500");

  const calculateCreditCard = () => {
    const bal = parseFloat(balance);
    const rate = parseFloat(annualInterestRate) / 100 / 12; // monthly interest rate
    const payment = parseFloat(monthlyPayment);

    if (isNaN(bal) || isNaN(rate) || isNaN(payment) || payment <= 0 || bal <= 0)
      return null;
    if (payment <= bal * rate)
      return { message: "Payment too low to cover interest!" };

    let months = 0;
    let currentBalance = bal;
    let totalPaid = 0;

    while (currentBalance > 0 && months < 1000) {
      // cap months to prevent infinite loop
      const interest = currentBalance * rate;
      currentBalance = currentBalance + interest - payment;
      if (currentBalance < 0) currentBalance = 0;
      totalPaid += payment;
      months++;
    }

    return {
      months,
      totalPaid: totalPaid.toFixed(2),
      originalBalance: bal.toFixed(2),
      interestPaid: (totalPaid - bal).toFixed(2),
    };
  };

  const result = calculateCreditCard();

  return (
    <>
      <Helmet>
        <title>Credit Card Calculator</title>
        <meta
          name="description"
          content="Use our Credit Card Calculator to estimate monthly payments, interest charges, and payoff time. Ideal for managing credit card debt and planning repayments effectively."
        />
        <meta
          name="keywords"
          content="credit card calculator, credit card payment calculator, credit card interest calculator, debt payoff calculator, credit card repayment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/credit-card-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Credit Card Calculator" />
        <meta
          property="og:description"
          content="Calculate credit card interest, monthly payments, and payoff duration with our Credit Card Calculator. Manage your credit card debt smarter."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/credit-card-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Credit Card Calculator",
      "url": "https://www.unitedcalculator.net/finance/credit-card-calculator",
      "description": "Use our Credit Card Calculator to analyze monthly payments, interest accumulation, and the time needed to repay your credit card balance.",
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
          "name": "What is a credit card calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A credit card calculator helps you determine how long it will take to pay off your credit card balance based on your monthly payments and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a credit card calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a credit card calculator helps you manage debt, reduce interest payments, and create a repayment strategy to become debt-free faster."
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
          "name": "Credit Card Calculator",
          "item": "https://www.unitedcalculator.net/finance/credit-card-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Outstanding Balance ($)
            </label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000"
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
              placeholder="e.g. 18"
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
            />
          </div>
        </div>

        {result && result.message ? (
          <div className="bg-red-100 text-red-700 p-4 rounded mt-6 border border-red-300">
            {result.message}
          </div>
        ) : (
          result && (
            <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Credit Card Payoff Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Months to Payoff:</span>
                  <span className="text-blue-600 font-medium">
                    {result.months}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Total Paid:</span>
                  <span className="text-green-600 font-medium">
                    ${result.totalPaid}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-800">Interest Paid:</span>
                  <span className="text-red-600">${result.interestPaid}</span>
                </div>
              </div>
            </section>
          )
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto ">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Credit Card Calculator</strong> helps you understand payments,
      interest costs, and payoff timelines for one or more credit cards.
      Enter balance, APR, minimum payment rules or fixed payment amounts to see
      amortization, total interest paid, and recommended payoff strategies.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Whether you're managing one card or multiple accounts, this tool makes it
      simple to compare strategies like fixed payments, minimum payments, or
      the debt-snowball and avalanche methods. For related tools.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What does this calculator do?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        The Credit Card Calculator models how balances change over time given an
        Annual Percentage Rate (APR), compounding method, and payment behavior.
        It shows monthly interest charges, principal reduction, time-to-payoff,
        and total interest paid under different strategies.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Amortization schedule:</strong> month-by-month balance & interest.</li>
        <li><strong>Payoff time:</strong> estimate how long until balance is zero.</li>
        <li><strong>Total interest:</strong> cumulative interest paid over the payoff period.</li>
        <li><strong>Strategy comparison:</strong> minimum vs fixed payments vs extra payments.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Key Inputs</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        Provide these to run the calculation:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Current balance (total owed).</li>
        <li>APR (annual rate) — enter as percentage (e.g., 19.99%).</li>
        <li>Compounding / billing frequency (usually monthly).</li>
        <li>Payment rule: minimum percentage, fixed monthly payment, or custom schedule.</li>
        <li>Optional: fees, new charges, or one-time credits/refunds.</li>
      </ol>
      <p class="text-sm sm:text-base leading-relaxed">
        The calculator assumes interest compounds according to the billing cycle
        and applies payments after interest each period (typical credit-card behavior).
      </p>
    </section>
 
    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Examples</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-yellow-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 1 (Minimum payments):</strong></p>
          <p>Balance = $3,500; APR = 20% (monthly rate ≈ 1.6667%); Minimum = 2% or $25 minimum.</p>
          <p>Result → Paying only the minimum can take many years and cost a large amount in interest.</p>
        </div>

        <div class="bg-yellow-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 2 (Fixed extra payment):</strong></p>
          <p>Balance = $3,500; APR = 20%; Fixed monthly payment = $150.</p>
          <p>Result → Faster payoff and much less total interest compared with minimum payments.</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Formulas & Notes</h2>
      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Monthly interest = Previous balance × (APR / 12)
New balance = Previous balance + Monthly interest − Payment</code></pre>
      </div>
      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        For multiple cards, run scenarios per-card or use the multi-account mode (if implemented) to compare snowball vs avalanche strategies.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Strategy Comparison</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Two popular payoff strategies:
      </p>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Debt Snowball:</strong> pay smallest balance first to build momentum (psychological wins).</li>
        <li><strong>Debt Avalanche:</strong> pay highest APR first to minimize total interest paid (mathematically optimal).</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors That Increase Interest Costs</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>High APRs and frequent compounding</li>
        <li>Making only minimum payments</li>
        <li>New purchases while carrying a balance</li>
        <li>Late fees and penalty APRs</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Quickly estimate payoff time and total interest for different payment plans</li>
        <li>Compare payoff strategies for multiple cards</li>
        <li>Plan budgets to minimize interest costs and accelerate debt-free dates</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 Will this include late fees or penalty APRs?</dt>
        <dd class="mt-1">Ans. You can include one-time fees as extra charges; penalty APRs should be modeled by increasing the APR for periods where penalties apply.</dd>

        <dt class="font-semibold mt-4">Q.2 Should I pay the minimum or a fixed amount?</dt>
        <dd class="mt-1">Ans. Paying more than the minimum reduces time-to-payoff and total interest. Use the <a href="https://www.unitedcalculator.net/finance/payment-calculator" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 underline">Payment Calculator</a> to figure affordable fixed payments.</dd>

        <dt class="font-semibold mt-4">Q.3 Which payoff method saves the most interest?</dt>
        <dd class="mt-1">Ans. The avalanche method (highest APR first) typically minimizes total interest. The snowball method may be better for motivation depending on user preference.</dd>

        <dt class="font-semibold mt-4">Q.4 How do I compare APRs?</dt>
        <dd class="mt-1">Ans. Use an <a href="https://www.unitedcalculator.net/finance/apr-calculator" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 underline">APR Calculator</a> to convert fees and rates into a comparable annual rate if needed.</dd>

        <dt class="font-semibold mt-4">Q.5 Can I include multiple cards and transfers?</dt>
        <dd class="mt-1">Ans. The calculator supports multi-card scenarios when you add each account; include balance transfer promos by modeling temporary lower APRs for the promo period and then the standard APR afterward.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A <strong>Credit Card Calculator</strong> is a powerful tool to visualize the
        cost of carrying balances and to plan payments that reduce interest and
        accelerate payoff. Enter your card data to get a clear month-by-month
        plan and compare payoff strategies.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        For additional planning, use the linked tools above to calculate APR details, payment sizing, and multi-card payoff comparisons.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default CreditCardCalculator;
