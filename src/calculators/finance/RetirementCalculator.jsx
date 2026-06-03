import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/retirement-calculator";

const DEFAULTS = {
  currentAge: "35",
  retirementAge: "65",
  currentSavings: "50000",
  monthlyContribution: "500",
  expectedReturn: "7",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeRetirement = (
  currentAge,
  retirementAge,
  currentSavings,
  monthlyContribution,
  expectedReturn
) => {
  if (
    currentAge.trim() === "" ||
    retirementAge.trim() === "" ||
    currentSavings.trim() === "" ||
    monthlyContribution.trim() === "" ||
    expectedReturn.trim() === ""
  ) {
    return null;
  }

  const ageNow = parseFloat(currentAge);
  const ageRetire = parseFloat(retirementAge);
  const savings = parseFloat(currentSavings);
  const monthly = parseFloat(monthlyContribution);
  const ratePercent = parseFloat(expectedReturn);
  const r = ratePercent / 100 / 12;

  if (
    isNaN(ageNow) ||
    isNaN(ageRetire) ||
    isNaN(savings) ||
    isNaN(monthly) ||
    isNaN(ratePercent) ||
    isNaN(r)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (ageNow < 0 || ageRetire < 0) {
    return { error: "Ages cannot be negative." };
  }

  if (ageNow >= ageRetire) {
    return { error: "Retirement age must be greater than current age." };
  }

  if (savings < 0 || monthly < 0) {
    return { error: "Savings and contributions cannot be negative." };
  }

  const yearsToRetirement = ageRetire - ageNow;
  const months = yearsToRetirement * 12;

  const futureValueSavings =
    r === 0 ? savings : savings * Math.pow(1 + r, months);

  const futureValueContributions =
    r === 0
      ? monthly * months
      : monthly *
        ((Math.pow(1 + r, months) - 1) / r) *
        (1 + r);

  const totalAtRetirement = futureValueSavings + futureValueContributions;
  const totalContributions = monthly * months;
  const totalInvested = savings + totalContributions;
  const estimatedGrowth = totalAtRetirement - totalInvested;

  return {
    currentAge: ageNow,
    retirementAge: ageRetire,
    yearsToRetirement,
    months,
    currentSavings: savings,
    monthlyContribution: monthly,
    expectedReturnPercent: ratePercent,
    futureValueSavings,
    futureValueContributions,
    totalAtRetirement,
    totalContributions,
    totalInvested,
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
    name: "What does this retirement calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Projected lump-sum savings at retirement from current balance plus monthly contributions, compounded at a fixed annual return. Not monthly retirement income or expense needs.",
    },
  },
  {
    "@type": "Question",
    name: "Are contributions assumed at the start or end of each month?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Start of month (annuity due)—each contribution earns return for the full month it is deposited.",
    },
  },
  {
    "@type": "Question",
    name: "Does it tell me how much I need to retire?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It projects what you could accumulate from your inputs. Comparing that to living expenses requires separate planning.",
    },
  },
  {
    "@type": "Question",
    name: "What if the expected return is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Current savings stay flat and future value equals contributions summed with no growth.",
    },
  },
  {
    "@type": "Question",
    name: "Are taxes or inflation included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Returns are nominal and pre-tax unless you adjust inputs yourself.",
    },
  },
];

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(DEFAULTS.currentAge);
  const [retirementAge, setRetirementAge] = useState(DEFAULTS.retirementAge);
  const [currentSavings, setCurrentSavings] = useState(
    DEFAULTS.currentSavings
  );
  const [monthlyContribution, setMonthlyContribution] = useState(
    DEFAULTS.monthlyContribution
  );
  const [expectedReturn, setExpectedReturn] = useState(
    DEFAULTS.expectedReturn
  );

  const result = computeRetirement(
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    expectedReturn
  );

  const reset = () => {
    setCurrentAge(DEFAULTS.currentAge);
    setRetirementAge(DEFAULTS.retirementAge);
    setCurrentSavings(DEFAULTS.currentSavings);
    setMonthlyContribution(DEFAULTS.monthlyContribution);
    setExpectedReturn(DEFAULTS.expectedReturn);
  };

  return (
    <>
      <Helmet>
        <title>
          Retirement Calculator - Projected Savings at Retirement
        </title>
        <meta
          name="description"
          content="Project lump-sum retirement savings from current balance, monthly contributions, and expected return. Not monthly income or expense-based needs."
        />
        <meta
          name="keywords"
          content="retirement calculator, retirement savings projection, nest egg calculator, compound growth retirement"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Retirement Calculator" />
        <meta
          property="og:description"
          content="Estimate total savings at retirement from current balance and monthly investing."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Retirement Calculator" />
        <meta
          name="twitter:description"
          content="Lump-sum retirement savings projection."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Retirement Calculator",
            url: PAGE_URL,
            description:
              "Project retirement savings from current balance, monthly contributions, and expected return.",
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
            name: "Retirement Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate retirement nest egg from savings and contributions.",
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
            headline: "Retirement Savings Projection from Contributions",
            description:
              "Compound current savings and monthly contributions to a retirement age at a fixed annual return.",
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
                name: "Retirement Calculator",
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
              Current age
            </label>
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

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Current retirement savings
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.currentSavings}
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
              Expected annual return
            </label>
            <div className="relative">
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.expectedReturn}
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
            Retirement savings summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total at retirement
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalAtRetirement)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                From current savings (with growth)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValueSavings)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                From monthly contributions (with growth)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValueContributions)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total you contribute</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalContributions)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated investment growth</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.estimatedGrowth)}`
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

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Lump sum at retirement age—not monthly pension income. Fixed
              return, no tax, inflation, or employer match unless you adjust
              inputs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RetirementCalculator;
