import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/rent-vs-buy-calculator";

const DEFAULTS = {
  monthlyRent: "2000",
  homePrice: "500000",
  downPayment: "100000",
  annualAppreciation: "3",
  mortgageRate: "6.5",
  loanTermYears: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMonthlyPayment = (principal, ratePercent, termYears) => {
  const r = ratePercent / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
};

const computeRentVsBuy = (
  monthlyRent,
  homePrice,
  downPayment,
  annualAppreciation,
  mortgageRate,
  loanTermYears
) => {
  if (
    monthlyRent.trim() === "" ||
    homePrice.trim() === "" ||
    downPayment.trim() === "" ||
    annualAppreciation.trim() === "" ||
    mortgageRate.trim() === "" ||
    loanTermYears.trim() === ""
  ) {
    return null;
  }

  const rent = parseFloat(monthlyRent);
  const price = parseFloat(homePrice);
  const down = parseFloat(downPayment);
  const appreciationPercent = parseFloat(annualAppreciation);
  const ratePercent = parseFloat(mortgageRate);
  const years = parseFloat(loanTermYears);

  if (
    isNaN(rent) ||
    isNaN(price) ||
    isNaN(down) ||
    isNaN(appreciationPercent) ||
    isNaN(ratePercent) ||
    isNaN(years)
  ) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (rent < 0 || price < 0 || down < 0) {
    return { error: "Rent, home price, and down payment cannot be negative." };
  }

  if (down > price) {
    return { error: "Down payment cannot exceed home price." };
  }

  if (years <= 0) {
    return { error: "Loan term must be greater than zero years." };
  }

  if (ratePercent < 0) {
    return { error: "Mortgage rate cannot be negative." };
  }

  const months = years * 12;
  const loanAmount = price - down;
  const monthlyMortgage = computeMonthlyPayment(loanAmount, ratePercent, years);
  const totalRent = rent * months;
  const totalMortgagePI = monthlyMortgage * months;
  const futureHomeValue =
    price * Math.pow(1 + appreciationPercent / 100, years);

  return {
    monthlyRent: rent,
    homePrice: price,
    downPayment: down,
    loanAmount,
    appreciationPercent,
    ratePercent,
    loanTermYears: years,
    months,
    totalRent,
    monthlyMortgage,
    totalMortgagePI,
    futureHomeValue,
    totalBuyPIPlusDown: down + totalMortgagePI,
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
    name: "What does this rent vs buy calculator compare?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total rent over the mortgage term vs total mortgage P&I plus down payment, with a projected future home value from appreciation. It does not pick a winner or model taxes, maintenance, or investing the down payment.",
    },
  },
  {
    "@type": "Question",
    name: "Does it calculate break-even or net worth?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It shows side-by-side totals and appreciated home value—not break-even month, equity after loan payoff, or opportunity cost of down payment.",
    },
  },
  {
    "@type": "Question",
    name: "Is mortgage payment on the full home price?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. P&I is on home price minus down payment. Down payment is shown separately in the buy-side summary.",
    },
  },
  {
    "@type": "Question",
    name: "Are property tax, insurance, or maintenance included?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only rent, mortgage P&I, down payment, and a simple appreciation projection on purchase price.",
    },
  },
  {
    "@type": "Question",
    name: "Does rent increase over time?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Total rent assumes the same monthly rent for every month in the loan term.",
    },
  },
];

const RentVsBuyCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState(DEFAULTS.monthlyRent);
  const [homePrice, setHomePrice] = useState(DEFAULTS.homePrice);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [annualAppreciation, setAnnualAppreciation] = useState(
    DEFAULTS.annualAppreciation
  );
  const [mortgageRate, setMortgageRate] = useState(DEFAULTS.mortgageRate);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);

  const result = computeRentVsBuy(
    monthlyRent,
    homePrice,
    downPayment,
    annualAppreciation,
    mortgageRate,
    loanTermYears
  );

  const reset = () => {
    setMonthlyRent(DEFAULTS.monthlyRent);
    setHomePrice(DEFAULTS.homePrice);
    setDownPayment(DEFAULTS.downPayment);
    setAnnualAppreciation(DEFAULTS.annualAppreciation);
    setMortgageRate(DEFAULTS.mortgageRate);
    setLoanTermYears(DEFAULTS.loanTermYears);
  };

  return (
    <>
      <Helmet>
        <title>
          Rent vs Buy Calculator - Rent Total vs Mortgage P&amp;I
        </title>
        <meta
          name="description"
          content="Compare total rent over a term to mortgage P&I plus down payment, with projected home value from appreciation. No break-even, taxes, or maintenance."
        />
        <meta
          name="keywords"
          content="rent vs buy calculator, rent or buy, total rent vs mortgage, home appreciation estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rent vs Buy Calculator" />
        <meta
          property="og:description"
          content="Side-by-side rent total, buy-side P&I, and appreciated home value over the same period."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rent vs Buy Calculator" />
        <meta
          name="twitter:description"
          content="Compare rent paid vs mortgage costs over a fixed term."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rent vs Buy Calculator",
            url: PAGE_URL,
            description:
              "Compare total rent to mortgage P&I and down payment over a term, with simple home appreciation.",
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
            name: "Rent vs Buy Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compare renting vs buying costs over a mortgage term.",
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
            headline: "Rent Total vs Buy-Side Mortgage Over the Same Term",
            description:
              "Total rent equals monthly rent times months; buy side uses down payment plus amortized P&I and optional appreciation on price.",
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
                name: "Rent vs Buy Calculator",
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
              Monthly rent (if renting)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyRent}
                min="0"
                step="any"
              />
            </div>
          </div>

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
              Annual appreciation
            </label>
            <div className="relative">
              <input
                type="number"
                value={annualAppreciation}
                onChange={(e) => setAnnualAppreciation(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.annualAppreciation}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Mortgage rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={mortgageRate}
                onChange={(e) => setMortgageRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.mortgageRate}
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
              Comparison period (loan term)
            </label>
            <select
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className={inputClassName}
            >
              <option value="30">30 years</option>
              <option value="20">20 years</option>
              <option value="15">15 years</option>
              <option value="10">10 years</option>
            </select>
            <p className="text-sm text-on-surface-variant">
              Rent is totaled over the same number of months as the mortgage
              term.
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
            Rent vs buy comparison
          </h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-h3 text-h3 text-on-surface">Renting</h3>
              <div className="flex items-center justify-between text-lg">
                <span className="text-on-surface font-medium">
                  Total rent over {result && !result.error ? result.loanTermYears : "—"} years
                </span>
                <span className="font-code-num text-code-num text-primary text-lg">
                  {result && !result.error
                    ? `$${fmtMoney(result.totalRent)}`
                    : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Monthly rent</span>
                <span className="font-code-num text-code-num">
                  {result && !result.error
                    ? `$${fmtMoney(result.monthlyRent)}`
                    : "—"}
                </span>
              </div>
            </div>

            <div className="border-t border-outline-variant pt-6 space-y-4">
              <h3 className="font-h3 text-h3 text-on-surface">Buying</h3>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Monthly mortgage P&amp;I</span>
                <span className="font-code-num text-code-num">
                  {result && !result.error
                    ? `$${fmtMoney(result.monthlyMortgage)}`
                    : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Total mortgage P&amp;I paid</span>
                <span className="font-code-num text-code-num">
                  {result && !result.error
                    ? `$${fmtMoney(result.totalMortgagePI)}`
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
                <span className="text-on-surface">
                  P&amp;I + down (cash outlay)
                </span>
                <span className="font-code-num text-code-num">
                  {result && !result.error
                    ? `$${fmtMoney(result.totalBuyPIPlusDown)}`
                    : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">
                  Projected home value ({result && !result.error ? result.appreciationPercent : "—"}%/yr)
                </span>
                <span className="font-code-num text-code-num">
                  {result && !result.error
                    ? `$${fmtMoney(result.futureHomeValue)}`
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
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simplified comparison only. No break-even, taxes, insurance,
              maintenance, rent increases, or opportunity cost on down payment.
              Does not declare rent or buy as the better choice.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RentVsBuyCalculator;
