import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/simple-interest-calculator";

const DEFAULTS = {
  principal: "1000",
  rate: "5",
  timeYears: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSimpleInterest = (principal, rate, timeYears) => {
  if (
    principal.trim() === "" ||
    rate.trim() === "" ||
    timeYears.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(principal);
  const R = parseFloat(rate);
  const T = parseFloat(timeYears);

  if (isNaN(P) || isNaN(R) || isNaN(T)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) {
    return { error: "Principal cannot be negative." };
  }

  if (T < 0) {
    return { error: "Time cannot be negative." };
  }

  const simpleInterest = (P * R * T) / 100;
  const totalAmount = P + simpleInterest;

  return {
    principal: P,
    ratePercent: R,
    timeYears: T,
    simpleInterest,
    totalAmount,
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
    name: "What does this simple interest calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Simple interest dollars and total amount (principal + interest) using I = P × R × T ÷ 100 with T in years and R as an annual rate percent.",
    },
  },
  {
    "@type": "Question",
    name: "Is this compound interest?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Simple interest is calculated only on the original principal. Compound interest reinvests earned interest—use the Compound Interest Calculator for that.",
    },
  },
  {
    "@type": "Question",
    name: "Can I enter time in months?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool uses years. Convert months to years (e.g. 6 months = 0.5 years) before entering, or use a calculator that accepts other time units.",
    },
  },
  {
    "@type": "Question",
    name: "What if the rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Simple interest is zero and the total amount equals the principal.",
    },
  },
  {
    "@type": "Question",
    name: "Does simple interest apply to most mortgages?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Many consumer loans and investments use compound interest or amortization. Simple interest is common in short-term notes and some student or auto loan disclosures—check your contract.",
    },
  },
];

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [timeYears, setTimeYears] = useState(DEFAULTS.timeYears);

  const result = computeSimpleInterest(principal, rate, timeYears);

  const reset = () => {
    setPrincipal(DEFAULTS.principal);
    setRate(DEFAULTS.rate);
    setTimeYears(DEFAULTS.timeYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Simple Interest Calculator - I = P × R × T
        </title>
        <meta
          name="description"
          content="Calculate simple interest and total amount from principal, annual rate %, and time in years. Not compound interest or monthly compounding."
        />
        <meta
          name="keywords"
          content="simple interest calculator, SI formula, principal interest, annual rate years"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Simple Interest Calculator" />
        <meta
          property="og:description"
          content="Simple interest and total from principal, rate, and years."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Simple Interest Calculator" />
        <meta
          name="twitter:description"
          content="I = P × R × T ÷ 100 for annual simple interest."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Simple Interest Calculator",
            url: PAGE_URL,
            description:
              "Calculate simple interest and total amount using the standard SI formula.",
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
            name: "Simple Interest Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute simple interest on a principal amount.",
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
            headline: "Simple Interest Formula",
            description:
              "Interest equals principal times annual rate percent times years, divided by 100.",
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
                name: "Simple Interest Calculator",
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
            <label className="font-h3 text-h3 text-on-surface">Time</label>
            <div className="relative">
              <input
                type="number"
                value={timeYears}
                onChange={(e) => setTimeYears(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.timeYears}
                min="0"
                step="any"
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
            Simple interest summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total amount
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Simple interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.simpleInterest)}`
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
              <span className="text-on-surface">Rate / time</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.ratePercent.toFixed(3)}% • ${result.timeYears} yr${result.timeYears === 1 ? "" : "s"}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              I = P × R × T ÷ 100 (T in years, R annual %). Not compound
              interest or amortized loan schedules.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SimpleInterestCalculator;
