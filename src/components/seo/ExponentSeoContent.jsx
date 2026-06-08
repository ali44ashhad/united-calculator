import React from "react";
import { Link } from "react-router-dom";

export default function ExponentSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Exponent calculator: compute b^e (powers &amp; exponents)
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>exponent calculator</strong> to evaluate{" "}
          <strong>powers</strong>—<strong>base raised to exponent</strong>{" "}
          (<strong>b^e</strong>). Enter any real <strong>base</strong> and{" "}
          <strong>exponent</strong> for results like <strong>2^3 = 8</strong>,{" "}
          <strong>16^0.5 = 4</strong>, or <strong>2^-3 = 0.125</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For nth roots as the inverse idea, try the{" "}
          <Link
            to="/math/root-calculator"
            className="text-primary hover:underline"
          >
            Root Calculator
          </Link>
          . For logarithms, see the{" "}
          <Link
            to="/math/log-calculator"
            className="text-primary hover:underline"
          >
            Log Calculator
          </Link>
          . For huge integer powers, use the{" "}
          <Link
            to="/math/big-number-calculator"
            className="text-primary hover:underline"
          >
            Big Number Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/math/scientific-calculator"
            className="text-primary hover:underline"
          >
            Scientific Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is an exponent?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>exponent</strong> (power) counts how you scale a{" "}
          <strong>base</strong>. Positive integer exponents repeat multiplication:{" "}
          <strong>a^n = a × a × … × a</strong> (n times). This{" "}
          <strong>power calculator</strong> uses the general rule{" "}
          <strong>b^e</strong> for decimals and negatives too.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>b^e</strong> result
          </li>
          <li>
            <strong>Negative exponents</strong> → reciprocals
          </li>
          <li>
            <strong>Fractional exponents</strong> → roots
          </li>
          <li>
            Scientific notation for very large/small outputs
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this exponent calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>b^e for real inputs</li>
              <li>Negative &amp; fractional exponents</li>
              <li>Power notation display</li>
              <li>Reciprocal hint for negative powers</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Complex imaginary results</li>
              <li>Modular exponentiation (crypto)</li>
              <li>Step-by-step exponent rules proofs</li>
              <li>Arbitrary-precision decimals beyond JS limits</li>
              <li>Log base conversion UI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Exponent rules</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`b^e × b^f = b^(e+f)
(b^e)^f = b^(e×f)
b^0 = 1  (b ≠ 0)
b^(-n) = 1 / b^n
b^(1/n) = nth root of b

Examples:
  2^3 = 8
  9^0.5 = √9 = 3
  2^(-3) = 1/8 = 0.125
  (-2)^4 = 16`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Fractional &amp; negative exponents
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>fractional exponent</strong> is a root:{" "}
          <strong>a^(1/2) = √a</strong>. A <strong>negative exponent</strong> flips
          to the denominator: <strong>5^-2 = 1/25</strong>. Negative bases with
          non-integer exponents are not real numbers—this tool reports an error.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this exponent calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the base b.</li>
          <li>Enter the exponent e (positive, negative, or decimal).</li>
          <li>Read b^e in the result row and power notation.</li>
          <li>For roots, use exponent 1/n (e.g. cube root → exponent 1/3).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>2^10</strong> = <strong>1,024</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>27^(1/3)</strong> = <strong>3</strong> (cube root)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>10^(-2)</strong> = <strong>0.01</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Powers vs logarithms vs roots
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Exponentiation</strong> scales a number. <strong>Logarithms</strong>{" "}
          undo exponentiation (find the exponent). <strong>Roots</strong> are
          fractional powers. Pick the tool that matches which value you know and
          which you need.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (exponents)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is an exponent?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The power you raise a base to—<strong>b^e</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate 2 to the power of 8?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Base <strong>2</strong>, exponent <strong>8</strong> →{" "}
              <strong>256</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does a negative exponent mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>b^-n = 1/b^n</strong>—the reciprocal of the positive power.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do fractional exponents work?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>b^(p/q)</strong> is the qth root of b^p. Example:{" "}
              <strong>8^(2/3) = (∛8)² = 4</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is (-4)^0.5 undefined here?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Square root of a negative is not a real number—result is NaN in
              real-valued math.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is anything to the zero power?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For <strong>b ≠ 0</strong>, <strong>b^0 = 1</strong>. Zero to zero
              is debated; follow your course convention.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can this handle very large exponents?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Within JavaScript number limits. Extreme values may show infinity or
              scientific notation—use the{" "}
              <Link
                to="/math/big-number-calculator"
                className="text-primary hover:underline"
              >
                Big Number Calculator
              </Link>{" "}
              for some integer cases.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this exponent calculator the same as a power function?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes for real inputs—it evaluates the power function f(x)=b^x when
              base b is fixed and exponent is x (or vice versa depending on setup).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
