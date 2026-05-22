import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/tile-calculator";

const WASTE_FACTOR = 1.1;

const DEFAULTS = {
  floorLength: "12",
  floorWidth: "10",
  tileLength: "1",
  tileWidth: "1",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeTiles = (floorLength, floorWidth, tileLength, tileWidth) => {
  if (
    floorLength.trim() === "" ||
    floorWidth.trim() === "" ||
    tileLength.trim() === "" ||
    tileWidth.trim() === ""
  ) {
    return null;
  }

  const fL = parseFloat(floorLength);
  const fW = parseFloat(floorWidth);
  const tL = parseFloat(tileLength);
  const tW = parseFloat(tileWidth);

  if (isNaN(fL) || isNaN(fW) || isNaN(tL) || isNaN(tW)) {
    return { error: "Enter valid numbers for floor and tile dimensions." };
  }

  if (fL <= 0 || fW <= 0 || tL <= 0 || tW <= 0) {
    return {
      error: "Floor and tile length and width must be greater than zero.",
    };
  }

  const floorAreaSqFt = fL * fW;
  const tileAreaSqFt = tL * tW;
  const tilesNeeded = Math.ceil(floorAreaSqFt / tileAreaSqFt);
  const tilesWithWaste = Math.ceil(tilesNeeded * WASTE_FACTOR);

  return {
    fL,
    fW,
    tL,
    tW,
    floorAreaSqFt,
    tileAreaSqFt,
    tilesNeeded,
    tilesWithWaste,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const TileCalculator = () => {
  const [floorLength, setFloorLength] = useState(DEFAULTS.floorLength);
  const [floorWidth, setFloorWidth] = useState(DEFAULTS.floorWidth);
  const [tileLength, setTileLength] = useState(DEFAULTS.tileLength);
  const [tileWidth, setTileWidth] = useState(DEFAULTS.tileWidth);

  const result = computeTiles(floorLength, floorWidth, tileLength, tileWidth);

  const reset = () => {
    setFloorLength(DEFAULTS.floorLength);
    setFloorWidth(DEFAULTS.floorWidth);
    setTileLength(DEFAULTS.tileLength);
    setTileWidth(DEFAULTS.tileWidth);
  };

  return (
    <>
      <Helmet>
        <title>
          Tile Calculator - How Many Tiles for Floor Area (feet)
        </title>
        <meta
          name="description"
          content="Estimate tile count from floor length and width in feet and tile size in feet. Includes floor area, tile area, and optional 10% waste allowance."
        />
        <meta
          name="keywords"
          content="tile calculator square feet, how many tiles do I need, floor tile quantity calculator, 12x12 tile calculator feet, tile waste percentage estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tile Calculator - Tile Count from Area"
        />
        <meta
          property="og:description"
          content="Floor ft × ft ÷ tile ft × ft, rounded up—with 10% waste line."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tile Calculator" />
        <meta
          name="twitter:description"
          content="How many tiles for your floor area in square feet."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Tile Calculator",
            url: PAGE_URL,
            description:
              "Calculate how many floor tiles are needed from room dimensions and tile size, all in feet.",
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
            name: "Tile Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate tile quantity from floor and tile dimensions in feet.",
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
            headline: "How to Estimate Tile Quantity from Floor Square Footage",
            description:
              "Divide total floor area in square feet by one tile's area in square feet and round up; add extra for cuts and waste.",
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
                name: "How do I calculate how many tiles I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiply floor length by width in feet for floor area. Multiply tile length by width in feet for tile area. Divide floor area by tile area and round up to a whole tile count.",
                },
              },
              {
                "@type": "Question",
                name: "Are tile dimensions in inches or feet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This calculator uses feet for all inputs. A 12×12 inch tile is 1 foot by 1 foot. Divide inch dimensions by 12 to enter feet.",
                },
              },
              {
                "@type": "Question",
                name: "How much extra tile should I buy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many installers add 10–15% for cuts, breakage, and pattern waste. This page shows a 10% waste line above the bare minimum.",
                },
              },
              {
                "@type": "Question",
                name: "Does grout gap change the count?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Grout lines slightly reduce coverage per tile. For tight estimates, use the net tile face size or add extra waste percentage.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use this for wall tile?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you measure the tiled wall as a rectangle in feet and enter tile size in feet the same way.",
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
                name: "Tile Calculator",
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
              Floor length (ft)
            </label>
            <input
              type="number"
              value={floorLength}
              onChange={(e) => setFloorLength(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.floorLength}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Floor width (ft)
            </label>
            <input
              type="number"
              value={floorWidth}
              onChange={(e) => setFloorWidth(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.floorWidth}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Tile length (ft)
            </label>
            <input
              type="number"
              value={tileLength}
              onChange={(e) => setTileLength(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.tileLength}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Tile width (ft)
            </label>
            <input
              type="number"
              value={tileWidth}
              onChange={(e) => setTileWidth(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.tileWidth}
              min="0"
              step="any"
            />
          </div>
        </div>

        <p className="text-sm text-on-surface-variant">
          Inch-sized tiles: divide each side by 12 (e.g. 12″ × 12″ → 1 ft × 1 ft).
        </p>

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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Tile summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Floor area</span>
              <span className="font-code-num text-code-num">
                {result?.floorAreaSqFt != null && !result.error
                  ? `${fmt2(result.fL)} × ${fmt2(result.fW)} ft = ${fmt2(result.floorAreaSqFt)} ft²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Tile area</span>
              <span className="font-code-num text-code-num">
                {result?.tileAreaSqFt != null && !result.error
                  ? `${fmt2(result.tL)} × ${fmt2(result.tW)} ft = ${fmt2(result.tileAreaSqFt)} ft²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Tiles needed (minimum)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.tilesNeeded != null && !result.error
                  ? result.tilesNeeded.toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">With ~10% waste</span>
              <span className="font-code-num text-code-num">
                {result?.tilesWithWaste != null && !result.error
                  ? result.tilesWithWaste.toLocaleString()
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <strong>Tiles = ⌈floor area ÷ tile area⌉</strong>. Diagonal layouts
              and grout may need 15%+ extra. Does not price boxes or coverage per
              carton.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TileCalculator;
