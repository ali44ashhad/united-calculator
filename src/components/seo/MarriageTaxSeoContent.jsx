import React from "react";
import { Link } from "react-router-dom";

export default function MarriageTaxSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Marriage tax calculator: simplified separate vs joint comparison
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Marriage can change how income is taxed, but the effect depends on
          brackets and deductions—not just adding incomes together. This{" "}
          <strong>marriage tax calculator</strong> applies a fixed{" "}
          <strong>22% rate</strong> to <strong>your income</strong> and{" "}
          <strong>your spouse&apos;s income</strong> taxed separately, then
          compares that to <strong>22% on combined income</strong>—an
          illustrative model only.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For household cash flow, use the{" "}
          <Link
            to="/finance/budget-calculator"
            className="text-primary hover:underline"
          >
            Budget Calculator
          </Link>
          . For debt ratios lenders use, see{" "}
          <Link
            to="/finance/debt-to-income-ratio-calculator"
            className="text-primary hover:underline"
          >
            Debt-to-Income Ratio Calculator
          </Link>
          . For India income tax regimes (unrelated to U.S. marriage filing), the{" "}
          <Link
            to="/finance/income-tax-calculator"
            className="text-primary hover:underline"
          >
            Income Tax Calculator
          </Link>{" "}
          covers old vs new slab estimates there.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What this tool computes</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Tax (separate) = Your income × 22% + Spouse income × 22%
Tax (combined)  = (Your income + Spouse income) × 22%
Difference      = Tax (separate) − Tax (combined)

With the same 22% on the same total dollars, difference is always $0.
Real-world marriage effects need progressive brackets and deductions.`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter annual gross income for each person.</li>
          <li>Review separate vs combined tax at the flat model rate.</li>
          <li>
            See the difference line—expect $0 unless the model rate changes in
            the future.
          </li>
          <li>Use a qualified preparer for actual filing decisions.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$50,000</strong> and <strong>$40,000</strong> incomes →{" "}
            <strong>$90,000</strong> combined. At <strong>22%</strong>, separate
            tax is <strong>$11,000 + $8,800 = $19,800</strong>; combined tax is
            also <strong>$19,800</strong>—difference <strong>$0</strong> (tool
            defaults).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why doesn&apos;t this show a marriage bonus?
            </dt>
            <dd className="mt-2">
              Because one flat rate on the same total income produces the same
              tax whether you calculate per person or on the combined amount.
              IRS bracket stacking creates real bonuses or penalties.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is married filing separately?
            </dt>
            <dd className="mt-2">
              Not modeled here. This page only contrasts per-person 22% vs
              combined 22%.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is 22% my actual tax bracket?
            </dt>
            <dd className="mt-2">
              Not necessarily. It is a fixed illustration rate baked into this
              calculator, not a lookup of current federal brackets.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Do state taxes matter?
            </dt>
            <dd className="mt-2">
              This tool is federal-style gross income only. State rules can
              change marriage outcomes separately.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can we plan wedding finances here?
            </dt>
            <dd className="mt-2">
              Use combined income for budgeting tools; use a tax advisor for
              filing status and withholding updates after marriage.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
