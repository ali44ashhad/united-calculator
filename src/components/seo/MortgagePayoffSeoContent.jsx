import React from "react";
import { Link } from "react-router-dom";

export default function MortgagePayoffSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Mortgage payoff calculator: estimate payoff time and interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>mortgage payoff calculator</strong> helps you estimate how
          long it takes to pay off a loan balance when you make a{" "}
          <strong>fixed monthly payment</strong>. This tool also estimates{" "}
          <strong>total interest paid</strong> and <strong>total repaid</strong>{" "}
          over the payoff period.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It’s especially useful when you want to answer practical questions
          like: “If I pay $2,200 per month instead of $2,000, how much sooner will
          I be mortgage‑free?” or “How much interest do I save by increasing my
          payment?”
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you want to estimate a standard purchase payment from home price and
          down payment, use the{" "}
          <Link to="/finance/mortgage-calculator" className="text-primary hover:underline">
            Mortgage Calculator
          </Link>
          . If you want a quick payment estimate for a generic loan, the{" "}
          <Link to="/finance/loan-calculator" className="text-primary hover:underline">
            Loan Calculator
          </Link>{" "}
          uses a traditional amortization model.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator does (and what it doesn’t)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">It does</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Estimate payoff time from balance, rate, and monthly payment</li>
              <li>Estimate total interest and total repaid</li>
              <li>Show results in years + months for easy planning</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">It doesn’t</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Model changing rates (ARM, refinance timing, step rates)</li>
              <li>Include taxes, insurance, escrow, HOA, or PMI</li>
              <li>Simulate irregular extra payments month-by-month</li>
              <li>Account for lender rules, fees, or prepayment penalties</li>
            </ul>
          </div>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To model “extra payments,” increase the monthly payment you enter and
          compare scenarios. The calculator treats the monthly payment as a fixed
          amount for the entire payoff period.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How payoff time is calculated
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a fixed payment loan with monthly interest rate r, balance P, and
          payment M, payoff occurs when the balance reaches zero. When the
          interest rate is above 0, the payoff time can be solved using a
          logarithm-based formula.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`If r > 0 and M > P × r:
N = ln(M / (M − P × r)) / ln(1 + r)

If r = 0:
N = P / M

Total repaid ≈ M × N
Total interest ≈ (M × N) − P`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Important: if your monthly payment is less than or equal to the first
          month’s interest (M ≤ P × r), the balance won’t decrease and payoff
          can’t be reached under a fixed payment assumption.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use the mortgage payoff calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your current loan balance (remaining principal).</li>
          <li>Enter the annual interest rate.</li>
          <li>Enter the monthly payment you plan to make.</li>
          <li>Review payoff time, total interest, and total paid.</li>
          <li>
            Change only one input at a time to see the impact (for example, raise
            the payment by $100).
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Tips for better scenario comparisons
          </h4>
          <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Compare two monthly payments (base vs increased) to estimate
              “interest saved.”
            </li>
            <li>
              Keep the interest rate fixed for the comparison—refinancing is a
              separate decision.
            </li>
            <li>
              Remember your real monthly outflow may include escrow and other
              costs not included here.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this calculator include extra payments automatically?
            </dt>
            <dd className="mt-2">
              No. It uses the monthly payment you enter as a fixed payment. To
              model extra payments, increase the monthly payment amount and
              compare results.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why does the calculator show an error for payoff?
            </dt>
            <dd className="mt-2">
              With positive interest, if your payment isn’t larger than the first
              month’s interest, the balance won’t shrink and payoff can’t happen
              under a fixed payment assumption.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the total interest exact?
            </dt>
            <dd className="mt-2">
              It’s an estimate based on constant payment and constant rate. Real
              loans can differ due to rounding, payment timing, fees, or rate
              changes.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if my interest rate is 0%?
            </dt>
            <dd className="mt-2">
              Then payoff time is simply the remaining balance divided by the
              monthly payment.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this include property tax, insurance, or HOA?
            </dt>
            <dd className="mt-2">
              No—those costs aren’t part of payoff math for the loan balance.
              This tool models principal, interest rate, and payment only.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}

