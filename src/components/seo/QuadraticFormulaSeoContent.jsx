import React from "react";
import { Link } from "react-router-dom";

export default function QuadraticFormulaSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Quadratic formula calculator: solve ax² + bx + c = 0
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>quadratic formula calculator</strong> to find{" "}
          <strong>roots</strong> of <strong>ax² + bx + c = 0</strong>. Enter
          coefficients a, b, and c. Example: a=1, b=−3, c=2 →{" "}
          <strong>x = 1</strong> and <strong>x = 2</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>powers and exponents</strong>, see the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          . For <strong>arithmetic</strong>, try the{" "}
          <Link
            to="/math/basic-calculator"
            className="text-primary hover:underline"
          >
            Basic Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a quadratic?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>quadratic equation</strong> has degree 2: the highest power of
          x is x². Standard form is <strong>ax² + bx + c = 0</strong> with{" "}
          <strong>a ≠ 0</strong>.
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
              <li>Quadratic formula roots</li>
              <li>Discriminant b² − 4ac</li>
              <li>Real and complex roots</li>
              <li>Repeated root when Δ = 0</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Parabola graphing</li>
              <li>Vertex or axis of symmetry</li>
              <li>Completing the square steps</li>
              <li>Cubic or higher-degree equations</li>
              <li>Factoring-only mode</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Quadratic formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`ax² + bx + c = 0   (a ≠ 0)

x = (−b ± √(b² − 4ac)) / (2a)

Discriminant Δ = b² − 4ac
  Δ > 0  → two real distinct roots
  Δ = 0  → one real double root
  Δ < 0  → two complex conjugate roots`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The discriminant</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>b² − 4ac</strong> tells you the nature of roots before you
          compute them. Positive means two different real x-values; zero means one
          repeated real root; negative means complex roots involving i = √(−1).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this quadratic formula calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Write your equation in the form ax² + bx + c = 0.</li>
          <li>Enter a (x² coefficient), b (x coefficient), and c (constant).</li>
          <li>Read discriminant, root type, and both solutions.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example equations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>x² − 3x + 2 = 0</strong> → a=1, b=−3, c=2 → x = 1, 2
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>x² + 4x + 4 = 0</strong> → Δ = 0 → x = −2 (double root)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>x² + 1 = 0</strong> → Δ &lt; 0 → x = ±i
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (quadratic formula)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if a is zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The equation is <strong>linear</strong>, not quadratic. Solve bx + c
              = 0 as x = −c/b (when b ≠ 0).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can coefficients be negative?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—a, b, and c can be any real numbers except a = 0.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What are complex roots?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              When Δ &lt; 0, roots have form <strong>p ± qi</strong> where i² = −1.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is factoring the same as the quadratic formula?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Both find roots; factoring works when the polynomial splits nicely.
              The quadratic formula always applies for a ≠ 0.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many roots does a quadratic have?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Always <strong>two</strong> in the complex number system—either two
              real (distinct or equal) or a complex conjugate pair.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this show the vertex of the parabola?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—vertex is at x = −b/(2a). This page focuses on zeros (roots) only.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my equation equals something other than 0?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Rearrange to standard form: move all terms to one side so the other
              side is 0.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I solve cubics here?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—this tool is for <strong>degree-2</strong> equations only.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
