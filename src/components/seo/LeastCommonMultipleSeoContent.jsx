import React from "react";
import { Link } from "react-router-dom";

export default function LeastCommonMultipleSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Least common multiple calculator: LCM of two or more numbers
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>least common multiple calculator</strong> helps with math
          homework by finding the <strong>LCM</strong> of a{" "}
          <strong>comma-separated list</strong> of integers in seconds. It uses the{" "}
          <strong>GCD method</strong> and shows <strong>pairwise steps</strong> so
          you can follow how the answer was built. Below: what LCM means, three
          classic algorithms, when LCM is undefined, and real uses like{" "}
          <strong>fraction denominators</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>GCF / GCD</strong>, use the{" "}
          <Link
            to="/math/greatest-common-factor-calculator"
            className="text-primary hover:underline"
          >
            Greatest Common Factor Calculator
          </Link>
          . For all shared factors of two numbers, see the{" "}
          <Link
            to="/math/common-factor-calculator"
            className="text-primary hover:underline"
          >
            Common Factor Calculator
          </Link>
          . To add fractions with a common denominator, try the{" "}
          <Link
            to="/math/fraction-calculator"
            className="text-primary hover:underline"
          >
            Fraction Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is the least common multiple?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>least common multiple</strong> of a set of numbers is the{" "}
          <strong>smallest positive integer</strong> that is a{" "}
          <strong>multiple of each</strong> number in the set. A{" "}
          <strong>multiple</strong> is what you get when you multiply a number by
          an integer—multiples of <strong>4</strong> are{" "}
          <strong>4, 8, 12, 16…</strong>
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          LCM is defined as <strong>positive</strong>. You may ignore negative
          signs in inputs (this tool uses absolute values).{" "}
          <strong>Zero</strong> is rejected here because the GCD-based formula
          breaks down.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this LCM calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>LCM of 2+ comma-separated integers</li>
              <li>Pairwise GCD/LCM steps in summary</li>
              <li>GCD shown when exactly two numbers</li>
              <li>Absolute value for negative inputs</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Prime factorization tree UI</li>
              <li>Interactive table (ladder) method</li>
              <li>Method picker with full step-by-step lessons</li>
              <li>LCM with zero (undefined here)</li>
              <li>Decimals or fractions in the list</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          LCM using the greatest common divisor
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The most direct approach for two numbers:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`lcm(a, b) = |a × b| / gcd(a, b)

For more than two numbers, repeat pairwise:
  lcm(a, b, c) = lcm(lcm(a, b), c)

Example: lcm(12, 18) = (12 × 18) / gcd(12, 18) = 216 / 6 = 36`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Explore GCD methods on the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          LCM using prime factorization
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A reliable but slower hand method:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Prime-factorize every number in the set.</li>
          <li>Take each prime that appears; use the highest exponent.</li>
          <li>Multiply those prime powers together.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example <strong>lcm(12, 16, 21)</strong>: 12 = 2²×3, 16 = 2⁴, 21 = 3×7
          → LCM = 2⁴×3×7 = <strong>336</strong>. Use the{" "}
          <Link
            to="/math/prime-factorization-calculator"
            className="text-primary hover:underline"
          >
            Prime Factorization Calculator
          </Link>{" "}
          for factor trees.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Table (ladder) method</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          List numbers in a column. Divide by <strong>2</strong> wherever
          possible; copy unchanged values when not divisible. Repeat with 2, then
          3, then 5, and so on through primes until every entry is 1. Multiply
          all divisors used—that product is the LCM.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>{`{14, 25, 12, 6, 24}`}</strong>, the ladder gives{" "}
          <strong>2 × 2 × 2 × 3 × 5 × 5 × 7 = 4200</strong>. This page does not
          render the table—only the GCD algorithm with step text.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Applications of the least common multiple
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Adding fractions</strong>: the new denominator is the LCM of the
          original denominators. <strong>Gear ratios</strong>: engineers use LCM
          of tooth counts to see how many rotations align meshing gears. Many
          scheduling problems also boil down to LCM.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this least common multiple calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Type integers separated by commas (e.g. 12, 18 or 12, 16, 21).</li>
          <li>Read the LCM in the summary row.</li>
          <li>Follow pairwise GCD steps to see how pairs combined.</li>
          <li>Use Reset for a new list.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>lcm(12, 18)</strong> = <strong>36</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>lcm(8, 12)</strong> = <strong>24</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>lcm(12, 16, 21)</strong> = <strong>336</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (LCM)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate LCM using the GCD?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply the numbers, take the absolute value, divide by their GCD:{" "}
              <strong>lcm(a,b) = |a×b|/gcd(a,b)</strong>. For longer lists, fold
              pairwise.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the LCM of 0 and any other number?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              With GCD, <strong>0 is undefined</strong> (division by zero). Some
              contexts define lcm(n,0)=0; fraction work needs the undefined
              interpretation—this tool rejects zero.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the LCM of 12, 16, and 21?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>336</strong> from prime powers 2⁴, 3, and 7.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is LCM the same as LCD?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For fraction denominators, the{" "}
              <strong>least common denominator</strong> is the LCM of those
              denominators.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How does LCM relate to GCF?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For two positives: <strong>a × b = gcd(a,b) × lcm(a,b)</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter negative numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—their absolute values are used because LCM is positive by
              definition.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Which method does this calculator use?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>GCD pairwise reduction</strong>—not the prime table or
              ladder UI.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many numbers can I list?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Two or more</strong> comma-separated integers per run.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
