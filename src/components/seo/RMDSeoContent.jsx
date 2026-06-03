import React from "react";
import { Link } from "react-router-dom";

export default function RMDSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          RMD calculator: required minimum distribution estimate
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>RMD calculator</strong> estimates your{" "}
          <strong>required minimum distribution (RMD)</strong>—the minimum you
          must withdraw each year from most tax-deferred retirement accounts
          once RMD rules apply. This tool uses the IRS{" "}
          <strong>Uniform Lifetime Table</strong>:{" "}
          <strong>balance ÷ life expectancy divisor</strong> for your age.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It covers ages <strong>72–100</strong> with standard divisors. It does{" "}
          <strong>not</strong> handle inherited IRAs, the spouse-more-than-10-years-younger
          table, Roth IRA owner lifetime RMDs, or multi-account aggregation rules.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For building retirement savings before withdrawals, see the{" "}
          <Link
            to="/finance/retirement-calculator"
            className="text-primary hover:underline"
          >
            Retirement Calculator
          </Link>
          . For employer plan context, try the{" "}
          <Link
            to="/finance/401k-calculator"
            className="text-primary hover:underline"
          >
            401(k) Calculator
          </Link>
          . For IRA contributions and growth, use the{" "}
          <Link
            to="/finance/ira-calculator"
            className="text-primary hover:underline"
          >
            IRA Calculator
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
              <li>Annual RMD from balance and age</li>
              <li>IRS Uniform Lifetime divisors (72–100)</li>
              <li>Divisor shown for transparency</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Inherited IRA / beneficiary RMD tables</li>
              <li>Joint life table (spouse 10+ years younger)</li>
              <li>Tax withholding or penalty calculations</li>
              <li>Aggregating multiple accounts per IRS rules</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Annual RMD = Account balance ÷ IRS divisor

Balance is typically the prior December 31 FMV.
Divisor comes from the Uniform Lifetime Table for your age.`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the tax-deferred account balance (often last Dec. 31 value).
          </li>
          <li>Enter your age for the RMD year (72–100 for this table).</li>
          <li>Read the estimated annual minimum withdrawal.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$200,000</strong> balance at age <strong>73</strong> →
            divisor <strong>26.5</strong> → about{" "}
            <strong>$7,547</strong> annual RMD (use defaults for exact figure).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">When RMDs begin</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Federal law has shifted the required beginning date over time. Under{" "}
          <strong>SECURE 2.0</strong>, many people now start at{" "}
          <strong>age 73</strong> (with further changes scheduled in later
          years). Some taxpayers under older rules began at 72. Your custodian
          and IRS Publication 590-B are authoritative—this page is an estimate
          only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What accounts require RMDs?
            </dt>
            <dd className="mt-2">
              Traditional IRA, SEP, SIMPLE, 401(k), 403(b), and similar
              tax-deferred plans generally do. Roth IRAs owned by the original
              owner usually have no lifetime RMDs.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is my age below 72 showing an error?
            </dt>
            <dd className="mt-2">
              The Uniform Lifetime divisors in this tool start at 72. If you are
              not yet subject to RMDs, no calculation applies here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I take more than the RMD?
            </dt>
            <dd className="mt-2">
              Yes. The RMD is a floor, not a cap. Extra withdrawals increase
              taxable income in the year taken.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if I have multiple IRAs?
            </dt>
            <dd className="mt-2">
              IRS rules allow calculating the IRA RMD on an aggregated basis but
              taking withdrawals from one or more accounts. This calculator
              models a single balance—you must apply IRS aggregation rules
              yourself.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this tax or legal advice?
            </dt>
            <dd className="mt-2">
              No. Confirm amounts, deadlines, and penalties with the IRS, your
              plan administrator, or a qualified tax professional.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
