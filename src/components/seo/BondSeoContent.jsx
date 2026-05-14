import React from "react";
import { Link } from "react-router-dom";

export default function BondSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Bond calculator: price a plain annual-pay bond from yield inputs
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>bond price calculator</strong> discounts each annual
          coupon and the redemption amount at the <strong>market interest rate</strong>{" "}
          you enter—useful when you want a fast sense of whether a fixed coupon
          trades at a <strong>premium</strong> (price above par) or a{" "}
          <strong>discount</strong> (price below par). It is a simplified{" "}
          <strong>bond valuation</strong> view: one coupon per year, same discount
          rate every year, no embedded options or call schedules.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For multi-year return averages across unrelated percentages, you can
          also glance at the{" "}
          <Link
            to="/finance/average-return-calculator"
            className="text-primary hover:underline"
          >
            Average Return Calculator
          </Link>
          —it answers a different question than today’s bond price, but both sit
          in the same toolkit for comparing fixed-income ideas with equity-style
          summaries.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a bond?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A bond is a loan to a government or corporation. You receive contract
          coupons (interest) and usually get the <strong>face value</strong> back
          at maturity. <strong>Coupon rate</strong> is printed on the security;
          the <strong>market rate</strong> here is the discount rate you believe
          reflects opportunity cost or required return—not the same thing as{" "}
          <strong>yield to maturity (YTM)</strong> unless your inputs are chosen
          to match that definition.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Face value (par)</strong>: principal repaid at maturity,
            often $1,000 on corporates.
          </li>
          <li>
            <strong>Coupon rate</strong>: annual coupon as a percent of par.
          </li>
          <li>
            <strong>Maturity</strong>: years until principal is repaid in this
            model.
          </li>
          <li>
            <strong>Market rate</strong>: annual rate used to discount all cash
            flows.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Bond pricing formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Price is the present value of coupons plus the present value of face:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Price = Σ [ C ÷ (1 + r)^t ] + [ F ÷ (1 + r)^n ]`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>C</strong> = annual coupon (face × coupon rate)
          </li>
          <li>
            <strong>F</strong> = face value
          </li>
          <li>
            <strong>r</strong> = market rate per year
          </li>
          <li>
            <strong>n</strong> = years to maturity
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When the coupon exceeds the discount rate, discounted coupons plus
          principal typically push <strong>bond present value</strong> above par.
          When the coupon is below the market rate, price tends toward a
          discount.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use this tool</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter face value (amount repaid at maturity).</li>
          <li>Enter annual coupon rate as a percentage.</li>
          <li>Enter whole years to maturity.</li>
          <li>
            Enter the annual market interest rate you want to discount with.
          </li>
          <li>
            Read bond price, total nominal coupons over the life of the bond,
            and the supplementary total return line shown in the summary.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Zero-coupon bonds</strong>: set coupon rate to 0%; only the
          discounted face value remains. Real-world bonds often pay semi-annual
          coupons—halve the period and rate when you need that precision.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Quick example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            $1,000 face, 5% coupon, 10 years, 4% market rate implies about{" "}
            <strong>$1,081</strong> price—a premium because the 5% coupon stream
            is worth more when the market only demands 4%. That is the kind of
            scenario <strong>fixed income investors</strong> rehearse before
            committing to a <strong>corporate bond</strong> or government note
            ladder.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What moves bond prices in the market
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Central-bank policy, inflation expectations, credit spreads, and time
          to maturity all shift the discount rate investors apply. Longer
          maturities magnify sensitivity to rate changes. Credit risk matters
          most on lower-rated paper where the promised coupon might not fully
          compensate for default probability—this page does not model credit
          spreads explicitly; it only applies the single rate you type.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this compute yield to maturity (YTM)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. You supply the discount rate; the page estimates price from
              that rate. YTM is the internal rate of return that sets price equal
              to cash flows and usually requires iterative solving.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Coupon rate vs the rate I enter—what is the difference?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The coupon rate sets cash paid to you. The market rate is what you
              use to discount those cash flows to today’s dollars. When they
              differ, price drifts away from par.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are taxes included?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Interest taxation and capital gains rules depend on your
              jurisdiction and holding period.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How often do real bonds pay coupons?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many U.S. corporates and Treasuries pay semi-annually. Convert to
              semi-annual periods and a per-period rate if you need closer
              alignment with a brokerage quote.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
