import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/savings-calculator";

const DEFAULTS = {
  initialAmount: "10000",
  monthlyContribution: "500",
  annualInterestRate: "5",
  years: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSavings = (
  initialAmount,
  monthlyContribution,
  annualInterestRate,
  years
) => {
  if (
    initialAmount.trim() === "" ||
    monthlyContribution.trim() === "" ||
    annualInterestRate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(initialAmount);
  const PMT = parseFloat(monthlyContribution);
  const ratePercent = parseFloat(annualInterestRate);
  const r = ratePercent / 100 / 12;
  const n = parseFloat(years) * 12;
  const yearCount = parseFloat(years);

  if (
    isNaN(P) ||
    isNaN(PMT) ||
    isNaN(ratePercent) ||
    isNaN(yearCount) ||
    isNaN(r) ||
    isNaN(n)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0 || PMT < 0) {
    return { error: "Initial amount and contributions cannot be negative." };
  }

  if (yearCount <= 0) {
    return { error: "Years must be greater than zero." };
  }

  const futureValueInitial = r === 0 ? P : P * Math.pow(1 + r, n);
  const futureValueContributions =
    r === 0 ? PMT * n : PMT * ((Math.pow(1 + r, n) - 1) / r);
  const futureValue = futureValueInitial + futureValueContributions;
  const totalContributed = P + PMT * n;
  const estimatedGrowth = futureValue - totalContributed;

  return {
    initialAmount: P,
    monthlyContribution: PMT,
    annualInterestRatePercent: ratePercent,
    years: yearCount,
    months: n,
    futureValue,
    futureValueInitial,
    futureValueContributions,
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
    name: "What does this savings calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value of an initial deposit plus monthly contributions with monthly compounding at a fixed annual rate. Contributions are modeled at the end of each month.",
    },
  },
  {
    "@type": "Question",
    name: "Is this compound interest?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Interest compounds monthly on the growing balance from your starting amount and each contribution.",
    },
  },
  {
    "@type": "Question",
    name: "Does it calculate how much to save for a goal?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It projects growth from amounts you enter. It does not solve for required monthly savings to hit a target balance.",
    },
  },
  {
    "@type": "Question",
    name: "What if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value equals initial amount plus the sum of all monthly contributions with no growth.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from the retirement calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Similar compound math, but retirement pages may use different contribution timing. This tool uses end-of-month contributions and shows savings growth, not retirement income.",
    },
  },
];

const SavingsCalculator = () => {
  const [initialAmount, setInitialAmount] = useState(DEFAULTS.initialAmount);
  const [monthlyContribution, setMonthlyContribution] = useState(
    DEFAULTS.monthlyContribution
  );
  const [annualInterestRate, setAnnualInterestRate] = useState(
    DEFAULTS.annualInterestRate
  );
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeSavings(
    initialAmount,
    monthlyContribution,
    annualInterestRate,
    years
  );

  const reset = () => {
    setInitialAmount(DEFAULTS.initialAmount);
    setMonthlyContribution(DEFAULTS.monthlyContribution);
    setAnnualInterestRate(DEFAULTS.annualInterestRate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          Savings Calculator - Future Value with Monthly Contributions
        </title>
        <meta
          name="description"
          content="Project savings balance from initial deposit, monthly contributions, rate, and years. Monthly compounding, end-of-month deposits—not a savings goal solver."
        />
        <meta
          name="keywords"
          content="savings calculator, compound interest savings, future value, monthly deposit growth"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Savings Calculator" />
        <meta
          property="og:description"
          content="Future savings from initial balance and monthly contributions at a fixed rate."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Savings Calculator" />
        <meta
          name="twitter:description"
          content="Compound growth on savings with monthly deposits."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Savings Calculator",
            url: PAGE_URL,
            description:
              "Estimate future savings from initial amount, monthly contributions, and interest rate.",
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
            name: "Savings Calculator",
            url: PAGE_URL,
            description:
              "Web tool to project compound savings growth over time.",
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
            headline: "Savings Growth with Compound Interest",
            description:
              "Future value of lump sum plus ordinary annuity of monthly contributions with monthly compounding.",
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
                name: "Savings Calculator",
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
              Initial amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.initialAmount}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Monthly contribution
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyContribution}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual interest rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.annualInterestRate}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Years</label>
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
            Savings summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Future value
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
              <span className="text-on-surface">Estimated interest growth</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.estimatedGrowth)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                From initial deposit (with growth)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValueInitial)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                From contributions (with growth)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValueContributions)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Monthly compounding; contributions at end of each month. Not a
              savings goal target solver or tax-advantaged account rules.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SavingsCalculator;
