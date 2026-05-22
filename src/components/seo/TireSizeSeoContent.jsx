import React from "react";
import { Link } from "react-router-dom";

export default function TireSizeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Tire size calculator: sidewall, diameter &amp; circumference
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Tire labels like <strong>205/55R16</strong> encode width in millimeters,
          sidewall as a <strong>percent of width</strong>, and <strong>rim size in
          inches</strong>. This <strong>tire size calculator</strong> computes{" "}
          <strong>sidewall height (mm)</strong>, <strong>overall diameter (in)</strong>,
          <strong>circumference</strong>, and approximate{" "}
          <strong>revolutions per mile</strong>—handy when upsizing wheels or checking
          speedometer error.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>tire size calculator</strong>,{" "}
          <strong>205/55R16 diameter</strong>. Long-tail:{" "}
          <strong>how to calculate tire sidewall from aspect ratio</strong>,{" "}
          <strong>overall tire diameter inches calculator</strong>,{" "}
          <strong>plus one tire size diameter comparison</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Sidewall (mm) = width × (aspect ratio ÷ 100)
Overall dia (in) = (2 × sidewall + rim×25.4) ÷ 25.4
Circumference (in) = π × overall diameter
Rev/mile ≈ 63,360 ÷ circumference

Example: 205/55R16 → ~24.88 in diameter`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          On the road, tire size ties to <strong>odometer and MPG</strong>—see the{" "}
          <Link
            to="/other/mileage-calculator"
            className="text-primary hover:underline"
          >
            Mileage Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/other/gas-mileage-calculator"
            className="text-primary hover:underline"
          >
            Gas Mileage Calculator
          </Link>
          . For <strong>distance over time</strong>, the{" "}
          <Link
            to="/other/speed-calculator"
            className="text-primary hover:underline"
          >
            Speed Calculator
          </Link>{" "}
          handles km/h from length and hours.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Plus-sizing tip</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Run two sizes through this page and compare <strong>overall diameter</strong>.
          Many drivers aim within about <strong>±3%</strong> of factory diameter to
          limit speedometer drift and ABS quirks—verify fitment and load rating with a
          tire shop.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What does 205/55R16 mean?
            </dt>
            <dd className="mt-1">
              205 mm wide, sidewall 55% of 205 mm, radial (R), 16 in rim.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How is sidewall height calculated?
            </dt>
            <dd className="mt-1">
              Width × aspect ratio ÷ 100, in millimeters.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is overall diameter?
            </dt>
            <dd className="mt-1">
              Twice the sidewall (mm) plus rim (converted to mm), divided by 25.4 for
              inches.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why list revolutions per mile?
            </dt>
            <dd className="mt-1">
              Smaller diameter tires rotate more times per mile—affecting speedo and
              gearing slightly.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does tread width change diameter?
            </dt>
            <dd className="mt-1">
              This math uses nominal width and aspect ratio; actual mounted height can
              vary by brand and pressure.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
