import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/present-value-calculator";

const DEFAULTS = {
  futureValue: "10000",
  interestRate: "5",
  years: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePresentValue = (futureValue, interestRate, years) => {
  if (
    futureValue.trim() === "" ||
    interestRate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const FV = parseFloat(futureValue);
  const ratePercent = parseFloat(interestRate);
  const r = ratePercent / 100;
  const n = parseFloat(years);

  if (isNaN(FV) || isNaN(ratePercent) || isNaN(n) || isNaN(r)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (FV < 0) return { error: "Future value cannot be negative." };
  if (n < 0) return { error: "Years cannot be negative." };

  const presentValue = r === 0 || n === 0 ? FV : FV / Math.pow(1 + r, n);
  const discountAmount = FV - presentValue;
  const discountFactor = FV > 0 ? presentValue / FV : 0;

  return {
    futureValue: FV,
    interestRatePercent: ratePercent,
    years: n,
    presentValue,
    discountAmount,
    discountFactor,
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
    name: "What does this present value calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The present value of a single future lump sum discounted at a constant annual rate for a given number of years: PV = FV ÷ (1 + r)^n.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as net present value (NPV)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. NPV sums multiple cash flows in and out over time. This tool discounts one future amount only.",
    },
  },
  {
    "@type": "Question",
    name: "What if the discount rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Present value equals future value—money is not discounted when the rate is zero.",
    },
  },
  {
    "@type": "Question",
    name: "Does this handle annuity or monthly cash flows?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is for one future lump sum. Streams of payments need an annuity or NPV model.",
    },
  },
  {
    "@type": "Question",
    name: "How does present value relate to future value?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "They are inverses for a single sum: FV = PV × (1 + r)^n. Use the Future Value Calculator on this site to grow today's amount forward.",
    },
  },
];

const PresentValueCalculator = () => {
  const [futureValue, setFutureValue] = useState(DEFAULTS.futureValue);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computePresentValue(futureValue, interestRate, years);

  const reset = () => {
    setFutureValue(DEFAULTS.futureValue);
    setInterestRate(DEFAULTS.interestRate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          Present Value Calculator - Discount a Future Lump Sum
        </title>
        <meta
          name="description"
          content="Calculate present value of one future amount from discount rate and years. PV = FV ÷ (1+r)^n. Single sum only—not NPV or annuity streams."
        />
        <meta
          name="keywords"
          content="present value calculator, PV calculator, discount future value, time value of money, lump sum present value"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Present Value Calculator" />
        <meta
          property="og:description"
          content="Present value of a future lump sum at a discount rate."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Present Value Calculator" />
        <meta
          name="twitter:description"
          content="Discount one future amount to today."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Present Value Calculator",
            url: PAGE_URL,
            description:
              "Calculate present value of a single future sum from discount rate and years.",
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
            name: "Present Value Calculator",
            url: PAGE_URL,
            description:
              "Web tool to discount a future lump sum to present value.",
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
            headline: "How to Calculate Present Value of a Future Sum",
            description:
              "Discount a future lump sum back to today using PV = FV ÷ (1 + r)^n.",
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
                name: "Present Value Calculator",
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
              Future value
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={futureValue}
                onChange={(e) => setFutureValue(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.futureValue}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Discount rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.interestRate}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Years</label>
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
            Present value summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Present value</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.presentValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Future value</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Discount amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.discountAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rate / years</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.interestRatePercent.toFixed(3)}% • ${result.years} years`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">PV as % of FV</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.futureValue > 0
                  ? `${(result.discountFactor * 100).toFixed(2)}%`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Single future lump sum only. Not NPV, not multiple cash flows, and
              not annuity streams.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PresentValueCalculator;
