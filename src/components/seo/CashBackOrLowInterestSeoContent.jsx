import React from "react";
import { Link } from "react-router-dom";

export default function CashBackOrLowInterestSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Cash back or low interest: which incentive costs less?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Dealers and lenders often let you pick one promotion: a dollar{" "}
          <strong>cash back rebate</strong> on the purchase, or a{" "}
          <strong>low APR</strong> payment plan on the full amount. This{" "}
          <strong>cash back vs low interest calculator</strong> compares two
          simplified paths—rebate net cost (price minus cash back) versus
          financing the entire purchase at the annual rate and term you enter,
          including total interest on the amortized loan.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It is a quick screen, not a substitute for a lender’s full disclosure.
          For ongoing card balances, also see the{" "}
          <Link
            to="/finance/credit-card-calculator"
            className="text-primary hover:underline"
          >
            Credit Card Calculator
          </Link>
          ; for long-term savings goals after you choose a deal, the{" "}
          <Link
            to="/finance/savings-calculator"
            className="text-primary hover:underline"
          >
            Savings Calculator
          </Link>{" "}
          can help with contribution planning.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What each path means here</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Cash back path</strong>: net cost = purchase amount minus
            the rebate you enter (no interest added on this line).
          </li>
          <li>
            <strong>Low interest path</strong>: finance the full purchase at your
            rate over the months you enter; net cost = principal plus total
            interest.
          </li>
          <li>
            <strong>Lower net cost</strong>: whichever total is smaller is
            labeled the better option for this model.
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Real offers may combine restrictions (rebate only if you finance at
          standard rate, caps on term, fees). Use this page to sanity-check
          magnitude, then confirm with the contract.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Financed payment formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Monthly payment on the low-rate path uses standard amortization:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Payment = P × [ r(1 + r)^n ] ÷ [ (1 + r)^n − 1 ]`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Total interest = (payment × n) − P. Net cost with interest = P + total
          interest.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the purchase or financed price before incentives.</li>
          <li>Enter the cash back dollar amount offered.</li>
          <li>Enter the promotional annual rate for the low-interest path.</li>
          <li>Enter how many months you would repay if you finance.</li>
          <li>Compare net costs and the “lower net cost” label.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Quick example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$1,000</strong> purchase with <strong>$50 cash back</strong>{" "}
            implies a <strong>$950</strong> rebate-path net cost. Financing the
            full $1,000 at <strong>10% APR</strong> over <strong>12 months</strong>{" "}
            adds about <strong>$55</strong> in interest (~<strong>$1,055</strong>{" "}
            total)—so cash back wins in this snapshot. Change rate, term, or
            rebate size and the winner can flip.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does cash back include financing interest?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not in this model. The rebate line is purchase minus cash back only.
              If you still borrow after taking cash back, add that loan separately.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this only for auto dealer incentives?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Any “rebate vs reduced-rate financing” choice with a fixed term
              can be tested the same way, as long as the numbers match the offer.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if rates are 0% promotional?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter 0% for the annual rate; the tool spreads principal evenly over
              the months with no interest charge on the financed path.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
