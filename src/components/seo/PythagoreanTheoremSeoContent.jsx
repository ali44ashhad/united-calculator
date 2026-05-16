import React from "react";
import { Link } from "react-router-dom";

export default function PythagoreanTheoremSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Pythagorean theorem calculator for right triangles
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In any right triangle, the square of the hypotenuse equals the sum of
          the squares of the legs: <strong>a² + b² = c²</strong>. This{" "}
          <strong>Pythagorean theorem calculator</strong> finds the missing side
          when you know the other two—enter values for a, b, and c, and leave
          exactly one blank.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For more triangle tools, try the{" "}
          <Link
            to="/geometry/right-triangle-calculator"
            className="text-primary hover:underline"
          >
            Right Triangle Calculator
          </Link>{" "}
          or the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">How it solves</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`If c is unknown:  c = √(a² + b²)
If a is unknown:  a = √(c² − b²)   (requires c > b)
If b is unknown:  b = √(c² − a²)   (requires c > a)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter two known side lengths.</li>
          <li>Leave the third field empty.</li>
          <li>Read the missing side label and length in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A classic <strong>3-4-5</strong> triangle: with <strong>a = 3</strong>{" "}
            and <strong>b = 4</strong>, the hypotenuse is{" "}
            <strong>c = √(9 + 16) = 5</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Which side is the hypotenuse?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Side c is the hypotenuse—the longest side, opposite the right
              angle. It must be larger than either leg when you solve for a or b.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this work for non-right triangles?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. The Pythagorean theorem applies only to right triangles. Other
              triangle types need different rules (law of cosines, etc.).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
