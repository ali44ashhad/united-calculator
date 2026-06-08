import React from "react";
import { Link } from "react-router-dom";

export default function BigNumberSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Big number calculator: huge integer math without precision loss
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>big number calculator</strong> to add, subtract,
          multiply, and divide <strong>very large integers</strong> that overflow
          normal calculators. It uses <strong>JavaScript BigInt</strong> so digits
          stay exact—ideal for cryptography homework, combinatorics, factorials,
          and other <strong>large whole-number</strong> problems.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For everyday decimals and parentheses, use the{" "}
          <Link
            to="/math/basic-calculator"
            className="text-primary hover:underline"
          >
            Basic Calculator
          </Link>
          . For trig and logarithms, try the{" "}
          <Link
            to="/math/scientific-calculator"
            className="text-primary hover:underline"
          >
            Scientific Calculator
          </Link>
          . For exponent towers and huge powers, see the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a big number calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>large integer calculator</strong> avoids{" "}
          <strong>floating-point rounding</strong>. Regular `Number` types lose
          accuracy around 15–17 significant digits. <strong>BigInt</strong> stores
          arbitrarily long integers (within memory limits) for exact{" "}
          <strong>+ − × ÷</strong> on whole numbers.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Addition &amp; subtraction</strong> of huge integers
          </li>
          <li>
            <strong>Multiplication</strong> without scientific notation rounding
          </li>
          <li>
            <strong>Integer division</strong> with quotient and remainder
          </li>
          <li>
            <strong>Digit counts</strong> for inputs and results
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>BigInt +, −, ×, ÷</li>
              <li>Remainder on division</li>
              <li>Negative integers</li>
              <li>Very long digit strings</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Decimal fractions</li>
              <li>Comma-separated thousands input</li>
              <li>Square roots or nth roots of big ints</li>
              <li>Modular exponentiation (RSA) UI</li>
              <li>Arbitrary-precision decimals (BigDecimal)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Big integer operations
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Addition:       a + b
Subtraction:    a − b
Multiplication: a × b
Division:       quotient = a ÷ b  (integer, truncates toward zero)
                remainder = a mod b

Example division:
  17 ÷ 5 → quotient 3, remainder 2

Input rules: whole integers only (optional leading −)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why normal calculators fail on huge numbers
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          JavaScript <strong>Number</strong> uses IEEE-754 doubles. Values like{" "}
          <strong>999999999999999999999</strong> cannot be stored exactly—they round
          to the nearest representable float. <strong>BigInt</strong> keeps every
          digit for integer arithmetic, which is what this page is built for.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this big number calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter two whole integers (no commas or decimal points).</li>
          <li>Choose +, −, ×, or ÷.</li>
          <li>Read the exact result and digit count in the summary.</li>
          <li>For division, check quotient and remainder separately.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Multiply:</strong> 999999999999999999999 × 2
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Result:</strong> 1999999999999999999998 (exact—no rounding)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Divide:</strong> 17 ÷ 5 → quotient <strong>3</strong>,
            remainder <strong>2</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common use cases for large integers
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Students use <strong>big number math</strong> for factorials, Catalan
          numbers, and puzzle solutions. Developers prototype{" "}
          <strong>modular arithmetic</strong> steps. Always verify production
          crypto with audited libraries—this page is an educational arithmetic aid,
          not a security tool.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (big numbers)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a big number calculator used for?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Exact arithmetic on integers too large for normal floating-point
              calculators—combinatorics, long products, and precision-sensitive
              integer work.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter decimals?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. <strong>BigInt requires whole numbers.</strong> Use the Basic or
              Scientific Calculator for decimal math.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does division give a decimal answer?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. You get an <strong>integer quotient</strong> and a{" "}
              <strong>remainder</strong>, like long division with whole numbers.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use commas in large numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter digits only (e.g. <strong>1000000</strong>, not 1,000,000).
              Commas will cause a parse error.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How large can inputs be?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Thousands of digits are often fine; extreme lengths depend on device
              memory and may slow the browser.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this for financial modeling?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Money usually needs decimals and currency rules. Use{" "}
              <Link
                to="/finance"
                className="text-primary hover:underline"
              >
                finance calculators
              </Link>{" "}
              for loans and interest; this tool is for integer math.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Negative numbers supported?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Prefix with <strong>−</strong> for negative integers.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this big number calculator professional cryptography software?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Educational integer arithmetic in the browser—not audited for
              production security or key generation.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
