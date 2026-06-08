import React from "react";
import { Link } from "react-router-dom";

export default function CircleSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Circle calculator: area, circumference &amp; diameter from radius
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>circle calculator</strong> to find{" "}
          <strong>area</strong>, <strong>circumference</strong>, and{" "}
          <strong>diameter</strong> from one input—the <strong>radius (r)</strong>
          . It applies <strong>A = πr²</strong>, <strong>C = 2πr</strong>, and{" "}
          <strong>d = 2r</strong> with π from standard floating-point math.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For area of mixed 2D shapes, try the{" "}
          <Link
            to="/math/area-calculator"
            className="text-primary hover:underline"
          >
            Area Calculator
          </Link>{" "}
          (circle mode included). For 3D sphere volume, see the{" "}
          <Link
            to="/geometry/volume-calculator"
            className="text-primary hover:underline"
          >
            Volume Calculator
          </Link>
          . For right-triangle geometry, use the{" "}
          <Link
            to="/geometry/right-triangle-calculator"
            className="text-primary hover:underline"
          >
            Right Triangle Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a circle calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>circle measurement calculator</strong> turns radius into the
          three most requested values: <strong>area</strong> (space inside),{" "}
          <strong>circumference</strong> (perimeter length), and{" "}
          <strong>diameter</strong> (width through the center).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Area</strong> — π × r² (square units)
          </li>
          <li>
            <strong>Circumference</strong> — 2π × r
          </li>
          <li>
            <strong>Diameter</strong> — 2 × r
          </li>
          <li>
            <strong>Radius input</strong> — single field
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this circle calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Area from radius</li>
              <li>Circumference from radius</li>
              <li>Diameter from radius</li>
              <li>Formula labels in results</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Diameter or circumference as input</li>
              <li>Sector or arc length</li>
              <li>Sphere surface area / volume</li>
              <li>Unit conversion between cm and inches</li>
              <li>Exact π fraction mode (22/7)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Circle formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Diameter:      d = 2r
Circumference: C = 2πr = πd
Area:          A = πr² = π(d/2)²

Example: r = 5
  d = 10
  C ≈ 31.416 units
  A ≈ 78.54 square units`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Radius vs diameter vs circumference
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Radius</strong> is center to edge. <strong>Diameter</strong> is
          twice that, across the circle. <strong>Circumference</strong> is the
          distance around—like measuring a wheel rim. If you know diameter D,
          radius is <strong>r = D ÷ 2</strong> before using this tool.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this circle calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter radius in your chosen unit (cm, m, in, etc.).</li>
          <li>Read area in square units and circumference in the same linear unit.</li>
          <li>Confirm diameter equals 2 × radius.</li>
          <li>Keep one unit system—do not mix cm radius with inch expectations.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Radius:</strong> 7 units
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Diameter = 2 × 7 = <strong>14</strong></li>
            <li>Circumference = 2π × 7 ≈ <strong>43.98</strong> units</li>
            <li>Area = π × 7² ≈ <strong>153.94</strong> square units</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Circle area in real-world problems
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Circle area</strong> appears in pizza size comparisons, sprinkler
          coverage, pipe cross-sections, and lens apertures.{" "}
          <strong>Circumference</strong> matters for fences around round gardens and
          gear tooth spacing estimates. Always measure radius from the true center.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (circle math)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you calculate the area of a circle?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>A = πr²</strong>. Square the radius, multiply by π.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the circumference formula?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>C = 2πr</strong> or <strong>C = πd</strong> if you know
              diameter.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter diameter instead of radius?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This page takes <strong>radius only</strong>. Use r = diameter ÷ 2.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you find radius from area?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>r = √(A ÷ π)</strong>. This calculator goes forward from r to
              A, not reverse.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is π in this calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Standard <strong>Math.PI</strong> (about 3.141592653589793), not the
              22/7 approximation.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are results exact?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Floating-point π gives practical decimals. For symbolic π in homework,
              keep answers in terms of π when your teacher requires it.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is a semicircle half the area?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A <strong>semicircle</strong> area is <strong>½πr²</strong>—half the
              full circle. This tool reports full circle area only.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this circle calculator only for students?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Students, DIYers, and anyone sizing round objects can use the same
              formulas—verify critical engineering measurements independently.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
