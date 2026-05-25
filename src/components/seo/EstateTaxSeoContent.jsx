import React from "react";
import { Link } from "react-router-dom";

export default function EstateTaxSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Estate tax calculator: taxable estate and estimated tax
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Large estates may owe tax before heirs receive assets. This{" "}
          <strong>estate tax calculator</strong> uses a straightforward model:
          <strong> total estate value</strong>, an <strong>exemption
          limit</strong> you enter, and a <strong>flat tax rate</strong> on the
          amount above that exemption.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          U.S. federal estate tax in practice uses progressive rates and many
          planning rules—this page is for quick what-if math, not a filing
          substitute. For income tax on beneficiaries or trusts, see the{" "}
          <Link
            to="/finance/income-tax-calculator"
            className="text-primary hover:underline"
          >
            Income Tax Calculator
          </Link>
          . To compare asset growth over time, the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>{" "}
          can help with long-range projections.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Taxable estate = max(0, Total estate value − Exemption limit)
Estimated tax = Taxable estate × (Tax rate ÷ 100)

Example: $2,000,000 estate, $1,000,000 exemption, 40% rate
→ $1,000,000 taxable → $400,000 estimated tax`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter gross estate value (assets minus debts is a common starting point).</li>
          <li>
            Enter the exemption—e.g., a federal lifetime exclusion amount your
            advisor cites for your year.
          </li>
          <li>Enter a flat rate for a simplified tax estimate.</li>
          <li>Review taxable estate and estimated tax due.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            If total value is <strong>$2,000,000</strong>, exemption is{" "}
            <strong>$1,000,000</strong>, and rate is <strong>40%</strong>, taxable
            estate is <strong>$1,000,000</strong> and estimated tax is{" "}
            <strong>$400,000</strong>. If value is below the exemption, taxable
            estate and tax show as zero.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the official federal estate tax table?
            </dt>
            <dd className="mt-2">
              No. The IRS applies tiered rates above the exclusion. Use this tool
              with exemption and rate values you choose for planning scenarios.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What about state estate or inheritance tax?
            </dt>
            <dd className="mt-2">
              Some states impose separate taxes. Model those with a different
              exemption and rate in a second calculation if needed.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does marital deduction count here?
            </dt>
            <dd className="mt-2">
              Not automatically. Reduce estate value or increase effective
              exemption before running the calculator if your plan relies on
              unlimited marital deduction for a U.S. citizen spouse.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Who pays the tax?
            </dt>
            <dd className="mt-2">
              The estate generally pays from estate assets before distributions.
              Beneficiaries may face separate income tax on certain inherited
              accounts.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I plan with a professional?
            </dt>
            <dd className="mt-2">
              Yes for real estates involving gifts, trusts, valuation discounts,
              or multi-state property. This calculator is an educational
              starting point only.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
