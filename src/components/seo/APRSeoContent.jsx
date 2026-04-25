import React from "react";
import { Link } from "react-router-dom";

export default function APRSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Understand APR and compare loans more accurately
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          APR (Annual Percentage Rate) is designed to show a more complete cost
          of borrowing than the headline interest rate alone. If two loans have
          the same rate but different fees, APR can help you see which one is
          actually more expensive over a year.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This calculator gives an easy estimate using your loan amount, fees,
          rate, and term—useful when comparing personal loans, auto loans, or
          credit products where fees change the “real” price.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is APR?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>APR</strong> is an annualized percentage that includes the
          interest rate plus certain costs (like fees). Lenders may structure
          costs differently, so APR is often used as a comparison tool—especially
          when one option has “low rate, high fees” and another has “higher rate,
          low fees.”
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Interest rate</strong>: the cost of borrowing (doesn’t
            necessarily include fees)
          </li>
          <li>
            <strong>Fees</strong>: upfront or product-related costs that increase
            your effective borrowing cost
          </li>
          <li>
            <strong>Term</strong>: the time you carry the loan
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use the APR calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter your <strong>loan amount</strong>.
          </li>
          <li>
            Enter total <strong>fees</strong> you expect to pay.
          </li>
          <li>
            Enter the <strong>interest rate</strong>.
          </li>
          <li>
            Choose the <strong>loan term</strong>.
          </li>
          <li>
            Review the estimated APR and total cost.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you want to estimate your monthly payment separately, use our{" "}
          <Link to="/finance/loan-calculator" className="text-primary hover:underline">
            Loan Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">APR formula (simple view)</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A simple way to think about APR is “interest + fees, expressed as an
          annual percentage.” One common approximation looks like:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`APR ≈ [ (Total Interest + Fees) ÷ Loan Amount ÷ Years ] × 100`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Different lenders may compute APR with more detail depending on
          payment schedules and product structure, but this gives a solid
          comparison baseline for many everyday loans.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Example: you borrow <strong>$10,000</strong> for <strong>3 years</strong>{" "}
            at <strong>6%</strong> with <strong>$300</strong> in fees.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Total interest (simple estimate) = \(10,000 × 0.06 × 3\)</li>
            <li>Add fees, then annualize the total cost</li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            The point isn’t the exact penny—it’s being able to compare offers
            consistently when fees are different.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is APR the same as interest rate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not usually. The interest rate is the borrowing rate, while APR is
              intended to include certain costs (like fees) and represent a more
              complete annualized cost.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why can a low-rate loan have a higher APR?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Fees can raise the effective cost. A slightly higher interest rate
              with low fees can sometimes be cheaper overall than a low rate with
              heavy fees.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

