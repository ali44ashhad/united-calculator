import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MortgageCalculator = () => {
  const DEFAULTS = {
    homePrice: "500000",
    downPayment: "100000",
    loanTermYears: "30",
    interestRate: "4",
  };

  const [homePrice, setHomePrice] = useState(DEFAULTS.homePrice);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);

  const loanAmount = parseFloat(homePrice || 0) - parseFloat(downPayment || 0);
  const rate = parseFloat(interestRate || 0) / 100 / 12;
  const totalPayments = parseInt(loanTermYears || 0) * 12;

  const monthlyPayment =
    loanAmount && rate && totalPayments
      ? (loanAmount * rate) / (1 - Math.pow(1 + rate, -totalPayments))
      : 0;

  const totalPayment = monthlyPayment * totalPayments;
  const totalInterest = totalPayment - loanAmount;

  return (
    <>
      <Helmet>
        <title>Mortgage Calculator</title>
        <meta
          name="description"
          content="Use our Mortgage Calculator to estimate your monthly home loan payments. Calculate principal, interest, taxes, and insurance for better mortgage planning."
        />
        <meta
          name="keywords"
          content="mortgage calculator, home loan calculator, monthly mortgage payment, mortgage interest calculator, property loan calculator, EMI calculator, mortgage planning, real estate loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/mortgage-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mortgage Calculator" />
        <meta
          property="og:description"
          content="Estimate your monthly mortgage payments with our easy-to-use Mortgage Calculator. Input loan amount, interest rate, and term to see a full breakdown."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/mortgage-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mortgage Calculator",
      "url": "https://www.unitedcalculator.net/finance/mortgage-calculator",
      "description": "Use the Mortgage Calculator to determine your monthly home loan payments. Plan your budget by calculating principal and interest based on loan term and rate.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
      }
    }
    `}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mortgage calculator helps you estimate your monthly loan payments based on the loan amount, interest rate, and term. It's useful for planning your home budget."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a mortgage calculator helps you understand the financial commitment of buying a home and lets you adjust variables like down payment or term to suit your budget."
          }
        }
      ]
    }
    `}
        </script>

        {/* JSON-LD: Breadcrumb */}
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
          "name": "Mortgage Calculator",
          "item": "https://www.unitedcalculator.net/finance/mortgage-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Home Price */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Home Price</label>
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

          {/* Down Payment */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Down Payment
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

          {/* Interest Rate */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Interest Rate
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

          {/* Loan Term */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Loan Term</label>
            <select
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg appearance-none transition-all"
            >
              <option value="30">30 Years Fixed</option>
              <option value="20">20 Years Fixed</option>
              <option value="15">15 Years Fixed</option>
              <option value="10">10 Years Fixed</option>
            </select>
          </div>
        </div>

        {/* Actions */}
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
                setLoanTermYears(DEFAULTS.loanTermYears);
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

        {/* Summary */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Mortgage Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly Payment</span>
              <span className="font-code-num text-code-num text-primary">
                ${monthlyPayment.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Interest</span>
              <span className="font-code-num text-code-num">
                ${totalInterest.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Payment</span>
              <span className="font-code-num text-code-num">
                ${totalPayment.toFixed(2)}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MortgageCalculator;
