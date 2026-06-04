import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/body-surface-area-calculator";

const DEFAULTS = {
  weight: "70",
  height: "175",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeBSA = (weight, height) => {
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

  const mosteller = Math.sqrt((w * h) / 3600);
  const duBois = 0.007184 * Math.pow(w, 0.425) * Math.pow(h, 0.725);

  if (!Number.isFinite(mosteller) || mosteller <= 0) {
    return { error: "Could not compute BSA from these values." };
  }

  return {
    mosteller,
    duBois,
    weightKg: w,
    heightCm: h,
    bsaCm2: mosteller * 10000,
  };
};

const fmtArea = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is body surface area (BSA)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "BSA is the estimated total surface area of the body in square meters. Clinicians sometimes use it for drug dosing (e.g. chemotherapy) and other calculations.",
    },
  },
  {
    "@type": "Question",
    name: "How is BSA calculated in this tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Primary result uses the Mosteller formula: BSA (m²) = √((height(cm) × weight(kg)) / 3600). A Du Bois estimate is also shown for comparison.",
    },
  },
  {
    "@type": "Question",
    name: "Mosteller vs Du Bois—which is better?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Both are common approximations from height and weight. Mosteller is simple; Du Bois is older. Follow your clinician or protocol for medical dosing.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use BSA for medication dosing at home?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Drug dosing must follow a licensed prescriber and institutional protocols. This calculator is for education and estimation only.",
    },
  },
  {
    "@type": "Question",
    name: "What units should I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Weight in kilograms and height in centimeters. Results are in square meters (m²).",
    },
  },
];

const BodySurfaceAreaCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);

  const result = computeBSA(weight, height);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
  };

  return (
    <>
      <Helmet>
        <title>
          Body Surface Area Calculator - BSA (Mosteller & Du Bois)
        </title>
        <meta
          name="description"
          content="BSA in m² from kg and cm using Mosteller (√(hw/3600)) plus Du Bois reference. Educational— not for unsupervised medical dosing."
        />
        <meta
          name="keywords"
          content="body surface area calculator, BSA calculator, Mosteller formula, Du Bois BSA, medical BSA"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Body Surface Area Calculator" />
        <meta
          property="og:description"
          content="Estimate BSA in square meters from height and weight."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Body Surface Area Calculator" />
        <meta
          name="twitter:description"
          content="Mosteller and Du Bois BSA from metric inputs."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Body Surface Area Calculator",
            url: PAGE_URL,
            description:
              "Calculate body surface area using Mosteller and Du Bois formulas.",
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
            name: "Body Surface Area Calculator",
            url: PAGE_URL,
            description: "Web tool to estimate BSA from height and weight.",
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
            headline: "Body Surface Area Formulas",
            description:
              "How Mosteller and Du Bois estimate BSA from height and weight.",
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
                name: "Body Surface Area Calculator",
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">BSA summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                BSA (Mosteller)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${fmtArea(result.mosteller)} m²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BSA (Du Bois)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtArea(result.duBois)} m²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mosteller (cm²)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtArea(result.bsaCm2)} cm²`
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
              Mosteller: √(height(cm) × weight(kg) / 3600). Du Bois shown for
              comparison. Not for prescribing medication without a clinician.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BodySurfaceAreaCalculator;
