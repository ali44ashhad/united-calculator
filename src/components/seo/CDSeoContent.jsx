import React from "react";
import { Link } from "react-router-dom";

export default function CDSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          CD calculator: certificate of deposit maturity and interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>certificate of deposit (CD)</strong> locks in your deposit
          for a set term while the bank pays a stated rate. This{" "}
          <strong>CD calculator</strong> applies compound interest: you enter
          principal, annual rate, years, and how often interest compounds, then
          see <strong>maturity value</strong> and total{" "}
          <strong>interest earned</strong>. It is a planning estimate—early
          withdrawal penalties and taxes are not included.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For open-ended savings with the same math but different framing, try
          the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . For market-based growth assumptions, the{" "}
          <Link
            to="/finance/investment-calculator"
            className="text-primary hover:underline"
          >
            Investment Calculator
          </Link>{" "}
          covers a different risk profile.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Compound growth formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Future value with n compounding periods per year:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`A = P × (1 + r/n)^(n×t)`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>P</strong> = initial deposit
          </li>
          <li>
            <strong>r</strong> = annual rate (decimal)
          </li>
          <li>
            <strong>n</strong> = compounding periods per year
          </li>
          <li>
            <strong>t</strong> = term in years
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          More frequent compounding (monthly vs annually) slightly increases
          maturity value at the same quoted APR.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use this tool</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount you will deposit.</li>
          <li>Enter the annual interest rate from the CD offer.</li>
          <li>Enter the term in whole years.</li>
          <li>Pick compounding frequency (quarterly is a common default).</li>
          <li>Review interest earned and maturity amount.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> at <strong>5% APR</strong> for{" "}
            <strong>3 years</strong> with <strong>quarterly</strong> compounding
            grows to about <strong>$11,608</strong>, earning roughly{" "}
            <strong>$1,608</strong> in interest. At <strong>4% APR</strong> with{" "}
            <strong>monthly</strong> compounding over the same term, maturity is
            near <strong>$11,274</strong>—use the dropdown to compare schedules
            before you lock in a <strong>fixed deposit</strong> rate.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are CDs insured?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              U.S. bank CDs are often FDIC-insured within limits; credit-union
              CDs may be NCUA-insured. Confirm coverage with your institution.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I withdraw early?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Early withdrawal usually triggers a penalty that reduces interest
              or principal—this calculator assumes you hold to maturity.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is interest taxable?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Generally yes for taxable accounts; tax treatment depends on your
              situation and product type.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
