import React from "react";
import { Link } from "react-router-dom";

export default function FractionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Fraction calculator: add, subtract, multiply &amp; divide fractions
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>fraction calculator</strong> to perform{" "}
          <strong>fraction operations</strong> on <strong>two fractions</strong>{" "}
          with integer <strong>numerators</strong> and{" "}
          <strong>denominators</strong>. Choose <strong>add</strong>,{" "}
          <strong>subtract</strong>, <strong>multiply</strong>, or{" "}
          <strong>divide</strong> and get a <strong>simplified fraction</strong>,{" "}
          <strong>decimal</strong>, and <strong>mixed number</strong> when
          applicable—e.g. <strong>1/2 + 1/3 = 5/6</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>percentages</strong>, see the{" "}
          <Link
            to="/math/percentage-calculator"
            className="text-primary hover:underline"
          >
            Percentage Calculator
          </Link>
          . For <strong>ratio simplification</strong>, try the{" "}
          <Link
            to="/math/ratio-calculator"
            className="text-primary hover:underline"
          >
            Ratio Calculator
          </Link>
          . For <strong>LCD / GCF</strong> work, use the{" "}
          <Link
            to="/math/least-common-multiple-calculator"
            className="text-primary hover:underline"
          >
            Least Common Multiple Calculator
          </Link>{" "}
          and{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">What is a fraction?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>fraction</strong> <strong>a/b</strong> shows how many parts of
          size <strong>1/b</strong> you have. The <strong>numerator</strong> (top)
          counts parts; the <strong>denominator</strong> (bottom) names the piece
          size and cannot be zero.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>+ − × ÷</strong> on two fractions
          </li>
          <li>
            <strong>Simplified</strong> answer via GCF
          </li>
          <li>
            <strong>Decimal</strong> and mixed-number readouts
          </li>
          <li>
            <strong>Integer</strong> numerators and denominators
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this fraction calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Add, subtract, multiply, divide</li>
              <li>Automatic simplification</li>
              <li>Decimal and mixed-number display</li>
              <li>Negative numerators/denominators</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Three or more fractions at once</li>
              <li>Decimal-only input without denominators</li>
              <li>Mixed-number input fields (enter improper fraction parts)</li>
              <li>Step-by-step common-denominator visuals</li>
              <li>Algebraic rational expressions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Fraction formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Addition:       a/b + c/d = (a×d + b×c) / (b×d)
Subtraction:    a/b − c/d = (a×d − b×c) / (b×d)
Multiplication: a/b × c/d = (a×c) / (b×d)
Division:       a/b ÷ c/d = (a×d) / (b×c)   (c ≠ 0)

Then simplify by dividing numerator and denominator by GCF.`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Adding &amp; subtracting fractions
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          You need a <strong>common denominator</strong>. The shortcut formula{" "}
          <strong>(a×d ± b×c)/(b×d)</strong> builds that denominator
          automatically. Always <strong>simplify</strong> the final fraction—
          <strong>2/4</strong> becomes <strong>1/2</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Multiplying &amp; dividing fractions
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Multiply</strong> straight across: numerators together,
          denominators together. <strong>Divide</strong> by multiplying with the
          reciprocal—flip the second fraction and multiply. Division fails if the
          second numerator is zero.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this fraction calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter numerator and denominator for the first fraction.</li>
          <li>Enter numerator and denominator for the second fraction.</li>
          <li>Select +, −, ×, or ÷.</li>
          <li>Read the simplified result, decimal, and mixed number.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>1/2 + 1/3</strong> = <strong>5/6</strong> ≈ <strong>0.8333</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>3/4 × 2/5</strong> = <strong>6/20</strong> →{" "}
            <strong>3/10</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>2/3 ÷ 4/5</strong> = <strong>10/12</strong> →{" "}
            <strong>5/6</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (fractions)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you add fractions with different denominators?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Convert to a common denominator—here via{" "}
              <strong>(a×d + b×c)/(b×d)</strong>—then simplify.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a simplified fraction?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Numerator and denominator share no common factor other than 1. Divide
              both by the <strong>GCF</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do you turn an improper fraction into a mixed number?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide numerator by denominator: <strong>7/3 = 2 1/3</strong>. This
              calculator shows mixed form when it applies.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why can&apos;t the denominator be zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Division by zero is undefined. Any zero denominator is rejected.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter 1 1/2 directly?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use improper form: <strong>3/2</strong> for one-and-a-half. Mixed
              input fields are not on this page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is dividing fractions different from multiplying?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Division uses the <strong>reciprocal</strong> of the divisor: multiply
              by <strong>d/c</strong> instead of <strong>c/d</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this work with negative fractions?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. A negative sign on either part is allowed; the answer keeps the
              sign on the numerator.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many fractions can I calculate at once?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Two</strong> per operation. Chain results manually for longer
              expressions.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
