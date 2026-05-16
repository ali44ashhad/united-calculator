import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const getZScore = (level) => {
  switch (parseInt(level, 10)) {
    case 90:
      return 1.645;
    case 95:
      return 1.96;
    case 99:
      return 2.576;
    default:
      return 1.96;
  }
};

const SampleSizeCalculator = () => {
  const DEFAULTS = {
    population: "10000",
    confidenceLevel: "95",
    marginOfError: "5",
  };

  const [population, setPopulation] = useState(DEFAULTS.population);
  const [confidenceLevel, setConfidenceLevel] = useState(
    DEFAULTS.confidenceLevel
  );
  const [marginOfError, setMarginOfError] = useState(DEFAULTS.marginOfError);

  const calculateSampleSize = () => {
    const N = parseFloat(population);
    const z = getZScore(confidenceLevel);
    const E = parseFloat(marginOfError) / 100;
    const p = 0.5;
    const q = 1 - p;

    if (
      population.trim() === "" ||
      marginOfError.trim() === "" ||
      isNaN(N) ||
      isNaN(E) ||
      N <= 0 ||
      E <= 0
    ) {
      return null;
    }

    const n0 = (z * z * p * q) / (E * E);
    const n = n0 / (1 + (n0 - 1) / N);

    return {
      sampleSize: Math.ceil(n),
      infiniteSample: Math.ceil(n0),
    };
  };

  const result = calculateSampleSize();

  const reset = () => {
    setPopulation(DEFAULTS.population);
    setConfidenceLevel(DEFAULTS.confidenceLevel);
    setMarginOfError(DEFAULTS.marginOfError);
  };

  return (
    <>
      <Helmet>
        <title>
          Sample Size Calculator - Survey Respondents with Finite Population
        </title>
        <meta
          name="description"
          content="Estimate required survey sample size from population size, confidence level (90/95/99%), and margin of error. Uses p = 0.5 and finite population correction."
        />
        <meta
          name="keywords"
          content="sample size calculator, survey sample size, margin of error calculator, confidence level sample, population sampling calculator, finite population correction"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/statistics/sample-size-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sample Size Calculator - Surveys & Polls"
        />
        <meta
          property="og:description"
          content="Enter population, confidence level, and margin of error to see how many respondents you need."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/statistics/sample-size-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sample Size Calculator - Confidence & Margin of Error"
        />
        <meta
          name="twitter:description"
          content="Quick sample size estimate for proportion surveys with finite population adjustment."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sample Size Calculator",
      "url": "https://www.unitedcalculator.net/statistics/sample-size-calculator",
      "description": "Sample size calculator for surveys using population size, confidence level, margin of error, and finite population correction with p = 0.5.",
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
          "name": "What is sample size in statistics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sample size is how many people or observations you include in a survey or study. A larger sample usually narrows uncertainty around your estimate."
          }
        },
        {
          "@type": "Question",
          "name": "Why does this calculator assume p = 0.5?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When you do not know the true proportion ahead of time, p = 0.5 gives the most conservative (largest) sample size because p(1−p) is maximized at 0.25."
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
          "name": "Sample Size Calculator",
          "item": "https://www.unitedcalculator.net/statistics/sample-size-calculator"
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
              Population Size
            </label>
            <input
              type="number"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.population}
              min="1"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Confidence Level
            </label>
            <select
              value={confidenceLevel}
              onChange={(e) => setConfidenceLevel(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
            >
              <option value="90">90%</option>
              <option value="95">95%</option>
              <option value="99">99%</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Margin of Error
            </label>
            <div className="relative">
              <input
                type="number"
                value={marginOfError}
                onChange={(e) => setMarginOfError(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.marginOfError}
                min="0.01"
                step="any"
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
              onClick={reset}
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
            Sample Size Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Required sample size</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? result.sampleSize.toLocaleString() : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Infinite-population estimate
              </span>
              <span className="font-code-num text-code-num">
                {result ? result.infiniteSample.toLocaleString() : "—"}
              </span>
            </div>
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Assumes maximum-variance proportion p = 0.5 and applies finite
              population correction when N is known.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SampleSizeCalculator;
