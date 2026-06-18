import React from "react";
import { Link } from "react-router-dom";

export default function LongDivisionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Long division calculator: quotient, remainder &amp; steps
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>long division calculator</strong> to divide two{" "}
          <strong>whole numbers</strong> and get the <strong>quotient</strong>,{" "}
          <strong>remainder</strong>, and <strong>step-by-step notes</strong>.
          Enter a <strong>dividend</strong> and <strong>divisor</strong>—for
          example <strong>100 ÷ 7 = 14 remainder 2</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For huge integers, try the{" "}
          <Link
            to="/math/big-number-calculator"
            className="text-primary hover:underline"
          >
            Big Number Calculator
          </Link>
          . For fraction division, use the{" "}
          <Link
            to="/math/fraction-calculator"
            className="text-primary hover:underline"
          >
            Fraction Calculator
          </Link>
          . For quick arithmetic, see the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">What is long division?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Long division</strong> is the standard pencil-and-paper method
          for dividing one integer by another. You find how many times the divisor
          fits into parts of the dividend, digit by digit, until you get a{" "}
          <strong>quotient</strong> and <strong>remainder</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The key identity:{" "}
          <strong>dividend = divisor × quotient + remainder</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this long division calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Integer quotient and remainder</li>
              <li>Step notes for the algorithm</li>
              <li>Verification: q × divisor + remainder</li>
              <li>Decimal approximation readout</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Full decimal long division expansion</li>
              <li>Polynomial / algebraic long division</li>
              <li>Decimal dividend or divisor inputs</li>
              <li>Visual bracket layout diagram</li>
              <li>Repeating decimal analysis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to do long division by hand
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Write dividend inside the bracket, divisor outside.</li>
          <li>See how many times the divisor fits into the leading digit(s).</li>
          <li>Write that digit in the quotient, multiply, subtract.</li>
          <li>Bring down the next digit and repeat.</li>
          <li>Stop when no digits remain—the last subtraction is the remainder.</li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Example: 100 ÷ 7

7 goes into 10 once (1), 1×7 = 7, remainder 3
Bring down 0 → 30
7 goes into 30 four times (4), 4×7 = 28, remainder 2

Quotient = 14, Remainder = 2
Check: 7 × 14 + 2 = 100`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Quotient, remainder, and decimals
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In elementary math, answers are often written as{" "}
          <strong>14 R2</strong> rather than <strong>14.2857…</strong>. This tool
          focuses on <strong>integer quotient + remainder</strong> and shows a
          decimal approximation only as a reference.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this long division calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the dividend (number being divided).</li>
          <li>Enter the divisor (number you divide by)—not zero.</li>
          <li>Read quotient, remainder, and steps in the summary.</li>
          <li>Use the check row to verify dividend = divisor × quotient + remainder.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>100 ÷ 7</strong> → quotient <strong>14</strong>, remainder{" "}
            <strong>2</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>48 ÷ 6</strong> → quotient <strong>8</strong>, remainder{" "}
            <strong>0</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>17 ÷ 5</strong> → quotient <strong>3</strong>, remainder{" "}
            <strong>2</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When is long division used?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Students learn long division for whole-number fluency. Adults use the
          same idea when splitting quantities evenly, checking{" "}
          <strong>modular remainders</strong>, or understanding how computers
          perform integer division with quotient and remainder.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (long division)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the remainder in division?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The amount left over after subtracting divisor × quotient from the
              dividend. It is always smaller than the divisor (for positive
              integers).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you check long division?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply <strong>divisor × quotient</strong>, add the{" "}
              <strong>remainder</strong>—you should get the original dividend.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can the remainder be larger than the divisor?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No for standard long division with positive integers—the remainder
              must be less than the divisor.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if the remainder is zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The divisor divides evenly—e.g. <strong>48 ÷ 6 = 8</strong> with
              remainder <strong>0</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this do decimal long division?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It returns integer quotient and remainder plus a decimal
              approximation—not every decimal place.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What about dividing decimals?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter <strong>whole integers only</strong>. For fraction-style
              division, use the{" "}
              <Link
                to="/math/fraction-calculator"
                className="text-primary hover:underline"
              >
                Fraction Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this different from the big number calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This page shows <strong>long division steps</strong> for typical
              homework sizes. The{" "}
              <Link
                to="/math/big-number-calculator"
                className="text-primary hover:underline"
              >
                Big Number Calculator
              </Link>{" "}
              handles very long digit strings with BigInt.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is 100 divided by 7?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>14 remainder 2</strong>, because{" "}
              <strong>7 × 14 + 2 = 100</strong>.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
