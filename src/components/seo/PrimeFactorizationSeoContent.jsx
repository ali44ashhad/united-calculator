import React from "react";
import { Link } from "react-router-dom";

export default function PrimeFactorizationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Prime factorization calculator
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>prime factorization calculator</strong> to break a
          whole number <strong>greater than 1</strong> into{" "}
          <strong>prime factors</strong>. Example: <strong>60 = 2 × 2 × 3 × 5</strong>{" "}
          (also written <strong>2² × 3 × 5</strong>).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>all divisors</strong> (not just primes), use the{" "}
          <Link
            to="/math/factor-calculator"
            className="text-primary hover:underline"
          >
            Factor Calculator
          </Link>
          . For <strong>GCF</strong> or <strong>LCM</strong>, see the{" "}
          <Link
            to="/math/greatest-common-factor-calculator"
            className="text-primary hover:underline"
          >
            Greatest Common Factor Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/math/least-common-multiple-calculator"
            className="text-primary hover:underline"
          >
            Least Common Multiple Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is prime factorization?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Prime factorization</strong> (prime decomposition) expresses a
          number as a product of <strong>prime numbers</strong>. Every integer
          greater than 1 has a unique factorization—fundamental theorem of
          arithmetic.
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
              <li>Prime factors with multiplicity</li>
              <li>Exponent form (e.g. 2² × 3)</li>
              <li>Distinct primes list</li>
              <li>Prime vs composite check</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>All factors (composite divisors)</li>
              <li>Factor trees drawn step-by-step</li>
              <li>GCF or LCM of multiple numbers</li>
              <li>Factoring polynomials</li>
              <li>Negative numbers or 0 / 1</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How factorization works</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Divide by the smallest prime that goes in evenly, repeat.

60 ÷ 2 = 30
30 ÷ 2 = 15
15 ÷ 3 = 5
5 is prime → stop

60 = 2 × 2 × 3 × 5 = 2² × 3 × 5`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Prime vs composite</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>prime</strong> has exactly two factors: 1 and itself (e.g. 17).
          A <strong>composite</strong> has more than two factors and splits into
          smaller primes (e.g. 18 = 2 × 3 × 3).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this prime factorization calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter a whole number greater than 1.</li>
          <li>Read the product form and exponent form in the summary.</li>
          <li>Use distinct primes or the prime check for homework.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example factorizations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>12</strong> = 2 × 2 × 3 = 2² × 3
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>100</strong> = 2 × 2 × 5 × 5 = 2² × 5²
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>97</strong> = 97 (prime)
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (prime factorization)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why can&apos;t I factor 1?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              1 is not prime or composite; standard prime factorization applies
              only to integers <strong>n &gt; 1</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is prime factorization unique?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—aside from order, there is only one way to write a number as a
              product of primes.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is exponent form?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Group repeated primes: 2 × 2 × 2 = <strong>2³</strong>. Easier to
              read for large multiplicities.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this different from the factor calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This page lists <strong>prime</strong> factors only. The{" "}
              <Link
                to="/math/factor-calculator"
                className="text-primary hover:underline"
              >
                Factor Calculator
              </Link>{" "}
              lists every divisor (1, 2, 3, 4, 6, … for 12).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do prime factors help find GCF?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Compare exponent forms and take the lowest power of each shared
              prime—or use the{" "}
              <Link
                to="/math/greatest-common-factor-calculator"
                className="text-primary hover:underline"
              >
                GCF Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I factor decimals?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—enter <strong>whole integers</strong> only.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What about very large numbers?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Results stay exact within JavaScript&apos;s safe integer range. Huge
              composites may take longer to factor.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 2 the only even prime?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—every other even number is divisible by 2 and therefore
              composite (except 2 itself).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
