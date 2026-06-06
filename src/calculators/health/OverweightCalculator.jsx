import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/overweight-calculator";

const DEFAULTS = {
  weight: "85",
  height: "170",
};

const BMI_UNDERWEIGHT = 18.5;
const BMI_HEALTHY_MAX = 24.9;
const BMI_OVERWEIGHT_MIN = 25;
const BMI_OBESE_MIN = 30;
const KG_TO_LB = 2.2046226218;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getBmiCategory = (bmi) => {
  if (bmi < BMI_UNDERWEIGHT) return "Underweight";
  if (bmi < BMI_OVERWEIGHT_MIN) return "Healthy weight";
  if (bmi < BMI_OBESE_MIN) return "Overweight";
  return "Obese";
};

const computeOverweight = (weight, height) => {
  if (weight.trim() === "" || height.trim() === "") {
    return null;
  }

  const w = parseFloat(weight);
  const hCm = parseFloat(height);

  if (isNaN(w) || isNaN(hCm)) {
    return { error: "Enter valid numbers for weight and height." };
  }

  if (w <= 0 || hCm <= 0) {
    return { error: "Weight and height must be greater than zero." };
  }

  const hM = hCm / 100;
  const bmi = w / (hM * hM);
  const category = getBmiCategory(bmi);
  const minHealthyKg = BMI_UNDERWEIGHT * hM * hM;
  const maxHealthyKg = BMI_HEALTHY_MAX * hM * hM;
  const isOverweight = bmi >= BMI_OVERWEIGHT_MIN && bmi < BMI_OBESE_MIN;
  const isObese = bmi >= BMI_OBESE_MIN;
  const isHealthy = bmi >= BMI_UNDERWEIGHT && bmi < BMI_OVERWEIGHT_MIN;
  const kgAboveHealthyMax = Math.max(0, w - maxHealthyKg);
  const kgToHealthyMax = w - maxHealthyKg;
  const bmiAbove25 = Math.max(0, bmi - BMI_OVERWEIGHT_MIN);

  return {
    bmi,
    category,
    weightKg: w,
    heightCm: hCm,
    minHealthyKg,
    maxHealthyKg,
    isOverweight,
    isObese,
    isHealthy,
    isUnderweight: bmi < BMI_UNDERWEIGHT,
    kgAboveHealthyMax,
    kgToHealthyMax,
    bmiAbove25,
    overweightRange: `${BMI_OVERWEIGHT_MIN}–${BMI_OBESE_MIN - 0.1}`,
    formula: "BMI = weight (kg) ÷ [height (m)]²",
  };
};

const fmtBmi = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const fmtKg = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

const fmtLb = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How do I know if I am overweight?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For adults, BMI from 25.0 to 29.9 is classified as overweight. Enter weight (kg) and height (cm); this calculator shows your BMI and category.",
    },
  },
  {
    "@type": "Question",
    name: "What BMI is considered overweight?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Overweight is typically BMI 25.0 to 29.9. Below 18.5 is underweight, 18.5–24.9 is healthy weight, and 30+ is obese for standard adult screening.",
    },
  },
  {
    "@type": "Question",
    name: "How is overweight calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMI = weight in kg divided by height in meters squared. If BMI is at least 25, you fall in the overweight band (until 30).",
    },
  },
  {
    "@type": "Question",
    name: "Is this overweight calculator the same as BMI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the same BMI formula but emphasizes the overweight category, healthy weight range, and how many kilograms you are above the healthy BMI upper limit.",
    },
  },
  {
    "@type": "Question",
    name: "Does muscle make you overweight on BMI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, BMI can classify muscular people as overweight without excess fat. Body composition tools add context beyond BMI alone.",
    },
  },
  {
    "@type": "Question",
    name: "Is this medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. BMI overweight screening is educational. Diagnosis and treatment require healthcare professionals.",
    },
  },
];

const OverweightCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);

  const result = computeOverweight(weight, height);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
  };

  const statusClass =
    result && !result.error
      ? result.isHealthy
        ? "text-primary"
        : result.isOverweight || result.isObese
          ? "text-error"
          : "text-on-surface"
      : "";

  return (
    <>
      <Helmet>
        <title>
          Overweight Calculator - Am I Overweight? BMI Check (kg &amp; cm)
        </title>
        <meta
          name="description"
          content="Check if you are overweight with BMI from kg and cm. Overweight = BMI 25–29.9; see healthy weight range and kg above limit—not medical advice."
        />
        <meta
          name="keywords"
          content="overweight calculator, am i overweight, bmi overweight, overweight bmi range, weight status calculator, obese vs overweight"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Overweight Calculator" />
        <meta
          property="og:description"
          content="BMI screening with overweight category and healthy weight reference."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Overweight Calculator" />
        <meta
          name="twitter:description"
          content="Am I overweight? BMI from metric inputs."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Overweight Calculator",
            url: PAGE_URL,
            description:
              "Check overweight status using BMI from weight and height.",
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
            name: "Overweight Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute BMI and overweight classification.",
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
            headline: "Overweight BMI Screening for Adults",
            description:
              "How BMI categories define overweight and related weight references.",
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
                name: "Overweight Calculator",
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
                min="0.01"
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
                min="0.01"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                cm
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Overweight screening summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">BMI</span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error ? fmtBmi(result.bmi) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weight category</span>
              <span className={`font-code-num text-code-num ${statusClass}`}>
                {result && !result.error ? result.category : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Overweight (BMI 25–29.9)?</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.isOverweight
                    ? "Yes"
                    : "No"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Healthy BMI weight range</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKg(result.minHealthyKg)} – ${fmtKg(result.maxHealthyKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Above healthy max (24.9 BMI)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.kgAboveHealthyMax > 0
                    ? `${fmtKg(result.kgAboveHealthyMax)} kg (${fmtLb(result.kgAboveHealthyMax * KG_TO_LB)} lb)`
                    : "Within or below range"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BMI points above 25</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.bmiAbove25 > 0
                    ? fmtBmi(result.bmiAbove25)
                    : "—"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Your weight · height</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKg(result.weightKg)} kg · ${result.heightCm} cm`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Adult screening categories—BMI does not measure body fat directly.`
                : "Overweight band: BMI 25.0 to 29.9."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OverweightCalculator;
