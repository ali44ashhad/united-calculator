import React from "react";
import { Link } from "react-router-dom";

export default function ProteinSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Protein calculator: how much protein do I need per day?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>protein calculator</strong> to estimate your{" "}
          <strong>daily protein intake</strong> in grams from{" "}
          <strong>body weight (kg)</strong> and <strong>activity level</strong>.
          It applies common <strong>grams per kilogram (g/kg)</strong> multipliers
          from <strong>0.8 g/kg</strong> (sedentary RDA-style) up to{" "}
          <strong>1.8 g/kg</strong> for intense training.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For full <strong>macro splits</strong> (protein, carbs, fat by calories),
          use the{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
          </Link>
          . For fat grams only, try the{" "}
          <Link
            to="/health/fat-intake-calculator"
            className="text-primary hover:underline"
          >
            Fat Intake Calculator
          </Link>
          . Estimate total calories first with the{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>{" "}
          or{" "}
          <Link
            to="/health/bmr-calculator"
            className="text-primary hover:underline"
          >
            BMR Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a protein calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>daily protein needs calculator</strong> turns weight and training
          volume into a <strong>protein target in grams</strong>. Unlike percentage-based
          macro tools, this page uses <strong>g/kg body weight</strong>—a method
          common in sports nutrition and general wellness planning.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Daily protein grams</strong>
          </li>
          <li>
            <strong>g/kg multiplier</strong> by activity
          </li>
          <li>
            <strong>Protein calories</strong> (4 kcal/g)
          </li>
          <li>
            <strong>Per-meal splits</strong> (3 or 4 meals)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this protein calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Weight (kg) × g/kg by activity</li>
              <li>Sedentary through athlete multipliers</li>
              <li>Protein kcal and meal splits</li>
              <li>RDA-style 0.8 g/kg baseline</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Separate cut/bulk goal selector</li>
              <li>Lean body mass–based protein</li>
              <li>Amino acid or supplement dosing</li>
              <li>Kidney or medical diet plans</li>
              <li>Food-by-food protein logging</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Daily protein formula (g/kg)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Daily protein (g) = body weight (kg) × g/kg factor

Activity level              g/kg factor
Sedentary                   0.8
Lightly active              1.0
Moderately active           1.3
Active                      1.6
Athlete                     1.8

Protein calories = protein (g) × 4 kcal/g

Example: 70 kg, moderately active
  → 70 × 1.3 = 91 g protein/day
  → 91 × 4 ≈ 364 kcal from protein`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How much protein per kg of body weight?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The general <strong>RDA</strong> is about <strong>0.8 g/kg</strong> for
          sedentary adults. People who train regularly often use{" "}
          <strong>1.2–2.0 g/kg</strong> depending on sport, calorie intake, and
          recovery needs. This calculator uses fixed activity tiers within that
          practical range.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this protein calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your current body weight in kilograms.</li>
          <li>Select the activity level that best matches your weekly training.</li>
          <li>Read daily protein grams, calories, and per-meal targets.</li>
          <li>Adjust food choices or pair with the Macro Calculator for carbs and fat.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Weight:</strong> 80 kg · <strong>Activity:</strong> Active (1.6
            g/kg)
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              <strong>Daily protein:</strong> 80 × 1.6 = <strong>128 g</strong>
            </li>
            <li>
              <strong>Protein calories:</strong> 128 × 4 ≈ 512 kcal
            </li>
            <li>
              <strong>Per meal (4):</strong> ~32 g protein each
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Protein vs macro and lean-mass tools
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page uses <strong>total body weight</strong>. For protein from{" "}
          <strong>lean mass</strong>, see the{" "}
          <Link
            to="/health/lean-body-mass-calculator"
            className="text-primary hover:underline"
          >
            Lean Body Mass Calculator
          </Link>
          . Strength athletes pairing protein with training loads may also use the{" "}
          <Link
            to="/health/one-rep-max-calculator"
            className="text-primary hover:underline"
          >
            One Rep Max Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (daily protein)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How much protein do I need per day?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply weight (kg) by your activity g/kg factor. Sedentary adults
              often start near <strong>0.8 g/kg</strong>; regular trainers use
              higher multipliers on this page.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is daily protein calculated?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Protein (g) = weight (kg) × g/kg</strong>. The g/kg value
              increases from sedentary (0.8) to athlete (1.8).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 0.8 g/kg enough for muscle building?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              0.8 g/kg meets general RDA for sedentary adults. Resistance training
              and higher activity usually need more—select a higher activity tier
              here.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use pounds instead of kilograms?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool uses <strong>kilograms</strong>. Divide pounds by 2.205 to
              convert, or use the{" "}
              <Link
                to="/other/conversion-calculator"
                className="text-primary hover:underline"
              >
                Conversion Calculator
              </Link>{" "}
              for unit swaps.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does protein percentage of calories matter?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              U.S. AMDR suggests roughly <strong>10–35%</strong> of calories from
              protein. This g/kg method can be checked against total calories in the{" "}
              <Link
                to="/health/macro-calculator"
                className="text-primary hover:underline"
              >
                Macro Calculator
              </Link>
              .
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I spread protein across meals?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many people split daily protein across 3–4 meals for satiety and
              muscle protein synthesis. Results show approximate per-meal grams.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is more protein always better?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not necessarily. Very high intakes may be inappropriate with certain
              medical conditions. Balance protein with total calories, carbs, and fat.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this protein calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. General nutrition math only—consult a dietitian or physician for
              kidney disease, pregnancy, or therapeutic diets.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
