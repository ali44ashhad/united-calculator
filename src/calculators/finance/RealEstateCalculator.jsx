import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/real-estate-calculator";

const DEFAULTS = {
  propertyPrice: "500000",
  downPayment: "100000",
  loanTermYears: "30",
  interestRate: "6",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeRealEstateLoan = (
  propertyPrice,
  downPayment,
  loanTermYears,
  interestRate
) => {
  if (
    propertyPrice.trim() === "" ||
    downPayment.trim() === "" ||
    loanTermYears.trim() === "" ||
    interestRate.trim() === ""
  ) {
    return null;
  }

  const price = parseFloat(propertyPrice);
  const down = parseFloat(downPayment);
  const years = parseFloat(loanTermYears);
  const ratePercent = parseFloat(interestRate);
  const r = ratePercent / 100 / 12;
  const n = years * 12;

  if (isNaN(price) || isNaN(down) || isNaN(years) || isNaN(ratePercent) || isNaN(r) || isNaN(n)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (price < 0 || down < 0) {
    return { error: "Property price and down payment cannot be negative." };
  }

  if (down > price) {
    return { error: "Down payment cannot exceed property price." };
  }

  if (years <= 0) {
    return { error: "Loan term must be greater than zero years." };
  }

  const loanAmount = price - down;
  const downPaymentPercent = price > 0 ? (down / price) * 100 : 0;

  const monthlyPayment =
    r === 0
      ? loanAmount / n
      : (loanAmount * r) / (1 - Math.pow(1 + r, -n));
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - loanAmount;

  return {
    propertyPrice: price,
    downPayment: down,
    loanAmount,
    downPaymentPercent,
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
    name: "What does this real estate calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Monthly principal and interest (P&I) on the property loan: price minus down payment, amortized at the stated rate and term. Taxes, insurance, rent, and ROI are not included.",
    },
  },
  {
    "@type": "Question",
    name: "Does it calculate rental ROI or cash flow?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It only models the mortgage payment on the purchase price and down payment. For rental income analysis, use the Rental Property Calculator on this site.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as a mortgage calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The math is the same P&I amortization. This page is labeled for property purchase context; the Mortgage Calculator uses the same formula with home-buyer wording.",
    },
  },
  {
    "@type": "Question",
    name: "What if the interest rate is 0%?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The monthly payment is the loan amount divided by the number of months in the term.",
    },
  },
  {
    "@type": "Question",
    name: "Does it include property tax or insurance?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only principal and interest on the loan amount. Escrow costs are not added to the monthly figure.",
    },
  },
];

const RealEstateCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(DEFAULTS.propertyPrice);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);

  const result = computeRealEstateLoan(
    propertyPrice,
    downPayment,
    loanTermYears,
    interestRate
  );

  const reset = () => {
    setPropertyPrice(DEFAULTS.propertyPrice);
    setDownPayment(DEFAULTS.downPayment);
    setLoanTermYears(DEFAULTS.loanTermYears);
    setInterestRate(DEFAULTS.interestRate);
  };

  return (
    <>
      <Helmet>
        <title>
          Real Estate Calculator - Property Loan P&amp;I Payment
        </title>
        <meta
          name="description"
          content="Estimate monthly property loan P&I from purchase price, down payment, rate, and term. Not rental ROI, cash flow, or affordability from income."
        />
        <meta
          name="keywords"
          content="real estate calculator, property loan payment, real estate mortgage, down payment, monthly P&I"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Real Estate Calculator" />
        <meta
          property="og:description"
          content="Property loan monthly P&I from price, down payment, rate, and term."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Calculator" />
        <meta
          name="twitter:description"
          content="Property purchase loan payment estimate."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Real Estate Calculator",
            url: PAGE_URL,
            description:
              "Calculate property loan monthly P&I from purchase price, down payment, interest rate, and term.",
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
            name: "Real Estate Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate property loan principal and interest payment.",
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
            headline: "Property Loan Payment from Price and Down Payment",
            description:
              "Subtract down payment from purchase price and amortize the loan over a fixed term.",
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
                name: "Real Estate Calculator",
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
              Property price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.propertyPrice}
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
            Property loan summary
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
              Principal and interest only. Rent, ROI, taxes, insurance, and
              operating expenses are not included.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealEstateCalculator;
