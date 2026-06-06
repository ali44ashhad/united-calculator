import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/lean-body-mass-calculator";

const DEFAULTS = {
  weight: "70",
  height: "170",
  gender: "male",
};

const KG_TO_LB = 2.2046226218;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeLeanBodyMass = (weight, height, gender) => {
  if (weight.trim() === "" || height.trim() === "") {
    return null;
  }

  const w = parseFloat(weight);
  const h = parseFloat(height);

  if (isNaN(w) || isNaN(h)) {
    return { error: "Enter valid numbers for weight and height." };
  }

  if (w <= 0) {
    return { error: "Weight must be greater than zero." };
  }

  if (h <= 0) {
    return { error: "Height must be greater than zero." };
  }

  const lbmKg =
    gender === "male"
      ? 0.407 * w + 0.267 * h - 19.2
      : 0.252 * w + 0.473 * h - 48.3;

  if (!Number.isFinite(lbmKg)) {
    return { error: "Could not compute lean body mass from these values." };
  }

  if (lbmKg <= 0) {
    return {
      error: "Lean body mass estimate is non-positive—check weight and height.",
    };
  }

  const fatMassKg = w - lbmKg;
  const fatMassClamped = Math.max(0, fatMassKg);
  const bodyFatPct =
    w > 0 ? Math.min(100, Math.max(0, (fatMassClamped / w) * 100)) : null;
  const lbmPct = w > 0 ? (lbmKg / w) * 100 : null;
  const heightM = h / 100;
  const bmi = w / (heightM * heightM);
  const lbmExceedsWeight = lbmKg > w;

  return {
    lbmKg,
    lbmLb: lbmKg * KG_TO_LB,
    weightKg: w,
    weightLb: w * KG_TO_LB,
    heightCm: h,
    gender,
    fatMassKg: fatMassClamped,
    fatMassLb: fatMassClamped * KG_TO_LB,
    bodyFatPct,
    lbmPct,
    bmi,
    lbmExceedsWeight,
    formula: "Boer lean body mass (1984)",
  };
};

const fmtKg = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const fmtLb = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const fmtPct = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const fmtBmi = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is lean body mass (LBM)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Lean body mass is total body weight minus fat mass. It includes muscle, bone, organs, and water—often used as fat-free mass in fitness and clinical estimates.",
    },
  },
  {
    "@type": "Question",
    name: "How is LBM calculated on this page?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool uses the Boer formula (1984) with weight (kg), height (cm), and sex. Male: 0.407×kg + 0.267×cm − 19.2. Female: 0.252×kg + 0.473×cm − 48.3.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use body fat percentage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No direct input. Boer estimates LBM from weight, height, and sex. The summary derives approximate fat mass and body fat % as weight minus estimated LBM.",
    },
  },
  {
    "@type": "Question",
    name: "How is LBM different from body fat percentage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "LBM is fat-free weight in kilograms. Body fat percentage is the fat share of total weight. They relate: fat mass ≈ weight − LBM when LBM is estimated.",
    },
  },
  {
    "@type": "Question",
    name: "Is Boer the same as James or Hume?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. James, Hume, and Boer are different LBM equations. Results can differ by several kilograms. This page implements Boer only.",
    },
  },
  {
    "@type": "Question",
    name: "Is lean body mass the same as muscle mass?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. LBM includes bone, water, and organs—not just skeletal muscle. It is a broader fat-free mass estimate.",
    },
  },
  {
    "@type": "Question",
    name: "Is this lean body mass calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Boer is a population formula for education. DEXA, BIA, or clinical assessment are more accurate for individual body composition.",
    },
  },
];

const LeanBodyMassCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [gender, setGender] = useState(DEFAULTS.gender);

  const result = computeLeanBodyMass(weight, height, gender);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
    setGender(DEFAULTS.gender);
  };

  return (
    <>
      <Helmet>
        <title>
          Lean Body Mass Calculator - Boer LBM (kg) from Height &amp; Weight
        </title>
        <meta
          name="description"
          content="Estimate lean body mass (kg & lb) with the Boer formula from weight, height (cm), and sex. Approximate fat mass derived—not DEXA or body fat input."
        />
        <meta
          name="keywords"
          content="lean body mass calculator, lbm calculator, boer formula, fat free mass calculator, body composition calculator, muscle mass estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lean Body Mass Calculator" />
        <meta
          property="og:description"
          content="Boer lean body mass from weight, height, and sex."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lean Body Mass Calculator" />
        <meta
          name="twitter:description"
          content="LBM in kg and lb via Boer (1984)."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lean Body Mass Calculator",
            url: PAGE_URL,
            description:
              "Calculate lean body mass using the Boer formula from weight, height, and gender.",
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
            name: "Lean Body Mass Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate lean body mass with the Boer equation.",
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
            headline: "Lean Body Mass with the Boer Formula",
            description:
              "How to estimate fat-free mass from weight, height, and sex.",
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
                name: "Lean Body Mass Calculator",
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

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Sex</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={inputClassName}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="text-sm text-on-surface-variant">
              Boer (1984) equation — weight and height in metric units.
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
            Lean body mass summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Lean body mass (LBM)
              </span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${fmtKg(result.lbmKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">LBM (lb)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtLb(result.lbmLb)} lb`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Est. fat mass</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKg(result.fatMassKg)} kg (${fmtLb(result.fatMassLb)} lb)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Est. body fat %</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.bodyFatPct != null
                  ? `${fmtPct(result.bodyFatPct)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">LBM share of weight</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.lbmPct != null
                  ? `${fmtPct(result.lbmPct)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total weight · BMI</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKg(result.weightKg)} kg · BMI ${fmtBmi(result.bmi)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Height · sex</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.heightCm} cm · ${result.gender === "male" ? "Male" : "Female"}`
                  : "—"}
              </span>
            </div>

            {result?.lbmExceedsWeight && !result.error && (
              <p className="text-sm text-error">
                Estimated LBM exceeds total weight—Boer may be unreliable for
                these inputs.
              </p>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Fat mass and body fat % are derived (weight − LBM), not measured. For skinfold or Navy methods, use the Body Fat Calculator.`
                : "Male: 0.407×kg + 0.267×cm − 19.2 · Female: 0.252×kg + 0.473×cm − 48.3"}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LeanBodyMassCalculator;
