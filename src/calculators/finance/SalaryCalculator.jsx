import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/salary-calculator";

const DEFAULTS = {
  hourlyRate: "25",
  hoursPerWeek: "40",
  weeksPerYear: "52",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSalary = (hourlyRate, hoursPerWeek, weeksPerYear) => {
  if (
    hourlyRate.trim() === "" ||
    hoursPerWeek.trim() === "" ||
    weeksPerYear.trim() === ""
  ) {
    return null;
  }

  const rate = parseFloat(hourlyRate);
  const hours = parseFloat(hoursPerWeek);
  const weeks = parseFloat(weeksPerYear);

  if (isNaN(rate) || isNaN(hours) || isNaN(weeks)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (rate < 0 || hours < 0) {
    return { error: "Hourly rate and hours per week cannot be negative." };
  }

  if (weeks <= 0) {
    return { error: "Weeks per year must be greater than zero." };
  }

  const weeklyGross = rate * hours;
  const annualGross = weeklyGross * weeks;
  const monthlyGross = annualGross / 12;

  return {
    hourlyRate: rate,
    hoursPerWeek: hours,
    weeksPerYear: weeks,
    weeklyGross,
    monthlyGross,
    annualGross,
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
    name: "What does this salary calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Gross weekly, average monthly, and annual pay from hourly rate, hours per week, and weeks worked per year. No tax or deductions.",
    },
  },
  {
    "@type": "Question",
    name: "How is monthly salary calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Annual gross pay divided by 12—average monthly income, not necessarily each paycheck if you are paid biweekly or semimonthly.",
    },
  },
  {
    "@type": "Question",
    name: "Does it calculate take-home pay?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Use a take-home paycheck or income tax calculator for net pay after withholding.",
    },
  },
  {
    "@type": "Question",
    name: "Can I enter monthly or annual salary instead of hourly?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page starts from hourly pay only. Divide annual salary by hours per year to get an hourly equivalent, or use another tool on this site.",
    },
  },
  {
    "@type": "Question",
    name: "What weeks per year should I use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "52 for full-time year-round work. Use fewer weeks if you have unpaid time off or seasonal work.",
    },
  },
];

const SalaryCalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(DEFAULTS.hourlyRate);
  const [hoursPerWeek, setHoursPerWeek] = useState(DEFAULTS.hoursPerWeek);
  const [weeksPerYear, setWeeksPerYear] = useState(DEFAULTS.weeksPerYear);

  const result = computeSalary(hourlyRate, hoursPerWeek, weeksPerYear);

  const reset = () => {
    setHourlyRate(DEFAULTS.hourlyRate);
    setHoursPerWeek(DEFAULTS.hoursPerWeek);
    setWeeksPerYear(DEFAULTS.weeksPerYear);
  };

  return (
    <>
      <Helmet>
        <title>
          Salary Calculator - Hourly to Weekly, Monthly &amp; Annual Gross
        </title>
        <meta
          name="description"
          content="Convert hourly wage to gross weekly, average monthly, and annual salary. Hours per week and weeks per year—not tax, deductions, or take-home pay."
        />
        <meta
          name="keywords"
          content="salary calculator, hourly to annual salary, gross income calculator, weekly pay calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Salary Calculator" />
        <meta
          property="og:description"
          content="Gross pay from hourly rate, hours per week, and weeks per year."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Salary Calculator" />
        <meta
          name="twitter:description"
          content="Hourly to weekly, monthly, and annual gross salary."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Salary Calculator",
            url: PAGE_URL,
            description:
              "Calculate gross weekly, monthly, and annual salary from hourly wage.",
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
            name: "Salary Calculator",
            url: PAGE_URL,
            description:
              "Web tool to convert hourly pay to gross salary periods.",
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
            headline: "Hourly Wage to Gross Salary Conversion",
            description:
              "Multiply hourly rate by hours and weeks for annual gross, then derive weekly and average monthly amounts.",
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
                name: "Salary Calculator",
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
              Hourly rate
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.hourlyRate}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Hours per week
            </label>
            <div className="relative">
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.hoursPerWeek}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                hrs
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Weeks per year
            </label>
            <div className="relative">
              <input
                type="number"
                value={weeksPerYear}
                onChange={(e) => setWeeksPerYear(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.weeksPerYear}
                min="1"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                wks
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
            Gross salary summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Annual gross salary
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.annualGross)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Average monthly gross
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyGross)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weekly gross pay</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.weeklyGross)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Hourly rate</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.hourlyRate)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Schedule</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.hoursPerWeek} hrs/wk • ${result.weeksPerYear} wks/yr`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Gross pay before tax and deductions. Monthly figure is annual ÷
              12, not a specific pay-cycle paycheck.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SalaryCalculator;
