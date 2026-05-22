import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/resistor-calculator";

const DEFAULTS = {
  band1: "brown",
  band2: "black",
  multiplier: "red",
  tolerance: "gold",
};

const COLOR_VALUES = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  white: 9,
};

const MULTIPLIERS = {
  black: 1,
  brown: 10,
  red: 100,
  orange: 1000,
  yellow: 10000,
  green: 100000,
  blue: 1000000,
  gold: 0.1,
  silver: 0.01,
};

const TOLERANCE_LABELS = {
  brown: "±1%",
  red: "±2%",
  green: "±0.5%",
  blue: "±0.25%",
  violet: "±0.1%",
  gray: "±0.05%",
  gold: "±5%",
  silver: "±10%",
};

const TOLERANCE_PERCENT = {
  brown: 1,
  red: 2,
  green: 0.5,
  blue: 0.25,
  violet: 0.1,
  gray: 0.05,
  gold: 5,
  silver: 10,
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all capitalize";

const formatResistance = (ohms) => {
  const abs = Math.abs(ohms);
  if (abs >= 1e6) {
    return `${parseFloat((ohms / 1e6).toFixed(2))} MΩ`;
  }
  if (abs >= 1e3) {
    return `${parseFloat((ohms / 1e3).toFixed(2))} kΩ`;
  }
  if (abs < 1 && abs > 0) {
    return `${parseFloat(ohms.toFixed(3))} Ω`;
  }
  return `${parseFloat(ohms.toFixed(2))} Ω`;
};

const computeResistance = (band1, band2, multiplier, tolerance) => {
  const digit1 = COLOR_VALUES[band1];
  const digit2 = COLOR_VALUES[band2];
  const mult = MULTIPLIERS[multiplier];

  if (digit1 === undefined || digit2 === undefined || mult === undefined) {
    return { error: "Invalid band selection." };
  }

  const ohms = (digit1 * 10 + digit2) * mult;
  const tolLabel = TOLERANCE_LABELS[tolerance] ?? "—";
  const tolPct = TOLERANCE_PERCENT[tolerance];
  const minOhms =
    tolPct != null ? ohms * (1 - tolPct / 100) : null;
  const maxOhms =
    tolPct != null ? ohms * (1 + tolPct / 100) : null;

  return {
    band1,
    band2,
    multiplier,
    tolerance,
    digits: `${digit1}${digit2}`,
    ohms,
    formatted: formatResistance(ohms),
    tolLabel,
    minOhms,
    maxOhms,
  };
};

const ResistorCalculator = () => {
  const [band1, setBand1] = useState(DEFAULTS.band1);
  const [band2, setBand2] = useState(DEFAULTS.band2);
  const [multiplier, setMultiplier] = useState(DEFAULTS.multiplier);
  const [tolerance, setTolerance] = useState(DEFAULTS.tolerance);

  const result = computeResistance(band1, band2, multiplier, tolerance);

  const reset = () => {
    setBand1(DEFAULTS.band1);
    setBand2(DEFAULTS.band2);
    setMultiplier(DEFAULTS.multiplier);
    setTolerance(DEFAULTS.tolerance);
  };

  const digitColors = Object.keys(COLOR_VALUES);
  const multiplierColors = Object.keys(MULTIPLIERS);
  const toleranceColors = Object.keys(TOLERANCE_LABELS);

  return (
    <>
      <Helmet>
        <title>
          Resistor Color Code Calculator - 4 Band Value &amp; Tolerance
        </title>
        <meta
          name="description"
          content="Decode 4-band resistor color codes: pick digit bands, multiplier, and tolerance to get resistance in ohms with min/max range. Brown-black-red-gold = 1 kΩ ±5%."
        />
        <meta
          name="keywords"
          content="resistor color code calculator, 4 band resistor calculator, resistor value from colors, ohm calculator color bands, resistor tolerance gold silver, electronics resistor decoder"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Resistor Color Code Calculator"
        />
        <meta
          property="og:description"
          content="Four-band resistor value and tolerance from color names."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resistor Calculator" />
        <meta
          name="twitter:description"
          content="Resistance from color bands."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Resistor Color Code Calculator",
            url: PAGE_URL,
            description:
              "Calculate resistance in ohms from four-band resistor color codes including tolerance.",
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
            name: "Resistor Calculator",
            url: PAGE_URL,
            description:
              "Web tool to decode 4-band resistor color codes into ohms and tolerance.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
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
            headline: "How to Read a 4-Band Resistor Color Code",
            description:
              "First two bands are digits, third is multiplier, fourth is tolerance—combine as (d1×10+d2)×multiplier ohms.",
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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": PAGE_URL,
            },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do you read a 4-band resistor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Band 1 and band 2 are the first two digits. The third band is the multiplier. The fourth band is tolerance (often gold ±5% or silver ±10%).",
                },
              },
              {
                "@type": "Question",
                name: "What is brown-black-red-gold?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Digits 1 and 0 with multiplier ×100 gives 1000 Ω (1 kΩ). Gold tolerance is ±5%.",
                },
              },
              {
                "@type": "Question",
                name: "What do gold and silver mean on the multiplier band?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On the third band, gold means ×0.1 and silver means ×0.01. On the fourth band they usually mean tolerance, not multiplication.",
                },
              },
              {
                "@type": "Question",
                name: "Does this calculator support 5-band resistors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. This page is for the common 4-band layout with two digit bands, one multiplier, and one tolerance band.",
                },
              },
              {
                "@type": "Question",
                name: "How is resistance calculated from colors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resistance in ohms equals (first digit × 10 + second digit) times the multiplier value for the third color.",
                },
              },
            ],
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
                name: "Other Calculators",
                item: "https://www.unitedcalculator.net/other",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Resistor Calculator",
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
              Band 1 (1st digit)
            </label>
            <select
              value={band1}
              onChange={(e) => setBand1(e.target.value)}
              className={inputClassName}
            >
              {digitColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Band 2 (2nd digit)
            </label>
            <select
              value={band2}
              onChange={(e) => setBand2(e.target.value)}
              className={inputClassName}
            >
              {digitColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Band 3 (multiplier)
            </label>
            <select
              value={multiplier}
              onChange={(e) => setMultiplier(e.target.value)}
              className={inputClassName}
            >
              {multiplierColors.map((color) => (
                <option key={color} value={color}>
                  {color} (×{MULTIPLIERS[color]})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Band 4 (tolerance)
            </label>
            <select
              value={tolerance}
              onChange={(e) => setTolerance(e.target.value)}
              className={inputClassName}
            >
              {toleranceColors.map((color) => (
                <option key={color} value={color}>
                  {color} {TOLERANCE_LABELS[color]}
                </option>
              ))}
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
            Resistance summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Color code</span>
              <span className="font-code-num text-code-num text-right capitalize">
                {result && !result.error
                  ? `${result.band1} · ${result.band2} · ${result.multiplier} · ${result.tolerance}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Significant digits</span>
              <span className="font-code-num text-code-num">
                {result?.digits && !result.error ? result.digits : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Resistance</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.formatted && !result.error
                  ? `${result.formatted} ${result.tolLabel}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Exact (Ω)</span>
              <span className="font-code-num text-code-num">
                {result?.ohms != null && !result.error
                  ? `${result.ohms.toLocaleString()} Ω`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Likely range</span>
              <span className="font-code-num text-code-num text-right">
                {result?.minOhms != null && !result.error
                  ? `${formatResistance(result.minOhms)} – ${formatResistance(result.maxOhms)}`
                  : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <p>
                <strong>R = (band1 × 10 + band2) × multiplier</strong>. Defaults:
                brown-black-red-gold → <strong>1 kΩ ±5%</strong>.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              4-band only. Body may read bands right-to-left—confirm with
              datasheet or meter before soldering.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResistorCalculator;