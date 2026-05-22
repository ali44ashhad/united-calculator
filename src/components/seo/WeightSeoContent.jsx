import React from "react";
import { Link } from "react-router-dom";

export default function WeightSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Weight calculator: mass × gravity on Earth, Moon, Mars, and more
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Mass</strong> (kg or lb) is not the same as <strong>weight</strong>{" "}
          (a force). On any planet, <strong>W = m × g</strong> with{" "}
          <strong>g in m/s²</strong>. This <strong>weight calculator</strong> converts
          pounds to kilograms when needed, applies surface gravity for{" "}
          <strong>Earth, Moon, Mars, Jupiter, Venus, or Mercury</strong>, and reports
          weight in <strong>newtons</strong> plus an approximate{" "}
          <strong>lbf</strong> readout.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>weight on moon calculator</strong>,{" "}
          <strong>W equals mg</strong>. Long-tail:{" "}
          <strong>how much would 70 kg weigh on Mars</strong>,{" "}
          <strong>compare weight on Jupiter vs Earth</strong>,{" "}
          <strong>convert mass to weight in newtons</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Weight (N) = mass (kg) × g (m/s²)

Earth g ≈ 9.81    Moon g ≈ 1.62
Mars g ≈ 3.71     Jupiter g ≈ 24.79

Example: 70 kg on Earth → 70 × 9.81 ≈ 686.7 N`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need <strong>mass from size and density</strong>? The{" "}
          <Link
            to="/other/mass-calculator"
            className="text-primary hover:underline"
          >
            Mass Calculator
          </Link>{" "}
          uses ρ × V. For <strong>material density</strong> lookups, see the{" "}
          <Link
            to="/other/density-calculator"
            className="text-primary hover:underline"
          >
            Density Calculator
          </Link>
          . <strong>Molar mass in chemistry</strong> (grams per mole) is the{" "}
          <Link
            to="/other/molecular-weight-calculator"
            className="text-primary hover:underline"
          >
            Molecular Weight Calculator
          </Link>
          —different from everyday W = mg.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Not a bathroom scale</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Scales at home show <strong>mass in lb or kg</strong> calibrated for Earth.
          This page is the physics force in <strong>newtons</strong> on other worlds.
          For healthy target body mass ranges, see health category ideal/healthy weight
          tools—not the same calculation.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How is weight calculated?
            </dt>
            <dd className="mt-1">
              Multiply mass in kilograms by surface gravity g in m/s².
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Mass vs weight?
            </dt>
            <dd className="mt-1">
              Mass is matter (kg). Weight is gravitational force (N).
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why is Moon weight lower?
            </dt>
            <dd className="mt-1">
              Moon g ≈ 1.62 m/s², about 16% of Earth&apos;s—so the same mass weighs far less.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I enter pounds?
            </dt>
            <dd className="mt-1">
              Yes—lbs convert to kg before applying W = mg.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What unit is weight?
            </dt>
            <dd className="mt-1">
              SI: <strong>newton (N)</strong>. We also show approximate lbf for reference.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
