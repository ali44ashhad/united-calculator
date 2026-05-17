import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/bra-size-calculator";

const DEFAULTS = {
  bandSize: "34",
  bustSize: "37",
};

const CUP_SIZES = [
  "AA",
  "A",
  "B",
  "C",
  "D",
  "DD",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeBraSize = (bandSize, bustSize) => {
  if (bandSize.trim() === "" || bustSize.trim() === "") return null;

  const band = parseInt(bandSize, 10);
  const bust = parseInt(bustSize, 10);

  if (isNaN(band) || isNaN(bust) || band <= 0 || bust <= 0) {
    return { error: "Enter positive whole-inch measurements." };
  }

  const bandAdjusted = band % 2 === 0 ? band : band + 1;
  const difference = bust - bandAdjusted;

  if (difference < 0) {
    return {
      error:
        "Full bust must be at least as large as the adjusted band (under-bust rounded to even inches).",
    };
  }

  const cupIndex = Math.min(difference, CUP_SIZES.length - 1);
  const cupSize = CUP_SIZES[cupIndex];

  return {
    band: bandAdjusted,
    cupSize,
    difference,
    bandEntered: band,
    cupCapped: difference > CUP_SIZES.length - 1,
  };
};

const BraSizeCalculator = () => {
  const [bandSize, setBandSize] = useState(DEFAULTS.bandSize);
  const [bustSize, setBustSize] = useState(DEFAULTS.bustSize);

  const result = computeBraSize(bandSize, bustSize);

  const reset = () => {
    setBandSize(DEFAULTS.bandSize);
    setBustSize(DEFAULTS.bustSize);
  };

  return (
    <>
      <Helmet>
        <title>
          Bra Size Calculator - Band & Bust in Inches (US-style estimate)
        </title>
        <meta
          name="description"
          content="Estimate bra size from under-bust and full-bust measurements in inches. Rounds band to even inches and maps bust-minus-band difference to cup letters."
        />
        <meta
          name="keywords"
          content="bra size calculator, bra size chart inches, how to measure bra size calculator, band and bust measurement bra size, cup size from bust minus band, bra fitting calculator online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bra Size Calculator - Inches to Band & Cup"
        />
        <meta
          property="og:description"
          content="Enter under-bust and full-bust inches to estimate band and cup size."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bra Size Calculator - Measure & Estimate"
        />
        <meta
          name="twitter:description"
          content="Free inch-based bra size estimate from band and bust measurements."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bra Size Calculator",
            url: PAGE_URL,
            description:
              "Estimate bra band and cup size from under-bust and full-bust measurements in inches.",
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
            name: "Bra Size Calculator",
            url: PAGE_URL,
            description:
              "Web application to estimate US-style bra size from band and bust inch measurements.",
            applicationCategory: "HealthApplication",
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
              "How to Estimate Bra Size from Band and Bust Measurements in Inches",
            description:
              "Guide to measuring under-bust and full-bust in inches, rounding band to even numbers, and mapping inch difference to cup letters.",
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
                name: "How do I measure for this bra size calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Measure under-bust snugly for band inches and full bust at the fullest point for bust inches. Use a soft tape measure parallel to the floor.",
                },
              },
              {
                "@type": "Question",
                name: "Why is the band rounded to an even number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many US bra bands are sold in even inch sizes (32, 34, 36). Odd under-bust readings are rounded up to the next even inch before cup calculation.",
                },
              },
              {
                "@type": "Question",
                name: "Is this the same as UK or EU sizing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. This tool uses a simplified inch-difference method common in US guides. International labels need brand-specific conversion charts.",
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
                name: "Bra Size Calculator",
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
              Under-bust (band)
            </label>
            <div className="relative">
              <input
                type="number"
                value={bandSize}
                onChange={(e) => setBandSize(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.bandSize}
                min="1"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                in
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Full bust</label>
            <div className="relative">
              <input
                type="number"
                value={bustSize}
                onChange={(e) => setBustSize(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.bustSize}
                min="1"
                step="1"
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
            Bra Size Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated size</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.band != null
                  ? `${result.band}${result.cupSize}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Adjusted band</span>
              <span className="font-code-num text-code-num">
                {result?.band != null ? `${result.band} in` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Cup letter</span>
              <span className="font-code-num text-code-num">
                {result?.cupSize ?? "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Bust − band (inches)</span>
              <span className="font-code-num text-code-num">
                {result?.difference != null ? result.difference : "—"}
              </span>
            </div>
            {result?.cupCapped && (
              <p className="text-sm text-on-surface-variant">
                Difference exceeds J cup in this chart; showing largest listed
                cup.
              </p>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simplified US-style inch method. Try on bras—brands and styles
              fit differently.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BraSizeCalculator;
