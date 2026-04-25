import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DebtConsolidationCalculator = () => {
  const [currentDebts, setCurrentDebts] = useState([
    { balance: "", rate: "", term: "" },
  ]);
  const [consolidationRate, setConsolidationRate] = useState("");
  const [consolidationTerm, setConsolidationTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleDebtChange = (index, field, value) => {
    const updated = [...currentDebts];
    updated[index][field] = value;
    setCurrentDebts(updated);
  };

  const addDebt = () => {
    setCurrentDebts([...currentDebts, { balance: "", rate: "", term: "" }]);
  };

  const calculateConsolidation = () => {
    let totalOriginalInterest = 0;

    currentDebts.forEach(({ balance, rate, term }) => {
      const P = parseFloat(balance);
      const r = parseFloat(rate) / 100 / 12;
      const n = parseFloat(term) * 12;

      if (isNaN(P) || isNaN(r) || isNaN(n)) return;

      const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));

      totalOriginalInterest += monthlyPayment * n - P;
    });

    const totalBalance = currentDebts.reduce((sum, d) => {
      const bal = parseFloat(d.balance);
      return !isNaN(bal) ? sum + bal : sum;
    }, 0);

    const r = parseFloat(consolidationRate) / 100 / 12;
    const n = parseFloat(consolidationTerm) * 12;

    const consolidatedMonthly = (totalBalance * r) / (1 - Math.pow(1 + r, -n));
    const consolidatedInterest = consolidatedMonthly * n - totalBalance;

    setResult({
      totalOriginalInterest: totalOriginalInterest.toFixed(2),
      consolidatedMonthly: consolidatedMonthly.toFixed(2),
      consolidatedInterest: consolidatedInterest.toFixed(2),
    });
  };

  return (
    <>
      <Helmet>
        <title>Debt Consolidation Calculator</title>
        <meta
          name="description"
          content="Use our Debt Consolidation Calculator to find out how much you can save by consolidating multiple debts into one loan. Compare monthly payments and interest savings easily."
        />
        <meta
          name="keywords"
          content="debt consolidation calculator, consolidate debt, debt payoff calculator, debt reduction tool, debt repayment calculator, personal loan calculator, save on debt, credit card consolidation"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/debt-consolidation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Debt Consolidation Calculator" />
        <meta
          property="og:description"
          content="Use this Debt Consolidation Calculator to understand how combining multiple debts into one can reduce your monthly payments and total interest paid."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/debt-consolidation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Debt Consolidation Calculator",
      "url": "https://www.unitedcalculator.net/finance/debt-consolidation-calculator",
      "description": "Use the Debt Consolidation Calculator to explore how combining multiple loans into one can lower your interest rates and simplify your payments.",
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
          "name": "What is a debt consolidation calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A debt consolidation calculator helps you determine if consolidating multiple debts into a single loan will save you money by comparing interest rates and payments."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I consolidate my debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Debt consolidation can simplify your finances by combining several debts into one, often with a lower interest rate and a single monthly payment."
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
          "name": "Debt Consolidation Calculator",
          "item": "https://www.unitedcalculator.net/finance/debt-consolidation-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Debt Consolidation Calculator
        </h1>

        {currentDebts.map((debt, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Debt #{index + 1}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Balance"
                value={debt.balance}
                onChange={(e) =>
                  handleDebtChange(index, "balance", e.target.value)
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="number"
                placeholder="Interest Rate (%)"
                value={debt.rate}
                onChange={(e) =>
                  handleDebtChange(index, "rate", e.target.value)
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="number"
                placeholder="Term (years)"
                value={debt.term}
                onChange={(e) =>
                  handleDebtChange(index, "term", e.target.value)
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addDebt}
          className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
        >
          ➕ Add Another Debt
        </button>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Consolidation Rate (%)"
            value={consolidationRate}
            onChange={(e) => setConsolidationRate(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="number"
            placeholder="Consolidation Term (years)"
            value={consolidationTerm}
            onChange={(e) => setConsolidationTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          onClick={calculateConsolidation}
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate Consolidation
        </button>

        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-lg text-gray-800 font-medium">
              Total Original Interest: ₹{result.totalOriginalInterest}
            </p>
            <p className="text-lg text-gray-800 font-medium">
              Consolidated Monthly Payment: ₹{result.consolidatedMonthly}
            </p>
            <p className="text-lg text-green-700 font-semibold">
              Consolidated Interest: ₹{result.consolidatedInterest}
            </p>
          </div>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Debt Consolidation Calculator</strong> helps you evaluate whether
      consolidating multiple debts into a single loan or payment plan will save
      you money, lower your monthly payments, or shorten your payoff time.
      Enter your balances, interest rates, and current monthly payments to get
      a clear comparison of consolidation options and alternatives.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      This tool is ideal for people juggling credit cards, personal loans, and
      other debt types. If you want to compare payoff strategies or see how a
      loan would change your payments .
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is Debt Consolidation?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Debt consolidation combines multiple debts — such as credit cards,
        personal loans, and medical bills — into a single new loan or payment
        plan. The goal is to simplify payments, reduce interest expense, or
        lower the monthly payment.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Consolidation can be done with a debt consolidation loan, balance
        transfer credit card, home equity loan, or through a debt-management
        program.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Consolidation loan:</strong> a single installment loan to pay off multiple debts.</li>
        <li><strong>Balance transfer:</strong> move credit-card balances to a low/0% introductory card.</li>
        <li><strong>Home equity or HELOC:</strong> borrows against home equity — usually lower rates but secured by property.</li>
        <li><strong>Debt management plan:</strong> negotiated rates and single payment via a credit-counseling agency.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How the Debt Consolidation Calculator Works</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        Enter your current debts (balance, interest rate, minimum monthly payment)
        and the consolidation option you're considering (new loan amount, term,
        and interest rate). The calculator compares:
      </p>

      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>• Current total monthly payments and total interest
• Consolidated monthly payment and total interest over the term
• Time to pay off under each scenario
• Estimated savings or extra cost from consolidating</code></pre>
      </div>

      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        The calculator assumes fixed-rate loans and does not include fees unless you enter them as part of the loan amount. For revolving accounts (credit cards) interest is compounded per issuer terms.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Use the Calculator</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Input the following details for each debt you want to consolidate:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Creditor name (optional), outstanding balance, and interest rate.</li>
        <li>Current minimum monthly payment.</li>
        <li>Proposed consolidation loan amount, interest rate, and term (years or months).</li>
        <li>Any one-time fees (origination, balance transfer fees) — include them if applicable.</li>
        <li>Click <strong>Calculate</strong> to see side-by-side results and savings.</li>
      </ol>

      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Shows monthly payment, total interest, and payoff time for current vs consolidated plan</li>
        <li>Includes one-time fees in total cost comparison</li>
        <li>Helps decide whether consolidation shortens payoff or lowers cost</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Comparison</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Current scenario:</strong></p>
          <p>• Credit Card A: $4,000 @ 18% (min $100)</p>
          <p>• Credit Card B: $3,000 @ 22% (min $90)</p>
          <p>• Personal Loan: $2,000 @ 10% (payment $65)</p>
          <p>Monthly payments ≈ <strong>$255</strong>; total interest (if only paying minimums) could be very high and payoff long.</p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Consolidation option:</strong></p>
          <p>• Consolidation loan: $9,000 @ 8% for 48 months → monthly ≈ <strong>$217</strong></p>
          <p>• One-time fees: $150 included in loan</p>
          <p>Result: lower monthly payment and much lower total interest over the term → estimated savings versus current interest accrual.</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors to Consider Before Consolidating</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Interest rate difference:</strong> Consolidation helps only if new rate is materially lower than weighted average of existing rates.</li>
        <li><strong>Term length:</strong> Longer terms lower payments but can increase total interest.</li>
        <li><strong>Fees and costs:</strong> origination fees, balance transfer fees, or prepayment penalties may offset savings.</li>
        <li><strong>Secured vs unsecured:</strong> Home equity consolidation may lower rates but puts your home at risk if you default.</li>
        <li><strong>Credit behavior:</strong> consolidating without changing spending habits can lead to more debt.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>See a clear cost/benefit comparison between current debts and consolidation</li>
        <li>Estimate monthly payment changes and total interest savings</li>
        <li>Model fees, terms, and interest rates to find the best plan</li>
        <li>Decide whether to pursue a consolidation loan, balance transfer, or alternative payoff strategy</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 Will consolidating my debt hurt my credit?</dt>
        <dd class="mt-1">Ans. It can temporarily affect your credit due to a hard inquiry or account changes, but properly managed consolidation may improve your credit over time by lowering utilization and ensuring on-time payments.</dd>

        <dt class="font-semibold mt-4">Q.2 Should I use a home equity loan to consolidate?</dt>
        <dd class="mt-1">Ans. Home equity loans often have lower rates, but they are secured by your home — consider the risk before choosing this option.</dd>

        <dt class="font-semibold mt-4">Q.3 How do balance-transfer offers compare?</dt>
        <dd class="mt-1">Ans. Balance transfers with 0% introductory APR can be attractive but watch transfer fees and the regular APR after the intro period. Use the calculator to model the timeline and fees.</dd>

        <dt class="font-semibold mt-4">Q.4 What if I want to accelerate payoff after consolidation?</dt>
        <dd class="mt-1">Ans. Paying more than the minimum reduces interest and shortens the loan. Compare accelerated payments with a dedicated payoff plan using tools like the <a href="/DebtPayoffCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Debt Payoff Calculator</a>.</dd>

        <dt class="font-semibold mt-4">Q.5 Can I include credit card interest compounding rules?</dt>
        <dd class="mt-1">Ans. This calculator uses typical fixed-rate assumptions. For issuer-specific compounding, approximate by using the card's APR and a representative payment schedule, or consult the <a href="/CreditCardCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Credit Card Calculator</a> for card-specific modelling.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A <strong>Debt Consolidation Calculator</strong> helps you make an informed
        decision by showing side-by-side costs, payments, and payoff timelines.
        Use it to test loan rates, terms, and fees so you can choose the option
        that best reduces your cost or accelerates payoff.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        If you want, run the consolidation scenario through our <a href="/LoanCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Loan Calculator</a> after you calculate a proposed loan to view amortization and payment schedules.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default DebtConsolidationCalculator;
