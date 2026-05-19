import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/fuel-cost-calculator";

const DEFAULTS = {
  distance: "150",
  mileage: "18",
  fuelPrice: "105",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeFuelCost = (distance, mileage, fuelPrice) => {
  if (
    distance.trim() === "" ||
    mileage.trim() === "" ||
    fuelPrice.trim() === ""
  ) {
    return null;
  }

  const D = parseFloat(distance);
  const M = parseFloat(mileage);
  const P = parseFloat(fuelPrice);

  if (isNaN(D) || isNaN(M) || isNaN(P)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (D <= 0 || M <= 0 || P <= 0) {
    return { error: "Distance, mileage, and fuel price must be greater than zero." };
  }

  const fuelLiters = D / M;
  const totalCost = fuelLiters * P;
  const costPerKm = totalCost / D;

  return {
    distance: D,
    mileage: M,
    fuelPrice: P,
    fuelLiters,
    totalCost,
    costPerKm,
  };
};

const formatMoney = (n) =>
  `₹${parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const formatLiters = (n) =>
  `${parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })} L`;

const FuelCostCalculator = () => {
  const [distance, setDistance] = useState(DEFAULTS.distance);
  const [mileage, setMileage] = useState(DEFAULTS.mileage);
  const [fuelPrice, setFuelPrice] = useState(DEFAULTS.fuelPrice);

  const result = computeFuelCost(distance, mileage, fuelPrice);

  const reset = () => {
    setDistance(DEFAULTS.distance);
    setMileage(DEFAULTS.mileage);
    setFuelPrice(DEFAULTS.fuelPrice);
  };

  return (
    <>
      <Helmet>
        <title>
          Fuel Cost Calculator - Trip Cost in ₹ (km, km/L, Price per Liter)
        </title>
        <meta
          name="description"
          content="Estimate trip fuel cost: enter distance in km, vehicle mileage in km/L, and fuel price in ₹/liter. Shows liters needed and total cost."
        />
        <meta
          name="keywords"
          content="fuel cost calculator India, petrol trip cost calculator km per litre, fuel expense estimator rupees per liter, road trip fuel cost calculator, mileage fuel price calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fuel Cost Calculator - ₹ Trip Estimate"
        />
        <meta
          property="og:description"
          content="Calculate fuel liters and total cost from distance, km/L, and ₹/L."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fuel Cost Calculator"
        />
        <meta
          name="twitter:description"
          content="Trip fuel cost in rupees from km, mileage, and pump price."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Fuel Cost Calculator",
            url: PAGE_URL,
            description:
              "Estimate fuel cost for a trip using distance in km, mileage in km per liter, and fuel price in rupees per liter.",
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
            name: "Fuel Cost Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute fuel liters and total trip cost from distance, km/L, and ₹/L.",
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
              "How to Calculate Road Trip Fuel Cost from Distance and Mileage",
            description:
              "Guide to finding liters of fuel needed and total cost in rupees using km, km per liter, and price per liter.",
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
                name: "How is fuel cost calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fuel needed (liters) = distance ÷ mileage (km/L). Total cost = fuel liters × price per liter (₹/L).",
                },
              },
              {
                "@type": "Question",
                name: "What units does this calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Distance in kilometers, fuel efficiency in kilometers per liter (km/L), and fuel price in Indian rupees per liter (₹/L).",
                },
              },
              {
                "@type": "Question",
                name: "Does it include tolls or maintenance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It estimates fuel spend only. Add tolls, parking, and service costs separately for a full trip budget.",
                },
              },
              {
                "@type": "Question",
                name: "What if my car lists MPG instead of km/L?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Convert MPG to km/L first (or use a length/distance conversion tool), then enter km/L here.",
                },
              },
              {
                "@type": "Question",
                name: "Why did my actual bill differ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Real-world mileage varies with traffic, AC use, load, terrain, and driving style. Pump prices also change by city and date.",
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
                name: "Fuel Cost Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Distance</label>
            <div className="relative">
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.distance}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                km
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Mileage</label>
            <div className="relative">
              <input
                type="number"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                className={`${inputClassName} pr-16`}
                placeholder={DEFAULTS.mileage}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                km/L
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Fuel price</label>
            <div className="relative">
              <input
                type="number"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.fuelPrice}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                ₹/L
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
            Fuel Cost Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Distance</span>
              <span className="font-code-num text-code-num">
                {result?.distance != null && !result.error
                  ? `${result.distance.toLocaleString()} km`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fuel needed (km ÷ km/L)</span>
              <span className="font-code-num text-code-num">
                {result?.fuelLiters != null && !result.error
                  ? formatLiters(result.fuelLiters)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total fuel cost</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.totalCost != null && !result.error
                  ? formatMoney(result.totalCost)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Cost per km</span>
              <span className="font-code-num text-code-num">
                {result?.costPerKm != null && !result.error
                  ? formatMoney(result.costPerKm)
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Fuel only—no tolls, parking, or insurance. Mileage is assumed
              constant for the whole trip.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FuelCostCalculator;
