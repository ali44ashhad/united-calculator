import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/healthy-weight-calculator";

const DEFAULTS = {
  height: "170",
};

const BMI_HEALTHY_MIN = 18.5;
const BMI_HEALTHY_MAX = 24.9;
const KG_TO_LB = 2.2046226218;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeHealthyWeight = (height) => {
  if (height.trim() === "") {
    return null;
  }

  const hCm = parseFloat(height);

  if (isNaN(hCm)) {
    return { error: "Enter a valid height." };
  }

  if (hCm <= 0) {
    return { error: "Height must be greater than zero." };
  }

  if (hCm < 100 || hCm > 250) {
    return { error: "Enter a realistic height (100–250 cm)." };
  }

  const heightM = hCm / 100;
  const minKg = BMI_HEALTHY_MIN * heightM * heightM;
  const maxKg = BMI_HEALTHY_MAX * heightM * heightM;
  const midKg = (minKg + maxKg) / 2;

  return {
    heightCm: hCm,
    heightM,
    minKg,
    maxKg,
    midKg,
    minLb: minKg * KG_TO_LB,
    maxLb: maxKg * KG_TO_LB,
    midLb: midKg * KG_TO_LB,
    rangeKg: maxKg - minKg,
    bmiMin: BMI_HEALTHY_MIN,
    bmiMax: BMI_HEALTHY_MAX,
    formula: "Healthy weight (kg) = BMI × height (m)²",
  };
};

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
    name: "How is a healthy weight range calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool uses the adult BMI healthy band (18.5–24.9). Minimum weight = 18.5 × height (m)² and maximum = 24.9 × height (m)² in kilograms.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as ideal body weight formulas?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Devine, Robinson, and similar formulas estimate a single target weight by sex. This page shows the full BMI healthy weight range from height only.",
    },
  },
  {
    "@type": "Question",
    name: "Is BMI the same as healthy weight?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Healthy weight here means the weight range that corresponds to BMI 18.5–24.9 for your height. BMI itself is weight ÷ height²; this calculator works backward from height to that range.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use age or gender?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only height (cm) is required. Adult BMI categories do not vary by age or sex in this standard screening model.",
    },
  },
  {
    "@type": "Question",
    name: "Can athletes use this healthy weight range?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Muscular people may weigh above the range with low body fat. BMI and healthy weight bands are screening tools—body composition matters for fitness populations.",
    },
  },
  {
    "@type": "Question",
    name: "Is this medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is an educational reference. Personal targets should consider health history, body composition, and guidance from a qualified provider.",
    },
  },
];

const HealthyWeightCalculator = () => {
  const [height, setHeight] = useState(DEFAULTS.height);

  const result = computeHealthyWeight(height);

  const reset = () => {
    setHeight(DEFAULTS.height);
  };

  return (
    <>
      <Helmet>
        <title>
          Healthy Weight Calculator - BMI Range by Height (kg)
        </title>
        <meta
          name="description"
          content="Healthy weight range (kg & lb) from height using adult BMI 18.5–24.9. Height in cm—not Devine/ideal body weight formulas."
        />
        <meta
          name="keywords"
          content="healthy weight calculator, ideal weight by height, healthy weight range, bmi weight range, weight for height calculator, healthy bmi weight"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Healthy Weight Calculator" />
        <meta
          property="og:description"
          content="Find your healthy weight range from height using standard adult BMI limits."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthy Weight Calculator" />
        <meta
          name="twitter:description"
          content="BMI 18.5–24.9 weight range in kg and lb from height (cm)."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Healthy Weight Calculator",
            url: PAGE_URL,
            description:
              "Calculate healthy adult weight range from height using BMI 18.5 to 24.9.",
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
            name: "Healthy Weight Calculator",
            url: PAGE_URL,
            description:
              "Web tool for healthy weight range from height via BMI limits.",
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
            headline: "Healthy Weight Range from Height and BMI",
            description:
              "How adult BMI 18.5–24.9 translates to a weight range in kilograms.",
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
                name: "Healthy Weight Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Height</label>
            <div className="relative">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.height}
                min="1"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                cm
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Adult BMI healthy band: 18.5–24.9 (weight range from height only).
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
            Healthy weight summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Healthy weight range
              </span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${fmtKg(result.minKg)} – ${fmtKg(result.maxKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Range in pounds</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtLb(result.minLb)} – ${fmtLb(result.maxLb)} lb`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Midpoint (approx.)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKg(result.midKg)} kg (${fmtLb(result.midLb)} lb)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BMI reference band</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.bmiMin} – ${result.bmiMax}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Height used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.heightCm} cm (${result.heightM.toFixed(2)} m)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Allowable weight span</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `±${fmtKg(result.rangeKg / 2)} kg from midpoint`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Screening reference for adults—muscle mass and health history may shift personal targets.`
                : "Min kg = 18.5 × h(m)² · Max kg = 24.9 × h(m)²"}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthyWeightCalculator;
