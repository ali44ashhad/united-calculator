import React from "react";
import { Link } from "react-router-dom";

export default function MortgageUKSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Mortgage Calculator UK: estimate monthly repayments
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>Mortgage Calculator UK</strong> helps you estimate a{" "}
          <strong>repayment mortgage</strong> monthly payment (principal and
          interest), along with <strong>total interest</strong> and{" "}
          <strong>total repaid</strong>, using three simple inputs:{" "}
          <strong>loan amount</strong>, <strong>interest rate</strong>, and{" "}
          <strong>term</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It’s useful when you’re comparing fixed-rate deals, checking whether a
          monthly payment fits your budget, or exploring how changing the term
          affects cost. You can quickly see the trade-off between a lower monthly
          payment (often a longer term) and a lower total interest bill (often a
          shorter term or lower rate).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is a straightforward repayment model—no lender fees, insurance,
          taxes, early repayment charges, or overpayments are included. If you’re
          comparing a UK loan to a US-style purchase calculation with home price
          and down payment, see the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>
          . If you’re exploring a new rate for an existing balance, try the{" "}
          <Link
            to="/finance/refinance-calculator"
            className="text-primary hover:underline"
          >
            Refinance Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this UK mortgage calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Monthly repayment (principal + interest)</li>
              <li>Total interest over the full term</li>
              <li>Total repaid over the full term</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Arrangement/product fees or broker fees</li>
              <li>Stamp Duty Land Tax (SDLT)</li>
              <li>Buildings/contents insurance</li>
              <li>Overpayments, ERCs, or changing rates</li>
              <li>Interest-only mortgages</li>
            </ul>
          </div>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Think of this as the “core mortgage repayment” piece of your housing
          budget. Real-world costs can be higher once you add insurance, utilities,
          service charges, and maintenance.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the payment works</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Repayment mortgages amortise the balance over a fixed number of months.
          Each payment includes interest and principal. Early in the term, a
          larger share of the payment typically goes to interest; later, more goes
          to principal as the balance falls.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r × (1 + r)^n / ((1 + r)^n − 1)

P = loan amount
r = annual rate ÷ 12
n = years × 12`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Small changes in rate can have a noticeable impact because the rate is
          applied to the remaining balance each month. Term length matters too:
          longer terms can feel more affordable monthly but usually increase the
          total interest paid.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this mortgage repayment calculator (UK)
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the <strong>loan amount</strong> you plan to borrow (the
            mortgage balance).
          </li>
          <li>
            Enter the <strong>interest rate</strong> (annual percentage).
          </li>
          <li>
            Enter the <strong>term</strong> in years (for example, 25).
          </li>
          <li>
            Review the monthly payment and the lifetime totals (interest and
            repaid).
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Tips for choosing inputs
          </h4>
          <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Use the rate that actually applies to your deal (the note rate). APR
              can be higher due to fees.
            </li>
            <li>
              If you expect to remortgage in a few years, this calculator still
              assumes a constant payment for the full term—use it as a baseline.
            </li>
            <li>
              If you plan to overpay, remember it can reduce total interest, but
              it’s not modelled here.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Example: UK mortgage repayment estimate
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example scenario: borrow <strong>£250,000</strong> at{" "}
          <strong>4%</strong> for <strong>25 years</strong>. The monthly repayment
          will be around <strong>£1,300–£1,350</strong> depending on rounding and
          assumptions—use the calculator for exact values.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Over the full term, <strong>total repaid</strong> equals the monthly
          payment multiplied by the number of months, and{" "}
          <strong>total interest</strong> equals total repaid minus the loan
          amount.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this include stamp duty, fees, or insurance?
            </dt>
            <dd className="mt-2">
              No. This calculator focuses on repayment (principal and interest)
              only. Upfront fees, insurance, and taxes aren’t included.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this for repayment or interest-only mortgages?
            </dt>
            <dd className="mt-2">
              Repayment mortgages. Interest-only payments aren’t calculated here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if my rate is 0%?
            </dt>
            <dd className="mt-2">
              At 0% interest, the monthly payment is simply the loan amount
              divided by the number of months in the term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I include overpayments?
            </dt>
            <dd className="mt-2">
              Not in this version. Overpayments change the payoff date and total
              interest, and can be limited by lender rules.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the interest rate the same as APR?
            </dt>
            <dd className="mt-2">
              Not necessarily. APR includes certain fees; the note rate is what
              drives the monthly payment.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
