import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CashBackOrLowInterestCalculator = () => {
  const DEFAULTS = {
    purchaseAmount: "1000",
    cashBack: "50",
    interestRate: "10",
    repaymentPeriod: "12",
  };

  const [purchaseAmount, setPurchaseAmount] = useState(DEFAULTS.purchaseAmount);
  const [cashBack, setCashBack] = useState(DEFAULTS.cashBack);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [repaymentPeriod, setRepaymentPeriod] = useState(
    DEFAULTS.repaymentPeriod
  );

  const calculate = () => {
    const amount = parseFloat(purchaseAmount);
    const cb = parseFloat(cashBack);
    const annualRate = parseFloat(interestRate);
    const rate = annualRate / 100 / 12;
    const months = parseInt(repaymentPeriod, 10);

    if (
      isNaN(amount) ||
      isNaN(cb) ||
      isNaN(annualRate) ||
      isNaN(months) ||
      months <= 0 ||
      amount <= 0
    ) {
      return null;
    }

    const monthlyPayment =
      rate === 0
        ? amount / months
        : (amount * rate) / (1 - Math.pow(1 + rate, -months));

    const totalInterest = monthlyPayment * months - amount;
    const netCostWithInterest = amount + totalInterest;
    const netCostWithCashBack = amount - cb;

    const betterOption =
      netCostWithCashBack < netCostWithInterest ? "Cash Back" : "Low Interest";

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      netCostWithInterest: netCostWithInterest.toFixed(2),
      netCostWithCashBack: netCostWithCashBack.toFixed(2),
      betterOption,
    };
  };

  const result = calculate();

  return (
    <>
      <Helmet>
        <title>
          Cash Back or Low Interest Calculator - Compare Financing Incentives
        </title>
        <meta
          name="description"
          content="Compare upfront cash back vs financing the full purchase at a low annual rate. See total interest, net cost under each path, and which option costs less over your repayment period."
        />
        <meta
          name="keywords"
          content="cash back vs low interest calculator, dealer cash back or low APR, auto loan incentive calculator, credit card cash back vs APR, finance promotion comparison"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/cash-back-or-low-interest-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cash Back or Low Interest Calculator"
        />
        <meta
          property="og:description"
          content="Side-by-side net cost: rebate applied to purchase price vs amortized loan at the rate you enter."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/cash-back-or-low-interest-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cash Back or Low Interest Calculator"
        />
        <meta
          name="twitter:description"
          content="See whether cash back or a low-rate payment plan saves more on your purchase."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cash Back or Low Interest Calculator",
      "url": "https://www.unitedcalculator.net/finance/cash-back-or-low-interest-calculator",
      "description": "Compare net cost of a cash back incentive versus financing the purchase at a stated annual interest rate over a repayment period.",
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
          "name": "What is a Cash Back or Low Interest Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It compares the net cost of taking an upfront cash back amount against financing the full purchase at an annual interest rate over a set number of months."
          }
        },
        {
          "@type": "Question",
          "name": "When should I use this calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use it when a dealer, lender, or card issuer offers either a rebate or a reduced-rate payment plan and you want a quick side-by-side cost check."
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
          "name": "Cash Back or Low Interest Calculator",
          "item": "https://www.unitedcalculator.net/finance/cash-back-or-low-interest-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Purchase amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.purchaseAmount}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Cash back</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={cashBack}
                onChange={(e) => setCashBack(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.cashBack}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual interest rate (low-rate path)
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
            <label className="font-h3 text-h3 text-on-surface">
              Repayment period
            </label>
            <div className="relative">
              <input
                type="number"
                value={repaymentPeriod}
                onChange={(e) => setRepaymentPeriod(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.repaymentPeriod}
                min="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                months
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
                setPurchaseAmount(DEFAULTS.purchaseAmount);
                setCashBack(DEFAULTS.cashBack);
                setInterestRate(DEFAULTS.interestRate);
                setRepaymentPeriod(DEFAULTS.repaymentPeriod);
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
            Comparison Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly payment (financed)</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.monthlyPayment}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest (financed)</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalInterest}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Net cost with low interest</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.netCostWithInterest}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Net cost with cash back</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.netCostWithCashBack}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-outline-variant">
              <span className="font-h3 text-h3 text-on-surface">
                Lower net cost
              </span>
              <span className="font-code-num text-code-num text-primary">
                {result ? result.betterOption : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CashBackOrLowInterestCalculator;
