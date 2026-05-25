import React from "react";
import { Link } from "react-router-dom";

export default function FinanceSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Finance calculator: future value of a lump-sum investment
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>finance calculator</strong> answers a focused question:
          if you invest one amount today at a steady annual return, what is it
          worth after several years? It uses{" "}
          <strong>annual compounding</strong> on a single deposit—formula{" "}
          <strong>FV = P × (1 + r)^t</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It is not a full suite of loan and budget tools on one screen. For
          monthly contributions and compounding frequency options, use the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . To discount future cash flows, try the{" "}
          <Link
            to="/finance/present-value-calculator"
            className="text-primary hover:underline"
          >
            Present Value Calculator
          </Link>
          . For spending plans, see the{" "}
          <Link
            to="/finance/budget-calculator"
            className="text-primary hover:underline"
          >
            Budget Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Future value (FV) = P × (1 + r)^t

P = initial amount
r = annual rate as decimal (8% → 0.08)
t = years

Growth = FV − P

Example: $10,000 at 8% for 10 years
→ FV ≈ $21,589, growth ≈ $11,589`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount you invest once at the start.</li>
          <li>Enter an assumed average annual return (historical or projected).</li>
          <li>Enter how many years the money stays invested.</li>
          <li>Read future value and total growth.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> at <strong>8%</strong> per year for{" "}
            <strong>10 years</strong> grows to about <strong>$21,589</strong>—roughly{" "}
            <strong>$11,589</strong> in total growth. Actual market results vary
            year to year; this is a smooth compounding illustration.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is this called a finance calculator?
            </dt>
            <dd className="mt-2">
              The page name is general, but the math here is specifically
              lump-sum future value. Other finance topics live in dedicated
              calculators in the Finance category.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if I add money every month?
            </dt>
            <dd className="mt-2">
              Recurring deposits need a compound-interest or annuity-style
              calculator with contribution fields—not this one-deposit model.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is return guaranteed?
            </dt>
            <dd className="mt-2">
              No. You enter an assumed rate; stocks, bonds, and savings products
              do not grow at a fixed percent every year.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do loans relate?
            </dt>
            <dd className="mt-2">
              Borrowing is the opposite direction—try the{" "}
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
              </Link>{" "}
              for payment estimates.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What about inflation?
            </dt>
            <dd className="mt-2">
              This tool does not adjust for inflation. Compare nominal future
              dollars to your goals in today’s dollars separately.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
