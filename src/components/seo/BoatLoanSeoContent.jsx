import React from "react";
import { Link } from "react-router-dom";

export default function BoatLoanSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Boat loan calculator: marine financing, monthly payment, and total
          interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Financing a powerboat, pontoon, center console, sailboat, or cruiser
          usually means a secured recreational vessel loan with a fixed rate and
          a longer term than many car loans. This{" "}
          <strong>boat payment calculator</strong> turns your financed amount,
          annual percentage rate, and repayment years into an estimated monthly
          installment plus the total interest you would pay if the loan followed
          a standard amortizing schedule—helpful when you are comparing offers
          from a bank, credit union, or specialty marine lender.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you are shopping for new boat financing or a{" "}
          <strong>used boat loan</strong> with a different rate tier, the same
          math applies: small changes in APR or term move both your monthly
          budget number and lifetime borrowing cost. For land-based vehicles, you
          can cross-check assumptions with our{" "}
          <Link
            to="/finance/auto-loan-calculator"
            className="text-primary hover:underline"
          >
            Auto Loan Calculator
          </Link>
          ; for a full payment schedule and principal–interest split over time,
          open the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          What counts as a boat loan?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Most <strong>marine financing</strong> products are installment loans:
          you borrow the net amount after your down payment, then repay in equal
          monthly payments until the balance is zero. Lenders often classify
          boats by age, hull material, and use (pleasure vs commercial) when
          setting <strong>boat loan interest</strong> ranges and maximum terms.
          Larger loans—think offshore fishing boats or express cruisers—sometimes
          stretch to fifteen or twenty years, which lowers the payment but
          increases total interest compared with a shorter note.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Principal</strong>: the amount financed (purchase price
            minus down payment and any trade credit).
          </li>
          <li>
            <strong>APR / interest rate</strong>: yearly cost of borrowing,
            converted to a monthly rate inside the payment formula.
          </li>
          <li>
            <strong>Term</strong>: length of the loan in years or months; marine
            lenders may advertise 120-, 180-, or 240-month options.
          </li>
          <li>
            <strong>Monthly payment</strong>: fixed installment covering interest
            and principal under a standard model.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Boat loan payment formula (EMI-style)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The estimate uses the same equated monthly installment structure common
          to auto and personal loans:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Payment = P × [ r(1 + r)^n ] ÷ [ (1 + r)^n − 1 ]`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>P</strong> = loan principal
          </li>
          <li>
            <strong>r</strong> = monthly interest rate (annual rate ÷ 12)
          </li>
          <li>
            <strong>n</strong> = number of monthly payments (years × 12)
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Early in the loan, more of each payment covers interest; later
          payments chip away at principal faster. This page does not add
          insurance, storage, or maintenance—those belong in a separate boating
          budget even when a lender requires insurance as a condition of the note.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this boat loan calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the amount you need to finance after your boat down payment.
          </li>
          <li>
            Enter the quoted annual interest rate (APR or note rate, depending on
            what your lender disclosed).
          </li>
          <li>Enter the loan term in whole years.</li>
          <li>
            Read off estimated monthly payment, total repayment, and total
            interest.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Adjust rate and term to see how a dealer promotion, a credit-union
          marine program, or a shorter payoff window changes both cash flow and
          lifetime cost—useful before you sign a{" "}
          <strong>yacht loan</strong> or smaller trailerable rig.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Suppose a $50,000 boat with a $10,000 down payment leaves{" "}
            <strong>$40,000</strong> to finance at <strong>6% APR</strong> for{" "}
            <strong>10 years</strong> (120 months). The monthly payment comes out
            near <strong>$444</strong>, with roughly <strong>$13,300</strong> in
            total interest and about <strong>$53,300</strong> paid over the life
            of the loan—illustrating why comparing{" "}
            <strong>boat financing rates</strong> and term length matters as much
            as negotiating hull price.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What moves your payment and total cost
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Credit profile and debt-to-income still drive approval, but boat buyers
          also see pricing differences between new and used inventory, loan size
          (minimums and maximums), and whether the collateral is titled and
          documented for coastwise use. A stronger credit score typically unlocks
          a lower <strong>marine loan rate</strong>, while a larger down payment
          trims both payment and interest. Stretching the term cuts the monthly
          line item but often raises aggregate interest—worth modeling before you
          commit to a long <strong>recreational boat loan</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include tax, title, registration, or insurance?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It estimates principal-and-interest only. Roll taxes and fees
              into the financed amount manually if your lender bundles them.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use it for refinancing a boat loan?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Enter the remaining balance as the loan amount, the new rate,
              and the new term to approximate the replacement payment.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Shorter term vs lower payment—which is better?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Shorter terms usually save total interest but raise the monthly
              obligation. Longer terms ease cash flow but increase lifetime
              interest—pick what matches your savings buffer and how long you
              plan to keep the vessel.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is a marine lender different from a bank?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Marine-focused lenders often understand collateral valuation and may
              offer extended amortization on qualifying boats; banks and credit
              unions can still be competitive, especially for members with strong
              relationships. Always compare APR and fees, not headline payment
              alone.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I pay off a boat loan early?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many loans allow extra principal payments or full payoff ahead of
              schedule, which reduces interest. Confirm whether your contract
              includes a prepayment penalty or unusual fee structures.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
