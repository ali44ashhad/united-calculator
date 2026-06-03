import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/pension-calculator";

const DEFAULTS = {
  currentAge: "30",
  retirementAge: "60",
  monthlyContribution: "500",
  annualReturnRate: "7",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePension = (
  currentAge,
  retirementAge,
  monthlyContribution,
  annualReturnRate
) => {
  if (
    currentAge.trim() === "" ||
    retirementAge.trim() === "" ||
    monthlyContribution.trim() === "" ||
    annualReturnRate.trim() === ""
  ) {
    return null;
  }

  const ageNow = parseFloat(currentAge);
  const retireAt = parseFloat(retirementAge);
  const monthlyInvest = parseFloat(monthlyContribution);
  const ratePercent = parseFloat(annualReturnRate);
  const r = ratePercent / 100 / 12;

  if (
    isNaN(ageNow) ||
    isNaN(retireAt) ||
    isNaN(monthlyInvest) ||
    isNaN(ratePercent) ||
    isNaN(r)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (ageNow < 0 || retireAt < 0) {
    return { error: "Ages cannot be negative." };
  }

  if (ageNow >= retireAt) {
    return { error: "Retirement age must be greater than current age." };
  }

  if (monthlyInvest < 0) {
    return { error: "Monthly contribution cannot be negative." };
  }

  const yearsToRetirement = retireAt - ageNow;
  const totalMonths = yearsToRetirement * 12;

  const futureValue =
    r === 0
      ? monthlyInvest * totalMonths
      : monthlyInvest *
        ((Math.pow(1 + r, totalMonths) - 1) / r) *
        (1 + r);

  const totalInvested = monthlyInvest * totalMonths;
  const estimatedReturns = futureValue - totalInvested;

  return {
    currentAge: ageNow,
    retirementAge: retireAt,
    yearsToRetirement,
    totalMonths,
    monthlyContribution: monthlyInvest,
    annualReturnRatePercent: ratePercent,
    totalInvested,
    estimatedReturns,
    futureValue,
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
    name: "What does this pension calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value at retirement from equal monthly contributions, a constant annual return, and monthly compounding. It shows total contributed, estimated growth, and ending balance—not monthly pension income.",
    },
  },
  {
    "@type": "Question",
    name: "Are contributions assumed at the start or end of each month?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Contributions are modeled at the beginning of each month (annuity due), which slightly increases the future value versus end-of-month deposits.",
    },
  },
  {
    "@type": "Question",
    name: "Does it include existing pension savings?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only new monthly contributions from now until retirement are included. Add any current balance separately if needed.",
    },
  },
  {
    "@type": "Question",
    name: "What if the return rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "At 0% return, the future value equals monthly contribution multiplied by the number of months until retirement.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculate monthly retirement income?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It estimates the lump-sum fund at retirement. Converting that balance into monthly withdrawals requires a separate payout or annuity model.",
    },
  },
];

const PensionCalculator = () => {
  const [currentAge, setCurrentAge] = useState(DEFAULTS.currentAge);
  const [retirementAge, setRetirementAge] = useState(DEFAULTS.retirementAge);
  const [monthlyContribution, setMonthlyContribution] = useState(
    DEFAULTS.monthlyContribution
  );
  const [annualReturnRate, setAnnualReturnRate] = useState(
    DEFAULTS.annualReturnRate
  );

  const result = computePension(
    currentAge,
    retirementAge,
    monthlyContribution,
    annualReturnRate
  );

  const reset = () => {
    setCurrentAge(DEFAULTS.currentAge);
    setRetirementAge(DEFAULTS.retirementAge);
    setMonthlyContribution(DEFAULTS.monthlyContribution);
    setAnnualReturnRate(DEFAULTS.annualReturnRate);
  };

  return (
    <>
      <Helmet>
        <title>
          Pension Calculator - Retirement Fund from Monthly Contributions
        </title>
        <meta
          name="description"
          content="Estimate retirement fund value from monthly contributions, return rate, and years until retirement. Lump-sum balance at retirement—not monthly pension income."
        />
        <meta
          name="keywords"
          content="pension calculator, retirement savings calculator, monthly contribution growth, pension fund estimate, retirement planning"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pension Calculator" />
        <meta
          property="og:description"
          content="Future retirement fund from monthly savings and expected return."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pension Calculator" />
        <meta
          name="twitter:description"
          content="Lump-sum fund estimate at retirement age."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pension Calculator",
            url: PAGE_URL,
            description:
              "Calculate retirement fund value from monthly contributions, return rate, and years until retirement.",
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
            name: "Pension Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate pension fund growth from monthly contributions.",
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
            headline: "How to Estimate a Pension Fund from Monthly Savings",
            description:
              "Compound equal monthly contributions at a constant return until retirement age.",
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
                name: "Pension Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Current age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.currentAge}
              min="0"
              step="1"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Retirement age
            </label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.retirementAge}
              min="1"
              step="1"
            />
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
            Pension summary at retirement
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total pension fund
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
                  ? `$${fmtMoney(result.totalInvested)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated growth</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.estimatedReturns)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Years to retirement</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.yearsToRetirement} years`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Assumed return</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.annualReturnRatePercent.toFixed(2)}% / year`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Monthly contributions at the start of each month (annuity due).
              Does not include existing balance, taxes, fees, or monthly payout
              after retirement.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PensionCalculator;
