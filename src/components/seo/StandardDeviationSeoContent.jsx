import React from "react";
import { Link } from "react-router-dom";

export default function StandardDeviationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Standard deviation calculator for comma-separated data
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Standard deviation</strong> tells you how far values typically
          sit from the average. Paste a list of numbers into this{" "}
          <strong>standard deviation calculator</strong> and get the{" "}
          <strong>mean</strong>, <strong>population variance</strong>,{" "}
          <strong>population standard deviation</strong> (divide by n), and{" "}
          <strong>sample standard deviation</strong> (divide by n − 1) when you
          have more than one point.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use the computed spread in a{" "}
          <Link
            to="/statistics/z-score-calculator"
            className="text-primary hover:underline"
          >
            Z-Score Calculator
          </Link>{" "}
          when you know μ and σ. For full descriptive summaries (median, mode,
          etc.), open the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">Formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Mean μ = (Σx) / n

Population variance σ² = Σ(x − μ)² / n
Population SD σ = √(σ²)

Sample SD s = √( Σ(x − μ)² / (n − 1) )   when n > 1`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter numbers separated by commas.</li>
          <li>Read count, mean, and both population and sample SD in the summary.</li>
          <li>Use population SD when your list is the entire group; sample SD when it represents a subset.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            For <strong>10, 20, 30, 40, 50</strong> (n = 5), the mean is{" "}
            <strong>30</strong>, population variance is <strong>200</strong>,
            population SD is about <strong>14.1421</strong>, and sample SD is
            about <strong>15.8114</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Which standard deviation should I report?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Report population SD when you have every member of the group.
              Report sample SD when your list is a sample and you want an
              unbiased estimate of population spread.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I paste spaces or extra commas?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—values are trimmed and empty tokens are skipped. If nothing
              valid remains, the summary shows em dashes.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
