import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/investment-calculator";

const DEFAULTS = {
  principal: "10000",
  rate: "8",
  years: "5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeInvestment = (principal, rate, years) => {
  if (
    principal.trim() === "" ||
    rate.trim() === "" ||
    years.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(principal);
  const ratePercent = parseFloat(rate);
  const r = ratePercent / 100;
  const t = parseFloat(years);

  if (isNaN(P) || isNaN(r) || isNaN(t)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) {
    return { error: "Investment amount cannot be negative." };
  }

  if (t < 0) {
    return { error: "Investment period cannot be negative." };
  }

  const futureValue = r === 0 ? P : P * Math.pow(1 + r, t);
  const interestEarned = futureValue - P;
  const totalReturnPercent = P > 0 ? (interestEarned / P) * 100 : 0;

  return {
    principal: P,
    ratePercent,
    years: t,
    futureValue,
    interestEarned,
    totalReturnPercent,
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
    name: "What does the Investment Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Future value of a one-time lump sum invested at a constant annual return with annual compounding: FV = P(1+r)^t, plus interest earned and total return percent.",
    },
  },
  {
    "@type": "Question",
    name: "Are monthly contributions or SIP included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only a single initial investment compounds each year. For recurring deposits, use the SIP Calculator or Future Value Calculator with annual contributions.",
    },
  },
  {
    "@type": "Question",
    name: "How often is interest compounded?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Once per year at the annual rate you enter. It does not model monthly or daily compounding within the year.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include taxes or fees?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Results are pretax and assume no investment fees or withdrawals during the period.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from the Compound Interest Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Both use compound growth on principal. This page is framed for lump-sum investment planning; the Compound Interest Calculator may offer different inputs or defaults on the site.",
    },
  },
];

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = computeInvestment(principal, rate, years);

  const reset = () => {
    setPrincipal(DEFAULTS.principal);
    setRate(DEFAULTS.rate);
    setYears(DEFAULTS.years);
  };

  return (
    <>
      <Helmet>
        <title>
          Investment Calculator - Lump Sum Future Value
        </title>
        <meta
          name="description"
          content="Estimate future value of a lump-sum investment with annual compounding. Enter amount, annual return, and years. No SIP or tax modeling."
        />
        <meta
          name="keywords"
          content="investment calculator, lump sum future value, compound growth estimate, investment return calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Investment Calculator" />
        <meta
          property="og:description"
          content="Lump-sum investment FV with annual compounding."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Investment Calculator" />
        <meta
          name="twitter:description"
          content="FV = P(1+r)^t for one-time investment."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Investment Calculator",
            url: PAGE_URL,
            description:
              "Calculate future value of a lump-sum investment with annual compounding.",
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
            name: "Investment Calculator",
            url: PAGE_URL,
            description:
              "Web tool for lump-sum investment future value at an annual compounded return.",
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
            headline: "How to Project Lump-Sum Investment Growth",
            description:
              "Compound a single deposit annually at a constant return rate to estimate future value and total gain.",
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
                name: "Investment Calculator",
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
              Initial investment (lump sum)
            </label>
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
              Annual return rate
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
              Investment period (years)
            </label>
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
            Investment result
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Future value</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.futureValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Interest / growth earned</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.interestEarned)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Initial investment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.principal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total return</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.totalReturnPercent.toFixed(2)}%`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              FV = P(1 + r)^t with annual compounding. One-time deposit only—no
              monthly SIP, taxes, or fees.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default InvestmentCalculator;
