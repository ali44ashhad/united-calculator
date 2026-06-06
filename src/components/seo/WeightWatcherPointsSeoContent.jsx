import React from "react";
import { Link } from "react-router-dom";

export default function WeightWatcherPointsSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Weight Watchers points calculator: classic food points from labels
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>Weight Watchers points calculator</strong> to score
          a food item with the <strong>classic WW-style formula</strong>:{" "}
          <strong>calories ÷ 50</strong>, plus <strong>fat (g) ÷ 12</strong>, minus{" "}
          <strong>fiber (g) ÷ 5</strong> (fiber capped at <strong>4 g</strong>).
          Enter values from the nutrition facts panel—no protein, sugar, or
          saturated fat fields on this page.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This is <strong>not</strong> the current WW <strong>SmartPoints</strong>{" "}
          system. For daily calorie budgets, try the{" "}
          <Link
            to="/health/tdee-calculator"
            className="text-primary hover:underline"
          >
            TDEE Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          . For fat grams from calories, see the{" "}
          <Link
            to="/health/fat-intake-calculator"
            className="text-primary hover:underline"
          >
            Fat Intake Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a Weight Watchers points calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>WW points calculator</strong> converts label nutrition into a
          single <strong>food point score</strong> for portion tracking. This tool
          uses the <strong>legacy calories + fat − fiber</strong> method many
          people remember from older Weight Watchers plans—not PointsPlus or modern
          SmartPoints.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Calories</strong> (kcal per serving)
          </li>
          <li>
            <strong>Total fat</strong> (grams)
          </li>
          <li>
            <strong>Dietary fiber</strong> (grams, max 4 g credit)
          </li>
          <li>
            Point breakdown and rounded total
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
              <li>Classic points = cal÷50 + fat÷12 − min(fiber,4)÷5</li>
              <li>Calorie, fat, and fiber components</li>
              <li>4 g fiber cap explained in results</li>
              <li>One-decimal point total</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>SmartPoints (protein, sugar, sat fat)</li>
              <li>PointsPlus (protein, carbs, fat, fiber)</li>
              <li>Daily points budget or ZeroPoint foods</li>
              <li>Official WW app sync</li>
              <li>Restaurant database lookup</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Classic Weight Watchers points formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Points = (calories ÷ 50) + (fat g ÷ 12) − (min(fiber g, 4) ÷ 5)

Round to one decimal place.

Example: 250 kcal, 10 g fat, 3 g fiber
  Calories: 250 ÷ 50 = 5.0
  Fat:      10 ÷ 12 ≈ 0.8
  Fiber:    3 ÷ 5 = 0.6 (under 4 g cap)
  Points ≈ 5.0 + 0.8 − 0.6 = 5.2`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Classic points vs SmartPoints
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>SmartPoints</strong> (current WW branding) weighs{" "}
          <strong>protein, sugar, saturated fat, and calories</strong>. This page
          uses the <strong>older three-input rule</strong> only. If you follow an
          active WW membership, use the official app for plan-accurate scores.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this Weight Watchers points calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Read calories, total fat, and dietary fiber from the label (per serving).</li>
          <li>Enter all three values above.</li>
          <li>Review the point total and component breakdown.</li>
          <li>Remember fiber above 4 g does not subtract extra points in this formula.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Serving:</strong> 320 kcal, 14 g fat, 6 g fiber
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Calories: 320 ÷ 50 = 6.4</li>
            <li>Fat: 14 ÷ 12 ≈ 1.2</li>
            <li>Fiber: min(6, 4) ÷ 5 = 0.8 (only 4 g counts)</li>
            <li>
              <strong>Points:</strong> 6.4 + 1.2 − 0.8 ≈ <strong>6.8</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why fiber is capped at 4 grams
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In the classic system, <strong>up to 4 g of fiber</strong> lowers the
          score because fiber adds bulk with fewer digestible calories. Extra fiber
          beyond 4 g does not keep reducing points in this legacy rule—matching how
          the original calculator behaved.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (WW points)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How are Weight Watchers points calculated here?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Points = calories÷50 + fat÷12 − min(fiber,4)÷5</strong>, rounded
              to one decimal.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this the same as SmartPoints?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. SmartPoints need protein, sugar, and saturated fat. This tool
              uses calories, total fat, and fiber only.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this for the latest WW plan?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Only if you intentionally track with the <strong>classic
              formula</strong>. Enrolled WW members should rely on the official app
              for current plan math.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my food has zero fiber?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter <strong>0</strong> for fiber. The deduction term becomes zero;
              points come from calories and fat only.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do I use calories from fat or total calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use <strong>total calories</strong> on the label plus <strong>total
              fat grams</strong>—not calories-from-fat alone.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do points relate to daily calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Points summarize a serving for a point-budget diet. Total daily
              calories depend on your plan—estimate maintenance with our{" "}
              <Link
                to="/health/tdee-calculator"
                className="text-primary hover:underline"
              >
                TDEE Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this calculator affiliated with Weight Watchers / WW?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Independent educational tool. Weight Watchers and WW are
              trademarks of their respective owners.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this Weight Watchers points calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Label math only—not a substitute for dietitian or physician
              guidance for weight management or medical conditions.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
