import React from "react";
import { Link } from "react-router-dom";

export default function RothIRASeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Roth IRA calculator: projected balance from contributions
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>Roth IRA calculator</strong> estimates how a Roth IRA
          could grow when you contribute a fixed amount each year at an expected{" "}
          <strong>annual return</strong> for a set <strong>number of years</strong>.
          Roth accounts use after-tax contributions; qualified withdrawals in
          retirement are generally tax-free—that tax treatment is not modeled as
          dollars here, only balance growth.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> use your age, income (MAGI), or IRS
          contribution limits automatically. It does <strong>not</strong> include
          an existing account balance—only new annual contributions from zero.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Compare with a traditional IRA on the{" "}
          <Link
            to="/finance/ira-calculator"
            className="text-primary hover:underline"
          >
            IRA Calculator
          </Link>
          . For current savings plus monthly investing, use the{" "}
          <Link
            to="/finance/retirement-calculator"
            className="text-primary hover:underline"
          >
            Retirement Calculator
          </Link>
          . For employer plans, see the{" "}
          <Link
            to="/finance/401k-calculator"
            className="text-primary hover:underline"
          >
            401(k) Calculator
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
              <li>Projected balance from annual contributions</li>
              <li>Total contributed vs estimated growth</li>
              <li>End-of-year contribution timing</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>IRS contribution limits by age</li>
              <li>Income / MAGI eligibility for Roth contributions</li>
              <li>Existing Roth IRA balance</li>
              <li>RMDs (original owners generally have none)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Each year (end of year):
  Balance = (Balance + Annual contribution) × (1 + r)

Equivalent after n years:
  FV = C × [(1 + r)^n − 1] / r

C = annual contribution, r = annual return, n = years`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the amount you plan to contribute each year (check IRS limits).
          </li>
          <li>Set a long-run investment return assumption.</li>
          <li>Enter how many years you will contribute.</li>
          <li>Review projected balance, total contributed, and growth.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$7,000</strong>/year for <strong>30 years</strong> at{" "}
            <strong>7%</strong> return—use defaults to see projected balance and
            growth (not a guarantee of future performance).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Roth vs traditional (brief)</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Roth IRA:</strong> contribute after tax, growth and qualified
          withdrawals often tax-free. <strong>Traditional IRA:</strong> often
          deductible contributions, tax on withdrawals. Which is better depends
          on current vs future tax rates—this page only projects Roth balance
          growth, not a full tax comparison.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is the annual Roth IRA contribution limit?
            </dt>
            <dd className="mt-2">
              IRS limits change and may include catch-up amounts at older ages.
              Enter your planned contribution here—do not rely on this tool to
              enforce caps.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why end-of-year contributions?
            </dt>
            <dd className="mt-2">
              The math adds each annual contribution then compounds for the rest
              of the year. Contributing on January 1 each year would produce a
              slightly higher balance.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I add my current Roth balance?
            </dt>
            <dd className="mt-2">
              Not in this version. Use the Retirement Calculator if you have
              existing savings plus ongoing contributions.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are returns guaranteed?
            </dt>
            <dd className="mt-2">
              No. The return field is an assumption. Actual investment results
              vary with markets and fees.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Do Roth IRAs have RMDs?
            </dt>
            <dd className="mt-2">
              Original account owners generally do not take lifetime RMDs from
              Roth IRAs. Beneficiary rules differ—confirm with current IRS
              guidance.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
