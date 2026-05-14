import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BoatLoanCalculator = () => {
  const DEFAULTS = {
    loanAmount: "30000",
    interestRate: "6",
    loanTerm: "5",
  };

  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);

  const calculateBoatLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || n === 0) return null;

    const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateBoatLoan();

  return (
    <>
      <Helmet>
        <title>
          Boat Loan Calculator - Monthly Payment & Marine Financing Estimate
        </title>
        <meta
          name="description"
          content="Free boat loan calculator: estimate monthly payments, total interest, and overall cost for marine financing. Plan yacht, sailboat, or powerboat loans before you buy."
        />
        <meta
          name="keywords"
          content="boat loan calculator, boat payment calculator, marine loan calculator, yacht loan calculator, boat financing calculator, recreational boat loan, used boat financing, calculate boat loan payment, boat loan interest calculator, secured boat loan"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/boat-loan-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Boat Loan Calculator - Marine Financing Payment Estimator"
        />
        <meta
          property="og:description"
          content="Estimate your boat loan monthly payment, total interest, and full repayment amount. Compare rates and terms for new or used boat financing."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/boat-loan-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Boat Loan Calculator - Payment & Interest Estimator"
        />
        <meta
          name="twitter:description"
          content="Plan marine financing with a quick boat loan payment estimate based on amount, APR, and term."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Boat Loan Calculator",
      "url": "https://www.unitedcalculator.net/finance/boat-loan-calculator",
      "description": "Use our Boat Loan Calculator to calculate your monthly payments and total interest. Plan your marine loan financing effectively.",
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
          "name": "What is a boat loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A boat loan calculator helps estimate monthly payments, total interest, and overall cost based on loan amount, term, and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a boat loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a boat loan calculator helps you plan your financing, compare options, and make informed decisions before purchasing a boat."
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
          "name": "Boat Loan Calculator",
          "item": "https://www.unitedcalculator.net/finance/boat-loan-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Loan Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.loanAmount}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual Interest Rate
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

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Loan Term (years)
            </label>
            <div className="relative">
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.loanTerm}
                min="1"
                max="30"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                years
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
                setLoanAmount(DEFAULTS.loanAmount);
                setInterestRate(DEFAULTS.interestRate);
                setLoanTerm(DEFAULTS.loanTerm);
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
            Boat Loan Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly Payment</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.monthlyPayment}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Payment</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalPayment}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Interest</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalInterest}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BoatLoanCalculator;
