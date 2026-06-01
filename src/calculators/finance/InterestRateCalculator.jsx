import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/interest-rate-calculator";

const DEFAULTS = {
  principal: "10000",
  interest: "1000",
  time: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeInterestRate = (principal, interest, time) => {
  if (
    principal.trim() === "" ||
    interest.trim() === "" ||
    time.trim() === ""
  ) {
    return null;
  }

  const P = parseFloat(principal);
  const I = parseFloat(interest);
  const T = parseFloat(time);

  if (isNaN(P) || isNaN(I) || isNaN(T)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (P <= 0) {
    return { error: "Principal must be greater than zero." };
  }

  if (T <= 0) {
    return { error: "Time period must be greater than zero years." };
  }

  if (I < 0) {
    return { error: "Interest earned cannot be negative." };
  }

  const rate = (I * 100) / (P * T);
  const totalAmount = P + I;

  return {
    principal: P,
    interestEarned: I,
    timeYears: T,
    rate,
    totalAmount,
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
    name: "What does the Interest Rate Calculator find?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Given principal, total simple interest earned over a period, and time in years, it solves for the annual simple interest rate: R = (I × 100) ÷ (P × T).",
    },
  },
  {
    "@type": "Question",
    name: "What formula is used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "From I = P × R × T ÷ 100, rearranged to R = (I × 100) ÷ (P × T), where R is annual rate percent, P is principal, I is interest dollars, and T is years.",
    },
  },
  {
    "@type": "Question",
    name: "Is this for EMI or loan payments?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Enter total simple interest over the period, not monthly payment. For installment loans use the Loan Calculator or Mortgage Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "Does this handle compound interest?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It assumes simple interest linear in time. For compounding, use the Compound Interest Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "What if interest earned is zero?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The implied annual rate is 0%. Principal and total amount are equal.",
    },
  },
];

const InterestRateCalculator = () => {
  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [interest, setInterest] = useState(DEFAULTS.interest);
  const [time, setTime] = useState(DEFAULTS.time);

  const result = computeInterestRate(principal, interest, time);

  const reset = () => {
    setPrincipal(DEFAULTS.principal);
    setInterest(DEFAULTS.interest);
    setTime(DEFAULTS.time);
  };

  return (
    <>
      <Helmet>
        <title>
          Interest Rate Calculator - Solve Annual Simple Interest Rate
        </title>
        <meta
          name="description"
          content="Find annual simple interest rate from principal, interest earned, and years. R = (I × 100) ÷ (P × T). Not for EMI or compound interest."
        />
        <meta
          name="keywords"
          content="interest rate calculator, solve for rate, simple interest rate, implied annual rate, reverse interest formula"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Interest Rate Calculator" />
        <meta
          property="og:description"
          content="Solve annual simple interest rate from principal, interest, and time."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interest Rate Calculator" />
        <meta
          name="twitter:description"
          content="Reverse simple interest for annual rate %."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Interest Rate Calculator",
            url: PAGE_URL,
            description:
              "Solve annual simple interest rate from principal, interest earned, and years.",
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
            name: "Interest Rate Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute implied annual simple interest rate from principal, interest, and time.",
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
            headline: "How to Find Annual Simple Interest Rate",
            description:
              "Rearrange I = PRT/100 to solve R when you know principal, total interest, and years.",
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
                name: "Interest Rate Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Principal</label>
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
              Simple interest earned
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.interest}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Total interest over the full period—not monthly payment
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Time (years)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.time}
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
            Interest rate result
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Annual interest rate
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${result.rate.toFixed(2)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Principal</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.principal)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Interest earned</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.interestEarned)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Time</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.timeYears} year${result.timeYears === 1 ? "" : "s"}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              R = (I × 100) ÷ (P × T) from simple interest I = PRT ÷ 100. Annual
              rate; time in years. Not for EMI or compound growth.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default InterestRateCalculator;
