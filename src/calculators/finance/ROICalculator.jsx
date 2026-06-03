import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/roi-calculator";

const DEFAULTS = {
  finalValue: "120000",
  initialCost: "100000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeROI = (finalValue, initialCost) => {
  if (finalValue.trim() === "" || initialCost.trim() === "") {
    return null;
  }

  const finalAmount = parseFloat(finalValue);
  const cost = parseFloat(initialCost);

  if (isNaN(finalAmount) || isNaN(cost)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (cost <= 0) {
    return { error: "Initial cost must be greater than zero." };
  }

  const netProfit = finalAmount - cost;
  const roiPercent = (netProfit / cost) * 100;

  return {
    finalValue: finalAmount,
    initialCost: cost,
    netProfit,
    roiPercent,
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
    name: "What does this ROI calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Simple ROI percent and net profit from final value (amount returned) minus initial cost, divided by initial cost. Not annualized and not IRR.",
    },
  },
  {
    "@type": "Question",
    name: "Is final value the same as net profit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Final value is total proceeds or exit value. Net profit is final value minus initial cost. ROI uses net profit divided by cost.",
    },
  },
  {
    "@type": "Question",
    name: "Can ROI be negative?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. If final value is less than initial cost, net profit and ROI are negative.",
    },
  },
  {
    "@type": "Question",
    name: "Does this annualize returns?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is a single-period ROI regardless of how long you held the investment.",
    },
  },
  {
    "@type": "Question",
    name: "Are fees and taxes included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Only if you include them in final value or initial cost. The calculator does not add fees separately.",
    },
  },
];

const ROICalculator = () => {
  const [finalValue, setFinalValue] = useState(DEFAULTS.finalValue);
  const [initialCost, setInitialCost] = useState(DEFAULTS.initialCost);

  const result = computeROI(finalValue, initialCost);

  const reset = () => {
    setFinalValue(DEFAULTS.finalValue);
    setInitialCost(DEFAULTS.initialCost);
  };

  return (
    <>
      <Helmet>
        <title>ROI Calculator - Return on Investment Percent</title>
        <meta
          name="description"
          content="Calculate simple ROI % from final value and initial cost: (final − cost) ÷ cost. Not annualized, IRR, or time-weighted return."
        />
        <meta
          name="keywords"
          content="ROI calculator, return on investment, net profit percent, investment return formula"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="ROI Calculator" />
        <meta
          property="og:description"
          content="ROI percent from final value and initial investment cost."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ROI Calculator" />
        <meta
          name="twitter:description"
          content="Simple return on investment from proceeds and cost."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ROI Calculator",
            url: PAGE_URL,
            description:
              "Calculate return on investment percentage from final value and initial cost.",
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
            name: "ROI Calculator",
            url: PAGE_URL,
            description: "Web tool to compute simple ROI and net profit.",
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
            headline: "Simple Return on Investment Formula",
            description:
              "ROI equals net profit divided by initial cost, expressed as a percentage.",
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
                name: "ROI Calculator",
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
              Final value (amount returned)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={finalValue}
                onChange={(e) => setFinalValue(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.finalValue}
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Total proceeds or exit value—not net profit alone.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Initial cost
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={initialCost}
                onChange={(e) => setInitialCost(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.initialCost}
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">ROI summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Return on investment (ROI)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${result.roiPercent.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Net profit (or loss)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.netProfit)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Final value</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.finalValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Initial cost</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.initialCost)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simple single-period ROI: (final − cost) ÷ cost. Not annualized
              return, IRR, or cash-on-cash with leverage.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ROICalculator;
