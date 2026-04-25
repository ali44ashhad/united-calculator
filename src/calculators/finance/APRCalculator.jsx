import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const APRCalculator = () => {
  const DEFAULTS = {
    loanAmount: "10000",
    fees: "500",
    interestRate: "5",
    termYears: "2",
  };

  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [fees, setFees] = useState(DEFAULTS.fees);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [termYears, setTermYears] = useState(DEFAULTS.termYears);

  const calculateAPR = () => {
    const principal = parseFloat(loanAmount);
    const totalFees = parseFloat(fees);
    const nominalRate = parseFloat(interestRate) / 100;
    const years = parseFloat(termYears);

    if (
      isNaN(principal) ||
      isNaN(totalFees) ||
      isNaN(nominalRate) ||
      isNaN(years)
    )
      return null;

    const totalLoan = principal + totalFees;
    const r = nominalRate;
    const n = years;

    // Approximate APR using the formula:
    // APR = 2 * n * interest / (totalLoan + principal)
    const interest = principal * r * n;
    const apr = ((2 * n * interest) / (principal + totalLoan)) * 100;

    return {
      apr: apr.toFixed(2),
      totalCost: (principal + interest + totalFees).toFixed(2),
    };
  };

  const result = calculateAPR();

  return (
    <>
      <Helmet>
        <title>
          APR Calculator - Calculate Annual Percentage Rate by United Calculator
        </title>
        <meta
          name="description"
          content="Use our APR Calculator to determine the annual percentage rate on your loans or credit. Understand true borrowing costs including interest and fees."
        />
        <meta
          name="keywords"
          content="apr calculator, annual percentage rate calculator, loan apr calculator, credit card apr calculator, apr calculator india, calculate apr, mortgage apr calculator, apr vs interest rate"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/apr-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="APR Calculator - Calculate Annual Percentage Rate | United Calculator"
        />
        <meta
          property="og:description"
          content="Easily calculate the true annual percentage rate (APR) on loans and credit cards. Includes interest, fees, and other costs to help you make informed decisions."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/apr-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="APR Calculator - Understand Real Loan Costs"
        />
        <meta
          name="twitter:description"
          content="Use our APR calculator to find out the true cost of borrowing. Perfect for comparing loans, mortgages, and credit card offers."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "APR Calculator",
      "url": "https://www.unitedcalculator.net/finance/apr-calculator",
      "description": "This APR Calculator helps you determine the true cost of a loan or credit card by factoring in interest rates, fees, and repayment terms.",
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
          "name": "What is an APR calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An APR calculator helps you find the real annual cost of borrowing by including interest and additional fees, giving you a better comparison tool across loan offers."
          }
        },
        {
          "@type": "Question",
          "name": "Why is APR important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "APR gives a complete picture of how much a loan will cost annually. It’s useful for comparing credit products with different interest rates and fee structures."
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
          "name": "APR Calculator",
          "item": "https://www.unitedcalculator.net/finance/apr-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Loan Amount */}
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

          {/* Fees */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Fees</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.fees}
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
              value={termYears}
              onChange={(e) => setTermYears(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg appearance-none transition-all"
            >
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
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
                setLoanAmount(DEFAULTS.loanAmount);
                setFees(DEFAULTS.fees);
                setInterestRate(DEFAULTS.interestRate);
                setTermYears(DEFAULTS.termYears);
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">APR Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated APR</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `${result.apr}%` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Cost of Loan</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalCost}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default APRCalculator;
