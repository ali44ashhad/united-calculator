import React from "react";
import { Link } from "react-router-dom";

export default function LoanSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Loan calculator: monthly payment and total interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Borrowing with fixed monthly payments? This <strong>loan calculator</strong>{" "}
          uses <strong>loan amount</strong>, <strong>annual interest rate</strong>,
          and <strong>term in years</strong> to estimate your{" "}
          <strong>monthly payment</strong>, <strong>total repayment</strong>, and{" "}
          <strong>total interest</strong> on a standard amortizing installment loan.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a period-by-period breakdown, use the{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
          </Link>
          . For car-specific financing, try the{" "}
          <Link
            to="/finance/auto-loan-calculator"
            className="text-primary hover:underline"
          >
            Auto Loan Calculator
          </Link>
          . For home loans with longer terms, the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>{" "}
          uses the same payment math with property-focused defaults.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r × (1 + r)^n / ((1 + r)^n − 1)

P = loan principal
r = annual rate ÷ 12 (monthly)
n = years × 12 (payments)

Total payment = M × n
Total interest = Total payment − P`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount you borrow (principal).</li>
          <li>Enter the annual interest rate on the loan.</li>
          <li>Enter the repayment period in whole years.</li>
          <li>Review monthly payment, total paid, and interest cost.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$10,000</strong> loan at <strong>5%</strong> for{" "}
            <strong>5 years</strong> (60 payments) has a monthly payment near{" "}
            <strong>$188.71</strong>, total repayment about{" "}
            <strong>$11,323</strong>, and interest near <strong>$1,323</strong>—use
            the default inputs for exact figures.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as EMI?
            </dt>
            <dd className="mt-2">
              Yes. EMI (equated monthly installment) is the level monthly payment
              this calculator solves for on a fixed-rate amortizing loan.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if the rate is 0%?
            </dt>
            <dd className="mt-2">
              Monthly payment equals principal divided by number of payments, with
              no interest charged.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I enter a term in months?
            </dt>
            <dd className="mt-2">
              This page uses years. For 36 months, enter 3 years, or use a
              calculator that accepts months directly if available.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Do extra principal payments change the result?
            </dt>
            <dd className="mt-2">
              This estimate assumes no prepayments. Extra payments reduce interest
              and shorten payoff in real loans but are not modeled here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the Personal Loan Calculator?
            </dt>
            <dd className="mt-2">
              Both use standard amortization. This is the general loan entry;
              the personal loan page may use different defaults or labels for the
              same math.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
