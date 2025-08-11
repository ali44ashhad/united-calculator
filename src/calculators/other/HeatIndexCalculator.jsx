import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const HeatIndexCalculator = () => {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");

  const calculateHeatIndex = () => {
    const T = parseFloat(temperature);
    const R = parseFloat(humidity);

    if (isNaN(T) || isNaN(R)) return null;

    const HI =
      -42.379 +
      2.04901523 * T +
      10.14333127 * R -
      0.22475541 * T * R -
      0.00683783 * T * T -
      0.05481717 * R * R +
      0.00122874 * T * T * R +
      0.00085282 * T * R * R -
      0.00000199 * T * T * R * R;

    return HI.toFixed(2);
  };

  const result = calculateHeatIndex();

  return (
    <>
      <Helmet>
        <title>
          Heat Index Calculator | Calculate Heat Index & Feels Like Temperature
        </title>
        <meta
          name="description"
          content="Use our Heat Index Calculator to determine the perceived temperature based on air temperature and humidity."
        />
        <meta
          name="keywords"
          content="heat index calculator, feels like temperature calculator, temperature and humidity calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/heat-index-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Heat Index Calculator | Calculate Heat Index & Feels Like Temperature"
        />
        <meta
          property="og:description"
          content="Calculate the heat index or 'feels like' temperature using air temperature and humidity with our Heat Index Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/heat-index-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Heat Index Calculator",
  "url": "https://www.unitedcalculator.net/other/heat-index-calculator",
  "description": "Determine the perceived temperature using our Heat Index Calculator based on air temperature and humidity.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://www.unitedcalculator.net"
  }
}
    `}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Heat Index Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Heat Index Calculator estimates the 'feels like' temperature based on air temperature and humidity levels."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Heat Index Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the air temperature and relative humidity to calculate the heat index or perceived temperature."
      }
    }
  ]
}
    `}
        </script>

        {/* JSON-LD: Breadcrumb */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.unitedcalculator.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Other Calculators",
      "item": "https://www.unitedcalculator.net/other"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Heat Index Calculator",
      "item": "https://www.unitedcalculator.net/other/heat-index-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Temperature (°F)</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="e.g. 90"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Humidity (%)</label>
            <input
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              placeholder="e.g. 70"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Heat Index Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Heat Index:</span>
              <span className="text-pink-600">{result} °F</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default HeatIndexCalculator;
