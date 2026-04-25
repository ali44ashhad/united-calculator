import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AnnuityPayoutCalculator = () => {
  const DEFAULTS = {
    presentValue: "500000",
    interestRate: "5",
    years: "20",
  };

  const [presentValue, setPresentValue] = useState(DEFAULTS.presentValue);
  const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
  const [years, setYears] = useState(DEFAULTS.years);

  const PV = parseFloat(presentValue || 0);
  const r = parseFloat(interestRate || 0) / 100 / 12; // Monthly rate
  const n = parseFloat(years || 0) * 12; // Number of months

  const monthlyPayout =
    PV > 0 && n > 0
      ? r > 0
        ? (PV * r) / (1 - Math.pow(1 + r, -n))
        : PV / n
      : 0;
  const totalReceived = monthlyPayout * (n || 0);
  const totalInterest = totalReceived - (PV || 0);

  return (
    <>
      <Helmet>
        <title>
          Calculate Your Monthly Annuity Payouts by using lifetime annuity
          payout calculator | United Calculator
        </title>
        <meta
          name="description"
          content="Use our lifetime annuity payout calculator to estimate the monthly or yearly income you will receive from an annuity investment. Ideal for retirement and long-term financial planning."
        />
        <meta
          name="keywords"
          content="lifetime annuity payout calculator, annuity payout calculator, monthly annuity calculator, annuity payment calculator, retirement income calculator, pension payout calculator, calculate annuity income, fixed annuity payout calculator, annuity calculator india"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/annuity-payout-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Calculate Your Monthly Annuity Payouts - Annuity Payout Calculator | United Calculator"
        />
        <meta
          property="og:description"
          content="Use our annuity payout calculator to estimate periodic income based on your investment, interest rate, and duration. Ideal for financial planning and retirement."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/annuity-payout-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Annuity Payout Calculator - Monthly Retirement Income Estimator"
        />
        <meta
          name="twitter:description"
          content="Estimate your monthly or annual annuity payments using our annuity payout calculator. Perfect for secure retirement planning."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Annuity Payout Calculator",
      "url": "https://www.unitedcalculator.net/finance/annuity-payout-calculator",
      "description": "Free annuity payout calculator to estimate your recurring income based on investment amount, interest rate, and time period. Ideal for retirement income planning.",
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
          "name": "What is an annuity payout calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An annuity payout calculator helps you determine the periodic income you can expect from your annuity investment based on factors like investment amount, duration, and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use an annuity payout calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone who is investing in annuities and wants to estimate the recurring payments—monthly, quarterly, or annually—should use this calculator for better financial planning."
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
          "name": "Annuity Payout Calculator",
          "item": "https://www.unitedcalculator.net/finance/annuity-payout-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Present Value */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Present Value
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={presentValue}
                onChange={(e) => setPresentValue(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.presentValue}
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

          {/* Payout Period */}
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Payout Period</label>
            <select
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg appearance-none transition-all"
            >
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
              <option value="25">25 Years</option>
              <option value="30">30 Years</option>
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
                setPresentValue(DEFAULTS.presentValue);
                setInterestRate(DEFAULTS.interestRate);
                setYears(DEFAULTS.years);
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
            Annuity Payout Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly Payout</span>
              <span className="font-code-num text-code-num text-primary">
                ${monthlyPayout.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Received Over Time</span>
              <span className="font-code-num text-code-num">
                ${totalReceived.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Interest Earned</span>
              <span className="font-code-num text-code-num">
                ${totalInterest.toFixed(2)}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnnuityPayoutCalculator;
