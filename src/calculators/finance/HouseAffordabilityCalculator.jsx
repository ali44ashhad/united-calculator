import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/house-affordability-calculator";

const DTI_LIMIT = 0.36;

const DEFAULTS = {
  annualIncome: "80000",
  monthlyDebt: "500",
  downPayment: "20000",
  interestRate: "6.5",
  loanTerm: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeHouseAffordability = (
  annualIncome,
  monthlyDebt,
  downPayment,
  interestRate,
  loanTerm
) => {
  if (
    annualIncome.trim() === "" ||
    monthlyDebt.trim() === "" ||
    downPayment.trim() === "" ||
    interestRate.trim() === "" ||
    loanTerm.trim() === ""
  ) {
    return null;
  }

  const incomeMonthly = parseFloat(annualIncome) / 12;
  const debt = parseFloat(monthlyDebt);
  const down = parseFloat(downPayment);
  const rateAnnual = parseFloat(interestRate);
  const termYears = parseFloat(loanTerm);

  if (
    isNaN(incomeMonthly) ||
    isNaN(debt) ||
    isNaN(down) ||
    isNaN(rateAnnual) ||
    isNaN(termYears)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (incomeMonthly <= 0) {
    return { error: "Annual income must be greater than zero." };
  }

  if (debt < 0 || down < 0) {
    return { error: "Monthly debt and down payment cannot be negative." };
  }

  if (termYears <= 0) {
    return { error: "Loan term must be greater than zero years." };
  }

  const rate = rateAnnual / 100 / 12;
  const termMonths = termYears * 12;

  const maxMonthlyPayment = incomeMonthly * DTI_LIMIT - debt;

  if (maxMonthlyPayment <= 0) {
    return {
      error:
        "Existing monthly debt already meets or exceeds the 36% income limit. Lower debt or increase income to afford a mortgage payment.",
    };
  }

  let loanAmount;
  if (rate === 0) {
    loanAmount = maxMonthlyPayment * termMonths;
  } else {
    loanAmount =
      (maxMonthlyPayment * (1 - Math.pow(1 + rate, -termMonths))) / rate;
  }

  const housePrice = loanAmount + down;
  const dtiWithMortgage =
    ((debt + maxMonthlyPayment) / incomeMonthly) * 100;

  return {
    maxHousePrice: housePrice,
    maxLoanAmount: loanAmount,
    maxMonthlyPayment,
    monthlyIncome: incomeMonthly,
    dtiWithMortgage,
    downPayment: down,
    interestRatePercent: rateAnnual,
    loanTermYears: termYears,
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
    name: "What does the House Affordability Calculator estimate?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates maximum home price from annual income, existing monthly debt, down payment, interest rate, and loan term using a 36% back-end debt-to-income cap for the new mortgage payment.",
    },
  },
  {
    "@type": "Question",
    name: "What is the 36% rule used here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total monthly debt payments (existing debt plus the estimated mortgage principal and interest) are capped at 36% of gross monthly income. The tool solves for the largest P&I payment that fits under that limit.",
    },
  },
  {
    "@type": "Question",
    name: "Are property taxes and insurance included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The affordable monthly payment is principal and interest only. Taxes, homeowners insurance, HOA fees, and PMI are not added—real budgets need room for those costs.",
    },
  },
  {
    "@type": "Question",
    name: "How is maximum loan amount calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The maximum P&I payment is discounted over the loan term at the monthly interest rate (present value of an annuity). Maximum home price equals that loan amount plus your down payment.",
    },
  },
  {
    "@type": "Question",
    name: "Is this a lender approval?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Lenders use their own DTI limits, credit, reserves, and programs. Use this as a planning estimate, not a pre-approval.",
    },
  },
];

const HouseAffordabilityCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(DEFAULTS.annualIncome);
  const [monthlyDebt, setMonthlyDebt] = useState(DEFAULTS.monthlyDebt);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);

  const result = computeHouseAffordability(
    annualIncome,
    monthlyDebt,
    downPayment,
    interestRate,
    loanTerm
  );

  const reset = () => {
    setAnnualIncome(DEFAULTS.annualIncome);
    setMonthlyDebt(DEFAULTS.monthlyDebt);
    setDownPayment(DEFAULTS.downPayment);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTerm(DEFAULTS.loanTerm);
  };

  return (
    <>
      <Helmet>
        <title>
          House Affordability Calculator - 36% DTI Home Price Estimate
        </title>
        <meta
          name="description"
          content="Estimate max home price from income, monthly debt, down payment, rate, and term using a 36% back-end DTI rule for principal and interest."
        />
        <meta
          name="keywords"
          content="house affordability calculator, how much house can I afford, home affordability estimate, DTI home calculator, max home price"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="House Affordability Calculator"
        />
        <meta
          property="og:description"
          content="Max home price from income, debt, down payment, and mortgage terms."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="House Affordability Calculator" />
        <meta
          name="twitter:description"
          content="36% DTI-based home price planning estimate."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "House Affordability Calculator",
            url: PAGE_URL,
            description:
              "Estimate maximum affordable home price using income, monthly debt, down payment, and mortgage rate with a 36% DTI cap.",
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
            name: "House Affordability Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate max home price from income and debt using a 36% back-end DTI limit.",
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
            headline: "How Much House Can You Afford on 36% DTI?",
            description:
              "Back out maximum principal-and-interest payment from income and existing debt, then convert to loan size and home price with your down payment.",
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
                name: "House Affordability Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual income
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.annualIncome}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Monthly debt payments
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyDebt}
                onChange={(e) => setMonthlyDebt(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyDebt}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Car loans, cards, student loans, etc. (not the new mortgage)
            </p>
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
              Mortgage interest rate
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
            Affordability summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Max home price
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.maxHousePrice)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Max loan amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.maxLoanAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Max principal &amp; interest payment
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.maxMonthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Back-end DTI at max payment
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.dtiWithMortgage.toFixed(1)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gross monthly income</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyIncome)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Uses {(DTI_LIMIT * 100).toFixed(0)}% of gross monthly income for
              all debt including the new mortgage P&amp;I. Taxes, insurance, HOA,
              and PMI are not included in the payment cap.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HouseAffordabilityCalculator;
