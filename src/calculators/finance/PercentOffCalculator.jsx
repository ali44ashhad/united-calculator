import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/percent-off-calculator";

const DEFAULTS = {
  originalPrice: "100",
  discountPercent: "20",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePercentOff = (originalPrice, discountPercent) => {
  if (originalPrice.trim() === "" || discountPercent.trim() === "") {
    return null;
  }

  const price = parseFloat(originalPrice);
  const discount = parseFloat(discountPercent);

  if (isNaN(price) || isNaN(discount)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (price < 0) {
    return { error: "Original price cannot be negative." };
  }

  if (discount < 0 || discount > 100) {
    return { error: "Discount must be between 0 and 100 percent." };
  }

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;
  const percentPaid = price > 0 ? 100 - discount : 0;

  return {
    originalPrice: price,
    discountPercent: discount,
    discountAmount,
    finalPrice,
    percentPaid,
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
    name: "What does this percent off calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Discount amount and sale price from original price and one percentage off. Formula: discount = price × percent ÷ 100; final price = price − discount.",
    },
  },
  {
    "@type": "Question",
    name: "How is percent off different from a coupon dollar amount?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Percent off scales with price—a 20% discount on $100 saves $20, on $50 saves $10. This tool takes a percentage, not a fixed dollar coupon.",
    },
  },
  {
    "@type": "Question",
    name: "Can I stack multiple percent-off deals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. One discount percentage only. Stacked sales apply each percent to the already-reduced price—calculate step by step for those cases.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include sales tax?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Tax is usually applied after the discounted price depending on jurisdiction. Use a sales tax calculator if you need tax on the final amount.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the Discount Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Same math—one percentage off an original price. This page is labeled for percent-off shopping; the Discount Calculator on this site uses the same formula.",
    },
  },
];

const PercentOffCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState(DEFAULTS.originalPrice);
  const [discountPercent, setDiscountPercent] = useState(
    DEFAULTS.discountPercent
  );

  const result = computePercentOff(originalPrice, discountPercent);

  const reset = () => {
    setOriginalPrice(DEFAULTS.originalPrice);
    setDiscountPercent(DEFAULTS.discountPercent);
  };

  return (
    <>
      <Helmet>
        <title>Percent Off Calculator - Sale Price &amp; Savings</title>
        <meta
          name="description"
          content="Calculate discount amount and final price from original price and percent off. One percentage discount—no tax or stacked deals."
        />
        <meta
          name="keywords"
          content="percent off calculator, sale price calculator, discount amount, percentage off, shopping discount"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Percent Off Calculator" />
        <meta
          property="og:description"
          content="Discount amount and sale price from percent off."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Percent Off Calculator" />
        <meta
          name="twitter:description"
          content="Quick percent-off price and savings."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Percent Off Calculator",
            url: PAGE_URL,
            description:
              "Calculate discount amount and final price from original price and percent off.",
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
            name: "Percent Off Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute sale price from a single percentage discount.",
            applicationCategory: "FinanceApplication",
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
            headline: "How to Calculate Percent Off a Price",
            description:
              "Multiply original price by discount percent and subtract from the original.",
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
                name: "Finance Calculators",
                item: "https://www.unitedcalculator.net/finance",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Percent Off Calculator",
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
              Original price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.originalPrice}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Percent off
            </label>
            <div className="relative">
              <input
                type="number"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.discountPercent}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Discount summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Final price</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.finalPrice)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">You save</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.discountAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Original price</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.originalPrice)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Percent off</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.discountPercent}% off (${result.percentPaid}% of original)`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              One percentage discount only. Sales tax and stacked promotions are
              not included.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PercentOffCalculator;
