import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ProteinCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");

  const getProteinIntake = () => {
    const w = parseFloat(weight);
    if (!w) return null;

    let multiplier = 0.8;
    switch (activityLevel) {
      case "light":
        multiplier = 1.0;
        break;
      case "moderate":
        multiplier = 1.3;
        break;
      case "active":
        multiplier = 1.6;
        break;
      case "athlete":
        multiplier = 1.8;
        break;
      default:
        multiplier = 0.8;
    }

    return (w * multiplier).toFixed(1);
  };

  const protein = getProteinIntake();

  return (
    <>
      <Helmet>
        <title>Protein Calculator | Calculate Your Daily Protein Needs</title>
        <meta
          name="description"
          content="Use our Protein Calculator to determine your ideal daily protein intake based on your weight, activity level, and fitness goals."
        />
        <meta
          name="keywords"
          content="protein calculator, daily protein intake, protein needs calculator, fitness protein calculator, nutrition calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/protein-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Protein Calculator | Calculate Your Daily Protein Needs"
        />
        <meta
          property="og:description"
          content="Calculate your daily protein needs based on your weight, activity level, and fitness goals with our Protein Calculator."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/protein-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Protein Calculator",
      "url": "https://unitedcalculator.net/health/protein-calculator",
      "description": "Determine your ideal daily protein intake based on your weight, activity level, and goals using the Protein Calculator. Perfect for athletes and fitness enthusiasts.",
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
          "name": "What is a Protein Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Protein Calculator helps you determine how much protein you need daily based on your body weight, activity level, and fitness goals."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use the Protein Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter your weight, activity level, and goals into the calculator to get your recommended daily protein intake."
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
          "name": "Protein Calculator",
          "item": "https://unitedcalculator.net/health/protein-calculator"
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
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="sedentary">
                Sedentary (little to no exercise)
              </option>
              <option value="light">
                Lightly active (light exercise 1–3 days/week)
              </option>
              <option value="moderate">
                Moderately active (moderate exercise 3–5 days/week)
              </option>
              <option value="active">
                Active (hard exercise 6–7 days/week)
              </option>
              <option value="athlete">
                Athlete (twice/day or intense training)
              </option>
            </select>
          </div>
        </div>

        {protein && (
          <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Recommended Protein Intake
            </h2>
            <p className="text-gray-800">
              You should consume approximately{" "}
              <span className="font-semibold">{protein} grams</span> of protein
              per day based on your activity level.
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default ProteinCalculator;
