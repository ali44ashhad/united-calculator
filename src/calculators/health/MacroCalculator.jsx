import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/macro-calculator";

const DEFAULTS = {
  calories: "2000",
  carbsPercent: "50",
  proteinPercent: "20",
  fatPercent: "30",
};

const KCAL_PER_G_CARB = 4;
const KCAL_PER_G_PROTEIN = 4;
const KCAL_PER_G_FAT = 9;

const MACRO_PRESETS = [
  {
    id: "balanced",
    label: "Balanced — 50% carbs · 20% protein · 30% fat",
    carbs: "50",
    protein: "20",
    fat: "30",
  },
  {
    id: "high-protein",
    label: "High protein — 40% carbs · 30% protein · 30% fat",
    carbs: "40",
    protein: "30",
    fat: "30",
  },
  {
    id: "low-carb",
    label: "Low carb — 20% carbs · 35% protein · 45% fat",
    carbs: "20",
    protein: "35",
    fat: "45",
  },
  {
    id: "keto",
    label: "Keto-style — 5% carbs · 25% protein · 70% fat",
    carbs: "5",
    protein: "25",
    fat: "70",
  },
  {
    id: "custom",
    label: "Custom — edit percentages below",
    carbs: "",
    protein: "",
    fat: "",
  },
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMacros = (calories, carbsPercent, proteinPercent, fatPercent) => {
  if (
    calories.trim() === "" ||
    carbsPercent.trim() === "" ||
    proteinPercent.trim() === "" ||
    fatPercent.trim() === ""
  ) {
    return null;
  }

  const cals = parseFloat(calories);
  const carbsPct = parseFloat(carbsPercent);
  const proteinPct = parseFloat(proteinPercent);
  const fatPct = parseFloat(fatPercent);

  if (isNaN(cals) || isNaN(carbsPct) || isNaN(proteinPct) || isNaN(fatPct)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (cals <= 0) {
    return { error: "Daily calories must be greater than zero." };
  }

  if (carbsPct < 0 || proteinPct < 0 || fatPct < 0) {
    return { error: "Macro percentages cannot be negative." };
  }

  const percentTotal = carbsPct + proteinPct + fatPct;

  if (Math.abs(percentTotal - 100) > 0.01) {
    return {
      error: `Macro percentages must sum to 100% (currently ${percentTotal.toFixed(1)}%).`,
      percentTotal,
    };
  }

  const carbsKcal = (carbsPct / 100) * cals;
  const proteinKcal = (proteinPct / 100) * cals;
  const fatKcal = (fatPct / 100) * cals;

  const carbsGrams = carbsKcal / KCAL_PER_G_CARB;
  const proteinGrams = proteinKcal / KCAL_PER_G_PROTEIN;
  const fatGrams = fatKcal / KCAL_PER_G_FAT;

  return {
    calories: cals,
    carbsPct,
    proteinPct,
    fatPct,
    percentTotal,
    carbsGrams,
    proteinGrams,
    fatGrams,
    carbsKcal,
    proteinKcal,
    fatKcal,
    perMeal3: {
      carbs: carbsGrams / 3,
      protein: proteinGrams / 3,
      fat: fatGrams / 3,
    },
    formula: "g = (calories × macro %) ÷ kcal/g (4/4/9)",
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
    name: "What is a macro calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A macro calculator splits daily calories into protein, carbohydrate, and fat grams using your chosen percentages. Protein and carbs use 4 kcal/g; fat uses 9 kcal/g.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate macro grams from calories?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Macro kcal = daily calories × (macro % ÷ 100). Grams = macro kcal ÷ 4 for carbs and protein, ÷ 9 for fat. Percentages must total 100%.",
    },
  },
  {
    "@type": "Question",
    name: "Do macro percentages need to equal 100%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Carbs, protein, and fat percentages must sum to 100% of calories for a complete split.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator estimate daily calories?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Enter your calorie target (maintenance, deficit, or surplus). Use the Calorie Calculator on this site to estimate TDEE first if needed.",
    },
  },
  {
    "@type": "Question",
    name: "What is a balanced macro split?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A common starting split is about 50% carbohydrates, 20% protein, and 30% fat of total calories. Athletes and low-carb plans use different ratios.",
    },
  },
  {
    "@type": "Question",
    name: "Why is fat 9 calories per gram?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Dietary fat is more energy-dense than protein or carbohydrates, which are about 4 kcal per gram each.",
    },
  },
  {
    "@type": "Question",
    name: "Is this macro calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is an educational nutrition tool. Medical diets require professional guidance.",
    },
  },
];

