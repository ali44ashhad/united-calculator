import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/gravel-calculator";

const DEFAULTS = {
  length: "10",
  width: "5",
  depth: "15",
  density: "1600",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeGravel = (length, width, depth, density) => {
  if (
    length.trim() === "" ||
    width.trim() === "" ||
    depth.trim() === "" ||
    density.trim() === ""
  ) {
    return null;
  }

  const l = parseFloat(length);
  const w = parseFloat(width);
  const d = parseFloat(depth);
  const dens = parseFloat(density);

  if (isNaN(l) || isNaN(w) || isNaN(d) || isNaN(dens)) {
    return {
      error: "Enter valid numbers for length, width, depth, and density.",
    };
  }

  if (l <= 0 || w <= 0 || d <= 0) {
    return {
      error: "Length, width, and depth must be greater than zero.",
    };
  }

  if (dens <= 0) {
    return { error: "Gravel density must be greater than zero." };
  }

  const volumeM3 = l * w * (d / 100);
  const weightKg = volumeM3 * dens;
  const tonsMetric = weightKg / 1000;

  return { l, w, d, dens, volumeM3, weightKg, tonsMetric };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const GravelCalculator = () => {
  const [length, setLength] = useState(DEFAULTS.length);
  const [width, setWidth] = useState(DEFAULTS.width);
  const [depth, setDepth] = useState(DEFAULTS.depth);
  const [density, setDensity] = useState(DEFAULTS.density);

  const result = computeGravel(length, width, depth, density);

  const reset = () => {
    setLength(DEFAULTS.length);
    setWidth(DEFAULTS.width);
    setDepth(DEFAULTS.depth);
    setDensity(DEFAULTS.density);
  };

  return (
    <>
      <Helmet>
        <title>
          Gravel Calculator - Volume, Weight & Metric Tons from Area & Depth
        </title>
        <meta
          name="description"
          content="Estimate gravel volume in cubic meters and weight in kilograms or metric tons from length, width, depth in cm, and bulk density in kg/m³."
        />
        <meta
          name="keywords"
          content="gravel calculator cubic meters, gravel weight calculator kg, metric tons gravel estimate, landscaping gravel quantity, bulk density gravel kg per m3"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gravel Calculator - Volume & Weight"
        />
        <meta
          property="og:description"
          content="Enter area in meters, depth in centimeters, and density to get volume and weight for your project."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gravel Calculator" />
        <meta
          name="twitter:description"
          content="Gravel volume and weight from dimensions and bulk density."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Gravel Calculator",
            url: PAGE_URL,
            description:
              "Calculate gravel volume in cubic meters and mass in kilograms or metric tons using rectangular area and depth with adjustable bulk density.",
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
            name: "Gravel Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate gravel quantity by volume and weight from length, width, depth, and material density.",
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
              "How to Estimate Gravel Volume and Weight for a Rectangular Area",
            description:
              "Multiply length by width by depth in meters for volume, then multiply volume by bulk density in kg per cubic meter for mass.",
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
                name: "How is gravel volume calculated here?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Volume in cubic meters equals length in meters times width in meters times depth in meters. Depth is entered in centimeters and converted by dividing by 100.",
                },
              },
              {
                "@type": "Question",
                name: "How do you get weight from volume?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weight in kilograms equals volume in cubic meters multiplied by bulk density in kilograms per cubic meter. Metric tons divide that weight by 1000.",
                },
              },
              {
                "@type": "Question",
                name: "What density should I use for gravel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typical crushed gravel bulk density is often roughly 1400 to 1700 kg per cubic meter depending on size, moisture, and compaction. Adjust the field to match your supplier or lab data.",
                },
              },
              {
                "@type": "Question",
                name: "Does this include compaction or wastage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The math is geometric volume times density. Add a percentage for compaction, spillage, or uneven base in your own planning.",
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
                name: "Gravel Calculator",
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
              Length (meters)
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
              Width (meters)
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
              Depth (centimeters)
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

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Bulk density (kg/m³)
            </label>
            <input
              type="number"
              value={density}
              onChange={(e) => setDensity(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.density}
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
            Gravel estimate
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Footprint area</span>
              <span className="font-code-num text-code-num">
                {result?.l != null && !result.error
                  ? `${fmt2(result.l)} × ${fmt2(result.w)} m = ${fmt2(result.l * result.w)} m²`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Depth</span>
              <span className="font-code-num text-code-num">
                {result?.d != null && !result.error
                  ? `${fmt2(result.d)} cm (${fmt2(result.d / 100)} m)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Volume</span>
              <span className="font-code-num text-code-num">
                {result?.volumeM3 != null && !result.error
                  ? `${fmt2(result.volumeM3)} m³`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Weight</span>
              <span className="font-code-num text-code-num">
                {result?.weightKg != null && !result.error
                  ? `${fmt2(result.weightKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Metric tons</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.tonsMetric != null && !result.error
                  ? `${fmt2(result.tonsMetric)} t`
                  : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
              <p>
                Uses{" "}
                <strong>
                  volume = length × width × (depth ÷ 100)
                </strong>{" "}
                m³, then <strong>mass = volume × density</strong> kg. Metric tons
                = kg ÷ 1000.
              </p>
              {result?.dens != null && !result.error && (
                <p>
                  Density assumed: <strong>{fmt2(result.dens)}</strong> kg/m³ —
                  change it to match your material spec sheet.
                </p>
              )}
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Order a little extra for compaction, spillage, and uneven
              subgrade. This tool does not replace a site survey or engineer’s
              takeoff.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GravelCalculator;
