import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/mulch-calculator";

const DEFAULTS = {
  length: "10",
  width: "10",
  depth: "3",
};

/** Typical bagged mulch is often ~2 cubic feet per bag. */
const CU_FT_PER_BAG = 2;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMulch = (length, width, depth) => {
  if (length.trim() === "" || width.trim() === "" || depth.trim() === "") {
    return null;
  }

  const l = parseFloat(length);
  const w = parseFloat(width);
  const d = parseFloat(depth);

  if (isNaN(l) || isNaN(w) || isNaN(d)) {
    return { error: "Enter valid numbers for length, width, and depth." };
  }

  if (l <= 0 || w <= 0 || d <= 0) {
    return {
      error: "Length, width, and depth must be greater than zero.",
    };
  }

  const areaSqFt = l * w;
  const volumeCuFt = areaSqFt * (d / 12);
  const volumeCuYd = volumeCuFt / 27;
  const bagsEstimate = Math.ceil(volumeCuFt / CU_FT_PER_BAG);

  return {
    l,
    w,
    d,
    areaSqFt,
    volumeCuFt,
    volumeCuYd,
    bagsEstimate,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const MulchCalculator = () => {
  const [length, setLength] = useState(DEFAULTS.length);
  const [width, setWidth] = useState(DEFAULTS.width);
  const [depth, setDepth] = useState(DEFAULTS.depth);

  const result = computeMulch(length, width, depth);

  const reset = () => {
    setLength(DEFAULTS.length);
    setWidth(DEFAULTS.width);
    setDepth(DEFAULTS.depth);
  };

  return (
    <>
      <Helmet>
        <title>
          Mulch Calculator - Cubic Yards from Length, Width & Depth (in)
        </title>
        <meta
          name="description"
          content="Estimate mulch in cubic yards and cubic feet from bed length and width in feet and depth in inches. Includes optional 2 cu ft bag count for garden projects."
        />
        <meta
          name="keywords"
          content="mulch calculator cubic yards, how much mulch do I need calculator, garden mulch calculator feet inches, landscaping mulch volume, mulch depth calculator, cubic feet mulch to bags, bark mulch yard calculator, flower bed mulch estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mulch Calculator - Cubic Yards"
        />
        <meta
          property="og:description"
          content="Feet × feet × depth in inches → cubic yards of mulch."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mulch Calculator" />
        <meta
          name="twitter:description"
          content="Mulch volume for garden beds in cubic yards."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mulch Calculator",
            url: PAGE_URL,
            description:
              "Calculate mulch volume in cubic yards and cubic feet from rectangular bed dimensions in feet and mulch depth in inches.",
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
            name: "Mulch Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate mulch quantity in cubic yards from area and depth.",
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
            headline: "How to Calculate Mulch in Cubic Yards for a Garden Bed",
            description:
              "Multiply length by width in feet, convert depth from inches to feet, divide by 27 for cubic yards.",
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
                name: "How do you convert mulch volume to cubic yards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiply length (ft) × width (ft) × depth (in ÷ 12) to get cubic feet, then divide by 27 because one cubic yard equals 27 cubic feet.",
                },
              },
              {
                "@type": "Question",
                name: "How deep should mulch be?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many guides suggest about 2–4 inches for flower beds. Enter your target depth in inches; add extra if the supplier recommends compaction or settling.",
                },
              },
              {
                "@type": "Question",
                name: "How many mulch bags do I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This page estimates bags assuming about 2 cubic feet per standard bag. Bag sizes vary—check the label on your product.",
                },
              },
              {
                "@type": "Question",
                name: "What units does this mulch calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Length and width in feet, depth in inches. Results show cubic feet, cubic yards, and an approximate bag count.",
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
                name: "Mulch Calculator",
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

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Depth (inches)
            </label>
            <input
              type="number"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.depth}
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
            Mulch estimate
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Bed area</span>
              <span className="font-code-num text-code-num">
                {result?.areaSqFt != null && !result.error
                  ? `${fmt2(result.areaSqFt)} ft² (${fmt2(result.l)} × ${fmt2(result.w)} ft)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Depth</span>
              <span className="font-code-num text-code-num">
                {result?.d != null && !result.error
                  ? `${fmt2(result.d)} in (${fmt2(result.d / 12)} ft)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Volume</span>
              <span className="font-code-num text-code-num">
                {result?.volumeCuFt != null && !result.error
                  ? `${fmt2(result.volumeCuFt)} ft³`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Cubic yards</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.volumeCuYd != null && !result.error
                  ? `${fmt2(result.volumeCuYd)} yd³`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">
                Bags (~{CU_FT_PER_BAG} ft³ each)
              </span>
              <span className="font-code-num text-code-num">
                {result?.bagsEstimate != null && !result.error
                  ? `≈ ${result.bagsEstimate.toLocaleString()} bags`
                  : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
              <p>
                <strong>ft³ = L × W × (depth ÷ 12)</strong>, then{" "}
                <strong>yd³ = ft³ ÷ 27</strong>.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Order a little extra for uneven beds and settling. Bulk delivery
              is usually quoted in cubic yards; bag counts depend on brand size.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MulchCalculator;
