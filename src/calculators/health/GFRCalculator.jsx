import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/gfr-calculator";

const DEFAULTS = {
  age: "40",
  creatinine: "1.0",
  gender: "male",
  isAfricanAmerican: false,
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getCkdStage = (gfr) => {
  if (gfr >= 90) {
    return {
      stage: "G1",
      label: "Normal or high",
      range: "≥90 mL/min/1.73m²",
    };
  }
  if (gfr >= 60) {
    return {
      stage: "G2",
      label: "Mildly decreased",
      range: "60–89",
    };
  }
  if (gfr >= 45) {
    return {
      stage: "G3a",
      label: "Mild to moderate decrease",
      range: "45–59",
    };
  }
  if (gfr >= 30) {
    return {
      stage: "G3b",
      label: "Moderate to severe decrease",
      range: "30–44",
    };
  }
  if (gfr >= 15) {
    return {
      stage: "G4",
      label: "Severely decreased",
      range: "15–29",
    };
  }
  return {
    stage: "G5",
    label: "Kidney failure",
    range: "<15",
  };
};

/** CKD-EPI 2009 creatinine equation (mg/dL). */
const computeGfr = (age, creatinine, gender, isAfricanAmerican) => {
  if (age.trim() === "" || creatinine.trim() === "") {
    return null;
  }

  const ageVal = parseFloat(age);
  const creatinineVal = parseFloat(creatinine);

  if (isNaN(ageVal) || isNaN(creatinineVal)) {
    return { error: "Enter valid numbers for age and creatinine." };
  }

  if (ageVal <= 0 || ageVal > 120) {
    return { error: "Enter a valid age (1–120 years)." };
  }

  if (creatinineVal <= 0 || creatinineVal > 30) {
    return { error: "Enter a valid serum creatinine (mg/dL)." };
  }

  const k = gender === "male" ? 0.9 : 0.7;
  const a = gender === "male" ? -0.411 : -0.329;

  const crRatio = creatinineVal / k;
  const minCr = Math.min(crRatio, 1) ** a;
  const maxCr = Math.max(crRatio, 1) ** -1.209;

  let gfr = 141 * minCr * maxCr * 0.993 ** ageVal;

  if (gender === "female") gfr *= 1.018;
  if (isAfricanAmerican) gfr *= 1.159;

  const ckdStage = getCkdStage(gfr);

  return {
    gfr,
    age: Math.round(ageVal),
    creatinine: creatinineVal,
    gender,
    isAfricanAmerican,
    ckdStage,
    formula: "CKD-EPI 2009 (serum creatinine, mg/dL)",
    units: "mL/min/1.73m²",
  };
};

const fmtGfr = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is GFR?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Glomerular filtration rate (GFR) estimates how much blood your kidneys filter each minute. Estimated GFR (eGFR) from a blood creatinine test is commonly used to assess kidney function.",
    },
  },
  {
    "@type": "Question",
    name: "How is eGFR calculated on this page?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This calculator uses the CKD-EPI 2009 creatinine equation with age, sex, serum creatinine in mg/dL, and the legacy Black race coefficient option used in that formula.",
    },
  },
  {
    "@type": "Question",
    name: "What creatinine unit does this GFR calculator use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Serum creatinine must be entered in mg/dL (common in the U.S.). If your lab reports µmol/L, convert before entering or use a tool designed for SI units.",
    },
  },
  {
    "@type": "Question",
    name: "What do CKD G1–G5 stages mean?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Stages are based on eGFR ranges: G1 ≥90, G2 60–89, G3a 45–59, G3b 30–44, G4 15–29, G5 below 15 mL/min/1.73m². Diagnosis of chronic kidney disease also requires persistence and often other markers—only a clinician can diagnose CKD.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as MDRD?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page implements CKD-EPI 2009 creatinine, which is widely used in labs today. MDRD is an older equation and may differ at normal or high GFR.",
    },
  },
  {
    "@type": "Question",
    name: "Why is there a race coefficient?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "CKD-EPI 2009 included a multiplier for Black patients. Many health systems now use race-free CKD-EPI 2021 equations instead. Treat this result as an estimate and follow your lab report and doctor.",
    },
  },
  {
    "@type": "Question",
    name: "Can I diagnose kidney disease with this calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. eGFR from one creatinine value is not a diagnosis. Kidney disease evaluation requires clinical context, repeat testing, urine studies, and professional interpretation.",
    },
  },
];

