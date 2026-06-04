import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/calorie-calculator";

const DEFAULTS = {
  weight: "70",
  height: "175",
  age: "25",
  gender: "male",
  activity: "1.55",
};

const DEFICIT_SURPLUS = 500;

const ACTIVITY_OPTIONS = [
  { value: "1.2", label: "Sedentary (little or no exercise)" },
  { value: "1.375", label: "Lightly active (1–3 days/week)" },
  { value: "1.55", label: "Moderately active (3–5 days/week)" },
  { value: "1.725", label: "Very active (6–7 days/week)" },
  { value: "1.9", label: "Super active (physical job or 2× training)" },
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getActivityLabel = (factor) =>
  ACTIVITY_OPTIONS.find((o) => o.value === String(factor))?.label ??
  `×${factor}`;

const computeCalories = (weight, height, age, gender, activity) => {
  if (
    weight.trim() === "" ||
    height.trim() === "" ||
    age.trim() === "" ||
    activity.trim() === ""
  ) {
    return null;
  }

  const w = parseFloat(weight);
  const h = parseFloat(height);
  const a = parseFloat(age);
  const act = parseFloat(activity);

  if (isNaN(w) || isNaN(h) || isNaN(a) || isNaN(act)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (w <= 0 || h <= 0) {
    return { error: "Weight and height must be greater than zero." };
  }

  if (a <= 0 || a > 120) {
    return { error: "Enter a valid age (1–120 years)." };
  }

  if (act < 1.2 || act > 2.5) {
    return { error: "Select a valid activity level." };
  }

  const bmr =
    gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;

  if (!Number.isFinite(bmr) || bmr <= 0) {
    return { error: "Could not compute calories from these values." };
  }

  const tdee = bmr * act;

  return {
    bmr,
    tdee,
    activityFactor: act,
    activityLabel: getActivityLabel(act),
    maintenance: tdee,
    weightLoss: Math.max(bmr, tdee - DEFICIT_SURPLUS),
    weightGain: tdee + DEFICIT_SURPLUS,
    weightKg: w,
    heightCm: h,
    age: Math.round(a),
    gender,
    formula: "Mifflin-St Jeor × activity",
  };
};

const fmtKcal = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How do I calculate daily calories?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool uses Mifflin-St Jeor BMR from weight (kg), height (cm), age, and gender, then multiplies by an activity factor to estimate TDEE (maintenance calories).",
    },
  },
  {
    "@type": "Question",
    name: "What is a calorie deficit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A deficit means eating fewer calories than you burn. A common starting point is about 500 kcal/day below maintenance for roughly 0.5 kg/week loss—adjust with professional guidance.",
    },
  },
  {
    "@type": "Question",
    name: "What is TDEE?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total Daily Energy Expenditure is estimated maintenance calories—BMR times an activity multiplier for exercise and daily movement.",
    },
  },
  {
    "@type": "Question",
    name: "How many calories to lose or gain weight?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This calculator shows maintenance TDEE plus reference targets about 500 kcal below (loss) or above (gain) maintenance. Individual needs vary.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the BMR calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Both use Mifflin-St Jeor for BMR. This page multiplies by activity for daily needs; the BMR page focuses on resting burn and a sedentary reference.",
    },
  },
];

const CalorieCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [age, setAge] = useState(DEFAULTS.age);
  const [gender, setGender] = useState(DEFAULTS.gender);
  const [activity, setActivity] = useState(DEFAULTS.activity);

  const result = computeCalories(weight, height, age, gender, activity);

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
          Calorie Calculator - Daily Calories to Lose, Maintain, or Gain
        </title>
        <meta
          name="description"
          content="TDEE from Mifflin-St Jeor BMR × activity. Maintenance calories plus ~500 kcal loss/gain references—not medical advice."
        />
        <meta
          name="keywords"
          content="calorie calculator, daily calorie needs, TDEE calculator, calorie deficit, maintenance calories, weight loss calories"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Calorie Calculator" />
        <meta
          property="og:description"
          content="Estimate daily calorie needs for maintenance, loss, or gain."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Calorie Calculator" />
        <meta
          name="twitter:description"
          content="BMR and TDEE from metric inputs and activity level."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Calorie Calculator",
            url: PAGE_URL,
            description:
              "Calculate daily calorie needs using Mifflin-St Jeor and activity level.",
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
            name: "Calorie Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate TDEE and calorie targets from body metrics.",
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
            headline: "Daily Calorie Needs and TDEE",
            description:
              "How BMR and activity factors estimate maintenance and weight change calories.",
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
                name: "Calorie Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Weight</label>
            <div className="relative">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.weight}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                kg
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Height</label>
            <div className="relative">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.height}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                cm
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Age</label>
            <div className="relative">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.age}
                min="1"
                max="120"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                yrs
              </span>
            </div>
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
              {ACTIVITY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
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
            Calorie summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Maintenance (TDEE)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${fmtKcal(result.tdee)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BMR (at rest)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.bmr)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weight loss (~500 deficit)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.weightLoss)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weight gain (~500 surplus)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.weightGain)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Activity</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? `×${result.activityFactor} — ${result.activityLabel.split(" (")[0]}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Mifflin-St Jeor BMR × activity factor. ±500 kcal lines are common
              references—not personalized medical targets.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CalorieCalculator;
