import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/body-type-calculator";

const DEFAULTS = {
  weight: "70",
  height: "175",
  frame: "medium",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const SOMATOTYPE_HINTS = {
  Ectomorph: "Lean build—often harder to gain mass",
  Mesomorph: "Athletic build—responds well to training",
  Endomorph: "Rounder build—may gain weight more easily",
};

const getBodyType = (bmi, frame) => {
  if (bmi < 18.5) return "Ectomorph";
  if (bmi < 25) {
    if (frame === "small") return "Ectomorph";
    if (frame === "medium") return "Mesomorph";
    return "Endomorph";
  }
  if (frame === "small") return "Mesomorph";
  return "Endomorph";
};

const computeBodyType = (weight, height, frame) => {
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
  const bodyType = getBodyType(bmi, frame);

  return {
    bmi,
    bodyType,
    frame,
    hint: SOMATOTYPE_HINTS[bodyType],
    weightKg: w,
    heightCm: hCm,
  };
};

const fmtBmi = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What are the three main body types?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Somatotypes are often described as ectomorph (lean), mesomorph (muscular/athletic), and endomorph (rounder, stores fat more easily).",
    },
  },
  {
    "@type": "Question",
    name: "How does this body type calculator work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates somatotype from BMI (kg and cm) plus your self-selected frame size (small, medium, or large).",
    },
  },
  {
    "@type": "Question",
    name: "Is somatotype scientifically fixed?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Modern science treats somatotypes as rough tendencies, not rigid categories. Nutrition, training, and genetics all matter.",
    },
  },
  {
    "@type": "Question",
    name: "What is body frame size?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Frame size reflects bone structure (wrist/elbow tests are common). Here you choose small, medium, or large to refine the estimate.",
    },
  },
  {
    "@type": "Question",
    name: "Can my body type change?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Body composition shifts with diet, exercise, and age even if natural tendencies remain.",
    },
  },
];

const BodyTypeCalculator = () => {
  const [weight, setWeight] = useState(DEFAULTS.weight);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [frame, setFrame] = useState(DEFAULTS.frame);

  const result = computeBodyType(weight, height, frame);

  const reset = () => {
    setWeight(DEFAULTS.weight);
    setHeight(DEFAULTS.height);
    setFrame(DEFAULTS.frame);
  };

  return (
    <>
      <Helmet>
        <title>
          Body Type Calculator - Ectomorph, Mesomorph, Endomorph
        </title>
        <meta
          name="description"
          content="Somatotype estimate from BMI (kg, cm) and frame size—ectomorph, mesomorph, or endomorph. Fitness guide, not a medical diagnosis."
        />
        <meta
          name="keywords"
          content="body type calculator, somatotype, ectomorph mesomorph endomorph, body frame calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Body Type Calculator" />
        <meta
          property="og:description"
          content="Find your estimated somatotype for fitness and nutrition planning."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Body Type Calculator" />
        <meta
          name="twitter:description"
          content="Ectomorph, mesomorph, or endomorph from BMI and frame."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Body Type Calculator",
            url: PAGE_URL,
            description:
              "Estimate somatotype (ectomorph, mesomorph, endomorph) from BMI and frame size.",
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
            name: "Body Type Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate body somatotype from metric inputs.",
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
            headline: "Somatotypes and Body Frame",
            description:
              "How ectomorph, mesomorph, and endomorph estimates are derived from BMI and frame.",
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
                name: "Body Type Calculator",
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

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Body frame size
            </label>
            <select
              value={frame}
              onChange={(e) => setFrame(e.target.value)}
              className={inputClassName}
            >
              <option value="small">Small frame</option>
              <option value="medium">Medium frame</option>
              <option value="large">Large frame</option>
            </select>
            <p className="text-sm text-on-surface-variant">
              Subjective bone-structure size (small / medium / large) refines the
              somatotype estimate with BMI.
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
            Body type summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Estimated somatotype
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error ? result.bodyType : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">BMI</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtBmi(result.bmi) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Frame size</span>
              <span className="font-code-num text-code-num capitalize">
                {result && !result.error ? result.frame : "—"}
              </span>
            </div>
            {result && !result.error && (
              <p className="text-sm text-on-surface-variant">{result.hint}</p>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Somatotype is a simplified fitness model—not a clinical body
              composition test. Combine with{" "}
              <span className="text-on-surface">BMI</span> and training goals for
              context.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BodyTypeCalculator;
