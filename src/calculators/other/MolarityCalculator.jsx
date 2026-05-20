import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/molarity-calculator";

const DEFAULTS = {
  moles: "0.5",
  volume: "0.25",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMolarity = (moles, volume) => {
  if (moles.trim() === "" || volume.trim() === "") {
    return null;
  }

  const mol = parseFloat(moles);
  const vol = parseFloat(volume);

  if (isNaN(mol) || isNaN(vol)) {
    return { error: "Enter valid numbers for moles and volume." };
  }

  if (vol <= 0) {
    return { error: "Volume must be greater than zero." };
  }

  if (mol < 0) {
    return { error: "Moles of solute cannot be negative." };
  }

  const molarity = mol / vol;
  const millimolar = molarity * 1000;

  return {
    moles: mol,
    volume: vol,
    molarity,
    millimolar,
  };
};

const fmt4 = (n) =>
  parseFloat(n.toFixed(4)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });

const MolarityCalculator = () => {
  const [moles, setMoles] = useState(DEFAULTS.moles);
  const [volume, setVolume] = useState(DEFAULTS.volume);

  const result = computeMolarity(moles, volume);

  const reset = () => {
    setMoles(DEFAULTS.moles);
    setVolume(DEFAULTS.volume);
  };

  return (
    <>
      <Helmet>
        <title>
          Molarity Calculator - M (mol/L) from Moles & Volume in Liters
        </title>
        <meta
          name="description"
          content="Calculate molarity in mol/L (M) from moles of solute and solution volume in liters. Formula: M = n ÷ V. Also shows millimolar (mM) for convenience."
        />
        <meta
          name="keywords"
          content="molarity calculator, calculate molarity from moles and liters, mol per liter concentration, M equals n over V, solution concentration calculator chemistry, moles per liter calculator, millimolar calculator, chemistry lab molarity formula"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Molarity Calculator - mol/L"
        />
        <meta
          property="og:description"
          content="Moles ÷ liters → molarity (M) and mM."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Molarity Calculator" />
        <meta
          name="twitter:description"
          content="Molarity from moles and solution volume."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Molarity Calculator",
            url: PAGE_URL,
            description:
              "Compute solution molarity in moles per liter from amount of solute in moles and total solution volume in liters.",
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
            name: "Molarity Calculator",
            url: PAGE_URL,
            description:
              "Web tool to calculate molarity using M = n / V with moles and liters.",
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
            headline: "How to Calculate Molarity (M) from Moles and Volume",
            description:
              "Molarity equals moles of solute divided by liters of solution: M = n / V.",
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
                name: "What is the molarity formula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Molarity M equals moles of solute n divided by volume of solution in liters V: M = n / V. The unit is mol/L, often written as M.",
                },
              },
              {
                "@type": "Question",
                name: "What units do I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter moles (mol) for the amount of solute and liters (L) for the total solution volume after the solute is dissolved.",
                },
              },
              {
                "@type": "Question",
                name: "How do I convert mL to liters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Divide milliliters by 1000. For example 250 mL = 0.25 L.",
                },
              },
              {
                "@type": "Question",
                name: "Is molarity the same as molality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Molarity uses liters of solution. Molality uses kilograms of solvent. This calculator is for molarity only.",
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
                name: "Molarity Calculator",
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
              Moles of solute
            </label>
            <div className="relative">
              <input
                type="number"
                value={moles}
                onChange={(e) => setMoles(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.moles}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                mol
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Volume of solution
            </label>
            <div className="relative">
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className={`${inputClassName} pr-10`}
                placeholder={DEFAULTS.volume}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                L
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
            Molarity summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Inputs</span>
              <span className="font-code-num text-code-num text-right">
                {result?.moles != null && !result.error
                  ? `${fmt4(result.moles)} mol in ${fmt4(result.volume)} L`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Molarity (M)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.molarity != null && !result.error
                  ? `${fmt4(result.molarity)} M (mol/L)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Millimolar (mM)</span>
              <span className="font-code-num text-code-num">
                {result?.millimolar != null && !result.error
                  ? `${fmt4(result.millimolar)} mM`
                  : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <p>
                <strong>M = n ÷ V</strong> with <strong>n</strong> in moles and{" "}
                <strong>V</strong> in liters of <em>solution</em> (not solvent
                only).
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Convert mL to L before entering volume (÷ 1000). For density-based
              prep, confirm moles from mass and molar mass first.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MolarityCalculator;
