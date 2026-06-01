import React from "react";
import { Link } from "react-router-dom";

export default function InflationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Inflation calculator: purchasing power over time
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A dollar today buys more than the same nominal amount years from now.
          This <strong>inflation calculator</strong> takes an{" "}
          <strong>amount today</strong>, an assumed <strong>annual inflation
          rate</strong>, and <strong>years forward</strong> to show how much{" "}
          <strong>purchasing power</strong> remains in today&apos;s dollars and
          how much <strong>nominal cash</strong> you would need later for the
          same buying power.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To grow savings at an investment return (the opposite direction), use
          the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . To discount a single future cash flow, try the{" "}
          <Link
            to="/finance/present-value-calculator"
            className="text-primary hover:underline"
          >
            Present Value Calculator
          </Link>
          . For building wealth with contributions, see the{" "}
          <Link
            to="/finance/future-value-calculator"
            className="text-primary hover:underline"
          >
            Future Value Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Purchasing power (today's $) = Amount ÷ (1 + r)^t
Future nominal equivalent     = Amount × (1 + r)^t
Loss in purchasing power      = Amount − Purchasing power

r = annual inflation rate as decimal
t = years ahead`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          You supply one constant inflation rate—the tool does not load official
          CPI history. Use a long-run average (often 2–3% in planning) or your
          own assumption.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter cash or savings expressed in today&apos;s dollars.</li>
          <li>Enter an expected annual inflation rate.</li>
          <li>Enter how many years into the future you want to look.</li>
          <li>
            Review purchasing power left, loss in value, and future nominal
            needed for the same buying power.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$1,000</strong> today at <strong>3%</strong> inflation for{" "}
            <strong>10 years</strong> has about <strong>$744</strong> in
            today&apos;s purchasing power—a loss near <strong>$256</strong> (
            <strong>25.6%</strong>). You would need about <strong>$1,344</strong>{" "}
            nominal in 10 years to match what $1,000 buys now (defaults in the
            tool give exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as future value?
            </dt>
            <dd className="mt-2">
              No. Future value compounds money at a return rate. This tool
              deflates purchasing power at an inflation rate you enter.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What inflation rate should I use?
            </dt>
            <dd className="mt-2">
              Many planners use 2–3% for long horizons, but education, healthcare,
              or rent may run higher. Enter what fits your scenario.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I go backward in time?
            </dt>
            <dd className="mt-2">
              The math works with negative years (less time), but this UI is
              labeled for years ahead. For historical CPI levels, use official
              government data rather than a single assumed rate.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why show future nominal equivalent?
            </dt>
            <dd className="mt-2">
              It answers: &quot;How much money will I need in the future to buy
              what this amount buys today?&quot;—useful for retirement and goal
              planning.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this adjust investments for inflation?
            </dt>
            <dd className="mt-2">
              Only the lump sum you enter at the stated inflation rate. Portfolio
              returns, taxes, and fees are not modeled.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
