import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/sales-tax-calculator";

const DEFAULTS = {
  priceBeforeTax: "100",
  taxRate: "8",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSalesTax = (priceBeforeTax, taxRate) => {
  if (priceBeforeTax.trim() === "" || taxRate.trim() === "") {
    return null;
  }

  const price = parseFloat(priceBeforeTax);
  const ratePercent = parseFloat(taxRate);

  if (isNaN(price) || isNaN(ratePercent)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (price < 0) {
    return { error: "Price before tax cannot be negative." };
  }

  if (ratePercent < 0) {
    return { error: "Tax rate cannot be negative." };
  }

  const taxAmount = (price * ratePercent) / 100;
  const totalWithTax = price + taxAmount;

  return {
    priceBeforeTax: price,
    taxRatePercent: ratePercent,
    taxAmount,
    totalWithTax,
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
    name: "What does this sales tax calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sales tax dollars and total price from a pre-tax amount and a tax rate percent. Tax is added on top (tax-exclusive input).",
    },
  },
  {
    "@type": "Question",
    name: "Can I remove tax from a tax-inclusive total?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Enter the price before tax. To split a total that already includes tax, divide by (1 + rate/100) separately or use the VAT calculator for similar math.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as VAT or GST?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The math is the same percentage on a pre-tax price. VAT/GST names and rules vary by country—this tool does not apply jurisdiction-specific rates automatically.",
    },
  },
  {
    "@type": "Question",
    name: "What if the tax rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Tax amount is zero and total equals the price before tax.",
    },
  },
  {
    "@type": "Question",
    name: "Are local city or county taxes combined?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter one combined rate if you know your total sales tax percent. The calculator does not look up rates by location.",
    },
  },
];

const SalesTaxCalculator = () => {
  const [priceBeforeTax, setPriceBeforeTax] = useState(
    DEFAULTS.priceBeforeTax
  );
  const [taxRate, setTaxRate] = useState(DEFAULTS.taxRate);

  const result = computeSalesTax(priceBeforeTax, taxRate);

  const reset = () => {
    setPriceBeforeTax(DEFAULTS.priceBeforeTax);
    setTaxRate(DEFAULTS.taxRate);
  };

  return (
    <>
      <Helmet>
        <title>
          Sales Tax Calculator - Tax on Pre-Tax Price
        </title>
        <meta
          name="description"
          content="Add sales tax to a pre-tax price: tax amount and total from price and rate %. Not reverse from tax-inclusive total or location lookup."
        />
        <meta
          name="keywords"
          content="sales tax calculator, calculate sales tax, price with tax, tax exclusive, total with tax"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sales Tax Calculator" />
        <meta
          property="og:description"
          content="Sales tax and total from pre-tax price and rate percent."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sales Tax Calculator" />
        <meta
          name="twitter:description"
          content="Add sales tax to a price before tax."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sales Tax Calculator",
            url: PAGE_URL,
            description:
              "Calculate sales tax amount and total price from pre-tax amount and tax rate.",
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
            name: "Sales Tax Calculator",
            url: PAGE_URL,
            description:
              "Web tool to add sales tax to a pre-tax purchase price.",
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
            headline: "Sales Tax on a Pre-Tax Price",
            description:
              "Multiply price by tax rate percent, then add tax to get total.",
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
                name: "Sales Tax Calculator",
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
              Price before tax
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={priceBeforeTax}
                onChange={(e) => setPriceBeforeTax(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.priceBeforeTax}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Sales tax rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.taxRate}
                min="0"
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
            Sales tax summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total with tax
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalWithTax)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Sales tax amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.taxAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Price before tax</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.priceBeforeTax)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Tax rate</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.taxRatePercent.toFixed(3)}%`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Tax-exclusive input only. Does not extract pre-tax price from a
              tax-included total or look up rates by state or ZIP.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SalesTaxCalculator;
