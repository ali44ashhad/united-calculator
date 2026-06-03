import React from "react";
import { Link } from "react-router-dom";

export default function PresentValueSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Present value calculator: what is future money worth today?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Present value (PV)</strong> answers a core finance question:
          how much is a <strong>future lump sum</strong> worth in{" "}
          <strong>today’s dollars</strong> at a given <strong>discount
          rate</strong>? Enter <strong>future value</strong>, <strong>annual
          rate</strong>, and <strong>years</strong> to discount one payment—not
          a stream of cash flows.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is the time value of money in its simplest form. Higher discount
          rates or longer horizons reduce present value because future dollars
          are worth less when compounded backward.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To grow today’s money forward instead, use the{" "}
          <Link
            to="/finance/future-value-calculator"
            className="text-primary hover:underline"
          >
            Future Value Calculator
          </Link>
          . For purchasing-power loss over time, see the{" "}
          <Link
            to="/finance/inflation-calculator"
            className="text-primary hover:underline"
          >
            Inflation Calculator
          </Link>
          . For multiple project cash flows, the{" "}
          <Link
            to="/finance/irr-calculator"
            className="text-primary hover:underline"
          >
            IRR Calculator
          </Link>{" "}
          uses a different model.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>PV of one future lump sum</li>
              <li>Constant annual discount rate</li>
              <li>Discount amount and PV as percent of FV</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Net present value (NPV) with many cash flows</li>
              <li>Annuities or monthly payment streams</li>
              <li>Taxes, fees, or inflation tables</li>
              <li>Continuous compounding</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`PV = FV ÷ (1 + r)^n

FV = future lump sum
r = annual discount rate (decimal)
n = number of years

Discount amount = FV − PV`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example: $10,000 in 10 years at 5% → PV ≈ $6,139 (use defaults for
          exact figures).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the future amount you expect to receive or need.</li>
          <li>Enter the annual discount or opportunity rate.</li>
          <li>Enter how many years until that future date.</li>
          <li>Review present value and how much was “discounted” off FV.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">When present value matters</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Comparing a promised future payout to cash you could invest today.
          </li>
          <li>
            Setting a savings target: how much to set aside now to fund a future
            goal.
          </li>
          <li>
            Understanding why long-dated obligations look smaller in today’s
            terms at positive rates.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What discount rate should I use?
            </dt>
            <dd className="mt-2">
              Often an expected investment return, borrowing cost, or required
              rate of return. The right rate depends on risk and alternatives—it
              is not one-size-fits-all.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is present value the same as NPV?
            </dt>
            <dd className="mt-2">
              Related idea, different scope. NPV nets many inflows and outflows.
              This tool discounts a single future sum only.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if n = 0 years?
            </dt>
            <dd className="mt-2">
              Present value equals future value—there is no time to discount.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can PV be higher than FV?
            </dt>
            <dd className="mt-2">
              Not with a positive discount rate and positive years. Negative
              rates (unusual in this context) would flip the relationship.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I reverse the calculation?
            </dt>
            <dd className="mt-2">
              Multiply present value by (1 + r)^n to get future value—the
              inverse of this page’s formula.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
