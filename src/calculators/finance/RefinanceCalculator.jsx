import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/refinance-calculator";

const DEFAULTS = {
  loanAmount: "300000",
  currentRate: "7",
  currentTermYears: "30",
  newRate: "6",
  newTermYears: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeLoanScenario = (principal, ratePercent, termYears) => {
  const r = ratePercent / 100 / 12;
  const n = termYears * 12;
  const monthlyPayment = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - principal;

  return { monthlyPayment, totalPayment, totalInterest, numberOfPayments: n };
};

const computeRefinance = (
  loanAmount,
  currentRate,
  currentTermYears,
  newRate,
  newTermYears
) => {
  if (
    loanAmount.trim() === "" ||
    currentRate.trim() === "" ||
    currentTermYears.trim() === "" ||
    newRate.trim() === "" ||
    newTermYears.trim() === ""
  ) {
    return null;
  }

  const principal = parseFloat(loanAmount);
  const currentRatePercent = parseFloat(currentRate);
  const currentYears = parseFloat(currentTermYears);
  const newRatePercent = parseFloat(newRate);
  const newYears = parseFloat(newTermYears);

  if (
    isNaN(principal) ||
    isNaN(currentRatePercent) ||
    isNaN(currentYears) ||
    isNaN(newRatePercent) ||
    isNaN(newYears)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (principal < 0) {
    return { error: "Loan amount cannot be negative." };
  }

  if (currentRatePercent < 0 || newRatePercent < 0) {
    return { error: "Interest rates cannot be negative." };
  }

  if (currentYears <= 0 || newYears <= 0) {
    return { error: "Loan terms must be greater than zero years." };
  }

  const current = computeLoanScenario(principal, currentRatePercent, currentYears);
  const next = computeLoanScenario(principal, newRatePercent, newYears);
  const monthlyDifference = current.monthlyPayment - next.monthlyPayment;
  const interestDifference = current.totalInterest - next.totalInterest;

  return {
    principal,
    currentRatePercent,
    currentYears,
    newRatePercent,
    newYears,
    currentMonthlyPayment: current.monthlyPayment,
    newMonthlyPayment: next.monthlyPayment,
    monthlyDifference,
    currentTotalInterest: current.totalInterest,
    newTotalInterest: next.totalInterest,
    interestDifference,
    currentTotalPayment: current.totalPayment,
    newTotalPayment: next.totalPayment,
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
    name: "What does this refinance calculator compare?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Monthly P&I and total interest on the same loan balance under current rate/term vs new rate/term. Each side assumes full amortization over the years you enter.",
    },
  },
  {
    "@type": "Question",
    name: "Does it calculate break-even from closing costs?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Closing costs, points, and break-even months are not modeled. Compare monthly and total interest savings only.",
    },
  },
  {
    "@type": "Question",
    name: "Should I enter my remaining balance and term?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, for an existing loan use the balance you would refinance and remaining years on the current side. The new side uses the term of the replacement loan.",
    },
  },
  {
    "@type": "Question",
    name: "Can a lower rate still cost more overall?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Extending the term can lower the monthly payment but increase total interest. Check both monthly difference and total interest difference.",
    },
  },
  {
    "@type": "Question",
    name: "Are taxes, insurance, or escrow included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only principal and interest on the loan balance. Escrow and fees are excluded.",
    },
  },
];

const RefinanceCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [currentRate, setCurrentRate] = useState(DEFAULTS.currentRate);
  const [currentTermYears, setCurrentTermYears] = useState(
    DEFAULTS.currentTermYears
  );
  const [newRate, setNewRate] = useState(DEFAULTS.newRate);
  const [newTermYears, setNewTermYears] = useState(DEFAULTS.newTermYears);

  const result = computeRefinance(
    loanAmount,
    currentRate,
    currentTermYears,
    newRate,
    newTermYears
  );

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setCurrentRate(DEFAULTS.currentRate);
    setCurrentTermYears(DEFAULTS.currentTermYears);
    setNewRate(DEFAULTS.newRate);
    setNewTermYears(DEFAULTS.newTermYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Refinance Calculator - Compare Monthly P&amp;I &amp; Interest
        </title>
        <meta
          name="description"
          content="Compare current vs new loan P&I on the same balance: monthly payment and total interest. No closing costs or break-even."
        />
        <meta
          name="keywords"
          content="refinance calculator, mortgage refinance, loan refinance comparison, monthly payment savings, interest savings"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Refinance Calculator" />
        <meta
          property="og:description"
          content="Side-by-side P&I and total interest: current loan vs refinanced rate and term."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refinance Calculator" />
        <meta
          name="twitter:description"
          content="Compare refinance monthly payment and total interest."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Refinance Calculator",
            url: PAGE_URL,
            description:
              "Compare current and refinanced loan monthly P&I and total interest on the same balance.",
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
            name: "Refinance Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compare loan payments before and after refinancing.",
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
            headline: "Compare Refinance Payment and Total Interest",
            description:
              "Amortize the same loan balance at current vs new rate and term to see monthly and lifetime interest impact.",
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
                name: "Refinance Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Loan balance to refinance
          </label>
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
          <p className="text-sm text-on-surface-variant">
            Use remaining principal for an existing loan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-h3 text-h3 text-on-surface">Current loan</h3>
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">
                Interest rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(e.target.value)}
                  className={inputClassName}
                  placeholder={DEFAULTS.currentRate}
                  min="0"
                  step="any"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                  %
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">Term</label>
              <div className="relative">
                <input
                  type="number"
                  value={currentTermYears}
                  onChange={(e) => setCurrentTermYears(e.target.value)}
                  className={inputClassName}
                  placeholder={DEFAULTS.currentTermYears}
                  min="1"
                  step="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                  yrs
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-h3 text-h3 text-on-surface">New loan</h3>
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">
                Interest rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                  className={inputClassName}
                  placeholder={DEFAULTS.newRate}
                  min="0"
                  step="any"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                  %
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">Term</label>
              <div className="relative">
                <input
                  type="number"
                  value={newTermYears}
                  onChange={(e) => setNewTermYears(e.target.value)}
                  className={inputClassName}
                  placeholder={DEFAULTS.newTermYears}
                  min="1"
                  step="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                  yrs
                </span>
              </div>
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
            Refinance comparison
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Current monthly P&amp;I
              </span>
              <span className="font-code-num text-code-num text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.currentMonthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                New monthly P&amp;I
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.newMonthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly difference</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.monthlyDifference >= 0 ? "−" : "+"}$${fmtMoney(Math.abs(result.monthlyDifference))}${result.monthlyDifference >= 0 ? " lower" : " higher"}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Current total interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.currentTotalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">New total interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.newTotalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Interest difference</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.interestDifference >= 0 ? "−" : "+"}$${fmtMoney(Math.abs(result.interestDifference))}${result.interestDifference >= 0 ? " saved" : " more"}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Same balance on both sides. P&amp;I only—closing costs, points,
              escrow, and break-even are not included.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RefinanceCalculator;
