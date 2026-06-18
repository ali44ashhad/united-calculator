import React from "react";
import { Link } from "react-router-dom";

export default function RatioSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Ratio calculator: simplify a : b
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>ratio calculator</strong> to{" "}
          <strong>simplify a two-part ratio</strong> by dividing both parts by
          their GCD. Example: <strong>8 : 12 → 2 : 3</strong>. Also shows part
          shares as percents of the total.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>fractions</strong>, see the{" "}
          <Link
            to="/math/fraction-calculator"
            className="text-primary hover:underline"
          >
            Fraction Calculator
          </Link>
          . For <strong>GCF of two integers</strong>, try the{" "}
          <Link
            to="/math/greatest-common-factor-calculator"
            className="text-primary hover:underline"
          >
            Greatest Common Factor Calculator
          </Link>
          . For <strong>percents</strong>, see the{" "}
          <Link
            to="/math/percentage-calculator"
            className="text-primary hover:underline"
          >
            Percentage Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a ratio?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>ratio</strong> compares two amounts using colon notation{" "}
          <strong>a : b</strong>. It describes how many times one quantity fits
          relative to another—not always the same as a single fraction.
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
              <li>Simplified ratio (GCD)</li>
              <li>Original a : b</li>
              <li>Decimal a ÷ b</li>
              <li>Part share percents</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Proportion solver (a/b = c/d)</li>
              <li>Three-or-more-term ratios</li>
              <li>Unit rate conversion</li>
              <li>Scaling to a target total</li>
              <li>Golden ratio φ calculations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to simplify a ratio</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Find GCD of both parts, divide each by GCD.

8 : 12
GCD(8, 12) = 4
8÷4 : 12÷4 = 2 : 3

Share of first part = a / (a + b) × 100%`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Ratio vs proportion</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>ratio</strong> is a comparison <strong>a : b</strong>. A{" "}
          <strong>proportion</strong> states two ratios are equal, like 2/3 =
          4/6. This page simplifies one ratio—it does not solve for a missing
          value in a proportion.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this ratio calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the first quantity (a).</li>
          <li>Enter the second quantity (b), not zero.</li>
          <li>Read the simplified ratio and optional shares.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example ratios</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>15 : 25</strong> → <strong>3 : 5</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>1.5 : 2</strong> → scaled to 15 : 20 → <strong>3 : 4</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>2 : 8</strong> → <strong>1 : 4</strong> (25% / 75% shares)
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (ratios)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why simplify a ratio?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Simplest form is easiest to read and compare—like reducing a
              fraction.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 2 : 3 the same as 3 : 2?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—order matters. <strong>2 : 3</strong> is not the same as{" "}
              <strong>3 : 2</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can the first value be zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—e.g. <strong>0 : 5</strong> simplifies to <strong>0 : 1</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What are share percents?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Each part as a percent of <strong>a + b</strong>. For 2 : 8, shares
              are 20% and 80%.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is GCD related to GCF?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Same idea—<strong>GCD</strong> and <strong>GCF</strong> are the
              largest common divisor of the two parts.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I simplify 2 : 3 : 5?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool handles <strong>two parts</strong> only. For three-term
              ratios, simplify pairwise or divide all parts by their common GCD
              manually.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is a : b the same as a/b?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Related but different—a : b compares two parts; <strong>a ÷ b</strong>{" "}
              is one number (shown in the summary).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does order of entry matter?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—first box is <strong>a</strong>, second is <strong>b</strong> in
              a : b.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
