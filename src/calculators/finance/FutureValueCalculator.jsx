import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/future-value-calculator";

const DEFAULTS = {
  initialInvestment: "10000",
  annualContribution: "5000",
  annualRate: "8",
  years: "15",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeFutureValue = (
  initialInvestment,
  annualContribution,
  annualRate,
  years
) => {
  if (
    initialInvestment.trim() === "" ||
    annualContribution.trim() === "" ||
    annualRate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(initialInvestment);
  const PMT = parseFloat(annualContribution);
  const r = parseFloat(annualRate) / 100;
  const t = parseFloat(years);

  if (isNaN(P) || isNaN(PMT) || isNaN(r) || isNaN(t)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0 || PMT < 0) {
    return { error: "Initial amount and annual contribution cannot be negative." };
  }

  if (t <= 0) {
    return { error: "Time period must be greater than zero years." };
  }

  let compoundGrowth;
  let contributionGrowth;

  if (r === 0) {
    compoundGrowth = P;
    contributionGrowth = PMT * t;
  } else {
    compoundGrowth = P * Math.pow(1 + r, t);
    contributionGrowth = PMT * ((Math.pow(1 + r, t) - 1) / r);
  }

  const futureValue = compoundGrowth + contributionGrowth;
  const totalInvested = P + PMT * t;
  const totalGrowth = futureValue - totalInvested;

  return {
    futureValue,
    totalInvested,
    totalGrowth,
    compoundGrowth,
    contributionGrowth,
    initialInvestment: P,
    annualContribution: PMT,
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
    name: "What does the Future Value Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates future value from an initial lump sum compounded annually plus level annual contributions at the end of each year, using standard future value formulas.",
    },
  },
  {
    "@type": "Question",
    name: "What formulas are used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "FV = P(1+r)^t + PMT × [(1+r)^t − 1] / r, where P is initial investment, PMT is annual contribution, r is annual rate, and t is years.",
    },
  },
  {
    "@type": "Question",
    name: "Are contributions made at the start or end of each year?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Contributions are modeled at the end of each year (ordinary annuity). Beginning-of-year deposits would produce a slightly higher balance.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from the Finance Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The Finance Calculator on this site models a single deposit with no ongoing contributions. This tool adds annual contributions to the projection.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include taxes or fees?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Results are pretax and assume the stated return is achieved each year without investment fees.",
    },
  },
];

const FutureValueCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(
    DEFAULTS.initialInvestment
  );
  const [annualContribution, setAnnualContribution] = useState(
    DEFAULTS.annualContribution
  );
  const [annualRate, setAnnualRate] = useState(DEFAULTS.annualRate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeFutureValue(
    initialInvestment,
    annualContribution,
    annualRate,
    years
  );

  const reset = () => {
    setInitialInvestment(DEFAULTS.initialInvestment);
    setAnnualContribution(DEFAULTS.annualContribution);
    setAnnualRate(DEFAULTS.annualRate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          Future Value Calculator - Lump Sum & Annual Contributions
        </title>
        <meta
          name="description"
          content="Calculate future value from initial investment, annual contributions, return rate, and years. See total invested, growth, and FV with annual compounding."
        />
        <meta
          name="keywords"
          content="future value calculator, FV calculator, annual contribution calculator, investment growth estimate, compound savings calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Future Value Calculator"
        />
        <meta
          property="og:description"
          content="Future value with initial deposit plus annual contributions."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Future Value Calculator" />
        <meta
          name="twitter:description"
          content="FV estimate with lump sum and yearly deposits."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Future Value Calculator",
            url: PAGE_URL,
            description:
              "Calculate future value from initial investment and annual contributions with annual compounding.",
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
            name: "Future Value Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute future value of initial plus annual contributions.",
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
            headline: "How to Calculate Future Value with Annual Contributions",
            description:
              "Combine future value of a lump sum with the future value of an ordinary annuity of annual contributions at a constant return rate.",
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
                name: "Future Value Calculator",
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
              Initial investment
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
              Annual contribution
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={annualContribution}
                onChange={(e) => setAnnualContribution(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.annualContribution}
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
            <label className="font-h3 text-h3 text-on-surface">Years</label>
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
            Future value summary
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
              <span className="text-on-surface">Total invested</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalInvested)}`
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
              <span className="text-on-surface">From initial deposit</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.compoundGrowth)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">From contributions</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.contributionGrowth)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              FV = P(1+r)^t + PMT×[(1+r)^t − 1]/r with annual compounding.
              Contributions are added at the end of each year. Use zero
              contribution for a single lump sum only.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FutureValueCalculator;
