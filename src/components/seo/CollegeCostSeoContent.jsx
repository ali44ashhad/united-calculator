import React from "react";
import { Link } from "react-router-dom";

export default function CollegeCostSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          College cost calculator: future tuition with education inflation
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Sticker price today is not what you will pay when a child starts
          school—or in sophomore, junior, and senior year. This{" "}
          <strong>college cost calculator</strong> inflates your current{" "}
          <strong>annual college cost</strong> by the rate you choose for each
          future year: first at enrollment, then for every year of the degree.
          You see the <strong>first-year future cost</strong> and the{" "}
          <strong>total across all enrolled years</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use the total as a savings target, then stress-test contributions with
          the{" "}
          <Link
            to="/finance/savings-calculator"
            className="text-primary hover:underline"
          >
            Savings Calculator
          </Link>
          . To think about general price growth outside tuition, the{" "}
          <Link
            to="/finance/inflation-calculator"
            className="text-primary hover:underline"
          >
            Inflation Calculator
          </Link>{" "}
          uses a similar compounding idea on a single amount.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the estimate works</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For each enrolled year, annual cost equals:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Cost in year t = Current annual cost × (1 + inflation)^t`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Here <strong>t</strong> is years from today. The first college year
          uses t = years until college starts; each additional enrolled year
          adds one more t. The tool sums those inflated annual amounts—useful
          for a four-year undergraduate plan or any length you enter.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter one year of all-in cost today (tuition plus room, board, and
            fees if you bundle them).
          </li>
          <li>Enter years until the student starts college (0 if already there).</li>
          <li>Enter an annual inflation assumption for education costs.</li>
          <li>Enter how many years they will be enrolled.</li>
          <li>Review first-year and total future costs.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Financial aid, scholarships, and 529 growth are not modeled here—subtract
          expected aid mentally or run separate savings projections.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$20,000</strong> per year today, <strong>10 years</strong>{" "}
            until enrollment, <strong>5% inflation</strong>, and a{" "}
            <strong>4-year</strong> degree implies a first year near{" "}
            <strong>$32,578</strong> and about <strong>$140,415</strong> total
            across all four inflated years—showing why starting a{" "}
            <strong>college savings</strong> plan early matters.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What should I include in annual cost?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              At minimum tuition; many families add housing, meal plans, books,
              and mandatory fees so the number matches their school’s cost of
              attendance.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 5% inflation realistic?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Historical education inflation has often exceeded general CPI.
              Try a higher and lower rate to bracket your plan.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include investment returns on a 529?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. This page only projects future costs. Pair it with a savings or
              investment growth tool for “how much to save” math.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
