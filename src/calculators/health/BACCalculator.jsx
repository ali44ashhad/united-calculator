import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/bac-calculator";

const DEFAULTS = {
  weight: "70",
  gender: "male",
  alcoholConsumed: "40",
  hours: "1",
};

const WIDMARK_R = { male: 0.68, female: 0.55 };
const ELIMINATION_RATE = 0.015; // % BAC per hour (approx.)

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getImpairmentLabel = (bac) => {
  if (bac <= 0) return "Sober (no measurable alcohol)";
  if (bac < 0.02) return "Very low—possible mild effects";
  if (bac < 0.05) return "Mild impairment possible";
  if (bac < 0.08) return "Impaired—approaching common driving limits";
  if (bac < 0.15) return "Clearly impaired—over typical U.S. driving limit";
  if (bac < 0.3) return "Severely impaired—high risk";
  return "Dangerously high—seek medical help if symptomatic";
};

const computeBAC = (weight, gender, alcoholConsumed, hours) => {
  if (
    weight.trim() === "" ||
    alcoholConsumed.trim() === "" ||
    hours.trim() === ""
  ) {
    return null;
  }

  const w = parseFloat(weight);
  const a = parseFloat(alcoholConsumed);
  const h = parseFloat(hours);

  if (isNaN(w) || isNaN(a) || isNaN(h)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (w <= 0) {
    return { error: "Weight must be greater than zero." };
  }

  if (a < 0) {
    return { error: "Alcohol consumed cannot be negative." };
  }

  if (h < 0) {
    return { error: "Hours cannot be negative." };
  }

  const r = WIDMARK_R[gender] ?? WIDMARK_R.male;
  const bacRaw = (a / (w * 1000 * r)) * 100 - ELIMINATION_RATE * h;
  const bac = Math.max(0, bacRaw);
  const standardDrinks = a / 14; // U.S. standard drink ≈ 14 g ethanol

  return {
    bac,
    weightKg: w,
    alcoholGrams: a,
    hours: h,
    gender,
    widmarkR: r,
    standardDrinks,
    impairment: getImpairmentLabel(bac),
    overUsDrivingLimit: bac >= 0.08,
  };
};

const fmtBac = (n) =>
  parseFloat(n.toFixed(4)).toLocaleString(undefined, {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });

const fmtNum = (n, digits = 1) =>
  parseFloat(n.toFixed(digits)).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is BAC (blood alcohol content)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BAC is the percentage of alcohol in your bloodstream. It is used to describe intoxication and is referenced in many driving laws.",
    },
  },
  {
    "@type": "Question",
    name: "How does this BAC calculator work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the Widmark formula: BAC from weight (kg), gender (body water constant), grams of alcohol consumed, and hours elapsed, minus an approximate elimination rate of 0.015% per hour.",
    },
  },
  {
    "@type": "Question",
    name: "Is the BAC calculator accurate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It provides an estimate only. Metabolism, food, medications, and health conditions change real BAC. Never use it to decide if you are safe to drive.",
    },
  },
  {
    "@type": "Question",
    name: "How many grams of alcohol are in a standard drink?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "In the U.S., one standard drink is often defined as about 14 grams of pure ethanol. Other countries use different definitions.",
    },
  },
  {
    "@type": "Question",
    name: "What BAC is over the limit for driving?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Limits vary by country and state. Many U.S. jurisdictions use 0.08% for drivers 21+. Lower limits apply for under-21 drivers and commercial licenses. Always follow local law.",
    },
  },
];

const BACCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [gender, setGender] = useState(DEFAULTS.gender);
  const [alcoholConsumed, setAlcoholConsumed] = useState(DEFAULTS.alcoholConsumed);
  const [hours, setHours] = useState(DEFAULTS.hours);

  const result = computeBAC(weight, gender, alcoholConsumed, hours);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setGender(DEFAULTS.gender);
    setAlcoholConsumed(DEFAULTS.alcoholConsumed);
    setHours(DEFAULTS.hours);
  };

  return (
    <>
      <Helmet>
        <title>BAC Calculator - Estimate Blood Alcohol Content</title>
        <meta
          name="description"
          content="Widmark BAC estimate from weight (kg), gender, alcohol (grams), and hours. Impairment note and 0.08% reference—not for legal sobriety."
        />
        <meta
          name="keywords"
          content="bac calculator, blood alcohol content, alcohol level calculator, widmark formula, sobriety estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="BAC Calculator" />
        <meta
          property="og:description"
          content="Estimate blood alcohol content with the Widmark formula and elapsed time."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BAC Calculator" />
        <meta
          name="twitter:description"
          content="Blood alcohol estimate from weight, gender, grams of alcohol, and hours."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BAC Calculator",
            url: PAGE_URL,
            description:
              "Estimate blood alcohol content using the Widmark formula with metric weight and alcohol in grams.",
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
            name: "BAC Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate blood alcohol content from Widmark inputs.",
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
            headline: "Blood Alcohol Content and the Widmark Formula",
            description:
              "How BAC is estimated from body weight, gender, alcohol consumed, and time.",
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
                name: "BAC Calculator",
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
            <label className="font-h3 text-h3 text-on-surface">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={inputClassName}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="text-sm text-on-surface-variant">
              Widmark body water constant: 0.68 (male), 0.55 (female).
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Alcohol consumed
            </label>
            <div className="relative">
              <input
                type="number"
                value={alcoholConsumed}
                onChange={(e) => setAlcoholConsumed(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.alcoholConsumed}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                g
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Pure ethanol in grams. ~14 g ≈ one U.S. standard drink (40 g ≈ 2.9
              drinks).
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Hours since drinking began
            </label>
            <div className="relative">
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.hours}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                hrs
              </span>
            </div>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">BAC summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Estimated BAC</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${fmtBac(result.bac)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Impairment note</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.impairment : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">U.S. 0.08% reference</span>
              <span
                className={`font-code-num text-code-num ${
                  result && !result.error
                    ? result.overUsDrivingLimit
                      ? "text-error"
                      : "text-primary"
                    : ""
                }`}
              >
                {result && !result.error
                  ? result.overUsDrivingLimit
                    ? "At or above 0.08%"
                    : "Below 0.08%"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Standard drinks (≈14 g)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? fmtNum(result.standardDrinks, 1)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Alcohol entered</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.alcoholGrams} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Hours elapsed</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `${result.hours} h` : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Widmark estimate with ~0.015% BAC eliminated per hour. Not accurate
              enough for legal sobriety—never drink and drive.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BACCalculator;
