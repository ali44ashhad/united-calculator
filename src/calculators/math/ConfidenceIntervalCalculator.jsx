import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/confidence-interval-calculator";

const DEFAULTS = {
  mean: "100",
  stdDev: "15",
  sampleSize: "30",
  confidenceLevel: "95",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const CONFIDENCE_LEVELS = [
  { value: "90", label: "90%", z: 1.645 },
  { value: "95", label: "95%", z: 1.96 },
  { value: "99", label: "99%", z: 2.576 },
];

const getZValue = (confidence) => {
  const level = CONFIDENCE_LEVELS.find((c) => c.value === String(confidence));
  return level?.z ?? 1.96;
};

const computeConfidenceInterval = (
  mean,
  stdDev,
  sampleSize,
  confidenceLevel,
) => {
  if (
    mean.trim() === "" ||
    stdDev.trim() === "" ||
    sampleSize.trim() === ""
  ) {
    return null;
  }

  const xBar = parseFloat(mean);
  const sigma = parseFloat(stdDev);
  const n = parseInt(sampleSize, 10);
  const z = getZValue(confidenceLevel);

  if (isNaN(xBar) || isNaN(sigma) || isNaN(n)) {
    return { error: "Enter valid numbers for mean, standard deviation, and sample size." };
  }

  if (n <= 0) {
    return { error: "Sample size must be greater than zero." };
  }

  if (sigma < 0) {
    return { error: "Standard deviation cannot be negative." };
  }

  const standardError = sigma / Math.sqrt(n);
  const margin = z * standardError;
  const lower = xBar - margin;
  const upper = xBar + margin;

  return {
    mean: xBar,
    stdDev: sigma,
    sampleSize: n,
    confidenceLevel: parseInt(confidenceLevel, 10),
    z,
    standardError,
    margin,
    lower,
    upper,
    formula: "CI = x̄ ± z × (σ / √n)  [known σ, z-interval]",
  };
};

const fmtNum = (n, max = 4) =>
  parseFloat(n.toFixed(max)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: max,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a confidence interval?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A range that estimates a population mean with a chosen confidence level. This tool uses x̄ ± z × (σ/√n) when population standard deviation σ is known.",
    },
  },
  {
    "@type": "Question",
    name: "What formula does this confidence interval calculator use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Margin of error = z × (σ / √n). Interval = sample mean ± margin. z is 1.645 (90%), 1.96 (95%), or 2.576 (99%).",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use sample standard deviation s?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Enter population σ. For unknown σ with small samples, a t-interval with sample s is appropriate—not implemented on this page.",
    },
  },
  {
    "@type": "Question",
    name: "Can I calculate a confidence interval for a proportion?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page is for a population mean with known σ. Proportion intervals use a different formula.",
    },
  },
  {
    "@type": "Question",
    name: "What confidence levels are available?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "90%, 95%, and 99% with standard normal z critical values.",
    },
  },
  {
    "@type": "Question",
    name: "What is the standard error in this calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Standard error of the mean = σ / √n. It measures variability of the sample mean across repeated samples.",
    },
  },
];

const ConfidenceIntervalCalculator = () => {
  const [mean, setMean] = useState(DEFAULTS.mean);
  const [stdDev, setStdDev] = useState(DEFAULTS.stdDev);
  const [sampleSize, setSampleSize] = useState(DEFAULTS.sampleSize);
  const [confidenceLevel, setConfidenceLevel] = useState(
    DEFAULTS.confidenceLevel,
  );

  const result = computeConfidenceInterval(
    mean,
    stdDev,
    sampleSize,
    confidenceLevel,
  );

  const reset = () => {
    setMean(DEFAULTS.mean);
    setStdDev(DEFAULTS.stdDev);
    setSampleSize(DEFAULTS.sampleSize);
    setConfidenceLevel(DEFAULTS.confidenceLevel);
  };

  return (
    <>
      <Helmet>
        <title>
          Confidence Interval Calculator - Mean (Known σ, z-Interval)
        </title>
        <meta
          name="description"
          content="CI for population mean: x̄ ± z(σ/√n). Sample mean, known σ, n, 90/95/99% levels—not proportions or t-intervals."
        />
        <meta
          name="keywords"
          content="confidence interval calculator, margin of error, z interval population mean, standard error calculator, 95 percent confidence interval"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Confidence Interval Calculator" />
        <meta
          property="og:description"
          content="Confidence interval for mean with known σ."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Confidence Interval Calculator"
        />
        <meta
          name="twitter:description"
          content="x̄ ± z × σ/√n for population mean."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Confidence Interval Calculator",
            url: PAGE_URL,
            description:
              "Calculate z-based confidence interval for population mean.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Confidence Interval Calculator",
            url: PAGE_URL,
            description: "Web tool for mean confidence intervals with known σ.",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Confidence Interval for a Population Mean",
            description: "z critical values and margin of error with known σ.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_SCHEMA,
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Math Calculators",
                item: "https://www.unitedcalculator.net/math",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Confidence Interval Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Sample mean (x̄)
            </label>
            <input
              type="number"
              step="any"
              value={mean}
              onChange={(e) => setMean(e.target.value)}
              placeholder="e.g. 100"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Population standard deviation (σ)
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={stdDev}
              onChange={(e) => setStdDev(e.target.value)}
              placeholder="e.g. 15"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Sample size (n)
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={sampleSize}
              onChange={(e) => setSampleSize(e.target.value)}
              placeholder="e.g. 30"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Confidence level
            </label>
            <select
              value={confidenceLevel}
              onChange={(e) => setConfidenceLevel(e.target.value)}
              className={inputClassName}
            >
              {CONFIDENCE_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label} (z = {level.z})
                </option>
              ))}
            </select>
            <p className="text-sm text-on-surface-variant">
              z-interval with known σ—not sample s or proportion CI.
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
            Confidence interval summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Confidence interval
              </span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%]">
                {result && !result.error
                  ? `${fmtNum(result.lower)} to ${fmtNum(result.upper)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Margin of error (±)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.margin) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Standard error (σ/√n)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? fmtNum(result.standardError)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">z critical value</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.z : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Confidence level</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.confidenceLevel}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Sample mean (x̄)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.mean) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">σ and n used</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error
                  ? `σ = ${fmtNum(result.stdDev)}, n = ${result.sampleSize}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Interpretation depends on study design; this is a math tool only.`
                : "Enter sample mean, known σ, n, and confidence level."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConfidenceIntervalCalculator;
