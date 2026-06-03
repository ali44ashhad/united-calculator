import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/sip-calculator";

const DEFAULTS = {
  monthlyInvestment: "500",
  expectedAnnualReturn: "7",
  years: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSIP = (monthlyInvestment, expectedAnnualReturn, years) => {
  if (
    monthlyInvestment.trim() === "" ||
    expectedAnnualReturn.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const PMT = parseFloat(monthlyInvestment);
  const ratePercent = parseFloat(expectedAnnualReturn);
  const yearCount = parseFloat(years);
  const r = ratePercent / 100 / 12;
  const n = yearCount * 12;

  if (isNaN(PMT) || isNaN(ratePercent) || isNaN(yearCount) || isNaN(n)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (PMT < 0) {
    return { error: "Monthly investment cannot be negative." };
  }

  if (yearCount <= 0) {
    return { error: "Years must be greater than zero." };
  }

  const maturityValue =
    r === 0 ? PMT * n : PMT * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const totalInvested = PMT * n;
  const estimatedGrowth = maturityValue - totalInvested;

  return {
    monthlyInvestment: PMT,
    expectedAnnualReturnPercent: ratePercent,
    years: yearCount,
    months: n,
    maturityValue,
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
    name: "What does this SIP calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value of equal monthly investments at a fixed annual return with monthly compounding. Deposits are modeled at the beginning of each month (annuity due).",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the savings calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Similar compound math, but this tool has no starting lump sum and uses beginning-of-month deposits. The savings calculator includes an initial balance and end-of-month contributions.",
    },
  },
  {
    "@type": "Question",
    name: "Does it include step-up SIP or inflation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It uses one fixed monthly amount and one fixed annual return for the whole period. It does not model annual contribution increases or inflation-adjusted returns.",
    },
  },
  {
    "@type": "Question",
    name: "Are mutual fund returns guaranteed?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The rate you enter is an assumption for illustration. Actual fund performance varies with markets, fees, and taxes.",
    },
  },
  {
    "@type": "Question",
    name: "What if the expected return is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value equals the sum of all monthly investments with no growth.",
    },
  },
];

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(
    DEFAULTS.monthlyInvestment
  );
  const [expectedAnnualReturn, setExpectedAnnualReturn] = useState(
    DEFAULTS.expectedAnnualReturn
  );
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeSIP(
    monthlyInvestment,
    expectedAnnualReturn,
    years
  );

  const reset = () => {
    setMonthlyInvestment(DEFAULTS.monthlyInvestment);
    setExpectedAnnualReturn(DEFAULTS.expectedAnnualReturn);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          SIP Calculator - Monthly Investment Future Value
        </title>
        <meta
          name="description"
          content="Estimate SIP maturity from fixed monthly investment, expected annual return, and years. Monthly compounding, beginning-of-month deposits—not step-up or inflation."
        />
        <meta
          name="keywords"
          content="sip calculator, systematic investment plan, monthly investment future value, mutual fund projection"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="SIP Calculator" />
        <meta
          property="og:description"
          content="Project future value of equal monthly SIP-style investments at a fixed assumed return."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIP Calculator" />
        <meta
          name="twitter:description"
          content="Fixed monthly deposits with monthly compounding—illustrative only."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "SIP Calculator",
            url: PAGE_URL,
            description:
              "Estimate future value of equal monthly investments at an assumed annual return.",
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
            name: "SIP Calculator",
            url: PAGE_URL,
            description:
              "Web tool to project SIP-style monthly investment growth.",
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
            headline: "SIP Future Value with Monthly Compounding",
            description:
              "Future value of a level monthly investment stream with monthly compounding and beginning-of-period deposits.",
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
                name: "SIP Calculator",
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
              Monthly investment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyInvestment}
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
                value={expectedAnnualReturn}
                onChange={(e) => setExpectedAnnualReturn(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.expectedAnnualReturn}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
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
            SIP summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Future value (maturity)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.maturityValue)}`
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
              <span className="text-on-surface">Estimated growth</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.estimatedGrowth)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly investment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyInvestment)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Monthly compounding at a fixed annual rate; equal deposits at the
              beginning of each month. Illustrative only—no step-up SIP,
              inflation, fund fees, or market guarantees.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SIPCalculator;
