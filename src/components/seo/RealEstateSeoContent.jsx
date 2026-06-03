import React from "react";
import { Link } from "react-router-dom";

export default function RealEstateSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Real estate calculator: property loan payment estimate
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>real estate calculator</strong> estimates the{" "}
          <strong>monthly principal and interest (P&amp;I)</strong> on a property
          purchase from <strong>purchase price</strong>,{" "}
          <strong>down payment</strong>, <strong>interest rate</strong>, and{" "}
          <strong>loan term</strong>. It answers: “If I buy at this price with
          this down payment, what is the loan payment?”
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> model rental income, cash flow, cap rate,
          ROI, or whether you can afford the property from your income. Those
          need different tools and assumptions.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For rental investment analysis, use the{" "}
          <Link
            to="/finance/rental-property-calculator"
            className="text-primary hover:underline"
          >
            Rental Property Calculator
          </Link>
          . For income-based affordability, try the{" "}
          <Link
            to="/finance/house-affordability-calculator"
            className="text-primary hover:underline"
          >
            House Affordability Calculator
          </Link>
          . For the same P&amp;I math with home-buyer wording, see the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
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
              <li>Loan amount (price − down payment)</li>
              <li>Monthly P&amp;I payment</li>
              <li>Total interest and total P&amp;I over the term</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Rental income, vacancy, or operating expenses</li>
              <li>ROI, cap rate, or cash-on-cash return</li>
              <li>Property tax, insurance, HOA, or PMI in escrow</li>
              <li>Closing costs or appreciation projections</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Loan amount = Property price − Down payment
M = P × r / (1 − (1 + r)^−n)

r = annual rate ÷ 12
n = years × 12`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the purchase or list price.</li>
          <li>Enter cash down (creates the loan balance).</li>
          <li>Select loan term and enter the note rate.</li>
          <li>Review monthly P&amp;I and lifetime interest.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$500,000</strong> property with <strong>$100,000</strong> down
            (20%) at <strong>6%</strong> for <strong>30 years</strong> → about{" "}
            <strong>$400,000</strong> borrowed (use defaults for payment details).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">For investors vs owners</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Owner-occupants and investors both need the loan payment as a baseline
          cost. Investors should layer rent, expenses, and returns on top—this
          page stops at P&amp;I. Comparing rent vs buying uses a different model
          on the{" "}
          <Link
            to="/finance/rent-vs-buy-calculator"
            className="text-primary hover:underline"
          >
            Rent vs Buy Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this calculate investment ROI?
            </dt>
            <dd className="mt-2">
              No. It only computes the property loan payment from price, down,
              rate, and term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is monthly payment my full housing cost?
            </dt>
            <dd className="mt-2">
              Usually not. Taxes, insurance, maintenance, and (for rentals)
              management costs sit outside this P&amp;I figure.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Investment property vs primary home—same math?
            </dt>
            <dd className="mt-2">
              For fixed-rate amortizing loans, yes—the payment formula is the
              same. Rates and down payment requirements may differ by lender.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I analyze rental cash flow here?
            </dt>
            <dd className="mt-2">
              Use the Rental Property Calculator for income, expenses, and return
              metrics. Start here for the debt service piece only.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What loan terms are available?
            </dt>
            <dd className="mt-2">
              Choose 10-, 15-, 20-, or 30-year fixed in the dropdown. Shorter
              terms mean higher monthly P&amp;I but less total interest.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
