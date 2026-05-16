import React from "react";
import { Link } from "react-router-dom";

export default function PValueSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          P-value calculator: tail probability from a z-score
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In a standard normal test, the <strong>p-value</strong> measures how
          extreme your z-score is in the tails. This{" "}
          <strong>p-value calculator</strong> takes one z-score, uses its
          absolute value, and returns two numbers: a{" "}
          <strong>one-tailed</strong> upper-tail probability and a{" "}
          <strong>two-tailed</strong> value that doubles it for symmetric
          hypotheses.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you need the z-score itself from raw data, start with the{" "}
          <Link
            to="/statistics/z-score-calculator"
            className="text-primary hover:underline"
          >
            Z-Score Calculator
          </Link>
          . For spread in your sample, see the{" "}
          <Link
            to="/statistics/standard-deviation-calculator"
            className="text-primary hover:underline"
          >
            Standard Deviation Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What the tool computes</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`One-tailed p = P(Z > |z|)
Two-tailed p = 2 × one-tailed p`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The normal cumulative distribution uses a standard approximation
          (Abramowitz–Stegun style). Results update as you type; empty or
          non-numeric input shows an em dash in the summary.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your z-score (positive or negative).</li>
          <li>Read the one-tailed p-value for a single upper tail beyond |z|.</li>
          <li>Use the two-tailed p-value when your alternative is two-sided.</li>
          <li>Compare against your chosen significance level α (often 0.05).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            For <strong>z = 1.96</strong>, the one-tailed p-value is about{" "}
            <strong>0.025</strong> and the two-tailed p-value is about{" "}
            <strong>0.05</strong>—the usual 5% significance benchmark for a
            two-sided normal test.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this for t-tests or only z-tests?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This page assumes a known standard normal reference. Small-sample
              t-tests need a t distribution instead; use this when a z
              approximation is appropriate.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why use |z| in the formula?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For symmetric tails, z = −1.96 and z = 1.96 represent the same
              distance from the mean, so the calculator uses the absolute value
              before finding tail area.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if p is less than 0.05?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              At α = 0.05 two-tailed, a two-tailed p below 0.05 is often called
              statistically significant—but always interpret results with context,
              not the threshold alone.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
