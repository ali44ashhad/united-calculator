import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/payment-calculator";

const DEFAULTS = {
  principal: "50000",
  annualRate: "5",
  termYears: "5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePayment = (principal, annualRate, termYears) => {
  if (
    principal.trim() === "" ||
    annualRate.trim() === "" ||
    termYears.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(principal);
  const ratePercent = parseFloat(annualRate);
  const years = parseFloat(termYears);
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
    principal: P,
    interestRatePercent: ratePercent,
    termYears: years,
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
    name: "What does this payment calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Fixed-rate amortizing monthly payment from loan amount, annual interest rate, and term in years, plus total paid and total interest over the life of the loan.",
    },
  },
  {
    "@type": "Question",
    name: "What formula is used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Standard amortization: M = P × r / (1 − (1+r)^−n), where P is principal, r is monthly rate (annual ÷ 12), and n is number of monthly payments.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include fees, taxes, or insurance?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only principal and interest on the loan amount you enter. Fees or insurance are not added unless you include them in the principal.",
    },
  },
  {
    "@type": "Question",
    name: "What if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "At 0% interest, the monthly payment is simply the loan amount divided by the number of months in the term.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the Loan Calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Both use the same fixed-rate amortization math. This page is a general payment estimator; the Loan Calculator on this site uses the same model with loan-focused copy.",
    },
  },
];

const PaymentCalculator = () => {
  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [annualRate, setAnnualRate] = useState(DEFAULTS.annualRate);
  const [termYears, setTermYears] = useState(DEFAULTS.termYears);

  const result = computePayment(principal, annualRate, termYears);

  const reset = () => {
    setPrincipal(DEFAULTS.principal);
    setAnnualRate(DEFAULTS.annualRate);
    setTermYears(DEFAULTS.termYears);
  };

  return (
    <>
      <Helmet>
        <title>Payment Calculator - Monthly Loan Payment Estimate</title>
        <meta
          name="description"
          content="Calculate monthly loan payment, total interest, and total paid from loan amount, interest rate, and term. Fixed-rate amortization only—no fees or insurance."
        />
        <meta
          name="keywords"
          content="payment calculator, monthly payment calculator, loan payment calculator, amortizing payment, total interest calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Payment Calculator" />
        <meta
          property="og:description"
          content="Monthly payment and total interest from loan amount, rate, and term."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Payment Calculator" />
        <meta
          name="twitter:description"
          content="Fixed-rate loan payment estimate."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Payment Calculator",
            url: PAGE_URL,
            description:
              "Calculate monthly loan payment, total interest, and total paid from principal, rate, and term.",
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
            name: "Payment Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate fixed-rate amortizing loan payments.",
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
            headline: "How to Calculate a Fixed Monthly Loan Payment",
            description:
              "Amortize a loan balance over a fixed term at a stated annual rate.",
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
                name: "Payment Calculator",
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
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.principal}
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
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.annualRate}
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
                value={termYears}
                onChange={(e) => setTermYears(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.termYears}
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
            Payment summary
          </h2>
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
              <span className="text-on-surface">Total interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total paid</span>
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
                  ? `$${fmtMoney(result.principal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rate / term</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.interestRatePercent.toFixed(3)}% • ${result.termYears} years`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Fixed-rate amortizing payment. Fees, insurance, and taxes are not
              included unless rolled into the loan amount.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PaymentCalculator;
