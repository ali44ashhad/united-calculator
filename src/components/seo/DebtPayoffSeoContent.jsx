import React from "react";
import { Link } from "react-router-dom";

export default function DebtPayoffSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Debt payoff calculator: when will you be debt-free?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Paying more than the minimum can shave years off a balance. This{" "}
          <strong>debt payoff calculator</strong> answers one focused question for
          a <strong>single loan or balance</strong>: if you send the same amount
          every month, how long until it is gone and how much interest will you
          pay?
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter total debt, annual interest rate, and your planned fixed payment.
          The math adds monthly interest, subtracts your payment, and repeats
          until the balance hits zero. For multiple cards, try the{" "}
          <Link
            to="/finance/credit-cards-payoff-calculator"
            className="text-primary hover:underline"
          >
            Credit Cards Payoff Calculator
          </Link>
          . To compare rolling debts into one loan, use the{" "}
          <Link
            to="/finance/debt-consolidation-calculator"
            className="text-primary hover:underline"
          >
            Debt Consolidation Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Monthly update logic</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Interest = Balance × (APR ÷ 12)
New balance = Balance + Interest − Payment
(repeat until balance = 0)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Snowball and avalanche are <strong>strategies for ordering several
          debts</strong>—this page does not simulate payment redirects between
          accounts. Run it once per debt with that account’s payment, or use
          multi-card tools for combined views.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the current balance you want to eliminate.</li>
          <li>Enter the annual percentage rate (APR).</li>
          <li>Enter the fixed amount you can pay each month.</li>
          <li>Review months to payoff, total interest, and total paid.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$10,000</strong> balance at <strong>12% APR</strong> with{" "}
            <strong>$500</strong> fixed monthly payments pays off in about{" "}
            <strong>22 months</strong>, with roughly <strong>$1,000</strong> in
            total interest and about <strong>$11,000</strong> paid overall—much
            faster than paying only interest-level amounts.
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
              No. Those methods decide which of several debts gets extra money
              first. Here you model one balance with one steady payment.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What payment should I enter?
            </dt>
            <dd className="mt-2">
              Use the amount you will actually send each month, above the first
              month’s interest. If payment is too low, the tool warns you the
              balance cannot shrink.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does it include new purchases or fees?
            </dt>
            <dd className="mt-2">
              No. It assumes a static balance and consistent payments. Add fees
              or new charges in your own budget planning.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the credit card calculator?
            </dt>
            <dd className="mt-2">
              The math is the same for one account. The{" "}
              <Link
                to="/finance/credit-card-calculator"
                className="text-primary hover:underline"
              >
                Credit Card Calculator
              </Link>{" "}
              is labeled for revolving card payoff; this page is framed for general
              debt payoff planning.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I consolidate first?
            </dt>
            <dd className="mt-2">
              Sometimes a lower-rate consolidation loan helps. Model that scenario
              in the{" "}
              <Link
                to="/finance/debt-consolidation-calculator"
                className="text-primary hover:underline"
              >
                Debt Consolidation Calculator
              </Link>{" "}
              before changing your monthly payment here.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
