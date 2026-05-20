import React from "react";
import { Link } from "react-router-dom";

export default function GolfHandicapSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Golf handicap calculator: score differential from rating & slope
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Modern handicaps under the <strong>World Handicap System (WHS)</strong>{" "}
          are built from <strong>score differentials</strong>—numbers that say how
          well you played relative to the difficulty of the course and tees you
          used. This <strong>free golf handicap calculator online</strong> applies
          the core piece of that math for <strong>one round</strong>: enter your{" "}
          <strong>gross score</strong>, the <strong>course rating</strong> for your
          tee, and the <strong>slope rating</strong>. It returns{" "}
          <strong>(Score − Course Rating) × 113 ÷ Slope</strong>, which is the
          standard differential shape before national bodies add PCC, caps, and
          averaging rules.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Think of the output as a <strong>teaching and planning differential</strong>
          , not a replacement for GHIN, England Golf, Golf Canada, or your club’s
          handicap software. For other “average from many numbers” study tools,
          the{" "}
          <Link
            to="/statistics/statistics-calculator"
            className="text-primary hover:underline"
          >
            Statistics Calculator
          </Link>{" "}
          can complement practice logs; for semester grades off the course, try
          the{" "}
          <Link
            to="/other/gpa-calculator"
            className="text-primary hover:underline"
          >
            GPA Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Course rating vs slope rating (quick definitions)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Course rating</strong> estimates what a scratch golfer would
          shoot from a given tee under normal conditions—think of it as the
          “par-like difficulty” number, often close to 72 but not always.{" "}
          <strong>Slope rating</strong> measures how much harder the course plays
          for a bogey golfer than for a scratch golfer. The reference slope is{" "}
          <strong>113</strong>; steeper courses carry higher slope values, which
          increases your differential when you are over par relative to rating.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Score differential ≈ (Gross score − Course rating) × 113 ÷ Slope rating

Example: score 90, course rating 72.5, slope 113
  (90 − 72.5) × 113 ÷ 113 = 17.5`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why your app’s Handicap Index can disagree with this page
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Net Double Bogey (NDB) maximum:</strong> very high hole scores
            are capped for handicap purposes before the differential is computed.
          </li>
          <li>
            <strong>Playing Conditions Calculation (PCC):</strong> rare same-day
            weather adjustments applied by the authority.
          </li>
          <li>
            <strong>Multiple rounds:</strong> your index uses a subset of your
            best recent differentials, not one round in isolation.
          </li>
          <li>
            <strong>Rounding:</strong> federations round indexes to one decimal.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Practice ideas</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Run the calculator for the same score on an <strong>easy</strong> course
          (low slope) versus a <strong>hard</strong> course (high slope) to see how
          slope changes your differential even when gross score is identical.
          That intuition helps when picking tees for fair competition.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For a light randomizer when picking practice games, the{" "}
          <Link to="/other/dice-roller" className="text-primary hover:underline">
            Dice Roller
          </Link>{" "}
          can assign drills—unrelated to handicaps but handy on the range.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a good score differential?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Lower is better (like golf score). Scratch golfers often produce
              small positive or negative differentials on tough setups; high
              handicappers may see differentials in the high teens or twenties on
              an average day.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can slope rating be less than 55 or above 155?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              USGA-rated courses usually fall in about 55–155 for 18 holes. This
              tool only checks slope &gt; 0; if you paste a non-standard value,
              double-check the scorecard.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I use front nine or back nine ratings for 9-hole rounds?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Handicap bodies combine 9-hole differentials into 18-hole
              equivalents with specific rules. This calculator assumes you are
              entering an 18-hole gross score with the matching 18-hole course and
              slope ratings for that tee.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why multiply by 113?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              113 is the baseline slope. Multiplying by 113 and dividing by actual
              slope rescales your performance versus scratch to a common scale so
              rounds on different courses can be compared fairly.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
