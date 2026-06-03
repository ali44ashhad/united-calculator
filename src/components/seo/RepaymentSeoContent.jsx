import React from "react";
import { Link } from "react-router-dom";

export default function RepaymentSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Repayment calculator: monthly EMI and total loan cost
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>repayment calculator</strong> estimates your{" "}
          <strong>monthly loan repayment</strong> (often called{" "}
          <strong>EMI</strong>), <strong>total amount repaid</strong>, and{" "}
          <strong>total interest</strong> from the{" "}
          <strong>loan amount</strong>, <strong>annual interest rate</strong>,
          and <strong>term in years</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is standard fixed-rate amortization—the same math used for many
          personal, auto, and business installment loans. It does not model
          variable rates, payment holidays, or extra payments toward early
          payoff.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For the same formula with personal-loan wording, see the{" "}
          <Link
            to="/finance/personal-loan-calculator"
            className="text-primary hover:underline"
          >
            Personal Loan Calculator
          </Link>
          . For generic payment math, try the{" "}
          <Link
            to="/finance/payment-calculator"
            className="text-primary hover:underline"
          >
            Payment Calculator
          </Link>
          . For a month-by-month schedule, use the{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
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
              <li>Fixed monthly repayment (EMI)</li>
              <li>Total repaid over the full term</li>
              <li>Total interest paid</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Origination or processing fees (unless in loan amount)</li>
              <li>Extra payments or accelerated payoff</li>
              <li>Variable or introductory rates</li>
              <li>Full amortization schedule table</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r / (1 − (1 + r)^−n)

P = loan amount
r = annual rate ÷ 12
n = years × 12

Total repaid = M × n
Total interest = Total repaid − P`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount borrowed (principal).</li>
          <li>Enter the annual interest rate on the loan.</li>
          <li>Enter the repayment term in years.</li>
          <li>Review monthly EMI, total repaid, and total interest.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$100,000</strong> at <strong>7%</strong> for{" "}
            <strong>5 years</strong> → use defaults to see monthly repayment
            and lifetime interest.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Repayment vs payoff planning
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page assumes you make the scheduled EMI every month for the full
          term. Paying extra principal changes total interest and payoff
          date—use a dedicated payoff tool if that is your goal. Shorter terms
          mean higher monthly repayment but less total interest.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is EMI in loan repayment?
            </dt>
            <dd className="mt-2">
              Equated monthly installment—a constant payment each month that
              covers principal and interest over the loan term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the personal loan calculator?
            </dt>
            <dd className="mt-2">
              The math is the same. This page uses general repayment wording;
              the personal loan page targets unsecured installment borrowing.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I include fees in the loan amount?
            </dt>
            <dd className="mt-2">
              If fees are financed, add them to the principal you enter.
              Up-front fees paid at closing are not part of this calculation
              unless rolled into the balance.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What happens at 0% interest?
            </dt>
            <dd className="mt-2">
              Monthly repayment equals loan amount divided by the number of
              months in the term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I see each month&apos;s principal and interest split?
            </dt>
            <dd className="mt-2">
              Not here. Use the Amortization Calculator for a payment-by-payment
              schedule.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
