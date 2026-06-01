import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/interest-calculator";

const DEFAULTS = {
  principal: "10000",
  rate: "5",
  time: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSimpleInterest = (principal, rate, time) => {
  if (
    principal.trim() === "" ||
    rate.trim() === "" ||
    time.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(principal);
  const R = parseFloat(rate);
  const T = parseFloat(time);

  if (isNaN(P) || isNaN(R) || isNaN(T)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) {
    return { error: "Principal cannot be negative." };
  }

  if (T < 0) {
    return { error: "Time period cannot be negative." };
  }

  const interest = (P * R * T) / 100;
  const total = P + interest;
  const interestPercentOfPrincipal = P > 0 ? (interest / P) * 100 : 0;

  return {
    principal: P,
    ratePercent: R,
    timeYears: T,
    interest,
    total,
    interestPercentOfPrincipal,
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
    name: "What does this Interest Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It calculates simple interest only: I = P × R × T ÷ 100, then adds interest to principal for total amount. It does not compound interest within the period.",
    },
  },
  {
    "@type": "Question",
    name: "What is the simple interest formula?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Interest = Principal × Annual rate (%) × Time (years) ÷ 100. Total amount = Principal + Interest.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator include compound interest?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. For interest that reinvests each period, use the Compound Interest Calculator on this site instead.",
    },
  },
  {
    "@type": "Question",
    name: "Are rates monthly or annual?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The rate is treated as an annual percentage and time is in whole years, matching the standard simple-interest formula shown on the page.",
    },
  },
  {
    "@type": "Question",
    name: "When is simple interest used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Some short-term loans, bonds, and classroom problems use simple interest. Long-term savings and most loans use compound or amortized methods instead.",
    },
  },
];

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [time, setTime] = useState(DEFAULTS.time);

  const result = computeSimpleInterest(principal, rate, time);

  const reset = () => {
    setPrincipal(DEFAULTS.principal);
    setRate(DEFAULTS.rate);
    setTime(DEFAULTS.time);
  };

  return (
    <>
      <Helmet>
        <title>
          Interest Calculator - Simple Interest on Principal
        </title>
        <meta
          name="description"
          content="Calculate simple interest from principal, annual rate, and years. See interest earned and total amount. For compounding, use the Compound Interest Calculator."
        />
        <meta
          name="keywords"
          content="interest calculator, simple interest calculator, principal interest formula, loan interest estimate, savings interest"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Interest Calculator" />
        <meta
          property="og:description"
          content="Simple interest: I = P × R × T ÷ 100."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interest Calculator" />
        <meta
          name="twitter:description"
          content="Simple interest on principal over time."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Interest Calculator",
            url: PAGE_URL,
            description:
              "Calculate simple interest and total amount from principal, annual rate, and years.",
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
            name: "Interest Calculator",
            url: PAGE_URL,
            description:
              "Web tool for simple interest on principal at an annual rate over years.",
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
            headline: "How to Calculate Simple Interest",
            description:
              "Multiply principal by annual rate and time in years, divide by 100, and add to principal for the total amount.",
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
                name: "Interest Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Principal</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.principal}
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
              Time (years)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.time}
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
            Simple interest result
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Total amount</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.total)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Simple interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.interest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Principal</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.principal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Interest as % of principal</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.interestPercentOfPrincipal.toFixed(2)}%`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simple interest only: I = P × R × T ÷ 100. Rate is annual; time is
              in years. No compounding within the period.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default InterestCalculator;
