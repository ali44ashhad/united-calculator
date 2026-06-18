import React from "react";
import { Link } from "react-router-dom";

export default function RoundingSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Rounding calculator: decimal places
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>rounding calculator</strong> to round a number to a
          chosen count of <strong>decimal places</strong>. Example:{" "}
          <strong>123.45678</strong> to 2 places → <strong>123.46</strong>. Set
          places to <strong>0</strong> for the nearest whole number.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>general arithmetic</strong>, see the{" "}
          <Link
            to="/math/basic-calculator"
            className="text-primary hover:underline"
          >
            Basic Calculator
          </Link>
          . For <strong>lab error</strong> context, try the{" "}
          <Link
            to="/math/percent-error-calculator"
            className="text-primary hover:underline"
          >
            Percent Error Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is rounding?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Rounding</strong> shortens a number while staying close to the
          original. Rounding to <strong>2 decimal places</strong> keeps two digits
          after the decimal point.
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
              <li>Round to n decimal places</li>
              <li>Nearest integer (n = 0)</li>
              <li>Original vs rounded</li>
              <li>Change from rounding</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Significant figures</li>
              <li>Floor (round down)</li>
              <li>Ceiling (round up)</li>
              <li>Truncate / chop</li>
              <li>Banker&apos;s rounding mode picker</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Decimal places vs significant figures
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Decimal places</strong> count digits after the decimal point.
          <strong> Significant figures</strong> count meaningful digits overall
          (e.g. 0.00456 has three sig figs). This page does{" "}
          <strong>decimal places only</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Rounding rule</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Look at the digit after your cutoff:
• 5 or more → round up
• less than 5 → round down

123.45678 to 2 decimal places
→ 123.46

123.45678 to 0 decimal places
→ 123`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this rounding calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the number to round.</li>
          <li>Enter how many decimal places to keep (0–20).</li>
          <li>Read the rounded value in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example rounding</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>3.14159</strong> to 2 places → <strong>3.14</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>9.876</strong> to 1 place → <strong>9.9</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>99.5</strong> to 0 places → <strong>100</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (rounding)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does “2 decimal places” mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Two digits after the decimal: <strong>12.34</strong> has two decimal
              places.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I round money to cents?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use <strong>2 decimal places</strong> for dollars and cents.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can decimal places be a fraction?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—enter a <strong>whole number</strong> (0, 1, 2, …).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as rounding to sig figs?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—significant-figure rounding is a different rule and is not on this
              page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What about negative numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Same decimal-place rule—e.g. −3.456 to 2 places → −3.46.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why might 1.005 round unexpectedly in computers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Binary floating-point can misstore some decimals; very edge-case
              values may differ slightly from pencil-and-paper.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do you offer floor or ceiling?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not here—this tool uses <strong>nearest</strong> rounding to a decimal
              place only.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the maximum decimal places?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Up to <strong>20</strong> decimal places on this calculator.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
