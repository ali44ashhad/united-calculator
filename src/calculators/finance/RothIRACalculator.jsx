import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/roth-ira-calculator";

const DEFAULTS = {
  annualContribution: "7000",
  annualReturnRate: "7",
  years: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeRothIRA = (annualContribution, annualReturnRate, years) => {
  if (
    annualContribution.trim() === "" ||
    annualReturnRate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const contribution = parseFloat(annualContribution);
  const ratePercent = parseFloat(annualReturnRate);
  const r = ratePercent / 100;
  const n = parseFloat(years);

  if (isNaN(contribution) || isNaN(ratePercent) || isNaN(n) || isNaN(r)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (contribution < 0) {
    return { error: "Annual contribution cannot be negative." };
  }

  if (n <= 0) {
    return { error: "Investment period must be greater than zero years." };
  }

  const futureValue =
    r === 0
      ? contribution * n
      : contribution * ((Math.pow(1 + r, n) - 1) / r);

  const totalContributed = contribution * n;
  const estimatedGrowth = futureValue - totalContributed;

  return {
    annualContribution: contribution,
    annualReturnRatePercent: ratePercent,
    years: n,
    futureValue,
    totalContributed,
    estimatedGrowth,
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
    name: "What does this Roth IRA calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Projected account balance from fixed annual contributions compounded at a stated return for a number of years. Contributions are modeled at the end of each year.",
    },
  },
  {
    "@type": "Question",
    name: "Does it check IRS contribution limits or income eligibility?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Enter any annual contribution amount—you must confirm limits and eligibility with IRS rules or a tax professional.",
    },
  },
  {
    "@type": "Question",
    name: "Are withdrawals shown as tax-free?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The tool only projects balance growth. Qualified Roth withdrawals are generally tax-free, but rules depend on age and account age—not calculated here.",
    },
  },
  {
    "@type": "Question",
    name: "What if the return rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value equals annual contribution times number of years with no growth.",
    },
  },
  {
    "@type": "Question",
    name: "Does it include an existing Roth balance?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only annual contributions from zero starting balance. For current savings plus contributions, use the Retirement Calculator.",
    },
  },
];

const RothIRACalculator = () => {
  const [annualContribution, setAnnualContribution] = useState(
    DEFAULTS.annualContribution
  );
  const [annualReturnRate, setAnnualReturnRate] = useState(
    DEFAULTS.annualReturnRate
  );
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeRothIRA(
    annualContribution,
    annualReturnRate,
    years
  );

  const reset = () => {
    setAnnualContribution(DEFAULTS.annualContribution);
    setAnnualReturnRate(DEFAULTS.annualReturnRate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          Roth IRA Calculator - Projected Balance from Contributions
        </title>
        <meta
          name="description"
          content="Project Roth IRA balance from annual contributions, return rate, and years. End-of-year contributions—not IRS limits, income limits, or existing balance."
        />
        <meta
          name="keywords"
          content="roth ira calculator, roth ira growth, annual contribution projection, tax-free retirement savings estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Roth IRA Calculator" />
        <meta
          property="og:description"
          content="Future Roth IRA balance from annual contributions and compound return."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roth IRA Calculator" />
        <meta
          name="twitter:description"
          content="Project Roth IRA growth from contributions over time."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Roth IRA Calculator",
            url: PAGE_URL,
            description:
              "Estimate Roth IRA balance from annual contributions and investment return over time.",
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
            name: "Roth IRA Calculator",
            url: PAGE_URL,
            description:
              "Web tool to project Roth IRA savings from annual contributions.",
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
            headline: "Roth IRA Growth from Annual Contributions",
            description:
              "Compound end-of-year contributions at a fixed annual return rate.",
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
                name: "Roth IRA Calculator",
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
            <p className="text-sm text-on-surface-variant">
              After-tax dollars. Confirm IRS annual limits for your age.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Expected annual return
            </label>
            <div className="relative">
              <input
                type="number"
                value={annualReturnRate}
                onChange={(e) => setAnnualReturnRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.annualReturnRate}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Investment period
            </label>
            <div className="relative">
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.years}
                min="1"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                yrs
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
            Roth IRA summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Projected balance
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total contributed</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalContributed)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated growth</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.estimatedGrowth)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Annual contribution</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.annualContribution)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Return / period</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.annualReturnRatePercent.toFixed(2)}% • ${result.years} years`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              End-of-year contributions from $0 starting balance. Not IRS
              limits, MAGI eligibility, or existing Roth balance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RothIRACalculator;
