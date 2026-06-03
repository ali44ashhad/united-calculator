import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/take-home-paycheck-calculator";

const DEFAULTS = {
  grossIncome: "60000",
  federalTaxRate: "12",
  stateTaxRate: "5",
  otherDeductions: "2000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeTakeHomePay = (
  grossIncome,
  federalTaxRate,
  stateTaxRate,
  otherDeductions
) => {
  if (
    grossIncome.trim() === "" ||
    federalTaxRate.trim() === "" ||
    stateTaxRate.trim() === "" ||
    otherDeductions.trim() === ""
  ) {
    return null;
  }

  const income = parseFloat(grossIncome);
  const federalPercent = parseFloat(federalTaxRate);
  const statePercent = parseFloat(stateTaxRate);
  const otherDeduct = parseFloat(otherDeductions);

  if (
    isNaN(income) ||
    isNaN(federalPercent) ||
    isNaN(statePercent) ||
    isNaN(otherDeduct)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (income < 0) return { error: "Gross income cannot be negative." };
  if (federalPercent < 0 || statePercent < 0) {
    return { error: "Tax rates cannot be negative." };
  }
  if (otherDeduct < 0) {
    return { error: "Other deductions cannot be negative." };
  }

  const federalTaxAmount = income * (federalPercent / 100);
  const stateTaxAmount = income * (statePercent / 100);
  const totalTax = federalTaxAmount + stateTaxAmount;
  const netAnnual = income - totalTax - otherDeduct;
  const monthlyTakeHome = netAnnual / 12;
  const effectiveTaxRate =
    income > 0 ? (totalTax / income) * 100 : 0;

  return {
    grossIncome: income,
    federalTaxRatePercent: federalPercent,
    stateTaxRatePercent: statePercent,
    federalTaxAmount,
    stateTaxAmount,
    totalTax,
    otherDeductions: otherDeduct,
    netAnnual,
    monthlyTakeHome,
    effectiveTaxRate,
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
    name: "What does this take-home paycheck calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Annual and average monthly net pay after flat federal and state tax percentages on gross income, minus a dollar amount for other annual deductions you enter.",
    },
  },
  {
    "@type": "Question",
    name: "Does it use IRS tax brackets or FICA?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Federal and state fields are simple percentages of gross income, not progressive brackets, Social Security, Medicare, or W-4 withholding tables.",
    },
  },
  {
    "@type": "Question",
    name: "What should I put in other deductions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A single annual total for items you want subtracted after tax—such as health insurance premiums, 401(k) contributions, or HSA—if you already know the yearly dollar amount.",
    },
  },
  {
    "@type": "Question",
    name: "Is monthly take-home my actual paycheck?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It is annual net divided by 12—average monthly cash flow. Biweekly paychecks differ; multiply by your pay periods per year for a closer check.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from the salary calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The salary calculator converts hourly pay to gross annual income with no taxes. This tool starts from gross annual income and estimates net after your entered rates and deductions.",
    },
  },
];

const TakeHomePaycheckCalculator = () => {
  const [grossIncome, setGrossIncome] = useState(DEFAULTS.grossIncome);
  const [federalTaxRate, setFederalTaxRate] = useState(DEFAULTS.federalTaxRate);
  const [stateTaxRate, setStateTaxRate] = useState(DEFAULTS.stateTaxRate);
  const [otherDeductions, setOtherDeductions] = useState(
    DEFAULTS.otherDeductions
  );

  const result = computeTakeHomePay(
    grossIncome,
    federalTaxRate,
    stateTaxRate,
    otherDeductions
  );

  const reset = () => {
    setGrossIncome(DEFAULTS.grossIncome);
    setFederalTaxRate(DEFAULTS.federalTaxRate);
    setStateTaxRate(DEFAULTS.stateTaxRate);
    setOtherDeductions(DEFAULTS.otherDeductions);
  };

  return (
    <>
      <Helmet>
        <title>
          Take-Home Paycheck Calculator - Net Pay from Flat Tax Rates
        </title>
        <meta
          name="description"
          content="Annual and monthly net pay from gross income, flat federal and state tax %, and other annual deductions. Not IRS brackets, FICA, or W-4 withholding."
        />
        <meta
          name="keywords"
          content="take home paycheck calculator, net salary calculator, after tax pay estimate, gross to net pay"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Take-Home Paycheck Calculator" />
        <meta
          property="og:description"
          content="Estimate net annual and monthly pay with flat tax rates on gross income."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Take-Home Paycheck Calculator" />
        <meta
          name="twitter:description"
          content="Gross to net with flat federal/state % and other deductions."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Take-Home Paycheck Calculator",
            url: PAGE_URL,
            description:
              "Estimate annual and monthly take-home pay from gross income and flat tax rates.",
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
            name: "Take-Home Paycheck Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate net pay after flat tax percentages and deductions.",
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
            headline: "Take-Home Pay from Gross Income",
            description:
              "Net annual and monthly pay using flat federal and state tax rates on gross income plus other annual deductions.",
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
                name: "Take-Home Paycheck Calculator",
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
              Annual gross income
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={grossIncome}
                onChange={(e) => setGrossIncome(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.grossIncome}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Federal tax rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={federalTaxRate}
                onChange={(e) => setFederalTaxRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.federalTaxRate}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Flat % of gross—not IRS brackets
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              State tax rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={stateTaxRate}
                onChange={(e) => setStateTaxRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.stateTaxRate}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Flat % of gross—enter 0 if none
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Other annual deductions
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={otherDeductions}
                onChange={(e) => setOtherDeductions(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.otherDeductions}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Total yearly $ for insurance, retirement, etc. (after-tax math)
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
            Take-home pay summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Annual take-home pay
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.netAnnual)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Avg. monthly take-home
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyTakeHome)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gross income</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.grossIncome)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total taxes (fed + state)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalTax)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Federal tax</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.federalTaxAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">State tax</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.stateTaxAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Other deductions</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.otherDeductions)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Combined tax rate on gross</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.effectiveTaxRate.toFixed(2)}%`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Net = gross − (federal % + state %) × gross − other deductions.
              Not FICA, Medicare, pre-tax 401(k) logic, or progressive brackets.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TakeHomePaycheckCalculator;
