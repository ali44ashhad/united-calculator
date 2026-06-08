import React from "react";
import { Link } from "react-router-dom";

export default function BinarySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Binary calculator: add, subtract, multiply &amp; divide base-2 numbers
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>binary calculator</strong> to perform{" "}
          <strong>binary arithmetic</strong> on two operands written in{" "}
          <strong>base 2</strong> (digits <strong>0</strong> and <strong>1</strong>
          ). Choose <strong>addition</strong>, <strong>subtraction</strong>,{" "}
          <strong>multiplication</strong>, or <strong>integer division</strong>,
          then read the <strong>binary result</strong> plus{" "}
          <strong>decimal</strong> and <strong>hexadecimal</strong> equivalents in
          the summary.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Inputs are <strong>binary strings only</strong>—not a decimal-to-binary
          typer. For hex conversion, use the{" "}
          <Link
            to="/math/hex-calculator"
            className="text-primary hover:underline"
          >
            Hex Calculator
          </Link>
          . For general unit and base work, see the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          . For huge integers in decimal, try the{" "}
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
          What is a binary calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>binary math calculator</strong> lets you operate on{" "}
          <strong>binary numbers</strong> without manual carry rows. This tool
          parses each string as base 2, computes in decimal, and displays the
          answer in <strong>binary</strong> with <strong>decimal</strong> and{" "}
          <strong>hex</strong> checks—useful for computer science and digital
          logic homework.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>+ − × ÷</strong> on two binary inputs
          </li>
          <li>
            <strong>Binary result</strong> string
          </li>
          <li>
            <strong>Decimal &amp; hex</strong> readouts
          </li>
          <li>
            <strong>Remainder</strong> on division (decimal)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this binary calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Binary addition, subtraction, multiplication, division</li>
              <li>0/1 input validation</li>
              <li>Decimal and hex result display</li>
              <li>Operand decimal values</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Decimal or hex as input fields</li>
              <li>Fixed-width two&apos;s complement (8/16/32-bit)</li>
              <li>AND, OR, XOR, NOT bitwise UI</li>
              <li>Floating-point binary fractions</li>
              <li>ASCII or UTF-8 text encoding</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How binary arithmetic works here
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`1. Parse each operand: binary string → decimal integer
2. Apply +, −, ×, or ÷ (integer division)
3. Show result in binary, decimal, and hex

Example addition:
  1010₂ = 10₁₀
  0110₂ = 6₁₀
  Sum   = 16₁₀ = 10000₂`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Binary addition quick reference
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          By hand: <strong>0 + 0 = 0</strong>, <strong>0 + 1 = 1</strong>,{" "}
          <strong>1 + 0 = 1</strong>, <strong>1 + 1 = 10</strong> (write 0, carry
          1). This calculator skips the carry table when you already have two full
          binary strings to combine.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this binary calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter first binary number (0 and 1 only).</li>
          <li>Enter second binary number.</li>
          <li>Select +, −, ×, or ÷.</li>
          <li>Read binary result; verify with decimal and hex rows.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <div>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Add:</strong> 1010 + 0110 → <strong>10000₂</strong> (16₁₀)
            </p>
          </div>
          <div>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Subtract:</strong> 1010 − 0110 → <strong>100₂</strong> (4₁₀)
            </p>
          </div>
          <div>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Multiply:</strong> 101 × 11 → <strong>1111₂</strong> (15₁₀)
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Binary calculator vs hex converter
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page is for <strong>two-operand binary math</strong>. The{" "}
          <Link
            to="/math/hex-calculator"
            className="text-primary hover:underline"
          >
            Hex Calculator
          </Link>{" "}
          focuses on converting a single hexadecimal value to decimal, binary, and
          octal. Pick the tool that matches whether you are operating or converting.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (binary math)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a binary calculator used for?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Quick <strong>base-2 arithmetic</strong> for learning and checking
              digital logic, CS assignments, and programmer interview practice.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I convert binary to decimal?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Each operand and the result show <strong>decimal equivalents</strong>{" "}
              in the summary. There is no separate decimal input field.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I include the 0b prefix?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Enter raw bits only, like <strong>1010</strong>, not{" "}
              <strong>0b1010</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does subtraction show a minus sign?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              When the second number is larger, the decimal difference is negative;
              binary displays a leading minus on the magnitude.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is binary division floating-point?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. <strong>Integer quotient</strong> with decimal remainder—same as
              whole-number division.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this handle 8-bit two&apos;s complement?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No fixed bit width. Values use standard JavaScript integer parsing,
              not wrapped 8/16/32-bit registers.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Where is hexadecimal conversion?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Result hex appears in the summary. For hex-first workflows, use the{" "}
              <Link
                to="/math/hex-calculator"
                className="text-primary hover:underline"
              >
                Hex Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this binary calculator for production code?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Educational and verification use. Production systems should use
              tested libraries and explicit bit-width rules.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
