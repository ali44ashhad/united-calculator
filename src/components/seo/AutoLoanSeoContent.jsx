import React from "react";
import { Link } from "react-router-dom";

export default function AutoLoanSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Auto loan calculator: estimate your monthly payment and total interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When you finance a vehicle, the “monthly payment” number is only part
          of the story. What you really want to know is how the payment changes
          with the rate and term, how much interest you’ll pay overall, and
          whether the loan fits your budget comfortably. This auto loan
          calculator estimates your monthly payment, total payment, and total
          interest using the loan amount, annual rate, and term.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you’re comparing financing vs leasing, it can help to calculate
          both scenarios. You can use our{" "}
          <Link
            to="/finance/auto-lease-calculator"
            className="text-primary hover:underline"
          >
            Auto Lease Calculator
          </Link>{" "}
          for a lease estimate and then compare the monthly cost side‑by‑side.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is an auto loan?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An auto loan is a fixed-payment loan used to purchase a car. Each
          monthly payment includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Principal</strong>: paying down the amount borrowed
          </li>
          <li>
            <strong>Interest</strong>: the cost of borrowing money
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Early payments usually contain more interest. Over time, as the
          balance decreases, more of your payment goes toward principal. If you
          want a schedule-style view, our{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
          </Link>{" "}
          can help you understand the split.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Auto loan payment formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A common monthly payment model uses the standard amortization formula:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Payment = P × [ r(1 + r)^n ] ÷ [ (1 + r)^n − 1 ]`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>P</strong> = loan amount (principal)
          </li>
          <li>
            <strong>r</strong> = monthly interest rate (annual rate ÷ 12)
          </li>
          <li>
            <strong>n</strong> = number of monthly payments (years × 12)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use the auto loan calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the loan amount you plan to borrow.</li>
          <li>Enter the annual interest rate.</li>
          <li>Choose the loan term in years.</li>
          <li>Review monthly payment, total payment, and total interest.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Tip: if you’re deciding between a shorter and longer term, focus on
          both the monthly payment and the total interest. Longer terms can feel
          easier monthly, but they usually increase total interest.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Example: a <strong>$20,000</strong> loan at <strong>6%</strong> for{" "}
            <strong>5 years</strong> (60 months).
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Monthly rate \(r\) = \(0.06 / 12\)</li>
            <li>Payments \(n\) = \(5 × 12 = 60\)</li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            The calculator estimates the monthly payment and shows the total
            interest you’d pay over the full term.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What affects your auto loan payment?
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Rate</strong>: even 1–2% differences can matter a lot across
            multiple years.
          </li>
          <li>
            <strong>Term</strong>: longer term lowers monthly payment but often
            raises total interest.
          </li>
          <li>
            <strong>Loan amount</strong>: down payment and trade-in reduce what
            you need to borrow.
          </li>
          <li>
            <strong>Credit profile</strong>: affects rate offers.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include taxes, insurance, and fees?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—this estimate focuses on principal and interest. Vehicle taxes,
              registration, insurance, and dealer fees can change the real
              monthly cost.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this for refinancing?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Enter your remaining balance as the loan amount and use the
              new rate/term to estimate a new payment.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

