import React from "react";
import { Link } from "react-router-dom";

export default function TargetHeartRateSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Target heart rate calculator: exercise zones by age
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>target heart rate calculator</strong> to estimate your{" "}
          <strong>maximum heart rate</strong> and <strong>exercise heart rate
          zones</strong> from <strong>age</strong> alone. It applies the common{" "}
          <strong>220 − age</strong> formula, then shows a{" "}
          <strong>50–85% target zone</strong> plus <strong>moderate</strong> and{" "}
          <strong>vigorous</strong> bpm ranges for cardio training.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Pair zones with running pace using the{" "}
          <Link
            to="/health/pace-calculator"
            className="text-primary hover:underline"
          >
            Pace Calculator
          </Link>
          . Estimate workout calories with the{" "}
          <Link
            to="/health/calories-burned-calculator"
            className="text-primary hover:underline"
          >
            Calories Burned Calculator
          </Link>
          . For overall fitness screening, see the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/protein-calculator"
            className="text-primary hover:underline"
          >
            Protein Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is target heart rate?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Target heart rate</strong> is the <strong>beats per minute
          (bpm)</strong> range where cardiovascular exercise is challenging enough
          to improve fitness but generally safe for healthy adults. This tool
          derives zones from <strong>estimated max heart rate</strong>, not a
          measured stress-test maximum.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Max HR</strong> ≈ 220 − age
          </li>
          <li>
            <strong>Target zone</strong> 50–85% of max HR
          </li>
          <li>
            <strong>Moderate</strong> 50–70% · <strong>Vigorous</strong> 70–85%
          </li>
          <li>
            Light and aerobic sub-zones for reference
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Max HR from 220 − age</li>
              <li>50–85% target zone</li>
              <li>Moderate and vigorous bands</li>
              <li>Light and aerobic sub-zones</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Resting heart rate (Karvonen formula)</li>
              <li>Fitness level input</li>
              <li>Medication or beta-blocker adjustments</li>
              <li>Clinical stress-test max HR</li>
              <li>Wearable device sync</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Target heart rate formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Estimated max HR (bpm) ≈ 220 − age (years)

Target zone     = 50% – 85% of max HR
Moderate        = 50% – 70% of max HR
Vigorous        = 70% – 85% of max HR
Light           = 50% – 60% of max HR
Aerobic         = 70% – 80% of max HR

Example: age 40
  → Max HR ≈ 220 − 40 = 180 bpm
  → Target zone ≈ 90 – 153 bpm
  → Moderate ≈ 90 – 126 bpm
  → Vigorous ≈ 126 – 153 bpm`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why 220 minus age?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>220 − age</strong> equation is a long-used{" "}
          <strong>estimate</strong> of maximum heart rate. Real max HR varies by
          genetics, fitness, and health. Some formulas (e.g. 208 − 0.7 × age)
          may fit certain groups better, but this page keeps the classic rule for
          simplicity.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this target heart rate calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your age in years.</li>
          <li>Read estimated max HR and the 50–85% target zone.</li>
          <li>Use moderate (50–70%) for steady cardio; vigorous (70–85%) for harder intervals.</li>
          <li>Stop or slow down if you feel chest pain, dizziness, or unusual shortness of breath.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Age:</strong> 30 years
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              <strong>Max HR:</strong> 220 − 30 = <strong>190 bpm</strong>
            </li>
            <li>
              <strong>Target zone (50–85%):</strong> 95–162 bpm
            </li>
            <li>
              <strong>Moderate (50–70%):</strong> 95–133 bpm
            </li>
            <li>
              <strong>Vigorous (70–85%):</strong> 133–162 bpm
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Heart rate zones vs perceived exertion
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Watches and chest straps help track bpm, but the{" "}
          <strong>talk test</strong> still matters: moderate effort allows
          conversation; vigorous makes speaking in full sentences difficult. Heart
          rate can lag at the start of exercise or drift with heat and fatigue.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (target heart rate)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a good target heart rate for exercise?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For many adults, <strong>50–85% of estimated max HR</strong> is the
              broad training band. Moderate days often sit near{" "}
              <strong>50–70%</strong>; harder sessions near <strong>70–85%</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate target heart rate by age?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Max HR ≈ <strong>220 − age</strong>. Multiply max HR by 0.50 and
              0.85 for the target zone endpoints in bpm.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 220 − age accurate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It is an average estimate with individual error of roughly ±10–12
              bpm. Athletes and older adults may differ from the formula.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the difference between moderate and vigorous zones?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              On this page, <strong>moderate</strong> is 50–70% of max HR and{" "}
              <strong>vigorous</strong> is 70–85%, matching common public-health
              intensity labels.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I use resting heart rate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The <strong>Karvonen method</strong> uses resting HR for heart rate
              reserve. This calculator uses percentage of max HR only—no resting
              HR field.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do beta-blockers change target heart rate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Some medications lower exercise heart rate. Follow prescriber
              guidance rather than age-based zones alone.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What heart rate is too high when exercising?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Sustained bpm above your estimated max or symptoms like chest pain
              warrant stopping and seeking care. Healthy training usually stays
              within the zones shown—not at true maximum for long periods.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this target heart rate calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. General fitness education only. Get clearance before vigorous
              exercise if you have heart disease, diabetes, or other chronic
              conditions.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
