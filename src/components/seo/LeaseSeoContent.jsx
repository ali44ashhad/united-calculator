import React from "react";
import { Link } from "react-router-dom";

export default function LeaseSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Lease calculator: total cost from payment and term
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Already have a lease quote? This <strong>lease calculator</strong>{" "}
          adds up <strong>total lease cost</strong> from your{" "}
          <strong>monthly payment</strong>, <strong>lease term in months</strong>,
          and <strong>down payment</strong> (or cash due at signing). It answers
          how much you will pay over the full lease—not what the monthly payment
          should be from vehicle price.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To <strong>estimate monthly car lease payment</strong> from MSRP,
          residual, and money factor, use the{" "}
          <Link
            to="/finance/auto-lease-calculator"
            className="text-primary hover:underline"
          >
            Auto Lease Calculator
          </Link>
          . To compare buying with financing, try the{" "}
          <Link
            to="/finance/auto-loan-calculator"
            className="text-primary hover:underline"
          >
            Auto Loan Calculator
          </Link>
          . For general installment loans, the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>{" "}
          works with loan amount and rate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Total lease cost = (Monthly payment × Months) + Down payment
Average cost/month = Total lease cost ÷ Months

Example: $300/mo × 36 months + $2,000 down
→ $10,800 payments + $2,000 = $12,800 total
→ $12,800 ÷ 36 ≈ $355.56 average per month`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the monthly payment from your lease offer.</li>
          <li>Enter the number of months in the lease term.</li>
          <li>Enter upfront cash (down payment or amount due at signing).</li>
          <li>Review total cost and average cost per month.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$300</strong> monthly payment for <strong>36 months</strong>{" "}
            with <strong>$2,000</strong> down costs <strong>$12,800</strong> over
            the lease—about <strong>$355.56</strong> per month on average when
            the down payment is spread across the term (tool defaults match).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why doesn&apos;t this compute my monthly payment?
            </dt>
            <dd className="mt-2">
              Payment depends on price, residual value, money factor, taxes, and
              fees. This page totals a payment you already have. Use the Auto
              Lease Calculator for payment estimation.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I include tax in the monthly payment?
            </dt>
            <dd className="mt-2">
              Enter whatever figure you want totaled—payment with tax included,
              or pre-tax plus tax separately in your down payment line if your
              quote splits them that way.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is total lease cost the same as buying?
            </dt>
            <dd className="mt-2">
              No. At lease end you typically return the vehicle unless you buy
              out the residual. Total cost here is cash paid during the lease,
              not ownership equity.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What fees are missing?
            </dt>
            <dd className="mt-2">
              Acquisition, disposition, excess mileage, and wear charges are not
              added unless you fold them into the numbers you enter.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I compare two lease offers?
            </dt>
            <dd className="mt-2">
              Run each offer separately and compare total lease cost and average
              cost per month.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
