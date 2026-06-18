import React from "react";
import { Link } from "react-router-dom";

export default function SlopeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Slope calculator: rise over run
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>slope calculator</strong> to find the{" "}
          <strong>slope m</strong> of a line through two points{" "}
          <strong>(x₁, y₁)</strong> and <strong>(x₂, y₂)</strong>. Example: (0, 0)
          and (4, 2) → <strong>m = ½</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>distance</strong> between points, see the{" "}
          <Link
            to="/math/distance-calculator"
            className="text-primary hover:underline"
          >
            Distance Calculator
          </Link>
          . For <strong>quadratic roots</strong>, try the{" "}
          <Link
            to="/math/quadratic-formula-calculator"
            className="text-primary hover:underline"
          >
            Quadratic Formula Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is slope?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Slope</strong> measures how steep a line is:{" "}
          <strong>rise over run</strong>, or change in y divided by change in x.
          Positive slope goes uphill left to right; negative goes downhill.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>m = (y₂ − y₁) / (x₂ − x₁)</li>
              <li>Rise Δy and run Δx</li>
              <li>Angle with x-axis</li>
              <li>Horizontal / vertical cases</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Enter y = mx + b alone</li>
              <li>Line graph</li>
              <li>Point-slope or standard form solver</li>
              <li>Parallel/perpendicular line builder</li>
              <li>3D or vector slope</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Slope formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`m = (y₂ − y₁) / (x₂ − x₁) = rise / run

(0, 0) and (4, 2):
m = (2 − 0) / (4 − 0) = 2/4 = 0.5

Vertical line (x₂ = x₁): slope undefined
Horizontal line (y₂ = y₁): m = 0`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this slope calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter x₁ and y₁ for the first point.</li>
          <li>Enter x₂ and y₂ for the second point.</li>
          <li>Read slope m, rise, run, and angle in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example slopes</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>(1, 2) and (5, 10)</strong> → m = 2
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>(3, 4) and (7, 4)</strong> → m = 0 (horizontal)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>(2, 1) and (2, 9)</strong> → undefined (vertical)
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (slope)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does negative slope mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The line falls as x increases—y decreases left to right.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can slope be a fraction?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—e.g. rise 3 and run 4 gives <strong>m = 3/4</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does point order matter?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—(y₂−y₁)/(x₂−x₁) equals (y₁−y₂)/(x₁−x₂).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is slope related to y = mx + b?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>m</strong> is the slope in slope-intercept form; this tool
              finds m from two points.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the angle shown?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The angle between the line and the positive x-axis, in degrees.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter an equation instead?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not on this page—pick two points on the line, or read m directly if
              the equation is already y = mx + b.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do slope and distance differ?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Slope is steepness; distance is segment length. Use the{" "}
              <Link
                to="/math/distance-calculator"
                className="text-primary hover:underline"
              >
                Distance Calculator
              </Link>{" "}
              for length.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if both points are the same?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter two <strong>different</strong> points—one location does not
              define a unique line.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
