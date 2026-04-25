import React from "react";
import { Link } from "react-router-dom";

export default function AverageReturnSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Average return calculator: find the mean of multiple returns
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When you look back at investment performance, you usually don’t have
          one clean number—you have a series of returns across years or months.
          This calculator helps you compute the <strong>arithmetic average</strong>{" "}
          (the simple mean) of the returns you enter, so you can summarize
          performance quickly and compare scenarios.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you’re doing forward-looking planning (growth projections), you may
          also want to explore compounding tools like the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>{" "}
          or recurring-contribution projections like the{" "}
          <Link to="/finance/sip-calculator" className="text-primary hover:underline">
            SIP Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is average return?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          “Average return” usually refers to the arithmetic mean of a set of
          returns:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            It’s easy to compute and great for quick comparisons.
          </li>
          <li>
            It does <strong>not</strong> account for compounding.
          </li>
          <li>
            It can be misleading when returns vary a lot (large gains and losses).
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For long time horizons, investors often also look at geometric average
          return (CAGR) to describe compounded growth. This page focuses on the
          simple average of the returns you enter.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Average return formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Average Return = (R1 + R2 + ... + Rn) ÷ n`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Where \(R1...Rn\) are each period’s return values and \(n\) is the
          number of periods.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use this calculator</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Type a return (like 12.5) and press Add.</li>
          <li>Repeat for each period you want to include.</li>
          <li>Remove any value to correct mistakes.</li>
          <li>Review the average return summary.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Tip: keep all returns in the same unit (e.g., annual returns or monthly
          returns). Mixing timeframes can distort the result.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Suppose your last three yearly returns were <strong>10%</strong>,{" "}
            <strong>12%</strong>, and <strong>-5%</strong>.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            The average is \((10 + 12 - 5) / 3 = 5.67%\) (rounded).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is average return the same as CAGR?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Average return is a simple mean. CAGR represents compounded
              growth over time and is typically more informative for long-term
              performance.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use negative returns?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Negative values are common in market performance and are
              important for realistic averages.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

