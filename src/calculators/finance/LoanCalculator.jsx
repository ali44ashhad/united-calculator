import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/loan-calculator";

const DEFAULTS = {
  loanAmount: "10000",
  interestRate: "5",
  loanTerm: "5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeLoan = (loanAmount, interestRate, loanTerm) => {
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
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - P;

  return {
    loanAmount: P,
    interestRatePercent: ratePercent,
    loanTermYears: termYears,
    numberOfPayments: n,
    monthlyPayment,
    totalPayment,
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
    name: "What does the Loan Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fixed-rate amortizing loan payment: monthly payment from principal, annual interest rate, and term in years, plus total paid and total interest over the life of the loan.",
    },
  },
  {
    "@type": "Question",
    name: "What formula is used for monthly payment?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Standard amortization: M = P × r × (1+r)^n / ((1+r)^n − 1), where P is loan amount, r is monthly rate (annual ÷ 12), and n is number of monthly payments.",
    },
  },
  {
    "@type": "Question",
    name: "Does this show a full amortization schedule?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It returns summary totals only. For a payment-by-payment schedule, use the Amortization Calculator on this site.",
    },
  },
  {
    "@type": "Question",
    name: "Are fees or insurance included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Origination fees, PMI, or insurance are not added unless you include them in the loan amount you enter.",
    },
  },
  {
    "@type": "Question",
    name: "What loan types does this fit?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Personal, auto, student, or other fixed-rate installment loans with level monthly payments. Variable-rate or interest-only loans need different tools.",
    },
  },
];

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);

  const result = computeLoan(loanAmount, interestRate, loanTerm);

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTerm(DEFAULTS.loanTerm);
  };

  return (
    <>
      <Helmet>
        <title>
          Loan Calculator - Monthly Payment &amp; Total Interest
        </title>
        <meta
          name="description"
          content="Calculate monthly loan payment, total repayment, and interest for a fixed-rate installment loan from amount, annual rate, and term in years."
        />
        <meta
          name="keywords"
          content="loan calculator, monthly payment calculator, loan EMI, amortizing loan, total interest calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Loan Calculator" />
        <meta
          property="og:description"
          content="Fixed-rate loan monthly payment and total cost estimate."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loan Calculator" />
        <meta
          name="twitter:description"
          content="Monthly payment and interest for installment loans."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Loan Calculator",
            url: PAGE_URL,
            description:
              "Calculate monthly payment and total interest for fixed-rate loans.",
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
            name: "Loan Calculator",
            url: PAGE_URL,
            description:
              "Web tool for fixed-rate loan monthly payment and total interest.",
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
            headline: "How to Calculate Loan Monthly Payment",
            description:
              "Use standard amortization on principal with monthly compounding of a fixed annual rate over the loan term in years.",
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
                name: "Loan Calculator",
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
              Loan term (years)
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Loan summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Monthly payment</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyPayment)}`
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
              <span className="text-on-surface">Total interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Principal borrowed</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.loanAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Number of payments</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.numberOfPayments : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Fixed-rate amortization with monthly payments. No fee, tax, or
              insurance modeling. No payment-by-payment schedule on this page.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoanCalculator;
