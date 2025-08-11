import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DewPointCalculator = () => {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");

  const calculateDewPoint = () => {
    const T = parseFloat(temperature); // temperature in °C
    const RH = parseFloat(humidity); // relative humidity in %

    if (isNaN(T) || isNaN(RH) || RH <= 0 || RH > 100) return null;

    // Magnus formula
    const a = 17.27;
    const b = 237.7;
    const alpha = (a * T) / (b + T) + Math.log(RH / 100);
    const dewPoint = (b * alpha) / (a - alpha);

    return dewPoint.toFixed(2);
  };

  const result = calculateDewPoint();

  return (
    <>
      <Helmet>
        <title>
          Dew Point Calculator | Calculate Dew Point Temperature Easily
        </title>
        <meta
          name="description"
          content="Use our Dew Point Calculator to quickly determine the dew point temperature based on temperature and humidity values."
        />
        <meta
          name="keywords"
          content="dew point calculator, calculate dew point, humidity calculator, weather calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/dew-point-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dew Point Calculator | Calculate Dew Point Temperature Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate the dew point temperature based on ambient temperature and humidity using our Dew Point Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/dew-point-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dew Point Calculator",
  "url": "https://www.unitedcalculator.net/other/dew-point-calculator",
  "description": "Calculate the dew point temperature accurately using temperature and humidity values with our Dew Point Calculator.",
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
      "name": "What is a Dew Point Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Dew Point Calculator helps determine the temperature at which air becomes saturated and dew forms."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Dew Point Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input the current temperature and relative humidity, and the calculator will compute the dew point temperature."
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
      "name": "Dew Point Calculator",
      "item": "https://www.unitedcalculator.net/other/dew-point-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Temperature (°C)</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="e.g. 25"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Relative Humidity (%)
            </label>
            <input
              type="number"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              placeholder="e.g. 60"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Dew Point Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Dew Point:</span>
              <span className="text-blue-600">{result} °C</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DewPointCalculator;
