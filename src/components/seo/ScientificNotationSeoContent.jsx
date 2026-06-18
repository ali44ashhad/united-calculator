import React from "react";
import { Link } from "react-router-dom";

export default function ScientificNotationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Scientific notation converter
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>scientific notation calculator</strong> to convert{" "}
          <strong>standard numbers</strong> to <strong>e-notation</strong> and
          back. Example: <strong>1,230,000 → 1.23e+6</strong> and{" "}
          <strong>1.23e4 → 12,300</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>math expressions</strong>, use the{" "}
          <Link
            to="/math/scientific-calculator"
            className="text-primary hover:underline"
          >
            Scientific Calculator
          </Link>
          . For <strong>powers</strong>, see the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          . For <strong>very large integers</strong>, try the{" "}
          <Link
            to="/math/big-number-calculator"
            className="text-primary hover:underline"
          >
            Big Number Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is scientific notation?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Scientific notation</strong> writes a number as{" "}
          <strong>a × 10ⁿ</strong> where 1 ≤ |a| &lt; 10 (or a similar normalized
          form). It compactly shows very large or very small values.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this converter includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Standard → e-notation</li>
              <li>e-notation → standard</li>
              <li>× 10ⁿ display text</li>
              <li>Exponent readout</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Trig / log expression evaluation</li>
              <li>Significant-figure rounding rules</li>
              <li>Engineering notation (×10³ steps only)</li>
              <li>×10^n typed input parsing</li>
              <li>Arbitrary-precision beyond JS floats</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">e-notation format</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`1.23e4   = 1.23 × 10^4 = 12,300
4.5e-6   = 4.5 × 10^-6 = 0.0000045

JavaScript uses e or E with optional + on the exponent.`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Scientific notation vs scientific calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Scientific notation</strong> is a <strong>number format</strong>.
          A <strong>scientific calculator</strong> computes sin, log, and powers.
          This page only converts formats.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this scientific notation calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Top field: enter a standard number to get e-notation.</li>
          <li>Bottom field: enter e-notation to get a decimal.</li>
          <li>Both convert live; use either or both at once.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example conversions</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>0.00056</strong> → about <strong>5.6e-4</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>602000000000000000000000</strong> → about{" "}
            <strong>6.02e+23</strong> (float limits may apply)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>7.89e-3</strong> → <strong>0.00789</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (scientific notation)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does the e mean in 1.2e5?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>e</strong> means “times 10 to the power”—1.2e5 = 1.2 × 10⁵ =
              120,000.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter 3 × 10^8?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For reverse conversion use <strong>3e8</strong>. Output shows ×
              10ⁿ style for readability.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why plus signs in exponents (e+6)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              JavaScript&apos;s <strong>toExponential()</strong> may show e+6 for
              positive exponents—that is normal.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are very large numbers exact?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Values use IEEE double precision—extremely large integers may lose
              the last digits.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I convert negative numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—e.g. <strong>-4.5e2</strong> = −450.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this engineering notation?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not specifically—engineering notation restricts exponents to
              multiples of 3. This tool uses standard scientific e-notation.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              When do I use scientific notation?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              In science for avogadro&apos;s number, astronomical distances, or
              tiny measurements like wavelengths.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this related to exponents?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Scientific notation <strong>is</strong> a power of 10. See the{" "}
              <Link
                to="/math/exponent-calculator"
                className="text-primary hover:underline"
              >
                Exponent Calculator
              </Link>{" "}
              for general a^b.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
