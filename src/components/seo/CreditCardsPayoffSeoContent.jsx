import React from "react";
import { Link } from "react-router-dom";

export default function CreditCardsPayoffSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Credit cards payoff calculator: timeline and interest for several cards
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Juggling more than one balance? This{" "}
          <strong>credit cards payoff calculator</strong> runs the same monthly
          math for each card: starting balance, <strong>APR</strong>, and a{" "}
          <strong>fixed payment you plan to send that card</strong>. You see
          months to zero, interest per card, combined interest, and the longest
          payoff among them when every card keeps its own payment.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a single-card view with total paid, try the{" "}
          <Link
            to="/finance/credit-card-calculator"
            className="text-primary hover:underline"
          >
            Credit Card Calculator
          </Link>
          . For broader loans and consolidation, the{" "}
          <Link
            to="/finance/debt-payoff-calculator"
            className="text-primary hover:underline"
          >
            Debt Payoff Calculator
          </Link>{" "}
          can help compare other debts.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What this tool models</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Each card is calculated in parallel—not with snowball (smallest balance
          first) or avalanche (highest APR first) reallocations. Enter the payment
          you will actually make to each issuer; the summary uses the{" "}
          <strong>maximum months</strong> across cards as the overall timeline
          and <strong>sums interest</strong> across all cards.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Monthly interest = Balance × (APR ÷ 12)
New balance = Balance + Monthly interest − Payment
(repeat until balance = 0)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter each card’s current balance and APR.</li>
          <li>Enter the fixed monthly payment you will send to that card.</li>
          <li>Review per-card months and interest plus combined totals.</li>
          <li>
            If a payment is too low, raise it above that card’s first-month
            interest charge.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To size a sustainable payment for a loan-style amount, the{" "}
          <Link
            to="/finance/payment-calculator"
            className="text-primary hover:underline"
          >
            Payment Calculator
          </Link>{" "}
          can complement your card budget.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Card 1:</strong> $3,000 at 18% APR with $300/month pays off
            in about <strong>11 months</strong>. <strong>Card 2:</strong> $2,000
            at 20% APR with $250/month pays off in about <strong>9 months</strong>.
            Combined interest is the sum of both; the overall timeline shows{" "}
            <strong>11 months</strong> (the slower card) if you keep those payments
            unchanged.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as snowball or avalanche?
            </dt>
            <dd className="mt-2">
              No. Snowball and avalanche move extra money to the next target as
              balances drop. Here each card keeps the payment you enter until it
              is paid off independently.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is “longest payoff” the headline months number?
            </dt>
            <dd className="mt-2">
              With separate fixed payments per card, you are not debt-free on all
              cards until the slowest one finishes. That maximum month count is a
              simple worst-case timeline for the set you entered.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does it include new purchases or fees?
            </dt>
            <dd className="mt-2">
              No. It assumes static balances and steady payments with no annual
              fees, late fees, or new charges. Add those in your own planning.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if my payment only covers interest?
            </dt>
            <dd className="mt-2">
              The balance never shrinks when payment is less than or equal to the
              first month’s interest. Increase the payment for that card.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I add more than two cards?
            </dt>
            <dd className="mt-2">
              The default layout shows two cards as a starting point. You can
              duplicate the pattern in a spreadsheet or use the single-card tool
              for quick what-if checks on one balance at a time.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
