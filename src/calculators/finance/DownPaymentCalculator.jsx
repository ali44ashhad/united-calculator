import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/down-payment-calculator";

const DEFAULTS = {
  purchasePrice: "500000",
  downPaymentPercentage: "20",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeDownPayment = (purchasePrice, downPaymentPercentage) => {
  if (purchasePrice.trim() === "" || downPaymentPercentage.trim() === "") {
    return null;
  }

  const price = parseFloat(purchasePrice);
  const percentage = parseFloat(downPaymentPercentage);

  if (isNaN(price) || isNaN(percentage)) {
    return { error: "Enter valid numbers for price and down payment percent." };
  }

  if (price <= 0) {
    return { error: "Purchase price must be greater than zero." };
  }

  if (percentage < 0 || percentage > 100) {
    return { error: "Down payment must be between 0 and 100 percent." };
  }

  const downPayment = (price * percentage) / 100;
  const loanAmount = price - downPayment;
  const ltv = (loanAmount / price) * 100;

  return {
    downPayment,
    loanAmount,
    ltv,
    purchasePrice: price,
    downPaymentPercentage: percentage,
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
    name: "What does the Down Payment Calculator show?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "From purchase price and down payment percentage it calculates cash due at closing, the remaining loan amount, and loan-to-value (LTV) percent.",
    },
  },
  {
    "@type": "Question",
    name: "How is down payment calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Down payment equals purchase price times down payment percent divided by 100. Loan amount equals purchase price minus down payment.",
    },
  },
  {
    "@type": "Question",
    name: "What is loan-to-value (LTV)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "LTV is the loan balance divided by purchase price, expressed as a percent. A 20% down payment leaves 80% LTV. Many conventional loans require PMI when LTV is above 80%.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include closing costs?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Closing costs, prepaid items, and reserves are separate cash needs beyond the down payment shown here.",
    },
  },
  {
    "@type": "Question",
    name: "How do I estimate monthly payments after this?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use the loan amount from this calculator as the principal in a mortgage or loan payment calculator with your interest rate and term.",
    },
  },
];

const DownPaymentCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(DEFAULTS.purchasePrice);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(
    DEFAULTS.downPaymentPercentage
  );

  const result = computeDownPayment(purchasePrice, downPaymentPercentage);

  const reset = () => {
    setPurchasePrice(DEFAULTS.purchasePrice);
    setDownPaymentPercentage(DEFAULTS.downPaymentPercentage);
  };

  return (
    <>
      <Helmet>
        <title>
          Down Payment Calculator - Cash Due, Loan Amount & LTV
        </title>
        <meta
          name="description"
          content="Calculate down payment dollars, loan amount, and loan-to-value from purchase price and down payment percentage for homes, cars, or major purchases."
        />
        <meta
          name="keywords"
          content="down payment calculator, home down payment calculator, loan to value calculator, mortgage down payment, upfront cash calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Down Payment Calculator" />
        <meta
          property="og:description"
          content="See cash needed upfront, financed balance, and LTV from price and down payment percent."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Down Payment Calculator" />
        <meta
          name="twitter:description"
          content="Down payment amount and loan balance from purchase price."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Down Payment Calculator",
            url: PAGE_URL,
            description:
              "Calculate down payment cash, loan amount, and LTV from purchase price and down payment percentage.",
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
            name: "Down Payment Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate upfront down payment, loan amount, and loan-to-value ratio.",
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
            headline: "How to Calculate Down Payment and Loan-to-Value",
            description:
              "Multiply purchase price by down payment rate for cash due; subtract from price for the loan; LTV is loan divided by price as a percent.",
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
                name: "Down Payment Calculator",
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
              Purchase price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.purchasePrice}
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
                value={downPaymentPercentage}
                onChange={(e) => setDownPaymentPercentage(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.downPaymentPercentage}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
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
            Down payment summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Down payment (cash)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
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
              <span className="text-on-surface">Loan-to-value (LTV)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.ltv.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Purchase price</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.purchasePrice)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            {result && !result.error && result.ltv > 80 && (
              <p className="text-sm text-on-surface-variant">
                LTV above 80% often triggers private mortgage insurance (PMI) on
                conventional loans—confirm with your lender.
              </p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Closing costs and reserves are not included. Use the loan amount
              in a mortgage calculator for monthly payment estimates.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DownPaymentCalculator;
