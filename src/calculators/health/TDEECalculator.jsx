import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/tdee-calculator";

const DEFAULTS = {
  weight: "70",
  height: "175",
  age: "25",
  gender: "male",
  activity: "1.375",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const ACTIVITY_LEVELS = [
  {
    value: "1.2",
    label: "Sedentary (little or no exercise)",
    factor: 1.2,
  },
  {
    value: "1.375",
    label: "Lightly active (1–3 days/week)",
    factor: 1.375,
  },
  {
    value: "1.55",
    label: "Moderately active (3–5 days/week)",
    factor: 1.55,
  },
  {
    value: "1.725",
    label: "Very active (6–7 days/week)",
    factor: 1.725,
  },
  {
    value: "1.9",
    label: "Super active (twice/day or physical job)",
    factor: 1.9,
  },
];

const getActivityConfig = (activity) =>
  ACTIVITY_LEVELS.find((a) => a.value === activity) ?? ACTIVITY_LEVELS[0];

const computeMifflinStJeorBmr = (weightKg, heightCm, ageYears, gender) => {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  return gender === "male" ? base + 5 : base - 161;
};

const computeTDEE = (weight, height, age, gender, activity) => {
  if (
    weight.trim() === "" ||
    height.trim() === "" ||
    age.trim() === ""
  ) {
    return null;
  }

  const w = parseFloat(weight);
  const h = parseFloat(height);
  const a = parseFloat(age);
  const activityConfig = getActivityConfig(activity);
  const act = activityConfig.factor;

  if (isNaN(w) || isNaN(h) || isNaN(a)) {
    return { error: "Enter valid numbers for weight, height, and age." };
  }

  if (w <= 0 || h <= 0) {
    return { error: "Weight and height must be greater than zero." };
  }

  if (a <= 0 || a > 120) {
    return { error: "Enter a valid age (1–120 years)." };
  }

  const bmr = computeMifflinStJeorBmr(w, h, a, gender);

  if (!Number.isFinite(bmr) || bmr <= 0) {
    return { error: "Could not compute BMR from these values." };
  }

  const tdee = bmr * act;

  return {
    bmr,
    tdee,
    activityFactor: act,
    activityLabel: activityConfig.label,
    maintenance: tdee,
    cut500: tdee - 500,
    cut250: tdee - 250,
    bulk500: tdee + 500,
    weeklyTdee: tdee * 7,
    weightKg: w,
    heightCm: h,
    age: Math.round(a),
    gender,
    formula: "TDEE = Mifflin-St Jeor BMR × activity factor",
  };
};

const fmtKcal = (n) =>
  Math.round(n).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is TDEE?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "TDEE (total daily energy expenditure) is estimated calories burned in a day including BMR plus activity. This tool uses Mifflin-St Jeor BMR multiplied by an activity factor.",
    },
  },
  {
    "@type": "Question",
    name: "How is TDEE calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMR from Mifflin-St Jeor (weight kg, height cm, age, gender), then TDEE = BMR × activity factor (1.2 sedentary through 1.9 super active).",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between BMR and TDEE?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMR is calories at rest. TDEE adds daily movement and exercise via the activity multiplier.",
    },
  },
  {
    "@type": "Question",
    name: "How many calories for weight loss?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A common starting point is TDEE minus about 500 kcal/day for roughly 0.5 kg per week loss. Individual needs and medical guidance vary.",
    },
  },
  {
    "@type": "Question",
    name: "Which activity factor should I choose?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Pick the level that best matches your average week—not your hardest workout day. Factors range from 1.2 (sedentary) to 1.9 (super active).",
    },
  },
  {
    "@type": "Question",
    name: "Is this TDEE calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Population formulas only. Metabolism, health conditions, and pregnancy require professional guidance.",
    },
  },
];

const TDEECalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [age, setAge] = useState(DEFAULTS.age);
  const [gender, setGender] = useState(DEFAULTS.gender);
  const [activity, setActivity] = useState(DEFAULTS.activity);

  const result = computeTDEE(weight, height, age, gender, activity);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
    setAge(DEFAULTS.age);
    setGender(DEFAULTS.gender);
    setActivity(DEFAULTS.activity);
  };

  return (
    <>
      <Helmet>
        <title>
          TDEE Calculator - Total Daily Energy Expenditure (Mifflin-St Jeor)
        </title>
        <meta
          name="description"
          content="Calculate TDEE in kcal/day: Mifflin-St Jeor BMR × activity factor. Maintenance, −500/−250 cut, and +500 bulk estimates from kg, cm, age, gender."
        />
        <meta
          name="keywords"
          content="TDEE calculator, total daily energy expenditure, daily calorie needs, maintenance calories, Mifflin St Jeor TDEE, calories to lose weight"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TDEE Calculator" />
        <meta
          property="og:description"
          content="Daily calorie burn from BMR and activity level."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TDEE Calculator" />
        <meta
          name="twitter:description"
          content="Total daily energy expenditure from Mifflin-St Jeor."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TDEE Calculator",
            url: PAGE_URL,
            description:
              "Estimate total daily energy expenditure from BMR and activity.",
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
            name: "TDEE Calculator",
            url: PAGE_URL,
            description:
              "Web tool for TDEE from Mifflin-St Jeor and activity factors.",
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
            headline: "Total Daily Energy Expenditure (TDEE)",
            description:
              "How BMR and activity factors estimate daily calorie needs.",
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
                name: "TDEE Calculator",
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
              Weight (kg)
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

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Height (cm)
            </label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Age (years)</label>
            <input
              type="number"
              min="1"
              max="120"
              step="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={inputClassName}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Activity level
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className={inputClassName}
            >
              {ACTIVITY_LEVELS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label} (×{opt.factor})
                </option>
              ))}
            </select>
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
            TDEE summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total daily energy expenditure (TDEE)
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? `${fmtKcal(result.tdee)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Basal metabolic rate (BMR)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.bmr)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Maintenance calories</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.maintenance)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weight loss (−500 kcal/day)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.cut500)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mild deficit (−250 kcal/day)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.cut250)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weight gain (+500 kcal/day)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.bulk500)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weekly TDEE</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.weeklyTdee)} kcal/week`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Activity factor</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? `×${result.activityFactor} — ${result.activityLabel}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Deficit/surplus targets are common rules of thumb—not personalized medical advice.`
                : "Enter weight, height, age, gender, and activity for TDEE."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TDEECalculator;
