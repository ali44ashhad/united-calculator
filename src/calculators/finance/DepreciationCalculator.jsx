import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/depreciation-calculator";

const DEFAULTS = {
  cost: "50000",
  salvageValue: "5000",
  usefulLife: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeDepreciation = (cost, salvageValue, usefulLife) => {
  if (
    cost.trim() === "" ||
    salvageValue.trim() === "" ||
    usefulLife.trim() === ""
  ) {
    return null;
  }

  const c = parseFloat(cost);
  const s = parseFloat(salvageValue);
  const life = parseFloat(usefulLife);

  if (isNaN(c) || isNaN(s) || isNaN(life)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (c <= 0 || life <= 0) {
    return {
      error: "Asset cost and useful life must be greater than zero.",
    };
  }

  if (s < 0) {
    return { error: "Salvage value cannot be negative." };
  }

  if (s >= c) {
    return {
      error: "Salvage value must be less than asset cost.",
    };
  }

  const depreciableBase = c - s;
  const annualDepreciation = depreciableBase / life;
  const totalDepreciation = annualDepreciation * life;

  return {
    annualDepreciation,
    totalDepreciation,
    depreciableBase,
    endingBookValue: s,
    cost: c,
    salvage: s,
    life,
  };
};

const fmtMoney = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does the Depreciation Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the straight-line method: annual depreciation equals asset cost minus salvage value, divided by useful life in years. Total depreciation over the life equals cost minus salvage.",
    },
  },
  {
    "@type": "Question",
    name: "What is salvage value?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Salvage value is the estimated resale or scrap value at the end of useful life. Depreciation only applies to the portion between purchase cost and salvage.",
    },
  },
  {
    "@type": "Question",
    name: "Does this support declining balance or units of production?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page implements straight-line depreciation only. Accelerated or usage-based methods require different formulas.",
    },
  },
  {
    "@type": "Question",
    name: "How do I find book value after a number of years?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Book value after n years equals cost minus n times annual straight-line depreciation, but not below salvage value. Example: $12,000 cost, $2,000 salvage, 5-year life → $2,000 per year; after 3 years book value is $6,000.",
    },
  },
  {
    "@type": "Question",
    name: "Is depreciation the same as tax deductions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Conceptually similar, but tax authorities often specify their own depreciation schedules and limits. Use this tool for planning; confirm rules with your accountant or tax software.",
    },
  },
];

const DepreciationCalculator = () => {
  const [cost, setCost] = useState(DEFAULTS.cost);
  const [salvageValue, setSalvageValue] = useState(DEFAULTS.salvageValue);
  const [usefulLife, setUsefulLife] = useState(DEFAULTS.usefulLife);

  const result = computeDepreciation(cost, salvageValue, usefulLife);

  const reset = () => {
    setCost(DEFAULTS.cost);
    setSalvageValue(DEFAULTS.salvageValue);
    setUsefulLife(DEFAULTS.usefulLife);
  };

  return (
    <>
      <Helmet>
        <title>
          Depreciation Calculator - Straight-Line Annual & Total
        </title>
        <meta
          name="description"
          content="Calculate straight-line depreciation from asset cost, salvage value, and useful life in years. See annual expense and total depreciation."
        />
        <meta
          name="keywords"
          content="depreciation calculator, straight line depreciation, asset depreciation schedule, annual depreciation expense, salvage value calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Depreciation Calculator" />
        <meta
          property="og:description"
          content="Straight-line depreciation from cost, salvage, and useful life."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Depreciation Calculator" />
        <meta
          name="twitter:description"
          content="Annual and total straight-line depreciation for assets."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Depreciation Calculator",
            url: PAGE_URL,
            description:
              "Calculate straight-line annual and total depreciation using asset cost, salvage value, and useful life.",
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
            name: "Depreciation Calculator",
            url: PAGE_URL,
            description:
              "Web tool for straight-line depreciation from cost, salvage, and useful life in years.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
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
            headline: "How to Calculate Straight-Line Depreciation",
            description:
              "Divide depreciable cost (purchase price minus salvage) by useful life in years for equal annual depreciation expense.",
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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": PAGE_URL,
            },
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
                name: "Finance Calculators",
                item: "https://www.unitedcalculator.net/finance",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Depreciation Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Cost of asset
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.cost}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Salvage value
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={salvageValue}
                onChange={(e) => setSalvageValue(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.salvageValue}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Useful life (years)
            </label>
            <input
              type="number"
              value={usefulLife}
              onChange={(e) => setUsefulLife(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.usefulLife}
              min="0"
              step="any"
            />
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
            Straight-line depreciation
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Annual depreciation</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.annualDepreciation)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total depreciation</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalDepreciation)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Depreciable base</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.depreciableBase)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Ending book value</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.endingBookValue)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Method: (cost − salvage) ÷ useful life per year. Equal expense
              each year; book value reaches salvage at the end of useful life.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DepreciationCalculator;
