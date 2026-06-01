import React from "react";
import { Link } from "react-router-dom";

export default function IRASeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          IRA calculator: monthly contributions and growth
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Individual Retirement Accounts reward long-term saving. This{" "}
          <strong>IRA calculator</strong> projects balance from a fixed{" "}
          <strong>monthly contribution</strong>, an assumed{" "}
          <strong>annual return</strong>, and <strong>years invested</strong>,
          with <strong>monthly compounding</strong> via the future value of an
          ordinary annuity.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does not model Traditional vs Roth tax rules or IRS limits. For
          annual Roth contributions compounded yearly, use the{" "}
          <Link
            to="/finance/roth-ira-calculator"
            className="text-primary hover:underline"
          >
            Roth IRA Calculator
          </Link>
          . For employer plans with match, see the{" "}
          <Link
            to="/finance/401k-calculator"
            className="text-primary hover:underline"
          >
            401(k) Calculator
          </Link>
          . For generic monthly investing, the{" "}
          <Link
            to="/finance/sip-calculator"
            className="text-primary hover:underline"
          >
            SIP Calculator
          </Link>{" "}
          uses a similar deposit pattern.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`FV = PMT × [(1 + r)^n − 1] / r

PMT = monthly contribution
r   = annual return ÷ 12 (monthly rate)
n   = years × 12 (months)

Total contributed = PMT × n
Growth = FV − total contributed`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter how much you deposit each month.</li>
          <li>Enter an assumed average annual investment return.</li>
          <li>Enter how many years you will contribute.</li>
          <li>Review future value, total contributions, and growth.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$500/month</strong> for <strong>30 years</strong> at{" "}
            <strong>7%</strong> contributes <strong>$180,000</strong> total and
            can grow to roughly <strong>$600,000+</strong> before taxes—use the
            tool defaults for the exact projection.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Traditional or Roth—which does this use?
            </dt>
            <dd className="mt-2">
              Neither for tax math. Both account types can hold investments that
              grow; taxes on contributions and withdrawals differ and are not
              calculated here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What are current IRA contribution limits?
            </dt>
            <dd className="mt-2">
              IRS limits change yearly and may be higher if you are 50+. Multiply
              your planned monthly deposit by 12 and compare to the published
              annual maximum.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why monthly instead of annual deposits?
            </dt>
            <dd className="mt-2">
              This calculator compounds each monthly deposit. The Roth IRA
              Calculator on this site uses one annual deposit per year instead.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the return rate guaranteed?
            </dt>
            <dd className="mt-2">
              No. Enter a planning assumption. Actual market returns vary and
              may be negative in some years.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are required minimum distributions included?
            </dt>
            <dd className="mt-2">
              No. Withdrawals in retirement are not modeled in this growth-only
              estimate.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
