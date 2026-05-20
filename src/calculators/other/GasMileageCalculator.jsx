import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/gas-mileage-calculator";

const DEFAULTS = {
  distance: "300",
  fuelUsed: "10",
};

/** US MPG → L/100 km (inverse of US MPG from metric consumption). */
const MPG_TO_L_PER_100KM = 235.214583;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeGasMileage = (distance, fuelUsed) => {
  if (distance.trim() === "" || fuelUsed.trim() === "") {
    return null;
  }

  const D = parseFloat(distance);
  const F = parseFloat(fuelUsed);

  if (isNaN(D) || isNaN(F)) {
    return { error: "Enter valid numbers for distance and fuel used." };
  }

  if (D <= 0 || F <= 0) {
    return {
      error: "Distance and fuel used must be greater than zero.",
    };
  }

  const mpg = D / F;
  const litersPer100Km = MPG_TO_L_PER_100KM / mpg;

  return {
    distance: D,
    fuelUsed: F,
    mpg,
    litersPer100Km,
  };
};

const formatMpg = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const formatLPer100 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const GasMileageCalculator = () => {
  const [distance, setDistance] = useState(DEFAULTS.distance);
  const [fuelUsed, setFuelUsed] = useState(DEFAULTS.fuelUsed);

  const result = computeGasMileage(distance, fuelUsed);

  const reset = () => {
    setDistance(DEFAULTS.distance);
    setFuelUsed(DEFAULTS.fuelUsed);
  };

  return (
    <>
      <Helmet>
        <title>
          Gas Mileage Calculator - MPG from Miles & US Gallons
        </title>
        <meta
          name="description"
          content="Calculate fuel economy in US miles per gallon (MPG) from trip distance in miles and fuel used in US gallons. Also shows approximate L/100 km."
        />
        <meta
          name="keywords"
          content="gas mileage calculator, MPG calculator miles and gallons, fuel economy calculator US, miles per gallon trip calculator, convert MPG to L per 100 km"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gas Mileage Calculator - MPG"
        />
        <meta
          property="og:description"
          content="Enter miles driven and gallons used to get MPG and L/100 km."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MPG Calculator"
        />
        <meta
          name="twitter:description"
          content="Trip MPG from miles and gallons."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Gas Mileage Calculator",
            url: PAGE_URL,
            description:
              "Calculate miles per gallon from distance in miles and fuel in US gallons.",
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
            name: "Gas Mileage Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute US MPG from miles traveled and US gallons of fuel consumed.",
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
            headline: "How to Calculate Gas Mileage (MPG) from a Trip",
            description:
              "Guide to computing US miles per gallon from odometer distance and fuel pump gallons, plus metric L/100 km conversion.",
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
                name: "How is MPG calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Divide miles driven by US gallons of fuel used: MPG = miles ÷ gallons.",
                },
              },
              {
                "@type": "Question",
                name: "Does this use US gallons?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. MPG here is US miles per US gallon. Imperial (UK) gallons are larger; do not mix UK gallons with this MPG.",
                },
              },
              {
                "@type": "Question",
                name: "What is L/100 km in the summary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is an approximate metric equivalent from your MPG using L/100 km ≈ 235.214583 ÷ MPG (US).",
                },
              },
              {
                "@type": "Question",
                name: "How do I measure fuel used accurately?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fill the tank to the same level at start and end of a trip (or use pump receipts for gallons between fills) and use odometer miles for that segment.",
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
                name: "Gas Mileage Calculator",
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
              Distance traveled
            </label>
            <div className="relative">
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className={`${inputClassName} pr-16`}
                placeholder={DEFAULTS.distance}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                miles
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Fuel used</label>
            <div className="relative">
              <input
                type="number"
                value={fuelUsed}
                onChange={(e) => setFuelUsed(e.target.value)}
                className={`${inputClassName} pr-20`}
                placeholder={DEFAULTS.fuelUsed}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                gal (US)
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
            Gas Mileage Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Distance</span>
              <span className="font-code-num text-code-num">
                {result?.distance != null && !result.error
                  ? `${result.distance.toLocaleString()} mi`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fuel used</span>
              <span className="font-code-num text-code-num">
                {result?.fuelUsed != null && !result.error
                  ? `${result.fuelUsed.toLocaleString()} gal (US)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fuel economy (mi ÷ gal)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.mpg != null && !result.error
                  ? `${formatMpg(result.mpg)} MPG`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Metric equivalent (approx.)
              </span>
              <span className="font-code-num text-code-num">
                {result?.litersPer100Km != null && !result.error
                  ? `${formatLPer100(result.litersPer100Km)} L/100 km`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              US MPG from miles and US gallons. L/100 km uses the standard
              conversion 235.214583 ÷ MPG. For trip cost in rupees (km, km/L),
              use the Fuel Cost Calculator.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GasMileageCalculator;
