import React from "react";
import { Link } from "react-router-dom";

export default function PaymentSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Payment calculator: estimate your monthly loan payment
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>payment calculator</strong> estimates your{" "}
          <strong>monthly loan payment</strong> from three inputs:{" "}
          <strong>loan amount</strong>, <strong>interest rate</strong>, and{" "}
          <strong>term</strong>. This tool uses standard{" "}
          <strong>fixed-rate amortization</strong>—the same math used for many
          personal loans, auto loans, and installment debt.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          You also see <strong>total interest</strong> over the life of the loan
          and <strong>total amount paid</strong>, which helps compare shorter
          terms (higher payment, less interest) vs longer terms (lower payment,
          more interest).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For the same model with loan-focused wording, try the{" "}
          <Link
            to="/finance/loan-calculator"
            className="text-primary hover:underline"
          >
            Loan Calculator
          </Link>
          . For a payment-by-payment schedule, use the{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
          </Link>
          . For vehicle-specific inputs, see the{" "}
          <Link
            to="/finance/auto-loan-calculator"
            className="text-primary hover:underline"
          >
            Auto Loan Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Level monthly payment (principal + interest)</li>
              <li>Total interest and total paid over the term</li>
              <li>Fixed annual rate converted to monthly compounding</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Origination fees, doc fees, or points (unless in loan amount)</li>
              <li>Insurance, taxes, or escrow (mortgage PITI)</li>
              <li>Variable rates, balloon payments, or interest-only periods</li>
              <li>Extra payments or payoff acceleration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r / (1 − (1 + r)^−n)

P = loan amount (principal)
r = annual rate ÷ 12
n = years × 12

Total paid = M × n
Total interest = (M × n) − P`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          At <strong>0% interest</strong>, the monthly payment is simply{" "}
          <strong>P ÷ n</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount you borrow (principal).</li>
          <li>Enter the annual interest rate on the note.</li>
          <li>Enter the loan term in years.</li>
          <li>Review monthly payment, total interest, and total paid.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$50,000</strong> at <strong>5%</strong> for{" "}
            <strong>5 years</strong> → monthly payment near{" "}
            <strong>$943</strong> (use defaults for exact figures).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this an EMI calculator?
            </dt>
            <dd className="mt-2">
              For fixed-rate installment loans, the monthly payment is often
              called EMI (equated monthly installment). This tool computes that
              level payment from principal, rate, and term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I use this for a mortgage?
            </dt>
            <dd className="mt-2">
              Yes for principal-and-interest on the loan amount. Full mortgage
              payments often add tax and insurance in escrow—those are not
              included here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is total interest so high on long terms?
            </dt>
            <dd className="mt-2">
              Interest accrues on the remaining balance each month. Longer terms
              mean more months of interest charges even if the monthly payment is
              lower.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does APR match the rate I enter?
            </dt>
            <dd className="mt-2">
              Enter the note rate used for the payment formula. APR may differ
              when fees are financed or disclosed separately.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I model extra payments?
            </dt>
            <dd className="mt-2">
              This page assumes a fixed payment for the full term. For payoff
              time from a higher payment, use the{" "}
              <Link
                to="/finance/mortgage-payoff-calculator"
                className="text-primary hover:underline"
              >
                Mortgage Payoff Calculator
              </Link>{" "}
              or compare scenarios by changing inputs.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
