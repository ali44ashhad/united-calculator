import React from "react";
import { Link } from "react-router-dom";

export default function RetirementSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Retirement calculator: projected savings at retirement age
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>retirement calculator</strong> projects a{" "}
          <strong>lump-sum nest egg</strong> at your target retirement age from{" "}
          <strong>current savings</strong>, <strong>monthly contributions</strong>,
          and an <strong>expected annual return</strong>. It compounds both your
          starting balance and future deposits until retirement.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> estimate how much you need to spend in
          retirement, monthly pension income, Social Security, or whether your
          corpus lasts through life expectancy. Those need separate assumptions.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For contributions only (no starting balance), see the{" "}
          <Link
            to="/finance/pension-calculator"
            className="text-primary hover:underline"
          >
            Pension Calculator
          </Link>
          . For employer plan math, try the{" "}
          <Link
            to="/finance/401k-calculator"
            className="text-primary hover:underline"
          >
            401(k) Calculator
          </Link>
          . For general compound growth, use the{" "}
          <Link
            to="/finance/investment-calculator"
            className="text-primary hover:underline"
          >
            Investment Calculator
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
              <li>Growth of current retirement savings</li>
              <li>Monthly contributions (start-of-month / annuity due)</li>
              <li>Total projected balance at retirement age</li>
              <li>Breakdown of savings vs contribution growth</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Retirement spending needs or safe withdrawal rate</li>
              <li>Monthly income after you stop working</li>
              <li>Taxes, fees, inflation, or employer match</li>
              <li>Post-retirement drawdown or longevity risk</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Months = (Retirement age − Current age) × 12
r = Annual return ÷ 12

FV of current savings = Savings × (1 + r)^Months

FV of contributions (annuity due) =
  Payment × [(1 + r)^Months − 1] / r × (1 + r)

Total at retirement = FV savings + FV contributions`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Contributions are modeled at the <strong>beginning</strong> of each
          month so each deposit earns a full month of return—the same convention
          as the Pension Calculator on this site.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your age today and target retirement age.</li>
          <li>Enter balances already saved for retirement.</li>
          <li>Enter how much you plan to invest each month until retirement.</li>
          <li>
            Set a long-run return assumption (historical stock averages are often
            cited around 7–10% nominal, but past performance varies).
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Age <strong>35</strong> → retire at <strong>65</strong>,{" "}
            <strong>$50,000</strong> saved, <strong>$500</strong>/mo at{" "}
            <strong>7%</strong>—use defaults to see projected total and growth
            split.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Projection vs retirement plan
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A higher projected balance is useful directionally, but retirement
          security also depends on <strong>how long you live</strong>,{" "}
          <strong>health costs</strong>, and <strong>inflation</strong>. Many
          planners discuss safe withdrawal rates (e.g. 4% rule) on the portfolio
          after retirement—this tool stops at the balance{" "}
          <strong>at</strong> retirement, not withdrawals after.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this show monthly retirement income?
            </dt>
            <dd className="mt-2">
              No. It shows a lump-sum balance at retirement age. Converting that
              to monthly spending requires withdrawal assumptions.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the pension calculator?
            </dt>
            <dd className="mt-2">
              The pension calculator starts from zero balance and only models
              monthly contributions. This page adds growth on existing savings.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I use pre-tax or post-tax dollars?
            </dt>
            <dd className="mt-2">
              Use consistent units. Tax-advantaged accounts grow pre-tax or
              tax-deferred; Roth balances are often quoted as after-tax future
              values depending on how you enter them.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What return rate should I assume?
            </dt>
            <dd className="mt-2">
              Conservative planners often use lower rates for bonds-heavy mixes
              and higher for stock-heavy long horizons. Stress-test with several
              rates rather than one optimistic number.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I set monthly contribution to zero?
            </dt>
            <dd className="mt-2">
              Yes. The result is only the future value of your current savings
              compounded to retirement.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
