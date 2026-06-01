import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/mortgage-amortization-calculator";

const DEFAULTS = {
  loanAmount: "300000",
  annualInterestRate: "5",
  loanTermYears: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMortgageAmortization = (
  loanAmount,
  annualInterestRate,
  loanTermYears
) => {
  if (
    loanAmount.trim() === "" ||
    annualInterestRate.trim() === "" ||
    loanTermYears.trim() === ""
  ) {
    return null;
  }

  const principal = parseFloat(loanAmount);
  const ratePercent = parseFloat(annualInterestRate);
  const r = ratePercent / 100 / 12;
  const years = parseFloat(loanTermYears);
  const numberOfPayments = years * 12;

  if (isNaN(principal) || isNaN(r) || isNaN(years) || isNaN(numberOfPayments)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (principal < 0) {
    return { error: "Loan amount cannot be negative." };
  }

  if (years <= 0) {
    return { error: "Loan term must be greater than zero years." };
  }

  const monthlyPayment =
    r === 0 ? principal / numberOfPayments : (principal * r) / (1 - Math.pow(1 + r, -numberOfPayments));
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;
  const firstMonthInterest = r === 0 ? 0 : principal * r;
  const firstMonthPrincipal = monthlyPayment - firstMonthInterest;

  return {
    principal,
    ratePercent,
    loanTermYears: years,
    numberOfPayments,
    monthlyPayment,
    totalPayment,
    totalInterest,
    firstMonthInterest,
    firstMonthPrincipal,
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
    name: "What does the Mortgage Amortization Calculator show?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fixed-rate mortgage payment, total paid over the term, total interest, and how the first payment splits between interest and principal. It does not list every month in a full schedule table.",
    },
  },
  {
    "@type": "Question",
    name: "How is the monthly payment calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Standard amortizing formula: M = P × r / (1 − (1+r)^−n) with monthly rate r and n equal to years times 12.",
    },
  },
  {
    "@type": "Question",
    name: "Why does early interest seem high?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Interest each month is rate times remaining balance. The first payment applies the most interest because the balance is highest; principal portion grows over time.",
    },
  },
  {
    "@type": "Question",
    name: "Are property taxes and insurance included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This is principal and interest (P&I) only—not escrow for taxes, insurance, HOA, or PMI.",
    },
  },
  {
    "@type": "Question",
    name: "Where is the full amortization schedule?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page shows summary totals and month-one principal/interest split. For a general loan amortization entry point, see the Amortization Calculator on this site.",
    },
  },
];

const MortgageAmortizationCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [annualInterestRate, setAnnualInterestRate] = useState(
    DEFAULTS.annualInterestRate
  );
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);

  const result = computeMortgageAmortization(
    loanAmount,
    annualInterestRate,
    loanTermYears
  );

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setAnnualInterestRate(DEFAULTS.annualInterestRate);
    setLoanTermYears(DEFAULTS.loanTermYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Mortgage Amortization Calculator - P&amp;I Payment &amp; Totals
        </title>
        <meta
          name="description"
          content="Calculate mortgage monthly P&I payment, total interest, lifetime cost, and first-payment principal vs interest split. Summary only—no full schedule table."
        />
        <meta
          name="keywords"
          content="mortgage amortization calculator, mortgage payment breakdown, principal and interest, home loan totals"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mortgage Amortization Calculator" />
        <meta
          property="og:description"
          content="Mortgage P&I payment and amortization summary."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mortgage Amortization Calculator" />
        <meta
          name="twitter:description"
          content="Monthly payment and interest totals for mortgages."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mortgage Amortization Calculator",
            url: PAGE_URL,
            description:
              "Mortgage payment, total interest, and first-month principal/interest split.",
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
            name: "Mortgage Amortization Calculator",
            url: PAGE_URL,
            description:
              "Web tool for mortgage P&I payment and amortization summary totals.",
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
            headline: "Mortgage Amortization: Payment and Interest Over Time",
            description:
              "Level monthly P&I payments with early months weighted toward interest as balance declines.",
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
                name: "Mortgage Amortization Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Loan amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.loanAmount}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual interest rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.annualInterestRate}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Loan term (years)
            </label>
            <input
              type="number"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.loanTermYears}
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
            Mortgage amortization summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Monthly P&amp;I payment
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total payment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">First payment — interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.firstMonthInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">First payment — principal</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.firstMonthPrincipal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Loan amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.principal)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Principal and interest only. No month-by-month schedule table,
              taxes, insurance, or PMI. Extra payments not modeled.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MortgageAmortizationCalculator;
