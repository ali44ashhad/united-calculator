import React from "react";
import { Link } from "react-router-dom";

export default function GravelSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Gravel calculator: volume and weight from a simple rectangular pad
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Driveways, shed pads, and garden paths are often quoted as a{" "}
          <strong>rectangle</strong>: length and width in meters, plus how thick
          the stone layer should be. This <strong>free gravel calculator</strong>{" "}
          turns those numbers into <strong>cubic meters of material</strong>,
          then into <strong>kilograms</strong> and <strong>metric tons</strong>{" "}
          once you set a realistic <strong>bulk density</strong> (mass per cubic
          meter). It is a quick planning aid before you call the quarry or read
          the delivery ticket.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Bulk density varies with stone size, angularity, moisture, and how
          tight the lift is compacted—so treat the default (~1600 kg/m³) as a
          middle guess and swap in a value from your supplier if you have it.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Depth in meters = depth_cm ÷ 100
Volume (m³) = length_m × width_m × depth_m
Mass (kg) = volume_m³ × density_kg_per_m³
Metric tons = mass_kg ÷ 1000

Example: 10 m × 5 m × 0.15 m = 7.5 m³
At 1600 kg/m³ → 12,000 kg → 12 t.`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this estimate does not include
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Real sites have slopes, curves, and soft spots that change true
          thickness. Contractors often add <strong>wastage</strong> (for
          spillage) and allow for <strong>compaction</strong> if the spec calls
          for a compacted lift height. Use this page for order-of-magnitude
          checks; verify critical loads and drainage with your plans.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/concrete-calculator"
              className="text-primary hover:underline"
            >
              Concrete Calculator
            </Link>{" "}
            — slab volume and mix for Portland cement projects.
          </li>
          <li>
            <Link
              to="/geometry/volume-calculator"
              className="text-primary hover:underline"
            >
              Volume Calculator
            </Link>{" "}
            — general 3D volumes for boxes, cylinders, and more.
          </li>
          <li>
            <Link
              to="/other/density-calculator"
              className="text-primary hover:underline"
            >
              Density Calculator
            </Link>{" "}
            — mass, volume, and density relationships.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Why is depth in centimeters?
            </dt>
            <dd className="mt-1">
              Many DIY guides specify a layer in cm (for example 10–15 cm of
              base stone). Meters for length and width keep the footprint in
              familiar site units; the tool converts depth to meters internally.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Are “tons” US short tons?
            </dt>
            <dd className="mt-1">
              This page uses <strong>metric tons</strong> (tonnes): 1000 kg. If
              you need short tons, divide kilograms by about 907.185.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I use feet and inches?
            </dt>
            <dd className="mt-1">
              This calculator expects meters and centimeters. Convert feet to
              meters first (1 ft ≈ 0.3048 m), or use a unit conversion page
              before entering values.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
