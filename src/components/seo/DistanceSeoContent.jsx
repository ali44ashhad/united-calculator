import React from "react";
import { Link } from "react-router-dom";

export default function DistanceSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Distance calculator: speed × time (d = v × t)
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>distance calculator</strong> to find how far you
          travel at constant <strong>speed</strong> over a given{" "}
          <strong>time</strong>. Enter <strong>speed in km/h</strong> and{" "}
          <strong>time in hours</strong>; the tool applies{" "}
          <strong>distance = speed × time</strong> and shows kilometers, meters,
          and helpful unit conversions.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is <strong>not</strong> the coordinate distance formula between
          two (x, y) points. For running pace from distance and time, use the{" "}
          <Link
            to="/health/pace-calculator"
            className="text-primary hover:underline"
          >
            Pace Calculator
          </Link>
          . For general speed conversions, try the{" "}
          <Link
            to="/other/speed-calculator"
            className="text-primary hover:underline"
          >
            Speed Calculator
          </Link>
          . For straight-line geometry between coordinates, see the{" "}
          <Link
            to="/geometry/pythagorean-theorem-calculator"
            className="text-primary hover:underline"
          >
            Pythagorean Theorem Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a distance calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>speed–time distance calculator</strong> solves uniform-motion
          problems: if you maintain one speed for a duration, how many kilometers
          do you cover? It is the same <strong>d = v × t</strong> relationship taught
          in physics and driver education.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Distance (km)</strong> = speed (km/h) × time (h)
          </li>
          <li>
            <strong>Meters</strong> and <strong>minutes</strong> in results
          </li>
          <li>
            <strong>m/s</strong> conversion for speed
          </li>
          <li>
            Constant speed assumption
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
              <li>d = speed × time (km/h, hours)</li>
              <li>Distance in km and m</li>
              <li>Time in hours and minutes</li>
              <li>Speed in km/h and m/s</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>2D/3D point distance formula</li>
              <li>Acceleration or changing speed</li>
              <li>Fuel consumption</li>
              <li>Map routing or GPS paths</li>
              <li>Miles per hour input (convert first)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Distance formula (speed &amp; time)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Distance = Speed × Time

Units on this page:
  Speed → km/h (kilometers per hour)
  Time  → hours (h)
  Distance → kilometers (km)

Example: 60 km/h for 2 hours
  d = 60 × 2 = 120 km

30 minutes = 0.5 hours
  d = 80 × 0.5 = 40 km`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Speed–time distance vs coordinate distance
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Travel distance</strong> (this page) multiplies how fast you move
          by how long you move. <strong>Coordinate distance</strong> measures the
          straight segment between two points in a plane or space using differences
          in x, y (and z). Do not mix the two problem types on one worksheet.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this distance calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter average speed in km/h.</li>
          <li>Enter elapsed time in hours (decimals for minutes).</li>
          <li>Read distance in km and meters.</li>
          <li>Use minutes and m/s rows to cross-check units.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Speed:</strong> 90 km/h · <strong>Time:</strong> 1.5 hours
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Distance = 90 × 1.5 = <strong>135 km</strong>
            </li>
            <li>135 km = 135,000 m</li>
            <li>1.5 h = 90 minutes</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Converting time for this calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Because time must be in <strong>hours</strong>, divide minutes by 60:{" "}
          <strong>20 min = 20÷60 ≈ 0.333 h</strong>,{" "}
          <strong>45 min = 0.75 h</strong>. The summary converts your hour entry
          back to minutes for verification.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (distance from speed)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you calculate distance from speed and time?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Multiply speed by time</strong> when units align: km/h ×
              hours = km.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the distance between two points?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Coordinate distance uses √[(x₂−x₁)² + (y₂−y₁)²]. This tool uses{" "}
              <strong>d = v × t</strong> for motion.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my speed is in mph?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Convert to km/h first (1 mph ≈ 1.609 km/h) with the{" "}
              <Link
                to="/other/speed-calculator"
                className="text-primary hover:underline"
              >
                Speed Calculator
              </Link>{" "}
              or{" "}
              <Link
                to="/other/conversion-calculator"
                className="text-primary hover:underline"
              >
                Conversion Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does acceleration affect the result?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This calculator assumes <strong>constant speed</strong>. Changing
              speed needs integration or kinematic equations—not covered here.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I enter 30 minutes?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              As <strong>0.5</strong> hours in the time field.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can distance be zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—zero speed or zero time gives <strong>0 km</strong> distance.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this different from a pace calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Pace focuses on min/km for runners. This page is the basic physics
              identity <strong>distance = speed × time</strong> with km/h.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this distance calculator for road trips?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Useful for rough estimates when average speed is steady. Real trips
              include stops, traffic, and route length ≠ straight-line coordinate
              distance.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
