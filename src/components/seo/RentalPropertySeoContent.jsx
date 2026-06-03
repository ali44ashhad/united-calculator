import React from "react";
import { Link } from "react-router-dom";

export default function RentalPropertySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Rental property calculator: net cash flow and cash yield
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>rental property calculator</strong> estimates{" "}
          <strong>monthly net income</strong> (rent minus expenses),{" "}
          <strong>annual net cash flow</strong>, and{" "}
          <strong>cash yield on purchase price</strong> from three inputs:
          monthly rent, monthly expenses, and property price.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It is a simple unlevered snapshot—not a full pro forma. It does{" "}
          <strong>not</strong> compute cash-on-cash return, mortgage payments,
          depreciation, tax benefits, or property appreciation.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For the loan payment on a purchase, use the{" "}
          <Link
            to="/finance/real-estate-calculator"
            className="text-primary hover:underline"
          >
            Real Estate Calculator
          </Link>
          . To compare renting vs buying, see the{" "}
          <Link
            to="/finance/rent-vs-buy-calculator"
            className="text-primary hover:underline"
          >
            Rent vs Buy Calculator
          </Link>
          . For income-based home budgets, try the{" "}
          <Link
            to="/finance/house-affordability-calculator"
            className="text-primary hover:underline"
          >
            House Affordability Calculator
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
              <li>Monthly net income (rent − expenses)</li>
              <li>Annual net cash flow</li>
              <li>Cash yield on full property price (%)</li>
              <li>Annual gross rent reference</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Cash-on-cash return (uses down payment, not full price)</li>
              <li>Separate mortgage P&amp;I field</li>
              <li>Vacancy or management defaults—you enter in expenses</li>
              <li>Appreciation, tax, or depreciation modeling</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Monthly net = Rent − Expenses
Annual net cash flow = Monthly net × 12
Cash yield on price = (Annual net ÷ Property price) × 100`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When expenses are <strong>operating costs only</strong> (taxes,
          insurance, maintenance, vacancy allowance, management) and exclude
          mortgage debt, this yield aligns with a basic{" "}
          <strong>cap rate</strong> (NOI ÷ value). If you include mortgage in
          expenses, the result is after-debt cash flow divided by price—not
          standard cap rate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter expected or actual monthly rent collected.</li>
          <li>
            Enter monthly expenses—either operating-only for cap-style yield, or
            include mortgage for after-debt net.
          </li>
          <li>Enter purchase price or current market value.</li>
          <li>
            Review monthly net, annual cash flow, and cash yield percentage.
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$2,500</strong>/mo rent, <strong>$800</strong>/mo expenses,
            <strong> $350,000</strong> price → <strong>$1,700</strong> monthly
            net, <strong>$20,400</strong> annual net, about{" "}
            <strong>5.8%</strong> cash yield (use defaults for exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Cap rate vs cash-on-cash vs this tool
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Cap rate</strong> compares net operating income to property
          value, usually before debt. <strong>Cash-on-cash</strong> compares
          annual cash flow after debt to cash invested (down payment plus
          closing costs). This calculator divides annual net by{" "}
          <strong>full purchase price</strong>, so it matches cap rate only in
          the unlevered, operating-expense case—not cash-on-cash.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this calculate cap rate?
            </dt>
            <dd className="mt-2">
              It outputs cash yield on price using the same math as cap rate
              when expenses are operating-only and exclude mortgage payments.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What expenses should I include?
            </dt>
            <dd className="mt-2">
              Property tax, insurance, maintenance, HOA, vacancy allowance, and
              property management if applicable. Include mortgage only if you
              want net after debt service.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is negative net income supported?
            </dt>
            <dd className="mt-2">
              Yes. If expenses exceed rent, monthly net and annual cash flow
              show negative values and yield is negative.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I model a financed purchase?
            </dt>
            <dd className="mt-2">
              Add your monthly mortgage P&amp;I to expenses, or use the Real
              Estate Calculator for the payment and combine results manually.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does it forecast appreciation?
            </dt>
            <dd className="mt-2">
              No. Returns are from rent minus expenses only, not future sale
              price or equity growth.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
