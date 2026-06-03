import React from "react";
import { Link } from "react-router-dom";

export default function PaybackPeriodSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Payback period calculator: how long to recover your investment
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>payback period</strong> tells you how long it takes to
          recover an <strong>initial investment</strong> from expected{" "}
          <strong>cash inflows</strong>. This calculator uses the{" "}
          <strong>simple payback period</strong> formula—ideal for quick project
          screening, capital budgeting comparisons, and “how fast do I break
          even?” questions.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter your upfront cost and a constant annual cash inflow. The result
          shows recovery time in years and months, plus the exact payback length
          in decimal years.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For profitability beyond breakeven, pair this with the{" "}
          <Link
            to="/finance/irr-calculator"
            className="text-primary hover:underline"
          >
            IRR Calculator
          </Link>{" "}
          or{" "}
          <Link
            to="/finance/roi-calculator"
            className="text-primary hover:underline"
          >
            ROI Calculator
          </Link>
          . For lump-sum growth over time, see the{" "}
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
              <li>Simple (undiscounted) payback period</li>
              <li>Constant annual cash inflow assumption</li>
              <li>Results in years + months and decimal years</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Discounted payback period (time value of money)</li>
              <li>NPV, IRR, or ROI calculations</li>
              <li>Uneven or declining yearly cash flows</li>
              <li>Salvage value, taxes, inflation, or financing costs</li>
            </ul>
          </div>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Simple payback is easy to explain and compare, but it ignores what
          happens after breakeven and treats a dollar today the same as a dollar
          years from now.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Payback period (years) = Initial investment ÷ Annual cash inflow

Example:
$100,000 investment ÷ $25,000/year = 4.00 years`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When inflows are level each year, breakeven occurs when cumulative
          inflows equal the initial outlay. This is sometimes called the
          “breakeven time” for the upfront cost—not to be confused with
          operating breakeven on fixed vs variable costs.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the <strong>initial investment</strong> (project cost, equipment
            purchase, etc.).
          </li>
          <li>
            Enter the <strong>annual cash inflow</strong> you expect each year
            after the project starts.
          </li>
          <li>
            Review payback in years and months and the decimal-year total.
          </li>
          <li>
            Change one input at a time to compare scenarios (for example, higher
            annual savings from efficiency upgrades).
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A machine costs <strong>$100,000</strong> and saves or earns{" "}
            <strong>$25,000</strong> per year. Simple payback is{" "}
            <strong>4 years</strong> (use defaults for exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When payback period is useful
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Liquidity and risk:</strong> shorter payback often means
            faster recovery of capital.
          </li>
          <li>
            <strong>Quick screening:</strong> compare multiple projects with a
            simple rule before deeper analysis.
          </li>
          <li>
            <strong>Stakeholder communication:</strong> “We break even in about X
            years” is easy to understand.
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Limitations matter: two projects with the same payback can have very
          different long-term value. Use discounted methods when timing and
          discount rate are important.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is simple payback period?
            </dt>
            <dd className="mt-2">
              Initial investment divided by annual cash inflow, without
              discounting future dollars. It estimates how many years until
              cumulative inflows equal the upfront cost.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as ROI?
            </dt>
            <dd className="mt-2">
              No. Payback measures recovery time, not return percentage. ROI
              compares gain to cost; this tool does not compute ROI.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is discounted payback period?
            </dt>
            <dd className="mt-2">
              A variant that discounts future cash flows before summing them.
              This calculator uses the undiscounted (simple) method only.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can cash inflows vary by year?
            </dt>
            <dd className="mt-2">
              Not here. Enter an average or steady annual inflow. Lumpy cash
              flows need a year-by-year cumulative model.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is a shorter payback always better?
            </dt>
            <dd className="mt-2">
              Usually preferred for risk and cash recovery, but a fast payback
              project might earn less over its full life than a slower one with
              higher total returns.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
