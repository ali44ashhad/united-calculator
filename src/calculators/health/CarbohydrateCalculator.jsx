import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CarbohydrateCalculator = () => {
  const [totalCarbs, setTotalCarbs] = useState("40");
  const [fiber, setFiber] = useState("5");
  const [sugarAlcohols, setSugarAlcohols] = useState("10");

  const calculateNetCarbs = () => {
    const carbs = parseFloat(totalCarbs);
    const fiberVal = parseFloat(fiber);
    const sugarAlcohol = parseFloat(sugarAlcohols);

    if (isNaN(carbs) || isNaN(fiberVal) || isNaN(sugarAlcohol)) return null;

    const netCarbs = carbs - fiberVal - sugarAlcohol / 2;
    return netCarbs.toFixed(2);
  };

  const result = calculateNetCarbs();

  return (
    <>
      <Helmet>
        <title>Carbohydrate Calculator | Calculate Daily Carb Intake</title>
        <meta
          name="description"
          content="Use our Carbohydrate Calculator to determine your daily carb intake based on age, weight, activity level, and health goals. Perfect for weight loss, muscle gain, and keto diets."
        />
        <meta
          name="keywords"
          content="carbohydrate calculator, carb intake calculator, daily carb needs, low carb diet calculator, keto carb calculator, macros calculator, nutrition calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/carbohydrate-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Carbohydrate Calculator | Calculate Daily Carb Intake"
        />
        <meta
          property="og:description"
          content="Easily calculate your ideal daily carbohydrate intake based on your fitness goals using our Carbohydrate Calculator. Get results for weight loss, maintenance, or muscle gain."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/carbohydrate-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Carbohydrate Calculator",
      "url": "https://unitedcalculator.net/health/carbohydrate-calculator",
      "description": "Use the Carbohydrate Calculator to find out how many grams of carbs you should consume daily for your health goals. Tailored for weight loss, muscle gain, and ketogenic diets.",
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
          "name": "How many carbs should I eat daily?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The amount of carbs you should eat daily depends on your age, weight, activity level, and health goals. Our Carbohydrate Calculator provides personalized recommendations for weight loss, maintenance, or muscle gain."
          }
        },
        {
          "@type": "Question",
          "name": "Is this calculator suitable for keto diets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Carbohydrate Calculator can help you estimate the ideal carb intake for ketogenic or low-carb diets by allowing you to select your dietary preference or goal."
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
          "name": "Carbohydrate Calculator",
          "item": "https://unitedcalculator.net/health/carbohydrate-calculator"
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
              Total Carbohydrates (g)
            </label>
            <input
              type="number"
              value={totalCarbs}
              onChange={(e) => setTotalCarbs(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 40"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fiber (g)</label>
            <input
              type="number"
              value={fiber}
              onChange={(e) => setFiber(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Sugar Alcohols (g)</label>
            <input
              type="number"
              value={sugarAlcohols}
              onChange={(e) => setSugarAlcohols(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Net Carbohydrate Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Net Carbs:</span>
              <span className="text-green-600">{result} g</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CarbohydrateCalculator;
