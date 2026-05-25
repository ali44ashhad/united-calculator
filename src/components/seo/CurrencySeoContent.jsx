import React from "react";
import { Link } from "react-router-dom";

export default function CurrencySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Currency calculator: convert USD, INR, EUR, and GBP
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need a quick sense of what an amount is worth in another major
          currency? This <strong>currency calculator</strong> multiplies your
          number by a built-in rate between <strong>USD</strong>,{" "}
          <strong>INR</strong>, <strong>EUR</strong>, and <strong>GBP</strong>.
          Pick a from and to currency, enter an amount, and see the result
          update as you type.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Rates here are <strong>illustrative samples</strong>, not live forex
          feeds. Before you travel or send money, confirm the quote from your
          bank or provider. For other unit conversions, try the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          . For growth over time in one currency, see the{" "}
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
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Converted amount = Amount × Exchange rate

Example: 100 USD → INR at rate 83.5
→ 100 × 83.5 = 8,350 INR`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When from and to are the same currency, the rate is 1 and the amount
          is unchanged.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount in the source currency.</li>
          <li>Choose the currency you are converting from.</li>
          <li>Choose the target currency.</li>
          <li>Read the converted amount and the rate shown in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Converting <strong>1 USD</strong> to <strong>INR</strong> at the
            sample rate <strong>83.5</strong> gives about{" "}
            <strong>83.50 INR</strong>. Changing to <strong>EUR</strong> at{" "}
            <strong>0.93</strong> would show about <strong>0.93 EUR</strong> for
            the same dollar.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are these live exchange rates?
            </dt>
            <dd className="mt-2">
              No. The tool uses fixed sample rates for quick estimates. Market
              rates move throughout the day; use your bank or a live source for
              actual transactions.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is my bank’s number different?
            </dt>
            <dd className="mt-2">
              Banks and card networks often add a spread or fee on top of the
              mid-market rate. This calculator does not model those charges.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Which pairs can I convert?
            </dt>
            <dd className="mt-2">
              Any combination among USD, INR, EUR, and GBP that has a rate in the
              built-in table. Same-currency conversion returns the same amount.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I use this for crypto?
            </dt>
            <dd className="mt-2">
              Only if you treat it as a manual math check—the supported list is
              the four fiat codes above, not cryptocurrency tickers.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I plan multi-currency savings?
            </dt>
            <dd className="mt-2">
              Convert amounts here for a snapshot, then use broader finance tools
              such as the{" "}
              <Link
                to="/finance/finance-calculator"
                className="text-primary hover:underline"
              >
                Finance Calculator
              </Link>{" "}
              for loan and investment scenarios in one currency at a time.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
