import React from "react";
import { Link } from "react-router-dom";

export default function HouseAffordabilitySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          House affordability calculator: income, debt, and mortgage terms
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Before you shop, it helps to know a realistic price range. This{" "}
          <strong>house affordability calculator</strong> starts with{" "}
          <strong>annual income</strong>, <strong>existing monthly debt</strong>,{" "}
          your planned <strong>down payment</strong>, and assumed{" "}
          <strong>interest rate</strong> and <strong>loan term</strong>. It
          applies a <strong>36% back-end debt-to-income</strong> cap to find the
          largest principal-and-interest payment you can carry, then converts
          that to a maximum loan and home price.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Check your current DTI with the{" "}
          <Link
            to="/finance/debt-to-income-ratio-calculator"
            className="text-primary hover:underline"
          >
            Debt-to-Income Ratio Calculator
          </Link>
          . After you have a target price, use the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>{" "}
          for monthly P&amp;I on a specific loan amount, or the{" "}
          <Link
            to="/finance/down-payment-calculator"
            className="text-primary hover:underline"
          >
            Down Payment Calculator
          </Link>{" "}
          to split price into cash down versus financed balance.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the estimate works</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Monthly income = Annual income ÷ 12
Max P&I payment = (Monthly income × 36%) − Existing monthly debt

Max loan = PV of Max P&I over loan term at monthly rate
Max home price = Max loan + Down payment

Back-end DTI = (Existing debt + Max P&I) ÷ Monthly income`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The 36% limit is a common planning benchmark for total monthly debt
          obligations. Lenders may allow higher or lower ratios depending on
          credit, reserves, and loan program. This tool does not add property
          taxes, homeowners insurance, HOA dues, or PMI to the payment—budget
          separately for those costs.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter gross annual income before taxes.</li>
          <li>
            Enter recurring monthly debt payments lenders count (auto, student
            loans, minimum card payments, etc.)—not the new mortgage yet.
          </li>
          <li>Enter cash you can put toward the down payment.</li>
          <li>Enter an interest rate and term you expect to borrow at.</li>
          <li>Review max home price, loan amount, and P&amp;I payment.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            At <strong>$80,000</strong> annual income, <strong>$500</strong>{" "}
            monthly existing debt, <strong>$20,000</strong> down,{" "}
            <strong>6.5%</strong> for <strong>30 years</strong>, gross monthly
            income is about <strong>$6,667</strong>. Thirty-six percent of that
            is <strong>$2,400</strong> for all debt; after $500 existing debt,
            roughly <strong>$1,900</strong> can go to mortgage P&amp;I—leading
            to a max home price near <strong>$300,000</strong> (use the default
            inputs for exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why 36% and not 28%?
            </dt>
            <dd className="mt-2">
              Some guidelines cite 28% for housing only and 36% for all debt.
              This calculator uses one 36% cap on total monthly debt including
              the new mortgage P&amp;I, matching the back-end DTI approach in
              the formulas above.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What counts as monthly debt?
            </dt>
            <dd className="mt-2">
              Include payments lenders typically count: auto loans, student
              loans, personal loans, minimum credit card payments, and alimony or
              child support if applicable. Do not double-count the mortgage you
              are estimating.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is my max price lower than online “3× income” rules?
            </dt>
            <dd className="mt-2">
              Multiples of income ignore debt, rate, and term. This tool ties
              price to payment capacity at your stated rate and existing
              obligations.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I use gross or net income?
            </dt>
            <dd className="mt-2">
              Use gross (pre-tax) annual income, which is what most mortgage DTI
              calculations use.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I afford more if rates drop?
            </dt>
            <dd className="mt-2">
              Yes. A lower interest rate increases the loan amount supported by
              the same P&amp;I payment. Re-run the calculator with an updated
              rate to see the change.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
