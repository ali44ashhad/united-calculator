import React from "react";
import { Link } from "react-router-dom";

export default function MortgageUKSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Free UK mortgage calculator: monthly repayment and interest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>Mortgage Calculator UK</strong> helps you estimate a{" "}
          <strong>repayment mortgage</strong> monthly payment (principal and
          interest), along with <strong>total interest</strong> and{" "}
          <strong>total repaid</strong>, using three simple inputs:{" "}
          <strong>loan amount</strong>, <strong>interest rate</strong>, and{" "}
          <strong>term</strong>. Use it as a quick{" "}
          <strong>UK home loan calculator</strong>,{" "}
          <strong>property loan calculator</strong>, or{" "}
          <strong>mortgage rate calculator</strong> when you already know how
          much you plan to borrow.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It’s useful when you’re comparing fixed-rate deals, checking whether a
          monthly payment fits your budget, or exploring how changing the term
          affects cost. You can quickly see the trade-off between a lower monthly
          payment (often a longer term) and a lower total interest bill (often a
          shorter term or lower rate).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is a straightforward repayment model—no lender fees, insurance,
          taxes, early repayment charges, or overpayments are included. If you’re
          comparing a UK loan to a US-style purchase calculation with home price
          and down payment, see the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>
          . If you’re exploring a new rate for an existing balance, try the{" "}
          <Link
            to="/finance/refinance-calculator"
            className="text-primary hover:underline"
          >
            Refinance Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this UK mortgage calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Monthly repayment (principal + interest)</li>
              <li>Total interest over the full term</li>
              <li>Total repaid over the full term</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Arrangement/product fees or broker fees</li>
              <li>Stamp Duty Land Tax (SDLT)</li>
              <li>Buildings/contents insurance</li>
              <li>Overpayments, ERCs, or changing rates</li>
              <li>Interest-only mortgages</li>
            </ul>
          </div>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Think of this as the “core mortgage repayment” piece of your housing
          budget. Real-world costs can be higher once you add insurance, utilities,
          service charges, and maintenance.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the payment works</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Repayment mortgages amortise the balance over a fixed number of months.
          Each payment includes interest and principal. Early in the term, a
          larger share of the payment typically goes to interest; later, more goes
          to principal as the balance falls.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = P × r × (1 + r)^n / ((1 + r)^n − 1)

