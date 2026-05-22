import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/wind-chill-calculator";

const DEFAULTS = {
  temperature: "20",
  windSpeed: "15",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

/** NWS wind chill (°F, mph); valid for T ≤ 50°F and V ≥ 3 mph */
const windChillFahrenheit = (T, V) =>
  35.74 +
  0.6215 * T -
  35.75 * Math.pow(V, 0.16) +
  0.4275 * T * Math.pow(V, 0.16);

const coldRiskBand = (wc) => {
  if (wc > 32) return "Above typical wind chill chart range";
  if (wc > 15) return "Caution — cold stress possible";
  if (wc > 0) return "Increasing cold hazard";
  if (wc > -20) return "Danger — frostbite risk";
  return "Extreme danger — frostbite risk in minutes";
};

const computeWindChill = (temperature, windSpeed) => {
  if (temperature.trim() === "" || windSpeed.trim() === "") {
    return null;
  }

  const T = parseFloat(temperature);
  const V = parseFloat(windSpeed);

  if (isNaN(T) || isNaN(V)) {
    return { error: "Enter valid numbers for temperature and wind speed." };
  }

  if (T > 50) {
    return {
      error: "NWS wind chill applies when air temperature is 50°F or below.",
    };
  }

  if (V < 3) {
    return {
      error: "NWS formula requires wind speed of at least 3 mph.",
    };
  }

  if (V > 200) {
    return { error: "Use a realistic wind speed (under ~200 mph)." };
  }

  const windChillF = windChillFahrenheit(T, V);
  const windChillC = ((windChillF - 32) * 5) / 9;
  const risk = coldRiskBand(windChillF);

  return {
    T,
    V,
    windChillF,
    windChillC,
    risk,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const WindChillCalculator = () => {
  const [temperature, setTemperature] = useState(DEFAULTS.temperature);
  const [windSpeed, setWindSpeed] = useState(DEFAULTS.windSpeed);

  const result = computeWindChill(temperature, windSpeed);

  const reset = () => {
    setTemperature(DEFAULTS.temperature);
    setWindSpeed(DEFAULTS.windSpeed);
  };

  return (
    <>
      <Helmet>
        <title>
          Wind Chill Calculator - Feels-Like °F from Temp &amp; Wind (mph)
        </title>
        <meta
          name="description"
          content="Calculate NWS wind chill in Fahrenheit from air temperature (≤50°F) and wind speed (≥3 mph). See Celsius equivalent and cold risk band."
        />
        <meta
          name="keywords"
          content="wind chill calculator, feels like temperature cold wind, NWS wind chill formula, wind chill mph fahrenheit, frostbite wind chill chart"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Wind Chill Calculator"
        />
        <meta
          property="og:description"
          content="Air temp °F and wind mph → wind chill and cold stress band."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wind Chill Calculator" />
        <meta
          name="twitter:description"
          content="Feels-like cold from temperature and wind."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Wind Chill Calculator",
            url: PAGE_URL,
            description:
              "Calculate wind chill temperature in Fahrenheit using the NWS formula for cold air and wind speed in mph.",
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
            name: "Wind Chill Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate wind chill from Fahrenheit temperature and mph wind speed.",
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
            headline: "Wind Chill: How Cold It Feels with Wind",
            description:
              "The NWS wind chill combines air temperature and wind speed to estimate heat loss from exposed skin in cold weather.",
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
                name: "What is wind chill?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wind chill is how cold exposed skin feels when wind increases heat loss. It is lower than the actual air temperature when wind blows.",
                },
              },
              {
                "@type": "Question",
                name: "When does the NWS wind chill formula apply?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This calculator uses the U.S. NWS regression for air temperature at or below 50°F and wind speed at or above 3 mph.",
                },
              },
              {
                "@type": "Question",
                name: "What units are used?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Air temperature in degrees Fahrenheit and wind speed in miles per hour (mph).",
                },
              },
              {
                "@type": "Question",
                name: "Is wind chill the same as heat index?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Heat index describes hot, humid conditions. Wind chill describes cold, windy conditions.",
                },
              },
              {
                "@type": "Question",
                name: "Why does wind make it feel colder?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wind strips away the thin warm layer near skin, so your body loses heat faster—the apparent temperature drops.",
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
                name: "Wind Chill Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          U.S. NWS wind chill: air temperature <strong>≤ 50°F</strong>, wind{" "}
          <strong>≥ 3 mph</strong>. For hot weather, use the Heat Index Calculator.
        </p>

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
              Wind speed (mph)
            </label>
            <input
              type="number"
              value={windSpeed}
              onChange={(e) => setWindSpeed(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.windSpeed}
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
            Wind chill summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Inputs</span>
              <span className="font-code-num text-code-num text-right">
                {result?.T != null && !result.error
                  ? `${fmt2(result.T)} °F, ${fmt2(result.V)} mph wind`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Wind chill (feels like)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.windChillF != null && !result.error
                  ? `${fmt2(result.windChillF)} °F`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Wind chill (°C)</span>
              <span className="font-code-num text-code-num">
                {result?.windChillC != null && !result.error
                  ? `${fmt2(result.windChillC)} °C`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Cold stress band</span>
              <span className="font-code-num text-code-num text-right">
                {result?.risk && !result.error ? result.risk : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Chart reference only—not a medical forecast. Dress for conditions;
              limit exposed skin in extreme cold and wind.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default WindChillCalculator;
