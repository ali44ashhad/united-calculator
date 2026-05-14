import React from "react";
import { Link } from "react-router-dom";

export default function BusinessLoanSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Business loan calculator: EMI, interest, and full repayment for term
          loans
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you are sizing a <strong>working capital loan</strong>, an
          equipment purchase, or a multi-year <strong>commercial term loan</strong>,
          the first question is usually cash flow: what monthly{" "}
          <strong>EMI</strong> hits the bank after you draw down principal? This{" "}
          <strong>business loan EMI calculator</strong> uses the standard
          amortizing payment model—fixed rate, equal monthly installments—to show
          EMI, total interest, and total repayment so founders and finance teams
          can stress-test offers from banks and NBFCs before signing.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a month-by-month principal and interest split, pair this estimate
          with the{" "}
          <Link
            to="/finance/amortization-calculator"
            className="text-primary hover:underline"
          >
            Amortization Calculator
          </Link>
          . For generic installment math outside a corporate context, the{" "}
          <Link to="/finance/loan-calculator" className="text-primary hover:underline">
            Loan Calculator
          </Link>{" "}
          follows the same family of formulas.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this tool assumes
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Real <strong>SME loan</strong> and <strong>MSME</strong> products may add
          processing fees, seasonal draws, bullet structures, or floating rates
          that reprice with policy rates. Here you enter one annual rate and a
          whole-year tenure; the engine converts to a monthly rate and number of
          payments. Use the output as a baseline, then adjust for fees and
          floating risk when you compare term sheets.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">EMI formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Monthly installment for a standard fixed-rate loan:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`EMI = [ P × r × (1 + r)^n ] ÷ [ (1 + r)^n − 1 ]`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>P</strong> = loan principal
          </li>
          <li>
            <strong>r</strong> = monthly interest rate (annual ÷ 12)
          </li>
          <li>
            <strong>n</strong> = tenure in months (years × 12)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the amount you intend to borrow (in rupees).</li>
          <li>Enter the annual interest rate quoted by the lender.</li>
          <li>Enter repayment length in years.</li>
          <li>Review EMI, total payment, and aggregate interest.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Longer tenure lowers EMI but often raises lifetime interest; shorter
          tenure does the opposite—toggle the numbers the way your{" "}
          <strong>business financing</strong> committee would in a sensitivity
          table.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Illustrative example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            At             <strong>₹5,00,000</strong> principal, <strong>10% APR</strong>, and{" "}
            <strong>5 years</strong>, the monthly EMI is about{" "}
            <strong>₹10,624</strong> under this model, with roughly{" "}
            <strong>₹1.37 lakh</strong> in total interest and about{" "}
            <strong>₹6.37 lakh</strong> repaid over the life of the loan—useful
            when benchmarking a <strong>small business loan</strong> against
            internal hurdle rates.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Related planning tools
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Owner-guaranteed borrowing is sometimes compared with{" "}
          <Link
            to="/finance/personal-loan-calculator"
            className="text-primary hover:underline"
          >
            personal loan
          </Link>{" "}
          math; secured real-estate notes may instead resemble a{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            mortgage-style
          </Link>{" "}
          schedule. When lenders quote all-in cost, an{" "}
          <Link to="/finance/apr-calculator" className="text-primary hover:underline">
            APR calculator
          </Link>{" "}
          can help translate fees into an comparable annual figure.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this include GST, processing fee, or insurance?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It models principal and interest only. Add one-time charges
              separately when comparing offers.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I model prepayment?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not in this screen. If your lender allows partial prepayment,
              rerun with a lower remaining principal or use an amortization table
              to simulate extra principal each month.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is EMI the same as “cash flow I can afford”?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              EMI is contractual debt service. You should still leave room for
              payroll, inventory, taxes, and shocks—treat EMI as a lower bound on
              liquidity pressure, not the whole budget.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
