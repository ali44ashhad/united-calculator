import React from "react";
import { Link } from "react-router-dom";

export default function CompoundInterestSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Compound interest calculator: growth on a lump-sum principal
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Compound interest means you earn returns on both principal and
          previously credited interest. This{" "}
          <strong>compound interest calculator</strong> uses the standard
          discrete formula: one starting deposit, a fixed annual rate, a
          compounding frequency, and a time horizon in years. It shows total
          future value and interest earned—no periodic contributions and no
          continuous compounding on this page.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For recurring monthly investments, the{" "}
          <Link
            to="/finance/sip-calculator"
            className="text-primary hover:underline"
          >
            SIP Calculator
          </Link>{" "}
          is a better fit. For a single future-value check with a different
          framing, try the{" "}
          <Link
            to="/finance/future-value-calculator"
            className="text-primary hover:underline"
          >
            Future Value Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`A = P × (1 + r/n)^(n×t)`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>P</strong> = principal
          </li>
          <li>
            <strong>r</strong> = annual rate (decimal)
          </li>
          <li>
            <strong>n</strong> = compounding periods per year
          </li>
          <li>
            <strong>t</strong> = years
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          More frequent compounding (monthly vs annually) slightly raises the
          ending balance at the same nominal APR.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter starting principal.</li>
          <li>Enter annual interest rate.</li>
          <li>Choose how often interest compounds each year.</li>
          <li>Enter investment length in years.</li>
          <li>Review interest earned and total amount.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> at <strong>8% APR</strong>, compounded{" "}
            <strong>quarterly</strong> for <strong>10 years</strong>, grows to
            about <strong>$22,080</strong> with roughly{" "}
            <strong>$12,080</strong> in interest. At <strong>5% APR</strong>{" "}
            compounded <strong>monthly</strong> for 10 years on{" "}
            <strong>$5,000</strong>, future value is near <strong>$8,235</strong>
            —illustrating how rate, frequency, and time interact.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I add monthly deposits?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not here. This version is lump-sum only. Use SIP or savings tools
              for contribution schedules.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is effective annual rate (EAR)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              EAR = (1 + r/n)^n − 1 compares nominal rates across different
              compounding intervals. This calculator shows dollar outcomes, not
              EAR directly.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
