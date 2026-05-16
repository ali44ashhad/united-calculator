import React from "react";
import { Link } from "react-router-dom";

export default function RightTriangleSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Right triangle calculator: sides, area, and perimeter
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>right triangle</strong> has one 90° angle. Given any two
          side lengths, this <strong>right triangle calculator</strong> uses{" "}
          <strong>a² + b² = c²</strong> to find the third side, then reports{" "}
          <strong>area</strong> (½ × leg × leg) and <strong>perimeter</strong>{" "}
          (sum of all three sides).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For the same Pythagorean solve without area or perimeter, see the{" "}
          <Link
            to="/geometry/pythagorean-theorem-calculator"
            className="text-primary hover:underline"
          >
            Pythagorean Theorem Calculator
          </Link>
          . For general triangles, use the{" "}
          <Link
            to="/geometry/triangle-calculator"
            className="text-primary hover:underline"
          >
            Triangle Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Missing side from a² + b² = c²
Area = ½ × leg a × leg b
Perimeter = a + b + c`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter two known sides (legs or one leg plus hypotenuse).</li>
          <li>Leave the unknown side blank.</li>
          <li>Read the missing length, area, and perimeter in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            With <strong>legs 3 and 4</strong>, the hypotenuse is{" "}
            <strong>5</strong>, area is <strong>6</strong>, and perimeter is{" "}
            <strong>12</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter the hypotenuse and one leg?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Leave the missing leg blank and enter the hypotenuse in the c
              field. The hypotenuse must be longer than the known leg.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this compute angles?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—this page solves side lengths, area, and perimeter only, not
              acute or obtuse angles.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
