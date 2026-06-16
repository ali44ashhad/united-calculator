import React from "react";
import { Link } from "react-router-dom";

export default function GreatestCommonFactorSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Greatest common factor calculator: find GCF of two numbers
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this <strong>greatest common factor calculator</strong> to find the{" "}
          <strong>GCF</strong> (<strong>greatest common factor</strong>) of two
          positive integers. Knowing the GCF helps when{" "}
          <strong>reducing fractions</strong> and when working with the{" "}
          <strong>least common multiple (LCM)</strong>. For large values—such as{" "}
          <strong>10,144</strong> and <strong>12,408</strong>—manual factor
          listing is slow; this tool applies the <strong>Euclidean algorithm</strong>{" "}
          and returns the GCF instantly.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Below you will find what the GCF means, several ways to calculate it by
          hand, and how to use this page. For every shared divisor listed, try the{" "}
          <Link
            to="/math/common-factor-calculator"
            className="text-primary hover:underline"
          >
            Common Factor Calculator
          </Link>
          . For LCM, use the{" "}
          <Link
            to="/math/least-common-multiple-calculator"
            className="text-primary hover:underline"
          >
            Least Common Multiple Calculator
          </Link>
          . To simplify fractions, see the{" "}
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
          What is the greatest common factor?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>greatest common factor</strong> of a set of positive integers
          is the <strong>largest whole number</strong> that divides each of them
          with <strong>no remainder</strong>. Take <strong>45</strong> and{" "}
          <strong>189</strong>: the biggest shared divisor is <strong>9</strong>,
          so <strong>GCF(45, 189) = 9</strong>. We write the GCF of A and B as{" "}
          <strong>GCF(A, B)</strong>—the same value is often called{" "}
          <strong>HCF</strong> (highest common factor) or <strong>GCD</strong>{" "}
          (greatest common divisor).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this GCF calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>GCF / HCF / GCD for two integers</li>
              <li>Euclidean algorithm (modulo steps)</li>
              <li>Related LCM and reduced ratio</li>
              <li>Co-prime check (GCF = 1)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Three or more numbers in one run</li>
              <li>Full list of all common factors</li>
              <li>Interactive step-by-step method picker</li>
              <li>Negative or decimal inputs</li>
              <li>Prime factorization tree UI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to find the greatest common factor
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          There are several classic methods. Each gives the same answer; some suit
          small numbers, others scale better.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Listing all factors</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          List every factor of each number, circle the shared ones, and pick the
          largest. For <strong>45</strong> and <strong>189</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>45</strong>: 1, 3, 5, 9, 15, 45
          </li>
          <li>
            <strong>189</strong>: 1, 3, 7, 9, 21, 27, 63, 189
          </li>
          <li>
            Common factors in order: <strong>1, 3, 9</strong> → GCF ={" "}
            <strong>9</strong>
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This approach is easy to understand but tedious for large integers.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Prime factorization method
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Write each number as a product of primes, take primes that appear in{" "}
          <strong>both</strong> factorizations, and multiply them:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`45  = 3 × 3 × 5
189 = 3 × 3 × 3 × 7

Shared primes: 3 × 3 = 9
GCF(45, 189) = 9`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          See the{" "}
          <Link
            to="/math/prime-factorization-calculator"
            className="text-primary hover:underline"
          >
            Prime Factorization Calculator
          </Link>{" "}
          for prime breakdowns.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Euclidean algorithm</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A fast method uses remainders: <strong>GCF(A, B) = GCF(B, A mod B)</strong>{" "}
          until the remainder is zero. The last non-zero divisor is the GCF. For{" "}
          <strong>GCF(45, 189)</strong>:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`189 mod 45 = 9
45 mod 9 = 0  → stop

Last divisor: 9
GCF(45, 189) = 9`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is what our calculator uses—ideal for pairs like{" "}
          <strong>10,144</strong> and <strong>12,408</strong> (GCF ={" "}
          <strong>28</strong>).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Binary algorithm for GCF</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>binary GCD algorithm</strong> repeatedly halves even numbers
          and applies subtraction rules on odd pairs until both values match. It
          is efficient in computer science but less common in schoolwork. Applied
          to <strong>45</strong> and <strong>189</strong>, it still ends at{" "}
          <strong>9</strong>.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Rules (simplified):
• Both even → halve both, same GCF
• One even → halve the even one
• Both odd, A > B → replace A with (A−B)/2
• Repeat until A = B`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this greatest common factor calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the first positive integer.</li>
          <li>Enter the second positive integer.</li>
          <li>Read GCF / HCF, LCM, reduced ratio, and Euclidean steps.</li>
          <li>Use Reset to try another pair.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page accepts <strong>two numbers</strong> per calculation—not a
          long list of fifteen values in one form.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">GCF in everyday projects</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Planning to tile a rectangular floor with <strong>square tiles</strong>{" "}
          and no cuts? If the room is <strong>A</strong> by <strong>B</strong> units,
          the largest square tile that fits evenly on both sides has side length{" "}
          <strong>GCF(A, B)</strong>. Before you buy materials, knowing how to find
          the GCF can save waste and money.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>GCF(8, 12)</strong> = <strong>4</strong> (common factors 1, 2,
            4)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>GCF(48, 18)</strong> = <strong>6</strong> → ratio{" "}
            <strong>8/3</strong> when reduced
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>GCF(10,144, 12,408)</strong> = <strong>28</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          GCF, LCM, and fractions
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For two positive integers, <strong>a × b = GCF(a, b) × LCM(a, b)</strong>.
          Divide numerator and denominator by the GCF to{" "}
          <strong>simplify fractions</strong>. List all shared divisors on the{" "}
          <Link
            to="/math/common-factor-calculator"
            className="text-primary hover:underline"
          >
            Common Factor Calculator
          </Link>
          ; list every factor of one number on the{" "}
          <Link
            to="/math/factor-calculator"
            className="text-primary hover:underline"
          >
            Factor Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (GCF)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the GCF of 8 and 12?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Factors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. Shared:
              1, 2, 4. The largest is <strong>4</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the greatest common factor of two co-prime numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>1</strong>. Co-prime numbers share no factor other than 1 by
              definition.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is GCF the same as HCF or GCD?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes for positive integers—they name the same largest shared divisor.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why use GCF when simplifying fractions?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide top and bottom by <strong>GCF(numerator, denominator)</strong>{" "}
              to get the lowest terms in one step.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Which method is best for large numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The <strong>Euclidean algorithm</strong>—used on this page—scales
              far better than listing every factor by hand.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter more than two numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This form takes <strong>two</strong> integers. For three or more,
              compute GCF in stages: GCF(a, b, c) = GCF(GCF(a, b), c).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is GCF(45, 189)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>9</strong>—by listing factors, prime factorization, or
              Euclidean steps as shown above.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is GCF related to LCM?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>a × b = GCF × LCM</strong>. Find LCM on the{" "}
              <Link
                to="/math/least-common-multiple-calculator"
                className="text-primary hover:underline"
              >
                Least Common Multiple Calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
