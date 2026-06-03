import React from "react";
import { Link } from "react-router-dom";

export default function RefinanceSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Refinance calculator: compare payment and total interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>refinance calculator</strong> helps you compare your{" "}
          <strong>current loan</strong> with a <strong>refinanced loan</strong>{" "}
          on the same balance. Enter the amount you would refinance, then set
          rate and term for each side. You get{" "}
          <strong>monthly P&amp;I</strong>, <strong>monthly difference</strong>,
          and <strong>total interest</strong> over each term.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is a side-by-side amortization comparison—not a lender quote. It
          does <strong>not</strong> include closing costs, discount points, or
          break-even months. Escrow (taxes and insurance) is also excluded.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a new purchase payment from price and down payment, use the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>
          . To model paying the loan off faster with extra payments, try the{" "}
          <Link
            to="/finance/mortgage-payoff-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Payoff Calculator
          </Link>
          . For generic installment math, see the{" "}
          <Link
            to="/finance/payment-calculator"
            className="text-primary hover:underline"
          >
            Payment Calculator
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
              <li>Current vs new monthly P&amp;I on the same balance</li>
              <li>Monthly payment difference (lower or higher)</li>
              <li>Total interest under each rate and term</li>
              <li>Interest saved or added over the full term entered</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Closing costs, origination fees, or discount points</li>
              <li>Break-even month calculation</li>
              <li>Cash-out refinance with a higher balance</li>
              <li>ARM rate changes, PMI, or escrow</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Both sides use standard fixed-rate amortization on the balance you
          enter:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r / (1 − (1 + r)^−n)

P = loan balance refinanced
r = annual rate ÷ 12
n = years × 12

Total interest = (M × n) − P`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the balance you would refinance (remaining principal on an
            existing loan).
          </li>
          <li>
            On the current side, use your existing rate and{" "}
            <strong>remaining years</strong> if you want a fair baseline.
          </li>
          <li>
            On the new side, enter the offered rate and the new loan term (e.g.
            30 or 15 years).
          </li>
          <li>
            Compare monthly difference and total interest—not just the payment.
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>$300,000</strong> balance at <strong>7%</strong> for{" "}
            <strong>30 years</strong> vs <strong>6%</strong> for{" "}
            <strong>30 years</strong> lowers the monthly P&amp;I and reduces
            lifetime interest (see defaults for exact figures).
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            If you refinance to a lower rate but reset to a longer term than
            you have left, the payment may drop while total interest rises—check
            both rows in the summary.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Rate-and-term vs payment-only thinking
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Lenders often advertise a lower monthly payment. A true{" "}
          <strong>rate-and-term refinance</strong> usually keeps a similar payoff
          horizon while cutting interest. Stretching the term can make the
          payment look attractive but add interest over time. Use the interest
          difference row to see lifetime cost, not just the monthly line.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Closing costs matter in real decisions: divide upfront fees by monthly
          savings to estimate break-even months yourself—this page does not
          compute that automatically.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this show break-even from closing costs?
            </dt>
            <dd className="mt-2">
              No. Enter closing costs manually and divide by monthly savings if
              you need break-even months. This tool compares P&amp;I and interest
              only.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What balance should I enter?
            </dt>
            <dd className="mt-2">
              The principal you would roll into the new loan—typically your
              current remaining balance, not the original purchase price.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why can total interest go up after refinancing?
            </dt>
            <dd className="mt-2">
              A lower rate with a longer term than you have left can reduce the
              monthly payment but increase total interest paid over the new
              schedule.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this only for mortgages?
            </dt>
            <dd className="mt-2">
              The math works for any fixed-rate installment loan with the same
              balance refinanced. Mortgage is the most common use case.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are taxes and insurance in the payment?
            </dt>
            <dd className="mt-2">
              No. Figures are principal and interest only, matching standard
              P&amp;I quotes before escrow.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
