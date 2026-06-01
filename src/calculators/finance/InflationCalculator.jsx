import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/inflation-calculator";

const DEFAULTS = {
  initialAmount: "1000",
  inflationRate: "3",
  years: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeInflation = (initialAmount, inflationRate, years) => {
  if (
    initialAmount.trim() === "" ||
    inflationRate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(initialAmount);
  const ratePercent = parseFloat(inflationRate);
  const r = ratePercent / 100;
  const t = parseFloat(years);

  if (isNaN(P) || isNaN(r) || isNaN(t)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) {
    return { error: "Initial amount cannot be negative." };
  }

  if (t < 0) {
    return { error: "Time period cannot be negative." };
  }

  let adjustedValue;
  let futureNominal;

  if (r === 0) {
    adjustedValue = P;
    futureNominal = P;
  } else {
    adjustedValue = P / Math.pow(1 + r, t);
    futureNominal = P * Math.pow(1 + r, t);
  }

  const lossInValue = P - adjustedValue;
  const lossPercent = P > 0 ? (lossInValue / P) * 100 : 0;

  return {
    initialAmount: P,
    inflationRatePercent: ratePercent,
    years: t,
    adjustedValue,
    futureNominal,
    lossInValue,
    lossPercent,
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
    name: "What does this Inflation Calculator show?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "From an amount today, a constant annual inflation rate, and years forward, it shows today's purchasing power after inflation (deflated value), how much nominal cash you'd need later for the same buying power, and the loss in real value.",
    },
  },
  {
    "@type": "Question",
    name: "What formula is used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Real value today = Amount ÷ (1 + r)^t. Future nominal equivalent = Amount × (1 + r)^t, where r is annual inflation as a decimal and t is years.",
    },
  },
  {
    "@type": "Question",
    name: "Does this use official CPI data?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. You enter one assumed inflation rate. It does not pull historical Consumer Price Index series.",
    },
  },
  {
    "@type": "Question",
    name: "What is loss in purchasing power?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It is the initial amount minus the inflation-adjusted (real) value—the dollar difference in buying power over the period at the rate you entered.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from compound interest?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Compound interest grows savings at an investment return. This tool erodes purchasing power at an inflation rate you supply—opposite direction for planning real vs nominal amounts.",
    },
  },
];

const InflationCalculator = () => {
  const [initialAmount, setInitialAmount] = useState(DEFAULTS.initialAmount);
  const [inflationRate, setInflationRate] = useState(DEFAULTS.inflationRate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeInflation(initialAmount, inflationRate, years);

  const reset = () => {
    setInitialAmount(DEFAULTS.initialAmount);
    setInflationRate(DEFAULTS.inflationRate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          Inflation Calculator - Purchasing Power &amp; Real Value
        </title>
        <meta
          name="description"
          content="See how inflation reduces purchasing power. Enter amount, annual inflation rate, and years to get real value today, future nominal equivalent, and loss in value."
        />
        <meta
          name="keywords"
          content="inflation calculator, purchasing power calculator, real value calculator, inflation adjusted value, cost of living estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Inflation Calculator" />
        <meta
          property="og:description"
          content="Estimate purchasing power loss from a constant inflation rate."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inflation Calculator" />
        <meta
          name="twitter:description"
          content="Real vs nominal value with inflation over time."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Inflation Calculator",
            url: PAGE_URL,
            description:
              "Calculate inflation-adjusted purchasing power from amount, rate, and years.",
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
            name: "Inflation Calculator",
            url: PAGE_URL,
            description:
              "Web tool to deflate nominal amounts by a constant annual inflation rate.",
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
            headline: "How to Adjust Money for Inflation Over Time",
            description:
              "Divide by (1+r)^t to find today's purchasing power of a future nominal amount, or multiply to find future cash needed for today's buying power.",
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
                name: "Inflation Calculator",
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
              Amount today (nominal)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.initialAmount}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual inflation rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.inflationRate}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Years ahead</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className={inputClassName}
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
            Inflation-adjusted result
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Purchasing power (today&apos;s dollars)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.adjustedValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Loss in purchasing power</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.lossInValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Loss as % of amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.lossPercent.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Future nominal for same buying power
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.futureNominal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Amount entered</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.initialAmount)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Real value = Amount ÷ (1 + r)^t. Future nominal = Amount × (1 +
              r)^t. Constant annual inflation; no CPI history download.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default InflationCalculator;
