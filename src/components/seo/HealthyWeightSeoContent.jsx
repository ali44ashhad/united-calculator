import React from "react";
import { Link } from "react-router-dom";

export default function HealthyWeightSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Healthy weight calculator: ideal weight range by height
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>healthy weight calculator</strong> to find your{" "}
          <strong>healthy weight range</strong> from <strong>height</strong> alone.
          It uses the standard adult <strong>BMI band of 18.5 to 24.9</strong>—the
          same screening limits behind most <strong>healthy BMI</strong> charts—to
          convert height into minimum and maximum weights in{" "}
          <strong>kilograms and pounds</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you want to know <strong>how much should I weigh for my height</strong>,
          or need a quick <strong>weight by height calculator</strong>, enter
          centimeters above. This is not a Devine or Robinson{" "}
          <strong>ideal body weight</strong> formula—it shows the full range that
          maps to normal BMI for adults. To check your current BMI, use the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>
          . For body fat beyond scale weight, try the{" "}
          <Link
            to="/health/body-fat-calculator"
            className="text-primary hover:underline"
          >
            Body Fat Calculator
          </Link>
          .
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          After you know a target weight band, estimate daily calories with the{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>{" "}
          or resting burn with the{" "}
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
          What is a healthy weight calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>healthy weight range calculator</strong> answers: given my
          height, what weights keep BMI in the normal category? BMI = weight ÷
          height²; rearranging gives weight = BMI × height². This page computes
          the weights at BMI <strong>18.5</strong> (lower bound) and{" "}
          <strong>24.9</strong> (upper bound).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Minimum healthy weight</strong> at BMI 18.5
          </li>
          <li>
            <strong>Maximum healthy weight</strong> at BMI 24.9
          </li>
          <li>
            <strong>Midpoint estimate</strong> between those limits
          </li>
          <li>
            <strong>kg and lb</strong> display for international users
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this healthy weight calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Healthy weight range from height (cm)</li>
              <li>Adult BMI 18.5–24.9 reference</li>
              <li>Results in kg and lb</li>
              <li>Midpoint and allowable span</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Devine, Robinson, or Hamwi ideal weight formulas</li>
              <li>Age- or sex-specific adult cutoffs</li>
              <li>Children&apos;s BMI percentiles</li>
              <li>Body frame size adjustments</li>
              <li>Medical weight prescriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Healthy weight formula (from BMI)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`BMI = weight (kg) ÷ [height (m)]²

Healthy weight range:
  Min (kg) = 18.5 × height (m)²
  Max (kg) = 24.9 × height (m)²

Example: 170 cm (1.70 m)
  Min ≈ 18.5 × 1.70² ≈ 53.5 kg
  Max ≈ 24.9 × 1.70² ≈ 71.9 kg
  → Healthy range roughly 53.5–71.9 kg`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Healthy weight vs ideal body weight vs BMI
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>BMI</strong> classifies a person who already knows their weight.
          This <strong>weight for height calculator</strong> works backward: you
          supply height and get the weight band that would yield healthy BMI.{" "}
          <strong>Ideal body weight (IBW)</strong> equations like Devine estimate one
          number (often for drug dosing), not a range, and usually require sex.
          All are screening tools—none measure body fat directly.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          BMI categories tied to this range
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Underweight:</strong> BMI below 18.5 — below this calculator&apos;s
            minimum
          </li>
          <li>
            <strong>Healthy weight:</strong> BMI 18.5–24.9 — the range shown here
          </li>
          <li>
            <strong>Overweight:</strong> BMI 25–29.9 — above the maximum shown
          </li>
          <li>
            <strong>Obese:</strong> BMI 30 and above
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this healthy weight calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your height in centimeters.</li>
          <li>Read the kg and lb range for BMI 18.5–24.9.</li>
          <li>
            Compare your current weight—use the{" "}
            <Link
              to="/health/bmi-calculator"
              className="text-primary hover:underline"
            >
              BMI Calculator
            </Link>{" "}
            if you need your exact BMI number.
          </li>
          <li>
            Discuss meaningful changes with a healthcare provider, especially if
            you are pregnant, elderly, or managing chronic conditions.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Height:</strong> 175 cm (1.75 m)
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Min ≈ 18.5 × 1.75² ≈ <strong>56.7 kg</strong> (~125 lb)</li>
            <li>Max ≈ 24.9 × 1.75² ≈ <strong>76.3 kg</strong> (~168 lb)</li>
            <li>Midpoint ≈ 66.5 kg — a rough center of the healthy band</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Limitations of height-only healthy weight charts
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Athletes with high muscle may exceed the range without excess fat. Older
          adults may face different risk trade-offs. Asian populations sometimes use
          lower BMI action points in clinical guidance—the WHO adult cutoffs used
          here are general screening bands for education, not personalized medicine.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (healthy weight &amp; BMI)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate a healthy weight for my height?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply your height in meters squared by <strong>18.5</strong> and{" "}
              <strong>24.9</strong> to get the kg range. This{" "}
              <strong>healthy weight calculator</strong> does that automatically from
              cm.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a healthy weight for 170 cm?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              About <strong>53.5 to 72 kg</strong> (118–159 lb) using standard adult
              BMI limits—enter 170 above for exact figures.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is BMI the same as healthy weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              They are linked. BMI compares weight to height; healthy weight here
              is the weight interval that keeps BMI between 18.5 and 24.9.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does age or gender change this range?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool uses universal adult BMI cutoffs and height only. Clinical
              care may adjust targets for pregnancy, pediatrics, or ethnicity-specific
              guidance.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this different from ideal body weight formulas?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Devine/Robinson estimate one IBW number by sex for dosing or quick
              targets. This page shows the full <strong>BMI healthy weight range</strong>{" "}
              without sex input.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              I lift weights—can I weigh more than the range?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Dense muscle can raise weight without raising disease risk the
              way excess fat might. Consider the{" "}
              <Link
                to="/health/body-fat-calculator"
                className="text-primary hover:underline"
              >
                Body Fat Calculator
              </Link>{" "}
              or waist measures for context.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I am below the minimum healthy weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              BMI below 18.5 is classified underweight. Unintentional loss or
              restrictive eating warrants medical evaluation—not self-diagnosis from
              a chart alone.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can children use this healthy weight calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Children and teens need growth-chart percentiles, not adult BMI
              18.5–24.9 limits.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this healthy weight calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>weight chart calculator</strong>.
              Treatment goals for obesity, underweight, or eating disorders require
              licensed professionals.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
