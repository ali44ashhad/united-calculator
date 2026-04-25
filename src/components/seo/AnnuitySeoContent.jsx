import React from "react";
import { Link } from "react-router-dom";

export default function AnnuitySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Annuity calculator: estimate how contributions can grow over time
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An annuity is a stream of equal payments made at regular intervals.
          Depending on your goal, that stream can mean you’re{" "}
          <strong>adding money</strong> to build future value, or{" "}
          <strong>withdrawing money</strong> as income. This page focuses on the
          accumulation side—monthly contributions growing through compounding—so
          you can get a clean estimate for retirement or long-term planning.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you’re looking for a simple{" "}
          <strong>retirement annuity calculator</strong>, a{" "}
          <strong>fixed annuity calculator</strong> estimate, or an{" "}
          <strong>annuity income calculator</strong> starting point, these
          results help you compare contribution amounts and timelines quickly.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use the annuity calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter your <strong>monthly contribution</strong>.
          </li>
          <li>
            Enter your expected <strong>annual return rate</strong>.
          </li>
          <li>
            Choose how many <strong>years</strong> you plan to contribute.
          </li>
          <li>
            Review the totals for contributions, interest earned, and future
            value.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A quick tip: if you’re unsure about what rate to use, test a few
          conservative and optimistic options and compare. You can also explore
          rate scenarios using our{" "}
          <Link
            to="/finance/average-return-calculator"
            className="text-primary hover:underline"
          >
            Average Return Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is an annuity (in simple terms)?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In everyday terms, an annuity is a payment plan that repeats. It can
          be used for saving (you keep contributing) or income (you receive a
          payout). Common annuity types you’ll hear about:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Immediate annuity</strong>: income starts soon after a lump
            sum deposit.
          </li>
          <li>
            <strong>Deferred annuity</strong>: income starts later, giving time
            for growth.
          </li>
          <li>
            <strong>Fixed annuity</strong>: uses a fixed crediting rate (more
            predictable).
          </li>
          <li>
            <strong>Variable annuity</strong>: returns vary based on investments
            (less predictable).
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If your goal is the payout side (monthly income), use our{" "}
          <Link
            to="/finance/annuity-payout-calculator"
            className="text-primary hover:underline"
          >
            Annuity Payout Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Annuity future value formula
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A common model for the future value of an “ordinary annuity” (payments
          at the end of each period) is:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`FV = PMT × [ (1 + r)^n − 1 ] ÷ r`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>PMT</strong> = monthly contribution
          </li>
          <li>
            <strong>r</strong> = monthly rate (annual rate ÷ 12)
          </li>
          <li>
            <strong>n</strong> = number of months (years × 12)
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is the same idea behind many long-term savings projections: each
          contribution gets a different amount of time to grow, and growth can
          compound.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Example: you invest <strong>$500/month</strong> for{" "}
            <strong>10 years</strong> at <strong>6% annual</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Monthly rate \(r\) = \(0.06 / 12\) = \(0.005\)
            </li>
            <li>
              Months \(n\) = \(10 × 12\) = \(120\)
            </li>
            <li>
              Total contributions = \(500 × 120\) = \($60,000\)
            </li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            The future value will be higher than $60,000 because earlier
            contributions have more time to compound. Try changing the years or
            rate to see how sensitive long-term growth can be.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          FAQs
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include inflation, fees, or taxes?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. This is a planning estimate using a steady return rate. Real
              annuity products can include fees and tax rules, and inflation can
              change what “future value” feels like in real purchasing power.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is the return guaranteed?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not necessarily. Fixed annuities may offer more predictable
              crediting, while variable returns depend on underlying
              investments. Use this calculator to compare scenarios, not as a
              guarantee.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

