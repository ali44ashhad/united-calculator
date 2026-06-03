import React from "react";
import { Link } from "react-router-dom";

export default function VAMortgageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          VA mortgage calculator: payment with funding fee, tax, and insurance
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>VA home loans</strong> help eligible veterans and service
          members buy with <strong>no down payment</strong> in many cases and{" "}
          <strong>no private mortgage insurance (PMI)</strong>. This{" "}
          <strong>VA mortgage calculator</strong> estimates a{" "}
          <strong>total monthly housing payment</strong> from your base loan
          amount, interest rate, term, a <strong>VA funding fee</strong> percent
          you enter, plus property tax and homeowners insurance estimates.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The funding fee is added to the loan balance and amortized with{" "}
          <strong>principal and interest</strong>. Official VA funding fee
          percentages depend on first use, down payment, and disability
          exemption—this tool does not look them up. It also does not determine{" "}
          <strong>eligibility</strong> or certificate of eligibility.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Compare with the{" "}
          <Link
            to="/finance/fha-loan-calculator"
            className="text-primary hover:underline"
          >
            FHA Loan Calculator
          </Link>{" "}
          (P&amp;I only, with down payment %) or the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>{" "}
          for conventional P&amp;I. For payoff timing, see the{" "}
          <Link
            to="/finance/mortgage-payoff-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Payoff Calculator
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
              <li>P&amp;I on loan + financed funding fee</li>
              <li>Monthly property tax estimate</li>
              <li>Monthly insurance from annual premium</li>
              <li>Total monthly payment sum</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Automatic VA funding fee tables</li>
              <li>PMI (generally not required on VA)</li>
              <li>HOA, maintenance, or utilities</li>
              <li>Eligibility or lender underwriting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the math works</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Funding fee $ = base loan × (fee % ÷ 100)
Amortized balance = base loan + funding fee $

P&I = standard fixed-rate payment on amortized balance
Monthly tax = base loan × (tax % ÷ 100) ÷ 12
Monthly insurance = annual insurance ÷ 12

Total monthly = P&I + tax + insurance`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter base loan amount (often the home price if financing 100%).</li>
          <li>Enter interest rate and loan term in years.</li>
          <li>Enter annual property tax as a percent of that base amount.</li>
          <li>Enter annual homeowners insurance dollars.</li>
          <li>
            Enter VA funding fee percent (use 0 if you are exempt); it is financed
            into the loan in this model.
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$300,000</strong> base, <strong>2.3%</strong> funding fee →{" "}
            <strong>$6,900</strong> fee, <strong>$306,900</strong> amortized
            balance. At <strong>3.25%</strong> for <strong>30 years</strong>, plus
            <strong>1.2%</strong> tax and <strong>$1,000</strong>/yr insurance,
            read the total monthly line in the summary.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">VA loans in context</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Lenders still review credit, income, and debt-to-income. The VA
          guaranty reduces lender risk, which is why PMI is usually absent. Budget
          beyond this calculator for closing costs, reserves, and changes in tax
          or insurance over time.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What is the VA funding fee?
            </dt>
            <dd className="mt-2">
              A one-time charge that helps sustain the VA loan program. Many
              borrowers finance it into the loan. Exempt veterans may pay 0%—enter
              that in the fee field.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why is tax calculated on the loan amount?
            </dt>
            <dd className="mt-2">
              The code uses the base amount you enter. When that equals home
              value (typical $0 down), it matches tax on price. Otherwise adjust
              inputs to match your assessor’s basis.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the total monthly my exact lender quote?
            </dt>
            <dd className="mt-2">
              Lenders may round differently, include escrow cushions, or quote
              rates that change daily. Use this as a planning estimate.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I avoid the funding fee?
            </dt>
            <dd className="mt-2">
              Some borrowers with service-connected disability ratings are
              exempt. Enter 0% in the funding fee field for that scenario.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the FHA calculator?
            </dt>
            <dd className="mt-2">
              FHA tool focuses on down payment % and P&amp;I only. This VA tool
              adds financed funding fee, tax, and insurance to a total monthly
              payment.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
