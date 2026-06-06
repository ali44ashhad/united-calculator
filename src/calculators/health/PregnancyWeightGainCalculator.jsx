import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/pregnancy-weight-gain-calculator";

const DEFAULTS = {
  prePregnancyWeight: "62",
  height: "165",
  trimester: "2",
};

const KG_TO_LB = 2.2046226218;
const FIRST_TRI_MIN_KG = 0.5;
const FIRST_TRI_MAX_KG = 2;
const FULL_TERM_WEEKS = 40;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const TRIMESTER_OPTIONS = [
  { value: "1", label: "First trimester (weeks 1–13)" },
  { value: "2", label: "Second trimester (weeks 14–27)" },
  { value: "3", label: "Third trimester (weeks 28–40)" },
];

const TRIMESTER_END_WEEK = { 1: 13, 2: 27, 3: 40 };

const IOM_GUIDELINES = {
  underweight: {
    category: "Underweight",
    bmiRange: "Below 18.5",
    minKg: 12.5,
    maxKg: 18,
    weeklyKg: 0.51,
  },
  normal: {
    category: "Normal weight",
    bmiRange: "18.5–24.9",
    minKg: 11.5,
    maxKg: 16,
    weeklyKg: 0.42,
  },
  overweight: {
    category: "Overweight",
    bmiRange: "25.0–29.9",
    minKg: 7,
    maxKg: 11.5,
    weeklyKg: 0.28,
  },
  obese: {
    category: "Obese",
    bmiRange: "30.0 and above",
    minKg: 5,
    maxKg: 9,
    weeklyKg: 0.22,
  },
};

const getBmiBand = (bmi) => {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
};

const cumulativeGainAtWeek = (week, guide) => {
  const w = Math.min(Math.max(week, 0), FULL_TERM_WEEKS);

  if (w <= 13) {
    const frac = w / 13;
    return {
      minKg: FIRST_TRI_MIN_KG * frac,
      maxKg: FIRST_TRI_MAX_KG * frac,
    };
  }

  const weeksAfterFirst = w - 13;
  const remainingWeeks = FULL_TERM_WEEKS - 13;
  const remainingMin = guide.minKg - FIRST_TRI_MIN_KG;
  const remainingMax = guide.maxKg - FIRST_TRI_MAX_KG;

  return {
    minKg: FIRST_TRI_MIN_KG + (remainingMin * weeksAfterFirst) / remainingWeeks,
    maxKg: FIRST_TRI_MAX_KG + (remainingMax * weeksAfterFirst) / remainingWeeks,
  };
};

const trimesterGainRange = (trimester, guide) => {
  const endWeek = TRIMESTER_END_WEEK[trimester] ?? 27;
  const startWeek =
    trimester === "1" ? 0 : trimester === "2" ? 13 : trimester === "3" ? 27 : 13;

  const end = cumulativeGainAtWeek(endWeek, guide);
  const start = cumulativeGainAtWeek(startWeek, guide);

  return {
    minKg: end.minKg - start.minKg,
    maxKg: end.maxKg - start.maxKg,
    cumulativeMinKg: end.minKg,
    cumulativeMaxKg: end.maxKg,
    endWeek,
  };
};

const fmtKg = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

const fmtLb = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const fmtRangeKgLb = (minKg, maxKg) =>
  `${fmtKg(minKg)}–${fmtKg(maxKg)} kg (${fmtLb(minKg * KG_TO_LB)}–${fmtLb(maxKg * KG_TO_LB)} lbs)`;

