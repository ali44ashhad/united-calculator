import React from "react";
import { Link } from "react-router-dom";

export default function MassSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Mass calculator: kilograms from density and volume (ρ × V)
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In physics and materials work, <strong>mass</strong> is how much matter
          is in an object—not the same as <strong>weight</strong> on a bathroom
          scale. When you know <strong>bulk density</strong> (mass per unit
          volume) and the <strong>volume</strong> of a uniform block or fluid,
          one multiplication gives mass:{" "}
          <strong>m = ρ × V</strong>. This <strong>free mass calculator online</strong>{" "}
          expects <strong>density in kg/m³</strong> and{" "}
          <strong>volume in m³</strong>, then reports <strong>mass in kg</strong>{" "}
          plus <strong>grams</strong> and <strong>metric tons</strong> for quick
          comparisons.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail searches like <strong>mass calculator</strong>,{" "}
          <strong>density volume mass</strong>, and <strong>calculate mass from
          density</strong> land here. Long-tail queries—{" "}
          <strong>how to find mass from density and volume in kg</strong>,{" "}
          <strong>water mass 1 cubic meter calculator</strong>,{" "}
          <strong>material mass calculator kg per cubic meter</strong>—use the
          same formula with consistent units.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`mass (kg) = density (kg/m³) × volume (m³)

Example (water, ~1000 kg/m³):
ρ = 1000 kg/m³,  V = 1 m³  →  m = 1000 kg = 1 t = 1,000,000 g`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Mass vs weight vs unit conversion
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page is <strong>not</strong> a pounds-to-kilograms converter. It
          solves <strong>ρ × V</strong> in SI units. If you have liters, divide
          by 1000 to get m³ (1 L = 0.001 m³). If you need the reverse—mass and
          volume given, find density—open the{" "}
          <Link
            to="/other/density-calculator"
            className="text-primary hover:underline"
          >
            Density Calculator
          </Link>
          . For general unit swaps, try the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/density-calculator"
              className="text-primary hover:underline"
            >
              Density Calculator
            </Link>{" "}
            — ρ = mass ÷ volume.
          </li>
          <li>
            <Link
              to="/other/gravel-calculator"
              className="text-primary hover:underline"
            >
              Gravel Calculator
            </Link>{" "}
            — volume and bulk density for aggregate mass estimates.
          </li>
          <li>
            <Link
              to="/geometry/volume-calculator"
              className="text-primary hover:underline"
            >
              Volume Calculator
            </Link>{" "}
            — find m³ for common shapes before multiplying by density.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Why must volume be in cubic meters?
            </dt>
            <dd className="mt-1">
              Density is defined per cubic meter in this tool. Mixing cm³ or
              liters without converting will give the wrong mass by orders of
              magnitude.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does temperature change the result?
            </dt>
            <dd className="mt-1">
              Density changes with temperature (water expands when heated). Use a
              density value measured or tabulated for your conditions.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
