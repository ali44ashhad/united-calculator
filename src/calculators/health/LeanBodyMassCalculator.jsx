import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const LeanBodyMassCalculator = () => {
  const [weight, setWeight] = useState("70"); // kg
  const [height, setHeight] = useState("170"); // cm
  const [gender, setGender] = useState("male");

  const calculateLBM = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h)) return null;

    let lbm;
    if (gender === "male") {
      lbm = 0.407 * w + 0.267 * h - 19.2;
    } else {
      lbm = 0.252 * w + 0.473 * h - 48.3;
    }

    return lbm.toFixed(2);
  };

  const result = calculateLBM();

  return (
    <>
      <Helmet>
        <title>
          Lean Body Mass Calculator | Calculate LBM Using Height, Weight &
          Gender
        </title>
        <meta
          name="description"
          content="Use our Lean Body Mass Calculator to estimate your LBM based on height, weight, gender, and body fat percentage. Ideal for fitness and health tracking."
        />
        <meta
          name="keywords"
          content="lean body mass calculator, lbm calculator, body composition calculator, fat free mass calculator, fitness calculator, muscle mass calculator, health calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/lean-body-mass-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Lean Body Mass Calculator | Calculate LBM Using Height, Weight & Gender"
        />
        <meta
          property="og:description"
          content="Estimate your lean body mass (LBM) with our calculator using height, weight, gender, and optional body fat data. Track your fitness and muscle-building progress."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/lean-body-mass-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Lean Body Mass Calculator",
      "url": "https://unitedcalculator.net/health/lean-body-mass-calculator",
      "description": "This Lean Body Mass Calculator helps you find your fat-free body weight using your height, weight, and gender. You can also use your body fat percentage for more accuracy. It's great for tracking progress in muscle gain or fat loss.",
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
          "name": "What is Lean Body Mass (LBM)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lean Body Mass is the total weight of your body minus the fat. It includes muscles, bones, water, and organs. Knowing your LBM helps in setting accurate fitness goals."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate my Lean Body Mass?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can calculate LBM using formulas like the Boer, James, or Hume equations, which take into account your height, weight, and gender. Some versions also use body fat percentage for more accuracy."
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
          "name": "Lean Body Mass Calculator",
          "item": "https://unitedcalculator.net/health/lean-body-mass-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Weight (in kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (in cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
              Lean Body Mass
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

export default LeanBodyMassCalculator;
