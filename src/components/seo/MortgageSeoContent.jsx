import React from "react";
import { Link } from "react-router-dom";

export default function MortgageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Mortgage calculator: monthly principal and interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Buying a home starts with knowing the loan payment. This{" "}
          <strong>mortgage calculator</strong> uses <strong>home price</strong>,{" "}
          <strong>down payment</strong>, <strong>interest rate</strong>, and{" "}
          <strong>loan term</strong> to estimate monthly{" "}
          <strong>principal and interest (P&amp;I)</strong>, plus total interest
          over the life of the loan.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For how much home fits your budget from income and debt, try the{" "}
          <Link
            to="/finance/house-affordability-calculator"
            className="text-primary hover:underline"
          >
            House Affordability Calculator
          </Link>
          . For amortization totals and first-month split, see the{" "}
          <Link
            to="/finance/mortgage-amortization-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Amortization Calculator
          </Link>
          . To compare renting vs owning costs, the{" "}
          <Link
            to="/finance/rent-vs-buy-calculator"
            className="text-primary hover:underline"
          >
            Rent vs Buy Calculator
          </Link>{" "}
          uses a different model.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Loan amount P = Home price − Down payment
M = P × r / (1 − (1 + r)^−n)

r = annual rate ÷ 12
n = years × 12

Total interest = (M × n) − P`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the purchase price.</li>
          <li>Enter cash down (subtracted from price for the loan).</li>
          <li>Pick 10-, 15-, 20-, or 30-year fixed term.</li>
          <li>Enter the annual note rate.</li>
          <li>Review monthly P&amp;I, loan amount, and lifetime interest.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$500,000</strong> home with <strong>$100,000</strong> down (
            <strong>20%</strong>) at <strong>4%</strong> for <strong>30
            years</strong> → about <strong>$400,000</strong> borrowed and monthly
            P&amp;I near <strong>$1,910</strong> (use defaults for exact
            figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this my full monthly mortgage payment?
            </dt>
            <dd className="mt-2">
              Often not. Lenders may add property tax, homeowners insurance, HOA,
              and PMI to escrow. This tool shows P&amp;I only.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How much down payment do I need?
            </dt>
            <dd className="mt-2">
              Programs vary. Twenty percent down often avoids PMI on conventional
              loans, but many buyers put less down and accept PMI or use other
              loan types.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why does a 15-year loan cost more per month?
            </dt>
            <dd className="mt-2">
              You pay off the same principal in fewer months, so each payment is
              larger—but total interest is usually much lower than a 30-year
              term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I compare refinance options here?
            </dt>
            <dd className="mt-2">
              This page is for purchase math from price and down payment. For
              replacing an existing loan, use the{" "}
              <Link
                to="/finance/refinance-calculator"
                className="text-primary hover:underline"
              >
                Refinance Calculator
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does the rate include points or APR?
            </dt>
            <dd className="mt-2">
              Enter the note rate used for the payment calculation. Discount
              points, fees, and APR are not broken out here.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