const MacroCalculator = () => {
  const [calories, setCalories] = useState(DEFAULTS.calories);
  const [carbsPercent, setCarbsPercent] = useState(DEFAULTS.carbsPercent);
  const [proteinPercent, setProteinPercent] = useState(DEFAULTS.proteinPercent);
  const [fatPercent, setFatPercent] = useState(DEFAULTS.fatPercent);
  const [preset, setPreset] = useState("balanced");

  const applyPreset = (presetId) => {
    if (presetId === "custom") {
      setPreset("custom");
      return;
    }
    const chosen = MACRO_PRESETS.find((p) => p.id === presetId);
    if (!chosen) return;
    setPreset(presetId);
    setCarbsPercent(chosen.carbs);
    setProteinPercent(chosen.protein);
    setFatPercent(chosen.fat);
  };

  const result = computeMacros(
    calories,
    carbsPercent,
    proteinPercent,
    fatPercent
  );

  const reset = () => {
    setCalories(DEFAULTS.calories);
    setCarbsPercent(DEFAULTS.carbsPercent);
    setProteinPercent(DEFAULTS.proteinPercent);
    setFatPercent(DEFAULTS.fatPercent);
    setPreset("balanced");
  };

  return (
    <>
      <Helmet>
        <title>
          Macro Calculator - Daily Protein, Carbs &amp; Fat Grams
        </title>
        <meta
          name="description"
          content="Split daily calories into protein, carb, and fat grams (4/4/9 kcal/g). Enter calorie target and macro % that sum to 100—not TDEE estimation."
        />
        <meta
          name="keywords"
          content="macro calculator, macronutrient calculator, protein carbs fat grams, daily macro split, IIFYM calculator, nutrition macro calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Macro Calculator" />
        <meta
          property="og:description"
          content="Daily protein, carbohydrate, and fat grams from calories and percentages."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Macro Calculator" />
        <meta
          name="twitter:description"
          content="Macro grams from calorie target and C/P/F percentages."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Macro Calculator",
            url: PAGE_URL,
            description:
              "Calculate daily macronutrient grams from calories and macro percentages.",
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
            name: "Macro Calculator",
            url: PAGE_URL,
            description:
              "Web tool to split calories into protein, carbs, and fat grams.",
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
            headline: "Daily Macronutrients from Calories and Percentages",
            description:
              "How to convert calorie targets into protein, carb, and fat grams.",
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
                name: "Macro Calculator",
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
              Daily calorie target
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
              Use maintenance TDEE, a deficit, or surplus—you supply the calorie
              total.
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Macro split preset
            </label>
            <select
              value={preset}
              onChange={(e) => applyPreset(e.target.value)}
              className={inputClassName}
            >
              {MACRO_PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Carbohydrates
            </label>
            <div className="relative">
              <input
                type="number"
                value={carbsPercent}
                onChange={(e) => {
                  setCarbsPercent(e.target.value);
                  setPreset("custom");
                }}
                className={inputClassName}
                placeholder={DEFAULTS.carbsPercent}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Protein</label>
            <div className="relative">
              <input
                type="number"
                value={proteinPercent}
                onChange={(e) => {
                  setProteinPercent(e.target.value);
                  setPreset("custom");
                }}
                className={inputClassName}
                placeholder={DEFAULTS.proteinPercent}
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
            <label className="font-h3 text-h3 text-on-surface">Fat</label>
            <div className="relative">
              <input
                type="number"
                value={fatPercent}
                onChange={(e) => {
                  setFatPercent(e.target.value);
                  setPreset("custom");
                }}
                className={inputClassName}
                placeholder={DEFAULTS.fatPercent}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Percent total:{" "}
              {(
                parseFloat(carbsPercent || 0) +
                parseFloat(proteinPercent || 0) +
                parseFloat(fatPercent || 0)
              ).toFixed(1)}
              % (must equal 100%)
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
            Daily macronutrient summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Carbohydrates</span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${fmtG(result.carbsGrams)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Protein</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.proteinGrams)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fat</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.fatGrams)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Carb kcal · protein kcal · fat kcal</span>
              <span className="font-code-num text-code-num text-sm md:text-base">
                {result && !result.error
                  ? `${fmtKcal(result.carbsKcal)} · ${fmtKcal(result.proteinKcal)} · ${fmtKcal(result.fatKcal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Macro split (C / P / F)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.carbsPct)}% / ${fmtG(result.proteinPct)}% / ${fmtG(result.fatPct)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Per meal (÷3)</span>
              <span className="font-code-num text-code-num text-sm md:text-base">
                {result && !result.error
                  ? `C ${fmtG(result.perMeal3.carbs)}g · P ${fmtG(result.perMeal3.protein)}g · F ${fmtG(result.perMeal3.fat)}g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Daily calories</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.calories)} kcal`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Carbs/protein 4 kcal/g, fat 9 kcal/g.`
                : "Enter calories and macro % totaling 100%."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MacroCalculator;
