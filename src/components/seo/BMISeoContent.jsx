import React from "react";
import { Link } from "react-router-dom";

export default function BMISeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          BMI calculator: body mass index from weight and height
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>BMI calculator</strong> finds your{" "}
          <strong>Body Mass Index (BMI)</strong> from weight and height and
          classifies the result as underweight, healthy weight, overweight, or
          obese using standard adult cutoffs.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          BMI is a screening metric, not a full health picture. For body fat
          percentage, use our{" "}
          <Link
            to="/health/body-fat-calculator"
            className="text-primary hover:underline"
          >
            Body Fat Calculator
          </Link>
          . For severely low BMI awareness, see the{" "}
          <Link
            to="/health/anorexic-bmi-calculator"
            className="text-primary hover:underline"
          >
            Anorexic BMI Calculator
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
              <li>Metric BMI (kg and cm)</li>
              <li>Standard adult categories</li>
              <li>Healthy range indicator (18.5–24.9)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Pediatric BMI percentiles</li>
              <li>Imperial ft/in inputs (convert or use metric)</li>
              <li>Body composition or fitness level</li>
              <li>Medical diagnosis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is BMI and why does it matter?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>BMI</strong> relates weight to height. It is widely used to
          screen for weight categories linked to higher risk of some conditions
          (e.g. heart disease, type 2 diabetes, high blood pressure). It does not
          measure fat directly and can misclassify very muscular people.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For daily calorie targets, try our{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          . For resting energy burn, see the{" "}
          <Link
            to="/health/bmr-calculator"
            className="text-primary hover:underline"
          >
            BMR Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">BMI formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Metric:  BMI = weight (kg) ÷ [height (m)]²

Imperial: BMI = (weight (lb) ÷ [height (in)]²) × 703

Example: 70 kg, 1.75 m → 70 ÷ (1.75 × 1.75) ≈ 22.86`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this BMI calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your weight in kilograms.</li>
          <li>Enter your height in centimeters.</li>
          <li>Review your BMI and category in the summary.</li>
        </ol>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Below 18.5 — Underweight</li>
          <li>18.5 – 24.9 — Healthy weight</li>
          <li>25.0 – 29.9 — Overweight</li>
          <li>30.0 and above — Obese</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>65 kg</strong> at <strong>170 cm</strong> (1.70 m):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>1.70 × 1.70 = 2.89</li>
            <li>65 ÷ 2.89 ≈ <strong>22.49</strong> (healthy weight)</li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Imperial check: 150 lb, 5 ft 6 in → (150 ÷ 66²) × 703 ≈{" "}
            <strong>24.2</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Tips for maintaining a healthy BMI
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Balanced diet with vegetables, lean protein, and whole grains</li>
          <li>Regular physical activity (e.g. 150 minutes moderate per week)</li>
          <li>Limit ultra-processed foods and sugary drinks</li>
          <li>Adequate sleep and hydration</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is BMI an accurate measure of health?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It is useful for population screening but not perfect. Athletes may
              have high BMI with low body fat.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the healthiest BMI range?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For most adults, 18.5 to 24.9 is often labeled healthy weight.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can BMI be used for children?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Children need age- and sex-specific percentiles, not these adult
              cutoffs.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How often should I check my BMI?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Every few months is enough for most people unless you are in a
              structured weight program.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does a healthy BMI mean I am fit?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. BMI does not measure strength, endurance, or body composition.
              Combine it with other indicators and professional guidance.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
