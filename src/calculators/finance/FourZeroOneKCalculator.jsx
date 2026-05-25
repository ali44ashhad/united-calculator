import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/401k-calculator";

const MATCH_SALARY_CAP = 0.06;

const DEFAULTS = {
  annualContribution: "19500",
  employerMatch: "50",
  salary: "60000",
  annualReturn: "7",
  years: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const compute401k = (
  annualContribution,
  employerMatch,
  salary,
  annualReturn,
  years
) => {
  if (
    annualContribution.trim() === "" ||
    employerMatch.trim() === "" ||
    salary.trim() === "" ||
    annualReturn.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const contribution = parseFloat(annualContribution);
  const matchPercent = parseFloat(employerMatch) / 100;
  const salaryAmt = parseFloat(salary);
  const returnRate = parseFloat(annualReturn) / 100;
  const time = parseFloat(years);

  if (
    isNaN(contribution) ||
    isNaN(matchPercent) ||
    isNaN(salaryAmt) ||
    isNaN(returnRate) ||
    isNaN(time)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (contribution < 0 || salaryAmt < 0) {
    return { error: "Contribution and salary cannot be negative." };
  }

  if (matchPercent < 0 || matchPercent > 1) {
    return { error: "Employer match must be between 0% and 100%." };
  }

  if (time <= 0) {
    return { error: "Years must be greater than zero." };
  }

  const matchableBase = Math.min(contribution, salaryAmt * MATCH_SALARY_CAP);
  const employerMatchAmount = matchableBase * matchPercent;
  const annualTotal = contribution + employerMatchAmount;

  let balance = 0;
  for (let i = 0; i < time; i++) {
    balance = (balance + annualTotal) * (1 + returnRate);
  }

  const totalContribution = annualTotal * time;
  const totalGrowth = balance - totalContribution;

  return {
    balance,
    totalContribution,
    totalGrowth,
    contribution,
    employerMatchAmount,
    annualTotal,
    matchableBase,
    employerMatchPercent: parseFloat(employerMatch),
    returnRatePercent: parseFloat(annualReturn),
    years: time,
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
    name: "What does the 401(k) Calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It projects an ending balance from fixed annual employee contributions, an employer match based on match percent applied to contributions up to 6% of salary, and a constant annual investment return compounded each year.",
    },
  },
  {
    "@type": "Question",
    name: "How is employer match calculated here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Employer match equals the match percentage times the lesser of your annual contribution and 6% of annual salary. For example, 50% match on a $3,600 cap yields $1,800 per year.",
    },
  },
  {
    "@type": "Question",
    name: "Does this use monthly paycheck deposits?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Contributions are modeled as one lump sum per year added before annual growth. Real plans deposit each pay period; results will differ slightly from this simplified timeline.",
    },
  },
  {
    "@type": "Question",
    name: "Are taxes and plan fees included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The projection is pretax growth without administrative fees, catch-up contributions, vesting schedules, or withdrawal taxes.",
    },
  },
  {
    "@type": "Question",
    name: "What annual return should I use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Many planners use a long-term stock-heavy average near 6–8%, but actual returns vary every year. Run multiple scenarios with lower and higher rates.",
    },
  },
];

const FourZeroOneKCalculator = () => {
  const [annualContribution, setAnnualContribution] = useState(
    DEFAULTS.annualContribution
  );
  const [employerMatch, setEmployerMatch] = useState(DEFAULTS.employerMatch);
  const [salary, setSalary] = useState(DEFAULTS.salary);
  const [annualReturn, setAnnualReturn] = useState(DEFAULTS.annualReturn);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = compute401k(
    annualContribution,
    employerMatch,
    salary,
    annualReturn,
    years
  );

  const reset = () => {
    setAnnualContribution(DEFAULTS.annualContribution);
    setEmployerMatch(DEFAULTS.employerMatch);
    setSalary(DEFAULTS.salary);
    setAnnualReturn(DEFAULTS.annualReturn);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          401(k) Calculator - Retirement Balance & Employer Match
        </title>
        <meta
          name="description"
          content="Estimate 401(k) balance from annual contributions, employer match up to 6% of salary, expected return, and years invested. Annual compounding model."
        />
        <meta
          name="keywords"
          content="401k calculator, employer match calculator, retirement savings estimate, 401k growth projection, four zero one k calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="401(k) Calculator"
        />
        <meta
          property="og:description"
          content="Project 401(k) balance with employee contributions and employer match."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="401(k) Calculator" />
        <meta
          name="twitter:description"
          content="401(k) retirement savings estimate with match."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "401(k) Calculator",
            url: PAGE_URL,
            description:
              "Estimate 401(k) retirement balance from annual contributions, employer match, return rate, and years.",
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
            name: "401(k) Calculator",
            url: PAGE_URL,
            description:
              "Web tool to project 401(k) savings with employer match capped at 6% of salary.",
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
            headline: "How to Estimate 401(k) Growth with Employer Match",
            description:
              "Each year add employee plus employer contributions, then grow the balance by the annual return rate. Employer match applies to contributions up to 6% of salary.",
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
                name: "401(k) Calculator",
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
              Your annual contribution
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
              Annual salary
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.salary}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Employer match
            </label>
            <div className="relative">
              <input
                type="number"
                value={employerMatch}
                onChange={(e) => setEmployerMatch(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.employerMatch}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Match applied to contributions up to 6% of salary.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Expected annual return
            </label>
            <div className="relative">
              <input
                type="number"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.annualReturn}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Years invested
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className={`${inputClassName} max-w-full md:max-w-xs`}
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
            401(k) projection summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Projected balance
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.balance)}`
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
              <span className="text-on-surface">Investment growth</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalGrowth)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Employer match (per year)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.employerMatchAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Your contribution (per year)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.contribution)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Each year: balance = (balance + your contribution + employer
              match) × (1 + return). Employer match uses{" "}
              {MATCH_SALARY_CAP * 100}% of salary cap. Not a substitute for plan
              documents, vesting rules, or tax advice.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FourZeroOneKCalculator;
