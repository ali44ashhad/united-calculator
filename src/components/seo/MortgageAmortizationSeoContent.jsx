import React from "react";
import { Link } from "react-router-dom";

export default function MortgageAmortizationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Mortgage amortization calculator: P&amp;I payment and totals
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A fixed-rate mortgage pays the same <strong>principal and interest
          (P&amp;I)</strong> each month, but the mix changes: early payments are
          mostly <strong>interest</strong>; later payments apply more to{" "}
          <strong>principal</strong>. This{" "}
          <strong>mortgage amortization calculator</strong> uses{" "}
          <strong>loan amount</strong>, <strong>annual rate</strong>, and{" "}
          <strong>term in years</strong> to show monthly P&amp;I, lifetime
          interest, total paid, and how the <strong>first payment</strong> splits.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a quick monthly payment estimate, start with the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>
          . For general (non-mortgage) loans, see the{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
          </Link>
          . To compare financing a home vs renting cost, the{" "}
          <Link
            to="/finance/house-affordability-calculator"
            className="text-primary hover:underline"
          >
            House Affordability Calculator
          </Link>{" "}
          estimates price from income and debt.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r / (1 − (1 + r)^−n)

P = loan amount
r = annual rate ÷ 12
n = years × 12

Month 1 interest ≈ P × r
Month 1 principal ≈ M − month 1 interest
Total interest = (M × n) − P`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page does not print a full payment-by-payment schedule—only
          summary totals and the first month&apos;s principal/interest split.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the mortgage principal you are borrowing.</li>
          <li>Enter the note rate (annual interest).</li>
          <li>Enter the loan term in years (e.g., 30).</li>
          <li>Review monthly P&amp;I, total interest, and first-payment split.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$300,000</strong> at <strong>5%</strong> for <strong>30
            years</strong> → monthly P&amp;I about <strong>$1,610</strong>, total
            interest about <strong>$279,000</strong>, first-month interest about{" "}
            <strong>$1,250</strong> (tool defaults give exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as my full housing payment?
            </dt>
            <dd className="mt-2">
              No. Lenders often quote P&amp;I separately from property taxes,
              homeowners insurance, and mortgage insurance in escrow.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why show only the first month&apos;s split?
            </dt>
            <dd className="mt-2">
              It illustrates how amortization works without displaying hundreds
              of rows. Each later month applies more to principal as balance
              falls.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if I make extra principal payments?
            </dt>
            <dd className="mt-2">
              Extra payments reduce interest and shorten the loan but are not
              modeled here. Try the Mortgage Payoff Calculator for payoff
              scenarios if available on the site.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              ARM or interest-only loans?
            </dt>
            <dd className="mt-2">
              This tool assumes a fixed rate and full amortization from day one.
              Adjustable or interest-only structures need different calculators.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              15-year vs 30-year mortgage?
            </dt>
            <dd className="mt-2">
              Enter 15 or 30 in the term field. Shorter terms raise monthly
              P&amp;I but cut total interest substantially.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
