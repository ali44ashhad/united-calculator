import React from "react";
import { Link } from "react-router-dom";

export default function DownPaymentSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Down payment calculator: cash upfront, loan size, and LTV
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Buying a home or financing a big purchase starts with how much cash you
          put down. This <strong>down payment calculator</strong> uses{" "}
          <strong>purchase price</strong> and a <strong>down payment
          percentage</strong> to show the dollar amount due upfront, the{" "}
          <strong>loan amount</strong> you would finance, and{" "}
          <strong>loan-to-value (LTV)</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          After you know the loan balance, estimate payments with the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>{" "}
          or view a full schedule in the{" "}
          <Link
            to="/finance/mortgage-amortization-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Amortization Calculator
          </Link>
          . For general installment loans, the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>{" "}
          works the same way with the financed amount.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Down payment = Purchase price × (Down payment % ÷ 100)
Loan amount = Purchase price − Down payment
LTV (%) = (Loan amount ÷ Purchase price) × 100

Example: $500,000 with 20% down
→ $100,000 cash, $400,000 loan, 80% LTV`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the total purchase or sale price.</li>
          <li>Enter the down payment as a percent of that price.</li>
          <li>Review cash required, loan amount, and LTV.</li>
          <li>Compare scenarios (e.g., 5% vs 20% down) by changing the percent.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Examples</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>20% down</strong> on $350,000 → <strong>$70,000</strong> cash,
            <strong> $280,000</strong> loan, <strong>80% LTV</strong> (often avoids
            PMI on conventional loans).
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>5% down</strong> on the same price → <strong>$17,500</strong>{" "}
            cash, <strong>$332,500</strong> loan, <strong>95% LTV</strong> (lower
            upfront cash, higher monthly cost and PMI risk).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is a typical down payment?
            </dt>
            <dd className="mt-2">
              Many buyers target 10–20% on conventional homes, but programs exist
              with less. Minimums depend on loan type and lender rules.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why does 20% matter?
            </dt>
            <dd className="mt-2">
              Twenty percent down usually means 80% LTV, which is a common
              threshold to avoid PMI on conventional mortgages.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are closing costs included?
            </dt>
            <dd className="mt-2">
              No. Budget separately for appraisal, title, prepaid taxes, and
              lender fees in addition to the down payment.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I enter a dollar down payment instead?
            </dt>
            <dd className="mt-2">
              This page uses a percent. Divide your cash target by price and
              multiply by 100 to get the percent to enter (e.g., $50,000 on
              $400,000 = 12.5%).
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How does down payment affect approval?
            </dt>
            <dd className="mt-2">
              Lenders also review income and debts. Check{" "}
              <Link
                to="/finance/debt-to-income-ratio-calculator"
                className="text-primary hover:underline"
              >
                Debt-to-Income Ratio
              </Link>{" "}
              alongside this calculator when planning a mortgage.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
