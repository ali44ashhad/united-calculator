import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/ideal-weight-calculator";

const DEFAULTS = {
  height: "170",
  gender: "male",
};

const DEVINE_BASE_INCHES = 60;
const DEVINE_MALE_BASE_KG = 50;
const DEVINE_FEMALE_BASE_KG = 45.5;
const DEVINE_KG_PER_INCH = 2.3;
const MIN_HEIGHT_CM = 152;
const KG_TO_LB = 2.2046226218;
const BMI_HEALTHY_MIN = 18.5;
const BMI_HEALTHY_MAX = 24.9;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeIdealWeight = (height, gender) => {
  if (height.trim() === "") {
    return null;
  }

  const hCm = parseFloat(height);

  if (isNaN(hCm)) {
    return { error: "Enter a valid height." };
  }

  if (hCm < MIN_HEIGHT_CM) {
    return {
      error: `Devine formula applies from about ${MIN_HEIGHT_CM} cm (5 ft) upward.`,
    };
  }

  if (hCm > 250) {
    return { error: "Enter a realistic height (152–250 cm)." };
  }

  const heightInches = hCm / 2.54;
  const extraInches = heightInches - DEVINE_BASE_INCHES;
  const baseKg =
    gender === "male" ? DEVINE_MALE_BASE_KG : DEVINE_FEMALE_BASE_KG;
  const idealKg = baseKg + DEVINE_KG_PER_INCH * extraInches;
  const heightM = hCm / 100;
  const bmiAtIdeal = idealKg / (heightM * heightM);

  const minHealthyKg = BMI_HEALTHY_MIN * heightM * heightM;
  const maxHealthyKg = BMI_HEALTHY_MAX * heightM * heightM;
  const withinHealthyBmi =
    idealKg >= minHealthyKg && idealKg <= maxHealthyKg;

  return {
    idealKg,
    idealLb: idealKg * KG_TO_LB,
    heightCm: hCm,
    heightInches,
    extraInches,
    gender,
    baseKg,
    bmiAtIdeal,
    minHealthyKg,
    maxHealthyKg,
    withinHealthyBmi,
    formula: "Devine ideal body weight (IBW)",
  };
};

const fmtKg = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

const fmtLb = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const fmtBmi = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How is ideal weight calculated on this page?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This calculator uses the Devine formula: men start at 50 kg plus 2.3 kg per inch over 5 feet; women start at 45.5 kg with the same inch increment. Height is entered in centimeters.",
    },
  },
  {
    "@type": "Question",
    name: "What is the Devine ideal body weight formula?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Male IBW (kg) = 50 + 2.3 × (height in inches − 60). Female IBW (kg) = 45.5 + 2.3 × (height in inches − 60). It was developed for clinical dosing estimates.",
    },
  },
  {
    "@type": "Question",
    name: "Is ideal weight the same as healthy weight?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not always. Devine gives one target number by sex and height. Healthy weight from BMI 18.5–24.9 is a range. Compare both on United Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use body frame size?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Devine does not adjust for small, medium, or large frame. Some charts add frame modifiers; this tool uses the standard Devine equation only.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use ideal weight for children?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Devine is for adult-style estimates. Pediatric growth uses age-specific charts, not this formula.",
    },
  },
  {
    "@type": "Question",
    name: "Is ideal body weight medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. IBW formulas are screening and dosing aids. Personal targets should consider body composition, health history, and professional guidance.",
    },
  },
];

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState(DEFAULTS.height);
  const [gender, setGender] = useState(DEFAULTS.gender);

  const result = computeIdealWeight(height, gender);

  const reset = () => {
    setHeight(DEFAULTS.height);
    setGender(DEFAULTS.gender);
  };

  return (
    <>
      <Helmet>
        <title>
          Ideal Weight Calculator - Devine IBW by Height &amp; Sex
        </title>
        <meta
          name="description"
          content="Devine ideal body weight (kg & lb) from height (cm) and sex. Clinical IBW formula—not BMI range or body frame adjustment."
        />
        <meta
          name="keywords"
          content="ideal weight calculator, devine formula, ideal body weight, IBW calculator, perfect weight by height, weight by gender calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ideal Weight Calculator" />
        <meta
          property="og:description"
          content="Calculate Devine ideal body weight from height and sex."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ideal Weight Calculator" />
        <meta
          name="twitter:description"
          content="Devine IBW in kg and lb from centimeters."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ideal Weight Calculator",
            url: PAGE_URL,
            description:
              "Calculate Devine ideal body weight from height and gender.",
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
            name: "Ideal Weight Calculator",
            url: PAGE_URL,
            description:
              "Web tool for Devine ideal body weight from height and sex.",
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
            headline: "Devine Ideal Body Weight from Height",
            description:
              "How the Devine formula estimates ideal body weight for men and women.",
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
                name: "Ideal Weight Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
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
              Devine formula valid from about 152 cm (5 ft) upward.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Sex</label>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Ideal body weight summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Devine ideal weight
              </span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${fmtKg(result.idealKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Ideal weight (lb)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtLb(result.idealLb)} lb`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BMI at ideal weight</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? fmtBmi(result.bmiAtIdeal)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Within BMI 18.5–24.9?</span>
              <span
                className={`font-code-num text-code-num ${
                  result && !result.error
                    ? result.withinHealthyBmi
                      ? "text-primary"
                      : "text-on-surface"
                    : ""
                }`}
              >
                {result && !result.error
                  ? result.withinHealthyBmi
                    ? "Yes"
                    : "Outside range"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Healthy BMI weight band</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKg(result.minHealthyKg)} – ${fmtKg(result.maxHealthyKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Height · sex</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.heightCm} cm (${result.heightInches.toFixed(1)} in) · ${result.gender === "male" ? "Male" : "Female"}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Inches over 5 ft</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.extraInches.toFixed(1)} in`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}: ${result.gender === "male" ? "50" : "45.5"} kg + 2.3 kg × inches over 60. Educational estimate—compare with the healthy weight range for context.`
                : "Male: 50 + 2.3 × (in − 60) kg · Female: 45.5 + 2.3 × (in − 60) kg"}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IdealWeightCalculator;
