import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AutoLeaseCalculator = () => {
  const DEFAULTS = {
    msrp: "30000",
    downPayment: "2000",
    leaseTerm: "36",
    moneyFactor: "0.0025",
    residualValuePercent: "55",
  };

  const [msrp, setMsrp] = useState(DEFAULTS.msrp);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [leaseTerm, setLeaseTerm] = useState(DEFAULTS.leaseTerm); // months
  const [moneyFactor, setMoneyFactor] = useState(DEFAULTS.moneyFactor);
  const [residualValuePercent, setResidualValuePercent] = useState(
    DEFAULTS.residualValuePercent
  );

  const calculateLease = () => {
    const msrpVal = parseFloat(msrp);
    const down = parseFloat(downPayment);
    const term = parseFloat(leaseTerm);
    const mf = parseFloat(moneyFactor);
    const residual = parseFloat(residualValuePercent);

    if (
      isNaN(msrpVal) ||
      isNaN(down) ||
      isNaN(term) ||
      isNaN(mf) ||
      isNaN(residual)
    )
      return null;

    const residualValue = (residual / 100) * msrpVal;
    const depreciationFee = (msrpVal - residualValue) / term;
    const financeFee = (msrpVal + residualValue) * mf;
    const monthlyPayment = depreciationFee + financeFee;
    const totalLeaseCost = monthlyPayment * term + down;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalLeaseCost: totalLeaseCost.toFixed(2),
      residualValue: residualValue.toFixed(2),
    };
  };

  const result = calculateLease();

  return (
    <>
      <Helmet>
        <title>
          Auto Lease Calculator - Estimate Monthly Car Lease Payments | United
          Calculator
        </title>
        <meta
          name="description"
          content="Use our Auto Lease Calculator to estimate your monthly car lease payments of tesla. Include vehicle price, lease term, interest rate, and residual value to plan your finances smartly."
        />
        <meta
          name="keywords"
          content="auto lease calculator, car lease calculator, lease payment calculator, vehicle lease calculator, car lease monthly payment calculator, auto lease calculator india, estimate lease payments, car leasing tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/auto-lease-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auto Lease Calculator - Estimate Monthly Car Lease Payments | United Calculator"
        />
        <meta
          property="og:description"
          content="Calculate monthly car lease payments with our free Auto Lease Calculator. Adjust lease term, interest rate, and car value to get accurate estimates."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/auto-lease-calculator"
        />
        {/* Twitter */}

        <meta
          name="twitter:title"
          content="Auto Lease Calculator - Plan Your Monthly Lease Cost"
        />
        <meta
          name="twitter:description"
          content="Quickly estimate your auto lease payments using our simple and accurate car lease calculator. Ideal for budgeting and car financing decisions."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Auto Lease Calculator",
      "url": "https://www.unitedcalculator.net/finance/auto-lease-calculator",
      "description": "Use our free Auto Lease Calculator to compute your monthly lease payments based on car price, interest rate, lease term, and residual value. Ideal for vehicle budgeting.",
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
          "name": "What is an auto lease calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An auto lease calculator helps estimate your monthly lease payments based on car price, interest rate, residual value, and lease duration."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use an auto lease calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you plan your budget, compare lease offers, and understand total costs before leasing a car."
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
          "name": "Auto Lease Calculator",
          "item": "https://www.unitedcalculator.net/finance/auto-lease-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MSRP */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">MSRP</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={msrp}
                onChange={(e) => setMsrp(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.msrp}
              />
            </div>
          </div>

          {/* Down Payment */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Down Payment</label>
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

          {/* Lease Term */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Lease Term</label>
            <select
              value={leaseTerm}
              onChange={(e) => setLeaseTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg appearance-none transition-all"
            >
              <option value="24">24 Months</option>
              <option value="36">36 Months</option>
              <option value="48">48 Months</option>
              <option value="60">60 Months</option>
            </select>
          </div>

          {/* Money Factor */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Money Factor
            </label>
            <input
              type="number"
              step="0.0001"
              value={moneyFactor}
              onChange={(e) => setMoneyFactor(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.moneyFactor}
            />
          </div>

          {/* Residual Value */}
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Residual Value
            </label>
            <div className="relative">
              <input
                type="number"
                value={residualValuePercent}
                onChange={(e) => setResidualValuePercent(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.residualValuePercent}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
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
                setMsrp(DEFAULTS.msrp);
                setDownPayment(DEFAULTS.downPayment);
                setLeaseTerm(DEFAULTS.leaseTerm);
                setMoneyFactor(DEFAULTS.moneyFactor);
                setResidualValuePercent(DEFAULTS.residualValuePercent);
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Lease Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Monthly Payment</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.monthlyPayment}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Residual Value</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.residualValue}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Lease Cost</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalLeaseCost}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutoLeaseCalculator;
