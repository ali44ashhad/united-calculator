import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/voltage-drop-calculator";

const DEFAULTS = {
  current: "10",
  length: "50",
  resistance: "0.0175",
  unit: "meter",
  supplyVoltage: "12",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeVoltageDrop = (current, length, resistance, unit, supplyVoltage) => {
  if (
    current.trim() === "" ||
    length.trim() === "" ||
    resistance.trim() === ""
  ) {
    return null;
  }

  const I = parseFloat(current);
  const L = parseFloat(length);
  const R = parseFloat(resistance);

  if (isNaN(I) || isNaN(L) || isNaN(R)) {
    return { error: "Enter valid numbers for current, length, and resistance." };
  }

  if (I < 0 || L <= 0 || R <= 0) {
    return {
      error: "Current ≥ 0; length and resistance per unit must be greater than zero.",
    };
  }

  const isFeet = unit === "feet";
  const lengthUnit = isFeet ? "ft" : "m";
  const resistanceUnit = isFeet ? "Ω/ft" : "Ω/m";

  // Round-trip (out + return): VD = 2 × I × R × L — L and R must share the same length unit
  const voltageDrop = 2 * I * R * L;

  let supply = null;
  let percentDrop = null;
  if (supplyVoltage.trim() !== "") {
    supply = parseFloat(supplyVoltage);
    if (isNaN(supply) || supply <= 0) {
      return { error: "Supply voltage must be a positive number, or leave blank." };
    }
    percentDrop = (voltageDrop / supply) * 100;
  }

  return {
    I,
    L,
    R,
    unit,
    lengthUnit,
    resistanceUnit,
    voltageDrop,
    supply,
    percentDrop,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const VoltageDropCalculator = () => {
  const [current, setCurrent] = useState(DEFAULTS.current);
  const [length, setLength] = useState(DEFAULTS.length);
  const [resistance, setResistance] = useState(DEFAULTS.resistance);
  const [unit, setUnit] = useState(DEFAULTS.unit);
  const [supplyVoltage, setSupplyVoltage] = useState(DEFAULTS.supplyVoltage);

  const result = computeVoltageDrop(
    current,
    length,
    resistance,
    unit,
    supplyVoltage
  );

  const reset = () => {
    setCurrent(DEFAULTS.current);
    setLength(DEFAULTS.length);
    setResistance(DEFAULTS.resistance);
    setUnit(DEFAULTS.unit);
    setSupplyVoltage(DEFAULTS.supplyVoltage);
  };

  const resistanceLabel = unit === "feet" ? "Ω/ft" : "Ω/m";

  return (
    <>
      <Helmet>
        <title>
          Voltage Drop Calculator - 2×I×R×L (Single-Phase, Round Trip)
        </title>
        <meta
          name="description"
          content="Estimate voltage drop in volts from current in amps, one-way conductor length, and resistance per meter or per foot. Optional supply voltage for percent drop."
        />
        <meta
          name="keywords"
          content="voltage drop calculator wire, 2IRL voltage drop formula, conductor voltage drop amps length, wire resistance per meter calculator, DC voltage drop calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Voltage Drop Calculator"
        />
        <meta
          property="og:description"
          content="VD = 2 × I × R × L for round-trip conductor resistance."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voltage Drop Calculator" />
        <meta
          name="twitter:description"
          content="Voltage drop from current, length, and Ω per unit length."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Voltage Drop Calculator",
            url: PAGE_URL,
            description:
              "Calculate voltage drop across a conductor run using current, length, and resistance per unit length with meter or foot units.",
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
            name: "Voltage Drop Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate voltage drop for single-phase round-trip conductor runs.",
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
            headline: "Voltage Drop on a Wire: The 2×I×R×L Formula",
            description:
              "For a one-way length with go-and-return conductors, multiply two times current times resistance per unit length times length, keeping feet with Ω/ft or meters with Ω/m.",
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
                name: "What is the voltage drop formula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For round-trip DC or single-phase AC with one-way length L: VD = 2 × I × R × L, where R is resistance per unit length matching L (Ω/m with meters or Ω/ft with feet).",
                },
              },
              {
                "@type": "Question",
                name: "Why multiply by 2?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The factor 2 accounts for both the outbound and return conductor in a typical two-wire circuit.",
                },
              },
              {
                "@type": "Question",
                name: "What is acceptable voltage drop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Guidelines vary; many branch circuits aim for a few percent or less on the load voltage. Enter supply voltage to see percent drop here.",
                },
              },
              {
                "@type": "Question",
                name: "Meters vs feet for resistance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use Ω/m with length in meters, or Ω/ft with length in feet. Do not mix units in one calculation.",
                },
              },
              {
                "@type": "Question",
                name: "Does this replace NEC wire sizing tables?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is a formula helper. Final wire size must meet code, ampacity, and installation rules.",
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
                name: "Voltage Drop Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>VD = 2 × I × R × L</strong> (round-trip). Use the same length unit as
          resistance—<strong>Ω/m with meters</strong> or <strong>Ω/ft with feet</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Current (A)</label>
            <input
              type="number"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.current}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              One-way length
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
            <label className="font-h3 text-h3 text-on-surface">Length unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className={inputClassName}
            >
              <option value="meter">Meters</option>
              <option value="feet">Feet</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Resistance ({resistanceLabel})
            </label>
            <input
              type="number"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.resistance}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2 md:col-span-2 max-w-md">
            <label className="font-h3 text-h3 text-on-surface">
              Supply voltage (optional, for % drop)
            </label>
            <div className="relative">
              <input
                type="number"
                value={supplyVoltage}
                onChange={(e) => setSupplyVoltage(e.target.value)}
                className={`${inputClassName} pr-8`}
                placeholder="e.g. 12"
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                V
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
            Voltage drop summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Inputs</span>
              <span className="font-code-num text-code-num text-right">
                {result?.I != null && !result.error
                  ? `${fmt2(result.I)} A, ${fmt2(result.L)} ${result.lengthUnit}, ${fmt2(result.R)} ${result.resistanceUnit}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Voltage drop</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.voltageDrop != null && !result.error
                  ? `${fmt2(result.voltageDrop)} V`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Percent of supply</span>
              <span className="font-code-num text-code-num">
                {result?.percentDrop != null && !result.error
                  ? `${fmt2(result.percentDrop)}%`
                  : result && !result.error
                    ? "— (enter supply V)"
                    : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simplified single-phase helper—no power factor, temperature derating,
              or three-phase √3 factor. Not a substitute for NEC ampacity tables.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VoltageDropCalculator;
