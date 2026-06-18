import React from "react";
import { Link } from "react-router-dom";

export default function ProbabilitySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Probability calculator: favorable ÷ total outcomes
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>probability calculator</strong> for{" "}
          <strong>classical probability</strong>: divide{" "}
          <strong>favorable outcomes</strong> by{" "}
          <strong>total equally likely outcomes</strong>. Example: 1 favorable out
          of 6 total → <strong>P = 1/6 ≈ 0.167</strong> (about{" "}
          <strong>16.67%</strong>).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To <strong>count</strong> outcomes first, use the{" "}
          <Link
            to="/math/permutation-combination-calculator"
            className="text-primary hover:underline"
          >
            Permutation &amp; Combination Calculator
          </Link>
          . For <strong>percents</strong> in other contexts, see the{" "}
          <Link
            to="/math/percentage-calculator"
            className="text-primary hover:underline"
          >
            Percentage Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is probability?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Probability</strong> quantifies chance on a scale from{" "}
          <strong>0</strong> (impossible) to <strong>1</strong> (certain). In the
          classical model, every outcome in the sample space is equally likely.
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
              <li>P = favorable ÷ total</li>
              <li>Decimal and percent form</li>
              <li>Complement P(not A) = 1 − P</li>
              <li>Unfavorable outcome count</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Conditional probability P(A|B)</li>
              <li>Independent joint events P(A and B)</li>
              <li>Bayes’ theorem</li>
              <li>Binomial or normal distributions</li>
              <li>Built-in nPr/nCr counting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Probability formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`P(event) = favorable outcomes / total outcomes

Percent = P × 100
P(not event) = 1 − P(event)

Example (fair die, roll a 4):
Favorable = 1, Total = 6
P = 1/6 ≈ 0.1667 ≈ 16.67%
P(not 4) = 5/6 ≈ 83.33%`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Complement rule</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>complement</strong> of an event is everything else in the
          sample space. If P(rain) = 0.3, then P(no rain) = 0.7. This calculator
          shows both automatically.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this probability calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Count favorable outcomes for your event.</li>
          <li>Count total equally likely outcomes.</li>
          <li>Enter both whole numbers and read P, percent, and complement.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Coin flip heads</strong> → 1 of 2 → <strong>P = 0.5</strong>{" "}
            (50%)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Draw a red card</strong> → 26 of 52 → <strong>P = 0.5</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Roll 7 on two dice</strong> → 6 of 36 →{" "}
            <strong>P ≈ 0.167</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (probability)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can probability be greater than 1?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—valid probabilities are between 0 and 1. Favorable cannot exceed
              total on this page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if outcomes are not equally likely?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This formula assumes each outcome has the same chance. Weighted or
              continuous models need different tools.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I count total outcomes for complex problems?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use{" "}
              <Link
                to="/math/permutation-combination-calculator"
                className="text-primary hover:underline"
              >
                nPr and nCr
              </Link>{" "}
              when order does or does not matter.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the difference between probability and odds?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Probability is favorable/total. <strong>Odds</strong> are often
              favorable/unfavorable—this calculator shows the unfavorable count
              but not odds format.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can favorable be zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—an impossible event has P = 0 (e.g. 0 favorable out of 6).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              When is favorable equal to total?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              When the event is <strong>certain</strong>: P = 1 (100%).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as percentage?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Percent is probability × 100. For other percent formulas (change,
              percent of), use the{" "}
              <Link
                to="/math/percentage-calculator"
                className="text-primary hover:underline"
              >
                Percentage Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I need decimals for outcomes?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—enter <strong>whole-number counts</strong>. The result can be a
              decimal between 0 and 1.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
