import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BMRCalculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a)) return null;

    let bmr;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    return bmr.toFixed(2);
  };

  const result = calculateBMR();

  return (
    <>
      <Helmet>
        <title>BMR Calculator | Calculate Your Basal Metabolic Rate</title>
        <meta
          name="description"
          content="Use our BMR Calculator to estimate your Basal Metabolic Rate based on your age, gender, weight, and height. Find out how many calories your body needs at rest."
        />
        <meta
          name="keywords"
          content="bmr calculator, basal metabolic rate calculator, daily calorie calculator, how many calories do I need, calorie needs calculator, tdee calculator, health calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/bmr-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BMR Calculator | Calculate Your Basal Metabolic Rate"
        />
        <meta
          property="og:description"
          content="Easily calculate your Basal Metabolic Rate (BMR) to understand how many calories your body burns at rest. Ideal for weight management and fitness planning."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/bmr-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BMR Calculator",
      "url": "https://unitedcalculator.net/health/bmr-calculator",
      "description": "Calculate your Basal Metabolic Rate (BMR) using the Harris-Benedict or Mifflin-St Jeor formulas. This calculator helps you understand how many calories your body needs at rest for maintaining basic functions.",
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
          "name": "What is BMR (Basal Metabolic Rate)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMR stands for Basal Metabolic Rate. It represents the number of calories your body requires to maintain basic bodily functions like breathing, circulation, and cell production while at rest."
          }
        },
        {
          "@type": "Question",
          "name": "How is BMR calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMR can be calculated using formulas like the Harris-Benedict or Mifflin-St Jeor equation, which consider age, gender, height, and weight."
          }
        },
        {
          "@type": "Question",
          "name": "Why is knowing BMR important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Knowing your BMR helps you estimate your total daily calorie needs and can assist with weight loss, maintenance, or gain plans by adjusting your caloric intake accordingly."
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
          "name": "BMR Calculator",
          "item": "https://unitedcalculator.net/health/bmr-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 70"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 175"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Age (years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 25"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              BMR Result Summary
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Your BMR:</span>
              <span className="text-blue-600">{result} kcal/day</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BMRCalculator;
