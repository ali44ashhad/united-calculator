import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/payback-period-calculator";

const DEFAULTS = {
  initialInvestment: "100000",
  annualCashInflow: "25000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePaybackPeriod = (initialInvestment, annualCashInflow) => {
  if (
    initialInvestment.trim() === "" ||
    annualCashInflow.trim() === ""
  ) {
    return null;
  }

  const investment = parseFloat(initialInvestment);
  const inflow = parseFloat(annualCashInflow);

  if (isNaN(investment) || isNaN(inflow)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (investment < 0) {
    return { error: "Initial investment cannot be negative." };
  }

  if (inflow <= 0) {
    return { error: "Annual cash inflow must be greater than zero." };
  }

  const paybackYears = investment / inflow;
  const totalMonthsRounded = Math.round(paybackYears * 12);
  const years = Math.floor(totalMonthsRounded / 12);
  const months = totalMonthsRounded % 12;

  return {
    initialInvestment: investment,
    annualCashInflow: inflow,
    paybackYears,
    years,
    months,
    totalMonthsRounded,
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does this payback period calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Simple (undiscounted) payback period: initial investment divided by annual cash inflow. It shows how many years to recover the upfront cost at a constant yearly inflow.",
    },
  },
  {
    "@type": "Question",
    name: "Is this discounted payback period?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This tool does not discount future cash flows. For time-value-of-money analysis, use IRR or NPV-style tools instead.",
    },
  },
  {
    "@type": "Question",
    name: "What if annual cash inflow is zero?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Payback cannot be calculated when annual inflow is zero or negative—the investment would never be recovered under this model.",
    },
  },
  {
    "@type": "Question",
    name: "Does a shorter payback period mean a better investment?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Often yes for liquidity and risk, but payback ignores cash flows after breakeven and does not measure profitability on its own.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use this for uneven yearly cash flows?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This version assumes the same cash inflow every year. Variable or lumpy cash flows need a different payback model.",
    },
  },
];

const PaybackPeriodCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(
    DEFAULTS.initialInvestment
  );
  const [annualCashInflow, setAnnualCashInflow] = useState(
    DEFAULTS.annualCashInflow
  );

  const result = computePaybackPeriod(initialInvestment, annualCashInflow);

  const reset = () => {
    setInitialInvestment(DEFAULTS.initialInvestment);
    setAnnualCashInflow(DEFAULTS.annualCashInflow);
  };

  return (
    <>
      <Helmet>
        <title>
          Payback Period Calculator - Simple Investment Recovery Time
        </title>
        <meta
          name="description"
          content="Calculate simple payback period from initial investment and annual cash inflow. Undiscounted recovery time in years and months—no NPV or IRR."
        />
        <meta
          name="keywords"
          content="payback period calculator, investment recovery time, simple payback period, capital budgeting, breakeven time calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Payback Period Calculator" />
        <meta
          property="og:description"
          content="Simple payback period from investment and annual cash inflow."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Payback Period Calculator" />
        <meta
          name="twitter:description"
          content="Undiscounted investment recovery time estimate."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Payback Period Calculator",
            url: PAGE_URL,
            description:
              "Calculate simple payback period from initial investment and annual cash inflow.",
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
            name: "Payback Period Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate simple undiscounted payback period.",
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
            headline: "How to Calculate Simple Payback Period",
            description:
              "Divide initial investment by annual cash inflow to estimate recovery time.",
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
                name: "Payback Period Calculator",
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
              Initial investment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.initialInvestment}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual cash inflow
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={annualCashInflow}
                onChange={(e) => setAnnualCashInflow(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.annualCashInflow}
                min="0"
                step="any"
              />
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
            Payback period summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Payback period</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${result.years} years ${result.months} months`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total payback time</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.paybackYears.toFixed(2)} years`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Initial investment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${result.initialInvestment.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Annual cash inflow</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${result.annualCashInflow.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simple (undiscounted) payback period. Assumes constant annual
              inflow. Does not discount cash flows or compute NPV, IRR, or ROI.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PaybackPeriodCalculator;
