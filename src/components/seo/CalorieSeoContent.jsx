import React from "react";
import { Link } from "react-router-dom";

export default function CalorieSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Calorie calculator: daily calories to lose, maintain, or gain
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>calorie calculator</strong> estimates how many calories
          you need per day using <strong>Mifflin-St Jeor BMR</strong> multiplied
          by an <strong>activity level</strong> to get{" "}
          <strong>TDEE (maintenance)</strong>, plus reference targets for modest
          weight loss or gain.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For resting calories only, use the{" "}
          <Link
            to="/health/bmr-calculator"
            className="text-primary hover:underline"
          >
            BMR Calculator
          </Link>
          . For macros after you know calories, try the{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
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
              <li>BMR and TDEE (maintenance) kcal/day</li>
              <li>Five activity multipliers</li>
              <li>~500 kcal deficit/surplus references</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Pregnancy or medical condition adjustments</li>
              <li>Detailed meal plans</li>
              <li>Calories burned by specific workouts</li>
              <li>Registered dietitian prescriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How calories are estimated</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`BMR (Mifflin-St Jeor):
  Men:   10×kg + 6.25×cm − 5×age + 5
  Women: 10×kg + 6.25×cm − 5×age − 161

TDEE (maintenance) = BMR × activity factor

Example loss/gain offsets: ±500 kcal/day from maintenance`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Activity factors</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>1.2 — Sedentary</li>
          <li>1.375 — Lightly active</li>
          <li>1.55 — Moderately active</li>
          <li>1.725 — Very active</li>
          <li>1.9 — Super active</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this calorie calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter weight (kg), height (cm), age, and gender.</li>
          <li>Pick the activity level that best matches your week.</li>
          <li>Use maintenance TDEE to stay at weight.</li>
          <li>
            Consider the ~500 kcal below/above lines as starting points for loss
            or gain—adjust based on progress and health advice.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>70 kg</strong>, <strong>175 cm</strong>, <strong>25</strong>,
            male, moderately active (×1.55):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>BMR ≈ 1,698 kcal/day</li>
            <li>TDEE ≈ 1,698 × 1.55 ≈ <strong>2,632 kcal/day</strong></li>
            <li>Loss reference ≈ 2,132 · Gain reference ≈ 3,132</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How big should my calorie deficit be?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many adults start near 300–500 kcal below maintenance. Very large
              deficits can be hard to sustain—monitor energy, hunger, and health
              markers.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is my TDEE lower than I expected?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Underestimating activity is common. If weight changes don&apos;t match
              projections after several weeks, adjust intake or activity factor.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I need to count calories forever?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Many people use numbers temporarily to learn portion sizes, then
              rely on habits and periodic check-ins.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I eat back exercise calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              If you picked an activity factor that already includes workouts,
              don&apos;t double-count unless you use a separate exercise tracker by
              design.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How does BMI relate to calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              BMI screens weight for height; calories depend on metabolism and
              movement. Check the{" "}
              <Link
                to="/health/bmi-calculator"
                className="text-primary hover:underline"
              >
                BMI Calculator
              </Link>{" "}
              for category context alongside calorie targets.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
