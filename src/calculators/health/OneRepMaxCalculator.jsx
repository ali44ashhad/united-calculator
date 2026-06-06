import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/one-rep-max-calculator";

const DEFAULTS = {
  weightLifted: "100",
  reps: "5",
};

const KG_TO_LB = 2.2046226218;

const TRAINING_PERCENTAGES = [95, 90, 85, 80, 75, 70, 60, 50];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeOneRepMax = (weightLifted, reps) => {
  if (weightLifted.trim() === "" || reps.trim() === "") {
    return null;
  }

  const w = parseFloat(weightLifted);
  const r = parseInt(reps, 10);

  if (isNaN(w) || isNaN(r)) {
    return { error: "Enter valid numbers for weight and reps." };
  }

  if (w <= 0) {
    return { error: "Weight lifted must be greater than zero." };
  }

  if (r <= 0) {
    return { error: "Repetitions must be at least 1." };
  }

  if (r > 30) {
    return { error: "Enter 30 reps or fewer for a reliable 1RM estimate." };
  }

  // Epley (1985): 1RM = weight × (1 + reps / 30)
  const oneRepMaxKg = w * (1 + r / 30);
  const trainingLoads = TRAINING_PERCENTAGES.map((pct) => ({
    pct,
    kg: (oneRepMaxKg * pct) / 100,
    lb: ((oneRepMaxKg * pct) / 100) * KG_TO_LB,
  }));

  return {
    weightLiftedKg: w,
    weightLiftedLb: w * KG_TO_LB,
    reps: r,
    oneRepMaxKg,
    oneRepMaxLb: oneRepMaxKg * KG_TO_LB,
    trainingLoads,
    lowRepAccuracy: r > 10,
    formula: "Epley (1985)",
  };
};

const fmtKg = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const fmtLb = (n) =>
  Math.round(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is one rep max (1RM)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "One rep max is the heaviest weight you can lift for one full repetition with good form on a given exercise—used to program strength training.",
    },
  },
  {
    "@type": "Question",
    name: "How is 1RM estimated on this page?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This calculator uses the Epley formula: 1RM = weight lifted × (1 + reps ÷ 30). Enter the weight you lifted and how many reps you completed.",
    },
  },
  {
    "@type": "Question",
    name: "How many reps should I use for a 1RM estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Formulas are most accurate from about 2–10 reps. Higher rep sets (12+) are less reliable for predicting true 1RM.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as Brzycki or Lombardi?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page implements Epley only. Brzycki and Lombardi use different equations and may give slightly different 1RM values.",
    },
  },
  {
    "@type": "Question",
    name: "Should I test 1RM directly?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Estimated 1RM avoids maximal attempts. Direct 1RM testing carries injury risk—use spotters, proper warmup, and coaching when attempting true maxes.",
    },
  },
  {
    "@type": "Question",
    name: "What units does this 1RM calculator use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter weight lifted in kilograms. Results show kg and pounds.",
    },
  },
  {
    "@type": "Question",
    name: "Is this one rep max calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is a fitness estimation tool. Consult qualified coaches and physicians before heavy lifting programs if you have health concerns.",
    },
  },
];

const OneRepMaxCalculator = () => {
  const [weightLifted, setWeightLifted] = useState(DEFAULTS.weightLifted);
  const [reps, setReps] = useState(DEFAULTS.reps);

  const result = computeOneRepMax(weightLifted, reps);

  const reset = () => {
    setWeightLifted(DEFAULTS.weightLifted);
    setReps(DEFAULTS.reps);
  };

  return (
    <>
      <Helmet>
        <title>
          One Rep Max Calculator - 1RM Estimate (Epley Formula)
        </title>
        <meta
          name="description"
          content="Estimate 1RM (kg & lb) from weight lifted and reps using Epley: 1RM = weight × (1 + reps/30). Training load table—not a max attempt."
        />
        <meta
          name="keywords"
          content="one rep max calculator, 1rm calculator, epley formula, max lift calculator, strength training 1rm, weightlifting calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="One Rep Max Calculator" />
        <meta
          property="og:description"
          content="Estimated 1RM from submaximal weight and reps (Epley)."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="One Rep Max Calculator" />
        <meta
          name="twitter:description"
          content="1RM in kg and lb plus training percentages."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "One Rep Max Calculator",
            url: PAGE_URL,
            description:
              "Estimate one rep max using the Epley formula from weight and repetitions.",
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
            name: "One Rep Max Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute estimated 1RM and training loads.",
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
            headline: "Estimated One Rep Max with the Epley Formula",
            description:
              "How to predict 1RM from submaximal sets for strength programming.",
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
                name: "One Rep Max Calculator",
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
              Weight lifted
            </label>
            <div className="relative">
              <input
                type="number"
                value={weightLifted}
                onChange={(e) => setWeightLifted(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.weightLifted}
                min="0.01"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                kg
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Repetitions completed
            </label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.reps}
              min="1"
              max="30"
              step="1"
            />
            <p className="text-sm text-on-surface-variant">
              Best accuracy from about 2–10 reps (Epley formula).
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
            Estimated 1RM summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Estimated 1RM
              </span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${fmtKg(result.oneRepMaxKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">1RM (lb)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtLb(result.oneRepMaxLb)} lb`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Set used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtKg(result.weightLiftedKg)} kg × ${result.reps} reps`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Formula</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.formula : "—"}
              </span>
            </div>

            {result && !result.error && (
              <div className="pt-2 border-t border-outline-variant space-y-2">
                <p className="text-on-surface font-medium">
                  Training loads (% of 1RM)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {result.trainingLoads.map((load) => (
                    <div
                      key={load.pct}
                      className="bg-surface-container rounded-lg px-3 py-2 text-sm"
                    >
                      <span className="text-on-surface-variant">
                        {load.pct}%
                      </span>
                      <p className="font-code-num text-code-num text-on-surface">
                        {fmtKg(load.kg)} kg
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {result?.lowRepAccuracy && !result.error && (
              <p className="text-sm text-on-surface-variant">
                Above 10 reps, Epley estimates are less accurate—prefer a heavier
                submaximal set when possible.
              </p>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? "1RM = weight × (1 + reps ÷ 30). Estimate only—warm up fully and use spotters for true max attempts."
                : "Epley 1RM from weight (kg) and reps."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OneRepMaxCalculator;
