import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/student-loan-calculator";

const DEFAULTS = {
  loanAmount: "30000",
  interestRate: "5",
  loanTermYears: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeStudentLoan = (loanAmount, interestRate, loanTermYears) => {
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

  const monthlyPayment = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
  const totalRepayment = monthlyPayment * n;
  const totalInterest = totalRepayment - P;

  return {
    loanAmount: P,
    interestRatePercent: ratePercent,
    loanTermYears: years,
    numberOfPayments: n,
    monthlyPayment,
    totalRepayment,
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
    name: "What does this student loan calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fixed monthly payment, total amount repaid, and total interest from loan balance, annual interest rate, and repayment term in years—standard fixed-rate amortization.",
    },
  },
  {
    "@type": "Question",
    name: "Does it model income-driven repayment (IDR) or PSLF?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Federal IDR, SAVE, PAYE, and forgiveness programs use different payment rules. Enter a monthly amount scenario only if you already know an equivalent fixed payment.",
    },
  },
  {
    "@type": "Question",
    name: "Are grace periods or deferment included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The calculator assumes repayment starts immediately for the full term you enter.",
    },
  },
  {
    "@type": "Question",
    name: "What if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Monthly payment equals the loan amount divided by the number of months in the term.",
    },
  },
  {
    "@type": "Question",
    name: "Does this show an amortization schedule?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It returns summary totals only. Use the Amortization Calculator for a payment-by-payment table.",
    },
  },
];

const StudentLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);

  const result = computeStudentLoan(loanAmount, interestRate, loanTermYears);

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTermYears(DEFAULTS.loanTermYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Student Loan Calculator - Monthly Payment &amp; Total Cost
        </title>
        <meta
          name="description"
          content="Fixed-rate student loan payment, total repaid, and interest from balance, rate, and years. Standard amortization—not IDR, grace period, or forgiveness."
        />
        <meta
          name="keywords"
          content="student loan calculator, student loan payment, education loan EMI, total student loan interest"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Student Loan Calculator" />
        <meta
          property="og:description"
          content="Monthly payment and total cost for a fixed-rate student loan balance and term."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Loan Calculator" />
        <meta
          name="twitter:description"
          content="Amortizing student loan payment and total interest."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Student Loan Calculator",
            url: PAGE_URL,
            description:
              "Calculate student loan monthly payment, total repaid, and total interest.",
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
            name: "Student Loan Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate fixed-rate student loan payments and total cost.",
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
            headline: "Student Loan Payment and Total Interest",
            description:
              "Amortize a student loan balance over a stated term at a fixed annual interest rate.",
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
                name: "Student Loan Calculator",
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
              Loan balance
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
            <label className="font-h3 text-h3 text-on-surface">
              Repayment term
            </label>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Student loan summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Monthly payment
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total repaid</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalRepayment)}`
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
              <span className="text-on-surface">Loan balance</span>
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
              Fixed-rate amortizing payment. Not income-driven repayment,
              subsidized in-school interest, grace periods, or loan forgiveness.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentLoanCalculator;
