import React from "react";
import { Link } from "react-router-dom";

export default function LogSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Log calculator: logarithm with any base
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>log calculator</strong> (<strong>logarithm calculator</strong>
          ) finds <strong>logₐ(x)</strong> for a <strong>positive</strong> value{" "}
          <strong>x</strong> and a chosen <strong>base a</strong> (positive,{" "}
          <strong>a ≠ 1</strong>). Whether you need a <strong>natural logarithm</strong>{" "}
          (base <strong>e</strong>), <strong>log base 10</strong>, or{" "}
          <strong>log base 2</strong>, enter the base and number to get the result
          plus <strong>ln(x)</strong>, <strong>log₁₀(x)</strong>, and an{" "}
          <strong>antilog check</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For the inverse idea (powers), use the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          . For roots, see the{" "}
          <Link
            to="/math/root-calculator"
            className="text-primary hover:underline"
          >
            Root Calculator
          </Link>
          . For general math, try the{" "}
          <Link
            to="/math/scientific-calculator"
            className="text-primary hover:underline"
          >
            Scientific Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a logarithm?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>logarithmic function</strong> is the <strong>inverse of exponentiation</strong>.
          If <strong>aʸ = x</strong>, then <strong>logₐ(x) = y</strong>. The logarithm
          answers: <strong>what power do we raise a to in order to get x?</strong>{" "}
          Equivalently: <strong>a^(logₐ(x)) = x</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this log calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>logₐ(x) for custom base a</li>
              <li>ln(x) and log₁₀(x) readouts</li>
              <li>log₂(x) reference</li>
              <li>Antilog verification a^y ≈ x</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Log of zero or negative x (reals)</li>
              <li>Complex logarithms</li>
              <li>Log equation step solver</li>
              <li>Printed log-table lookup UI</li>
              <li>Antilog-only mode without base input</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Natural logarithm and common logarithm
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Natural log</strong> uses base <strong>e ≈ 2.718281</strong>, written{" "}
          <strong>ln(x)</strong> or <strong>logₑ(x)</strong>. It appears in compound
          growth, economics, and calculus. <strong>Common log</strong> uses base{" "}
          <strong>10</strong>, often written <strong>lg(x)</strong> or{" "}
          <strong>log₁₀(x)</strong>—common in decibels and log tables of the past.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`ln(100) ≈ 4.60517     log₁₀(100) = 2
ln(1) = 0             log₁₀(1) = 0
ln(e) = 1             log₁₀(10) = 1`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Change of base formula
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To compute a log with any base using only ln or log₁₀:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`logₐ(x) = ln(x) / ln(a)
logₐ(x) = log₁₀(x) / log₁₀(a)

Example log₂(100):
  log₁₀(100) / log₁₀(2) = 2 / 0.30103 ≈ 6.644`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Log rules (natural log)</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`ln(x × y) = ln(x) + ln(y)
ln(x / y) = ln(x) − ln(y)
ln(xʸ) = y × ln(x)
ln(e) = 1
ln(1) = 0
ln(1/x) = −ln(x)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this log calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter positive number x.</li>
          <li>Enter base a (10, 2, ~2.71828 for e, or any valid base).</li>
          <li>Read logₐ(x), ln(x), log₁₀(x), and antilog check.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Logarithms in the real world
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Log scales compress huge ranges: <strong>decibels</strong> (sound),{" "}
          <strong>pH</strong> (acidity), <strong>Richter</strong> (earthquakes), and
          many growth/decay models. Spirals in nature and logarithmic plotting in
          science often reflect the same exponential–log relationship.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Brief history</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          John Napier published logarithm tables in 1614 to speed multiplication via
          addition. Henry Briggs later popularized <strong>base-10 logs</strong>.
          Slide rules carried the idea into the 20th century until electronic
          calculators arrived.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>log₁₀(100)</strong> = <strong>2</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>ln(e)</strong> = <strong>1</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>log₂(8)</strong> = <strong>3</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (logarithms)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">What is log 1?</p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>logₐ(1) = 0</strong> for every valid base a.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can you have a negative log?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>−logₐ(x) = logₐ(1/x)</strong> is fine. The log of a{" "}
              <strong>negative x</strong> is not a real number.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is log the same as ln?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Usually <strong>no</strong>: <strong>ln</strong> = base e;{" "}
              <strong>log</strong> often means base 10—always check the author&apos;s
              notation.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate log base 2?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Set <strong>base = 2</strong>, or use{" "}
              <strong>log₁₀(x)/log₁₀(2)</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is the base restricted?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Base must be <strong>positive</strong> and <strong>not 1</strong>, or
              the logarithm is not defined in the usual way.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the natural logarithm of 100?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>ln(100) ≈ 4.60517</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How are logs and exponents related?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              They undo each other: if <strong>y = logₐ(x)</strong>, then{" "}
              <strong>x = aʸ</strong>. See the{" "}
              <Link
                to="/math/exponent-calculator"
                className="text-primary hover:underline"
              >
                Exponent Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why were logarithms invented?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              To turn multiplication into addition—vital for astronomy and
              engineering before modern calculators.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
