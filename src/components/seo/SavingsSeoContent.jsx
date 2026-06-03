import React from "react";
import { Link } from "react-router-dom";

export default function SavingsSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Savings calculator: future value with compound interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>savings calculator</strong> projects how money can grow
          from an <strong>initial deposit</strong>, fixed{" "}
          <strong>monthly contributions</strong>, an{" "}
          <strong>annual interest rate</strong>, and a time horizon in{" "}
          <strong>years</strong>. Interest <strong>compounds monthly</strong> on
          the running balance.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Contributions are modeled at the <strong>end of each month</strong>{" "}
          (ordinary annuity). It does not solve “how much must I save monthly to
          reach $X” or model specific account types (HYSA vs brokerage fees).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For lump-sum compound growth without monthly deposits, see the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . For broader investing assumptions, try the{" "}
          <Link
            to="/finance/investment-calculator"
            className="text-primary hover:underline"
          >
            Investment Calculator
          </Link>
          . For retirement-specific wording with starting balance, use the{" "}
          <Link
            to="/finance/retirement-calculator"
            className="text-primary hover:underline"
          >
            Retirement Calculator
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
              <li>Future value of initial + monthly savings</li>
              <li>Total contributed vs interest growth</li>
              <li>Split: growth from deposit vs from contributions</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Savings goal reverse calculation</li>
              <li>Variable contributions or annual raises</li>
              <li>Taxes, inflation, or account fees</li>
              <li>Beginning-of-month contribution timing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`FV = P × (1 + r)^n + PMT × [(1 + r)^n − 1] / r

P = initial amount
PMT = monthly contribution (end of month)
r = annual rate ÷ 12
n = years × 12`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter money already saved today (or zero).</li>
          <li>Enter how much you plan to add each month.</li>
          <li>Set an expected annual return (APY-style assumption).</li>
          <li>Choose how many years you will save.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> now plus <strong>$500</strong>/month for{" "}
            <strong>10 years</strong> at <strong>5%</strong>—use defaults to see
            future value and how much is contributions vs growth.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Compound interest and realistic expectations
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Small rate changes and more years of compounding have a large effect.
          The rate you enter is an assumption—not a guarantee. Bank savings APYs
          and investment returns differ; fees and taxes reduce real outcomes.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is monthly compounding the same as daily?
            </dt>
            <dd className="mt-2">
              No. This tool compounds once per month. More frequent compounding
              would slightly increase the balance at the same stated annual
              rate.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if I contribute at the start of each month?
            </dt>
            <dd className="mt-2">
              Beginning-of-month deposits earn slightly more interest. This
              calculator uses end-of-month timing; retirement tools on this site
              may use different conventions.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I set monthly contribution to zero?
            </dt>
            <dd className="mt-2">
              Yes. You get compound growth on the initial deposit only—similar to
              a basic compound interest scenario.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I plan for a $50,000 savings goal?
            </dt>
            <dd className="mt-2">
              Try different contribution and year inputs until the future value
              is near your goal, or use a dedicated goal planner if available.
              This page does not auto-solve for PMT.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does inflation reduce purchasing power?
            </dt>
            <dd className="mt-2">
              Yes in real life. Dollar amounts here are nominal—not adjusted
              for inflation.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
