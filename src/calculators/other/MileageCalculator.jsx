import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/mileage-calculator";

const DEFAULTS = {
  distance: "100",
  fuel: "8",
};

/** km/L → approximate US MPG */
const KM_PER_L_TO_US_MPG = 2.35214584;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMileage = (distance, fuel) => {
  if (distance.trim() === "" || fuel.trim() === "") {
    return null;
  }

  const d = parseFloat(distance);
  const f = parseFloat(fuel);

  if (isNaN(d) || isNaN(f)) {
    return { error: "Enter valid numbers for distance and fuel used." };
  }

  if (d <= 0 || f <= 0) {
    return {
      error: "Distance and fuel consumed must be greater than zero.",
    };
  }

  const kmPerLiter = d / f;
  const litersPer100Km = 100 / kmPerLiter;
  const usMpg = kmPerLiter * KM_PER_L_TO_US_MPG;

  return {
    distance: d,
    fuel: f,
    kmPerLiter,
    litersPer100Km,
    usMpg,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const MileageCalculator = () => {
  const [distance, setDistance] = useState(DEFAULTS.distance);
  const [fuel, setFuel] = useState(DEFAULTS.fuel);

  const result = computeMileage(distance, fuel);

  const reset = () => {
    setDistance(DEFAULTS.distance);
    setFuel(DEFAULTS.fuel);
  };

  return (
    <>
      <Helmet>
        <title>
          Mileage Calculator - km/L & L/100 km from Distance and Fuel
        </title>
        <meta
          name="description"
          content="Calculate fuel economy in km per liter and liters per 100 km from trip distance in kilometers and fuel used in liters. Approximate US MPG shown for reference."
        />
        <meta
          name="keywords"
          content="mileage calculator, km per liter calculator, kilometers per liter fuel economy, L per 100 km calculator, fuel efficiency calculator metric, trip fuel consumption km and liters, fuel economy from distance and fuel used, convert km/L to L/100km"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mileage Calculator - km/L"
        />
        <meta
          property="og:description"
          content="Distance in km and fuel in liters → km/L and L/100 km."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mileage Calculator" />
        <meta
          name="twitter:description"
          content="Metric fuel economy from one tankful trip data."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mileage Calculator",
            url: PAGE_URL,
            description:
              "Compute kilometers per liter and liters per 100 kilometers from distance traveled and fuel consumed in metric units.",
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
            name: "Mileage Calculator",
            url: PAGE_URL,
            description:
              "Web tool to calculate km/L and L/100 km from kilometers driven and liters of fuel.",
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
            headline: "How to Calculate Fuel Economy in km/L from a Trip",
            description:
              "Divide kilometers driven by liters used for km per liter; liters per 100 km is 100 divided by km/L.",
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
                name: "How is km per liter calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kilometers per liter equals distance traveled in kilometers divided by fuel consumed in liters on that trip.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get L/100 km from km/L?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Liters per 100 kilometers equals 100 divided by km per liter. Lower L/100 km means better fuel economy.",
                },
              },
              {
                "@type": "Question",
                name: "Does this calculator use miles and gallons?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This page uses kilometers and liters. For US miles and gallons with MPG, use the Gas Mileage Calculator on this site.",
                },
              },
              {
                "@type": "Question",
                name: "Should I use a full tank for accuracy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A full-tank-to-full-tank measurement reduces error. Short trips and partial fills make km/L swing more.",
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
                name: "Mileage Calculator",
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
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.distance}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                km
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Fuel consumed
            </label>
            <div className="relative">
              <input
                type="number"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                className={`${inputClassName} pr-10`}
                placeholder={DEFAULTS.fuel}
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
            Fuel economy summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Trip</span>
              <span className="font-code-num text-code-num text-right">
                {result?.distance != null && !result.error
                  ? `${fmt2(result.distance)} km, ${fmt2(result.fuel)} L`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Kilometers per liter</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.kmPerLiter != null && !result.error
                  ? `${fmt2(result.kmPerLiter)} km/L`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Liters per 100 km</span>
              <span className="font-code-num text-code-num">
                {result?.litersPer100Km != null && !result.error
                  ? `${fmt2(result.litersPer100Km)} L/100 km`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Approx. US MPG</span>
              <span className="font-code-num text-code-num">
                {result?.usMpg != null && !result.error
                  ? `${fmt2(result.usMpg)} mpg`
                  : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <p>
                <strong>km/L = distance ÷ fuel</strong> ·{" "}
                <strong>L/100 km = 100 ÷ km/L</strong>. Lower L/100 km means
                better economy.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              One trip snapshot—repeat over several fill-ups for a stable
              average. For miles and US gallons, use the Gas Mileage Calculator.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MileageCalculator;
