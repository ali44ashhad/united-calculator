import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/bmi-calculator";

const DEFAULTS = {
  weight: "70",
  height: "170",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getBmiCategory = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
};

const computeBMI = (weight, height) => {
  if (weight.trim() === "" || height.trim() === "") {
    return null;
  }

  const w = parseFloat(weight);
  const hCm = parseFloat(height);

  if (isNaN(w) || isNaN(hCm)) {
    return { error: "Enter valid numbers for weight and height." };
  }

  if (w <= 0) {
    return { error: "Weight must be greater than zero." };
  }

  if (hCm <= 0) {
    return { error: "Height must be greater than zero." };
  }

  const hM = hCm / 100;
  const bmi = w / (hM * hM);
  const category = getBmiCategory(bmi);

  return {
    bmi,
    category,
    weightKg: w,
    heightCm: hCm,
    isHealthyRange: bmi >= 18.5 && bmi < 25,
  };
};

const fmtBmi = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is BMI (Body Mass Index)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMI is a number from your height and weight used to classify underweight, healthy weight, overweight, and obese ranges for adults.",
    },
  },
  {
    "@type": "Question",
    name: "How is BMI calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Metric BMI = weight (kg) ÷ [height (m)]². This tool uses kilograms and centimeters.",
    },
  },
  {
    "@type": "Question",
    name: "Is BMI an accurate measure of health?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMI is a useful screening tool but does not measure body fat, muscle, or fitness directly. Athletes may have high BMI with low fat.",
    },
  },
  {
    "@type": "Question",
    name: "What is a healthy BMI range?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For most adults, BMI between 18.5 and 24.9 is often classified as healthy weight.",
    },
  },
  {
    "@type": "Question",
    name: "Can BMI be used for children?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Children and teens use age- and sex-specific BMI percentiles, not adult cutoffs. This calculator is for adult-style categories.",
    },
  },
];

const BMICalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);

  const result = computeBMI(weight, height);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
  };

  const categoryClass =
    result && !result.error
      ? result.isHealthyRange
        ? "text-primary"
        : result.bmi >= 25
          ? "text-error"
          : "text-on-surface"
      : "";

  return (
    <>
      <Helmet>
        <title>BMI Calculator - Body Mass Index from Weight and Height</title>
        <meta
          name="description"
          content="BMI from kg and cm with underweight, healthy, overweight, and obese categories. Screening tool—not a full health assessment."
        />
        <meta
          name="keywords"
          content="bmi calculator, body mass index, weight height calculator, healthy bmi range, obesity bmi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="BMI Calculator" />
        <meta
          property="og:description"
          content="Calculate Body Mass Index and see standard adult weight categories."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BMI Calculator" />
        <meta
          name="twitter:description"
          content="Instant BMI from metric weight and height."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BMI Calculator",
            url: PAGE_URL,
            description:
              "Calculate Body Mass Index from weight in kg and height in cm.",
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
            name: "BMI Calculator",
            url: PAGE_URL,
            description: "Web tool to compute BMI and weight category.",
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
            headline: "Body Mass Index (BMI) Explained",
            description:
              "How to calculate BMI and interpret standard adult categories.",
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
                name: "BMI Calculator",
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">BMI summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Your BMI</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error ? fmtBmi(result.bmi) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Category</span>
              <span className={`font-code-num text-code-num ${categoryClass}`}>
                {result && !result.error ? result.category : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Healthy range (18.5–24.9)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.isHealthyRange
                    ? "Yes"
                    : "No"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weight</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `${result.weightKg} kg` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Height</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `${result.heightCm} cm` : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              BMI = kg ÷ (m)². Does not measure body fat or muscle—use with other
              health metrics and professional advice.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BMICalculator;
