import React from "react";
import { Link } from "react-router-dom";

export default function AnnuityPayoutSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Estimate your annuity payout income
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you have a lump sum set aside for retirement (or any long-term
          goal), a common question is: <strong>how much monthly income</strong>{" "}
          can it produce? An annuity payout estimate breaks that down using
          three inputs—your starting balance (present value), the interest rate,
          and how long you want payments to last.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page focuses on the payout side. If you’re still in the saving
          phase (contributing monthly), use the{" "}
          <Link
            to="/finance/annuity-calculator"
            className="text-primary hover:underline"
          >
            Annuity Calculator
          </Link>{" "}
          to estimate future value from contributions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use the annuity payout calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter your <strong>present value</strong> (the amount available to
            fund payouts).
          </li>
          <li>
            Enter the expected <strong>interest rate</strong>.
          </li>
          <li>
            Choose a <strong>payout period</strong> in years.
          </li>
          <li>
            Review the monthly payout, total received, and interest earned.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A practical way to use this: test a shorter term (higher income) vs a
          longer term (lower income) to find a comfortable balance.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Annuity payout formula (monthly payment)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A common model treats payouts like an installment payment that draws
          down a balance over time:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`PMT = PV × [ r ÷ (1 − (1 + r)^−n ) ]`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>PMT</strong> = monthly payout
          </li>
          <li>
            <strong>PV</strong> = present value (starting balance)
          </li>
          <li>
            <strong>r</strong> = monthly interest rate (annual rate ÷ 12)
          </li>
          <li>
            <strong>n</strong> = number of months (years × 12)
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If the interest rate is 0%, the payout is simply \(PV / n\) (an even
          split across months).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Example: you have <strong>$100,000</strong> and want payouts for{" "}
            <strong>20 years</strong> at <strong>6% annual</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Monthly rate \(r\) = \(0.06 / 12\) = \(0.005\)
            </li>
            <li>
              Months \(n\) = \(20 × 12\) = \(240\)
            </li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            The calculator estimates a fixed monthly payout and shows how much
            of the total received comes from interest over the whole period.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include taxes, inflation, or fees?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. This is a planning estimate based on a steady rate and fixed
              duration. Real annuity products may include fees and tax
              considerations, and inflation can change purchasing power.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I want payments to last longer?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Increasing the payout period usually lowers the monthly payout,
              but extends the income stream. Try 20 vs 30 years to compare.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as a loan payment?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The math is very similar—except the direction is reversed. If you
              want to see the loan-paydown version, check our{" "}
              <Link
                to="/finance/amortization-calculator"
                className="text-primary hover:underline"
              >
                Amortization Calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

