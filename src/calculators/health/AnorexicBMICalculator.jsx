import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/anorexic-bmi-calculator";

const DEFAULTS = {
  weight: "45",
  height: "160",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeAnorexicBMI = (weight, height) => {
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

  let category = "";
  let warning = "";

  if (bmi < 17.5) {
    category = "Severely underweight (possible anorexia risk)";
    warning =
      "BMI below 17.5 may indicate severe underweight or eating-disorder risk. This is not a diagnosis—consult a healthcare provider.";
  } else if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Healthy weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return {
    bmi,
    category,
    warning,
    weightKg: w,
    heightCm: hCm,
  };
};

const fmtBmi = (n) => parseFloat(n.toFixed(2)).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is an anorexic BMI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Many clinicians use BMI below 17.5 as a warning sign for severe underweight that may warrant evaluation for malnutrition or eating disorders. It is not a diagnosis on its own.",
    },
  },
  {
    "@type": "Question",
    name: "How is BMI calculated in this tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BMI = weight (kg) ÷ [height (m)]². Enter weight in kilograms and height in centimeters; height is converted to meters internally.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate is the Anorexic BMI Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It gives a standard BMI from height and weight. It does not account for muscle mass, age, or sex, and cannot replace a medical assessment.",
    },
  },
  {
    "@type": "Question",
    name: "Does a low BMI always mean anorexia?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Low BMI can result from genetics, illness, metabolism, or eating disorders. Professional evaluation is needed for diagnosis.",
    },
  },
  {
    "@type": "Question",
    name: "What BMI categories does this calculator show?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Below 17.5: severely underweight with alert; 17.5–18.4: underweight; 18.5–24.9: healthy range; 25+: overweight or obese per standard BMI bands.",
    },
  },
];

const AnorexicBMICalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);

  const result = computeAnorexicBMI(weight, height);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
  };

  return (
    <>
      <Helmet>
        <title>
          Anorexic BMI Calculator - Check Severely Underweight Range
        </title>
        <meta
          name="description"
          content="BMI from kg and cm with underweight bands and alert below 17.5. Awareness tool—not a medical diagnosis."
        />
        <meta
          name="keywords"
          content="anorexic bmi calculator, bmi calculator for anorexia, underweight bmi calculator, severely underweight bmi, eating disorder bmi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Anorexic BMI Calculator"
        />
        <meta
          property="og:description"
          content="Calculate BMI and see when it falls into severely underweight ranges often used as anorexia risk markers."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anorexic BMI Calculator" />
        <meta
          name="twitter:description"
          content="BMI from weight and height with low-BMI awareness bands."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Anorexic BMI Calculator",
            url: PAGE_URL,
            description:
              "Calculate BMI from kg and cm and see underweight categories including alert below 17.5.",
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
            name: "Anorexic BMI Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute BMI and highlight severely underweight ranges.",
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
            headline: "Anorexic BMI and Severely Underweight Ranges",
            description:
              "How BMI is calculated and when values below 17.5 may warrant clinical follow-up.",
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
                name: "Anorexic BMI Calculator",
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
              Weight
            </label>
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
            <label className="font-h3 text-h3 text-on-surface">
              Height
            </label>
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
              <span
                className={`font-code-num text-code-num text-sm text-right max-w-[55%] ${
                  result?.warning ? "text-error" : "text-on-surface"
                }`}
              >
                {result && !result.error ? result.category : "—"}
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

            {result?.warning && (
              <p className="text-sm text-error border-t border-outline-variant pt-3">
                {result.warning}
              </p>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              BMI = kg ÷ (m)². Alert shown below 17.5. Not a substitute for
              medical diagnosis—seek professional care if you are concerned.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnorexicBMICalculator;
