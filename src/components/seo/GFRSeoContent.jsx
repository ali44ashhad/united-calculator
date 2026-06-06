import React from "react";
import { Link } from "react-router-dom";

export default function GFRSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          GFR calculator: eGFR &amp; kidney function from creatinine
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>GFR calculator</strong> to estimate your{" "}
          <strong>glomerular filtration rate (GFR)</strong>—reported in labs as{" "}
          <strong>eGFR (estimated GFR)</strong>—from <strong>serum creatinine</strong>
          , age, and sex. The tool applies the widely used{" "}
          <strong>CKD-EPI 2009 creatinine equation</strong> (mg/dL) and shows a{" "}
          <strong>CKD stage reference</strong> based on eGFR alone.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you are searching for an <strong>eGFR calculator</strong>,{" "}
          <strong>kidney function calculator</strong>, or want to understand{" "}
          <strong>creatinine and GFR</strong> after blood work, enter your lab
          creatinine in <strong>mg/dL</strong> above. eGFR reflects how well
          kidneys filter waste; lower values may suggest reduced function, but only
          repeat testing and medical review can confirm{" "}
          <strong>chronic kidney disease (CKD)</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Kidney health connects to overall wellness—track weight context with the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>{" "}
          and daily nutrition with the{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          . This page does not replace your lab report or nephrology care.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is GFR (glomerular filtration rate)?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>GFR</strong> measures how many milliliters of blood your kidneys
          filter per minute, normalized to body surface area (
          <strong>mL/min/1.73m²</strong>). Direct measurement is invasive; routine
          care uses <strong>eGFR</strong> calculated from blood{" "}
          <strong>creatinine</strong>, age, and sex (and historically race in older
          equations).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Normal or high eGFR</strong> — often ≥90 (stage G1) if no other
            kidney damage markers
          </li>
          <li>
            <strong>Mild reduction</strong> — 60–89 (G2) may still be stable in
            older adults
          </li>
          <li>
            <strong>Moderate to severe reduction</strong> — G3–G4 warrant clinical
            follow-up
          </li>
          <li>
            <strong>Kidney failure range</strong> — G5 below 15; dialysis or
            transplant planning may apply
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this GFR calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>eGFR via CKD-EPI 2009 (creatinine, mg/dL)</li>
              <li>CKD G1–G5 stage label from eGFR</li>
              <li>Male/female sex inputs</li>
              <li>Optional 2009 Black race coefficient</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>CKD-EPI 2021 race-free equation</li>
              <li>Cystatin C or combined creatinine–cystatin C eGFR</li>
              <li>Creatinine in µmol/L (SI units)</li>
              <li>Urine albumin, protein, or ACR</li>
              <li>Medical diagnosis or treatment plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          CKD-EPI 2009 formula (creatinine)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`eGFR = 141 × min(Scr/k, 1)^α × max(Scr/k, 1)^−1.209 × 0.993^Age

k = 0.9 (male) or 0.7 (female)
α = −0.411 (male) or −0.329 (female)
Scr = serum creatinine (mg/dL)

× 1.018 if female
× 1.159 if Black race coefficient selected (2009 equation)

Example: Male, 40 y, creatinine 1.0 mg/dL, no race coeff.
  → eGFR ≈ 90 mL/min/1.73m² (approximate)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Your hospital lab may print a different eGFR if it uses{" "}
          <strong>CKD-EPI 2021</strong> (no race term) or adds{" "}
          <strong>cystatin C</strong>. Always prioritize the value on your official
          report.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          CKD stages by eGFR (reference)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>G1:</strong> ≥90 — normal or high (needs damage markers for CKD
            diagnosis)
          </li>
          <li>
            <strong>G2:</strong> 60–89 — mildly decreased
          </li>
          <li>
            <strong>G3a:</strong> 45–59 — mild to moderate decrease
          </li>
          <li>
            <strong>G3b:</strong> 30–44 — moderate to severe decrease
          </li>
          <li>
            <strong>G4:</strong> 15–29 — severely decreased
          </li>
          <li>
            <strong>G5:</strong> &lt;15 — kidney failure
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Staging requires <strong>persistent</strong> abnormalities over months, not
          one random reading. Protein in urine (albuminuria) also changes risk and
          management.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Serum creatinine and kidney function
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Creatinine</strong> is a waste product from muscle metabolism.
          Healthy kidneys excrete it; when filtration drops, creatinine rises in
          blood. Many factors affect creatinine—muscle mass, diet, dehydration,
          medications—so eGFR is an estimate, not a perfect measure of true GFR.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this GFR calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Find <strong>serum creatinine</strong> on your blood test (mg/dL in the
            U.S.).
          </li>
          <li>Enter age and sex as used in the equation.</li>
          <li>
            Apply the race coefficient only if you are comparing to legacy CKD-EPI
            2009 reports that used it.
          </li>
          <li>
            Read eGFR and stage reference; discuss persistent low values with your
            doctor.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Female</strong>, <strong>65 years</strong>, creatinine{" "}
            <strong>1.2 mg/dL</strong>, no race coefficient:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>eGFR ≈ low–mid 50s mL/min/1.73m² (illustrative)</li>
            <li>Stage reference often <strong>G3a</strong> if persistent</li>
            <li>Clinician may order repeat labs, urine ACR, and imaging</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          eGFR vs MDRD vs CKD-EPI 2021
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The older <strong>MDRD equation</strong> underestimated GFR at higher
          levels. <strong>CKD-EPI 2009</strong> improved accuracy and is still
          embedded in many teaching examples. <strong>CKD-EPI 2021</strong> removed
          the race multiplier; U.S. labs increasingly report 2021 eGFR. This page
          implements <strong>2009 creatinine</strong> to match the calculator logic
          and optional race checkbox.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When to see a doctor about kidney function
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Persistent eGFR below 60 for three months or more</li>
          <li>Rising creatinine, foamy urine, swelling, or fatigue</li>
          <li>Diabetes, high blood pressure, or family history of kidney disease</li>
          <li>Before starting NSAIDs or contrast dye if kidney risk is unknown</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (GFR, eGFR &amp; CKD)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">What is a normal GFR?</p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many adults show eGFR <strong>≥90 mL/min/1.73m²</strong> on blood
              tests. Values <strong>60–89</strong> can be normal for older people
              without other kidney damage. Context from your clinician matters more
              than one number.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is GFR calculated from creatinine?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Labs use equations like <strong>CKD-EPI</strong> that combine serum
              creatinine, age, and sex. This <strong>creatinine GFR calculator</strong>{" "}
              runs the 2009 creatinine form when you enter mg/dL.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What creatinine unit should I use?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter <strong>mg/dL</strong>. If your report lists µmol/L, convert
              (divide by 88.4 approximately) or use a SI-unit tool—wrong units will
              skew eGFR badly.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does CKD stage G3 mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>G3</strong> is eGFR 30–59: <strong>G3a</strong> (45–59) and{" "}
              <strong>G3b</strong> (30–44). It suggests moderate reduction if
              confirmed over time. Treatment may focus on blood pressure, glucose,
              and medication review.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why did my lab eGFR differ from this calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Different equation year (2021 vs 2009), cystatin C, rounding, or race
              coefficient settings can change results by several points. Trust your
              lab&apos;s reported eGFR for clinical decisions.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can dehydration affect creatinine and GFR?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Acute dehydration or illness can temporarily raise creatinine
              and lower eGFR. Repeat testing when you are well hydrated and stable.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is low eGFR always kidney disease?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. One low estimate, high muscle mass, or certain drugs can affect
              results. CKD diagnosis requires persistence plus often urine or
              imaging findings—only your care team can diagnose.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this GFR calculator diagnose CKD?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>renal function calculator</strong>.
              Diagnosis and staging for treatment require licensed medical
              evaluation, repeat labs, and often nephrology referral.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What about the race coefficient in eGFR?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              CKD-EPI 2009 multiplied eGFR for Black patients. Many guidelines now
              reject race-based adjustment; CKD-EPI 2021 omits it. Use the checkbox
              only when matching legacy 2009 reporting.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
