import React from "react";
import { Link } from "react-router-dom";

export default function PercentageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Percentage calculator: % of, what %, &amp; percent change
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>percentage calculator</strong> with two numbers{" "}
          <strong>X</strong> and <strong>Y</strong> to get three results at once:{" "}
          <strong>X% of Y</strong>, <strong>what percent X is of Y</strong>, and{" "}
          <strong>percentage change from X to Y</strong>. Example: X=25, Y=80 →
          25% of 80 = 20; 25 is 31.25% of 80; change from 25 to 80 = +220%.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>sale discounts</strong>, use the{" "}
          <Link
            to="/finance/percent-off-calculator"
            className="text-primary hover:underline"
          >
            Percent Off Calculator
          </Link>
          . For <strong>fractions</strong>, see the{" "}
          <Link
            to="/math/fraction-calculator"
            className="text-primary hover:underline"
          >
            Fraction Calculator
          </Link>
          . For <strong>percent error</strong>, try the{" "}
          <Link
            to="/math/percent-error-calculator"
            className="text-primary hover:underline"
          >
            Percent Error Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a percentage?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>percentage</strong> is a fraction with denominator 100. The
          symbol <strong>%</strong> means &quot;per hundred.&quot; Fifty percent
          (50%) is the same as ½ or 0.5.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this percentage calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>X% of Y</li>
              <li>X is what % of Y</li>
              <li>% change from X to Y</li>
              <li>Increase / decrease label</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Original price + percent-off checkout UI</li>
              <li>Sales tax or tip modes</li>
              <li>Compound percentage over multiple periods</li>
              <li>Percentage point difference (pp)</li>
              <li>Single-formula mode picker only</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Percentage formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`X% of Y        = (X / 100) × Y
X is ?% of Y   = (X / Y) × 100     (Y ≠ 0)
% change X → Y = ((Y − X) / X) × 100   (X ≠ 0)

Example: 25% of 80 = 20
         25 is 31.25% of 80
         25 → 80 is a 220% increase`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Percent increase vs decrease
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Positive</strong> percent change means Y is larger than X
          (increase). <strong>Negative</strong> means Y is smaller (decrease).
          Going from 80 to 60 is a −25% change.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this percentage calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter Value 1 (X)—percent, part, or start amount depending on row.</li>
          <li>Enter Value 2 (Y)—whole or end amount.</li>
          <li>Read all three percentage results in the summary.</li>
          <li>Match the row that fits your homework question.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>15% of 200</strong> → X=15, Y=200 → <strong>30</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>45 is what % of 180?</strong> → X=45, Y=180 →{" "}
            <strong>25%</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>50 to 65</strong> → X=50, Y=65 → <strong>+30%</strong> change
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (percentages)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you calculate 20% of a number?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply by 0.20, or enter X=20 and Y=your number in the first row.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you find what percent one number is of another?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide the part by the whole and multiply by 100:{" "}
              <strong>(part ÷ whole) × 100</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the percentage change formula?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>((new − old) ÷ old) × 100</strong>. Value 1 = old, Value 2 =
              new on this page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is percent change undefined when X is zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Division by zero—there is no valid relative change from a starting
              value of 0.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as percent off?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not exactly—use the{" "}
              <Link
                to="/finance/percent-off-calculator"
                className="text-primary hover:underline"
              >
                Percent Off Calculator
              </Link>{" "}
              for sale price after a discount percent.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can X be larger than Y?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—for example X=100, Y=25 gives 100% of 25 = 25, and 100 is 400% of
              25.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do percentages relate to fractions?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              25% = 25/100 = 1/4. Convert with the{" "}
              <Link
                to="/math/fraction-calculator"
                className="text-primary hover:underline"
              >
                Fraction Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I pick one result or use all three?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              All three compute from the same X and Y—use the row that matches your
              question.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
