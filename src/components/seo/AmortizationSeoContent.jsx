import React from "react";
import { Link } from "react-router-dom";

export default function AmortizationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Understand your loan payment breakdown
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When you take a loan, the monthly payment is just the headline. What
          really matters is how that payment is split between <strong>interest</strong>{" "}
          (the cost of borrowing) and <strong>principal</strong> (the amount you
          actually owe). An amortization calculation helps you see that split so
          you can understand what you’re paying for, how fast your balance is
          dropping, and what the loan will cost you over the full term.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page is useful for common searches like a{" "}
          <strong>simple monthly amortization calculator</strong>, a{" "}
          <strong>personal loan amortization calculator</strong>, or a{" "}
          <strong>student loan amortization calculator</strong>. It’s also a
          great companion to our{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>{" "}
          when you want payment estimates first and a deeper principal/interest
          view second.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is amortization?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Amortization</strong> is a repayment method where you pay the
          same amount every month (for fixed-rate loans), but the composition of
          the payment changes over time. Early payments usually contain more
          interest and less principal. Later payments flip that—more principal,
          less interest—because the balance is smaller.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An amortization summary answers questions like:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>How much will I pay each month?</li>
          <li>How much interest will I pay over the life of the loan?</li>
          <li>What’s the total cost (principal + interest)?</li>
          <li>How does the term (15 vs 30 years) change the outcome?</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this amortization calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter your <strong>loan amount</strong> (principal).
          </li>
          <li>
            Enter the <strong>annual interest rate</strong> (APR as a percent).
          </li>
          <li>
            Choose the <strong>loan term</strong> (years).
          </li>
          <li>
            Review your <strong>Monthly Payment</strong>, <strong>Total Payment</strong>,
            and <strong>Total Interest Paid</strong>.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Want to see how faster payoff changes the total interest? Use this
          page to get a baseline first, then check our{" "}
          <Link
            to="/finance/loan-payoff-calculator"
            className="text-primary hover:underline"
          >
            Loan Payoff Calculator
          </Link>{" "}
          to explore extra-payment scenarios.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Amortization formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a fixed-rate installment loan, the monthly payment is typically
          computed with:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">
{`Payment = P × [ r(1 + r)^n ] ÷ [ (1 + r)^n − 1 ]`}
          </pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>P</strong> = principal (loan amount)
          </li>
          <li>
            <strong>r</strong> = monthly interest rate (annual rate ÷ 12)
          </li>
          <li>
            <strong>n</strong> = total number of payments (years × 12)
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you’re comparing different offers, the rate difference can be
          expensive over long terms. Our{" "}
          <Link to="/finance/apr-calculator" className="text-primary hover:underline">
            APR Calculator
          </Link>{" "}
          helps you compare borrowing costs more consistently.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Suppose you borrow <strong>$20,000</strong> at <strong>5%</strong>{" "}
            annual interest for <strong>3 years</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Monthly rate \(r\) = \(0.05 / 12\) ≈ \(0.004167\)
            </li>
            <li>
              Total payments \(n\) = \(3 × 12\) = \(36\)
            </li>
            <li>
              The formula produces a fixed monthly payment (rounded to cents).
            </li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Even in a short loan, interest adds up. As the term gets longer, the
            total interest usually grows quickly—especially at higher rates.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why an amortization view is useful
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Budget clarity</strong>: you know the fixed monthly payment
            and the long-term cost.
          </li>
          <li>
            <strong>Interest awareness</strong>: you can see why the early years
            feel “slow” on principal reduction.
          </li>
          <li>
            <strong>Term comparison</strong>: test 15 vs 30 years to understand
            the trade-off between payment size and total interest.
          </li>
          <li>
            <strong>Refinance intuition</strong>: a lower rate can shift your
            interest total a lot when the balance is still high.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does amortization include taxes and insurance?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. This amortization calculation focuses on principal + interest.
              For mortgage payments that may include other costs, start with the{" "}
              <Link
                to="/finance/mortgage-calculator"
                className="text-primary hover:underline"
              >
                Mortgage Calculator
              </Link>{" "}
              and use this page to understand the loan portion.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is the interest portion higher at the beginning?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Interest is calculated on the remaining balance. Early on, your
              balance is the highest, so the interest charge is larger. As the
              balance falls, the interest portion shrinks and more of each
              payment goes toward principal.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I reduce total interest without changing the rate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Often, yes. Paying extra principal (even small amounts) can reduce
              how long you carry a high balance, which can lower the total
              interest. Try scenarios with our{" "}
              <Link
                to="/finance/loan-payoff-calculator"
                className="text-primary hover:underline"
              >
                Loan Payoff Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this for auto, business, or student loans?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—any loan with regular payments and an interest rate can be
              analyzed with amortization math. If the rate changes over time
              (variable-rate loans), the schedule changes whenever the rate
              changes.
            </p>
          </div>
        </div>
      </section>

    </article>
  );
}

