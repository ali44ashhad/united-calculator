import React from "react";
import { Link } from "react-router-dom";

export default function AreaSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Area calculator: find area of rectangle, triangle, circle &amp; more
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>area calculator</strong> to compute the{" "}
          <strong>area of common 2D shapes</strong>—<strong>rectangle</strong>,{" "}
          <strong>triangle</strong>, <strong>circle</strong>,{" "}
          <strong>parallelogram</strong>, and <strong>trapezoid</strong>. Pick a
          shape, enter dimensions in the <strong>same units</strong>, and get area
          in <strong>square units</strong> (cm², m², ft², etc.).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For circle radius, diameter, and circumference together, try the{" "}
          <Link
            to="/math/circle-calculator"
            className="text-primary hover:underline"
          >
            Circle Calculator
          </Link>
          . For triangle perimeter from three sides, see the{" "}
          <Link
            to="/geometry/triangle-calculator"
            className="text-primary hover:underline"
          >
            Triangle Calculator
          </Link>
          . For 3D solids, use the{" "}
          <Link
            to="/geometry/surface-area-calculator"
            className="text-primary hover:underline"
          >
            Surface Area Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/geometry/volume-calculator"
            className="text-primary hover:underline"
          >
            Volume Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is an area calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>area of shapes calculator</strong> applies standard geometry
          formulas so you do not have to memorize each rule. This page covers
          plane figures where you supply <strong>lengths, bases, height, or
          radius</strong>—not angles-only or three-side Heron problems.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Rectangle / square</strong> — length × width
          </li>
          <li>
            <strong>Triangle</strong> — ½ × base × height
          </li>
          <li>
            <strong>Circle</strong> — π × r²
          </li>
          <li>
            <strong>Parallelogram</strong> — base × perpendicular height
          </li>
          <li>
            <strong>Trapezoid</strong> — ½ × (b₁ + b₂) × height
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this area calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Five plane shapes with labeled inputs</li>
              <li>Formula shown in results</li>
              <li>Circle diameter and circumference extras</li>
              <li>Square note when length = width</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Ellipse, regular polygon, or sector area</li>
              <li>Heron’s formula (three sides, no height)</li>
              <li>Unit conversion between metric and imperial</li>
              <li>3D surface area or volume</li>
              <li>Irregular land-map digitizing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Area formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Rectangle:     A = length × width
Square:        A = side × side  (use Rectangle, equal sides)
Triangle:      A = ½ × base × height
Circle:        A = π × r²
Parallelogram: A = base × height  (height ⊥ base)
Trapezoid:     A = ½ × (base₁ + base₂) × height

Keep one unit system: e.g. all meters → m²`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Base, height, and perpendicular distance
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>triangles, parallelograms, and trapezoids</strong>,{" "}
          <strong>height</strong> means the <strong>perpendicular</strong> distance
          between parallel sides (or from base to opposite vertex)—not a slanted
          side length. Using the wrong segment is a common homework mistake this
          calculator cannot detect; measure the altitude.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this area calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Select the shape that matches your figure.</li>
          <li>Enter every labeled dimension in the same unit.</li>
          <li>Read area in square units and the formula used.</li>
          <li>For circles, check bonus diameter and circumference if helpful.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Rectangle:</strong> length 10, width 6
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A = 10 × 6 = <strong>60 square units</strong>
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Circle:</strong> radius 5
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A = π × 5² ≈ <strong>78.54 square units</strong>
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Trapezoid:</strong> bases 8 and 12, height 5
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A = ½ × (8 + 12) × 5 = <strong>50 square units</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          2D area vs 3D surface area
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Area</strong> here is for flat figures on a plane.{" "}
          <strong>Surface area</strong> sums the areas of faces on a 3D object
          (cube, cylinder, sphere). Do not confuse cm² from this tool with total
          wrapping paper for a box—that needs a{" "}
          <Link
            to="/geometry/surface-area-calculator"
            className="text-primary hover:underline"
          >
            surface area
          </Link>{" "}
          workflow.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (area)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you calculate the area of a rectangle?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Area = length × width</strong>. Same formula for a square
              when both sides are equal.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the area of a triangle formula?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>A = ½ × base × height</strong>, with height perpendicular to
              the base.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you find the area of a circle?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>A = πr²</strong>. Enter radius r; the calculator also shows
              diameter and circumference.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is trapezoid area calculated?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Average the two parallel bases, multiply by height:{" "}
              <strong>½(b₁ + b₂)h</strong>. This page asks for both bases and
              height separately.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I mix cm and meters?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—use one unit throughout. Convert first with a{" "}
              <Link
                to="/other/conversion-calculator"
                className="text-primary hover:underline"
              >
                Conversion Calculator
              </Link>{" "}
              if needed.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does parallelogram area use side length or height?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use <strong>base × perpendicular height</strong>, not base × slanted
              side.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What shapes are not on this page?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Ellipses, sectors, and regular polygons need different formulas. 3D
              problems belong on surface area or volume tools.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this area calculator only for students?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Students, teachers, DIYers, and anyone estimating floor or lawn size
              can use the same formulas—always confirm critical measurements in the
              field.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
