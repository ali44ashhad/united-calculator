import React from "react";
import { Link } from "react-router-dom";

export default function OverweightSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Overweight calculator: am I overweight? BMI check by height &amp; weight
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>overweight calculator</strong> to see if your{" "}
          <strong>Body Mass Index (BMI)</strong> falls in the{" "}
          <strong>overweight range (25.0–29.9)</strong> for adults. Enter{" "}
          <strong>weight in kg</strong> and <strong>height in cm</strong> to get
          BMI, weight category, healthy weight band, and how many kilograms you
          are above the <strong>healthy BMI upper limit (24.9)</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Searching <strong>am I overweight</strong>,{" "}
          <strong>overweight BMI calculator</strong>, or{" "}
          <strong>how to know if overweight</strong>? This page uses the same
          standard screening math as a{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>{" "}
          but focuses on overweight vs healthy weight. For target weight bands, try
          the{" "}
          <Link
            to="/health/healthy-weight-calculator"
            className="text-primary hover:underline"
          >
            Healthy Weight Calculator
          </Link>
          . For body fat beyond BMI, use the{" "}
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
          What does overweight mean on BMI?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For most adults, <strong>overweight</strong> means BMI from{" "}
          <strong>25.0 to 29.9</strong>. It sits above{" "}
          <strong>healthy weight (18.5–24.9)</strong> and below{" "}
          <strong>obese (30+)</strong>. BMI is weight relative to height—it screens
          population risk but does not directly measure fat.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Underweight:</strong> BMI below 18.5
          </li>
          <li>
            <strong>Healthy weight:</strong> BMI 18.5–24.9
          </li>
          <li>
            <strong>Overweight:</strong> BMI 25.0–29.9
          </li>
          <li>
            <strong>Obese:</strong> BMI 30.0 and above
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this overweight calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>BMI from kg and cm</li>
              <li>Overweight yes/no (25–29.9)</li>
              <li>Healthy weight range for your height</li>
              <li>Kg above healthy BMI max</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Waist circumference or body fat %</li>
              <li>Children&apos;s BMI percentiles</li>
              <li>Ethnicity-specific BMI cutoffs</li>
              <li>Medical diagnosis or treatment plans</li>
              <li>Imperial-only input (use kg/cm)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">BMI formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`BMI = Weight (kg) ÷ [Height (m)]²

Overweight if BMI ≥ 25 and < 30

Healthy max weight (kg) ≈ 24.9 × height (m)²

Example: 85 kg, 170 cm (1.70 m)
  BMI = 85 ÷ 1.70² ≈ 29.4 → Overweight
  Healthy max ≈ 72 kg → ~13 kg above 24.9 BMI cap`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Overweight vs obese vs healthy weight
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Healthy weight</strong> BMI supports lower average health risk in
          population studies. <strong>Overweight</strong> suggests elevated risk
          for some conditions compared with healthy BMI—individual factors (fitness,
          waist size, blood pressure) matter. <strong>Obese</strong> (BMI 30+) is a
          separate, higher category. This tool shows which band applies to you.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this overweight calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Weigh yourself in kilograms; measure height in centimeters.</li>
          <li>Enter both values and review BMI and category.</li>
          <li>
            If overweight, note the healthy weight range—not a mandatory goal, but a
            screening reference.
          </li>
          <li>
            Discuss sustained change with a clinician; plan calories via the{" "}
            <Link
              to="/health/calorie-calculator"
              className="text-primary hover:underline"
            >
              Calorie Calculator
            </Link>{" "}
            if appropriate.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>85 kg</strong>, <strong>170 cm</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>BMI ≈ <strong>29.4</strong> — overweight (not yet obese)</li>
            <li>Healthy range ≈ 53.5–72.0 kg for this height</li>
            <li>~13 kg above the 24.9 BMI weight cap</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Limitations of BMI for overweight screening
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Athletes with high muscle may land in the overweight band without high
          body fat. Older adults may lose muscle while keeping BMI stable. Some
          Asian guidelines use lower overweight thresholds (e.g. BMI 23+) in
          clinical settings—this page uses WHO-style adult cutoffs for general
          education.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What to do if you are overweight
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Repeat BMI over time—one reading is a snapshot</li>
          <li>Consider waist measurement and fitness level with your doctor</li>
          <li>Focus on sustainable nutrition and activity, not crash diets</li>
          <li>Manage blood pressure, glucose, and sleep as part of overall health</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (overweight &amp; BMI)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I know if I am overweight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Calculate BMI from weight and height. Adult{" "}
              <strong>overweight is BMI 25.0–29.9</strong>. This{" "}
              <strong>overweight calculator</strong> labels that automatically.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What BMI is overweight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>25.0 to 29.9</strong> for standard adult categories. Below 25
              is healthy weight (down to 18.5); 30+ is obese.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is overweight the same as obese?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Overweight is BMI 25–29.9; obese is BMI 30 and above. Both are
              separate screening bands.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How much should I weigh to not be overweight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For your height, any weight that keeps BMI below 25—see the healthy
              range on the{" "}
              <Link
                to="/health/healthy-weight-calculator"
                className="text-primary hover:underline"
              >
                Healthy Weight Calculator
              </Link>
              . Maximum at 24.9 BMI is shown in your results summary.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I be overweight and healthy?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Some people with overweight BMI have good fitness and metabolic markers.
              BMI is one screen—waist size, labs, and lifestyle paint a fuller picture
              with your provider.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does muscle count as overweight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              BMI cannot tell muscle from fat. Very muscular people may be classified
              overweight without excess fat—body composition testing adds context.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can children use this overweight calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Children need growth-chart percentiles, not adult 25/30 cutoffs.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is overweight different from the BMI calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Same BMI math. This page highlights overweight status, kg above healthy
              max, and education focused on the 25–29.9 band.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this overweight calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>weight status calculator</strong>.
              Diagnosis and weight-management treatment require licensed healthcare
              professionals.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
