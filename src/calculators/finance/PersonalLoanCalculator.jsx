import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/personal-loan-calculator";

const DEFAULTS = {
  loanAmount: "25000",
  interestRate: "12",
  loanTermYears: "5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePersonalLoan = (loanAmount, interestRate, loanTermYears) => {
  if (
    loanAmount.trim() === "" ||
    interestRate.trim() === "" ||
    loanTermYears.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(loanAmount);
  const ratePercent = parseFloat(interestRate);
  const years = parseFloat(loanTermYears);
  const r = ratePercent / 100 / 12;
  const n = years * 12;

  if (isNaN(P) || isNaN(ratePercent) || isNaN(years) || isNaN(r) || isNaN(n)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) return { error: "Loan amount cannot be negative." };
  if (ratePercent < 0) return { error: "Interest rate cannot be negative." };
  if (years <= 0) return { error: "Loan term must be greater than zero years." };

  const monthlyPayment =
    r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - P;

  return {
    loanAmount: P,
    interestRatePercent: ratePercent,
    loanTermYears: years,
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
    name: "What does this personal loan calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fixed-rate monthly payment (EMI), total interest, and total repaid from loan amount, annual interest rate, and term in years.",
    },
  },
  {
    "@type": "Question",
    name: "What is EMI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Equated monthly installment—a level payment each month that amortizes the loan over the term. Same math as a standard installment loan payment.",
    },
  },
  {
    "@type": "Question",
    name: "Are origination fees included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not unless you add them to the loan amount you enter. The calculator uses principal, rate, and term only.",
    },
  },
  {
    "@type": "Question",
    name: "What if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The monthly payment is the loan amount divided by the number of months in the term.",
    },
  },
  {
    "@type": "Question",
    name: "Does this show an amortization schedule?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It returns summary totals only. For a payment-by-payment schedule, use the Amortization Calculator on this site.",
    },
  },
];

const PersonalLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);

  const result = computePersonalLoan(loanAmount, interestRate, loanTermYears);

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTermYears(DEFAULTS.loanTermYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Personal Loan Calculator - Monthly Payment &amp; Total Interest
        </title>
        <meta
          name="description"
          content="Estimate personal loan monthly payment (EMI), total interest, and total repaid from amount, rate, and term. Fixed-rate amortization—no fees unless in principal."
        />
        <meta
          name="keywords"
          content="personal loan calculator, loan EMI calculator, monthly payment calculator, personal loan interest, installment loan payment"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Personal Loan Calculator" />
        <meta
          property="og:description"
          content="Monthly payment and total interest for a personal loan."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Personal Loan Calculator" />
        <meta
          name="twitter:description"
          content="EMI and total cost from amount, rate, and term."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Personal Loan Calculator",
            url: PAGE_URL,
            description:
              "Calculate personal loan monthly payment, total interest, and total repaid.",
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
            name: "Personal Loan Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate personal loan EMI and total interest.",
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
            headline: "Personal Loan Monthly Payment Calculation",
            description:
              "Amortize a personal loan balance over a fixed term at a stated annual rate.",
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
                name: "Personal Loan Calculator",
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
              Interest rate
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
            <label className="font-h3 text-h3 text-on-surface">Loan term</label>
            <div className="relative">
              <input
                type="number"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.loanTermYears}
                min="1"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                yrs
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Loan summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Monthly payment (EMI)
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
              <span className="text-on-surface">Total repaid</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Loan amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.loanAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rate / term</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.interestRatePercent.toFixed(3)}% • ${result.loanTermYears} years`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Fixed-rate amortizing payment. Origination fees and insurance are
              not included unless added to the loan amount.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PersonalLoanCalculator;
