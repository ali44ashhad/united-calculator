import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/repayment-calculator";

const DEFAULTS = {
  loanAmount: "100000",
  interestRate: "7",
  loanTermYears: "5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeRepayment = (loanAmount, interestRate, loanTermYears) => {
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

  const monthlyRepayment =
    r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
  const totalRepayment = monthlyRepayment * n;
  const totalInterest = totalRepayment - P;

  return {
    loanAmount: P,
    interestRatePercent: ratePercent,
    loanTermYears: years,
    numberOfPayments: n,
    monthlyRepayment,
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
    name: "What does this repayment calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fixed-rate monthly repayment (EMI), total amount repaid, and total interest from loan amount, annual rate, and term in years.",
    },
  },
  {
    "@type": "Question",
    name: "Is repayment the same as EMI?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes for this tool—a level monthly payment that amortizes the loan over the term. Same formula as standard installment loan calculators.",
    },
  },
  {
    "@type": "Question",
    name: "Are fees included in the repayment?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not unless you add them to the loan amount. Only principal, interest rate, and term are used.",
    },
  },
  {
    "@type": "Question",
    name: "What if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Monthly repayment is the loan amount divided by the number of months in the term.",
    },
  },
  {
    "@type": "Question",
    name: "Does this plan extra payments or early payoff?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It assumes fixed scheduled payments for the full term. For payoff scenarios, use a loan payoff calculator on this site.",
    },
  },
];

const RepaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);

  const result = computeRepayment(loanAmount, interestRate, loanTermYears);

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTermYears(DEFAULTS.loanTermYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Repayment Calculator - Monthly EMI &amp; Total Interest
        </title>
        <meta
          name="description"
          content="Calculate fixed monthly loan repayment (EMI), total repaid, and total interest from amount, rate, and term. Standard amortization—no fees unless in principal."
        />
        <meta
          name="keywords"
          content="repayment calculator, loan repayment, EMI calculator, monthly repayment, total interest"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Repayment Calculator" />
        <meta
          property="og:description"
          content="Monthly repayment and total loan cost from amount, rate, and term."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Repayment Calculator" />
        <meta
          name="twitter:description"
          content="EMI and total interest for a fixed-rate loan."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Repayment Calculator",
            url: PAGE_URL,
            description:
              "Calculate monthly loan repayment, total repaid, and total interest.",
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
            name: "Repayment Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate loan monthly repayment and total cost.",
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
            headline: "Loan Repayment and EMI Calculation",
            description:
              "Amortize a fixed-rate loan balance over a stated term at an annual interest rate.",
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
                name: "Repayment Calculator",
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Repayment summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Monthly repayment (EMI)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyRepayment)}`
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
              Fixed-rate amortizing repayment. Fees and insurance are not
              included unless added to the loan amount.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RepaymentCalculator;
