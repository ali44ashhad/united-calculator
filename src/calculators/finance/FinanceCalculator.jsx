import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/finance-calculator";

const DEFAULTS = {
  initialInvestment: "10000",
  annualRate: "8",
  years: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeFutureValue = (initialInvestment, annualRate, years) => {
  if (
    initialInvestment.trim() === "" ||
    annualRate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(initialInvestment);
  const r = parseFloat(annualRate) / 100;
  const t = parseFloat(years);

  if (isNaN(P) || isNaN(r) || isNaN(t)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) {
    return { error: "Initial amount cannot be negative." };
  }

  if (t <= 0) {
    return { error: "Time period must be greater than zero years." };
  }

  const futureValue = P * Math.pow(1 + r, t);
  const totalGrowth = futureValue - P;

  return {
    futureValue,
    totalGrowth,
    principal: P,
    annualRatePercent: parseFloat(annualRate),
    years: t,
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
    name: "What does the Finance Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates future value of a lump-sum amount compounded annually: future value equals initial amount times (1 plus annual rate) raised to the number of years. Growth shown is future value minus the initial amount.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as compound interest with monthly contributions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page models one deposit at the start with annual compounding only. For recurring contributions or different compounding frequencies, use the Compound Interest Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "What formula is used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "FV = P × (1 + r)^t, where P is initial amount, r is annual rate as a decimal, and t is years.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include taxes or fees?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The result is pretax and assumes the stated annual return is achieved each year without withdrawals.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use a negative return rate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "You can enter a negative annual rate to model loss scenarios; future value may be less than the initial amount.",
    },
  },
];

const FinanceCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(
    DEFAULTS.initialInvestment
  );
  const [annualRate, setAnnualRate] = useState(DEFAULTS.annualRate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeFutureValue(initialInvestment, annualRate, years);

  const reset = () => {
    setInitialInvestment(DEFAULTS.initialInvestment);
    setAnnualRate(DEFAULTS.annualRate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          Finance Calculator - Lump-Sum Future Value & Growth
        </title>
        <meta
          name="description"
          content="Estimate future value and total growth from an initial amount, annual return rate, and years held. Annual compounding on a single deposit."
        />
        <meta
          name="keywords"
          content="finance calculator, investment growth calculator, future value calculator, lump sum compound interest, annual return estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Finance Calculator - Future Value"
        />
        <meta
          property="og:description"
          content="Future value from initial amount, annual rate, and years with annual compounding."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finance Calculator" />
        <meta
          name="twitter:description"
          content="Lump-sum future value and growth estimate."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Finance Calculator",
            url: PAGE_URL,
            description:
              "Calculate future value and growth from a lump-sum investment with annual compounding.",
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
            name: "Finance Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate future value using FV = P(1+r)^t with annual compounding.",
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
            headline: "How to Calculate Future Value of a Lump-Sum Investment",
            description:
              "Multiply the initial amount by one plus the annual rate raised to the power of years for compound growth with annual compounding.",
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
                name: "Finance Calculator",
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
              Initial amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.initialInvestment}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual return rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.annualRate}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Years
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.years}
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
            Investment growth summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Future value</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total growth</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalGrowth)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Initial amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.principal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Assumed annual return</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.annualRatePercent}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Time period</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.years} years`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Uses FV = P × (1 + r)^t with annual compounding on one deposit. No
              monthly contributions, taxes, or fees. Browse other finance tools
              from the Finance category for loans, budgets, and debt payoff.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinanceCalculator;
