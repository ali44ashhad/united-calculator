import React from "react";
import { Link } from "react-router-dom";

export default function LeanBodyMassSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Lean body mass calculator: Boer LBM &amp; fat-free mass estimate
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>lean body mass calculator</strong> to estimate{" "}
          <strong>LBM (lean body mass)</strong>—also called{" "}
          <strong>fat-free mass (FFM)</strong>—from <strong>weight</strong>,{" "}
          <strong>height</strong>, and <strong>sex</strong>. It applies the{" "}
          <strong>Boer formula (1984)</strong>, a common clinical and fitness
          equation when you do not have a direct <strong>body fat percentage</strong>{" "}
          measurement.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you need an <strong>LBM calculator</strong>,{" "}
          <strong>fat-free mass calculator</strong>, or want to approximate{" "}
          <strong>muscle mass vs fat mass</strong> from scale weight, enter metric
          inputs above. The summary also shows derived <strong>fat mass</strong> and{" "}
          <strong>body fat %</strong> as weight minus estimated LBM. For
          circumference-based body fat, use the{" "}
          <Link
            to="/health/body-fat-calculator"
            className="text-primary hover:underline"
          >
            Body Fat Calculator
          </Link>
          . For overall weight status, see the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>
          .
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Protein and calorie planning often reference lean mass—pair results with
          the{" "}
          <Link
            to="/health/protein-calculator"
            className="text-primary hover:underline"
          >
            Protein Calculator
          </Link>{" "}
          and{" "}
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
          What is lean body mass (LBM)?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Lean body mass</strong> is everything in your body that is not
          stored fat: skeletal muscle, bone, organs, blood, and water. In many
          formulas, <strong>LBM ≈ body weight − fat mass</strong>. It is related to
          but not identical to <strong>skeletal muscle mass</strong> alone.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Higher LBM</strong> — often associated with strength training and
            athletic build
          </li>
          <li>
            <strong>Lower LBM</strong> — can follow inactivity, illness, or aging
            (sarcopenia risk)
          </li>
          <li>
            <strong>Tracking LBM</strong> — helps separate fat loss from muscle loss
            during a diet
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this LBM calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Boer LBM (kg and lb)</li>
              <li>Derived fat mass and body fat %</li>
              <li>LBM share of total weight</li>
              <li>BMI reference from same inputs</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Direct body fat % input (use Body Fat Calculator)</li>
              <li>James, Hume, or Katch-McArdle LBM formulas</li>
              <li>DEXA, BIA, or hydrostatic weighing</li>
              <li>Skeletal muscle mass only (SMMI)</li>
              <li>Pediatric body composition</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Boer lean body mass formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Male LBM (kg)   = 0.407 × weight (kg) + 0.267 × height (cm) − 19.2
Female LBM (kg) = 0.252 × weight (kg) + 0.473 × height (cm) − 48.3

Derived fat mass (kg) ≈ weight − LBM
Body fat % ≈ (fat mass ÷ weight) × 100

Example: Male, 70 kg, 170 cm
  LBM ≈ 0.407×70 + 0.267×170 − 19.2 ≈ 54.7 kg
  Fat ≈ 15.3 kg (~21.9% body fat)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Boer vs James vs Hume LBM equations
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Several <strong>LBM formulas</strong> exist for adults.{" "}
          <strong>Boer (1984)</strong> is widely cited in nutrition and research.
          <strong> James (1976)</strong> and <strong>Hume (1966)</strong> use
          different coefficients—results may differ by 2–5 kg or more for the same
          person. This page implements <strong>Boer only</strong> to match the
          calculator logic.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          LBM vs body fat percentage vs muscle mass
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Body fat %</strong> is the proportion of weight that is fat.{" "}
          <strong>LBM</strong> is the remaining mass in kilograms.{" "}
          <strong>Muscle mass</strong> is a subset of LBM. Boer estimates total
          fat-free mass—not MRI-measured muscle alone.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this lean body mass calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter body weight in kilograms and height in centimeters.</li>
          <li>Select sex for the Boer coefficients.</li>
          <li>Review LBM, derived fat mass, and approximate body fat %.</li>
          <li>
            Compare trends over time with consistent timing (morning, pre-meal) rather
            than single-day precision.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Female</strong>, <strong>60 kg</strong>, <strong>165 cm</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              LBM ≈ 0.252×60 + 0.473×165 − 48.3 ≈ <strong>44.9 kg</strong>
            </li>
            <li>Fat mass ≈ 15.1 kg (~25% body fat)</li>
            <li>Useful as a baseline—athletes may prefer caliper or Navy body fat</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why track lean body mass?
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Distinguish fat loss from muscle loss during weight change</li>
          <li>Inform protein targets and resistance-training goals</li>
          <li>Support clinical dosing equations that use ideal or lean weight</li>
          <li>Monitor recovery after illness or surgery (with medical oversight)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Accuracy and limitations
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Boer is a <strong>body composition estimate</strong> from population
          regression—not a scan. Hydration, ethnicity, age, and extreme leanness or
          obesity reduce accuracy. Gold-standard lab methods (DEXA) or multi-site
          skinfolds may disagree with Boer by several percentage points.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (LBM &amp; body composition)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is lean body mass (LBM)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              LBM is total weight minus fat mass—muscle, bone, organs, and fluids
              included. This <strong>LBM calculator</strong> estimates it with Boer
              from weight, height, and sex.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate lean body mass?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter kg and cm above, or apply Boer manually: men use 0.407×weight +
              0.267×height − 19.2; women use 0.252×weight + 0.473×height − 48.3.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter body fat percentage instead?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not on this page. With known body fat %, LBM = weight × (1 − fat%/100).
              Get body fat from the{" "}
              <Link
                to="/health/body-fat-calculator"
                className="text-primary hover:underline"
              >
                Body Fat Calculator
              </Link>{" "}
              first if needed.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is LBM the same as muscle mass?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. LBM is broader fat-free mass. Skeletal muscle is typically 40–50%
              of LBM in healthy adults, varying by training status.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a good lean body mass?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              There is no universal target—LBM scales with height and sex. Track
              personal trends and strength rather than comparing raw kg to others.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Boer vs Katch-McArdle?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Katch-McArdle needs measured body fat %: LBM = weight × (1 − fat/100).
              Boer needs only weight, height, and sex—less input, less individual
              precision.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is my estimated body fat different from calipers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Boer-derived fat is indirect. Skinfold and Navy methods measure
              subcutaneous fat patterns—both are estimates with different error
              profiles.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use pounds and inches?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool expects <strong>kg and cm</strong>. Convert first: lb ÷ 2.205
              ≈ kg; inches × 2.54 = cm.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this lean body mass calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>body composition calculator</strong>.
              Clinical nutrition, dosing, and disease management require qualified
              professionals and appropriate testing.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
