import React from "react";
import { Link } from "react-router-dom";

export default function ROISeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          ROI calculator: simple return on investment
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>ROI calculator</strong> measures{" "}
          <strong>return on investment</strong> as a percentage: how much you
          gained or lost relative to what you put in. Enter{" "}
          <strong>final value</strong> (total amount returned or exit proceeds)
          and <strong>initial cost</strong> (what you invested).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is the basic formula{" "}
          <strong>(final − cost) ÷ cost</strong>. It does{" "}
          <strong>not</strong> annualize returns, compute IRR, or adjust for
          holding period unless you interpret the result yourself.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For growth over time with contributions, see the{" "}
          <Link
            to="/finance/investment-calculator"
            className="text-primary hover:underline"
          >
            Investment Calculator
          </Link>
          . For payback timing without percent return, try the{" "}
          <Link
            to="/finance/payback-period-calculator"
            className="text-primary hover:underline"
          >
            Payback Period Calculator
          </Link>
          . For rental property cash yield (different ROI context), use the{" "}
          <Link
            to="/finance/rental-property-calculator"
            className="text-primary hover:underline"
          >
            Rental Property Calculator
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
              <li>ROI percentage</li>
              <li>Net profit or loss in dollars</li>
              <li>Final value and initial cost reference</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Annualized or CAGR return</li>
              <li>IRR or time-weighted return</li>
              <li>Cash-on-cash with financed purchases</li>
              <li>Separate fee or tax line items</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Net profit = Final value − Initial cost
ROI (%) = (Net profit ÷ Initial cost) × 100`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The first field is <strong>not</strong> net profit—it is the full
          amount returned. The calculator subtracts cost for you. If you already
          know net profit only, add it to cost to get final value, or use cost
          and final = cost + profit.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter what you invested (initial cost).</li>
          <li>
            Enter total proceeds—sale price, exit value, or current value when
            measuring unrealized ROI.
          </li>
          <li>Read ROI % and net profit.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Invest <strong>$100,000</strong>, receive <strong>$120,000</strong>{" "}
            back → <strong>$20,000</strong> profit → <strong>20%</strong> ROI
            (see defaults).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Simple ROI vs other metrics
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>20% ROI</strong> over one year is very different from 20%
          over ten years. This tool ignores time.{" "}
          <strong>Annualized return</strong> and <strong>IRR</strong> account
          for timing of cash flows. Use this page for a quick gain-on-cost
          snapshot on a single round-trip investment.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is a good ROI?
            </dt>
            <dd className="mt-2">
              It depends on asset class, risk, and time. Compare to your cost of
              capital or alternative investments—not an absolute threshold from
              this calculator.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should fees be in final value or cost?
            </dt>
            <dd className="mt-2">
              Reduce final value by selling fees or increase cost by purchase
              fees so ROI reflects net economics.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I enter net profit instead of final value?
            </dt>
            <dd className="mt-2">
              Set final value = initial cost + net profit. The tool needs total
              proceeds, not profit alone.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is negative ROI a loss?
            </dt>
            <dd className="mt-2">
              Yes. Final value below cost yields negative net profit and
              negative ROI percent.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from payback period?
            </dt>
            <dd className="mt-2">
              Payback period answers how long until cumulative inflows recover
              investment. ROI answers percent gain on cost for a known final
              value.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
