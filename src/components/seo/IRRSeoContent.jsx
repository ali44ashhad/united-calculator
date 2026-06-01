import React from "react";
import { Link } from "react-router-dom";

export default function IRRSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          IRR calculator: internal rate of return from cash flows
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Comparing projects? <strong>Internal rate of return (IRR)</strong> is
          the discount rate that makes <strong>net present value (NPV)</strong>{" "}
          of your cash flows equal to zero. This <strong>IRR calculator</strong>{" "}
          takes comma-separated amounts at periods t = 0, 1, 2, … and solves
          for that rate using <strong>Newton-Raphson</strong> iteration.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To value a single future amount today, use the{" "}
          <Link
            to="/finance/present-value-calculator"
            className="text-primary hover:underline"
          >
            Present Value Calculator
          </Link>
          . For lump-sum growth without irregular flows, try the{" "}
          <Link
            to="/finance/investment-calculator"
            className="text-primary hover:underline"
          >
            Investment Calculator
          </Link>
          . For building wealth with regular deposits, see the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">What IRR means</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`NPV = Σ [ CF_t / (1 + IRR)^t ] = 0

CF_t = cash flow at period t
t = 0, 1, 2, … (you choose period length)

If IRR > your hurdle rate → project may be attractive
If IRR < hurdle rate → project may be rejected`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter cash flows separated by commas—first value is period 0.
          </li>
          <li>Use negative numbers for investments or costs.</li>
          <li>Use positive numbers for returns or income.</li>
          <li>
            Review IRR (% per period) and NPV at IRR (should be near zero).
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>-10,000</strong> at t=0 plus inflows{" "}
            <strong>2,000; 3,000; 4,000; 5,000</strong> in later periods yields
            an IRR near <strong>14.5%</strong> per period (default inputs in
            the tool show the exact figure).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              IRR vs return on investment?
            </dt>
            <dd className="mt-2">
              IRR accounts for timing of cash flows, not just total profit.
              Two projects with the same net profit can have different IRRs if
              cash arrives sooner in one case.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why did the calculator show an error?
            </dt>
            <dd className="mt-2">
              Non-convergence, too few flows, or invalid entries prevent a
              stable rate. Some patterns (all positive or all negative flows)
              have no IRR.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can there be multiple IRRs?
            </dt>
            <dd className="mt-2">
              Yes, when cash flows change sign more than once. This tool returns
              one solution from its starting guess, not every possible IRR.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I compare IRR to WACC?
            </dt>
            <dd className="mt-2">
              Many analysts require IRR to exceed the cost of capital (hurdle
              rate). This calculator does not compute WACC—you supply your own
              benchmark.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does it handle dates?
            </dt>
            <dd className="mt-2">
              No calendar dates—only ordered periods. Space entries evenly for
              monthly or annual IRR as you intend.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
