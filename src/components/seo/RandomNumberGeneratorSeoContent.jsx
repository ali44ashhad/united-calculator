import React from "react";
import { Link } from "react-router-dom";

export default function RandomNumberGeneratorSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Random number generator: integer in a range
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>random number generator</strong> to pick one{" "}
          <strong>whole integer</strong> from an <strong>inclusive</strong> range.
          Set minimum and maximum, click <strong>Generate Now</strong>. Example:
          min=1, max=6 → a dice-style roll from 1 to 6.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>probability math</strong>, see the{" "}
          <Link
            to="/math/probability-calculator"
            className="text-primary hover:underline"
          >
            Probability Calculator
          </Link>
          . For <strong>counting outcomes</strong>, try the{" "}
          <Link
            to="/math/permutation-combination-calculator"
            className="text-primary hover:underline"
          >
            Permutation &amp; Combination Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a random number generator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>random number generator (RNG)</strong> produces values without
          a fixed pattern. This page returns one <strong>integer</strong> between
          your min and max each time you generate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this generator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>One random integer per click</li>
              <li>Inclusive min and max</li>
              <li>Range size (possible values)</li>
              <li>Negative integers allowed</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Cryptographic / security-grade RNG</li>
              <li>Multiple numbers in one draw</li>
              <li>Decimal or fractional results</li>
              <li>Unique draws without repeats</li>
              <li>Seeded reproducible sequences</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How picking works</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Possible values = max − min + 1

Each value from min to max has equal chance per click.
Uses browser Math.random() (pseudo-random).

Example: min=10, max=20 → 11 possible integers`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Pseudo-random vs true random
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Math.random()</strong> is <strong>pseudo-random</strong>—fine
          for games, classroom demos, and quick picks. Do not use it for passwords,
          encryption keys, or regulated lotteries.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this random number generator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter minimum (lowest allowed integer).</li>
          <li>Enter maximum (highest allowed integer).</li>
          <li>Click Generate Now and read the result.</li>
          <li>Click again for another independent pick.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example uses</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Dice</strong> → min=1, max=6
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Coin flip</strong> → min=0, max=1 (or 1–2)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Raffle ticket</strong> → min=1, max=500
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (random numbers)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is each number equally likely?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—within the inclusive range, each integer has the same chance on
              each generate click.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can minimum equal maximum?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—the only possible result is that single value.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why only one number at a time?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool is a simple single-draw picker. Generate again for more
              values.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Will I get duplicates if I generate twice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—draws are independent. The same number can appear on consecutive
              clicks.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is my data sent to a server?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—the random value is computed locally in your browser.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this for statistics homework?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For small simulations it can help sample integers. For probability
              formulas, use the{" "}
              <Link
                to="/math/probability-calculator"
                className="text-primary hover:underline"
              >
                Probability Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if min is greater than max?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The tool shows an error—swap the values so minimum ≤ maximum.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are decimals supported?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—enter <strong>integers</strong> only. The result is always a whole
              number.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
