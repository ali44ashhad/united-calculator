import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/height-calculator";

const DEFAULTS = {
  height: "170",
  unit: "cm",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const UNIT_LABELS = {
  cm: "cm",
  ft: "ft",
  in: "in",
};

const toCm = (value, unit) => {
  if (unit === "cm") return value;
  if (unit === "ft") return value * 30.48;
  if (unit === "in") return value * 2.54;
  return NaN;
};

const computeHeight = (heightStr, unit) => {
  if (heightStr.trim() === "") {
    return null;
  }

  const h = parseFloat(heightStr);
  if (isNaN(h)) {
    return { error: "Enter a valid height number." };
  }
  if (h < 0) {
    return { error: "Height cannot be negative." };
  }

  const cm = toCm(h, unit);
  if (isNaN(cm) || cm > 1_000_000) {
    return { error: "Choose a supported unit (cm, ft, or in)." };
  }

  const totalInches = cm / 2.54;
  const wholeFeet = Math.floor(totalInches / 12);
  const inchRemainder = totalInches - wholeFeet * 12;
  const meters = cm / 100;

  return {
    inputValue: h,
    unit,
    cm,
    meters,
    wholeFeet,
    inchRemainder,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const HeightCalculator = () => {
  const [height, setHeight] = useState(DEFAULTS.height);
  const [unit, setUnit] = useState(DEFAULTS.unit);

  const result = computeHeight(height, unit);

  const reset = () => {
    setHeight(DEFAULTS.height);
    setUnit(DEFAULTS.unit);
  };

  return (
    <>
      <Helmet>
        <title>
          Height Calculator - cm, Meters & Feet-Inches from One Input
        </title>
        <meta
          name="description"
          content="Convert height between centimeters, meters, and feet plus inches. Enter a value in cm, feet, or inches and see all common formats."
        />
        <meta
          name="keywords"
          content="height converter cm to feet inches, meters from cm calculator, feet to cm height, inches to centimeters height, human height units"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Height Calculator - Unit Conversion"
        />
        <meta
          property="og:description"
          content="Convert height to cm, meters, and ft/in from one entry."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Height Calculator" />
        <meta
          name="twitter:description"
          content="Height in cm, m, and feet and inches."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Height Calculator",
            url: PAGE_URL,
            description:
              "Convert and compare height in centimeters, meters, and feet and inches using standard conversion factors.",
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
            name: "Height Calculator",
            url: PAGE_URL,
            description:
              "Web tool to convert height measurements between centimeters, meters, feet, and inches.",
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
            headline: "How to Convert Height Between Centimeters, Meters, and Feet-Inches",
            description:
              "Use 1 inch = 2.54 cm and 1 foot = 12 inches to move between metric and US customary height units.",
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
                name: "How many centimeters are in an inch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "By international definition, 1 inch equals exactly 2.54 centimeters.",
                },
              },
              {
                "@type": "Question",
                name: "How are feet and inches calculated from centimeters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Total inches equals centimeters divided by 2.54. Whole feet are the integer part of total inches divided by 12; the remainder is the inch portion.",
                },
              },
              {
                "@type": "Question",
                name: "Can I enter decimal feet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Feet are converted using 1 foot = 30.48 cm, so decimal feet (for example 5.5) are accepted.",
                },
              },
              {
                "@type": "Question",
                name: "Does this round for medical records?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The tool rounds for display. For clinical documentation, follow your provider or charting system's rounding rules.",
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
                name: "Height Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Height</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.height}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Input unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className={inputClassName}
            >
              <option value="cm">Centimeters (cm)</option>
              <option value="ft">Feet (ft)</option>
              <option value="in">Inches (in)</option>
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
            Height summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Your entry</span>
              <span className="font-code-num text-code-num text-right">
                {result?.inputValue != null && !result.error
                  ? `${fmt2(result.inputValue)} ${UNIT_LABELS[result.unit] ?? ""}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Centimeters</span>
              <span className="font-code-num text-code-num">
                {result?.cm != null && !result.error
                  ? `${fmt2(result.cm)} cm`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Meters</span>
              <span className="font-code-num text-code-num">
                {result?.meters != null && !result.error
                  ? `${fmt2(result.meters)} m`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Feet and inches</span>
              <span className="font-code-num text-code-num text-primary text-lg text-right">
                {result?.wholeFeet != null && !result.error
                  ? `${result.wholeFeet} ft ${fmt2(result.inchRemainder)} in`
                  : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
              <p>
                Uses <strong>1 in = 2.54 cm</strong> and <strong>1 ft = 12 in</strong>{" "}
                (so <strong>1 ft = 30.48 cm</strong>). Feet shown are whole feet
                plus the remaining inches, including fractional inches.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              For clothing or ergonomic fit, also check brand-specific size
              charts—they do not always match body height alone.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeightCalculator;
