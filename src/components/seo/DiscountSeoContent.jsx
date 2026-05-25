import React from "react";
import { Link } from "react-router-dom";

export default function DiscountSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Discount calculator: final price after percent off
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Store tags and coupon codes usually show a single percent off. This{" "}
          <strong>discount calculator</strong> takes an <strong>original
          price</strong> and one <strong>discount percentage</strong>, then
          shows how much you save and the <strong>sale price</strong> before tax.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For another take on percent-off math, try the{" "}
          <Link
            to="/finance/percent-off-calculator"
            className="text-primary hover:underline"
          >
            Percent Off Calculator
          </Link>
          . For tax on the discounted total, use the{" "}
          <Link
            to="/finance/sales-tax-calculator"
            className="text-primary hover:underline"
          >
            Sales Tax Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Discount amount = Original price × (Discount % ÷ 100)
Final price = Original price − Discount amount

Or: Final price = Original × (1 − Discount % ÷ 100)

Example: $100 with 25% off → save $25, pay $75`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Stacked discounts (manual)</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Two sequential percents do <strong>not</strong> add up.{" "}
          <strong>20% off then 10% off</strong> on $200 is $200 × 0.8 × 0.9 ={" "}
          <strong>$144</strong>, not $140. Run this calculator twice—use the first
          final price as the new original—or multiply by each factor.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the list or regular price.</li>
          <li>Enter the discount percent (0–100).</li>
          <li>Read amount saved and final price.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>$1,000</strong> item with <strong>10% off</strong> saves{" "}
            <strong>$100</strong> and costs <strong>$900</strong> before any
            sales tax or shipping.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does 30% off mean I pay 30%?
            </dt>
            <dd className="mt-2">
              No. You pay 70% of the original price; 30% is the portion removed.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I enter a fixed dollar discount?
            </dt>
            <dd className="mt-2">
              This page is percent-only. For $50 off a $200 item, subtract
              manually or convert to percent (25%).
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is tax included?
            </dt>
            <dd className="mt-2">
              No. Tax is usually calculated on the discounted subtotal in many
              regions—use the sales tax tool for that step.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is effective discount with two sales?
            </dt>
            <dd className="mt-2">
              Divide final price by original and subtract from 1. On $200 down to
              $144, effective discount is 28%, not 30%.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Financing a discounted purchase?
            </dt>
            <dd className="mt-2">
              Use the discounted price as the amount in the{" "}
              <Link
                to="/finance/payment-calculator"
                className="text-primary hover:underline"
              >
                Payment Calculator
              </Link>{" "}
              if you are spreading payments over time.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
