import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/mortgage-payoff-calculator";

const DEFAULTS = {
  loanAmount: "300000",
  interestRate: "4",
  monthlyPayment: "2000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMortgagePayoff = (loanAmount, interestRate, monthlyPayment) => {
  if (
    loanAmount.trim() === "" ||
    interestRate.trim() === "" ||
    monthlyPayment.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(loanAmount);
  const ratePercent = parseFloat(interestRate);
  const M = parseFloat(monthlyPayment);
  const r = ratePercent / 100 / 12;

  if (isNaN(P) || isNaN(ratePercent) || isNaN(M) || isNaN(r)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P < 0) return { error: "Loan amount cannot be negative." };
  if (ratePercent < 0) return { error: "Interest rate cannot be negative." };
  if (M <= 0) return { error: "Monthly payment must be greater than zero." };

  if (P === 0) {
    return {
      loanAmount: 0,
      interestRatePercent: ratePercent,
      monthlyPayment: M,
      months: 0,
      years: 0,
      remainingMonths: 0,
      totalPaid: 0,
      totalInterest: 0,
    };
  }

  // With positive interest, payment must exceed first month's interest to ever pay down principal.
  if (r > 0 && M <= P * r) {
    return {
      error:
        "Monthly payment must be higher than the first month’s interest to pay off the loan.",
    };
  }

  const numPayments = r === 0 ? P / M : Math.log(M / (M - P * r)) / Math.log(1 + r);

  if (!isFinite(numPayments) || numPayments < 0) {
    return { error: "Check your inputs—payoff cannot be calculated." };
  }

  const monthsCeil = Math.ceil(numPayments);
  const years = Math.floor(monthsCeil / 12);
  const remainingMonths = monthsCeil % 12;

  const totalPaid = M * numPayments;
  const totalInterest = totalPaid - P;

  return {
    loanAmount: P,
    interestRatePercent: ratePercent,
    monthlyPayment: M,
    months: monthsCeil,
    years,
    remainingMonths,
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
    name: "What does this mortgage payoff calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates how long it takes to pay off a loan balance based on a fixed monthly payment and interest rate, plus the total interest paid and total amount repaid.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator model extra payments?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not directly. It uses the monthly payment you enter as the fixed payment. To model extra payments, increase the monthly payment amount and compare results.",
    },
  },
  {
    "@type": "Question",
    name: "Why does it say the loan can’t be paid off?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "With positive interest, your payment must be higher than the first month’s interest charge. If it isn’t, the balance won’t decrease over time.",
    },
  },
  {
    "@type": "Question",
    name: "What if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "At 0% interest, payoff time is simply the loan amount divided by the monthly payment.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include taxes, insurance, or escrow?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It models loan payoff math from principal balance, interest rate, and payment only.",
    },
  },
];

const MortgagePayoffCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [monthlyPayment, setMonthlyPayment] = useState(DEFAULTS.monthlyPayment);

  const result = computeMortgagePayoff(loanAmount, interestRate, monthlyPayment);

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setMonthlyPayment(DEFAULTS.monthlyPayment);
  };

  return (
    <>
      <Helmet>
        <title>Mortgage Payoff Calculator - Payoff Time from Monthly Payment</title>
        <meta
          name="description"
          content="Estimate how long it takes to pay off a mortgage balance using a fixed monthly payment and interest rate. See payoff time, total interest, and total repaid."
        />
        <meta
          name="keywords"
          content="mortgage payoff calculator, payoff time calculator, loan payoff calculator, pay off mortgage early, monthly payment payoff, total interest paid"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mortgage Payoff Calculator" />
        <meta
          property="og:description"
          content="Estimate payoff time, total interest, and total repaid from balance, rate, and monthly payment."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mortgage Payoff Calculator" />
        <meta
          name="twitter:description"
          content="Payoff estimate from balance, rate, and monthly payment."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mortgage Payoff Calculator",
            url: PAGE_URL,
            description:
              "Calculate payoff time, total interest, and total repaid from loan balance, interest rate, and fixed monthly payment.",
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
            name: "Mortgage Payoff Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate mortgage payoff time and total interest from a fixed monthly payment.",
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
            headline: "How Mortgage Payoff Time Is Calculated",
            description:
              "Payoff time depends on loan balance, interest rate, and the monthly payment amount.",
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
                name: "Mortgage Payoff Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
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
            <label className="font-h3 text-h3 text-on-surface">Interest rate</label>
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

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Monthly payment
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Payoff summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Time to payoff</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${result.years} years ${result.remainingMonths} months`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `$${fmtMoney(result.totalInterest)}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total repaid</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? `$${fmtMoney(result.totalPaid)}` : "—"}
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

            {result?.error && <p className="text-sm text-error">{result.error}</p>}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              This models payoff from a fixed monthly payment. Taxes, insurance,
              escrow, and payment changes over time aren’t included.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MortgagePayoffCalculator;
