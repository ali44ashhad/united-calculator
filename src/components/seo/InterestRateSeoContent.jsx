import React from "react";
import { Link } from "react-router-dom";

export default function InterestRateSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Interest rate calculator: solve for annual simple rate
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Know how much interest you earned but not the rate? This{" "}
          <strong>interest rate calculator</strong> works backward from{" "}
          <strong>principal</strong>, total <strong>simple interest</strong> over
          a period, and <strong>time in years</strong> to find the implied{" "}
          <strong>annual interest rate</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To compute interest from a known rate, use the{" "}
          <Link
            to="/finance/interest-calculator"
            className="text-primary hover:underline"
          >
            Interest Calculator
          </Link>
          . For compounding, use the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . For fixed monthly payments on a loan, the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>{" "}
          is the better fit.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Start: I = (P × R × T) ÷ 100

Solve for R:
R = (I × 100) ÷ (P × T)

P = principal
I = total simple interest over the period
T = time in years
R = annual rate (%)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the starting principal.</li>
          <li>
            Enter total simple interest earned over the full period (not a single
            monthly payment).
          </li>
          <li>Enter the number of years.</li>
          <li>Review the implied annual rate and check total amount.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> principal earning <strong>$1,000</strong>{" "}
            simple interest over <strong>2 years</strong> implies an annual rate
            of <strong>5%</strong> (because 1000 × 100 ÷ (10000 × 2) = 5). Total
            amount is <strong>$11,000</strong>—defaults in the tool match this
            example.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why can&apos;t I enter monthly payment?
            </dt>
            <dd className="mt-2">
              Monthly payments on amortized loans mix principal and interest.
              This tool needs total simple interest over the stated years.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can the rate be negative?
            </dt>
            <dd className="mt-2">
              If interest earned is zero, the rate is 0%. Negative interest input
              is rejected; losses are not modeled here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the result APR?
            </dt>
            <dd className="mt-2">
              It is the simple annual rate consistent with your inputs, not a
              regulated APR with fees and compounding frequency.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I verify the answer?
            </dt>
            <dd className="mt-2">
              Plug the rate into the Interest Calculator with the same principal
              and years—you should get the same interest dollars back.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if time is less than one year?
            </dt>
            <dd className="mt-2">
              Use a decimal year (e.g., 0.5 for six months) so T in the formula
              matches the period for the interest amount you enter.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
