import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/rent-calculator";

const DEFAULTS = {
  monthlyRent: "1500",
  numberOfMonths: "12",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeTotalRent = (monthlyRent, numberOfMonths) => {
  if (monthlyRent.trim() === "" || numberOfMonths.trim() === "") {
    return null;
  }

  const rent = parseFloat(monthlyRent);
  const months = parseFloat(numberOfMonths);

  if (isNaN(rent) || isNaN(months)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (rent < 0) {
    return { error: "Monthly rent cannot be negative." };
  }

  if (months < 0) {
    return { error: "Number of months cannot be negative." };
  }

  if (months === 0) {
    return { error: "Number of months must be greater than zero." };
  }

  const totalRent = rent * months;

  return {
    monthlyRent: rent,
    numberOfMonths: months,
    totalRent,
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
    name: "What does this rent calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total rent payable: monthly rent multiplied by the number of months you enter. It does not use income or expenses.",
    },
  },
  {
    "@type": "Question",
    name: "Can it tell me how much rent I can afford?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. For income-based rent budgets, use the House Affordability Calculator or apply the 30% rule to your take-home pay separately.",
    },
  },
  {
    "@type": "Question",
    name: "Does it include utilities or deposits?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Only if you add them into the monthly rent figure. Security deposits and one-time fees are not modeled separately.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use it for a lease longer than 12 months?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Enter any positive number of months—for example 18 for an 18-month lease or 24 for two years.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as rent vs buy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This tool totals rent over a period. Rent vs Buy compares renting costs to homeownership over time.",
    },
  },
];

const RentCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState(DEFAULTS.monthlyRent);
  const [numberOfMonths, setNumberOfMonths] = useState(DEFAULTS.numberOfMonths);

  const result = computeTotalRent(monthlyRent, numberOfMonths);

  const reset = () => {
    setMonthlyRent(DEFAULTS.monthlyRent);
    setNumberOfMonths(DEFAULTS.numberOfMonths);
  };

  return (
    <>
      <Helmet>
        <title>Rent Calculator - Total Rent Over a Period</title>
        <meta
          name="description"
          content="Multiply monthly rent by number of months to get total rent payable. Simple lease cost total—not income-based affordability."
        />
        <meta
          name="keywords"
          content="rent calculator, total rent, lease cost, monthly rent times months, rental budget"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rent Calculator" />
        <meta
          property="og:description"
          content="Total rent = monthly rent × months. Plan lease costs over any period."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rent Calculator" />
        <meta
          name="twitter:description"
          content="Calculate total rent over a number of months."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rent Calculator",
            url: PAGE_URL,
            description:
              "Calculate total rent payable from monthly rent and number of months.",
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
            name: "Rent Calculator",
            url: PAGE_URL,
            description:
              "Web tool to total rent over a lease or budget period.",
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
            headline: "Total Rent from Monthly Rent and Months",
            description:
              "Multiply monthly rent by the number of months in a lease or planning horizon.",
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
                name: "Rent Calculator",
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
              Monthly rent
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
              Number of months
            </label>
            <div className="relative">
              <input
                type="number"
                value={numberOfMonths}
                onChange={(e) => setNumberOfMonths(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.numberOfMonths}
                min="1"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                mo
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Lease length or budget horizon (e.g. 12 for one year).
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Rent summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total rent payable
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalRent)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly rent</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyRent)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Period</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.numberOfMonths} month${result.numberOfMonths === 1 ? "" : "s"}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Monthly rent × months only. Not income-based affordability,
              deposits, or utilities unless included in rent.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RentCalculator;
