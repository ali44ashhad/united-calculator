import React from "react";
import { Link } from "react-router-dom";

export default function FactorSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Factor calculator: list all divisors of a number
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>factor calculator</strong> to find every{" "}
          <strong>factor</strong> (<strong>divisor</strong>) of a single{" "}
          <strong>positive integer</strong>. Enter a whole number and get the full
          factor list, <strong>factor pairs</strong>, count, and a quick{" "}
          <strong>prime check</strong>—for example, factors of 28 are{" "}
          <strong>1, 2, 4, 7, 14, 28</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>prime building blocks</strong>, use the{" "}
          <Link
            to="/math/prime-factorization-calculator"
            className="text-primary hover:underline"
          >
            Prime Factorization Calculator
          </Link>
          . For <strong>shared factors of two numbers</strong>, try the{" "}
          <Link
            to="/math/common-factor-calculator"
            className="text-primary hover:underline"
          >
            Common Factor Calculator
          </Link>{" "}
          or{" "}
          <Link
            to="/math/greatest-common-factor-calculator"
            className="text-primary hover:underline"
          >
            Greatest Common Factor Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a factor?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>factor</strong> divides a number evenly—no remainder. If{" "}
          <strong>a × b = n</strong>, then <strong>a</strong> and <strong>b</strong>{" "}
          are <strong>factors of n</strong>. Every positive integer has at least
          factors <strong>1</strong> and <strong>itself</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>All factors</strong> in ascending order
          </li>
          <li>
            <strong>Factor pairs</strong> that multiply to n
          </li>
          <li>
            <strong>Factor count</strong> and sum
          </li>
          <li>
            <strong>Prime?</strong> when exactly two factors exist
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this factor calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Every divisor of one positive integer</li>
              <li>Factor pairs (a × b = n)</li>
              <li>Count, smallest, largest factor</li>
              <li>Prime check (two factors only)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Prime factorization tree</li>
              <li>GCF / LCM of two numbers</li>
              <li>Negative or decimal inputs</li>
              <li>Perfect-number or abundant-deficient analysis</li>
              <li>Factorization of polynomials</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to find factors (efficient method)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Test i from 1 to √n
If n % i === 0:
  i and n/i are both factors

Example: factors of 36
  1×36, 2×18, 3×12, 4×9, 6×6
  → 1, 2, 3, 4, 6, 9, 12, 18, 36`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Factor pairs</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Each <strong>factor pair</strong> multiplies to the original number. For{" "}
          <strong>30</strong>: <strong>1×30</strong>, <strong>2×15</strong>,{" "}
          <strong>3×10</strong>, <strong>5×6</strong>. Pairs help with mental math,
          divisibility drills, and simplifying fractions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Factors vs prime factorization vs GCF
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>All factors</strong> lists every divisor.{" "}
          <strong>Prime factorization</strong> uses only primes (12 = 2² × 3).{" "}
          <strong>GCF</strong> finds the largest factor two numbers share. This page
          is for the full divisor list of <strong>one</strong> number.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this factor calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter one positive whole number.</li>
          <li>Read all factors in the summary row.</li>
          <li>Check factor pairs and whether the number is prime.</li>
          <li>Use Reset to try another value.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Factors of 28</strong>: <strong>1, 2, 4, 7, 14, 28</strong> (6
            factors; not prime)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Factors of 17</strong>: <strong>1, 17</strong> (prime)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Factor pairs of 24</strong>: 1×24, 2×12, 3×8, 4×6
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (factors)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What are the factors of 100?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>1, 2, 4, 5, 10, 20, 25, 50, 100</strong>—nine factors total.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 1 a prime number?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. <strong>1</strong> has only one factor (itself), so it is neither
              prime nor composite by the usual definition.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many factors does a prime number have?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Exactly <strong>two</strong>: <strong>1</strong> and the number itself.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the difference between factors and multiples?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Factors</strong> divide into n; <strong>multiples</strong> are
              n, 2n, 3n, … For LCM of two numbers, see the{" "}
              <Link
                to="/math/least-common-multiple-calculator"
                className="text-primary hover:underline"
              >
                Least Common Multiple Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter decimals or negatives?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool uses <strong>positive integers</strong> only. Decimals and
              negative values show an error.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why list factor pairs?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Pairs show how n splits into two whole factors—useful for
              multiplication fluency and checking divisibility.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this do prime factorization?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—it lists <strong>all</strong> divisors, not just primes. Use the{" "}
              <Link
                to="/math/prime-factorization-calculator"
                className="text-primary hover:underline"
              >
                Prime Factorization Calculator
              </Link>{" "}
              for 2 × 2 × 2 style breakdowns.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this related to GCF?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              GCF is the largest factor two numbers share. List factors here for one
              number, then compare with the{" "}
              <Link
                to="/math/common-factor-calculator"
                className="text-primary hover:underline"
              >
                Common Factor Calculator
              </Link>{" "}
              when you have two inputs.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
