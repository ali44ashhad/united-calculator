import React from "react";
import { Link } from "react-router-dom";

export default function MeanMedianModeRangeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Mean median mode range calculator: summarize a data set
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>mean median mode range calculator</strong> to
          analyze a list of numbers. Enter comma- or space-separated values and
          get the <strong>mean</strong> (average), <strong>median</strong>{" "}
          (middle), <strong>mode</strong> (most frequent), and{" "}
          <strong>range</strong> (max − min)—plus count, sum, and sorted order.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>mean only</strong>, use the{" "}
          <Link
            to="/math/average-calculator"
            className="text-primary hover:underline"
          >
            Average Calculator
          </Link>
          . For <strong>standard deviation</strong>, see the{" "}
          <Link
            to="/statistics/standard-deviation-calculator"
            className="text-primary hover:underline"
          >
            Standard Deviation Calculator
          </Link>
          . For broader stats, try the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          What are mean, median, mode, and range?
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Mean</strong> — sum of values divided by count (arithmetic
            average)
          </li>
          <li>
            <strong>Median</strong> — middle value when data are sorted (average
            of two middles if n is even)
          </li>
          <li>
            <strong>Mode</strong> — value(s) that appear most often
          </li>
          <li>
            <strong>Range</strong> — largest value minus smallest value
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
              <li>Mean, median, mode, range</li>
              <li>Count, sum, min, max</li>
              <li>Sorted value list</li>
              <li>Comma or space separated input</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Standard deviation or variance</li>
              <li>Quartiles / IQR / box plots</li>
              <li>Weighted mean</li>
              <li>Grouped frequency tables</li>
              <li>Population vs sample correction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Mean   = (x₁ + x₂ + … + xₙ) / n
Median = middle of sorted list (or average of two middles)
Mode   = most frequent value(s)
Range  = max − min`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Mean vs median vs mode
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Mean</strong> uses every value but is pulled by outliers.{" "}
          <strong>Median</strong> resists outliers—useful for skewed data like
          income. <strong>Mode</strong> fits categorical or discrete counts
          (e.g. most common shoe size). <strong>Range</strong> shows spread but
          ignores middle values.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Type your data set (e.g. 4, 8, 6, 5, 3, 8).</li>
          <li>Read mean, median, mode, and range in the summary.</li>
          <li>Check sorted values to verify median by hand.</li>
          <li>Use Reset to try another list.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Sorted: 3, 4, 5, 6, 8, 8 → <strong>mean ≈ 5.67</strong>,{" "}
            <strong>median = 5.5</strong>, <strong>mode = 8</strong>,{" "}
            <strong>range = 5</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the mean of 4, 8, 6, 5, 3, 8?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Sum = 34, count = 6 → <strong>mean ≈ 5.67</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the median of that set?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Sorted: 3, 4, 5, 6, 8, 8 → <strong>median = 5.5</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">What is the mode?</p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>8</strong> appears twice—more than any other value.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if every number is unique?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              There is <strong>no mode</strong>—each value occurs once.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can there be two modes?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—<strong>bimodal</strong> data has two values tied for highest
              frequency. Both are listed.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is range different from standard deviation?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Range</strong> uses only min and max.{" "}
              <strong>Standard deviation</strong> measures spread around the
              mean using every value—see the{" "}
              <Link
                to="/statistics/standard-deviation-calculator"
                className="text-primary hover:underline"
              >
                Standard Deviation Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I separate numbers in the input?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use <strong>commas</strong>, <strong>spaces</strong>, or{" "}
              <strong>semicolons</strong> between values.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as the average calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The{" "}
              <Link
                to="/math/average-calculator"
                className="text-primary hover:underline"
              >
                Average Calculator
              </Link>{" "}
              finds <strong>mean only</strong>. This page adds median, mode, and
              range.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
