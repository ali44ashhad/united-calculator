import React from "react";
import { Link } from "react-router-dom";

export default function DebtToIncomeRatioSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Debt-to-income ratio calculator: back-end DTI in one step
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Lenders want to know how much of your paycheck already goes to debt.
          This <strong>debt-to-income (DTI) calculator</strong> computes{" "}
          <strong>back-end DTI</strong>: add up every monthly debt payment they
          typically count, divide by your <strong>gross monthly income</strong>,
          and express the result as a percent.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Front-end DTI</strong> (housing only) is a separate metric some
          mortgage underwriters track. Here you enter the{" "}
          <strong>full monthly debt total</strong> in one field—include rent or
          mortgage, taxes, insurance, loan payments, and minimum card payments.
          To model a new loan payment before adding it to DTI, try the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>{" "}
          or{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Back-end DTI (%) = (Total monthly debt payments ÷ Gross monthly income) × 100

Example: $1,500 debt payments on $6,000 gross income
→ (1,500 ÷ 6,000) × 100 = 25%`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Total your recurring monthly debt payments (housing, auto, student
            loans, minimum credit cards, etc.).
          </li>
          <li>Enter that sum in monthly debt payments.</li>
          <li>Enter gross monthly income before taxes.</li>
          <li>Read DTI percent and the general rating band.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For net pay after tax, use the{" "}
          <Link
            to="/finance/income-tax-calculator"
            className="text-primary hover:underline"
          >
            Income Tax Calculator
          </Link>{" "}
          separately—DTI uses gross income.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            With <strong>$1,500</strong> in total monthly obligations and{" "}
            <strong>$6,000</strong> gross income, back-end DTI is{" "}
            <strong>25%</strong>—often in the “Good” range on this tool. Many
            mortgage lenders prefer back-end DTI around <strong>43%</strong> or
            lower, but rules differ by loan program and credit profile.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is a good DTI?
            </dt>
            <dd className="mt-2">
              Lower is generally better. Under 36% back-end is often comfortable;
              many lenders cap mortgages near 43%, but “good” depends on the
              lender and your full application.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Gross or net income?
            </dt>
            <dd className="mt-2">
              Use gross (pre-tax) monthly income, which is standard for lender
              DTI math.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How can I lower my DTI?
            </dt>
            <dd className="mt-2">
              Pay down balances to reduce minimum payments, avoid new debt, or
              increase documented income. The{" "}
              <Link
                to="/finance/debt-consolidation-calculator"
                className="text-primary hover:underline"
              >
                Debt Consolidation Calculator
              </Link>{" "}
              can help compare whether a lower-rate loan reduces monthly
              obligations.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this split housing from other debt?
            </dt>
            <dd className="mt-2">
              No. Add housing into your total monthly debt figure, or calculate
              front-end DTI yourself as housing payment ÷ gross income.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are utilities included?
            </dt>
            <dd className="mt-2">
              Usually not. Count recurring debt payments lenders report on a
              credit application, not everyday living expenses.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
