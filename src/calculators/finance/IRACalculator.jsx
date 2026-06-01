import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/ira-calculator";

const DEFAULTS = {
  contribution: "500",
  rate: "7",
  years: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeIRA = (contribution, rate, years) => {
  if (
    contribution.trim() === "" ||
    rate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const c = parseFloat(contribution);
  const ratePercent = parseFloat(rate);
  const r = ratePercent / 100 / 12;
  const timeYears = parseFloat(years);
  const n = timeYears * 12;

  if (isNaN(c) || isNaN(r) || isNaN(timeYears) || isNaN(n)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (c < 0) {
    return { error: "Monthly contribution cannot be negative." };
  }

  if (timeYears <= 0) {
    return { error: "Investment period must be greater than zero years." };
  }

  let futureValue;
  if (r === 0) {
    futureValue = c * n;
  } else {
    futureValue = c * ((Math.pow(1 + r, n) - 1) / r);
  }

  const totalContribution = c * n;
  const interestEarned = futureValue - totalContribution;
  const growthPercent =
    totalContribution > 0 ? (interestEarned / totalContribution) * 100 : 0;

  return {
    monthlyContribution: c,
    ratePercent,
    years: timeYears,
    months: n,
    futureValue,
    totalContribution,
    interestEarned,
    growthPercent,
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
    name: "What does the IRA Calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value of equal monthly contributions to an IRA invested at a constant annual return with monthly compounding. It shows total contributed, growth, and ending balance.",
    },
  },
  {
    "@type": "Question",
    name: "Does it distinguish Traditional vs Roth IRA?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Tax treatment on contributions and withdrawals is not modeled—only savings growth from monthly deposits and return rate.",
    },
  },
  {
    "@type": "Question",
    name: "How are contributions compounded?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Each month’s deposit compounds at the monthly rate derived from the annual return (annual rate ÷ 12), using the future value of an ordinary annuity formula.",
    },
  },
  {
    "@type": "Question",
    name: "Are IRS contribution limits enforced?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Enter any monthly amount. Compare your total annual deposits to current IRA limits separately.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from the Roth IRA Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool uses monthly contributions with monthly compounding. The Roth IRA Calculator on this site uses annual contributions compounded once per year.",
    },
  },
];

const IRACalculator = () => {
  const [contribution, setContribution] = useState(DEFAULTS.contribution);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeIRA(contribution, rate, years);

  const reset = () => {
    setContribution(DEFAULTS.contribution);
    setRate(DEFAULTS.rate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>IRA Calculator - Monthly Contributions Growth Estimate</title>
        <meta
          name="description"
          content="Project IRA balance from monthly contributions, annual return, and years with monthly compounding. No Roth/Traditional tax modeling or IRS limit checks."
        />
        <meta
          name="keywords"
          content="IRA calculator, monthly IRA contribution, retirement savings estimate, IRA growth projection"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IRA Calculator" />
        <meta
          property="og:description"
          content="IRA future value from monthly deposits and compounded return."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IRA Calculator" />
        <meta
          name="twitter:description"
          content="Monthly IRA contribution growth estimate."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IRA Calculator",
            url: PAGE_URL,
            description:
              "Estimate IRA growth from monthly contributions with monthly compounding.",
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
            name: "IRA Calculator",
            url: PAGE_URL,
            description:
              "Web tool to project IRA balance from monthly contributions and return rate.",
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
            headline: "How to Project IRA Growth with Monthly Contributions",
            description:
              "Compound monthly IRA deposits at a stated annual return using an ordinary annuity future value formula.",
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
                name: "IRA Calculator",
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
              Monthly contribution
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={contribution}
                onChange={(e) => setContribution(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.contribution}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Default $500/mo ≈ $6,000/year—check current IRA limits for your age
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual return rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.rate}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Investment period (years)
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">IRA projection</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Future value</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total contributions</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalContribution)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Growth earned</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.interestEarned)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Growth on contributions</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.growthPercent.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly deposit</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyContribution)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              FV = PMT × [(1 + r)^n − 1] / r with monthly PMT, r = annual rate ÷
              12, n = years × 12. No tax, employer match, or IRS limit
              validation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IRACalculator;
