import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/social-security-calculator";

/** Fixed planning assumption for years of benefit receipts (not personalized longevity). */
const ASSUMED_LIFE_EXPECTANCY = 85;

const DEFAULTS = {
  currentAge: "55",
  retirementAge: "67",
  monthlyBenefit: "1500",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSocialSecurityLifetime = (
  currentAge,
  retirementAge,
  monthlyBenefit
) => {
  if (
    currentAge.trim() === "" ||
    retirementAge.trim() === "" ||
    monthlyBenefit.trim() === ""
  ) {
    return null;
  }

  const ageNow = parseInt(currentAge, 10);
  const ageRetire = parseInt(retirementAge, 10);
  const benefit = parseFloat(monthlyBenefit);

  if (isNaN(ageNow) || isNaN(ageRetire) || isNaN(benefit)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (ageNow < 0 || ageRetire < 0) {
    return { error: "Ages cannot be negative." };
  }

  if (ageNow >= ageRetire) {
    return {
      error: "Retirement age must be greater than your current age.",
    };
  }

  if (ageRetire >= ASSUMED_LIFE_EXPECTANCY) {
    return {
      error: `Retirement age must be below the assumed life expectancy (${ASSUMED_LIFE_EXPECTANCY}).`,
    };
  }

  if (benefit < 0) {
    return { error: "Monthly benefit cannot be negative." };
  }

  const yearsUntilRetirement = ageRetire - ageNow;
  const yearsReceivingBenefits = ASSUMED_LIFE_EXPECTANCY - ageRetire;
  const totalLifetimeBenefits = yearsReceivingBenefits * 12 * benefit;

  return {
    currentAge: ageNow,
    retirementAge: ageRetire,
    monthlyBenefit: benefit,
    assumedLifeExpectancy: ASSUMED_LIFE_EXPECTANCY,
    yearsUntilRetirement,
    yearsReceivingBenefits,
    totalLifetimeBenefits,
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
    name: "What does this Social Security calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total lifetime Social Security dollars if you receive a fixed monthly benefit from your chosen retirement age through an assumed life expectancy of age 85. You supply the monthly amount—it is not calculated from earnings.",
    },
  },
  {
    "@type": "Question",
    name: "Does it estimate my benefit from the SSA?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It does not use your earnings record, full retirement age, or early/late claiming adjustments. Use your benefit estimate from SSA.gov or a statement and enter it as the monthly payment.",
    },
  },
  {
    "@type": "Question",
    name: "Why is life expectancy fixed at 85?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The tool uses age 85 as a simple planning horizon for how many years of payments to multiply. Your actual lifespan may be longer or shorter.",
    },
  },
  {
    "@type": "Question",
    name: "Does it model claiming at 62 vs 70?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Only indirectly: enter the monthly benefit that matches the age you plan to claim. It does not apply SSA reduction or credit formulas automatically.",
    },
  },
  {
    "@type": "Question",
    name: "Are benefits adjusted for inflation (COLA)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The monthly benefit stays flat for all years in the projection.",
    },
  },
];

const SocialSecurityCalculator = () => {
  const [currentAge, setCurrentAge] = useState(DEFAULTS.currentAge);
  const [retirementAge, setRetirementAge] = useState(DEFAULTS.retirementAge);
  const [monthlyBenefit, setMonthlyBenefit] = useState(DEFAULTS.monthlyBenefit);

  const result = computeSocialSecurityLifetime(
    currentAge,
    retirementAge,
    monthlyBenefit
  );

  const reset = () => {
    setCurrentAge(DEFAULTS.currentAge);
    setRetirementAge(DEFAULTS.retirementAge);
    setMonthlyBenefit(DEFAULTS.monthlyBenefit);
  };

  return (
    <>
      <Helmet>
        <title>
          Social Security Calculator - Lifetime Benefits from Monthly Payment
        </title>
        <meta
          name="description"
          content="Multiply a monthly Social Security benefit from your retirement age through assumed age 85. You enter the payment—not SSA earnings math or COLA."
        />
        <meta
          name="keywords"
          content="social security calculator, lifetime social security benefits, retirement benefit total, monthly social security estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Social Security Calculator" />
        <meta
          property="og:description"
          content="Total lifetime benefits from a fixed monthly payment and retirement age through age 85."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Security Calculator" />
        <meta
          name="twitter:description"
          content="Lifetime benefit total from your entered monthly Social Security payment."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Social Security Calculator",
            url: PAGE_URL,
            description:
              "Estimate total lifetime Social Security dollars from a monthly benefit and retirement age.",
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
            name: "Social Security Calculator",
            url: PAGE_URL,
            description:
              "Web tool to total lifetime Social Security benefits from a fixed monthly payment.",
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
            headline: "Lifetime Social Security Benefit Projection",
            description:
              "Multiply a user-entered monthly benefit from retirement age through an assumed life expectancy of 85.",
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
                name: "Social Security Calculator",
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
              Retirement age (start benefits)
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
              Expected monthly benefit
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyBenefit}
                onChange={(e) => setMonthlyBenefit(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyBenefit}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                /mo
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Enter the monthly amount from your SSA estimate or planning
              assumption—not computed here from wages.
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Social Security summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total lifetime benefits
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalLifetimeBenefits)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly benefit</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyBenefit)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Years receiving benefits</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.yearsReceivingBenefits} yrs (to age ${result.assumedLifeExpectancy})`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Years until retirement</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.yearsUntilRetirement} yrs`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Lifetime total = monthly benefit × 12 × (85 − retirement age).
              Fixed life expectancy of 85; no COLA, spousal benefits, or SSA
              earnings formula. Get official estimates at SSA.gov.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialSecurityCalculator;
