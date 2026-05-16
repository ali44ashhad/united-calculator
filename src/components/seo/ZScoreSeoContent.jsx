import React from "react";
import { Link } from "react-router-dom";

export default function ZScoreSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Z-score calculator: standard score from x, μ, and σ
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>z-score</strong> (standard score) tells you how many standard
          deviations a value sits from the average. This{" "}
          <strong>z-score calculator</strong> applies{" "}
          <strong>z = (x − μ) / σ</strong> using your raw score, mean, and
          standard deviation.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need σ from a list of numbers? Use the{" "}
          <Link
            to="/statistics/standard-deviation-calculator"
            className="text-primary hover:underline"
          >
            Standard Deviation Calculator
          </Link>
          . To turn a z-score into tail probability, open the{" "}
          <Link
            to="/statistics/p-value-calculator"
            className="text-primary hover:underline"
          >
            P-Value Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`z = (x − μ) / σ

x = raw score
μ = population or sample mean
σ = standard deviation (must be > 0)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the value you want to standardize (x).</li>
          <li>Enter the distribution mean (μ).</li>
          <li>Enter a positive standard deviation (σ).</li>
          <li>Read the z-score and whether the value is above or below the mean.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            With <strong>x = 85</strong>, <strong>μ = 70</strong>, and{" "}
            <strong>σ = 10</strong>, the z-score is{" "}
            <strong>(85 − 70) / 10 = 1.5</strong>—one and a half standard
            deviations above the mean.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does a negative z-score mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A negative z means x is below the mean. z = 0 means x equals the
              mean exactly.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Population or sample standard deviation?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use whichever σ matches your context—the calculator only applies
              the formula you provide. Compute population or sample SD from data
              on the Standard Deviation Calculator page.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