const computePregnancyWeightGain = (prePregnancyWeight, height, trimester) => {
  if (prePregnancyWeight.trim() === "" || height.trim() === "") {
    return null;
  }

  const weight = parseFloat(prePregnancyWeight);
  const heightCm = parseFloat(height);

  if (isNaN(weight) || isNaN(heightCm)) {
    return { error: "Enter valid numbers for weight and height." };
  }

  if (weight <= 0 || heightCm <= 0) {
    return { error: "Weight and height must be greater than zero." };
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bandKey = getBmiBand(bmi);
  const guide = IOM_GUIDELINES[bandKey];
  const tri = trimesterGainRange(trimester, guide);
  const weeklyLb = guide.weeklyKg * KG_TO_LB;

  return {
    bmi,
    bandKey,
    guide,
    trimester,
    totalRange: fmtRangeKgLb(guide.minKg, guide.maxKg),
    trimesterRange: fmtRangeKgLb(tri.minKg, tri.maxKg),
    cumulativeRange: fmtRangeKgLb(tri.cumulativeMinKg, tri.cumulativeMaxKg),
    weeklyRate: `${fmtKg(guide.weeklyKg)} kg/week (~${fmtLb(weeklyLb)} lb/week)`,
    firstTrimesterNote: fmtRangeKgLb(FIRST_TRI_MIN_KG, FIRST_TRI_MAX_KG),
    formula: "Pre-pregnancy BMI = weight (kg) ÷ [height (m)]² → IOM total gain range",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is the pregnancy weight gain calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses pre-pregnancy BMI (weight and height before pregnancy) to show Institute of Medicine total gain ranges and trimester guidance based on U.S. clinical guidelines.",
    },
  },
  {
    "@type": "Question",
    name: "How much weight should I gain during pregnancy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total gain depends on pre-pregnancy BMI: underweight 12.5–18 kg, normal 11.5–16 kg, overweight 7–11.5 kg, obese 5–9 kg for a singleton pregnancy.",
    },
  },
  {
    "@type": "Question",
    name: "How is pre-pregnancy BMI used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMI = pre-pregnancy weight in kg divided by height in meters squared. That category selects the recommended total pregnancy weight gain range.",
    },
  },
  {
    "@type": "Question",
    name: "What does the trimester field do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It shows approximate gain for that trimester and cumulative expected gain by the end of that trimester, using standard first-trimester and weekly 2nd/3rd trimester rates.",
    },
  },
  {
    "@type": "Question",
    name: "How much weight gain in the first trimester?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Most guidance suggests about 0.5–2 kg (1–4.5 lbs) total in the first trimester for all BMI categories.",
    },
  },
  {
    "@type": "Question",
    name: "Is this pregnancy weight gain calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Educational IOM-style ranges only. Twins, medical conditions, and individual care plans require your prenatal provider.",
    },
  },
];

const PregnancyWeightGainCalculator = () => {
  const [prePregnancyWeight, setPrePregnancyWeight] = useState(
    DEFAULTS.prePregnancyWeight,
  );
  const [height, setHeight] = useState(DEFAULTS.height);
  const [trimester, setTrimester] = useState(DEFAULTS.trimester);

  const result = computePregnancyWeightGain(
    prePregnancyWeight,
    height,
    trimester,
  );

  const reset = () => {
    setPrePregnancyWeight(DEFAULTS.prePregnancyWeight);
    setHeight(DEFAULTS.height);
    setTrimester(DEFAULTS.trimester);
  };

  const trimesterLabel =
    TRIMESTER_OPTIONS.find((o) => o.value === trimester)?.label ?? "";

  return (
    <>
      <Helmet>
        <title>
          Pregnancy Weight Gain Calculator - IOM Range by Pre-Pregnancy BMI
        </title>
        <meta
          name="description"
          content="Recommended pregnancy weight gain from pre-pregnancy BMI (IOM guidelines). Total range, trimester guidance, and weekly 2nd/3rd trimester rates."
        />
        <meta
          name="keywords"
          content="pregnancy weight gain calculator, how much weight to gain pregnant, IOM pregnancy weight gain, gestational weight gain BMI, trimester weight gain"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pregnancy Weight Gain Calculator"
        />
        <meta
          property="og:description"
          content="Total and trimester pregnancy weight gain ranges from pre-pregnancy BMI."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pregnancy Weight Gain Calculator"
        />
        <meta
          name="twitter:description"
          content="IOM gestational weight gain by pre-pregnancy BMI."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pregnancy Weight Gain Calculator",
            url: PAGE_URL,
            description:
              "Estimate recommended pregnancy weight gain from pre-pregnancy BMI and trimester.",
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
            name: "Pregnancy Weight Gain Calculator",
            url: PAGE_URL,
            description:
              "Web tool for IOM pregnancy weight gain ranges by BMI category.",
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
            headline: "Pregnancy Weight Gain by Pre-Pregnancy BMI",
            description:
              "IOM total and trimester gestational weight gain guidance.",
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
                name: "Pregnancy Weight Gain Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Pre-pregnancy weight (kg)
            </label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={prePregnancyWeight}
              onChange={(e) => setPrePregnancyWeight(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Height (cm)
            </label>
            <input
              type="number"
              min="1"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Current trimester
            </label>
            <select
              value={trimester}
              onChange={(e) => setTrimester(e.target.value)}
              className={inputClassName}
            >
              {TRIMESTER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <p className="text-sm text-on-surface-variant">
              Shows approximate gain for this trimester and cumulative gain by
              trimester end (singleton, IOM-style guidance).
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
            Pregnancy weight gain summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Pre-pregnancy BMI
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? parseFloat(result.bmi.toFixed(1)).toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BMI category</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? `${result.guide.category} (${result.guide.bmiRange})`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total recommended gain</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.totalRange : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Selected trimester</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {trimesterLabel || "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gain this trimester (approx.)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.trimesterRange : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Cumulative by trimester end
              </span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.cumulativeRange : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">2nd/3rd trimester rate</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.weeklyRate : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">First trimester (typical)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.firstTrimesterNote : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Singleton pregnancy; twins and medical conditions need individualized care.`
                : "Enter pre-pregnancy weight and height for IOM-style gain ranges."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PregnancyWeightGainCalculator;
