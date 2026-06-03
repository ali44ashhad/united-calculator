import React from "react";
import { Link } from "react-router-dom";

export default function PercentOffSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Percent off calculator: sale price and savings
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>percent off calculator</strong> answers a common shopping
          question: if something costs <strong>$100</strong> and is{" "}
          <strong>20% off</strong>, what do you pay—and how much do you save?
          Enter the <strong>original price</strong> and <strong>percent off</strong>{" "}
          to get the <strong>discount amount</strong> and <strong>final price</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This tool applies <strong>one percentage discount</strong>. It does not
          add sales tax, handle stacked coupons, or model “extra 10% off clearance”
          chains unless you run the calculation step by step.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The{" "}
          <Link
            to="/finance/discount-calculator"
            className="text-primary hover:underline"
          >
            Discount Calculator
          </Link>{" "}
          uses the same formula with discount-focused wording. For tax on the
          reduced price, try the{" "}
          <Link
            to="/finance/sales-tax-calculator"
            className="text-primary hover:underline"
          >
            Sales Tax Calculator
          </Link>
          . For general percentage math, see the{" "}
          <Link
            to="/math/percentage-calculator"
            className="text-primary hover:underline"
          >
            Percentage Calculator
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
              <li>Discount amount in dollars</li>
              <li>Final sale price after one percent off</li>
              <li>Percent of original price you still pay</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Sales tax or VAT</li>
              <li>Multiple stacked percentage discounts</li>
              <li>Fixed-dollar coupons ($10 off)</li>
              <li>Shipping, fees, or loyalty points</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Discount amount = Original price × (Percent off ÷ 100)
Final price = Original price − Discount amount

Or: Final price = Original price × (1 − Percent off ÷ 100)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example: $100 with 20% off → save $20, pay $80 (80% of the original
          price).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the tag or list price before the discount.</li>
          <li>Enter the percent off (0–100).</li>
          <li>Review final price and amount saved.</li>
          <li>
            For “take an extra 15% off sale price,” calculate the first discount,
            then use the new price as original for a second run.
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Original <strong>$100</strong>, <strong>20%</strong> off → save{" "}
            <strong>$20</strong>, pay <strong>$80</strong> (defaults match this
            scenario).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Shopping tips</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Compare percent off to a fixed coupon by converting the coupon to an
            equivalent percent for the same item price.
          </li>
          <li>
            Remember tax is often calculated on the discounted price, which can
            change your out-the-door total.
          </li>
          <li>
            “Up to 50% off” on selected items means only some SKUs hit that
            rate—always check the price on your specific product.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I calculate 25% off?
            </dt>
            <dd className="mt-2">
              Multiply the price by 0.25 for savings, or multiply by 0.75 for the
              sale price. On $80, 25% off saves $20 and you pay $60.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is 30% off the same as paying 70%?
            </dt>
            <dd className="mt-2">
              Yes. Thirty percent off means you pay seventy percent of the
              original price.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What about double discounts?
            </dt>
            <dd className="mt-2">
              “20% off, then extra 10% off” is not the same as 30% off. Apply
              each percentage to the current price in order.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does percent off include tax?
            </dt>
            <dd className="mt-2">
              Usually the discount applies to the pretax price; tax is added
              after. Rules vary by store and location.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can discount be over 100%?
            </dt>
            <dd className="mt-2">
              This tool accepts 0–100% only. More than 100% off would imply a
              negative price, which is not meaningful for a single sale tag.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
