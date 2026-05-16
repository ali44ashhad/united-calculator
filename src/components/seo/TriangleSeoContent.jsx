import React from "react";
import { Link } from "react-router-dom";

export default function TriangleSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Triangle calculator: find area with base and height, perimeter from
          three sides
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Triangles show up everywhere in geometry class—from roof pitches to
          land surveys. This <strong>free triangle calculator online</strong>{" "}
          answers two of the most common homework questions in one place:{" "}
          <strong>how to find the area of a triangle</strong> when you know a{" "}
          <strong>base</strong> and <strong>height</strong>, and{" "}
          <strong>how to calculate the perimeter of a triangle</strong> when you
          know all <strong>three side lengths</strong>. Enter your numbers, and
          the summary updates instantly with area in square units and perimeter
          in linear units.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The tool does <strong>not</strong> solve angles, Heron’s formula-only
          problems, or SSS/SAS/ASA unknowns—it focuses on the classic{" "}
          <strong>½ × base × height</strong> area rule and simple perimeter
          addition. For a 90° triangle with hypotenuse math, use the{" "}
          <Link
            to="/geometry/right-triangle-calculator"
            className="text-primary hover:underline"
          >
            Right Triangle Calculator
          </Link>
          . For missing sides with a² + b² = c², see the{" "}
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
          Triangle area formula (base times height)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Area = ½ × base × height

base   = length of one side you choose as the base
height = perpendicular distance from that base to the opposite vertex`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The height must be <strong>perpendicular</strong> to the base—not a
          slanted side length. That is why many worksheets draw a dashed
          altitude line. If you only know three sides and no height, you would
          need Heron’s formula or trigonometry on a different tool; this page
          expects you to supply base and height directly for area.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Example:</strong> base 10 and height 5 give area = ½ × 10 × 5
          = <strong>25 square units</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Triangle perimeter calculator (three sides)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Perimeter = side A + side B + side C`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Perimeter is the distance around the triangle—the fence length if you
          walk all three edges. The calculator checks the{" "}
          <strong>triangle inequality</strong>: the sum of any two sides must be
          greater than the third. Otherwise the lengths cannot form a real
          triangle (for example, 2, 3, and 10 would fail).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Example:</strong> sides 10, 6, and 8 have perimeter{" "}
          <strong>24 units</strong>. Note these are the same numbers as a 6-8-10
          right triangle, but area here still comes from whatever base and height
          you enter, not from the sides alone.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this triangle area and perimeter calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Under <strong>For area</strong>, type the base length and the
            perpendicular height.
          </li>
          <li>
            Under <strong>For perimeter</strong>, type side A, side B, and side
            C. Use consistent units (all cm or all inches).
          </li>
          <li>
            Read <strong>Area</strong> and <strong>Perimeter</strong> in the
            summary. Invalid or impossible triangles show an error message.
          </li>
          <li>
            Click <strong>Reset</strong> to restore the default 10-5 base/height
            and 10-6-8 sides example.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Area vs perimeter: what each number tells you
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Area</strong> measures space inside the triangle (tiling,
          paint on a flat triangular region). <strong>Perimeter</strong> measures
          the boundary length (trim, wire, framing). A thin long triangle can
          have a small area but a large perimeter. This calculator computes both
          independently: area never derives from the three sides on this page,
          and perimeter never uses base or height.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common triangle types and what this tool covers
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Scalene triangle</strong> — all sides different; perimeter
            still sums the three lengths; area needs your base/height pair.
          </li>
          <li>
            <strong>Isosceles triangle</strong> — two equal sides; same formulas
            apply.
          </li>
          <li>
            <strong>Equilateral triangle</strong> — all sides equal; perimeter is
            3s; area on this page still needs a base/height (for equilateral, h
            = s√3/2 if you want to enter that).
          </li>
          <li>
            <strong>Right triangle</strong> — one 90° angle; for leg/hypotenuse
            solving, use our right triangle and Pythagorean tools linked above.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I find the area of a triangle with base and height?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply base × height, then divide by two: Area = ½bh. Enter those
              values in the calculator and read the area line in the summary.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I find area from three sides only on this page?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Three sides alone require Heron’s formula (s(s−a)(s−b)(s−c)
              under the square root). This tool uses ½ × base × height for area
              and only uses the three sides for perimeter.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the triangle inequality rule?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For sides a, b, c: a + b &gt; c, a + c &gt; b, and b + c &gt; a.
              If any test fails, the sides cannot form a triangle and perimeter
              is not computed.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this calculator find angles?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Angle solving needs inverse trig or law of cosines/sines, which
              are outside this page’s scope.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why might my area and sides not match one triangle?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Base, height, and the three sides are entered separately. The
              calculator does not verify they describe the same physical
              triangle—typical when a worksheet gives area inputs and perimeter
              inputs in different parts of the problem.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What units should I use?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use one system throughout. Meters give square meters for area and
              meters for perimeter. Mixing cm and m without converting produces
              meaningless results.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
