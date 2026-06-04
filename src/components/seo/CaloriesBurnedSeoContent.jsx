import React from "react";
import { Link } from "react-router-dom";

export default function CaloriesBurnedSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Calories burned calculator: exercise energy estimate
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>calories burned calculator</strong> estimates energy used
          during exercise with <strong>MET</strong> (Metabolic Equivalent of
          Task), your <strong>weight in kg</strong>, and{" "}
          <strong>duration in minutes</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Pair results with daily intake targets from the{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>{" "}
          and resting burn from the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>MET × weight × time formula</li>
              <li>Common activities with preset MET</li>
              <li>Total kcal and kcal/hour rate</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Heart-rate based burn</li>
              <li>GPS or power-meter data</li>
              <li>Afterburn (EPOC) hours after training</li>
              <li>Every sport at every intensity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Calories burned formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Calories (kcal) = MET × weight (kg) × time (hours)

Time (hours) = minutes ÷ 60

Example: MET 8.3, 70 kg, 30 min
  → 8.3 × 70 × 0.5 ≈ 290 kcal`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Preset activities (MET)</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Walking ~5 km/h — MET 3.5</li>
          <li>Running ~8 km/h — MET 8.3</li>
          <li>Leisure cycling — MET 4.0</li>
          <li>Light swimming — MET 6.0</li>
          <li>Yoga — MET 2.5</li>
          <li>Weight lifting — MET 3.0</li>
          <li>Dancing — MET 5.0</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this calories burned calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your body weight in kilograms.</li>
          <li>Enter how long the activity lasted in minutes.</li>
          <li>Select the closest activity type (MET).</li>
          <li>Read total calories burned and the hourly rate.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Energy balance tip</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Weight change depends on average calories in versus out over time.
          Exercise burn is one piece; daily TDEE already includes typical activity
          if you chose a non-sedentary factor on the calorie page.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does heavier weight burn more calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—the same MET and duration produce higher totals for higher body
              mass because more tissue is being moved.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why do two apps show different burn?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Different MET tables, heart-rate models, or user inputs explain most
              gaps. Use one method consistently to track trends.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is running MET 8.3 exact for everyone?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Pace, hills, wind, and fitness change intensity. Pick the closest
              preset or adjust duration if effort was harder or easier.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I add burned calories to my diet?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Only if your maintenance target does not already count that activity.
              Many people use moderate activity factors on the{" "}
              <Link
                to="/health/calorie-calculator"
                className="text-primary hover:underline"
              >
                Calorie Calculator
              </Link>{" "}
              instead of eating back every workout.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my activity is not listed?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Look up a MET value for a similar activity from a compendium and
              mentally substitute—the formula structure stays the same.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
