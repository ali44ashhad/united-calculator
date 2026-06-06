import React from "react";
import { Link } from "react-router-dom";

export default function FatIntakeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Fat intake calculator: daily fat grams from calories &amp; percentage
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>fat intake calculator</strong> to turn your{" "}
          <strong>daily calorie target</strong> and chosen{" "}
          <strong>fat percentage</strong> into <strong>grams of fat per day</strong>.
          Whether you track <strong>macros for weight loss</strong>, muscle gain,
          or a balanced diet, knowing <strong>how much fat to eat daily</strong>{" "}
          helps you plan oils, nuts, dairy, and other fat-rich foods.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Many adults aim for about <strong>20% to 35% of calories from fat</strong>{" "}
          (the common AMDR range). Enter calories above—maintenance TDEE, a deficit,
          or any goal—and pick a fat % to see total grams, fat kcal, and rough
          per-meal splits. For full protein + carb + fat targets, use the{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
          </Link>
          . If you still need daily calories, start with the{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          .
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Pair fat targets with{" "}
          <Link
            to="/health/protein-calculator"
            className="text-primary hover:underline"
          >
            Protein Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/carbohydrate-calculator"
            className="text-primary hover:underline"
          >
            Carbohydrate Calculator
          </Link>{" "}
          (net carbs per food) for a complete nutrition picture.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a fat intake calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>daily fat calculator</strong> (or{" "}
          <strong>dietary fat calculator</strong>) converts{" "}
          <strong>calories and macro percentage</strong> into{" "}
          <strong>fat grams</strong>. Fat is energy-dense—about{" "}
          <strong>9 calories per gram</strong>—so a small change in fat % moves
          gram counts noticeably on a fixed calorie budget.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Total fat grams per day</strong> from your inputs
          </li>
          <li>
            <strong>Fat calories</strong> (kcal from fat only)
          </li>
          <li>
            <strong>Remaining calories</strong> for protein and carbohydrates
          </li>
          <li>
            <strong>Per-meal estimates</strong> if you split fat across 3 or 4 meals
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this fat intake calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Daily fat grams from calories × fat %</li>
              <li>Fat kcal (9 kcal/g)</li>
              <li>Preset fat percentages (20–40%)</li>
              <li>Per-meal fat splits (÷3 and ÷4)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>TDEE or BMR estimation (use Calorie/BMR tools)</li>
              <li>Protein or carbohydrate gram targets</li>
              <li>Saturated vs unsaturated fat breakdown</li>
              <li>Medical lipid or cholesterol prescriptions</li>
              <li>Omega-3/omega-6 ratio planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Fat intake formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Fat calories = Daily calories × (Fat % ÷ 100)
Fat grams     = Fat calories ÷ 9

Example: 2,000 kcal at 30% fat
  → Fat kcal = 2,000 × 0.30 = 600 kcal
  → Fat (g)  = 600 ÷ 9 ≈ 66.7 g per day`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Protein and carbohydrates are usually counted at about{" "}
          <strong>4 kcal per gram</strong> when you allocate the rest of your
          calories after fat is set.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How much fat should you eat per day?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Guidelines for many healthy adults suggest{" "}
          <strong>20–35% of total calories from fat</strong>. That band supports
          fat-soluble vitamins (A, D, E, K) and essential fatty acids while leaving
          room for protein and carbs. Athletes, ketogenic diets, or very low-fat
          therapeutic plans may sit outside that range under professional supervision.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>~20–25% fat:</strong> often used in moderate or lower-fat
            approaches when calories are controlled
          </li>
          <li>
            <strong>~30% fat:</strong> a common default in general macro templates
          </li>
          <li>
            <strong>~35–40%+ fat:</strong> sometimes seen in higher-fat or low-carb
            patterns—not appropriate for everyone
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Healthy fats vs limits within your gram budget
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>macro fat calculator</strong> totals grams—it does not judge
          fat quality. Within your daily fat grams, many nutrition guides emphasize{" "}
          <strong>unsaturated fats</strong> (olive oil, avocados, nuts, fatty fish)
          and recommend limiting <strong>saturated</strong> and{" "}
          <strong>trans fats</strong> for heart health. Your total gram target is
          the ceiling; food choices fill it.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this fat intake calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Estimate <strong>daily calories</strong> (maintenance, loss, or gain).
          </li>
          <li>
            Choose a <strong>fat percentage</strong> or type a custom value (0–100%).
          </li>
          <li>
            Review <strong>grams per day</strong>, fat kcal, and per-meal splits.
          </li>
          <li>
            Allocate remaining calories to protein and carbs via the{" "}
            <Link
              to="/health/macro-calculator"
              className="text-primary hover:underline"
            >
              Macro Calculator
            </Link>{" "}
            if you need all three macros.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>2,000 kcal/day</strong> at <strong>30% fat</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Fat calories = 600 kcal</li>
            <li>
              Daily fat ≈ <strong>66.7 g</strong>
            </li>
            <li>~22 g fat per meal if divided across 3 meals</li>
            <li>~1,400 kcal left for protein and carbohydrates combined</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Fat intake for weight loss, gain, or maintenance
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Weight loss</strong> usually lowers total calories first; fat
          grams drop if you keep the same fat %. Some people slightly raise fat %
          on low-carb plans; others keep fat moderate and prioritize protein.{" "}
          <strong>Weight gain</strong> adds calories—fat grams rise proportionally
          unless you change the percentage. The math here always follows your
          calorie total and fat % inputs.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (daily fat &amp; macros)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How much fat should I eat daily?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A common range is <strong>20–35% of calories from fat</strong>. Enter
              your calorie target and a percentage in that band—or one your clinician
              or coach recommends—to get grams with this{" "}
              <strong>fat intake calculator</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate fat grams from calories?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply calories by fat %, divide by 100 for fat kcal, then divide
              by 9 for grams. Example: 2,500 kcal × 25% = 625 kcal fat → about{" "}
              <strong>69 g</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this calculator for weight loss?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Use a <strong>calorie deficit</strong> total (from TDEE minus
              your planned deficit), then your chosen fat %. Lower calories mean
              fewer fat grams at the same percentage.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What fat percentage is best for keto?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Ketogenic diets often use much higher fat percentages (sometimes 60–75%
              of calories) with very low carbs—that is a full macro plan, not just
              this single-macro tool. Use the{" "}
              <Link
                to="/health/macro-calculator"
                className="text-primary hover:underline"
              >
                Macro Calculator
              </Link>{" "}
              when carbs, protein, and fat must sum to 100%.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is fat 9 calories per gram?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Fat stores more energy per gram than protein or carbs (~4 kcal/g).
              Food labels and <strong>macro calculators</strong> use 9 kcal/g for
              total dietary fat.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this set protein and carbs?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—only fat grams from your fat %. Remaining calories are shown as a
              single pool for protein and carbohydrates together.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many grams of fat per meal?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide daily fat grams by the number of meals you eat. This page shows
              ÷3 and ÷4 as quick references; adjust if you snack or use intermittent
              fasting windows.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is low fat always healthier?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not necessarily. Very low fat can make it harder to get essential fats
              and fat-soluble vitamins. Quality, calorie balance, and individual health
              matter more than grams alone—discuss targets with a qualified provider if
              you have cardiovascular or metabolic conditions.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this fat intake calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>nutrition calculator</strong> for
              macro math. Medical nutrition therapy requires a registered dietitian
              or physician.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
