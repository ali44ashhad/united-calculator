import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const ZScoreCalculator = () => {
  const DEFAULTS = {
    score: "85",
    mean: "70",
    stdDev: "10",
  };

  const [score, setScore] = useState(DEFAULTS.score);
  const [mean, setMean] = useState(DEFAULTS.mean);
  const [stdDev, setStdDev] = useState(DEFAULTS.stdDev);

  const calculateZScore = () => {
    const x = parseFloat(score);
    const mu = parseFloat(mean);
    const sigma = parseFloat(stdDev);

    if (
      score.trim() === "" ||
      mean.trim() === "" ||
      stdDev.trim() === "" ||
      isNaN(x) ||
      isNaN(mu) ||
      isNaN(sigma) ||
      sigma === 0
    ) {
      return null;
    }

    const z = (x - mu) / sigma;
    return {
      z,
      aboveMean: z > 0,
      belowMean: z < 0,
    };
  };

  const result = calculateZScore();

  const reset = () => {
    setScore(DEFAULTS.score);
    setMean(DEFAULTS.mean);
    setStdDev(DEFAULTS.stdDev);
  };

  return (
    <>
      <Helmet>
        <title>
          Z-Score Calculator - Standard Score from Mean & Standard Deviation
        </title>
        <meta
          name="description"
          content="Compute the z-score (standard score) for a value using z = (x − μ) / σ. Enter raw score, mean, and standard deviation."
        />
        <meta
          name="keywords"
          content="z-score calculator, standard score calculator, z value formula, statistics z score, normal distribution standard score"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/statistics/z-score-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Z-Score Calculator - Standard Score"
        />
        <meta
          property="og:description"
          content="See how many standard deviations a value sits from the mean."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/statistics/z-score-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Z-Score Calculator - (x − μ) / σ"
        />
        <meta
          name="twitter:description"
          content="Quick standard score from raw score, mean, and standard deviation."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Z-Score Calculator",
      "url": "https://www.unitedcalculator.net/statistics/z-score-calculator",
      "description": "Z-score calculator that computes (x − mean) / standard deviation for a single data point.",
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
          "name": "What is a z-score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A z-score measures how many standard deviations a value is from the mean. Positive z means above the mean; negative z means below."
          }
        },
        {
          "@type": "Question",
          "name": "What if standard deviation is zero?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Division by zero is undefined, so σ must be greater than zero. Enter a positive standard deviation."
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
          "name": "Z-Score Calculator",
          "item": "https://www.unitedcalculator.net/statistics/z-score-calculator"
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
              Raw Score (x)
            </label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.score}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Mean (μ)</label>
            <input
              type="number"
              value={mean}
              onChange={(e) => setMean(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.mean}
              step="any"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Standard Deviation (σ)
            </label>
            <input
              type="number"
              value={stdDev}
              onChange={(e) => setStdDev(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.stdDev}
              min="0.0001"
              step="any"
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
            Z-Score Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Z-score</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? result.z.toFixed(4) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Position vs mean</span>
              <span className="font-code-num text-code-num">
                {result
                  ? result.z === 0
                    ? "At the mean"
                    : result.aboveMean
                      ? "Above mean"
                      : "Below mean"
                  : "—"}
              </span>
            </div>
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Formula: z = (x − μ) / σ. Standard deviation must be greater than
              zero.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZScoreCalculator;
