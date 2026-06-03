import React from "react";
import { Link } from "react-router-dom";

export default function VATSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          VAT calculator: add or remove value added tax
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Value added tax (VAT)</strong> is a consumption tax used in
          many countries (including the UK and EU). This <strong>VAT calculator</strong>{" "}
          shows <strong>net price</strong> (excluding VAT), the{" "}
          <strong>VAT amount</strong>, and <strong>gross price</strong> (including
          VAT) from one dollar amount and a <strong>VAT rate (%)</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Check <strong>Amount includes VAT</strong> when your figure is a
          tax-inclusive shelf or invoice total—you want to strip VAT out. Leave it
          unchecked to <strong>add VAT</strong> on top of a net price.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For US-style tax added only to a pre-tax price, use the{" "}
          <Link
            to="/finance/sales-tax-calculator"
            className="text-primary hover:underline"
          >
            Sales Tax Calculator
          </Link>
          . For invoice tips, see the{" "}
          <Link
            to="/finance/tip-calculator"
            className="text-primary hover:underline"
          >
            Tip Calculator
          </Link>
          . For markdowns before tax, try the{" "}
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
              <li>Add VAT to a net (ex-VAT) amount</li>
              <li>Remove VAT from a gross (inc-VAT) amount</li>
              <li>Net, VAT, and gross breakdown</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Country-specific standard or reduced rates</li>
              <li>Multiple VAT rates on one basket</li>
              <li>VAT registration or filing rules</li>
              <li>Currency conversion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Add VAT (net in):
  VAT = net × (rate ÷ 100)
  Gross = net + VAT

Remove VAT (gross in):
  Net = gross ÷ (1 + rate ÷ 100)
  VAT = gross − net`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your price amount.</li>
          <li>Enter the VAT rate as a percent (e.g. 20 for 20%).</li>
          <li>
            Toggle whether the amount is already VAT-inclusive or VAT-exclusive.
          </li>
          <li>Read net, VAT, and gross in the summary.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$1,000</strong> net at <strong>20%</strong> VAT → VAT{" "}
            <strong>$200</strong>, gross <strong>$1,200</strong>. Or enter{" "}
            <strong>$1,200</strong> gross with VAT included → net{" "}
            <strong>$1,000</strong>, VAT <strong>$200</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">VAT vs sales tax</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Both use percentages on prices, but VAT is often quoted both ways on
          invoices (net line + VAT line = gross). US sales tax is frequently
          calculated only on a pre-tax subtotal. This tool handles both directions
          for VAT-style pricing; the sales tax page on this site is add-only on
          pre-tax amounts.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is the standard UK VAT rate?
            </dt>
            <dd className="mt-2">
              The standard rate is often 20%—enter 20 in the rate field. Reduced
              and zero rates exist for specific goods; this calculator uses one
              rate you choose.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why divide by (1 + rate) to remove VAT?
            </dt>
            <dd className="mt-2">
              If gross = net × 1.20 at 20% VAT, then net = gross ÷ 1.20. The VAT
              portion is the remainder: gross − net.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can VAT be more than the net price?
            </dt>
            <dd className="mt-2">
              At rates above 100% the math still runs, but normal consumer VAT
              rates are well below 100%.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is GST the same as VAT?
            </dt>
            <dd className="mt-2">
              Goods and services tax (GST) uses similar inclusive/exclusive math
              in many countries. Enter your local GST percent as the VAT rate here
              for a quick estimate.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this work for business VAT returns?
            </dt>
            <dd className="mt-2">
              No. It is a price split helper, not output VAT on sales minus input
              VAT on purchases for filing.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
