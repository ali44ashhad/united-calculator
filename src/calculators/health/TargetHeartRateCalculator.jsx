import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const TargetHeartRateCalculator = () => {
  const [age, setAge] = useState("");

  const calculateTargetHeartRate = () => {
    const a = parseInt(age);
    if (!a || a <= 0) return null;

    const maxHeartRate = 220 - a;
    const lowerRange = Math.round(maxHeartRate * 0.5);
    const upperRange = Math.round(maxHeartRate * 0.85);

    return { lowerRange, upperRange, maxHeartRate };
  };

  const result = calculateTargetHeartRate();

  return (
    <>
      <Helmet>
        <title>
          Target Heart Rate Calculator | Find Your Optimal Exercise Heart Rate
        </title>
        <meta
          name="description"
          content="Use our Target Heart Rate Calculator to determine your ideal heart rate zones for safe and effective cardiovascular exercise based on your age and fitness level."
        />
        <meta
          name="keywords"
          content="target heart rate calculator, heart rate zones, exercise heart rate, cardio calculator, fitness heart rate calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/target-heart-rate-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Target Heart Rate Calculator | Find Your Optimal Exercise Heart Rate"
        />
        <meta
          property="og:description"
          content="Calculate your target heart rate zones to optimize cardiovascular exercise safely using our Target Heart Rate Calculator based on your age and fitness level."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/target-heart-rate-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Target Heart Rate Calculator",
      "url": "https://unitedcalculator.net/health/target-heart-rate-calculator",
      "description": "Determine your optimal exercise heart rate zones with the Target Heart Rate Calculator. Based on your age and fitness level, it helps improve cardio workouts safely.",
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
          "name": "What is a target heart rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Target heart rate is the ideal range of heart beats per minute during exercise for maximum cardiovascular benefit and safety."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate my target heart rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter your age and fitness level into the calculator to find your optimal heart rate zones for different exercise intensities."
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
          "name": "Target Heart Rate Calculator",
          "item": "https://unitedcalculator.net/health/target-heart-rate-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Your Age (in years)
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              Target Heart Rate Zone
            </h2>
            <p className="text-gray-800 mb-1">
              🫀 <strong>Max Heart Rate:</strong> {result.maxHeartRate} bpm
            </p>
            <p className="text-gray-800">
              ✅ <strong>Target Zone:</strong> {result.lowerRange} –{" "}
              {result.upperRange} bpm
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default TargetHeartRateCalculator;
