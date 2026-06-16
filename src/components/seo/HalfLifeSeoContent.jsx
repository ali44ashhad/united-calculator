import React from "react";
import { Link } from "react-router-dom";

export default function HalfLifeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Half-life calculator: exponential &amp; radioactive decay
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>half-life calculator</strong> explains{" "}
          <strong>exponential decay</strong> and computes how much of a substance
          remains after a given time. Enter <strong>initial amount N(0)</strong>,{" "}
          <strong>half-life T</strong>, and <strong>elapsed time t</strong> to get{" "}
          <strong>remaining quantity N(t)</strong>, plus related values like the{" "}
          <strong>decay constant λ</strong> and <strong>mean lifetime τ</strong>.
          The article below covers the <strong>half-life definition</strong>, the
          main <strong>half-life formula</strong>, and how to work decay problems
          by hand.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For powers in formulas, try the{" "}
          <Link
            to="/math/exponent-calculator"
            className="text-primary hover:underline"
          >
            Exponent Calculator
          </Link>
          . For general arithmetic, use the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">Half-life definition</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Radioactive materials contain <strong>stable</strong> and{" "}
          <strong>unstable nuclei</strong>. Unstable nuclei decay—emitting alpha,
          beta, or gamma radiation—until they become stable.{" "}
          <strong>Half-life</strong> is the time for{" "}
          <strong>half of the unstable nuclei</strong> in a large sample to decay,
          on average.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Every isotope has its own half-life. <strong>Carbon-10</strong> decays in
          about <strong>19 seconds</strong>; <strong>uranium-233</strong> lasts
          roughly <strong>160,000 years</strong>. The term also applies broadly to
          any <strong>exponential decay</strong>—including{" "}
          <strong>biological half-life</strong> of drugs or metabolites in the
          body.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Half-life is a <strong>statistical</strong> idea: one nucleus does not
          wait exactly T seconds, but for enough particles the{" "}
          <strong>50% rule</strong> is an excellent approximation. That principle
          underlies <strong>radiocarbon dating</strong> with carbon-14.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this half-life calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>N(t) from N(0), T, and t</li>
              <li>Amount decayed and percent remaining</li>
              <li>Half-lives elapsed (t/T)</li>
              <li>Decay constant λ and mean lifetime τ</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Solve for T from N(0), N(t), and t</li>
              <li>Solve for N(0) or t from other knowns</li>
              <li>Decay chain / multiple isotopes</li>
              <li>Activity in becquerels or curies</li>
              <li>Radiocarbon calibration curves</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Half-life formula</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Remaining quantity after time <strong>t</strong>:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`N(t) = N(0) × 0.5^(t/T)

N(t)  – quantity remaining after time t
N(0)  – initial quantity
T     – half-life (same time unit as t)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Equivalent exponential forms:
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`N(t) = N(0) × e^(−t/τ)
N(t) = N(0) × e^(−λt)

τ – mean lifetime (average time a nucleus stays intact)
λ – decay constant (rate of decay)

T = ln(2)/λ = ln(2) × τ`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to calculate half-life by hand
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To <strong>find half-life T</strong> when you know initial and final
          amounts and elapsed time (not a mode on this form, but useful theory):
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Measure <strong>N(0)</strong>—e.g. <strong>2.5 kg</strong>.
          </li>
          <li>
            Measure <strong>N(t)</strong> later—e.g. <strong>2.1 kg</strong>.
          </li>
          <li>
            Record elapsed time <strong>t</strong>—e.g. <strong>5 minutes</strong>.
          </li>
          <li>
            Rearrange: <strong>T = t × ln(2) / ln(N(0)/N(t))</strong> → about{" "}
            <strong>19.88 minutes</strong> for that example.
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          To <strong>find remaining amount</strong> when T is known, use this
          calculator: enter N(0), T, and t and read N(t).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this half-life calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter initial amount N(0) in any consistent unit (grams, atoms, etc.).</li>
          <li>Enter half-life T in your chosen time unit.</li>
          <li>Enter elapsed time t in the same unit.</li>
          <li>Read N(t), percent remaining, λ, and τ in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Half-life vs doubling time
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Half-life</strong> describes decay (quantity shrinking).{" "}
          <strong>Doubling time</strong> describes exponential growth (quantity
          doubling each period)—common in biology and population models. Same
          mathematics, opposite direction.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>N(0) = 100</strong>, <strong>T = 5</strong>, <strong>t = 10</strong>{" "}
            → <strong>t/T = 2</strong> half-lives →{" "}
            <strong>N(t) = 100 × 0.5² = 25</strong> (25% remains).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (half-life)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">What is half life?</p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The time for a quantity to drop to <strong>half</strong> its starting
              value. Do not confuse it with <strong>mean lifetime τ</strong>,
              which is the average time a single nucleus survives.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How to calculate half life?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              From decay constant: <strong>T = ln(2)/λ</strong>. From mean
              lifetime: <strong>T = ln(2) × τ</strong>. From data: use{" "}
              <strong>T = t × ln(2) / ln(N(0)/N(t))</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the half life of radium?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Radium-218</strong>: about <strong>25.2 × 10⁻⁶ seconds</strong>.
              Common <strong>radium-226</strong>: about <strong>1,600 years</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the half life of carbon?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Carbon-14</strong>: <strong>5,730 years</strong>. After that
              time, roughly half of an original C-14 sample has decayed.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the half life of uranium?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Natural uranium isotopes include <strong>U-238</strong> (~4.5 billion
              years), <strong>U-235</strong> (~700 million years), and{" "}
              <strong>U-234</strong> (~246,000 years).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is biological half-life?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Time for the body to eliminate half of a substance—used in
              pharmacology for <strong>drug half-life</strong>, separate from
              nuclear decay but same math shape.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why use 0.5^(t/T) instead of e^(−λt)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              They are equivalent when <strong>λ = ln(2)/T</strong>. The half-power
              form counts how many half-lives have passed.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Must time units match?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. If T is in years, <strong>t</strong> must be in years too.
              N(0) and N(t) can use any consistent amount unit.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
