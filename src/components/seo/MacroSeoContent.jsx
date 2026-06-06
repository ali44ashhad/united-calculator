import React from "react";
import { Link } from "react-router-dom";

export default function MacroSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Macro calculator: daily protein, carbs &amp; fat grams
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>macro calculator</strong> to split a{" "}
          <strong>daily calorie target</strong> into{" "}
          <strong>protein, carbohydrate, and fat grams</strong>. Enter calories
          and your chosen <strong>macro percentages</strong> (must sum to{" "}
          <strong>100%</strong>)—the tool converts them using{" "}
          <strong>4 kcal/g for carbs and protein</strong> and{" "}
          <strong>9 kcal/g for fat</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you track <strong>IIFYM (if it fits your macros)</strong>, plan a{" "}
          <strong>balanced diet</strong>, <strong>high-protein</strong> cut,{" "}
          <strong>low-carb</strong>, or <strong>keto-style</strong> split, this{" "}
          <strong>macronutrient calculator</strong> turns ratios into gram targets.
          It does not estimate TDEE—get calories first from the{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          , then refine single macros on the{" "}
          <Link
            to="/health/fat-intake-calculator"
            className="text-primary hover:underline"
          >
            Fat Intake Calculator
          </Link>{" "}
          or{" "}
          <Link
            to="/health/protein-calculator"
            className="text-primary hover:underline"
          >
            Protein Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a macro calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>macro calculator</strong> (or{" "}
          <strong>macronutrient calculator</strong>) divides total daily calories
          into the three main energy nutrients: <strong>protein</strong>,{" "}
          <strong>carbohydrates</strong>, and <strong>fat</strong>. Each macro
          contributes a set number of calories per gram, so percentage splits
          translate directly into food-scale gram targets.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Protein</strong> — muscle repair, satiety (~4 kcal/g)
          </li>
          <li>
            <strong>Carbohydrates</strong> — primary fuel for many activities (~4
            kcal/g)
          </li>
          <li>
            <strong>Fat</strong> — hormones, fat-soluble vitamins (~9 kcal/g)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this macro calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Protein, carb, and fat grams per day</li>
              <li>Kcal from each macro</li>
              <li>Presets: balanced, high protein, low carb, keto-style</li>
              <li>Per-meal split (÷3)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>TDEE or BMR estimation</li>
              <li>Weight-based protein (g/kg) auto-fill</li>
              <li>Net carbs or fiber adjustments</li>
              <li>Meal plans or food logging</li>
              <li>Medical diet prescriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Macro gram formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Macro kcal = Daily calories × (Macro % ÷ 100)

Carb grams     = Carb kcal ÷ 4
Protein grams  = Protein kcal ÷ 4
Fat grams      = Fat kcal ÷ 9

Carb % + Protein % + Fat % = 100%

Example: 2,000 kcal · 50% C / 20% P / 30% F
  Carbs:   1,000 kcal → 250 g
  Protein:   400 kcal → 100 g
  Fat:       600 kcal →  67 g`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common macro splits
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Balanced (~50/20/30):</strong> general fitness and moderate
            carb intake
          </li>
          <li>
            <strong>High protein (~40/30/30):</strong> muscle retention during fat
            loss
          </li>
          <li>
            <strong>Low carb (~20/35/45):</strong> reduced carbohydrate emphasis
          </li>
          <li>
            <strong>Keto-style (~5/25/70):</strong> very low carb, high fat—not for
            everyone
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Pick a split that matches your training, preferences, and health
          guidance—then adjust grams as you monitor progress.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this macro calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Estimate <strong>daily calories</strong> (maintenance, deficit, or
            surplus).
          </li>
          <li>Choose a preset or type custom carb, protein, and fat percentages.</li>
          <li>Confirm percentages total <strong>100%</strong>.</li>
          <li>Use gram targets for meal prep, labels, and tracking apps.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>2,500 kcal</strong>, high-protein split{" "}
            <strong>40% carbs · 30% protein · 30% fat</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Carbs: 1,000 kcal → <strong>250 g</strong></li>
            <li>Protein: 750 kcal → <strong>187.5 g</strong></li>
            <li>Fat: 750 kcal → <strong>83.3 g</strong></li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Macros for weight loss, gain, or maintenance
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Calories</strong> drive weight change; <strong>macro ratios</strong>{" "}
          shape body composition and adherence. In a deficit, higher protein often
          helps preserve lean mass. In a surplus, carbs and protein support training
          volume. This calculator keeps your chosen ratios while you change the
          calorie total.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Net carbs and label math
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Keto trackers sometimes count <strong>net carbs</strong> (total minus
          fiber). This macro tool uses total carbohydrate percentage of calories—not
          per-food net carb math. For label net carbs, use the{" "}
          <Link
            to="/health/carbohydrate-calculator"
            className="text-primary hover:underline"
          >
            Carbohydrate Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (macros &amp; nutrition)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a macro calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A tool that converts daily calories and macro percentages into{" "}
              <strong>grams of protein, carbs, and fat</strong> per day.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate my macros?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Set calories, pick percentages that sum to 100%, then divide carb and
              protein kcal by 4 and fat kcal by 9. This page calculates automatically.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Do macros have to equal 100%?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Carb, protein, and fat percentages must account for all calories
              in your split (within rounding).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this use weight and height?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. You enter calories directly. Use the{" "}
              <Link
                to="/health/calorie-calculator"
                className="text-primary hover:underline"
              >
                Calorie Calculator
              </Link>{" "}
              for TDEE from body stats if you need that step first.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a good macro split?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many start near <strong>50% carbs, 20% protein, 30% fat</strong>.
              Strength athletes may raise protein; low-carb plans lower carbs and
              raise fat.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many grams of protein per day?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Depends on calories and protein %. Example: 2,000 kcal at 25% protein
              = 500 kcal → <strong>125 g</strong>. Weight-based rules (e.g. g/kg)
              live on the Protein Calculator.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does fat use 9 calories per gram?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Fat is more calorie-dense than carbs or protein (4 kcal/g each), so fat
              grams stay lower for the same calorie share.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this for keto?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—try the keto-style preset (~5/25/70). Ketosis also depends on
              total carbs, consistency, and individual response—not macros alone.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this macro calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>nutrition calculator</strong>.
              Diabetes, kidney disease, and clinical diets require professional
              supervision.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
