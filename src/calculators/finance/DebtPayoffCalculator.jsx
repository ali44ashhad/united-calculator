import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/debt-payoff-calculator";

const DEFAULTS = {
  debtAmount: "10000",
  annualInterestRate: "12",
  monthlyPayment: "500",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePayoff = (debtAmount, annualInterestRate, monthlyPayment) => {
  if (
    debtAmount.trim() === "" ||
    annualInterestRate.trim() === "" ||
    monthlyPayment.trim() === ""
  ) {
    return null;
  }

  const principal = parseFloat(debtAmount);
  const monthlyRate = parseFloat(annualInterestRate) / 100 / 12;
  const monthlyPay = parseFloat(monthlyPayment);

  if (isNaN(principal) || isNaN(monthlyRate) || isNaN(monthlyPay)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (principal <= 0 || monthlyPay <= 0) {
    return {
      error: "Debt amount and monthly payment must be greater than zero.",
    };
  }

  if (parseFloat(annualInterestRate) < 0) {
    return { error: "Interest rate cannot be negative." };
  }

  if (monthlyRate > 0 && monthlyPay <= principal * monthlyRate) {
    return {
      error: "Monthly payment is too low to cover interest on this balance.",
    };
  }

  let balance = principal;
  let months = 0;
  let totalPaid = 0;

  while (balance > 0 && months < 1000) {
    const interest = balance * monthlyRate;
    balance = balance + interest - monthlyPay;
    if (balance < 0) balance = 0;
    totalPaid += monthlyPay;
    months++;
  }

  return {
    months,
    totalInterest: totalPaid - principal,
    totalPaid,
    principal,
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
    name: "What does the Debt Payoff Calculator show?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates how many months a fixed monthly payment takes to clear one debt balance, plus total amount paid and total interest, using monthly compounding on the remaining balance.",
    },
  },
  {
    "@type": "Question",
    name: "Does this compare snowball and avalanche methods?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This version models one balance with one steady payment. Snowball and avalanche apply when you prioritize multiple debts; run the calculator separately for each account or use the Credit Cards Payoff Calculator for several cards.",
    },
  },
  {
    "@type": "Question",
    name: "Why does it say my payment is too low?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If the monthly payment does not exceed the first month's interest charge, the balance cannot shrink. Increase the payment above that interest amount.",
    },
  },
  {
    "@type": "Question",
    name: "How is interest calculated each month?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Each month, interest equals the remaining balance times the annual rate divided by 12. The new balance is the old balance plus interest minus your payment, repeated until the balance reaches zero.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use this for loans and credit cards?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, as long as you treat the account like a fixed payment plan with no new charges. Revolving cards with minimums that change need careful assumptions; the Credit Card Calculator uses the same monthly-update logic for one card.",
    },
  },
];

const DebtPayoffCalculator = () => {
  const [debtAmount, setDebtAmount] = useState(DEFAULTS.debtAmount);
  const [annualInterestRate, setAnnualInterestRate] = useState(
    DEFAULTS.annualInterestRate
  );
  const [monthlyPayment, setMonthlyPayment] = useState(DEFAULTS.monthlyPayment);

  const result = computePayoff(debtAmount, annualInterestRate, monthlyPayment);

  const reset = () => {
    setDebtAmount(DEFAULTS.debtAmount);
    setAnnualInterestRate(DEFAULTS.annualInterestRate);
    setMonthlyPayment(DEFAULTS.monthlyPayment);
  };

  return (
    <>
      <Helmet>
        <title>
          Debt Payoff Calculator - Months, Interest & Total Paid
        </title>
        <meta
          name="description"
          content="Estimate how long a fixed monthly payment takes to pay off one debt. See months to debt-free, total interest, and total amount paid."
        />
        <meta
          name="keywords"
          content="debt payoff calculator, loan payoff calculator, debt free date calculator, fixed payment debt calculator, interest on debt calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Debt Payoff Calculator" />
        <meta
          property="og:description"
          content="See payoff months and total interest for one debt with a steady monthly payment."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Debt Payoff Calculator" />
        <meta
          name="twitter:description"
          content="Single-debt payoff timeline with balance, APR, and monthly payment."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Debt Payoff Calculator",
            url: PAGE_URL,
            description:
              "Calculate months to pay off one debt with a fixed monthly payment, including total interest and total paid.",
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
            name: "Debt Payoff Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate debt payoff time and interest with fixed monthly payments.",
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
            headline: "How to Estimate Payoff Time for a Single Debt",
            description:
              "Apply monthly interest to the balance, subtract a fixed payment each month, and count months until the balance reaches zero.",
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
                name: "Debt Payoff Calculator",
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
              Total debt amount
            </label>
            <div className="relative max-w-full md:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={debtAmount}
                onChange={(e) => setDebtAmount(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.debtAmount}
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
              Fixed monthly payment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyPayment}
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Debt payoff summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Months to pay off</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error ? result.months : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest paid</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total amount paid</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalPaid)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Starting balance</span>
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
              Models one debt with the same payment every month. Interest accrues
              on the remaining balance; new charges and changing minimums are not
              included. For several cards, use the Credit Cards Payoff Calculator.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DebtPayoffCalculator;
