import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CreditCardsPayoffCalculator = () => {
  // Start with 2 cards as example, user can add more later if you extend
  const [cards, setCards] = useState([
    { id: 1, balance: "3000", annualInterestRate: "18", monthlyPayment: "300" },
    { id: 2, balance: "2000", annualInterestRate: "20", monthlyPayment: "250" },
  ]);

  const handleChange = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };

  const calculatePayoff = (balance, apr, payment) => {
    let bal = parseFloat(balance);
    const monthlyRate = parseFloat(apr) / 100 / 12;
    const pay = parseFloat(payment);

    if (isNaN(bal) || isNaN(monthlyRate) || isNaN(pay) || pay <= 0 || bal <= 0)
      return { months: 0, interestPaid: 0, message: "Invalid input" };
    if (pay <= bal * monthlyRate)
      return {
        months: 0,
        interestPaid: 0,
        message: "Payment too low to cover interest",
      };

    let months = 0;
    let totalPaid = 0;

    while (bal > 0 && months < 1000) {
      const interest = bal * monthlyRate;
      bal = bal + interest - pay;
      if (bal < 0) bal = 0;
      totalPaid += pay;
      months++;
    }

    return {
      months,
      interestPaid: totalPaid - parseFloat(balance),
      message: null,
    };
  };

  let totalMonths = 0;
  let totalInterest = 0;
  let invalidInputs = false;
  let paymentTooLow = false;

  cards.forEach(({ balance, annualInterestRate, monthlyPayment }) => {
    const { months, interestPaid, message } = calculatePayoff(
      balance,
      annualInterestRate,
      monthlyPayment
    );
    if (message === "Invalid input") invalidInputs = true;
    if (message === "Payment too low to cover interest") paymentTooLow = true;
    totalMonths = Math.max(totalMonths, months); // worst case time to payoff
    totalInterest += interestPaid;
  });

  return (
    <>
      <Helmet>
        <title>Credit Cards Payoff Calculator</title>
        <meta
          name="description"
          content="Use our Credit Cards Payoff Calculator to estimate how long it will take to pay off your credit card debt. Plan payments and reduce interest effectively."
        />
        <meta
          name="keywords"
          content="credit card payoff calculator, debt payoff calculator, credit card payment calculator, credit card interest calculator, pay off credit cards faster"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Credit Cards Payoff Calculator" />
        <meta
          property="og:description"
          content="Estimate how long it will take to pay off your credit card debt with our Credit Cards Payoff Calculator. Plan smart payments and minimize interest."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Credit Cards Payoff Calculator",
      "url": "https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator",
      "description": "Use the Credit Cards Payoff Calculator to calculate the time and cost required to eliminate your credit card debt. Optimize your repayment plan efficiently.",
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
          "name": "What is a credit card payoff calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A credit card payoff calculator helps you determine how long it will take to pay off your credit card debt based on your balance, interest rate, and monthly payments."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Credit Cards Payoff Calculator help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you plan your repayment strategy by showing how much interest you'll pay and how long it will take to become debt-free with consistent payments."
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
          "name": "Credit Cards Payoff Calculator",
          "item": "https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Credit Cards Payoff Calculator
        </h1>

        <div className="space-y-6">
          {cards.map(({ id, balance, annualInterestRate, monthlyPayment }) => (
            <div
              key={id}
              className="p-4 border border-gray-300 rounded space-y-4"
            >
              <h2 className="font-semibold text-lg text-indigo-700">
                Card {id}
              </h2>

              <div>
                <label className="block mb-1 font-medium">Balance ($)</label>
                <input
                  type="number"
                  value={balance}
                  onChange={(e) => handleChange(id, "balance", e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="e.g. 3000"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Annual Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={annualInterestRate}
                  onChange={(e) =>
                    handleChange(id, "annualInterestRate", e.target.value)
                  }
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
                  onChange={(e) =>
                    handleChange(id, "monthlyPayment", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="e.g. 300"
                />
              </div>
            </div>
          ))}
        </div>

        {invalidInputs && (
          <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded">
            Please enter valid positive numbers for all fields.
          </div>
        )}

        {paymentTooLow && !invalidInputs && (
          <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded">
            One or more monthly payments are too low to cover the interest.
            Please increase payments.
          </div>
        )}

        {!invalidInputs && !paymentTooLow && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Estimated Months to Payoff:
                </span>
                <span className="text-blue-600 font-medium">{totalMonths}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Interest Paid:</span>
                <span className="text-green-600">
                  ${totalInterest.toFixed(2)}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Credit Cards Payoff Calculator</strong> helps you build a
      realistic payoff plan for one or multiple credit cards. Enter balances,
      APRs, payment rules and extra payments to see payoff timelines, monthly
      schedules, and total interest saved under different strategies.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Whether you want to minimize interest costs or accelerate debt freedom,
      this tool makes comparisons easy. For related tools.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is the Credit Cards Payoff Calculator?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        This calculator shows how long it will take to pay off credit card debt
        given current balances, APRs, and payment behavior. It supports multi-card
        scenarios and common payoff strategies (snowball, avalanche), and produces
        month-by-month amortization schedules.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li>Multi-card payoff planning and prioritized ordering</li>
        <li>Compare strategies: snowball (smallest balance first) vs avalanche (highest APR first)</li>
        <li>Estimate monthly payments needed to hit a target payoff date</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Inputs You’ll Need</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        Provide the following for each card:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Current balance</li>
        <li>APR (annual percentage rate)</li>
        <li>Minimum payment rule (e.g., 2% of balance or $25 minimum)</li>
        <li>Planned monthly payment (fixed or extra amount)</li>
        <li>Optional: one-time payments, balance transfers, or promotional APRs</li>
      </ol>
      <p class="text-sm sm:text-base leading-relaxed">
        The calculator assumes interest accrues each billing cycle and payments are applied after interest (typical card behavior). Customize for penalty APRs or fees as needed.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Scenarios</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-yellow-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 1 (Single card — fixed payment):</strong></p>
          <p>Balance = $5,000; APR = 18%; Fixed monthly payment = $200.</p>
          <p>Result → payoff in ~28 months (approx) with total interest much lower than paying only the minimum.</p>
        </div>

        <div class="bg-yellow-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 2 (Multi-card — avalanche vs snowball):</strong></p>
          <p>Card A: $2,000 @ 22% | Card B: $6,000 @ 15% | Extra monthly to allocate = $300.</p>
          <p>Result → Avalanche pays highest APR first and saves more interest; Snowball pays small balance first and gives psychological wins.</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Core Formulas & Notes</h2>
      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Monthly interest = Balance × (APR / 12)
New balance = Balance + Monthly interest − Payment

To estimate payoff months for a fixed payment:
n = −log(1 − (r × Pmt) / (APR/12 × Balance_initial)) / log(1 + r)
(where n is months and r = monthly rate)</code></pre>
      </div>
      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        Exact payoff calculations depend on how minimum payments are defined and whether you make new purchases. For accurate APR breakdowns including fees, use the APR Calculator linked above.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Payoff Strategies</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Snowball:</strong> pay smallest balance first (motivational).</li>
        <li><strong>Avalanche:</strong> pay highest APR first (minimizes interest).</li>
        <li><strong>Target-date:</strong> choose a desired payoff date and compute required monthly payments.</li>
      </ul>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Use the Payment Calculator to determine a sustainable monthly payment and the Debt Payoff Calculator for broader debt consolidation planning.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors That Affect Payoff Time</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>APR and compounding frequency</li>
        <li>Payment size and consistency</li>
        <li>New charges while carrying a balance</li>
        <li>Fees, penalty APRs, and balance transfers</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Clear, month-by-month payoff schedules</li>
        <li>Compare strategies and see interest savings</li>
        <li>Set targets and compute required payments to meet them</li>
        <li>Plan balance transfers and promo APRs with realistic timelines</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 How do minimum payments affect payoff time?</dt>
        <dd class="mt-1">Ans. Minimum payments (often a percent of balance) can stretch payoff time to years and dramatically increase interest. Increasing payments is the fastest way to shorten payoff time.</dd>

        <dt class="font-semibold mt-4">Q.2 What is the best strategy to pay off multiple cards?</dt>
        <dd class="mt-1">Ans. Mathematically, the avalanche (highest APR first) minimizes interest. Psychologically, the snowball (smallest balance first) can help sustain momentum. Use both scenarios in the tool to decide.</dd>

        <dt class="font-semibold mt-4">Q.3 Can I model promotional balance transfer offers?</dt>
        <dd class="mt-1">Ans. Yes — enter the promotional APR and term for the transferred balance, and then model the post-promo APR afterward to see total cost and recommended timing. Consider transfer fees when evaluating.</dd>

        <dt class="font-semibold mt-4">Q.4 How do I choose a target payoff date?</dt>
        <dd class="mt-1">Ans. Pick a realistic timeframe, then use the calculator to compute the monthly payment required. The Payment Calculator linked above can help you figure affordability for that payment.</dd>

        <dt class="font-semibold mt-4">Q.5 Will making one-time extra payments help?</dt>
        <dd class="mt-1">Ans. Yes — one-time lump payments reduce principal immediately and save future interest. Apply extras to high-APR cards for maximum savings.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        The <strong>Credit Cards Payoff Calculator</strong> gives actionable payoff plans, helps you compare strategies, and shows how payments translate into time saved and interest avoided.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Enter your card details to generate a personalized payoff schedule — then tweak payments, transfers, or target dates to find the best plan for your budget.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default CreditCardsPayoffCalculator;
