import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CalorieCalculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.55"); // default: Moderately active

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (isNaN(w) || isNaN(h) || isNaN(a) || isNaN(act)) return null;

    let bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const calories = bmr * act;

    return {
      bmr: bmr.toFixed(2),
      calories: calories.toFixed(2),
    };
  };

  const result = calculateCalories();

  return (
    <>
      <Helmet>
        <title>
          Calorie Calculator | Calculate Daily Calorie Needs to Lose, Gain or
          Maintain Weight
        </title>
        <meta
          name="description"
          content="Use our Calorie Calculator to estimate how many calories you need daily based on your age, gender, height, weight, and activity level. Perfect for weight loss, muscle gain, or maintenance."
        />
        <meta
          name="keywords"
          content="calorie calculator, daily calorie needs, how many calories do I need, calorie intake calculator, weight loss calorie calculator, maintenance calories, health calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/calorie-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Calorie Calculator | Calculate Daily Calorie Needs to Lose, Gain or Maintain Weight"
        />
        <meta
          property="og:description"
          content="Estimate your daily calorie requirements using our accurate Calorie Calculator. Enter your details and select your fitness goal to know how many calories you need to eat each day."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/calorie-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Calorie Calculator",
      "url": "https://www.unitedcalculator.net/health/calorie-calculator",
      "description": "This Calorie Calculator estimates the number of calories you should consume daily based on your body metrics and activity level. Ideal for anyone planning to lose weight, build muscle, or maintain their current weight.",
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
          "name": "How do I calculate how many calories I need per day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can calculate your daily calorie needs using factors like age, gender, height, weight, and activity level. Our Calorie Calculator does this for you instantly using formulas like the Mifflin-St Jeor equation."
          }
        },
        {
          "@type": "Question",
          "name": "What is a calorie deficit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A calorie deficit occurs when you consume fewer calories than your body burns, leading to weight loss. Our calculator helps you determine your maintenance level and how much to reduce for healthy fat loss."
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
          "name": "Calorie Calculator",
          "item": "https://www.unitedcalculator.net/health/calorie-calculator"
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

          <div>
            <label className="block mb-1 font-medium">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly active (1–3 days/week)</option>
              <option value="1.55">Moderately active (3–5 days/week)</option>
              <option value="1.725">Very active (6–7 days/week)</option>
              <option value="1.9">
                Super active (physical job or 2x training)
              </option>
            </select>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Calorie Requirement Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Your BMR:</span>
                <span className="text-yellow-600 font-medium">
                  {result.bmr} kcal/day
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Daily Calorie Needs:</span>
                <span className="text-blue-600">
                  {result.calories} kcal/day
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CalorieCalculator;
