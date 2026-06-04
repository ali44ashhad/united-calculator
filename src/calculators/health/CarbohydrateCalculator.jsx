import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/carbohydrate-calculator";

const DEFAULTS = {
  totalCarbs: "40",
  fiber: "5",
  sugarAlcohols: "10",
};

const KCAL_PER_GRAM_CARB = 4;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeNetCarbs = (totalCarbs, fiber, sugarAlcohols) => {
  if (
    totalCarbs.trim() === "" ||
    fiber.trim() === "" ||
    sugarAlcohols.trim() === ""
  ) {
    return null;
  }

  const carbs = parseFloat(totalCarbs);
  const fiberVal = parseFloat(fiber);
  const sugarAlcohol = parseFloat(sugarAlcohols);

  if (isNaN(carbs) || isNaN(fiberVal) || isNaN(sugarAlcohol)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (carbs < 0 || fiberVal < 0 || sugarAlcohol < 0) {
    return { error: "Values cannot be negative." };
  }

  const sugarAlcoholDeduction = sugarAlcohol / 2;
  const netCarbs = carbs - fiberVal - sugarAlcoholDeduction;
  const caloriesFromNet = Math.max(0, netCarbs) * KCAL_PER_GRAM_CARB;

  return {
    totalCarbs: carbs,
    fiber: fiberVal,
    sugarAlcohols: sugarAlcohol,
    sugarAlcoholDeduction,
    netCarbs,
    caloriesFromNet,
    isNegativeNet: netCarbs < 0,
  };
};

const fmtG = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What are net carbs?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Net carbs are often calculated as total carbohydrates minus fiber minus half of sugar alcohols, used on many low-carb and ketogenic food labels.",
    },
  },
  {
    "@type": "Question",
    name: "How are net carbs calculated here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Net carbs = total carbs (g) − fiber (g) − (sugar alcohols (g) ÷ 2).",
    },
  },
  {
    "@type": "Question",
    name: "Why subtract only half of sugar alcohols?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Many U.S. keto labels treat sugar alcohols as partially digestible. Erythritol is often counted as zero; this calculator uses the common half-credit rule unless you adjust inputs.",
    },
  },
  {
    "@type": "Question",
    name: "Is this calculator for daily carb targets?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page calculates net carbs for a food or serving from label numbers. For daily macro grams, use the Macro or Calorie calculators on this site.",
    },
  },
  {
    "@type": "Question",
    name: "Can net carbs be negative?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, if fiber plus half of sugar alcohols exceeds total carbs on the label—check your entries or label rounding.",
    },
  },
];

const CarbohydrateCalculator = () => {
  const [totalCarbs, setTotalCarbs] = useState(DEFAULTS.totalCarbs);
  const [fiber, setFiber] = useState(DEFAULTS.fiber);
  const [sugarAlcohols, setSugarAlcohols] = useState(DEFAULTS.sugarAlcohols);

  const result = computeNetCarbs(totalCarbs, fiber, sugarAlcohols);

  const reset = () => {
    setTotalCarbs(DEFAULTS.totalCarbs);
    setFiber(DEFAULTS.fiber);
    setSugarAlcohols(DEFAULTS.sugarAlcohols);
  };

  return (
    <>
      <Helmet>
        <title>
          Carbohydrate Calculator - Net Carbs from Label (Keto)
        </title>
        <meta
          name="description"
          content="Net carbs (g) = total carbs − fiber − half sugar alcohols. For low-carb and keto label math—not a full daily meal plan."
        />
        <meta
          name="keywords"
          content="carbohydrate calculator, net carbs calculator, keto net carbs, fiber sugar alcohol, low carb calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carbohydrate Calculator" />
        <meta
          property="og:description"
          content="Calculate net carbohydrates from total carbs, fiber, and sugar alcohols."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carbohydrate Calculator" />
        <meta
          name="twitter:description"
          content="Net carb grams for keto-style label math."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Carbohydrate Calculator",
            url: PAGE_URL,
            description:
              "Calculate net carbs from total carbohydrates, fiber, and sugar alcohols.",
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
            name: "Carbohydrate Calculator",
            url: PAGE_URL,
            description: "Web tool to compute net carbohydrates for food labels.",
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
            headline: "Net Carbohydrates for Low-Carb Diets",
            description:
              "How to subtract fiber and sugar alcohols from total carbs.",
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
                name: "Carbohydrate Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Total carbohydrates
            </label>
            <div className="relative">
              <input
                type="number"
                value={totalCarbs}
                onChange={(e) => setTotalCarbs(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.totalCarbs}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                g
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Fiber</label>
            <div className="relative">
              <input
                type="number"
                value={fiber}
                onChange={(e) => setFiber(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.fiber}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                g
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Sugar alcohols
            </label>
            <div className="relative">
              <input
                type="number"
                value={sugarAlcohols}
                onChange={(e) => setSugarAlcohols(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.sugarAlcohols}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                g
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Half is subtracted (common U.S. keto label rule).
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
            Net carbohydrate summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Net carbs</span>
              <span
                className={`font-code-num text-code-num text-lg ${
                  result?.isNegativeNet ? "text-error" : "text-primary"
                }`}
              >
                {result && !result.error
                  ? `${fmtG(result.netCarbs)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total carbohydrates</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.totalCarbs)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Minus fiber</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `−${fmtG(result.fiber)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Minus ½ sugar alcohols</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `−${fmtG(result.sugarAlcoholDeduction)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Energy (net carbs × 4)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtG(result.caloriesFromNet)} kcal`
                  : "—"}
              </span>
            </div>

            {result?.isNegativeNet && !result.error && (
              <p className="text-sm text-error">
                Net carbs are negative—verify label values or rounding.
              </p>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Net = total − fiber − (sugar alcohols ÷ 2). Erythritol and other
              sugar alcohols may differ; some labels use zero for erythritol only.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarbohydrateCalculator;
