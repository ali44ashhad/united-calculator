import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CompoundInterestCalculator = () => {
  const DEFAULTS = {
    principal: "10000",
    rate: "8",
    timesCompounded: "4",
    years: "10",
  };

  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [timesCompounded, setTimesCompounded] = useState(
    DEFAULTS.timesCompounded
  );
  const [years, setYears] = useState(DEFAULTS.years);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(timesCompounded);
    const t = parseFloat(years);

    if (
      isNaN(P) ||
      isNaN(r) ||
      isNaN(n) ||
      isNaN(t) ||
      P < 0 ||
      n <= 0 ||
      t <= 0
    ) {
      return null;
    }

    const amount = P * Math.pow(1 + r / n, n * t);
    const interest = amount - P;

    return {
      totalAmount: amount.toFixed(2),
      compoundInterest: interest.toFixed(2),
    };
  };

  const result = calculateCompoundInterest();

  return (
    <>
      <Helmet>
        <title>
          Compound Interest Calculator - Future Value & Interest Earned
        </title>
        <meta
          name="description"
          content="Calculate compound interest: enter principal, annual rate, compounding frequency, and years to see total amount and interest earned."
        />
        <meta
          name="keywords"
          content="compound interest calculator, compounding calculator, future value calculator, interest on interest calculator, savings growth calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/compound-interest-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Compound Interest Calculator" />
        <meta
          property="og:description"
          content="Project how principal grows with compound interest at your chosen compounding frequency."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/compound-interest-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compound Interest Calculator" />
        <meta
          name="twitter:description"
          content="See future value and total interest from principal, rate, frequency, and time."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Compound Interest Calculator",
      "url": "https://www.unitedcalculator.net/finance/compound-interest-calculator",
      "description": "Compound interest calculator for discrete compounding: principal, annual rate, periods per year, and years.",
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
          "name": "What is a compound interest calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It estimates future value and interest earned when interest is reinvested at a set compounding frequency over time."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a compound interest calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps visualize long-term growth from rate, time, and how often interest compounds on a lump-sum principal."
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
          "name": "Compound Interest Calculator",
          "item": "https://www.unitedcalculator.net/finance/compound-interest-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Principal</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.principal}
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
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.rate}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Compounding frequency
            </label>
            <select
              value={timesCompounded}
              onChange={(e) => setTimesCompounded(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg appearance-none transition-all"
            >
              <option value="1">Annually (1× per year)</option>
              <option value="2">Semi-annually (2× per year)</option>
              <option value="4">Quarterly (4× per year)</option>
              <option value="12">Monthly (12× per year)</option>
              <option value="365">Daily (365× per year)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Time period</label>
            <div className="relative">
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.years}
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
                setPrincipal(DEFAULTS.principal);
                setRate(DEFAULTS.rate);
                setTimesCompounded(DEFAULTS.timesCompounded);
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

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Compound Interest Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Interest earned</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.compoundInterest}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total amount</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalAmount}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompoundInterestCalculator;
