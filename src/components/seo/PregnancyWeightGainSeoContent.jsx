import React from "react";
import { Link } from "react-router-dom";

export default function PregnancyWeightGainSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Pregnancy weight gain calculator: how much should I gain?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>pregnancy weight gain calculator</strong> to see{" "}
          <strong>recommended gestational weight gain</strong> from your{" "}
          <strong>pre-pregnancy BMI</strong>. Enter{" "}
          <strong>weight before pregnancy (kg)</strong> and{" "}
          <strong>height (cm)</strong>, pick your <strong>trimester</strong>, and
          get <strong>total IOM-style ranges</strong>, approximate{" "}
          <strong>trimester gain</strong>, and <strong>weekly rates</strong> for
          the second and third trimesters.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For BMI category alone, try the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>{" "}
          or{" "}
          <Link
            to="/health/overweight-calculator"
            className="text-primary hover:underline"
          >
            Overweight Calculator
          </Link>
          . For healthy weight bands, see the{" "}
          <Link
            to="/health/healthy-weight-calculator"
            className="text-primary hover:underline"
          >
            Healthy Weight Calculator
          </Link>
          . For weeks pregnant and due date, use the{" "}
          <Link
            to="/health/pregnancy-calculator"
            className="text-primary hover:underline"
          >
            Pregnancy Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a pregnancy weight gain calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>gestational weight gain calculator</strong> applies U.S.{" "}
          <strong>Institute of Medicine (IOM)</strong> guidance used widely in
          prenatal care. Your <strong>pre-pregnancy BMI</strong> selects a{" "}
          <strong>total pregnancy weight gain range</strong>; trimester selection
          shows how much gain is typical in that phase.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Pre-pregnancy BMI</strong> and category
          </li>
          <li>
            <strong>Total recommended gain</strong> (full term, singleton)
          </li>
          <li>
            <strong>Trimester gain</strong> and cumulative by trimester end
          </li>
          <li>
            <strong>Weekly rate</strong> in 2nd and 3rd trimesters
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
              <li>IOM total gain by pre-pregnancy BMI</li>
              <li>First-trimester typical range (0.5–2 kg)</li>
              <li>Trimester and cumulative estimates</li>
              <li>2nd/3rd trimester weekly gain rates</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Current weight vs on-track comparison</li>
              <li>Twin or higher-order pregnancy ranges</li>
              <li>Teen or adolescent-specific charts</li>
              <li>Medical nutrition therapy plans</li>
              <li>Postpartum weight loss targets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          IOM total pregnancy weight gain by BMI
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Pre-pregnancy BMI = weight (kg) ÷ [height (m)]²

Category          BMI              Total gain (kg)    Total gain (lbs)
Underweight       Below 18.5       12.5 – 18          28 – 40
Normal            18.5 – 24.9      11.5 – 16          25 – 35
Overweight        25.0 – 29.9      7 – 11.5           15 – 25
Obese             30.0+            5 – 9              11 – 20

First trimester (all categories): ~0.5 – 2 kg (1 – 4.5 lbs) total

2nd/3rd trimester weekly rates (approx.):
  Underweight: ~0.51 kg/week (~1 lb)
  Normal:      ~0.42 kg/week (~1 lb)
  Overweight:  ~0.28 kg/week (~0.6 lb)
  Obese:       ~0.22 kg/week (~0.5 lb)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why pre-pregnancy BMI matters
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Gaining too little or too much during pregnancy is linked to risks such
          as preterm birth, cesarean delivery, and later metabolic issues.{" "}
          <strong>Lower pre-pregnancy BMI</strong> generally allows a{" "}
          <strong>higher total gain</strong>;{" "}
          <strong>higher BMI</strong> targets a narrower band. Your obstetric
          provider may adjust targets for your health history.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this pregnancy weight gain calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter weight before pregnancy in kilograms.</li>
          <li>Enter height in centimeters.</li>
          <li>Select your current trimester for phase-specific guidance.</li>
          <li>Review total gain, trimester range, and weekly rate with your clinician.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Pre-pregnancy:</strong> 62 kg, 165 cm → BMI ≈ 22.8 (normal)
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              <strong>Total recommended gain:</strong> 11.5–16 kg (25–35 lbs)
            </li>
            <li>
              <strong>First trimester:</strong> ~0.5–2 kg total
            </li>
            <li>
              <strong>2nd/3rd rate:</strong> ~0.42 kg/week (~1 lb/week)
            </li>
            <li>
              <strong>Second trimester (selected):</strong> approximate incremental
              gain for weeks 14–27 shown in results
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Trimester weight gain: what to expect
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>First trimester</strong> gain is often modest (nausea, early
          metabolism). <strong>Second and third trimesters</strong> carry most fetal
          growth and fluid increases—weekly targets apply after week 13. This tool
          does not replace scale checks at prenatal visits.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (pregnancy weight gain)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How much weight should I gain during pregnancy?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Depends on <strong>pre-pregnancy BMI</strong>: roughly 12.5–18 kg if
              underweight, 11.5–16 kg if normal, 7–11.5 kg if overweight, 5–9 kg if
              obese—for a singleton pregnancy.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is pregnancy weight gain calculated?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Compute pre-pregnancy BMI, map to an IOM category, read the total
              range, then apply first-trimester and weekly 2nd/3rd trimester
              guidance for trimester estimates.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I gain too much or too little?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Talk with your prenatal provider. Ranges are population guidance;
              individual nutrition, activity, and conditions change what is safe for
              you.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this work for twins?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Multiple gestations have higher recommended gain. Use specialist
              prenatal care for twin-specific targets.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why use pre-pregnancy weight, not current weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Clinical guidelines anchor categories to <strong>BMI before
              pregnancy</strong> so total gain targets stay consistent even as weight
              rises during gestation.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How much weight gain in the first trimester?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              About <strong>0.5–2 kg (1–4.5 lbs)</strong> total is typical across BMI
              categories—some people gain little or lose briefly with morning
              sickness.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is BMI enough to judge healthy pregnancy weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              BMI is a screening tool, not body composition. Muscle, ethnicity, and
              medical history matter—pair BMI ranges with clinical assessment.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this pregnancy weight gain calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Educational IOM-style reference only—follow your obstetric or
              midwifery care team for personalized targets.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
