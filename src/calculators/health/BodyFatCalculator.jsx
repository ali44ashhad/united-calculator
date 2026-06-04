import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/body-fat-calculator";

const DEFAULTS = {
  gender: "male",
  height: "175",
  neck: "38",
  waist: "85",
  hip: "95",
};

const CM_PER_IN = 2.54;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getBodyFatCategory = (bodyFat, gender) => {
  if (gender === "male") {
    if (bodyFat < 6) return "Essential fat";
    if (bodyFat < 14) return "Athletic";
    if (bodyFat < 18) return "Fitness";
    if (bodyFat < 25) return "Average";
    return "Obese";
  }
  if (bodyFat < 14) return "Essential fat";
  if (bodyFat < 21) return "Athletic";
  if (bodyFat < 25) return "Fitness";
  if (bodyFat < 32) return "Average";
  return "Obese";
};

const computeBodyFat = (gender, height, neck, waist, hip) => {
  if (height.trim() === "" || neck.trim() === "" || waist.trim() === "") {
    return null;
  }

  if (gender === "female" && hip.trim() === "") {
    return null;
  }

  const heightCm = parseFloat(height);
  const neckCm = parseFloat(neck);
  const waistCm = parseFloat(waist);
  const hipCm = gender === "female" ? parseFloat(hip) : 0;

  if (
    isNaN(heightCm) ||
    isNaN(neckCm) ||
    isNaN(waistCm) ||
    (gender === "female" && isNaN(hipCm))
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (heightCm <= 0 || neckCm <= 0 || waistCm <= 0) {
    return { error: "Height, neck, and waist must be greater than zero." };
  }

  if (gender === "female" && hipCm <= 0) {
    return { error: "Hip measurement must be greater than zero." };
  }

  const heightIn = heightCm / CM_PER_IN;
  const neckIn = neckCm / CM_PER_IN;
  const waistIn = waistCm / CM_PER_IN;
  const hipIn = hipCm / CM_PER_IN;

  let bodyFat;

  if (gender === "male") {
    if (waistIn <= neckIn) {
      return {
        error: "Waist must be larger than neck for the male Navy formula.",
      };
    }
    bodyFat =
      86.01 * Math.log10(waistIn - neckIn) -
      70.041 * Math.log10(heightIn) +
      36.76;
  } else {
    if (waistIn + hipIn <= neckIn) {
      return {
        error:
          "Waist plus hip must be larger than neck for the female Navy formula.",
      };
    }
    bodyFat =
      163.205 * Math.log10(waistIn + hipIn - neckIn) -
      97.684 * Math.log10(heightIn) -
      78.387;
  }

  if (!Number.isFinite(bodyFat) || bodyFat < 0) {
    return { error: "Could not compute body fat from these measurements." };
  }

  return {
    bodyFat,
    category: getBodyFatCategory(bodyFat, gender),
    gender,
    heightCm,
    neckCm,
    waistCm,
    hipCm: gender === "female" ? hipCm : null,
    formula: "U.S. Navy circumference",
  };
};

const fmtPct = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is body fat percentage?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Body fat percentage is the share of your total weight that is fat tissue. It helps describe fitness and health risk beyond BMI alone.",
    },
  },
  {
    "@type": "Question",
    name: "How is body fat calculated in this tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the U.S. Navy circumference method: height, neck, and waist (plus hip for women) in cm, converted to inches for the official log10 formulas.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate is the Navy body fat formula?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It is a widely used estimate from tape measurements. DEXA or hydrostatic weighing are more precise; technique affects results.",
    },
  },
  {
    "@type": "Question",
    name: "What measurements do I need?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Gender, height (cm), neck (cm), waist (cm). Women also need hip (cm) at the widest point.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the Army body fat calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Both use the same Navy circumference equations. The Army calculator on this site also compares your result to age-based military maximums.",
    },
  },
];

const BodyFatCalculator = () => {
  const [gender, setGender] = useState(DEFAULTS.gender);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [neck, setNeck] = useState(DEFAULTS.neck);
  const [waist, setWaist] = useState(DEFAULTS.waist);
  const [hip, setHip] = useState(DEFAULTS.hip);

  const result = computeBodyFat(gender, height, neck, waist, hip);

  const reset = () => {
    setGender(DEFAULTS.gender);
    setHeight(DEFAULTS.height);
    setNeck(DEFAULTS.neck);
    setWaist(DEFAULTS.waist);
    setHip(DEFAULTS.hip);
  };

  return (
    <>
      <Helmet>
        <title>
          Body Fat Calculator - Navy Circumference Method
        </title>
        <meta
          name="description"
          content="Body fat % from height, neck, waist (and hip for women) in cm using U.S. Navy formulas. Fitness category estimate—not a medical test."
        />
        <meta
          name="keywords"
          content="body fat calculator, body fat percentage, navy body fat formula, circumference body fat, fitness calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Body Fat Calculator" />
        <meta
          property="og:description"
          content="Estimate body fat percentage from tape measurements and Navy log10 formulas."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Body Fat Calculator" />
        <meta
          name="twitter:description"
          content="Navy-method body fat % from metric circumferences."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Body Fat Calculator",
            url: PAGE_URL,
            description:
              "Estimate body fat percentage using U.S. Navy circumference measurements.",
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
            name: "Body Fat Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate body fat from neck, waist, hip, and height.",
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
            headline: "Body Fat Percentage and the Navy Method",
            description:
              "How to estimate body fat from circumference measurements.",
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
                name: "Body Fat Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
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
            <label className="font-h3 text-h3 text-on-surface">
              Neck circumference
            </label>
            <div className="relative">
              <input
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.neck}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                cm
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Waist circumference
            </label>
            <div className="relative">
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.waist}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                cm
              </span>
            </div>
          </div>

          {gender === "female" && (
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">
                Hip circumference
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                  className={inputClassName}
                  placeholder={DEFAULTS.hip}
                  min="0"
                  step="any"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                  cm
                </span>
              </div>
            </div>
          )}
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
            Body fat summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Body fat percentage
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${fmtPct(result.bodyFat)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Category</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.category : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Method</span>
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
              U.S. Navy log10 formulas with cm converted to inches. Categories
              are general fitness bands—not medical diagnosis.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BodyFatCalculator;
