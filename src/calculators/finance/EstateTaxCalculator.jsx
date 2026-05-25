import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/estate-tax-calculator";

const DEFAULTS = {
  estateValue: "2000000",
  exemptionLimit: "1000000",
  taxRate: "40",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeEstateTax = (estateValue, exemptionLimit, taxRate) => {
  if (
    estateValue.trim() === "" ||
    exemptionLimit.trim() === "" ||
    taxRate.trim() === ""
  ) {
    return null;
  }

  const value = parseFloat(estateValue);
  const exemption = parseFloat(exemptionLimit);
  const rate = parseFloat(taxRate) / 100;

  if (isNaN(value) || isNaN(exemption) || isNaN(rate)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (value < 0 || exemption < 0) {
    return { error: "Estate value and exemption cannot be negative." };
  }

  if (rate < 0 || rate > 1) {
    return { error: "Tax rate must be between 0 and 100 percent." };
  }

  const taxableAmount = Math.max(0, value - exemption);
  const taxDue = taxableAmount * rate;

  return {
    taxableAmount,
    taxDue,
    estateValue: value,
    exemptionLimit: exemption,
    taxRatePercent: parseFloat(taxRate),
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
    name: "What does the Estate Tax Calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It subtracts an exemption amount from total estate value to get taxable estate, then multiplies by the tax rate you enter. It is a simplified flat-rate model, not the full federal bracket schedule.",
    },
  },
  {
    "@type": "Question",
    name: "What is the exemption limit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The exemption is the portion of the estate not subject to tax in this calculator—often analogous to a federal lifetime exclusion or similar threshold. Enter the amount that applies to your scenario.",
    },
  },
  {
    "@type": "Question",
    name: "Who pays estate tax?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Generally the estate pays tax before assets pass to heirs when value exceeds applicable exemptions. State inheritance or estate taxes may also apply separately.",
    },
  },
  {
    "@type": "Question",
    name: "Does this use current IRS brackets?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. U.S. federal estate tax uses progressive rates above the exclusion. Here you supply one flat rate for a quick estimate; update exemption and rate to match your jurisdiction or advisor inputs.",
    },
  },
  {
    "@type": "Question",
    name: "What if estate value is below the exemption?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Taxable estate is zero and estimated tax due is zero. The tool uses max(0, estate value minus exemption).",
    },
  },
];

const EstateTaxCalculator = () => {
  const [estateValue, setEstateValue] = useState(DEFAULTS.estateValue);
  const [exemptionLimit, setExemptionLimit] = useState(DEFAULTS.exemptionLimit);
  const [taxRate, setTaxRate] = useState(DEFAULTS.taxRate);

  const result = computeEstateTax(estateValue, exemptionLimit, taxRate);

  const reset = () => {
    setEstateValue(DEFAULTS.estateValue);
    setExemptionLimit(DEFAULTS.exemptionLimit);
    setTaxRate(DEFAULTS.taxRate);
  };

  return (
    <>
      <Helmet>
        <title>
          Estate Tax Calculator - Taxable Estate & Estimated Tax Due
        </title>
        <meta
          name="description"
          content="Estimate taxable estate and tax due from total estate value, exemption amount, and tax rate. Simplified flat-rate model for estate planning."
        />
        <meta
          name="keywords"
          content="estate tax calculator, taxable estate calculator, inheritance tax estimate, estate exemption calculator, federal estate tax estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Estate Tax Calculator" />
        <meta
          property="og:description"
          content="Calculate taxable estate and estimated tax from value, exemption, and rate."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estate Tax Calculator" />
        <meta
          name="twitter:description"
          content="Simplified estate tax estimate for planning."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Estate Tax Calculator",
            url: PAGE_URL,
            description:
              "Estimate taxable estate and tax due using total value, exemption limit, and a flat tax rate.",
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
            name: "Estate Tax Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate estate tax from value, exemption, and flat rate.",
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
            headline: "How to Estimate Estate Tax with an Exemption and Flat Rate",
            description:
              "Taxable estate equals total value minus exemption (not below zero). Tax due equals taxable estate times the rate you enter.",
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
                name: "Estate Tax Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Total estate value
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={estateValue}
                onChange={(e) => setEstateValue(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.estateValue}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Exemption limit
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={exemptionLimit}
                onChange={(e) => setExemptionLimit(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.exemptionLimit}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Tax rate</label>
            <div className="relative">
              <input
                type="number"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.taxRate}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
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
            Estate tax summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Taxable estate</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.taxableAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated tax due</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.taxDue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gross estate value</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.estateValue)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Exemption applied</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.exemptionLimit)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simplified model: one flat rate on the amount above your exemption.
              Federal law uses progressive brackets and rules for deductions,
              gifts, and portability—confirm figures with a tax professional.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default EstateTaxCalculator;
