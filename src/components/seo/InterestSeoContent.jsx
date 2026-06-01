import React from "react";
import { Link } from "react-router-dom";

export default function InterestSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Interest calculator: simple interest on principal
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need a quick interest number without compounding? This{" "}
          <strong>interest calculator</strong> uses the{" "}
          <strong>simple interest</strong> formula on a{" "}
          <strong>principal</strong> amount, an <strong>annual rate</strong>, and{" "}
          <strong>time in years</strong>. It returns interest earned and total
          amount (principal plus interest).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For interest that compounds each period, use the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>
          . The dedicated{" "}
          <Link
            to="/finance/simple-interest-calculator"
            className="text-primary hover:underline"
          >
            Simple Interest Calculator
          </Link>{" "}
          uses the same formula with different default amounts. For installment
          loans with a payment schedule, try the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`I = (P × R × T) ÷ 100
Total = P + I

P = principal
R = annual interest rate (%)
T = time in years`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the starting principal (loan or deposit).</li>
          <li>Enter the annual interest rate as a percent.</li>
          <li>Enter the number of years.</li>
          <li>Review simple interest and total amount.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$10,000</strong> at <strong>5%</strong> for <strong>2
            years</strong> earns <strong>$1,000</strong> simple interest (
            <strong>10%</strong> of principal over the period) for a total of{" "}
            <strong>$11,000</strong>—run the defaults in the tool for exact
            figures.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Simple vs compound interest?
            </dt>
            <dd className="mt-2">
              Simple interest applies only to the original principal each year.
              Compound interest adds prior interest to the balance so later
              periods earn on a larger base.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I enter months instead of years?
            </dt>
            <dd className="mt-2">
              This tool expects years. For partial years, use a decimal (e.g.,
              0.5 for six months) or convert months to years first.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this the same as APR on a credit card?
            </dt>
            <dd className="mt-2">
              Cards usually compound daily or monthly. Simple interest is a
              baseline estimate, not a substitute for card disclosures.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if the rate is zero?
            </dt>
            <dd className="mt-2">
              Interest is zero and total amount equals principal.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the Simple Interest Calculator page?
            </dt>
            <dd className="mt-2">
              Both use I = PRT/100. This page is the general interest entry;
              the other page is labeled explicitly for simple interest with its
              own defaults and SEO content.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
