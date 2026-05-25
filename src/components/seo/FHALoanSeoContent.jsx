import React from "react";
import { Link } from "react-router-dom";

export default function FHALoanSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          FHA loan calculator: low down payment and monthly P&amp;I
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          FHA-backed mortgages are popular with first-time buyers because down
          payments can be as low as <strong>3.5%</strong> for many eligible
          borrowers. This <strong>FHA loan calculator</strong> estimates{" "}
          <strong>down payment</strong>, <strong>loan amount</strong>, and{" "}
          <strong>monthly principal and interest</strong> from home price, down
          payment percent, interest rate, and term.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> add FHA mortgage insurance (MIP), taxes,
          or homeowners insurance—those belong in your full budget. Compare with a{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>
          , check cash needed with the{" "}
          <Link
            to="/finance/down-payment-calculator"
            className="text-primary hover:underline"
          >
            Down Payment Calculator
          </Link>
          , and review DTI with the{" "}
          <Link
            to="/finance/debt-to-income-ratio-calculator"
            className="text-primary hover:underline"
          >
            Debt-to-Income Ratio Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Payment formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Loan amount = Home price × (1 − Down payment % ÷ 100)

Monthly P&I = L × [ r(1+r)^n ] ÷ [ (1+r)^n − 1 ]
(L = loan amount, r = annual rate ÷ 12, n = years × 12)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the purchase price.</li>
          <li>Enter down payment percent (3.5 is a common FHA minimum).</li>
          <li>Enter annual interest rate and loan term in years.</li>
          <li>Review P&amp;I, loan amount, LTV, and total interest.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$300,000</strong> home with <strong>3.5%</strong> down
            ($10,500) finances <strong>$289,500</strong> at <strong>6.5%</strong>{" "}
            over <strong>30 years</strong>—about <strong>$1,830</strong> per month
            principal and interest before MIP, taxes, and insurance.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is FHA mortgage insurance?
            </dt>
            <dd className="mt-2">
              FHA loans usually require an upfront MIP charge and an annual MIP
              paid monthly. Those amounts are not calculated on this page—ask
              your lender for current factors.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I put more than 3.5% down?
            </dt>
            <dd className="mt-2">
              Yes. A larger down payment lowers the loan amount, monthly P&amp;I,
              and LTV.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as PITI?
            </dt>
            <dd className="mt-2">
              No. PITI includes principal, interest, taxes, and insurance. This
              tool shows principal and interest only.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              FHA vs VA loans?
            </dt>
            <dd className="mt-2">
              VA loans serve eligible veterans and may offer 0% down. See the{" "}
              <Link
                to="/finance/va-mortgage-calculator"
                className="text-primary hover:underline"
              >
                VA Mortgage Calculator
              </Link>{" "}
              for that scenario.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Where is the full payment schedule?
            </dt>
            <dd className="mt-2">
              Use the{" "}
              <Link
                to="/finance/mortgage-amortization-calculator"
                className="text-primary hover:underline"
              >
                Mortgage Amortization Calculator
              </Link>{" "}
              with your loan amount, rate, and term for a month-by-month table.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
