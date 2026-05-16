import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CDCalculator = () => {
  const DEFAULTS = {
    principal: "10000",
    rate: "5",
    term: "3",
    compoundingsPerYear: "4",
  };

  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [term, setTerm] = useState(DEFAULTS.term);
  const [compoundingsPerYear, setCompoundingsPerYear] = useState(
    DEFAULTS.compoundingsPerYear
  );

  const calculateCD = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(term);
    const n = parseFloat(compoundingsPerYear);

    if (
      isNaN(P) ||
      isNaN(r) ||
      isNaN(t) ||
      isNaN(n) ||
      n <= 0 ||
      t <= 0 ||
      P <= 0
    ) {
      return null;
    }

    const A = P * Math.pow(1 + r / n, n * t);
    const interest = A - P;

    return {
      maturityAmount: A.toFixed(2),
      interestEarned: interest.toFixed(2),
    };
  };

  const result = calculateCD();

  return (
    <>
      <Helmet>
        <title>
          CD Calculator - Certificate of Deposit Maturity & Interest
        </title>
        <meta
          name="description"
          content="Estimate certificate of deposit maturity value and interest earned from principal, annual rate, term in years, and compounding frequency."
        />
        <meta
          name="keywords"
          content="cd calculator, certificate of deposit calculator, cd maturity calculator, cd interest calculator, fixed deposit calculator, compound cd calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/cd-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CD Calculator" />
        <meta
          property="og:description"
          content="Project CD growth with compound interest: see maturity amount and total interest for your deposit, rate, term, and compounding schedule."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/cd-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CD Calculator" />
        <meta
          name="twitter:description"
          content="Calculate certificate of deposit maturity and interest with adjustable compounding frequency."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "CD Calculator",
      "url": "https://www.unitedcalculator.net/finance/cd-calculator",
      "description": "CD calculator to estimate maturity value and interest earned on a certificate of deposit using compound interest.",
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
          "name": "What is a CD calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CD calculator estimates the maturity value and interest earned from a certificate of deposit based on deposit amount, interest rate, term, and compounding frequency."
          }
        },
        {
          "@type": "Question",
          "name": "Why use a Certificate of Deposit calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you forecast fixed-term deposit growth and compare rates and compounding schedules before you lock in funds."
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
          "name": "CD Calculator",
          "item": "https://www.unitedcalculator.net/finance/cd-calculator"
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
              Principal (deposit)
            </label>
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
            <label className="font-h3 text-h3 text-on-surface">Term</label>
            <div className="relative">
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.term}
                min="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                years
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Compounding frequency
            </label>
            <select
              value={compoundingsPerYear}
              onChange={(e) => setCompoundingsPerYear(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg appearance-none transition-all"
            >
              <option value="1">Annually (1× per year)</option>
              <option value="2">Semi-annually (2× per year)</option>
              <option value="4">Quarterly (4× per year)</option>
              <option value="12">Monthly (12× per year)</option>
              <option value="365">Daily (365× per year)</option>
            </select>
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
                setTerm(DEFAULTS.term);
                setCompoundingsPerYear(DEFAULTS.compoundingsPerYear);
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
            CD Maturity Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Interest earned</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.interestEarned}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Maturity amount</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.maturityAmount}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CDCalculator;
