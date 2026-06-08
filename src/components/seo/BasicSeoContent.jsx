import React from "react";
import { Link } from "react-router-dom";

export default function BasicSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Basic calculator: free online add, subtract, multiply &amp; divide
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>basic calculator online</strong> for everyday{" "}
          <strong>arithmetic</strong>—<strong>addition (+)</strong>,{" "}
          <strong>subtraction (−)</strong>, <strong>multiplication (×)</strong>,
          and <strong>division (÷)</strong>. Enter decimals and use{" "}
          <strong>parentheses</strong> for order of operations, then press{" "}
          <strong>=</strong> for an instant result. No app install or account
          required.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need trig, logarithms, or powers? Switch to the{" "}
          <Link
            to="/math/scientific-calculator"
            className="text-primary hover:underline"
          >
            Scientific Calculator
          </Link>
          . For large integers beyond normal limits, try the{" "}
          <Link
            to="/math/big-number-calculator"
            className="text-primary hover:underline"
          >
            Big Number Calculator
          </Link>
          . For list averages, use the{" "}
          <Link
            to="/math/average-calculator"
            className="text-primary hover:underline"
          >
            Average Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a basic calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>simple calculator</strong> handles the four core operations
          students and shoppers use daily. This <strong>web calculator</strong> runs
          in the browser with a keypad, clear (C), backspace (⌫), and a summary of
          your last evaluated expression.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>+ − × ÷</strong> with decimals
          </li>
          <li>
            <strong>Parentheses</strong> for grouped math
          </li>
          <li>
            <strong>Clear</strong> and <strong>delete</strong> controls
          </li>
          <li>
            <strong>Chain</strong> results after equals
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this basic calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Addition, subtraction, multiplication, division</li>
              <li>Decimal numbers</li>
              <li>Parentheses (order of operations)</li>
              <li>Expression summary after =</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Sin, cos, tan, log, ln</li>
              <li>Powers, roots, constants (π, e)</li>
              <li>Memory M+/MR keys</li>
              <li>Unit or currency conversion</li>
              <li>Graphing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Order of operations (PEMDAS)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Multiplication and division before addition and subtraction.
Parentheses group operations first.

Example: 2 + 3 × 4 = 2 + 12 = 14
With parentheses: (2 + 3) × 4 = 5 × 4 = 20`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this online basic calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Tap digits and operators to build your expression.</li>
          <li>Use ( and ) when you need a specific order of operations.</li>
          <li>Press = or Calculate Now to evaluate.</li>
          <li>Press C or Reset to start over; ⌫ removes the last character.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <div className="space-y-1">
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>12.5 + 7.5</strong> → <strong>20</strong>
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>100 − 37</strong> → <strong>63</strong>
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>6 × 8</strong> → <strong>48</strong>
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>(15 + 5) ÷ 4</strong> → <strong>5</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Basic vs scientific calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>basic math calculator</strong> covers daily arithmetic. A{" "}
          <strong>scientific calculator</strong> adds functions for algebra,
          trigonometry, and exponents. Choose basic for receipts and homework
          drills; upgrade when you need sin, cos, or logarithms.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (basic calculator)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What can I calculate with the basic calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Addition, subtraction, multiplication, and division</strong>{" "}
              with decimals and parentheses—not advanced functions.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this basic calculator free?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Free in the browser on desktop and mobile.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does multiplication come before addition?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—standard order of operations. Use parentheses to override.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does my expression show an error?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Common causes: empty input, unmatched ( ), consecutive operators, or
              division by zero. Clear and re-enter.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I continue after pressing equals?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. The result stays in the display so you can add more operators
              and digits.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Where are sin and log buttons?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              On the{" "}
              <Link
                to="/math/scientific-calculator"
                className="text-primary hover:underline"
              >
                Scientific Calculator
              </Link>
              —not on this basic page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this a replacement for a financial calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Loans, interest, and amortization need dedicated{" "}
              <Link
                to="/finance"
                className="text-primary hover:underline"
              >
                finance calculators
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are my calculations stored?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Evaluation runs locally in your browser for the current session;
              expressions are not uploaded to a server.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
