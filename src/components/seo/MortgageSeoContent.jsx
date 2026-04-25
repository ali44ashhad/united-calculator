import { Link } from "react-router-dom";

export default function MortgageSeoContent() {
  return (
    <article className="bg-white rounded-xl border border-outline-variant p-8 space-y-10">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-on-surface">
          Mortgage Calculator: estimate your monthly payment
        </h2>
        <p className="text-on-surface-variant leading-relaxed">
          A mortgage payment looks simple on paper, but small changes in{" "}
          <strong>interest rate</strong>, <strong>down payment</strong>, or{" "}
          <strong>loan term</strong> can move your monthly cost by a lot. This
          guide explains what the calculator is doing, how to use it correctly,
          and how to sanity‑check the output before you make a decision.
        </p>
      </header>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-primary">How to use it</h3>
        <ol className="list-decimal ml-5 text-on-surface-variant leading-relaxed space-y-2">
          <li>
            Put your <strong>Home Price</strong> (purchase price).
          </li>
          <li>
            Add your <strong>Down Payment</strong>. The calculator subtracts
            this from the home price to get the loan amount.
          </li>
          <li>
            Select a <strong>Loan Term</strong> (10/15/20/30 years).
          </li>
          <li>
            Enter your <strong>Interest Rate (%)</strong>.
          </li>
          <li>
            Read the summary: <strong>monthly payment</strong>,{" "}
            <strong>total interest</strong>, and <strong>total paid</strong>.
          </li>
        </ol>
        <p className="text-on-surface-variant leading-relaxed">
          If your goal is to quickly understand what your monthly payment might
          look like for a fixed‑rate loan, try a few realistic values and compare
          options (for example, different down payments or a shorter term).
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-primary">
          The formula behind the payment
        </h3>
        <p className="text-on-surface-variant leading-relaxed">
          Fixed‑rate mortgages typically use a standard amortization equation.
          The monthly payment \(M\) is:
        </p>
        <div className="bg-surface-container-low rounded-lg border border-outline-variant p-4 overflow-x-auto">
          <pre className="whitespace-pre-wrap text-sm text-on-surface">
{`M = P × r × (1 + r)^n / ((1 + r)^n − 1)

P = loan amount (home price − down payment)
r = monthly interest rate (annual rate / 12)
n = number of payments (years × 12)`}
          </pre>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          That’s why a 30‑year loan usually has a lower monthly payment than a
          15‑year loan — you’re spreading payments across more months, even
          though the total interest can be higher.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-primary">
          Example (simple walk‑through)
        </h3>
        <p className="text-on-surface-variant leading-relaxed">
          Example:{" "}
          <strong>$500,000 home</strong> with a <strong>$100,000</strong> down
          payment at <strong>4%</strong> for <strong>30 years</strong>.
        </p>
        <ul className="list-disc ml-5 text-on-surface-variant leading-relaxed space-y-1">
          <li>Loan amount \(P = 500000 − 100000 = 400000\)</li>
          <li>Monthly rate \(r = 0.04 / 12\)</li>
          <li>Total payments \(n = 30 × 12 = 360\)</li>
        </ul>
        <p className="text-on-surface-variant leading-relaxed">
          When you plug those values into the formula, you get the estimated
          monthly principal‑and‑interest payment. Multiply that payment by \(n\)
          to estimate the total amount paid, and subtract the loan amount to
          estimate total interest.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          Tip: If you’re comparing two rates (for example, 6.5% vs 6.0%), keep
          everything else the same and change only one input at a time. That’s
          the easiest way to see what’s driving the change.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-primary">
          Related finance tools
        </h3>
        <p className="text-on-surface-variant leading-relaxed">
          Mortgage planning usually isn’t just one number. These are the most
          useful follow‑ups:
        </p>
        <ul className="list-disc ml-5 text-on-surface-variant leading-relaxed space-y-2">
          <li>
            <Link
              className="text-primary hover:underline underline-offset-4"
              to="/finance/house-affordability-calculator"
            >
              House Affordability Calculator
            </Link>{" "}
            — a quick way to estimate a comfortable budget based on your income
            and monthly expenses.
          </li>
          <li>
            <Link
              className="text-primary hover:underline underline-offset-4"
              to="/finance/rent-vs-buy-calculator"
            >
              Rent vs Buy Calculator
            </Link>{" "}
            — helps compare the long‑term cost of renting vs owning.
          </li>
          <li>
            <Link
              className="text-primary hover:underline underline-offset-4"
              to="/finance/refinance-calculator"
            >
              Refinance Calculator
            </Link>{" "}
            — useful when you want to compare your current loan to a new rate or
            term.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">FAQs</h3>

        <details className="group border-b border-outline-variant pb-4" open>
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <h4 className="font-semibold text-on-surface">
              Is this payment the same as my “total monthly mortgage”?
            </h4>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <p className="mt-3 text-on-surface-variant leading-relaxed">
            Not always. This page estimates principal + interest. Many real
            payments also include property tax, homeowners insurance, HOA, and
            sometimes PMI. Use the result here as a baseline, then add those
            items for a full budget.
          </p>
        </details>

        <details className="group border-b border-outline-variant pb-4">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <h4 className="font-semibold text-on-surface">
              How much down payment do I need?
            </h4>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <p className="mt-3 text-on-surface-variant leading-relaxed">
            A bigger down payment reduces your loan amount, which can reduce the
            monthly payment and lifetime interest. Many buyers aim for 20% to
            avoid PMI, but there are loan programs with lower down payments too.
          </p>
        </details>

        <details className="group border-b border-outline-variant pb-4">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <h4 className="font-semibold text-on-surface">
              Why does a shorter term save interest?
            </h4>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <p className="mt-3 text-on-surface-variant leading-relaxed">
            With fewer payments, interest has less time to accrue. A 15‑year
            mortgage often costs more per month but can significantly reduce the
            total interest compared to a 30‑year term.
          </p>
        </details>
      </section>
    </article>
  );
}

