import React from "react";
import { Link } from "react-router-dom";

export default function ConfidenceIntervalSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Confidence interval calculator: mean with known σ (z-interval)
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>confidence interval calculator</strong> to estimate a{" "}
          <strong>population mean</strong> when{" "}
          <strong>population standard deviation σ is known</strong>. Enter{" "}
          <strong>sample mean (x̄)</strong>, <strong>σ</strong>,{" "}
          <strong>sample size (n)</strong>, and a <strong>confidence level</strong>{" "}
          (90%, 95%, or 99%). The tool computes{" "}
          <strong>margin of error</strong> and the interval{" "}
          <strong>x̄ ± z × (σ/√n)</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For spread from raw data, use the{" "}
          <Link
            to="/statistics/standard-deviation-calculator"
            className="text-primary hover:underline"
          >
            Standard Deviation Calculator
          </Link>
          . For sample-size planning, see the{" "}
          <Link
            to="/statistics/sample-size-calculator"
            className="text-primary hover:underline"
          >
            Sample Size Calculator
          </Link>
          . For z-scores, try the{" "}
          <Link
            to="/statistics/z-score-calculator"
            className="text-primary hover:underline"
          >
            Z-Score Calculator
          </Link>{" "}
          and{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a confidence interval?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>confidence interval (CI)</strong> is a range around a sample
          statistic meant to capture the unknown <strong>population mean</strong>{" "}
          with a stated <strong>confidence level</strong>. This page uses the
          classical <strong>z-interval</strong> when σ is treated as known.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Margin of error</strong> = z × (σ/√n)
          </li>
          <li>
            <strong>Lower &amp; upper</strong> bounds = x̄ ± margin
          </li>
          <li>
            <strong>Standard error</strong> σ/√n shown
          </li>
          <li>
            <strong>90 / 95 / 99%</strong> z critical values
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
              <li>z-interval for population mean</li>
              <li>Known σ input</li>
              <li>90%, 95%, 99% levels</li>
              <li>Margin of error &amp; standard error</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>t-interval with sample s</li>
              <li>Proportion confidence intervals</li>
              <li>Finite population correction</li>
              <li>Bootstrapping or Bayesian credible intervals</li>
              <li>One-sided bounds only</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Confidence interval formula (known σ)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Standard error:  SE = σ / √n

Margin of error:  ME = z × SE

Confidence interval:  x̄ − ME  to  x̄ + ME

z critical values (two-tailed):
  90% → 1.645
  95% → 1.96
  99% → 2.576

Example: x̄ = 100, σ = 15, n = 30, 95%
  SE = 15 / √30 ≈ 2.738
  ME = 1.96 × 2.738 ≈ 5.37
  CI ≈ 94.63 to 105.37`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">z-interval vs t-interval</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use a <strong>z-interval</strong> when σ is known or n is large and σ is
          well estimated. When σ is unknown and n is small, courses usually replace
          z with the <strong>t distribution</strong> and sample standard deviation{" "}
          <strong>s</strong>—not on this page.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this confidence interval calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the sample mean from your data.</li>
          <li>Enter population σ (or treated-as-known σ from prior studies).</li>
          <li>Enter sample size n.</li>
          <li>Choose 90%, 95%, or 99% and read the interval and margin of error.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>x̄ = 100, σ = 15, n = 30, 95%</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>SE ≈ 2.738</li>
            <li>ME ≈ 5.37</li>
            <li>
              <strong>CI ≈ 94.63 to 105.37</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Interpreting confidence level
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>95% confidence interval</strong> comes from a procedure that
          would capture the true mean in about 95% of repeated samples under ideal
          model assumptions. It is <strong>not</strong> a 95% probability that this
          specific interval contains the mean—that is a common misread.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (confidence intervals)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a confidence interval?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A range estimating a <strong>population mean</strong> from sample
              information with a chosen confidence level.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate a confidence interval for a mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>x̄ ± z × (σ/√n)</strong> when σ is known for the z-interval
              on this page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is margin of error?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Half-width of the CI: <strong>z × σ/√n</strong>, shown as ± in the
              summary.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why use σ instead of s?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              σ is the <strong>population</strong> standard deviation. Sample s
              estimates σ when population spread is unknown—different formula.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I do proportion confidence intervals here?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Proportions need √[p̂(1−p̂)/n] style margins—not implemented
              here.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does larger n narrow the interval?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. SE = σ/√n shrinks as n grows, so margin of error decreases.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Which z for 95%?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>1.96</strong> for a two-tailed 95% interval with a normal
              critical value.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this confidence interval calculator medical or legal advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Educational statistics math only—consult a statistician for study
              design and reporting standards.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
