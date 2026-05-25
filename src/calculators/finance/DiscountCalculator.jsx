import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/discount-calculator";

const DEFAULTS = {
  originalPrice: "1000",
  discountPercentage: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeDiscount = (originalPrice, discountPercentage) => {
  if (originalPrice.trim() === "" || discountPercentage.trim() === "") {
    return null;
  }

  const price = parseFloat(originalPrice);
  const discount = parseFloat(discountPercentage);

  if (isNaN(price) || isNaN(discount)) {
    return { error: "Enter valid numbers for price and discount." };
  }

  if (price < 0) {
    return { error: "Original price cannot be negative." };
  }

  if (discount < 0 || discount > 100) {
    return { error: "Discount must be between 0 and 100 percent." };
  }

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return {
    discountAmount,
    finalPrice,
    originalPrice: price,
    discountPercent: discount,
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
    name: "What does the Discount Calculator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It applies one percentage discount to an original price. Discount amount equals original price times discount percent divided by 100; final price is original price minus that amount.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate sale price from a percent off?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Multiply the original price by the discount rate, subtract from the original price, or use final price equals original times (1 minus discount divided by 100).",
    },
  },
  {
    "@type": "Question",
    name: "Can I stack multiple discounts here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This tool handles one percentage discount. Stacked offers apply each percent to the already-reduced price; calculate step by step or use a percent-off tool for deeper comparisons.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include sales tax?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The result is pre-tax. Add tax separately with a sales tax calculator if you need the total at checkout.",
    },
  },
  {
    "@type": "Question",
    name: "What if the discount is over 100%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter a discount from 0 to 100 percent. Values above 100 are rejected because they would imply a negative final price in this simple model.",
    },
  },
];

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState(DEFAULTS.originalPrice);
  const [discountPercentage, setDiscountPercentage] = useState(
    DEFAULTS.discountPercentage
  );

  const result = computeDiscount(originalPrice, discountPercentage);

  const reset = () => {
    setOriginalPrice(DEFAULTS.originalPrice);
    setDiscountPercentage(DEFAULTS.discountPercentage);
  };

  return (
    <>
      <Helmet>
        <title>
          Discount Calculator - Sale Price & Savings from Percent Off
        </title>
        <meta
          name="description"
          content="Calculate discount amount and final price from original price and one percentage off. See how much you save on a sale."
        />
        <meta
          name="keywords"
          content="discount calculator, percent off calculator, sale price calculator, price after discount, shopping savings calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Discount Calculator" />
        <meta
          property="og:description"
          content="Find final price and savings from original price and discount percent."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discount Calculator" />
        <meta
          name="twitter:description"
          content="One percentage discount: sale price and amount saved."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Discount Calculator",
            url: PAGE_URL,
            description:
              "Calculate discount amount and final price from original price and a single percentage discount.",
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
            name: "Discount Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute sale price and savings from one percent-off discount.",
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
            headline: "How to Calculate Price After a Percentage Discount",
            description:
              "Discount amount equals original price times discount rate; final price equals original minus discount amount.",
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
                name: "Discount Calculator",
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
            <label className="font-h3 text-h3 text-on-surface">Discount</label>
            <div className="relative">
              <input
                type="number"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.discountPercentage}
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
            <div className="flex items-center justify-between">
              <span className="text-on-surface">You save</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.discountAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Final price</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.finalPrice)}`
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
              <span className="text-on-surface">Discount applied</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.discountPercent}%`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              One percentage off the list price. Stacked coupons, flat-dollar
              discounts, and sales tax are not included—add tax separately if
              needed.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiscountCalculator;
