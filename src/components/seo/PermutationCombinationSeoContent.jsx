import React from "react";
import { Link } from "react-router-dom";

export default function PermutationCombinationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Permutation &amp; combination calculator: nPr and nCr
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>permutation and combination calculator</strong>{" "}
          to compute <strong>nPr</strong> (ordered arrangements) and{" "}
          <strong>nCr</strong> (unordered selections) from two whole numbers. Example:{" "}
          n=10, r=3 → <strong>10P3 = 720</strong>, <strong>10C3 = 120</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For event <strong>probability</strong>, see the{" "}
          <Link
            to="/math/probability-calculator"
            className="text-primary hover:underline"
          >
            Probability Calculator
          </Link>
          . For <strong>factors</strong> of integers, try the{" "}
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
          Permutation vs combination
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>permutation</strong> counts ways to <strong>arrange</strong> r
          items chosen from n—order matters (ABC ≠ BAC). A{" "}
          <strong>combination</strong> counts ways to <strong>select</strong> r
          items—order does not matter (ABC = BAC).
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
              <li>nPr — permutations without replacement</li>
              <li>nCr — combinations without replacement</li>
              <li>Exact integer results (BigInt)</li>
              <li>0 ≤ r ≤ n validation</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Permutations with repetition (n^r)</li>
              <li>Combinations with repetition</li>
              <li>Multiset / identical-item formulas</li>
              <li>Derangements or circular permutations</li>
              <li>Probability of specific events</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">nPr and nCr formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`nPr = n! / (n − r)!
nCr = n! / (r! × (n − r)!)

Also: nCr = nPr / r!

Example: 10P3 = 10 × 9 × 8 = 720
         10C3 = 720 / 6 = 120`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When order matters (permutation)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Race medals, PIN codes, seating order—different orderings count as
          different outcomes. Use <strong>nPr</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When order does not matter (combination)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Choosing a team, lottery subsets, pizza toppings—only the set matters.
          Use <strong>nCr</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this permutation combination calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter n = total distinct items.</li>
          <li>Enter r = how many you choose (0 ≤ r ≤ n).</li>
          <li>Read nPr and nCr in the summary.</li>
          <li>Pick the value that matches whether order matters in your problem.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculations</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>5 choose 2 committee</strong> → n=5, r=2 →{" "}
            <strong>5C2 = 10</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Top 3 from 8 runners</strong> → n=8, r=3 →{" "}
            <strong>8P3 = 336</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>All items</strong> → n=6, r=6 → <strong>6P6 = 720</strong>,{" "}
            <strong>6C6 = 1</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (permutations &amp; combinations)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does nPr mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>nPr</strong> is the number of permutations: ways to arrange r
              items from n distinct items without replacement.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does nCr mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>nCr</strong> is the number of combinations: ways to choose r
              items from n where order does not matter.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is nCr always less than or equal to nPr?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Each combination corresponds to r! different permutations, so nCr =
              nPr ÷ r! (for r ≥ 1).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is 0C0?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              By convention, <strong>0C0 = 1</strong> (one way to choose nothing).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can n or r be decimals?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—this tool requires <strong>whole numbers</strong> because
              factorial counting applies to discrete items.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as n^r?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—n^r counts choices <strong>with repetition</strong> and order. This
              calculator uses standard nPr/nCr <strong>without</strong> replacement.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this used in probability?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Count favorable outcomes with nCr or nPr, then divide by total
              outcomes—see the{" "}
              <Link
                to="/math/probability-calculator"
                className="text-primary hover:underline"
              >
                Probability Calculator
              </Link>{" "}
              for event math.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is there a maximum n?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Very large n can slow computation in the browser. This page supports
              n up to 1000 with exact integers.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
