import React from "react";
import { Link } from "react-router-dom";

export default function BudgetSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Budget calculator: align monthly income with real spending buckets
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A practical <strong>monthly budget calculator</strong> starts with what
          you actually earn, then forces every rupee (or dollar, if you use the
          same numbers in another currency) into categories you recognize—rent,
          food, transport, utilities, entertainment, and a catch-all for odds and
          ends. This page adds those figures, totals expenses, and shows whether
          you have a surplus you can steer toward goals or a deficit you need to
          close before debt piles up.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Once your cash flow picture is clear, you might layer on investment
          return assumptions elsewhere—for example with the{" "}
          <Link
            to="/finance/average-return-calculator"
            className="text-primary hover:underline"
          >
            Average Return Calculator
          </Link>{" "}
          when you are thinking about how portfolio growth interacts with what
          you can afford to contribute each month.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a budget?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>personal budget</strong> is a simple rule: income minus
          planned spending equals what is left for saving, investing, or paying
          down balances. <strong>Household budget</strong> planning works the same
          way when you merge partners or family members—just be honest about
          irregular costs (school fees, insurance renewals) by averaging them into
          monthly equivalents in the “other” line when you can.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Income</strong>: take-home pay, side gigs, predictable
            passive inflows.
          </li>
          <li>
            <strong>Fixed-style costs</strong>: rent and utilities fit here; loan
            minimums can sit under rent/other depending on how you label them.
          </li>
          <li>
            <strong>Variable costs</strong>: food, transport, entertainment often
            move month to month.
          </li>
          <li>
            <strong>Savings rate</strong>: here it is whatever remains after the
            categories you entered—not a separate input, so treat debt payments
            as expenses until they are gone.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          The 50/30/20 idea (optional guide)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Many <strong>budget planners</strong> use the{" "}
          <strong>50/30/20 rule</strong> as a sanity check: roughly half toward
          needs, thirty percent toward wants, twenty toward savings and extra
          debt paydown. Real life rarely lands on those exact shares—high rent
          cities or caregiving seasons skew the split—but the frame still helps
          you ask whether wants are crowding out resilience.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this budget calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter total monthly income after tax if that is how you budget.</li>
          <li>
            Fill each expense bucket with a realistic monthly number; use zero
            where a category does not apply.
          </li>
          <li>
            Read total expenses, remaining savings (can be negative), and
            savings as a percent of income.
          </li>
          <li>
            Adjust categories and repeat until the plan feels livable for the
            next month.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Tip: if you carry EMIs or credit card minimums, include them in rent or
          other so the bottom line reflects true <strong>income and expense</strong>{" "}
          pressure.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Quick example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Imagine ₹50,000 monthly income and ₹31,000 combined spending across the
            built-in categories. That leaves ₹19,000—about{" "}
            <strong>38% of income</strong>—as surplus you could split between an
            emergency fund, retirement, or accelerated loan payoff. If expenses
            exceed income, the same summary shows a negative savings figure so you
            can trim the flexible lines first.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this for one person or a whole household?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Either. Combine household income and shared bills into one sheet, or
              run numbers separately if you keep split accounts.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How often should I revisit my budget?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              At least monthly, and any time pay, rent, or loan terms change.
              Seasonal bills are easier if you divide annual costs by twelve and
              park them in utilities or other.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if savings percent looks odd?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Percent is savings divided by income; zero income makes the ratio
              meaningless, and very small income can swing percentages wildly—use
              the absolute rupee surplus as your primary signal.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
