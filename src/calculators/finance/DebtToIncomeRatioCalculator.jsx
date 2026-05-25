import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator";

const DEFAULTS = {
  monthlyDebtPayments: "1500",
  grossMonthlyIncome: "6000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const getCategory = (dti) => {
  if (dti < 20) return "Excellent";
  if (dti < 35) return "Good";
  if (dti < 50) return "Fair";
  return "Poor";
};

const computeDTI = (monthlyDebtPayments, grossMonthlyIncome) => {
  if (
    monthlyDebtPayments.trim() === "" ||
    grossMonthlyIncome.trim() === ""
  ) {
    return null;
  }

  const debt = parseFloat(monthlyDebtPayments);
  const income = parseFloat(grossMonthlyIncome);

  if (isNaN(debt) || isNaN(income)) {
    return { error: "Enter valid numbers for debt payments and income." };
  }

  if (debt < 0 || income < 0) {
    return { error: "Values cannot be negative." };
  }

  if (income === 0) {
    return { error: "Gross monthly income must be greater than zero." };
  }

  const dti = (debt / income) * 100;

  return {
    dti,
    category: getCategory(dti),
    debt,
    income,
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
    name: "What is debt-to-income ratio?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Debt-to-income (DTI) is the percentage of gross monthly income used for monthly debt payments. This calculator uses total monthly debt obligations divided by gross monthly income, which lenders often call back-end DTI.",
    },
  },
  {
    "@type": "Question",
    name: "What debts should I include in monthly payments?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Include recurring obligations lenders count: mortgage or rent, auto loans, student loans, minimum credit card payments, personal loans, and alimony or child support if applicable. Utilities and groceries are usually excluded.",
    },
  },
  {
    "@type": "Question",
    name: "Why do lenders care about DTI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A lower DTI suggests more room in your budget for a new loan payment. Many mortgage programs look for back-end DTI around 43% or lower, though exact limits vary by lender and loan type.",
    },
  },
  {
    "@type": "Question",
    name: "Should I use gross or net income?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use gross monthly income before taxes, which is what most lenders use for DTI. For take-home pay estimates, use an income tax calculator separately.",
    },
  },
  {
    "@type": "Question",
    name: "What do the rating categories mean?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool labels under 20% as Excellent, 20% to under 35% as Good, 35% to under 50% as Fair, and 50% or higher as Poor. Lender thresholds differ; treat these labels as general guidance only.",
    },
  },
];

const DebtToIncomeRatioCalculator = () => {
  const [monthlyDebtPayments, setMonthlyDebtPayments] = useState(
    DEFAULTS.monthlyDebtPayments
  );
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState(
    DEFAULTS.grossMonthlyIncome
  );

  const result = computeDTI(monthlyDebtPayments, grossMonthlyIncome);

  const reset = () => {
    setMonthlyDebtPayments(DEFAULTS.monthlyDebtPayments);
    setGrossMonthlyIncome(DEFAULTS.grossMonthlyIncome);
  };

  return (
    <>
      <Helmet>
        <title>
          Debt-to-Income Ratio Calculator - Back-End DTI Percent
        </title>
        <meta
          name="description"
          content="Calculate back-end debt-to-income ratio from total monthly debt payments and gross monthly income. See your DTI percent and a simple rating."
        />
        <meta
          name="keywords"
          content="debt to income ratio calculator, DTI calculator, back end DTI, mortgage DTI calculator, loan eligibility DTI, monthly debt to income"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Debt-to-Income Ratio Calculator"
        />
        <meta
          property="og:description"
          content="Find your DTI percent from monthly debt payments and gross income."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Debt-to-Income Ratio Calculator"
        />
        <meta
          name="twitter:description"
          content="Back-end DTI estimate for borrowing and budgeting."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Debt-to-Income Ratio Calculator",
            url: PAGE_URL,
            description:
              "Calculate back-end debt-to-income ratio from total monthly debt payments and gross monthly income.",
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
            name: "Debt-to-Income Ratio Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute DTI percent and a simple rating from monthly debts and gross income.",
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
            headline: "How to Calculate Back-End Debt-to-Income Ratio",
            description:
              "Divide total monthly debt payments by gross monthly income and multiply by 100 for DTI percent.",
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
                name: "Debt-to-Income Ratio Calculator",
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
              Total monthly debt payments
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyDebtPayments}
                onChange={(e) => setMonthlyDebtPayments(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyDebtPayments}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Sum of housing, loans, card minimums, and other recurring debt
              payments lenders count.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Gross monthly income
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={grossMonthlyIncome}
                onChange={(e) => setGrossMonthlyIncome(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.grossMonthlyIncome}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Pre-tax income before deductions.
            </p>
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
            Debt-to-income summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Back-end DTI</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${result.dti.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rating</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.category : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly debt payments</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.debt)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gross monthly income</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.income)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Formula: (total monthly debt payments ÷ gross monthly income) ×
              100. This is back-end DTI, not a separate front-end housing-only
              ratio. Lender limits vary by program.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DebtToIncomeRatioCalculator;
