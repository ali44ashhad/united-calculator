import React from "react";
import { Link } from "react-router-dom";

export default function TDEESeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          TDEE calculator: total daily energy expenditure &amp; maintenance calories
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>TDEE calculator</strong> to estimate your{" "}
          <strong>total daily energy expenditure</strong>—how many{" "}
          <strong>calories you burn per day</strong> including activity. It
          computes <strong>Mifflin-St Jeor BMR</strong> from weight (kg), height
          (cm), age, and gender, then multiplies by an <strong>activity
          factor</strong> (1.2–1.9) for maintenance, cut, and bulk targets.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For calories at rest only, use the{" "}
          <Link
            to="/health/bmr-calculator"
            className="text-primary hover:underline"
          >
            BMR Calculator
          </Link>
          . For macro grams from calories, try the{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
          </Link>
          ,{" "}
          <Link
            to="/health/protein-calculator"
            className="text-primary hover:underline"
          >
            Protein Calculator
          </Link>
          , and{" "}
          <Link
            to="/health/fat-intake-calculator"
            className="text-primary hover:underline"
          >
            Fat Intake Calculator
          </Link>
          . The{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>{" "}
          offers another path to daily calorie estimates.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is TDEE?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>TDEE (total daily energy expenditure)</strong> is the sum of
          energy used at rest (<strong>BMR</strong>) plus calories burned through
          daily movement, exercise, and digestion. Eating at TDEE supports{" "}
          <strong>weight maintenance</strong>; eating below or above shifts
          weight over time.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>BMR</strong> from Mifflin-St Jeor
          </li>
          <li>
            <strong>TDEE</strong> = BMR × activity factor
          </li>
          <li>
            <strong>Maintenance</strong>, −250/−500 cut, +500 bulk hints
          </li>
          <li>
            <strong>Weekly calorie total</strong>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this TDEE calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Mifflin-St Jeor BMR</li>
              <li>Five activity multipliers (1.2–1.9)</li>
              <li>Maintenance and deficit/surplus examples</li>
              <li>Weekly TDEE estimate</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Body-fat or lean-mass adjustments</li>
              <li>Harris-Benedict equation option</li>
              <li>Step-count or wearable sync</li>
              <li>Medical weight-loss programs</li>
              <li>Macro meal plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">TDEE formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Step 1 — BMR (Mifflin-St Jeor):
  Men:    BMR = 10×kg + 6.25×cm − 5×age + 5
  Women:  BMR = 10×kg + 6.25×cm − 5×age − 161

Step 2 — TDEE:
  TDEE = BMR × activity factor

Activity factors:
  1.2   Sedentary
  1.375 Lightly active
  1.55  Moderately active
  1.725 Very active
  1.9   Super active

Example: man 70 kg, 175 cm, 25 y, moderate (×1.55)
  BMR ≈ 1,674 kcal → TDEE ≈ 2,595 kcal/day`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">BMR vs TDEE</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>BMR</strong> is what you would burn lying down all day.{" "}
          <strong>TDEE</strong> adds walking, workouts, and job activity. Never
          eat below BMR long term without medical supervision—deficits are usually
          applied to TDEE, not BMR alone.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this TDEE calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter weight (kg), height (cm), age, and gender.</li>
          <li>Select the activity level that matches your typical week.</li>
          <li>Read TDEE as maintenance calories.</li>
          <li>Use −250/−500 or +500 kcal hints as starting points for fat loss or gain.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Inputs:</strong> Female, 62 kg, 165 cm, 30 years, lightly
            active (×1.375)
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              <strong>BMR:</strong> 10×62 + 6.25×165 − 5×30 − 161 ≈{" "}
              <strong>1,340 kcal</strong>
            </li>
            <li>
              <strong>TDEE:</strong> 1,340 × 1.375 ≈ <strong>1,843 kcal/day</strong>
            </li>
            <li>
              <strong>Weight loss (−500):</strong> ~1,343 kcal/day
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Choosing the right activity factor
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Be honest about your <strong>average</strong> week. A desk job with three
          gym sessions is often <strong>lightly</strong> or{" "}
          <strong>moderately active</strong>, not “very active.” Overestimating TDEE
          makes fat-loss targets too high. Pair estimates with scale trends over
          2–4 weeks and adjust.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (TDEE)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">What is TDEE?</p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Total daily energy expenditure</strong>—estimated calories
              burned in 24 hours including BMR and activity.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is TDEE calculated?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>TDEE = Mifflin-St Jeor BMR × activity factor</strong>. This
              page uses the same BMR math as our BMR Calculator.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many calories should I eat to lose weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A common start is <strong>TDEE − 500 kcal/day</strong> (~0.5 kg/week
              for many adults). Milder <strong>−250</strong> deficits suit slower
              loss. Medical conditions may need different plans.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is TDEE the same as maintenance calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—eating at your estimated TDEE should roughly maintain weight,
              assuming the activity factor matches reality.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is my TDEE different from my friend’s?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Weight, height, age, gender, and activity all change BMR and the
              multiplier. Muscle mass and genetics also shift real metabolism beyond
              any formula.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Mifflin-St Jeor vs Harris-Benedict?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool uses <strong>Mifflin-St Jeor</strong>, often preferred for
              modern adults. Older Harris-Benedict equations can differ by 5–10%.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I recalculate TDEE as I lose weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Lower body weight reduces BMR, so TDEE drops during a diet.
              Re-run the calculator every few kilograms or when progress stalls.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this TDEE calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. General fitness and nutrition math only—consult clinicians or
              dietitians for therapeutic diets.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
