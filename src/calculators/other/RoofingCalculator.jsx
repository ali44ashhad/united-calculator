import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/roofing-calculator";

const DEFAULTS = {
  length: "40",
  width: "30",
  pitch: "6",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeRoofing = (length, width, pitch) => {
  if (length.trim() === "" || width.trim() === "" || pitch.trim() === "") {
    return null;
  }

  const l = parseFloat(length);
  const w = parseFloat(width);
  const p = parseFloat(pitch);

  if (isNaN(l) || isNaN(w) || isNaN(p)) {
    return { error: "Enter valid numbers for length, width, and pitch." };
  }

  if (l <= 0 || w <= 0) {
    return { error: "Length and width must be greater than zero." };
  }

  if (p < 0 || p > 24) {
    return {
      error: "Pitch is rise per 12 in run—use 0 for flat up to about 24 for very steep.",
    };
  }

  const footprintSqFt = l * w;
  const pitchFactor = Math.sqrt(1 + Math.pow(p / 12, 2));
  const surfaceSqFt = footprintSqFt * pitchFactor;
  const roofingSquares = surfaceSqFt / 100;

  return {
    l,
    w,
    p,
    footprintSqFt,
    pitchFactor,
    surfaceSqFt,
    roofingSquares,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const RoofingCalculator = () => {
  const [length, setLength] = useState(DEFAULTS.length);
  const [width, setWidth] = useState(DEFAULTS.width);
  const [pitch, setPitch] = useState(DEFAULTS.pitch);

  const result = computeRoofing(length, width, pitch);

  const reset = () => {
    setLength(DEFAULTS.length);
    setWidth(DEFAULTS.width);
    setPitch(DEFAULTS.pitch);
  };

  return (
    <>
      <Helmet>
        <title>
          Roofing Calculator - Roof Area (sq ft) from Length, Width &amp; Pitch
        </title>
        <meta
          name="description"
          content="Estimate true roof surface area in square feet from footprint length and width in feet and pitch (rise per 12 in run). Includes roofing squares (100 sq ft)."
        />
        <meta
          name="keywords"
          content="roofing calculator square feet, roof pitch area calculator, 6/12 pitch roof area, roofing squares calculator, footprint to roof surface area, shingle quantity estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Roofing Calculator - Area &amp; Squares"
        />
        <meta
          property="og:description"
          content="Length × width × pitch factor → sloped roof area in sq ft."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roofing Calculator" />
        <meta
          name="twitter:description"
          content="Roof surface area from footprint and pitch."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Roofing Calculator",
            url: PAGE_URL,
            description:
              "Calculate sloped roof surface area in square feet from rectangular footprint and pitch in rise per 12 inches run.",
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
            name: "Roofing Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate roof surface area and roofing squares from dimensions and pitch.",
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
            headline: "How to Calculate Roof Surface Area from Pitch and Footprint",
            description:
              "Multiply footprint by pitch factor sqrt(1 + (rise/12)²) to approximate true roof area for material estimates.",
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
                name: "How is roof area calculated from pitch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Surface area equals footprint length times width times sqrt(1 + (pitch/12)²), where pitch is rise per 12 inches of horizontal run.",
                },
              },
              {
                "@type": "Question",
                name: "What is a roofing square?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One roofing square is 100 square feet of roof surface. Divide your total sq ft by 100 to get squares for shingle ordering.",
                },
              },
              {
                "@type": "Question",
                name: "What does 6/12 pitch mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The roof rises 6 inches for every 12 inches of horizontal run. Enter 6 in the pitch field for a 6/12 slope.",
                },
              },
              {
                "@type": "Question",
                name: "Does this include waste or ridge cap?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is geometry only. Contractors often add 10–15% waste for cuts, hips, and valleys.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use meters instead of feet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This calculator expects feet for length and width. Convert meters to feet first, or use a general conversion tool.",
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
                name: "Roofing Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Roof length (ft)
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
              Roof width (ft)
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

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Pitch (rise / 12 in run)
            </label>
            <input
              type="number"
              value={pitch}
              onChange={(e) => setPitch(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.pitch}
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Roofing area summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Footprint</span>
              <span className="font-code-num text-code-num">
                {result?.footprintSqFt != null && !result.error
                  ? `${fmt2(result.l)} × ${fmt2(result.w)} ft = ${fmt2(result.footprintSqFt)} ft²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Pitch</span>
              <span className="font-code-num text-code-num">
                {result?.p != null && !result.error
                  ? `${fmt2(result.p)}/12`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Pitch factor</span>
              <span className="font-code-num text-code-num">
                {result?.pitchFactor != null && !result.error
                  ? fmt2(result.pitchFactor)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Roof surface area</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.surfaceSqFt != null && !result.error
                  ? `${fmt2(result.surfaceSqFt)} ft²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Roofing squares (÷100)</span>
              <span className="font-code-num text-code-num">
                {result?.roofingSquares != null && !result.error
                  ? fmt2(result.roofingSquares)
                  : "—"}
              </span>
            </div>
            {result?.roofingSquares != null && !result.error && (
              <p className="text-sm text-on-surface-variant">
                Round up for ordering (e.g.{" "}
                <strong>{Math.ceil(result.roofingSquares)} squares</strong> before
                waste allowance).
              </p>
            )}
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <p>
                <strong>Surface = footprint × √(1 + (pitch÷12)²)</strong>. One
                square = 100 ft² of roof.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Add 10–15% material for waste, ridges, and valleys. This page does
              not price shingles or labor.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RoofingCalculator;
