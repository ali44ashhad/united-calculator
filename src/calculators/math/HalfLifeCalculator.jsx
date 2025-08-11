import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const HalfLifeCalculator = () => {
  const [initialAmount, setInitialAmount] = useState("100");
  const [halfLife, setHalfLife] = useState("5");
  const [timeElapsed, setTimeElapsed] = useState("10");

  const calculateHalfLife = () => {
    const A0 = parseFloat(initialAmount);
    const tHalf = parseFloat(halfLife);
    const t = parseFloat(timeElapsed);

    if (isNaN(A0) || isNaN(tHalf) || isNaN(t) || tHalf <= 0 || A0 < 0 || t < 0)
      return null;

    const remainingAmount = A0 * Math.pow(0.5, t / tHalf);

    return {
      initialAmount: A0.toFixed(2),
      timeElapsed: t.toFixed(2),
      halfLife: tHalf.toFixed(2),
      remainingAmount: remainingAmount.toFixed(4),
    };
  };

  const result = calculateHalfLife();

  return (
    <>
      <Helmet>
        <title>Half-Life Calculator | Calculate Radioactive Decay</title>
        <meta
          name="description"
          content="Use our Half-Life Calculator to determine the remaining quantity of a substance after a given time based on its half-life. Ideal for students and scientists."
        />
        <meta
          name="keywords"
          content="half-life calculator, radioactive decay calculator, half life calculation, decay rate calculator, physics calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/half-life-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Half-Life Calculator | Calculate Radioactive Decay"
        />
        <meta
          property="og:description"
          content="Calculate the remaining amount of a substance after a certain time using its half-life with our easy-to-use Half-Life Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/half-life-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Half-Life Calculator",
  "url": "https://www.unitedcalculator.net/math/half-life-calculator",
  "description": "Determine the remaining quantity of a substance after a given time period based on its half-life using our Half-Life Calculator.",
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
      "name": "What is half-life?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Half-life is the time required for a quantity to reduce to half its initial value during radioactive decay or other exponential decay processes."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Half-Life Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the initial quantity, half-life period, and elapsed time to calculate the remaining amount of the substance."
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
      "name": "math Calculators",
      "item": "https://www.unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Half-Life Calculator",
      "item": "https://www.unitedcalculator.net/math/half-life-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Initial Amount</label>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="e.g. 100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Half-Life (in same time unit)
            </label>
            <input
              type="number"
              value={halfLife}
              onChange={(e) => setHalfLife(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Time Elapsed</label>
            <input
              type="number"
              value={timeElapsed}
              onChange={(e) => setTimeElapsed(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Half-Life Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Initial Amount:</span>
                <span className="text-yellow-600 font-medium">
                  {result.initialAmount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Time Elapsed:</span>
                <span className="text-green-600 font-medium">
                  {result.timeElapsed}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Half-Life:</span>
                <span className="text-indigo-600 font-medium">
                  {result.halfLife}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Remaining Amount:</span>
                <span className="text-blue-600">{result.remainingAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default HalfLifeCalculator;
