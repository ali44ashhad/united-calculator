import React from "react";
import { Link } from "react-router-dom";

export default function BMRSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          BMR calculator: basal metabolic rate at rest
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>BMR calculator</strong> estimates your{" "}
          <strong>basal metabolic rate</strong>—calories burned at complete rest—
          using the <strong>Mifflin-St Jeor equation</strong> from weight (kg),
          height (cm), age, and gender.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          BMR is the foundation for daily calorie planning. For total needs with
          activity, use our{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          . For weight-for-height screening, see the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
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
              <li>Mifflin-St Jeor BMR (kcal/day)</li>
              <li>Sedentary maintenance estimate (×1.2)</li>
              <li>Weekly BMR calories</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Harris-Benedict (older) equation option</li>
              <li>Full activity-level TDEE picker</li>
              <li>Body composition adjustments</li>
              <li>Medical or dietitian meal plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Mifflin-St Jeor BMR formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Men:    BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5
Women:  BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161

Result in kcal per day at rest`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Older Harris-Benedict equations exist; Mifflin-St Jeor is commonly used
          today for many adults.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">BMR vs TDEE</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>TDEE</strong> (total daily energy expenditure) ≈ BMR × activity
          factor. Common multipliers:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Sedentary (little exercise): ×1.2</li>
          <li>Lightly active (1–3 days/week): ×1.375</li>
          <li>Moderately active (3–5 days/week): ×1.55</li>
          <li>Very active (6–7 days/week): ×1.725</li>
          <li>Extra active (physical job + training): ×1.9</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this BMR calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter weight in kilograms and height in centimeters.</li>
          <li>Enter your age in years and select gender.</li>
          <li>Read BMR (resting calories) and the sedentary maintenance line.</li>
          <li>Apply a higher activity factor if you exercise regularly.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>70 kg</strong>, <strong>175 cm</strong>, <strong>25 years</strong>,
            male:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>BMR = 10×70 + 6.25×175 − 5×25 + 5 = <strong>1,698 kcal/day</strong></li>
            <li>Sedentary TDEE ≈ 1,698 × 1.2 ≈ <strong>2,038 kcal/day</strong></li>
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
              Should I eat my BMR calories to lose weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Eating only BMR is usually below total daily needs unless you are
              completely sedentary. Most plans use TDEE minus a modest deficit.
              Consult a professional for personalized targets.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why do men and women have different formulas?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Mifflin-St Jeor uses different constant offsets because average lean
              mass and metabolism differ by sex at the population level.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does muscle mass affect BMR?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. More lean mass generally raises resting burn. This equation uses
              weight and height as proxies, not a body fat measurement.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How often does BMR change?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It shifts with weight, age, and body composition. Recalculate after
              significant weight changes.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use BMR for macro planning?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Start with TDEE, then split protein, carbs, and fats. Our{" "}
              <Link
                to="/health/macro-calculator"
                className="text-primary hover:underline"
              >
                Macro Calculator
              </Link>{" "}
              can help once you know calorie targets.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
