import React from "react";
import { Link } from "react-router-dom";

export default function BodySurfaceAreaSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Body surface area calculator: BSA in square meters
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>body surface area (BSA) calculator</strong> estimates{" "}
          <strong>BSA in m²</strong> from weight (kg) and height (cm). The
          primary result uses the <strong>Mosteller formula</strong>; a{" "}
          <strong>Du Bois</strong> value is shown for comparison.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          BSA is used in some clinical settings for drug dosing and research.
          For general weight screening, use the{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>
          . For body composition, see the{" "}
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
              <li>Mosteller BSA (m² and cm²)</li>
              <li>Du Bois BSA reference (m²)</li>
              <li>Metric kg and cm inputs</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Haycock or other BSA formulas</li>
              <li>Pediatric percentile tables</li>
              <li>Chemotherapy or IV dose calculations</li>
              <li>Medical orders or prescriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">BSA formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Mosteller (primary):
  BSA (m²) = √((height(cm) × weight(kg)) / 3600)

Du Bois (reference):
  BSA (m²) = 0.007184 × weight(kg)^0.425 × height(cm)^0.725`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Why BSA matters in medicine</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Some chemotherapy and critical-care protocols scale medication to BSA
          because drug distribution relates to body size. Hospitals may specify
          which formula their protocol uses—always follow that guidance.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this BSA calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter weight in kilograms.</li>
          <li>Enter height in centimeters.</li>
          <li>Read Mosteller BSA in m² (and Du Bois for comparison).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>70 kg</strong>, <strong>175 cm</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Mosteller: √(70 × 175 / 3600) ≈ <strong>1.85 m²</strong>
            </li>
            <li>Du Bois is usually within a few percent of Mosteller.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a normal BSA?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Adult BSA often falls roughly between 1.6 and 2.0 m² depending on
              size. There is no single healthy target—context matters.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why do Mosteller and Du Bois differ slightly?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              They are different regression models from historical data. Small
              differences are expected.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter pounds and inches?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This version uses kg and cm. Convert first: 1 kg ≈ 2.205 lb; 1 in ≈
              2.54 cm.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is BSA the same as BMI?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. BMI is weight ÷ height² (kg/m²). BSA estimates total surface
              area in m² using different equations.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I dose medicine using this BSA?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Only under direction of a qualified prescriber using approved
              protocols. This page is educational.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
