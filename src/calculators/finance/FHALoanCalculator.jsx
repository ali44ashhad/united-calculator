import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/fha-loan-calculator";

const DEFAULTS = {
  homePrice: "300000",
  downPaymentPercent: "3.5",
  loanTerm: "30",
  interestRate: "6.5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const monthlyPayment = (principal, annualRatePercent, termYears) => {
  const r = annualRatePercent / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
};

const computeFHALoan = (
  homePrice,
  downPaymentPercent,
  loanTerm,
  interestRate
) => {
  if (
    homePrice.trim() === "" ||
    downPaymentPercent.trim() === "" ||
    loanTerm.trim() === "" ||
    interestRate.trim() === ""
  ) {
    return null;
  }

  const price = parseFloat(homePrice);
  const downPercent = parseFloat(downPaymentPercent) / 100;
  const termYears = parseFloat(loanTerm);
  const annualRate = parseFloat(interestRate);

  if (
    isNaN(price) ||
    isNaN(downPercent) ||
    isNaN(termYears) ||
    isNaN(annualRate)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (price <= 0 || termYears <= 0) {
    return {
      error: "Home price and loan term must be greater than zero.",
    };
  }

  if (downPercent < 0 || downPercent >= 1) {
    return { error: "Down payment must be between 0% and under 100%." };
  }

  if (annualRate < 0) {
    return { error: "Interest rate cannot be negative." };
  }

  const downPayment = price * downPercent;
  const loanAmount = price - downPayment;
  const payment = monthlyPayment(loanAmount, annualRate, termYears);
  const totalMonths = termYears * 12;
  const totalPayment = payment * totalMonths;
  const totalInterest = totalPayment - loanAmount;
  const ltv = (loanAmount / price) * 100;

  return {
    downPayment,
    loanAmount,
    monthlyPayment: payment,
    totalInterest,
    totalPayment,
    ltv,
    homePrice: price,
    downPaymentPercent: parseFloat(downPaymentPercent),
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
    name: "What does the FHA Loan Calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates down payment, loan amount, monthly principal and interest payment, and total interest using standard amortization. FHA mortgage insurance (MIP), property taxes, and homeowners insurance are not included.",
    },
  },
  {
    "@type": "Question",
    name: "What is the minimum FHA down payment?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Many FHA loans allow as little as 3.5% down for eligible borrowers. The default in this tool is 3.5%, but you can change the percent to match your scenario.",
    },
  },
  {
    "@type": "Question",
    name: "Is the monthly payment the full housing payment?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The result is principal and interest only. Budget separately for FHA upfront and annual mortgage insurance, taxes, insurance, HOA, and maintenance.",
    },
  },
  {
    "@type": "Question",
    name: "How is the monthly payment calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Payment equals loan amount times monthly rate times (1 plus monthly rate) to the power of total months, divided by that power minus 1—the standard fixed-rate mortgage formula.",
    },
  },
  {
    "@type": "Question",
    name: "How does FHA differ from a conventional loan?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "FHA loans are government-insured and often have lower down payment requirements but require mortgage insurance. Compare scenarios with the Mortgage Calculator using different down payments and rates.",
    },
  },
];

const FHALoanCalculator = () => {
  const [homePrice, setHomePrice] = useState(DEFAULTS.homePrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(
    DEFAULTS.downPaymentPercent
  );
  const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);

  const result = computeFHALoan(
    homePrice,
    downPaymentPercent,
    loanTerm,
    interestRate
  );

  const reset = () => {
    setHomePrice(DEFAULTS.homePrice);
    setDownPaymentPercent(DEFAULTS.downPaymentPercent);
    setLoanTerm(DEFAULTS.loanTerm);
    setInterestRate(DEFAULTS.interestRate);
  };

  return (
    <>
      <Helmet>
        <title>
          FHA Loan Calculator - Payment, Loan Amount & Interest
        </title>
        <meta
          name="description"
          content="Estimate FHA loan down payment, loan amount, and monthly principal and interest from home price, down payment percent, rate, and term. P&I only—MIP and taxes extra."
        />
        <meta
          name="keywords"
          content="FHA loan calculator, FHA mortgage payment, 3.5 percent down payment, FHA monthly payment estimate, first time home buyer calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FHA Loan Calculator" />
        <meta
          property="og:description"
          content="FHA-style down payment and principal-and-interest payment estimate."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FHA Loan Calculator" />
        <meta
          name="twitter:description"
          content="Monthly P&I for an FHA-style low down payment loan."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "FHA Loan Calculator",
            url: PAGE_URL,
            description:
              "Estimate FHA loan down payment, financed amount, and monthly principal and interest payment.",
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
            name: "FHA Loan Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate FHA mortgage principal and interest from home price, down payment, rate, and term.",
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
            headline: "How to Estimate an FHA Mortgage Payment",
            description:
              "Subtract down payment from price for loan amount, then apply the fixed-rate amortization formula for monthly principal and interest.",
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
                name: "FHA Loan Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Home price</label>
            <div className="relative max-w-full md:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.homePrice}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Down payment
            </label>
            <div className="relative">
              <input
                type="number"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.downPaymentPercent}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              FHA minimum is often 3.5% for eligible buyers.
            </p>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            FHA loan summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Monthly payment (P&amp;I)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Down payment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.downPayment)}`
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
              <span className="text-on-surface">LTV</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.ltv.toFixed(2)}%`
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
              <span className="text-on-surface">Total paid (P&amp;I)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalPayment)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Principal and interest only. FHA loans typically require
              mortgage insurance premiums (upfront and monthly), plus property
              taxes and homeowners insurance in your full housing payment.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FHALoanCalculator;
