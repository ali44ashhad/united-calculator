import React from "react";
import { Link } from "react-router-dom";

export default function PercentErrorSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Percent error calculator: experimental vs accepted value
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>percent error calculator</strong> to compare a{" "}
          <strong>measured</strong> (experimental) value to an{" "}
          <strong>actual</strong> (accepted or true) value. Example: measured
          105, actual 100 → <strong>5% error</strong>. Common in chemistry,
          physics, and lab reports.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For general <strong>percentages</strong>, see the{" "}
          <Link
            to="/math/percentage-calculator"
            className="text-primary hover:underline"
          >
            Percentage Calculator
          </Link>
          . For <strong>spread in a data set</strong>, try the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">What is percent error?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Percent error</strong> measures how far a measurement is from
          the accepted value, relative to that accepted value. It answers:
          &quot;How wrong is my result compared to what we expected?&quot;
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
              <li>Percent error (%)</li>
              <li>Absolute error |measured − actual|</li>
              <li>Signed error (over/under)</li>
              <li>Overestimate / underestimate label</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Percent difference (average in denominator)</li>
              <li>Significant-figure rounding rules</li>
              <li>Uncertainty propagation</li>
              <li>Multiple trials or mean of measurements</li>
              <li>Relative standard deviation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Percent error formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Percent error = |measured − actual| / |actual| × 100

Example: measured = 105, actual = 100
|105 − 100| / 100 × 100 = 5%

Signed error = measured − actual = +5 (overestimate)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Percent error vs percent difference
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Percent error</strong> always divides by the{" "}
          <strong>accepted (true) value</strong>. <strong>Percent difference</strong>{" "}
          often uses the average of the two numbers in the denominator—used when
          neither value is clearly &quot;true.&quot; This tool is percent error only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this percent error calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your experimental result as Measured value.</li>
          <li>Enter the accepted or theoretical value as Actual value.</li>
          <li>Read percent error and whether you over- or underestimated.</li>
          <li>Round the result per your course’s significant-figure rules.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Lab: 9.8 g measured, 10.0 g accepted</strong> →{" "}
            <strong>2% error</strong> (underestimate)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Speed: 52 m/s measured, 50 m/s accepted</strong> →{" "}
            <strong>4% error</strong> (overestimate)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Perfect match: 100 and 100</strong> → <strong>0% error</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (percent error)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can percent error be negative?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The standard <strong>percent error</strong> uses absolute value, so
              it is reported as a positive percentage. Signed error shows
              direction separately.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my actual value is zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Percent error is undefined—the denominator cannot be zero.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is experimental value the same as measured?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—enter it as <strong>Measured value</strong> on this page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a good percent error?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It depends on the lab and equipment. Your instructor or field may
              set a target (e.g. under 5%).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is absolute error different?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Absolute error</strong> is |measured − actual| in the same
              units. <strong>Percent error</strong> scales that by the accepted
              value.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I average multiple trials first?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool takes one measured value. Compute the mean of trials
              yourself, then enter that mean as Measured.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as accuracy?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Percent error is a common way to express <strong>accuracy</strong>{" "}
              relative to a known value. Precision (repeatability) is separate.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Where does the formula come from?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Standard science textbooks define percent error as the absolute
              relative difference from the accepted value, times 100.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
