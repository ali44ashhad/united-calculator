import React from "react";
import { Link } from "react-router-dom";

export default function InvestmentSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Investment calculator: lump-sum future value
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Planning a one-time investment? This <strong>investment calculator</strong>{" "}
          compounds a <strong>lump sum</strong> at a constant{" "}
          <strong>annual return</strong> for a set number of{" "}
          <strong>years</strong>. It shows <strong>future value</strong>, growth
          earned, and total return percent using FV = P(1+r)^t with yearly
          compounding.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For regular monthly deposits, use the{" "}
          <Link
            to="/finance/sip-calculator"
            className="text-primary hover:underline"
          >
            SIP Calculator
          </Link>
          . For initial plus annual contributions, try the{" "}
          <Link
            to="/finance/future-value-calculator"
            className="text-primary hover:underline"
          >
            Future Value Calculator
          </Link>
          . For the same compound formula with different framing, see the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`FV = P × (1 + r)^t
Growth = FV − P
Total return (%) = (Growth ÷ P) × 100

P = initial lump sum
r = annual return as decimal
t = years (compounded once per year)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount you invest today (one deposit).</li>
          <li>Enter an assumed average annual return (not guaranteed).</li>
          <li>Enter how many years the money stays invested.</li>
          <li>Review future value, growth, and total return.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> at <strong>8%</strong> for <strong>5
            years</strong> grows to about <strong>$14,693</strong>—roughly{" "}
            <strong>$4,693</strong> gain (<strong>46.9%</strong> total return).
            Use the default inputs in the tool for exact figures.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as SIP?
            </dt>
            <dd className="mt-2">
              No. SIP involves recurring contributions. This calculator is only
              for a single upfront investment.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What return rate should I use?
            </dt>
            <dd className="mt-2">
              Use a long-run average that matches your risk mix—stocks historically
              higher than cash, but past performance does not guarantee future
              results.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does it compound monthly?
            </dt>
            <dd className="mt-2">
              No—compounding is annual. More frequent compounding would slightly
              increase the ending balance at the same stated annual rate.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are withdrawals modeled?
            </dt>
            <dd className="mt-2">
              No. The full principal stays invested for the entire period with no
              additions or withdrawals.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How does inflation affect this?
            </dt>
            <dd className="mt-2">
              This shows nominal future dollars. For purchasing power, compare
              results with the{" "}
              <Link
                to="/finance/inflation-calculator"
                className="text-primary hover:underline"
              >
                Inflation Calculator
              </Link>{" "}
              using an inflation assumption.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
