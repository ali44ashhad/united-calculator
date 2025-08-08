import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const OneRepMaxCalculator = () => {
  const [weightLifted, setWeightLifted] = useState("100");
  const [reps, setReps] = useState("5");

  const calculateOneRepMax = () => {
    const w = parseFloat(weightLifted);
    const r = parseInt(reps);

    if (isNaN(w) || isNaN(r) || w <= 0 || r <= 0) return null;

    // Epley Formula: 1RM = weight * (1 + reps / 30)
    const oneRepMax = w * (1 + r / 30);
    return oneRepMax.toFixed(2);
  };

  const result = calculateOneRepMax();

  return (
    <>
      <Helmet>
        <title>
          One Rep Max Calculator | Estimate Your Maximum Weight for One
          Repetition
        </title>
        <meta
          name="description"
          content="Use our One Rep Max Calculator to estimate the maximum weight you can lift for a single repetition. Perfect for strength training and workout planning."
        />
        <meta
          name="keywords"
          content="one rep max calculator, 1rm calculator, max lift calculator, strength training calculator, weightlifting max, workout calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/one-rep-max-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="One Rep Max Calculator | Estimate Your Maximum Weight for One Repetition"
        />
        <meta
          property="og:description"
          content="Calculate your one rep max (1RM) using various formulas to find the heaviest weight you can lift for a single repetition. Ideal for weightlifters and strength athletes."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/one-rep-max-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "One Rep Max Calculator",
      "url": "https://unitedcalculator.net/health/one-rep-max-calculator",
      "description": "Estimate your maximum lift for a single repetition using the One Rep Max Calculator. Useful for designing strength training programs and tracking progress.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
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
          "name": "What is One Rep Max (1RM)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "One Rep Max (1RM) is the maximum amount of weight you can lift for one complete repetition of a given exercise."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate my One Rep Max?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can estimate your 1RM by entering the weight lifted and number of reps performed into the calculator, which uses standard formulas like Epley or Brzycki."
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
          "item": "https://unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Health Calculators",
          "item": "https://unitedcalculator.net/health"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "One Rep Max Calculator",
          "item": "https://unitedcalculator.net/health/one-rep-max-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Weight Lifted (kg)</label>
            <input
              type="number"
              value={weightLifted}
              onChange={(e) => setWeightLifted(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Repetitions</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Estimated One-Rep Max
            </h2>
            <div className="text-lg font-semibold text-gray-700">
              {result} kg
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default OneRepMaxCalculator;
