import React from "react";
import { Link } from "react-router-dom";

export default function DiceRollerSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Dice roller online: roll d6, d20, and custom dice
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Tabletop RPGs, board games, and quick decisions often need fair-ish
          random numbers. This <strong>free dice roller online</strong> lets you
          pick <strong>how many dice</strong> and <strong>sides per die</strong>{" "}
          (for example <strong>2d6</strong> = two six-siders), then shows each face
          and the <strong>total sum</strong>. Rolls run locally in your browser
          with <strong>Math.random()</strong>—nothing is sent to a server.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For plain numeric draws in a range, try the{" "}
          <Link
            to="/math/random-number-generator"
            className="text-primary hover:underline"
          >
            Random Number Generator
          </Link>
          . For event odds and combinations, see the{" "}
          <Link
            to="/math/probability-calculator"
            className="text-primary hover:underline"
          >
            Probability Calculator
          </Link>
          , the{" "}
          <Link
            to="/statistics/statistics-calculator"
            className="text-primary hover:underline"
          >
            Statistics Calculator
          </Link>
          , and the{" "}
          <Link
            to="/other/day-counter"
            className="text-primary hover:underline"
          >
            Day Counter
          </Link>{" "}
          if you are tracking campaign dates or session spacing.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Dice notation</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Gamers write <strong>X d Y</strong> (spoken “X dy”): roll{" "}
          <strong>X</strong> dice with <strong>Y</strong> sides each.{" "}
          <strong>1d20</strong> is one twenty-sided die; <strong>4d6</strong> is
          four six-siders (common for ability scores). This tool labels the roll
          the same way in the summary.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this virtual dice roller
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the number of dice (e.g. 2).</li>
          <li>Enter sides per die (e.g. 6 for a standard cube).</li>
          <li>Click Roll Dice to generate new random faces.</li>
          <li>Read notation, individual results, and the total in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Roll formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`For each die i = 1 … N:
  rollᵢ = floor(random × S) + 1     (integer from 1 to S)

Total = roll₁ + roll₂ + … + rollₙ

N = number of dice
S = sides per die
random = uniform pseudo-random in [0, 1) from the browser`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Each face from 1 through S is equally likely on one die (fair die
          model). The total’s distribution depends on N and S—for example 2d6
          most often sums near 7.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common dice reference (tabletop)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>d4</strong> — 4 sides (tetrahedron)
          </li>
          <li>
            <strong>d6</strong> — 6 sides (standard cube)
          </li>
          <li>
            <strong>d8</strong> — 8 sides
          </li>
          <li>
            <strong>d10</strong> — 10 sides (percentile pairs often used)
          </li>
          <li>
            <strong>d12</strong> — 12 sides
          </li>
          <li>
            <strong>d20</strong> — 20 sides (D&amp;D attack rolls)
          </li>
          <li>
            <strong>d100</strong> — enter 1 die, 100 sides (or use d10 tens +
            ones physically)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Roll <strong>2d6</strong>: set dice = 2, sides = 6, click Roll Dice.
            You might see individual results <strong>4</strong> and{" "}
            <strong>5</strong> with total <strong>9</strong>. Each click produces
            a new independent roll.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Pseudo-random (not certified casino or blockchain RNG)</li>
          <li>Maximum 100 dice per roll in this tool</li>
          <li>Whole-number sides only (no Fudge/percentile modifiers built in)</li>
          <li>Does not keep roll history or advantage/disadvantage rules</li>
          <li>Does not model loaded or physical-dice bias</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are online dice rollers truly random?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Browsers use pseudo-random algorithms good enough for games. They
              are not audited for gambling compliance. For critical fairness, use
              physical dice or a dedicated RNG service.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the average of 2d6?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Each d6 averages 3.5, so 2d6 averages 7. Individual rolls vary from
              2 to 12. Use the Statistics Calculator if you are analyzing many
              recorded rolls.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I roll a coin flip?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes: use 1 die with 2 sides (1 = heads, 2 = tails by agreement).
              Or use the Random Number Generator for 0/1 style draws.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
