import React from "react";
import { Link } from "react-router-dom";

export default function VoltageDropSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Voltage drop calculator: wire loss from current and resistance
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Long wire runs lose volts to <strong>resistance</strong>. This{" "}
          <strong>voltage drop calculator</strong> uses the common round-trip form{" "}
          <strong>VD = 2 × I × R × L</strong>: <strong>current (A)</strong>,{" "}
          <strong>one-way length</strong>, and <strong>resistance per unit length</strong>{" "}
          (Ω/m with meters or Ω/ft with feet). Optionally enter{" "}
          <strong>supply voltage</strong> to see <strong>percent drop</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>voltage drop calculator</strong>,{" "}
          <strong>wire voltage drop</strong>. Long-tail:{" "}
          <strong>calculate voltage drop 10 amps 50 meters</strong>,{" "}
          <strong>2IRL formula single phase</strong>,{" "}
          <strong>percent voltage drop 12V supply</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`VD (volts) = 2 × I (amps) × R (Ω per unit) × L (same unit)
% drop = (VD ÷ supply voltage) × 100

Example: 10 A, 50 m, 0.0175 Ω/m, 12 V supply
→ VD = 2×10×0.0175×50 = 17.5 V (~146% — wire far too small)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>V, I, and R</strong> on a component, use{" "}
          <Link
            to="/other/ohms-law-calculator"
            className="text-primary hover:underline"
          >
            Ohm&apos;s Law Calculator
          </Link>
          . <strong>Resistor color bands</strong> map to ohms in the{" "}
          <Link
            to="/other/resistor-calculator"
            className="text-primary hover:underline"
          >
            Resistor Calculator
          </Link>
          . Monthly <strong>kWh and utility cost</strong> sit in the{" "}
          <Link
            to="/other/electricity-calculator"
            className="text-primary hover:underline"
          >
            Electricity Calculator
          </Link>
          —different layer than milliohms on a cable run.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Practical notes</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Match <strong>length unit to R</strong>—do not convert only length while
          leaving R in Ω/m. The factor <strong>2</strong> is for go-and-return
          conductors. Final installs need code-compliant wire size, ambient
          temperature, and conduit fill—verify with a licensed electrician.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What is the voltage drop formula?
            </dt>
            <dd className="mt-1">
              <strong>VD = 2 × I × R × L</strong> for round-trip single-phase with
              consistent units.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">Why factor of 2?</dt>
            <dd className="mt-1">
              Outbound and return wire both drop voltage in a typical two-wire circuit.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What percent drop is OK?
            </dt>
            <dd className="mt-1">
              Many branch circuits target a few percent or less—check local code and
              load requirements.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Feet or meters for R?
            </dt>
            <dd className="mt-1">
              Use Ω/ft with feet, Ω/m with meters—never mix in one row.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is this three-phase?
            </dt>
            <dd className="mt-1">
              This page is the simple 2×IRL form—not √3 three-phase line drop.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
