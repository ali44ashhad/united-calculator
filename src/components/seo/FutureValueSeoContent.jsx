import React from "react";
import { Link } from "react-router-dom";

export default function FutureValueSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Future value calculator: lump sum plus annual savings
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Planning a goal years away? This <strong>future value calculator</strong>{" "}
          combines an <strong>initial investment</strong> with fixed{" "}
          <strong>annual contributions</strong> and a constant{" "}
          <strong>annual return</strong>. It uses standard compound interest and
          ordinary-annuity formulas with yearly compounding.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For monthly deposits or different compounding frequencies, try the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . For a single deposit with no additions, the{" "}
          <Link
            to="/finance/finance-calculator"
            className="text-primary hover:underline"
          >
            Finance Calculator
          </Link>{" "}
          uses the simpler FV = P(1+r)^t form.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`FV = P(1 + r)^t + PMT × [(1 + r)^t − 1] / r

P  = initial investment
PMT = annual contribution (end of each year)
r  = annual rate as decimal
t  = years

Total invested = P + PMT × t
Growth = FV − total invested`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter money you invest today (can be zero).</li>
          <li>Enter how much you add each year (can be zero).</li>
          <li>Enter an assumed average annual return and number of years.</li>
          <li>Review future value, total invested, and growth.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> today plus <strong>$5,000</strong> each year
            for <strong>15 years</strong> at <strong>8%</strong> grows to about{" "}
            <strong>$155,000</strong> future value. You would invest{" "}
            <strong>$85,000</strong> total; the rest is compounded growth (run the
            defaults in the tool for exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if I only have a lump sum?
            </dt>
            <dd className="mt-2">
              Set annual contribution to zero. The result is P(1+r)^t.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if I only contribute yearly with no starting balance?
            </dt>
            <dd className="mt-2">
              Set initial investment to zero. The annuity portion of the formula
              drives the result.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why end-of-year contributions?
            </dt>
            <dd className="mt-2">
              That matches the ordinary annuity formula shown above. Deposits at
              the start of each year would increase the projected balance slightly.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What return rate should I assume?
            </dt>
            <dd className="mt-2">
              Use a long-term average that fits your mix of stocks, bonds, and
              cash—not a single good or bad year.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How does this relate to present value?
            </dt>
            <dd className="mt-2">
              Future value projects forward; discounting flows backward. See the{" "}
              <Link
                to="/finance/present-value-calculator"
                className="text-primary hover:underline"
              >
                Present Value Calculator
              </Link>{" "}
              for the reverse direction.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
