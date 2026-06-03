import React from "react";
import { Link } from "react-router-dom";

export default function PersonalLoanSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Personal loan calculator: monthly payment and total cost
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>personal loan calculator</strong> helps you estimate the{" "}
          <strong>monthly payment</strong> (often called <strong>EMI</strong>),
          <strong> total interest</strong>, and <strong>total amount repaid</strong>{" "}
          before you borrow. Enter the <strong>loan amount</strong>,{" "}
          <strong>interest rate</strong>, and <strong>term in years</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Personal loans are usually unsecured installment debt with a fixed rate
          and level payments. This tool models that standard amortization—it
          does not pull credit scores, approve loans, or add lender fees unless
          you include them in the amount borrowed.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For generic loan math with the same formula, see the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>
          . To compare paying off faster, try the{" "}
          <Link
            to="/finance/loan-payoff-calculator"
            className="text-primary hover:underline"
          >
            Loan Payoff Calculator
          </Link>
          . For debt-to-income checks, use the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Fixed monthly payment (EMI)</li>
              <li>Total interest over the full term</li>
              <li>Total repaid (principal + interest)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Origination or processing fees (unless in loan amount)</li>
              <li>Credit approval, APR vs note rate breakdown</li>
              <li>Variable rates or payment holidays</li>
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

Total interest = (M × n) − P`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Personal loan rates are often higher than secured loans because there
          is no collateral. Even a few percentage points change the monthly
          payment and total interest materially.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount you plan to borrow (or were approved for).</li>
          <li>Enter the annual interest rate from your offer.</li>
          <li>Enter the repayment term in years.</li>
          <li>Compare monthly payment and total interest across offers.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$25,000</strong> at <strong>12%</strong> for{" "}
            <strong>5 years</strong> → monthly payment near{" "}
            <strong>$556</strong> (use defaults for exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Before you borrow</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Compare APR across lenders when available—it reflects certain fees
            better than the note rate alone.
          </li>
          <li>
            Shorter terms raise the monthly payment but usually cut total
            interest sharply.
          </li>
          <li>
            Make sure the payment fits your budget alongside other obligations;
            missing payments hurts credit and adds cost.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is EMI on a personal loan?
            </dt>
            <dd className="mt-2">
              EMI (equated monthly installment) is the fixed payment due each
              month until the loan is paid off, covering principal and interest.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Secured vs unsecured personal loans
            </dt>
            <dd className="mt-2">
              Unsecured personal loans rely on creditworthiness; secured loans
              use collateral. This calculator only needs amount, rate, and
              term—the math is the same for level-payment installment loans.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I include origination fees?
            </dt>
            <dd className="mt-2">
              If fees are financed into the loan, add them to the loan amount.
              If paid upfront, they are not part of the amortized balance here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I pay off early?
            </dt>
            <dd className="mt-2">
              Many lenders allow early payoff; some charge prepayment penalties.
              This tool assumes you keep the scheduled payment for the full term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from a credit card calculator?
            </dt>
            <dd className="mt-2">
              Personal loans typically have fixed terms and payments. Credit
              cards revolve with minimum payments and variable balances—use the{" "}
              <Link
                to="/finance/credit-card-calculator"
                className="text-primary hover:underline"
              >
                Credit Card Calculator
              </Link>{" "}
              for card payoff scenarios.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
