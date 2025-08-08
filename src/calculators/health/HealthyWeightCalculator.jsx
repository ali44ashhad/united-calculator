import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const HealthyWeightCalculator = () => {
  const [height, setHeight] = useState("170"); // in cm

  const calculateHealthyWeight = () => {
    const h = parseFloat(height);
    if (isNaN(h) || h <= 0) return null;

    const heightInMeters = h / 100;
    const minWeight = 18.5 * heightInMeters * heightInMeters;
    const maxWeight = 24.9 * heightInMeters * heightInMeters;

    return {
      min: minWeight.toFixed(1),
      max: maxWeight.toFixed(1),
    };
  };

  const result = calculateHealthyWeight();

  return (
    <>
      <Helmet>
        <title>
          Healthy Weight Calculator | Ideal Body Weight by Height & Age
        </title>
        <meta
          name="description"
          content="Use our Healthy Weight Calculator to determine your ideal body weight based on height, age, and gender. Maintain a healthy lifestyle by understanding your optimal weight range."
        />
        <meta
          name="keywords"
          content="healthy weight calculator, ideal body weight, weight by height calculator, healthy bmi calculator, weight chart, healthy weight range, fitness calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/healthy-weight-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Healthy Weight Calculator | Ideal Body Weight by Height & Age"
        />
        <meta
          property="og:description"
          content="Find your ideal body weight using our Healthy Weight Calculator. Input your height, age, and gender to determine a healthy weight range and support your fitness goals."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/healthy-weight-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Healthy Weight Calculator",
      "url": "https://unitedcalculator.net/health/healthy-weight-calculator",
      "description": "Determine your ideal body weight using the Healthy Weight Calculator. Based on your height, gender, and age, it helps you find a healthy range to maintain physical well-being and prevent obesity or underweight conditions.",
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
          "name": "How do I calculate a healthy weight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A healthy weight is typically determined by your height, age, gender, and sometimes body frame. This calculator uses standard formulas like Devine or Robinson to estimate your ideal weight range."
          }
        },
        {
          "@type": "Question",
          "name": "Is BMI the same as healthy weight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMI and healthy weight are related but not identical. BMI is a broader measure based on weight and height, while healthy weight calculators may also consider age and gender for more personalized results."
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
          "name": "Healthy Weight Calculator",
          "item": "https://unitedcalculator.net/health/healthy-weight-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Height (in cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Healthy Weight Range
            </h2>
            <div className="text-lg font-semibold text-gray-700">
              {result.min} kg – {result.max} kg
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default HealthyWeightCalculator;
