import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/mass-calculator";

const DEFAULTS = {
  density: "1000",
  volume: "1",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMass = (density, volume) => {
  if (density.trim() === "" || volume.trim() === "") {
    return null;
  }

  const d = parseFloat(density);
  const v = parseFloat(volume);

  if (isNaN(d) || isNaN(v)) {
    return { error: "Enter valid numbers for density and volume." };
  }

  if (d <= 0 || v <= 0) {
    return { error: "Density and volume must be greater than zero." };
  }

  const massKg = d * v;

  return {
    density: d,
    volume: v,
    massKg,
    massG: massKg * 1000,
    massT: massKg / 1000,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const fmt3 = (n) =>
  parseFloat(n.toFixed(3)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

const MassCalculator = () => {
  const [density, setDensity] = useState(DEFAULTS.density);
  const [volume, setVolume] = useState(DEFAULTS.volume);

  const result = computeMass(density, volume);

  const reset = () => {
    setDensity(DEFAULTS.density);
    setVolume(DEFAULTS.volume);
  };

  return (
    <>
      <Helmet>
        <title>
          Mass Calculator - kg from Density (kg/m³) × Volume (m³)
        </title>
        <meta
          name="description"
          content="Calculate mass in kilograms from density in kg per cubic meter and volume in cubic meters. Formula: mass = density × volume. Includes grams and metric tons."
        />
        <meta
          name="keywords"
          content="mass calculator, calculate mass from density and volume, mass equals density times volume, kg from kg/m3 and m3, density volume mass formula, physics mass calculator, material mass calculator cubic meters, water mass calculator 1000 kg/m3, mass in kg grams and tonnes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mass Calculator - ρ × V"
        />
        <meta
          property="og:description"
          content="Density (kg/m³) times volume (m³) gives mass in kg."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mass Calculator" />
        <meta
          name="twitter:description"
          content="Mass from density and volume in SI units."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mass Calculator",
            url: PAGE_URL,
            description:
              "Compute mass in kilograms from density in kg/m³ and volume in m³ using mass = density × volume.",
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
            name: "Mass Calculator",
            url: PAGE_URL,
            description:
              "Web tool to calculate mass from density and volume in metric units.",
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
            headline: "How to Calculate Mass from Density and Volume",
            description:
              "Use ρ × V when density is in kg per cubic meter and volume is in cubic meters to obtain mass in kilograms.",
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
                name: "What is the mass formula used here?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mass (kg) = density (kg/m³) × volume (m³). Both inputs must use these SI units for the result to be in kilograms.",
                },
              },
              {
                "@type": "Question",
                name: "What are example density values?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fresh water is about 1000 kg/m³ at room temperature. Many metals are several thousand kg/m³ depending on alloy.",
                },
              },
              {
                "@type": "Question",
                name: "Is mass the same as weight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Mass is the amount of matter in kg. Weight is a force (newtons) that depends on gravity. This page reports mass, not weight on a scale.",
                },
              },
              {
                "@type": "Question",
                name: "Can I enter volume in liters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Convert liters to cubic meters first (1 L = 0.001 m³), then enter volume in m³.",
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
                name: "Mass Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Density</label>
            <div className="relative">
              <input
                type="number"
                value={density}
                onChange={(e) => setDensity(e.target.value)}
                className={`${inputClassName} pr-20`}
                placeholder={DEFAULTS.density}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                kg/m³
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Volume</label>
            <div className="relative">
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.volume}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                m³
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Mass summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Inputs</span>
              <span className="font-code-num text-code-num text-right">
                {result?.density != null && !result.error
                  ? `ρ ${fmt3(result.density)} kg/m³ × ${fmt3(result.volume)} m³`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Mass</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.massKg != null && !result.error
                  ? `${fmt2(result.massKg)} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Grams</span>
              <span className="font-code-num text-code-num">
                {result?.massG != null && !result.error
                  ? `${fmt2(result.massG)} g`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Metric tons</span>
              <span className="font-code-num text-code-num">
                {result?.massT != null && !result.error
                  ? `${fmt3(result.massT)} t`
                  : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <p>
                <strong>m = ρ × V</strong> with density in kg/m³ and volume in
                m³. Default example is roughly{" "}
                <strong>1 m³ of water</strong> (~1000 kg/m³).
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              For density from known mass and volume, use the{" "}
              <strong>Density Calculator</strong> on this site. Mass is not
              weight—multiply by <strong>g</strong> only when you need force.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MassCalculator;
