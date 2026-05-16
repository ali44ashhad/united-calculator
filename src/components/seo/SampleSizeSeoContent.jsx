import React from "react";
import { Link } from "react-router-dom";

export default function SampleSizeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Sample size calculator for surveys and polls
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Before you field a questionnaire, you need enough respondents so your
          results are not wider than you can tolerate. This{" "}
          <strong>sample size calculator</strong> estimates how many people to
          survey given a known <strong>population size</strong>, a{" "}
          <strong>confidence level</strong> (90%, 95%, or 99%), and a{" "}
          <strong>margin of error</strong> as a percent.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It assumes you are estimating a proportion with unknown true rate, so
          it uses <strong>p = 0.5</strong> (the conservative maximum-variance
          case). After you collect data, check significance with the{" "}
          <Link
            to="/statistics/p-value-calculator"
            className="text-primary hover:underline"
          >
            P-Value Calculator
          </Link>
          . For descriptive stats on your sample, try the{" "}
          <Link
            to="/statistics/statistics-calculator"
            className="text-primary hover:underline"
          >
            Statistics Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formulas used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`n₀ = (z² × p × (1 − p)) / E²
n = n₀ / (1 + (n₀ − 1) / N)

p = 0.5, E = margin of error as a decimal, N = population`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The first line is the infinite-population sample size; the second
          applies <strong>finite population correction</strong> so the required
          n does not exceed your population N. Z-scores are fixed at 1.645
          (90%), 1.96 (95%), and 2.576 (99%).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter total population size (must be positive).</li>
          <li>Choose confidence level.</li>
          <li>Enter margin of error as a percent (e.g. 5 for ±5%).</li>
          <li>Read the rounded required sample size in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            For <strong>N = 10,000</strong>, <strong>95% confidence</strong>,
            and <strong>5% margin of error</strong>, you need about{" "}
            <strong>370</strong> respondents (finite correction), compared
            with about <strong>385</strong> if the population were treated as
            infinite.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why assume p = 0.5?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              When you do not know the true proportion in advance, p = 0.5
              maximizes p(1 − p) and yields the largest (safest) sample size for
              proportion surveys.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my population is very large?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              As N grows, finite correction matters less and the required n
              approaches the infinite-population estimate shown in the summary.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this work for means instead of proportions?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—this page is built for proportion (yes/no) style surveys. Mean
              estimates need standard deviation in the formula, which this tool
              does not collect.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
