import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/tire-size-calculator";

const DEFAULTS = {
  tireWidth: "205",
  aspectRatio: "55",
  rimDiameter: "16",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeTireSize = (tireWidth, aspectRatio, rimDiameter) => {
  if (
    tireWidth.trim() === "" ||
    aspectRatio.trim() === "" ||
    rimDiameter.trim() === ""
  ) {
    return null;
  }

  const width = parseFloat(tireWidth);
  const ratio = parseFloat(aspectRatio);
  const rim = parseFloat(rimDiameter);

  if (isNaN(width) || isNaN(ratio) || isNaN(rim)) {
    return { error: "Enter valid numbers for width, aspect ratio, and rim." };
  }

  if (width <= 0 || ratio <= 0 || rim <= 0) {
    return { error: "Width, aspect ratio, and rim diameter must be greater than zero." };
  }

  const sidewallMm = (width * ratio) / 100;
  const rimMm = rim * 25.4;
  const diameterIn = (2 * sidewallMm + rimMm) / 25.4;
  const circumferenceIn = Math.PI * diameterIn;
  const revolutionsPerMile =
    diameterIn > 0 ? Math.round(63360 / circumferenceIn) : null;

  return {
    width,
    ratio,
    rim,
    label: `${Math.round(width)}/${Math.round(ratio)}R${Math.round(rim)}`,
    sidewallMm,
    diameterIn,
    circumferenceIn,
    revolutionsPerMile,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const TireSizeCalculator = () => {
  const [tireWidth, setTireWidth] = useState(DEFAULTS.tireWidth);
  const [aspectRatio, setAspectRatio] = useState(DEFAULTS.aspectRatio);
  const [rimDiameter, setRimDiameter] = useState(DEFAULTS.rimDiameter);

  const result = computeTireSize(tireWidth, aspectRatio, rimDiameter);

  const reset = () => {
    setTireWidth(DEFAULTS.tireWidth);
    setAspectRatio(DEFAULTS.aspectRatio);
    setRimDiameter(DEFAULTS.rimDiameter);
  };

  return (
    <>
      <Helmet>
        <title>
          Tire Size Calculator - Sidewall, Diameter &amp; Circumference (205/55R16)
        </title>
        <meta
          name="description"
          content="Calculate tire sidewall height in mm, overall diameter in inches, and circumference from width, aspect ratio, and rim size. Metric tire notation helper."
        />
        <meta
          name="keywords"
          content="tire size calculator 205 55 r16, sidewall height calculator, tire diameter inches, tire circumference calculator, aspect ratio tire math"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tire Size Calculator"
        />
        <meta
          property="og:description"
          content="Width, aspect %, rim → sidewall, overall diameter, circumference."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tire Size Calculator" />
        <meta
          name="twitter:description"
          content="Sidewall and overall tire dimensions from size code."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Tire Size Calculator",
            url: PAGE_URL,
            description:
              "Compute sidewall height, overall tire diameter, and circumference from metric tire width, aspect ratio, and rim diameter in inches.",
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
            name: "Tire Size Calculator",
            url: PAGE_URL,
            description:
              "Web tool to calculate tire sidewall, overall diameter, and circumference from 205/55R16-style sizing.",
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
            headline: "How to Read Tire Size and Calculate Overall Diameter",
            description:
              "Sidewall equals width times aspect ratio over 100; overall diameter is twice the sidewall plus rim diameter converted to inches.",
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
                name: "What does 205/55R16 mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "205 mm tread width, sidewall height 55% of width, R means radial construction, 16 inch rim diameter.",
                },
              },
              {
                "@type": "Question",
                name: "How is sidewall height calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sidewall mm = tire width mm × (aspect ratio ÷ 100). For 205/55, sidewall ≈ 112.75 mm.",
                },
              },
              {
                "@type": "Question",
                name: "How is overall tire diameter found?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Overall diameter = (2 × sidewall height in mm + rim diameter in mm) ÷ 25.4 to convert to inches.",
                },
              },
              {
                "@type": "Question",
                name: "Why does circumference matter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Circumference affects speedometer accuracy and revolutions per mile when comparing tire sizes.",
                },
              },
              {
                "@type": "Question",
                name: "Can I compare plus-size wheels with this?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter each size separately and compare overall diameter. Stay within a few percent of stock for speedometer and ABS compatibility.",
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
                name: "Tire Size Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter metric tire code values: <strong>width (mm)</strong>,{" "}
          <strong>aspect ratio (%)</strong>, and <strong>rim (inches)</strong>—e.g.{" "}
          <strong>205/55R16</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Tire width (mm)
            </label>
            <input
              type="number"
              value={tireWidth}
              onChange={(e) => setTireWidth(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.tireWidth}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Aspect ratio (%)
            </label>
            <div className="relative">
              <input
                type="number"
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className={`${inputClassName} pr-10`}
                placeholder={DEFAULTS.aspectRatio}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Rim diameter (in)
            </label>
            <input
              type="number"
              value={rimDiameter}
              onChange={(e) => setRimDiameter(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.rimDiameter}
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
            Tire size summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Size code</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.label && !result.error ? result.label : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Sidewall height</span>
              <span className="font-code-num text-code-num">
                {result?.sidewallMm != null && !result.error
                  ? `${fmt2(result.sidewallMm)} mm`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Overall diameter</span>
              <span className="font-code-num text-code-num">
                {result?.diameterIn != null && !result.error
                  ? `${fmt2(result.diameterIn)} in`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Circumference</span>
              <span className="font-code-num text-code-num">
                {result?.circumferenceIn != null && !result.error
                  ? `${fmt2(result.circumferenceIn)} in`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Revolutions per mile</span>
              <span className="font-code-num text-code-num">
                {result?.revolutionsPerMile != null && !result.error
                  ? result.revolutionsPerMile.toLocaleString()
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <strong>Diameter = (2 × sidewall + rim×25.4) ÷ 25.4 in</strong>.
              Compare plus sizes—stay within ~3% of stock diameter when possible.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TireSizeCalculator;
