import React from "react";
import { Link } from "react-router-dom";

export default function FourZeroOneKSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          401(k) calculator: contributions, match, and compound growth
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>401(k)</strong> lets you save for retirement through work,
          often with an <strong>employer match</strong>. This{" "}
          <strong>401(k) calculator</strong> estimates an ending balance from
          your annual contribution, match percent (on contributions up to{" "}
          <strong>6% of salary</strong>), expected return, and years invested.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Each year the model adds your deposit plus match, then grows the
          balance by your return rate. For broader retirement planning, try the{" "}
          <Link
            to="/finance/retirement-calculator"
            className="text-primary hover:underline"
          >
            Retirement Calculator
          </Link>
          . For the same math on generic savings, see the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Year-by-year logic</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Match base = min(your annual contribution, 6% × salary)
Employer match = match % × match base

Each year:
  balance = (balance + your contribution + employer match) × (1 + return)

Total contributions = (your + employer) × years`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter how much you contribute per year (not per paycheck).</li>
          <li>Enter salary so the 6% match cap can apply.</li>
          <li>Enter employer match percent (e.g., 50 for half of the matchable amount).</li>
          <li>Set a long-term average return and years until retirement.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Salary <strong>$60,000</strong> → 6% cap = <strong>$3,600</strong>.
            You contribute <strong>$19,500</strong>; matchable base is{" "}
            <strong>$3,600</strong>. At <strong>50%</strong> match, employer adds{" "}
            <strong>$1,800</strong>/year. With <strong>7%</strong> return over{" "}
            <strong>30 years</strong>, the projected balance is well above the{" "}
            <strong>$639,000</strong> you would deposit—you can run the defaults
            in the tool to see the split between contributions and growth.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is match capped at 6% of salary?
            </dt>
            <dd className="mt-2">
              Many U.S. plans match on the first 6% of pay. This calculator
              follows that pattern; your plan may differ—adjust salary or
              contribution to approximate your rules.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as the annuity formula FV = C × [(1+r)^n − 1] ÷ r?
            </dt>
            <dd className="mt-2">
              Close in spirit, but this tool uses an explicit year loop with
              contributions before each year’s growth, which matches how the
              code behaves when you change inputs.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does it include Roth 401(k) or taxes?
            </dt>
            <dd className="mt-2">
              No tax distinction and no withdrawal modeling—only balance growth
              on amounts contributed.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What about inflation?
            </dt>
            <dd className="mt-2">
              Dollars shown are nominal. For purchasing power, use the{" "}
              <Link
                to="/finance/inflation-calculator"
                className="text-primary hover:underline"
              >
                Inflation Calculator
              </Link>{" "}
              on your result separately.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I max out the match?
            </dt>
            <dd className="mt-2">
              Contributing at least enough to capture the full employer match
              is often described as a priority because it is an immediate
              return on your deferral.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
