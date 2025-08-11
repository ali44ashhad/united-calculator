import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ProbabilityCalculator = () => {
  const [favorable, setFavorable] = useState("");
  const [total, setTotal] = useState("");
  const [probability, setProbability] = useState(null);

  const calculateProbability = () => {
    const fav = parseFloat(favorable);
    const tot = parseFloat(total);

    if (isNaN(fav) || isNaN(tot) || tot <= 0 || fav < 0 || fav > tot) {
      setProbability("Invalid input");
      return;
    }

    const prob = fav / tot;
    setProbability(prob.toFixed(4));
  };

  return (
    <>
      <Helmet>
        <title>Probability Calculator | Calculate Probability Easily</title>
        <meta
          name="description"
          content="Use our Probability Calculator to quickly compute the probability of events. Ideal for students, professionals, and anyone interested in statistics."
        />
        <meta
          name="keywords"
          content="probability calculator, calculate probability, event probability, math calculator, statistics calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/probability-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Probability Calculator | Calculate Probability Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate the probability of various events using our easy-to-use Probability Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/probability-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Probability Calculator",
  "url": "https://www.unitedcalculator.net/math/probability-calculator",
  "description": "Calculate the probability of events quickly and accurately with our Probability Calculator.",
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
      "name": "What is probability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Probability is a measure of how likely an event is to occur, expressed as a number between 0 and 1."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Probability Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the number of favorable outcomes and total possible outcomes, and the calculator will compute the probability."
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
      "name": "Probability Calculator",
      "item": "https://www.unitedcalculator.net/math/probability-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Probability Calculator
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Favorable Outcomes</label>
          <input
            type="number"
            value={favorable}
            onChange={(e) => setFavorable(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g., 2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Total Outcomes</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g., 6"
          />
        </div>

        <button
          onClick={calculateProbability}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate
        </button>

        {probability !== null && (
          <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
            {probability === "Invalid input" ? (
              <p className="text-red-600">Please enter valid values.</p>
            ) : (
              <p>
                <strong>Probability:</strong> {probability} (
                {(probability * 100).toFixed(2)}%)
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProbabilityCalculator;
