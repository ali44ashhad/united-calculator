import React from "react";
import { Link } from "react-router-dom";

export default function SimpleInterestSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Simple interest calculator: I = P × R × T
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>simple interest calculator</strong> uses the standard
          formula <strong>I = P × R × T ÷ 100</strong>, where{" "}
          <strong>P</strong> is principal, <strong>R</strong> is the annual rate
          in percent, and <strong>T</strong> is time in <strong>years</strong>.
          You get <strong>simple interest</strong> dollars and{" "}
          <strong>total amount</strong> (principal + interest).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Simple interest is charged only on the original principal—not on
          interest already earned. It is <strong>not</strong> compound interest
          and not a full loan amortization schedule.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For interest that compounds on a growing balance, use the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . For a related annual-rate tool, see the{" "}
          <Link
            to="/finance/interest-calculator"
            className="text-primary hover:underline"
          >
            Interest Calculator
          </Link>
          . For monthly savings deposits with compounding, try the{" "}
          <Link
            to="/finance/savings-calculator"
            className="text-primary hover:underline"
          >
            Savings Calculator
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
              <li>Simple interest amount</li>
              <li>Total = principal + interest</li>
              <li>Annual rate and time in years</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Compound interest</li>
              <li>Time in months or days (convert to years yourself)</li>
              <li>Periodic payments or loan EMI</li>
              <li>Daily-rate simple interest variants</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Simple interest (I) = P × R × T ÷ 100
Total amount = P + I

P = principal
R = annual interest rate (%)
T = time (years)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the loan or investment principal.</li>
          <li>Enter the annual interest rate as a percent.</li>
          <li>Enter the number of years the money earns or owes interest.</li>
          <li>Read interest dollars and total amount.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$1,000</strong> at <strong>5%</strong> for <strong>2 years</strong>{" "}
            → I = 1000 × 5 × 2 ÷ 100 = <strong>$100</strong> interest,{" "}
            <strong>$1,100</strong> total.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Simple vs compound interest
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Over the same principal, rate, and years,{" "}
          <strong>compound interest</strong> usually produces a higher balance
          because each period’s interest earns more interest. Simple interest
          grows linearly with time. Use this page when your problem or contract
          specifies simple interest only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is the simple interest formula?
            </dt>
            <dd className="mt-2">
              I = P × R × T ÷ 100, with P in dollars, R as annual percent, and T
              in years.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I use 8 months as time?
            </dt>
            <dd className="mt-2">
              Convert to years: 8 ÷ 12 ≈ 0.667 years, then enter that value in
              the time field.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can interest be negative?
            </dt>
            <dd className="mt-2">
              A negative rate would reduce the total below principal. The tool
              allows negative rates mathematically; real loans rarely use them.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is bank savings account interest simple?
            </dt>
            <dd className="mt-2">
              Most savings products compound. Simple interest appears in some
              short-term notes, bonds, and textbook problems.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from EMI loan interest?
            </dt>
            <dd className="mt-2">
              EMI loans repay principal over time with changing interest each
              month. This calculator assumes one principal for the full period
              with no payments in between.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
