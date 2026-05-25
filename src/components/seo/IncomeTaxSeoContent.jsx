import React from "react";
import { Link } from "react-router-dom";

export default function IncomeTaxSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Income tax calculator: India old vs new regime
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Choosing between tax regimes starts with a clear liability number. This{" "}
          <strong>income tax calculator</strong> takes <strong>gross annual
          income in INR</strong> and applies built-in <strong>slab rates</strong>{" "}
          for either the <strong>old regime</strong> or <strong>new regime</strong>,
          then adds <strong>4% health and education cess</strong> on the tax
          amount.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does not collect deductions (Section 80C, HRA, etc.)—under the real
          old regime those can lower taxable income. For annual pay context, see
          the{" "}
          <Link
            to="/finance/salary-calculator"
            className="text-primary hover:underline"
          >
            Salary Calculator
          </Link>
          . For U.S. estate planning (different tax system), the{" "}
          <Link
            to="/finance/estate-tax-calculator"
            className="text-primary hover:underline"
          >
            Estate Tax Calculator
          </Link>{" "}
          uses a flat-rate model. For U.S. filing status effects, try the{" "}
          <Link
            to="/finance/marriage-tax-calculator"
            className="text-primary hover:underline"
          >
            Marriage Tax Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Slabs used in this tool</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto space-y-4">
          <div>
            <p className="font-h3 text-h3 text-on-surface mb-2">Old regime</p>
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Up to ₹2,50,000     → 0%
₹2,50,001–5,00,000 → 5% on excess over ₹2.5L
₹5,00,001–10,00,000 → ₹12,500 + 20% on excess over ₹5L
Above ₹10,00,000    → ₹1,12,500 + 30% on excess over ₹10L`}</pre>
          </div>
          <div>
            <p className="font-h3 text-h3 text-on-surface mb-2">New regime</p>
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Up to ₹3,00,000      → 0%
₹3,00,001–6,00,000  → 5% on excess over ₹3L
₹6,00,001–9,00,000  → ₹15,000 + 10% on excess over ₹6L
₹9,00,001–12,00,000 → ₹45,000 + 15% on excess over ₹9L
₹12,00,001–15,00,000 → ₹90,000 + 20% on excess over ₹12L
Above ₹15,00,000     → ₹1,50,000 + 30% on excess over ₹15L`}</pre>
          </div>
          <p className="text-sm text-on-surface-variant">
            Total tax payable = slab tax + 4% cess on slab tax. Budget updates may
            change slabs; verify before filing.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter gross annual income (before deductions).</li>
          <li>Select old or new regime.</li>
          <li>Review income tax, cess, total payable, and income after tax.</li>
          <li>Switch regime and recalculate to compare the same income level.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            At <strong>₹10,00,000</strong> under the <strong>old regime</strong>,
            slab tax is <strong>₹1,12,500</strong>; cess adds about{" "}
            <strong>₹4,500</strong> for roughly <strong>₹1,17,000</strong> total
            payable. Under the <strong>new regime</strong> at the same income,
            liability is lower because slabs start at ₹3 lakh with gentler steps
            (use the default inputs for exact totals).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why does old regime tax look high without deductions?
            </dt>
            <dd className="mt-2">
              This calculator taxes the full income you type. Real old-regime
              filers often reduce taxable income via 80C, 80D, HRA, and other
              provisions not modeled here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Which regime should I pick?
            </dt>
            <dd className="mt-2">
              Run both regimes on the same income. Lower total tax here is a
              starting point only—eligibility, exemptions, and payroll structure
              matter in practice.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is surcharge included for high incomes?
            </dt>
            <dd className="mt-2">
              No. Additional surcharge on very high incomes is not applied in this
              simplified estimate.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is effective tax rate?
            </dt>
            <dd className="mt-2">
              Total tax payable (including cess) divided by annual income,
              expressed as a percent. It summarizes overall burden on gross
              income entered.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this replace Form 16 or e-filing?
            </dt>
            <dd className="mt-2">
              No. Use official portals and a qualified preparer for returns, TDS
              credits, and latest notification changes.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
