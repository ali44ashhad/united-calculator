import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/square-footage-calculator";

const SQFT_TO_SQM = 0.09290304;

const DEFAULTS = {
  length: "12",
  width: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeSquareFootage = (length, width) => {
  if (length.trim() === "" || width.trim() === "") {
    return null;
  }

  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) {
    return { error: "Enter valid numbers for length and width." };
  }

  if (l <= 0 || w <= 0) {
    return { error: "Length and width must be greater than zero." };
  }

  const sqFt = l * w;
  const sqM = sqFt * SQFT_TO_SQM;

  return { l, w, sqFt, sqM };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const SquareFootageCalculator = () => {
  const [length, setLength] = useState(DEFAULTS.length);
  const [width, setWidth] = useState(DEFAULTS.width);

  const result = computeSquareFootage(length, width);

  const reset = () => {
    setLength(DEFAULTS.length);
    setWidth(DEFAULTS.width);
  };

  return (
    <>
      <Helmet>
        <title>
          Square Footage Calculator - Area in ft² from Length &amp; Width (feet)
        </title>
        <meta
          name="description"
          content="Calculate square feet for a rectangular room or plot from length and width in feet. Includes approximate square meters (m²) conversion."
        />
        <meta
          name="keywords"
          content="square footage calculator, room area calculator sq ft, length times width square feet, floor area calculator feet, convert sq ft to sq m"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Square Footage Calculator - ft² Area"
        />
        <meta
          property="og:description"
          content="Length × width in feet → square feet and approximate m²."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Square Footage Calculator" />
        <meta
          name="twitter:description"
          content="Rectangular area in square feet from dimensions in feet."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Square Footage Calculator",
            url: PAGE_URL,
            description:
              "Calculate rectangular floor area in square feet from length and width in feet.",
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
            name: "Square Footage Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute square footage and approximate square meters for rectangular areas.",
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
            headline: "How to Calculate Square Footage for a Rectangle",
            description:
              "Multiply length in feet by width in feet to get area in square feet for rooms, decks, and plots.",
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
                name: "How do you calculate square footage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For a rectangle, multiply length in feet by width in feet. The result is area in square feet (ft²).",
                },
              },
              {
                "@type": "Question",
                name: "How do I convert square feet to square meters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiply square feet by about 0.092903 to get square meters, or divide square meters by that factor to get square feet.",
                },
              },
              {
                "@type": "Question",
                name: "Does this work for irregular rooms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This page is for one rectangle. Split L-shaped or complex floors into smaller rectangles, calculate each, then add the areas.",
                },
              },
              {
                "@type": "Question",
                name: "Should I include closets in square footage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For materials like flooring, measure every space you will cover. Real estate listings vary—follow local convention for listings.",
                },
              },
              {
                "@type": "Question",
                name: "How much extra flooring should I order?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many installers add 5–10% for cuts and waste; complex layouts may need more. Use total ft² from this calculator as your base.",
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
                name: "Square Footage Calculator",
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
              Length (feet)
            </label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.length}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Width (feet)
            </label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.width}
              min="0"
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Area summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Dimensions</span>
              <span className="font-code-num text-code-num text-right">
                {result?.l != null && !result.error
                  ? `${fmt2(result.l)} ft × ${fmt2(result.w)} ft`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Square footage</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.sqFt != null && !result.error
                  ? `${fmt2(result.sqFt)} ft²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Square meters (approx.)</span>
              <span className="font-code-num text-code-num">
                {result?.sqM != null && !result.error
                  ? `${fmt2(result.sqM)} m²`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <strong>Area = length × width</strong> in feet. For sloped roof
              surface (not flat footprint), use the Roofing Calculator. Add 5–10%
              extra material for cuts when ordering tile or flooring.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SquareFootageCalculator;
