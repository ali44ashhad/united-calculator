import React from "react";
import { Link } from "react-router-dom";

export default function SalesTaxSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Sales tax calculator: add tax to a pre-tax price
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>sales tax calculator</strong> finds the{" "}
          <strong>sales tax amount</strong> and <strong>total price with tax</strong>{" "}
          when you know the <strong>price before tax</strong> and the{" "}
          <strong>tax rate (%)</strong>. Tax is calculated on top of the
          subtotal—typical for US-style sales tax at checkout.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> work backward from a tax-included shelf
          price, look up rates by city or state, or combine multiple tax
          jurisdictions automatically.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For value-added tax style math, see the{" "}
          <Link
            to="/finance/vat-calculator"
            className="text-primary hover:underline"
          >
            VAT Calculator
          </Link>
          . For tips on top of a bill, try the{" "}
          <Link
            to="/finance/tip-calculator"
            className="text-primary hover:underline"
          >
            Tip Calculator
          </Link>
          . For discounts before tax, use the{" "}
          <Link
            to="/finance/discount-calculator"
            className="text-primary hover:underline"
          >
            Discount Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Sales tax = price × rate ÷ 100</li>
              <li>Total with tax = price + sales tax</li>
              <li>Any non-negative price and rate you enter</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Reverse: pre-tax from tax-included total</li>
              <li>Automatic state/local rate lookup</li>
              <li>Exemptions, use tax, or business resale rules</li>
              <li>Stacking discount then tax (apply discount first yourself)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Sales tax = Price before tax × (Rate ÷ 100)
Total with tax = Price before tax + Sales tax`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To find pre-tax price when you only know the total including tax:{" "}
          <strong>Pre-tax = Total ÷ (1 + Rate/100)</strong>. That reverse step is
          not built into this page.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the item or subtotal before tax.</li>
          <li>
            Enter your combined sales tax rate (state + local if you know the
            blended percent).
          </li>
          <li>Read sales tax dollars and checkout total.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$100</strong> before tax at <strong>8%</strong> →{" "}
            <strong>$8</strong> tax, <strong>$108</strong> total (see defaults).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Tax-exclusive vs tax-inclusive pricing
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Tax-exclusive</strong> prices show tax added at checkout—this
          calculator matches that flow. <strong>Tax-inclusive</strong> prices
          (common in many countries for VAT/GST displays) already contain tax;
          you need different math to split them.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I calculate sales tax on a purchase?
            </dt>
            <dd className="mt-2">
              Multiply the pre-tax price by the tax rate percent, then add that
              tax to the price. This tool does both steps.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              The tag shows $108 total—what was the price before tax?
            </dt>
            <dd className="mt-2">
              Divide $108 by (1 + rate/100). At 8%, pre-tax ≈ $108 ÷ 1.08 = $100.
              Use that manual step or a VAT-style reverse tool.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I apply a discount before or after tax?
            </dt>
            <dd className="mt-2">
              Usually discount first, then tax on the discounted subtotal. Enter
              the discounted pre-tax amount here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is sales tax the same in every state?
            </dt>
            <dd className="mt-2">
              No. Rates vary by state and locality. Enter the rate that applies
              to your purchase—this calculator does not look it up.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can the tax rate be zero?
            </dt>
            <dd className="mt-2">
              Yes. Some items or jurisdictions have 0% tax; total equals
              pre-tax price.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
