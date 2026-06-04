import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/bmr-calculator";

const DEFAULTS = {
  weight: "70",
  height: "175",
  age: "25",
  gender: "male",
};

const SEDENTARY_FACTOR = 1.2;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeBMR = (weight, height, age, gender) => {
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

  if (isNaN(w) || isNaN(h) || isNaN(a)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (w <= 0) {
    return { error: "Weight must be greater than zero." };
  }

  if (h <= 0) {
    return { error: "Height must be greater than zero." };
  }

  if (a <= 0 || a > 120) {
    return { error: "Enter a valid age (1–120 years)." };
  }

  const bmr =
    gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;

  if (!Number.isFinite(bmr) || bmr <= 0) {
    return { error: "Could not compute BMR from these values." };
  }

  return {
    bmr,
    weightKg: w,
    heightCm: h,
    age: Math.round(a),
    gender,
    formula: "Mifflin-St Jeor",
    tdeeSedentary: bmr * SEDENTARY_FACTOR,
    caloriesPerWeek: bmr * 7,
  };
};

const fmtKcal = (n) =>
  Math.round(n).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is BMR (basal metabolic rate)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMR is the calories your body burns at rest for basic functions like breathing, circulation, and cell maintenance.",
    },
  },
  {
    "@type": "Question",
    name: "How is BMR calculated in this tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the Mifflin-St Jeor equation with weight (kg), height (cm), age, and gender.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between BMR and TDEE?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMR is calories at rest. TDEE (total daily energy expenditure) multiplies BMR by an activity factor for all daily movement and exercise.",
    },
  },
  {
    "@type": "Question",
    name: "Why is knowing BMR important?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMR is a baseline for estimating daily calorie needs for weight loss, maintenance, or gain when combined with activity level.",
    },
  },
  {
    "@type": "Question",
    name: "Is the Mifflin-St Jeor equation accurate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It is widely used and often more accurate than older Harris-Benedict equations for many adults, but individual metabolism still varies.",
    },
  },
];

const BMRCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [age, setAge] = useState(DEFAULTS.age);
  const [gender, setGender] = useState(DEFAULTS.gender);

  const result = computeBMR(weight, height, age, gender);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
    setAge(DEFAULTS.age);
    setGender(DEFAULTS.gender);
  };

  return (
    <>
      <Helmet>
        <title>BMR Calculator - Basal Metabolic Rate (Mifflin-St Jeor)</title>
        <meta
          name="description"
          content="BMR in kcal/day from kg, cm, age, and gender using Mifflin-St Jeor. Includes sedentary TDEE estimate—not personalized medical advice."
        />
        <meta
          name="keywords"
          content="bmr calculator, basal metabolic rate, mifflin st jeor, daily calories at rest, tdee estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="BMR Calculator" />
        <meta
          property="og:description"
          content="Estimate basal metabolic rate and sedentary maintenance calories."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BMR Calculator" />
        <meta
          name="twitter:description"
          content="Calories burned at rest from Mifflin-St Jeor inputs."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BMR Calculator",
            url: PAGE_URL,
            description:
              "Calculate basal metabolic rate using the Mifflin-St Jeor equation.",
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
            name: "BMR Calculator",
            url: PAGE_URL,
            description: "Web tool to estimate BMR from metric inputs.",
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
            headline: "Basal Metabolic Rate and Mifflin-St Jeor",
            description:
              "How BMR is estimated and how it relates to total daily calories.",
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
                name: "BMR Calculator",
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">BMR summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Basal metabolic rate
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${fmtKcal(result.bmr)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Est. maintenance (sedentary ×1.2)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.tdeeSedentary)} kcal/day`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BMR per week</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.caloriesPerWeek)} kcal`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Formula</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error ? result.formula : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gender</span>
              <span className="font-code-num text-code-num capitalize">
                {result && !result.error ? result.gender : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Mifflin-St Jeor BMR. Multiply by higher activity factors (1.375–1.9)
              for more active lifestyles. For full daily calorie targets, see our{" "}
              Calorie Calculator page.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BMRCalculator;
