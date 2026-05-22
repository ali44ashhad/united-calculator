import React from "react";
import { Link } from "react-router-dom";

export default function TipSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Tip calculator: gratuity and split bill per person
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          After a meal you need three numbers fast: <strong>how much tip</strong>,{" "}
          <strong>total with gratuity</strong>, and <strong>each person&apos;s
          share</strong>. This <strong>tip calculator</strong> multiplies your{" "}
          <strong>pre-tip bill</strong> by a <strong>tip percentage</strong> (15%,
          18%, 20%, or custom), adds it to the bill, and divides by the number of
          diners.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>tip calculator</strong>,{" "}
          <strong>split bill calculator</strong>. Long-tail:{" "}
          <strong>how much is 18 percent tip on 50 dollars</strong>,{" "}
          <strong>restaurant tip per person 4 ways</strong>,{" "}
          <strong>gratuity calculator before tax</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Tip amount     = bill × (tip % ÷ 100)
Total with tip = bill + tip amount
Per person     = total ÷ number of people

Example: $50 bill, 18% tip, 2 people
→ $9 tip, $59 total, $29.50 each`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>sales tax on a purchase</strong>, try the{" "}
          <Link
            to="/finance/sales-tax-calculator"
            className="text-primary hover:underline"
          >
            Sales Tax Calculator
          </Link>
          . <strong>Percent of any number</strong> (not restaurant-specific) is in
          the{" "}
          <Link
            to="/math/percentage-calculator"
            className="text-primary hover:underline"
          >
            Percentage Calculator
          </Link>
          . For a night out budget with fuel or miles, see the{" "}
          <Link
            to="/other/fuel-cost-calculator"
            className="text-primary hover:underline"
          >
            Fuel Cost Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Tipping norms (US)</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Sit-down restaurants often use <strong>15–20%</strong> of the pre-tax
          subtotal. Tip on the amount <strong>you enter</strong>—if you prefer
          pre-tax tipping, type the subtotal without tax. Set <strong>1 person</strong>{" "}
          when you are not splitting.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How do you calculate tip?
            </dt>
            <dd className="mt-1">
              Multiply bill by tip percent divided by 100, then add to the bill.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is 18% tip on $50?
            </dt>
            <dd className="mt-1">
              <strong>$9</strong> tip; <strong>$59</strong> total; <strong>$29.50</strong>{" "}
              each if split 2 ways.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Should I tip on tax?
            </dt>
            <dd className="mt-1">
              Many people tip on subtotal before tax—enter that number as your bill.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How do I split evenly?
            </dt>
            <dd className="mt-1">
              Enter the number of people; per person is total with tip divided evenly.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does currency matter?
            </dt>
            <dd className="mt-1">
              Math is the same—use dollars, euros, or any unit in the bill field.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
