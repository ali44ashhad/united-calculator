import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BMICalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [height, setHeight] = useState("170"); // in cm

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (isNaN(w) || isNaN(h) || h === 0) return null;

    const bmi = w / (h * h);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) category = "Normal weight";
    else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
    else category = "Obese";

    return {
      bmi: bmi.toFixed(2),
      category,
    };
  };

  const result = calculateBMI();

  return (
    <>
      <Helmet>
        <title>BMI Calculator | Calculate Body Mass Index Instantly</title>
        <meta
          name="description"
          content="Use our BMI Calculator to find your Body Mass Index based on your height and weight. Determine your BMI category—underweight, normal, overweight, or obese—in seconds."
        />
        <meta
          name="keywords"
          content="bmi calculator, body mass index calculator, health calculator, weight calculator, check bmi, height weight calculator, underweight bmi, overweight bmi, obesity calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/bmi-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BMI Calculator | Calculate Body Mass Index Instantly"
        />
        <meta
          property="og:description"
          content="Calculate your BMI using height and weight to know if you are underweight, healthy, overweight, or obese. Fast and accurate Body Mass Index Calculator."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/bmi-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BMI Calculator",
      "url": "https://unitedcalculator.net/health/bmi-calculator",
      "description": "Find your Body Mass Index (BMI) using our accurate BMI Calculator. Enter your height and weight to instantly get your BMI score and understand your health category.",
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
          "name": "What is BMI (Body Mass Index)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMI stands for Body Mass Index. It is a number calculated from your height and weight that helps determine your weight category, such as underweight, normal, overweight, or obese."
          }
        },
        {
          "@type": "Question",
          "name": "How is BMI calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMI is calculated using the formula: weight (kg) divided by height (m) squared. For example, BMI = weight / (height × height)."
          }
        },
        {
          "@type": "Question",
          "name": "Is BMI an accurate measure of health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMI is a useful general indicator but does not take muscle mass, bone density, or body composition into account. Consult a healthcare professional for a full health assessment."
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
          "name": "BMI Calculator",
          "item": "https://unitedcalculator.net/health/bmi-calculator"
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
              placeholder="e.g. 170"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              BMI Result Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Your BMI:</span>
                <span className="text-blue-600 font-medium">{result.bmi}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Category:</span>
                <span className="text-green-600">{result.category}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BMICalculator;
