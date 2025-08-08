import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AnorexicBMICalculator = () => {
  const [weight, setWeight] = useState("45"); // kg
  const [height, setHeight] = useState("160"); // cm

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (isNaN(w) || isNaN(h) || h === 0) return null;

    const bmi = w / (h * h);

    let category = "";
    let warning = "";

    if (bmi < 16) {
      category = "Severely Underweight (Anorexic Range)";
      warning = "⚠️ Warning: BMI indicates severe underweight/anorexia risk.";
    } else if (bmi >= 16 && bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    return {
      bmi: bmi.toFixed(2),
      category,
      warning,
    };
  };

  const result = calculateBMI();

  return (
    <>
      <Helmet>
        <title>Anorexic BMI Calculator | Check for Anorexia Risk by BMI</title>
        <meta
          name="description"
          content="Use our Anorexic BMI Calculator to determine if your body mass index falls into the anorexic range. Instantly check BMI health status and understand your body weight classification."
        />
        <meta
          name="keywords"
          content="anorexic bmi calculator, bmi calculator for anorexia, underweight bmi calculator, health risk calculator, eating disorder calculator, body mass index tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/anorexic-bmi-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Anorexic BMI Calculator | Check for Anorexia Risk by BMI"
        />
        <meta
          property="og:description"
          content="Determine if your BMI falls in the anorexic range using our accurate Anorexic BMI Calculator. Know your health risk instantly based on weight and height."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/anorexic-bmi-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Anorexic BMI Calculator",
      "url": "https://unitedcalculator.net/health/anorexic-bmi-calculator",
      "description": "Use the Anorexic BMI Calculator to assess whether your Body Mass Index (BMI) indicates an anorexic range. Helpful for identifying eating disorder-related risks and understanding body weight classification.",
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
          "name": "What is an anorexic BMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An anorexic BMI typically falls below 17.5, indicating a severely underweight status that may be associated with anorexia nervosa or other eating disorders."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the Anorexic BMI Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Anorexic BMI Calculator provides a reliable indication of your BMI status based on your height and weight, but it is not a medical diagnosis. Always consult a healthcare provider for professional assessment."
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
          "name": "Anorexic BMI Calculator",
          "item": "https://unitedcalculator.net/health/anorexic-bmi-calculator"
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
              placeholder="e.g. 45"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 160"
              min="0"
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
                <span
                  className={`${
                    result.warning ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {result.category}
                </span>
              </div>
              {result.warning && (
                <p className="mt-3 text-red-700 font-semibold">
                  {result.warning}
                </p>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AnorexicBMICalculator;
