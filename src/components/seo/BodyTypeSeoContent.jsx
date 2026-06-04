import React from "react";
import { Link } from "react-router-dom";

export default function BodyTypeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Body type calculator: ectomorph, mesomorph, endomorph
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>body type calculator</strong> estimates your{" "}
          <strong>somatotype</strong>—<strong>ectomorph</strong>,{" "}
          <strong>mesomorph</strong>, or <strong>endomorph</strong>—from BMI
          (weight and height in metric units) plus your selected{" "}
          <strong>body frame size</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use it to think about training and nutrition tendencies, not as a fixed
          label. For standard BMI categories, see the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>
          . For body fat %, try the{" "}
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
              <li>BMI from kg and cm</li>
              <li>Frame size input (small / medium / large)</li>
              <li>Ectomorph, mesomorph, or endomorph result</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Wrist/elbow frame measurement wizard</li>
              <li>Sheldon photographic somatotyping</li>
              <li>Hormone or genetic testing</li>
              <li>Personalized meal or workout plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The three somatotypes</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Ectomorph:</strong> typically lean, smaller joints, harder to
            gain weight
          </li>
          <li>
            <strong>Mesomorph:</strong> naturally athletic, gains muscle relatively
            easily
          </li>
          <li>
            <strong>Endomorph:</strong> softer physique, may store fat more readily
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Most people are a mix. This tool gives a single dominant label for
          simplicity.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the estimate works</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          BMI is calculated first. Underweight BMI (&lt;18.5) maps to ectomorph.
          In the healthy BMI band, frame size shifts the result between ectomorph,
          mesomorph, and endomorph. Above healthy BMI, small frames lean
          mesomorph; medium/large frames lean endomorph.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this body type calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter weight (kg) and height (cm).</li>
          <li>
            Choose frame size based on bone structure (small, medium, or large).
          </li>
          <li>Read your estimated somatotype and BMI in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Fitness and nutrition tips</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Ectomorph:</strong> adequate calories and progressive strength
            training for muscle gain
          </li>
          <li>
            <strong>Mesomorph:</strong> balanced macros; mix strength and cardio
          </li>
          <li>
            <strong>Endomorph:</strong> consistent activity and portion awareness;
            protein-forward meals often help
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Estimate daily calories with our{" "}
          <Link
            to="/health/bmr-calculator"
            className="text-primary hover:underline"
          >
            BMR Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is body type the same as body shape?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Related but different. Somatotype describes broad build tendencies;
              shape (pear, apple, etc.) describes fat distribution.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I know my frame size?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Common tests compare wrist or elbow breadth to height. When unsure,
              choose medium.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I be two body types at once?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—many people show mixed traits. This calculator outputs one
              primary label for quick reference.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does body type determine my ideal weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Use BMI ranges, body fat, performance goals, and medical advice
              together—not somatotype alone.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Will lifting weights change my somatotype?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Training can change how you look and perform even if natural
              tendencies remain. Labels are guides, not limits.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
