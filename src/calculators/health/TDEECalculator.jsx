import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const TDEECalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");

  const calculateTDEE = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (!w || !h || !a) return null;

    const bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = Math.round(bmr * act);
    return tdee;
  };

  const result = calculateTDEE();

  return (
    <>
      <Helmet>
        <title>
          TDEE Calculator | Calculate Your Total Daily Energy Expenditure
        </title>
        <meta
          name="description"
          content="Use our TDEE Calculator to estimate the total calories you burn each day based on your activity level, helping you plan diet and fitness goals effectively."
        />
        <meta
          name="keywords"
          content="TDEE calculator, total daily energy expenditure, calorie calculator, daily calorie needs, fitness calculator, metabolism calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/tdee-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TDEE Calculator | Calculate Your Total Daily Energy Expenditure"
        />
        <meta
          property="og:description"
          content="Estimate your total daily calories burned using the TDEE Calculator. Perfect for planning diets, fitness routines, and weight management."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/tdee-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "TDEE Calculator",
      "url": "https://www.unitedcalculator.net/health/tdee-calculator",
      "description": "Calculate your Total Daily Energy Expenditure (TDEE) based on your basal metabolic rate and activity level to help with diet and fitness planning.",
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
          "name": "What is TDEE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TDEE stands for Total Daily Energy Expenditure, which is the total calories you burn in a day including all activities."
          }
        },
        {
          "@type": "Question",
          "name": "How is TDEE calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TDEE is calculated by multiplying your basal metabolic rate (BMR) by an activity factor based on your lifestyle and exercise habits."
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
          "name": "TDEE Calculator",
          "item": "https://www.unitedcalculator.net/health/tdee-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly active (1–3 days/week)</option>
              <option value="1.55">Moderately active (3–5 days/week)</option>
              <option value="1.725">Very active (6–7 days/week)</option>
              <option value="1.9">
                Super active (twice/day or physical job)
              </option>
            </select>
          </div>
        </div>

        {result && (
          <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              TDEE Result
            </h2>
            <p className="text-gray-800">
              🔥 <strong>Your TDEE:</strong> {result} kcal/day
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default TDEECalculator;
