import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/va-mortgage-calculator";

const DEFAULTS = {
  loanAmount: "300000",
  interestRate: "3.25",
  loanTermYears: "30",
  propertyTaxRate: "1.2",
  homeInsuranceAnnual: "1000",
  vaFundingFeePercent: "2.3",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeVAMortgage = (
  loanAmount,
  interestRate,
  loanTermYears,
  propertyTaxRate,
  homeInsuranceAnnual,
  vaFundingFeePercent
) => {
  if (
    loanAmount.trim() === "" ||
    interestRate.trim() === "" ||
    loanTermYears.trim() === "" ||
    propertyTaxRate.trim() === "" ||
    homeInsuranceAnnual.trim() === "" ||
    vaFundingFeePercent.trim() === ""
  ) {
    return null;
  }

  const principal = parseFloat(loanAmount);
  const ratePercent = parseFloat(interestRate);
  const years = parseFloat(loanTermYears);
  const taxRatePercent = parseFloat(propertyTaxRate);
  const insuranceAnnual = parseFloat(homeInsuranceAnnual);
  const fundingFeePercent = parseFloat(vaFundingFeePercent);
  const r = ratePercent / 100 / 12;
  const months = years * 12;

  if (
    isNaN(principal) ||
    isNaN(ratePercent) ||
    isNaN(years) ||
    isNaN(taxRatePercent) ||
    isNaN(insuranceAnnual) ||
    isNaN(fundingFeePercent) ||
    isNaN(r) ||
    isNaN(months)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (principal <= 0) {
    return { error: "Loan amount must be greater than zero." };
  }

  if (years <= 0) {
    return { error: "Loan term must be greater than zero years." };
  }

  if (
    ratePercent < 0 ||
    taxRatePercent < 0 ||
    insuranceAnnual < 0 ||
    fundingFeePercent < 0
  ) {
    return { error: "Rates and insurance cannot be negative." };
  }

  const fundingFeeAmount = principal * (fundingFeePercent / 100);
  const totalLoanAmount = principal + fundingFeeAmount;
  const monthlyPrincipalInterest =
    r === 0
      ? totalLoanAmount / months
      : (totalLoanAmount * r) / (1 - Math.pow(1 + r, -months));
  const monthlyPropertyTax = (principal * (taxRatePercent / 100)) / 12;
  const monthlyInsurance = insuranceAnnual / 12;
  const totalMonthlyPayment =
    monthlyPrincipalInterest + monthlyPropertyTax + monthlyInsurance;

  return {
    loanAmount: principal,
    interestRatePercent: ratePercent,
    loanTermYears: years,
    propertyTaxRatePercent: taxRatePercent,
    homeInsuranceAnnual: insuranceAnnual,
    vaFundingFeePercent: fundingFeePercent,
    fundingFeeAmount,
    totalLoanAmount,
    monthlyPrincipalInterest,
    monthlyPropertyTax,
    monthlyInsurance,
    totalMonthlyPayment,
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
    name: "What does this VA mortgage calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Monthly principal and interest on the loan amount plus a financed VA funding fee, plus estimated monthly property tax and homeowners insurance. PMI is not included—VA loans typically do not require private mortgage insurance.",
    },
  },
  {
    "@type": "Question",
    name: "How is the VA funding fee handled?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "You enter a funding fee percent of the base loan amount; that dollar amount is added to the balance and amortized with principal and interest. Official VA fee tables vary by service, down payment, and disability status—this tool does not look them up automatically.",
    },
  },
  {
    "@type": "Question",
    name: "What is property tax based on?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Annual property tax is the tax rate percent you enter times the base loan amount field, divided by 12. If your loan amount equals the home price (common with $0 down), that matches tax on price; otherwise adjust the rate or amount.",
    },
  },
  {
    "@type": "Question",
    name: "Does this check VA loan eligibility?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is a payment estimator only. Eligibility and certificate of eligibility are determined by the VA and lenders.",
    },
  },
  {
    "@type": "Question",
    name: "Are HOA fees or escrow included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only P&I on the loan with funding fee, property tax, and insurance estimates you enter. HOA and other housing costs are excluded.",
    },
  },
];

const VAMortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);
  const [propertyTaxRate, setPropertyTaxRate] = useState(
    DEFAULTS.propertyTaxRate
  );
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState(
    DEFAULTS.homeInsuranceAnnual
  );
  const [vaFundingFeePercent, setVaFundingFeePercent] = useState(
    DEFAULTS.vaFundingFeePercent
  );

  const result = computeVAMortgage(
    loanAmount,
    interestRate,
    loanTermYears,
    propertyTaxRate,
    homeInsuranceAnnual,
    vaFundingFeePercent
  );

  const reset = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setLoanTermYears(DEFAULTS.loanTermYears);
    setPropertyTaxRate(DEFAULTS.propertyTaxRate);
    setHomeInsuranceAnnual(DEFAULTS.homeInsuranceAnnual);
    setVaFundingFeePercent(DEFAULTS.vaFundingFeePercent);
  };

  return (
    <>
      <Helmet>
        <title>
          VA Mortgage Calculator - Monthly Payment with Funding Fee
        </title>
        <meta
          name="description"
          content="VA loan monthly payment: P&I on balance plus financed funding fee, property tax, and insurance. Enter your own funding fee %—not official VA tables or eligibility."
        />
        <meta
          name="keywords"
          content="VA mortgage calculator, VA loan payment, VA funding fee, PITI estimate veterans"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="VA Mortgage Calculator" />
        <meta
          property="og:description"
          content="Estimate VA loan monthly payment with funding fee, tax, and insurance."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VA Mortgage Calculator" />
        <meta
          name="twitter:description"
          content="P&I plus tax and insurance for a VA home loan scenario."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "VA Mortgage Calculator",
            url: PAGE_URL,
            description:
              "Estimate VA mortgage monthly payment with funding fee, property tax, and insurance.",
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
            name: "VA Mortgage Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate VA loan monthly housing payment components.",
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
            headline: "VA Loan Monthly Payment Estimate",
            description:
              "Amortize VA loan principal plus financed funding fee with property tax and insurance estimates.",
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
                name: "VA Mortgage Calculator",
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
              Base loan amount
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
            <p className="text-sm text-on-surface-variant">
              Amount before funding fee (often full home price with $0 down)
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

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Property tax rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={propertyTaxRate}
                onChange={(e) => setPropertyTaxRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.propertyTaxRate}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                % / yr
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Applied to base loan amount ÷ 12 each month
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Homeowners insurance
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={homeInsuranceAnnual}
                onChange={(e) => setHomeInsuranceAnnual(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.homeInsuranceAnnual}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                / yr
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              VA funding fee
            </label>
            <div className="relative">
              <input
                type="number"
                value={vaFundingFeePercent}
                onChange={(e) => setVaFundingFeePercent(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.vaFundingFeePercent}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Percent of base loan, financed into balance (enter 0 if exempt)
            </p>
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
            VA mortgage summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Total monthly payment
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalMonthlyPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Principal &amp; interest (monthly)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyPrincipalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Property tax (monthly)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyPropertyTax)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Insurance (monthly)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyInsurance)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Loan amount with funding fee
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalLoanAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">VA funding fee ($)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.fundingFeeAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Base loan amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.loanAmount)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              P&amp;I amortizes base loan plus financed funding fee. Tax uses
              your rate on the base loan amount. No PMI, HOA, or official VA
              fee table lookup.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VAMortgageCalculator;
