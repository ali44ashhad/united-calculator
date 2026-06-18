import React from "react";
import { Link } from "react-router-dom";

export default function CurrencySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Free online currency calculator and converter
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need a quick sense of what an amount is worth in another major
          currency? This <strong>currency calculator</strong> and{" "}
          <strong>currency converter</strong> multiplies your number by a
          built-in rate between <strong>USD</strong>, <strong>INR</strong>,{" "}
          <strong>EUR</strong>, and <strong>GBP</strong>. Use it as a simple{" "}
          <strong>exchange rate calculator</strong> or{" "}
          <strong>money conversion calculator</strong>—pick a from and to
          currency, enter an amount, and see the result update as you type.
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
        <h3 className="font-h3 text-h3 text-on-surface">
          How to calculate an exchange rate
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>exchange rate</strong> tells you how much one unit of a
          base currency is worth in another. To convert, multiply your amount by
          that rate. For example, if 1 USD = 83.5 INR, then 250 USD × 83.5 =
          20,875 INR. The calculator above applies the same maths using the
          sample rate for your selected pair and shows the rate in the summary
          (for example, <strong>1 USD = 83.5 INR</strong>).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To work backwards from a target amount, divide by the rate instead of
          multiplying. This is useful when you know how much you need in the
          destination currency and want an estimate in your home currency.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Sample exchange rates in this tool
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The table lists the illustrative rates built into this{" "}
          <strong>currency exchange calculator</strong>. Enter any amount above
          to convert; figures below use <strong>100 units</strong> of the from
          currency.
        </p>
        <div className="overflow-auto">
          <table className="w-full text-left text-body-lg font-body-lg border border-outline-variant rounded-xl overflow-hidden">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="p-4 font-h3 text-h3 text-on-surface">From</th>
                <th className="p-4 font-h3 text-h3 text-on-surface">To</th>
                <th className="p-4 font-h3 text-h3 text-on-surface">Rate</th>
                <th className="p-4 font-h3 text-h3 text-on-surface">
                  100 converted
                </th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-t border-outline-variant">
                <td className="p-4">USD</td>
                <td className="p-4">INR</td>
                <td className="p-4 font-code-num">83.5</td>
                <td className="p-4 font-code-num">8,350.00 INR</td>
              </tr>
              <tr className="border-t border-outline-variant bg-surface-container-lowest">
                <td className="p-4">USD</td>
                <td className="p-4">EUR</td>
                <td className="p-4 font-code-num">0.93</td>
                <td className="p-4 font-code-num">93.00 EUR</td>
              </tr>
              <tr className="border-t border-outline-variant">
                <td className="p-4">USD</td>
                <td className="p-4">GBP</td>
                <td className="p-4 font-code-num">0.81</td>
                <td className="p-4 font-code-num">81.00 GBP</td>
              </tr>
              <tr className="border-t border-outline-variant bg-surface-container-lowest">
                <td className="p-4">EUR</td>
                <td className="p-4">USD</td>
                <td className="p-4 font-code-num">1.08</td>
                <td className="p-4 font-code-num">108.00 USD</td>
              </tr>
              <tr className="border-t border-outline-variant">
                <td className="p-4">GBP</td>
                <td className="p-4">USD</td>
                <td className="p-4 font-code-num">1.23</td>
                <td className="p-4 font-code-num">123.00 USD</td>
              </tr>
              <tr className="border-t border-outline-variant bg-surface-container-lowest">
                <td className="p-4">GBP</td>
                <td className="p-4">INR</td>
                <td className="p-4 font-code-num">103</td>
                <td className="p-4 font-code-num">10,300.00 INR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Multi-currency conversion: USD, INR, EUR, and GBP
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Searches for a <strong>multiple currency converter online</strong> or{" "}
          <strong>universal currency converter</strong> often expect dozens of
          world currencies. This page focuses on four widely used fiat codes so
          you can switch between any supported pair in one place—useful for US
          dollars, Indian rupees, euros, and British pounds without opening a
          separate tool for each direction.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It works as a <strong>foreign exchange converter calculator</strong> for
          those four codes only. For broader unit types (length, weight, and
          more), use the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          UK users: GBP and exchange rate estimates
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you searched for a <strong>currency calculator UK</strong>,{" "}
          <strong>currency converter UK</strong>, or{" "}
          <strong>exchange rate calculator UK</strong>, select{" "}
          <strong>GBP</strong> as the from or to currency. You can estimate how
          pounds convert to USD, EUR, or INR using the sample rates—for example,
          100 GBP → about 123 USD at the built-in rate of 1.23.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For UK-specific tax on purchases, the{" "}
          <Link
            to="/finance/vat-calculator"
            className="text-primary hover:underline"
          >
            VAT Calculator
          </Link>{" "}
          handles a different kind of calculation. This tool is for currency
          conversion maths only.
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
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            For <strong>USD conversion</strong> at scale:{" "}
            <strong>100 USD</strong> → about <strong>8,350 INR</strong>,{" "}
            <strong>93 EUR</strong>, or <strong>81 GBP</strong> at the sample
            rates in this tool.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common mistakes when converting money
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Treating sample rates as live market quotes—rates move throughout
            the day.
          </li>
          <li>
            Ignoring card or bank spreads (Visa, Wise, and other providers
            quote their own rates plus fees).
          </li>
          <li>
            Forgetting that “mid-market” maths does not include transfer
            charges on international payments.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related calculators</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/conversion-calculator"
              className="text-primary hover:underline"
            >
              Conversion Calculator
            </Link>
            — general unit conversion
          </li>
          <li>
            <Link
              to="/finance/compound-interest-calculator"
              className="text-primary hover:underline"
            >
              Compound Interest Calculator
            </Link>
            — growth in one currency over time
          </li>
          <li>
            <Link
              to="/finance/inflation-calculator"
              className="text-primary hover:underline"
            >
              Inflation Calculator
            </Link>
            — purchasing power over time
          </li>
          <li>
            <Link
              to="/finance/tip-calculator"
              className="text-primary hover:underline"
            >
              Tip Calculator
            </Link>
            — quick percentage maths when travelling
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this a free online currency calculator?
            </dt>
            <dd className="mt-2">
              Yes. It is free to use in your browser with no signup. Enter an
              amount, choose from and to currencies, and see the converted value
              and rate instantly.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is the difference between a currency calculator and currency
              converter?
            </dt>
            <dd className="mt-2">
              People use both terms for the same task: turning an amount in one
              currency into another using an exchange rate. This page does both—
              multiply your amount by the rate for the pair you select.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I use this as an exchange rate calculator?
            </dt>
            <dd className="mt-2">
              Yes. The summary shows the rate applied (for example, 1 USD = 83.5
              INR) along with the converted amount. Change the amount or
              currencies to compare different scenarios.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as Google currency converter?
            </dt>
            <dd className="mt-2">
              No. Google and other search tools show live or frequently updated
              rates. This calculator uses fixed sample rates for quick private
              estimates and runs entirely on this page without sending your
              numbers to a forex API.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is my bank, Visa, or Wise rate different?
            </dt>
            <dd className="mt-2">
              Banks, card networks, and transfer apps quote their own rates and
              often add spreads or fees. This tool shows mathematical conversion
              only—it does not model Visa, Wise, or bank pricing.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this work for UK pounds (GBP)?
            </dt>
            <dd className="mt-2">
              Yes. GBP is one of the four supported currencies. Select GBP as
              from or to for pound-to-dollar, euro, or rupee estimates using the
              built-in sample rates.
            </dd>
          </div>
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
