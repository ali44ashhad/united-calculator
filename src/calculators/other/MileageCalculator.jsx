import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MileageCalculator = () => {
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState(null);

  const calculateMileage = () => {
    const d = parseFloat(distance);
    const f = parseFloat(fuel);

    if (!isNaN(d) && !isNaN(f) && f !== 0) {
      const result = d / f;
      setMileage(result.toFixed(2));
    } else {
      setMileage(null);
    }
  };

  const handleReset = () => {
    setDistance("");
    setFuel("");
    setMileage(null);
  };

  return (
    <>
      <Helmet>
        <title>Mileage Calculator | Calculate Vehicle Mileage Easily</title>
        <meta
          name="description"
          content="Use our Mileage Calculator to quickly estimate your vehicle's fuel efficiency in miles per gallon or kilometers per liter."
        />
        <meta
          name="keywords"
          content="mileage calculator, fuel efficiency calculator, miles per gallon calculator, kilometers per liter calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/mileage-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mileage Calculator | Calculate Vehicle Mileage Easily"
        />
        <meta
          property="og:description"
          content="Quickly estimate your vehicle’s fuel efficiency with our easy-to-use Mileage Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/mileage-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Mileage Calculator",
  "url": "https://www.unitedcalculator.net/other/mileage-calculator",
  "description": "Estimate your vehicle’s fuel efficiency in miles per gallon or kilometers per liter using our Mileage Calculator.",
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
      "name": "What is a Mileage Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Mileage Calculator helps you estimate your vehicle’s fuel efficiency in miles per gallon or kilometers per liter."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Mileage Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the distance traveled and fuel consumed to calculate your vehicle’s mileage."
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
      "name": "Mileage Calculator",
      "item": "https://www.unitedcalculator.net/other/mileage-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center text-green-600">
          Mileage Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Distance Traveled (km)
            </label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter distance"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Fuel Consumed (liters)
            </label>
            <input
              type="number"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              placeholder="Enter fuel used"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={calculateMileage}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded w-full"
            >
              Reset
            </button>
          </div>
        </div>

        {mileage !== null && (
          <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Result:
            </h3>
            <p className="text-2xl font-bold text-green-800">{mileage} km/l</p>
          </section>
        )}
      </div>
    </>
  );
};

export default MileageCalculator;
