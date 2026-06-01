import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/mortgage-calculator";

const DEFAULTS = {
  homePrice: "500000",
  downPayment: "100000",
  loanTermYears: "30",
  interestRate: "4",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMortgage = (homePrice, downPayment, loanTermYears, interestRate) => {
  if (
    homePrice.trim() === "" ||
    downPayment.trim() === "" ||
    loanTermYears.trim() === "" ||
    interestRate.trim() === ""
  ) {
    return null;
  }

  const price = parseFloat(homePrice);
  const down = parseFloat(downPayment);
  const years = parseFloat(loanTermYears);
  const ratePercent = parseFloat(interestRate);
  const r = ratePercent / 100 / 12;
  const totalPayments = years * 12;

  if (isNaN(price) || isNaN(down) || isNaN(years) || isNaN(r) || isNaN(totalPayments)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (price < 0 || down < 0) {
    return { error: "Home price and down payment cannot be negative." };
  }

  if (down > price) {
    return { error: "Down payment cannot exceed home price." };
  }

  if (years <= 0) {
    return { error: "Loan term must be greater than zero years." };
  }

  const loanAmount = price - down;
  const downPaymentPercent = price > 0 ? (down / price) * 100 : 0;

  const monthlyPayment =
    r === 0
      ? loanAmount / totalPayments
      : (loanAmount * r) / (1 - Math.pow(1 + r, -totalPayments));
  const totalPayment = monthlyPayment * totalPayments;
  const totalInterest = totalPayment - loanAmount;

  return {
    homePrice: price,
    downPayment: down,
    loanAmount,
    downPaymentPercent,
    interestRatePercent: ratePercent,
    loanTermYears: years,
    totalPayments,
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
    name: "What does the Mortgage Calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Monthly principal and interest (P&I) from home price minus down payment, annual interest rate, and loan term. Taxes, insurance, HOA, and PMI are not included.",
    },
  },
  {
    "@type": "Question",
    name: "How is the loan amount calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Loan amount equals home price minus down payment. That principal is amortized over the selected term at the stated rate.",
    },
  },
  {
    "@type": "Question",
    name: "What loan terms are available?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Choose 10, 15, 20, or 30 years fixed. Shorter terms mean higher monthly P&I but less total interest over the life of the loan.",
    },
  },
  {
    "@type": "Question",
    name: "Is the monthly payment my full housing payment?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Usually not. Many lenders quote P&I separately from property tax, homeowners insurance, and mortgage insurance in escrow.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include refinancing?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It models a new purchase loan from price and down payment. For comparing an existing loan to a new rate, use a refinance calculator on this site.",
    },
  },
];

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(DEFAULTS.homePrice);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);

  const result = computeMortgage(
    homePrice,
    downPayment,
    loanTermYears,
    interestRate
  );

  const reset = () => {
    setHomePrice(DEFAULTS.homePrice);
    setDownPayment(DEFAULTS.downPayment);
    setLoanTermYears(DEFAULTS.loanTermYears);
    setInterestRate(DEFAULTS.interestRate);
  };

  return (
    <>
      <Helmet>
        <title>
          Mortgage Calculator - Monthly P&amp;I from Price &amp; Down Payment
        </title>
        <meta
          name="description"
          content="Estimate monthly mortgage principal and interest from home price, down payment, rate, and term. P&I only—no taxes, insurance, or PMI."
        />
        <meta
          name="keywords"
          content="mortgage calculator, monthly mortgage payment, home loan P&I, down payment calculator, mortgage interest total"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mortgage Calculator" />
        <meta
          property="og:description"
          content="Monthly P&I from home price, down payment, rate, and term."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mortgage Calculator" />
        <meta
          name="twitter:description"
          content="Home loan principal and interest estimate."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mortgage Calculator",
            url: PAGE_URL,
            description:
              "Calculate monthly mortgage P&I from home price, down payment, interest rate, and term.",
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
            name: "Mortgage Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate mortgage principal and interest payment.",
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
            headline: "How to Estimate Your Mortgage Principal and Interest",
            description:
              "Subtract down payment from home price and amortize the loan over a fixed term at a stated annual rate.",
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
                name: "Mortgage Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Home price</label>
            <div className="relative">
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
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.downPayment}
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
            <select
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className={inputClassName}
            >
              <option value="30">30 years fixed</option>
              <option value="20">20 years fixed</option>
              <option value="15">15 years fixed</option>
              <option value="10">10 years fixed</option>
            </select>
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
                  ? `$${fmtMoney(result.monthlyPayment)}`
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
              <span className="text-on-surface">Down payment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.downPayment)} (${result.downPaymentPercent.toFixed(1)}%)`
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
              <span className="text-on-surface">Total P&amp;I paid</span>
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
              Principal and interest only. Property tax, insurance, HOA, and PMI
              are not included in the monthly figure.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MortgageCalculator;
