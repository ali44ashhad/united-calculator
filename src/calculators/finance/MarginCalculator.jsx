import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/margin-calculator";

const DEFAULTS = {
  cost: "100",
  price: "150",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMargin = (cost, price) => {
  if (cost.trim() === "" || price.trim() === "") {
    return null;
  }

  const costVal = parseFloat(cost);
  const priceVal = parseFloat(price);

  if (isNaN(costVal) || isNaN(priceVal)) {
    return { error: "Enter valid numbers for cost and selling price." };
  }

  if (costVal < 0 || priceVal < 0) {
    return { error: "Cost and selling price cannot be negative." };
  }

  const profit = priceVal - costVal;
  const marginPercent = priceVal === 0 ? 0 : (profit / priceVal) * 100;
  const markupPercent = costVal === 0 ? 0 : (profit / costVal) * 100;

  return {
    cost: costVal,
    price: priceVal,
    profit,
    marginPercent,
    markupPercent,
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
    name: "What does the Margin Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Profit (selling price minus cost), gross margin percent (profit ÷ selling price × 100), and markup percent (profit ÷ cost × 100) from cost and selling price.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between margin and markup?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Margin uses selling price as the denominator—how much of each sale dollar is profit. Markup uses cost as the denominator—how much you add on top of cost.",
    },
  },
  {
    "@type": "Question",
    name: "Is this gross margin or net margin?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Gross margin on a single unit: only cost of goods and selling price. Operating expenses, taxes, and overhead are not included.",
    },
  },
  {
    "@type": "Question",
    name: "What if selling price is below cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Profit, margin, and markup will be negative, showing a loss on the unit.",
    },
  },
  {
    "@type": "Question",
    name: "Does this use revenue for multiple units?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Enter per-unit cost and selling price. For total revenue scenarios, multiply unit results by quantity yourself.",
    },
  },
];

const MarginCalculator = () => {
  const [cost, setCost] = useState(DEFAULTS.cost);
  const [price, setPrice] = useState(DEFAULTS.price);

  const result = computeMargin(cost, price);

  const reset = () => {
    setCost(DEFAULTS.cost);
    setPrice(DEFAULTS.price);
  };

  return (
    <>
      <Helmet>
        <title>
          Margin Calculator - Profit, Gross Margin &amp; Markup %
        </title>
        <meta
          name="description"
          content="Calculate profit, gross margin percent, and markup percent from cost and selling price. Per-unit gross margin tool for pricing decisions."
        />
        <meta
          name="keywords"
          content="margin calculator, profit margin calculator, markup calculator, gross margin percent, cost and selling price"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Margin Calculator" />
        <meta
          property="og:description"
          content="Profit, margin %, and markup % from cost and price."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Margin Calculator" />
        <meta
          name="twitter:description"
          content="Gross margin and markup from unit cost and price."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Margin Calculator",
            url: PAGE_URL,
            description:
              "Calculate profit, gross margin, and markup from cost and selling price.",
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
            name: "Margin Calculator",
            url: PAGE_URL,
            description:
              "Web tool for gross margin and markup on cost and selling price.",
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
            headline: "How to Calculate Gross Margin and Markup",
            description:
              "Profit equals selling price minus cost; margin and markup express that profit as percentages of price and cost respectively.",
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
                name: "Margin Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Cost price</label>
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
              Selling price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.price}
                min="0"
                step="any"
              />
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Margin summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Profit</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.profit)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gross margin</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.marginPercent.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Markup</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.markupPercent.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Cost</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.cost)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Selling price</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.price)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Margin = (price − cost) ÷ price × 100. Markup = (price − cost) ÷
              cost × 100. Per-unit gross profit only—no overhead or tax.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarginCalculator;
