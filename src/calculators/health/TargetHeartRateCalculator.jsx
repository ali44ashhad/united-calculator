import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/target-heart-rate-calculator";

const DEFAULTS = {
  age: "30",
};

const MHR_FORMULA_OFFSET = 220;
const TARGET_ZONE_MIN_PCT = 0.5;
const TARGET_ZONE_MAX_PCT = 0.85;
const MIN_AGE = 10;
const MAX_AGE = 100;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const zoneBpm = (maxHr, minPct, maxPct) => ({
  min: Math.round(maxHr * minPct),
  max: Math.round(maxHr * maxPct),
});

const computeTargetHeartRate = (age) => {
  if (age.trim() === "") {
    return null;
  }

  const a = parseInt(age, 10);

  if (isNaN(a)) {
    return { error: "Enter a valid whole number for age." };
  }

  if (a < MIN_AGE || a > MAX_AGE) {
    return {
      error: `Age must be between ${MIN_AGE} and ${MAX_AGE} years for this estimate.`,
    };
  }

  const maxHeartRate = MHR_FORMULA_OFFSET - a;
  const targetZone = zoneBpm(
    maxHeartRate,
    TARGET_ZONE_MIN_PCT,
    TARGET_ZONE_MAX_PCT,
  );
  const moderateZone = zoneBpm(maxHeartRate, 0.5, 0.7);
  const vigorousZone = zoneBpm(maxHeartRate, 0.7, 0.85);
  const lightZone = zoneBpm(maxHeartRate, 0.5, 0.6);
  const aerobicZone = zoneBpm(maxHeartRate, 0.7, 0.8);

  return {
    age: a,
    maxHeartRate,
    targetZone,
    moderateZone,
    vigorousZone,
    lightZone,
    aerobicZone,
    formula: `Max HR ≈ ${MHR_FORMULA_OFFSET} − age; target zone = 50–85% of max HR`,
  };
};

const fmtZone = (zone) => `${zone.min}–${zone.max} bpm`;

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is target heart rate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Target heart rate is a beats-per-minute range for exercise. This calculator uses age-based max heart rate (220 − age) and a 50–85% target zone for general cardio training.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate target heart rate by age?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Estimated max heart rate ≈ 220 − age in years. Target zone = 50% to 85% of that max. Example: age 30 → max 190 bpm → target about 95–162 bpm.",
    },
  },
  {
    "@type": "Question",
    name: "What is the 220 minus age formula?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It is a common estimate for maximum heart rate: MHR ≈ 220 − age. Individual max HR varies; clinical stress tests measure it more accurately.",
    },
  },
  {
    "@type": "Question",
    name: "What heart rate zone is moderate vs vigorous?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "On this page, moderate intensity is about 50–70% of max HR and vigorous is about 70–85%, aligned with common AHA-style percentage bands.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use resting heart rate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only age is required. Karvonen and other formulas that use resting HR are not included on this page.",
    },
  },
  {
    "@type": "Question",
    name: "Is this target heart rate calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. General fitness guidance only. Heart conditions, medications, and pregnancy require professional clearance before intense exercise.",
    },
  },
];

const TargetHeartRateCalculator = () => {
  const [age, setAge] = useState(DEFAULTS.age);

  const result = computeTargetHeartRate(age);

  const reset = () => {
    setAge(DEFAULTS.age);
  };

  return (
    <>
      <Helmet>
        <title>
          Target Heart Rate Calculator - Zones by Age (220 − Age)
        </title>
        <meta
          name="description"
          content="Calculate max heart rate (220 − age) and target zone at 50–85% bpm. Moderate and vigorous zones for cardio—age input only."
        />
        <meta
          name="keywords"
          content="target heart rate calculator, heart rate zones by age, max heart rate 220 minus age, exercise heart rate bpm, cardio heart rate zone"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Target Heart Rate Calculator" />
        <meta
          property="og:description"
          content="Max HR and target zone from age using 220 − age formula."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Target Heart Rate Calculator" />
        <meta
          name="twitter:description"
          content="Heart rate zones for exercise from your age."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Target Heart Rate Calculator",
            url: PAGE_URL,
            description:
              "Estimate max heart rate and exercise zones from age.",
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
            name: "Target Heart Rate Calculator",
            url: PAGE_URL,
            description:
              "Web tool for max heart rate and target zones by age.",
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
            headline: "Target Heart Rate Zones by Age",
            description:
              "220 − age max HR and 50–85% exercise target zone.",
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
                name: "Target Heart Rate Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Age (years)
            </label>
            <input
              type="number"
              min={MIN_AGE}
              max={MAX_AGE}
              step="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Uses estimated max heart rate (220 − age). Not for clinical diagnosis.
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
            Heart rate zone summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Estimated max heart rate
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? `${result.maxHeartRate} bpm`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Target zone (50–85%)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? fmtZone(result.targetZone)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Moderate (50–70%)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? fmtZone(result.moderateZone)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Vigorous (70–85%)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? fmtZone(result.vigorousZone)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Light (50–60%)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtZone(result.lightZone) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Aerobic (70–80%)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtZone(result.aerobicZone) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Age used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `${result.age} years` : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Individual max HR varies; use perceived exertion and medical guidance when needed.`
                : "Enter age to estimate max heart rate and exercise zones."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TargetHeartRateCalculator;
