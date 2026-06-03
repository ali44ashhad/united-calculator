import React from "react";
import { Link } from "react-router-dom";

export default function PensionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Pension calculator: grow your retirement fund with monthly savings
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>pension calculator</strong> estimates how much you could
          accumulate by retirement from regular <strong>monthly
          contributions</strong>, an assumed <strong>annual return</strong>, and
          the years between your <strong>current age</strong> and{" "}
          <strong>retirement age</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The result is a <strong>lump-sum fund at retirement</strong>—total
          contributed, estimated investment growth, and ending balance. It does{" "}
          <strong>not</strong> convert that balance into monthly pension income
          or model employer plans, tax rules, or fees.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For broader retirement projections, see the{" "}
          <Link
            to="/finance/retirement-calculator"
            className="text-primary hover:underline"
          >
            Retirement Calculator
          </Link>
          . For workplace plan growth, try the{" "}
          <Link
            to="/finance/401k-calculator"
            className="text-primary hover:underline"
          >
            401K Calculator
          </Link>
          . For monthly SIP-style math with a fixed year count, the{" "}
          <Link
            to="/finance/sip-calculator"
            className="text-primary hover:underline"
          >
            SIP Calculator
          </Link>{" "}
          uses a similar compounding model.
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
              <li>Equal monthly contributions until retirement</li>
              <li>Constant annual return with monthly compounding</li>
              <li>Contributions at the start of each month (annuity due)</li>
              <li>Total contributed, growth, and fund value at retirement</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Existing pension or 401(k) balance already saved</li>
              <li>Employer match, vesting, or plan limits</li>
              <li>Taxes on contributions or withdrawals</li>
              <li>Inflation-adjusted income or annuity payouts</li>
              <li>Variable returns or contribution increases over time</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Future value of an annuity due (payment at the beginning of each
          period):
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`FV = PMT × [((1 + r)^n − 1) / r] × (1 + r)

PMT = monthly contribution
r = annual return ÷ 12
n = (retirement age − current age) × 12

At 0% return: FV = PMT × n`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Growth depends heavily on time in the market. Starting earlier adds
          more compounding periods—even with the same monthly amount.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your current age and planned retirement age.</li>
          <li>Enter how much you can save each month toward pension/retirement.</li>
          <li>Enter a realistic long-term annual return assumption.</li>
          <li>
            Review total fund, contributions, and estimated growth at retirement.
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Age <strong>30</strong> to <strong>60</strong>,{" "}
            <strong>$500/month</strong>, <strong>7%</strong> annual return → 30
            years of compounding (use defaults for exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Planning tips</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Use conservative return assumptions for planning; actual markets
            vary year to year.
          </li>
          <li>
            Add any current account balance mentally—the tool only models new
            monthly savings from today.
          </li>
          <li>
            Increasing monthly contributions often has more impact than chasing
            a slightly higher return assumption.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this monthly pension income?
            </dt>
            <dd className="mt-2">
              No. It estimates the account balance at retirement. Monthly
              withdrawals depend on payout rules, life expectancy, and investment
              returns after you retire.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why annuity due (start of month)?
            </dt>
            <dd className="mt-2">
              Many payroll deductions invest at the beginning of the period. That
              gives each deposit one extra month of compounding versus
              end-of-month contributions.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What return rate should I use?
            </dt>
            <dd className="mt-2">
              Common planning ranges might be 5–8% for diversified long-term
              portfolios, but past performance does not guarantee future results.
              Adjust for your risk tolerance.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I include my current pension balance?
            </dt>
            <dd className="mt-2">
              Not in this version. Add your existing balance to the calculated
              future value for a rough total, or run a separate lump-sum growth
              calculation.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from a retirement calculator?
            </dt>
            <dd className="mt-2">
              This page focuses on monthly contributions until a retirement age.
              Other retirement tools on this site may use different inputs or
              show additional scenarios—compare methods before deciding.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
