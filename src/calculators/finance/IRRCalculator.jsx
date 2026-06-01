import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/irr-calculator";

const DEFAULTS = {
  cashFlowsInput: "-10000, 2000, 3000, 4000, 5000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseCashFlows = (cashFlowsInput) => {
  if (cashFlowsInput.trim() === "") {
    return null;
  }

  const flows = cashFlowsInput
    .split(",")
    .map((val) => parseFloat(val.trim()))
    .filter((val) => !isNaN(val));

  return flows.length > 0 ? flows : { error: "Enter at least one valid number." };
};

const npvAtRate = (cashFlows, rate) =>
  cashFlows.reduce((sum, cf, t) => sum + cf / Math.pow(1 + rate, t), 0);

const solveIRR = (cashFlows, guess = 0.1) => {
  const maxIterations = 1000;
  const precision = 1e-6;
  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let derivative = 0;

    for (let t = 0; t < cashFlows.length; t++) {
      npv += cashFlows[t] / Math.pow(1 + rate, t);
      derivative -= (t * cashFlows[t]) / Math.pow(1 + rate, t + 1);
    }

    if (derivative === 0 || !isFinite(derivative)) {
      return { error: "IRR could not be computed for these cash flows." };
    }

    const newRate = rate - npv / derivative;

    if (!isFinite(newRate)) {
      return { error: "IRR did not converge—try different cash flows." };
    }

    if (Math.abs(newRate - rate) < precision) {
      const totalInflows = cashFlows
        .filter((cf) => cf > 0)
        .reduce((s, cf) => s + cf, 0);
      const totalOutflows = cashFlows
        .filter((cf) => cf < 0)
        .reduce((s, cf) => s + Math.abs(cf), 0);

      return {
        irr: newRate * 100,
        cashFlows,
        npvAtIrr: npvAtRate(cashFlows, newRate),
        periods: cashFlows.length,
        totalInflows,
        totalOutflows,
        netCashFlow: cashFlows.reduce((s, cf) => s + cf, 0),
      };
    }

    rate = newRate;
  }

  return {
    error: "IRR did not converge within the iteration limit.",
  };
};

const computeIRR = (cashFlowsInput) => {
  const parsed = parseCashFlows(cashFlowsInput);

  if (parsed === null) {
    return null;
  }

  if (parsed.error) {
    return parsed;
  }

  if (parsed.length < 2) {
    return { error: "Enter at least two cash flows (periods)." };
  }

  return solveIRR(parsed);
};

const fmtMoney = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does the IRR Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Internal rate of return—the discount rate that makes net present value of your entered cash flows equal to zero. Cash flows are treated as end-of-period amounts at t = 0, 1, 2, …",
    },
  },
  {
    "@type": "Question",
    name: "How should I enter cash flows?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Comma-separated numbers. The first value is period 0 (often a negative initial investment), followed by later inflows or outflows. Example: -10000, 2000, 3000, 4000, 5000.",
    },
  },
  {
    "@type": "Question",
    name: "What method is used to find IRR?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Newton-Raphson iteration on NPV until the rate changes less than a small tolerance, starting from a 10% guess.",
    },
  },
  {
    "@type": "Question",
    name: "Can IRR be calculated for any cash flow pattern?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Some patterns have no real IRR or multiple solutions. If the solver does not converge, the tool shows an error instead of a rate.",
    },
  },
  {
    "@type": "Question",
    name: "Are cash flows monthly or annual?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Period spacing is whatever you imply by the order of entries—typically annual or monthly, but the calculator does not convert between them. IRR is per period.",
    },
  },
];

const IRRCalculator = () => {
  const [cashFlowsInput, setCashFlowsInput] = useState(DEFAULTS.cashFlowsInput);

  const result = computeIRR(cashFlowsInput);

  const reset = () => {
    setCashFlowsInput(DEFAULTS.cashFlowsInput);
  };

  return (
    <>
      <Helmet>
        <title>IRR Calculator - Internal Rate of Return</title>
        <meta
          name="description"
          content="Calculate internal rate of return (IRR) from comma-separated cash flows using Newton-Raphson. Period 0 is the first value; negative outflows, positive inflows."
        />
        <meta
          name="keywords"
          content="IRR calculator, internal rate of return, cash flow IRR, investment return rate, NPV zero rate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IRR Calculator" />
        <meta
          property="og:description"
          content="IRR from comma-separated periodic cash flows."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IRR Calculator" />
        <meta
          name="twitter:description"
          content="Solve IRR when NPV equals zero."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IRR Calculator",
            url: PAGE_URL,
            description:
              "Calculate internal rate of return from a series of cash flows.",
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
            name: "IRR Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute IRR from comma-separated cash flows.",
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
            headline: "How to Calculate Internal Rate of Return (IRR)",
            description:
              "Find the discount rate that sets NPV of periodic cash flows to zero using iterative root-finding.",
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
                name: "IRR Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Cash flows (comma separated)
          </label>
          <input
            type="text"
            value={cashFlowsInput}
            onChange={(e) => setCashFlowsInput(e.target.value)}
            className={inputClassName}
            placeholder="-10000, 2000, 3000, 4000, 5000"
          />
          <p className="text-sm text-on-surface-variant">
            Period 0 first (often negative investment), then period 1, 2, …
            Use negative for outflows and positive for inflows.
          </p>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">IRR result</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Internal rate of return
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error && result.irr != null
                  ? `${result.irr.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Number of periods</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.periods : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">NPV at IRR (check ≈ 0)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? fmtMoney(result.npvAtIrr)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total inflows</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalInflows)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total outflows</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalOutflows)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Net cash flow (undiscounted)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.netCashFlow)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              IRR is the rate where NPV = 0. Solved with Newton-Raphson (10%
              starting guess). IRR is per period—annual vs monthly depends on
              how you space the cash flows.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IRRCalculator;
