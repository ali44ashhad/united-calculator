import React from "react";
import { Link } from "react-router-dom";

export default function IdealWeightSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Ideal weight calculator: Devine ideal body weight (IBW) by height
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>ideal weight calculator</strong> to estimate{" "}
          <strong>ideal body weight (IBW)</strong> with the classic{" "}
          <strong>Devine formula</strong> from <strong>height</strong> and{" "}
          <strong>sex</strong>. It returns one target weight in{" "}
          <strong>kilograms and pounds</strong>—the type of number clinicians
          sometimes use for drug dosing, ventilator settings, and quick
          screening—not a full wellness plan.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Searching for <strong>perfect weight by height</strong>,{" "}
          <strong>ideal weight for men/women</strong>, or an{" "}
          <strong>IBW calculator</strong>? Enter centimeters above. For the wider{" "}
          <strong>healthy weight range</strong> from BMI 18.5–24.9, use the{" "}
          <Link
            to="/health/healthy-weight-calculator"
            className="text-primary hover:underline"
          >
            Healthy Weight Calculator
          </Link>
          . To score your current weight, try the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>
          .
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Body composition matters beyond scale weight—see the{" "}
          <Link
            to="/health/body-fat-calculator"
            className="text-primary hover:underline"
          >
            Body Fat Calculator
          </Link>{" "}
          when muscle mass affects how you interpret targets.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is ideal body weight (IBW)?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Ideal body weight</strong> formulas predict a single “expected”
          weight from height and sex. The <strong>Devine equation (1974)</strong>{" "}
          is among the most cited in medicine. It differs from BMI categories,
          which classify whatever you weigh today—not a preset target number.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>One IBW number</strong> per height and sex (Devine)
          </li>
          <li>
            <strong>Clinical uses</strong> — medication dosing, nutrition estimates
          </li>
          <li>
            <strong>Not frame-adjusted</strong> — no small/medium/large bone modifier
            in this tool
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this ideal weight calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Devine IBW (kg and lb)</li>
              <li>Male and female sex inputs</li>
              <li>BMI at ideal weight</li>
              <li>Comparison to BMI 18.5–24.9 band</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Robinson, Miller, or Hamwi formulas</li>
              <li>Body frame size multipliers</li>
              <li>Age-based adjustments</li>
              <li>Pediatric growth charts</li>
              <li>Personalized medical weight prescriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Devine ideal weight formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Male IBW (kg)   = 50   + 2.3 × (height in inches − 60)
Female IBW (kg) = 45.5 + 2.3 × (height in inches − 60)

(Valid for adult heights ≥ about 60 inches / 152 cm)

Example: Male, 178 cm ≈ 70.1 in → 10.1 in over 5 ft
  IBW ≈ 50 + 2.3 × 10.1 ≈ 73.2 kg`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Other <strong>ideal body weight formulas</strong>—Robinson, Miller,
          Hamwi—use different constants. Devine remains common in textbooks and
          dosing references; results may differ by several kilograms between
          formulas.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Ideal weight vs healthy weight vs BMI
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>BMI</strong> = weight ÷ height² with category cutoffs.{" "}
          <strong>Healthy weight</strong> (on this site) is the weight{" "}
          <em>range</em> that keeps BMI between 18.5 and 24.9.{" "}
          <strong>Ideal weight (Devine)</strong> is a single point estimate by sex.
          Devine IBW often falls inside the healthy BMI band but not always—this
          calculator flags when it sits outside 18.5–24.9.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this ideal weight calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter height in centimeters (minimum about 152 cm).</li>
          <li>Select sex for the Devine constants.</li>
          <li>Read IBW in kg and lb plus BMI at that weight.</li>
          <li>
            Compare with the{" "}
            <Link
              to="/health/healthy-weight-calculator"
              className="text-primary hover:underline"
            >
              healthy weight range
            </Link>{" "}
            and your actual BMI before setting goals.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Female</strong>, <strong>165 cm</strong> (≈65.0 in, 5.0 in
            over 5 ft):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>IBW ≈ 45.5 + 2.3 × 5.0 ≈ <strong>57.0 kg</strong> (~126 lb)</li>
            <li>BMI at IBW ≈ 20.9 — within typical healthy band</li>
            <li>Healthy BMI range for 165 cm ≈ 50.4–67.8 kg</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When clinicians use ideal body weight
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Scaling medication doses (e.g., some chemotherapy, antibiotics)</li>
          <li>Estimating lean body mass in certain equations</li>
          <li>Quick reference when actual weight exceeds IBW in obesity dosing rules</li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Fitness and general wellness goals usually lean on BMI ranges, body fat,
          and waist measures—not IBW alone.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Limitations of ideal weight formulas
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          IBW equations were derived from historical population data and may
          under- or over-estimate for very muscular, elderly, or ethnically diverse
          groups. They ignore frame size unless a separate modifier is applied.
          Treat Devine output as a reference line, not a mandate to reach that
          exact weight.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (ideal weight &amp; IBW)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is ideal weight calculated?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This page uses <strong>Devine</strong>: men{" "}
              <strong>50 kg + 2.3 kg per inch over 5 feet</strong>; women{" "}
              <strong>45.5 kg</strong> with the same inch increment. Height converts
              from cm to inches internally.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the ideal weight for 170 cm?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              About <strong>66.9 kg</strong> (male Devine) or{" "}
              <strong>62.4 kg</strong> (female Devine)—enter 170 above for exact
              figures and BMI check.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is ideal weight the same for everyone?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Sex changes the Devine intercept. Height drives the inch offset.
              Age, muscle, and frame are not in this equation.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Devine vs Robinson vs Miller?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              All are IBW formulas with different constants. Robinson tends to
              give slightly lower estimates than Devine for many heights; Miller
              sits between them. This calculator implements <strong>Devine only</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does body frame size matter?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Some weight charts add ±10% for large or small frame. Standard Devine
              does not—this tool matches the unadjusted equation.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can athletes target ideal body weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Athletes often weigh above IBW with low body fat. Performance and
              composition goals may exceed Devine without being unhealthy—use body
              fat or sport-specific guidance.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is there a minimum height?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Devine is defined for heights from 5 feet (60 in) up. Shorter adults
              need pediatric or alternate formulas—not this IBW model.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is ideal weight the same as healthy weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Related but different. Healthy weight here means the BMI 18.5–24.9{" "}
              <em>interval</em>. Devine IBW is one point—often inside that interval
              but not guaranteed.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this ideal weight calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>body weight calculator</strong> for
              the Devine formula. Dosing, treatment, and diet require licensed
              professionals.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
