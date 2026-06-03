import React from "react";
import { Link } from "react-router-dom";

export default function TakeHomePaycheckSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Take-home paycheck calculator: gross to net with flat tax rates
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>take-home paycheck calculator</strong> estimates{" "}
          <strong>annual net pay</strong> and an <strong>average monthly</strong>{" "}
          figure from your <strong>annual gross income</strong>, a{" "}
          <strong>federal tax rate (%)</strong>, a <strong>state tax rate (%)</strong>,
          and <strong>other annual deductions</strong> in dollars.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Taxes are applied as <strong>flat percentages of gross income</strong>—not
          U.S. progressive brackets, standard deductions, FICA, Medicare, or
          paycheck withholding tables. Use it when you already have effective rates
          from a prior return, planner, or employer estimate.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To build gross pay from hourly wages (no tax), use the{" "}
          <Link
            to="/finance/salary-calculator"
            className="text-primary hover:underline"
          >
            Salary Calculator
          </Link>
          . For India income-tax slabs, see the{" "}
          <Link
            to="/finance/income-tax-calculator"
            className="text-primary hover:underline"
          >
            Income Tax Calculator
          </Link>
          . For sales tax on purchases, try the{" "}
          <Link
            to="/finance/sales-tax-calculator"
            className="text-primary hover:underline"
          >
            Sales Tax Calculator
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
              <li>Annual take-home after flat fed + state %</li>
              <li>Monthly average (annual net ÷ 12)</li>
              <li>Federal, state, and other deduction breakdown</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>IRS tax brackets or standard deduction</li>
              <li>Social Security and Medicare (FICA)</li>
              <li>Pre-tax vs post-tax 401(k) treatment</li>
              <li>Biweekly vs semimonthly paycheck timing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Federal tax = gross × (federal % ÷ 100)
State tax   = gross × (state % ÷ 100)
Net annual  = gross − federal tax − state tax − other deductions
Monthly avg = net annual ÷ 12`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your annual gross salary or wages before tax.</li>
          <li>
            Enter federal and state rates as % of gross (use 0 for no state tax).
          </li>
          <li>
            Enter one annual dollar total for other deductions you want subtracted
            after that tax estimate.
          </li>
          <li>Read annual and average monthly take-home pay.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$60,000</strong> gross, <strong>12%</strong> federal,{" "}
            <strong>5%</strong> state, <strong>$2,000</strong> other deductions →
            taxes <strong>$10,200</strong>, net <strong>$47,800</strong>/year, about{" "}
            <strong>$3,983</strong>/month average.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why real paychecks differ
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Employers withhold using IRS tables, W-4 settings, and pre-tax benefits.
          Self-employed workers pay estimated taxes and self-employment tax. This
          calculator is a simplified planning shortcut when you supply your own
          effective rates—not a payroll system replacement.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What federal rate should I enter?
            </dt>
            <dd className="mt-2">
              Many people use an effective rate (total tax ÷ gross) from last
              year’s return, or a marginal bracket only as a rough upper bound—not
              as a perfect match to withholding.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should other deductions be pre-tax or after-tax?
            </dt>
            <dd className="mt-2">
              This model subtracts a flat dollar amount after applying tax on
              gross. If your 401(k) is pre-tax, real math differs—lower taxable
              income first. Adjust rates or deductions to match how you budget.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can take-home be negative?
            </dt>
            <dd className="mt-2">
              If taxes plus other deductions exceed gross, the tool will show a
              negative net—check that your inputs reflect reality.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I convert hourly pay to gross?
            </dt>
            <dd className="mt-2">
              Use the Salary Calculator for hourly × hours × weeks, then enter
              the annual gross here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this include Social Security tax?
            </dt>
            <dd className="mt-2">
              No. Add an approximate FICA rate into your federal % or increase
              other deductions if you want a rough combined estimate.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
