import React from "react";
import { Link } from "react-router-dom";

export default function RentVsBuySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Rent vs buy calculator: compare costs over the same term
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>rent vs buy calculator</strong> puts two simplified
          numbers side by side over the same period:{" "}
          <strong>total rent</strong> if you keep renting, and{" "}
          <strong>buy-side cash</strong> from down payment plus total mortgage{" "}
          <strong>P&amp;I</strong>. It also shows a{" "}
          <strong>projected home value</strong> from annual appreciation on
          purchase price.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It is not a full lifecycle model. It does <strong>not</strong> pick a
          winner, compute break-even month, include property tax or maintenance,
          raise rent over time, or invest your down payment as a renter would.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For mortgage P&amp;I on a purchase, see the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>
          . To total rent alone, use the{" "}
          <Link
            to="/finance/rent-calculator"
            className="text-primary hover:underline"
          >
            Rent Calculator
          </Link>
          . For income-based budgets, try the{" "}
          <Link
            to="/finance/house-affordability-calculator"
            className="text-primary hover:underline"
          >
            House Affordability Calculator
          </Link>
          .
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
              <li>Total rent = monthly rent × months in term</li>
              <li>Mortgage P&amp;I on price − down payment</li>
              <li>Down payment and P&amp;I + down total</li>
              <li>Future home value from compound appreciation</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Break-even or “rent vs buy winner” verdict</li>
              <li>Property tax, insurance, HOA, or maintenance</li>
              <li>Rent inflation or investing down payment while renting</li>
              <li>Remaining loan balance vs equity at end of term</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Total rent = Monthly rent × (Years × 12)

Loan amount = Home price − Down payment
M = P × r / (1 − (1 + r)^−n)

Total P&I = M × n
Future value = Home price × (1 + appreciation)^Years`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter comparable monthly rent for a similar home.</li>
          <li>Enter purchase price and down payment for the buy scenario.</li>
          <li>Set mortgage rate, term, and an appreciation assumption.</li>
          <li>
            Compare rent total to P&amp;I + down, and note projected home
            value—not a net worth calculation.
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$2,000</strong>/mo rent vs buying at{" "}
            <strong>$500,000</strong> with <strong>$100,000</strong> down at{" "}
            <strong>6.5%</strong> over <strong>30 years</strong> and{" "}
            <strong>3%</strong> appreciation—use defaults to see totals and
            projected value.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Reading the results honestly
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Lower total rent than P&amp;I + down does <strong>not</strong> mean
          renting wins—you may build equity and own an appreciated asset. Higher
          buy-side cash outlay does <strong>not</strong> mean buying loses—the
          home may be worth more than you paid in P&amp;I and down. This tool
          shows inputs to a conversation, not a decision rule.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Mortgage P&amp;I is on the <strong>loan amount</strong>, not the full
          sticker price. The old simplified models that financed 100% of price
          overstated monthly payments; down payment is separate cash at closing.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this tell me whether to rent or buy?
            </dt>
            <dd className="mt-2">
              No. It displays comparable totals and appreciated home value. Your
              timeline, mobility, and non-financial factors matter too.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is future home value my equity?
            </dt>
            <dd className="mt-2">
              Not exactly. You would still owe any remaining mortgage balance at
              that date. This page does not amortize remaining principal.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why assume flat rent for 30 years?
            </dt>
            <dd className="mt-2">
              To keep the model simple. Real rents often rise; a higher rent path
              would increase the rent total.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What about tax deductions for homeowners?
            </dt>
            <dd className="mt-2">
              Not modeled. Mortgage interest and property tax deductions depend
              on your tax situation and current law.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can appreciation be negative?
            </dt>
            <dd className="mt-2">
              Enter a negative appreciation percent if you want a declining value
              scenario. Zero means flat price in nominal terms.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
