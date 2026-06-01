import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/loan-payoff-calculator";

const DEFAULTS = {
  loanAmount: "50000",
  interestRate: "6",
  loanTerm: "5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeLoanPayoff = (loanAmount, interestRate, loanTerm) => {
  if (
    loanAmount.trim() === "" ||
    interestRate.trim() === "" ||
    loanTerm.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(loanAmount);
  const ratePercent = parseFloat(interestRate);
  const r = ratePercent / 100 / 12;
  const termYears = parseFloat(loanTerm);
  const n = termYears * 12;

  if (isNaN(P) || isNaN(r) || isNaN(termYears) || isNaN(n)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) {
    return { error: "Loan amount cannot be negative." };
  }

  if (termYears <= 0) {
    return { error: "Loan term must be greater than zero years." };
  }

  const monthlyPayment = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
  const totalPaid = monthlyPayment * n;
  const totalInterest = totalPaid - P;

  return {
    loanAmount: P,
    interestRatePercent: ratePercent,
    loanTermYears: termYears,
    numberOfPayments: n,
    monthlyPayment,
    totalPaid,
    totalInterest,
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
    name: "What does the Loan Payoff Calculator show?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Scheduled payoff on a fixed-rate loan: monthly payment, total amount paid over the full term, and total interest—assuming you pay only the required monthly amount with no extra principal payments.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculate early payoff with extra payments?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Extra monthly payments or lump-sum paydowns are not modeled. Use the Debt Payoff Calculator for accelerated payoff scenarios with additional payments.",
    },
  },
  {
    "@type": "Question",
    name: "How is payoff date determined?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Payoff occurs after the number of monthly payments in your entered term (years × 12) when paying the calculated monthly payment each month.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the Loan Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Both use the same fixed-rate amortization formula. This page is framed around total paid and interest over the life of the loan; defaults differ.",
    },
  },
  {
    "@type": "Question",
    name: "What loans does this apply to?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Personal, auto, student, or other level-payment fixed-rate installment loans. Variable rates, interest-only periods, and fees are not included unless you adjust the principal.",
    },
  },
];

const LoanPayoffCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);

  const result = computeLoanPayoff(loanAmount, interestRate, loanTerm);

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTerm(DEFAULTS.loanTerm);
  };

  return (
    <>
      <Helmet>
        <title>
          Loan Payoff Calculator - Total Paid &amp; Interest on Schedule
        </title>
        <meta
          name="description"
          content="See monthly payment, total amount paid, and interest to pay off a fixed-rate loan on schedule. No extra-payment modeling—minimum payments only."
        />
        <meta
          name="keywords"
          content="loan payoff calculator, total loan cost, loan interest total, amortizing loan payoff, debt schedule calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Loan Payoff Calculator" />
        <meta
          property="og:description"
          content="Total paid and interest for scheduled loan payoff."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loan Payoff Calculator" />
        <meta
          name="twitter:description"
          content="Minimum-payment loan payoff totals."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Loan Payoff Calculator",
            url: PAGE_URL,
            description:
              "Calculate scheduled loan payoff: monthly payment, total paid, and interest.",
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
            name: "Loan Payoff Calculator",
            url: PAGE_URL,
            description:
              "Web tool for fixed-rate loan payoff totals on minimum payments.",
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
            headline: "How Much Will You Pay to Pay Off a Loan on Schedule?",
            description:
              "Amortize principal at a fixed annual rate to find monthly payment and lifetime interest if you never pay extra.",
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
                name: "Loan Payoff Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Loan balance</label>
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
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.interestRate}
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
              Term to payoff (years)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.loanTerm}
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
            Loan payoff summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Total amount paid</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalPaid)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly payment</span>
              <span className="font-code-num text-code-num">
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
              <span className="text-on-surface">Principal / loan balance</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.loanAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Payments until payoff</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.numberOfPayments : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Scheduled payoff at the minimum monthly payment for the full
              term—no extra principal payments modeled.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoanPayoffCalculator;
