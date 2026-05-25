import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/income-tax-calculator";

const CESS_RATE = 0.04;

const DEFAULTS = {
  income: "1000000",
  regime: "old",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSlabTax = (annualIncome, regime) => {
  let tax = 0;

  if (regime === "old") {
    if (annualIncome <= 250000) {
      tax = 0;
    } else if (annualIncome <= 500000) {
      tax = (annualIncome - 250000) * 0.05;
    } else if (annualIncome <= 1000000) {
      tax = 12500 + (annualIncome - 500000) * 0.2;
    } else {
      tax = 112500 + (annualIncome - 1000000) * 0.3;
    }
  } else if (annualIncome <= 300000) {
    tax = 0;
  } else if (annualIncome <= 600000) {
    tax = (annualIncome - 300000) * 0.05;
  } else if (annualIncome <= 900000) {
    tax = 15000 + (annualIncome - 600000) * 0.1;
  } else if (annualIncome <= 1200000) {
    tax = 45000 + (annualIncome - 900000) * 0.15;
  } else if (annualIncome <= 1500000) {
    tax = 90000 + (annualIncome - 1200000) * 0.2;
  } else {
    tax = 150000 + (annualIncome - 1500000) * 0.3;
  }

  return tax;
};

const computeIncomeTax = (income, regime) => {
  if (income.trim() === "") {
    return null;
  }

  const annualIncome = parseFloat(income);

  if (isNaN(annualIncome)) {
    return { error: "Enter a valid annual income amount." };
  }

  if (annualIncome < 0) {
    return { error: "Annual income cannot be negative." };
  }

  const tax = computeSlabTax(annualIncome, regime);
  const cess = tax * CESS_RATE;
  const totalTax = tax + cess;
  const effectiveRate =
    annualIncome > 0 ? (totalTax / annualIncome) * 100 : 0;
  const netIncome = annualIncome - totalTax;

  return {
    annualIncome,
    regime: regime === "old" ? "Old regime" : "New regime",
    tax,
    cess,
    totalTax,
    effectiveRate,
    netIncome,
  };
};

const fmtINR = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does this Income Tax Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates income tax from gross annual income using built-in slab rates for India's old or new tax regime, then adds 4% health and education cess. It does not accept deduction inputs.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between old and new regime here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Old regime uses lower slabs up to ₹10 lakh then 30% above ₹10 lakh. New regime uses more gradual slabs from ₹3 lakh through ₹15 lakh. Select the regime you want to compare; only one runs per calculation.",
    },
  },
  {
    "@type": "Question",
    name: "Are Section 80C or other deductions included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Tax is calculated on the full annual income you enter. Under the real old regime, deductions can lower taxable income—this tool does not model that.",
    },
  },
  {
    "@type": "Question",
    name: "What is the 4% cess?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Health and education cess is 4% of the income tax amount before cess, added to arrive at total tax payable in this calculator.",
    },
  },
  {
    "@type": "Question",
    name: "Is this official for filing returns?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Slab rates are simplified for planning. Surcharge, rebate, TDS, and annual budget updates are not included. Confirm figures with a tax professional or the Income Tax Department.",
    },
  },
];

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState(DEFAULTS.income);
  const [regime, setRegime] = useState(DEFAULTS.regime);

  const result = computeIncomeTax(income, regime);

  const reset = () => {
    setIncome(DEFAULTS.income);
    setRegime(DEFAULTS.regime);
  };

  return (
    <>
      <Helmet>
        <title>
          Income Tax Calculator - India Old &amp; New Regime Estimate
        </title>
        <meta
          name="description"
          content="Estimate India income tax from annual income under old or new tax regime slab rates plus 4% cess. Planning tool without deduction inputs."
        />
        <meta
          name="keywords"
          content="income tax calculator India, old tax regime, new tax regime, tax liability estimate, cess calculator INR"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Income Tax Calculator" />
        <meta
          property="og:description"
          content="India income tax estimate for old or new regime with 4% cess."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Income Tax Calculator" />
        <meta
          name="twitter:description"
          content="Slab-based India tax estimate in INR."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Income Tax Calculator",
            url: PAGE_URL,
            description:
              "Estimate India income tax under old or new regime from gross annual income with 4% cess.",
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
            name: "Income Tax Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate India income tax for old or new regime slab structures.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
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
            headline: "How to Estimate India Income Tax by Regime",
            description:
              "Apply progressive slab rates for old or new tax regime, add health and education cess, and compare total liability on gross annual income.",
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
                name: "Income Tax Calculator",
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
              Annual income (gross)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                ₹
              </span>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.income}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Taxable income before deductions (deductions are not entered in
              this tool)
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Tax regime</label>
            <select
              value={regime}
              onChange={(e) => setRegime(e.target.value)}
              className={inputClassName}
            >
              <option value="old">Old regime</option>
              <option value="new">New regime</option>
            </select>
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
            Income tax summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Annual income</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `₹${fmtINR(result.annualIncome)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Tax regime</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.regime : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Income tax (before cess)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `₹${fmtINR(result.tax)}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Cess (4%)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `₹${fmtINR(result.cess)}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Total tax payable</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `₹${fmtINR(result.totalTax)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Effective tax rate</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.effectiveRate.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Income after tax</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `₹${fmtINR(result.netIncome)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Slab tax plus {(CESS_RATE * 100).toFixed(0)}% health and education
              cess. No deductions, surcharge, or rebate. Run again with the other
              regime to compare.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IncomeTaxCalculator;
