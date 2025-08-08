import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const FatIntakeCalculator = () => {
  const [calories, setCalories] = useState("2000");
  const [fatPercentage, setFatPercentage] = useState("30");

  const calculateFatIntake = () => {
    const cal = parseFloat(calories);
    const percent = parseFloat(fatPercentage);

    if (isNaN(cal) || isNaN(percent)) return null;

    const fatCalories = (cal * percent) / 100;
    const fatGrams = fatCalories / 9;

    return fatGrams.toFixed(1);
  };

  const result = calculateFatIntake();

  return (
    <>
      <Helmet>
        <title>Fat Intake Calculator | Calculate Daily Fat Needs</title>
        <meta
          name="description"
          content="Use our Fat Intake Calculator to determine your optimal daily fat consumption based on age, weight, activity level, and fitness goals. Ideal for weight loss, muscle gain, or healthy eating plans."
        />
        <meta
          name="keywords"
          content="fat intake calculator, daily fat needs, healthy fat calculator, diet fat calculator, macro calculator, nutritional needs calculator, fitness fat intake"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/fat-intake-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Fat Intake Calculator | Calculate Daily Fat Needs"
        />
        <meta
          property="og:description"
          content="Calculate how much fat you should consume daily using our Fat Intake Calculator. Perfect for balanced diets, weight management, and tracking macros for health or fitness goals."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/fat-intake-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Fat Intake Calculator",
      "url": "https://www.unitedcalculator.net/health/fat-intake-calculator",
      "description": "Use the Fat Intake Calculator to determine your recommended daily fat consumption. Ideal for those planning a balanced diet, tracking macros, or adjusting fat intake for weight goals.",
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
          "name": "How much fat should I eat daily?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The recommended daily fat intake depends on your total calorie needs, activity level, and health goals. Typically, 20% to 35% of your daily calories should come from healthy fats."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this calculator for weight loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Fat Intake Calculator allows you to select weight loss as a goal and adjust fat consumption accordingly to help you create a calorie deficit while maintaining a balanced diet."
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
          "name": "Health Calculators",
          "item": "https://www.unitedcalculator.net/health"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Fat Intake Calculator",
          "item": "https://www.unitedcalculator.net/health/fat-intake-calculator"
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
              Daily Calorie Intake
            </label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fat Percentage (%)</label>
            <input
              type="number"
              value={fatPercentage}
              onChange={(e) => setFatPercentage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Recommended Fat Intake
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Daily Fat:</span>
              <span className="text-green-600">{result} grams</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default FatIntakeCalculator;
