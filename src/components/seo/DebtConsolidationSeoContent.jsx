import React from "react";
import { Link } from "react-router-dom";

export default function DebtConsolidationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Debt consolidation calculator: compare interest on one loan vs several
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Thinking about rolling several balances into one installment loan? This{" "}
          <strong>debt consolidation calculator</strong> estimates total interest
          if each debt stays on its own fixed-rate schedule, then compares that to
          one new loan that covers the <strong>combined balance</strong> at your
          proposed <strong>consolidation rate and term</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does not model credit-card minimums or transfer fees. For payoff
          strategies across debts, see the{" "}
          <Link
            to="/finance/debt-payoff-calculator"
            className="text-primary hover:underline"
          >
            Debt Payoff Calculator
          </Link>
          . For the consolidated loan’s payment schedule, use the{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What it calculates</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Per debt (fixed rate):
  Monthly payment = P × [ r(1+r)^n ] ÷ [ (1+r)^n − 1 ]
  Total interest = (payment × months) − balance

Consolidation:
  Balance = sum of all debts
  Same formula at new rate and term`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The summary also shows the sum of separate monthly payments next to the
          single consolidated payment, plus interest saved or extra cost.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            For each debt, enter balance, annual interest rate, and remaining
            term in years.
          </li>
          <li>Add rows with “Add another debt” if you have more accounts.</li>
          <li>Enter the consolidation loan rate and term you are quoted.</li>
          <li>
            Compare total interest, monthly payment, and the interest difference.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$4,000</strong> at 18% over 5 years plus{" "}
            <strong>$3,000</strong> at 22% over 4 years yields about{" "}
            <strong>$7,000</strong> combined balance and separate amortized
            interest totals. A consolidation loan at <strong>8%</strong> for{" "}
            <strong>4 years</strong> on that balance often lowers total interest
            and can reduce the single monthly payment—verify with your lender’s
            actual quote.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why use remaining term in years?
            </dt>
            <dd className="mt-2">
              The math assumes each debt behaves like a fixed installment loan
              for the term you enter. Adjust the term to match how long you
              expect to pay that balance at your current payment level.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can a lower payment still cost more interest?
            </dt>
            <dd className="mt-2">
              Yes. Stretching the consolidation term can drop the monthly payment
              while increasing lifetime interest. Check the interest difference
              line in the summary.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Should I include fees in the balance?
            </dt>
            <dd className="mt-2">
              The tool has no fee fields. Add origination or balance-transfer
              fees to the combined balance manually if you want a rough
              all-in comparison.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What about credit cards?
            </dt>
            <dd className="mt-2">
              Cards revolve with changing minimums. Approximate with a term and
              rate, or use the{" "}
              <Link
                to="/finance/credit-card-calculator"
                className="text-primary hover:underline"
              >
                Credit Card Calculator
              </Link>{" "}
              for fixed-payment payoff on plastic.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Where do I model the new loan details?
            </dt>
            <dd className="mt-2">
              After you like a consolidation rate and term, the{" "}
              <Link
                to="/finance/personal-loan-calculator"
                className="text-primary hover:underline"
              >
                Personal Loan Calculator
              </Link>{" "}
              can help double-check payment and total cost for that single loan.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
