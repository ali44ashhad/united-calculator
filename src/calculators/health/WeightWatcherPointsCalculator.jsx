import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const WeightWatcherPointsCalculator = () => {
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [fiber, setFiber] = useState("");

  const calculatePoints = () => {
    const cal = parseFloat(calories);
    const fatGrams = parseFloat(fat);
    let fiberGrams = parseFloat(fiber);

    if (isNaN(cal) || isNaN(fatGrams) || isNaN(fiberGrams)) return null;
    if (fiberGrams > 4) fiberGrams = 4;

    const points = cal / 50 + fatGrams / 12 - fiberGrams / 5;
    return Math.round(points * 10) / 10;
  };

  const result = calculatePoints();

  return (
    <>
      <Helmet>
        <title>
          Weight Watcher Points Calculator | Track SmartPoints & Food Score
        </title>
        <meta
          name="description"
          content="Use our Weight Watcher Points Calculator to calculate SmartPoints based on food's protein, sugar, saturated fat, and calories. Stay on track with your WW plan easily."
        />
        <meta
          name="keywords"
          content="weight watcher points calculator, smartpoints calculator, ww calculator, food point calculator, weight loss tracker, calorie to point calculator, diet calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/weight-watcher-points-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Weight Watcher Points Calculator | Track SmartPoints & Food Score"
        />
        <meta
          property="og:description"
          content="Calculate Weight Watcher SmartPoints with our easy-to-use calculator. Input food details like protein, calories, sugar, and saturated fat to track your WW points accurately."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/weight-watcher-points-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Weight Watcher Points Calculator",
      "url": "https://unitedcalculator.net/health/weight-watcher-points-calculator",
      "description": "This Weight Watcher Points Calculator helps you determine SmartPoints based on nutritional values like calories, sugar, saturated fat, and protein. It's ideal for users following the WW diet program and tracking food points for healthy weight loss.",
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
          "name": "How are Weight Watcher Points calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Weight Watcher Points, also known as SmartPoints, are calculated using the nutritional content of food — including calories, protein, sugar, and saturated fat. The formula rewards higher protein and penalizes sugar and saturated fat."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this calculator for the latest WW plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our calculator supports the general SmartPoints formula used in recent WW plans. However, always refer to the latest WW app or website for personalized tracking and adjustments."
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
          "name": "Weight Watcher Points Calculator",
          "item": "https://unitedcalculator.net/health/weight-watcher-points-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Calories</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fat (g)</label>
            <input
              type="number"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fiber (g)</label>
            <input
              type="number"
              value={fiber}
              onChange={(e) => setFiber(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {result !== null && (
          <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Weight Watchers Points
            </h2>
            <p className="text-gray-800 text-lg">
              🍽️ <strong>Points:</strong> {result}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default WeightWatcherPointsCalculator;
