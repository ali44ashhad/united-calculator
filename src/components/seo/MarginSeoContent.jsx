import React from "react";
import { Link } from "react-router-dom";

export default function MarginSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Margin calculator: profit, gross margin, and markup
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Pricing a product? This <strong>margin calculator</strong> takes{" "}
          <strong>cost</strong> and <strong>selling price</strong> to show{" "}
          <strong>profit per unit</strong>, <strong>gross margin %</strong>{" "}
          (profit as a share of price), and <strong>markup %</strong> (profit as
          a share of cost).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To work backward from a list price and discount, use the{" "}
          <Link
            to="/finance/discount-calculator"
            className="text-primary hover:underline"
          >
            Discount Calculator
          </Link>
          . For sales commissions on revenue, try the{" "}
          <Link
            to="/finance/commission-calculator"
            className="text-primary hover:underline"
          >
            Commission Calculator
          </Link>
          . For overall budget planning, the{" "}
          <Link
            to="/finance/budget-calculator"
            className="text-primary hover:underline"
          >
            Budget Calculator
          </Link>{" "}
          helps track income and expenses separately.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Profit = Selling price − Cost

Gross margin (%) = (Profit ÷ Selling price) × 100
Markup (%)       = (Profit ÷ Cost) × 100

Example: cost $100, price $150
→ Profit $50, margin 33.33%, markup 50%`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter what you pay to make or buy the item (cost).</li>
          <li>Enter what you charge the customer (selling price).</li>
          <li>Review profit dollars, margin %, and markup %.</li>
          <li>Adjust price until margin or markup hits your target.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Cost <strong>$100</strong>, sell at <strong>$150</strong> →{" "}
            <strong>$50</strong> profit, <strong>33.33%</strong> gross margin,{" "}
            <strong>50%</strong> markup (tool defaults).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Which percentage should I target?
            </dt>
            <dd className="mt-2">
              It varies by industry. Retail often cites margin on revenue;
              wholesalers often think in markup on cost. Use the metric your
              team standardizes on.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is margin lower than markup for the same prices?
            </dt>
            <dd className="mt-2">
              Margin divides by the larger selling price; markup divides by the
              smaller cost base—so markup % is usually higher when both are
              positive.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if cost is zero?
            </dt>
            <dd className="mt-2">
              Markup is shown as 0% in this tool to avoid division by zero.
              Margin still reflects profit relative to selling price.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this net profit margin?
            </dt>
            <dd className="mt-2">
              No. Only unit cost and selling price—no rent, payroll, shipping,
              or income tax.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I enter tax-inclusive prices?
            </dt>
            <dd className="mt-2">
              Yes, if both cost and price include tax the same way. Mixed
              tax treatment will skew the comparison.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
