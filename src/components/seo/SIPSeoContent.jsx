import React from "react";
import { Link } from "react-router-dom";

export default function SIPSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          SIP calculator: future value of monthly investments
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>Systematic Investment Plan (SIP)</strong> means investing a
          fixed amount on a regular schedule—often monthly—into mutual funds or
          similar vehicles. This <strong>SIP calculator</strong> projects how
          those equal <strong>monthly investments</strong> could grow at an{" "}
          <strong>assumed annual return</strong> over a number of{" "}
          <strong>years</strong>, with <strong>monthly compounding</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Deposits are modeled at the <strong>beginning of each month</strong>{" "}
          (annuity due). The result is an estimate only—actual fund returns
          change with markets, fees, and taxes. This page does not model
          step-up SIP, inflation, or bank-specific products.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For monthly savings with an <strong>initial lump sum</strong> and
          end-of-month deposits, use the{" "}
          <Link
            to="/finance/savings-calculator"
            className="text-primary hover:underline"
          >
            Savings Calculator
          </Link>
          . For a one-time investment at a fixed rate, try the{" "}
          <Link
            to="/finance/investment-calculator"
            className="text-primary hover:underline"
          >
            Investment Calculator
          </Link>
          . For retirement balance with starting savings, see the{" "}
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
              <li>Future value of level monthly investments</li>
              <li>Total invested vs estimated growth</li>
              <li>Fixed annual return converted to a monthly rate</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Step-up or increasing SIP amounts</li>
              <li>Inflation-adjusted or real returns</li>
              <li>Expense ratios, loads, or capital gains tax</li>
              <li>Market volatility or rupee-cost averaging simulation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`FV = PMT × [(1 + r)^n − 1] / r × (1 + r)

PMT = monthly investment
r = annual return ÷ 12 (monthly rate as a decimal)
n = years × 12 (number of months)

The (1 + r) factor means each payment is at the start of the month.`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If the annual return is <strong>0%</strong>, future value equals{" "}
          <strong>PMT × n</strong> (no compounding).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your fixed monthly investment amount.</li>
          <li>Enter an assumed annual return (percent)—not a guarantee.</li>
          <li>Enter how many years you plan to invest.</li>
          <li>Read future value, total invested, and estimated growth.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$500</strong> per month for <strong>10 years</strong> at{" "}
            <strong>7%</strong> annual return (compounded monthly, deposits at
            month start) → total invested <strong>$60,000</strong>; future value
            is higher because each deposit earns interest for the remaining
            months.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          SIP vs lump sum (conceptual)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>SIP</strong> spreads purchases over time, which can smooth
          entry into volatile markets but does not remove risk. A{" "}
          <strong>lump sum</strong> invests everything at once. This calculator
          only answers “what if I invest the same amount every month at this
          assumed rate?”—not which strategy wins in a specific market path.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is a SIP calculator used for?
            </dt>
            <dd className="mt-2">
              To illustrate how regular monthly investments might compound at
              an assumed return over time—useful for goal setting, not as a fund
              performance forecast.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why does timing (start vs end of month) matter?
            </dt>
            <dd className="mt-2">
              Beginning-of-month deposits earn interest for that full month, so
              future value is slightly higher than end-of-month deposits at the
              same rate. This tool uses beginning-of-month timing.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I model increasing my SIP each year?
            </dt>
            <dd className="mt-2">
              Not on this page. Run separate scenarios with different monthly
              amounts or use a spreadsheet for step-up schedules.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is 12% return realistic every year?
            </dt>
            <dd className="mt-2">
              Equity funds can have strong long-term averages but also losing
              years. Treat any rate you enter as a planning assumption, not a
              promise.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from compound interest on one deposit?
            </dt>
            <dd className="mt-2">
              Compound interest on a lump sum has no recurring payments. SIP
              math adds a stream of monthly investments. See the Investment or
              Compound Interest calculators for single-principal growth.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
