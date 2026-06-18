import React from "react";
import { Link } from "react-router-dom";

export default function RootSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Root calculator: square, cube &amp; nth roots
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>root calculator</strong> to compute{" "}
          <strong>ⁿ√x</strong> (also <strong>x^(1/n)</strong>). Enter the number
          and root degree n. Example: x=16, n=2 → <strong>√16 = 4</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For general <strong>exponents</strong>, see the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          . For <strong>logarithms</strong>, try the{" "}
          <Link
            to="/math/log-calculator"
            className="text-primary hover:underline"
          >
            Log Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a root?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>nth root</strong> of x is the number that, multiplied by
          itself n times, gives x. The <strong>square root</strong> (n=2) undoes
          squaring; the <strong>cube root</strong> (n=3) undoes cubing.
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
              <li>ⁿ√x for any n ≠ 0</li>
              <li>Square root (n = 2)</li>
              <li>Cube root (n = 3)</li>
              <li>Real-number results &amp; check</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Simplifying √50 → 5√2 by hand</li>
              <li>Complex roots (e.g. √−1 = i)</li>
              <li>Principal vs all n roots listed</li>
              <li>Rationalizing denominators</li>
              <li>Surd addition/subtraction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">nth root formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`ⁿ√x = x^(1/n)

√16 = 16^(1/2) = 4
∛27 = 27^(1/3) = 3
⁴√81 = 81^(1/4) = 3`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Negative numbers and even roots
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Even roots</strong> of negative numbers (like √−4) are not{" "}
          <strong>real</strong>. <strong>Odd roots</strong> of negatives are real:
          ∛(−8) = −2.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this root calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the number x (radicand).</li>
          <li>Enter root degree n (2 for square, 3 for cube).</li>
          <li>Read the result and the check (result raised to n).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example roots</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>√25</strong> → x=25, n=2 → <strong>5</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>∛64</strong> → x=64, n=3 → <strong>4</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>∛(−27)</strong> → x=−27, n=3 → <strong>−3</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (roots)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the difference between √x and x²?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              √x is the <strong>inverse</strong> of squaring for non-negative x:
              (√x)² = x.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can n be a decimal?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes for non-negative x—e.g. x^(1/2.5) is defined. Negative x needs
              integer odd n for a real answer.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does the check not match exactly?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Floating-point rounding—very close values are normal in decimal
              roots.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is ⁿ√x the same as x^(1/n)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—this calculator uses <strong>x^(1/n)</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do roots relate to exponents?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Roots are fractional exponents. See the{" "}
              <Link
                to="/math/exponent-calculator"
                className="text-primary hover:underline"
              >
                Exponent Calculator
              </Link>{" "}
              for x^y in general.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What about √(x² + y²)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter the expression value as x—this tool does not parse formulas
              inside the radical.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does √x have two answers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Equations like x² = 9 have ±3, but the <strong>principal</strong>{" "}
              square root √9 is <strong>3</strong>. This page shows the principal
              real root.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can n be negative?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Mathematically x^(1/n) for negative n is related to 1/(x^|n|)—unusual
              but computed if x allows it and n ≠ 0.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
