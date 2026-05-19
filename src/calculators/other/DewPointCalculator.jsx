import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/dew-point-calculator";

const DEFAULTS = {
  temperature: "25",
  humidity: "60",
};

const MAGNUS_A = 17.27;
const MAGNUS_B = 237.7;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeDewPoint = (temperature, humidity) => {
  if (temperature.trim() === "" || humidity.trim() === "") {
    return null;
  }

  const T = parseFloat(temperature);
  const RH = parseFloat(humidity);

  if (isNaN(T) || isNaN(RH)) {
    return { error: "Enter valid numbers for temperature and humidity." };
  }

  if (RH <= 0 || RH > 100) {
    return { error: "Relative humidity must be between 0 and 100% (exclusive of 0)." };
  }

  const alpha = (MAGNUS_A * T) / (MAGNUS_B + T) + Math.log(RH / 100);
  const denominator = MAGNUS_A - alpha;

  if (Math.abs(denominator) < 1e-10) {
    return { error: "Could not compute dew point for these inputs." };
  }

  const dewPoint = (MAGNUS_B * alpha) / denominator;

  return {
    temperature: T,
    humidity: RH,
    dewPoint,
  };
};

const formatTemp = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const DewPointCalculator = () => {
  const [temperature, setTemperature] = useState(DEFAULTS.temperature);
  const [humidity, setHumidity] = useState(DEFAULTS.humidity);

  const result = computeDewPoint(temperature, humidity);

  const reset = () => {
    setTemperature(DEFAULTS.temperature);
    setHumidity(DEFAULTS.humidity);
  };

  return (
    <>
      <Helmet>
        <title>
          Dew Point Calculator - Magnus Formula (°C & % RH)
        </title>
        <meta
          name="description"
          content="Calculate dew point in °C from air temperature and relative humidity using the Magnus formula. Free online dew point calculator."
        />
        <meta
          name="keywords"
          content="dew point calculator, dew point from temperature and humidity, Magnus formula dew point, relative humidity dew point calculator, condensation temperature calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dew Point Calculator - °C"
        />
        <meta
          property="og:description"
          content="Enter temperature (°C) and relative humidity (%) to estimate dew point."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dew Point Calculator"
        />
        <meta
          name="twitter:description"
          content="Dew point from temperature and humidity (Magnus)."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Dew Point Calculator",
            url: PAGE_URL,
            description:
              "Calculate dew point temperature from Celsius temperature and relative humidity.",
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
            name: "Dew Point Calculator",
            url: PAGE_URL,
            description:
              "Web application to estimate dew point using the Magnus formula.",
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
              "How to Calculate Dew Point from Temperature and Humidity",
            description:
              "Guide to the Magnus approximation for dew point in degrees Celsius.",
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
                name: "What is dew point?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dew point is the temperature at which air becomes saturated with water vapor and condensation can form. It depends on temperature and relative humidity.",
                },
              },
              {
                "@type": "Question",
                name: "What formula does this calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Magnus formula with constants a = 17.27 and b = 237.7, using temperature in °C and relative humidity as a percent.",
                },
              },
              {
                "@type": "Question",
                name: "What units are required?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Air temperature in degrees Celsius and relative humidity from just above 0% to 100%.",
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
                name: "Dew Point Calculator",
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
              Air temperature
            </label>
            <div className="relative">
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.temperature}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                °C
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Relative humidity
            </label>
            <div className="relative">
              <input
                type="number"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.humidity}
                min="0"
                max="100"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
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
            Dew Point Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Temperature</span>
              <span className="font-code-num text-code-num">
                {result?.temperature != null && !result.error
                  ? `${formatTemp(result.temperature)} °C`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Relative humidity</span>
              <span className="font-code-num text-code-num">
                {result?.humidity != null && !result.error
                  ? `${formatTemp(result.humidity)} %`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Dew point (Magnus)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.dewPoint != null && !result.error
                  ? `${formatTemp(result.dewPoint)} °C`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Magnus approximation for water vapor over liquid water. Best for
              typical outdoor ranges; not for extreme cold or specialized met
              work.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DewPointCalculator;
