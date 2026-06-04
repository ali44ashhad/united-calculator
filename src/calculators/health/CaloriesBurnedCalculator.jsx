import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/calories-burned-calculator";

const DEFAULTS = {
  weight: "70",
  duration: "30",
  activity: "3.5",
};

const ACTIVITY_OPTIONS = [
  { label: "Walking (5 km/h)", value: 3.5 },
  { label: "Running (8 km/h)", value: 8.3 },
  { label: "Cycling (leisure)", value: 4.0 },
  { label: "Swimming (light)", value: 6.0 },
  { label: "Yoga", value: 2.5 },
  { label: "Weight lifting", value: 3.0 },
  { label: "Dancing", value: 5.0 },
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getActivityLabel = (met) =>
  ACTIVITY_OPTIONS.find((o) => o.value === parseFloat(met))?.label ??
  `Custom MET ${met}`;

const computeCaloriesBurned = (weight, duration, activity) => {
  if (
    weight.trim() === "" ||
    duration.trim() === "" ||
    activity.trim() === ""
  ) {
    return null;
  }

  const w = parseFloat(weight);
  const minutes = parseFloat(duration);
  const met = parseFloat(activity);

  if (isNaN(w) || isNaN(minutes) || isNaN(met)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (w <= 0) {
    return { error: "Weight must be greater than zero." };
  }

  if (minutes <= 0) {
    return { error: "Duration must be greater than zero." };
  }

  if (met <= 0) {
    return { error: "MET value must be greater than zero." };
  }

  const hours = minutes / 60;
  const calories = met * w * hours;
  const caloriesPerHour = met * w;

  if (!Number.isFinite(calories) || calories < 0) {
    return { error: "Could not compute calories burned." };
  }

  return {
    calories,
    caloriesPerHour,
    met,
    activityLabel: getActivityLabel(met),
    weightKg: w,
    durationMinutes: minutes,
    durationHours: hours,
  };
};

const fmtKcal = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How does the calories burned calculator work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Calories ≈ MET × weight (kg) × time (hours). MET is the Metabolic Equivalent of Task for the activity you select.",
    },
  },
  {
    "@type": "Question",
    name: "What is MET?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "MET compares activity intensity to resting metabolism. MET 3 means roughly three times resting energy burn.",
    },
  },
  {
    "@type": "Question",
    name: "Why track calories burned?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It helps balance intake and expenditure for weight management and workout planning alongside a daily calorie target.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate are MET estimates?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "They are averages. Intensity, fitness, terrain, and technique change real burn. Use as a guide, not an exact measurement.",
    },
  },
  {
    "@type": "Question",
    name: "Should I eat back exercise calories?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If your daily calorie target already includes activity level, avoid double-counting. Add exercise calories only when your plan is built that way.",
    },
  },
];

const CaloriesBurnedCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [duration, setDuration] = useState(DEFAULTS.duration);
  const [activity, setActivity] = useState(DEFAULTS.activity);

  const result = computeCaloriesBurned(weight, duration, activity);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setDuration(DEFAULTS.duration);
    setActivity(DEFAULTS.activity);
  };

  return (
    <>
      <Helmet>
        <title>
          Calories Burned Calculator - MET × Weight × Duration
        </title>
        <meta
          name="description"
          content="Estimate exercise calories from weight (kg), minutes, and activity MET. Walking, running, cycling, and more—not lab-grade measurement."
        />
        <meta
          name="keywords"
          content="calories burned calculator, MET calculator, exercise calories, workout calorie estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Calories Burned Calculator" />
        <meta
          property="og:description"
          content="Calories burned from MET, weight, and workout duration."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Calories Burned Calculator" />
        <meta
          name="twitter:description"
          content="Exercise calorie estimate using standard MET values."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Calories Burned Calculator",
            url: PAGE_URL,
            description:
              "Estimate calories burned during exercise using MET values.",
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
            name: "Calories Burned Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate exercise calories from MET, weight, and duration.",
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
            headline: "Calories Burned and MET Values",
            description:
              "How to estimate energy burned during physical activity.",
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
                name: "Calories Burned Calculator",
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
            <label className="font-h3 text-h3 text-on-surface">Duration</label>
            <div className="relative">
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.duration}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                min
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Activity type
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className={inputClassName}
            >
              {ACTIVITY_OPTIONS.map((opt) => (
                <option key={opt.label} value={opt.value}>
                  {opt.label} (MET {opt.value})
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
            Calories burned summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Calories burned
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${fmtKcal(result.calories)} kcal`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rate (approx.)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKcal(result.caloriesPerHour)} kcal/hour`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Activity</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.activityLabel : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">MET value</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.met : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Duration</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.durationMinutes} min`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Calories = MET × kg × hours. Compare with daily needs from the{" "}
              Calorie Calculator—avoid double-counting if activity is already in
              your TDEE factor.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaloriesBurnedCalculator;
