import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/weight-watcher-points-calculator";

const DEFAULTS = {
  calories: "250",
  fat: "10",
  fiber: "3",
};

const FIBER_CAP_G = 4;
const CALORIES_PER_POINT = 50;
const FAT_G_PER_POINT = 12;
const FIBER_G_PER_POINT = 5;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeWeightWatcherPoints = (calories, fat, fiber) => {
  if (
    calories.trim() === "" ||
    fat.trim() === "" ||
    fiber.trim() === ""
  ) {
    return null;
  }

  const cal = parseFloat(calories);
  const fatGrams = parseFloat(fat);
  const fiberGrams = parseFloat(fiber);

  if (isNaN(cal) || isNaN(fatGrams) || isNaN(fiberGrams)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (cal < 0 || fatGrams < 0 || fiberGrams < 0) {
    return { error: "Calories, fat, and fiber cannot be negative." };
  }

  const effectiveFiber = Math.min(Math.max(fiberGrams, 0), FIBER_CAP_G);
  const caloriePoints = cal / CALORIES_PER_POINT;
  const fatPoints = fatGrams / FAT_G_PER_POINT;
  const fiberDeduction = effectiveFiber / FIBER_G_PER_POINT;
  const rawPoints = caloriePoints + fatPoints - fiberDeduction;
  const points = Math.round(rawPoints * 10) / 10;

  return {
    calories: cal,
    fatGrams,
    fiberGrams,
    effectiveFiber,
    fiberCapped: fiberGrams > FIBER_CAP_G,
    caloriePoints,
    fatPoints,
    fiberDeduction,
    rawPoints,
    points,
    formula: "Points = calories ÷ 50 + fat (g) ÷ 12 − min(fiber, 4) ÷ 5",
  };
};

const fmtPts = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How are Weight Watchers points calculated in this tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Classic-style points = calories ÷ 50 + fat (g) ÷ 12 − min(fiber (g), 4) ÷ 5. Enter calories, total fat grams, and fiber grams from a nutrition label.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use SmartPoints?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Modern WW SmartPoints use protein, sugar, saturated fat, and calories. This page uses the older calories + fat − fiber formula only.",
    },
  },
  {
    "@type": "Question",
    name: "Why is fiber capped at 4 grams?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "In the classic formula, only up to 4 g of dietary fiber reduces points. Fiber above 4 g does not subtract additional points.",
    },
  },
  {
    "@type": "Question",
    name: "What inputs do I need?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Calories, total fat in grams, and dietary fiber in grams per serving or food item—typically from the nutrition facts label.",
    },
  },
  {
    "@type": "Question",
    name: "Is this Weight Watchers points calculator official?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Independent calculator for educational use. Current WW plans may use different formulas—use the official WW app for enrolled members.",
    },
  },
  {
    "@type": "Question",
    name: "Is this medical or diet advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Food scoring math only. Weight management and medical diets require professional guidance.",
    },
  },
];

const WeightWatcherPointsCalculator = () => {
  const [calories, setCalories] = useState(DEFAULTS.calories);
  const [fat, setFat] = useState(DEFAULTS.fat);
  const [fiber, setFiber] = useState(DEFAULTS.fiber);

  const result = computeWeightWatcherPoints(calories, fat, fiber);

  const reset = () => {
    setCalories(DEFAULTS.calories);
    setFat(DEFAULTS.fat);
    setFiber(DEFAULTS.fiber);
  };

  return (
    <>
      <Helmet>
        <title>
          Weight Watchers Points Calculator - Classic Points (Cal, Fat, Fiber)
        </title>
        <meta
          name="description"
          content="Classic WW-style food points: calories ÷ 50 + fat g ÷ 12 − fiber (max 4 g) ÷ 5. Not modern SmartPoints—label inputs only."
        />
        <meta
          name="keywords"
          content="weight watcher points calculator, ww points calculator, classic weight watchers points, calories fat fiber points, food points calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Weight Watchers Points Calculator"
        />
        <meta
          property="og:description"
          content="Classic points from calories, fat, and fiber on the label."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Weight Watchers Points Calculator"
        />
        <meta
          name="twitter:description"
          content="Calories + fat − fiber classic WW-style points."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Weight Watchers Points Calculator",
            url: PAGE_URL,
            description:
              "Calculate classic-style Weight Watchers points from calories, fat, and fiber.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Weight Watchers Points Calculator",
            url: PAGE_URL,
            description:
              "Web tool for classic WW-style food points from label data.",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Classic Weight Watchers Points from Nutrition Labels",
            description:
              "Calories, fat, and fiber formula for legacy-style food points.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_SCHEMA,
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Health Calculators",
                item: "https://www.unitedcalculator.net/health",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Weight Watchers Points Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Calories (kcal)
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Total fat (g)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Dietary fiber (g)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={fiber}
              onChange={(e) => setFiber(e.target.value)}
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Only the first 4 g of fiber reduces points in this formula.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={reset}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Weight Watchers points summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Food points</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? fmtPts(result.points) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">From calories (÷ 50)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `+${fmtPts(result.caloriePoints)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">From fat (÷ 12)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `+${fmtPts(result.fatPoints)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fiber deduction (÷ 5)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `−${fmtPts(result.fiberDeduction)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fiber used in formula</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtPts(result.effectiveFiber)} g${
                      result.fiberCapped ? " (capped at 4 g)" : ""
                    }`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Calories entered</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${Math.round(result.calories)} kcal`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Classic-style estimate—not official WW SmartPoints. Use the WW app for current plans.`
                : "Enter calories, fat (g), and fiber (g) from the nutrition label."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default WeightWatcherPointsCalculator;
