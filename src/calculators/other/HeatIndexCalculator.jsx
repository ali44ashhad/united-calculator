import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/heat-index-calculator";

const DEFAULTS = {
  temperature: "90",
  humidity: "70",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

/** Rothfusz regression; air temperature T in °F, R = relative humidity 0–100. */
const heatIndexFahrenheit = (T, R) =>
  -42.379 +
  2.04901523 * T +
  10.14333127 * R -
  0.22475541 * T * R -
  0.00683783 * T * T -
  0.05481717 * R * R +
  0.00122874 * T * T * R +
  0.00085282 * T * R * R -
  0.00000199 * T * T * R * R;

const nwsRiskBand = (hi) => {
  if (hi < 80) {
    return "Below typical caution threshold (chart reference only)";
  }
  if (hi < 90) return "Caution";
  if (hi < 103) return "Extreme caution";
  if (hi < 125) return "Danger";
  return "Extreme danger";
};

const computeHeatIndex = (temperature, humidity) => {
  if (temperature.trim() === "" || humidity.trim() === "") {
    return null;
  }

  const T = parseFloat(temperature);
  const R = parseFloat(humidity);

  if (isNaN(T) || isNaN(R)) {
    return {
      error: "Enter valid numbers for temperature (°F) and humidity (%).",
    };
  }

  if (R < 0 || R > 100) {
    return {
      error: "Relative humidity must be between 0 and 100 percent.",
    };
  }

  if (T < -90 || T > 150) {
    return {
      error: "Use air temperature roughly between −90°F and 150°F.",
    };
  }

  const hi = heatIndexFahrenheit(T, R);
  const risk = nwsRiskBand(hi);

  return { T, R, hi, risk };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const HeatIndexCalculator = () => {
  const [temperature, setTemperature] = useState(DEFAULTS.temperature);
  const [humidity, setHumidity] = useState(DEFAULTS.humidity);

  const result = computeHeatIndex(temperature, humidity);

  const reset = () => {
    setTemperature(DEFAULTS.temperature);
    setHumidity(DEFAULTS.humidity);
  };

  return (
    <>
      <Helmet>
        <title>
          Heat Index Calculator - Feels-Like °F from Temperature & Humidity
        </title>
        <meta
          name="description"
          content="Compute heat index in degrees Fahrenheit from dry-bulb temperature and relative humidity using the Rothfusz regression used on many heat-stress charts."
        />
        <meta
          name="keywords"
          content="heat index calculator Fahrenheit, feels like temperature humidity, apparent temperature calculator, NWS heat index formula, relative humidity heat stress"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Heat Index Calculator - °F"
        />
        <meta
          property="og:description"
          content="Dry-bulb °F and relative humidity → heat index and a simple risk band."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heat Index Calculator" />
        <meta
          name="twitter:description"
          content="Heat index from air temperature and humidity."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Heat Index Calculator",
            url: PAGE_URL,
            description:
              "Calculate heat index (apparent temperature) in Fahrenheit from air temperature and relative humidity.",
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
            name: "Heat Index Calculator",
            url: PAGE_URL,
            description:
              "Web application to estimate heat index from Fahrenheit temperature and percent relative humidity.",
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
              "How Heat Index Combines Air Temperature and Humidity",
            description:
              "Overview of apparent temperature from the Rothfusz regression in Fahrenheit and relative humidity.",
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
                name: "What units does this heat index calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Air temperature is entered in degrees Fahrenheit and relative humidity in percent. The heat index result is also in degrees Fahrenheit.",
                },
              },
              {
                "@type": "Question",
                name: "What formula is used?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The calculator applies the polynomial Rothfusz regression in Fahrenheit and relative humidity, the form commonly published with heat-index tables.",
                },
              },
              {
                "@type": "Question",
                name: "Is the risk band official?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The labels follow common National Weather Service style breakpoints (caution from 80°F heat index, extreme caution, danger, extreme danger). Always follow local advisories and medical guidance.",
                },
              },
              {
                "@type": "Question",
                name: "Does wind or sun change the number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This model does not include wind speed or solar load. Full sun and calm air can feel hotter than the shaded, light-wind assumptions behind many heat-index charts.",
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
                name: "Heat Index Calculator",
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
              Air temperature (°F)
            </label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.temperature}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Relative humidity (%)
            </label>
            <input
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.humidity}
              min="0"
              max="100"
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
            Heat index summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Inputs</span>
              <span className="font-code-num text-code-num text-right">
                {result?.T != null && !result.error
                  ? `${fmt2(result.T)} °F, ${fmt2(result.R)}% RH`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Heat index</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.hi != null && !result.error
                  ? `${fmt2(result.hi)} °F`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Risk band (chart style)</span>
              <span className="font-code-num text-code-num text-right">
                {result?.risk && !result.error ? result.risk : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
              <p>
                Polynomial heat index in °F from temperature and relative
                humidity. Official products may adjust for low humidity, wind,
                or nighttime—use this as a planning estimate only.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Heat illness is a medical emergency at any temperature. Drink
              water, take breaks, and heed warnings from the National Weather
              Service or your local authority.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeatIndexCalculator;
