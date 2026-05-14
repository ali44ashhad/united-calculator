import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BusinessLoanCalculator = () => {
  const DEFAULTS = {
    loanAmount: "500000",
    interestRate: "10",
    loanTerm: "5",
  };

  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);

  const calculateLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || n <= 0) return null;

    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = EMI * n;
    const totalInterest = totalPayment - P;

    return {
      emi: EMI.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateLoan();

  return (
    <>
      <Helmet>
        <title>
          Business Loan Calculator - EMI, Interest & Repayment Estimate (India)
        </title>
        <meta
          name="description"
          content="Estimate business loan EMI in rupees: enter principal, annual interest rate, and tenure in years to see monthly payment, total repayment, and total interest."
        />
        <meta
          name="keywords"
          content="business loan calculator, commercial loan calculator, SME loan EMI calculator, small business loan calculator, business financing calculator, term loan EMI, MSME loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/business-loan-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Business Loan Calculator - EMI & Total Cost"
        />
        <meta
          property="og:description"
          content="Plan commercial borrowing: monthly EMI, total interest, and full repayment for a fixed-rate term loan model."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/business-loan-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Business Loan Calculator - EMI Estimator"
        />
        <meta
          name="twitter:description"
          content="Quick EMI and interest estimate for business term loans using amount, rate, and years."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Business Loan Calculator",
      "url": "https://www.unitedcalculator.net/finance/business-loan-calculator",
      "description": "Use our Business Loan Calculator to estimate EMIs, interest charges, and total repayment amount. Perfect for planning business financing.",
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
          "name": "What is a business loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A business loan calculator helps you estimate the monthly EMI, total interest, and repayment amount based on loan amount, term, and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a business loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a business loan calculator allows you to plan your loan repayment strategy effectively and compare multiple loan offers for the best fit."
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
          "name": "Business Loan Calculator",
          "item": "https://www.unitedcalculator.net/finance/business-loan-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Loan amount</label>
            <div className="relative max-w-full md:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                ₹
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

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Loan term</label>
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
            Business Loan Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly EMI</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `₹${result.emi}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total payment</span>
              <span className="font-code-num text-code-num">
                {result ? `₹${result.totalPayment}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest</span>
              <span className="font-code-num text-code-num">
                {result ? `₹${result.totalInterest}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessLoanCalculator;
