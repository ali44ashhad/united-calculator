import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/rental-property-calculator";

const DEFAULTS = {
  monthlyRent: "2500",
  monthlyExpenses: "800",
  propertyPrice: "350000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeRentalProperty = (
  monthlyRent,
  monthlyExpenses,
  propertyPrice
) => {
  if (
    monthlyRent.trim() === "" ||
    monthlyExpenses.trim() === "" ||
    propertyPrice.trim() === ""
  ) {
    return null;
  }

  const rent = parseFloat(monthlyRent);
  const expenses = parseFloat(monthlyExpenses);
  const price = parseFloat(propertyPrice);

  if (isNaN(rent) || isNaN(expenses) || isNaN(price)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (rent < 0 || expenses < 0 || price < 0) {
    return { error: "Values cannot be negative." };
  }

  if (price === 0) {
    return { error: "Property price must be greater than zero." };
  }

  const monthlyNetIncome = rent - expenses;
  const annualNetCashFlow = monthlyNetIncome * 12;
  const annualGrossRent = rent * 12;
  const cashYieldPercent = (annualNetCashFlow / price) * 100;

  return {
    monthlyRent: rent,
    monthlyExpenses: expenses,
    propertyPrice: price,
    monthlyNetIncome,
    annualNetCashFlow,
    annualGrossRent,
    cashYieldPercent,
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
    name: "What does this rental property calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Monthly net income (rent minus expenses), annual net cash flow, and cash yield on the full purchase price. It does not model mortgage debt or cash-on-cash return.",
    },
  },
  {
    "@type": "Question",
    name: "Is cash yield the same as cap rate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It matches cap rate when monthly expenses are operating costs only (taxes, insurance, maintenance, vacancy, management) and do not include mortgage principal and interest.",
    },
  },
  {
    "@type": "Question",
    name: "Does it calculate cash-on-cash return?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Cash-on-cash uses cash invested (down payment), not full property price. This tool divides annual net cash flow by the entire purchase price.",
    },
  },
  {
    "@type": "Question",
    name: "Should I include the mortgage in monthly expenses?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Only if you want net cash flow after debt service. For unlevered cap-rate-style yield, exclude mortgage and use operating expenses only.",
    },
  },
  {
    "@type": "Question",
    name: "Are vacancy or property management included automatically?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Add vacancy, management, taxes, insurance, and other costs into the monthly expenses field yourself.",
    },
  },
];

const RentalPropertyCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState(DEFAULTS.monthlyRent);
  const [monthlyExpenses, setMonthlyExpenses] = useState(
    DEFAULTS.monthlyExpenses
  );
  const [propertyPrice, setPropertyPrice] = useState(DEFAULTS.propertyPrice);

  const result = computeRentalProperty(
    monthlyRent,
    monthlyExpenses,
    propertyPrice
  );

  const reset = () => {
    setMonthlyRent(DEFAULTS.monthlyRent);
    setMonthlyExpenses(DEFAULTS.monthlyExpenses);
    setPropertyPrice(DEFAULTS.propertyPrice);
  };

  return (
    <>
      <Helmet>
        <title>
          Rental Property Calculator - Net Cash Flow &amp; Cash Yield
        </title>
        <meta
          name="description"
          content="Estimate monthly net income, annual cash flow, and unlevered cash yield on purchase price from rent, expenses, and property price. No mortgage or cash-on-cash."
        />
        <meta
          name="keywords"
          content="rental property calculator, rental cash flow, cash yield, landlord calculator, net operating income"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rental Property Calculator" />
        <meta
          property="og:description"
          content="Net rental cash flow and cash yield on property price from rent and expenses."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rental Property Calculator" />
        <meta
          name="twitter:description"
          content="Monthly net income and annual cash yield on purchase price."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rental Property Calculator",
            url: PAGE_URL,
            description:
              "Calculate rental net cash flow and unlevered cash yield from rent, expenses, and property price.",
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
            name: "Rental Property Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate rental property net income and cash yield.",
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
            headline: "Rental Property Net Cash Flow and Cash Yield",
            description:
              "Subtract monthly expenses from rent, annualize, and divide by purchase price for unlevered yield.",
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
                name: "Rental Property Calculator",
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
              Monthly rent income
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyRent}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Monthly expenses
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyExpenses}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Operating costs, or include mortgage for after-debt cash flow.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Property price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.propertyPrice}
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Rental property summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Monthly net income
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyNetIncome)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Annual net cash flow</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.annualNetCashFlow)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Cash yield on price</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.cashYieldPercent.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Annual gross rent</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.annualGrossRent)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Property price</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.propertyPrice)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Unlevered yield on full purchase price. Not cash-on-cash return,
              mortgage P&amp;I, or appreciation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RentalPropertyCalculator;
