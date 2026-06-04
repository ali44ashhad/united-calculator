import React from "react";
import { Link } from "react-router-dom";

export default function BodyFatSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Body fat calculator: Navy circumference method
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>body fat calculator</strong> estimates your{" "}
          <strong>body fat percentage</strong> from tape measurements using the{" "}
          <strong>U.S. Navy circumference method</strong> (the same log10
          equations used for military body composition screening).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter height, neck, and waist in centimeters; women also enter hip.
          For Army age-based maximums, use the{" "}
          <Link
            to="/health/army-body-fat-calculator"
            className="text-primary hover:underline"
          >
            Army Body Fat Calculator
          </Link>
          . For weight-for-height, see the{" "}
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
              <li>Navy body fat % (male and female)</li>
              <li>Metric inputs with inch conversion</li>
              <li>General fitness category bands</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>DEXA, Bod Pod, or hydrostatic testing</li>
              <li>Skinfold caliper measurements</li>
              <li>Weight-only BMI-based fat estimates</li>
              <li>Clinical body composition reports</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Navy body fat formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Male:
  BF% = 86.010 × log10(waist − neck)
        − 70.041 × log10(height) + 36.76

Female:
  BF% = 163.205 × log10(waist + hip − neck)
        − 97.684 × log10(height) − 78.387

(all circumferences and height in inches internally)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Typical body fat categories (adults)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Men:</strong> athletic ~6–13%, fitness ~14–17%, average
          ~18–24%, obese 25%+. <strong>Women:</strong> athletic ~14–20%, fitness
          ~21–24%, average ~25–31%, obese 32%+. Ranges vary by source; use as a
          guide only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this body fat calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Select gender.</li>
          <li>Measure height, neck, and waist in cm (relaxed, level tape).</li>
          <li>Women: measure hip at the widest point.</li>
          <li>Review body fat % and the category in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Measurement tips</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Neck: below the larynx, perpendicular to the neck axis.</li>
          <li>Waist: at the navel level for Navy protocol.</li>
          <li>Hip (women): greatest protrusion of the buttocks.</li>
          <li>Do not pull the tape tight; keep it level.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why convert cm to inches?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The published Navy coefficients expect inch measurements. Entering
              cm without conversion would skew results.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can athletes have high BMI but low body fat?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Circumference methods and BMI capture different things—many
              lifters use both metrics.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How does this compare to smart scales?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Bioimpedance scales use electrical signals; Navy formulas use tape.
              Neither replaces lab testing for precision.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a healthy body fat percentage?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It depends on age, sex, and goals. Fitness ranges differ from
              essential minimums. Ask a clinician or coach for personalized targets.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How does body fat relate to calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Changing body composition usually involves calorie balance. Estimate
              resting needs with our{" "}
              <Link
                to="/health/bmr-calculator"
                className="text-primary hover:underline"
              >
                BMR Calculator
              </Link>{" "}
              and daily targets with the{" "}
              <Link
                to="/health/calorie-calculator"
                className="text-primary hover:underline"
              >
                Calorie Calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
