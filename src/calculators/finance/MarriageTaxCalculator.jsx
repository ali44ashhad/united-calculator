import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/marriage-tax-calculator";

const FLAT_RATE = 0.22;

const DEFAULTS = {
  singleIncome: "50000",
  spouseIncome: "40000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMarriageTax = (singleIncome, spouseIncome) => {
  if (singleIncome.trim() === "" || spouseIncome.trim() === "") {
    return null;
  }

  const income1 = parseFloat(singleIncome);
  const income2 = parseFloat(spouseIncome);

  if (isNaN(income1) || isNaN(income2)) {
    return { error: "Enter valid numbers for both incomes." };
  }

  if (income1 < 0 || income2 < 0) {
    return { error: "Incomes cannot be negative." };
  }

  const totalIncome = income1 + income2;
  const taxSeparate = income1 * FLAT_RATE + income2 * FLAT_RATE;
  const taxMarriedJoint = totalIncome * FLAT_RATE;
  const marriageBonus = taxSeparate - taxMarriedJoint;

  return {
    income1,
    income2,
    totalIncome,
    taxSeparate,
    taxMarriedJoint,
    marriageBonus,
    flatRatePercent: FLAT_RATE * 100,
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
    name: "What does this Marriage Tax Calculator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It compares estimated tax using a flat 22% rate on each spouse's income separately versus 22% on their combined income. It is a simplified illustration, not IRS bracket math.",
    },
  },
  {
    "@type": "Question",
    name: "Why is the marriage bonus often zero here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "With the same flat percentage applied to each income separately and to the combined total, the tax amounts are equal. Real marriage bonuses or penalties come from different tax brackets and deductions for filing status.",
    },
  },
  {
    "@type": "Question",
    name: "Does this use current federal tax brackets?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It uses one fixed 22% rate on gross income with no standard deduction, credits, or married filing separately option.",
    },
  },
  {
    "@type": "Question",
    name: "What is marriage bonus vs penalty?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Bonus (positive value here) means separate taxation at the model rate would cost more than taxing combined income—i.e., joint filing saves tax in this comparison. Penalty is the opposite.",
    },
  },
  {
    "@type": "Question",
    name: "Should we file jointly or separately?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool does not model married filing separately or itemized deductions. Consult a tax professional or IRS publications for your actual filing choice.",
    },
  },
];

const MarriageTaxCalculator = () => {
  const [singleIncome, setSingleIncome] = useState(DEFAULTS.singleIncome);
  const [spouseIncome, setSpouseIncome] = useState(DEFAULTS.spouseIncome);

  const result = computeMarriageTax(singleIncome, spouseIncome);

  const reset = () => {
    setSingleIncome(DEFAULTS.singleIncome);
    setSpouseIncome(DEFAULTS.spouseIncome);
  };

  return (
    <>
      <Helmet>
        <title>
          Marriage Tax Calculator - Flat-Rate Filing Comparison
        </title>
        <meta
          name="description"
          content="Compare simplified tax on two incomes taxed separately vs combined at a flat 22% rate. Illustrative only—not IRS brackets or deductions."
        />
        <meta
          name="keywords"
          content="marriage tax calculator, married filing jointly estimate, single vs married tax comparison, marriage penalty illustration"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Marriage Tax Calculator" />
        <meta
          property="og:description"
          content="Simplified separate vs joint tax comparison at 22%."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marriage Tax Calculator" />
        <meta
          name="twitter:description"
          content="Flat-rate marriage tax comparison demo."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Marriage Tax Calculator",
            url: PAGE_URL,
            description:
              "Simplified comparison of tax on two incomes separately vs combined using a flat rate.",
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
            name: "Marriage Tax Calculator",
            url: PAGE_URL,
            description:
              "Web tool comparing flat-rate tax on separate vs combined spousal income.",
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
            headline: "Marriage and Taxes: Simplified Separate vs Joint Comparison",
            description:
              "At a single flat rate, taxing each income separately versus one combined pool produces the same total when rates match.",
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
                name: "Marriage Tax Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Your income</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={singleIncome}
                onChange={(e) => setSingleIncome(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.singleIncome}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Spouse&apos;s income
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={spouseIncome}
                onChange={(e) => setSpouseIncome(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.spouseIncome}
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Tax comparison</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Tax (each income at {FLAT_RATE * 100}%)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.taxSeparate)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Tax (combined income at {FLAT_RATE * 100}%)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.taxMarriedJoint)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Difference (separate − combined)
              </span>
              <span
                className={`font-code-num text-code-num text-lg ${
                  result && !result.error
                    ? result.marriageBonus >= 0
                      ? "text-primary"
                      : "text-error"
                    : ""
                }`}
              >
                {result && !result.error
                  ? `${result.marriageBonus >= 0 ? "+" : "−"}$${fmtMoney(
                      Math.abs(result.marriageBonus)
                    )}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Combined income</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalIncome)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Uses a flat {(FLAT_RATE * 100).toFixed(0)}% on gross income only—no
              IRS brackets, deductions, credits, or married filing separately.
              With one rate on the same total income, separate and combined tax
              are equal.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarriageTaxCalculator;
