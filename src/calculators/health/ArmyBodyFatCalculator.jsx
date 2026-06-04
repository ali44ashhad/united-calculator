import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/army-body-fat-calculator";

const DEFAULTS = {
  age: "25",
  gender: "male",
  height: "170",
  neck: "40",
  waist: "80",
  hip: "90",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const CM_PER_IN = 2.54;

/** U.S. Army max body fat % by age group (approximate enlistment standards). */
const getArmyMaxBodyFat = (age, gender) => {
  if (gender === "male") {
    if (age <= 20) return 20;
    if (age <= 27) return 22;
    if (age <= 39) return 24;
    return 26;
  }
  if (age <= 20) return 30;
  if (age <= 27) return 32;
  if (age <= 39) return 34;
  return 36;
};

const computeArmyBodyFat = (age, gender, height, neck, waist, hip) => {
  if (
    age.trim() === "" ||
    height.trim() === "" ||
    neck.trim() === "" ||
    waist.trim() === ""
  ) {
    return null;
  }

  if (gender === "female" && hip.trim() === "") {
    return null;
  }

  const ageNum = parseInt(age, 10);
  const heightCm = parseFloat(height);
  const neckCm = parseFloat(neck);
  const waistCm = parseFloat(waist);
  const hipCm = gender === "female" ? parseFloat(hip) : 0;

  if (
    isNaN(ageNum) ||
    isNaN(heightCm) ||
    isNaN(neckCm) ||
    isNaN(waistCm) ||
    (gender === "female" && isNaN(hipCm))
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (ageNum < 17 || ageNum > 100) {
    return { error: "Age must be between 17 and 100 for Army standards." };
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
        error: "Waist must be larger than neck for the male Army formula.",
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
          "Waist plus hip must be larger than neck for the female Army formula.",
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

  const maxAllowed = getArmyMaxBodyFat(ageNum, gender);
  const meetsStandard = bodyFat <= maxAllowed;

  return {
    bodyFat,
    maxAllowed,
    meetsStandard,
    age: ageNum,
    gender,
    heightCm,
    neckCm,
    waistCm,
    hipCm: gender === "female" ? hipCm : null,
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
    name: "What is the Army Body Fat Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the U.S. Army circumference method (height, neck, waist, and hip for women) to estimate body fat percentage and compare it to age-based Army maximums.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate is this Army body fat estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It follows the official Army log10 formulas with metric inputs converted to inches. Official screening uses trained measurers and may differ slightly.",
    },
  },
  {
    "@type": "Question",
    name: "What measurements do I need?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Age, gender, height (cm), neck circumference (cm), waist circumference (cm). Women also enter hip circumference (cm).",
    },
  },
  {
    "@type": "Question",
    name: "What are the Army body fat maximums?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Men: 20% (17–20), 22% (21–27), 24% (28–39), 26% (40+). Women: 30%, 32%, 34%, 36% for the same age bands. Standards can change—confirm with current regulations.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the general body fat calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page uses Army-specific circumference formulas and age/gender maximums. The general Body Fat Calculator on this site may use different methods.",
    },
  },
];

const ArmyBodyFatCalculator = () => {
  const [age, setAge] = useState(DEFAULTS.age);
  const [gender, setGender] = useState(DEFAULTS.gender);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [neck, setNeck] = useState(DEFAULTS.neck);
  const [waist, setWaist] = useState(DEFAULTS.waist);
  const [hip, setHip] = useState(DEFAULTS.hip);

  const result = computeArmyBodyFat(age, gender, height, neck, waist, hip);

  const reset = () => {
    setAge(DEFAULTS.age);
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
          Army Body Fat Calculator - U.S. Military Body Composition
        </title>
        <meta
          name="description"
          content="Army body fat % from height, neck, waist (and hip for women) in cm. Official log10 formulas plus age-based max standards—not a substitute for official measurement."
        />
        <meta
          name="keywords"
          content="army body fat calculator, military body fat standards, us army body fat, army body composition, army fitness calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Army Body Fat Calculator" />
        <meta
          property="og:description"
          content="Estimate U.S. Army body fat percentage and see if you are within age-based maximum standards."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Army Body Fat Calculator" />
        <meta
          name="twitter:description"
          content="Army circumference body fat formulas with standard comparison."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Army Body Fat Calculator",
            url: PAGE_URL,
            description:
              "Calculate U.S. Army body fat percentage from circumference measurements and compare to age-based limits.",
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
            name: "Army Body Fat Calculator",
            url: PAGE_URL,
            description:
              "Web tool for U.S. Army body fat estimation from neck, waist, hip, and height.",
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
            headline: "U.S. Army Body Fat Standards and Formulas",
            description:
              "How Army body fat is estimated from circumferences and typical maximum percentages by age and gender.",
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
                name: "Army Body Fat Calculator",
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
                min="17"
                max="100"
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
            Army body fat summary
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
              <span className="text-on-surface">Army max (your age)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtPct(result.maxAllowed)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Standard status</span>
              <span
                className={`font-code-num text-code-num ${
                  result && !result.error
                    ? result.meetsStandard
                      ? "text-primary"
                      : "text-error"
                    : ""
                }`}
              >
                {result && !result.error
                  ? result.meetsStandard
                    ? "Within standard"
                    : "Above standard"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gender</span>
              <span className="font-code-num text-code-num capitalize">
                {result && !result.error ? result.gender : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Age</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `${result.age} years` : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Uses U.S. Army log10 circumference formulas (metric converted to
              inches). Max limits are typical age-band standards—verify current
              Army regulations for official screening.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArmyBodyFatCalculator;
