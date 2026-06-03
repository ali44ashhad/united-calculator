import React from "react";
import { Link } from "react-router-dom";

export default function SalarySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Salary calculator: hourly wage to gross weekly, monthly, and annual pay
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>salary calculator</strong> converts an{" "}
          <strong>hourly wage</strong> into <strong>gross</strong> weekly pay,
          average monthly pay, and annual salary using{" "}
          <strong>hours per week</strong> and <strong>weeks worked per year</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> estimate taxes, benefits, overtime rules,
          or net take-home pay. It also does not accept a monthly or annual salary
          as input—only hourly.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For net pay after withholding, use the{" "}
          <Link
            to="/finance/take-home-paycheck-calculator"
            className="text-primary hover:underline"
          >
            Take-Home Paycheck Calculator
          </Link>
          . For tax estimates, see the{" "}
          <Link
            to="/finance/income-tax-calculator"
            className="text-primary hover:underline"
          >
            Income Tax Calculator
          </Link>
          . If pay includes commission, try the{" "}
          <Link
            to="/finance/commission-calculator"
            className="text-primary hover:underline"
          >
            Commission Calculator
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
              <li>Weekly gross = hourly × hours per week</li>
              <li>Annual gross = weekly × weeks per year</li>
              <li>Average monthly gross = annual ÷ 12</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Federal, state, or FICA withholding</li>
              <li>Overtime, bonuses, or commission (unless in hourly rate)</li>
              <li>Biweekly vs semimonthly paycheck timing</li>
              <li>Reverse calculation from annual salary input</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Weekly gross = Hourly rate × Hours per week
Annual gross = Weekly gross × Weeks per year
Average monthly gross = Annual gross ÷ 12`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your gross hourly pay rate.</li>
          <li>Enter typical hours worked each week (often 40 for full-time).</li>
          <li>
            Enter weeks worked per year—52 for year-round, or fewer with unpaid
            leave.
          </li>
          <li>Review weekly, average monthly, and annual gross figures.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$25</strong>/hour × <strong>40</strong> hours ×{" "}
            <strong>52</strong> weeks → <strong>$1,000</strong>/week, about{" "}
            <strong>$4,333</strong>/month average, <strong>$52,000</strong>/year
            gross (see defaults).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Gross vs net and pay frequency
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Gross salary</strong> is before taxes and deductions. Your
          paycheck net is lower. <strong>Average monthly</strong> here is annual
          gross divided by 12—it may not match a single paycheck when you are paid
          every two weeks (26 pays per year).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I convert an annual salary to hourly?
            </dt>
            <dd className="mt-2">
              Divide annual gross by (hours per week × weeks per year). Example:
              $52,000 ÷ (40 × 52) = $25/hour.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is monthly pay my paycheck amount?
            </dt>
            <dd className="mt-2">
              Not necessarily. This tool shows average monthly gross. Biweekly
              workers often receive 26 checks per year, not 12 equal monthly
              amounts.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I use 52 weeks?
            </dt>
            <dd className="mt-2">
              Use 52 for full-time, year-round work. Reduce weeks if you have
              unpaid vacation, seasonal unemployment, or part-year employment.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does overtime change the result?
            </dt>
            <dd className="mt-2">
              Only if you reflect it in hours per week or effective hourly rate.
              This calculator does not apply overtime multipliers automatically.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Where do I estimate taxes?
            </dt>
            <dd className="mt-2">
              Use the Income Tax or Take-Home Paycheck calculators on this site
              after you know your gross annual income.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
