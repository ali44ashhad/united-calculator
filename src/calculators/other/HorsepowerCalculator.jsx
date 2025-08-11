import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const HorsepowerCalculator = () => {
  const [torque, setTorque] = useState("");
  const [rpm, setRpm] = useState("");
  const [horsepower, setHorsepower] = useState(null);

  const calculateHorsepower = () => {
    const t = parseFloat(torque);
    const r = parseFloat(rpm);
    if (isNaN(t) || isNaN(r) || r === 0) {
      setHorsepower(null);
      return;
    }

    const hp = (t * r) / 5252;
    setHorsepower(hp.toFixed(2));
  };

  return (
    <>
      <Helmet>
        <title>
          Horsepower Calculator | Calculate Engine Horsepower Easily
        </title>
        <meta
          name="description"
          content="Use our Horsepower Calculator to quickly estimate the engine horsepower based on torque and RPM."
        />
        <meta
          name="keywords"
          content="horsepower calculator, engine horsepower calculator, torque to horsepower calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/horsepower-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Horsepower Calculator | Calculate Engine Horsepower Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate engine horsepower from torque and RPM using our easy-to-use Horsepower Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/horsepower-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Horsepower Calculator",
  "url": "https://www.unitedcalculator.net/other/horsepower-calculator",
  "description": "Estimate engine horsepower easily based on torque and RPM with our Horsepower Calculator.",
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
      "name": "What is a Horsepower Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Horsepower Calculator helps estimate the engine horsepower based on torque and RPM values."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Horsepower Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter torque and RPM values to calculate the engine's horsepower quickly."
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
      "name": "Horsepower Calculator",
      "item": "https://www.unitedcalculator.net/other/horsepower-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Horsepower Calculator
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Torque (lb-ft)</label>
            <input
              type="number"
              value={torque}
              onChange={(e) => setTorque(e.target.value)}
              placeholder="e.g. 400"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">RPM</label>
            <input
              type="number"
              value={rpm}
              onChange={(e) => setRpm(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            onClick={calculateHorsepower}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Calculate Horsepower
          </button>
        </div>

        {horsepower && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
            <p className="text-gray-700">
              <strong>Horsepower:</strong> {horsepower} HP
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default HorsepowerCalculator;
