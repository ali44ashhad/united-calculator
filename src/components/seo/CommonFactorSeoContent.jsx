import React from "react";
import { Link } from "react-router-dom";

export default function CommonFactorSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Common factor calculator: shared divisors &amp; GCF (HCF)
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>common factor calculator</strong> to list every{" "}
          <strong>shared factor</strong> of <strong>two positive integers</strong>{" "}
          and see the <strong>GCF</strong> (<strong>greatest common factor</strong>
          )—also called <strong>HCF</strong> (highest common factor). Enter two
          whole numbers and get the full common-factor list plus each number&apos;s
          complete factor list.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For GCF-only with Euclidean algorithm, try the{" "}
          <Link
            to="/math/greatest-common-factor-calculator"
            className="text-primary hover:underline"
          >
            Greatest Common Factor Calculator
          </Link>
          . For the paired <strong>LCM</strong>, use the{" "}
          <Link
            to="/math/least-common-multiple-calculator"
            className="text-primary hover:underline"
          >
            Least Common Multiple Calculator
          </Link>
          . To list factors of one number, see the{" "}
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
          What is a common factor?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>common factor</strong> divides <strong>both</strong> numbers
          evenly. For 12 and 18, shared factors are 1, 2, 3, and 6. The{" "}
          <strong>greatest common factor</strong> is <strong>6</strong>—the largest
          shared divisor.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>All common factors</strong> listed
          </li>
          <li>
            <strong>GCF / HCF</strong> highlighted
          </li>
          <li>
            <strong>Full factor lists</strong> for each input
          </li>
          <li>
            <strong>Two integers</strong> per calculation
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
              <li>Common factors of two numbers</li>
              <li>GCF (HCF) value</li>
              <li>Individual factor lists</li>
              <li>Count of common factors</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Three or more numbers at once</li>
              <li>Prime factorization trees</li>
              <li>LCM calculation (separate tool)</li>
              <li>Negative integers</li>
              <li>Fraction reduction UI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to find common factors
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Method: test each i from 1 to min(a, b)
  if a mod i = 0 AND b mod i = 0 → i is a common factor

GCF = largest value in the common-factor list

Example: 60 and 48
  Factors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60
  Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48
  Common:      1, 2, 3, 4, 6, 12
  GCF (HCF):   12`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">GCF vs HCF</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>GCF</strong> and <strong>HCF</strong> are the same number—the
          greatest shared divisor. US curricula often say GCF; UK and Commonwealth
          texts often say HCF.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this common factor calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter two positive whole numbers.</li>
          <li>Read all common factors in the summary.</li>
          <li>Note the GCF / HCF row for the largest shared factor.</li>
          <li>Compare full factor lists to see where they overlap.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Numbers:</strong> 54 and 81
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Common factors: 1, 3, 9, 27</li>
            <li>
              <strong>GCF / HCF:</strong> 27
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why common factors matter
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>GCF</strong> simplifies fractions (divide numerator and denominator
          by GCF), solves ratio problems, and appears in Euclidean algorithm proofs.
          Listing <strong>all</strong> common factors helps homework that asks for the
          full set, not only the greatest.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (common factors)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a common factor?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A positive integer that divides two numbers with zero remainder.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you find the greatest common factor?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              List common factors and pick the <strong>largest</strong>, or use the{" "}
              <Link
                to="/math/greatest-common-factor-calculator"
                className="text-primary hover:underline"
              >
                GCF calculator
              </Link>{" "}
              for Euclidean steps.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 1 always a common factor?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes for any two positive integers—1 divides every whole number.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter more than two numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This page supports <strong>two numbers</strong> only. Repeat pairwise
              or use specialized tools for longer lists.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is GCF related to LCM?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For positive integers a and b:{" "}
              <strong>a × b = GCF(a,b) × LCM(a,b)</strong>. Find LCM on the{" "}
              <Link
                to="/math/least-common-multiple-calculator"
                className="text-primary hover:underline"
              >
                LCM calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if numbers are prime to each other?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Their only common factor is <strong>1</strong> (GCF = 1)—for example 8
              and 15.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this to simplify fractions?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—divide numerator and denominator by the <strong>GCF</strong> of both
              to lowest terms.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are negative numbers supported?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Enter <strong>positive integers</strong> greater than zero.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
