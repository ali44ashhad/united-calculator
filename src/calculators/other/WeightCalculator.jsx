import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/weight-calculator";

const GRAVITY_OPTIONS = {
  Earth: 9.81,
  Moon: 1.62,
  Mars: 3.71,
  Jupiter: 24.79,
  Venus: 8.87,
  Mercury: 3.7,
};

const EARTH_G = GRAVITY_OPTIONS.Earth;
const N_TO_LBF = 0.224808943;

const DEFAULTS = {
  mass: "70",
  planet: "Earth",
  unit: "kg",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeWeight = (mass, planet, unit) => {
  if (mass.trim() === "") {
    return null;
  }

  let massValue = parseFloat(mass);
  if (isNaN(massValue)) {
    return { error: "Enter a valid mass." };
  }

  if (massValue <= 0) {
    return { error: "Mass must be greater than zero." };
  }

  const enteredMass = massValue;
  if (unit === "lbs") {
    massValue = massValue * 0.453592;
  }

  const gravity = GRAVITY_OPTIONS[planet];
  if (gravity == null) {
    return { error: "Select a valid planet or body." };
  }

  const weightN = massValue * gravity;
  const weightLbf = weightN * N_TO_LBF;
  const earthWeightN = massValue * EARTH_G;
  const ratioToEarth =
    earthWeightN > 0 ? weightN / earthWeightN : null;

  return {
    enteredMass,
    unit,
    massKg: massValue,
    planet,
    gravity,
    weightN,
    weightLbf,
    earthWeightN,
    ratioToEarth,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const WeightCalculator = () => {
  const [mass, setMass] = useState(DEFAULTS.mass);
  const [planet, setPlanet] = useState(DEFAULTS.planet);
  const [unit, setUnit] = useState(DEFAULTS.unit);

  const result = computeWeight(mass, planet, unit);

  const reset = () => {
    setMass(DEFAULTS.mass);
    setPlanet(DEFAULTS.planet);
    setUnit(DEFAULTS.unit);
  };

  return (
    <>
      <Helmet>
        <title>
          Weight Calculator - Mass × Gravity on Earth, Moon, Mars &amp; More
        </title>
        <meta
          name="description"
          content="Calculate weight in newtons from mass in kg or lbs and surface gravity on Earth, Moon, Mars, Jupiter, Venus, or Mercury. W = m × g."
        />
        <meta
          name="keywords"
          content="weight calculator mass gravity, weight on moon calculator, weight on mars newtons, W equals mg calculator, planetary weight comparison"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Weight Calculator - Mass × Gravity"
        />
        <meta
          property="og:description"
          content="Weight in newtons from mass and planet surface gravity."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weight Calculator" />
        <meta
          name="twitter:description"
          content="Compare weight on different planets from the same mass."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Weight Calculator",
            url: PAGE_URL,
            description:
              "Calculate weight as mass times gravitational acceleration for several planets and moons.",
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
            name: "Weight Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute weight in newtons from mass and surface gravity on celestial bodies.",
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
            headline: "Weight vs Mass: W = m × g on Different Worlds",
            description:
              "Weight is the gravitational force on mass. Surface gravity g varies by planet; multiply mass in kilograms by g in m/s² to get newtons.",
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
                name: "How do you calculate weight from mass?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weight (newtons) = mass (kilograms) × gravitational acceleration g (m/s²). Convert pounds to kilograms first if needed.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between mass and weight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mass is how much matter you have (kg). Weight is the force gravity exerts on that mass (N).",
                },
              },
              {
                "@type": "Question",
                name: "How much would I weigh on the Moon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moon surface gravity is about 1.62 m/s², roughly one-sixth of Earth. Multiply your mass in kg by 1.62 for weight in newtons.",
                },
              },
              {
                "@type": "Question",
                name: "Why is weight shown in newtons?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The SI unit of force is the newton. This page also shows an approximate lbf equivalent for intuition.",
                },
              },
              {
                "@type": "Question",
                name: "Is this the same as body weight on a scale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bathroom scales often display mass in kg or lb calibrated for Earth gravity. This calculator uses physics W = mg on any listed body.",
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
                name: "Weight Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Weight = mass × gravity</strong> (W = m × g). Mass converts to kg
          internally; result is in <strong>newtons (N)</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Mass</label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.mass}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Mass unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className={inputClassName}
            >
              <option value="kg">Kilograms (kg)</option>
              <option value="lbs">Pounds (lbs)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Planet / body
            </label>
            <select
              value={planet}
              onChange={(e) => setPlanet(e.target.value)}
              className={inputClassName}
            >
              {Object.keys(GRAVITY_OPTIONS).map((planetName) => (
                <option key={planetName} value={planetName}>
                  {planetName} (g ≈ {GRAVITY_OPTIONS[planetName]} m/s²)
                </option>
              ))}
            </select>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Weight summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Mass</span>
              <span className="font-code-num text-code-num">
                {result?.massKg != null && !result.error
                  ? `${fmt2(result.enteredMass)} ${result.unit === "lbs" ? "lb" : "kg"} (${fmt2(result.massKg)} kg)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Surface gravity</span>
              <span className="font-code-num text-code-num">
                {result?.gravity != null && !result.error
                  ? `${fmt2(result.gravity)} m/s² on ${result.planet}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Weight</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.weightN != null && !result.error
                  ? `${fmt2(result.weightN)} N`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Weight (approx. lbf)</span>
              <span className="font-code-num text-code-num">
                {result?.weightLbf != null && !result.error
                  ? `${fmt2(result.weightLbf)} lbf`
                  : "—"}
              </span>
            </div>
            {result?.planet !== "Earth" && result?.ratioToEarth != null && !result.error && (
              <div className="flex items-center justify-between gap-4">
                <span className="text-on-surface">Vs same mass on Earth</span>
                <span className="font-code-num text-code-num">
                  {fmt2(result.earthWeightN)} N ({fmt2(result.ratioToEarth * 100)}% of Earth)
                </span>
              </div>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Physics weight (force), not health ideal body weight. For mass from
              density × volume, use the Mass Calculator.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default WeightCalculator;