const GFRCalculator = () => {
  const [age, setAge] = useState(DEFAULTS.age);
  const [creatinine, setCreatinine] = useState(DEFAULTS.creatinine);
  const [gender, setGender] = useState(DEFAULTS.gender);
  const [isAfricanAmerican, setIsAfricanAmerican] = useState(
    DEFAULTS.isAfricanAmerican
  );

  const result = computeGfr(age, creatinine, gender, isAfricanAmerican);

  const reset = () => {
    setAge(DEFAULTS.age);
    setCreatinine(DEFAULTS.creatinine);
    setGender(DEFAULTS.gender);
    setIsAfricanAmerican(DEFAULTS.isAfricanAmerican);
  };

  return (
    <>
      <Helmet>
        <title>
          GFR Calculator - eGFR from Creatinine (CKD-EPI 2009)
        </title>
        <meta
          name="description"
          content="Estimate eGFR (mL/min/1.73m²) from serum creatinine (mg/dL), age, and sex using CKD-EPI 2009. CKD stage reference—not a medical diagnosis."
        />
        <meta
          name="keywords"
          content="gfr calculator, egfr calculator, kidney function calculator, creatinine gfr, ckd epi calculator, chronic kidney disease stages, glomerular filtration rate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="GFR Calculator" />
        <meta
          property="og:description"
          content="Estimated glomerular filtration rate from creatinine using CKD-EPI 2009."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GFR Calculator" />
        <meta
          name="twitter:description"
          content="eGFR and CKD stage reference from creatinine (mg/dL)."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "GFR Calculator",
            url: PAGE_URL,
            description:
              "Estimate kidney function (eGFR) from serum creatinine using the CKD-EPI 2009 equation.",
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
            name: "GFR Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute estimated GFR from creatinine, age, and sex.",
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
            headline: "Estimated GFR from Serum Creatinine",
            description:
              "How CKD-EPI estimates kidney filtration rate and CKD stages.",
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
                name: "GFR Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                years
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Serum creatinine
            </label>
            <div className="relative">
              <input
                type="number"
                value={creatinine}
                onChange={(e) => setCreatinine(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.creatinine}
                min="0.01"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                mg/dL
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              U.S. lab units. Convert µmol/L before entering if needed.
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

          <div className="space-y-2 flex flex-col justify-center">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isAfricanAmerican}
                onChange={(e) => setIsAfricanAmerican(e.target.checked)}
                className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
              />
              <span className="font-h3 text-h3 text-on-surface">
                CKD-EPI 2009 Black race coefficient
              </span>
            </label>
            <p className="text-sm text-on-surface-variant">
              Optional multiplier from the 2009 equation. Many labs now report
              race-free CKD-EPI 2021 instead.
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
            Estimated GFR summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">eGFR</span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${fmtGfr(result.gfr)} mL/min/1.73m²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">CKD stage (eGFR only)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.ckdStage.stage} — ${result.ckdStage.label}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Stage range</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.ckdStage.range : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Serum creatinine</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.creatinine} mg/dL`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Age · sex</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.age} y · ${result.gender === "male" ? "Male" : "Female"}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Race coefficient</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.isAfricanAmerican
                    ? "Applied (×1.159)"
                    : "Not applied"
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Educational estimate only—compare with your lab report and clinician.`
                : "CKD-EPI 2009 creatinine equation (mg/dL). Not a diagnosis."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GFRCalculator;
