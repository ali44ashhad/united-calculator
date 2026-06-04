import React from "react";
import { Link } from "react-router-dom";

export default function AnorexicBMISeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Anorexic BMI calculator: check severely underweight range
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>anorexic BMI calculator</strong> is a free tool that
          estimates your <strong>Body Mass Index (BMI)</strong> from weight and
          height and highlights when BMI falls into ranges often associated with
          severe underweight or eating-disorder risk. It is meant for awareness,
          not diagnosis.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          BMI alone does not diagnose anorexia. It shows whether weight is far
          below typical healthy ranges for your height. For broader context, pair
          this with our{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/body-fat-calculator"
            className="text-primary hover:underline"
          >
            Body Fat Calculator
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
              <li>Metric BMI from kg and cm</li>
              <li>Category bands including underweight ranges</li>
              <li>Alert when BMI is below 17.5</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Clinical diagnosis of anorexia or other disorders</li>
              <li>Imperial ft/in inputs (use metric or convert first)</li>
              <li>Body composition, age, or sex adjustments</li>
              <li>Treatment or meal plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is an anorexic BMI?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>BMI</strong> is weight divided by height squared. Below{" "}
          <strong>18.5</strong> is generally classified as underweight. Many
          clinicians use <strong>below 17.5</strong> as a warning sign that may
          warrant further evaluation for malnutrition or eating disorders—along
          with symptoms, history, and labs, not BMI alone.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Very low BMI can relate to weakened immunity, nutrient deficiencies,
          bone loss, and cardiovascular strain over time. If you are working toward
          healthy weight, our{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/bmr-calculator"
            className="text-primary hover:underline"
          >
            BMR Calculator
          </Link>{" "}
          can help estimate energy needs—always under professional guidance for
          recovery.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">BMI formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Metric:  BMI = weight (kg) ÷ [height (m)]²

Imperial: BMI = (weight (lb) ÷ [height (in)]²) × 703

Example: 42 kg, 1.65 m → 42 ÷ (1.65 × 1.65) ≈ 15.43`}</pre>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Weight</strong> — kilograms (this tool uses kg)
          </li>
          <li>
            <strong>Height</strong> — centimeters (converted to meters internally)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this anorexic BMI calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your weight in kilograms.</li>
          <li>Enter your height in centimeters.</li>
          <li>Review BMI, category, and any low-BMI alert in the summary.</li>
        </ol>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Below 17.5 — Possible anorexia / severe underweight risk</li>
          <li>17.5 – 18.4 — Underweight</li>
          <li>18.5 – 24.9 — Healthy weight range</li>
          <li>25+ — Overweight or obese (per standard BMI bands)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            You weigh <strong>40 kg</strong> and are <strong>160 cm</strong> tall
            (1.60 m).
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Square height: 1.60 × 1.60 = 2.56</li>
            <li>BMI: 40 ÷ 2.56 ≈ <strong>15.62</strong></li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            That BMI is in the severely underweight range and may warrant medical
            attention. Imperial equivalent: 88 lb at 5 ft 3 in gives a similar BMI
            (~15.6).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Risks of very low BMI</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Weaker immune response and infection risk</li>
          <li>Reduced bone density and fracture risk</li>
          <li>Hormonal changes affecting metabolism and fertility</li>
          <li>Cardiovascular stress linked to malnutrition</li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Recovery planning often includes calories and macros—see our{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
          </Link>{" "}
          for balanced meal targets with clinician oversight.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does a low BMI always mean anorexia?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Low BMI can stem from genetics, illness, high metabolism, or
              eating disorders. A clinician should evaluate symptoms and history,
              not BMI alone.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What BMI indicates anorexia risk?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many guidelines cite BMI below 17.5 as a marker worth follow-up.
              Diagnosis requires more than a single number.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can you recover from a severely low BMI?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes, with nutrition support, medical care, and sometimes therapy.
              Weight restoration should be gradual and supervised.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How fast should weight be regained?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Rapid refeeding can cause complications. Follow a healthcare
              professional&apos;s plan to avoid refeeding syndrome and other risks.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I track other metrics too?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Body fat, muscle mass, and calorie intake often matter in recovery.
              Use specialized health tools alongside—not instead of—clinical care.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
