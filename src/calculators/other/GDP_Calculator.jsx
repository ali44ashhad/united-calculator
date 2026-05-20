import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/gdp-calculator";

const DEFAULTS = {
  consumption: "5000",
  investment: "2000",
  governmentSpending: "3000",
  exports: "1500",
  imports: "1000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseComponent = (v) => {
  const n = parseFloat(v.trim());
  if (isNaN(n)) return { invalid: true };
  return { value: n };
};

const computeGDP = (
  consumption,
  investment,
  governmentSpending,
  exports,
  imports
) => {
  const fields = [
    consumption,
    investment,
    governmentSpending,
    exports,
    imports,
  ];
  if (fields.some((f) => f.trim() === "")) {
    return null;
  }

  const c = parseComponent(consumption);
  const i = parseComponent(investment);
  const g = parseComponent(governmentSpending);
  const x = parseComponent(exports);
  const m = parseComponent(imports);

  if (
    c.invalid ||
    i.invalid ||
    g.invalid ||
    x.invalid ||
    m.invalid
  ) {
    return { error: "Enter valid numbers for C, I, G, X, and M." };
  }

  const C = c.value;
  const I = i.value;
  const G = g.value;
  const X = x.value;
  const M = m.value;

  const privateDomestic = C + I;
  const netExports = X - M;
  const gdp = privateDomestic + G + netExports;

  return {
    consumption: C,
    investment: I,
    governmentSpending: G,
    exports: X,
    imports: M,
    privateDomestic,
    netExports,
    gdp,
  };
};

const formatNum = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const GDP_Calculator = () => {
  const [consumption, setConsumption] = useState(DEFAULTS.consumption);
  const [investment, setInvestment] = useState(DEFAULTS.investment);
  const [governmentSpending, setGovernmentSpending] = useState(
    DEFAULTS.governmentSpending
  );
  const [exports, setExports] = useState(DEFAULTS.exports);
  const [imports, setImports] = useState(DEFAULTS.imports);

  const result = computeGDP(
    consumption,
    investment,
    governmentSpending,
    exports,
    imports
  );

  const reset = () => {
    setConsumption(DEFAULTS.consumption);
    setInvestment(DEFAULTS.investment);
    setGovernmentSpending(DEFAULTS.governmentSpending);
    setExports(DEFAULTS.exports);
    setImports(DEFAULTS.imports);
  };

  return (
    <>
      <Helmet>
        <title>
          GDP Calculator - Expenditure Approach (C + I + G + X − M)
        </title>
        <meta
          name="description"
          content="Compute GDP using the expenditure identity: GDP = Consumption + Investment + Government spending + (Exports − Imports). Enter five components in the same units."
        />
        <meta
          name="keywords"
          content="GDP calculator expenditure method, gross domestic product formula C I G X M, net exports calculator GDP, national accounts GDP estimator, macroeconomics GDP calculator online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GDP Calculator - C + I + G + (X − M)"
        />
        <meta
          property="og:description"
          content="Enter consumption, investment, government spending, exports, and imports to estimate GDP."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GDP Expenditure Calculator"
        />
        <meta
          name="twitter:description"
          content="Five-component GDP from national accounts identity."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "GDP Calculator",
            url: PAGE_URL,
            description:
              "Calculate GDP using consumption, investment, government spending, exports, and imports (expenditure approach).",
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
            name: "GDP Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute GDP from C, I, G, exports, and imports.",
            applicationCategory: "UtilityApplication",
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
            headline:
              "How to Calculate GDP with the Expenditure Formula C + I + G + NX",
            description:
              "Introductory guide to the expenditure identity, net exports, and using consistent units for a simple GDP estimate.",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the GDP expenditure formula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GDP = C + I + G + (X − M), where C is consumption, I is investment, G is government spending, X is exports, and M is imports. (X − M) is net exports.",
                },
              },
              {
                "@type": "Question",
                name: "Do all five inputs need the same units?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Use the same currency and time period for every component—for example all values in billions of dollars for one year.",
                },
              },
              {
                "@type": "Question",
                name: "Can net exports be negative?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. If imports exceed exports, (X − M) is negative and reduces GDP in this simplified model.",
                },
              },
              {
                "@type": "Question",
                name: "Is this the same GDP national statistical agencies publish?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Official GDP uses detailed surveys, seasonal adjustment, inventory investment, statistical discrepancy, and many definitional choices. This tool applies the textbook identity only.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between GDP and GNI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GDP measures production inside a country’s borders. GNI (or GNP) adjusts for income earned abroad by residents minus income earned domestically by non-residents.",
                },
              },
            ],
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
                name: "Other Calculators",
                item: "https://www.unitedcalculator.net/other",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "GDP Calculator",
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
              Consumption (C)
            </label>
            <input
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.consumption}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Investment (I)
            </label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.investment}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Government spending (G)
            </label>
            <input
              type="number"
              value={governmentSpending}
              onChange={(e) => setGovernmentSpending(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.governmentSpending}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Exports (X)</label>
            <input
              type="number"
              value={exports}
              onChange={(e) => setExports(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.exports}
              step="any"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Imports (M)</label>
            <input
              type="number"
              value={imports}
              onChange={(e) => setImports(e.target.value)}
              className={`${inputClassName} max-w-md`}
              placeholder={DEFAULTS.imports}
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">GDP Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">C + I (private domestic)</span>
              <span className="font-code-num text-code-num">
                {result?.privateDomestic != null && !result.error
                  ? formatNum(result.privateDomestic)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">G (government)</span>
              <span className="font-code-num text-code-num">
                {result?.governmentSpending != null && !result.error
                  ? formatNum(result.governmentSpending)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">X − M (net exports)</span>
              <span className="font-code-num text-code-num">
                {result?.netExports != null && !result.error
                  ? formatNum(result.netExports)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">GDP (C + I + G + X − M)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.gdp != null && !result.error
                  ? formatNum(result.gdp)
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              All components must use the same units (e.g. billions USD for one
              year). Textbook expenditure identity only—not seasonally adjusted
              official national accounts.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GDP_Calculator;
