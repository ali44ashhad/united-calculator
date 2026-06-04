import React from "react";
import { Link } from "react-router-dom";

export default function ArmyBodyFatSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Army body fat calculator: U.S. military body composition
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>Army body fat calculator</strong> estimates your{" "}
          <strong>body fat percentage</strong> using the U.S. Army circumference
          method (height, neck, waist, and hip for women). It compares your
          result to typical <strong>age-based maximum standards</strong> used for
          enlistment and fitness screening.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For non-military body fat methods, use our{" "}
          <Link
            to="/health/body-fat-calculator"
            className="text-primary hover:underline"
          >
            Body Fat Calculator
          </Link>
          . For weight-for-height context, see the{" "}
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
              <li>Official Army log10 formulas (male and female)</li>
              <li>Metric inputs (cm) converted to inches internally</li>
              <li>Age-based max body fat comparison</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Official tape-test measurement by trained personnel</li>
              <li>Branch-specific or updated regulation tables</li>
              <li>DEXA, hydrostatic, or other lab methods</li>
              <li>ACFT or other fitness test scores</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Army body fat formulas</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Measurements are taken in inches for the standard equations. This tool
          accepts centimeters and converts automatically.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Male:
  BF% = 86.010 × log10(waist − neck)
        − 70.041 × log10(height) + 36.76

Female:
  BF% = 163.205 × log10(waist + hip − neck)
        − 97.684 × log10(height) − 78.387

(waist, neck, hip, height in inches)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Typical Army maximum body fat by age
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Men 17–20:</strong> 20% · <strong>21–27:</strong> 22% ·{" "}
            <strong>28–39:</strong> 24% · <strong>40+:</strong> 26%
          </li>
          <li>
            <strong>Women 17–20:</strong> 30% · <strong>21–27:</strong> 32% ·{" "}
            <strong>28–39:</strong> 34% · <strong>40+:</strong> 36%
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Regulations can change. Use this page for planning; rely on official
          Army measurement for eligibility decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this Army body fat calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your age and select gender.</li>
          <li>
            Measure and enter height, neck, and waist in centimeters (level,
            relaxed).
          </li>
          <li>
            Women: also enter hip circumference at the widest point.
          </li>
          <li>
            Review body fat %, Army max for your age, and within/above standard.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Measurement tips</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Neck: just below the larynx, perpendicular to the long axis.</li>
          <li>Waist: at the navel for Army tape tests (men and women).</li>
          <li>Hip (women): at the greatest protrusion of the buttocks.</li>
          <li>Take each measurement twice and use consistent technique.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does the Army use circumference instead of BMI?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Circumference methods target body fat distribution. BMI alone can
              misclassify muscular service members.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Will my result match an official tape test?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It should be close if measurements match Army technique, but
              official tests use trained personnel and current tables.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I am above the standard?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Focus on nutrition, training, and medical guidance. This calculator
              is informational—not a waiver or disqualification notice.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I need hip measurements as a man?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. The male formula uses height, neck, and waist only.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter inches instead of centimeters?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This version uses centimeters. Multiply inches by 2.54 to convert,
              or use a metric tape for direct entry.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
