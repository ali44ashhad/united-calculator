import React from "react";
import { Link } from "react-router-dom";

export default function DepreciationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Depreciation calculator: straight-line annual expense
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Assets lose value as they age. This <strong>depreciation calculator</strong>{" "}
          uses the <strong>straight-line method</strong>: spread the depreciable
          amount evenly over the asset’s useful life. Enter purchase{" "}
          <strong>cost</strong>, expected <strong>salvage value</strong>, and{" "}
          <strong>useful life in years</strong> to see annual depreciation and
          total depreciation over the full life.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Declining balance and units-of-production are different approaches—not
          built into this page. To discount future cash flows from an asset, see
          the{" "}
          <Link
            to="/finance/present-value-calculator"
            className="text-primary hover:underline"
          >
            Present Value Calculator
          </Link>
          . For loan payments on financed equipment, use the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Straight-line formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Annual depreciation = (Cost − Salvage) ÷ Useful life (years)
Total depreciation = Cost − Salvage
Book value after n years = Cost − (n × Annual depreciation)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the original cost of the asset.</li>
          <li>Enter estimated salvage value at end of life (can be zero).</li>
          <li>Enter useful life in whole years (or fractional years).</li>
          <li>Review annual expense, total depreciation, and ending book value.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$50,000</strong> machine with <strong>$5,000</strong> salvage
            and a <strong>10-year</strong> life depreciates{" "}
            <strong>$4,500</strong> per year (($50,000 − $5,000) ÷ 10). Total
            depreciation is <strong>$45,000</strong>; book value after 10 years is
            the $5,000 salvage amount.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              When is straight-line appropriate?
            </dt>
            <dd className="mt-2">
              It fits assets that wear down steadily—buildings, furniture, or
              equipment with fairly even usage over time.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if salvage is zero?
            </dt>
            <dd className="mt-2">
              Enter 0. The full cost is depreciated over useful life with nothing
              left at the end.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does depreciation affect cash flow?
            </dt>
            <dd className="mt-2">
              Depreciation is a non-cash accounting expense. It lowers reported
              profit but does not by itself move cash—loan principal and interest
              do.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How does this relate to taxes?
            </dt>
            <dd className="mt-2">
              Tax codes may use different rates or bonus depreciation rules. Pair
              planning with the{" "}
              <Link
                to="/finance/income-tax-calculator"
                className="text-primary hover:underline"
              >
                Income Tax Calculator
              </Link>{" "}
              for income estimates, not as a substitute for tax advice.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I get a year-by-year schedule here?
            </dt>
            <dd className="mt-2">
              This tool shows the constant annual amount. Multiply by the year
              number to get accumulated depreciation, or use the amortization-style
              tools if you need a full payment schedule for financed assets.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
