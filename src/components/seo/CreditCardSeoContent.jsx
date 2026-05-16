import React from "react";
import { Link } from "react-router-dom";

export default function CreditCardSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Credit card calculator: payoff time with a fixed monthly payment
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Carrying a balance on plastic means monthly interest keeps stacking.
          This <strong>credit card payoff calculator</strong> models one card
          with a starting balance, an <strong>APR</strong>, and the same payment
          every month. Each period it adds interest on the remaining balance,
          then subtracts your payment—typical revolving-credit behavior without
          new purchases or fees.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If your payment does not exceed the first month’s interest, the tool
          warns you that the balance cannot shrink. For multiple cards or
          strategy comparisons, see the{" "}
          <Link
            to="/finance/credit-cards-payoff-calculator"
            className="text-primary hover:underline"
          >
            Credit Cards Payoff Calculator
          </Link>
          . To compare APR with fees, use the{" "}
          <Link
            to="/finance/apr-calculator"
            className="text-primary hover:underline"
          >
            APR Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Monthly update logic</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Interest = Balance × (APR ÷ 12)
New balance = Balance + Interest − Payment`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The loop repeats until the balance reaches zero or 1,000 months (a
          safety cap). Total interest equals total payments minus the original
          balance.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter current balance owed.</li>
          <li>Enter annual percentage rate (APR).</li>
          <li>Enter the fixed amount you can pay each month.</li>
          <li>Read months to payoff, total paid, and interest paid.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$5,000</strong> balance at <strong>18% APR</strong> with{" "}
            <strong>$500</strong> fixed monthly payments pays off in about{" "}
            <strong>11 months</strong>, with roughly <strong>$500</strong> in
            total interest and <strong>$5,500</strong> paid overall—much faster
            than paying only the minimum.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include new charges or fees?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It assumes a static balance and steady payments. Add fees or
              purchases separately in your budget.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What payment should I use?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use an amount above the monthly interest charge. The{" "}
              <Link
                to="/finance/payment-calculator"
                className="text-primary hover:underline"
              >
                Payment Calculator
              </Link>{" "}
              can help size loan-style payments; here you choose what you will
              actually send the card issuer each month.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
