import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/concrete-calculator";

const DEFAULTS = {
  length: "10",
  width: "8",
  depth: "6",
};

const CUBIC_FEET_PER_YARD = 27;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeConcrete = (length, width, depth) => {
  if ([length, width, depth].some((v) => v.trim() === "")) {
    return null;
  }

  const l = parseFloat(length);
  const w = parseFloat(width);
  const d = parseFloat(depth);

  if ([l, w, d].some((n) => isNaN(n) || n <= 0)) {
    return {
      error: "Enter positive length and width (ft) and depth (in).",
    };
  }

  const depthInFeet = d / 12;
  const cubicFeet = l * w * depthInFeet;
  const cubicYards = cubicFeet / CUBIC_FEET_PER_YARD;

  return {
    depthInFeet,
    cubicFeet,
    cubicYards,
  };
};

const ConcreteCalculator = () => {
  const [length, setLength] = useState(DEFAULTS.length);
  const [width, setWidth] = useState(DEFAULTS.width);
  const [depth, setDepth] = useState(DEFAULTS.depth);

  const result = computeConcrete(length, width, depth);

  const reset = () => {
    setLength(DEFAULTS.length);
    setWidth(DEFAULTS.width);
    setDepth(DEFAULTS.depth);
  };

  return (
    <>
      <Helmet>
        <title>
          Concrete Calculator - Cubic Yards & Cubic Feet for Slabs & Footings
        </title>
        <meta
          name="description"
          content="Estimate concrete volume from slab length and width in feet and depth in inches. Results in cubic feet and cubic yards (÷27)."
        />
        <meta
          name="keywords"
          content="concrete calculator cubic yards, how much concrete do I need calculator, slab concrete volume calculator, concrete yardage calculator feet inches, pour concrete estimate, construction concrete calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Concrete Calculator - Yards & Cubic Feet"
        />
        <meta
          property="og:description"
          content="Enter length, width in feet and depth in inches to estimate concrete volume."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Concrete Calculator - Slab Volume"
        />
        <meta
          name="twitter:description"
          content="Quick concrete yardage estimate for rectangular pours."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Concrete Calculator",
            url: PAGE_URL,
            description:
              "Estimate concrete volume in cubic feet and cubic yards from rectangular slab dimensions.",
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
            name: "Concrete Calculator",
            url: PAGE_URL,
            description:
              "Web application to estimate concrete volume using length and width in feet and depth in inches.",
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
            headline:
              "How to Calculate Concrete Volume in Cubic Yards for a Slab",
            description:
              "Guide to converting slab depth from inches to feet, finding cubic feet, and dividing by 27 for ready-mix yardage.",
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
                name: "How does this concrete calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It multiplies length × width (feet) × depth (inches ÷ 12) to get cubic feet, then divides by 27 for cubic yards.",
                },
              },
              {
                "@type": "Question",
                name: "Why divide by 27?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One cubic yard equals 27 cubic feet (3 ft × 3 ft × 3 ft). Ready-mix concrete is typically ordered in cubic yards.",
                },
              },
              {
                "@type": "Question",
                name: "Does this include waste or rebar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It estimates net volume for a rectangular prism. Add 5–10% extra for waste, uneven subgrade, or spillage when ordering.",
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
                name: "Concrete Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Length</label>
            <div className="relative">
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.length}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                ft
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Width</label>
            <div className="relative">
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.width}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                ft
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Depth</label>
            <div className="relative max-w-md">
              <input
                type="number"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.depth}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                in
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
            Concrete Volume Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Depth (converted)</span>
              <span className="font-code-num text-code-num">
                {result?.depthInFeet != null
                  ? `${result.depthInFeet.toFixed(3)} ft`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Volume</span>
              <span className="font-code-num text-code-num">
                {result?.cubicFeet != null
                  ? `${result.cubicFeet.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })} cu ft`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Concrete needed (÷ {CUBIC_FEET_PER_YARD})
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.cubicYards != null
                  ? `${result.cubicYards.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })} cu yd`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Rectangular slab only. Add 5–10% for waste when ordering
              ready-mix. Does not model footings, steps, or irregular shapes.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConcreteCalculator;
