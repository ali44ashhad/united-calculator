import React from "react";
import { Link } from "react-router-dom";

export default function CarbohydrateSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Carbohydrate calculator: net carbs for keto labels
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>carbohydrate calculator</strong> finds{" "}
          <strong>net carbs</strong> in grams from nutrition-label inputs:{" "}
          <strong>total carbohydrates</strong>, <strong>fiber</strong>, and{" "}
          <strong>sugar alcohols</strong>. It uses the common low-carb formula
          that counts half of sugar alcohols toward net carbs.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For full daily protein, fat, and carb targets, use the{" "}
          <Link
            to="/health/macro-calculator"
            className="text-primary hover:underline"
          >
            Macro Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/calorie-calculator"
            className="text-primary hover:underline"
          >
            Calorie Calculator
          </Link>
          .
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
              <li>Net carbs (g) per serving</li>
              <li>Fiber and ½ sugar alcohol deductions</li>
              <li>Approx. kcal from net carbs (×4)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Daily carb gram goals by body weight</li>
              <li>Per-sugar-alcohol type rules (e.g. erythritol = 0)</li>
              <li>Insulin or medical carb counting</li>
              <li>EU net carb labeling rules</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Net carb formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Net carbs (g) = Total carbs (g)
              − Fiber (g)
              − (Sugar alcohols (g) ÷ 2)

Example: 40 g total, 5 g fiber, 10 g sugar alcohols
  → 40 − 5 − 5 = 30 g net carbs`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Keto and low-carb context</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Ketogenic diets often limit <strong>net carbs</strong> to stay in ketosis.
          Total carbs on a label include fiber; because fiber is not fully digested
          as glucose for most people, many U.S. plans subtract it. Sugar alcohols
          vary—erythritol is often treated as zero net impact, while others use
          the half-count rule this tool applies.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this carbohydrate calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Read total carbohydrates on the nutrition facts panel.</li>
          <li>Enter dietary fiber and sugar alcohols if listed.</li>
          <li>Review net carbs and optional calorie estimate (4 kcal/g).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Total carbs vs net carbs?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Total carbs include fiber and sugar alcohols on the label. Net carbs
              subtract those per the rules above for low-carb tracking.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I count fiber on keto?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Most U.S. keto approaches subtract all fiber from total carbs. Some
              people track total carbs instead—pick one method and stay consistent.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What about erythritol?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many products list erythritol separately. If your label treats it as
              zero net, enter 0 for sugar alcohols or only include non-erythritol
              alcohols in that field.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many carbs should I eat per day?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              That depends on calories, activity, and goals—not this per-food tool.
              Use the macro and calorie pages for daily gram targets.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why are my net carbs negative?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Usually a typo or label rounding when fiber plus half of sugar
              alcohols exceeds total carbs. Double-check each line on the label.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
