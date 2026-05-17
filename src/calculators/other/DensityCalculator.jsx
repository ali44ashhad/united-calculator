import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/density-calculator";

const DEFAULTS = {
  mass: "10",
  volume: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeDensity = (mass, volume) => {
  if (mass.trim() === "" || volume.trim() === "") {
    return null;
  }

  const m = parseFloat(mass);
  const v = parseFloat(volume);

  if (isNaN(m) || isNaN(v)) {
    return { error: "Enter valid numbers for mass and volume." };
  }

  if (m <= 0 || v <= 0) {
    return { error: "Mass and volume must be greater than zero." };
  }

  const density = m / v;

  return { mass: m, volume: v, density };
};

const formatDensity = (n) =>
  parseFloat(n.toFixed(3)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

const DensityCalculator = () => {
  const [mass, setMass] = useState(DEFAULTS.mass);
  const [volume, setVolume] = useState(DEFAULTS.volume);

  const result = computeDensity(mass, volume);

  const reset = () => {
    setMass(DEFAULTS.mass);
    setVolume(DEFAULTS.volume);
  };

  return (
    <>
      <Helmet>
        <title>
          Density Calculator - ρ = Mass ÷ Volume (kg/m³)
        </title>
        <meta
          name="description"
          content="Calculate density from mass in kilograms and volume in cubic meters. Formula: density = mass ÷ volume (kg/m³)."
        />
        <meta
          name="keywords"
          content="density calculator, calculate density from mass and volume, density formula kg per cubic meter, mass volume density calculator, physics density calculator online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Density Calculator - kg/m³"
        />
        <meta
          property="og:description"
          content="Enter mass (kg) and volume (m³) to find density."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Density Calculator - Mass & Volume"
        />
        <meta
          name="twitter:description"
          content="Compute density in kg/m³ from mass and volume."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Density Calculator",
            url: PAGE_URL,
            description:
              "Calculate object density by dividing mass in kg by volume in m³.",
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
            name: "Density Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute density from mass and volume in SI units.",
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
            headline: "How to Calculate Density from Mass and Volume",
            description:
              "Guide to the density formula ρ = m/V using kilograms and cubic meters.",
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
                name: "What is the density formula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Density ρ equals mass m divided by volume V: ρ = m/V. This calculator uses kilograms and cubic meters, so the result is in kg/m³.",
                },
              },
              {
                "@type": "Question",
                name: "What units does this calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mass in kilograms (kg) and volume in cubic meters (m³). The output is density in kg/m³.",
                },
              },
              {
                "@type": "Question",
                name: "What is the density of water?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "About 1000 kg/m³ at roughly 4°C. Enter mass 1000 kg and volume 1 m³ to see 1000 kg/m³ in this tool.",
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
                name: "Density Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Mass</label>
            <div className="relative">
              <input
                type="number"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.mass}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                kg
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
                className={`${inputClassName} pr-14`}
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Density Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Mass</span>
              <span className="font-code-num text-code-num">
                {result?.mass != null && !result.error
                  ? `${result.mass.toLocaleString()} kg`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Volume</span>
              <span className="font-code-num text-code-num">
                {result?.volume != null && !result.error
                  ? `${result.volume.toLocaleString()} m³`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Density (ρ = m ÷ V)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.density != null && !result.error
                  ? `${formatDensity(result.density)} kg/m³`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              ρ = mass ÷ volume. SI units: kg and m³. For object volume by shape,
              use the Volume Calculator; convert units with the Conversion
              Calculator if needed.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DensityCalculator;
