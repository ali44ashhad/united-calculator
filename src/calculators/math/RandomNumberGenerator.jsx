import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RandomNumberGenerator = () => {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandom = () => {
    const minimum = parseInt(min);
    const maximum = parseInt(max);

    if (isNaN(minimum) || isNaN(maximum) || minimum > maximum) {
      setRandomNumber("Invalid range");
      return;
    }

    const result =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    setRandomNumber(result);
  };

  return (
    <>
      <Helmet>
        <title>Random Number Generator | Generate Random Numbers Easily</title>
        <meta
          name="description"
          content="Use our Random Number Generator to quickly generate random numbers within any range. Perfect for games, simulations, and statistical sampling."
        />
        <meta
          name="keywords"
          content="random number generator, generate random numbers, random number tool, math calculator, randomizer"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/random-number-generator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Random Number Generator | Generate Random Numbers Easily"
        />
        <meta
          property="og:description"
          content="Quickly generate random numbers within any range using our easy-to-use Random Number Generator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/random-number-generator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Random Number Generator",
  "url": "https://www.unitedcalculator.net/math/random-number-generator",
  "description": "Generate random numbers quickly and easily with our Random Number Generator tool.",
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
      "name": "What is a random number generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A random number generator is a tool that produces numbers in a random sequence within a specified range."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Random Number Generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the minimum and maximum values for the range, and click generate to get a random number."
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
      "name": "Random Number Generator",
      "item": "https://www.unitedcalculator.net/math/random-number-generator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Minimum Value</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter min value"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Maximum Value</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter max value"
            />
          </div>

          <button
            onClick={generateRandom}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Generate Random Number
          </button>
        </div>

        {randomNumber !== null && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Random Number
            </h2>
            <div className="text-green-600 font-bold text-2xl">
              {randomNumber}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default RandomNumberGenerator;
