import React from "react";
import { Link } from "react-router-dom";

export default function OneRepMaxSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          One rep max calculator: estimate your 1RM for strength training
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>one rep max calculator</strong> ({" "}
          <strong>1RM calculator</strong>) to estimate the heaviest weight you can
          lift for <strong>one repetition</strong> from a submaximal set. Enter{" "}
          <strong>weight lifted</strong> (kg) and <strong>reps completed</strong>;
          the tool applies the <strong>Epley formula (1985)</strong> and shows{" "}
          <strong>training loads</strong> at common percentages of your estimated
          max.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Strength athletes use <strong>1RM</strong> to program squats, bench press,
          deadlifts, and overhead work without testing a true maximum every session.
          Pair programming with nutrition from the{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/protein-calculator"
            className="text-primary hover:underline"
          >
            Protein Calculator
          </Link>
          . Track conditioning with the{" "}
          <Link
            to="/health/calories-burned-calculator"
            className="text-primary hover:underline"
          >
            Calories Burned Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is one rep max (1RM)?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>One rep max (1RM)</strong> is the maximum load you can lift for
          a single full repetition with proper form on a specific exercise. It is a
          benchmark in <strong>strength training</strong>, powerlifting, and
          weightlifting for setting intensity (% of 1RM) across training blocks.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Heavy singles</strong> — peak strength expression
          </li>
          <li>
            <strong>Submaximal sets</strong> — safer input for 1RM formulas
          </li>
          <li>
            <strong>Percentage training</strong> — e.g. 5×5 at 80% of estimated 1RM
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this 1RM calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Epley 1RM estimate (kg and lb)</li>
              <li>Input set (weight × reps)</li>
              <li>Training loads at 50–95% of 1RM</li>
              <li>Accuracy note for high-rep sets</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Brzycki, Lombardi, or Wathan formulas</li>
              <li>Exercise-specific coefficients</li>
              <li>RPE (rate of perceived exertion) integration</li>
              <li>Velocity-based training (VBT)</li>
              <li>Competition attempt rules or federation standards</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Epley 1RM formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Estimated 1RM = Weight lifted × (1 + Reps ÷ 30)

Example: 100 kg × 5 reps
  1RM ≈ 100 × (1 + 5/30)
      ≈ 100 × 1.1667
      ≈ 116.7 kg

80% of 1RM ≈ 93.3 kg (typical strength work)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Other <strong>1RM equations</strong> (Brzycki, Lombardi) may differ by a
          few kilograms at the same input. This page uses <strong>Epley only</strong>{" "}
          for consistency.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Training percentages of 1RM
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Coaches often prescribe sets as a <strong>percentage of 1RM</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>90–95%</strong> — heavy singles/doubles, peaking
          </li>
          <li>
            <strong>80–85%</strong> — strength (low reps, multiple sets)
          </li>
          <li>
            <strong>70–75%</strong> — hypertrophy-strength blend
          </li>
          <li>
            <strong>60% and below</strong> — technique, warm-ups, endurance
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this one rep max calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Pick a recent hard set (e.g. 5 reps at 100 kg) with good form near
            failure.
          </li>
          <li>Enter weight in kilograms and exact reps completed.</li>
          <li>Read estimated 1RM and percentage training loads.</li>
          <li>
            Re-test with a fresher 3–8 rep set if you used very high reps (12+).
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Bench press:</strong> 80 kg × 8 reps
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              1RM ≈ 80 × (1 + 8/30) ≈ <strong>101.3 kg</strong> (~223 lb)
            </li>
            <li>85% ≈ 86.1 kg — common 5-rep strength work</li>
            <li>70% ≈ 70.9 kg — volume or technique emphasis</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Estimated 1RM vs true max testing
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Formula <strong>1RM estimates</strong> reduce injury risk versus frequent
          all-out singles. True <strong>max lift</strong> tests still matter before
          competition or when formulas disagree with performance—use progressive
          warm-ups, spotters, and proper equipment.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Safety and limitations
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Epley is most reliable from roughly 2–10 reps</li>
          <li>Technique breakdown or grinding reps skew results high</li>
          <li>Different lifts (squat vs curl) are not interchangeable for 1RM</li>
          <li>Fatigue, sleep, and nutrition affect any given day&apos;s performance</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (1RM &amp; strength)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is one rep max (1RM)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The heaviest weight you can lift once with full range of motion on
              an exercise. This <strong>max lift calculator</strong> estimates it
              from submaximal data.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate my one rep max?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use Epley: multiply weight lifted by (1 + reps ÷ 30). Enter your set
              above for kg, lb, and training percentages.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many reps for an accurate 1RM estimate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              About <strong>2–10 reps</strong> at high effort. Sets of 15+ are poor
              predictors of true 1RM for most lifters.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Epley vs Brzycki 1RM formula?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Brzycki: 1RM = weight × (36 ÷ (37 − reps)). Values often land close to
              Epley for mid-range reps but diverge at extremes. This tool uses
              Epley.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use pounds instead of kilograms?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter kg (divide lb by ~2.205). Results show both kg and lb for 1RM
              and percentage loads.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is 80% of my 1RM?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply estimated 1RM by 0.80. The summary table lists 50–95% loads
              automatically after you calculate.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should beginners test 1RM?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Beginners often benefit from technique work and submaximal progression
              before true max attempts. Estimated 1RM from 5–10 rep sets is usually
              enough early on.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does 1RM vary by exercise?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Your squat 1RM, bench 1RM, and deadlift 1RM are separate numbers—
              calculate each lift from a recent set on that movement.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this one rep max calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is a <strong>workout calculator</strong> for education. Heart
              conditions, joint injuries, and return-to-lift protocols need medical
              and coaching clearance.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
