import React from "react";
import { Link } from "react-router-dom";

export default function AverageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Average calculator: find the mean of a number list
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>average calculator</strong> to find the{" "}
          <strong>arithmetic mean</strong> of any list—add the numbers and divide
          by the <strong>count</strong>. Paste or type values{" "}
          <strong>comma or space separated</strong> (e.g. test scores, prices,
          measurements). Results include <strong>sum</strong>, <strong>count</strong>
          , <strong>min</strong>, and <strong>max</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page computes <strong>mean only</strong>, not median or mode. For
          full central-tendency stats, use the{" "}
          <Link
            to="/math/mean-median-mode-range-calculator"
            className="text-primary hover:underline"
          >
            Mean Median Mode Range Calculator
          </Link>
          . For spreadsheet-style stats, see the{" "}
          <Link
            to="/statistics/statistics-calculator"
            className="text-primary hover:underline"
          >
            Statistics Calculator
          </Link>{" "}
          and{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          What is an average calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>average of numbers calculator</strong> applies the classic{" "}
          <strong>mean formula</strong>: total ÷ how many values. In statistics the
          same value is called the <strong>arithmetic mean</strong>; in daily
          language most people just say <strong>average</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Mean (average)</strong> = sum ÷ count
          </li>
          <li>
            <strong>Sum</strong> and <strong>count</strong> shown
          </li>
          <li>
            <strong>Min</strong> and <strong>max</strong> for quick context
          </li>
          <li>
            Comma, space, or semicolon separators
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this average calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Arithmetic mean (average)</li>
              <li>Sum, count, min, max</li>
              <li>Flexible list parsing</li>
              <li>Decimals and negatives</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Median or mode</li>
              <li>Weighted average by credit hours</li>
              <li>Geometric or harmonic mean</li>
              <li>Population vs sample variance</li>
              <li>Outlier removal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Average (mean) formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Mean (average) = (x₁ + x₂ + … + xₙ) ÷ n

n = number of values
Σx = sum of all values

Example: 10, 20, 30, 40
  Sum = 100
  Count = 4
  Average = 100 ÷ 4 = 25`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Average vs median vs mode
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Mean</strong> balances all values—one very large number pulls it
          up. <strong>Median</strong> is the middle value when sorted.{" "}
          <strong>Mode</strong> is the most frequent value. This calculator returns
          mean only; compare all three on the{" "}
          <Link
            to="/math/mean-median-mode-range-calculator"
            className="text-primary hover:underline"
          >
            Mean Median Mode Range
          </Link>{" "}
          page.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this average calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your numbers separated by commas or spaces.</li>
          <li>Read the average (mean) in the summary.</li>
          <li>Check sum and count to verify every value was included.</li>
          <li>Use min/max to spot extremes before trusting the mean alone.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Data:</strong> 85, 90, 78, 92, 88
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Sum = 433</li>
            <li>Count = 5</li>
            <li>
              <strong>Average</strong> = 433 ÷ 5 = <strong>86.6</strong>
            </li>
            <li>Min = 78, Max = 92</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When to use mean average
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>arithmetic mean</strong> fits evenly distributed data: quiz
          scores, daily temperatures, simple price lists. For skewed incomes or
          home prices, median often describes a “typical” value better—this tool
          still gives the mean math homework expects.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (average / mean)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you calculate the average of numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Add every number, then divide by how many numbers you added. That
              quotient is the <strong>average (mean)</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is average the same as mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              In most school and everyday contexts, yes—both mean{" "}
              <strong>sum ÷ count</strong> for the arithmetic mean.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this calculator find median and mode?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Use the{" "}
              <Link
                to="/math/mean-median-mode-range-calculator"
                className="text-primary hover:underline"
              >
                Mean Median Mode Range Calculator
              </Link>{" "}
              for those measures.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I average grades?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter each score as one value. Equal-weight mean: add scores, divide
              by number of assignments. Weighted courses need point×weight math
              not built into this page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use spaces instead of commas?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. The parser accepts commas, spaces, or semicolons between numbers.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if one value is missing from my paste?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Check the <strong>count</strong> and <strong>values used</strong> row
              in results—each parsed number should appear.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a weighted average?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Each value times its weight, summed, divided by total weight. This
              calculator gives each entry equal weight (simple mean).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this average calculator for professional statistics?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It handles basic mean for homework and quick checks. Formal analysis
              may need sample corrections, weights, and dispersion tools elsewhere
              in our statistics section.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
