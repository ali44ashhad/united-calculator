import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CanadianMortgageCalculator = () => {
  const DEFAULTS = {
    homePrice: "500000",
    downPayment: "100000",
    loanTerm: "25",
    interestRate: "5",
  };

  const [homePrice, setHomePrice] = useState(DEFAULTS.homePrice);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);

  const calculateMortgage = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const termYears = parseFloat(loanTerm);
    const annualRate = parseFloat(interestRate);
    const rate = annualRate / 100 / 12;

    const loanAmount = price - down;
    const totalMonths = termYears * 12;

    if (
      isNaN(price) ||
      isNaN(down) ||
      isNaN(termYears) ||
      isNaN(annualRate) ||
      isNaN(rate) ||
      totalMonths <= 0 ||
      loanAmount <= 0
    ) {
      return null;
    }

    const EMI =
      rate === 0
        ? loanAmount / totalMonths
        : (loanAmount * rate * Math.pow(1 + rate, totalMonths)) /
          (Math.pow(1 + rate, totalMonths) - 1);

    const totalPayment = EMI * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: EMI.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
    };
  };

  const result = calculateMortgage();

  return (
    <>
      <Helmet>
        <title>
          Canadian Mortgage Calculator - Monthly Payment & Interest (CAD)
        </title>
        <meta
          name="description"
          content="Estimate Canadian mortgage payments in CAD: enter home price, down payment, amortization in years, and annual interest rate to see loan amount, monthly payment, total interest, and total repayment."
        />
        <meta
          name="keywords"
          content="canadian mortgage calculator, mortgage calculator canada, canada mortgage payment calculator, home loan calculator canada, mortgage amortization canada, CMHC down payment, canadian mortgage interest"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Canadian Mortgage Calculator - CAD Payment Estimator"
        />
        <meta
          property="og:description"
          content="Plan your Canada home loan: monthly payment, total interest, and full repayment from price, down payment, rate, and amortization."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Canadian Mortgage Calculator"
        />
        <meta
          name="twitter:description"
          content="Quick CAD mortgage payment estimate for Canadian buyers and refinancers."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Canadian Mortgage Calculator",
      "url": "https://www.unitedcalculator.net/finance/canadian-mortgage-calculator",
      "description": "Estimate monthly mortgage payments and total borrowing cost in Canadian dollars using home price, down payment, interest rate, and amortization period.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
      }
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Canadian mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Canadian mortgage calculator estimates monthly payments and total interest based on home price, down payment, interest rate, and amortization period, using a standard monthly payment model."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a Canadian mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps Canadian home buyers plan payments, compare scenarios, and understand borrowing cost before committing to a mortgage."
          }
        }
      ]
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Finance Calculators",
          "item": "https://www.unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Canadian Mortgage Calculator",
          "item": "https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Home price (CAD)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.homePrice}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Down payment (CAD)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.downPayment}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Amortization</label>
            <div className="relative">
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.loanTerm}
                min="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                years
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual interest rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.interestRate}
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
              onClick={() => {
                setHomePrice(DEFAULTS.homePrice);
                setDownPayment(DEFAULTS.downPayment);
                setLoanTerm(DEFAULTS.loanTerm);
                setInterestRate(DEFAULTS.interestRate);
              }}
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
            Canadian Mortgage Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Loan amount</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.loanAmount}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly payment</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.emi}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalInterest}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total payment</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalPayment}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CanadianMortgageCalculator;
