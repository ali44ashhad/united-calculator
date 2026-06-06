import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/fat-intake-calculator";

const DEFAULTS = {
  calories: "2000",
  fatPercentage: "30",
};

const KCAL_PER_GRAM_FAT = 9;

const FAT_PRESETS = [
  { value: "20", label: "20% — AMDR lower (moderate fat)" },
  { value: "25", label: "25% — balanced" },
  { value: "30", label: "30% — common default" },
  { value: "35", label: "35% — AMDR upper" },
  { value: "40", label: "40% — higher-fat / low-carb style" },
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeFatIntake = (calories, fatPercentage) => {
  if (calories.trim() === "" || fatPercentage.trim() === "") {
    return null;
  }

  const cal = parseFloat(calories);
  const percent = parseFloat(fatPercentage);

  if (isNaN(cal) || isNaN(percent)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (cal <= 0) {
    return { error: "Daily calories must be greater than zero." };
  }

  if (percent < 0 || percent > 100) {
    return { error: "Fat percentage must be between 0 and 100." };
  }

  const fatCalories = (cal * percent) / 100;
  const fatGrams = fatCalories / KCAL_PER_GRAM_FAT;
  const remainingCalories = cal - fatCalories;
  const perMeal3 = fatGrams / 3;
  const perMeal4 = fatGrams / 4;

  return {
    calories: cal,
    fatPercentage: percent,
    fatCalories,
    fatGrams,
    remainingCalories,
    perMeal3,
    perMeal4,
    formula: "Fat (g) = (calories × fat %) ÷ 9",
  };
};

const fmtG = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

const fmtKcal = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How much fat should I eat daily?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Many guidelines suggest 20% to 35% of daily calories from fat. Enter your total calories and chosen fat percentage; this tool converts that to grams using 9 kcal per gram of fat.",
    },
  },
  {
    "@type": "Question",
    name: "How are daily fat grams calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fat grams = (daily calories × fat percentage ÷ 100) ÷ 9, because dietary fat provides about 9 calories per gram.",
    },
  },
  {
    "@type": "Question",
    name: "What fat percentage should I use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A balanced diet often uses 25–30% of calories from fat. Lower percentages may suit some weight-loss plans; higher percentages appear in some low-carb or ketogenic approaches. Individual needs vary.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use this for weight loss?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. First estimate daily calories (for example with a calorie or TDEE calculator), then set your fat percentage. Fat grams scale with total calories in a deficit or surplus.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator set protein and carbs?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page calculates fat grams only from calories and fat percentage. Use the Macro Calculator for full protein, carb, and fat splits that sum to 100%.",
    },
  },
  {
    "@type": "Question",
    name: "Why is fat 9 calories per gram?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fat is more energy-dense than protein or carbohydrates (about 4 kcal/g each). Nutrition labels and macro math use 9 kcal per gram for total fat.",
    },
  },
  {
    "@type": "Question",
    name: "Are all fats the same?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool counts total fat grams, not saturated vs unsaturated types. For heart health, many guidelines emphasize unsaturated fats and limit saturated and trans fats within your total fat budget.",
    },
  },
];

const FatIntakeCalculator = () => {
  const [calories, setCalories] = useState(DEFAULTS.calories);
  const [fatPercentage, setFatPercentage] = useState(DEFAULTS.fatPercentage);

  const result = computeFatIntake(calories, fatPercentage);

  const reset = () => {
    setCalories(DEFAULTS.calories);
    setFatPercentage(DEFAULTS.fatPercentage);
  };

  return (
    <>
      <Helmet>
        <title>
          Fat Intake Calculator - Daily Fat Grams from Calories &amp; %
        </title>
        <meta
          name="description"
          content="Daily fat (g) = (calories × fat %) ÷ 9. Enter TDEE or calorie target and fat percentage for grams per day—not medical advice."
        />
        <meta
          name="keywords"
          content="fat intake calculator, daily fat needs, fat grams calculator, macro fat calculator, how much fat per day, dietary fat calculator, healthy fat intake"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fat Intake Calculator" />
        <meta
          property="og:description"
          content="Convert daily calories and fat percentage into fat grams per day."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fat Intake Calculator" />
        <meta
          name="twitter:description"
          content="Fat grams from calories and fat % using 9 kcal/g."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Fat Intake Calculator",
            url: PAGE_URL,
            description:
              "Calculate daily fat intake in grams from total calories and fat percentage.",
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
            name: "Fat Intake Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute daily dietary fat grams from calories and fat percent.",
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
            headline: "Daily Fat Intake from Calories and Percentage",
            description:
              "How to convert fat percent of calories into grams per day.",
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
                name: "Fat Intake Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Daily calorie intake
            </label>
            <div className="relative">
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.calories}
                min="1"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                kcal
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Use maintenance TDEE, a deficit target, or any daily calorie goal.
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Fat percentage of calories
            </label>
            <div className="relative">
              <input
                type="number"
                value={fatPercentage}
                onChange={(e) => setFatPercentage(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.fatPercentage}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Common fat percentages
            </label>
            <select
              value={fatPercentage}
              onChange={(e) => setFatPercentage(e.target.value)}
              className={inputClassName}
            >
              {FAT_PRESETS.map((preset) => (
                <option key={preset.value} value={preset.value}>
                  {preset.label}
                </option>
              ))}
            </select>
            <p className="text-sm text-on-surface-variant">
              U.S. AMDR for adults is often cited as 20–35% of calories from fat.
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
            Daily fat intake summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Daily fat</span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${fmtG(result.fatGrams)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fat calories</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.fatCalories)} kcal`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fat share of diet</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.fatPercentage)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Calories from other macros</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.remainingCalories)} kcal`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Per meal (÷3)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.perMeal3)} g fat`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Per meal (÷4)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.perMeal4)} g fat`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? result.formula
                : "Fat (g) = (calories × fat %) ÷ 9"}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FatIntakeCalculator;
