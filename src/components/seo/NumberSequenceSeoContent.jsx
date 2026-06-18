import React from "react";
import { Link } from "react-router-dom";

export default function NumberSequenceSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Number sequence calculator: arithmetic sequence generator
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this <strong>number sequence calculator</strong> to build an{" "}
          <strong>arithmetic sequence</strong> (<strong>arithmetic progression</strong>
          ). Enter the <strong>first term a₁</strong>, <strong>common difference d</strong>
          , and <strong>number of terms n</strong> to list every term plus the{" "}
          <strong>sum Sₙ</strong>—for example a₁=1, d=2, n=10 gives{" "}
          <strong>1, 3, 5, 7, 9, 11, 13, 15, 17, 19</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For powers and exponential growth, see the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          . To average the terms, use the{" "}
          <Link
            to="/math/average-calculator"
            className="text-primary hover:underline"
          >
            Average Calculator
          </Link>
          . For list statistics, try the{" "}
          <Link
            to="/math/mean-median-mode-range-calculator"
            className="text-primary hover:underline"
          >
            Mean Median Mode Range Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is an arithmetic sequence?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>arithmetic sequence</strong> adds the same value each step. If
          the <strong>common difference</strong> is <strong>d</strong>, then{" "}
          <strong>aₙ = a₁ + (n − 1)d</strong>. Sequences like 5, 10, 15, 20…
          (d = 5) or 20, 17, 14, 11… (d = −3) are arithmetic.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Generate terms</strong> from a₁, d, and n
          </li>
          <li>
            <strong>Last term</strong> aₙ in the list
          </li>
          <li>
            <strong>Sum</strong> Sₙ of all terms
          </li>
          <li>
            <strong>Arithmetic only</strong> on this page
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
              <li>Arithmetic term generation</li>
              <li>nth term formula display</li>
              <li>Sum of n terms</li>
              <li>Decimal a₁ and d allowed</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Geometric sequences (× ratio)</li>
              <li>Detect pattern from given terms</li>
              <li>Fibonacci or recursive rules</li>
              <li>Series to infinity</li>
              <li>Explicit term index beyond generated n</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Arithmetic sequence formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`nth term:     aₙ = a₁ + (n − 1)d
Sum of n terms: Sₙ = n(a₁ + aₙ) / 2
              Sₙ = n(2a₁ + (n − 1)d) / 2

Example: a₁ = 1, d = 2, n = 5
  Terms: 1, 3, 5, 7, 9
  a₅ = 9,  S₅ = 5(1 + 9)/2 = 25`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Arithmetic vs geometric sequences
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Arithmetic</strong> sequences add a fixed <strong>d</strong> each
          step. <strong>Geometric</strong> sequences multiply by a fixed{" "}
          <strong>ratio r</strong> (e.g. 2, 6, 18, 54…). This tool generates{" "}
          <strong>arithmetic</strong> lists only—you supply a₁ and d rather than
          guessing a pattern from data.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this number sequence calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the first term a₁.</li>
          <li>Enter common difference d (can be negative).</li>
          <li>Enter how many terms n to generate.</li>
          <li>Read the full list, last term, and sum Sₙ.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>a₁ = 1</strong>, <strong>d = 2</strong>, <strong>n = 10</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Sequence: <strong>1, 3, 5, 7, 9, 11, 13, 15, 17, 19</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Last term <strong>a₁₀ = 19</strong>, sum{" "}
            <strong>S₁₀ = 10(1 + 19)/2 = 100</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (sequences)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What types of sequences can I generate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Arithmetic</strong> only—constant difference between terms.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I find the 100th term?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use <strong>aₙ = a₁ + (n − 1)d</strong> or set <strong>n = 100</strong>{" "}
              here and read the last term (within the 500-term limit).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can d be negative?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—a decreasing arithmetic sequence (e.g. 50, 45, 40… with d = −5).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this identify patterns from a list I paste?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. You enter <strong>a₁, d, n</strong> to build forward—not reverse
              engineering from known terms.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the sum formula used?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Sₙ = n(a₁ + aₙ)/2</strong> for the generated list.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as a geometric sequence calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Geometric sequences multiply by a ratio each step—use the{" "}
              <Link
                to="/math/exponent-calculator"
                className="text-primary hover:underline"
              >
                Exponent Calculator
              </Link>{" "}
              for power-style growth.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is there a term limit?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Very long lists are hard to read in the browser—this page caps at{" "}
              <strong>500 terms</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if every term is the same?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Set <strong>d = 0</strong>—you get a constant sequence (still
              arithmetic).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
