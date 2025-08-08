import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const OverweightCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Calculate BMI
  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;
    const bmi = w / (h * h);
    return bmi.toFixed(1);
  };

  const bmi = calculateBMI();

  // Interpret BMI result
  const interpretBMI = (bmiVal) => {
    if (!bmiVal) return "";
    const val = parseFloat(bmiVal);
    if (val < 18.5) return "Underweight";
    else if (val >= 18.5 && val < 25) return "Normal weight";
    else if (val >= 25 && val < 30) return "Overweight";
    else return "Obese";
  };

  const interpretation = interpretBMI(bmi);

  return (
    <>
      <Helmet>
        <title>
          Overweight Calculator | Check If You Are Overweight Based on BMI
        </title>
        <meta
          name="description"
          content="Use our Overweight Calculator to find out if you are overweight based on your Body Mass Index (BMI). Enter your weight and height to get personalized results."
        />
        <meta
          name="keywords"
          content="overweight calculator, BMI calculator, body mass index, weight calculator, health calculator, fitness calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/overweight-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Overweight Calculator | Check If You Are Overweight Based on BMI"
        />
        <meta
          property="og:description"
          content="Calculate your BMI and find out if you are overweight with our easy-to-use Overweight Calculator. Enter your weight and height to check your health status."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/overweight-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Overweight Calculator",
            "url": "https://unitedcalculator.net/health/overweight-calculator",
            "description": "Calculate your BMI and find out if you are overweight using this Overweight Calculator based on weight and height inputs.",
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
                "name": "What is an Overweight Calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An Overweight Calculator uses your BMI to determine if you are underweight, normal weight, overweight, or obese based on your weight and height."
                }
              },
              {
                "@type": "Question",
                "name": "How do I use the Overweight Calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply enter your weight in kilograms and height in centimeters, then the calculator will display your BMI and weight category."
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
                "name": "Overweight Calculator",
                "item": "https://unitedcalculator.net/health/overweight-calculator"
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md max-w-md">
        <div className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g., 70"
              min="1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g., 170"
              min="1"
            />
          </div>

          {bmi && (
            <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Your BMI Result
              </h2>
              <div className="text-gray-700 space-y-1 text-lg">
                <div>BMI: {bmi}</div>
                <div>
                  Status: <strong>{interpretation}</strong>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default OverweightCalculator;
