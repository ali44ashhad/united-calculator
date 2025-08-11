import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PercentErrorCalculator = () => {
  const [measuredValue, setMeasuredValue] = useState("105");
  const [actualValue, setActualValue] = useState("100");

  const parsedMeasured = parseFloat(measuredValue);
  const parsedActual = parseFloat(actualValue);

  const isValid =
    !isNaN(parsedMeasured) && !isNaN(parsedActual) && parsedActual !== 0;

  const percentError = isValid
    ? (Math.abs((parsedMeasured - parsedActual) / parsedActual) * 100).toFixed(
        2
      )
    : null;

  return (
    <>
      <Helmet>
        <title>
          Percent Error Calculator | Calculate Percentage Error Easily
        </title>
        <meta
          name="description"
          content="Use our Percent Error Calculator to quickly compute the percentage error between an experimental and theoretical value. Ideal for students and scientists."
        />
        <meta
          name="keywords"
          content="percent error calculator, percentage error calculator, calculate percent error, error calculation, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/percent-error-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Percent Error Calculator | Calculate Percentage Error Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate the percent error between experimental and theoretical values using our easy-to-use Percent Error Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/percent-error-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Percent Error Calculator",
  "url": "https://www.unitedcalculator.net/math/percent-error-calculator",
  "description": "Calculate the percentage error between experimental and theoretical values easily with our Percent Error Calculator.",
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
      "name": "What is percent error?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Percent error measures the difference between an experimental value and the true or theoretical value, expressed as a percentage."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Percent Error Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the experimental value and the theoretical value, and the calculator will provide the percent error."
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
      "name": "Math Calculators",
      "item": "https://www.unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Percent Error Calculator",
      "item": "https://www.unitedcalculator.net/math/percent-error-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Measured Value</label>
            <input
              type="number"
              value={measuredValue}
              onChange={(e) => setMeasuredValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 105"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Actual Value</label>
            <input
              type="number"
              value={actualValue}
              onChange={(e) => setActualValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
            />
          </div>
        </div>

        {isValid && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Percent Error
            </h2>
            <p>
              Percent Error = <strong>{percentError}%</strong>
            </p>
          </section>
        )}

        {!isValid && (
          <p className="text-red-600 mt-4">
            Please enter valid numbers. Actual value must not be zero.
          </p>
        )}
      </div>
    </>
  );
};

export default PercentErrorCalculator;
