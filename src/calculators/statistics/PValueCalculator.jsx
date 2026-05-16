import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const cumulativeStandardNormalDistribution = (z) => {
  const t = 1 / (1 + 0.2316419 * z);
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const prob =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return 1 - prob;
};

const PValueCalculator = () => {
  const DEFAULTS = { zScore: "1.96" };

  const [zScore, setZScore] = useState(DEFAULTS.zScore);

  const calculatePValue = () => {
    const z = parseFloat(zScore);
    if (zScore.trim() === "" || isNaN(z)) return null;

    const oneTailed = 1 - cumulativeStandardNormalDistribution(Math.abs(z));
    return {
      oneTailed,
      twoTailed: 2 * oneTailed,
    };
  };

  const result = calculatePValue();

  return (
    <>
      <Helmet>
        <title>
          P-Value Calculator - One-Tailed & Two-Tailed from Z-Score
        </title>
        <meta
          name="description"
          content="Convert a z-score to one-tailed and two-tailed p-values using the standard normal distribution. Quick hypothesis-testing helper for statistics."
        />
        <meta
          name="keywords"
          content="p value calculator, p-value from z score, z score p value, hypothesis test p value, one tailed p value, two tailed p value, standard normal p value, significance calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/statistics/p-value-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="P-Value Calculator - Z-Score to P-Value"
        />
        <meta
          property="og:description"
          content="Enter a z-score to see one-tailed and two-tailed p-values under the standard normal model."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/statistics/p-value-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="P-Value Calculator - Standard Normal Tail Probabilities"
        />
        <meta
          name="twitter:description"
          content="Get upper-tail and two-tailed p-values from a z-score for quick significance checks."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "P-Value Calculator",
      "url": "https://www.unitedcalculator.net/statistics/p-value-calculator",
      "description": "P-value calculator that converts a z-score to one-tailed and two-tailed tail probabilities using the standard normal distribution.",
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
          "name": "What does this p-value calculator compute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It uses the standard normal distribution to find the upper-tail probability beyond the absolute z-score (one-tailed) and doubles it for a symmetric two-tailed test."
          }
        },
        {
          "@type": "Question",
          "name": "What z-score gives p = 0.05 two-tailed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a two-tailed test at α = 0.05, critical values are about z = ±1.96 because each tail has probability 0.025."
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
          "name": "Statistics Calculators",
          "item": "https://www.unitedcalculator.net/statistics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "P-Value Calculator",
          "item": "https://www.unitedcalculator.net/statistics/p-value-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Z-Score</label>
            <input
              type="number"
              value={zScore}
              onChange={(e) => setZScore(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.zScore}
              step="any"
            />
            <p className="text-sm text-on-surface-variant">
              Uses the absolute value of your z-score for tail probabilities.
            </p>
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
              onClick={() => setZScore(DEFAULTS.zScore)}
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
            P-Value Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">One-tailed p-value</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? result.oneTailed.toFixed(6) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Two-tailed p-value</span>
              <span className="font-code-num text-code-num">
                {result ? result.twoTailed.toFixed(6) : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PValueCalculator;
