import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/mortgage-calculator-uk";

const DEFAULTS = {
  loanAmount: "250000",
  interestRate: "4",
  loanTermYears: "25",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMortgageUK = (loanAmount, interestRate, loanTermYears) => {
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
  if (years <= 0) return { error: "Loan term must be greater than zero." };

  const monthlyPayment =
    r === 0
      ? P / n
      : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - P;

  return {
    loanAmount: P,
    interestRatePercent: ratePercent,
    loanTermYears: years,
    totalPayments: n,
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
    name: "Is this a free mortgage calculator UK?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. It is free to use with no signup. Enter your loan amount, rate, and term to see monthly repayment, total interest, and total repaid instantly in your browser.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate mortgage interest in the UK?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter loan amount, annual rate, and term. The calculator applies standard amortisation and shows total interest over the full term. Interest each month is charged on the remaining balance; early payments are mostly interest, later payments mostly principal.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use this as a UK home loan or property loan calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Repayment mortgages for homes in England, Scotland, Wales, and Northern Ireland use the same principal-and-interest maths. Enter the amount you borrow after your deposit.",
    },
  },
  {
    "@type": "Question",
    name: "Does this show an amortisation schedule?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page shows monthly repayment and lifetime totals. For a full month-by-month schedule, use the Mortgage Amortization Calculator on this site.",
    },
  },
  {
    "@type": "Question",
    name: "What does this UK mortgage calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates monthly principal and interest (P&I), total interest, and total repayment from the loan amount, interest rate, and term. It does not include fees, insurance, or taxes.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include stamp duty, fees, or insurance?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This calculator focuses on repayment (principal and interest) only. Upfront fees, insurance, and taxes are not included.",
    },
  },
  {
    "@type": "Question",
    name: "Is this for repayment or interest-only mortgages?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Repayment mortgages. Interest-only payments are not calculated here.",
    },
  },
  {
    "@type": "Question",
    name: "Can I compare mortgage rates with this tool?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Run the same loan amount and term at different rates to compare monthly repayments and total interest. Change the rate and note the results for each deal.",
    },
  },
  {
    "@type": "Question",
    name: "What happens if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "At 0% interest, the monthly payment is simply the loan amount divided by the number of months in the term.",
    },
  },
  {
    "@type": "Question",
    name: "Is the interest rate the same as APR?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Not necessarily. APR includes certain fees; the note rate is what drives the monthly payment.",
    },
  },
];

const MortgageCalculatorUK = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);

  const result = computeMortgageUK(loanAmount, interestRate, loanTermYears);

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTermYears(DEFAULTS.loanTermYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Free Mortgage Calculator UK | Monthly Repayment &amp; Interest
        </title>
        <meta
          name="description"
          content="Free UK mortgage calculator for monthly repayment, total interest, and total repaid. Enter loan amount, rate and term. Repayment mortgage — principal and interest only."
        />
        <meta
          name="keywords"
          content="mortgage calculator UK, free mortgage calculator UK, UK home loan calculator, mortgage interest calculator UK, mortgage rate calculator UK, property loan calculator UK, mortgage repayment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Free Mortgage Calculator UK | Monthly Repayment & Interest"
        />
        <meta
          property="og:description"
          content="Estimate UK mortgage monthly repayment, total interest, and total repaid from loan amount, rate, and term."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Mortgage Calculator UK"
        />
        <meta
          name="twitter:description"
          content="UK home loan repayment and interest estimate from loan amount, rate, and term."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Mortgage Calculator UK",
            url: PAGE_URL,
            description:
              "Free UK mortgage calculator for monthly repayment, total interest, and total repaid from loan amount, interest rate, and term.",
            inLanguage: "en-GB",
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
            "@type": "SoftwareApplication",
            name: "Mortgage Calculator UK",
            url: PAGE_URL,
            description:
              "Free web tool to estimate UK mortgage repayment, total interest, and monthly principal and interest from loan amount, rate, and term.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            inLanguage: "en-GB",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "GBP",
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
            headline:
              "How to Calculate UK Mortgage Repayment and Interest",
            description:
              "Estimate repayment mortgage monthly payment, total interest, and total repaid from loan amount, annual rate, and term in the United Kingdom.",
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
            inLanguage: "en-GB",
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
                name: "Mortgage Calculator UK",
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
                £
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

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Loan term</label>
            <input
              type="number"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.loanTermYears}
              min="1"
              step="1"
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
            Mortgage summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Monthly P&amp;I payment
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `£${fmtMoney(result.monthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `£${fmtMoney(result.totalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total repaid</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `£${fmtMoney(result.totalPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Loan amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `£${fmtMoney(result.loanAmount)}`
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

            {result?.error && <p className="text-sm text-error">{result.error}</p>}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Principal and interest only. Fees, insurance, and taxes aren’t
              included.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MortgageCalculatorUK;
