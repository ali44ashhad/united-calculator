import React from "react";
import { Link } from "react-router-dom";

export default function LoanPayoffSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Loan payoff calculator: total cost on the payment schedule
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          How much will you pay to clear a loan if you stick to the schedule? This{" "}
          <strong>loan payoff calculator</strong> uses your{" "}
          <strong>loan balance</strong>, <strong>annual rate</strong>, and{" "}
          <strong>term in years</strong> to show the{" "}
          <strong>monthly payment</strong>, <strong>total amount paid</strong>,
          and <strong>total interest</strong> until the loan is paid off with
          minimum payments only.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To model <strong>extra payments</strong> and faster payoff, use the{" "}
          <Link
            to="/finance/debt-payoff-calculator"
            className="text-primary hover:underline"
          >
            Debt Payoff Calculator
          </Link>
          . For the same amortization math with a general loan label, see the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>
          . For mortgages with extra payment options, try the{" "}
          <Link
            to="/finance/mortgage-payoff-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Payoff Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r / (1 − (1 + r)^−n)

P = loan balance
r = annual rate ÷ 12
n = years × 12

Total paid = M × n  (payoff after n payments)
Total interest = Total paid − P`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter current balance or original principal.</li>
          <li>Enter the fixed annual interest rate.</li>
          <li>Enter remaining or original term in years.</li>
          <li>Review monthly payment, total paid, and interest to payoff.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$50,000</strong> loan at <strong>6%</strong> for{" "}
            <strong>5 years</strong> has a monthly payment near{" "}
            <strong>$966</strong>, total paid about <strong>$58,000</strong>, and
            interest near <strong>$8,000</strong>—run the defaults for exact
            figures.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I pay off the loan faster here?
            </dt>
            <dd className="mt-2">
              Not in this tool. Enter a shorter term to see a higher payment and
              less interest, or use the Debt Payoff Calculator for extra monthly
              amounts.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is payoff date shown as a calendar date?
            </dt>
            <dd className="mt-2">
              No. Payoff is after the number of monthly payments in your term
              (years × 12) from today only if you start now—calendar dates are
              not calculated.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is total paid higher than the loan amount?
            </dt>
            <dd className="mt-2">
              Interest accrues each month on the remaining balance. Total paid
              equals principal plus all interest over the schedule.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this work for credit cards?
            </dt>
            <dd className="mt-2">
              Only if you treat it as a fixed-rate installment with a set term.
              Revolving cards with minimum payments need a different approach.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are fees included?
            </dt>
            <dd className="mt-2">
              No. Add origination or other fees to the loan balance if you want
              them reflected in the payment math.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