P = loan amount
r = annual rate ÷ 12
n = years × 12`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Small changes in rate can have a noticeable impact because the rate is
          applied to the remaining balance each month. Term length matters too:
          longer terms can feel more affordable monthly but usually increase the
          total interest paid.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to calculate mortgage interest in the UK
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Mortgage interest is charged on your remaining balance each month. With a
          repayment mortgage, part of every payment reduces the principal, so the
          interest portion falls over time even though the monthly repayment stays
          the same (on a fixed rate). This tool shows lifetime{" "}
          <strong>total interest</strong>—the sum of all interest paid across the
          full term.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Worked example: borrow <strong>£250,000</strong> at{" "}
          <strong>4%</strong> for <strong>25 years</strong>. The monthly repayment
          is about <strong>£1,319.59</strong>, total repaid about{" "}
          <strong>£395,877.63</strong>, and total interest about{" "}
          <strong>£145,877.63</strong>. In the first month, roughly £833 goes to
          interest and £487 to principal; by the final year, most of each payment
          goes to principal.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a month-by-month breakdown, use the{" "}
          <Link
            to="/finance/mortgage-amortization-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Amortization Calculator
          </Link>{" "}
          with the same loan amount, rate, and term. It shows how each payment
          splits between interest and principal over the life of the loan.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          UK mortgage rate calculator: how rate changes affect cost
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter the <strong>note rate</strong> from your mortgage offer—not APR,
          which can include fees. The table below uses a <strong>£250,000</strong>{" "}
          loan over <strong>25 years</strong> to show how a small rate change
          shifts both the monthly repayment and lifetime interest.
        </p>
        <div className="overflow-auto">
          <table className="w-full text-left text-body-lg font-body-lg border border-outline-variant rounded-xl overflow-hidden">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="p-4 font-h3 text-h3 text-on-surface">Rate</th>
                <th className="p-4 font-h3 text-h3 text-on-surface">
                  Monthly repayment
                </th>
                <th className="p-4 font-h3 text-h3 text-on-surface">
                  Total interest
                </th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-t border-outline-variant">
                <td className="p-4">3.5%</td>
                <td className="p-4 font-code-num">£1,251.56</td>
                <td className="p-4 font-code-num">£125,467.68</td>
              </tr>
              <tr className="border-t border-outline-variant bg-surface-container-lowest">
                <td className="p-4">4.0%</td>
                <td className="p-4 font-code-num">£1,319.59</td>
                <td className="p-4 font-code-num">£145,877.63</td>
              </tr>
              <tr className="border-t border-outline-variant">
                <td className="p-4">4.5%</td>
                <td className="p-4 font-code-num">£1,389.58</td>
                <td className="p-4 font-code-num">£166,874.36</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use the calculator above with your own rate to compare deals before you
          apply or remortgage.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Compare mortgage scenarios: term length
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A longer term lowers the monthly repayment but increases total interest.
          At <strong>4%</strong> on <strong>£250,000</strong>:
        </p>
        <div className="overflow-auto">
          <table className="w-full text-left text-body-lg font-body-lg border border-outline-variant rounded-xl overflow-hidden">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="p-4 font-h3 text-h3 text-on-surface">Term</th>
                <th className="p-4 font-h3 text-h3 text-on-surface">
                  Monthly repayment
                </th>
                <th className="p-4 font-h3 text-h3 text-on-surface">
                  Total interest
                </th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-t border-outline-variant">
                <td className="p-4">25 years</td>
                <td className="p-4 font-code-num">£1,319.59</td>
                <td className="p-4 font-code-num">£145,877.63</td>
              </tr>
              <tr className="border-t border-outline-variant bg-surface-container-lowest">
                <td className="p-4">30 years</td>
                <td className="p-4 font-code-num">£1,193.54</td>
                <td className="p-4 font-code-num">£179,673.77</td>
              </tr>
              <tr className="border-t border-outline-variant">
                <td className="p-4">35 years</td>
                <td className="p-4 font-code-num">£1,106.94</td>
                <td className="p-4 font-code-num">£214,913.48</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Common UK terms are 25 or 30 years; some lenders offer longer terms. Enter
          any term in years above to simulate your scenario.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Loan amount, deposit, and property price
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page takes the <strong>loan amount</strong> directly—the balance you
          borrow after any deposit. If you are working from a property price and
          deposit instead, subtract deposit from price to get the loan amount
          (for example, £300,000 home minus £60,000 deposit = £240,000 loan). For
          a purchase-style calculator with home price and down payment fields, use
          the{" "}
          <Link
            to="/finance/mortgage-calculator"
            className="text-primary hover:underline"
          >
            Mortgage Calculator
          </Link>{" "}
          or the{" "}
          <Link
            to="/finance/down-payment-calculator"
            className="text-primary hover:underline"
          >
            Down Payment Calculator
          </Link>
          .
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Stamp Duty Land Tax (SDLT) and arrangement fees are separate upfront
          costs and are not included in the monthly figures shown here.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common use cases in England and the United Kingdom
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>First-time buyer:</strong> check whether a quoted rate and term
            fit your budget before you apply.
          </li>
          <li>
            <strong>Remortgage or moving house:</strong> enter your new loan amount
            and offered rate to compare against your current deal.
          </li>
          <li>
            <strong>Rate shopping:</strong> run the same loan amount at two or
            three rates to see monthly and lifetime interest differences.
          </li>
          <li>
            <strong>Existing balance:</strong> if you want to see how long a
            balance will take to clear at a given payment, try the{" "}
            <Link
              to="/finance/mortgage-payoff-calculator"
              className="text-primary hover:underline"
            >
              Mortgage Payoff Calculator
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this mortgage repayment calculator (UK)
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the <strong>loan amount</strong> you plan to borrow (the
            mortgage balance).
          </li>
          <li>
            Enter the <strong>interest rate</strong> (annual percentage).
          </li>
          <li>
            Enter the <strong>term</strong> in years (for example, 25).
          </li>
          <li>
            Review the monthly payment and the lifetime totals (interest and
            repaid).
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Tips for choosing inputs
          </h4>
          <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Use the rate that actually applies to your deal (the note rate). APR
              can be higher due to fees.
            </li>
            <li>
              If you expect to remortgage in a few years, this calculator still
              assumes a constant payment for the full term—use it as a baseline.
            </li>
            <li>
              If you plan to overpay, remember it can reduce total interest, but
              it’s not modelled here.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Example: UK mortgage repayment estimate
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example scenario: borrow <strong>£250,000</strong> at{" "}
          <strong>4%</strong> for <strong>25 years</strong>. The monthly repayment
          will be around <strong>£1,300–£1,350</strong> depending on rounding and
          assumptions—use the calculator for exact values.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Over the full term, <strong>total repaid</strong> equals the monthly
          payment multiplied by the number of months, and{" "}
          <strong>total interest</strong> equals total repaid minus the loan
          amount.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related calculators</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/finance/mortgage-amortization-calculator"
              className="text-primary hover:underline"
            >
              Mortgage Amortization Calculator
            </Link>
            — month-by-month principal and interest split
          </li>
          <li>
            <Link
              to="/finance/mortgage-payoff-calculator"
              className="text-primary hover:underline"
            >
              Mortgage Payoff Calculator
            </Link>
            — estimate payoff time from balance and payment
          </li>
          <li>
            <Link
              to="/finance/loan-calculator"
              className="text-primary hover:underline"
            >
              Loan Calculator
            </Link>
            — general loan repayment estimates
          </li>
          <li>
            <Link
              to="/finance/refinance-calculator"
              className="text-primary hover:underline"
            >
              Refinance Calculator
            </Link>
            — compare a new rate on an existing loan
          </li>
          <li>
            <Link
              to="/finance/house-affordability-calculator"
              className="text-primary hover:underline"
            >
              House Affordability Calculator
            </Link>
            — estimate price from income and debt
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this a free mortgage calculator UK?
            </dt>
            <dd className="mt-2">
              Yes. It is free to use with no signup. Enter your loan amount, rate,
              and term to see monthly repayment, total interest, and total repaid
              instantly in your browser.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How do I calculate mortgage interest in the UK?
            </dt>
            <dd className="mt-2">
              Enter loan amount, annual rate, and term. The calculator applies
              standard amortisation and shows total interest over the full term.
              Interest each month is charged on the remaining balance; early
              payments are mostly interest, later payments mostly principal.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I use this as a UK home loan or property loan calculator?
            </dt>
            <dd className="mt-2">
              Yes. Repayment mortgages for homes in England, Scotland, Wales, and
              Northern Ireland use the same principal-and-interest maths. Enter
              the amount you borrow after your deposit.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this show an amortisation schedule?
            </dt>
            <dd className="mt-2">
              This page shows monthly repayment and lifetime totals. For a full
              month-by-month schedule, use the{" "}
              <Link
                to="/finance/mortgage-amortization-calculator"
                className="text-primary hover:underline"
              >
                Mortgage Amortization Calculator
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does this include stamp duty, fees, or insurance?
            </dt>
            <dd className="mt-2">
              No. This calculator focuses on repayment (principal and interest)
              only. Upfront fees, insurance, and taxes aren’t included.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is this for repayment or interest-only mortgages?
            </dt>
            <dd className="mt-2">
              Repayment mortgages. Interest-only payments aren’t calculated here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I compare mortgage rates with this tool?
            </dt>
            <dd className="mt-2">
              Yes. Run the same loan amount and term at different rates to compare
              monthly repayments and total interest. It is a single-scenario
              calculator, so change the rate and note the results for each deal.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              What if my rate is 0%?
            </dt>
            <dd className="mt-2">
              At 0% interest, the monthly payment is simply the loan amount
              divided by the number of months in the term.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Is the interest rate the same as APR?
            </dt>
            <dd className="mt-2">
              Not necessarily. APR includes certain fees; the note rate is what
              drives the monthly payment.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Can I include overpayments?
            </dt>
            <dd className="mt-2">
              Not in this version. Overpayments change the payoff date and total
              interest, and can be limited by lender rules.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
