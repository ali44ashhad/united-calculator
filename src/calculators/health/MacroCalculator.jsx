import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MacroCalculator = () => {
  const [calories, setCalories] = useState("2000");
  const [carbsPercent, setCarbsPercent] = useState("50");
  const [proteinPercent, setProteinPercent] = useState("20");
  const [fatPercent, setFatPercent] = useState("30");

  const calculateMacros = () => {
    const cals = parseFloat(calories);
    const carbs = parseFloat(carbsPercent);
    const protein = parseFloat(proteinPercent);
    const fat = parseFloat(fatPercent);

    if (
      isNaN(cals) ||
      isNaN(carbs) ||
      isNaN(protein) ||
      isNaN(fat) ||
      carbs + protein + fat !== 100
    ) {
      return null;
    }

    const carbsGrams = ((carbs / 100) * cals) / 4;
    const proteinGrams = ((protein / 100) * cals) / 4;
    const fatGrams = ((fat / 100) * cals) / 9;

    return {
      carbs: carbsGrams.toFixed(1),
      protein: proteinGrams.toFixed(1),
      fat: fatGrams.toFixed(1),
    };
  };

  const result = calculateMacros();

  return (
    <>
      <Helmet>
        <title>
          Macro Calculator | Calculate Your Daily Protein, Carbs & Fat Intake
        </title>
        <meta
          name="description"
          content="Use our Macro Calculator to determine your ideal daily intake of protein, carbohydrates, and fats based on your goals, weight, height, and activity level."
        />
        <meta
          name="keywords"
          content="macro calculator, macronutrient calculator, daily protein calculator, carb calculator, fat intake calculator, nutrition calculator, fitness macros"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/macro-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Macro Calculator | Calculate Your Daily Protein, Carbs & Fat Intake"
        />
        <meta
          property="og:description"
          content="Calculate your ideal daily macronutrient intake with our Macro Calculator. Input your weight, height, goals, and activity level to get personalized protein, carb, and fat targets."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/macro-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Macro Calculator",
      "url": "https://unitedcalculator.net/health/macro-calculator",
      "description": "Determine your daily macronutrient needs using the Macro Calculator based on your body stats, goals, and activity level. Perfect for tracking nutrition and optimizing fitness results.",
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
          "name": "What is a Macro Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Macro Calculator helps you figure out how much protein, carbohydrates, and fats you should consume daily to meet your fitness and health goals."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Macro Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter your weight, height, activity level, and goals into the calculator. It then provides daily targets for protein, carbs, and fat intake tailored to your needs."
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
          "name": "Macro Calculator",
          "item": "https://unitedcalculator.net/health/macro-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Daily Calories</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">Carbs %</label>
              <input
                type="number"
                value={carbsPercent}
                onChange={(e) => setCarbsPercent(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Protein %</label>
              <input
                type="number"
                value={proteinPercent}
                onChange={(e) => setProteinPercent(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Fat %</label>
              <input
                type="number"
                value={fatPercent}
                onChange={(e) => setFatPercent(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Daily Macronutrient Breakdown
            </h2>
            <div className="text-gray-700 space-y-1 text-lg">
              <div>Carbohydrates: {result.carbs} g</div>
              <div>Protein: {result.protein} g</div>
              <div>Fat: {result.fat} g</div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default MacroCalculator;
