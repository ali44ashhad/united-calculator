import React from "react";
import { Link } from "react-router-dom";

export default function RentSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Rent calculator: total rent over a period
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>rent calculator</strong> totals how much rent you will
          pay over a set period: <strong>monthly rent × number of months</strong>.
          Use it for a 12-month lease, an 18-month renewal, or any budget horizon
          you choose.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> take your income or other bills and tell
          you what rent you can afford. That requires a different rule or tool.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For income-based housing budgets, use the{" "}
          <Link
            to="/finance/house-affordability-calculator"
            className="text-primary hover:underline"
          >
            House Affordability Calculator
          </Link>
          . To compare renting against buying, try the{" "}
          <Link
            to="/finance/rent-vs-buy-calculator"
            className="text-primary hover:underline"
          >
            Rent vs Buy Calculator
          </Link>
          . Landlords analyzing investment returns should use the{" "}
          <Link
            to="/finance/rental-property-calculator"
            className="text-primary hover:underline"
          >
            Rental Property Calculator
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
              <li>Total rent over the months you enter</li>
              <li>Monthly rent and period shown in the summary</li>
              <li>Any positive whole or fractional month count</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Income-based “how much rent can I afford?”</li>
              <li>Security deposit, broker fees, or move-in costs</li>
              <li>Utilities, parking, or pet rent as separate lines</li>
              <li>Rent increases mid-lease</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Total rent = Monthly rent × Number of months`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Include utilities or parking in the monthly figure if you want those
          in the total. The tool does not split line items.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the rent amount due each month.</li>
          <li>
            Enter how many months—12 for a one-year lease, 6 for half a year,
            etc.
          </li>
          <li>Read total rent payable for that span.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$1,500</strong>/month for <strong>12 months</strong> →{" "}
            <strong>$18,000</strong> total rent over the year (see defaults).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Affordability vs total rent
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Many renters use a rough rule: keep rent near{" "}
          <strong>30% of gross monthly income</strong> (or a stricter share of
          take-home pay). This page does not apply that rule—you multiply a rent
          you already have or are considering by months. For DTI-style checks,
          use affordability or debt-to-income tools on this site.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this tell me how much rent I can afford?
            </dt>
            <dd className="mt-2">
              No. It only multiplies monthly rent by months. Use income and
              expense budgeting separately or the House Affordability Calculator.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I include utilities in monthly rent?
            </dt>
            <dd className="mt-2">
              If you pay a flat bundled amount, yes. If utilities vary, estimate
              an average or run the calculation twice.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I use partial months?
            </dt>
            <dd className="mt-2">
              The field accepts decimal months (e.g. 1.5) if you need a rough
              prorated total, though whole months match most leases.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the security deposit included?
            </dt>
            <dd className="mt-2">
              No. Deposits are usually one-time and refundable—add them outside
              this total if you are planning move-in cash needs.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from rent vs buy?
            </dt>
            <dd className="mt-2">
              Rent vs Buy compares long-run renting costs to owning with
              mortgage, equity, and other assumptions. This tool is a simple rent
              subtotal over N months.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
