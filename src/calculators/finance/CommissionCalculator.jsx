import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CommissionCalculator = () => {
  const DEFAULTS = {
    saleAmount: "1000",
    commissionRate: "10",
  };

  const [saleAmount, setSaleAmount] = useState(DEFAULTS.saleAmount);
  const [commissionRate, setCommissionRate] = useState(DEFAULTS.commissionRate);

  const calculateCommission = () => {
    const sale = parseFloat(saleAmount);
    const rate = parseFloat(commissionRate) / 100;

    if (isNaN(sale) || isNaN(rate) || sale < 0) return null;

    const commission = sale * rate;
    const earnings = sale - commission;

    return {
      commission: commission.toFixed(2),
      earnings: earnings.toFixed(2),
    };
  };

  const result = calculateCommission();

  return (
    <>
      <Helmet>
        <title>
          Commission Calculator - Sales Commission & Net After Fee
        </title>
        <meta
          name="description"
          content="Calculate commission on a sale from amount and percentage rate. See commission paid and what remains after the fee."
        />
        <meta
          name="keywords"
          content="commission calculator, sales commission calculator, commission percentage calculator, calculate commission on sale, realtor commission calculator, freelance commission"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/commission-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commission Calculator" />
        <meta
          property="og:description"
          content="Enter sale amount and commission rate to see fee amount and net proceeds after commission."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/commission-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commission Calculator" />
        <meta
          name="twitter:description"
          content="Quick percentage commission on any sale amount."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Commission Calculator",
      "url": "https://www.unitedcalculator.net/finance/commission-calculator",
      "description": "Calculate commission earnings from sale amount and percentage rate, plus net amount after commission.",
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
          "name": "What is a commission calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A commission calculator applies a percentage rate to a sale amount to show the commission fee and the remaining net after commission."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use a commission calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sales reps, agents, freelancers, and business owners use it to estimate payouts or net proceeds on a deal."
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
          "name": "Commission Calculator",
          "item": "https://www.unitedcalculator.net/finance/commission-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Sale amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={saleAmount}
                onChange={(e) => setSaleAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.saleAmount}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Commission rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={commissionRate}
                onChange={(e) => setCommissionRate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.commissionRate}
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
                setSaleAmount(DEFAULTS.saleAmount);
                setCommissionRate(DEFAULTS.commissionRate);
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
            Commission Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Commission amount</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.commission}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">You keep (after commission)</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.earnings}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommissionCalculator;