import React from "react";
import { Link } from "react-router-dom";

export default function StudentLoanSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Student loan calculator: monthly payment and total cost
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>student loan calculator</strong> estimates your{" "}
          <strong>monthly payment</strong>, <strong>total amount repaid</strong>,
          and <strong>total interest</strong> from the loan{" "}
          <strong>balance</strong>, <strong>annual interest rate</strong>, and{" "}
          <strong>repayment term in years</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It uses standard <strong>fixed-rate amortization</strong>—the same
          math as many installment loans. It does <strong>not</strong> model
          U.S. federal income-driven plans (SAVE, PAYE, IBR), grace periods,
          in-school deferment, subsidized interest phases, or Public Service Loan
          Forgiveness.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For generic repayment wording, see the{" "}
          <Link
            to="/finance/repayment-calculator"
            className="text-primary hover:underline"
          >
            Repayment Calculator
          </Link>
          . For extra payments toward early payoff, try the{" "}
          <Link
            to="/finance/loan-payoff-calculator"
            className="text-primary hover:underline"
          >
            Loan Payoff Calculator
          </Link>
          . For a month-by-month table, use the{" "}
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
              <li>Level monthly payment over the term</li>
              <li>Total repaid and total interest</li>
              <li>0% rate edge case (balance ÷ months)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Income-driven or graduated payment plans</li>
              <li>Grace period before payments start</li>
              <li>Origination fees (unless added to balance)</li>
              <li>Consolidation or refinancing rate quotes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r / (1 − (1 + r)^−n)

P = loan balance
r = annual rate ÷ 12
n = years × 12

Total repaid = M × n
Total interest = Total repaid − P`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your outstanding student loan balance (or amount you plan to borrow).</li>
          <li>Enter the annual interest rate on the loan.</li>
          <li>Enter the repayment term in years (e.g. 10 or 20).</li>
          <li>Review monthly payment, total repaid, and total interest.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$30,000</strong> at <strong>5%</strong> for <strong>10 years</strong>{" "}
            → about <strong>$318</strong>/month, roughly <strong>$38,184</strong> total
            repaid, and about <strong>$8,184</strong> in interest (rounded).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Federal vs private student loans (context)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Federal</strong> loans may offer IDR, deferment, and forgiveness
          paths that change what you actually pay. <strong>Private</strong> loans
          are often closer to a fixed installment like this calculator. Use
          official loan servicer tools for plan-specific numbers; use this page
          for a straightforward fixed-payment estimate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the monthly payment the same as EMI?
            </dt>
            <dd className="mt-2">
              Yes for this tool—a fixed payment each month that pays off the
              balance over the term you enter.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I include multiple loans?
            </dt>
            <dd className="mt-2">
              Add balances together and use a blended rate only if you accept
              that approximation, or run each loan separately and sum the
              payments.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if I am still in school?
            </dt>
            <dd className="mt-2">
              This assumes repayment for the full term now. Deferment and
              grace periods are not modeled—shorten the term or run the calc
              when payments actually start.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Will paying extra reduce total interest?
            </dt>
            <dd className="mt-2">
              Yes in real life, but not in this summary-only tool. Use the Loan
              Payoff Calculator for extra-payment scenarios.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the personal loan calculator?
            </dt>
            <dd className="mt-2">
              Same amortization math; this page is labeled and explained for
              education debt planning.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
