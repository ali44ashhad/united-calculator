import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const activityOptions = [
  { label: "Walking (5 km/h)", value: 3.5 },
  { label: "Running (8 km/h)", value: 8.3 },
  { label: "Cycling (leisure)", value: 4.0 },
  { label: "Swimming (light)", value: 6.0 },
  { label: "Yoga", value: 2.5 },
  { label: "Weight Lifting", value: 3.0 },
  { label: "Dancing", value: 5.0 },
];

const CaloriesBurnedCalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [duration, setDuration] = useState("30"); // in minutes
  const [activity, setActivity] = useState("3.5"); // MET

  const calculateCaloriesBurned = () => {
    const w = parseFloat(weight);
    const d = parseFloat(duration) / 60; // convert minutes to hours
    const met = parseFloat(activity);

    if (isNaN(w) || isNaN(d) || isNaN(met)) return null;

    const calories = met * w * d;
    return calories.toFixed(2);
  };

  const result = calculateCaloriesBurned();

  return (
    <>
      <Helmet>
        <title>
          Calories Burned Calculator | Estimate Calories Burned During Exercise
        </title>
        <meta
          name="description"
          content="Use our Calories Burned Calculator to estimate how many calories you burn during various exercises and daily activities. Track workouts, improve weight loss, and plan your fitness goals."
        />
        <meta
          name="keywords"
          content="calories burned calculator, exercise calorie calculator, how many calories burned, workout calorie tracker, fitness calculator, burn calories calculator, health tools"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/calories-burned-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Calories Burned Calculator | Estimate Calories Burned During Exercise"
        />
        <meta
          property="og:description"
          content="Find out how many calories you burn during exercise with our Calories Burned Calculator. Enter your weight, duration, and activity to get accurate results for fitness tracking."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/calories-burned-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Calories Burned Calculator",
      "url": "https://unitedcalculator.net/health/calories-burned-calculator",
      "description": "Estimate the number of calories burned during exercise or daily activities using this calculator. Simply select an activity, enter your weight and duration, and get accurate results for better health planning.",
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
          "name": "How does the Calories Burned Calculator work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator estimates how many calories you burn by considering your weight, the type of activity you perform, and the duration of the activity. It uses MET (Metabolic Equivalent of Task) values for accuracy."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I track calories burned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tracking calories burned helps you manage weight, set realistic fitness goals, and measure progress. It's a key component of understanding your energy balance."
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
          "name": "Calories Burned Calculator",
          "item": "https://unitedcalculator.net/health/calories-burned-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 70"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Duration (minutes)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Activity Type</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {activityOptions.map((opt) => (
                <option key={opt.label} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Calories Burned Summary
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Estimated Calories Burned:</span>
              <span className="text-blue-600">{result} kcal</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CaloriesBurnedCalculator;
