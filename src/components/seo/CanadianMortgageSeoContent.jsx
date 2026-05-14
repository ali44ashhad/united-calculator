import React from "react";
import { Link } from "react-router-dom";

export default function CanadianMortgageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Canadian mortgage calculator: CAD payment and borrowing cost
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Buying in Toronto, Vancouver, Calgary, or anywhere else starts with
          knowing what the bank will debit each month. This{" "}
          <strong>mortgage calculator for Canada</strong> subtracts your down
          payment from the purchase price, then applies a standard monthly
          amortizing payment formula to the <strong>Canadian mortgage rate</strong>{" "}
          you enter across the amortization in years. Output is in dollars as
          displayed—treat amounts as <strong>CAD</strong> for local planning.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does not print a full <strong>mortgage amortization schedule</strong>{" "}
          on this screen; for a period-by-period principal and interest view,
          use the{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
          </Link>
          . To relate payment to overall budget, the{" "}
          <Link
            to="/finance/house-affordability-calculator"
            className="text-primary hover:underline"
          >
            House Affordability Calculator
          </Link>{" "}
          can complement this estimate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Down payment rules in brief
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Federal minimum down payments step up with price; homes at or above
          one million dollars typically require at least twenty percent down and
          are not eligible for high-ratio insurance the way smaller loans can
          be. When you put down less than twenty percent on an eligible purchase,
          <strong> CMHC</strong> or other <strong>mortgage default insurance</strong>{" "}
          premiums apply—those costs are not built into this payment field, so
          add insurance and provincial land transfer tax in a separate line in
          your spreadsheet.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Payment formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Monthly payment on a fixed-rate loan with monthly payments at the
          quoted annual rate (converted to a monthly rate):
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × [ i(1 + i)^n ] ÷ [ (1 + i)^n − 1 ]`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>P</strong> = loan amount (price minus down payment)
          </li>
          <li>
            <strong>i</strong> = monthly interest rate (quoted annual ÷ 12)
          </li>
          <li>
            <strong>n</strong> = months in the amortization
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Variable-rate mortgages and accelerated bi-weekly schedules use
          different mechanics; this page models a single monthly installment at
          the rate you type.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the agreed or expected purchase price.</li>
          <li>Enter the down payment you plan to bring at closing.</li>
          <li>Set amortization length in whole years (common choices 25 or 30).</li>
          <li>Enter the annual note rate your lender quoted for modeling.</li>
          <li>Compare monthly payment, total interest, and total repayment.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Illustrative example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$500,000</strong> home with a <strong>10% ($50,000)</strong>{" "}
            down payment leaves <strong>$450,000</strong> financed. At about{" "}
            <strong>5% annual</strong> interest over <strong>25 years</strong>,
            the monthly payment is near <strong>$2,631</strong>, with roughly{" "}
            <strong>$339,000</strong> in interest and about{" "}
            <strong>$789,000</strong> paid over the life of the loan—helpful when
            stress-testing a <strong>Canada home loan</strong> before rate hold
            expires.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include property tax and home insurance?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Lenders often collect those in escrow on top of principal and
              interest—budget them separately.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use it for refinancing?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Use the remaining balance as “home price,” set down payment to
              zero (or net fees if you prefer), and enter the new rate and
              remaining amortization in years.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the longest amortization in Canada?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Insured high-ratio mortgages are generally capped at 25-year
              amortization; uninsured loans may extend to 30 years depending on
              lender policy—confirm with your mortgage professional.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
