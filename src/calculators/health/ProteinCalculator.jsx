import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/protein-calculator";

const DEFAULTS = {
  weight: "70",
  activityLevel: "moderate",
};

const KCAL_PER_G_PROTEIN = 4;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const ACTIVITY_LEVELS = [
  {
    value: "sedentary",
    label: "Sedentary (little to no exercise)",
    multiplier: 0.8,
    note: "RDA-style minimum for general health",
  },
  {
    value: "light",
    label: "Lightly active (light exercise 1–3 days/week)",
    multiplier: 1.0,
    note: "Maintenance / light training",
  },
  {
    value: "moderate",
    label: "Moderately active (moderate exercise 3–5 days/week)",
    multiplier: 1.3,
    note: "Regular resistance or cardio training",
  },
  {
    value: "active",
    label: "Active (hard exercise 6–7 days/week)",
    multiplier: 1.6,
    note: "Frequent intense training",
  },
  {
    value: "athlete",
    label: "Athlete (twice/day or intense training)",
    multiplier: 1.8,
    note: "High volume strength or endurance work",
  },
];

const getActivityConfig = (activityLevel) =>
  ACTIVITY_LEVELS.find((a) => a.value === activityLevel) ?? ACTIVITY_LEVELS[0];

const computeProteinIntake = (weight, activityLevel) => {
  if (weight.trim() === "") {
    return null;
  }

  const w = parseFloat(weight);

  if (isNaN(w)) {
    return { error: "Enter a valid number for weight." };
  }

  if (w <= 0) {
    return { error: "Weight must be greater than zero." };
  }

  const activity = getActivityConfig(activityLevel);
  const proteinGrams = w * activity.multiplier;
  const proteinKcal = proteinGrams * KCAL_PER_G_PROTEIN;

  return {
    weightKg: w,
    activity,
    proteinGrams,
    proteinKcal,
    perMeal3: proteinGrams / 3,
    perMeal4: proteinGrams / 4,
    formula: "Daily protein (g) = body weight (kg) × g/kg factor",
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
    name: "How much protein do I need per day?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Multiply body weight in kg by a g/kg factor based on activity: sedentary 0.8, light 1.0, moderate 1.3, active 1.6, athlete 1.8. Example: 70 kg moderate → 91 g/day.",
    },
  },
  {
    "@type": "Question",
    name: "How is daily protein calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Protein (g) = weight (kg) × multiplier. Multipliers rise with training volume to support muscle repair and recovery.",
    },
  },
  {
    "@type": "Question",
    name: "What is the RDA for protein?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The general RDA is about 0.8 g per kg body weight for sedentary adults. Active people and athletes often need more—this calculator scales g/kg by activity level.",
    },
  },
  {
    "@type": "Question",
    name: "Does this protein calculator use fitness goals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No separate goal field. Activity level selects the g/kg multiplier. For full macro splits by calories, use the Macro Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "How many calories is my protein target?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Protein provides about 4 kcal per gram. Multiply daily protein grams by 4 for protein calories.",
    },
  },
  {
    "@type": "Question",
    name: "Is this protein calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. General nutrition math only. Kidney disease, pregnancy, and medical diets need professional guidance.",
    },
  },
];

const ProteinCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [activityLevel, setActivityLevel] = useState(DEFAULTS.activityLevel);

  const result = computeProteinIntake(weight, activityLevel);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setActivityLevel(DEFAULTS.activityLevel);
  };

  return (
    <>
      <Helmet>
        <title>
          Protein Calculator - Daily Protein Needs by Weight &amp; Activity
        </title>
        <meta
          name="description"
          content="Calculate daily protein in grams from body weight (kg) and activity level. g/kg multipliers from 0.8 (sedentary) to 1.8 (athlete)."
        />
        <meta
          name="keywords"
          content="protein calculator, daily protein intake, grams of protein per day, protein needs by weight, g per kg protein, fitness protein calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Protein Calculator" />
        <meta
          property="og:description"
          content="Daily protein grams from weight and activity level."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Protein Calculator" />
        <meta
          name="twitter:description"
          content="How much protein per day? Weight × g/kg by activity."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Protein Calculator",
            url: PAGE_URL,
            description:
              "Estimate daily protein intake from body weight and activity level.",
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
            name: "Protein Calculator",
            url: PAGE_URL,
            description:
              "Web tool for daily protein grams by weight and activity.",
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
            headline: "Daily Protein Needs by Body Weight",
            description:
              "g/kg protein multipliers by activity level for daily intake.",
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
                name: "Protein Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Body weight (kg)
            </label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Activity level
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className={inputClassName}
            >
              {ACTIVITY_LEVELS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <p className="text-sm text-on-surface-variant">
              {getActivityConfig(activityLevel).note} —{" "}
              {getActivityConfig(activityLevel).multiplier} g protein per kg
              body weight.
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
            Daily protein summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Recommended protein
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? `${fmtG(result.proteinGrams)} g/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">g/kg factor used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.activity.multiplier} g/kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Activity level</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.activity.label : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Protein calories</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.proteinKcal)} kcal`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Per meal (3 meals)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.perMeal3)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Per meal (4 meals)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.perMeal4)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Body weight used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.weightKg)} kg`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula} (${result.activity.multiplier} g/kg). Individual needs vary; medical conditions may require different targets.`
                : "Enter weight (kg) and activity level for daily protein grams."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProteinCalculator;
