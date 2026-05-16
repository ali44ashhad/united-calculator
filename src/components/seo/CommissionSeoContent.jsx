import React from "react";
import { Link } from "react-router-dom";

export default function CommissionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Commission calculator: percentage fee on a sale
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>sales commission calculator</strong> applies one rate to
          one sale amount: commission = sale × rate, and the remainder is what
          you keep after paying the fee. It fits flat-percent deals—agent
          payouts, referral fees, or any simple{" "}
          <strong>commission percentage</strong> on revenue. Tiered plans, splits,
          and clawbacks are not built into this screen; use it as a quick check
          before payroll or contract review.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If the sale total includes tax, decide whether your policy commissions
          gross or net of tax—the{" "}
          <Link
            to="/finance/sales-tax-calculator"
            className="text-primary hover:underline"
          >
            Sales Tax Calculator
          </Link>{" "}
          can help you isolate tax. For take-home pay after commissions are
          earned, see the{" "}
          <Link
            to="/finance/salary-calculator"
            className="text-primary hover:underline"
          >
            Salary Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Commission = Sale amount × (Rate ÷ 100)
Net after commission = Sale amount − Commission`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the gross sale or deal value.</li>
          <li>Enter the commission rate as a percent.</li>
          <li>Read commission amount and what remains after the fee.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$1,000</strong> sale at <strong>10%</strong> commission pays{" "}
            <strong>$100</strong> to the agent and leaves <strong>$900</strong>{" "}
            for the seller. A <strong>$10,000</strong> deal at <strong>6%</strong>{" "}
            yields <strong>$600</strong> commission—the same math scales for
            larger tickets.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this support tiered or split commissions?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Only a single percentage on the amount you enter. For tiered
              brackets, calculate each tier separately and add the results.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this gross or net of tax?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The tool does not add or remove tax. Enter the sale base your
              contract uses (with or without tax) consistently.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
