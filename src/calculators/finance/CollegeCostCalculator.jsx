import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CollegeCostCalculator = () => {
  const DEFAULTS = {
    currentCost: "20000",
    yearsUntilCollege: "10",
    inflationRate: "5",
    numberOfYears: "4",
  };

  const [currentCost, setCurrentCost] = useState(DEFAULTS.currentCost);
  const [yearsUntilCollege, setYearsUntilCollege] = useState(
    DEFAULTS.yearsUntilCollege
  );
  const [inflationRate, setInflationRate] = useState(DEFAULTS.inflationRate);
  const [numberOfYears, setNumberOfYears] = useState(DEFAULTS.numberOfYears);

  const calculateCollegeCost = () => {
    const cost = parseFloat(currentCost);
    const inflation = parseFloat(inflationRate) / 100;
    const waitYears = parseFloat(yearsUntilCollege);
    const studyYears = parseFloat(numberOfYears);

    if (
      isNaN(cost) ||
      isNaN(inflation) ||
      isNaN(waitYears) ||
      isNaN(studyYears) ||
      cost <= 0 ||
      studyYears <= 0 ||
      waitYears < 0
    ) {
      return null;
    }

    let totalFutureCost = 0;
    for (let i = 0; i < studyYears; i++) {
      const year = waitYears + i;
      const inflatedCost = cost * Math.pow(1 + inflation, year);
      totalFutureCost += inflatedCost;
    }

    return {
      futureAnnualCost: (cost * Math.pow(1 + inflation, waitYears)).toFixed(2),
      totalFutureCost: totalFutureCost.toFixed(2),
    };
  };

  const result = calculateCollegeCost();

  return (
    <>
      <Helmet>
        <title>
          College Cost Calculator - Future Tuition & Total Degree Estimate
        </title>
        <meta
          name="description"
          content="Project college costs with inflation: enter today's annual cost, years until enrollment, inflation rate, and years of study to see first-year and total future expenses."
        />
        <meta
          name="keywords"
          content="college cost calculator, future tuition calculator, education inflation calculator, university cost estimator, four year college cost, college budget planner"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/college-cost-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="College Cost Calculator" />
        <meta
          property="og:description"
          content="Estimate inflated annual college costs and total degree expense before your student enrolls."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/college-cost-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="College Cost Calculator" />
        <meta
          name="twitter:description"
          content="See first-year and total future college costs with an annual inflation assumption."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "College Cost Calculator",
      "url": "https://www.unitedcalculator.net/finance/college-cost-calculator",
      "description": "Estimate future college costs by inflating current annual expenses over years until enrollment and through the degree program.",
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
          "name": "What is a College Cost Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It projects future annual college costs and total degree expense using today's cost, years until college, an inflation rate, and number of years enrolled."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a College Cost Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps families plan savings targets by showing how tuition inflation compounds before and during enrollment."
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
          "name": "College Cost Calculator",
          "item": "https://www.unitedcalculator.net/finance/college-cost-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Current annual college cost
            </label>
            <div className="relative max-w-full md:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={currentCost}
                onChange={(e) => setCurrentCost(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.currentCost}
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Tuition, room, board, and fees combined for one year today.
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Years until college starts
            </label>
            <input
              type="number"
              value={yearsUntilCollege}
              onChange={(e) => setYearsUntilCollege(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.yearsUntilCollege}
              min="0"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual inflation rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.inflationRate}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Years enrolled (degree length)
            </label>
            <input
              type="number"
              value={numberOfYears}
              onChange={(e) => setNumberOfYears(e.target.value)}
              className="w-full max-w-full md:max-w-md px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.numberOfYears}
              min="1"
            />
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
                setCurrentCost(DEFAULTS.currentCost);
                setYearsUntilCollege(DEFAULTS.yearsUntilCollege);
                setInflationRate(DEFAULTS.inflationRate);
                setNumberOfYears(DEFAULTS.numberOfYears);
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
            College Cost Estimate
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">First year cost (future)</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.futureAnnualCost}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Total cost (all enrolled years)
              </span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalFutureCost}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CollegeCostCalculator;
